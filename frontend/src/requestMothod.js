import axios from "axios";

const BASE_URL = "http://localhost:8080/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTRhZjgzZTY2NzlhMjgzMGVkM2NkOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTE1ODEzMiwiZXhwIjoxNjU5NDE3MzMyfQ.j2nzTDxDFAVrpjKJjYtd9NMpDEhRLi_yeV86ImQfkis";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
