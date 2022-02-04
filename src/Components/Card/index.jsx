import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    ContainerCard,
    ContentCard,
    Content,
    Avatar,
    Texth3,
    Textp
} from "./style";


export const Card = ({ thisPokemon }) => {

    const [pokemonData, setPokemonData] = useState({
        name: "",
        sprites: {
            front_default: ""
        },
        height: "",
        weight: "",
    });

    useEffect(() => {
        const fetchPokemonData = async (url) => {
            const res = await axios.get(url);
            setPokemonData(res.data);
        }
        fetchPokemonData(thisPokemon.url);
    }, [thisPokemon])


    return (
        <>
            <ContainerCard>
                <ContentCard>
                    <Content>
                        <Avatar src={pokemonData.sprites.front_default} />
                        <Texth3>{pokemonData.name}</Texth3>
                        <Textp>Altura: {pokemonData.height}m</Textp>
                        <Textp>Peso: {pokemonData.weight}kg</Textp>
                    </Content>
                </ContentCard>
            </ContainerCard>
        </>
    );
}
