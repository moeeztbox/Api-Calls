import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios

function Table() {
  const [experts, setExperts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExperts = async () => {
      try {
        // Use axios to make a GET request
        const response = await axios.get("http://localhost:3000/api/experts");
        setExperts(response.data); // Directly use response.data to set the state
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching experts:", error);
      }
    };

    fetchExperts();
  }, []);

  const handleAddExpert = () => {
    navigate("/add-expert");
  };

  const OpenProfile = (e, expertId) => {
    e.preventDefault();
    navigate(`/profile/${expertId}`);
    console.log("hello", expertId);
  };

  return (
    <>
      <div className="container mt-5">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3>Task Table</h3>
          <button className="btn btn-primary" onClick={handleAddExpert}>
            Add Expert
          </button>
        </div>
        <table className="table mt-3">
          <thead className="tablehead">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Status</th>
              <th scope="col">Task Title</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          <tbody>
            {experts.length > 0 ? (
              experts.map((expert) => (
                <tr key={expert.id}>
                  <td>
                    <a onClick={(e) => OpenProfile(e, expert.id)} href="#">
                      {expert.Name}
                    </a>
                  </td>
                  <td>{expert.Status}</td>
                  <td>{expert.TaskTitle}</td>
                  <td>{expert.Time}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No experts found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
