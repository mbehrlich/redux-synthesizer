export const TracksConstants = {
  START_RECORDING: "START_RECORDING",
  STOP_RECORDING: "STOP_RECORDING",
  ADD_NOTES: "ADD_NOTES"
};

export const StartRecording = () => ({
  type: TracksConstants.START_RECORDING,
  timeNow: Date.now()
});

export const StopRecording = () => ({
  type: TracksConstants.STOP_RECORDING,
  timeNow: Date.now()
});

export const addNotes = (notes) => ({
  type: TracksConstants.ADD_NOTES,
  timeNow: Date.now(),
  notes
});
