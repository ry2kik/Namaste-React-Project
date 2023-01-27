import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../Constants';
import Shimmer from './Shimmer';

const RestaurentMenu = () => {
    const [restaurant, setRestaurent] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getRestaurentInfo();
    }, []);

    async function getRestaurentInfo() {
        const restaurentInfo = await fetch(
            'https://www.swiggy.com/dapi/menu/v4/full?lat=12.9715987&lng=77.5945627&menuId=' + id
        );
        const json = await restaurentInfo.json();
        console.log(json);
        setRestaurent(json?.data);
    }

    return (!restaurant) ? <Shimmer /> : (
        <>
            <div className='restaurent-info'>
                <div className="container">
                    <div className="row justify-content-center p-4">
                        <div className="col-lg-4">
                            <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} alt="The image is not found" width="90%" height="220" />
                        </div>
                        <div className="col-lg-5 text-white-50">
                            <h3 className='text-white'>{restaurant?.name}</h3>
                            <p>{restaurant?.cuisines?.join(', ')}</p>
                            <p>{restaurant?.locality}, {restaurant?.area}, {restaurant?.city}</p>
                            <div className='row pt-4'>
                                <div className="col lh-1">
                                    <p className='text-white'>{restaurant?.avgRating} stars</p>
                                    <p>1K+ Ratings</p>
                                </div>
                                <div className="col lh-1">
                                    <p className='text-white'>{restaurant?.sla?.slaString}</p>
                                    <p>Delivery Time</p>
                                </div>
                                <div className="col lh-1">
                                    <p className='text-white'>{restaurant?.costForTwoMsg}</p>
                                    <p>Cost of Food</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 text-white offer">

                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="row p-4">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5">
                        <h3>Menu</h3>
                        <ul>
                            {
                                Object.values(restaurant?.menu?.items).map((item) => <li key = { item?.id }>{ item?.name }</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RestaurentMenu;