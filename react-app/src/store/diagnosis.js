const UPLOAD_DIAGNOSIS = "diagnosis/UPLOAD_DIAGNOSIS";
const DELETE_DIAGNOSIS = "diagnosis/DELETE_DIAGNOSIS";
const GET_DIAGNOSIS = "diagnosis/GET_DIAGNOSIS";

export const getDiagnosis = (payload) => {
  return {
    type: GET_DIAGNOSIS,
    payload,
  };
};
export const uploadDiagnosis = (payload) => ({
  type: UPLOAD_DIAGNOSIS,
  payload,
});
export const deleteDiagnosis = (payload) => ({
  type: DELETE_DIAGNOSIS,
  payload,
});

//CREATE
export const uploadDIAGNOSISThunk = (payload) => async (dispatch) => {

  const res = await fetch("/api/diagnosis", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const newDiagnosis = await res.json();
  dispatch(uploadDiagnosis(newDiagnosis));
};

//READ
export const getDIAGNOSISThunk = (id) => async (dispatch) => {
  const res = await fetch(`/api/diagnosis/${id}`);
  if (res.ok) {
    const data = await res.json();
    dispatch(getDiagnosis(data));
  }
};

// UPDATE
export const updateDIAGNOSISThunk = (payload) => async (dispatch) => {
  const res = await fetch(`/api/diagnosis`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (res.ok) {
    const updateDiagnosis = await res.json();
    dispatch(uploadDiagnosis(updateDiagnosis));
  }
};

//DELETE
export const deleteDIAGNOSISThunk = (id) => async (dispatch) => {
  const res = await fetch(`/api/diagnosis/${+id}`, {
    method: "DELETE",
    body: JSON.stringify(),
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(deleteDiagnosis(data));
    return res;
  }
};


const initialState = {};

const DiagnosisReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case UPLOAD_DIAGNOSIS:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
      // return newState;
    case GET_DIAGNOSIS:
      const allpayloads = {};
      action.payload.diagnosis.forEach((payload) => {
        allpayloads[payload.id] = payload;
      });
      return allpayloads;

    case DELETE_DIAGNOSIS:
      newState = { ...state };
      delete newState[action.payload.id];
      return { ...newState };
    default:
      return state;
  }
};
export default DiagnosisReducer;
