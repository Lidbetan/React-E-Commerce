import React from 'react'
import { Button } from 'react-bootstrap'
import useCounter from '../../hooks/useCounter'

const Counter = () => {
    const {counter, increment, decrement} = useCounter()
    return (
        <div className='items-counter d-flex flex-row align-items-end justify-content-center justify-content-md-end gap-2'>
            <Button className='button fw-semibold text-uppercase border border-0 p-1 mt-2' onClick={increment}>+</Button>
            <div className='counter'>{counter}</div>
            <Button className='button fw-semibold text-uppercase border border-0 p-1 mt-2' onClick={decrement}>-</Button>
        </div>
    )
}

export default Counter