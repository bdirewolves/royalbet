import Layouts from "@/layouts";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import AOS from "aos"
import "aos/dist/aos.css";
import axios from "axios";
import moment from "moment";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

interface IUserAccess {
  tokenType: string;
  accessToken: string;
  playerSession: string;
  userRole: string;
}

interface IProfile {
  id: number;
  telnum: string;
  localtime: string;
  editor: string;
  status: string;
  createdAt: string;
  banknum: string;
  banksCode: string;
  name: string;
  email: string;
  walletId: string;
  sessions: string;
  currency: string;
  rolescode: string;
  agentsCode: string;
  bankname: string;
  newusers: string;
  regisfrom: string;
  traceid: string;
  wallsum: number;
}

const AuthContext = createContext<any>(null);

export default function App({ Component, pageProps }: AppProps) {
  const [userAccess, setUserAccess] = useState<IUserAccess | null>(null);
  const [userData, setUserData] = useState<IProfile | null>(null);
  const [order, setOrder] = useState<any>(null);
  const [count, setCount] = useState<moment.Duration>();
  const access =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("access") as string)
      : null;
  const telnum =
    typeof window !== "undefined"
      ? (localStorage.getItem("telnum") as string)
      : null;

  const fetchCheckOrder = async () => {
    var waiting: any;
    var timing = 0;
    try {
      if (order) {
        console.log(`Loop is starting...`);
        console.log(order);
        if (!waiting) {
          waiting = setInterval(async () => {
            timing += 1000;
            const currentTime = moment().valueOf();
            const createdTime = moment(order.createdAt).valueOf();
            const countTime = 2 * 60 * 1000 + 2000;
            const diffTime = countTime - (currentTime - createdTime);
            const duration = moment.duration(diffTime, "milliseconds");
            setCount(duration);

            if (timing >= 5000) {
              const checking = await axios
                .post(
                  `${process.env.API_URL}/userdeposit/deposit/check-order`,
                  {
                    txnid: Math.floor(
                      10000000000000000000 +
                        Math.random() * 90000000000000000000
                    ).toString(),
                    userid: Number(telnum),
                  },
                  {
                    headers: {
                      Authorization: `Bearer ${access.accessToken}`,
                    },
                  }
                )
                .then((res) => res.data.data);

              console.log(`Checking...`, checking);

              timing = 0;

              if (moment().diff(moment(order.createdAt), "minutes") >= 2) {
                console.log("Time out.");
                setOrder(null);
                clearInterval(waiting);
              } else if (checking) {
                console.log(checking);
                clearInterval(waiting);
              }
            }
          }, 1000);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const GetOrder = async () => {
    try {
      const order = await axios
        .post(
          `${process.env.API_URL}/userdeposit/deposit/get-order`,
          {
            userid: telnum,
          },
          {
            headers: {
              Authorization: `Bearer ${access.accessToken}`,
            },
          }
        )
        .then((res) => res.data.data);
      setOrder(order);
      if (!order) {
        setOrder(order);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkAuth = async () => {
    if (access) {
      axios.post(`${process.env.API_URL}/gfservice/transfer-out`, {
        player_name: telnum,
      });
      const profile = await axios
        .get(`${process.env.API_URL}/users/${telnum}`, {
          headers: {
            Authorization: `Bearer ${access.accessToken}`,
          },
        })
        .then((res) => {
          return res.data[0];
        })
        .catch((err) => {
          if (err.response && err.response.status === 401) {
            return err.response.data;
          }
        });

      if (typeof profile?.wallsum === "number") {
        setUserAccess(access);
        setUserData(profile);
      } else {
        setUserAccess(null);
        localStorage.removeItem("access");
        localStorage.removeItem("telnum");
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      GetOrder();
      checkAuth();
      const loader = document.getElementById("globalLoader");
      if (loader) {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

        /*
            visibility: visible;
            opacity: 1;
            transition: visibility 0.2s, opacity 0.2s linear;
        */
      }
    }
    AOS.init()
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!userData && userAccess) checkAuth();
    }
  }, [userAccess]);

  useEffect(() => {
    fetchCheckOrder();
  }, [order]);

  return (
    <AuthContext.Provider
      value={{
        userAccess,
        setUserAccess,
        userData,
        telnum,
        order,
        setOrder,
        count,
      }}
    >
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </AuthContext.Provider>
  );
}

export { AuthContext };
