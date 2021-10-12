import { useContext } from "react";
import { IndexComponentsContext } from "../contexts/IndexComponents";

function useIndexComponents() {
    return {...useContext(IndexComponentsContext)}
}

export default useIndexComponents;
