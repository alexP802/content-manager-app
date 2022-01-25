import axios from "axios";
export default async function handler(req, res) {
  const axiosRes = await axios.get("http://localhost:3001/api/active-resource");
  const resource = axiosRes.data;

  return res.send(resource);
}
