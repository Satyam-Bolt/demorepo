import React, { useState } from 'react'
import NoteContext from './NoteContext'
const NoteState=(props)=>{
   
    const demo=[
        {
            "_id": "62e3a0d533b72368d4815d83",
            "user": "62c2587726d8bb35a29ebf89",
            "title": "My First Note",
            "description": "alpha beta gamma",
            "tag": "demo",
            "timestamp": "2022-07-29T08:56:53.525Z",
            "__v": 0
        },
        {
            "_id": "62e3a0f933b72368d4815d85",
            "user": "62c2587726d8bb35a29ebf89",
            "title": "My Second Note",
            "description": "alpha beta gamma",
            "tag": "demo",
            "timestamp": "2022-07-29T08:57:29.024Z",
            "__v": 0
        },
        {
            "_id": "62e3a0d533b72368d4815d835",
            "user": "62c2587726d8bb35a29ebf89",
            "title": "My First Note",
            "description": "alpha beta gamma",
            "tag": "demo",
            "timestamp": "2022-07-29T08:56:53.525Z",
            "__v": 0
        },
        {
            "_id": "62e3a0f933b72368d4815d854",
            "user": "62c2587726d8bb35a29ebf89",
            "title": "My Second Note",
            "description": "alpha beta gamma",
            "tag": "demo",
            "timestamp": "2022-07-29T08:57:29.024Z",
            "__v": 0
        },
        {
            "_id": "62e3a0d533b72368d4815d836",
            "user": "62c2587726d8bb35a29ebf89",
            "title": "My First Note",
            "description": "alpha beta gamma",
            "tag": "demo",
            "timestamp": "2022-07-29T08:56:53.525Z",
            "__v": 0
        },
        {
            "_id": "62e3a0f933b72368d4815d8545",
            "user": "62c2587726d8bb35a29ebf89",
            "title": "My Second Note",
            "description": "alpha beta gamma",
            "tag": "demo",
            "timestamp": "2022-07-29T08:57:29.024Z",
            "__v": 0
        },
        {
            "_id": "62e3a0d533b72368d4815d8",
            "user": "62c2587726d8bb35a29ebf89",
            "title": "My First Note",
            "description": "alpha beta gamma",
            "tag": "demo",
            "timestamp": "2022-07-29T08:56:53.525Z",
            "__v": 0
        },
        {
            "_id": "62e3a0f933b72368d4815d",
            "user": "62c2587726d8bb35a29ebf89",
            "title": "My Second Note",
            "description": "alpha beta gamma",
            "tag": "demo",
            "timestamp": "2022-07-29T08:57:29.024Z",
            "__v": 0
        },

        {
            "_id": "62e3a0d533b72368d4815d83ge",
            "user": "62c2587726d8bb35a29ebf89",
            "title": "My First Note",
            "description": "alpha beta gamma",
            "tag": "demo",
            "timestamp": "2022-07-29T08:56:53.525Z",
            "__v": 0
        },
        {
            "_id": "62e3a0f933b72368d4815d85greg",
            "user": "62c2587726d8bb35a29ebf89",
            "title": "My Second Note",
            "description": "alpha beta gamma",
            "tag": "demo",
            "timestamp": "2022-07-29T08:57:29.024Z",
            "__v": 0
        },
        {
            "_id": "62e3a0d533b72368d4815d83gerger",
            "user": "62c2587726d8bb35a29ebf89",
            "title": "My First Note",
            "description": "alpha beta gamma",
            "tag": "demo",
            "timestamp": "2022-07-29T08:56:53.525Z",
            "__v": 0
        },
        {
            "_id": "62e3a0f933b72368d4815d85rger",
            "user": "62c2587726d8bb35a29ebf89",
            "title": "My Second Note",
            "description": "alpha beta gamma",
            "tag": "demo",
            "timestamp": "2022-07-29T08:57:29.024Z",
            "__v": 0
        }
    ]

    const [notes, setNote] = useState(demo)
   
    return (
        <NoteContext.Provider value={{notes,setNote}}>
                {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;