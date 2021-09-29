import type { NextPage } from 'next'
import Head from 'next/head'
import {
  motion,
  useTransform,
  useMotionValue,
  useViewportScroll,
  useAnimation,
} from 'framer-motion'
import { styled } from '../styles'

const Page = styled(motion.div, {
  width: '100vw',
  height: '100vh',
  background: 'linear-gradient(180deg, #40f, #05f)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const Container = styled(motion.div, {
  width: '100px',
  height: '100px',
  background: '$text',
  borderRadius: '8px',
})

const Playground: NextPage = () => {
  const x = useMotionValue(0)
  const opacity = useTransform(x, [-200, 0, 200], [0.1, 1, 0.1])
  const { scrollYProgress } = useViewportScroll()
  const controls = useAnimation()

  function onHover() {
    controls.start({
      x: '200px',
      rotate: '270deg',
      backgroundColor: '#f00',
      transition: { duration: 3 },
    })
  }

  return (
    <Page
      exit={{ x: '-100%', opacity: 0, transition: { duration: 0.5 } }}
      // initial="initial"
      // animate="animate"
      // transition={{ duration: 1 }}
    >
      <Head>
        <title>Playground</title>
        <meta name="description" content="Playground" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container onHoverStart={onHover} animate={controls}></Container>
      </main>
    </Page>
  )
}

export default Playground
