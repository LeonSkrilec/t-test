import SimpleReactValidator from 'simple-react-validator';

class DataValidation {
  constructor() {
    this.validator = new SimpleReactValidator();
  }

  validate({ field }) {
    // Determine what we have to validate.
    const valid = this.validator.check(field.value, field.validation.rules);
    return valid;
  }
}

export default DataValidation;
