import React from 'react';
// import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from './Profile';
import Profile from "./ProfileClass";

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <>
                <h1>About Us Page</h1>
                <p>This is the namaste React course chapter 07 - finding path</p>
                <Profile name="Raktim" />
                <ProfileFunctionalComponent name = "Raktim" />
                {/* <Outlet /> */}
            </>
        )
    }
}

export default About;