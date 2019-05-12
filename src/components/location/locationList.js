import React from 'react';
import axios from 'axios';
import LocationCard from './locationCard';
import { LocList, LocListCont } from '../styledComponents/styledComponents';

class LocationList extends React.Component {

    state = {
        dataLink: this.props.locations,
        info: null,
        locations: []
    }

    componentDidMount() {
        axios.get(this.state.dataLink)
            .then(res => this.setState({ info: res.data.info, locations: res.data.results }))
            .catch(err => console.log(err))
    }

    render() {
        if (!this.state.locations) {
            return 'loading...'
        } else {
            return (
                <LocList>
                    <LocListCont style={{display: 'flex', flexFlow: 'row wrap'}}>
                        {this.state.locations.map(loc => <LocationCard key={loc.id} location={loc} />)}
                    </LocListCont>
                </LocList>
            )
        }

    }
}

export default LocationList;