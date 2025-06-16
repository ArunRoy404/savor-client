import { useContext } from "react";
import DatabaseContext from "../contexts/DatabaseContext";

const useDatabaseContext = () => {
    const useDatabaseContext = useContext(DatabaseContext)
    return useDatabaseContext
};

export default useDatabaseContext;