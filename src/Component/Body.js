import RestrauntCard from "./RestaurentCard";
import { restaurantList } from "../Constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((r) => r?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
    return filterData;
}

// no key (not acceptable)<<<<<<<<<<< index key(last option) <<<<< unquie key (best practice)
const Body = () => {
    // useState() is a hook that React gives you to create local state variable inside your component
    // That's why never create useState() variable outside of Body() component.
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    // empty dependency array => once after render
    // dep arry [searchText] => once after initial render + everytime after redern (my searchText changes)
    // without any dep array ([]) useEffect()'s callback function will be called every time the page renders + initial render
    useEffect(() => {
        // API call
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        )
        const json = await data.json();
        // Optional Chaining
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    // not render component (Early return)
    if (!allRestaurants) return null;

    return allRestaurants?.length === 0 ? (
        <Shimmer />
    ) : (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
                <button
                    className="search-btn"
                    onClick={() => {
                        //need to filter the data
                        const data = filterData(searchText, allRestaurants);
                        console.log(data);
                        // update the state - restaurants
                        setFilteredRestaurants(data);
                    }}
                >
                    Search
                </button>
            </div>
            <div className="restaurant-list">
                {
                    (filteredRestaurants?.length === 0) ? <h1>No Restraunt match your Filter!!</h1> :
                    filteredRestaurants.map((restaurant) => {
                        return(
                            <Link to = { "/restaurent/" + restaurant.data.id } key = {restaurant.data.id}>
                                <RestrauntCard {...restaurant.data} />
                            </Link>
                        );
                    })
                }
            </div>
        </>
    );
};

export default Body;