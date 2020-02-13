import React from 'react';

export default function Pro_10({heroName}) {
    if(heroName === 'Joker'){
        throw new Error('Not a hero!');
    }
    return (
        <div>
            {heroName}
        </div>
    )
}
