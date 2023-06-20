import { Character } from "../pages/Character";
import { Link } from 'react-router-dom';

import styles from "./CharacterCard.module.css"


export function CharacterCard({ id, image, name }) {
    return(
        <Link to={`character/${id}`}>
            <article className={styles.card}>
                <div className={styles.image}
                    style={{ backgroundImage: `url(${image})`}}>
                </div>

                <div className={styles.name}>
                    {name}
                </div>
            </article>
        </Link>
    )
}