import React from 'react';
import Intro from './intro';
import Settings from './settings';
import Results from './results';
import Subject from './subject';
import Data from './data';
import Typography from '@material-ui/core/Typography';

// Calculator is basically a multi-step form. You take input from user and make some calculation on submit.
// Than you display results

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      calculator: {
        number_of_samples: null, // 1 or 2
        difference_between: null, // Can be either "means" or "proportions"
        samples: [
          {
            number_of_units: null, // Positive Integer
            mean: null, // Decimal number
            variance: null, // Positive Decimal number
            proportion: null // Decimal number between 0 and 1
          },
          {
            number_of_units: null,
            mean: null,
            variance: null,
            proportion: null
          }
        ],
        hypothetical_mean: null, // Decimal number
        hypothetical_proportion: null, // Decimal number
        equal_variances: true,
        paired_samples: false,
        significance: 0.05,
        two_tailed: true,
        results: {
          t_value: null
        }
      }
    };

    this.steps = {
      0: {
        component: Intro
      },
      1: {
        component: Subject
      },
      2: {
        component: Data
      },
      3: {
        component: Settings
      }
    };
  }

  updateCalculatorData = newData => {
    this.setState({ ...this.state, calculator: newData });
  };

  nextStep = () => {
    // Load next step
    const nextStep = this.state.step + 1;
    this.setState({ ...this.state, step: nextStep });
  };

  prevStep = () => {
    // Load prev step
    const prevStep = this.state.step - 1;
    this.setState({ ...this.state, step: prevStep });
  };

  calculate() {
    console.log('calculate according to data in state...');
    console.log(this.state);
  }

  render() {
    const CurrentStepComponent = this.steps[this.state.step].component;
    return (
      <>
        <Typography component="h2" variant="h2" gutterBottom>
          Studentov t-test
        </Typography>
        <CurrentStepComponent
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          calculator={this.state.calculator}
          updateCalculatorData={this.updateCalculatorData}
        />
      </>
    );
  }
}

export default Index;
