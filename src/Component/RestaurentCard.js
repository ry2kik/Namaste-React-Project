import { IMG_CDN_URL } from "../Constants";

const RestrauntCard = ({ name, cuisines, cloudinaryImageId, lastMileTravelString }) => {
    return (
        <div className="card">
            <img
                src={
                    IMG_CDN_URL + cloudinaryImageId
                }
            />
            <div className="card-body">
                <h5 className="pt-3 card-title">{name}</h5>
                <p className="card-text">{cuisines.join(", ")}</p>
                <p>{lastMileTravelString} minutes</p>
            </div>
        </div>
    );
};

export default RestrauntCard;