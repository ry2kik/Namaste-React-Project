import React from 'react';

// In a class based component 1st constructor(), 2nd render() method and lastly componentDidMount() method is called
class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy Name",
                location: 'Dummy Location'
            }
        }
    }

    // Life-cycle method
    componentDidMount() {
        // Best place to make an api call
        // const data = await fetch('https://api.github.com/users/ry2kik');
        // const json = await data.json();
        // this.setState({
        //     userInfo: json
        // });

        this.timer = setInterval(() => {
            console.log('Namaste React - OP');
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.count !== prevState.count) {
            //
        }
        if (this.state.count2 !== prevState.count2) {
            // code
        }
        console.log("Component Did Update");
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    // We can't create a class based component without render()
    // render() is more like a functional component which we create to return some jsx which will be enjected to DOM
    // React does rendering in two phases. They are: render(includes constructor & render() method) and commit phrase(Modifies the DOM)
    render() {
        return (
            <>
                <h1> Profile Class Component </h1>
                <img src={this.state.userInfo.avatar_url} alt="The image is not found" />
                <h2>Name: {this.state.userInfo.name}</h2>
                <h5>Location: {this.state.userInfo.location}</h5>
            </>
        );
    }
}

export default Profile;