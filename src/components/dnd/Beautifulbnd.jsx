import React from 'react'
import { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Beautifulbnd = () => {
    const [ui, setUi] = useState([
        {
            tag: <p>Paragraph</p>
        },
        {
            tag: <h1>Heading 1</h1>
        },
        {
            tag: <h2>Heading 2</h2>
        }
    ]);

    let allUi = ui.map((tag, i) => (
        <Draggable
            draggableId={`draggable-${i}`}
            key={`draggable-${i}`}
            index={i}
        >{(provided)=> (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    {tag.tag}
                </div>
            )}
        </Draggable>
        ))

  return (
      <div>
          <DragDropContext>  
              <Droppable
                  droppableId='productsSequence'
                  direction='horizontal'
                  type='column'
              >     
                  {(provided)=> (
                      <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                      >
                          {allUi}
                          {provided.placeholder}
                          
                      </div>
                  )
                  }
              </Droppable>
          </DragDropContext>
    </div>
  )
}

export default Beautifulbnd