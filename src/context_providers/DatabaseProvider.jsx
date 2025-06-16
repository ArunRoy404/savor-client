import DatabaseContext from "../contexts/DatabaseContext";
import axios  from 'axios'

const DatabaseProvider = ({ children }) => {

    const getFoods = () =>{
        return axios.get('http://localhost:3000/foods')
    }

    const getTopFoods = () =>{
        return axios.get('http://localhost:3000/top-foods')
    }

    const database = {
        getFoods,
        getTopFoods
    }

    return (
        <DatabaseContext value={database}>
            {children}
        </DatabaseContext>
    )
};

export default DatabaseProvider;