import { useState, useEffect } from 'react';
import styles from './StarwarsHero.module.css';

export default function StarwarsHero(props) {

    const baseUrl = `https://swapi.dev/api/people`;

    const [heros, setHeros] = useState([]);

    useEffect(() => {
        fetch(baseUrl)
            .then((response) => response.json())
            .then((data) => {
                setHeros(data.results);
                console.log(data.results);

            })
            .catch((err) => console.log(err));
    },[]);

    return (
        <div>
            <h1> Starwars heros:</h1>

            <ul>
                {heros.map(hero => <li className={styles.heroListItem}  key={hero.url}> {hero.name}</li>)}
            </ul>



        </div>

    );
}