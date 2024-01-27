import axios from 'axios'
import React, { useEffect, useState } from 'react'
import cssClasses from './History.module.css'

export default function History() {
    const [history, setHistory] = useState([{ expression: 'Expression', result: 'Result' }])
    useEffect(() => {
        axios.get('http://localhost:8000/calculator/getHistory').then((resp) => {
            setHistory((pre) => [...pre, ...resp.data.data])
        }).catch((err) => {
            console.log(err)
        })
    }, [])


    return (
        <div className={cssClasses.container}>
            <div className={cssClasses.header}>
                <p>History</p>
            </div>
            <div className={cssClasses.historyWrapper}>
                {history.map((m) => (
                    <div className={cssClasses.history} key={m._id}>
                        <p>{m.expression}</p>
                        <p>{m.result}</p>
                    </div>
                ))
                }
            </div>
        </div >
    )
}
