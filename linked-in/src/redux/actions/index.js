export const GET_PROFILE = "GET_PROFILE";

export const getProfile = () => {
  return (dispatch, getState) => {
    // const currentState = getState(); servirà per fetch su profilo specifico
    const endpoint = "https://striveschool-api.herokuapp.com/api/profile/me";
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZTM5MGQzMjJmNTAwMTUxMDc2YjkiLCJpYXQiOjE3NjUyOTA2NTQsImV4cCI6MTc2NjUwMDI1NH0.VJvGSSmDcPbUfZIrUmeBRIuPb4Zj0J41kYkWAJBR4pc";
    fetch(endpoint, { headers: { Authorization: `Bearer ${token}` } })
      .then((r) => {
        if (r.ok) return r.json();
        else throw new Error("Errore nel recupero dati " + r.status);
      })
      .then((data) => {
        console.log(data);
        dispatch({
          type: GET_PROFILE,
          payload: data,
        });
      })
      .catch((err) => {
        console.log("Errore", err);
      });
  };
};

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM5ODU5NjhkYTViODAwMTVmMjU4ZjQiLCJpYXQiOjE3NjUzNzc0MzEsImV4cCI6MTc2NjU4NzAzMX0.aj1_rlfzOg7IXlTUw6NmZ1W1H3D6Ea9hXSMFpIMKCD8
