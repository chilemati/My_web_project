import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import {
    DndContext,
    closestCenter
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy
} from '@dnd-kit/sortable';
import { useState } from 'react';
import Sortableitems from './Sortableitems';
import { computeHeadingLevel } from '@testing-library/react';
import { Button } from 'bootstrap';

const Dndkit = ({title,arr}) => {
    const [languages, setLanguages] = useState([
        //  {
        //     id: 1,
        //     tag: <p>Paragraph</p>,
        // },
        // {
        //     id: 2,
        //     tag: <h1>Heading 1</h1>,
        // },
        // {
        //     id: 3,
        //     tag: <h2>Heading 2</h2>,
        // },
        'Javacript',
        'Typescript',
        'Python',
        'React'
    ]);

    let arrObj = [
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

    function arrObjToArr(a,b) {
        let arr = a.map(arr=> {
            // console.log(arr[b].props.children);
            return arr[b].props.children;
        } );
        // console.log(arr);
        return arr;
    }
  let [tags,setTags] = useState(arrObjToArr(arrObj,'tag'));

  function addToArr() {
    setTags([...tags,' para']);
  }

  return (
      <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
      >
          <Container className='p-3' style={{width: '50%'}} align='center' > 
              <h3>{title?title: 'The Best Programming Languages' }</h3>
              <button onClick={(e)=> addToArr()}>paragraph</button>
              <SortableContext
                  items={tags}
                  strategy={verticalListSortingStrategy}
              >
                  {/* WE NEED COMPONENTS THAT USES THE useSortable hook  */}
                  {tags.map(((tag,i)=> <Sortableitems key={tag} id={tag} /> ))}
              </SortableContext>
              
          </Container>
   </DndContext>
    )
    function handleDragEnd(e) {
        // console.log('Drag end called');
        const { active, over } = e;
        console.log(`Active:  ${active.id}`);
        console.log(`Over:  ${over.id}`);

        if (active.id !== over.id) {
            setTags((items) => {
                
                const activeIndex = items.indexOf(active.id);
                const overIndex = items.indexOf(over.id);
                // console.log('active: ',items[active.id]);
                // console.log('over: ',items[over.id]);
                // console.log('arrayMoved: ',arrayMove(items, activeIndex, overIndex));
                return arrayMove(items, activeIndex, overIndex);
            })
        }
    }
}

export default Dndkit