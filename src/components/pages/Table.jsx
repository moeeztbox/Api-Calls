// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"; // Import axios
// import { useSelector } from "react-redux";

// function Table() {
//   const [Experts, setExperts] = useState([]);
//   const navigate = useNavigate();

//   const { experts } = useSelector((state) => state.Reducer);

//   const handleAddExpert = () => {
//     navigate("/add-expert");
//   };

//   const OpenProfile = (e, expertId) => {
//     e.preventDefault();
//     navigate(`/profile/${expertId}`);
//     console.log("hello", expertId);
//   };

//   return (
//     <>
//       <div className="container mt-5">
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <h3>Task Table</h3>
//           <button className="btn btn-primary" onClick={handleAddExpert}>
//             Add Expert
//           </button>
//         </div>
//         <table className="table mt-3">
//           <thead className="tablehead">
//             <tr>
//               <th scope="col">Name</th>
//               <th scope="col">Status</th>
//               <th scope="col">Task Title</th>
//               <th scope="col">Time</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Experts.length > 0 ? (
//               Experts.map((expert) => (
//                 <tr key={expert.id}>
//                   <td>
//                     <a onClick={(e) => OpenProfile(e, expert.id)} href="#">
//                       {expert.Name}
//                     </a>
//                   </td>
//                   <td>{expert.Status}</td>
//                   <td>{expert.TaskTitle}</td>
//                   <td>{expert.Time}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4">No experts found</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// }

// export default Table;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import client from "../../api/Client";
import "../../App.css";

const Table = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExperts = async () => {
      try {
        const response = await client.get("/api/experts");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching experts:", error);
      }
    };

    fetchExperts();
  }, []);

  const showProfile = (id) => {
    navigate(`/profile/${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mt-5 font-bold mb-9 text-red-500">Experts</h1>
      {data.length === 0 ? (
        <p className="text-gray-600">No experts found.</p>
      ) : (
        <table className="container text-center">
          <thead>
            <tr className="border-bottom border-black bg-amber-400">
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Task Title</th>
              <th className="px-4 py-2 border-b">Status</th>
              <th className="px-4 py-2 border-b">Time</th>
            </tr>
          </thead>
          <tbody>
            {data.map((expert) => (
              <tr key={expert.id} className="hover:bg-gray-50 border-bottom">
                <td className="px-4 py-2 border-b">
                  <a
                    onClick={() => showProfile(expert.id)}
                    href="#"
                    className="no-underline"
                  >
                    {expert.Name}
                  </a>
                </td>
                <td className="px-4 py-2 border-b">{expert.TaskTitle}</td>
                <td className="px-4 py-2 border-b">{expert.Status}</td>
                <td className="px-4 py-2 border-b">{expert.Time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
