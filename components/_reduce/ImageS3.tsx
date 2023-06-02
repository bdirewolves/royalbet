import { useEffect, useState } from "react";
import AWS from "aws-sdk"

AWS.config.update({
    signatureVersion: 'v4',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

const s3 = new AWS.S3();

export default function ImageS3({ game_code, provider }: { game_code: string, provider: string }) {
    const [ picture, setPicture ] = useState("")

    const handleImageError = () => {
        setPicture(`https://placehold.co/210x150/black/white?text=${provider}`);
    };

    const fetch = async () => {
        try {
            const params = {
                Bucket: "company.x",
                Key: `${provider}/${game_code}.png`,
                Expires: 60,
            }
            await s3.getSignedUrlPromise('getObject', params)
            .then((res) => {
                console.log(res)
                setPicture(res)
            })
            .catch(() => {
                setPicture(`https://placehold.co/210x150/black/white?text=${provider}`)
            })
            
        } catch (error) {
            setPicture(`https://placehold.co/210x150/black/white?text=${provider}`)
        }
    }

    useEffect(() => {
        fetch()
    }, [])
    return (
        <>
            {
                game_code ?
                    <img 
                        loading="lazy" 
                        style={{ width: "100%", height: "100%" }} 
                        src={picture} 
                        onError={handleImageError}
                    />
                :
                    <img 
                        loading="lazy" 
                        style={{ width: "100%", height: "100%" }} 
                        src={picture} 
                        onError={handleImageError}
                    />
            }
        </>
    )
}