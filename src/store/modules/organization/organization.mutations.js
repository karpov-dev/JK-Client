export default {
  setOrganization: (state, organization) => {
    for (let propertyName in organization) {
      state[propertyName] = organization[propertyName]
    }
  }
}