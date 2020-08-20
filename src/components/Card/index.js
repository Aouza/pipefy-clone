import React, { useRef, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import BoardContext from '../Board/context';

import { Container, Label } from './style';

function Card({ data, index, indexList }){
    const ref = useRef();
    const { move } = useContext(BoardContext);

    const [{ isDragging }, dragRef] = useDrag({
        item: {type: 'CARD', index, indexList},
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        })
    });

    const [, dropRef ] = useDrop({
        accept: 'CARD',
        hover(item, monitor){
            const draggedIndexList = item.indexList;
            const targetIndexList = indexList;
            const draggedIndex = item.index;
            const targetIndex = index;

            if(draggedIndex === targetIndex && draggedIndexList === targetIndexList){
                return;
            }

            const targetSize = ref.current.getBoundingClientRect();
            const targetCenter = (targetSize.bottom - targetSize.top) / 2;

            const draggedOffset =  monitor.getClientOffset();
            const draggedTop = draggedOffset.y - targetSize.top;
            
            if(draggedIndex < targetIndex && draggedTop < targetCenter){
                return;
            }

            if(draggedIndex > targetIndex && draggedTop > targetCenter){
                return;
            }

            move(draggedIndexList, targetIndexList, draggedIndex, targetIndex);

            item.index = targetIndex;
            item.indexList = targetIndexList;

        }   
    })

    dragRef(dropRef(ref));

    return(
        <Container ref={ref} isDragging={isDragging}>
            <header>
                {data.labels && <Label color={data.labels} />}
            </header>
            <p>{data.content}</p>

            { data.user && <img src={data.user} alt=""/>}
        </Container>
    );
}

export default Card;