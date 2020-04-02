import axios from "axios";

const url = "https://ayo-vest.herokuapp.com/api/v1/";
console.log(url);
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
    url: "livestocks/getall?admin=true"
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
 * Get livestock by category
 */
export const liveStockGetCategory = category => {
  return axios({
    method: "GET",
    url: "livestocks/getall?kind=" + category + "&admin=true"
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

/**
 * Rrecovering password
 */
export const investorRecoverPassword = data => {
  return axios({
    method: "POST",
    data: data,
    url: "investors/recover"
  });
};

/**
 * Get all investments
 */
export const investmentsGetAll = () => {
  return axios({
    method: "GET",
    url: "investments/getall"
  });
};

/**
 * Create investment
 */
export const investmentCreate = data => {
  return axios({
    method: "POST",
    url: "investments",
    data: data
  });
};

export const investmentsGetOne = id => {
  return axios({
    method: "GET",
    url: "investments/getone"
  });
};

/**
 * Get all my payments
 */
export const paymentsGetOne = investmentId => {
  return axios({
    method: "GET",
    url: "payments?investmentId=" + investmentId
  });
};

export const paymentsCreate = (data, id) => {
  return axios({
    method: "POST",
    data: data,
    url: "payments?investmentId=" + id
  });
};
