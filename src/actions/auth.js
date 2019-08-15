// import axios from "axios";
   
// import { REGISTER_SUCCESS, REGISTER_FAIL } from "./types";

// // Register user
// export const register = ({ name, email, password }) => async dispatch => {
//   const config = {
//     headers: {
//       "Content-Type": "application/json"
//     }
//   };

//   const body = JSON.stringify({ name, email, password });
//   try {
//     const res = await axios.post("./api/login", body, config);
//     dispatch({
//       type: REGISTER_SUCCESS,
//       payload: res.data
//     });wa
//   } catch (err) {
//     dispatch({
//       type: REGISTER_FAIL
//     });
//   }
// };
