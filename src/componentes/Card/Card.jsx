import "./Card.css"

const Card = ({ character }) => {
  const { image, name, species, status, type, origin, location } = character;
  // Para el estado, mapeo el color
  const isAlive = status.toLowerCase() === "alive";

  return (
    <div className="card">
      <img
        src={image}
        alt={name}
        className="avatar"
      />
      <div className="info">
        <h3 className="name">{name}</h3>
        <p className="type"><strong>Tipo:</strong> {type || "Unknown"}</p>
        <p className="species"><strong>Epecie:</strong> {species}</p>
        <p className="status">
          <span
            className={`status-dot ${isAlive ? "alive" : "dead"}`}
            title={status}
          />
          {status}
        </p>
        <p className="origin">
          <strong>Origen:</strong> {origin?.name || "Unknown"}
        </p>
        <p className="location">
          <strong>Ubicacion:</strong> {location?.name || "Unknown"}
        </p>
      </div>
    </div>
  );
};

export default Card;
