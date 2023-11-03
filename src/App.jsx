import React, { useState, useEffect } from 'react';
import StarwarsHero from './components/StarwarsHero';
import styles from './App.module.css';

function App() {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]); // setState
    const [count, setCount] = useState(0);
    const[timer,setTimer]=useState(0);

    useEffect(() => {
         console.log('Mount component');
    }, []);

    useEffect(() => {
         console.log(`Update component - numbers ${numbers.length}`)
    }, [numbers, count]);  // count

    useEffect(() => {
        console.log(`Update component - count = ${count}`)
   }, [count]);  // count

    useEffect(() => {
         setTimeout(() => setTimer(s => s + 1), 1000);
         console.log('Update component- timer');
    }, [timer]);

    const onClick = () => {
        setNumbers(oldState => oldState.slice(0, oldState.length - 1));
        
    }

    return (
        <div className={styles.app}>
            <Starwars />

            <h3>Count: {count}</h3>
            <h3>Timer: {timer}</h3>
            <ul>
                {numbers.map((number, index) => (
                    <li
                        data-key={index}
                        key={index}
                        className={styles['list-item']}
                    >
                        {number * 2}
                    </li>)
                )}
            </ul>

            <button style={{marginRight: '20px'}} onClick={onClick}>REMOVE</button>
            <button onClick={() => setCount(c => c + 1)}>+</button>
        </div>
    );
}



export default App
