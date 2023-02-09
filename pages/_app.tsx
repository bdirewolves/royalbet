import Layouts from '@/layouts'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import 'aos/dist/aos.css';

export default function App({ Component, pageProps }: AppProps) {
  
  useEffect(() => {
    if(typeof window !== 'undefined') {
      const loader = document.getElementById('globalLoader')
      if(loader) loader.style.display = 'none'
    }
  }, [])

  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  )
}
