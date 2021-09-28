import type { NextPage } from 'next'
import Head from 'next/head'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { styled } from '../styles'

const Page = styled('div', {
  width: '100vw',
  height: '300vh',
  background: 'linear-gradient(180deg, #40f, #05f)',
})

const Wrapper = styled('div', {
  width: '150px',
  height: '150px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translateX(-50%) translateY(-50%)',
})

const Container = styled(motion.div, {
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  background: 'rgba(255, 255, 255, 0.2)',
  borderRadius: '30px',
})

const Item = styled(motion.div, {
  width: 'inherit',
  height: 'inherit',
  background: 'white',
  transformOrigin: '50% 100%',
})

const ScrollExample: NextPage = () => {
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 2], [0.2, 1])

  return (
    <Page>
      <Head>
        <title>Scroll Animation</title>
        <meta name="description" content="Scroll Animation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Wrapper>
          <Container
            style={{
              scale,
            }}
          >
            <Item
              style={{
                scaleY: scrollYProgress,
              }}
            />
          </Container>
        </Wrapper>
      </main>
    </Page>
  )
}

export default ScrollExample
