import { styled } from '../../../styles'

const Button = styled('button', {
  appearance: 'none',
  border: 'none',
  padding: '0px',
  width: '$8',
  height: '$40',
  borderRadius: '$4',
  background: '#e2e8f0',
  marginLeft: '$8',
  cursor: 'pointer',

  '&:focus': {
    outline: '2px auto -webkit-focus-ring-color',
    background: '#e2e8f0',
  },
})

const Container = styled('div', {
  width: '48px',
  minHeight: '100%',
  background: 'white',
  display: 'flex',
  alignItems: 'center',
  borderTopLeftRadius: '$4',
  borderBottomLeftRadius: '$4',
})

const SideMenuOpenBtn = ({ onClick }: Props) => {
  return (
    <Container>
      <Button onClick={onClick} />
    </Container>
  )
}

type Props = {
  onClick?: () => void
}

export default SideMenuOpenBtn
