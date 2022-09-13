import React, { useState } from 'react'

const Slider = ({min, max, onchange}) => {
    const [value, setValue] = useState(0)
    return (
        <>
            <div className='slider'>
                {value}
                <input
                    type='range'
                    min={min}
                    max={max}
                    value={value}
                    onChange={(e) => {
                        const value = Number(e.target.value)
                        onchange(value)
                        setValue(value)
                    }} />
            </div>
        </>
    )
}

export default Slider