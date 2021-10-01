import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import { globalStyles } from '../styles'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    // initial: false
    // Don't repeat animation when refreshing the page, only when route change
    <AnimatePresence exitBeforeEnter initial={false}>
      {globalStyles()}
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  )
}
export default MyApp
