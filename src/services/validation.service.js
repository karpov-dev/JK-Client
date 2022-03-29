const reportValidity = (inputs) => {
  return inputs.reduce((result, input) => result = (input.reportValidity() && result), true);
}

const checkValidity = (inputs) => {
  return inputs.reduce((result, input) => result = (input.checkValidity() && result), true);
}

export {reportValidity, checkValidity}