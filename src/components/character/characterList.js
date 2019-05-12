import React from 'react';
import axios from 'axios';
import CharacterCard from './characterCard';
import { CharList, PageBtn } from '../styledComponents/styledComponents';


class CharacterList extends React.Component {
    state = {
        dataLink: this.props.characters,
        info: null,
        characters: []
    }

    componentDidMount() {
        axios.get(this.state.dataLink)
            .then(res => this.setState({ characters: res.data.results, info: res.data.info })) // assigned characters to the results key of data
            .catch(err => console.log(err))
    }

    reRender = (e, bOn) => {
        e.preventDefault();
        axios.get(bOn)
            .then(res => this.setState({ characters: res.data.results, info: res.data.info }))
            .catch(err => console.log(err))
    }

    render() {
        if (!this.state.characters) {
            return "Loading..."
        }
        return (
            <CharList>
                <PageBtn>
                    <button onClick={e => this.reRender(e, this.state.info.prev)} >Previous Page</button>
                    <button onClick={e => this.reRender(e, this.state.info.next)} >Next Page</button>
                </PageBtn>

                {this.state.characters.map(char => {
                    return <CharacterCard key={char.id} character={char} />
                })}
            </CharList>
        )
    }
}

export default CharacterList;