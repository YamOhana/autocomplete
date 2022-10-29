import React, { Component } from 'react';
import AutoComplete from './components/AutoComplete';
import { Box } from "@mui/system";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './custom.css';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
     <Container disableGutters maxWidth={true}>
      <Typography sx={{marginLeft: "40%", marginTop: 20, color:"pink"}} variant="h3">Looking For an Employee?</Typography>
        <AutoComplete />
     </Container>
    );
  }
}
