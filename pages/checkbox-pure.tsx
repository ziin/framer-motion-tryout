import type { NextPage } from 'next'
import Head from 'next/head'
import { styled } from '../styles'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Page = styled(motion.div, {
  width: '100vw',
  height: '100vh',
  background: 'linear-gradient(180deg, #40f, #05f)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const Container = styled('div', {
  width: '200px',
  height: '100px',
  background: '$text',
  borderRadius: '8px',

  variants: {
    isOn: {
      true: {
        [`> div`]: {
          transform: 'translate3d(100%, 0, 0)',
          background: 'green',
        },
      },
    },
  },
})

const Box = styled('div', {
  height: 'inherit',
  width: '50%',
  background: 'red',
  borderRadius: 'inherit',
  transition: 'all 0.15s ease',
})

const CheckBoxPure: NextPage = () => {
  const [isOn, setIsOn] = useState(false)

  return (
    <Page
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Head>
        <title>Checkbox Pure</title>
        <meta name="description" content="Checkbox Pure" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container isOn={isOn} onClick={() => setIsOn((isOn) => !isOn)}>
          <Box />
        </Container>
      </main>
    </Page>
  )
}

export default CheckBoxPure
