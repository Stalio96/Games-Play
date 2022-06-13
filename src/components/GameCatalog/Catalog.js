import { useEffect, useState } from 'react';

import GameCard from './GameCard';

const Catalog = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            fetch('http://localhost:3030/data/games?sortBy=_createdOn%20desc')
                .then(res => res.json())
                .then(result => {
                    setGames(result);
                    setLoading(false);
                })
        }, 1000)
    }, [])

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {loading
                ? <h3 className="no-articles">Loading...</h3>
                : games.length > 0
                    ? games.map(x => <GameCard key={x._id} game={x} />)
                    : <h3 className="no-articles">No articles yet</h3>
            }


        </section>
    );
}

export default Catalog;