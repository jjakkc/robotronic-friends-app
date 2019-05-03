import React from 'react';
import Card from './Card';

function CardList({robos}) {
    const cardsArray = robos.map((user, i) => {
        return  <Card key={robos[i].id} id={robos[i].id} name={robos[i].name} email={robos[i].email} />
    })

    return (
        <div>
            {cardsArray}
        </div>
    );
}

export default CardList;