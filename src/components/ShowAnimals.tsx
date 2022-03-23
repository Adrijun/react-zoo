import { useState } from "react"
import { useParams } from "react-router-dom"


export const ShowAnimals = () => {
    const [animalId, setAnimalId] = useState(0)

    let { id } = useParams()

    return <p> {id} </p>

}