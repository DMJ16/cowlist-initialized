import axios from "axios";
export default axios.create({
  baseURL: "api/cows",
  responseType: "json",
});
