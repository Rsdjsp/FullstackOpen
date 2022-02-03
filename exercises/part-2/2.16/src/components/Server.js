import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getData = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const createData = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const updateData = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getData, createData, updateData };
