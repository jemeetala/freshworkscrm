import Axios from "axios";
const defaultAxios = Axios.create({
  headers: {
    Authorization: "Token token=fg88hUkUczuzGL8gxyXJAA",
    "Content-Type": "application/json",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
    Connection: "keep-alive",
    Cookie:
      "_BEAMER_USER_ID_FmNWbLVp23294=62f49a5e-e6be-494f-930b-179f40d151a9; _BEAMER_FIRST_VISIT_FmNWbLVp23294=2022-06-22T10:07:55.020Z; zarget_user_id=28b0d2dd-6c34-4161-a234-6c1963f8ba90; 28b0d2dd-6c34-4161-a234-6c1963f8ba90=1; _fw_crm_v=6db31c8d-f610-45c4-abbc-9d65982825c6; _BEAMER_DATE_FmNWbLVp23294=2022-06-22T10:59:25.864Z; 28b0d2dd-6c34-4161-a234-6c1963f8ba90=1; _d=ZDE1NWQzNTctMDc3Ni00MGUwLWFhM2UtNjZhMjRhMTM3OTc0; _hp2_id.870388005=%7B%22userId%22%3A%226613280778045038%22%2C%22pageviewId%22%3A%227905279654712775%22%2C%22sessionId%22%3A%228504909593492977%22%2C%22identity%22%3A%22459662297025678332%22%2C%22trackerVersion%22%3A%224.0%22%2C%22identityField%22%3Anull%2C%22isIdentified%22%3A1%7D; _freshsales_session=BAh7B0kiD3Nlc3Npb25faWQGOgZFVEkiJWI5NTc5ZTBmNTI1Zjg5NTEwOWU3NzEyMDA2YWFiZTA5BjsAVEkiEF9jc3JmX3Rva2VuBjsARkkiMW0zREpMbDJySFBLcHdFVlFFT012TUZOSS9RUjFKclRFbnJMQnZmUTIzRjA9BjsARg%3D%3D--b2855df91d3ba281c43a2538421b2a2bf71e3174; _BEAMER_FILTER_BY_URL_FmNWbLVp23294=true; _hp2_ses_props.1325449719=%7B%22r%22%3A%22https%3A%2F%2Fwww.freshworks.com%2F%22%2C%22ts%22%3A1656046167541%2C%22d%22%3A%22dhiwise-459662296123098611.myfreshworks.com%22%2C%22h%22%3A%22%2Fcrm%2Fsales%2Fmy_dashboards%22%2C%22q%22%3A%22%3Ftab%3Dactivities%22%7D; _x_m=x_a; capability_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzY29wZSI6InNjb3BlOmNsaWVudDppbmNvbWluZz9jbGllbnROYW1lPTEwODY1OCBzY29wZTpjbGllbnQ6b3V0Z29pbmc_YXBwU2lkPUFQYWE0MTVmY2RkZTU4MzQ1ZjMzOGQwMzczZGY5YWE1ZTcmY2xpZW50TmFtZT0xMDg2NTgiLCJpc3MiOiJBQzliZGU4MmE3MjA0NDg1ZDUyNjE2YzQzOGM3MGRjOTA4IiwiZXhwIjoxNjU2MDg5MzcwfQ.gnWekGuQ7QZsUHbIJX_fcvdUOyVtkho627i7FujkABI; _session_id=QnRvdzc0S3R6bHBVdkx4M3g4S1RjUEYvbkQ3NVNVNHRKbGtZOVQyWDlSa2RvZUExVzFSVEZRbURrZVFUd0FkL2pIeXlOUWN3M2dLTm02ZHVobDBteHV0dXJuK2FEZEp1YXFvaUNkMzhycUY5UDVINjdHSTZTYlBUcW1YMVJsbGZQc3hDd3FVYmZDVlNjYm0zY2JnbnpBPT0tLVRwblZtenNNSVJMZDl2SHF0eFRRVlE9PQ%3D%3D--4d6bbcbd18f0b1fce335a6f787b5a333971d5928; XSRF-TOKEN=7d3d543c-c6cc-4b2b-bc1e-3e8a1b264a8b.9mVCLzd7eDb6AtAa2zLCYTgMV7GdKG+iooNg9SioArY=; _hp2_id.1325449719=%7B%22userId%22%3A%22712357654324296%22%2C%22pageviewId%22%3A%226475478443627029%22%2C%22sessionId%22%3A%226559335909861264%22%2C%22identity%22%3A%22459662297025678332%22%2C%22trackerVersion%22%3A%224.0%22%2C%22identityField%22%3Anull%2C%22isIdentified%22%3A1%2C%22oldIdentity%22%3Anull%7D",
    Referer:
      "https://dhiwise-459662296123098611.myfreshworks.com/crm/sales/calendar/tasks?filter=completed",
    "Accept-Language": "en-US,en;q=0.9",
    "Cache-Control": "no-store, no-cache, must-revalidate",
    "Sec-Fetch-Site": "same-origin",
    "X-CSRF-Token": "m3DJLl2rHPKpwEVQEOMvMFNI/QR1JrTEnrLBvfQ23F0=",
    "X-Requested-With": "XMLHttpRequest",
  },
});
defaultAxios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const postTasks = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://dhiwise-459662296123098611.myfreshworks.com/crm/sales/api/tasks`,
    method: "post",
    params,
    headers,
    data: {
      task: {
        title: "Sample Task5",
        description: "This is just a sample task4.",
        due_date: "18/7/2000",
        owner_id: "70000078627",
        outcome_id: "70002087555",
        task_type_id: "70000179274",
      },
      ...data,
    },
  });
};
export const getTasks = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://dhiwise-459662296123098611.myfreshworks.com//crm/sales/api/tasks`,
    method: "get",
    params: { filter: "open", ...params },
    headers,
    data,
  });
};
