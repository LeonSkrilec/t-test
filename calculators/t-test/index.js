import React from 'react';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import Router from 'next/router';
import CalculatorPage from './Page';
import CalculatorError from './components/CalculatorError';
// Calculator is basically a multi-step form. You take input from user and make some calculation on submit.
// Than you display results

/*
TODO: 
  - Extract Next.js routing functionality and provide it to all calculators. Expose methods for routing to certain pages inside calculator.
  - Determine which page should be loaded regarding to state data
*/

class TtestIndex extends React.Component {
  constructor(props) {
    super(props);
    // props.page holds page value. And it changes on routing
    // But we should check if we have required data in redux store to be on that page.
    // Because pages in calculator are inter-dependent. Some pages rely on others for data
    // We can just save on which page we left of in tth

    // Če v redux store-u ni potrebne vrednosti za render te strani, preusmeri na začetno stran.
    this.state = {
      pageChecked: false
    };
  }

  componentDidMount() {
    if (this.props.page === 'data') {
      if (
        !this.props.calculatorState.number_of_samples ||
        !this.props.calculatorState.proportions_or_means
      )
        Router.push(`/calculators/[...slug]`, `/calculators/t-test/subject`);
    }
    this.setState({ pageChecked: true });
  }

  render() {
    return (
      <>
        <Typography component="h2" variant="h2" gutterBottom align="center">
          Studentov t-test
        </Typography>
        {this.state.pageChecked && (
          <CalculatorPage page={this.props.page}></CalculatorPage>
        )}

        <CalculatorError
          text={this.props.calculatorState.error.text}
          type={this.props.calculatorState.error.type}
        ></CalculatorError>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    calculatorState: state.calculators['t-test']
  };
};

export default connect(mapStateToProps)(TtestIndex);
