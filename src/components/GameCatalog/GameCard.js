import { Link } from "react-router-dom";

const GameCard = ({
    game
}) => {
    // const onDetails = (e) => {
    //     e.preventDefault();

    //     navigationChangeHandler(`/details/${game._id}`)
    // }

    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={game.imageUrl} />
                <h6>{game.category}</h6>
                <h2>{game.title}</h2>
                <Link to={`/games/${game._id}`} className="details-button">Details</Link>
            </div>
        </div>
    );
}

export default GameCard;