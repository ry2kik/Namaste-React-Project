import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../Constants";

const useRestaurant = (id) => {
    const [restaurant, setRestaurent] = useState(null);

    useEffect(() => {
        getRestaurentInfo();
    }, []);

    async function getRestaurentInfo() {
        const restaurentInfo = await fetch(FETCH_MENU_URL + id);
        const json = await restaurentInfo.json();
        console.log(json.data);
        setRestaurent(json?.data);
    }

    return restaurant;
}

export default useRestaurant;