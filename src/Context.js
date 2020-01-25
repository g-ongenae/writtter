export class Context {
  constructor() {
    this.data = {};
  }

  set(key, value) {
    this.data[key] = value;
  }

  unset(key) {
    delete this.data[key];
  }

  get(key) {
    return this.data[key];
  }

  has(key) {
    return this.data.hasOwnProperty(key);
  }
}

export default new Context();