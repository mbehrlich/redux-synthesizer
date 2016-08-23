

export const NotesConstants = {
  KEY_PRESSED: "KEY_PRESSED",
  KEY_RELEASED: "KEY_RELEASED"
};

export const keyPressed = key => ({
  action: NotesConstants.KEY_PRESSED,
  key
});

export const keyReleased = key => {
  return {
    action: NotesConstants.KEY_RELEASED,
    key
  };
};
