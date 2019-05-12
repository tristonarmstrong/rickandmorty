import React from 'react';
import './App.css';
import axios from 'axios';
import CharacterList from './components/character/characterList';
import NavBar from './components/nav/navBar';
import {Route} from 'react-router-dom';
import Character from './components/character/character';

class App extends React.Component {
  state = {
    data: null, 
    characterDataLink: ''
  }

  componentDidMount() {
    axios.get('https://rickandmortyapi.com/api')
      .then(res => this.setState({ data: res.data }))
      .then((res) => this.setState({...this.state, characterDataLink: this.state.data.characters}))
      .catch(err => console.log(err))
  }

  nextPage = (link) => {
    this.setState({
      ...this.state,
      characterDataLink: link
    })
  }

  render() {
    console.log(this.state.characterDataLink)
    if (!this.state.data) {
      return "Loading..."
    } else {
      return (
        <main>
          <NavBar />
          <Route exact path="/characters/" render={props => <CharacterList {...props} nextPage={this.nextPage} characters={this.state.characterDataLink} /> }/>
          <Route path="/characters/:id" render={props => <Character {...props}/>} />
          </main>
        )
    }
  }
}

export default App;
