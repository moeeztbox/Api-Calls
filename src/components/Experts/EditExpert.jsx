// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// function EditExpert() {
//   const { expertId } = useParams();
//   const [expertData, setExpertData] = useState({
//     id: "",
//     Name: "",
//     TaskTitle: "",
//     Status: "",
//     Time: "",
//   });
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchExpert = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:3000/api/experts/${expertId}`
//         );
//         const data = await response.json();
//         setExpertData(data);
//       } catch (error) {
//         console.error("Error fetching expert:", error);
//       }
//     };

//     fetchExpert();
//   }, [expertId]);

//   const handleChange = (e) => {
//     setExpertData({ ...expertData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(
//         `http://localhost:3000/api/experts/${expertId}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(expertData),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }

//       navigate("/");
//     } catch (error) {
//       console.error("Error updating expert:", error);
//     }
//   };

//   return (
//     <div className="container bg-secondary">
//       <form onSubmit={handleSubmit}>
//         <h1>Edit Expert</h1>
//         <div
//           className="box"
//           style={{ display: "flex", flexDirection: "column" }}
//         >
//           <label htmlFor="Name">Name</label>
//           <input
//             value={expertData.Name}
//             onChange={handleChange}
//             className="input mt-2 mb-3"
//             type="text"
//             name="Name"
//             placeholder="Enter your name"
//             required
//           />

//           <label htmlFor="TaskTitle">Task Title</label>
//           <input
//             value={expertData.TaskTitle}
//             onChange={handleChange}
//             className="input mt-2 mb-3"
//             type="text"
//             name="TaskTitle"
//             placeholder="Enter your task title"
//             required
//           />

//           <label htmlFor="Status">Status</label>
//           <input
//             value={expertData.Status}
//             onChange={handleChange}
//             className="input mt-2 mb-3"
//             type="text"
//             name="Status"
//             placeholder="Enter your status"
//             required
//           />

//           <label htmlFor="Time">Time</label>
//           <input
//             value={expertData.Time}
//             onChange={handleChange}
//             className="input mt-2 mb-3"
//             type="text"
//             name="Time"
//             disabled
//           />

//           <button className="btn btn2 mb-4 mt-2" type="submit">
//             Save Changes
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default EditExpert;

// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import client from "../../api/Client";

// function EditExpert() {
//   const { expertId } = useParams();
//   const [expertData, setExpertData] = useState({
//     id: "",
//     Name: "",
//     TaskTitle: "",
//     Status: "",
//     Time: "",
//   });
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchExpert = async () => {
//       try {
//         const response = await client.get(`/api/experts/${expertId}`);
//         setExpertData(response.data);
//       } catch (error) {
//         console.error("Error fetching expert:", error);
//       }
//     };

//     fetchExpert();
//   }, [expertId]);

//   const handleChange = (e) => {
//     setExpertData({ ...expertData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await client.put(`/api/experts/${expertId}`, expertData);

//       if (!response.status === 200) {
//         throw new Error("Network response was not ok");
//       }

//       navigate("/");
//     } catch (error) {
//       console.error("Error updating expert:", error);
//     }
//   };

//   return (
//     <div className="container bg-secondary">
//       <form onSubmit={handleSubmit}>
//         <h1>Edit Expert</h1>
//         <div
//           className="box"
//           style={{ display: "flex", flexDirection: "column" }}
//         >
//           <label htmlFor="Name">Name</label>
//           <input
//             value={expertData.Name}
//             onChange={handleChange}
//             className="input mt-2 mb-3"
//             type="text"
//             name="Name"
//             placeholder="Enter your name"
//             required
//           />

//           <label htmlFor="TaskTitle">Task Title</label>
//           <input
//             value={expertData.TaskTitle}
//             onChange={handleChange}
//             className="input mt-2 mb-3"
//             type="text"
//             name="TaskTitle"
//             placeholder="Enter your task title"
//             required
//           />

//           <label htmlFor="Status">Status</label>
//           <input
//             value={expertData.Status}
//             onChange={handleChange}
//             className="input mt-2 mb-3"
//             type="text"
//             name="Status"
//             placeholder="Enter your status"
//             required
//           />

//           <label htmlFor="Time">Time</label>
//           <input
//             value={expertData.Time}
//             onChange={handleChange}
//             className="input mt-2 mb-3"
//             type="text"
//             name="Time"
//             disabled
//           />

//           <button className="btn btn2 mb-4 mt-2" type="submit">
//             Save Changes
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default EditExpert;
