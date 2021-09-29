import type { NextPage } from 'next'
import Head from 'next/head'
import { motion, Variants } from 'framer-motion'
import { styled } from '../styles'

const Page = styled(motion.div, {
  width: '100vw',
  height: '100vh',
  background: 'linear-gradient(180deg, #40f, #05f)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const Main = styled(motion.main, {
  display: 'flex',
  gap: '8px',
})

const Box = styled(motion.div, {
  width: '100px',
  height: '100px',
  background: '$text',
  borderRadius: '8px',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  userSelect: 'none',
})

const Text = styled(motion.h1, {
  color: '$background',
})

const easing = [0.6, -0.05, 0.01, 0.99]

const fadeInUp: Variants = {
  initial: { y: 80, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: easing } },
}

const textAnimation: Variants = {
  initial: { y: 40 },
  animate: { y: 0, transition: { delay: 0.2 } },
}

const PageTransition: NextPage = () => {
  return (
    <Page exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Head>
        <title>Playground</title>
        <meta name="description" content="Playground" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main
        variants={{
          animate: {
            transition: { staggerChildren: 0.05 },
          },
        }}
      >
        <Box
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Text variants={textAnimation}>A</Text>
        </Box>
        <Box variants={fadeInUp}>
          <Text variants={textAnimation}>A</Text>
        </Box>
        <Box variants={fadeInUp}>
          <Text variants={textAnimation}>A</Text>
        </Box>
        <Box variants={fadeInUp}>
          <Text variants={textAnimation}>A</Text>
        </Box>
        <Box variants={fadeInUp}>
          <Text variants={textAnimation}>A</Text>
        </Box>
      </Main>
    </Page>
  )
}

export default PageTransition
