import DatabaseContext from "../contexts/DatabaseContext";
import axios  from 'axios'

const DatabaseProvider = ({ children }) => {

    const getFoods = () =>{
        return axios.get('https://savor-server-avhf6x8eq-arun-roys-projects.vercel.app/foods')
    }

    const getTopFoods = () =>{
        return axios.get('https://savor-server-avhf6x8eq-arun-roys-projects.vercel.app/top-foods')
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