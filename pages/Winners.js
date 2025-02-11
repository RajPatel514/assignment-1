import { useState } from 'react';
import React from 'react';

export default function Winners({ title }) { //Using props here to pass the title
    const teams = [
        { id: 1, name: 'Dallas Mavericks', status: 'NBA' },
        { id: 2, name: 'Denver Nuggets', status: 'NBA' },
        { id: 3, name: 'Golden State Warriors', status: 'NBA' },
        { id: 4, name: 'Phoenix Suns', status: 'NBA' },
        { id: 5, name: 'Los Angeles Lakers', status: 'NBA' },
        { id: 6, name: 'Philadelphia Eagles', status: 'NFL' },
        { id: 7, name: 'Kansas City Chiefs', status: 'NFL' },
        { id: 8, name: 'Kansas City Chiefs', status: 'NFL' },
        { id: 9, name: 'Los Angeles Rams', status: 'NFL' },
        { id: 10, name: 'Tampa Bay Buccaneers', status: 'NFL' },
        { id: 11, name: 'Vegas Golden Knights', status: 'NHL' },
        { id: 12, name: 'Colorado Avalanche', status: 'NHL' },
        { id: 13, name: 'Tampa Bay Lightning', status: 'NHL' },
        { id: 14, name: 'Tampa Bay Lightning', status: 'NHL' },
        { id: 15, name: 'St. Louis Blues', status: 'NHL' },
    ];

    const [filter, setFilter] = useState('null');
    const filteredItems = teams.filter(item => item.status === filter);

    return (
        <div>
            <div>
                <section id="champions">
                    <h2>{title}</h2>
                    <div class="allButtons">
                        {/* buttons to filter through and render the team */}
                        <button onClick={() => setFilter('NBA')}>NBA</button>
                        <br></br>
                        <button onClick={() => setFilter('NFL')}>NFL</button>
                        <br></br>
                        <button onClick={() => setFilter('NHL')}>NHL</button>
                    </div>
                </section>

            </div>
            <br></br>
            {filteredItems.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </div>
    );
}

