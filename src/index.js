import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import DrumMachine from './components/DrumMachine';

import * as serviceWorker from './serviceWorker';

const PADS = [
  {
      pad: 0, 
      key: 'Q',
      description: 'Chord-I',
      url:'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
      pad: 1,
      key: 'W',
      description: 'Chord-II',
      url:'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
      pad: 2,
      key: 'E',
      description: 'Chord-III',
      url:'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
      pad: 3,
      key: 'A',
      description: 'Shaker',
      url:'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
      pad: 4,
      key: 'S',
      description: 'Open-HH',
      url:'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
      pad: 5,
      key: 'D',
      description: 'Closed-HH',
      url:'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
      pad: 6,
      key: 'Z',
      description: 'Punchy-Kick',
      url:'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
      pad: 7,
      key: 'X',
      description: 'Side-Stick',
      url:'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
      pad: 8,
      key: 'C',
      description: 'Snare',
      url:'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
  
  ];

ReactDOM.render(
  <React.StrictMode>
    <div className='main-container'>
      <div className='drum-container'>
        <DrumMachine bank={PADS} />
      </div>
      <div className='footer'>
        <p>Created by Félix Menéndez using React</p>
        <p>Click on the pads or use your keyboard to play the samples</p>
      </div>

    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
