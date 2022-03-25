import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Animal } from "../models/Animal";
import { Ianimal } from "../models/Ianimal";


export const ShowAnimals = () => {
    const [animal, setAnimal] = useState<Animal>()
    const [animalId, setAnimalId] = useState(0);

    let params = useParams();

    useEffect(() => {
        if (params.id)
            setAnimalId(+params.id);
    }, [])

    useEffect(() => {
        if (animalId === 0) {
            console.log('Remove animal ID');

        } else {
            axios
                .get<Ianimal>('https://animals.azurewebsites.net/api/animals/' + animalId)
                .then(response => {
                    let animalsFromApi = response.data
                    return setAnimal(animalsFromApi);
                });
        }
    }, [animalId]);



    return <>
        <h2> {animal?.name} </h2>
        <p> {animal?.shortDescription}</p>
        <p>  {animal?.isFed}</p>
        <p> Medicin : {animal?.medicine}  </p>
        <img src={animal?.imageUrl} alt={animal?.name}></img>

    </>


}
