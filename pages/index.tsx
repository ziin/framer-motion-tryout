import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { styled } from '../styles'

const Main = styled(motion.main, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
})

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Framer Motion: Examples</title>
        <meta name="description" content="Framer Motion Examples" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        initial="initial"
        animate="animate"
      >
        <h1>Examples</h1>
        <Link href="/scroll-example">Scroll Example</Link>
        <Link href="/playground">Playground</Link>
        <Link href="/checkbox">Checkbox</Link>
        <Link href="/checkbox-pure">Checkbox Pure</Link>
        <Link href="/page-transition">Page Transition</Link>
      </Main>
    </>
  )
}

export default Home
