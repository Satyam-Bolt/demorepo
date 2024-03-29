import React from 'react'

const NoteItem = (props) => {
    const {note}=props; 
  return (
    <div className='col-md-3'>
    <div className="card my-3" >
    <div className="row card-body">
    <div className='container'>
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description}Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
    <i className="fa-regular fa-pen-to-square mx-2"></i>
    <i className="fa-regular fa-trash-can mx-2"></i>
    </div>
    </div>
    </div>
    </div>
  )
}

export default NoteItem