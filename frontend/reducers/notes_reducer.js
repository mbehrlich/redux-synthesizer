import {NotesConstants} from '../actions/note_actions';


const notes = (state = [], action) => {

  // let validKeys = [65, 83, 68, 70, 71];
  let keyMap = {65: 'C5', 83: 'D5', 68: 'E5', 70: 'F5', 71: 'G5'};
  let keyIndex = state.indexOf(keyMap[action.key]);
  switch (action.type) {
    case "KEY_PRESSED":
      if (keyIndex === -1 && keyMap[action.key] !== undefined) {
        return [...state, keyMap[action.key]];
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
