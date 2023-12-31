import { AppProps } from 'next/app'

import 'typeface-montserrat'
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
