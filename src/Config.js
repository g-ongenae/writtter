
export class Config {
  constructor(local = false) {
    this.FRONT_BASE_URL = local ? "http://localhost:8080" : "http://g-ongeane.github.io/writtter"
    this.API_BASE_URL = local ? "http://localhost:5050" : "https://writtter.herokuapp.com";
  }

  /**
   * Return the full path of the API request
   * @param {URI} url the path to target.
   */
  getApi(url = "") {
    return `${this.API_BASE_URL}${url}`;
  }

  /**
   * Return the full path of the front view url
   * @param {URI} url the path to target.
   */
  getUrl(url = "") {
    return `${this.FRONT_BASE_URL}${url}`;
  }
}

export default new Config();