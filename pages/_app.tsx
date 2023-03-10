import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { firebase, storage, authentication, firestore, functions } from '../public/services/firebase'
import UserContext from '../complements/components/GlobalContextComp/UserContext'


export default function Appyyo({ Component, pageProps }: AppProps) {
  return (
    <>
      <UserContext>
        <Component {...pageProps} />
      </UserContext>
    </>
  )
}
