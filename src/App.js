import React from 'react';
import './App.css';
import axios from 'axios';
import CharacterList from './components/character/characterList';
import NavBar from './components/nav/navBar';
import {Route} from 'react-router-dom';
import Character from './components/character/character';
import LocationList from './components/location/locationList';
import Location from './components/location/location';

class App extends React.Component {
  state = {
    data: null, 
    characterDataLink: '',
    locationDataLink: ''
  }

  componentDidMount() {
    axios.get('https://rickandmortyapi.com/api')
      .then(res => this.setState({ data: res.data }))
      .then((res) => this.setState({
        ...this.state,
         characterDataLink: this.state.data.characters,
          locationDataLink: this.state.data.locations
        }))
      .catch(err => console.log(err))
  }

  nextPage = (link) => {
    this.setState({
      ...this.state,
      characterDataLink: link
    })
  }

  render() {
    if (!this.state.data) {
      return "Loading..."
    } else {
      return (
        <main>
          <NavBar />
          <Route exact path="/characters/" render={props => <CharacterList {...props} nextPage={this.nextPage} characters={this.state.characterDataLink} /> }/>
          <Route path="/characters/:id" render={props => <Character {...props}/>} />
          <Route path="/locations" render={props => <LocationList {...props} locations={this.state.locationDataLink}/>}/>
          <Route path="/locations/:id" render={props => <Location {...props} />} />
          </main>
        )
    }
  }
}

export default App;
