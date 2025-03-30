import React from "react";

class BuggyCounter extends React.Component {
    constructor() {
        super();
        this.state = { counter: 0 }; 
    };

    handleClick = () => {
        this.setState({counter: this.state.counter + 1});
    };

    render() {
        if (this.state.counter > 5) {
            throw new Error("I CRASHED!")
        }
        return (
            <h2 onClick={this.handleClick}> {this.state.counter}</h2>
        );
    };
};

export default BuggyCounter;