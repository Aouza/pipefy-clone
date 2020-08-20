import React, { useState } from 'react';
import produce from 'immer';

import BoardContext from './context';

import List from '../List/index';
import { loadLists } from '../../services/api';

import { Container } from './style';

function Board(){

    const lists = loadLists();

    const [itemsList, setItemsList] = useState(lists);

    function move(fromList, toList, from, to){
        setItemsList(produce(itemsList, draft => {
            const dragged = draft[fromList].cards[from];

            draft[fromList].cards.splice(from, 1);
            draft[toList].cards.splice(to, 0, dragged);
        }))
    }

    return(
        <BoardContext.Provider value={{lists, move}}>
            <Container>
                {itemsList.map((itemList, index) => {
                return (
                <List key={itemList.title} index={index} data={itemList} />

                )})}
            </Container>
        </BoardContext.Provider>
    );
}

export default Board;