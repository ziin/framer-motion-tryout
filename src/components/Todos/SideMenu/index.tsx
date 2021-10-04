import { TodoCategory } from '../../../../pages/todos'
import { Container, ListItem } from './styles'

const SideMenu = ({ list }: SideMenuProps) => {
  const activeId = 0
  return (
    <Container
      animate={{ width: 300 }}
      initial={{ width: 0 }}
      exit={{ width: 0 }}
    >
      <ul>
        {list?.map((category) => (
          <SideMenuItem
            activeId={activeId}
            key={category.id}
            category={category}
          />
        ))}
      </ul>
    </Container>
  )
}

const SideMenuItem = ({ category, activeId }: SideMenuItemProps) => {
  return (
    <ListItem isActive={category.id === activeId}>{category.name}</ListItem>
  )
}

type SideMenuProps = {
  list?: TodoCategory[]
  activeId?: number
}

type SideMenuItemProps = {
  category: TodoCategory
  activeId: number
}

export default SideMenu
