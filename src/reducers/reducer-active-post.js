import { AT_POST } from "../actions/action-types";

export default function reducerActivePost(state = null, action) {
  switch (action.type) {
    case AT_POST.READ:
      return action.payload;
  }
  return state;
}
