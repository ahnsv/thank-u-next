import {useState} from 'react'

const Index = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>
                Up
            </button>
        </div>
    )
}

export default Index