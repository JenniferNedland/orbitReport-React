import "./styling.css";

export const Table = ({ sat: filteredSats }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {filteredSats.map(({ id, name, type, launchDate, operational }) => (
          <tr key={id} >
            <td>{name}</td>
            <td>{type}</td>
            <td>{launchDate}</td>
            <td>{operational ? "active" : "inactive"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;