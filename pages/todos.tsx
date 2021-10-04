import TodosComponent from '../src/components/Todos'
import { styled } from '../styles'

const PageLayout = styled('div', {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#e2e8f0',
})

export interface Todo {
  id: number
  title: string
}

export interface TodoCategory {
  id: number
  name: string
}

const defaultTodos: Todo[] = [
  { id: 0, title: 'Workout' },
  { id: 1, title: 'Take out the trash' },
  { id: 2, title: 'Buy dinner' },
  { id: 3, title: 'Cleaning out my closet' },
  { id: 4, title: 'Go to Work' },
]

const defaultCategories: TodoCategory[] = [
  { id: 0, name: 'All' },
  { id: 1, name: 'Home' },
  { id: 2, name: 'Work' },
]

const Todos = () => {
  return (
    <PageLayout>
      <TodosComponent categories={defaultCategories} todos={defaultTodos} />
    </PageLayout>
  )
}

export default Todos
