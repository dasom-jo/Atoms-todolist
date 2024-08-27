import { atom } from "recoil";

export const todoListState = atom({
    key:"todoListState",
    default:[],
})

export const  todoListFileState = atom({
    key:"todoListFilterState",
    default:"show All"
});