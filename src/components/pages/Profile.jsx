// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios"; // Import axios

// function Profile() {
//   const { expertId } = useParams(); // Get the expert ID from the route params
//   const [data, setData] = useState(null); // State to store the expert's data
//   const navigate = useNavigate(); // Hook to navigate between routes

//   useEffect(() => {
//     const fetchExpert = async () => {
//       try {
//         // Fetch the specific expert by ID
//         const response = await axios.get(
//           `http://localhost:3000/api/experts/${expertId}`
//         );
//         setData(response.data); // Set the state with the specific expert's data
//         console.log(response.data); // Optional: Log the data to verify
//       } catch (error) {
//         console.error("Error fetching expert:", error);
//       }
//     };

//     fetchExpert();
//   }, [expertId]);

//   const handleDelete = async () => {
//     try {
//       await axios.delete(`http://localhost:3000/api/experts/${expertId}`);
//       navigate("/"); // Navigate back to the main page after deletion
//     } catch (error) {
//       console.error("Error deleting expert:", error);
//     }
//   };

//   const handleEdit = () => {
//     navigate(`/edit-expert/${expertId}`); // Navigate to EditExpert page
//   };

//   if (!data) {
//     return <p>No data found. Please select an expert from the table.</p>;
//   }

//   return (
//     <div className="container">
//       <div className="box mt-5">
//         <h6 style={{ marginBottom: "30px" }}>
//           <a className="expertshover" href="/">
//             Experts
//           </a>
//           /
//         </h6>
//         <div className="container card ">
//           <div style={{ display: "flex", justifyContent: "space-between" }}>
//             <h3>Name: {data.Name}</h3>
//             <div className="dropdown mt-3">
//               <a
//                 className="btn btn-secondary dropdown-toggle"
//                 href="#"
//                 role="button"
//                 id="dropdownMenuLink"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Option
//               </a>
//               <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
//                 <li>
//                   <a className="dropdown-item" onClick={handleDelete} href="#">
//                     Delete
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" onClick={handleEdit} href="#">
//                     Edit
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <p>Time: {data.Time}</p>
//           <p>Status: {data.Status}</p>
//           <p>Task Title: {data.TaskTitle}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import client from "../../api/Client";

// function Profile() {
//   const { expertId } = useParams();
//   const [data, setData] = useState(null);
//   // const navigate = useNavigate();

//   useEffect(() => {
//     const fetchExpert = async () => {
//       try {
//         const response = await client.get(`/api/experts/${expertId}`);
//         setData(response.data);
//       } catch (error) {
//         console.error("Error fetching expert:", error);
//       }
//     };

//     fetchExpert();
//   }, [expertId]);

//   // const handleDelete = async () => {
//   //   try {
//   //     await client.delete(`/api/experts/${expertId}`);
//   //     navigate("/");
//   //   } catch (error) {
//   //     console.error("Error deleting expert:", error);
//   //   }
//   // };

//   // const handleEdit = () => {
//   //   navigate(`/edit-expert/${expertId}`);
//   // };

//   if (!data) {
//     return <p>No data found. Please select an expert from the table.</p>;
//   }

//   return (
//     <div className="container">
//       <div className="box mt-5">
//         <h6 style={{ marginBottom: "30px" }}>
//           <a className="expertshover" href="/">
//             Experts
//           </a>
//           /
//         </h6>
//         <div className="container card ">
//           <div style={{ display: "flex", justifyContent: "space-between" }}>
//             <h3>Name: {data.Name}</h3>
//             <div className="dropdown mt-3">
//               <a
//                 className="btn btn-secondary dropdown-toggle"
//                 href="#"
//                 role="button"
//                 id="dropdownMenuLink"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Option
//               </a>
//               <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Delete
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Edit
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <p>Time: {data.Time}</p>
//           <p>Status: {data.Status}</p>
//           <p>Task Title: {data.TaskTitle}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import client from "../../api/Client";

function Profile() {
  const { expertId } = useParams();
  const [data, setData] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility

  useEffect(() => {
    const fetchExpert = async () => {
      try {
        const response = await client.get(`/api/experts/${expertId}`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching expert:", error);
      }
    };

    fetchExpert();
  }, [expertId]);

  if (!data) {
    return <p>No data found. Please select an expert from the table.</p>;
  }

  return (
    <div className="container mx-auto mt-8 px-4">
      {/* Expert Header */}
      <div className="mb-8">
        <h6 className="text-blue-500 mb-6 text-3xl font-bold">
          <a className="hover:underline" href="/">
            Experts
          </a>{" "}
          /
        </h6>
      </div>

      {/* Card for Expert Details */}
      <div className="bg-gray-100 p-10 rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2 mx-auto">
        <div className="flex justify-between items-start">
          {/* Left Side: Expert Details */}
          <div className="mr-4">
            <h3 className="text-2xl font-bold mb-6">Name: {data.Name}</h3>
            <p className="mb-4">Time: {data.Time}</p>
            <p className="mb-4">Status: {data.Status}</p>
            <p className="mb-4">Task Title: {data.TaskTitle}</p>
          </div>

          {/* Right Side: Dropdown Options */}
          <div className="relative mt-3">
            {/* Options Button */}
            <button
              className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 focus:outline-none"
              onClick={() => setShowDropdown(!showDropdown)} // Toggle dropdown visibility
            >
              Options
            </button>

            {/* Dropdown menu */}
            {showDropdown && (
              <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <li className="border-b border-gray-200">
                  <a
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setShowDropdown(false); // Close dropdown after clicking
                    }}
                  >
                    Delete
                  </a>
                </li>
                <li>
                  <a
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setShowDropdown(false); // Close dropdown after clicking
                    }}
                  >
                    Edit
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
