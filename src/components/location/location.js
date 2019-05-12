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

    render(){
        if(!this.state.loc){
            return "Loading..."
        }
        return(
            <p>Hello</p>
        )
    }
}


export default Location;