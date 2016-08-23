import {TracksConstants} from '../actions/track_actions';

const recording = (state = false, action) => {
  switch (action.type) {
    case "START_RECORDING":
      return true;
      break;
    case "STOP_RECORDING":
      return false;
      break;
    default:
      return state;
  }
};

export default recording;
