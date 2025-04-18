function DestinationSelector({ tours, selected, setSelected }) {
    const uniqueNames = ['All Destinations', ...new Set(tours.map(t => t.name))]
     return (
      <div>
        <label htmlFor="destination">Filter Destinations: </label>
        <select
          id="destination"
          value={selected}
          onChange={e => setSelected(e.target.value)}
        >
          {uniqueNames.map((name, idx) => (
            <option key={idx} value={name}>{name}</option>
          ))}
        </select>
      </div>
    )
  }
   export default DestinationSelector