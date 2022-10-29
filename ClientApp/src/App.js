import React, { Component } from 'react';
import AutoComplete from './components/AutoComplete';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './custom.css';
import logo from './logo.png'

export default class App extends Component {
  static displayName = App.name;
  render() {
    return (
      <Container disableGutters >
        <div>
          <img src={logo} style={{
            opacity: 0.2,
            position: 'absolute',
            top: '50%',
            width: 'auto',
            display: 'block'
          }}></img>
        </div>
        <Typography sx={{ marginLeft: "40%", marginTop: 20, color: "pink" }} variant="h3">Looking For an Employee?</Typography>
        <Typography sx={{ marginLeft: "44%", color: "pink" }} variant="h6">Click on the search bar to see who's working where</Typography>
        <AutoComplete />
      </Container>
    );
  }
}
