/* eslint-disable consistent-return */
import Types from '@babel/types';

export class DataParser {
  value: any[] = [];

  parser(node: Types.Node) {
    if (Types.isObjectMethod(node)) {
      this.parser(node.body);
    }

    if (Types.isBlockStatement(node)) {
      node.body.forEach(ele => {
        if (Types.isReturnStatement(ele)) {
          this.value.push(this.parseReturnStatement(ele));
        }
        if (Types.isVariableDeclaration(ele)) {
          // TODO
        }
      });
    }

    return this;
  }

  getValue() {
    return this.value;
  }

  parseReturnStatement(node: Types.ReturnStatement) {
    if (Types.isObjectExpression(node.argument)) {
      return this.getNodeValue(node.argument);
    }
  }

  getNodeValue(node: any) {
    if (Types.isObjectExpression(node)) {
      const result: Record<string, any> = {};
      node.properties.forEach(item => {
        if (Types.isObjectProperty(item)) {
          const key = (item.key as Types.Identifier).name;
          const value = this.getNodeValue(item.value);
          result[key] = value;
        }
      });
      return result;
    } else if (Types.isArrayExpression(node)) {
      return node.elements.map((item: any) => {
        return this.getNodeValue(item);
      });
    } else {
      return node.value;
    }
  }
}

const Parser = require('@babel/parser');

const str = `
const vue = {
  data() {
    return {
      name: 'string',
      age: 1,
      array: [1, false, '2', {}],
      obj: {
        foo: 'foo',
        bar: ['bar']
      }
    }
  }
}
`;

const res = Parser.parse(str);
const body = res.program.body[0];
const { properties } = body.declarations[0].init;
const node = properties[0];

const parser = new DataParser();
const val = parser.parser(node).getValue();
console.log(val);
