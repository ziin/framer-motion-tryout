import { motion } from 'framer-motion'
import { styled } from '../../../../styles'

export const Container = styled('div', {
  width: '100%',
  minWidth: '300px',
  background: 'white',
  borderTopRightRadius: '$4',
  borderBottomRightRadius: '$4',
  cursor: 'default',

  padding: '$40 $40 $40 $12',
})
export const Ul = styled('ul', {
  '& li:not(:last-child)': {
    borderBottom: '1px solid $text',
  },
})
export const Li = styled(motion.li, {
  height: '$40',
  display: 'flex',
  alignItems: 'center',
})
export const Header = styled('div', {
  paddingBottom: '$24',
})
export const Title = styled('h1', {
  lineHeight: 0,
})
