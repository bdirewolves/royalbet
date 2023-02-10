import React, { useState , useEffect, useRef } from 'react';
import styled from 'styled-components';

interface IProps {
    title: string;
    path: string;
    param?: string;
}

export default function Iframe({path, title, param}: IProps){

    const [showIframe, setShowIframe] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setShowIframe(true);
                observer.disconnect();
            }
        });
        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }
        return () => {
            observer.disconnect();
        };
    }, []);
    
    return  <DivIfr ref={sectionRef} id='sectionRef'>
            {
                showIframe && (
                    <Ifr loading='lazy'
                    src={path} 
                    title={title} 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in- picture; web-share" 
                    allowFullScreen 
                />
                )
            }
                
            </DivIfr>
            
}

const Ifr = styled.iframe`
    width: 100%;
    height: 100%;
`
const DivIfr = styled.div`
    width: 100%;
    height: 100%;
`