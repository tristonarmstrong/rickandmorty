import React from 'react';
import styled from 'styled-components';

export const List = styled.div`
margin: auto;
padding: 50px 20px;
width: 400px;
`
export const Nav = styled.nav`
height: 50px;
width: 100%;
position: fixed;
background-color: #b7e4f9ff;
margin: auto;
display: flex;
justify-content: center;
`
export const PageBtn = styled.div`
display: flex; 
justify-content: space-between;
margin: 10px 0;
`
export const Card = styled.div`
text-align: center;
background-color: #ffffff99;
padding: 5px;
margin: 5px;
border-radius: 4px;
`

export const LocCard = styled.div`
border: 1px solid #c1c1c1;
border-radius: 4px;
background-color: white;
padding: 2px;
margin: 2px;

a{
    color: black;
    font-weight: lighter;
    font-size: small;
    text-decoration: none;
}
`

export const LocList = styled.div`
margin: auto;
padding: 50px 20px;
max-width: 900px;
`

export const LocListCont = styled.div`
display: flex;
flexFlow: row wrap;
justify-content: center;
`
export const LocCharCont = styled.div`
margin: 5px 0;

a{
    color: black;
    text-decoration: none;
    font-weight: light;
    text-align: left;

    :hover {
        text-decoration: underline;
    }
}

`

















export default List;