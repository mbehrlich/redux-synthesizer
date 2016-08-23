import {NotesConstants} from '../actions/note_actions';


const notes = (state = [], action) => {
  let keyIndex = state.indexOf(action.key);
  let validKeys = ['a', 's', 'd', 'f', 'g'];
  let keyMap = {'a': 'C5', 's': 'D5', 'd': 'E5', 'f': 'F5', 'g': 'G5'};
  switch (action.type) {
    case "KEY_PRESSED":
      if (keyIndex === -1 && keyMap[action.key] !== undefined) {
        return [...state, action.key];
      } else {
        return state;
      }
      break;
    case "KEY_RELEASED":
      if (keyIndex !== -1 && keyMap[action.key] !== undefined) {
        return state.slice(0, keyIndex).concat(state.slice(keyIndex + 1));
      } else {
        return state;
      }
      break;
    default:
      return state;
  }
};

export default notes;
