import { Navigate} from "react-router-dom";

import Admin from "../components/Admin";

const PrivateRoutes = () => {
  //let auth={'token':false}

let hastoken = JSON.parse(localStorage.getItem("auth"));

 //let hastoken1 = null;

  console.log(hastoken);

  return hastoken ? <Admin /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
