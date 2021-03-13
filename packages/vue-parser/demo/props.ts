/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Types from '@babel/types';

const EventEmitter = require('events');

const toKebabCase = (text: string) => {
  const chars: string[] = [];

  text.split('').forEach(char => {
    if (/[A-Z]/.test(char)) {
      char = char.toLowerCase();

      if (chars.length) {
        chars.push('-');
      }
    }

    chars.push(char);
  });

  return chars.join('');
};

type PropValue = {
  key: string;
  value: string;
  description?: string;
};

export class PropParser extends EventEmitter {
  value: PropValue[] = [];

  parse(node: Types.Node) {
    if (Types.isObjectProperty(node)) {
      this.parse(node.value);
    }
    /**
     * props: {
     *   text: { type: String, required: true, default: '' }
     * }
     * props: ['text', 'color']
     */
    if (Types.isObjectExpression(node)) {
      const { properties } = node;
      const value = properties
        .map(item => {
          if (Types.isObjectProperty(item)) {
            return this.parseObjectExpressionProperty(item);
          }
        })
        .filter(i => i) as PropValue[];

      this.value = value;
    }
    if (Types.isArrayExpression(node)) {
      //
    }
    return this;
  }

  getValue() {
    return this.value;
  }

  /**
   *  text: [String, Number], default: '' }
   *  text: String
   *  text: [String, Number]
   */
  parseObjectExpressionProperty(property: Types.ObjectProperty) {
    const camelName = (property.key as Types.Identifier).name;
    const name = toKebabCase(camelName);
    let value: any;
    if (Types.isObjectProperty(property.value)) {
      value = this.handleObjectPropertyProp(property);
    }
    if (Types.isIdentifier(property.value)) {
      value = {
        type: this.handleIdentifierProp(property)
      };
    }
    if (Types.isArrayExpression(property.value)) {
      value = {
        type: this.handleArrayExpressionProp(property)
      };
    }
    // TODO: text: {}
    return {
      key: name,
      value
    };
  }

  handleObjectPropertyProp(property: Types.ObjectProperty) {
    const value = property.value as Types.ObjectExpression;
    const optionValues = this.getPropOptions(value.properties as Types.ObjectProperty[]);
    return optionValues;
  }

  handleIdentifierProp(property: Types.ObjectProperty) {
    return this.getNodeValue(property.value);
  }

  handleArrayExpressionProp(property: Types.ObjectProperty) {
    return this.getNodeValue(property.value);
  }

  getPropOptions(properties: Types.ObjectProperty[] = []) {
    const acc: Record<string, any> = {};
    properties.forEach(item => {
      if (Types.isIdentifier(item.key)) {
        const key = item.key.name;
        const valueNode: any = item.value;
        let value: any;
        if (Types.isArrayExpression(valueNode)) {
          // type: [String, Number]
          value = valueNode.elements
            .map(ele => {
              if (Types.isIdentifier(ele)) return ele.name;
            })
            .filter(i => i);
        } else if (Types.isIdentifier(valueNode)) {
          // type: String
          value = valueNode.name;
        } else if (Types.isObjectMethod(valueNode)) {
          // default(){ return {} }
          const { body } = valueNode.body;
          if (Types.isReturnStatement(body)) {
            value = this.getNodeValue(body.argument);
          }
        } else {
          // default: 10 | default: false | default: '-'
          value = valueNode.name || valueNode.value;
        }
        acc[key] = value;
        return acc;
      }
    }, {});

    return acc;
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
      return node.value || node.name;
    }
  }
}

const ArrayType = Types.arrayExpression([Types.identifier('String'), Types.identifier('Number')]);
const type = Types.objectProperty(Types.identifier('type'), ArrayType);
const required = Types.objectProperty(Types.identifier('required'), Types.booleanLiteral(true));
const text = Types.objectProperty(Types.identifier('text'), Types.objectExpression([type, required]));
const width = Types.objectProperty(Types.identifier('width'), ArrayType);
const age = Types.objectProperty(Types.identifier('age'), Types.identifier('Number'));
const nodes = Types.objectProperty(Types.identifier('props'), Types.objectExpression([text, width, age]));
const parser = new PropParser();
const res = parser.parse(nodes).getValue();
console.log(res);
