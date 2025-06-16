import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromClist } from "../api/clist";
import "../App.css";

const CoderDetails = () => {
  const { id } = useParams();
  const [coder, setCoder] = useState(null);

  useEffect(() => {
    fetchFromClist(`/coder/${id}/`).then((data) => setCoder(data));
  }, [id]);

  if (!coder) return <p>Loading coder info...</p>;

  return (
    <div className="table-wrapper">
      <h2>Coder: {coder.handle}</h2>
      <p>Country: {coder.country || "N/A"}</p>
      <p>Virtual: {coder.is_virtual ? "Yes" : "No"}</p>
      <h3>Accounts</h3>
      {coder.accounts.length === 0 ? (
        <p>No accounts found for this coder.</p>
      ) : (
        <table className="styled-table">
          <thead>
            <tr>
              <th>Handle</th>
              <th>Name</th>
              <th>Contests</th>
              <th>Last Activity</th>
              <th>Resource</th>
              <th>Rank</th>
            </tr>
          </thead>
          <tbody>
            {coder.accounts.map((acc, i) => (
              <tr key={i}>
                <td>{acc.handle}</td>
                <td>{acc.name || "-"}</td>
                <td>{acc.n_contests}</td>
                <td>
                  {acc.last_activity
                    ? new Date(acc.last_activity).toLocaleString()
                    : "-"}
                </td>
                <td>{acc.resource}</td>
                <td>{acc.resource_rank || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CoderDetails;
