import React from 'react';
import {Link} from 'react-router-dom';
import {LocCard} from '../styledComponents/styledComponents';

class LocationCard extends React.Component{


    render(){
        const {id, name} = this.props.location
        return(
            <LocCard>
                <Link to={`/locations/${id}`}>{name}</Link>
            </LocCard>
        )
    }
}


export default LocationCard;