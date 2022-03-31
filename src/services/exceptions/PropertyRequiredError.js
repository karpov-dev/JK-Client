import {ValidationError} from './ValidationError';

class PropertyRequiredError extends ValidationError {
  constructor(...properties) {
    super(`Missed required property(${properties.length}): ` + JSON.stringify(properties));
    this.name = 'PropertyRequiredError';
  }
}

export { PropertyRequiredError }