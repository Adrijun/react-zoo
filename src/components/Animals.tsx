import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Animal } from "../models/Animal";
import { Ianimal } from "../models/Ianimal"


export const Animals = () => {
    const [animals, setAnimals] = useState<Animal[]>([]);

    useEffect(() => {

        axios
            .get<Ianimal[]>(
                'https://animals.azurewebsites.net/api/animals'
            )
            .then(response => {
                let animalsFromApi = response.data.map((animal: Ianimal) => {
                    return new Animal(
                        animal.id,
                        animal.name,
                        animal.latinName,
                        animal.yearOfBirth,
                        animal.shortDescription,
                        animal.longDescription,
                        animal.imageUrl,
                        animal.medicine,
                        animal.isFed,
                        animal.lastFed)
                });
                setAnimals(animalsFromApi);


            });

    }, []);

    let AnimalsHtml = animals.map((animal: Animal) => {
        let AnimalsLink = `/animals/${animal.id}`;

        return (
            <div key={animal.id}>
                <Link to={AnimalsLink}>{animal.name}</Link>
            </div>
        )
    })
    return (

        <div>

            {AnimalsHtml}
        </div>

    )

}