import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {LocCharCont} from '../styledComponents/styledComponents';


class LocCharList extends React.Component {

    state = {
        person: null
    }

    componentDidMount() {
        axios.get(this.props.person)
            .then(res => this.setState({
                person: res.data
            }))
            .catch(err => console.log(err))
    }


    render() {
        if (!this.state.person) {
            return "Loading..."
        }
        return (
            <LocCharCont>
                <Link to={`/characters/${this.state.person.id}`}>{this.state.person.name}</Link>
            </LocCharCont>
        )
    }
}



export default LocCharList;