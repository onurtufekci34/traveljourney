import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

export default function Card(props) {
  Card.propTypes = {
    imageUrl: PropTypes.any.isRequired,
    googleMapsUrl: PropTypes.any.isRequired,
    startDate: PropTypes.any.isRequired,
    endDate: PropTypes.any.isRequired,
    description: PropTypes.any.isRequired,
    location: PropTypes.any.isRequired,
    title: PropTypes.any.isRequired,
  };
  return (
    <div className="card">
      <div className="card--img-box">
        <img className="card--img" src={props.imageUrl} alt={props.title} />
      </div>

      <div className="card--infos">
        <FontAwesomeIcon icon={faLocationDot} className="card--location-icon" />
        <h2 className="card--location">{props.location}</h2>
        <a className="card--location-url" href={props.googleMapsUrl}>
          View on Google Maps
        </a>

        <h3 className="card--title">{props.title}</h3>
        <p className="card--date">
          {props.startDate} - {props.endDate}
        </p>
        <p className="card--description">{props.description}</p>
      </div>
    </div>
  );
}
