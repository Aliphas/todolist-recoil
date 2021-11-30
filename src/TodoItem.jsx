import { useRecoilState } from "recoil";
import todoListState, { activeIndex } from './state'

const TodoItem = ({item}) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [editableIndex, setEditableIndex] = useRecoilState(activeIndex);
  const index = todoList.findIndex((listItem) => listItem === item);
  
  const editItemText = ({target: {value}}) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value
    })
    setTodoList(newList)
  }
  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete
    })
    setTodoList(newList)
  }
  const toggleEditable = (index) => {
    setEditableIndex(index)
  }
  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index)
    setTodoList(newList)
  }
  
  return (
    <div>
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      {editableIndex === index? 
      <>
        <input type="text" value={item.text} onChange={editItemText}/>
        <button type='submit' onClick={() => toggleEditable(-1)}>Confirm</button>
      </>
      :<>
        <div style={{display:'inline-block'}} onClick={() => toggleEditable(index)}>{item.text}</div>
        <button onClick={deleteItem}>X</button>
      </>
    }
    </div> 
  )
}

function replaceItemAtIndex (arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)]
}
function removeItemAtIndex (arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)]
}

export default TodoItem