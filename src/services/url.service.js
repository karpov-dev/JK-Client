export class UrlService {

  static getDomainName = () => {
    return window.location.hostname.split('.')[0];
  }

}