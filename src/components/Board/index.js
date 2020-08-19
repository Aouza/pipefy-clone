import React from 'react';

import List from '../List/index';

import { Container } from './style';

function Board(){
    return(
        <Container>
            <List />
            <List />
            <List />
            <List />
        </Container>
    );
}

export default Board;