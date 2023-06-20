import { useEffect, useState } from "react";
import { CharacterCard } from "./CharacterCard";
import styles from "./CharacterList.module.css"
import { Search } from "./Search";

export function CharacterList() {

    const [characterList, setCharacterList] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch("https://thronesapi.com/api/v2/Characters")
            .then(response => response.json())
            .then(data => {
                setCharacterList(data)
            })
    }, [])

    const filteredChararacterList = characterList.filter(characterList => characterList.fullName.toLowerCase().includes(search))

    function getSearchValue(e) {
        e.preventDefault();
        setSearch(e.target.value.toLowerCase())
    }

    return (
        <>
            <Search
                total={filteredChararacterList.length}
                search={getSearchValue}
            />

            <div className={styles.container}>
                {filteredChararacterList.map(characterList => (
                    <CharacterCard
                        key={characterList.id}
                        id={characterList.id}
                        image={characterList.imageUrl}
                        name={characterList.fullName}
                    />
                ))}
            </div>
        </>
    )
}