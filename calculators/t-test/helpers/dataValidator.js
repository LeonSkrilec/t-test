import SimpleReactValidator from 'simple-react-validator';

class Validator {
  constructor() {
    this.validator = new SimpleReactValidator();
  }

  validate(field) {
    console.log(
      'validating ',
      field.name,
      ' with value ',
      field.value,
      ' against rules ',
      field.validation.rules
    );
    const valid = this.validator.check(field.value, field.validation.rules);
    return valid;
  }
}

export default Validator;
