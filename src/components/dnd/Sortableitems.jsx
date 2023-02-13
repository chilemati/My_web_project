import React from 'react'
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card } from "react-bootstrap";


const Sortableitems = ({ id }) => {
    // console.log('id from sortableitems: ', id);
    const {
        listeners,
        attributes,
        setNodeRef,
        transform,
        transition
    } = useSortable({ id: id });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }
  return (
      <div ref={setNodeRef} style= {style} {...listeners} {...attributes}>
        
          <div contentEditable={true} suppressContentEditableWarning={true} className='m-3'  > {id} </div>
      </div>
  )
}

export default Sortableitems