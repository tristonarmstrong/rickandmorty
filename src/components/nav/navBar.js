import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from '../styledComponents/styledComponents';
import './navBar.css'

const NavBar = props => {




    return (
        <Nav>
                <Link className="navLink" to="/characters">Characters</Link>
                <Link className="navLink" to="/locations">Locations</Link>
                <Link className="navLink" to="/episodes">Episodes</Link>
        </Nav>
    )
}


export default NavBar;