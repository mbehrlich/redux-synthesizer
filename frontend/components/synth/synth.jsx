import React from 'react';
import Note from '../../util/note';
import NoteKey from './note_key';
import {TONES, NOTE_NAMES} from '../../util/tones';
import $ from 'jquery';

class Synth extends React.Component {
  constructor() {
    super();
    this.notes = NOTE_NAMES.map((noteName) => {
      return new Note(TONES[noteName]);
    });
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.playNotes = this.playNotes.bind(this);
  }

  onKeyDown(e) {
    this.props.keyPressed(e.keyCode);
  }

  onKeyUp(e) {
    this.props.keyReleased(e.keyCode);
  }

  componentDidMount() {
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  playNotes() {
    this.notes.forEach( (note, idx) => {
      if (this.props.notes.indexOf(NOTE_NAMES[idx]) !== -1) {
        note.start();
      } else {
        note.stop();
      }
    } );
  }

  render() {
    this.playNotes();
    let notes = this.notes.map((note, idx) => (
      <li key={NOTE_NAMES[idx]}><NoteKey noteName={NOTE_NAMES[idx]} /></li>
    ));
    return (
      <ul>
        {notes}
      </ul>
    );
  }
}

export default Synth;
