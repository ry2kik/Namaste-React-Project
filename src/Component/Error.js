import { useRouteError } from "react-router-dom";
import logo_404 from '../assets/img/404.jpg';

const Error = () => {
    const err = useRouteError();
    return (
        <div className="container error_page mt-5 pt-5">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <h2>Oops! Somthing went wrong....</h2>
                    <p className="fs-20">We can't find the page you're looking for. Check it out our Help Center or head to back home</p>
                    <button className="btn btn-danger">{err.status + ": Page " + err.statusText}</button>
                </div>
                <div className="col-lg-6">
                    <img src={logo_404} alt="The image is not found" height="500" width="95%" />
                </div>

            </div>
        </div>
    )
}

export default Error;