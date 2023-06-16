import {TypedUseSelectorHook, useSelector} from "react-redux";
import {rootState} from "../Store/Store";

export  const useAppSelector: TypedUseSelectorHook<rootState> = useSelector
