import './App.css';
import TodoList from './TodoList'
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <div>
      <RecoilRoot>
        <TodoList />
      </RecoilRoot>
    </div>
  );
}

export default App;
