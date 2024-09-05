import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"; // Import axios

function Profile() {
  const { expertId } = useParams(); // Get the expert ID from the route params
  const [data, setData] = useState(null); // State to store the expert's data
  const navigate = useNavigate(); // Hook to navigate between routes

  useEffect(() => {
    const fetchExpert = async () => {
      try {
        // Fetch the specific expert by ID
        const response = await axios.get(
          `http://localhost:3000/api/experts/${expertId}`
        );
        setData(response.data); // Set the state with the specific expert's data
        console.log(response.data); // Optional: Log the data to verify
      } catch (error) {
        console.error("Error fetching expert:", error);
      }
    };

    fetchExpert();
  }, [expertId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/experts/${expertId}`);
      navigate("/"); // Navigate back to the main page after deletion
    } catch (error) {
      console.error("Error deleting expert:", error);
    }
  };

  const handleEdit = () => {
    navigate(`/edit-expert/${expertId}`); // Navigate to EditExpert page
  };

  if (!data) {
    return <p>No data found. Please select an expert from the table.</p>;
  }

  return (
    <div className="container">
      <div className="box mt-5">
        <h6 style={{ marginBottom: "30px" }}>
          <a className="expertshover" href="/">
            Experts
          </a>
          /
        </h6>
        <div className="container card ">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3>Name: {data.Name}</h3>
            <div className="dropdown mt-3">
              <a
                className="btn btn-secondary dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Option
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <a className="dropdown-item" onClick={handleDelete} href="#">
                    Delete
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" onClick={handleEdit} href="#">
                    Edit
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p>Time: {data.Time}</p>
          <p>Status: {data.Status}</p>
          <p>Task Title: {data.TaskTitle}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
