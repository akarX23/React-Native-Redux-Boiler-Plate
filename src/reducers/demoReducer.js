// Import action types
import { DEMO_ACTION } from "../ACTION_TYPES";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case DEMO_ACTION:
      return { ...state, payload };
    default:
      return state;
  }
};
