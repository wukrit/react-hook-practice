import React, {useState} from 'react'

// Custom Hook
// Export allows us to import this hook in other files
export const useCounter = (initial, step) => {
    const [count, setCount] = useState(initial)
    const increment = () => setCount(count + step)
    return {count, increment}
}

const Counter = () => {
    // Use custom hook
    const {count, increment} = useCounter(0, 1)
    return <button onClick={increment}> {count} </button>
}

export default Counter


// Original Version without custom hook
// import React, {useState} from 'react'
//
// const Counter = () => {
//
//     const [count, setCount] = useState(0)
//     const increment = () => setCount(count + 1)
//     return <button onClick={increment}> {count} </button>
// }
//
// export default Counter