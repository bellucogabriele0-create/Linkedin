export const GET_PROFILE = "GET_PROFILE";
export const GET_PROFILE_EXP = "GET_PROFILE_EXP";

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

export const getProfileExperiences = () => {
  return (dispatch, getState) => {
    const endpoint = "https://striveschool-api.herokuapp.com/api/profile/";
    let userID = "6937e390d322f500151076b9";
    const finalEndpoint = endpoint + userID + "/experiences";
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZTM5MGQzMjJmNTAwMTUxMDc2YjkiLCJpYXQiOjE3NjUyOTA2NTQsImV4cCI6MTc2NjUwMDI1NH0.VJvGSSmDcPbUfZIrUmeBRIuPb4Zj0J41kYkWAJBR4pc";
    fetch(finalEndpoint, { headers: { Authorization: `Bearer ${token}` } })
      .then((r) => {
        if (r.ok) return r.json();
        else throw new Error("Errore nel recupero esperienze " + r.status);
      })
      .then((data) => {
        console.log(data);
        dispatch({
          type: GET_PROFILE_EXP,
          payload: data,
        });
      })
      .catch((err) => {
        console.log("Errore", err);
      });
  };
};
