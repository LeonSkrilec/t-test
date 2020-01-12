import React from 'react';
import Typography from '@material-ui/core/Typography';
import CalculatorPage from './Page';
import { connect } from 'react-redux';
import CalculatorError from './components/CalculatorError';
// Calculator is basically a multi-step form. You take input from user and make some calculation on submit.
// Than you display results

/*
TODO: 
  - Extract Next.js routing functionality and provide it to all calculators. Expose methods for routing to certain pages inside calculator.
  - Determine which page should be loaded regarding to state data
*/

class Index extends React.Component {
  constructor(props) {
    super(props);
    // props.page holds page value. And it changes on routing
    // But we should check if we have required data in redux store to be on that page.
    // Because pages in calculator are inter-dependent. Some pages rely on others for data
    // We can just save on which page we left of in tth
  }

  render() {
    return (
      <>
        <Typography component="h2" variant="h2" gutterBottom align="center">
          Studentov t-test
        </Typography>
        <CalculatorPage page={this.props.page}></CalculatorPage>
        <CalculatorError
          text={this.props.error.text}
          type={this.props.error.type}
        ></CalculatorError>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.calculators['t-test'].error
  };
};

export default connect(mapStateToProps)(Index);
