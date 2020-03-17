import axios from "axios";

const url = "https://ayo-vest.herokuapp.com/api/v1/";

/**
 *
 * @param {fullname, email, password, password_confirmation} data
 *
 * Sign up for investors
 */
export const investorSignUp = data => {
  return axios({
    method: "POST",
    data: data,
    url: url + "investors"
  });
};

/**
 *
 * @param {email, password} data
 *
 * Login for investors
 */
export const investorLogin = data => {
  return axios({
    method: "POST",
    data: data,
    url: url + "investors/auth"
  });
};

/**
 * Get all livestocks
 */
export const liveStockGetAll = () => {
  return axios({
    method: "GET",
    url: url + "livestocks/getall"
  });
};

/**
 * Login With Google Account
 */

export const loginwithgoogle = () => {
  return axios({
    method: "POST",
    url: url + "investors/auth/google"
  });
};

/**
 * @param { id } data
 * get livestock by id
 */
export const livestockGetOne = id => {
  return axios({
    method: "GET",
    url: url + "livestocks/getone?id=" + id
  });
};
