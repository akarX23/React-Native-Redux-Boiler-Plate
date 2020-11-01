import axios from "axios";
import { DEMO_ACTION } from "../Action_TYPES";

export function demoAction() {
  return {
    type: DEMO_ACTION,
    payload: null,
  };
}
