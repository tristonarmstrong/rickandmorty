import React from 'react';
import {Link} from 'react-router-dom';
import {Card} from '../styledComponents/styledComponents'

class CharacterCard extends React.Component {
    


    render(){
        const { id, name, image, } = this.props.character
        return (
            <Card>
                <img src={image}/>
                <h1>{name}</h1>
                <Link to={`/characters/${id}`}>{name}'s Profile</Link>
            </Card>
        )
    }
}


export default CharacterCard;