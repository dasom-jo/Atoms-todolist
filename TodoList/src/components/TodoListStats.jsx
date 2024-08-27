import { useRecoilValue } from "recoil";
import { todoListState } from "../recoil/atoms";
import { todoListStatsState } from "../recoil/selectors";

export function TodoListStats(){
    const {
        totalNum,
        totalComPletedNum,
        totalUncompletedNum,
        percentCompleted,
    } = useRecoilValue(todoListStatsState);

    const formattedPercentCompleted = Math.round(percentCompleted * 100)

    return (
        <ul>
            <li>Total items:{totalNum}</li>
            <li>Items completed: {totalComPletedNum}</li>
            <li>Items not completed: {totalUncompletedNum}</li>
            <li>Percent completed:{formattedPercentCompleted}</li>
        </ul>
    )
}