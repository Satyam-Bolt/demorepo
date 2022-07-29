import React from 'react'

const NoteItem = (props) => {
    const {note}=props; 
  return (
    <div className='col-md-3'>
        <div className="card my-3" >
   <div className="row card-body">
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description}Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
    </div>
</div>
    </div>
  )
}

export default NoteItem