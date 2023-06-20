import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styles from "./CharacterInfo.module.css"

export function CharacterInfo() {
    const { id } = useParams()
    const [characterInfo, setCharacterInfo] = useState([])

    useEffect(() => {
        fetch(`https://thronesapi.com/api/v2/Characters/${id}`)
            .then(response => response.json())
            .then(data => {
                setCharacterInfo(data)

            })
    }, [id])

    return (
        <>
            <div className={styles.container}>
                <div>
                    <img className={styles.image} src={characterInfo.imageUrl}></img>
                </div>
                <div>

                        <div className={styles.box}>
                            <div className={styles.info}>
                                Name
                            </div>
                            <div className={styles.result}>
                                {characterInfo.fullName}
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.info}>
                                Title
                            </div>
                            <div className={styles.result}>
                                {characterInfo.title}
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.info}>
                                Family
                            </div>
                            <div className={styles.result}>
                                {characterInfo.family}
                            </div>
                        </div>


                </div>
            </div>
        </>
    )
}

