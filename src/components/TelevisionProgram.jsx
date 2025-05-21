// Виджет телевизионного вещания

import React from 'react';

const TelevisionProgram = ({ programs, children }) => {
    return (
        <div className="tv-programme">
            <header className="header">
                <h2 className="title">Телепрограмма</h2>
                <button className="play-button">
                    <svg className="play-icon" viewBox="0 0 24 24" width="16" height="16">
                        <path d="M8 5v14l11-7z" fill="white"/>
                    </svg>
                    <span>Эфир</span>
                </button>
            </header>
            <div className="programs">
                {programs.map((program) => (
                    <div key={`${program.time}-${program.name}`} className="program-item">
                        {children && React.cloneElement(children, { 
                            isoDate: program.isoDate,
                            dateFormat: "HH:mm"
                        })}
                        <span className="show-name">{program.name}</span>
                        <a href={program.link} className="channel-link">{program.channel}</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TelevisionProgram;