import TodoList from './TodoList'
import SideMenu from './SideMenu'
import SideMenuOpenBtn from './SideMenuOpenBtn'

import { Container } from './styles'
import type { Todo, TodoCategory } from '../../../pages/todos'
import { useState } from 'react'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'

const Todos = ({ todos, categories }: Props) => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <Container>
      <AnimateSharedLayout>
        <AnimatePresence initial={false}>
          {isOpen && <SideMenu list={categories} />}
        </AnimatePresence>
        <SideMenuOpenBtn onClick={() => setIsOpen((value) => !value)} />
        <TodoList todos={todos} />
      </AnimateSharedLayout>
    </Container>
  )
}

type Props = {
  todos?: Todo[]
  categories?: TodoCategory[]
}

export default Todos
