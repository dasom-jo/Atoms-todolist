import { useRecoilState } from "recoil";
import { todoListFileState } from "../recoil/atoms";

const TodoListFilters = () => {
    const [filter, setFilter] = useRecoilState(todoListFileState);

    const updateFilter = ({target:{value}})=>{
        setFilter(value)
    }
    return (
        <div>
            Filter:
            <select value={filter} onChange={updateFilter}>
                <option value="Show All">All</option>
                <option value="Show Completed">completed</option>
                <option value="Show Uncompleted">uncompleted</option>
            </select>
        </div> );
}

export default TodoListFilters;