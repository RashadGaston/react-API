import React, { Component } from 'react';


class App extends Component {
    constructor(props) {
        super(props)
            this.state={
                films:[]
            }

    }
componentDidMount(){
    fetch("https://ghibliapi.herokuapp.com/Films")
    .then(response => response.json())
    .then(data =>this.setState({films: data}))
    .catch(err => console.log(err))
};

    render() {
        console.log(this.state.films);
        return (
            <div className="App">
                <header className= "app-logo">
                 {/* <img src={logo} className="App-logo" /> */}
                    <h1 className="App-title">React API</h1>
                </header>
                <p className="App-intro">
                    To get started,edit <code>src/App.js</code> and save to reload.
                </p>
            </div>

        )
    }
};

export default App;