import type { NextPage } from 'next'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { styled } from '../styles'
import { useState } from 'react'

const Page = styled('div', {
  width: '100vw',
  height: '100vh',
  background: 'linear-gradient(180deg, #40f, #05f)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const Container = styled(motion.div, {
  width: '200px',
  height: '100px',
  background: '$text',
  borderRadius: '8px',
  display: 'flex',

  variants: {
    isOn: {
      true: {
        justifyContent: 'end',
        [`> div`]: {
          background: 'green',
        },
      },
    },
  },
})

const Box = styled(motion.div, {
  height: 'inherit',
  width: '50%',
  background: 'red',
  borderRadius: 'inherit',
})

const Checkbox: NextPage = () => {
  const [isOn, setIsOn] = useState(false)

  return (
    <Page>
      <Head>
        <title>Playground</title>
        <meta name="description" content="Playground" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container isOn={isOn} onClick={() => setIsOn((isOn) => !isOn)}>
          <Box
            layout
            transition={{ type: 'spring', stiffness: 700, damping: 30 }}
          />
        </Container>
      </main>
    </Page>
  )
}

export default Checkbox
