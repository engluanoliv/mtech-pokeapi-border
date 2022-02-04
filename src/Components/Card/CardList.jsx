import React from 'react';
import { Card } from './index';

const CardList = ({ pokemon }) => {

    return (
        <>
            { pokemon.map(( val, idx ) => (
                <Card key={idx} thisPokemon={val} />
            )) }
        </>
    );
}

export default CardList;
