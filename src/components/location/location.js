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
        console.log(this.state.loc)
        if(!this.state.loc){
            return "Loading..."
        }
        return(
            <div>
                <h1>{this.state.loc.name}</h1>
            </div>
        )
    }
}


export default Location;