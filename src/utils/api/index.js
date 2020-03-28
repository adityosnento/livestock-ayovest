import axios from "axios";

const url = process.env.REACT_APP_BASE_URL;
console.log(url)
const userId = localStorage.getItem("id");

// Default base url
axios.defaults.baseURL = url;
axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

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
    url: "investors"
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
    url: "investors/auth"
  });
};

/**
 * Get all livestocks
 */
export const liveStockGetAll = () => {
  return axios({
    method: "GET",
    url: "livestocks/getall"
  });
};

/**
 * Get all livestock page n
 */
export const liveStockGetAllPage = page => {
  return axios({
    method: "GET",
    url: "livestocks/getall?page=" + page
  });
};

/**
 * Login With Google Account
 */

export const loginwithgoogle = () => {
  return axios({
    method: "POST",
    url: "investors/auth/google"
  });
};

/**
 * @param { id } data
 * get livestock by id
 */
export const livestockGetOne = id => {
  return axios({
    method: "GET",
    url: "livestocks/getone?id=" + id
  });
};

/**
 * edit user profile (get current-user)
 */
export const profileCurrentUser = () => {
  return axios({
    method: "GET",
    url: "investors/current-user?&id=" + userId
  });
};

/**
 * updating User data
 */
export const updateUserDataInvestor = data => {
  return axios({
    method: "PUT",
    data: data,
    url: "investors"
  });
};
