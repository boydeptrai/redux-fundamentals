import { useSelector } from "react-redux"
import { useActions } from "./useActions";
import { increment,decrement,set } from "../store/action";
import { useMemo } from "react";

export const useCounter =() => {
    const count = useSelector((state) =>state.count);
    const actions = useActions({increment, decrement,set});

    return useMemo(() =>{
        return {count,...actions};
    },[count,actions]);
}