import { uniqueId } from "lodash"
import { useState } from "react"
import { useSetRecoilState } from 'recoil'
import todoListState from './state'

const TodoItemCreactor = () => {
    const [inputValue, setInputValue] = useState('')
    const setTodoList = useSetRecoilState(todoListState);
  
    const onChange = ({target: {value}}) => {
      setInputValue(value)
    }
    const addItem = () => {
      setTodoList((oldTodoList) => [
        ...oldTodoList,
        {
          id: uniqueId(),
          text: inputValue,
          isComplete: false,
        },
      ]);
      setInputValue('')
    }
  
    return (
      <>
        <input type="text" value={inputValue} onChange={onChange}/>
        <button onClick={addItem}>add</button>
      </> 
    )
}

export default TodoItemCreactor