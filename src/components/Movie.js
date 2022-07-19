import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie(props) {
    return (
        <div key={props.id}>
            <img src={props.medium_cover_image} alt={props.title} />
            <h2><Link to="/movie">{props.title}</Link></h2>
            <p>{props.summary}</p>
            <ul>
                {
                    props.genres.map((item2, index2) => (
                        <li key={item2}>{item2}</li>
                    ))
                }
            </ul>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.string.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;