import React, {useEffect} from 'react'
import {useCounter} from './Counter'

const PersistantCounter = () => {
    // Initialize Counter by getting count from localStorage exists
    const initialCount = Number(window.localStorage.getItem('count' || 0))
    // Use custom hook    
    const {count, increment} = useCounter(initialCount, 1)
    // Use Effect only runs the first argument (callback function) when the second argument updates
    useEffect(
        () => {
            window.localStorage.setItem('count', count)
        }, 
        [count]
    )
    return <button onClick={increment}> {count} </button>
}

export default PersistantCounter