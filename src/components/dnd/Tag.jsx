import React from 'react'
import { useDrag } from 'react-dnd'

const Tag = ({ elem, id }) => {
    let [{ isDragging }, drag] = useDrag(() => ({
        type: 'tag',
        item: {id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))
  return (
      <div key={id} ref={drag} style={{ border: isDragging ? '1px solid blue' : '1px solid white' }} >{elem}
      </div>
  )
}

export default Tag