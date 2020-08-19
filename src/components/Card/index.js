import React from 'react';

import { Container, Label } from './style';

function Card(){
    return(
        <Container>
            <header>
                <Label color="#7159c1" />
            </header>
            <p>Fazer migração completa do servidor</p>
            <img src="https://avatars3.githubusercontent.com/u/33739228?s=460&u=0a7e01a18896312898794077ae004e07fe6e7cb0&v=4" alt="Alison Souza"/>
        </Container>
    );
}

export default Card;