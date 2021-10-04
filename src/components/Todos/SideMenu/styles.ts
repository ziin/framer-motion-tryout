import { motion } from 'framer-motion'
import { styled } from '../../../../styles'

export const ListItem = styled('li', {
  height: '$40',
  display: 'flex',
  alignItems: 'center',
  padding: '0 $24',
  cursor: 'default',

  '&:hover': {
    color: '$text',
  },

  variants: {
    isActive: {
      true: {
        background: '#364152',
        color: '$text',
      },
    },
  },
})

export const Container = styled(motion.div, {
  background: '#27303f',
  color: '#97a6ba',
  fontSize: '$14',
  padding: '$40 0',
  borderTopLeftRadius: '$4',
  borderBottomLeftRadius: '$4',
})
