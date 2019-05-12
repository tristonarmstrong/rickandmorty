import React from 'react';
import {Link} from 'react-router-dom';

class LocationCard extends React.Component{
    state={

    }


    render(){
        const {id, name} = this.props.location
        return(
            <div>
                <Link to={`/locations/${id}`}>{name}</Link>
            </div>
        )
    }
}


export default LocationCard;