import axios from "axios";

export const writeProductsToJson = () => {
  axios
    .get("/util/convertProductsToJson")
    .then(() => alert("products written to JSON file"))
    .catch((error) => alert("error in client/src util.js ", error));
};

export const writeJonToDB = () => {
  axios
    .get("/util/addProductToDB")
    .then(() => alert("products added to the database!"))
    .catch((err) => alert("err !", err.message));
};
