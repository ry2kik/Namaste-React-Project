import { useState, useEffect } from "react";
import { FETCH_ALL_RESTAURANT_URL } from "../Constants";

const useAllRestaurant = () => {
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);

    useEffect(() => {
        // API call
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch(FETCH_ALL_RESTAURANT_URL);
        const json = await data.json();
        // Optional Chaining
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    return [filteredRestaurants, allRestaurants];
}

export default useAllRestaurant;