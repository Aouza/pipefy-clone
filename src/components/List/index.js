import React from 'react';
import { MdAdd } from 'react-icons/md';

import { Container } from './style';

import Card from '../Card';

function List({ data, index: indexList }){
    return(

        <Container done={ data.done }>
            <header>
                <h2>{data.title}</h2>
                {
                    data.creatable && (
                        <button type="button">
                            <MdAdd size={24} color="#fff" />
                        </button>
                    )
                }
            </header>

            <ul>
                { data.cards.map((card, index) => {
                    return <Card 
                    key={card.id} 
                    indexList={indexList}
                    index={index} 
                    data={card}
                    />;
                })}
            </ul>
        </Container>

    );
}

export default List;