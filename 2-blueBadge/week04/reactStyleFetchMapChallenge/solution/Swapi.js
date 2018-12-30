import React from 'react';
import Display from './Display';

const starship_API = "https://swapi.co/api/starships"
const planet_API = "https://swapi.co/api/planets"

const navStyle = {
    width: "100%",
    color: 'black',
    backgroundColor: 'blue'
}

const backgroundStyle = {
    backgroundColor: 'black'
}


export default class Swapi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: '',
            displayData: []
        }

        this.togglePlanets = this.togglePlanets.bind(this);
        this.toggleStarships = this.toggleStarships.bind(this);
    }

    componentWillMount() {
        this.toggleStarships();
    }

    toggleStarships() {
        fetch(starship_API)
        .then(response => {
            return response.json()
        })
        .then(json => {
            this.setState({
                mode: 'starships',
                displayData: json.results
            })
        })
    }

    togglePlanets() {
        fetch(planet_API)
        .then(response => {
            return response.json()
        })
        .then(json => {
            this.setState({
                mode: 'planets',
                displayData: json.results
            })
        })
    }

    render() {
        return (
            <div style={backgroundStyle}>
                <nav style={navStyle}>
                    <h2>Swapi Data</h2>
                </nav>
                <button onClick={() => this.toggleStarships()}>Starships</button>
                <button onClick={() => this.togglePlanets()}>Planets</button>
                <Display data={this.state.displayData} mode={this.state.mode} />
            </div>
        )
    }
}