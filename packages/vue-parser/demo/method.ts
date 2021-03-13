/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import Types from '@babel/types';
import Generator from '@babel/generator';

type Param = {
  name: string;
  type: string;
};

// const getNodeValue = (node: any) => {
//   if (Types.isObjectExpression(node)) {
//     const result: Record<string, any> = {};
//     node.properties.forEach(item => {
//       if (Types.isObjectProperty(item)) {
//         const key = (item.key as Types.Identifier).name;
//         const value = getNodeValue(item.value);
//         result[key] = value;
//       }
//     });
//     return result;
//   } else if (Types.isArrayExpression(node)) {
//     return node.elements.map((item: any) => {
//       return getNodeValue(item);
//     });
//   } else {
//     return node.value || node.name;
//   }
// };

// function getObjectPropertyKey(node: Types.ObjectProperty) {
//   if (Types.isIdentifier(node.key)) {
//     return node.key.name;
//   } else {
//     return null;
//   }
// }
// function getObjectPropertyValue(node: Types.ObjectProperty) {
//   return getNodeValue(node);
// }

export class MethodParser {
  value: any[] = [];

  parser(node: Types.Node) {
    if (Types.isObjectProperty(node) && (node.key as Types.Identifier).name === 'methods') {
      this.parser(node.value);
    }

    // methods 的方法体
    if (Types.isObjectExpression(node)) {
      node.properties.forEach(ele => {
        // 方法式
        if (Types.isObjectMethod(ele)) {
          this.value.push(this.parseObjectMethod(ele));
        }
        // 对象式
        if (Types.isObjectProperty(ele)) {
          this.value.push(this.parseObjectProperty(ele));
        }
      });
    }

    return this;
  }

  getValue() {
    return this.value;
  }

  getNodeKey(node: any) {
    if (Types.isIdentifier(node)) {
      return node.name;
    }
    if (Types.isObjectProperty(node) || Types.isObjectMethod(node)) {
      if (!node.computed) {
        const key = node.key as Types.Identifier;
        return key?.name;
      } else {
        // TODO 动态属性名
        return '';
      }
    }
    return this.getNodeValue(node);
  }

  parseObjectMethod(node: Types.ObjectMethod) {
    const raw = Generator(node).code;
    const key = this.getNodeKey(node);
    const params = this.getParams(node);
    return {
      key,
      params,
      raw
    };
  }

  parseObjectProperty(node: Types.ObjectProperty) {
    const raw = Generator(node).code;
    const key = this.getNodeKey(node);
    const params = this.getParams(node);

    return {
      key,
      params,
      raw
    };
  }

  getParams(node: Types.ObjectMethod | Types.ObjectProperty) {
    const parseParams = (params: any[]) => {
      return params
        ? (params
            .map(p => {
              // (name) => {}
              if (Types.isIdentifier(p)) {
                return {
                  name: this.getNodeKey(p),
                  type: 'Identifier'
                };
              }
              // ({ name }) => {}
              if (Types.isObjectPattern(p)) {
                const names = p.properties
                  .map(prop => {
                    if (Types.isObjectProperty(prop)) {
                      if (Types.isAssignmentPattern(prop.value)) {
                        return (prop.value.right as Types.Identifier).name;
                      } else {
                        return (prop.value as Types.Identifier).name;
                      }
                    }
                  })
                  .filter(i => i);
                return {
                  name: names,
                  raw: Generator(p).code,
                  type: 'ObjectPattern'
                };
              }

              // ([ name ])
              if (Types.isArrayPattern(p)) {
                const names = p.elements
                  .map(prop => {
                    if (Types.isIdentifier(prop)) {
                      return prop.name;
                    }
                    if (Types.isAssignmentPattern(prop)) {
                      return (prop.right as Types.Identifier).name;
                    }
                  })
                  .filter(i => i);

                return {
                  name: names,
                  raw: Generator(p).code,
                  type: 'ArrayPattern'
                };
              }
              // (name, ...rest) => {}
              if (Types.isRestElement(p)) {
                return {
                  name: Generator(p).code,
                  type: 'RestElement'
                };
              }
              // (name = 'tom') => {} | ({ name } = { name = 'tom' })
              if (Types.isAssignmentPattern(p)) {
                let name = '';
                if (Types.isIdentifier(p.left)) {
                  name = this.getNodeKey(p.left as Types.Identifier);
                }
                if (Types.isObjectPattern(p.left)) {
                  // name =
                }
                return {
                  name,
                  default: this.getNodeValue(p.right),
                  type: 'AssignmentPattern'
                };
              }
            })
            .filter(i => i) as Param[])
        : [];
    };
    if (Types.isObjectMethod(node)) {
      return parseParams(node.params);
    } else if (Types.isFunctionExpression(node.value) || Types.isArrowFunctionExpression(node.value)) {
      return parseParams(node.value.params);
    }
    return [];
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

const Parser = require('@babel/parser');

const str = `
const vue = {
  methods: {
    log(name) {
      console.log('[name]', name)
    },
    table(obj) {
      if (!obj) return
      console.table(obj)
    }
  }
}
`;

const res = Parser.parse(str);
const body = res.program.body[0];
const { properties } = body.declarations[0].init;
const node = properties[0];

const parser = new MethodParser();
const val = parser.parser(node).getValue();
console.log(val);
