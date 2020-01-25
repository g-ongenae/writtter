import Context from "../Context";

export class QSParser {
  constructor() {
    if (window.location.search) {
      this.query = new URLSearchParams(window.location.search);
    }
  }

  setAuth() {
    if (!this.query) {
      return;
    }

    const token = this.query.get("a");
    if (!token || token === "undefined") {
      return;
    }

    const auth = {
      authorization: token,
      "x-access-token": token
    };
    Context.set("auth", auth);
  }
}

export default new QSParser();
