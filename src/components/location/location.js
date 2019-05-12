import React from 'react';
import axios from 'axios';

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
            <div>
                <h1>{name}</h1>
                <p>{dimension}</p>
                <p>{type}</p>
            </div>
        )
    }
}


export default Location;