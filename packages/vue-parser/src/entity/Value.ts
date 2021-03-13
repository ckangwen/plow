import Types from '@babel/types';

export default class Value {
  value: any;

  start: number | null;

  end: number | null;

  constructor(value: any, node?: Types.Node) {
    this.value = value;
    if (node) {
      this.start = node.start;
      this.end = node.end;
    } else {
      this.start = null;
      this.end = null;
    }
  }

  getValue() {
    return this.value;
  }
}
