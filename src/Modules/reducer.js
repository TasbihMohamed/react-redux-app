import { ActionTypes } from "./action-types";

const initialState = {
  items: [],
  adminVerify: [],
  governorates: [],
  specializations: [],
  cities: [],
  joinRequest: [],
  checkVerification: [],
  verifyRegisteration: [],doctorInfo:[],
  loading: false,
  error: "",
};

export const doctorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DOCTORS":
      return {
        ...state,
        items: [],
        loading: true,
        error: "",
      };
    case ActionTypes.FETCH_DOCTORS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
        error: "",
      };
    case "FETCH_DOCTORS_FAIL":
      return {
        ...state,
        loading: false,
        items: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export const adminVerifyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ADMINVERIFY":
      return {
        ...state,
        adminVerify: [],
        loading: true,
        error: "",
      };
    case "FETCH_ADMINVERIFY_SUCCESS":
      return {
        ...state,
        loading: false,
        adminVerify: action.payload,
        error: "",
      };
    case "FETCH_ADMINVERIFY_FAIL":
      return {
        ...state,
        loading: false,
        adminVerify: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export const doctorInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DOCTORINFO":
      return {
        ...state,
        doctorInfo: [],
        loading: true,
        error: "",
      };
    case "FETCH_DOCTORINFO_SUCCESS":
      return {
        ...state,
        loading: false,
        doctorInfo: action.payload,
        error: "",
      };
    case "FETCH_DOCTORINFO_FAIL":
      return {
        ...state,
        loading: false,
        doctorInfo: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export const specializationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SPECIALIZAIONS":
      return {
        ...state,
        specializations: [],
        loading: true,
        error: "",
      };
    case "FETCH_SPECIALIZAIONS_SUCCESS":
      return {
        ...state,
        loading: false,
        specializations: action.payload,
        error: "",
      };
    case "FETCH_SPECIALIZAIONS_FAIL":
      return {
        ...state,
        loading: false,
        specializations: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

//cities
export const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CITIES":
      return {
        ...state,
        cities: [],
        loading: true,
        error: "",
      };
    case "FETCH_CITIES_SUCCESS":
      return {
        ...state,
        loading: false,
        cities: action.payload,
        error: "",
      };
    case "FETCH_CITIES_FAIL":
      return {
        ...state,
        loading: false,
        cities: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export const governoratesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GOVERNORATES":
      return {
        ...state,
        governorates: [],
        loading: true,
        error: "",
      };
    case "FETCH_GOVERNORATES_SUCCESS":
      return {
        ...state,
        loading: false,
        governorates: action.payload,
        error: "",
      };
    case "FETCH_GOVERNORATES_FAIL":
      return {
        ...state,
        loading: false,
        governorates: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export const joinRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_JOINREQUEST":
      return {
        ...state,
        joinRequest: [],
        loading: true,
        error: "",
      };
    case "FETCH_JOINREQUEST_SUCCESS":
      return {
        ...state,
        loading: false,
        joinRequest: action.payload,
        error: "",
      };
    case "FETCH_JOINREQUEST_FAIL":
      return {
        ...state,
        loading: false,
        joinRequest: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export const verifyRegisterationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_VERIFYREGISTERATION":
      return {
        ...state,
        verifyRegisteration: [],
        loading: true,
        error: "",
      };
    case "FETCH_VERIFYREGISTERATION_SUCCESS":
      return {
        ...state,
        loading: false,
        verifyRegisteration: action.payload,
        error: "",
      };
    case "FETCH_VERIFYREGISTERATION_FAIL":
      return {
        ...state,
        loading: false,
        verifyRegisteration: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

// check doctor verification
export const checkVerificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CHECKVERIFICATION":
      return {
        ...state,
        checkVerification: [],
        loading: true,
        error: "",
      };
    case "FETCH_CHECKVERIFICATION_SUCCESS":
      return {
        ...state,
        loading: false,
        checkVerification: action.payload,
        error: "",
      };
    case "FETCH_CHECKVERIFICATION_FAIL":
      return {
        ...state,
        loading: false,
        checkVerification: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
