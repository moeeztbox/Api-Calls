//We are providing the routes and getting the data from backend through api calls

// import client from "./Client";

// export const expert = (token) => {
//   const headers = {
//     Authorization: `Bearer ${token}`,
//   };

//   return {
//     showExpert: async () => {
//       const response = client.get("/api/experts", headers);
//       return response;
//     },
//   };
// };

import client from "./Client";

export const expert = (token) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return {
    showExpert: async () => {
      const response = await client.get("/api/experts", { headers });
      return response;
    },
  };
};
