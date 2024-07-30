import React from 'react';

class Color extends React.Component{
    constructor() {
        super();
        this.state = {
          favoriteColor: 'red',
          show: true
        };
      }

    shouldComponentUpdate(){
        return true
    }

    componentDidUpdate(){
        console.log("after update")
    }

    getSnapshotBeforeUpdate(){
        console.log("in getSnapshotBeforeUpdate")
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({ favoriteColor: "yellow" });
          }, 3000);    }

    changeColorToBlue = () => {
        this.setState({favoriteColor: 'blue'});
    };

    changeShow = () => {
        this.setState({ show: false });
      };

    render(){
        return(
            <>
                <h1>My favorite color is {this.state.favoriteColor}</h1>
                <button onClick={this.changeColorToBlue}>Change to Blue</button>
                {this.state.show && <Child />}
                <button onClick={this.changeShow}>delete</button>
            </>
        )
    }
    
}

class Child extends React.Component{

    componentWillUnmount(){
        alert('unmounted')
    }

    render(){
        return(
            <h2>Hello World</h2>
        )
    }
}

export default Color