class ServerException extends Error {
  constructor(message) {
    super(message);
    this.name = 'ServerError'
  }
}

export { ServerException }