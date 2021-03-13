/* eslint-disable consistent-return */
import Types from '@babel/types';

export class ComponentParser {
  value: Record<string, string> = {};

  parse(node: Types.Node) {
    if (Types.isObjectProperty(node) && (node.key as Types.Identifier).name === 'components') {
      this.parse(node.value);
    }

    if (Types.isObjectExpression(node)) {
      node.properties.forEach(property => {
        if (Types.isObjectProperty(property)) {
          let registeredName = '';
          if (Types.isIdentifier(property.key)) {
            registeredName = property.key.name;
          } else {
            registeredName = (property.key as Types.StringLiteral).value;
          }
          const componentModuleName = (property.value as Types.Identifier).name;

          if (registeredName && componentModuleName) {
            this.value[registeredName] = componentModuleName;
          }
        }
      });
    }

    return this;
  }

  getValue() {
    return this.value;
  }
}

const Parser = require('@babel/parser');

const str = `
import Button from 'button'
import Text from 'text'

export default {
  components: {
    Button,
    Text
  }
}
`;

const res = Parser.parse(str, {
  sourceType: 'module'
});
const body = res.program.body[0];
const { properties } = body.declarations[0].init;
const node = properties[0];

const parser = new ComponentParser();
const val = parser.parse(node).getValue();
console.log(val);
