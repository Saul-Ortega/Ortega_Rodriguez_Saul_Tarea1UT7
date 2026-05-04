import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import searchByCategory from '../../controller/searchByCategory'
import BookCard from '../BookCard'
import searchByAuthor from '../../controller/searchByAuthor'

export default function VozLibrosComandos() {
    const [message, setMessage] = useState('')
    const commands = [
        {
            command: 'busca por categoría *',
            callback: async (category) => {
                const result = await searchByCategory(category);
                const booksList = result?.books || [];
                setMessage(booksList.map((book, i) => <BookCard key={book.id || book.title || i} book={book} />))
            }
        },
        {
            command: 'busca por autor *',
            callback: async (author) => {
                const result = await searchByAuthor(author);
                const authorsList = result?.authors || [];
                setMessage(
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 20 }}>
                        {authorsList.map((author, i) => <span key={author.id || i} style={{ marginTop: 10 }}>{author.name || "Sin nombre"}</span>)}
                    </div>
                )
            }
        },
        {
          command: 'borrar',
          callback: ({ resetTranscript }) => {
            resetTranscript()
            setMessage("")
        }
        }
    ]
    
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition({ commands })
    console.log(transcript)
    if (!browserSupportsSpeechRecognition) {
        return null
    }
    
    console.log(message)
    return (
        <div>
            <button onClick={ () => SpeechRecognition.startListening({ language: "es-ES" }) }>Start</button>
            <button onClick={SpeechRecognition.stopListening}>Stop</button>
            <p>{transcript}</p>
            <div>{message}</div>
        
        </div>
    )
}