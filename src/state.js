import { atom, selector } from "recoil";

const todoListState = atom({
  key: 'todoListState',
  default: [],
});


export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'All',
});

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({get}) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch(filter) {
      case 'Completed':
        return list.filter((item) => item.isComplete);
      case 'Uncompleted':
        return list.filter((item) => !item.isComplete);
      default:
        return list
    }
  } 
})

export default todoListState;