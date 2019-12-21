import axios from "axios";
import { toast } from "react-toastify";
import {
  LOADING,
  ERROR,
  FETCH_NEWSLETTER,
  FETCH_NEWSLETTERS,
  CREATE_NEWLETTER
} from "./types";

const API = process.env.REACT_APP_API;

export const fetchNewsletters = () => async dispatch => {
  dispatch({
    type: LOADING
  });

  axios
    .get(`${API}/newsletters`)
    .then(res => {
      dispatch({
        type: FETCH_NEWSLETTERS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: ERROR
      });
      toast.error(err.response.data.message);
    });
};

export const fetchNewsletter = newsletter_id => async dispatch => {
  dispatch({
    type: LOADING
  });

  axios
    .get(`${API}/newsletters/${newsletter_id}`)
    .then(res => {
      dispatch({
        type: FETCH_NEWSLETTER,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: ERROR
      });
      toast.error(err.response.data.message);
    });
};

export const createNewsletter = data => async dispatch => {
  dispatch({
    type: LOADING
  });

  axios
    .post(`${API}/create`, data)
    .then(res => {
        dispatch({ type: CREATE_NEWLETTER, payload: res.data })
        window.href="/"
    })
    .catch(err => {
      dispatch({ type: ERROR });
      toast.error(err.response.data.message);
    });
};
