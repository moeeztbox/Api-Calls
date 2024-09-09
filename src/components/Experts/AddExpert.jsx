// import axios from "axios";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";

// function AddExpert() {
//   const navigate = useNavigate();

//   const [data, setData] = useState({
//     Name: "",
//     TaskTitle: "",
//     Status: "",
//   });

//   const HandleChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const HandleSubmit = async (e) => {
//     e.preventDefault();

//     const currentTime = new Date().toLocaleTimeString();

//     const expertWithTime = {
//       ...data,
//       Time: currentTime,
//       id: uuidv4(),
//     };

//     try {
//       // Use axios to make the POST request
//       const response = await axios.post(
//         "http://localhost:3000/api/experts",
//         expertWithTime
//       );

//       if (response.status !== 200) {
//         // Ensure the status code is correct
//         throw new Error("Failed to add expert");
//       }

//       navigate("/"); // Navigate back to the home page after successful addition
//     } catch (error) {
//       console.error("Error adding expert:", error);
//     }
//   };

//   return (
//     <div>
//       <div className="container bg-light">
//         <form onSubmit={HandleSubmit}>
//           <h1>Add expert</h1>
//           <div
//             className="box"
//             style={{ display: "flex", flexDirection: "column" }}
//           >
//             <label htmlFor="Name">Name</label>
//             <input
//               onChange={HandleChange}
//               className="input mt-2 mb-3"
//               type="text"
//               name="Name"
//               placeholder="Enter your name"
//               required
//             />

//             <label htmlFor="TaskTitle">Task Title</label>
//             <input
//               onChange={HandleChange}
//               className="input mt-2 mb-3"
//               type="text"
//               name="TaskTitle"
//               placeholder="Enter your task title"
//               required
//             />
//             <label htmlFor="Status">Status</label>
//             <input
//               onChange={HandleChange}
//               className="input mb-3 mt-2"
//               type="text"
//               name="Status"
//               placeholder="Enter your status"
//               required
//             />
//             <button className="btn btn2 mb-4 mt-2" type="submit">
//               Save
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AddExpert;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";
// import client from "../../api/Client";

// function AddExpert() {
//   const navigate = useNavigate();

//   const [data, setData] = useState({
//     Name: "",
//     TaskTitle: "",
//     Status: "",
//   });

//   const HandleChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const HandleSubmit = async (e) => {
//     e.preventDefault();

//     const currentTime = new Date().toLocaleTimeString();

//     const expertWithTime = {
//       ...data,
//       Time: currentTime,
//       id: uuidv4(),
//     };

//     try {
//       const response = await client.post("/api/experts", expertWithTime);

//       if (response.status !== 201) {
//         // Changed status to 201 for creation success
//         throw new Error("Failed to add expert");
//       }

//       navigate("/"); // Navigate back to the home page after successful addition
//     } catch (error) {
//       console.error("Error adding expert:", error);
//     }
//   };

//   return (
//     <div>
//       <div className="container bg-light">
//         <form onSubmit={HandleSubmit}>
//           <h1>Add expert</h1>
//           <div
//             className="box"
//             style={{ display: "flex", flexDirection: "column" }}
//           >
//             <label htmlFor="Name">Name</label>
//             <input
//               onChange={HandleChange}
//               className="input mt-2 mb-3"
//               type="text"
//               name="Name"
//               placeholder="Enter your name"
//               required
//             />

//             <label htmlFor="TaskTitle">Task Title</label>
//             <input
//               onChange={HandleChange}
//               className="input mt-2 mb-3"
//               type="text"
//               name="TaskTitle"
//               placeholder="Enter your task title"
//               required
//             />
//             <label htmlFor="Status">Status</label>
//             <input
//               onChange={HandleChange}
//               className="input mb-3 mt-2"
//               type="text"
//               name="Status"
//               placeholder="Enter your status"
//               required
//             />
//             <button className="btn btn2 mb-4 mt-2" type="submit">
//               Save
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AddExpert;
