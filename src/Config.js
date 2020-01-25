
export class Config {
  constructor(local = process.env.NODE_ENV) {
    this.FRONT_BASE_URL = local === "development" ? "" : "/writtter";
    this.API_BASE_URL = local === "development" ? "http://localhost:8080" : "https://writtter.herokuapp.com";
  }

  /**
   * Return the full path of the API request
   * @param {URI} url the path to target.
   */
  getApi(url = "") {
    const u = `${this.API_BASE_URL}${url}`;
    console.log("URL TO API: ", u);

    return u;
  }

  /**
   * Return the full path of the front view url
   * @param {URI} url the path to target.
   */
  getUrl(url = "") {
    const u = `${this.FRONT_BASE_URL}${url}`;
    // console.log("URL TO NEXT PAGE: ", u);

    return u;
  }
}

export default new Config();