import { httpRquest } from "../Request/apiUrl";
import { requestGenerico } from "../Request/requesGenerico";
import { path } from "../Request/path";

export const getProduct = () => {
  return new Promise((resolve, reject) => {
    requestGenerico.get(`${httpRquest}${path.products}`).then((response) => {
      resolve(response);
    });
  });
};
