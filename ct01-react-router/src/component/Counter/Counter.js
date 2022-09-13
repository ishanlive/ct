import React, { useReducer } from 'react'
import reducer from './Reducer'
import Slider from './Slider'

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0, move: 1 })
    return (
        <>
            <h2>Example counter application using useReducer hook </h2>
            <h3>Counter : {state.count}</h3>
            <h3>Move : {state.move}</h3>
            <div>
                <button onClick={() => dispatch('increment')}>increment</button>
                <button onClick={() => dispatch('decrement')}>decrement</button>
                <button onClick={() => dispatch('reset')}>reset</button>
            </div>
            <Slider
                min={1}
                max={100}
                onchange={(value) => dispatch({
                    type: 'stepUpdate',
                    step: value
                })}
            />
        </>
    )
}

export default Counter