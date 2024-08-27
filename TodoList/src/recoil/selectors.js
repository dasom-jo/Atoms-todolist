import { selector } from "recoil";
import { todoListFileState, todoListState } from "./atoms";

export const filteredTodoListState = selector({
    key:"filteredTodoListState",
    get:({get})=>{
        const filter = get(todoListFileState);
        const list = get(todoListState)

        switch(filter){
            case 'Show Completed':
                return list.filter((item)=> item.isComplete);
            case 'Show Uncompleted':
                return list.filter((item)=>!item.isComplete);
            default:
                return list;
        }
    }
})
export const todoListStatsState = selector({
    key:'todoListStatsState',
    get:({get})=>{
        const todoList = get(todoListState);
        const totalNum = todoList.length;
        const totalComPletedNum = todoList.filter((item)=>item.isComplete).length;
        const totalUncompletedNum = totalNum - totalComPletedNum;
        const percentCompleted = totalNum === 0?0 : totalComPletedNum / totalNum;

        return {
            totalNum,
            totalComPletedNum,
            totalUncompletedNum,
            percentCompleted,
        }
    }
})

