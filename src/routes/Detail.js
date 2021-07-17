import React from "react";
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        if (location.state) {
            return (
                <div className="movie-detail">
                    <div className="movie-detail__background">
                        <img src={location.state.poster} alt={location.state.title} />
                    </div>
                    <div className="movie-detail__container">
                        <div className="movie-detail__conetent-wrapper">
                            <div className="movie-detail__column">
                                <div className="movie-detail__poster-wrapper">
                                    <img
                                        className="movie-detail__poster"
                                        src={location.state.poster}
                                        alt={location.state.title}
                                    />
                                </div>
                                <div className="movie-detail__content">
                                    <h3 className="movie-detail__title">{location.state.title}</h3>
                                    <h5 className="movie-detail__year">{location.state.year}</h5>
                                    <ul className="movie-detail__genres">
                                        {location.state.genres.map((genre, index) => (
                                            <li key={index} className="movie-detail__genre">
                                                {genre}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="movie-detail__column">
                                <span className="movie-detail__subtitle">Synopsis</span>
                                <p className="movie-detail__summary">{location.state.summary}</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}
export default Detail;
