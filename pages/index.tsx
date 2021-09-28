import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { styled } from '../styles'

const Main = styled('main', {
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

      <Main>
        <h1>Examples</h1>
        <Link href="/scroll-example">Scroll Example</Link>
      </Main>
    </>
  )
}

export default Home
