import React from 'react';

function Card(props){
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow shadow-5">
            {/* Robo pic generator from robohash.org. Using params after ?  to show monsters instead*/}
            <img src={`https://robohash.org/${props.id}?size=200x200;set=set3`} alt="robo profile pic" />
            <div>
                <h2>{ props.name }</h2>
                <p>{ props.email }</p>
            </div>
        </div>
    );
}

export default Card;