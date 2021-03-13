import Types from '@babel/types';
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
export class EventParser {
  parse(node: Types.Node) {
    if (Types.isExpressionStatement(node)) {
    }
    if (Types.isCallExpression(node)) {
      this.parseCallExpression(node.expression, node);
    }
    if (Types.isMemberExpression(node)) {
      // TODO
    }
  }

  parseCallExpression(node: Types.CallExpression, parent: any) {
    // this.$emit('click', args)
    if (Types.isMemberExpression(node.callee)) {
      const { name } = node.callee.property as Types.Identifier;

      if (name === '$emit') {
        if (node.arguments.length) {
          const name = this.getValue(node.arguments[0]);
          const args = node.arguments.slice(1);

          this.parseEventNode(node, name.value, args, parent);
        }
      }
    }
  }

  getValue(node) {
    if (Types.isStringLiteral(node) || Types.isBooleanLiteral(node) || Types.isNumberLiteral(node)) {
      return node.value;
    }
    if (Types.isNullLiteral(node)) {
      return null;
    }
    if (Types.isRegExpLiteral(node)) {
      //
    }
    if (Types.isArrayExpression(node)) {
      //
    }
    if (Types.isIdentifier(node)) {
      //
    }
    if (Types.isTemplateLiteral(node)) {
      //
    }
    if (Types.isObjectPattern(node)) {
      //
    }
    if (Types.isObjectProperty(node)) {
      //
    }
  }
}
