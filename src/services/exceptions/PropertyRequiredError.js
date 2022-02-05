import {ValidationError} from './ValidationError';

class PropertyRequiredError extends ValidationError {
  constructor(...properties) {
    super(`Missed required property(-es):`);
    this.name = 'PropertyRequiredError';
  }
}

export { PropertyRequiredError }