import React from 'react';

import './App.css';
import Tone from 'tone';
import styled from 'styled-components'

const Container = styled.div`
  display:flex;
  justify-content: center;
`
const Button = styled.button`margin: 2em;`


var synth = new Tone.Synth().toMaster()



function App() {
  return (
    <Container data-name='container'>
      <Button onClick={()=> synth.triggerAttackRelease('C4', '8n')}>
        click for sound
      </Button>

    </Container>
  );
}

export default App;
