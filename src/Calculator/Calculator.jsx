import React, { useState } from 'react'
import './Calculator.css'
import axios from 'axios'

export default function Calculator() {
    const numbers = [7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', 0, '.', 'C', '+']
    const [expression, setExpression] = useState('')
    const [result, setResult] = useState(0)


    function createExpression(btn) {
        if (btn === 'C') {
            setExpression('')
            setResult(0)
        } else {
            setExpression((pre) => {
                return pre += btn
            })
        }
    }

    function evaluate() {
        try {
            let ans = eval(expression)
            let result = ans.toString().includes('.') ? ans.toFixed(2) : ans
            setResult(result)
            axios.post('http://localhost:8000/calculator/insertHistory', { expression: expression, result: result })
            setExpression(result)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='calculator-wrapper'>
            <div className='header'>
                <p>CALCULATOR</p>
            </div>
            <div className='calculator'>
                <div className='resultContainer'>
                    <p className='equation'>{expression}</p>
                    <p className='result'>{result}</p>
                </div>
                <div className='buttons'>
                    {numbers.map((btn) => (
                        <div className='button' onClick={() => { createExpression(btn) }} >{btn}</div>
                    ))}
                </div>
                <div className='equal' onClick={evaluate}>
                    <div>=</div>
                </div>
            </div>
        </div>
    )
}
