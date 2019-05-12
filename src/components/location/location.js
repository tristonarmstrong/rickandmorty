import React from 'react';
import axios from 'axios';
import {Card} from '../styledComponents/styledComponents';
import LocCharList from './locCharList';

class Location extends React.Component{
    state={
        loc: null
    }

    componentDidMount() {
        axios.get(`https://rickandmortyapi.com/api/location/${this.props.match.params.id}`)
            .then(res => this.setState({ loc: res.data }))
            .catch(err => console.log(err))
    }

    componentWillReceiveProps(nextProps){
        axios.get(`https://rickandmortyapi.com/api/location/${nextProps.match.params.id}`)
        .then(res => this.setState({loc: res.data}))
        .catch(err => console.log(err))
    }

    render(){
        if(!this.state.loc){
            return "Loading..."
        }
        const {name, dimension, type} = this.state.loc
        return(
            <Card>
                <h1>{name}</h1>
                <p><strong>Dimension: </strong>{dimension}</p>
                <p><strong>Type: </strong>{type}</p>
                <ul>
                    <p><strong>Residents:</strong> ({this.state.loc.residents.length})</p>
                    {this.state.loc.residents.map(person => {
                        return <LocCharList person={person}/>
                    })}
                </ul>
            </Card>
        )
    }
}


export default Location;