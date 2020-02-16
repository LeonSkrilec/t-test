import React from 'react';
import Typography from '@material-ui/core/Typography';

class Intro extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Do calculations from data in store.
    // Here you can also do some Async calculations and show loading meanwhile
  }
  render() {
    return (
      <>
        <Typography
          component="p"
          variant="subtitle1"
          gutterBottom
          align="center"
        >
          Calculating ...
        </Typography>
      </>
    );
  }
}
export default Intro;
