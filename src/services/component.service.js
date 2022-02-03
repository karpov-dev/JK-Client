import StringService from "./string.service";

const isComponent = (componentNameToCheck, components) => {
  const isCurrentForm = {};

  Object.values(components).forEach(componentName => {
    isCurrentForm['is' + StringService.capitalize(componentName)] = (componentNameToCheck === componentName)
  });

  return isCurrentForm;
}

export { isComponent }