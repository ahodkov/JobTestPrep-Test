import axios from "axios";
import { CALCULATE_API_URL, ROOT_API_URL } from "./const";

class CalculateOperation {
  static checkStatusServer = () => {
    return axios.get(ROOT_API_URL);
  };

  static calculate = (x, y, operator) => {
    return axios.post(CALCULATE_API_URL, { x: x, y: y, operator: operator });
  };
}

export default CalculateOperation;
