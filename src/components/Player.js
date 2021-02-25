import React from 'react';

const Player = () => {
    return(
        <div className="player">
            <div className="time-control">
                <p>Start Time</p>
                <input type="range" />
                <p>End Time</p>
            </div>
            <div className="play-control">

            </div>
            <h1>Player</h1>
        </div>
    );
}

export default Player;