const isEmptyParams = (...params) => params.every(param => !param);

const isHasEmptyParam = (...params) => params.some(param => !param);

export { isEmptyParams, isHasEmptyParam }