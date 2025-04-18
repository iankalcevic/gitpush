function TourCard({ tour, onRemove }) {
    const { id, name, info, image, price } = tour
     return (
      <div className="tour-card">
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p><strong>${price}</strong></p>
        <p>{info}</p>
        <button onClick={() => onRemove(id)}>Not Interested</button>
      </div>
    )
  }
   export default TourCard