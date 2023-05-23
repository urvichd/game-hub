import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "27c8a029ce0648a088e3c83dc842b56d",
  },
});
