import React, { Component } from 'react';
import AutoComplete from './components/AutoComplete';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './custom.css';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Container disableGutters >
        <Typography sx={{ marginLeft: "40%", marginTop: 20, color: "pink" }} variant="h3">Looking For an Employee?</Typography>
        <Typography sx={{ marginLeft: "44%", color: "pink" }} variant="h6">Click on the search bar to see who's working where</Typography>
        <AutoComplete />
      </Container>
    );
  }
}
