import { useRecoilState } from "recoil"
import todoListFilterState, { filteredTodoListState } from "./state"

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState)
  const updateFilter = ({target: {value}}) => {
    //setFilter(value);
    console.log(filter)
  }
  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Uncompleted">Uncompleted</option>
      </select>
    </>
  )
}

export default TodoListFilters