import {TracksConstants} from '../actions/track_actions';
import {merge} from 'lodash';

let currTrackId = 0;

const tracks = (state = {}, action) => {
  let newState = merge({}, state);
  switch (action.type) {
    case "START_RECORDING":
      currTrackId++;
      let newTrack = {
        id: currTrackId,
        name: `Track ${currTrackId}`,
        roll: [],
        timeStart: action.timeNow
      };
      newState[currTrackId] = newTrack;
      return newState;
      break;
    case "STOP_RECORDING":
      newState[currTrackId].roll.push({notes: [], timeSlice: action.timeNow - state[currTrackId].timeStart});
      return newState;
      break;
    case "ADD_NOTES":
      newState[currTrackId].roll.push({notes: notes, timeSlice: action.timeNow - state[currTrackId].timeStart});
      return newState;
      break;
    default:
      return state;
  }
};

export default tracks;
