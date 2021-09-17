import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
    // First meaning is argument of useState (count = 5) method
    // Second meaning is custom callback function of useState().
    const [count, setCount] = useState(5)
    const [data, refreshData] = useState([{name: 'Ivan', sex: 'male'}])

    // Worcks every time with refresh DOM and launching component
    useEffect(() => {
        console.log(Math.random())
    })

    let man = data.map(it => {
        return(<div> Name - {it.name}, sex - {it.sex} </div>)
    })

    return (<div>
        <p>Вы кликнули {count} раз</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <button onClick={() => refreshData(data => ([...data, {name: 'Alex', sex: 'male'}]))}>Добавить данные</button>
        {man}
        {/*
        -----Option without make a new variable-----
        {data.map(it => {
            return (
                <div>
                    Name - {it.name}, sex - {it.sex}
                </div>
            )
        })} 
        --------------------------------------------
        */
        } 
    </div>);
}

export default App;
