import React from 'react';

const HeroButton = (props) => {
    return (
        <div>
            <button className="app-btn" onClick={props.toggleHero}>Heroes</button>
        </div>
    )
}

export default HeroButton