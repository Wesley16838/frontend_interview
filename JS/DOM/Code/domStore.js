class DOMStore {
  constructor() {
    this.keys = [];
    this.values = [];
  }

  set(node, value) {
    const index = this.keys.indexOf(node);
    if (index >= 0) {
      this.values[index] = value;
    } else {
      this.values.push(value);
      this.keys.push(node);
    }
  }

  get(node) {
    const index = this.keys.indexOf(node);
    return index >= 0 ? this.values[index] : undefined;
  }

  has(node) {
    return !!this.get(node);
  }
}
