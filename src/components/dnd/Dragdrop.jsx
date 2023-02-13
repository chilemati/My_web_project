import React, { useState } from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import Draggable from 'react-draggable';
import Dndkit from './Dndkit';
import Tag from './Tag'

const Dragdrop = () => {
    let [board, setBoard] = useState([{}]);
    let editable = useRef(true);
    let [output, setOutput] = useState(``);
    let [{ isOver }, drop] = useDrop(() => ({
        accept: 'tag',
        drop: (item) => addTagToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));
    // let [{ isDragging }, drag1] = useDrag (() => ({
    //     type: 'tag',
    //     drag1: (item)=> sortComp(item.id),
    //     collect: (monitor) => ({
    //         isDragging: !!monitor.isDragging()
    //     })
    // }))
    function addTagToBoard(id) {
        console.log(id);
        const dragedList = dragList.filter((list) => list.id === id);
        console.log('draglist: ', dragedList[0]);
        setBoard((board) => [...board, dragedList[0]]);
        console.log(board);
    }

    // function sortComp(id) {
    //     console.log(id);
    //     console.log(isDragging);
    // }
    const dragList = [
        {
            id: 1,
            tag: <p>Paragraph</p>,
        },
        {
            id: 2,
            tag: <h1>Heading 1</h1>,
        },
        {
            id: 3,
            tag: <h2>Heading 2</h2>,
        },
    ];
    useEffect(() => {
        (() => {
            let boardHtml = document.querySelector('.board');
            // console.log(boardHtml.innerHTML);
            let stopOutputEditable = document.querySelectorAll('.output [contentEditable]');
            stopOutputEditable.forEach(x => {
                x.setAttribute('contentEditable', 'false');
            })
            // console.log(stopOutputEditable);
        })();
    }, [output]);
    function handleOutput() {
        // editable.current = false;
        let boardHtml = document.querySelector('.board');
        // console.log(boardHtml.innerHTML);
        let outputHtml = document.querySelector('.output');
        outputHtml.innerHTML = '';
        // output.innerHTML = `${boardHtml}`;
        let di = document.createElement('div');
        di.innerHTML = boardHtml.innerHTML;
        outputHtml.appendChild(di);
        setOutput(boardHtml.innerHTML);
        // console.log(boardHtml.innerHTML);
        
    }

    return (
        <div>
            <div className="pictures">
                {
                    dragList.map((tag, i) => {
                   return  <Tag elem={tag.tag} id={tag.id} key={i} />

                    }  )
                }
            </div> 
            <div className="board" placeholder='Drop here' ref={drop}   >
                {/* <Dndkit arr={board} title={<span></span>} /> */}

                {/* {
                    board.map(({ tag }, i) => (
                            <Draggable  >
                        <div ref={drag1}  key={i} contentEditable={editable.current} suppressContentEditableWarning={true} >
                            {tag}
                        </div>
                    </Draggable>
                    )
                    
                    )
                    
                    
                } */}
            </div>
            <button onClick={()=> handleOutput() }>Show Output</button>
            {/* <button onClick={()=> editable.current= true }>Edit Output</button> */}

            <div className="output"  > </div>
        </div>
  )
}

export default Dragdrop