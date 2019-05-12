import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {CharList, Card } from '../styledComponents/styledComponents';

class Character extends React.Component {

    state = {
        char: null
    }

    componentDidMount() {
        axios.get(`https://rickandmortyapi.com/api/character/${this.props.match.params.id}`)
            .then(res => this.setState({ char: res.data }))
            .catch(err => console.log(err))
    }


    render() {
        if (!this.state.char) {
            return "Loading..."
        }
        const { image, name, id, status, species, type, gender, created, origin, episode, location } = this.state.char
        return (
            <CharList>
                <Card>
                    <img src={image} />
                    <h1>{name}</h1>
                    <p>{status}</p>
                    <p>{species}</p>
                    <p>{type}</p>
                    <p>{gender}</p>
                    <p>{created}</p>
                    {/* <p>{origin}</p> */}
                    {/* <p>{episode}</p> */}
                    {/* <p>{location}</p> */}
                </Card>
            </CharList>

        )
    }
}

export default Character;