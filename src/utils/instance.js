import axios from "axios";

export const bank = axios.create({
  baseURL: "https://bank.jedidiazfagundez.site/api/",
});
