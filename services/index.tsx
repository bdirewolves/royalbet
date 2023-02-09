import { useRouter } from "next/router";
import { useEffect } from "react";
import { isMobile, isDesktop } from 'react-device-detect'

export default function CheckDevice(){
    const router = useRouter()
    return useEffect(() => {
        if(isDesktop){
            if(router.asPath.includes("/m")) {
              router.push(`/${router.asPath.slice(2)}`)
            }
          }else if(isMobile) {
            if(!router.asPath.includes("/m")){
              router.push(`/m${router.asPath}`)
            }
          }
    }, [])

}