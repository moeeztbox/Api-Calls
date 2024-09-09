// const Reducer = (state, action) => {
//   switch (action.type) {
//     case "FETCH_EXPERTS_SUCCESS":
//       return { ...state, experts: action.payload, error: null };

//     case "FETCH_EXPERTS_FAILURE":
//       return { ...state, error: action.payload };

//     case " ADD_EXPERT_SUCCESS":
//       return { ...state, experts: [...state.experts, action.payload] };

//     case "EDIT_EXPERT_SUCCESS":
//       return {
//         ...state,
//         experts: state.experts.map((expert) =>
//           expert.id === action.payload.id ? action.payload : expert
//         ),
//       };

//     case "DELETE_EXPERT_SUCCESS":
//       return {
//         ...state,
//         experts: state.experts.filter((expert) => expert.id !== action.payload),
//       };

//     default:
//       return state;
//   }
// };

// export default Reducer;

const expertReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_EXPERTS_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_EXPERTS_SUCCESS":
      return { ...state, loading: false, experts: action.payload };
    case "FETCH_EXPERTS_FAILURE":
      return { ...state, loading: false, error: action.error };

    // case "ADD_EXPERT_REQUEST":
    //   return { ...state, loading: true, error: null };
    // case "ADD_EXPERT_SUCCESS":
    //   return {
    //     ...state,
    //     loading: false,
    //     experts: [...state.experts, action.payload],
    //   };
    // case "ADD_EXPERT_FAILURE":
    //   return { ...state, loading: false, error: action.error };

    // case "EDIT_EXPERT_REQUEST":
    //   return { ...state, loading: true, error: null };
    // case "EDIT_EXPERT_SUCCESS":
    //   return {
    //     ...state,
    //     loading: false,
    //     experts: state.experts.map((expert) =>
    //       expert.id === action.payload.id ? action.payload : expert
    //     ),
    //   };
    // case "EDIT_EXPERT_FAILURE":
    //   return { ...state, loading: false, error: action.error };

    // case "DELETE_EXPERT_REQUEST":
    //   return { ...state, loading: true, error: null };
    // case "DELETE_EXPERT_SUCCESS":
    //   return {
    //     ...state,
    //     loading: false,
    //     experts: state.experts.filter((expert) => expert.id !== action.payload),
    //   };
    // case "DELETE_EXPERT_FAILURE":
    //   return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};

export default expertReducer;
