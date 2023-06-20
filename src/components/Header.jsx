import { Link } from "react-router-dom"
import styles from "./Header.module.css"

export function Header() {
    return (
        <header className={styles.header}>
           
            <div className={styles.caixa}>
                    <Link to="/"><img className={styles.logo} src="gotlogo.png"></img></Link>
                    <h1 className={styles.title}>
                        <Link to="/">| Personagens</Link>
                    </h1>        
            </div>
            <div>
                <img className={styles.image} src="lupa.png"></img>
            </div>
        </header>
    )
}