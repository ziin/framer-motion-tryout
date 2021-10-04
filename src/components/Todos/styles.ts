import { styled } from '../../../styles'

export const Container = styled('div', {
  width: '90%',
  display: 'flex',
  color: '$background',
  borderRadius: '$4',
  minHeight: '50%',
  height: 'auto',
  maxHeight: '80%',
  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',

  '@sm': {
    width: '600px',
  },

  '& ul': {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
})
