import axios from "axios";

const url = "https://ayo-vest.herokuapp.com/api/v1/";

export const investorSignUp = data => {
  return axios({
    method: "POST",
    data: data,
    url: url + "investors"
  });
};

export const investorLogin = data => {
  return axios({
    method: "POST",
    data: data,
    url: url + "investors/auth"
  });
};

export const liveStockGetAll = () => {
  return axios({
    method: "GET",
    url: url + "livestocks/getall"
  });
};
