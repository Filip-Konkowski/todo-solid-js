import logo from './logo.svg';
import styles from './App.module.css';
// 1. import `HopeProvider` component
import { Container, Heading, HopeProvider } from '@hope-ui/solid'
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';



function App() {
  return (
    <HopeProvider>
      <Container maxW="$xl" style={{"text-align": "center"}}>
        <Heading style={{"text-align": "center"}} size="6x1" level="1"/> Filip's todo list
        <TodoList />
      </Container>
    </HopeProvider>
  );
}

export default App;
