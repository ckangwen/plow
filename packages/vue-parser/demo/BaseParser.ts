/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Types from '@babel/types';
import Parser from '@babel/parser';

class Value {
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

type SetScopeValueType = {
  key: string;
  node: any;
  value: any;
};

export class BaseParser {
  source: string;

  options: Record<string, any>;

  scope: Record<string, any>;

  nodes: Record<string, any>;

  constructor(source: string, options = {}) {
    this.source = source;
    this.options = options;
    this.scope = {};
    this.nodes = {};
  }

  parse() {
    const node = Parser.parse(this.source).program;

    if (node) {
      this.parseAst(node);
    }
    return node;
  }

  parseAst(node: Types.Program) {
    node.body.forEach(item => this.parseAstItem(item));
  }

  parseAstItem(node: Types.Statement) {
    // import Module from 'module'
    if (Types.isImportDeclaration(node)) {
      //
    }

    // const name = ''
    if (Types.isVariableDeclaration(node)) {
      this.parseVariableDeclaration(node);
    }

    // export name
    if (Types.isExportNamedDeclaration(node)) {
      //
    }

    // export default {}
    if (Types.isExportDefaultDeclaration(node)) {
      this.parseExportDefaultDeclaration(node.declaration);
    }

    if (Types.isExpressionStatement(node)) {
      //
    }
    if (Types.isClassDeclaration(node)) {
      //
    }
  }

  parseExportDefaultDeclaration(node) {
    // vue2
    if (Types.isObjectExpression(node)) {
      this.parseObjectExpression(node);
    }
    // Vue.extend
    // class
    // defineComponent
  }

  parseObjectExpression(node: Types.ObjectExpression) {
    const properties = node.properties as Types.ObjectProperty[];
    properties.forEach(property => {
      this.parseFeature(property, properties);
    });
  }

  parseFeature(property: Types.ObjectProperty, properties: Types.ObjectProperty[]) {
    const key = (property.key as Types.Identifier).name;
    switch (key) {
      case 'name': {
        break;
      }
      case 'components': {
        break;
      }
      case 'props': {
        break;
      }
      case 'data': {
        break;
      }
      case 'computed': {
        break;
      }
      case 'watch': {
        console.log(properties);
        break;
      }
      case 'methods': {
        break;
      }
      case 'render': {
        break;
      }
      case 'template': {
        break;
      }
    }
  }

  parseVariableDeclaration(node: Types.VariableDeclaration) {
    node.declarations
      .filter(item => Types.isVariableDeclarator(item))
      .forEach(item => {
        // item.id 变量定义，item.init 值定义
        if (Types.isArrayPattern(item.id)) {
          // item => [x, y, z] = [1, 2, 3]
          this.parseVariableDeclarationArrayPattern(item.id, item.init as Types.ArrayExpression);
        } else if (Types.isObjectPattern(item.id)) {
          // item => {x, y, z} = { x: 1, y: 2, z: 3 }
          this.parseVariableDeclarationObjectPattern(item.id, item.init as Types.ObjectExpression);
        } else if (Types.isIdentifier(item.id)) {
          let value: any = '';
          if (Types.isIdentifier(item.init)) {
            value = this.scope[(item.init as Types.Identifier).name];
          } else {
            value = this.getValue(item.init);
          }
          this.setScopeValue({
            key: item.id.name,
            value,
            node: item.init
          });
        }
      });
  }

  parseVariableDeclarationArrayPattern(id: Types.ArrayPattern, init: Types.ArrayExpression) {
    id.elements.forEach((ele, index) => {
      if (!ele) return;

      let varName = '';
      let defaultValue: any = '';
      let nodeDefaultValue: any;
      if (Types.isIdentifier(ele)) {
        varName = ele.name;
      }

      if (Types.isAssignmentPattern(ele)) {
        const assignmentPatternRes = this.getAssignmentPatternValue(ele);
        varName = assignmentPatternRes.key;
        defaultValue = assignmentPatternRes.defaultValue;
        nodeDefaultValue = assignmentPatternRes.defaultValueRef;
      }

      // init
      if (Types.isArrayExpression(init)) {
        const node = init.elements[index];
        const ref = node ? this.getValue(node) : undefined;

        // 记录变量
        this.setScopeValue({
          key: varName,
          value: ref,
          node
        });
      } else {
        this.setScopeValue({
          key: varName,
          value: undefined,
          node: null
        });
      }

      // 如果变量设置了默认值，则修改scope中的值
      if (!this.scope[varName]) {
        if (defaultValue) {
          this.setScopeValue({
            key: varName,
            value: defaultValue,
            node: nodeDefaultValue
          });
        }
      }
    });
  }

  parseVariableDeclarationObjectPattern(id: Types.ObjectPattern, init: Types.ObjectExpression) {
    id.properties.forEach(property => {
      if (Types.isObjectProperty(property)) {
        let varName: string = '';
        let defaultValue: any;
        let nodeDefaultValue: any;
        // property.value: 实际的变量名
        if (Types.isIdentifier(property.value)) {
          varName = this.getValue(property.value)?.value;
        }

        // 解构赋值的变量带有默认值
        if (Types.isAssignmentPattern(property.value)) {
          const assignmentPatternRes = this.getAssignmentPatternValue(property.value);
          varName = assignmentPatternRes.key;
          defaultValue = assignmentPatternRes.defaultValue;
          nodeDefaultValue = assignmentPatternRes.defaultValueRef;
        }

        // 解构的那个变量
        if (init) {
          // 解构的那个是一个对象，const { name } = { name: "cc" }
          if (Types.isObjectExpression(init)) {
            // propertyValue是init中关于varName属性的一个键值对，形如 { name: "name" }
            const propertyNode = init.properties.find(({ key }: any) => {
              // 寻找varName属性
              return this.getValue(key)?.value === varName;
            }) as Types.ObjectProperty;

            const propertyValue = propertyNode ? this.getValue(propertyNode.value) : undefined;

            this.setScopeValue({
              key: varName,
              node: propertyNode,
              value: propertyValue
            });
          }
          // 解构的那个变量不是一个对象，const { name } = obj
          if (Types.isIdentifier(init)) {
            // TODO
          }
        }

        // 如果变量设置了默认值，则修改scope中的值
        if (!this.scope[varName]) {
          if (defaultValue) {
            this.setScopeValue({
              key: varName,
              value: defaultValue,
              node: nodeDefaultValue
            });
          }
        }
      }
    });
  }

  setScopeValue({ key, value, node }: SetScopeValueType) {
    this.nodes[key] = node;
    this.scope[key] = value;
  }

  getValue(node) {
    if (Types.isStringLiteral(node) || Types.isBooleanLiteral(node) || Types.isNumericLiteral(node)) {
      return new Value(node.value, node);
    }
    if (Types.isNullLiteral(node)) {
      return new Value(null, node);
    }
    if (Types.isRegExpLiteral(node)) {
      //
    }
    if (Types.isArrayExpression(node)) {
      const value = node.elements.map(item => this.getValue(item));
      return new Value(value, node);
    }
    if (Types.isIdentifier(node)) {
      const value = this.getIdentifierValue(node);
      return new Value(value, node);
    }
    if (Types.isTemplateLiteral(node)) {
      //
    }
    if (Types.isObjectExpression(node)) {
      const value: Record<string, any> = {};
      node.properties.forEach(item => {
        if (Types.isObjectProperty(item)) {
          // TODO 可能是动态属性名，computed=true
          const key = (item.key as Types.Identifier).name;
          const val = this.getValue(item.value);
          value[key] = val;
        }
      });
      return new Value(value, node);
    }
    if (Types.isObjectPattern(node)) {
      //
    }
    if (Types.isObjectProperty(node)) {
      const value = this.getValue(node.value);
      return new Value(value, node);
    }

    return new Value(undefined);
  }

  getIdentifierValue(node: Types.Identifier) {
    // eslint-disable-next-line no-prototype-builtins
    if (this.scope.hasOwnProperty(node.name)) {
      return this.scope[node.name];
    }
    return {
      value: undefined,
      start: undefined,
      end: undefined
    };
  }

  getAssignmentPatternValue(node: Types.AssignmentPattern) {
    const key = (node.left as Types.Identifier).name;
    const defaultValue = this.getValue(node.right);
    const defaultValueRef = node.right;

    return {
      key,
      defaultValue,
      defaultValueRef
    };
  }
}

const str = `
const name = 'hello';

const types = ['vue', 'react', 'angular']

const obj = { type: types, required: true }
`;

const parser = new BaseParser(str.trim());
parser.parse();
console.log(JSON.stringify(parser.scope, null, 2));
