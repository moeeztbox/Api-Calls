// import { call, put, takeLatest } from "redux-saga/effects";
// import client from "../../api/Client";

// // Sagas
// function* fetchExperts() {
//   try {
//     const response = yield call(client.get, "/api/experts");
//     yield put({ type: "FETCH_EXPERTS_SUCCESS", payload: response.data });
//   } catch (error) {
//     yield put({ type: "FETCH_EXPERTS_FAILURE", payload: error.message });
//   }
// }

// function* addExpert(action) {
//   try {
//     const response = yield call(client.post, "/api/experts", action.expert);
//     yield put({ type: "ADD_EXPERT_SUCCESS", payload: response.data });
//   } catch (error) {
//     yield put({ type: "ADD_EXPERT_FAILURE", payload: error.message });
//   }
// }

// function* editExpert(action) {
//   try {
//     const response = yield call(
//       client.put,
//       `/api/experts/${action.expert.id}`,
//       action.expert
//     );
//     yield put({ type: "EDIT_EXPERT_SUCCESS", payload: response.data });
//   } catch (error) {
//     yield put({ type: "EDIT_EXPERT_FAILURE", payload: error.message });
//   }
// }

// function* deleteExpert(action) {
//   try {
//     yield call(client.delete, `/api/experts/${action.expertId}`);
//     yield put({ type: "DELETE_EXPERT_SUCCESS", payload: action.expertId });
//   } catch (error) {
//     yield put({ type: "DELETE_EXPERT_FAILURE", payload: error.message });
//   }
// }

// // Watcher Saga
// function* expertSaga() {
//   yield takeLatest("FETCH_EXPERTS_REQUEST", fetchExperts);
//   yield takeLatest("ADD_EXPERT_REQUEST", addExpert);
//   yield takeLatest("EDIT_EXPERT_REQUEST", editExpert);
//   yield takeLatest("DELETE_EXPERT_REQUEST", deleteExpert);
// }

// export default expertSaga;

import { call, put, takeLatest } from "redux-saga/effects";
import client from "../../api/Client";

// Fetch Experts
function* fetchExpertsSaga() {
  try {
    const response = yield call(client.get, "/api/experts");
    yield put({ type: "FETCH_EXPERTS_SUCCESS", payload: response.data });
  } catch (error) {
    yield put({ type: "FETCH_EXPERTS_FAILURE", error: error.message });
  }
}

// Add Expert
// function* addExpertSaga(action) {
//   try {
//     const response = yield call(client.post, "/api/experts", action.payload);
//     yield put({ type: "ADD_EXPERT_SUCCESS", payload: response.data });
//   } catch (error) {
//     yield put({ type: "ADD_EXPERT_FAILURE", error: error.message });
//   }
// }

// // Edit Expert
// function* editExpertSaga(action) {
//   try {
//     const response = yield call(
//       client.put,
//       `/api/experts/${action.payload.id}`,
//       action.payload
//     );
//     yield put({ type: "EDIT_EXPERT_SUCCESS", payload: response.data });
//   } catch (error) {
//     yield put({ type: "EDIT_EXPERT_FAILURE", error: error.message });
//   }
// }

// Delete Expert
// function* deleteExpertSaga(action) {
//   try {
//     yield call(client.delete, `/api/experts/${action.payload}`);
//     yield put({ type: "DELETE_EXPERT_SUCCESS", payload: action.payload });
//   } catch (error) {
//     yield put({ type: "DELETE_EXPERT_FAILURE", error: error.message });
//   }
// }

// Root Saga
function* ExpertSaga() {
  yield takeLatest("FETCH_EXPERTS_REQUEST", fetchExpertsSaga);
  // yield takeLatest("ADD_EXPERT_REQUEST", addExpertSaga);
  // yield takeLatest("EDIT_EXPERT_REQUEST", editExpertSaga);
  // yield takeLatest("DELETE_EXPERT_REQUEST", deleteExpertSaga);
}
export default ExpertSaga;
