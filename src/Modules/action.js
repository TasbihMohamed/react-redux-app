import axios from "axios";
import { ActionTypes } from "./action-types";

export const getAllDoctors = () => {
  return async (dispatch, getState) => {
    dispatch({ type: "FETCH_DOCTORS" });
    try {
      const resp = await axios.get(
        "https://cannula-doctors.onrender.com/dashboard/doctor/all?limit=100&page=1"
      );
      // console.log(resp);
      dispatch({
        type: ActionTypes.FETCH_DOCTORS_SUCCESS,
        payload: resp.data,
      });
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: "FETCH_DOCTORS_FAIL",
        payload: err.message,
      });
    }
  };
};

//admin verify

export const adminVerifyRequest = ({ id }) => {
  console.log("adminVerifyRequest action ::: body", id);
  return async (dispatch, getState) => {
    dispatch({ type: "FETCH_ADMINVERIFY" });
    try {
      const resp = await axios.put(
        `https://cannula-doctors.onrender.com/dashboard/doctor/verify/${id}`
      );
      // console.log("666666", resp.data);

      dispatch({
        type: "FETCH_ADMINVERIFY_SUCCESS",
        payload: resp.data,
      });
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: "FETCH_ADMINVERIFY_FAIL",
        payload: err.message,
      });
    }
  };
};

//
// 
export const doctorInfoRequest = ({ id }) => {
  console.log("doctorInfoRequest action ::: body", id);
  return async (dispatch, getState) => {
    dispatch({ type: "FETCH_DOCTORINFO" });
    try {
      const resp = await axios.get(
        `https://cannula-doctors.onrender.com/dashboard/doctor/get/${id}`
      );
      // console.log("666666", resp.data);

      dispatch({
        type: "FETCH_DOCTORINFO_SUCCESS",
        payload: resp.data,
      });
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: "FETCH_DOCTORINFO_FAIL",
        payload: err.message,
      });
    }
  };
};

export const getSpecializations = () => {
  return async (dispatch, getState) => {
    dispatch({ type: "FETCH_SPECIALIZAIONS" });
    try {
      const resp = await axios.get(
        "https://cannula-doctors.onrender.com/doctor-app/register/specializations"
      );
      // console.log(resp);
      dispatch({
        type: "FETCH_SPECIALIZAIONS_SUCCESS",
        payload: resp.data,
      });
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: "FETCH_SPECIALIZAIONS_FAIL",
        payload: err.message,
      });
    }
  };
};

export const getGovernorates = () => {
  return async (dispatch, getState) => {
    dispatch({ type: "FETCH_GOVERNORATES" });
    try {
      const resp = await axios.get(
        `https://api.countrystatecity.in/v1/countries/eg/states`,
        {
          headers: {
            "X-CSCAPI-KEY":
              "b1lSMTZRUzNiN0ZoVzlMUUh3NTloSE9KNnRaQndjR3BpeXVScnNicA==",
          },
        }
      );
      // console.log("666666", resp.data);
      dispatch({
        type: "FETCH_GOVERNORATES_SUCCESS",
        payload: resp.data,
      });
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: "FETCH_GOVERNORATES_FAIL",
        payload: err.message,
      });
    }
  };
};

//cities
export const getCities = ({ iso2 }) => {
  // console.log("actions ::: iso2", iso2);
  return async (dispatch, getState) => {
    dispatch({ type: "FETCH_CITIES" });
    try {
      const resp = await axios.get(
        `https://api.countrystatecity.in/v1/countries/eg/states/${iso2}/cities`,
        {
          headers: {
            "X-CSCAPI-KEY":
              "b1lSMTZRUzNiN0ZoVzlMUUh3NTloSE9KNnRaQndjR3BpeXVScnNicA==",
          },
        }
      );
      // console.log("666666", resp.data);

      dispatch({
        type: "FETCH_CITIES_SUCCESS",
        payload: resp.data,
      });
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: "FETCH_CITIES_FAIL",
        payload: err.message,
      });
    }
  };
};

//register form join req
export const postJoinRequest = ({ body }) => {
  console.log("postJoinRequest action ::: body", body);
  return async (dispatch, getState) => {
    dispatch({ type: "FETCH_JOINREQUEST" });
    try {
      const resp = await axios.post(
        `https://cannula-doctors.onrender.com/doctor-app/register/join-request/sms`,
        body
      );
      // console.log("666666", resp.data);

      dispatch({
        type: "FETCH_JOINREQUEST_SUCCESS",
        payload: resp.data,
      });
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: "FETCH_JOINREQUEST_FAIL",
        payload: err.message,
      });
    }
  };
};

//user verify registeration after sms
export const verifyRegisterationRequest = ({ body }) => {
  console.log("user verify  action ::: body", body);
  return async (dispatch, getState) => {
    dispatch({ type: "FETCH_VERIFYREGISTERATION" });
    try {
      const resp = await axios.post(
        `https://cannula-doctors.onrender.com/doctor-app/register/verify`,
        body
      );
      console.log("666666", resp.data);
      dispatch({
        type: "FETCH_VERIFYREGISTERATION_SUCCESS",
        payload: resp.data,
      });
    } catch (err) {
      console.log("error action::", err.message);
      dispatch({
        type: "FETCH_VERIFYREGISTERATION_FAIL",
        payload: err.message,
      });
    }
  };
};

// check doctor verification for contine info
export const checkVerificationRequest = ({ id }) => {
  console.log("actions ::: id", id);
  return async (dispatch, getState) => {
    dispatch({ type: "FETCH_CHECKVERIFICATION" });
    try {
      const resp = await axios.get(
        `https://cannula-doctors.onrender.com/test/check-verified/${id}`
      );
      console.log("666666", resp.data);

      dispatch({
        type: "FETCH_CHECKVERIFICATION_SUCCESS",
        payload: resp.data,
      });
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: "FETCH_CHECKVERIFICATION_FAIL",
        payload: err.message,
      });
    }
  };
};
