const UPLOAD_CARD = "patientcards/UPLOAD_CARD";
const DELETE_CARD = "patientcards/DELETE_CARD";
const GET_CARDS = "patientcards/GET_CARDS";

export const getCARDS = (CARD) => {
  return {
    type: GET_CARDS,
    CARD,
  };
};
export const uploadCARD = (CARD) => ({
  type: UPLOAD_CARD,
  CARD,
});
export const deleteCARD = (id) => ({
  type: DELETE_CARD,
  id,
});

//CREATE
export const uploadCARDThunk = (payload) => async (dispatch) => {
  const res = await fetch("/api/patientcards/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const newCard = await res.json();
  dispatch(uploadCARD(newCard));
};

//READ
export const getCARDSThunk = () => async (dispatch) => {
  const res = await fetch("/api/patient_cards");
  if (res.ok) {
    const allCARDs = await res.json();
    dispatch(getCARDS(allCARDs));
  }
};

// UPDATE
export const updateCARDThunk = (id, comment) => async (dispatch) => {
  const res = await fetch(`/api/patient_cards`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, comment }),
  });
  if (res.ok) {
    const updateCard = await res.json();
    dispatch(getCARDS(updateCard));
  }
};


export const getSingleCARDThunk = (CARDId) => async (dispatch) => {
  const res = await fetch(`/api/patientcards/${CARDId}`);
  if (res.ok) {
    const singleCARD = await res.json();
    dispatch(getCARDS(singleCARD));
    return singleCARD;
  }
};

//DELETE
export const deleteCARDThunk = (id) => async (dispatch) => {
  const res = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
    body: JSON.stringify({ id }),
  });
  if (res.ok) {
    await res.json();
    dispatch(deleteCARD(id));
    return res;
  }
};


const initialState = {thing: "" };

const patientCardReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case UPLOAD_CARD:
      newState = {
        ...state,
        [action.CARD.id]: action.CARD,
      };
      return newState;
    case GET_CARDS:
      const allCards = {};
      action.CARD.patient_cards.forEach((card) => {
        allCards[card.id] = card;
      });
      return allCards;

    case DELETE_CARD:
      newState = { ...state };
      delete newState[action.id];
      return { ...newState };
    default:
      return state;
  }
};
export default patientCardReducer;
