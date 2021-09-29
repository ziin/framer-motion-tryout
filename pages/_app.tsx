import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import { globalStyles } from '../styles'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      {globalStyles()}
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  )
}
export default MyApp
