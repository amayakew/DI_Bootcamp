import React from "react";

class Colors extends React.Component {
    constructor() {
        super();
        this.state = {favoriteColor: "red", show: true};
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({favoriteColor: "yellow"});
            console.log("Component Mounted!");
        }, 2000);
    }

    changeColor = () => {
        this.setState({favoriteColor: "blue"});
    };

    shouldComponentUpdate() {
        console.log('Changing is allowed')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("in getSnapshotBeforeUpdate");
        return prevState.favoriteColor;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("after update");
        console.log("Previous color was:", snapshot);
    }

    render() {
        return(
            <>
                <h2>My favorite color is {this.state.favoriteColor}</h2>
                <button type="button" onClick={this.changeColor}>Change color</button>

                <h1>Exercise 3</h1>
                {this.state.show && <Child/>}
                <button type="button" onClick={() => this.setState({show: false})}>Delete Header</button>
            </>
        );
    };
};

class Child extends React.Component {
    componentWillUnmount() {
        alert('The component named Header is about to be unmounted.')
    }

    render() {
        return <h3>Hello World!</h3>
    }
};

export default Colors;