import { AnimatePresence } from 'framer-motion'
import { Todo } from '../../../../pages/todos'
import { Ul, Container, Header, Title, Li } from './styles'

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <Container>
      <Header>
        <Title>Todos</Title>
      </Header>
      <Ul>
        <AnimatePresence>
          {todos?.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </AnimatePresence>
      </Ul>
    </Container>
  )
}

const TodoItem = ({ todo }: TodoItemProps) => (
  <Li
    variants={{
      hidden: (i) => ({
        opacity: 0,
        y: -40 * i,
      }),
      visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.02,
        },
      }),
    }}
    initial="hidden"
    animate="visible"
    custom={todo.id}
  >
    {todo.title}
  </Li>
)

type TodoListProps = {
  todos?: Todo[]
}

type TodoItemProps = {
  todo: Todo
}

export default TodoList
