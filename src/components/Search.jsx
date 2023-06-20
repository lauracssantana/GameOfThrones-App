import styles from './Search.module.css'

export function Search ({ search }) {
    return(
        <div className={styles.container}>
            <form className={styles.form}>
                <input
                    placeholder="search"
                    type="text"
                    onChange={search}
                
                />
            </form>
        </div>
    )
}