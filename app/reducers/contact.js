import {
  ADD_CONTACT,
  REMOVE_CONTACT,
  UPDATE_CONTACT,
  CALL_CONTACT
} from '../actions/actionType';

export default function contact(state={}, action) {
  switch (action.type) {
    case ADD_CONTACT:
      break;
    case REMOVE_CONTACT:
      break;
    case UPDATE_CONTACT:
      break;
    default:
      return state;
  }
}