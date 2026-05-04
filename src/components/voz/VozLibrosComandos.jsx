import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

export default function VozLibrosComandos() {
    const [message, setMessage] = useState('')
    const commands = [
        {
          command: 'borrar',
          callback: ({ resetTranscript }) => resetTranscript()
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
        <button onClick={SpeechRecognition.startListening}>Start</button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <p>{transcript}</p>
        <p>{message}</p>
        
        
        </div>
    )
}