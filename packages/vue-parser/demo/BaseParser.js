'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var shallowEqual_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shallowEqual;

function shallowEqual(actual, expected) {
  const keys = Object.keys(expected);

  for (const key of keys) {
    if (actual[key] !== expected[key]) {
      return false;
    }
  }

  return true;
}
});

unwrapExports(shallowEqual_1);

var generated = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArrayExpression = isArrayExpression;
exports.isAssignmentExpression = isAssignmentExpression;
exports.isBinaryExpression = isBinaryExpression;
exports.isInterpreterDirective = isInterpreterDirective;
exports.isDirective = isDirective;
exports.isDirectiveLiteral = isDirectiveLiteral;
exports.isBlockStatement = isBlockStatement;
exports.isBreakStatement = isBreakStatement;
exports.isCallExpression = isCallExpression;
exports.isCatchClause = isCatchClause;
exports.isConditionalExpression = isConditionalExpression;
exports.isContinueStatement = isContinueStatement;
exports.isDebuggerStatement = isDebuggerStatement;
exports.isDoWhileStatement = isDoWhileStatement;
exports.isEmptyStatement = isEmptyStatement;
exports.isExpressionStatement = isExpressionStatement;
exports.isFile = isFile;
exports.isForInStatement = isForInStatement;
exports.isForStatement = isForStatement;
exports.isFunctionDeclaration = isFunctionDeclaration;
exports.isFunctionExpression = isFunctionExpression;
exports.isIdentifier = isIdentifier;
exports.isIfStatement = isIfStatement;
exports.isLabeledStatement = isLabeledStatement;
exports.isStringLiteral = isStringLiteral;
exports.isNumericLiteral = isNumericLiteral;
exports.isNullLiteral = isNullLiteral;
exports.isBooleanLiteral = isBooleanLiteral;
exports.isRegExpLiteral = isRegExpLiteral;
exports.isLogicalExpression = isLogicalExpression;
exports.isMemberExpression = isMemberExpression;
exports.isNewExpression = isNewExpression;
exports.isProgram = isProgram;
exports.isObjectExpression = isObjectExpression;
exports.isObjectMethod = isObjectMethod;
exports.isObjectProperty = isObjectProperty;
exports.isRestElement = isRestElement;
exports.isReturnStatement = isReturnStatement;
exports.isSequenceExpression = isSequenceExpression;
exports.isParenthesizedExpression = isParenthesizedExpression;
exports.isSwitchCase = isSwitchCase;
exports.isSwitchStatement = isSwitchStatement;
exports.isThisExpression = isThisExpression;
exports.isThrowStatement = isThrowStatement;
exports.isTryStatement = isTryStatement;
exports.isUnaryExpression = isUnaryExpression;
exports.isUpdateExpression = isUpdateExpression;
exports.isVariableDeclaration = isVariableDeclaration;
exports.isVariableDeclarator = isVariableDeclarator;
exports.isWhileStatement = isWhileStatement;
exports.isWithStatement = isWithStatement;
exports.isAssignmentPattern = isAssignmentPattern;
exports.isArrayPattern = isArrayPattern;
exports.isArrowFunctionExpression = isArrowFunctionExpression;
exports.isClassBody = isClassBody;
exports.isClassExpression = isClassExpression;
exports.isClassDeclaration = isClassDeclaration;
exports.isExportAllDeclaration = isExportAllDeclaration;
exports.isExportDefaultDeclaration = isExportDefaultDeclaration;
exports.isExportNamedDeclaration = isExportNamedDeclaration;
exports.isExportSpecifier = isExportSpecifier;
exports.isForOfStatement = isForOfStatement;
exports.isImportDeclaration = isImportDeclaration;
exports.isImportDefaultSpecifier = isImportDefaultSpecifier;
exports.isImportNamespaceSpecifier = isImportNamespaceSpecifier;
exports.isImportSpecifier = isImportSpecifier;
exports.isMetaProperty = isMetaProperty;
exports.isClassMethod = isClassMethod;
exports.isObjectPattern = isObjectPattern;
exports.isSpreadElement = isSpreadElement;
exports.isSuper = isSuper;
exports.isTaggedTemplateExpression = isTaggedTemplateExpression;
exports.isTemplateElement = isTemplateElement;
exports.isTemplateLiteral = isTemplateLiteral;
exports.isYieldExpression = isYieldExpression;
exports.isAwaitExpression = isAwaitExpression;
exports.isImport = isImport;
exports.isBigIntLiteral = isBigIntLiteral;
exports.isExportNamespaceSpecifier = isExportNamespaceSpecifier;
exports.isOptionalMemberExpression = isOptionalMemberExpression;
exports.isOptionalCallExpression = isOptionalCallExpression;
exports.isAnyTypeAnnotation = isAnyTypeAnnotation;
exports.isArrayTypeAnnotation = isArrayTypeAnnotation;
exports.isBooleanTypeAnnotation = isBooleanTypeAnnotation;
exports.isBooleanLiteralTypeAnnotation = isBooleanLiteralTypeAnnotation;
exports.isNullLiteralTypeAnnotation = isNullLiteralTypeAnnotation;
exports.isClassImplements = isClassImplements;
exports.isDeclareClass = isDeclareClass;
exports.isDeclareFunction = isDeclareFunction;
exports.isDeclareInterface = isDeclareInterface;
exports.isDeclareModule = isDeclareModule;
exports.isDeclareModuleExports = isDeclareModuleExports;
exports.isDeclareTypeAlias = isDeclareTypeAlias;
exports.isDeclareOpaqueType = isDeclareOpaqueType;
exports.isDeclareVariable = isDeclareVariable;
exports.isDeclareExportDeclaration = isDeclareExportDeclaration;
exports.isDeclareExportAllDeclaration = isDeclareExportAllDeclaration;
exports.isDeclaredPredicate = isDeclaredPredicate;
exports.isExistsTypeAnnotation = isExistsTypeAnnotation;
exports.isFunctionTypeAnnotation = isFunctionTypeAnnotation;
exports.isFunctionTypeParam = isFunctionTypeParam;
exports.isGenericTypeAnnotation = isGenericTypeAnnotation;
exports.isInferredPredicate = isInferredPredicate;
exports.isInterfaceExtends = isInterfaceExtends;
exports.isInterfaceDeclaration = isInterfaceDeclaration;
exports.isInterfaceTypeAnnotation = isInterfaceTypeAnnotation;
exports.isIntersectionTypeAnnotation = isIntersectionTypeAnnotation;
exports.isMixedTypeAnnotation = isMixedTypeAnnotation;
exports.isEmptyTypeAnnotation = isEmptyTypeAnnotation;
exports.isNullableTypeAnnotation = isNullableTypeAnnotation;
exports.isNumberLiteralTypeAnnotation = isNumberLiteralTypeAnnotation;
exports.isNumberTypeAnnotation = isNumberTypeAnnotation;
exports.isObjectTypeAnnotation = isObjectTypeAnnotation;
exports.isObjectTypeInternalSlot = isObjectTypeInternalSlot;
exports.isObjectTypeCallProperty = isObjectTypeCallProperty;
exports.isObjectTypeIndexer = isObjectTypeIndexer;
exports.isObjectTypeProperty = isObjectTypeProperty;
exports.isObjectTypeSpreadProperty = isObjectTypeSpreadProperty;
exports.isOpaqueType = isOpaqueType;
exports.isQualifiedTypeIdentifier = isQualifiedTypeIdentifier;
exports.isStringLiteralTypeAnnotation = isStringLiteralTypeAnnotation;
exports.isStringTypeAnnotation = isStringTypeAnnotation;
exports.isSymbolTypeAnnotation = isSymbolTypeAnnotation;
exports.isThisTypeAnnotation = isThisTypeAnnotation;
exports.isTupleTypeAnnotation = isTupleTypeAnnotation;
exports.isTypeofTypeAnnotation = isTypeofTypeAnnotation;
exports.isTypeAlias = isTypeAlias;
exports.isTypeAnnotation = isTypeAnnotation;
exports.isTypeCastExpression = isTypeCastExpression;
exports.isTypeParameter = isTypeParameter;
exports.isTypeParameterDeclaration = isTypeParameterDeclaration;
exports.isTypeParameterInstantiation = isTypeParameterInstantiation;
exports.isUnionTypeAnnotation = isUnionTypeAnnotation;
exports.isVariance = isVariance;
exports.isVoidTypeAnnotation = isVoidTypeAnnotation;
exports.isEnumDeclaration = isEnumDeclaration;
exports.isEnumBooleanBody = isEnumBooleanBody;
exports.isEnumNumberBody = isEnumNumberBody;
exports.isEnumStringBody = isEnumStringBody;
exports.isEnumSymbolBody = isEnumSymbolBody;
exports.isEnumBooleanMember = isEnumBooleanMember;
exports.isEnumNumberMember = isEnumNumberMember;
exports.isEnumStringMember = isEnumStringMember;
exports.isEnumDefaultedMember = isEnumDefaultedMember;
exports.isJSXAttribute = isJSXAttribute;
exports.isJSXClosingElement = isJSXClosingElement;
exports.isJSXElement = isJSXElement;
exports.isJSXEmptyExpression = isJSXEmptyExpression;
exports.isJSXExpressionContainer = isJSXExpressionContainer;
exports.isJSXSpreadChild = isJSXSpreadChild;
exports.isJSXIdentifier = isJSXIdentifier;
exports.isJSXMemberExpression = isJSXMemberExpression;
exports.isJSXNamespacedName = isJSXNamespacedName;
exports.isJSXOpeningElement = isJSXOpeningElement;
exports.isJSXSpreadAttribute = isJSXSpreadAttribute;
exports.isJSXText = isJSXText;
exports.isJSXFragment = isJSXFragment;
exports.isJSXOpeningFragment = isJSXOpeningFragment;
exports.isJSXClosingFragment = isJSXClosingFragment;
exports.isNoop = isNoop;
exports.isPlaceholder = isPlaceholder;
exports.isV8IntrinsicIdentifier = isV8IntrinsicIdentifier;
exports.isArgumentPlaceholder = isArgumentPlaceholder;
exports.isBindExpression = isBindExpression;
exports.isClassProperty = isClassProperty;
exports.isPipelineTopicExpression = isPipelineTopicExpression;
exports.isPipelineBareFunction = isPipelineBareFunction;
exports.isPipelinePrimaryTopicReference = isPipelinePrimaryTopicReference;
exports.isClassPrivateProperty = isClassPrivateProperty;
exports.isClassPrivateMethod = isClassPrivateMethod;
exports.isImportAttribute = isImportAttribute;
exports.isDecorator = isDecorator;
exports.isDoExpression = isDoExpression;
exports.isExportDefaultSpecifier = isExportDefaultSpecifier;
exports.isPrivateName = isPrivateName;
exports.isRecordExpression = isRecordExpression;
exports.isTupleExpression = isTupleExpression;
exports.isDecimalLiteral = isDecimalLiteral;
exports.isStaticBlock = isStaticBlock;
exports.isModuleExpression = isModuleExpression;
exports.isTSParameterProperty = isTSParameterProperty;
exports.isTSDeclareFunction = isTSDeclareFunction;
exports.isTSDeclareMethod = isTSDeclareMethod;
exports.isTSQualifiedName = isTSQualifiedName;
exports.isTSCallSignatureDeclaration = isTSCallSignatureDeclaration;
exports.isTSConstructSignatureDeclaration = isTSConstructSignatureDeclaration;
exports.isTSPropertySignature = isTSPropertySignature;
exports.isTSMethodSignature = isTSMethodSignature;
exports.isTSIndexSignature = isTSIndexSignature;
exports.isTSAnyKeyword = isTSAnyKeyword;
exports.isTSBooleanKeyword = isTSBooleanKeyword;
exports.isTSBigIntKeyword = isTSBigIntKeyword;
exports.isTSIntrinsicKeyword = isTSIntrinsicKeyword;
exports.isTSNeverKeyword = isTSNeverKeyword;
exports.isTSNullKeyword = isTSNullKeyword;
exports.isTSNumberKeyword = isTSNumberKeyword;
exports.isTSObjectKeyword = isTSObjectKeyword;
exports.isTSStringKeyword = isTSStringKeyword;
exports.isTSSymbolKeyword = isTSSymbolKeyword;
exports.isTSUndefinedKeyword = isTSUndefinedKeyword;
exports.isTSUnknownKeyword = isTSUnknownKeyword;
exports.isTSVoidKeyword = isTSVoidKeyword;
exports.isTSThisType = isTSThisType;
exports.isTSFunctionType = isTSFunctionType;
exports.isTSConstructorType = isTSConstructorType;
exports.isTSTypeReference = isTSTypeReference;
exports.isTSTypePredicate = isTSTypePredicate;
exports.isTSTypeQuery = isTSTypeQuery;
exports.isTSTypeLiteral = isTSTypeLiteral;
exports.isTSArrayType = isTSArrayType;
exports.isTSTupleType = isTSTupleType;
exports.isTSOptionalType = isTSOptionalType;
exports.isTSRestType = isTSRestType;
exports.isTSNamedTupleMember = isTSNamedTupleMember;
exports.isTSUnionType = isTSUnionType;
exports.isTSIntersectionType = isTSIntersectionType;
exports.isTSConditionalType = isTSConditionalType;
exports.isTSInferType = isTSInferType;
exports.isTSParenthesizedType = isTSParenthesizedType;
exports.isTSTypeOperator = isTSTypeOperator;
exports.isTSIndexedAccessType = isTSIndexedAccessType;
exports.isTSMappedType = isTSMappedType;
exports.isTSLiteralType = isTSLiteralType;
exports.isTSExpressionWithTypeArguments = isTSExpressionWithTypeArguments;
exports.isTSInterfaceDeclaration = isTSInterfaceDeclaration;
exports.isTSInterfaceBody = isTSInterfaceBody;
exports.isTSTypeAliasDeclaration = isTSTypeAliasDeclaration;
exports.isTSAsExpression = isTSAsExpression;
exports.isTSTypeAssertion = isTSTypeAssertion;
exports.isTSEnumDeclaration = isTSEnumDeclaration;
exports.isTSEnumMember = isTSEnumMember;
exports.isTSModuleDeclaration = isTSModuleDeclaration;
exports.isTSModuleBlock = isTSModuleBlock;
exports.isTSImportType = isTSImportType;
exports.isTSImportEqualsDeclaration = isTSImportEqualsDeclaration;
exports.isTSExternalModuleReference = isTSExternalModuleReference;
exports.isTSNonNullExpression = isTSNonNullExpression;
exports.isTSExportAssignment = isTSExportAssignment;
exports.isTSNamespaceExportDeclaration = isTSNamespaceExportDeclaration;
exports.isTSTypeAnnotation = isTSTypeAnnotation;
exports.isTSTypeParameterInstantiation = isTSTypeParameterInstantiation;
exports.isTSTypeParameterDeclaration = isTSTypeParameterDeclaration;
exports.isTSTypeParameter = isTSTypeParameter;
exports.isExpression = isExpression;
exports.isBinary = isBinary;
exports.isScopable = isScopable;
exports.isBlockParent = isBlockParent;
exports.isBlock = isBlock;
exports.isStatement = isStatement;
exports.isTerminatorless = isTerminatorless;
exports.isCompletionStatement = isCompletionStatement;
exports.isConditional = isConditional;
exports.isLoop = isLoop;
exports.isWhile = isWhile;
exports.isExpressionWrapper = isExpressionWrapper;
exports.isFor = isFor;
exports.isForXStatement = isForXStatement;
exports.isFunction = isFunction;
exports.isFunctionParent = isFunctionParent;
exports.isPureish = isPureish;
exports.isDeclaration = isDeclaration;
exports.isPatternLike = isPatternLike;
exports.isLVal = isLVal;
exports.isTSEntityName = isTSEntityName;
exports.isLiteral = isLiteral;
exports.isImmutable = isImmutable;
exports.isUserWhitespacable = isUserWhitespacable;
exports.isMethod = isMethod;
exports.isObjectMember = isObjectMember;
exports.isProperty = isProperty;
exports.isUnaryLike = isUnaryLike;
exports.isPattern = isPattern;
exports.isClass = isClass;
exports.isModuleDeclaration = isModuleDeclaration;
exports.isExportDeclaration = isExportDeclaration;
exports.isModuleSpecifier = isModuleSpecifier;
exports.isFlow = isFlow;
exports.isFlowType = isFlowType;
exports.isFlowBaseAnnotation = isFlowBaseAnnotation;
exports.isFlowDeclaration = isFlowDeclaration;
exports.isFlowPredicate = isFlowPredicate;
exports.isEnumBody = isEnumBody;
exports.isEnumMember = isEnumMember;
exports.isJSX = isJSX;
exports.isPrivate = isPrivate;
exports.isTSTypeElement = isTSTypeElement;
exports.isTSType = isTSType;
exports.isTSBaseType = isTSBaseType;
exports.isNumberLiteral = isNumberLiteral;
exports.isRegexLiteral = isRegexLiteral;
exports.isRestProperty = isRestProperty;
exports.isSpreadProperty = isSpreadProperty;

var _shallowEqual = _interopRequireDefault(shallowEqual_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isArrayExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ArrayExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isAssignmentExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "AssignmentExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isBinaryExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BinaryExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isInterpreterDirective(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "InterpreterDirective") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDirective(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Directive") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDirectiveLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DirectiveLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isBlockStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BlockStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isBreakStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BreakStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isCallExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "CallExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isCatchClause(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "CatchClause") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isConditionalExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ConditionalExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isContinueStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ContinueStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDebuggerStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DebuggerStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDoWhileStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DoWhileStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isEmptyStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EmptyStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isExpressionStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExpressionStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isFile(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "File") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isForInStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ForInStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isForStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ForStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isFunctionDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "FunctionDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isFunctionExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "FunctionExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isIdentifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Identifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isIfStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "IfStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isLabeledStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "LabeledStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isStringLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "StringLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isNumericLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "NumericLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isNullLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "NullLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isBooleanLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BooleanLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isRegExpLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "RegExpLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isLogicalExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "LogicalExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isMemberExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "MemberExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isNewExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "NewExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isProgram(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Program") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isObjectExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isObjectMethod(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectMethod") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isObjectProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isRestElement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "RestElement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isReturnStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ReturnStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isSequenceExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "SequenceExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isParenthesizedExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ParenthesizedExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isSwitchCase(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "SwitchCase") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isSwitchStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "SwitchStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isThisExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ThisExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isThrowStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ThrowStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTryStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TryStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isUnaryExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "UnaryExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isUpdateExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "UpdateExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isVariableDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "VariableDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isVariableDeclarator(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "VariableDeclarator") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isWhileStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "WhileStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isWithStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "WithStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isAssignmentPattern(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "AssignmentPattern") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isArrayPattern(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ArrayPattern") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isArrowFunctionExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ArrowFunctionExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isClassBody(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ClassBody") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isClassExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ClassExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isClassDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ClassDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isExportAllDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExportAllDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isExportDefaultDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExportDefaultDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isExportNamedDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExportNamedDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isExportSpecifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExportSpecifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isForOfStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ForOfStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isImportDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ImportDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isImportDefaultSpecifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ImportDefaultSpecifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isImportNamespaceSpecifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ImportNamespaceSpecifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isImportSpecifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ImportSpecifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isMetaProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "MetaProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isClassMethod(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ClassMethod") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isObjectPattern(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectPattern") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isSpreadElement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "SpreadElement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isSuper(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Super") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTaggedTemplateExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TaggedTemplateExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTemplateElement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TemplateElement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTemplateLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TemplateLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isYieldExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "YieldExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isAwaitExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "AwaitExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isImport(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Import") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isBigIntLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BigIntLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isExportNamespaceSpecifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExportNamespaceSpecifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isOptionalMemberExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "OptionalMemberExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isOptionalCallExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "OptionalCallExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isAnyTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "AnyTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isArrayTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ArrayTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isBooleanTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BooleanTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isBooleanLiteralTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BooleanLiteralTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isNullLiteralTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "NullLiteralTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isClassImplements(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ClassImplements") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDeclareClass(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareClass") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDeclareFunction(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareFunction") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDeclareInterface(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareInterface") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDeclareModule(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareModule") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDeclareModuleExports(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareModuleExports") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDeclareTypeAlias(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareTypeAlias") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDeclareOpaqueType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareOpaqueType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDeclareVariable(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareVariable") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDeclareExportDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareExportDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDeclareExportAllDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareExportAllDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDeclaredPredicate(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclaredPredicate") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isExistsTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExistsTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isFunctionTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "FunctionTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isFunctionTypeParam(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "FunctionTypeParam") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isGenericTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "GenericTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isInferredPredicate(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "InferredPredicate") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isInterfaceExtends(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "InterfaceExtends") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isInterfaceDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "InterfaceDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isInterfaceTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "InterfaceTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isIntersectionTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "IntersectionTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isMixedTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "MixedTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isEmptyTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EmptyTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isNullableTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "NullableTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isNumberLiteralTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "NumberLiteralTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isNumberTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "NumberTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isObjectTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isObjectTypeInternalSlot(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectTypeInternalSlot") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isObjectTypeCallProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectTypeCallProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isObjectTypeIndexer(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectTypeIndexer") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isObjectTypeProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectTypeProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isObjectTypeSpreadProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectTypeSpreadProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isOpaqueType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "OpaqueType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isQualifiedTypeIdentifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "QualifiedTypeIdentifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isStringLiteralTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "StringLiteralTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isStringTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "StringTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isSymbolTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "SymbolTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isThisTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ThisTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTupleTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TupleTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTypeofTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TypeofTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTypeAlias(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TypeAlias") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTypeCastExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TypeCastExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTypeParameter(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TypeParameter") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTypeParameterDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TypeParameterDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTypeParameterInstantiation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TypeParameterInstantiation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isUnionTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "UnionTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isVariance(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Variance") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isVoidTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "VoidTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isEnumDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EnumDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isEnumBooleanBody(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EnumBooleanBody") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isEnumNumberBody(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EnumNumberBody") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isEnumStringBody(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EnumStringBody") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isEnumSymbolBody(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EnumSymbolBody") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isEnumBooleanMember(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EnumBooleanMember") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isEnumNumberMember(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EnumNumberMember") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isEnumStringMember(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EnumStringMember") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isEnumDefaultedMember(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EnumDefaultedMember") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXAttribute(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXAttribute") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXClosingElement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXClosingElement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXElement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXElement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXEmptyExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXEmptyExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXExpressionContainer(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXExpressionContainer") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXSpreadChild(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXSpreadChild") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXIdentifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXIdentifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXMemberExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXMemberExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXNamespacedName(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXNamespacedName") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXOpeningElement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXOpeningElement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXSpreadAttribute(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXSpreadAttribute") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXText(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXText") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXFragment(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXFragment") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXOpeningFragment(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXOpeningFragment") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXClosingFragment(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXClosingFragment") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isNoop(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Noop") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isPlaceholder(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Placeholder") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isV8IntrinsicIdentifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "V8IntrinsicIdentifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isArgumentPlaceholder(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ArgumentPlaceholder") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isBindExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BindExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isClassProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ClassProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isPipelineTopicExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "PipelineTopicExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isPipelineBareFunction(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "PipelineBareFunction") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isPipelinePrimaryTopicReference(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "PipelinePrimaryTopicReference") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isClassPrivateProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ClassPrivateProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isClassPrivateMethod(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ClassPrivateMethod") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isImportAttribute(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ImportAttribute") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDecorator(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Decorator") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDoExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DoExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isExportDefaultSpecifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExportDefaultSpecifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isPrivateName(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "PrivateName") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isRecordExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "RecordExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTupleExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TupleExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDecimalLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DecimalLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isStaticBlock(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "StaticBlock") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isModuleExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ModuleExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSParameterProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSParameterProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSDeclareFunction(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSDeclareFunction") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSDeclareMethod(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSDeclareMethod") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSQualifiedName(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSQualifiedName") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSCallSignatureDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSCallSignatureDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSConstructSignatureDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSConstructSignatureDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSPropertySignature(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSPropertySignature") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSMethodSignature(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSMethodSignature") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSIndexSignature(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSIndexSignature") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSAnyKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSAnyKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSBooleanKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSBooleanKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSBigIntKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSBigIntKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSIntrinsicKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSIntrinsicKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSNeverKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSNeverKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSNullKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSNullKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSNumberKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSNumberKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSObjectKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSObjectKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSStringKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSStringKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSSymbolKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSSymbolKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSUndefinedKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSUndefinedKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSUnknownKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSUnknownKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSVoidKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSVoidKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSThisType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSThisType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSFunctionType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSFunctionType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSConstructorType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSConstructorType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeReference(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeReference") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSTypePredicate(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypePredicate") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeQuery(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeQuery") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSArrayType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSArrayType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSTupleType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTupleType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSOptionalType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSOptionalType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSRestType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSRestType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSNamedTupleMember(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSNamedTupleMember") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSUnionType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSUnionType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSIntersectionType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSIntersectionType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSConditionalType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSConditionalType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSInferType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSInferType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSParenthesizedType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSParenthesizedType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeOperator(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeOperator") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSIndexedAccessType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSIndexedAccessType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSMappedType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSMappedType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSLiteralType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSLiteralType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSExpressionWithTypeArguments(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSExpressionWithTypeArguments") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSInterfaceDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSInterfaceDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSInterfaceBody(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSInterfaceBody") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeAliasDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeAliasDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSAsExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSAsExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeAssertion(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeAssertion") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSEnumDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSEnumDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSEnumMember(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSEnumMember") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSModuleDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSModuleDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSModuleBlock(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSModuleBlock") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSImportType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSImportType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSImportEqualsDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSImportEqualsDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSExternalModuleReference(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSExternalModuleReference") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSNonNullExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSNonNullExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSExportAssignment(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSExportAssignment") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSNamespaceExportDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSNamespaceExportDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeParameterInstantiation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeParameterInstantiation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeParameterDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeParameterDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeParameter(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeParameter") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ArrayExpression" === nodeType || "AssignmentExpression" === nodeType || "BinaryExpression" === nodeType || "CallExpression" === nodeType || "ConditionalExpression" === nodeType || "FunctionExpression" === nodeType || "Identifier" === nodeType || "StringLiteral" === nodeType || "NumericLiteral" === nodeType || "NullLiteral" === nodeType || "BooleanLiteral" === nodeType || "RegExpLiteral" === nodeType || "LogicalExpression" === nodeType || "MemberExpression" === nodeType || "NewExpression" === nodeType || "ObjectExpression" === nodeType || "SequenceExpression" === nodeType || "ParenthesizedExpression" === nodeType || "ThisExpression" === nodeType || "UnaryExpression" === nodeType || "UpdateExpression" === nodeType || "ArrowFunctionExpression" === nodeType || "ClassExpression" === nodeType || "MetaProperty" === nodeType || "Super" === nodeType || "TaggedTemplateExpression" === nodeType || "TemplateLiteral" === nodeType || "YieldExpression" === nodeType || "AwaitExpression" === nodeType || "Import" === nodeType || "BigIntLiteral" === nodeType || "OptionalMemberExpression" === nodeType || "OptionalCallExpression" === nodeType || "TypeCastExpression" === nodeType || "JSXElement" === nodeType || "JSXFragment" === nodeType || "BindExpression" === nodeType || "PipelinePrimaryTopicReference" === nodeType || "DoExpression" === nodeType || "RecordExpression" === nodeType || "TupleExpression" === nodeType || "DecimalLiteral" === nodeType || "ModuleExpression" === nodeType || "TSAsExpression" === nodeType || "TSTypeAssertion" === nodeType || "TSNonNullExpression" === nodeType || nodeType === "Placeholder" && ("Expression" === node.expectedNode || "Identifier" === node.expectedNode || "StringLiteral" === node.expectedNode)) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isBinary(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("BinaryExpression" === nodeType || "LogicalExpression" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isScopable(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("BlockStatement" === nodeType || "CatchClause" === nodeType || "DoWhileStatement" === nodeType || "ForInStatement" === nodeType || "ForStatement" === nodeType || "FunctionDeclaration" === nodeType || "FunctionExpression" === nodeType || "Program" === nodeType || "ObjectMethod" === nodeType || "SwitchStatement" === nodeType || "WhileStatement" === nodeType || "ArrowFunctionExpression" === nodeType || "ClassExpression" === nodeType || "ClassDeclaration" === nodeType || "ForOfStatement" === nodeType || "ClassMethod" === nodeType || "ClassPrivateMethod" === nodeType || "StaticBlock" === nodeType || "TSModuleBlock" === nodeType || nodeType === "Placeholder" && "BlockStatement" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isBlockParent(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("BlockStatement" === nodeType || "CatchClause" === nodeType || "DoWhileStatement" === nodeType || "ForInStatement" === nodeType || "ForStatement" === nodeType || "FunctionDeclaration" === nodeType || "FunctionExpression" === nodeType || "Program" === nodeType || "ObjectMethod" === nodeType || "SwitchStatement" === nodeType || "WhileStatement" === nodeType || "ArrowFunctionExpression" === nodeType || "ForOfStatement" === nodeType || "ClassMethod" === nodeType || "ClassPrivateMethod" === nodeType || "StaticBlock" === nodeType || "TSModuleBlock" === nodeType || nodeType === "Placeholder" && "BlockStatement" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isBlock(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("BlockStatement" === nodeType || "Program" === nodeType || "TSModuleBlock" === nodeType || nodeType === "Placeholder" && "BlockStatement" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("BlockStatement" === nodeType || "BreakStatement" === nodeType || "ContinueStatement" === nodeType || "DebuggerStatement" === nodeType || "DoWhileStatement" === nodeType || "EmptyStatement" === nodeType || "ExpressionStatement" === nodeType || "ForInStatement" === nodeType || "ForStatement" === nodeType || "FunctionDeclaration" === nodeType || "IfStatement" === nodeType || "LabeledStatement" === nodeType || "ReturnStatement" === nodeType || "SwitchStatement" === nodeType || "ThrowStatement" === nodeType || "TryStatement" === nodeType || "VariableDeclaration" === nodeType || "WhileStatement" === nodeType || "WithStatement" === nodeType || "ClassDeclaration" === nodeType || "ExportAllDeclaration" === nodeType || "ExportDefaultDeclaration" === nodeType || "ExportNamedDeclaration" === nodeType || "ForOfStatement" === nodeType || "ImportDeclaration" === nodeType || "DeclareClass" === nodeType || "DeclareFunction" === nodeType || "DeclareInterface" === nodeType || "DeclareModule" === nodeType || "DeclareModuleExports" === nodeType || "DeclareTypeAlias" === nodeType || "DeclareOpaqueType" === nodeType || "DeclareVariable" === nodeType || "DeclareExportDeclaration" === nodeType || "DeclareExportAllDeclaration" === nodeType || "InterfaceDeclaration" === nodeType || "OpaqueType" === nodeType || "TypeAlias" === nodeType || "EnumDeclaration" === nodeType || "TSDeclareFunction" === nodeType || "TSInterfaceDeclaration" === nodeType || "TSTypeAliasDeclaration" === nodeType || "TSEnumDeclaration" === nodeType || "TSModuleDeclaration" === nodeType || "TSImportEqualsDeclaration" === nodeType || "TSExportAssignment" === nodeType || "TSNamespaceExportDeclaration" === nodeType || nodeType === "Placeholder" && ("Statement" === node.expectedNode || "Declaration" === node.expectedNode || "BlockStatement" === node.expectedNode)) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTerminatorless(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("BreakStatement" === nodeType || "ContinueStatement" === nodeType || "ReturnStatement" === nodeType || "ThrowStatement" === nodeType || "YieldExpression" === nodeType || "AwaitExpression" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isCompletionStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("BreakStatement" === nodeType || "ContinueStatement" === nodeType || "ReturnStatement" === nodeType || "ThrowStatement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isConditional(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ConditionalExpression" === nodeType || "IfStatement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isLoop(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("DoWhileStatement" === nodeType || "ForInStatement" === nodeType || "ForStatement" === nodeType || "WhileStatement" === nodeType || "ForOfStatement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isWhile(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("DoWhileStatement" === nodeType || "WhileStatement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isExpressionWrapper(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ExpressionStatement" === nodeType || "ParenthesizedExpression" === nodeType || "TypeCastExpression" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isFor(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ForInStatement" === nodeType || "ForStatement" === nodeType || "ForOfStatement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isForXStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ForInStatement" === nodeType || "ForOfStatement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isFunction(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("FunctionDeclaration" === nodeType || "FunctionExpression" === nodeType || "ObjectMethod" === nodeType || "ArrowFunctionExpression" === nodeType || "ClassMethod" === nodeType || "ClassPrivateMethod" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isFunctionParent(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("FunctionDeclaration" === nodeType || "FunctionExpression" === nodeType || "ObjectMethod" === nodeType || "ArrowFunctionExpression" === nodeType || "ClassMethod" === nodeType || "ClassPrivateMethod" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isPureish(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("FunctionDeclaration" === nodeType || "FunctionExpression" === nodeType || "StringLiteral" === nodeType || "NumericLiteral" === nodeType || "NullLiteral" === nodeType || "BooleanLiteral" === nodeType || "RegExpLiteral" === nodeType || "ArrowFunctionExpression" === nodeType || "BigIntLiteral" === nodeType || "DecimalLiteral" === nodeType || nodeType === "Placeholder" && "StringLiteral" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("FunctionDeclaration" === nodeType || "VariableDeclaration" === nodeType || "ClassDeclaration" === nodeType || "ExportAllDeclaration" === nodeType || "ExportDefaultDeclaration" === nodeType || "ExportNamedDeclaration" === nodeType || "ImportDeclaration" === nodeType || "DeclareClass" === nodeType || "DeclareFunction" === nodeType || "DeclareInterface" === nodeType || "DeclareModule" === nodeType || "DeclareModuleExports" === nodeType || "DeclareTypeAlias" === nodeType || "DeclareOpaqueType" === nodeType || "DeclareVariable" === nodeType || "DeclareExportDeclaration" === nodeType || "DeclareExportAllDeclaration" === nodeType || "InterfaceDeclaration" === nodeType || "OpaqueType" === nodeType || "TypeAlias" === nodeType || "EnumDeclaration" === nodeType || "TSDeclareFunction" === nodeType || "TSInterfaceDeclaration" === nodeType || "TSTypeAliasDeclaration" === nodeType || "TSEnumDeclaration" === nodeType || "TSModuleDeclaration" === nodeType || nodeType === "Placeholder" && "Declaration" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isPatternLike(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("Identifier" === nodeType || "RestElement" === nodeType || "AssignmentPattern" === nodeType || "ArrayPattern" === nodeType || "ObjectPattern" === nodeType || nodeType === "Placeholder" && ("Pattern" === node.expectedNode || "Identifier" === node.expectedNode)) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isLVal(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("Identifier" === nodeType || "MemberExpression" === nodeType || "RestElement" === nodeType || "AssignmentPattern" === nodeType || "ArrayPattern" === nodeType || "ObjectPattern" === nodeType || "TSParameterProperty" === nodeType || nodeType === "Placeholder" && ("Pattern" === node.expectedNode || "Identifier" === node.expectedNode)) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSEntityName(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("Identifier" === nodeType || "TSQualifiedName" === nodeType || nodeType === "Placeholder" && "Identifier" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("StringLiteral" === nodeType || "NumericLiteral" === nodeType || "NullLiteral" === nodeType || "BooleanLiteral" === nodeType || "RegExpLiteral" === nodeType || "TemplateLiteral" === nodeType || "BigIntLiteral" === nodeType || "DecimalLiteral" === nodeType || nodeType === "Placeholder" && "StringLiteral" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isImmutable(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("StringLiteral" === nodeType || "NumericLiteral" === nodeType || "NullLiteral" === nodeType || "BooleanLiteral" === nodeType || "BigIntLiteral" === nodeType || "JSXAttribute" === nodeType || "JSXClosingElement" === nodeType || "JSXElement" === nodeType || "JSXExpressionContainer" === nodeType || "JSXSpreadChild" === nodeType || "JSXOpeningElement" === nodeType || "JSXText" === nodeType || "JSXFragment" === nodeType || "JSXOpeningFragment" === nodeType || "JSXClosingFragment" === nodeType || "DecimalLiteral" === nodeType || nodeType === "Placeholder" && "StringLiteral" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isUserWhitespacable(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ObjectMethod" === nodeType || "ObjectProperty" === nodeType || "ObjectTypeInternalSlot" === nodeType || "ObjectTypeCallProperty" === nodeType || "ObjectTypeIndexer" === nodeType || "ObjectTypeProperty" === nodeType || "ObjectTypeSpreadProperty" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isMethod(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ObjectMethod" === nodeType || "ClassMethod" === nodeType || "ClassPrivateMethod" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isObjectMember(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ObjectMethod" === nodeType || "ObjectProperty" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ObjectProperty" === nodeType || "ClassProperty" === nodeType || "ClassPrivateProperty" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isUnaryLike(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("UnaryExpression" === nodeType || "SpreadElement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isPattern(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("AssignmentPattern" === nodeType || "ArrayPattern" === nodeType || "ObjectPattern" === nodeType || nodeType === "Placeholder" && "Pattern" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isClass(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ClassExpression" === nodeType || "ClassDeclaration" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isModuleDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ExportAllDeclaration" === nodeType || "ExportDefaultDeclaration" === nodeType || "ExportNamedDeclaration" === nodeType || "ImportDeclaration" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isExportDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ExportAllDeclaration" === nodeType || "ExportDefaultDeclaration" === nodeType || "ExportNamedDeclaration" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isModuleSpecifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ExportSpecifier" === nodeType || "ImportDefaultSpecifier" === nodeType || "ImportNamespaceSpecifier" === nodeType || "ImportSpecifier" === nodeType || "ExportNamespaceSpecifier" === nodeType || "ExportDefaultSpecifier" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isFlow(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("AnyTypeAnnotation" === nodeType || "ArrayTypeAnnotation" === nodeType || "BooleanTypeAnnotation" === nodeType || "BooleanLiteralTypeAnnotation" === nodeType || "NullLiteralTypeAnnotation" === nodeType || "ClassImplements" === nodeType || "DeclareClass" === nodeType || "DeclareFunction" === nodeType || "DeclareInterface" === nodeType || "DeclareModule" === nodeType || "DeclareModuleExports" === nodeType || "DeclareTypeAlias" === nodeType || "DeclareOpaqueType" === nodeType || "DeclareVariable" === nodeType || "DeclareExportDeclaration" === nodeType || "DeclareExportAllDeclaration" === nodeType || "DeclaredPredicate" === nodeType || "ExistsTypeAnnotation" === nodeType || "FunctionTypeAnnotation" === nodeType || "FunctionTypeParam" === nodeType || "GenericTypeAnnotation" === nodeType || "InferredPredicate" === nodeType || "InterfaceExtends" === nodeType || "InterfaceDeclaration" === nodeType || "InterfaceTypeAnnotation" === nodeType || "IntersectionTypeAnnotation" === nodeType || "MixedTypeAnnotation" === nodeType || "EmptyTypeAnnotation" === nodeType || "NullableTypeAnnotation" === nodeType || "NumberLiteralTypeAnnotation" === nodeType || "NumberTypeAnnotation" === nodeType || "ObjectTypeAnnotation" === nodeType || "ObjectTypeInternalSlot" === nodeType || "ObjectTypeCallProperty" === nodeType || "ObjectTypeIndexer" === nodeType || "ObjectTypeProperty" === nodeType || "ObjectTypeSpreadProperty" === nodeType || "OpaqueType" === nodeType || "QualifiedTypeIdentifier" === nodeType || "StringLiteralTypeAnnotation" === nodeType || "StringTypeAnnotation" === nodeType || "SymbolTypeAnnotation" === nodeType || "ThisTypeAnnotation" === nodeType || "TupleTypeAnnotation" === nodeType || "TypeofTypeAnnotation" === nodeType || "TypeAlias" === nodeType || "TypeAnnotation" === nodeType || "TypeCastExpression" === nodeType || "TypeParameter" === nodeType || "TypeParameterDeclaration" === nodeType || "TypeParameterInstantiation" === nodeType || "UnionTypeAnnotation" === nodeType || "Variance" === nodeType || "VoidTypeAnnotation" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isFlowType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("AnyTypeAnnotation" === nodeType || "ArrayTypeAnnotation" === nodeType || "BooleanTypeAnnotation" === nodeType || "BooleanLiteralTypeAnnotation" === nodeType || "NullLiteralTypeAnnotation" === nodeType || "ExistsTypeAnnotation" === nodeType || "FunctionTypeAnnotation" === nodeType || "GenericTypeAnnotation" === nodeType || "InterfaceTypeAnnotation" === nodeType || "IntersectionTypeAnnotation" === nodeType || "MixedTypeAnnotation" === nodeType || "EmptyTypeAnnotation" === nodeType || "NullableTypeAnnotation" === nodeType || "NumberLiteralTypeAnnotation" === nodeType || "NumberTypeAnnotation" === nodeType || "ObjectTypeAnnotation" === nodeType || "StringLiteralTypeAnnotation" === nodeType || "StringTypeAnnotation" === nodeType || "SymbolTypeAnnotation" === nodeType || "ThisTypeAnnotation" === nodeType || "TupleTypeAnnotation" === nodeType || "TypeofTypeAnnotation" === nodeType || "UnionTypeAnnotation" === nodeType || "VoidTypeAnnotation" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isFlowBaseAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("AnyTypeAnnotation" === nodeType || "BooleanTypeAnnotation" === nodeType || "NullLiteralTypeAnnotation" === nodeType || "MixedTypeAnnotation" === nodeType || "EmptyTypeAnnotation" === nodeType || "NumberTypeAnnotation" === nodeType || "StringTypeAnnotation" === nodeType || "SymbolTypeAnnotation" === nodeType || "ThisTypeAnnotation" === nodeType || "VoidTypeAnnotation" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isFlowDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("DeclareClass" === nodeType || "DeclareFunction" === nodeType || "DeclareInterface" === nodeType || "DeclareModule" === nodeType || "DeclareModuleExports" === nodeType || "DeclareTypeAlias" === nodeType || "DeclareOpaqueType" === nodeType || "DeclareVariable" === nodeType || "DeclareExportDeclaration" === nodeType || "DeclareExportAllDeclaration" === nodeType || "InterfaceDeclaration" === nodeType || "OpaqueType" === nodeType || "TypeAlias" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isFlowPredicate(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("DeclaredPredicate" === nodeType || "InferredPredicate" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isEnumBody(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("EnumBooleanBody" === nodeType || "EnumNumberBody" === nodeType || "EnumStringBody" === nodeType || "EnumSymbolBody" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isEnumMember(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("EnumBooleanMember" === nodeType || "EnumNumberMember" === nodeType || "EnumStringMember" === nodeType || "EnumDefaultedMember" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSX(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("JSXAttribute" === nodeType || "JSXClosingElement" === nodeType || "JSXElement" === nodeType || "JSXEmptyExpression" === nodeType || "JSXExpressionContainer" === nodeType || "JSXSpreadChild" === nodeType || "JSXIdentifier" === nodeType || "JSXMemberExpression" === nodeType || "JSXNamespacedName" === nodeType || "JSXOpeningElement" === nodeType || "JSXSpreadAttribute" === nodeType || "JSXText" === nodeType || "JSXFragment" === nodeType || "JSXOpeningFragment" === nodeType || "JSXClosingFragment" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isPrivate(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ClassPrivateProperty" === nodeType || "ClassPrivateMethod" === nodeType || "PrivateName" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeElement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("TSCallSignatureDeclaration" === nodeType || "TSConstructSignatureDeclaration" === nodeType || "TSPropertySignature" === nodeType || "TSMethodSignature" === nodeType || "TSIndexSignature" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("TSAnyKeyword" === nodeType || "TSBooleanKeyword" === nodeType || "TSBigIntKeyword" === nodeType || "TSIntrinsicKeyword" === nodeType || "TSNeverKeyword" === nodeType || "TSNullKeyword" === nodeType || "TSNumberKeyword" === nodeType || "TSObjectKeyword" === nodeType || "TSStringKeyword" === nodeType || "TSSymbolKeyword" === nodeType || "TSUndefinedKeyword" === nodeType || "TSUnknownKeyword" === nodeType || "TSVoidKeyword" === nodeType || "TSThisType" === nodeType || "TSFunctionType" === nodeType || "TSConstructorType" === nodeType || "TSTypeReference" === nodeType || "TSTypePredicate" === nodeType || "TSTypeQuery" === nodeType || "TSTypeLiteral" === nodeType || "TSArrayType" === nodeType || "TSTupleType" === nodeType || "TSOptionalType" === nodeType || "TSRestType" === nodeType || "TSUnionType" === nodeType || "TSIntersectionType" === nodeType || "TSConditionalType" === nodeType || "TSInferType" === nodeType || "TSParenthesizedType" === nodeType || "TSTypeOperator" === nodeType || "TSIndexedAccessType" === nodeType || "TSMappedType" === nodeType || "TSLiteralType" === nodeType || "TSExpressionWithTypeArguments" === nodeType || "TSImportType" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSBaseType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("TSAnyKeyword" === nodeType || "TSBooleanKeyword" === nodeType || "TSBigIntKeyword" === nodeType || "TSIntrinsicKeyword" === nodeType || "TSNeverKeyword" === nodeType || "TSNullKeyword" === nodeType || "TSNumberKeyword" === nodeType || "TSObjectKeyword" === nodeType || "TSStringKeyword" === nodeType || "TSSymbolKeyword" === nodeType || "TSUndefinedKeyword" === nodeType || "TSUnknownKeyword" === nodeType || "TSVoidKeyword" === nodeType || "TSThisType" === nodeType || "TSLiteralType" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isNumberLiteral(node, opts) {
  console.trace("The node type NumberLiteral has been renamed to NumericLiteral");
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "NumberLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isRegexLiteral(node, opts) {
  console.trace("The node type RegexLiteral has been renamed to RegExpLiteral");
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "RegexLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isRestProperty(node, opts) {
  console.trace("The node type RestProperty has been renamed to RestElement");
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "RestProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isSpreadProperty(node, opts) {
  console.trace("The node type SpreadProperty has been renamed to SpreadElement");
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "SpreadProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}
});

unwrapExports(generated);
var generated_1 = generated.isArrayExpression;
var generated_2 = generated.isAssignmentExpression;
var generated_3 = generated.isBinaryExpression;
var generated_4 = generated.isInterpreterDirective;
var generated_5 = generated.isDirective;
var generated_6 = generated.isDirectiveLiteral;
var generated_7 = generated.isBlockStatement;
var generated_8 = generated.isBreakStatement;
var generated_9 = generated.isCallExpression;
var generated_10 = generated.isCatchClause;
var generated_11 = generated.isConditionalExpression;
var generated_12 = generated.isContinueStatement;
var generated_13 = generated.isDebuggerStatement;
var generated_14 = generated.isDoWhileStatement;
var generated_15 = generated.isEmptyStatement;
var generated_16 = generated.isExpressionStatement;
var generated_17 = generated.isFile;
var generated_18 = generated.isForInStatement;
var generated_19 = generated.isForStatement;
var generated_20 = generated.isFunctionDeclaration;
var generated_21 = generated.isFunctionExpression;
var generated_22 = generated.isIdentifier;
var generated_23 = generated.isIfStatement;
var generated_24 = generated.isLabeledStatement;
var generated_25 = generated.isStringLiteral;
var generated_26 = generated.isNumericLiteral;
var generated_27 = generated.isNullLiteral;
var generated_28 = generated.isBooleanLiteral;
var generated_29 = generated.isRegExpLiteral;
var generated_30 = generated.isLogicalExpression;
var generated_31 = generated.isMemberExpression;
var generated_32 = generated.isNewExpression;
var generated_33 = generated.isProgram;
var generated_34 = generated.isObjectExpression;
var generated_35 = generated.isObjectMethod;
var generated_36 = generated.isObjectProperty;
var generated_37 = generated.isRestElement;
var generated_38 = generated.isReturnStatement;
var generated_39 = generated.isSequenceExpression;
var generated_40 = generated.isParenthesizedExpression;
var generated_41 = generated.isSwitchCase;
var generated_42 = generated.isSwitchStatement;
var generated_43 = generated.isThisExpression;
var generated_44 = generated.isThrowStatement;
var generated_45 = generated.isTryStatement;
var generated_46 = generated.isUnaryExpression;
var generated_47 = generated.isUpdateExpression;
var generated_48 = generated.isVariableDeclaration;
var generated_49 = generated.isVariableDeclarator;
var generated_50 = generated.isWhileStatement;
var generated_51 = generated.isWithStatement;
var generated_52 = generated.isAssignmentPattern;
var generated_53 = generated.isArrayPattern;
var generated_54 = generated.isArrowFunctionExpression;
var generated_55 = generated.isClassBody;
var generated_56 = generated.isClassExpression;
var generated_57 = generated.isClassDeclaration;
var generated_58 = generated.isExportAllDeclaration;
var generated_59 = generated.isExportDefaultDeclaration;
var generated_60 = generated.isExportNamedDeclaration;
var generated_61 = generated.isExportSpecifier;
var generated_62 = generated.isForOfStatement;
var generated_63 = generated.isImportDeclaration;
var generated_64 = generated.isImportDefaultSpecifier;
var generated_65 = generated.isImportNamespaceSpecifier;
var generated_66 = generated.isImportSpecifier;
var generated_67 = generated.isMetaProperty;
var generated_68 = generated.isClassMethod;
var generated_69 = generated.isObjectPattern;
var generated_70 = generated.isSpreadElement;
var generated_71 = generated.isSuper;
var generated_72 = generated.isTaggedTemplateExpression;
var generated_73 = generated.isTemplateElement;
var generated_74 = generated.isTemplateLiteral;
var generated_75 = generated.isYieldExpression;
var generated_76 = generated.isAwaitExpression;
var generated_77 = generated.isImport;
var generated_78 = generated.isBigIntLiteral;
var generated_79 = generated.isExportNamespaceSpecifier;
var generated_80 = generated.isOptionalMemberExpression;
var generated_81 = generated.isOptionalCallExpression;
var generated_82 = generated.isAnyTypeAnnotation;
var generated_83 = generated.isArrayTypeAnnotation;
var generated_84 = generated.isBooleanTypeAnnotation;
var generated_85 = generated.isBooleanLiteralTypeAnnotation;
var generated_86 = generated.isNullLiteralTypeAnnotation;
var generated_87 = generated.isClassImplements;
var generated_88 = generated.isDeclareClass;
var generated_89 = generated.isDeclareFunction;
var generated_90 = generated.isDeclareInterface;
var generated_91 = generated.isDeclareModule;
var generated_92 = generated.isDeclareModuleExports;
var generated_93 = generated.isDeclareTypeAlias;
var generated_94 = generated.isDeclareOpaqueType;
var generated_95 = generated.isDeclareVariable;
var generated_96 = generated.isDeclareExportDeclaration;
var generated_97 = generated.isDeclareExportAllDeclaration;
var generated_98 = generated.isDeclaredPredicate;
var generated_99 = generated.isExistsTypeAnnotation;
var generated_100 = generated.isFunctionTypeAnnotation;
var generated_101 = generated.isFunctionTypeParam;
var generated_102 = generated.isGenericTypeAnnotation;
var generated_103 = generated.isInferredPredicate;
var generated_104 = generated.isInterfaceExtends;
var generated_105 = generated.isInterfaceDeclaration;
var generated_106 = generated.isInterfaceTypeAnnotation;
var generated_107 = generated.isIntersectionTypeAnnotation;
var generated_108 = generated.isMixedTypeAnnotation;
var generated_109 = generated.isEmptyTypeAnnotation;
var generated_110 = generated.isNullableTypeAnnotation;
var generated_111 = generated.isNumberLiteralTypeAnnotation;
var generated_112 = generated.isNumberTypeAnnotation;
var generated_113 = generated.isObjectTypeAnnotation;
var generated_114 = generated.isObjectTypeInternalSlot;
var generated_115 = generated.isObjectTypeCallProperty;
var generated_116 = generated.isObjectTypeIndexer;
var generated_117 = generated.isObjectTypeProperty;
var generated_118 = generated.isObjectTypeSpreadProperty;
var generated_119 = generated.isOpaqueType;
var generated_120 = generated.isQualifiedTypeIdentifier;
var generated_121 = generated.isStringLiteralTypeAnnotation;
var generated_122 = generated.isStringTypeAnnotation;
var generated_123 = generated.isSymbolTypeAnnotation;
var generated_124 = generated.isThisTypeAnnotation;
var generated_125 = generated.isTupleTypeAnnotation;
var generated_126 = generated.isTypeofTypeAnnotation;
var generated_127 = generated.isTypeAlias;
var generated_128 = generated.isTypeAnnotation;
var generated_129 = generated.isTypeCastExpression;
var generated_130 = generated.isTypeParameter;
var generated_131 = generated.isTypeParameterDeclaration;
var generated_132 = generated.isTypeParameterInstantiation;
var generated_133 = generated.isUnionTypeAnnotation;
var generated_134 = generated.isVariance;
var generated_135 = generated.isVoidTypeAnnotation;
var generated_136 = generated.isEnumDeclaration;
var generated_137 = generated.isEnumBooleanBody;
var generated_138 = generated.isEnumNumberBody;
var generated_139 = generated.isEnumStringBody;
var generated_140 = generated.isEnumSymbolBody;
var generated_141 = generated.isEnumBooleanMember;
var generated_142 = generated.isEnumNumberMember;
var generated_143 = generated.isEnumStringMember;
var generated_144 = generated.isEnumDefaultedMember;
var generated_145 = generated.isJSXAttribute;
var generated_146 = generated.isJSXClosingElement;
var generated_147 = generated.isJSXElement;
var generated_148 = generated.isJSXEmptyExpression;
var generated_149 = generated.isJSXExpressionContainer;
var generated_150 = generated.isJSXSpreadChild;
var generated_151 = generated.isJSXIdentifier;
var generated_152 = generated.isJSXMemberExpression;
var generated_153 = generated.isJSXNamespacedName;
var generated_154 = generated.isJSXOpeningElement;
var generated_155 = generated.isJSXSpreadAttribute;
var generated_156 = generated.isJSXText;
var generated_157 = generated.isJSXFragment;
var generated_158 = generated.isJSXOpeningFragment;
var generated_159 = generated.isJSXClosingFragment;
var generated_160 = generated.isNoop;
var generated_161 = generated.isPlaceholder;
var generated_162 = generated.isV8IntrinsicIdentifier;
var generated_163 = generated.isArgumentPlaceholder;
var generated_164 = generated.isBindExpression;
var generated_165 = generated.isClassProperty;
var generated_166 = generated.isPipelineTopicExpression;
var generated_167 = generated.isPipelineBareFunction;
var generated_168 = generated.isPipelinePrimaryTopicReference;
var generated_169 = generated.isClassPrivateProperty;
var generated_170 = generated.isClassPrivateMethod;
var generated_171 = generated.isImportAttribute;
var generated_172 = generated.isDecorator;
var generated_173 = generated.isDoExpression;
var generated_174 = generated.isExportDefaultSpecifier;
var generated_175 = generated.isPrivateName;
var generated_176 = generated.isRecordExpression;
var generated_177 = generated.isTupleExpression;
var generated_178 = generated.isDecimalLiteral;
var generated_179 = generated.isStaticBlock;
var generated_180 = generated.isModuleExpression;
var generated_181 = generated.isTSParameterProperty;
var generated_182 = generated.isTSDeclareFunction;
var generated_183 = generated.isTSDeclareMethod;
var generated_184 = generated.isTSQualifiedName;
var generated_185 = generated.isTSCallSignatureDeclaration;
var generated_186 = generated.isTSConstructSignatureDeclaration;
var generated_187 = generated.isTSPropertySignature;
var generated_188 = generated.isTSMethodSignature;
var generated_189 = generated.isTSIndexSignature;
var generated_190 = generated.isTSAnyKeyword;
var generated_191 = generated.isTSBooleanKeyword;
var generated_192 = generated.isTSBigIntKeyword;
var generated_193 = generated.isTSIntrinsicKeyword;
var generated_194 = generated.isTSNeverKeyword;
var generated_195 = generated.isTSNullKeyword;
var generated_196 = generated.isTSNumberKeyword;
var generated_197 = generated.isTSObjectKeyword;
var generated_198 = generated.isTSStringKeyword;
var generated_199 = generated.isTSSymbolKeyword;
var generated_200 = generated.isTSUndefinedKeyword;
var generated_201 = generated.isTSUnknownKeyword;
var generated_202 = generated.isTSVoidKeyword;
var generated_203 = generated.isTSThisType;
var generated_204 = generated.isTSFunctionType;
var generated_205 = generated.isTSConstructorType;
var generated_206 = generated.isTSTypeReference;
var generated_207 = generated.isTSTypePredicate;
var generated_208 = generated.isTSTypeQuery;
var generated_209 = generated.isTSTypeLiteral;
var generated_210 = generated.isTSArrayType;
var generated_211 = generated.isTSTupleType;
var generated_212 = generated.isTSOptionalType;
var generated_213 = generated.isTSRestType;
var generated_214 = generated.isTSNamedTupleMember;
var generated_215 = generated.isTSUnionType;
var generated_216 = generated.isTSIntersectionType;
var generated_217 = generated.isTSConditionalType;
var generated_218 = generated.isTSInferType;
var generated_219 = generated.isTSParenthesizedType;
var generated_220 = generated.isTSTypeOperator;
var generated_221 = generated.isTSIndexedAccessType;
var generated_222 = generated.isTSMappedType;
var generated_223 = generated.isTSLiteralType;
var generated_224 = generated.isTSExpressionWithTypeArguments;
var generated_225 = generated.isTSInterfaceDeclaration;
var generated_226 = generated.isTSInterfaceBody;
var generated_227 = generated.isTSTypeAliasDeclaration;
var generated_228 = generated.isTSAsExpression;
var generated_229 = generated.isTSTypeAssertion;
var generated_230 = generated.isTSEnumDeclaration;
var generated_231 = generated.isTSEnumMember;
var generated_232 = generated.isTSModuleDeclaration;
var generated_233 = generated.isTSModuleBlock;
var generated_234 = generated.isTSImportType;
var generated_235 = generated.isTSImportEqualsDeclaration;
var generated_236 = generated.isTSExternalModuleReference;
var generated_237 = generated.isTSNonNullExpression;
var generated_238 = generated.isTSExportAssignment;
var generated_239 = generated.isTSNamespaceExportDeclaration;
var generated_240 = generated.isTSTypeAnnotation;
var generated_241 = generated.isTSTypeParameterInstantiation;
var generated_242 = generated.isTSTypeParameterDeclaration;
var generated_243 = generated.isTSTypeParameter;
var generated_244 = generated.isExpression;
var generated_245 = generated.isBinary;
var generated_246 = generated.isScopable;
var generated_247 = generated.isBlockParent;
var generated_248 = generated.isBlock;
var generated_249 = generated.isStatement;
var generated_250 = generated.isTerminatorless;
var generated_251 = generated.isCompletionStatement;
var generated_252 = generated.isConditional;
var generated_253 = generated.isLoop;
var generated_254 = generated.isWhile;
var generated_255 = generated.isExpressionWrapper;
var generated_256 = generated.isFor;
var generated_257 = generated.isForXStatement;
var generated_258 = generated.isFunction;
var generated_259 = generated.isFunctionParent;
var generated_260 = generated.isPureish;
var generated_261 = generated.isDeclaration;
var generated_262 = generated.isPatternLike;
var generated_263 = generated.isLVal;
var generated_264 = generated.isTSEntityName;
var generated_265 = generated.isLiteral;
var generated_266 = generated.isImmutable;
var generated_267 = generated.isUserWhitespacable;
var generated_268 = generated.isMethod;
var generated_269 = generated.isObjectMember;
var generated_270 = generated.isProperty;
var generated_271 = generated.isUnaryLike;
var generated_272 = generated.isPattern;
var generated_273 = generated.isClass;
var generated_274 = generated.isModuleDeclaration;
var generated_275 = generated.isExportDeclaration;
var generated_276 = generated.isModuleSpecifier;
var generated_277 = generated.isFlow;
var generated_278 = generated.isFlowType;
var generated_279 = generated.isFlowBaseAnnotation;
var generated_280 = generated.isFlowDeclaration;
var generated_281 = generated.isFlowPredicate;
var generated_282 = generated.isEnumBody;
var generated_283 = generated.isEnumMember;
var generated_284 = generated.isJSX;
var generated_285 = generated.isPrivate;
var generated_286 = generated.isTSTypeElement;
var generated_287 = generated.isTSType;
var generated_288 = generated.isTSBaseType;
var generated_289 = generated.isNumberLiteral;
var generated_290 = generated.isRegexLiteral;
var generated_291 = generated.isRestProperty;
var generated_292 = generated.isSpreadProperty;

var matchesPattern_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = matchesPattern;



function matchesPattern(member, match, allowPartial) {
  if (!(0, generated.isMemberExpression)(member)) return false;
  const parts = Array.isArray(match) ? match : match.split(".");
  const nodes = [];
  let node;

  for (node = member; (0, generated.isMemberExpression)(node); node = node.object) {
    nodes.push(node.property);
  }

  nodes.push(node);
  if (nodes.length < parts.length) return false;
  if (!allowPartial && nodes.length > parts.length) return false;

  for (let i = 0, j = nodes.length - 1; i < parts.length; i++, j--) {
    const node = nodes[j];
    let value;

    if ((0, generated.isIdentifier)(node)) {
      value = node.name;
    } else if ((0, generated.isStringLiteral)(node)) {
      value = node.value;
    } else {
      return false;
    }

    if (parts[i] !== value) return false;
  }

  return true;
}
});

unwrapExports(matchesPattern_1);

var buildMatchMemberExpression_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildMatchMemberExpression;

var _matchesPattern = _interopRequireDefault(matchesPattern_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function buildMatchMemberExpression(match, allowPartial) {
  const parts = match.split(".");
  return member => (0, _matchesPattern.default)(member, parts, allowPartial);
}
});

unwrapExports(buildMatchMemberExpression_1);

var isReactComponent_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _buildMatchMemberExpression = _interopRequireDefault(buildMatchMemberExpression_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const isReactComponent = (0, _buildMatchMemberExpression.default)("React.Component");
var _default = isReactComponent;
exports.default = _default;
});

unwrapExports(isReactComponent_1);

var isCompatTag_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCompatTag;

function isCompatTag(tagName) {
  return !!tagName && /^[a-z]/.test(tagName);
}
});

unwrapExports(isCompatTag_1);

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

var _ListCache = ListCache;

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache;
  this.size = 0;
}

var _stackClear = stackClear;

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

var _stackDelete = stackDelete;

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

var _stackGet = stackGet;

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

var _stackHas = stackHas;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol$1 = _root.Symbol;

var _Symbol = Symbol$1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype,
    objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

/* Built-in method references that are verified to be native. */
var Map$1 = _getNative(_root, 'Map');

var _Map = Map$1;

/* Built-in method references that are verified to be native. */
var nativeCreate = _getNative(Object, 'create');

var _nativeCreate = nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$3.call(data, key);
}

var _hashHas = hashHas;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

var _Hash = Hash;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map || _ListCache),
    'string': new _Hash
  };
}

var _mapCacheClear = mapCacheClear;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

var _mapCacheGet = mapCacheGet;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

var _mapCacheHas = mapCacheHas;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

var _MapCache = MapCache;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache) {
    var pairs = data.__data__;
    if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

var _stackSet = stackSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;

var _Stack = Stack;

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

var _arrayEach = arrayEach;

var defineProperty = (function() {
  try {
    var func = _getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

var _defineProperty = defineProperty;

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty) {
    _defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

var _baseAssignValue = baseAssignValue;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$4.call(object, key) && eq_1(objValue, value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue(object, key, value);
  }
}

var _assignValue = assignValue;

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      _baseAssignValue(object, key, newValue);
    } else {
      _assignValue(object, key, newValue);
    }
  }
  return object;
}

var _copyObject = copyObject;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
}

var _baseIsArguments = baseIsArguments;

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$6.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$5.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArguments_1 = isArguments;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray_1 = isArray;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse_1;

module.exports = isBuffer;
});

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}

var isLength_1 = isLength;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag$1 = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike_1(value) &&
    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

var _baseIsTypedArray = baseIsTypedArray;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;

var _nodeUtil = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});

/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

var isTypedArray_1 = isTypedArray;

/** Used for built-in method references. */
var objectProto$7 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_1(value),
      isArg = !isArr && isArguments_1(value),
      isBuff = !isArr && !isArg && isBuffer_1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$6.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           _isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys;

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$8;

  return value === proto;
}

var _isPrototype = isPrototype;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = _overArg(Object.keys, Object);

var _nativeKeys = nativeKeys;

/** Used for built-in method references. */
var objectProto$9 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$7.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}

var keys_1 = keys;

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && _copyObject(source, keys_1(source), object);
}

var _baseAssign = baseAssign;

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

var _nativeKeysIn = nativeKeysIn;

/** Used for built-in method references. */
var objectProto$a = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$a.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject_1(object)) {
    return _nativeKeysIn(object);
  }
  var isProto = _isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$8.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

var _baseKeysIn = baseKeysIn;

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
}

var keysIn_1 = keysIn;

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && _copyObject(source, keysIn_1(source), object);
}

var _baseAssignIn = baseAssignIn;

var _cloneBuffer = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;
});

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

var _copyArray = copyArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

var _arrayFilter = arrayFilter;

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

var stubArray_1 = stubArray;

/** Used for built-in method references. */
var objectProto$b = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto$b.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray_1 : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return _arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable$1.call(object, symbol);
  });
};

var _getSymbols = getSymbols;

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return _copyObject(source, _getSymbols(source), object);
}

var _copySymbols = copySymbols;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

var _arrayPush = arrayPush;

/** Built-in value references. */
var getPrototype = _overArg(Object.getPrototypeOf, Object);

var _getPrototype = getPrototype;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols$1 ? stubArray_1 : function(object) {
  var result = [];
  while (object) {
    _arrayPush(result, _getSymbols(object));
    object = _getPrototype(object);
  }
  return result;
};

var _getSymbolsIn = getSymbolsIn;

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return _copyObject(source, _getSymbolsIn(source), object);
}

var _copySymbolsIn = copySymbolsIn;

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
}

var _baseGetAllKeys = baseGetAllKeys;

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return _baseGetAllKeys(object, keys_1, _getSymbols);
}

var _getAllKeys = getAllKeys;

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return _baseGetAllKeys(object, keysIn_1, _getSymbolsIn);
}

var _getAllKeysIn = getAllKeysIn;

/* Built-in method references that are verified to be native. */
var DataView = _getNative(_root, 'DataView');

var _DataView = DataView;

/* Built-in method references that are verified to be native. */
var Promise = _getNative(_root, 'Promise');

var _Promise = Promise;

/* Built-in method references that are verified to be native. */
var Set$1 = _getNative(_root, 'Set');

var _Set = Set$1;

/* Built-in method references that are verified to be native. */
var WeakMap$1 = _getNative(_root, 'WeakMap');

var _WeakMap = WeakMap$1;

/** `Object#toString` result references. */
var mapTag$1 = '[object Map]',
    objectTag$1 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag$1 = '[object Set]',
    weakMapTag$1 = '[object WeakMap]';

var dataViewTag$1 = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = _toSource(_DataView),
    mapCtorString = _toSource(_Map),
    promiseCtorString = _toSource(_Promise),
    setCtorString = _toSource(_Set),
    weakMapCtorString = _toSource(_WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$1) ||
    (_Map && getTag(new _Map) != mapTag$1) ||
    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
    (_Set && getTag(new _Set) != setTag$1) ||
    (_WeakMap && getTag(new _WeakMap) != weakMapTag$1)) {
  getTag = function(value) {
    var result = _baseGetTag(value),
        Ctor = result == objectTag$1 ? value.constructor : undefined,
        ctorString = Ctor ? _toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag$1;
        case mapCtorString: return mapTag$1;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag$1;
        case weakMapCtorString: return weakMapTag$1;
      }
    }
    return result;
  };
}

var _getTag = getTag;

/** Used for built-in method references. */
var objectProto$c = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$9 = objectProto$c.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty$9.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

var _initCloneArray = initCloneArray;

/** Built-in value references. */
var Uint8Array = _root.Uint8Array;

var _Uint8Array = Uint8Array;

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
  return result;
}

var _cloneArrayBuffer = cloneArrayBuffer;

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

var _cloneDataView = cloneDataView;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

var _cloneRegExp = cloneRegExp;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

var _cloneSymbol = cloneSymbol;

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

var _cloneTypedArray = cloneTypedArray;

/** `Object#toString` result references. */
var boolTag$1 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    mapTag$2 = '[object Map]',
    numberTag$1 = '[object Number]',
    regexpTag$1 = '[object RegExp]',
    setTag$2 = '[object Set]',
    stringTag$1 = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$2 = '[object DataView]',
    float32Tag$1 = '[object Float32Array]',
    float64Tag$1 = '[object Float64Array]',
    int8Tag$1 = '[object Int8Array]',
    int16Tag$1 = '[object Int16Array]',
    int32Tag$1 = '[object Int32Array]',
    uint8Tag$1 = '[object Uint8Array]',
    uint8ClampedTag$1 = '[object Uint8ClampedArray]',
    uint16Tag$1 = '[object Uint16Array]',
    uint32Tag$1 = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$1:
      return _cloneArrayBuffer(object);

    case boolTag$1:
    case dateTag$1:
      return new Ctor(+object);

    case dataViewTag$2:
      return _cloneDataView(object, isDeep);

    case float32Tag$1: case float64Tag$1:
    case int8Tag$1: case int16Tag$1: case int32Tag$1:
    case uint8Tag$1: case uint8ClampedTag$1: case uint16Tag$1: case uint32Tag$1:
      return _cloneTypedArray(object, isDeep);

    case mapTag$2:
      return new Ctor;

    case numberTag$1:
    case stringTag$1:
      return new Ctor(object);

    case regexpTag$1:
      return _cloneRegExp(object);

    case setTag$2:
      return new Ctor;

    case symbolTag:
      return _cloneSymbol(object);
  }
}

var _initCloneByTag = initCloneByTag;

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject_1(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

var _baseCreate = baseCreate;

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !_isPrototype(object))
    ? _baseCreate(_getPrototype(object))
    : {};
}

var _initCloneObject = initCloneObject;

/** `Object#toString` result references. */
var mapTag$3 = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike_1(value) && _getTag(value) == mapTag$3;
}

var _baseIsMap = baseIsMap;

/* Node.js helper references. */
var nodeIsMap = _nodeUtil && _nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? _baseUnary(nodeIsMap) : _baseIsMap;

var isMap_1 = isMap;

/** `Object#toString` result references. */
var setTag$3 = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike_1(value) && _getTag(value) == setTag$3;
}

var _baseIsSet = baseIsSet;

/* Node.js helper references. */
var nodeIsSet = _nodeUtil && _nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? _baseUnary(nodeIsSet) : _baseIsSet;

var isSet_1 = isSet;

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag$2 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    boolTag$2 = '[object Boolean]',
    dateTag$2 = '[object Date]',
    errorTag$1 = '[object Error]',
    funcTag$2 = '[object Function]',
    genTag$1 = '[object GeneratorFunction]',
    mapTag$4 = '[object Map]',
    numberTag$2 = '[object Number]',
    objectTag$2 = '[object Object]',
    regexpTag$2 = '[object RegExp]',
    setTag$4 = '[object Set]',
    stringTag$2 = '[object String]',
    symbolTag$1 = '[object Symbol]',
    weakMapTag$2 = '[object WeakMap]';

var arrayBufferTag$2 = '[object ArrayBuffer]',
    dataViewTag$3 = '[object DataView]',
    float32Tag$2 = '[object Float32Array]',
    float64Tag$2 = '[object Float64Array]',
    int8Tag$2 = '[object Int8Array]',
    int16Tag$2 = '[object Int16Array]',
    int32Tag$2 = '[object Int32Array]',
    uint8Tag$2 = '[object Uint8Array]',
    uint8ClampedTag$2 = '[object Uint8ClampedArray]',
    uint16Tag$2 = '[object Uint16Array]',
    uint32Tag$2 = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag$2] = cloneableTags[arrayTag$1] =
cloneableTags[arrayBufferTag$2] = cloneableTags[dataViewTag$3] =
cloneableTags[boolTag$2] = cloneableTags[dateTag$2] =
cloneableTags[float32Tag$2] = cloneableTags[float64Tag$2] =
cloneableTags[int8Tag$2] = cloneableTags[int16Tag$2] =
cloneableTags[int32Tag$2] = cloneableTags[mapTag$4] =
cloneableTags[numberTag$2] = cloneableTags[objectTag$2] =
cloneableTags[regexpTag$2] = cloneableTags[setTag$4] =
cloneableTags[stringTag$2] = cloneableTags[symbolTag$1] =
cloneableTags[uint8Tag$2] = cloneableTags[uint8ClampedTag$2] =
cloneableTags[uint16Tag$2] = cloneableTags[uint32Tag$2] = true;
cloneableTags[errorTag$1] = cloneableTags[funcTag$2] =
cloneableTags[weakMapTag$2] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject_1(value)) {
    return value;
  }
  var isArr = isArray_1(value);
  if (isArr) {
    result = _initCloneArray(value);
    if (!isDeep) {
      return _copyArray(value, result);
    }
  } else {
    var tag = _getTag(value),
        isFunc = tag == funcTag$2 || tag == genTag$1;

    if (isBuffer_1(value)) {
      return _cloneBuffer(value, isDeep);
    }
    if (tag == objectTag$2 || tag == argsTag$2 || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : _initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? _copySymbolsIn(value, _baseAssignIn(result, value))
          : _copySymbols(value, _baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = _initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new _Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet_1(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap_1(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? _getAllKeysIn : _getAllKeys)
    : (isFlat ? keysIn_1 : keys_1);

  var props = isArr ? undefined : keysFunc(value);
  _arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    _assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

var _baseClone = baseClone;

/** Used to compose bitmasks for cloning. */
var CLONE_SYMBOLS_FLAG$1 = 4;

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return _baseClone(value, CLONE_SYMBOLS_FLAG$1);
}

var clone_1 = clone;

let fastProto = null;

// Creates an object with permanently fast properties in V8. See Toon Verwaest's
// post https://medium.com/@tverwaes/setting-up-prototypes-in-v8-ec9c9491dfe2#5f62
// for more details. Use %HasFastProperties(object) and the Node.js flag
// --allow-natives-syntax to check whether an object has fast properties.
function FastObject(o) {
	// A prototype object will have "fast properties" enabled once it is checked
	// against the inline property cache of a function, e.g. fastProto.property:
	// https://github.com/v8/v8/blob/6.0.122/test/mjsunit/fast-prototype.js#L48-L63
	if (fastProto !== null && typeof fastProto.property) {
		const result = fastProto;
		fastProto = FastObject.prototype = null;
		return result;
	}
	fastProto = FastObject.prototype = o == null ? Object.create(null) : o;
	return new FastObject;
}

// Initialize the inline property cache of FastObject
FastObject();

var toFastProperties = function toFastproperties(o) {
	return FastObject(o);
};

var isType_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isType;



function isType(nodeType, targetType) {
  if (nodeType === targetType) return true;
  if (definitions.ALIAS_KEYS[targetType]) return false;
  const aliases = definitions.FLIPPED_ALIAS_KEYS[targetType];

  if (aliases) {
    if (aliases[0] === nodeType) return true;

    for (const alias of aliases) {
      if (nodeType === alias) return true;
    }
  }

  return false;
}
});

unwrapExports(isType_1);

var isPlaceholderType_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPlaceholderType;



function isPlaceholderType(placeholderType, targetType) {
  if (placeholderType === targetType) return true;
  const aliases = definitions.PLACEHOLDERS_ALIAS[placeholderType];

  if (aliases) {
    for (const alias of aliases) {
      if (targetType === alias) return true;
    }
  }

  return false;
}
});

unwrapExports(isPlaceholderType_1);

var is_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = is;

var _shallowEqual = _interopRequireDefault(shallowEqual_1);

var _isType = _interopRequireDefault(isType_1);

var _isPlaceholderType = _interopRequireDefault(isPlaceholderType_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function is(type, node, opts) {
  if (!node) return false;
  const matches = (0, _isType.default)(node.type, type);

  if (!matches) {
    if (!opts && node.type === "Placeholder" && type in definitions.FLIPPED_ALIAS_KEYS) {
      return (0, _isPlaceholderType.default)(node.expectedNode, type);
    }

    return false;
  }

  if (typeof opts === "undefined") {
    return true;
  } else {
    return (0, _shallowEqual.default)(node, opts);
  }
}
});

unwrapExports(is_1);

var identifier = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isIdentifierStart = isIdentifierStart;
exports.isIdentifierChar = isIdentifierChar;
exports.isIdentifierName = isIdentifierName;
let nonASCIIidentifierStartChars = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u08a0-\u08b4\u08b6-\u08c7\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u09fc\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d04-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1cfa\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31bf\u31f0-\u31ff\u3400-\u4dbf\u4e00-\u9ffc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7bf\ua7c2-\ua7ca\ua7f5-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab69\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc";
let nonASCIIidentifierChars = "\u200c\u200d\xb7\u0300-\u036f\u0387\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u07fd\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08d3-\u08e1\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u09fe\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0afa-\u0aff\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b55-\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c00-\u0c04\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d00-\u0d03\u0d3b\u0d3c\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d81-\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19d0-\u19da\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1ab0-\u1abd\u1abf\u1ac0\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf4\u1cf7-\u1cf9\u1dc0-\u1df9\u1dfb-\u1dff\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua82c\ua880\ua881\ua8b4-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f1\ua8ff-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\ua9e5\ua9f0-\ua9f9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f";
const nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
const nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;
const astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 107, 20, 28, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8952, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938];
const astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];

function isInAstralSet(code, set) {
  let pos = 0x10000;

  for (let i = 0, length = set.length; i < length; i += 2) {
    pos += set[i];
    if (pos > code) return false;
    pos += set[i + 1];
    if (pos >= code) return true;
  }

  return false;
}

function isIdentifierStart(code) {
  if (code < 65) return code === 36;
  if (code <= 90) return true;
  if (code < 97) return code === 95;
  if (code <= 122) return true;

  if (code <= 0xffff) {
    return code >= 0xaa && nonASCIIidentifierStart.test(String.fromCharCode(code));
  }

  return isInAstralSet(code, astralIdentifierStartCodes);
}

function isIdentifierChar(code) {
  if (code < 48) return code === 36;
  if (code < 58) return true;
  if (code < 65) return false;
  if (code <= 90) return true;
  if (code < 97) return code === 95;
  if (code <= 122) return true;

  if (code <= 0xffff) {
    return code >= 0xaa && nonASCIIidentifier.test(String.fromCharCode(code));
  }

  return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes);
}

function isIdentifierName(name) {
  let isFirst = true;

  for (let _i = 0, _Array$from = Array.from(name); _i < _Array$from.length; _i++) {
    const char = _Array$from[_i];
    const cp = char.codePointAt(0);

    if (isFirst) {
      if (!isIdentifierStart(cp)) {
        return false;
      }

      isFirst = false;
    } else if (!isIdentifierChar(cp)) {
      return false;
    }
  }

  return !isFirst;
}
});

unwrapExports(identifier);
var identifier_1 = identifier.isIdentifierStart;
var identifier_2 = identifier.isIdentifierChar;
var identifier_3 = identifier.isIdentifierName;

var keyword = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isReservedWord = isReservedWord;
exports.isStrictReservedWord = isStrictReservedWord;
exports.isStrictBindOnlyReservedWord = isStrictBindOnlyReservedWord;
exports.isStrictBindReservedWord = isStrictBindReservedWord;
exports.isKeyword = isKeyword;
const reservedWords = {
  keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"],
  strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"],
  strictBind: ["eval", "arguments"]
};
const keywords = new Set(reservedWords.keyword);
const reservedWordsStrictSet = new Set(reservedWords.strict);
const reservedWordsStrictBindSet = new Set(reservedWords.strictBind);

function isReservedWord(word, inModule) {
  return inModule && word === "await" || word === "enum";
}

function isStrictReservedWord(word, inModule) {
  return isReservedWord(word, inModule) || reservedWordsStrictSet.has(word);
}

function isStrictBindOnlyReservedWord(word) {
  return reservedWordsStrictBindSet.has(word);
}

function isStrictBindReservedWord(word, inModule) {
  return isStrictReservedWord(word, inModule) || isStrictBindOnlyReservedWord(word);
}

function isKeyword(word) {
  return keywords.has(word);
}
});

unwrapExports(keyword);
var keyword_1 = keyword.isReservedWord;
var keyword_2 = keyword.isStrictReservedWord;
var keyword_3 = keyword.isStrictBindOnlyReservedWord;
var keyword_4 = keyword.isStrictBindReservedWord;
var keyword_5 = keyword.isKeyword;

var lib = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "isIdentifierName", {
  enumerable: true,
  get: function () {
    return identifier.isIdentifierName;
  }
});
Object.defineProperty(exports, "isIdentifierChar", {
  enumerable: true,
  get: function () {
    return identifier.isIdentifierChar;
  }
});
Object.defineProperty(exports, "isIdentifierStart", {
  enumerable: true,
  get: function () {
    return identifier.isIdentifierStart;
  }
});
Object.defineProperty(exports, "isReservedWord", {
  enumerable: true,
  get: function () {
    return keyword.isReservedWord;
  }
});
Object.defineProperty(exports, "isStrictBindOnlyReservedWord", {
  enumerable: true,
  get: function () {
    return keyword.isStrictBindOnlyReservedWord;
  }
});
Object.defineProperty(exports, "isStrictBindReservedWord", {
  enumerable: true,
  get: function () {
    return keyword.isStrictBindReservedWord;
  }
});
Object.defineProperty(exports, "isStrictReservedWord", {
  enumerable: true,
  get: function () {
    return keyword.isStrictReservedWord;
  }
});
Object.defineProperty(exports, "isKeyword", {
  enumerable: true,
  get: function () {
    return keyword.isKeyword;
  }
});
});

unwrapExports(lib);

var isValidIdentifier_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isValidIdentifier;



function isValidIdentifier(name, reserved = true) {
  if (typeof name !== "string") return false;

  if (reserved) {
    if ((0, lib.isKeyword)(name) || (0, lib.isStrictReservedWord)(name, true)) {
      return false;
    }
  }

  return (0, lib.isIdentifierName)(name);
}
});

unwrapExports(isValidIdentifier_1);

var constants = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NOT_LOCAL_BINDING = exports.BLOCK_SCOPED_SYMBOL = exports.INHERIT_KEYS = exports.UNARY_OPERATORS = exports.STRING_UNARY_OPERATORS = exports.NUMBER_UNARY_OPERATORS = exports.BOOLEAN_UNARY_OPERATORS = exports.ASSIGNMENT_OPERATORS = exports.BINARY_OPERATORS = exports.NUMBER_BINARY_OPERATORS = exports.BOOLEAN_BINARY_OPERATORS = exports.COMPARISON_BINARY_OPERATORS = exports.EQUALITY_BINARY_OPERATORS = exports.BOOLEAN_NUMBER_BINARY_OPERATORS = exports.UPDATE_OPERATORS = exports.LOGICAL_OPERATORS = exports.COMMENT_KEYS = exports.FOR_INIT_KEYS = exports.FLATTENABLE_KEYS = exports.STATEMENT_OR_BLOCK_KEYS = void 0;
const STATEMENT_OR_BLOCK_KEYS = ["consequent", "body", "alternate"];
exports.STATEMENT_OR_BLOCK_KEYS = STATEMENT_OR_BLOCK_KEYS;
const FLATTENABLE_KEYS = ["body", "expressions"];
exports.FLATTENABLE_KEYS = FLATTENABLE_KEYS;
const FOR_INIT_KEYS = ["left", "init"];
exports.FOR_INIT_KEYS = FOR_INIT_KEYS;
const COMMENT_KEYS = ["leadingComments", "trailingComments", "innerComments"];
exports.COMMENT_KEYS = COMMENT_KEYS;
const LOGICAL_OPERATORS = ["||", "&&", "??"];
exports.LOGICAL_OPERATORS = LOGICAL_OPERATORS;
const UPDATE_OPERATORS = ["++", "--"];
exports.UPDATE_OPERATORS = UPDATE_OPERATORS;
const BOOLEAN_NUMBER_BINARY_OPERATORS = [">", "<", ">=", "<="];
exports.BOOLEAN_NUMBER_BINARY_OPERATORS = BOOLEAN_NUMBER_BINARY_OPERATORS;
const EQUALITY_BINARY_OPERATORS = ["==", "===", "!=", "!=="];
exports.EQUALITY_BINARY_OPERATORS = EQUALITY_BINARY_OPERATORS;
const COMPARISON_BINARY_OPERATORS = [...EQUALITY_BINARY_OPERATORS, "in", "instanceof"];
exports.COMPARISON_BINARY_OPERATORS = COMPARISON_BINARY_OPERATORS;
const BOOLEAN_BINARY_OPERATORS = [...COMPARISON_BINARY_OPERATORS, ...BOOLEAN_NUMBER_BINARY_OPERATORS];
exports.BOOLEAN_BINARY_OPERATORS = BOOLEAN_BINARY_OPERATORS;
const NUMBER_BINARY_OPERATORS = ["-", "/", "%", "*", "**", "&", "|", ">>", ">>>", "<<", "^"];
exports.NUMBER_BINARY_OPERATORS = NUMBER_BINARY_OPERATORS;
const BINARY_OPERATORS = ["+", ...NUMBER_BINARY_OPERATORS, ...BOOLEAN_BINARY_OPERATORS];
exports.BINARY_OPERATORS = BINARY_OPERATORS;
const ASSIGNMENT_OPERATORS = ["=", "+=", ...NUMBER_BINARY_OPERATORS.map(op => op + "="), ...LOGICAL_OPERATORS.map(op => op + "=")];
exports.ASSIGNMENT_OPERATORS = ASSIGNMENT_OPERATORS;
const BOOLEAN_UNARY_OPERATORS = ["delete", "!"];
exports.BOOLEAN_UNARY_OPERATORS = BOOLEAN_UNARY_OPERATORS;
const NUMBER_UNARY_OPERATORS = ["+", "-", "~"];
exports.NUMBER_UNARY_OPERATORS = NUMBER_UNARY_OPERATORS;
const STRING_UNARY_OPERATORS = ["typeof"];
exports.STRING_UNARY_OPERATORS = STRING_UNARY_OPERATORS;
const UNARY_OPERATORS = ["void", "throw", ...BOOLEAN_UNARY_OPERATORS, ...NUMBER_UNARY_OPERATORS, ...STRING_UNARY_OPERATORS];
exports.UNARY_OPERATORS = UNARY_OPERATORS;
const INHERIT_KEYS = {
  optional: ["typeAnnotation", "typeParameters", "returnType"],
  force: ["start", "loc", "end"]
};
exports.INHERIT_KEYS = INHERIT_KEYS;
const BLOCK_SCOPED_SYMBOL = Symbol.for("var used to be block scoped");
exports.BLOCK_SCOPED_SYMBOL = BLOCK_SCOPED_SYMBOL;
const NOT_LOCAL_BINDING = Symbol.for("should not be considered a local binding");
exports.NOT_LOCAL_BINDING = NOT_LOCAL_BINDING;
});

unwrapExports(constants);
var constants_1 = constants.NOT_LOCAL_BINDING;
var constants_2 = constants.BLOCK_SCOPED_SYMBOL;
var constants_3 = constants.INHERIT_KEYS;
var constants_4 = constants.UNARY_OPERATORS;
var constants_5 = constants.STRING_UNARY_OPERATORS;
var constants_6 = constants.NUMBER_UNARY_OPERATORS;
var constants_7 = constants.BOOLEAN_UNARY_OPERATORS;
var constants_8 = constants.ASSIGNMENT_OPERATORS;
var constants_9 = constants.BINARY_OPERATORS;
var constants_10 = constants.NUMBER_BINARY_OPERATORS;
var constants_11 = constants.BOOLEAN_BINARY_OPERATORS;
var constants_12 = constants.COMPARISON_BINARY_OPERATORS;
var constants_13 = constants.EQUALITY_BINARY_OPERATORS;
var constants_14 = constants.BOOLEAN_NUMBER_BINARY_OPERATORS;
var constants_15 = constants.UPDATE_OPERATORS;
var constants_16 = constants.LOGICAL_OPERATORS;
var constants_17 = constants.COMMENT_KEYS;
var constants_18 = constants.FOR_INIT_KEYS;
var constants_19 = constants.FLATTENABLE_KEYS;
var constants_20 = constants.STATEMENT_OR_BLOCK_KEYS;

var validate_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validate;
exports.validateField = validateField;
exports.validateChild = validateChild;



function validate(node, key, val) {
  if (!node) return;
  const fields = definitions.NODE_FIELDS[node.type];
  if (!fields) return;
  const field = fields[key];
  validateField(node, key, val, field);
  validateChild(node, key, val);
}

function validateField(node, key, val, field) {
  if (!(field == null ? void 0 : field.validate)) return;
  if (field.optional && val == null) return;
  field.validate(node, key, val);
}

function validateChild(node, key, val) {
  if (val == null) return;
  const validate = definitions.NODE_PARENT_VALIDATIONS[val.type];
  if (!validate) return;
  validate(node, key, val);
}
});

unwrapExports(validate_1);
var validate_2 = validate_1.validateField;
var validate_3 = validate_1.validateChild;

var utils = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = validate;
exports.typeIs = typeIs;
exports.validateType = validateType;
exports.validateOptional = validateOptional;
exports.validateOptionalType = validateOptionalType;
exports.arrayOf = arrayOf;
exports.arrayOfType = arrayOfType;
exports.validateArrayOfType = validateArrayOfType;
exports.assertEach = assertEach;
exports.assertOneOf = assertOneOf;
exports.assertNodeType = assertNodeType;
exports.assertNodeOrValueType = assertNodeOrValueType;
exports.assertValueType = assertValueType;
exports.assertShape = assertShape;
exports.assertOptionalChainStart = assertOptionalChainStart;
exports.chain = chain;
exports.default = defineType;
exports.NODE_PARENT_VALIDATIONS = exports.DEPRECATED_KEYS = exports.BUILDER_KEYS = exports.NODE_FIELDS = exports.FLIPPED_ALIAS_KEYS = exports.ALIAS_KEYS = exports.VISITOR_KEYS = void 0;

var _is = _interopRequireDefault(is_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const VISITOR_KEYS = {};
exports.VISITOR_KEYS = VISITOR_KEYS;
const ALIAS_KEYS = {};
exports.ALIAS_KEYS = ALIAS_KEYS;
const FLIPPED_ALIAS_KEYS = {};
exports.FLIPPED_ALIAS_KEYS = FLIPPED_ALIAS_KEYS;
const NODE_FIELDS = {};
exports.NODE_FIELDS = NODE_FIELDS;
const BUILDER_KEYS = {};
exports.BUILDER_KEYS = BUILDER_KEYS;
const DEPRECATED_KEYS = {};
exports.DEPRECATED_KEYS = DEPRECATED_KEYS;
const NODE_PARENT_VALIDATIONS = {};
exports.NODE_PARENT_VALIDATIONS = NODE_PARENT_VALIDATIONS;

function getType(val) {
  if (Array.isArray(val)) {
    return "array";
  } else if (val === null) {
    return "null";
  } else {
    return typeof val;
  }
}

function validate(validate) {
  return {
    validate
  };
}

function typeIs(typeName) {
  return typeof typeName === "string" ? assertNodeType(typeName) : assertNodeType(...typeName);
}

function validateType(typeName) {
  return validate(typeIs(typeName));
}

function validateOptional(validate) {
  return {
    validate,
    optional: true
  };
}

function validateOptionalType(typeName) {
  return {
    validate: typeIs(typeName),
    optional: true
  };
}

function arrayOf(elementType) {
  return chain(assertValueType("array"), assertEach(elementType));
}

function arrayOfType(typeName) {
  return arrayOf(typeIs(typeName));
}

function validateArrayOfType(typeName) {
  return validate(arrayOfType(typeName));
}

function assertEach(callback) {
  function validator(node, key, val) {
    if (!Array.isArray(val)) return;

    for (let i = 0; i < val.length; i++) {
      const subkey = `${key}[${i}]`;
      const v = val[i];
      callback(node, subkey, v);
      if (process.env.BABEL_TYPES_8_BREAKING) (0, validate_1.validateChild)(node, subkey, v);
    }
  }

  validator.each = callback;
  return validator;
}

function assertOneOf(...values) {
  function validate(node, key, val) {
    if (values.indexOf(val) < 0) {
      throw new TypeError(`Property ${key} expected value to be one of ${JSON.stringify(values)} but got ${JSON.stringify(val)}`);
    }
  }

  validate.oneOf = values;
  return validate;
}

function assertNodeType(...types) {
  function validate(node, key, val) {
    for (const type of types) {
      if ((0, _is.default)(type, val)) {
        (0, validate_1.validateChild)(node, key, val);
        return;
      }
    }

    throw new TypeError(`Property ${key} of ${node.type} expected node to be of a type ${JSON.stringify(types)} but instead got ${JSON.stringify(val == null ? void 0 : val.type)}`);
  }

  validate.oneOfNodeTypes = types;
  return validate;
}

function assertNodeOrValueType(...types) {
  function validate(node, key, val) {
    for (const type of types) {
      if (getType(val) === type || (0, _is.default)(type, val)) {
        (0, validate_1.validateChild)(node, key, val);
        return;
      }
    }

    throw new TypeError(`Property ${key} of ${node.type} expected node to be of a type ${JSON.stringify(types)} but instead got ${JSON.stringify(val == null ? void 0 : val.type)}`);
  }

  validate.oneOfNodeOrValueTypes = types;
  return validate;
}

function assertValueType(type) {
  function validate(node, key, val) {
    const valid = getType(val) === type;

    if (!valid) {
      throw new TypeError(`Property ${key} expected type of ${type} but got ${getType(val)}`);
    }
  }

  validate.type = type;
  return validate;
}

function assertShape(shape) {
  function validate(node, key, val) {
    const errors = [];

    for (const property of Object.keys(shape)) {
      try {
        (0, validate_1.validateField)(node, property, val[property], shape[property]);
      } catch (error) {
        if (error instanceof TypeError) {
          errors.push(error.message);
          continue;
        }

        throw error;
      }
    }

    if (errors.length) {
      throw new TypeError(`Property ${key} of ${node.type} expected to have the following:\n${errors.join("\n")}`);
    }
  }

  validate.shapeOf = shape;
  return validate;
}

function assertOptionalChainStart() {
  function validate(node) {
    var _current;

    let current = node;

    while (node) {
      const {
        type
      } = current;

      if (type === "OptionalCallExpression") {
        if (current.optional) return;
        current = current.callee;
        continue;
      }

      if (type === "OptionalMemberExpression") {
        if (current.optional) return;
        current = current.object;
        continue;
      }

      break;
    }

    throw new TypeError(`Non-optional ${node.type} must chain from an optional OptionalMemberExpression or OptionalCallExpression. Found chain from ${(_current = current) == null ? void 0 : _current.type}`);
  }

  return validate;
}

function chain(...fns) {
  function validate(...args) {
    for (const fn of fns) {
      fn(...args);
    }
  }

  validate.chainOf = fns;

  if (fns.length >= 2 && "type" in fns[0] && fns[0].type === "array" && !("each" in fns[1])) {
    throw new Error(`An assertValueType("array") validator can only be followed by an assertEach(...) validator.`);
  }

  return validate;
}

const validTypeOpts = ["aliases", "builder", "deprecatedAlias", "fields", "inherits", "visitor", "validate"];
const validFieldKeys = ["default", "optional", "validate"];

function defineType(type, opts = {}) {
  const inherits = opts.inherits && store[opts.inherits] || {};
  let fields = opts.fields;

  if (!fields) {
    fields = {};

    if (inherits.fields) {
      const keys = Object.getOwnPropertyNames(inherits.fields);

      for (const key of keys) {
        const field = inherits.fields[key];
        fields[key] = {
          default: field.default,
          optional: field.optional,
          validate: field.validate
        };
      }
    }
  }

  const visitor = opts.visitor || inherits.visitor || [];
  const aliases = opts.aliases || inherits.aliases || [];
  const builder = opts.builder || inherits.builder || opts.visitor || [];

  for (const k of Object.keys(opts)) {
    if (validTypeOpts.indexOf(k) === -1) {
      throw new Error(`Unknown type option "${k}" on ${type}`);
    }
  }

  if (opts.deprecatedAlias) {
    DEPRECATED_KEYS[opts.deprecatedAlias] = type;
  }

  for (const key of visitor.concat(builder)) {
    fields[key] = fields[key] || {};
  }

  for (const key of Object.keys(fields)) {
    const field = fields[key];

    if (field.default !== undefined && builder.indexOf(key) === -1) {
      field.optional = true;
    }

    if (field.default === undefined) {
      field.default = null;
    } else if (!field.validate && field.default != null) {
      field.validate = assertValueType(getType(field.default));
    }

    for (const k of Object.keys(field)) {
      if (validFieldKeys.indexOf(k) === -1) {
        throw new Error(`Unknown field key "${k}" on ${type}.${key}`);
      }
    }
  }

  VISITOR_KEYS[type] = opts.visitor = visitor;
  BUILDER_KEYS[type] = opts.builder = builder;
  NODE_FIELDS[type] = opts.fields = fields;
  ALIAS_KEYS[type] = opts.aliases = aliases;
  aliases.forEach(alias => {
    FLIPPED_ALIAS_KEYS[alias] = FLIPPED_ALIAS_KEYS[alias] || [];
    FLIPPED_ALIAS_KEYS[alias].push(type);
  });

  if (opts.validate) {
    NODE_PARENT_VALIDATIONS[type] = opts.validate;
  }

  store[type] = opts;
}

const store = {};
});

unwrapExports(utils);
var utils_1 = utils.validate;
var utils_2 = utils.typeIs;
var utils_3 = utils.validateType;
var utils_4 = utils.validateOptional;
var utils_5 = utils.validateOptionalType;
var utils_6 = utils.arrayOf;
var utils_7 = utils.arrayOfType;
var utils_8 = utils.validateArrayOfType;
var utils_9 = utils.assertEach;
var utils_10 = utils.assertOneOf;
var utils_11 = utils.assertNodeType;
var utils_12 = utils.assertNodeOrValueType;
var utils_13 = utils.assertValueType;
var utils_14 = utils.assertShape;
var utils_15 = utils.assertOptionalChainStart;
var utils_16 = utils.chain;
var utils_17 = utils.NODE_PARENT_VALIDATIONS;
var utils_18 = utils.DEPRECATED_KEYS;
var utils_19 = utils.BUILDER_KEYS;
var utils_20 = utils.NODE_FIELDS;
var utils_21 = utils.FLIPPED_ALIAS_KEYS;
var utils_22 = utils.ALIAS_KEYS;
var utils_23 = utils.VISITOR_KEYS;

var core = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.classMethodOrDeclareMethodCommon = exports.classMethodOrPropertyCommon = exports.patternLikeCommon = exports.functionDeclarationCommon = exports.functionTypeAnnotationCommon = exports.functionCommon = void 0;

var _is = _interopRequireDefault(is_1);

var _isValidIdentifier = _interopRequireDefault(isValidIdentifier_1);





var _utils = _interopRequireWildcard(utils);

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _utils.default)("ArrayExpression", {
  fields: {
    elements: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeOrValueType)("null", "Expression", "SpreadElement"))),
      default: !process.env.BABEL_TYPES_8_BREAKING ? [] : undefined
    }
  },
  visitor: ["elements"],
  aliases: ["Expression"]
});
(0, _utils.default)("AssignmentExpression", {
  fields: {
    operator: {
      validate: function () {
        if (!process.env.BABEL_TYPES_8_BREAKING) {
          return (0, _utils.assertValueType)("string");
        }

        const identifier = (0, _utils.assertOneOf)(...constants.ASSIGNMENT_OPERATORS);
        const pattern = (0, _utils.assertOneOf)("=");
        return function (node, key, val) {
          const validator = (0, _is.default)("Pattern", node.left) ? pattern : identifier;
          validator(node, key, val);
        };
      }()
    },
    left: {
      validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.assertNodeType)("LVal") : (0, _utils.assertNodeType)("Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern")
    },
    right: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  },
  builder: ["operator", "left", "right"],
  visitor: ["left", "right"],
  aliases: ["Expression"]
});
(0, _utils.default)("BinaryExpression", {
  builder: ["operator", "left", "right"],
  fields: {
    operator: {
      validate: (0, _utils.assertOneOf)(...constants.BINARY_OPERATORS)
    },
    left: {
      validate: function () {
        const expression = (0, _utils.assertNodeType)("Expression");
        const inOp = (0, _utils.assertNodeType)("Expression", "PrivateName");

        const validator = function (node, key, val) {
          const validator = node.operator === "in" ? inOp : expression;
          validator(node, key, val);
        };

        validator.oneOfNodeTypes = ["Expression", "PrivateName"];
        return validator;
      }()
    },
    right: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  },
  visitor: ["left", "right"],
  aliases: ["Binary", "Expression"]
});
(0, _utils.default)("InterpreterDirective", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils.assertValueType)("string")
    }
  }
});
(0, _utils.default)("Directive", {
  visitor: ["value"],
  fields: {
    value: {
      validate: (0, _utils.assertNodeType)("DirectiveLiteral")
    }
  }
});
(0, _utils.default)("DirectiveLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils.assertValueType)("string")
    }
  }
});
(0, _utils.default)("BlockStatement", {
  builder: ["body", "directives"],
  visitor: ["directives", "body"],
  fields: {
    directives: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Directive"))),
      default: []
    },
    body: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Statement")))
    }
  },
  aliases: ["Scopable", "BlockParent", "Block", "Statement"]
});
(0, _utils.default)("BreakStatement", {
  visitor: ["label"],
  fields: {
    label: {
      validate: (0, _utils.assertNodeType)("Identifier"),
      optional: true
    }
  },
  aliases: ["Statement", "Terminatorless", "CompletionStatement"]
});
(0, _utils.default)("CallExpression", {
  visitor: ["callee", "arguments", "typeParameters", "typeArguments"],
  builder: ["callee", "arguments"],
  aliases: ["Expression"],
  fields: Object.assign({
    callee: {
      validate: (0, _utils.assertNodeType)("Expression", "V8IntrinsicIdentifier")
    },
    arguments: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Expression", "SpreadElement", "JSXNamespacedName", "ArgumentPlaceholder")))
    }
  }, !process.env.BABEL_TYPES_8_BREAKING ? {
    optional: {
      validate: (0, _utils.assertOneOf)(true, false),
      optional: true
    }
  } : {}, {
    typeArguments: {
      validate: (0, _utils.assertNodeType)("TypeParameterInstantiation"),
      optional: true
    },
    typeParameters: {
      validate: (0, _utils.assertNodeType)("TSTypeParameterInstantiation"),
      optional: true
    }
  })
});
(0, _utils.default)("CatchClause", {
  visitor: ["param", "body"],
  fields: {
    param: {
      validate: (0, _utils.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern"),
      optional: true
    },
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement")
    }
  },
  aliases: ["Scopable", "BlockParent"]
});
(0, _utils.default)("ConditionalExpression", {
  visitor: ["test", "consequent", "alternate"],
  fields: {
    test: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    consequent: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    alternate: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  },
  aliases: ["Expression", "Conditional"]
});
(0, _utils.default)("ContinueStatement", {
  visitor: ["label"],
  fields: {
    label: {
      validate: (0, _utils.assertNodeType)("Identifier"),
      optional: true
    }
  },
  aliases: ["Statement", "Terminatorless", "CompletionStatement"]
});
(0, _utils.default)("DebuggerStatement", {
  aliases: ["Statement"]
});
(0, _utils.default)("DoWhileStatement", {
  visitor: ["test", "body"],
  fields: {
    test: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _utils.assertNodeType)("Statement")
    }
  },
  aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"]
});
(0, _utils.default)("EmptyStatement", {
  aliases: ["Statement"]
});
(0, _utils.default)("ExpressionStatement", {
  visitor: ["expression"],
  fields: {
    expression: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  },
  aliases: ["Statement", "ExpressionWrapper"]
});
(0, _utils.default)("File", {
  builder: ["program", "comments", "tokens"],
  visitor: ["program"],
  fields: {
    program: {
      validate: (0, _utils.assertNodeType)("Program")
    },
    comments: {
      validate: !process.env.BABEL_TYPES_8_BREAKING ? Object.assign(() => {}, {
        each: {
          oneOfNodeTypes: ["CommentBlock", "CommentLine"]
        }
      }) : (0, _utils.assertEach)((0, _utils.assertNodeType)("CommentBlock", "CommentLine")),
      optional: true
    },
    tokens: {
      validate: (0, _utils.assertEach)(Object.assign(() => {}, {
        type: "any"
      })),
      optional: true
    }
  }
});
(0, _utils.default)("ForInStatement", {
  visitor: ["left", "right", "body"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
  fields: {
    left: {
      validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.assertNodeType)("VariableDeclaration", "LVal") : (0, _utils.assertNodeType)("VariableDeclaration", "Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern")
    },
    right: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _utils.assertNodeType)("Statement")
    }
  }
});
(0, _utils.default)("ForStatement", {
  visitor: ["init", "test", "update", "body"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop"],
  fields: {
    init: {
      validate: (0, _utils.assertNodeType)("VariableDeclaration", "Expression"),
      optional: true
    },
    test: {
      validate: (0, _utils.assertNodeType)("Expression"),
      optional: true
    },
    update: {
      validate: (0, _utils.assertNodeType)("Expression"),
      optional: true
    },
    body: {
      validate: (0, _utils.assertNodeType)("Statement")
    }
  }
});
const functionCommon = {
  params: {
    validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Identifier", "Pattern", "RestElement", "TSParameterProperty")))
  },
  generator: {
    default: false
  },
  async: {
    default: false
  }
};
exports.functionCommon = functionCommon;
const functionTypeAnnotationCommon = {
  returnType: {
    validate: (0, _utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
    optional: true
  },
  typeParameters: {
    validate: (0, _utils.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
    optional: true
  }
};
exports.functionTypeAnnotationCommon = functionTypeAnnotationCommon;
const functionDeclarationCommon = Object.assign({}, functionCommon, {
  declare: {
    validate: (0, _utils.assertValueType)("boolean"),
    optional: true
  },
  id: {
    validate: (0, _utils.assertNodeType)("Identifier"),
    optional: true
  }
});
exports.functionDeclarationCommon = functionDeclarationCommon;
(0, _utils.default)("FunctionDeclaration", {
  builder: ["id", "params", "body", "generator", "async"],
  visitor: ["id", "params", "body", "returnType", "typeParameters"],
  fields: Object.assign({}, functionDeclarationCommon, functionTypeAnnotationCommon, {
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement")
    }
  }),
  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Statement", "Pureish", "Declaration"],
  validate: function () {
    if (!process.env.BABEL_TYPES_8_BREAKING) return () => {};
    const identifier = (0, _utils.assertNodeType)("Identifier");
    return function (parent, key, node) {
      if (!(0, _is.default)("ExportDefaultDeclaration", parent)) {
        identifier(node, "id", node.id);
      }
    };
  }()
});
(0, _utils.default)("FunctionExpression", {
  inherits: "FunctionDeclaration",
  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
  fields: Object.assign({}, functionCommon, functionTypeAnnotationCommon, {
    id: {
      validate: (0, _utils.assertNodeType)("Identifier"),
      optional: true
    },
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement")
    }
  })
});
const patternLikeCommon = {
  typeAnnotation: {
    validate: (0, _utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
    optional: true
  },
  decorators: {
    validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator")))
  }
};
exports.patternLikeCommon = patternLikeCommon;
(0, _utils.default)("Identifier", {
  builder: ["name"],
  visitor: ["typeAnnotation", "decorators"],
  aliases: ["Expression", "PatternLike", "LVal", "TSEntityName"],
  fields: Object.assign({}, patternLikeCommon, {
    name: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("string"), Object.assign(function (node, key, val) {
        if (!process.env.BABEL_TYPES_8_BREAKING) return;

        if (!(0, _isValidIdentifier.default)(val, false)) {
          throw new TypeError(`"${val}" is not a valid identifier name`);
        }
      }, {
        type: "string"
      }))
    },
    optional: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    }
  }),

  validate(parent, key, node) {
    if (!process.env.BABEL_TYPES_8_BREAKING) return;
    const match = /\.(\w+)$/.exec(key);
    if (!match) return;
    const [, parentKey] = match;
    const nonComp = {
      computed: false
    };

    if (parentKey === "property") {
      if ((0, _is.default)("MemberExpression", parent, nonComp)) return;
      if ((0, _is.default)("OptionalMemberExpression", parent, nonComp)) return;
    } else if (parentKey === "key") {
      if ((0, _is.default)("Property", parent, nonComp)) return;
      if ((0, _is.default)("Method", parent, nonComp)) return;
    } else if (parentKey === "exported") {
      if ((0, _is.default)("ExportSpecifier", parent)) return;
    } else if (parentKey === "imported") {
      if ((0, _is.default)("ImportSpecifier", parent, {
        imported: node
      })) return;
    } else if (parentKey === "meta") {
      if ((0, _is.default)("MetaProperty", parent, {
        meta: node
      })) return;
    }

    if (((0, lib.isKeyword)(node.name) || (0, lib.isReservedWord)(node.name, false)) && node.name !== "this") {
      throw new TypeError(`"${node.name}" is not a valid identifier`);
    }
  }

});
(0, _utils.default)("IfStatement", {
  visitor: ["test", "consequent", "alternate"],
  aliases: ["Statement", "Conditional"],
  fields: {
    test: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    consequent: {
      validate: (0, _utils.assertNodeType)("Statement")
    },
    alternate: {
      optional: true,
      validate: (0, _utils.assertNodeType)("Statement")
    }
  }
});
(0, _utils.default)("LabeledStatement", {
  visitor: ["label", "body"],
  aliases: ["Statement"],
  fields: {
    label: {
      validate: (0, _utils.assertNodeType)("Identifier")
    },
    body: {
      validate: (0, _utils.assertNodeType)("Statement")
    }
  }
});
(0, _utils.default)("StringLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils.assertValueType)("string")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
(0, _utils.default)("NumericLiteral", {
  builder: ["value"],
  deprecatedAlias: "NumberLiteral",
  fields: {
    value: {
      validate: (0, _utils.assertValueType)("number")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
(0, _utils.default)("NullLiteral", {
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
(0, _utils.default)("BooleanLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils.assertValueType)("boolean")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
(0, _utils.default)("RegExpLiteral", {
  builder: ["pattern", "flags"],
  deprecatedAlias: "RegexLiteral",
  aliases: ["Expression", "Pureish", "Literal"],
  fields: {
    pattern: {
      validate: (0, _utils.assertValueType)("string")
    },
    flags: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("string"), Object.assign(function (node, key, val) {
        if (!process.env.BABEL_TYPES_8_BREAKING) return;
        const invalid = /[^gimsuy]/.exec(val);

        if (invalid) {
          throw new TypeError(`"${invalid[0]}" is not a valid RegExp flag`);
        }
      }, {
        type: "string"
      })),
      default: ""
    }
  }
});
(0, _utils.default)("LogicalExpression", {
  builder: ["operator", "left", "right"],
  visitor: ["left", "right"],
  aliases: ["Binary", "Expression"],
  fields: {
    operator: {
      validate: (0, _utils.assertOneOf)(...constants.LOGICAL_OPERATORS)
    },
    left: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    right: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("MemberExpression", {
  builder: ["object", "property", "computed", "optional"],
  visitor: ["object", "property"],
  aliases: ["Expression", "LVal"],
  fields: Object.assign({
    object: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    property: {
      validate: function () {
        const normal = (0, _utils.assertNodeType)("Identifier", "PrivateName");
        const computed = (0, _utils.assertNodeType)("Expression");

        const validator = function (node, key, val) {
          const validator = node.computed ? computed : normal;
          validator(node, key, val);
        };

        validator.oneOfNodeTypes = ["Expression", "Identifier", "PrivateName"];
        return validator;
      }()
    },
    computed: {
      default: false
    }
  }, !process.env.BABEL_TYPES_8_BREAKING ? {
    optional: {
      validate: (0, _utils.assertOneOf)(true, false),
      optional: true
    }
  } : {})
});
(0, _utils.default)("NewExpression", {
  inherits: "CallExpression"
});
(0, _utils.default)("Program", {
  visitor: ["directives", "body"],
  builder: ["body", "directives", "sourceType", "interpreter"],
  fields: {
    sourceFile: {
      validate: (0, _utils.assertValueType)("string")
    },
    sourceType: {
      validate: (0, _utils.assertOneOf)("script", "module"),
      default: "script"
    },
    interpreter: {
      validate: (0, _utils.assertNodeType)("InterpreterDirective"),
      default: null,
      optional: true
    },
    directives: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Directive"))),
      default: []
    },
    body: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Statement")))
    }
  },
  aliases: ["Scopable", "BlockParent", "Block"]
});
(0, _utils.default)("ObjectExpression", {
  visitor: ["properties"],
  aliases: ["Expression"],
  fields: {
    properties: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("ObjectMethod", "ObjectProperty", "SpreadElement")))
    }
  }
});
(0, _utils.default)("ObjectMethod", {
  builder: ["kind", "key", "params", "body", "computed", "generator", "async"],
  fields: Object.assign({}, functionCommon, functionTypeAnnotationCommon, {
    kind: Object.assign({
      validate: (0, _utils.assertOneOf)("method", "get", "set")
    }, !process.env.BABEL_TYPES_8_BREAKING ? {
      default: "method"
    } : {}),
    computed: {
      default: false
    },
    key: {
      validate: function () {
        const normal = (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral");
        const computed = (0, _utils.assertNodeType)("Expression");

        const validator = function (node, key, val) {
          const validator = node.computed ? computed : normal;
          validator(node, key, val);
        };

        validator.oneOfNodeTypes = ["Expression", "Identifier", "StringLiteral", "NumericLiteral"];
        return validator;
      }()
    },
    decorators: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
      optional: true
    },
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement")
    }
  }),
  visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
  aliases: ["UserWhitespacable", "Function", "Scopable", "BlockParent", "FunctionParent", "Method", "ObjectMember"]
});
(0, _utils.default)("ObjectProperty", {
  builder: ["key", "value", "computed", "shorthand", ...(!process.env.BABEL_TYPES_8_BREAKING ? ["decorators"] : [])],
  fields: {
    computed: {
      default: false
    },
    key: {
      validate: function () {
        const normal = (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral");
        const computed = (0, _utils.assertNodeType)("Expression");

        const validator = function (node, key, val) {
          const validator = node.computed ? computed : normal;
          validator(node, key, val);
        };

        validator.oneOfNodeTypes = ["Expression", "Identifier", "StringLiteral", "NumericLiteral"];
        return validator;
      }()
    },
    value: {
      validate: (0, _utils.assertNodeType)("Expression", "PatternLike")
    },
    shorthand: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("boolean"), Object.assign(function (node, key, val) {
        if (!process.env.BABEL_TYPES_8_BREAKING) return;

        if (val && node.computed) {
          throw new TypeError("Property shorthand of ObjectProperty cannot be true if computed is true");
        }
      }, {
        type: "boolean"
      }), function (node, key, val) {
        if (!process.env.BABEL_TYPES_8_BREAKING) return;

        if (val && !(0, _is.default)("Identifier", node.key)) {
          throw new TypeError("Property shorthand of ObjectProperty cannot be true if key is not an Identifier");
        }
      }),
      default: false
    },
    decorators: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
      optional: true
    }
  },
  visitor: ["key", "value", "decorators"],
  aliases: ["UserWhitespacable", "Property", "ObjectMember"],
  validate: function () {
    const pattern = (0, _utils.assertNodeType)("Identifier", "Pattern");
    const expression = (0, _utils.assertNodeType)("Expression");
    return function (parent, key, node) {
      if (!process.env.BABEL_TYPES_8_BREAKING) return;
      const validator = (0, _is.default)("ObjectPattern", parent) ? pattern : expression;
      validator(node, "value", node.value);
    };
  }()
});
(0, _utils.default)("RestElement", {
  visitor: ["argument", "typeAnnotation"],
  builder: ["argument"],
  aliases: ["LVal", "PatternLike"],
  deprecatedAlias: "RestProperty",
  fields: Object.assign({}, patternLikeCommon, {
    argument: {
      validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.assertNodeType)("LVal") : (0, _utils.assertNodeType)("Identifier", "Pattern", "MemberExpression")
    }
  }),

  validate(parent, key) {
    if (!process.env.BABEL_TYPES_8_BREAKING) return;
    const match = /(\w+)\[(\d+)\]/.exec(key);
    if (!match) throw new Error("Internal Babel error: malformed key.");
    const [, listKey, index] = match;

    if (parent[listKey].length > index + 1) {
      throw new TypeError(`RestElement must be last element of ${listKey}`);
    }
  }

});
(0, _utils.default)("ReturnStatement", {
  visitor: ["argument"],
  aliases: ["Statement", "Terminatorless", "CompletionStatement"],
  fields: {
    argument: {
      validate: (0, _utils.assertNodeType)("Expression"),
      optional: true
    }
  }
});
(0, _utils.default)("SequenceExpression", {
  visitor: ["expressions"],
  fields: {
    expressions: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Expression")))
    }
  },
  aliases: ["Expression"]
});
(0, _utils.default)("ParenthesizedExpression", {
  visitor: ["expression"],
  aliases: ["Expression", "ExpressionWrapper"],
  fields: {
    expression: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("SwitchCase", {
  visitor: ["test", "consequent"],
  fields: {
    test: {
      validate: (0, _utils.assertNodeType)("Expression"),
      optional: true
    },
    consequent: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Statement")))
    }
  }
});
(0, _utils.default)("SwitchStatement", {
  visitor: ["discriminant", "cases"],
  aliases: ["Statement", "BlockParent", "Scopable"],
  fields: {
    discriminant: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    cases: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("SwitchCase")))
    }
  }
});
(0, _utils.default)("ThisExpression", {
  aliases: ["Expression"]
});
(0, _utils.default)("ThrowStatement", {
  visitor: ["argument"],
  aliases: ["Statement", "Terminatorless", "CompletionStatement"],
  fields: {
    argument: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("TryStatement", {
  visitor: ["block", "handler", "finalizer"],
  aliases: ["Statement"],
  fields: {
    block: {
      validate: (0, _utils.chain)((0, _utils.assertNodeType)("BlockStatement"), Object.assign(function (node) {
        if (!process.env.BABEL_TYPES_8_BREAKING) return;

        if (!node.handler && !node.finalizer) {
          throw new TypeError("TryStatement expects either a handler or finalizer, or both");
        }
      }, {
        oneOfNodeTypes: ["BlockStatement"]
      }))
    },
    handler: {
      optional: true,
      validate: (0, _utils.assertNodeType)("CatchClause")
    },
    finalizer: {
      optional: true,
      validate: (0, _utils.assertNodeType)("BlockStatement")
    }
  }
});
(0, _utils.default)("UnaryExpression", {
  builder: ["operator", "argument", "prefix"],
  fields: {
    prefix: {
      default: true
    },
    argument: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    operator: {
      validate: (0, _utils.assertOneOf)(...constants.UNARY_OPERATORS)
    }
  },
  visitor: ["argument"],
  aliases: ["UnaryLike", "Expression"]
});
(0, _utils.default)("UpdateExpression", {
  builder: ["operator", "argument", "prefix"],
  fields: {
    prefix: {
      default: false
    },
    argument: {
      validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.assertNodeType)("Expression") : (0, _utils.assertNodeType)("Identifier", "MemberExpression")
    },
    operator: {
      validate: (0, _utils.assertOneOf)(...constants.UPDATE_OPERATORS)
    }
  },
  visitor: ["argument"],
  aliases: ["Expression"]
});
(0, _utils.default)("VariableDeclaration", {
  builder: ["kind", "declarations"],
  visitor: ["declarations"],
  aliases: ["Statement", "Declaration"],
  fields: {
    declare: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    kind: {
      validate: (0, _utils.assertOneOf)("var", "let", "const")
    },
    declarations: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("VariableDeclarator")))
    }
  },

  validate(parent, key, node) {
    if (!process.env.BABEL_TYPES_8_BREAKING) return;
    if (!(0, _is.default)("ForXStatement", parent, {
      left: node
    })) return;

    if (node.declarations.length !== 1) {
      throw new TypeError(`Exactly one VariableDeclarator is required in the VariableDeclaration of a ${parent.type}`);
    }
  }

});
(0, _utils.default)("VariableDeclarator", {
  visitor: ["id", "init"],
  fields: {
    id: {
      validate: function () {
        if (!process.env.BABEL_TYPES_8_BREAKING) {
          return (0, _utils.assertNodeType)("LVal");
        }

        const normal = (0, _utils.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern");
        const without = (0, _utils.assertNodeType)("Identifier");
        return function (node, key, val) {
          const validator = node.init ? normal : without;
          validator(node, key, val);
        };
      }()
    },
    definite: {
      optional: true,
      validate: (0, _utils.assertValueType)("boolean")
    },
    init: {
      optional: true,
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("WhileStatement", {
  visitor: ["test", "body"],
  aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"],
  fields: {
    test: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _utils.assertNodeType)("Statement")
    }
  }
});
(0, _utils.default)("WithStatement", {
  visitor: ["object", "body"],
  aliases: ["Statement"],
  fields: {
    object: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _utils.assertNodeType)("Statement")
    }
  }
});
(0, _utils.default)("AssignmentPattern", {
  visitor: ["left", "right", "decorators"],
  builder: ["left", "right"],
  aliases: ["Pattern", "PatternLike", "LVal"],
  fields: Object.assign({}, patternLikeCommon, {
    left: {
      validate: (0, _utils.assertNodeType)("Identifier", "ObjectPattern", "ArrayPattern", "MemberExpression")
    },
    right: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    decorators: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
      optional: true
    }
  })
});
(0, _utils.default)("ArrayPattern", {
  visitor: ["elements", "typeAnnotation"],
  builder: ["elements"],
  aliases: ["Pattern", "PatternLike", "LVal"],
  fields: Object.assign({}, patternLikeCommon, {
    elements: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeOrValueType)("null", "PatternLike")))
    },
    decorators: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
      optional: true
    }
  })
});
(0, _utils.default)("ArrowFunctionExpression", {
  builder: ["params", "body", "async"],
  visitor: ["params", "body", "returnType", "typeParameters"],
  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
  fields: Object.assign({}, functionCommon, functionTypeAnnotationCommon, {
    expression: {
      validate: (0, _utils.assertValueType)("boolean")
    },
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement", "Expression")
    }
  })
});
(0, _utils.default)("ClassBody", {
  visitor: ["body"],
  fields: {
    body: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("ClassMethod", "ClassPrivateMethod", "ClassProperty", "ClassPrivateProperty", "TSDeclareMethod", "TSIndexSignature")))
    }
  }
});
(0, _utils.default)("ClassExpression", {
  builder: ["id", "superClass", "body", "decorators"],
  visitor: ["id", "body", "superClass", "mixins", "typeParameters", "superTypeParameters", "implements", "decorators"],
  aliases: ["Scopable", "Class", "Expression"],
  fields: {
    id: {
      validate: (0, _utils.assertNodeType)("Identifier"),
      optional: true
    },
    typeParameters: {
      validate: (0, _utils.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
      optional: true
    },
    body: {
      validate: (0, _utils.assertNodeType)("ClassBody")
    },
    superClass: {
      optional: true,
      validate: (0, _utils.assertNodeType)("Expression")
    },
    superTypeParameters: {
      validate: (0, _utils.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: true
    },
    implements: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("TSExpressionWithTypeArguments", "ClassImplements"))),
      optional: true
    },
    decorators: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
      optional: true
    },
    mixins: {
      validate: (0, _utils.assertNodeType)("InterfaceExtends"),
      optional: true
    }
  }
});
(0, _utils.default)("ClassDeclaration", {
  inherits: "ClassExpression",
  aliases: ["Scopable", "Class", "Statement", "Declaration"],
  fields: {
    id: {
      validate: (0, _utils.assertNodeType)("Identifier")
    },
    typeParameters: {
      validate: (0, _utils.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
      optional: true
    },
    body: {
      validate: (0, _utils.assertNodeType)("ClassBody")
    },
    superClass: {
      optional: true,
      validate: (0, _utils.assertNodeType)("Expression")
    },
    superTypeParameters: {
      validate: (0, _utils.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: true
    },
    implements: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("TSExpressionWithTypeArguments", "ClassImplements"))),
      optional: true
    },
    decorators: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
      optional: true
    },
    mixins: {
      validate: (0, _utils.assertNodeType)("InterfaceExtends"),
      optional: true
    },
    declare: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    abstract: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    }
  },
  validate: function () {
    const identifier = (0, _utils.assertNodeType)("Identifier");
    return function (parent, key, node) {
      if (!process.env.BABEL_TYPES_8_BREAKING) return;

      if (!(0, _is.default)("ExportDefaultDeclaration", parent)) {
        identifier(node, "id", node.id);
      }
    };
  }()
});
(0, _utils.default)("ExportAllDeclaration", {
  visitor: ["source"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
  fields: {
    source: {
      validate: (0, _utils.assertNodeType)("StringLiteral")
    },
    exportKind: (0, _utils.validateOptional)((0, _utils.assertOneOf)("type", "value")),
    assertions: {
      optional: true,
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("ImportAttribute")))
    }
  }
});
(0, _utils.default)("ExportDefaultDeclaration", {
  visitor: ["declaration"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
  fields: {
    declaration: {
      validate: (0, _utils.assertNodeType)("FunctionDeclaration", "TSDeclareFunction", "ClassDeclaration", "Expression")
    }
  }
});
(0, _utils.default)("ExportNamedDeclaration", {
  visitor: ["declaration", "specifiers", "source"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
  fields: {
    declaration: {
      optional: true,
      validate: (0, _utils.chain)((0, _utils.assertNodeType)("Declaration"), Object.assign(function (node, key, val) {
        if (!process.env.BABEL_TYPES_8_BREAKING) return;

        if (val && node.specifiers.length) {
          throw new TypeError("Only declaration or specifiers is allowed on ExportNamedDeclaration");
        }
      }, {
        oneOfNodeTypes: ["Declaration"]
      }), function (node, key, val) {
        if (!process.env.BABEL_TYPES_8_BREAKING) return;

        if (val && node.source) {
          throw new TypeError("Cannot export a declaration from a source");
        }
      })
    },
    assertions: {
      optional: true,
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("ImportAttribute")))
    },
    specifiers: {
      default: [],
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)(function () {
        const sourced = (0, _utils.assertNodeType)("ExportSpecifier", "ExportDefaultSpecifier", "ExportNamespaceSpecifier");
        const sourceless = (0, _utils.assertNodeType)("ExportSpecifier");
        if (!process.env.BABEL_TYPES_8_BREAKING) return sourced;
        return function (node, key, val) {
          const validator = node.source ? sourced : sourceless;
          validator(node, key, val);
        };
      }()))
    },
    source: {
      validate: (0, _utils.assertNodeType)("StringLiteral"),
      optional: true
    },
    exportKind: (0, _utils.validateOptional)((0, _utils.assertOneOf)("type", "value"))
  }
});
(0, _utils.default)("ExportSpecifier", {
  visitor: ["local", "exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, _utils.assertNodeType)("Identifier")
    },
    exported: {
      validate: (0, _utils.assertNodeType)("Identifier", "StringLiteral")
    }
  }
});
(0, _utils.default)("ForOfStatement", {
  visitor: ["left", "right", "body"],
  builder: ["left", "right", "body", "await"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
  fields: {
    left: {
      validate: function () {
        if (!process.env.BABEL_TYPES_8_BREAKING) {
          return (0, _utils.assertNodeType)("VariableDeclaration", "LVal");
        }

        const declaration = (0, _utils.assertNodeType)("VariableDeclaration");
        const lval = (0, _utils.assertNodeType)("Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern");
        return function (node, key, val) {
          if ((0, _is.default)("VariableDeclaration", val)) {
            declaration(node, key, val);
          } else {
            lval(node, key, val);
          }
        };
      }()
    },
    right: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _utils.assertNodeType)("Statement")
    },
    await: {
      default: false
    }
  }
});
(0, _utils.default)("ImportDeclaration", {
  visitor: ["specifiers", "source"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration"],
  fields: {
    assertions: {
      optional: true,
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("ImportAttribute")))
    },
    specifiers: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("ImportSpecifier", "ImportDefaultSpecifier", "ImportNamespaceSpecifier")))
    },
    source: {
      validate: (0, _utils.assertNodeType)("StringLiteral")
    },
    importKind: {
      validate: (0, _utils.assertOneOf)("type", "typeof", "value"),
      optional: true
    }
  }
});
(0, _utils.default)("ImportDefaultSpecifier", {
  visitor: ["local"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, _utils.assertNodeType)("Identifier")
    }
  }
});
(0, _utils.default)("ImportNamespaceSpecifier", {
  visitor: ["local"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, _utils.assertNodeType)("Identifier")
    }
  }
});
(0, _utils.default)("ImportSpecifier", {
  visitor: ["local", "imported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, _utils.assertNodeType)("Identifier")
    },
    imported: {
      validate: (0, _utils.assertNodeType)("Identifier", "StringLiteral")
    },
    importKind: {
      validate: (0, _utils.assertOneOf)("type", "typeof"),
      optional: true
    }
  }
});
(0, _utils.default)("MetaProperty", {
  visitor: ["meta", "property"],
  aliases: ["Expression"],
  fields: {
    meta: {
      validate: (0, _utils.chain)((0, _utils.assertNodeType)("Identifier"), Object.assign(function (node, key, val) {
        if (!process.env.BABEL_TYPES_8_BREAKING) return;
        let property;

        switch (val.name) {
          case "function":
            property = "sent";
            break;

          case "new":
            property = "target";
            break;

          case "import":
            property = "meta";
            break;
        }

        if (!(0, _is.default)("Identifier", node.property, {
          name: property
        })) {
          throw new TypeError("Unrecognised MetaProperty");
        }
      }, {
        oneOfNodeTypes: ["Identifier"]
      }))
    },
    property: {
      validate: (0, _utils.assertNodeType)("Identifier")
    }
  }
});
const classMethodOrPropertyCommon = {
  abstract: {
    validate: (0, _utils.assertValueType)("boolean"),
    optional: true
  },
  accessibility: {
    validate: (0, _utils.assertOneOf)("public", "private", "protected"),
    optional: true
  },
  static: {
    default: false
  },
  computed: {
    default: false
  },
  optional: {
    validate: (0, _utils.assertValueType)("boolean"),
    optional: true
  },
  key: {
    validate: (0, _utils.chain)(function () {
      const normal = (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral");
      const computed = (0, _utils.assertNodeType)("Expression");
      return function (node, key, val) {
        const validator = node.computed ? computed : normal;
        validator(node, key, val);
      };
    }(), (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "Expression"))
  }
};
exports.classMethodOrPropertyCommon = classMethodOrPropertyCommon;
const classMethodOrDeclareMethodCommon = Object.assign({}, functionCommon, classMethodOrPropertyCommon, {
  kind: {
    validate: (0, _utils.assertOneOf)("get", "set", "method", "constructor"),
    default: "method"
  },
  access: {
    validate: (0, _utils.chain)((0, _utils.assertValueType)("string"), (0, _utils.assertOneOf)("public", "private", "protected")),
    optional: true
  },
  decorators: {
    validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
    optional: true
  }
});
exports.classMethodOrDeclareMethodCommon = classMethodOrDeclareMethodCommon;
(0, _utils.default)("ClassMethod", {
  aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method"],
  builder: ["kind", "key", "params", "body", "computed", "static", "generator", "async"],
  visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
  fields: Object.assign({}, classMethodOrDeclareMethodCommon, functionTypeAnnotationCommon, {
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement")
    }
  })
});
(0, _utils.default)("ObjectPattern", {
  visitor: ["properties", "typeAnnotation", "decorators"],
  builder: ["properties"],
  aliases: ["Pattern", "PatternLike", "LVal"],
  fields: Object.assign({}, patternLikeCommon, {
    properties: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("RestElement", "ObjectProperty")))
    }
  })
});
(0, _utils.default)("SpreadElement", {
  visitor: ["argument"],
  aliases: ["UnaryLike"],
  deprecatedAlias: "SpreadProperty",
  fields: {
    argument: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("Super", {
  aliases: ["Expression"]
});
(0, _utils.default)("TaggedTemplateExpression", {
  visitor: ["tag", "quasi"],
  aliases: ["Expression"],
  fields: {
    tag: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    quasi: {
      validate: (0, _utils.assertNodeType)("TemplateLiteral")
    },
    typeParameters: {
      validate: (0, _utils.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: true
    }
  }
});
(0, _utils.default)("TemplateElement", {
  builder: ["value", "tail"],
  fields: {
    value: {
      validate: (0, _utils.assertShape)({
        raw: {
          validate: (0, _utils.assertValueType)("string")
        },
        cooked: {
          validate: (0, _utils.assertValueType)("string"),
          optional: true
        }
      })
    },
    tail: {
      default: false
    }
  }
});
(0, _utils.default)("TemplateLiteral", {
  visitor: ["quasis", "expressions"],
  aliases: ["Expression", "Literal"],
  fields: {
    quasis: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("TemplateElement")))
    },
    expressions: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Expression", "TSType")), function (node, key, val) {
        if (node.quasis.length !== val.length + 1) {
          throw new TypeError(`Number of ${node.type} quasis should be exactly one more than the number of expressions.\nExpected ${val.length + 1} quasis but got ${node.quasis.length}`);
        }
      })
    }
  }
});
(0, _utils.default)("YieldExpression", {
  builder: ["argument", "delegate"],
  visitor: ["argument"],
  aliases: ["Expression", "Terminatorless"],
  fields: {
    delegate: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("boolean"), Object.assign(function (node, key, val) {
        if (!process.env.BABEL_TYPES_8_BREAKING) return;

        if (val && !node.argument) {
          throw new TypeError("Property delegate of YieldExpression cannot be true if there is no argument");
        }
      }, {
        type: "boolean"
      })),
      default: false
    },
    argument: {
      optional: true,
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("AwaitExpression", {
  builder: ["argument"],
  visitor: ["argument"],
  aliases: ["Expression", "Terminatorless"],
  fields: {
    argument: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("Import", {
  aliases: ["Expression"]
});
(0, _utils.default)("BigIntLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils.assertValueType)("string")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
(0, _utils.default)("ExportNamespaceSpecifier", {
  visitor: ["exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    exported: {
      validate: (0, _utils.assertNodeType)("Identifier")
    }
  }
});
(0, _utils.default)("OptionalMemberExpression", {
  builder: ["object", "property", "computed", "optional"],
  visitor: ["object", "property"],
  aliases: ["Expression"],
  fields: {
    object: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    property: {
      validate: function () {
        const normal = (0, _utils.assertNodeType)("Identifier");
        const computed = (0, _utils.assertNodeType)("Expression");

        const validator = function (node, key, val) {
          const validator = node.computed ? computed : normal;
          validator(node, key, val);
        };

        validator.oneOfNodeTypes = ["Expression", "Identifier"];
        return validator;
      }()
    },
    computed: {
      default: false
    },
    optional: {
      validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.assertValueType)("boolean") : (0, _utils.chain)((0, _utils.assertValueType)("boolean"), (0, _utils.assertOptionalChainStart)())
    }
  }
});
(0, _utils.default)("OptionalCallExpression", {
  visitor: ["callee", "arguments", "typeParameters", "typeArguments"],
  builder: ["callee", "arguments", "optional"],
  aliases: ["Expression"],
  fields: {
    callee: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    arguments: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Expression", "SpreadElement", "JSXNamespacedName", "ArgumentPlaceholder")))
    },
    optional: {
      validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.assertValueType)("boolean") : (0, _utils.chain)((0, _utils.assertValueType)("boolean"), (0, _utils.assertOptionalChainStart)())
    },
    typeArguments: {
      validate: (0, _utils.assertNodeType)("TypeParameterInstantiation"),
      optional: true
    },
    typeParameters: {
      validate: (0, _utils.assertNodeType)("TSTypeParameterInstantiation"),
      optional: true
    }
  }
});
});

unwrapExports(core);
var core_1 = core.classMethodOrDeclareMethodCommon;
var core_2 = core.classMethodOrPropertyCommon;
var core_3 = core.patternLikeCommon;
var core_4 = core.functionDeclarationCommon;
var core_5 = core.functionTypeAnnotationCommon;
var core_6 = core.functionCommon;

var flow = createCommonjsModule(function (module) {

var _utils = _interopRequireWildcard(utils);

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const defineInterfaceishType = (name, typeParameterType = "TypeParameterDeclaration") => {
  (0, _utils.default)(name, {
    builder: ["id", "typeParameters", "extends", "body"],
    visitor: ["id", "typeParameters", "extends", "mixins", "implements", "body"],
    aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
    fields: {
      id: (0, _utils.validateType)("Identifier"),
      typeParameters: (0, _utils.validateOptionalType)(typeParameterType),
      extends: (0, _utils.validateOptional)((0, _utils.arrayOfType)("InterfaceExtends")),
      mixins: (0, _utils.validateOptional)((0, _utils.arrayOfType)("InterfaceExtends")),
      implements: (0, _utils.validateOptional)((0, _utils.arrayOfType)("ClassImplements")),
      body: (0, _utils.validateType)("ObjectTypeAnnotation")
    }
  });
};

(0, _utils.default)("AnyTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, _utils.default)("ArrayTypeAnnotation", {
  visitor: ["elementType"],
  aliases: ["Flow", "FlowType"],
  fields: {
    elementType: (0, _utils.validateType)("FlowType")
  }
});
(0, _utils.default)("BooleanTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, _utils.default)("BooleanLiteralTypeAnnotation", {
  builder: ["value"],
  aliases: ["Flow", "FlowType"],
  fields: {
    value: (0, _utils.validate)((0, _utils.assertValueType)("boolean"))
  }
});
(0, _utils.default)("NullLiteralTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, _utils.default)("ClassImplements", {
  visitor: ["id", "typeParameters"],
  aliases: ["Flow"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    typeParameters: (0, _utils.validateOptionalType)("TypeParameterInstantiation")
  }
});
defineInterfaceishType("DeclareClass");
(0, _utils.default)("DeclareFunction", {
  visitor: ["id"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    predicate: (0, _utils.validateOptionalType)("DeclaredPredicate")
  }
});
defineInterfaceishType("DeclareInterface");
(0, _utils.default)("DeclareModule", {
  builder: ["id", "body", "kind"],
  visitor: ["id", "body"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils.validateType)(["Identifier", "StringLiteral"]),
    body: (0, _utils.validateType)("BlockStatement"),
    kind: (0, _utils.validateOptional)((0, _utils.assertOneOf)("CommonJS", "ES"))
  }
});
(0, _utils.default)("DeclareModuleExports", {
  visitor: ["typeAnnotation"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    typeAnnotation: (0, _utils.validateType)("TypeAnnotation")
  }
});
(0, _utils.default)("DeclareTypeAlias", {
  visitor: ["id", "typeParameters", "right"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    typeParameters: (0, _utils.validateOptionalType)("TypeParameterDeclaration"),
    right: (0, _utils.validateType)("FlowType")
  }
});
(0, _utils.default)("DeclareOpaqueType", {
  visitor: ["id", "typeParameters", "supertype"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    typeParameters: (0, _utils.validateOptionalType)("TypeParameterDeclaration"),
    supertype: (0, _utils.validateOptionalType)("FlowType")
  }
});
(0, _utils.default)("DeclareVariable", {
  visitor: ["id"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils.validateType)("Identifier")
  }
});
(0, _utils.default)("DeclareExportDeclaration", {
  visitor: ["declaration", "specifiers", "source"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    declaration: (0, _utils.validateOptionalType)("Flow"),
    specifiers: (0, _utils.validateOptional)((0, _utils.arrayOfType)(["ExportSpecifier", "ExportNamespaceSpecifier"])),
    source: (0, _utils.validateOptionalType)("StringLiteral"),
    default: (0, _utils.validateOptional)((0, _utils.assertValueType)("boolean"))
  }
});
(0, _utils.default)("DeclareExportAllDeclaration", {
  visitor: ["source"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    source: (0, _utils.validateType)("StringLiteral"),
    exportKind: (0, _utils.validateOptional)((0, _utils.assertOneOf)("type", "value"))
  }
});
(0, _utils.default)("DeclaredPredicate", {
  visitor: ["value"],
  aliases: ["Flow", "FlowPredicate"],
  fields: {
    value: (0, _utils.validateType)("Flow")
  }
});
(0, _utils.default)("ExistsTypeAnnotation", {
  aliases: ["Flow", "FlowType"]
});
(0, _utils.default)("FunctionTypeAnnotation", {
  visitor: ["typeParameters", "params", "rest", "returnType"],
  aliases: ["Flow", "FlowType"],
  fields: {
    typeParameters: (0, _utils.validateOptionalType)("TypeParameterDeclaration"),
    params: (0, _utils.validate)((0, _utils.arrayOfType)("FunctionTypeParam")),
    rest: (0, _utils.validateOptionalType)("FunctionTypeParam"),
    this: (0, _utils.validateOptionalType)("FunctionTypeParam"),
    returnType: (0, _utils.validateType)("FlowType")
  }
});
(0, _utils.default)("FunctionTypeParam", {
  visitor: ["name", "typeAnnotation"],
  aliases: ["Flow"],
  fields: {
    name: (0, _utils.validateOptionalType)("Identifier"),
    typeAnnotation: (0, _utils.validateType)("FlowType"),
    optional: (0, _utils.validateOptional)((0, _utils.assertValueType)("boolean"))
  }
});
(0, _utils.default)("GenericTypeAnnotation", {
  visitor: ["id", "typeParameters"],
  aliases: ["Flow", "FlowType"],
  fields: {
    id: (0, _utils.validateType)(["Identifier", "QualifiedTypeIdentifier"]),
    typeParameters: (0, _utils.validateOptionalType)("TypeParameterInstantiation")
  }
});
(0, _utils.default)("InferredPredicate", {
  aliases: ["Flow", "FlowPredicate"]
});
(0, _utils.default)("InterfaceExtends", {
  visitor: ["id", "typeParameters"],
  aliases: ["Flow"],
  fields: {
    id: (0, _utils.validateType)(["Identifier", "QualifiedTypeIdentifier"]),
    typeParameters: (0, _utils.validateOptionalType)("TypeParameterInstantiation")
  }
});
defineInterfaceishType("InterfaceDeclaration");
(0, _utils.default)("InterfaceTypeAnnotation", {
  visitor: ["extends", "body"],
  aliases: ["Flow", "FlowType"],
  fields: {
    extends: (0, _utils.validateOptional)((0, _utils.arrayOfType)("InterfaceExtends")),
    body: (0, _utils.validateType)("ObjectTypeAnnotation")
  }
});
(0, _utils.default)("IntersectionTypeAnnotation", {
  visitor: ["types"],
  aliases: ["Flow", "FlowType"],
  fields: {
    types: (0, _utils.validate)((0, _utils.arrayOfType)("FlowType"))
  }
});
(0, _utils.default)("MixedTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, _utils.default)("EmptyTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, _utils.default)("NullableTypeAnnotation", {
  visitor: ["typeAnnotation"],
  aliases: ["Flow", "FlowType"],
  fields: {
    typeAnnotation: (0, _utils.validateType)("FlowType")
  }
});
(0, _utils.default)("NumberLiteralTypeAnnotation", {
  builder: ["value"],
  aliases: ["Flow", "FlowType"],
  fields: {
    value: (0, _utils.validate)((0, _utils.assertValueType)("number"))
  }
});
(0, _utils.default)("NumberTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, _utils.default)("ObjectTypeAnnotation", {
  visitor: ["properties", "indexers", "callProperties", "internalSlots"],
  aliases: ["Flow", "FlowType"],
  builder: ["properties", "indexers", "callProperties", "internalSlots", "exact"],
  fields: {
    properties: (0, _utils.validate)((0, _utils.arrayOfType)(["ObjectTypeProperty", "ObjectTypeSpreadProperty"])),
    indexers: (0, _utils.validateOptional)((0, _utils.arrayOfType)("ObjectTypeIndexer")),
    callProperties: (0, _utils.validateOptional)((0, _utils.arrayOfType)("ObjectTypeCallProperty")),
    internalSlots: (0, _utils.validateOptional)((0, _utils.arrayOfType)("ObjectTypeInternalSlot")),
    exact: {
      validate: (0, _utils.assertValueType)("boolean"),
      default: false
    },
    inexact: (0, _utils.validateOptional)((0, _utils.assertValueType)("boolean"))
  }
});
(0, _utils.default)("ObjectTypeInternalSlot", {
  visitor: ["id", "value", "optional", "static", "method"],
  aliases: ["Flow", "UserWhitespacable"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    value: (0, _utils.validateType)("FlowType"),
    optional: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
    static: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
    method: (0, _utils.validate)((0, _utils.assertValueType)("boolean"))
  }
});
(0, _utils.default)("ObjectTypeCallProperty", {
  visitor: ["value"],
  aliases: ["Flow", "UserWhitespacable"],
  fields: {
    value: (0, _utils.validateType)("FlowType"),
    static: (0, _utils.validate)((0, _utils.assertValueType)("boolean"))
  }
});
(0, _utils.default)("ObjectTypeIndexer", {
  visitor: ["id", "key", "value", "variance"],
  aliases: ["Flow", "UserWhitespacable"],
  fields: {
    id: (0, _utils.validateOptionalType)("Identifier"),
    key: (0, _utils.validateType)("FlowType"),
    value: (0, _utils.validateType)("FlowType"),
    static: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
    variance: (0, _utils.validateOptionalType)("Variance")
  }
});
(0, _utils.default)("ObjectTypeProperty", {
  visitor: ["key", "value", "variance"],
  aliases: ["Flow", "UserWhitespacable"],
  fields: {
    key: (0, _utils.validateType)(["Identifier", "StringLiteral"]),
    value: (0, _utils.validateType)("FlowType"),
    kind: (0, _utils.validate)((0, _utils.assertOneOf)("init", "get", "set")),
    static: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
    proto: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
    optional: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
    variance: (0, _utils.validateOptionalType)("Variance"),
    method: (0, _utils.validate)((0, _utils.assertValueType)("boolean"))
  }
});
(0, _utils.default)("ObjectTypeSpreadProperty", {
  visitor: ["argument"],
  aliases: ["Flow", "UserWhitespacable"],
  fields: {
    argument: (0, _utils.validateType)("FlowType")
  }
});
(0, _utils.default)("OpaqueType", {
  visitor: ["id", "typeParameters", "supertype", "impltype"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    typeParameters: (0, _utils.validateOptionalType)("TypeParameterDeclaration"),
    supertype: (0, _utils.validateOptionalType)("FlowType"),
    impltype: (0, _utils.validateType)("FlowType")
  }
});
(0, _utils.default)("QualifiedTypeIdentifier", {
  visitor: ["id", "qualification"],
  aliases: ["Flow"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    qualification: (0, _utils.validateType)(["Identifier", "QualifiedTypeIdentifier"])
  }
});
(0, _utils.default)("StringLiteralTypeAnnotation", {
  builder: ["value"],
  aliases: ["Flow", "FlowType"],
  fields: {
    value: (0, _utils.validate)((0, _utils.assertValueType)("string"))
  }
});
(0, _utils.default)("StringTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, _utils.default)("SymbolTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, _utils.default)("ThisTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, _utils.default)("TupleTypeAnnotation", {
  visitor: ["types"],
  aliases: ["Flow", "FlowType"],
  fields: {
    types: (0, _utils.validate)((0, _utils.arrayOfType)("FlowType"))
  }
});
(0, _utils.default)("TypeofTypeAnnotation", {
  visitor: ["argument"],
  aliases: ["Flow", "FlowType"],
  fields: {
    argument: (0, _utils.validateType)("FlowType")
  }
});
(0, _utils.default)("TypeAlias", {
  visitor: ["id", "typeParameters", "right"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    typeParameters: (0, _utils.validateOptionalType)("TypeParameterDeclaration"),
    right: (0, _utils.validateType)("FlowType")
  }
});
(0, _utils.default)("TypeAnnotation", {
  aliases: ["Flow"],
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: (0, _utils.validateType)("FlowType")
  }
});
(0, _utils.default)("TypeCastExpression", {
  visitor: ["expression", "typeAnnotation"],
  aliases: ["Flow", "ExpressionWrapper", "Expression"],
  fields: {
    expression: (0, _utils.validateType)("Expression"),
    typeAnnotation: (0, _utils.validateType)("TypeAnnotation")
  }
});
(0, _utils.default)("TypeParameter", {
  aliases: ["Flow"],
  visitor: ["bound", "default", "variance"],
  fields: {
    name: (0, _utils.validate)((0, _utils.assertValueType)("string")),
    bound: (0, _utils.validateOptionalType)("TypeAnnotation"),
    default: (0, _utils.validateOptionalType)("FlowType"),
    variance: (0, _utils.validateOptionalType)("Variance")
  }
});
(0, _utils.default)("TypeParameterDeclaration", {
  aliases: ["Flow"],
  visitor: ["params"],
  fields: {
    params: (0, _utils.validate)((0, _utils.arrayOfType)("TypeParameter"))
  }
});
(0, _utils.default)("TypeParameterInstantiation", {
  aliases: ["Flow"],
  visitor: ["params"],
  fields: {
    params: (0, _utils.validate)((0, _utils.arrayOfType)("FlowType"))
  }
});
(0, _utils.default)("UnionTypeAnnotation", {
  visitor: ["types"],
  aliases: ["Flow", "FlowType"],
  fields: {
    types: (0, _utils.validate)((0, _utils.arrayOfType)("FlowType"))
  }
});
(0, _utils.default)("Variance", {
  aliases: ["Flow"],
  builder: ["kind"],
  fields: {
    kind: (0, _utils.validate)((0, _utils.assertOneOf)("minus", "plus"))
  }
});
(0, _utils.default)("VoidTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, _utils.default)("EnumDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "body"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    body: (0, _utils.validateType)(["EnumBooleanBody", "EnumNumberBody", "EnumStringBody", "EnumSymbolBody"])
  }
});
(0, _utils.default)("EnumBooleanBody", {
  aliases: ["EnumBody"],
  visitor: ["members"],
  fields: {
    explicitType: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
    members: (0, _utils.validateArrayOfType)("EnumBooleanMember"),
    hasUnknownMembers: (0, _utils.validate)((0, _utils.assertValueType)("boolean"))
  }
});
(0, _utils.default)("EnumNumberBody", {
  aliases: ["EnumBody"],
  visitor: ["members"],
  fields: {
    explicitType: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
    members: (0, _utils.validateArrayOfType)("EnumNumberMember"),
    hasUnknownMembers: (0, _utils.validate)((0, _utils.assertValueType)("boolean"))
  }
});
(0, _utils.default)("EnumStringBody", {
  aliases: ["EnumBody"],
  visitor: ["members"],
  fields: {
    explicitType: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
    members: (0, _utils.validateArrayOfType)(["EnumStringMember", "EnumDefaultedMember"]),
    hasUnknownMembers: (0, _utils.validate)((0, _utils.assertValueType)("boolean"))
  }
});
(0, _utils.default)("EnumSymbolBody", {
  aliases: ["EnumBody"],
  visitor: ["members"],
  fields: {
    members: (0, _utils.validateArrayOfType)("EnumDefaultedMember"),
    hasUnknownMembers: (0, _utils.validate)((0, _utils.assertValueType)("boolean"))
  }
});
(0, _utils.default)("EnumBooleanMember", {
  aliases: ["EnumMember"],
  visitor: ["id"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    init: (0, _utils.validateType)("BooleanLiteral")
  }
});
(0, _utils.default)("EnumNumberMember", {
  aliases: ["EnumMember"],
  visitor: ["id", "init"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    init: (0, _utils.validateType)("NumericLiteral")
  }
});
(0, _utils.default)("EnumStringMember", {
  aliases: ["EnumMember"],
  visitor: ["id", "init"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    init: (0, _utils.validateType)("StringLiteral")
  }
});
(0, _utils.default)("EnumDefaultedMember", {
  aliases: ["EnumMember"],
  visitor: ["id"],
  fields: {
    id: (0, _utils.validateType)("Identifier")
  }
});
});

unwrapExports(flow);

var jsx = createCommonjsModule(function (module) {

var _utils = _interopRequireWildcard(utils);

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

(0, _utils.default)("JSXAttribute", {
  visitor: ["name", "value"],
  aliases: ["JSX", "Immutable"],
  fields: {
    name: {
      validate: (0, _utils.assertNodeType)("JSXIdentifier", "JSXNamespacedName")
    },
    value: {
      optional: true,
      validate: (0, _utils.assertNodeType)("JSXElement", "JSXFragment", "StringLiteral", "JSXExpressionContainer")
    }
  }
});
(0, _utils.default)("JSXClosingElement", {
  visitor: ["name"],
  aliases: ["JSX", "Immutable"],
  fields: {
    name: {
      validate: (0, _utils.assertNodeType)("JSXIdentifier", "JSXMemberExpression", "JSXNamespacedName")
    }
  }
});
(0, _utils.default)("JSXElement", {
  builder: ["openingElement", "closingElement", "children", "selfClosing"],
  visitor: ["openingElement", "children", "closingElement"],
  aliases: ["JSX", "Immutable", "Expression"],
  fields: {
    openingElement: {
      validate: (0, _utils.assertNodeType)("JSXOpeningElement")
    },
    closingElement: {
      optional: true,
      validate: (0, _utils.assertNodeType)("JSXClosingElement")
    },
    children: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement", "JSXFragment")))
    },
    selfClosing: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    }
  }
});
(0, _utils.default)("JSXEmptyExpression", {
  aliases: ["JSX"]
});
(0, _utils.default)("JSXExpressionContainer", {
  visitor: ["expression"],
  aliases: ["JSX", "Immutable"],
  fields: {
    expression: {
      validate: (0, _utils.assertNodeType)("Expression", "JSXEmptyExpression")
    }
  }
});
(0, _utils.default)("JSXSpreadChild", {
  visitor: ["expression"],
  aliases: ["JSX", "Immutable"],
  fields: {
    expression: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("JSXIdentifier", {
  builder: ["name"],
  aliases: ["JSX"],
  fields: {
    name: {
      validate: (0, _utils.assertValueType)("string")
    }
  }
});
(0, _utils.default)("JSXMemberExpression", {
  visitor: ["object", "property"],
  aliases: ["JSX"],
  fields: {
    object: {
      validate: (0, _utils.assertNodeType)("JSXMemberExpression", "JSXIdentifier")
    },
    property: {
      validate: (0, _utils.assertNodeType)("JSXIdentifier")
    }
  }
});
(0, _utils.default)("JSXNamespacedName", {
  visitor: ["namespace", "name"],
  aliases: ["JSX"],
  fields: {
    namespace: {
      validate: (0, _utils.assertNodeType)("JSXIdentifier")
    },
    name: {
      validate: (0, _utils.assertNodeType)("JSXIdentifier")
    }
  }
});
(0, _utils.default)("JSXOpeningElement", {
  builder: ["name", "attributes", "selfClosing"],
  visitor: ["name", "attributes"],
  aliases: ["JSX", "Immutable"],
  fields: {
    name: {
      validate: (0, _utils.assertNodeType)("JSXIdentifier", "JSXMemberExpression", "JSXNamespacedName")
    },
    selfClosing: {
      default: false
    },
    attributes: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("JSXAttribute", "JSXSpreadAttribute")))
    },
    typeParameters: {
      validate: (0, _utils.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: true
    }
  }
});
(0, _utils.default)("JSXSpreadAttribute", {
  visitor: ["argument"],
  aliases: ["JSX"],
  fields: {
    argument: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("JSXText", {
  aliases: ["JSX", "Immutable"],
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils.assertValueType)("string")
    }
  }
});
(0, _utils.default)("JSXFragment", {
  builder: ["openingFragment", "closingFragment", "children"],
  visitor: ["openingFragment", "children", "closingFragment"],
  aliases: ["JSX", "Immutable", "Expression"],
  fields: {
    openingFragment: {
      validate: (0, _utils.assertNodeType)("JSXOpeningFragment")
    },
    closingFragment: {
      validate: (0, _utils.assertNodeType)("JSXClosingFragment")
    },
    children: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement", "JSXFragment")))
    }
  }
});
(0, _utils.default)("JSXOpeningFragment", {
  aliases: ["JSX", "Immutable"]
});
(0, _utils.default)("JSXClosingFragment", {
  aliases: ["JSX", "Immutable"]
});
});

unwrapExports(jsx);

var placeholders = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PLACEHOLDERS_FLIPPED_ALIAS = exports.PLACEHOLDERS_ALIAS = exports.PLACEHOLDERS = void 0;



const PLACEHOLDERS = ["Identifier", "StringLiteral", "Expression", "Statement", "Declaration", "BlockStatement", "ClassBody", "Pattern"];
exports.PLACEHOLDERS = PLACEHOLDERS;
const PLACEHOLDERS_ALIAS = {
  Declaration: ["Statement"],
  Pattern: ["PatternLike", "LVal"]
};
exports.PLACEHOLDERS_ALIAS = PLACEHOLDERS_ALIAS;

for (const type of PLACEHOLDERS) {
  const alias = utils.ALIAS_KEYS[type];
  if (alias == null ? void 0 : alias.length) PLACEHOLDERS_ALIAS[type] = alias;
}

const PLACEHOLDERS_FLIPPED_ALIAS = {};
exports.PLACEHOLDERS_FLIPPED_ALIAS = PLACEHOLDERS_FLIPPED_ALIAS;
Object.keys(PLACEHOLDERS_ALIAS).forEach(type => {
  PLACEHOLDERS_ALIAS[type].forEach(alias => {
    if (!Object.hasOwnProperty.call(PLACEHOLDERS_FLIPPED_ALIAS, alias)) {
      PLACEHOLDERS_FLIPPED_ALIAS[alias] = [];
    }

    PLACEHOLDERS_FLIPPED_ALIAS[alias].push(type);
  });
});
});

unwrapExports(placeholders);
var placeholders_1 = placeholders.PLACEHOLDERS_FLIPPED_ALIAS;
var placeholders_2 = placeholders.PLACEHOLDERS_ALIAS;
var placeholders_3 = placeholders.PLACEHOLDERS;

var misc = createCommonjsModule(function (module) {

var _utils = _interopRequireWildcard(utils);



function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

{
  (0, _utils.default)("Noop", {
    visitor: []
  });
}
(0, _utils.default)("Placeholder", {
  visitor: [],
  builder: ["expectedNode", "name"],
  fields: {
    name: {
      validate: (0, _utils.assertNodeType)("Identifier")
    },
    expectedNode: {
      validate: (0, _utils.assertOneOf)(...placeholders.PLACEHOLDERS)
    }
  }
});
(0, _utils.default)("V8IntrinsicIdentifier", {
  builder: ["name"],
  fields: {
    name: {
      validate: (0, _utils.assertValueType)("string")
    }
  }
});
});

unwrapExports(misc);

var experimental = createCommonjsModule(function (module) {

var _utils = _interopRequireWildcard(utils);



function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

(0, _utils.default)("ArgumentPlaceholder", {});
(0, _utils.default)("BindExpression", {
  visitor: ["object", "callee"],
  aliases: ["Expression"],
  fields: !process.env.BABEL_TYPES_8_BREAKING ? {
    object: {
      validate: Object.assign(() => {}, {
        oneOfNodeTypes: ["Expression"]
      })
    },
    callee: {
      validate: Object.assign(() => {}, {
        oneOfNodeTypes: ["Expression"]
      })
    }
  } : {
    object: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    callee: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("ClassProperty", {
  visitor: ["key", "value", "typeAnnotation", "decorators"],
  builder: ["key", "value", "typeAnnotation", "decorators", "computed", "static"],
  aliases: ["Property"],
  fields: Object.assign({}, core.classMethodOrPropertyCommon, {
    value: {
      validate: (0, _utils.assertNodeType)("Expression"),
      optional: true
    },
    definite: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    typeAnnotation: {
      validate: (0, _utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
      optional: true
    },
    decorators: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
      optional: true
    },
    readonly: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    declare: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    }
  })
});
(0, _utils.default)("PipelineTopicExpression", {
  builder: ["expression"],
  visitor: ["expression"],
  fields: {
    expression: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("PipelineBareFunction", {
  builder: ["callee"],
  visitor: ["callee"],
  fields: {
    callee: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("PipelinePrimaryTopicReference", {
  aliases: ["Expression"]
});
(0, _utils.default)("ClassPrivateProperty", {
  visitor: ["key", "value", "decorators"],
  builder: ["key", "value", "decorators", "static"],
  aliases: ["Property", "Private"],
  fields: {
    key: {
      validate: (0, _utils.assertNodeType)("PrivateName")
    },
    value: {
      validate: (0, _utils.assertNodeType)("Expression"),
      optional: true
    },
    typeAnnotation: {
      validate: (0, _utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
      optional: true
    },
    decorators: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
      optional: true
    }
  }
});
(0, _utils.default)("ClassPrivateMethod", {
  builder: ["kind", "key", "params", "body", "static"],
  visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
  aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method", "Private"],
  fields: Object.assign({}, core.classMethodOrDeclareMethodCommon, core.functionTypeAnnotationCommon, {
    key: {
      validate: (0, _utils.assertNodeType)("PrivateName")
    },
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement")
    }
  })
});
(0, _utils.default)("ImportAttribute", {
  visitor: ["key", "value"],
  fields: {
    key: {
      validate: (0, _utils.assertNodeType)("Identifier", "StringLiteral")
    },
    value: {
      validate: (0, _utils.assertNodeType)("StringLiteral")
    }
  }
});
(0, _utils.default)("Decorator", {
  visitor: ["expression"],
  fields: {
    expression: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("DoExpression", {
  visitor: ["body"],
  aliases: ["Expression"],
  fields: {
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement")
    }
  }
});
(0, _utils.default)("ExportDefaultSpecifier", {
  visitor: ["exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    exported: {
      validate: (0, _utils.assertNodeType)("Identifier")
    }
  }
});
(0, _utils.default)("PrivateName", {
  visitor: ["id"],
  aliases: ["Private"],
  fields: {
    id: {
      validate: (0, _utils.assertNodeType)("Identifier")
    }
  }
});
(0, _utils.default)("RecordExpression", {
  visitor: ["properties"],
  aliases: ["Expression"],
  fields: {
    properties: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("ObjectProperty", "SpreadElement")))
    }
  }
});
(0, _utils.default)("TupleExpression", {
  fields: {
    elements: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Expression", "SpreadElement"))),
      default: []
    }
  },
  visitor: ["elements"],
  aliases: ["Expression"]
});
(0, _utils.default)("DecimalLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils.assertValueType)("string")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
(0, _utils.default)("StaticBlock", {
  visitor: ["body"],
  fields: {
    body: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Statement")))
    }
  },
  aliases: ["Scopable", "BlockParent"]
});
(0, _utils.default)("ModuleExpression", {
  visitor: ["body"],
  fields: {
    body: {
      validate: (0, _utils.assertNodeType)("Program")
    }
  },
  aliases: ["Expression"]
});
});

unwrapExports(experimental);

var typescript = createCommonjsModule(function (module) {

var _utils = _interopRequireWildcard(utils);



function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const bool = (0, _utils.assertValueType)("boolean");
const tSFunctionTypeAnnotationCommon = {
  returnType: {
    validate: (0, _utils.assertNodeType)("TSTypeAnnotation", "Noop"),
    optional: true
  },
  typeParameters: {
    validate: (0, _utils.assertNodeType)("TSTypeParameterDeclaration", "Noop"),
    optional: true
  }
};
(0, _utils.default)("TSParameterProperty", {
  aliases: ["LVal"],
  visitor: ["parameter"],
  fields: {
    accessibility: {
      validate: (0, _utils.assertOneOf)("public", "private", "protected"),
      optional: true
    },
    readonly: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    parameter: {
      validate: (0, _utils.assertNodeType)("Identifier", "AssignmentPattern")
    }
  }
});
(0, _utils.default)("TSDeclareFunction", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "typeParameters", "params", "returnType"],
  fields: Object.assign({}, core.functionDeclarationCommon, tSFunctionTypeAnnotationCommon)
});
(0, _utils.default)("TSDeclareMethod", {
  visitor: ["decorators", "key", "typeParameters", "params", "returnType"],
  fields: Object.assign({}, core.classMethodOrDeclareMethodCommon, tSFunctionTypeAnnotationCommon)
});
(0, _utils.default)("TSQualifiedName", {
  aliases: ["TSEntityName"],
  visitor: ["left", "right"],
  fields: {
    left: (0, _utils.validateType)("TSEntityName"),
    right: (0, _utils.validateType)("Identifier")
  }
});
const signatureDeclarationCommon = {
  typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterDeclaration"),
  parameters: (0, _utils.validateArrayOfType)(["Identifier", "RestElement"]),
  typeAnnotation: (0, _utils.validateOptionalType)("TSTypeAnnotation")
};
const callConstructSignatureDeclaration = {
  aliases: ["TSTypeElement"],
  visitor: ["typeParameters", "parameters", "typeAnnotation"],
  fields: signatureDeclarationCommon
};
(0, _utils.default)("TSCallSignatureDeclaration", callConstructSignatureDeclaration);
(0, _utils.default)("TSConstructSignatureDeclaration", callConstructSignatureDeclaration);
const namedTypeElementCommon = {
  key: (0, _utils.validateType)("Expression"),
  computed: (0, _utils.validate)(bool),
  optional: (0, _utils.validateOptional)(bool)
};
(0, _utils.default)("TSPropertySignature", {
  aliases: ["TSTypeElement"],
  visitor: ["key", "typeAnnotation", "initializer"],
  fields: Object.assign({}, namedTypeElementCommon, {
    readonly: (0, _utils.validateOptional)(bool),
    typeAnnotation: (0, _utils.validateOptionalType)("TSTypeAnnotation"),
    initializer: (0, _utils.validateOptionalType)("Expression")
  })
});
(0, _utils.default)("TSMethodSignature", {
  aliases: ["TSTypeElement"],
  visitor: ["key", "typeParameters", "parameters", "typeAnnotation"],
  fields: Object.assign({}, signatureDeclarationCommon, namedTypeElementCommon)
});
(0, _utils.default)("TSIndexSignature", {
  aliases: ["TSTypeElement"],
  visitor: ["parameters", "typeAnnotation"],
  fields: {
    readonly: (0, _utils.validateOptional)(bool),
    parameters: (0, _utils.validateArrayOfType)("Identifier"),
    typeAnnotation: (0, _utils.validateOptionalType)("TSTypeAnnotation")
  }
});
const tsKeywordTypes = ["TSAnyKeyword", "TSBooleanKeyword", "TSBigIntKeyword", "TSIntrinsicKeyword", "TSNeverKeyword", "TSNullKeyword", "TSNumberKeyword", "TSObjectKeyword", "TSStringKeyword", "TSSymbolKeyword", "TSUndefinedKeyword", "TSUnknownKeyword", "TSVoidKeyword"];

for (const type of tsKeywordTypes) {
  (0, _utils.default)(type, {
    aliases: ["TSType", "TSBaseType"],
    visitor: [],
    fields: {}
  });
}

(0, _utils.default)("TSThisType", {
  aliases: ["TSType", "TSBaseType"],
  visitor: [],
  fields: {}
});
const fnOrCtrBase = {
  aliases: ["TSType"],
  visitor: ["typeParameters", "parameters", "typeAnnotation"]
};
(0, _utils.default)("TSFunctionType", Object.assign({}, fnOrCtrBase, {
  fields: signatureDeclarationCommon
}));
(0, _utils.default)("TSConstructorType", Object.assign({}, fnOrCtrBase, {
  fields: Object.assign({}, signatureDeclarationCommon, {
    abstract: (0, _utils.validateOptional)(bool)
  })
}));
(0, _utils.default)("TSTypeReference", {
  aliases: ["TSType"],
  visitor: ["typeName", "typeParameters"],
  fields: {
    typeName: (0, _utils.validateType)("TSEntityName"),
    typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterInstantiation")
  }
});
(0, _utils.default)("TSTypePredicate", {
  aliases: ["TSType"],
  visitor: ["parameterName", "typeAnnotation"],
  builder: ["parameterName", "typeAnnotation", "asserts"],
  fields: {
    parameterName: (0, _utils.validateType)(["Identifier", "TSThisType"]),
    typeAnnotation: (0, _utils.validateOptionalType)("TSTypeAnnotation"),
    asserts: (0, _utils.validateOptional)(bool)
  }
});
(0, _utils.default)("TSTypeQuery", {
  aliases: ["TSType"],
  visitor: ["exprName"],
  fields: {
    exprName: (0, _utils.validateType)(["TSEntityName", "TSImportType"])
  }
});
(0, _utils.default)("TSTypeLiteral", {
  aliases: ["TSType"],
  visitor: ["members"],
  fields: {
    members: (0, _utils.validateArrayOfType)("TSTypeElement")
  }
});
(0, _utils.default)("TSArrayType", {
  aliases: ["TSType"],
  visitor: ["elementType"],
  fields: {
    elementType: (0, _utils.validateType)("TSType")
  }
});
(0, _utils.default)("TSTupleType", {
  aliases: ["TSType"],
  visitor: ["elementTypes"],
  fields: {
    elementTypes: (0, _utils.validateArrayOfType)(["TSType", "TSNamedTupleMember"])
  }
});
(0, _utils.default)("TSOptionalType", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: (0, _utils.validateType)("TSType")
  }
});
(0, _utils.default)("TSRestType", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: (0, _utils.validateType)("TSType")
  }
});
(0, _utils.default)("TSNamedTupleMember", {
  visitor: ["label", "elementType"],
  builder: ["label", "elementType", "optional"],
  fields: {
    label: (0, _utils.validateType)("Identifier"),
    optional: {
      validate: bool,
      default: false
    },
    elementType: (0, _utils.validateType)("TSType")
  }
});
const unionOrIntersection = {
  aliases: ["TSType"],
  visitor: ["types"],
  fields: {
    types: (0, _utils.validateArrayOfType)("TSType")
  }
};
(0, _utils.default)("TSUnionType", unionOrIntersection);
(0, _utils.default)("TSIntersectionType", unionOrIntersection);
(0, _utils.default)("TSConditionalType", {
  aliases: ["TSType"],
  visitor: ["checkType", "extendsType", "trueType", "falseType"],
  fields: {
    checkType: (0, _utils.validateType)("TSType"),
    extendsType: (0, _utils.validateType)("TSType"),
    trueType: (0, _utils.validateType)("TSType"),
    falseType: (0, _utils.validateType)("TSType")
  }
});
(0, _utils.default)("TSInferType", {
  aliases: ["TSType"],
  visitor: ["typeParameter"],
  fields: {
    typeParameter: (0, _utils.validateType)("TSTypeParameter")
  }
});
(0, _utils.default)("TSParenthesizedType", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: (0, _utils.validateType)("TSType")
  }
});
(0, _utils.default)("TSTypeOperator", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  fields: {
    operator: (0, _utils.validate)((0, _utils.assertValueType)("string")),
    typeAnnotation: (0, _utils.validateType)("TSType")
  }
});
(0, _utils.default)("TSIndexedAccessType", {
  aliases: ["TSType"],
  visitor: ["objectType", "indexType"],
  fields: {
    objectType: (0, _utils.validateType)("TSType"),
    indexType: (0, _utils.validateType)("TSType")
  }
});
(0, _utils.default)("TSMappedType", {
  aliases: ["TSType"],
  visitor: ["typeParameter", "typeAnnotation", "nameType"],
  fields: {
    readonly: (0, _utils.validateOptional)(bool),
    typeParameter: (0, _utils.validateType)("TSTypeParameter"),
    optional: (0, _utils.validateOptional)(bool),
    typeAnnotation: (0, _utils.validateOptionalType)("TSType"),
    nameType: (0, _utils.validateOptionalType)("TSType")
  }
});
(0, _utils.default)("TSLiteralType", {
  aliases: ["TSType", "TSBaseType"],
  visitor: ["literal"],
  fields: {
    literal: (0, _utils.validateType)(["NumericLiteral", "StringLiteral", "BooleanLiteral", "BigIntLiteral"])
  }
});
(0, _utils.default)("TSExpressionWithTypeArguments", {
  aliases: ["TSType"],
  visitor: ["expression", "typeParameters"],
  fields: {
    expression: (0, _utils.validateType)("TSEntityName"),
    typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterInstantiation")
  }
});
(0, _utils.default)("TSInterfaceDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "typeParameters", "extends", "body"],
  fields: {
    declare: (0, _utils.validateOptional)(bool),
    id: (0, _utils.validateType)("Identifier"),
    typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterDeclaration"),
    extends: (0, _utils.validateOptional)((0, _utils.arrayOfType)("TSExpressionWithTypeArguments")),
    body: (0, _utils.validateType)("TSInterfaceBody")
  }
});
(0, _utils.default)("TSInterfaceBody", {
  visitor: ["body"],
  fields: {
    body: (0, _utils.validateArrayOfType)("TSTypeElement")
  }
});
(0, _utils.default)("TSTypeAliasDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "typeParameters", "typeAnnotation"],
  fields: {
    declare: (0, _utils.validateOptional)(bool),
    id: (0, _utils.validateType)("Identifier"),
    typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterDeclaration"),
    typeAnnotation: (0, _utils.validateType)("TSType")
  }
});
(0, _utils.default)("TSAsExpression", {
  aliases: ["Expression"],
  visitor: ["expression", "typeAnnotation"],
  fields: {
    expression: (0, _utils.validateType)("Expression"),
    typeAnnotation: (0, _utils.validateType)("TSType")
  }
});
(0, _utils.default)("TSTypeAssertion", {
  aliases: ["Expression"],
  visitor: ["typeAnnotation", "expression"],
  fields: {
    typeAnnotation: (0, _utils.validateType)("TSType"),
    expression: (0, _utils.validateType)("Expression")
  }
});
(0, _utils.default)("TSEnumDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "members"],
  fields: {
    declare: (0, _utils.validateOptional)(bool),
    const: (0, _utils.validateOptional)(bool),
    id: (0, _utils.validateType)("Identifier"),
    members: (0, _utils.validateArrayOfType)("TSEnumMember"),
    initializer: (0, _utils.validateOptionalType)("Expression")
  }
});
(0, _utils.default)("TSEnumMember", {
  visitor: ["id", "initializer"],
  fields: {
    id: (0, _utils.validateType)(["Identifier", "StringLiteral"]),
    initializer: (0, _utils.validateOptionalType)("Expression")
  }
});
(0, _utils.default)("TSModuleDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "body"],
  fields: {
    declare: (0, _utils.validateOptional)(bool),
    global: (0, _utils.validateOptional)(bool),
    id: (0, _utils.validateType)(["Identifier", "StringLiteral"]),
    body: (0, _utils.validateType)(["TSModuleBlock", "TSModuleDeclaration"])
  }
});
(0, _utils.default)("TSModuleBlock", {
  aliases: ["Scopable", "Block", "BlockParent"],
  visitor: ["body"],
  fields: {
    body: (0, _utils.validateArrayOfType)("Statement")
  }
});
(0, _utils.default)("TSImportType", {
  aliases: ["TSType"],
  visitor: ["argument", "qualifier", "typeParameters"],
  fields: {
    argument: (0, _utils.validateType)("StringLiteral"),
    qualifier: (0, _utils.validateOptionalType)("TSEntityName"),
    typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterInstantiation")
  }
});
(0, _utils.default)("TSImportEqualsDeclaration", {
  aliases: ["Statement"],
  visitor: ["id", "moduleReference"],
  fields: {
    isExport: (0, _utils.validate)(bool),
    id: (0, _utils.validateType)("Identifier"),
    moduleReference: (0, _utils.validateType)(["TSEntityName", "TSExternalModuleReference"])
  }
});
(0, _utils.default)("TSExternalModuleReference", {
  visitor: ["expression"],
  fields: {
    expression: (0, _utils.validateType)("StringLiteral")
  }
});
(0, _utils.default)("TSNonNullExpression", {
  aliases: ["Expression"],
  visitor: ["expression"],
  fields: {
    expression: (0, _utils.validateType)("Expression")
  }
});
(0, _utils.default)("TSExportAssignment", {
  aliases: ["Statement"],
  visitor: ["expression"],
  fields: {
    expression: (0, _utils.validateType)("Expression")
  }
});
(0, _utils.default)("TSNamespaceExportDeclaration", {
  aliases: ["Statement"],
  visitor: ["id"],
  fields: {
    id: (0, _utils.validateType)("Identifier")
  }
});
(0, _utils.default)("TSTypeAnnotation", {
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: {
      validate: (0, _utils.assertNodeType)("TSType")
    }
  }
});
(0, _utils.default)("TSTypeParameterInstantiation", {
  visitor: ["params"],
  fields: {
    params: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("TSType")))
    }
  }
});
(0, _utils.default)("TSTypeParameterDeclaration", {
  visitor: ["params"],
  fields: {
    params: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("TSTypeParameter")))
    }
  }
});
(0, _utils.default)("TSTypeParameter", {
  builder: ["constraint", "default", "name"],
  visitor: ["constraint", "default"],
  fields: {
    name: {
      validate: (0, _utils.assertValueType)("string")
    },
    constraint: {
      validate: (0, _utils.assertNodeType)("TSType"),
      optional: true
    },
    default: {
      validate: (0, _utils.assertNodeType)("TSType"),
      optional: true
    }
  }
});
});

unwrapExports(typescript);

var definitions = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "VISITOR_KEYS", {
  enumerable: true,
  get: function () {
    return utils.VISITOR_KEYS;
  }
});
Object.defineProperty(exports, "ALIAS_KEYS", {
  enumerable: true,
  get: function () {
    return utils.ALIAS_KEYS;
  }
});
Object.defineProperty(exports, "FLIPPED_ALIAS_KEYS", {
  enumerable: true,
  get: function () {
    return utils.FLIPPED_ALIAS_KEYS;
  }
});
Object.defineProperty(exports, "NODE_FIELDS", {
  enumerable: true,
  get: function () {
    return utils.NODE_FIELDS;
  }
});
Object.defineProperty(exports, "BUILDER_KEYS", {
  enumerable: true,
  get: function () {
    return utils.BUILDER_KEYS;
  }
});
Object.defineProperty(exports, "DEPRECATED_KEYS", {
  enumerable: true,
  get: function () {
    return utils.DEPRECATED_KEYS;
  }
});
Object.defineProperty(exports, "NODE_PARENT_VALIDATIONS", {
  enumerable: true,
  get: function () {
    return utils.NODE_PARENT_VALIDATIONS;
  }
});
Object.defineProperty(exports, "PLACEHOLDERS", {
  enumerable: true,
  get: function () {
    return placeholders.PLACEHOLDERS;
  }
});
Object.defineProperty(exports, "PLACEHOLDERS_ALIAS", {
  enumerable: true,
  get: function () {
    return placeholders.PLACEHOLDERS_ALIAS;
  }
});
Object.defineProperty(exports, "PLACEHOLDERS_FLIPPED_ALIAS", {
  enumerable: true,
  get: function () {
    return placeholders.PLACEHOLDERS_FLIPPED_ALIAS;
  }
});
exports.TYPES = void 0;

var _toFastProperties = _interopRequireDefault(toFastProperties);

















function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _toFastProperties.default)(utils.VISITOR_KEYS);
(0, _toFastProperties.default)(utils.ALIAS_KEYS);
(0, _toFastProperties.default)(utils.FLIPPED_ALIAS_KEYS);
(0, _toFastProperties.default)(utils.NODE_FIELDS);
(0, _toFastProperties.default)(utils.BUILDER_KEYS);
(0, _toFastProperties.default)(utils.DEPRECATED_KEYS);
(0, _toFastProperties.default)(placeholders.PLACEHOLDERS_ALIAS);
(0, _toFastProperties.default)(placeholders.PLACEHOLDERS_FLIPPED_ALIAS);
const TYPES = Object.keys(utils.VISITOR_KEYS).concat(Object.keys(utils.FLIPPED_ALIAS_KEYS)).concat(Object.keys(utils.DEPRECATED_KEYS));
exports.TYPES = TYPES;
});

unwrapExports(definitions);
var definitions_1 = definitions.TYPES;

var builder_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = builder;

var _clone = _interopRequireDefault(clone_1);



var _validate = _interopRequireDefault(validate_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function builder(type, ...args) {
  const keys = definitions.BUILDER_KEYS[type];
  const countArgs = args.length;

  if (countArgs > keys.length) {
    throw new Error(`${type}: Too many arguments passed. Received ${countArgs} but can receive no more than ${keys.length}`);
  }

  const node = {
    type
  };
  let i = 0;
  keys.forEach(key => {
    const field = definitions.NODE_FIELDS[type][key];
    let arg;
    if (i < countArgs) arg = args[i];
    if (arg === undefined) arg = (0, _clone.default)(field.default);
    node[key] = arg;
    i++;
  });

  for (const key of Object.keys(node)) {
    (0, _validate.default)(node, key, node[key]);
  }

  return node;
}
});

unwrapExports(builder_1);

var generated$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayExpression = arrayExpression;
exports.assignmentExpression = assignmentExpression;
exports.binaryExpression = binaryExpression;
exports.interpreterDirective = interpreterDirective;
exports.directive = directive;
exports.directiveLiteral = directiveLiteral;
exports.blockStatement = blockStatement;
exports.breakStatement = breakStatement;
exports.callExpression = callExpression;
exports.catchClause = catchClause;
exports.conditionalExpression = conditionalExpression;
exports.continueStatement = continueStatement;
exports.debuggerStatement = debuggerStatement;
exports.doWhileStatement = doWhileStatement;
exports.emptyStatement = emptyStatement;
exports.expressionStatement = expressionStatement;
exports.file = file;
exports.forInStatement = forInStatement;
exports.forStatement = forStatement;
exports.functionDeclaration = functionDeclaration;
exports.functionExpression = functionExpression;
exports.identifier = identifier;
exports.ifStatement = ifStatement;
exports.labeledStatement = labeledStatement;
exports.stringLiteral = stringLiteral;
exports.numericLiteral = numericLiteral;
exports.nullLiteral = nullLiteral;
exports.booleanLiteral = booleanLiteral;
exports.regExpLiteral = regExpLiteral;
exports.logicalExpression = logicalExpression;
exports.memberExpression = memberExpression;
exports.newExpression = newExpression;
exports.program = program;
exports.objectExpression = objectExpression;
exports.objectMethod = objectMethod;
exports.objectProperty = objectProperty;
exports.restElement = restElement;
exports.returnStatement = returnStatement;
exports.sequenceExpression = sequenceExpression;
exports.parenthesizedExpression = parenthesizedExpression;
exports.switchCase = switchCase;
exports.switchStatement = switchStatement;
exports.thisExpression = thisExpression;
exports.throwStatement = throwStatement;
exports.tryStatement = tryStatement;
exports.unaryExpression = unaryExpression;
exports.updateExpression = updateExpression;
exports.variableDeclaration = variableDeclaration;
exports.variableDeclarator = variableDeclarator;
exports.whileStatement = whileStatement;
exports.withStatement = withStatement;
exports.assignmentPattern = assignmentPattern;
exports.arrayPattern = arrayPattern;
exports.arrowFunctionExpression = arrowFunctionExpression;
exports.classBody = classBody;
exports.classExpression = classExpression;
exports.classDeclaration = classDeclaration;
exports.exportAllDeclaration = exportAllDeclaration;
exports.exportDefaultDeclaration = exportDefaultDeclaration;
exports.exportNamedDeclaration = exportNamedDeclaration;
exports.exportSpecifier = exportSpecifier;
exports.forOfStatement = forOfStatement;
exports.importDeclaration = importDeclaration;
exports.importDefaultSpecifier = importDefaultSpecifier;
exports.importNamespaceSpecifier = importNamespaceSpecifier;
exports.importSpecifier = importSpecifier;
exports.metaProperty = metaProperty;
exports.classMethod = classMethod;
exports.objectPattern = objectPattern;
exports.spreadElement = spreadElement;
exports.super = _super;
exports.taggedTemplateExpression = taggedTemplateExpression;
exports.templateElement = templateElement;
exports.templateLiteral = templateLiteral;
exports.yieldExpression = yieldExpression;
exports.awaitExpression = awaitExpression;
exports.import = _import;
exports.bigIntLiteral = bigIntLiteral;
exports.exportNamespaceSpecifier = exportNamespaceSpecifier;
exports.optionalMemberExpression = optionalMemberExpression;
exports.optionalCallExpression = optionalCallExpression;
exports.anyTypeAnnotation = anyTypeAnnotation;
exports.arrayTypeAnnotation = arrayTypeAnnotation;
exports.booleanTypeAnnotation = booleanTypeAnnotation;
exports.booleanLiteralTypeAnnotation = booleanLiteralTypeAnnotation;
exports.nullLiteralTypeAnnotation = nullLiteralTypeAnnotation;
exports.classImplements = classImplements;
exports.declareClass = declareClass;
exports.declareFunction = declareFunction;
exports.declareInterface = declareInterface;
exports.declareModule = declareModule;
exports.declareModuleExports = declareModuleExports;
exports.declareTypeAlias = declareTypeAlias;
exports.declareOpaqueType = declareOpaqueType;
exports.declareVariable = declareVariable;
exports.declareExportDeclaration = declareExportDeclaration;
exports.declareExportAllDeclaration = declareExportAllDeclaration;
exports.declaredPredicate = declaredPredicate;
exports.existsTypeAnnotation = existsTypeAnnotation;
exports.functionTypeAnnotation = functionTypeAnnotation;
exports.functionTypeParam = functionTypeParam;
exports.genericTypeAnnotation = genericTypeAnnotation;
exports.inferredPredicate = inferredPredicate;
exports.interfaceExtends = interfaceExtends;
exports.interfaceDeclaration = interfaceDeclaration;
exports.interfaceTypeAnnotation = interfaceTypeAnnotation;
exports.intersectionTypeAnnotation = intersectionTypeAnnotation;
exports.mixedTypeAnnotation = mixedTypeAnnotation;
exports.emptyTypeAnnotation = emptyTypeAnnotation;
exports.nullableTypeAnnotation = nullableTypeAnnotation;
exports.numberLiteralTypeAnnotation = numberLiteralTypeAnnotation;
exports.numberTypeAnnotation = numberTypeAnnotation;
exports.objectTypeAnnotation = objectTypeAnnotation;
exports.objectTypeInternalSlot = objectTypeInternalSlot;
exports.objectTypeCallProperty = objectTypeCallProperty;
exports.objectTypeIndexer = objectTypeIndexer;
exports.objectTypeProperty = objectTypeProperty;
exports.objectTypeSpreadProperty = objectTypeSpreadProperty;
exports.opaqueType = opaqueType;
exports.qualifiedTypeIdentifier = qualifiedTypeIdentifier;
exports.stringLiteralTypeAnnotation = stringLiteralTypeAnnotation;
exports.stringTypeAnnotation = stringTypeAnnotation;
exports.symbolTypeAnnotation = symbolTypeAnnotation;
exports.thisTypeAnnotation = thisTypeAnnotation;
exports.tupleTypeAnnotation = tupleTypeAnnotation;
exports.typeofTypeAnnotation = typeofTypeAnnotation;
exports.typeAlias = typeAlias;
exports.typeAnnotation = typeAnnotation;
exports.typeCastExpression = typeCastExpression;
exports.typeParameter = typeParameter;
exports.typeParameterDeclaration = typeParameterDeclaration;
exports.typeParameterInstantiation = typeParameterInstantiation;
exports.unionTypeAnnotation = unionTypeAnnotation;
exports.variance = variance;
exports.voidTypeAnnotation = voidTypeAnnotation;
exports.enumDeclaration = enumDeclaration;
exports.enumBooleanBody = enumBooleanBody;
exports.enumNumberBody = enumNumberBody;
exports.enumStringBody = enumStringBody;
exports.enumSymbolBody = enumSymbolBody;
exports.enumBooleanMember = enumBooleanMember;
exports.enumNumberMember = enumNumberMember;
exports.enumStringMember = enumStringMember;
exports.enumDefaultedMember = enumDefaultedMember;
exports.jSXAttribute = exports.jsxAttribute = jsxAttribute;
exports.jSXClosingElement = exports.jsxClosingElement = jsxClosingElement;
exports.jSXElement = exports.jsxElement = jsxElement;
exports.jSXEmptyExpression = exports.jsxEmptyExpression = jsxEmptyExpression;
exports.jSXExpressionContainer = exports.jsxExpressionContainer = jsxExpressionContainer;
exports.jSXSpreadChild = exports.jsxSpreadChild = jsxSpreadChild;
exports.jSXIdentifier = exports.jsxIdentifier = jsxIdentifier;
exports.jSXMemberExpression = exports.jsxMemberExpression = jsxMemberExpression;
exports.jSXNamespacedName = exports.jsxNamespacedName = jsxNamespacedName;
exports.jSXOpeningElement = exports.jsxOpeningElement = jsxOpeningElement;
exports.jSXSpreadAttribute = exports.jsxSpreadAttribute = jsxSpreadAttribute;
exports.jSXText = exports.jsxText = jsxText;
exports.jSXFragment = exports.jsxFragment = jsxFragment;
exports.jSXOpeningFragment = exports.jsxOpeningFragment = jsxOpeningFragment;
exports.jSXClosingFragment = exports.jsxClosingFragment = jsxClosingFragment;
exports.noop = noop;
exports.placeholder = placeholder;
exports.v8IntrinsicIdentifier = v8IntrinsicIdentifier;
exports.argumentPlaceholder = argumentPlaceholder;
exports.bindExpression = bindExpression;
exports.classProperty = classProperty;
exports.pipelineTopicExpression = pipelineTopicExpression;
exports.pipelineBareFunction = pipelineBareFunction;
exports.pipelinePrimaryTopicReference = pipelinePrimaryTopicReference;
exports.classPrivateProperty = classPrivateProperty;
exports.classPrivateMethod = classPrivateMethod;
exports.importAttribute = importAttribute;
exports.decorator = decorator;
exports.doExpression = doExpression;
exports.exportDefaultSpecifier = exportDefaultSpecifier;
exports.privateName = privateName;
exports.recordExpression = recordExpression;
exports.tupleExpression = tupleExpression;
exports.decimalLiteral = decimalLiteral;
exports.staticBlock = staticBlock;
exports.moduleExpression = moduleExpression;
exports.tSParameterProperty = exports.tsParameterProperty = tsParameterProperty;
exports.tSDeclareFunction = exports.tsDeclareFunction = tsDeclareFunction;
exports.tSDeclareMethod = exports.tsDeclareMethod = tsDeclareMethod;
exports.tSQualifiedName = exports.tsQualifiedName = tsQualifiedName;
exports.tSCallSignatureDeclaration = exports.tsCallSignatureDeclaration = tsCallSignatureDeclaration;
exports.tSConstructSignatureDeclaration = exports.tsConstructSignatureDeclaration = tsConstructSignatureDeclaration;
exports.tSPropertySignature = exports.tsPropertySignature = tsPropertySignature;
exports.tSMethodSignature = exports.tsMethodSignature = tsMethodSignature;
exports.tSIndexSignature = exports.tsIndexSignature = tsIndexSignature;
exports.tSAnyKeyword = exports.tsAnyKeyword = tsAnyKeyword;
exports.tSBooleanKeyword = exports.tsBooleanKeyword = tsBooleanKeyword;
exports.tSBigIntKeyword = exports.tsBigIntKeyword = tsBigIntKeyword;
exports.tSIntrinsicKeyword = exports.tsIntrinsicKeyword = tsIntrinsicKeyword;
exports.tSNeverKeyword = exports.tsNeverKeyword = tsNeverKeyword;
exports.tSNullKeyword = exports.tsNullKeyword = tsNullKeyword;
exports.tSNumberKeyword = exports.tsNumberKeyword = tsNumberKeyword;
exports.tSObjectKeyword = exports.tsObjectKeyword = tsObjectKeyword;
exports.tSStringKeyword = exports.tsStringKeyword = tsStringKeyword;
exports.tSSymbolKeyword = exports.tsSymbolKeyword = tsSymbolKeyword;
exports.tSUndefinedKeyword = exports.tsUndefinedKeyword = tsUndefinedKeyword;
exports.tSUnknownKeyword = exports.tsUnknownKeyword = tsUnknownKeyword;
exports.tSVoidKeyword = exports.tsVoidKeyword = tsVoidKeyword;
exports.tSThisType = exports.tsThisType = tsThisType;
exports.tSFunctionType = exports.tsFunctionType = tsFunctionType;
exports.tSConstructorType = exports.tsConstructorType = tsConstructorType;
exports.tSTypeReference = exports.tsTypeReference = tsTypeReference;
exports.tSTypePredicate = exports.tsTypePredicate = tsTypePredicate;
exports.tSTypeQuery = exports.tsTypeQuery = tsTypeQuery;
exports.tSTypeLiteral = exports.tsTypeLiteral = tsTypeLiteral;
exports.tSArrayType = exports.tsArrayType = tsArrayType;
exports.tSTupleType = exports.tsTupleType = tsTupleType;
exports.tSOptionalType = exports.tsOptionalType = tsOptionalType;
exports.tSRestType = exports.tsRestType = tsRestType;
exports.tSNamedTupleMember = exports.tsNamedTupleMember = tsNamedTupleMember;
exports.tSUnionType = exports.tsUnionType = tsUnionType;
exports.tSIntersectionType = exports.tsIntersectionType = tsIntersectionType;
exports.tSConditionalType = exports.tsConditionalType = tsConditionalType;
exports.tSInferType = exports.tsInferType = tsInferType;
exports.tSParenthesizedType = exports.tsParenthesizedType = tsParenthesizedType;
exports.tSTypeOperator = exports.tsTypeOperator = tsTypeOperator;
exports.tSIndexedAccessType = exports.tsIndexedAccessType = tsIndexedAccessType;
exports.tSMappedType = exports.tsMappedType = tsMappedType;
exports.tSLiteralType = exports.tsLiteralType = tsLiteralType;
exports.tSExpressionWithTypeArguments = exports.tsExpressionWithTypeArguments = tsExpressionWithTypeArguments;
exports.tSInterfaceDeclaration = exports.tsInterfaceDeclaration = tsInterfaceDeclaration;
exports.tSInterfaceBody = exports.tsInterfaceBody = tsInterfaceBody;
exports.tSTypeAliasDeclaration = exports.tsTypeAliasDeclaration = tsTypeAliasDeclaration;
exports.tSAsExpression = exports.tsAsExpression = tsAsExpression;
exports.tSTypeAssertion = exports.tsTypeAssertion = tsTypeAssertion;
exports.tSEnumDeclaration = exports.tsEnumDeclaration = tsEnumDeclaration;
exports.tSEnumMember = exports.tsEnumMember = tsEnumMember;
exports.tSModuleDeclaration = exports.tsModuleDeclaration = tsModuleDeclaration;
exports.tSModuleBlock = exports.tsModuleBlock = tsModuleBlock;
exports.tSImportType = exports.tsImportType = tsImportType;
exports.tSImportEqualsDeclaration = exports.tsImportEqualsDeclaration = tsImportEqualsDeclaration;
exports.tSExternalModuleReference = exports.tsExternalModuleReference = tsExternalModuleReference;
exports.tSNonNullExpression = exports.tsNonNullExpression = tsNonNullExpression;
exports.tSExportAssignment = exports.tsExportAssignment = tsExportAssignment;
exports.tSNamespaceExportDeclaration = exports.tsNamespaceExportDeclaration = tsNamespaceExportDeclaration;
exports.tSTypeAnnotation = exports.tsTypeAnnotation = tsTypeAnnotation;
exports.tSTypeParameterInstantiation = exports.tsTypeParameterInstantiation = tsTypeParameterInstantiation;
exports.tSTypeParameterDeclaration = exports.tsTypeParameterDeclaration = tsTypeParameterDeclaration;
exports.tSTypeParameter = exports.tsTypeParameter = tsTypeParameter;
exports.numberLiteral = NumberLiteral;
exports.regexLiteral = RegexLiteral;
exports.restProperty = RestProperty;
exports.spreadProperty = SpreadProperty;

var _builder = _interopRequireDefault(builder_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function arrayExpression(elements) {
  return (0, _builder.default)("ArrayExpression", ...arguments);
}

function assignmentExpression(operator, left, right) {
  return (0, _builder.default)("AssignmentExpression", ...arguments);
}

function binaryExpression(operator, left, right) {
  return (0, _builder.default)("BinaryExpression", ...arguments);
}

function interpreterDirective(value) {
  return (0, _builder.default)("InterpreterDirective", ...arguments);
}

function directive(value) {
  return (0, _builder.default)("Directive", ...arguments);
}

function directiveLiteral(value) {
  return (0, _builder.default)("DirectiveLiteral", ...arguments);
}

function blockStatement(body, directives) {
  return (0, _builder.default)("BlockStatement", ...arguments);
}

function breakStatement(label) {
  return (0, _builder.default)("BreakStatement", ...arguments);
}

function callExpression(callee, _arguments) {
  return (0, _builder.default)("CallExpression", ...arguments);
}

function catchClause(param, body) {
  return (0, _builder.default)("CatchClause", ...arguments);
}

function conditionalExpression(test, consequent, alternate) {
  return (0, _builder.default)("ConditionalExpression", ...arguments);
}

function continueStatement(label) {
  return (0, _builder.default)("ContinueStatement", ...arguments);
}

function debuggerStatement() {
  return (0, _builder.default)("DebuggerStatement", ...arguments);
}

function doWhileStatement(test, body) {
  return (0, _builder.default)("DoWhileStatement", ...arguments);
}

function emptyStatement() {
  return (0, _builder.default)("EmptyStatement", ...arguments);
}

function expressionStatement(expression) {
  return (0, _builder.default)("ExpressionStatement", ...arguments);
}

function file(program, comments, tokens) {
  return (0, _builder.default)("File", ...arguments);
}

function forInStatement(left, right, body) {
  return (0, _builder.default)("ForInStatement", ...arguments);
}

function forStatement(init, test, update, body) {
  return (0, _builder.default)("ForStatement", ...arguments);
}

function functionDeclaration(id, params, body, generator, async) {
  return (0, _builder.default)("FunctionDeclaration", ...arguments);
}

function functionExpression(id, params, body, generator, async) {
  return (0, _builder.default)("FunctionExpression", ...arguments);
}

function identifier(name) {
  return (0, _builder.default)("Identifier", ...arguments);
}

function ifStatement(test, consequent, alternate) {
  return (0, _builder.default)("IfStatement", ...arguments);
}

function labeledStatement(label, body) {
  return (0, _builder.default)("LabeledStatement", ...arguments);
}

function stringLiteral(value) {
  return (0, _builder.default)("StringLiteral", ...arguments);
}

function numericLiteral(value) {
  return (0, _builder.default)("NumericLiteral", ...arguments);
}

function nullLiteral() {
  return (0, _builder.default)("NullLiteral", ...arguments);
}

function booleanLiteral(value) {
  return (0, _builder.default)("BooleanLiteral", ...arguments);
}

function regExpLiteral(pattern, flags) {
  return (0, _builder.default)("RegExpLiteral", ...arguments);
}

function logicalExpression(operator, left, right) {
  return (0, _builder.default)("LogicalExpression", ...arguments);
}

function memberExpression(object, property, computed, optional) {
  return (0, _builder.default)("MemberExpression", ...arguments);
}

function newExpression(callee, _arguments) {
  return (0, _builder.default)("NewExpression", ...arguments);
}

function program(body, directives, sourceType, interpreter) {
  return (0, _builder.default)("Program", ...arguments);
}

function objectExpression(properties) {
  return (0, _builder.default)("ObjectExpression", ...arguments);
}

function objectMethod(kind, key, params, body, computed, generator, async) {
  return (0, _builder.default)("ObjectMethod", ...arguments);
}

function objectProperty(key, value, computed, shorthand, decorators) {
  return (0, _builder.default)("ObjectProperty", ...arguments);
}

function restElement(argument) {
  return (0, _builder.default)("RestElement", ...arguments);
}

function returnStatement(argument) {
  return (0, _builder.default)("ReturnStatement", ...arguments);
}

function sequenceExpression(expressions) {
  return (0, _builder.default)("SequenceExpression", ...arguments);
}

function parenthesizedExpression(expression) {
  return (0, _builder.default)("ParenthesizedExpression", ...arguments);
}

function switchCase(test, consequent) {
  return (0, _builder.default)("SwitchCase", ...arguments);
}

function switchStatement(discriminant, cases) {
  return (0, _builder.default)("SwitchStatement", ...arguments);
}

function thisExpression() {
  return (0, _builder.default)("ThisExpression", ...arguments);
}

function throwStatement(argument) {
  return (0, _builder.default)("ThrowStatement", ...arguments);
}

function tryStatement(block, handler, finalizer) {
  return (0, _builder.default)("TryStatement", ...arguments);
}

function unaryExpression(operator, argument, prefix) {
  return (0, _builder.default)("UnaryExpression", ...arguments);
}

function updateExpression(operator, argument, prefix) {
  return (0, _builder.default)("UpdateExpression", ...arguments);
}

function variableDeclaration(kind, declarations) {
  return (0, _builder.default)("VariableDeclaration", ...arguments);
}

function variableDeclarator(id, init) {
  return (0, _builder.default)("VariableDeclarator", ...arguments);
}

function whileStatement(test, body) {
  return (0, _builder.default)("WhileStatement", ...arguments);
}

function withStatement(object, body) {
  return (0, _builder.default)("WithStatement", ...arguments);
}

function assignmentPattern(left, right) {
  return (0, _builder.default)("AssignmentPattern", ...arguments);
}

function arrayPattern(elements) {
  return (0, _builder.default)("ArrayPattern", ...arguments);
}

function arrowFunctionExpression(params, body, async) {
  return (0, _builder.default)("ArrowFunctionExpression", ...arguments);
}

function classBody(body) {
  return (0, _builder.default)("ClassBody", ...arguments);
}

function classExpression(id, superClass, body, decorators) {
  return (0, _builder.default)("ClassExpression", ...arguments);
}

function classDeclaration(id, superClass, body, decorators) {
  return (0, _builder.default)("ClassDeclaration", ...arguments);
}

function exportAllDeclaration(source) {
  return (0, _builder.default)("ExportAllDeclaration", ...arguments);
}

function exportDefaultDeclaration(declaration) {
  return (0, _builder.default)("ExportDefaultDeclaration", ...arguments);
}

function exportNamedDeclaration(declaration, specifiers, source) {
  return (0, _builder.default)("ExportNamedDeclaration", ...arguments);
}

function exportSpecifier(local, exported) {
  return (0, _builder.default)("ExportSpecifier", ...arguments);
}

function forOfStatement(left, right, body, _await) {
  return (0, _builder.default)("ForOfStatement", ...arguments);
}

function importDeclaration(specifiers, source) {
  return (0, _builder.default)("ImportDeclaration", ...arguments);
}

function importDefaultSpecifier(local) {
  return (0, _builder.default)("ImportDefaultSpecifier", ...arguments);
}

function importNamespaceSpecifier(local) {
  return (0, _builder.default)("ImportNamespaceSpecifier", ...arguments);
}

function importSpecifier(local, imported) {
  return (0, _builder.default)("ImportSpecifier", ...arguments);
}

function metaProperty(meta, property) {
  return (0, _builder.default)("MetaProperty", ...arguments);
}

function classMethod(kind, key, params, body, computed, _static, generator, async) {
  return (0, _builder.default)("ClassMethod", ...arguments);
}

function objectPattern(properties) {
  return (0, _builder.default)("ObjectPattern", ...arguments);
}

function spreadElement(argument) {
  return (0, _builder.default)("SpreadElement", ...arguments);
}

function _super() {
  return (0, _builder.default)("Super", ...arguments);
}

function taggedTemplateExpression(tag, quasi) {
  return (0, _builder.default)("TaggedTemplateExpression", ...arguments);
}

function templateElement(value, tail) {
  return (0, _builder.default)("TemplateElement", ...arguments);
}

function templateLiteral(quasis, expressions) {
  return (0, _builder.default)("TemplateLiteral", ...arguments);
}

function yieldExpression(argument, delegate) {
  return (0, _builder.default)("YieldExpression", ...arguments);
}

function awaitExpression(argument) {
  return (0, _builder.default)("AwaitExpression", ...arguments);
}

function _import() {
  return (0, _builder.default)("Import", ...arguments);
}

function bigIntLiteral(value) {
  return (0, _builder.default)("BigIntLiteral", ...arguments);
}

function exportNamespaceSpecifier(exported) {
  return (0, _builder.default)("ExportNamespaceSpecifier", ...arguments);
}

function optionalMemberExpression(object, property, computed, optional) {
  return (0, _builder.default)("OptionalMemberExpression", ...arguments);
}

function optionalCallExpression(callee, _arguments, optional) {
  return (0, _builder.default)("OptionalCallExpression", ...arguments);
}

function anyTypeAnnotation() {
  return (0, _builder.default)("AnyTypeAnnotation", ...arguments);
}

function arrayTypeAnnotation(elementType) {
  return (0, _builder.default)("ArrayTypeAnnotation", ...arguments);
}

function booleanTypeAnnotation() {
  return (0, _builder.default)("BooleanTypeAnnotation", ...arguments);
}

function booleanLiteralTypeAnnotation(value) {
  return (0, _builder.default)("BooleanLiteralTypeAnnotation", ...arguments);
}

function nullLiteralTypeAnnotation() {
  return (0, _builder.default)("NullLiteralTypeAnnotation", ...arguments);
}

function classImplements(id, typeParameters) {
  return (0, _builder.default)("ClassImplements", ...arguments);
}

function declareClass(id, typeParameters, _extends, body) {
  return (0, _builder.default)("DeclareClass", ...arguments);
}

function declareFunction(id) {
  return (0, _builder.default)("DeclareFunction", ...arguments);
}

function declareInterface(id, typeParameters, _extends, body) {
  return (0, _builder.default)("DeclareInterface", ...arguments);
}

function declareModule(id, body, kind) {
  return (0, _builder.default)("DeclareModule", ...arguments);
}

function declareModuleExports(typeAnnotation) {
  return (0, _builder.default)("DeclareModuleExports", ...arguments);
}

function declareTypeAlias(id, typeParameters, right) {
  return (0, _builder.default)("DeclareTypeAlias", ...arguments);
}

function declareOpaqueType(id, typeParameters, supertype) {
  return (0, _builder.default)("DeclareOpaqueType", ...arguments);
}

function declareVariable(id) {
  return (0, _builder.default)("DeclareVariable", ...arguments);
}

function declareExportDeclaration(declaration, specifiers, source) {
  return (0, _builder.default)("DeclareExportDeclaration", ...arguments);
}

function declareExportAllDeclaration(source) {
  return (0, _builder.default)("DeclareExportAllDeclaration", ...arguments);
}

function declaredPredicate(value) {
  return (0, _builder.default)("DeclaredPredicate", ...arguments);
}

function existsTypeAnnotation() {
  return (0, _builder.default)("ExistsTypeAnnotation", ...arguments);
}

function functionTypeAnnotation(typeParameters, params, rest, returnType) {
  return (0, _builder.default)("FunctionTypeAnnotation", ...arguments);
}

function functionTypeParam(name, typeAnnotation) {
  return (0, _builder.default)("FunctionTypeParam", ...arguments);
}

function genericTypeAnnotation(id, typeParameters) {
  return (0, _builder.default)("GenericTypeAnnotation", ...arguments);
}

function inferredPredicate() {
  return (0, _builder.default)("InferredPredicate", ...arguments);
}

function interfaceExtends(id, typeParameters) {
  return (0, _builder.default)("InterfaceExtends", ...arguments);
}

function interfaceDeclaration(id, typeParameters, _extends, body) {
  return (0, _builder.default)("InterfaceDeclaration", ...arguments);
}

function interfaceTypeAnnotation(_extends, body) {
  return (0, _builder.default)("InterfaceTypeAnnotation", ...arguments);
}

function intersectionTypeAnnotation(types) {
  return (0, _builder.default)("IntersectionTypeAnnotation", ...arguments);
}

function mixedTypeAnnotation() {
  return (0, _builder.default)("MixedTypeAnnotation", ...arguments);
}

function emptyTypeAnnotation() {
  return (0, _builder.default)("EmptyTypeAnnotation", ...arguments);
}

function nullableTypeAnnotation(typeAnnotation) {
  return (0, _builder.default)("NullableTypeAnnotation", ...arguments);
}

function numberLiteralTypeAnnotation(value) {
  return (0, _builder.default)("NumberLiteralTypeAnnotation", ...arguments);
}

function numberTypeAnnotation() {
  return (0, _builder.default)("NumberTypeAnnotation", ...arguments);
}

function objectTypeAnnotation(properties, indexers, callProperties, internalSlots, exact) {
  return (0, _builder.default)("ObjectTypeAnnotation", ...arguments);
}

function objectTypeInternalSlot(id, value, optional, _static, method) {
  return (0, _builder.default)("ObjectTypeInternalSlot", ...arguments);
}

function objectTypeCallProperty(value) {
  return (0, _builder.default)("ObjectTypeCallProperty", ...arguments);
}

function objectTypeIndexer(id, key, value, variance) {
  return (0, _builder.default)("ObjectTypeIndexer", ...arguments);
}

function objectTypeProperty(key, value, variance) {
  return (0, _builder.default)("ObjectTypeProperty", ...arguments);
}

function objectTypeSpreadProperty(argument) {
  return (0, _builder.default)("ObjectTypeSpreadProperty", ...arguments);
}

function opaqueType(id, typeParameters, supertype, impltype) {
  return (0, _builder.default)("OpaqueType", ...arguments);
}

function qualifiedTypeIdentifier(id, qualification) {
  return (0, _builder.default)("QualifiedTypeIdentifier", ...arguments);
}

function stringLiteralTypeAnnotation(value) {
  return (0, _builder.default)("StringLiteralTypeAnnotation", ...arguments);
}

function stringTypeAnnotation() {
  return (0, _builder.default)("StringTypeAnnotation", ...arguments);
}

function symbolTypeAnnotation() {
  return (0, _builder.default)("SymbolTypeAnnotation", ...arguments);
}

function thisTypeAnnotation() {
  return (0, _builder.default)("ThisTypeAnnotation", ...arguments);
}

function tupleTypeAnnotation(types) {
  return (0, _builder.default)("TupleTypeAnnotation", ...arguments);
}

function typeofTypeAnnotation(argument) {
  return (0, _builder.default)("TypeofTypeAnnotation", ...arguments);
}

function typeAlias(id, typeParameters, right) {
  return (0, _builder.default)("TypeAlias", ...arguments);
}

function typeAnnotation(typeAnnotation) {
  return (0, _builder.default)("TypeAnnotation", ...arguments);
}

function typeCastExpression(expression, typeAnnotation) {
  return (0, _builder.default)("TypeCastExpression", ...arguments);
}

function typeParameter(bound, _default, variance) {
  return (0, _builder.default)("TypeParameter", ...arguments);
}

function typeParameterDeclaration(params) {
  return (0, _builder.default)("TypeParameterDeclaration", ...arguments);
}

function typeParameterInstantiation(params) {
  return (0, _builder.default)("TypeParameterInstantiation", ...arguments);
}

function unionTypeAnnotation(types) {
  return (0, _builder.default)("UnionTypeAnnotation", ...arguments);
}

function variance(kind) {
  return (0, _builder.default)("Variance", ...arguments);
}

function voidTypeAnnotation() {
  return (0, _builder.default)("VoidTypeAnnotation", ...arguments);
}

function enumDeclaration(id, body) {
  return (0, _builder.default)("EnumDeclaration", ...arguments);
}

function enumBooleanBody(members) {
  return (0, _builder.default)("EnumBooleanBody", ...arguments);
}

function enumNumberBody(members) {
  return (0, _builder.default)("EnumNumberBody", ...arguments);
}

function enumStringBody(members) {
  return (0, _builder.default)("EnumStringBody", ...arguments);
}

function enumSymbolBody(members) {
  return (0, _builder.default)("EnumSymbolBody", ...arguments);
}

function enumBooleanMember(id) {
  return (0, _builder.default)("EnumBooleanMember", ...arguments);
}

function enumNumberMember(id, init) {
  return (0, _builder.default)("EnumNumberMember", ...arguments);
}

function enumStringMember(id, init) {
  return (0, _builder.default)("EnumStringMember", ...arguments);
}

function enumDefaultedMember(id) {
  return (0, _builder.default)("EnumDefaultedMember", ...arguments);
}

function jsxAttribute(name, value) {
  return (0, _builder.default)("JSXAttribute", ...arguments);
}

function jsxClosingElement(name) {
  return (0, _builder.default)("JSXClosingElement", ...arguments);
}

function jsxElement(openingElement, closingElement, children, selfClosing) {
  return (0, _builder.default)("JSXElement", ...arguments);
}

function jsxEmptyExpression() {
  return (0, _builder.default)("JSXEmptyExpression", ...arguments);
}

function jsxExpressionContainer(expression) {
  return (0, _builder.default)("JSXExpressionContainer", ...arguments);
}

function jsxSpreadChild(expression) {
  return (0, _builder.default)("JSXSpreadChild", ...arguments);
}

function jsxIdentifier(name) {
  return (0, _builder.default)("JSXIdentifier", ...arguments);
}

function jsxMemberExpression(object, property) {
  return (0, _builder.default)("JSXMemberExpression", ...arguments);
}

function jsxNamespacedName(namespace, name) {
  return (0, _builder.default)("JSXNamespacedName", ...arguments);
}

function jsxOpeningElement(name, attributes, selfClosing) {
  return (0, _builder.default)("JSXOpeningElement", ...arguments);
}

function jsxSpreadAttribute(argument) {
  return (0, _builder.default)("JSXSpreadAttribute", ...arguments);
}

function jsxText(value) {
  return (0, _builder.default)("JSXText", ...arguments);
}

function jsxFragment(openingFragment, closingFragment, children) {
  return (0, _builder.default)("JSXFragment", ...arguments);
}

function jsxOpeningFragment() {
  return (0, _builder.default)("JSXOpeningFragment", ...arguments);
}

function jsxClosingFragment() {
  return (0, _builder.default)("JSXClosingFragment", ...arguments);
}

function noop() {
  return (0, _builder.default)("Noop", ...arguments);
}

function placeholder(expectedNode, name) {
  return (0, _builder.default)("Placeholder", ...arguments);
}

function v8IntrinsicIdentifier(name) {
  return (0, _builder.default)("V8IntrinsicIdentifier", ...arguments);
}

function argumentPlaceholder() {
  return (0, _builder.default)("ArgumentPlaceholder", ...arguments);
}

function bindExpression(object, callee) {
  return (0, _builder.default)("BindExpression", ...arguments);
}

function classProperty(key, value, typeAnnotation, decorators, computed, _static) {
  return (0, _builder.default)("ClassProperty", ...arguments);
}

function pipelineTopicExpression(expression) {
  return (0, _builder.default)("PipelineTopicExpression", ...arguments);
}

function pipelineBareFunction(callee) {
  return (0, _builder.default)("PipelineBareFunction", ...arguments);
}

function pipelinePrimaryTopicReference() {
  return (0, _builder.default)("PipelinePrimaryTopicReference", ...arguments);
}

function classPrivateProperty(key, value, decorators, _static) {
  return (0, _builder.default)("ClassPrivateProperty", ...arguments);
}

function classPrivateMethod(kind, key, params, body, _static) {
  return (0, _builder.default)("ClassPrivateMethod", ...arguments);
}

function importAttribute(key, value) {
  return (0, _builder.default)("ImportAttribute", ...arguments);
}

function decorator(expression) {
  return (0, _builder.default)("Decorator", ...arguments);
}

function doExpression(body) {
  return (0, _builder.default)("DoExpression", ...arguments);
}

function exportDefaultSpecifier(exported) {
  return (0, _builder.default)("ExportDefaultSpecifier", ...arguments);
}

function privateName(id) {
  return (0, _builder.default)("PrivateName", ...arguments);
}

function recordExpression(properties) {
  return (0, _builder.default)("RecordExpression", ...arguments);
}

function tupleExpression(elements) {
  return (0, _builder.default)("TupleExpression", ...arguments);
}

function decimalLiteral(value) {
  return (0, _builder.default)("DecimalLiteral", ...arguments);
}

function staticBlock(body) {
  return (0, _builder.default)("StaticBlock", ...arguments);
}

function moduleExpression(body) {
  return (0, _builder.default)("ModuleExpression", ...arguments);
}

function tsParameterProperty(parameter) {
  return (0, _builder.default)("TSParameterProperty", ...arguments);
}

function tsDeclareFunction(id, typeParameters, params, returnType) {
  return (0, _builder.default)("TSDeclareFunction", ...arguments);
}

function tsDeclareMethod(decorators, key, typeParameters, params, returnType) {
  return (0, _builder.default)("TSDeclareMethod", ...arguments);
}

function tsQualifiedName(left, right) {
  return (0, _builder.default)("TSQualifiedName", ...arguments);
}

function tsCallSignatureDeclaration(typeParameters, parameters, typeAnnotation) {
  return (0, _builder.default)("TSCallSignatureDeclaration", ...arguments);
}

function tsConstructSignatureDeclaration(typeParameters, parameters, typeAnnotation) {
  return (0, _builder.default)("TSConstructSignatureDeclaration", ...arguments);
}

function tsPropertySignature(key, typeAnnotation, initializer) {
  return (0, _builder.default)("TSPropertySignature", ...arguments);
}

function tsMethodSignature(key, typeParameters, parameters, typeAnnotation) {
  return (0, _builder.default)("TSMethodSignature", ...arguments);
}

function tsIndexSignature(parameters, typeAnnotation) {
  return (0, _builder.default)("TSIndexSignature", ...arguments);
}

function tsAnyKeyword() {
  return (0, _builder.default)("TSAnyKeyword", ...arguments);
}

function tsBooleanKeyword() {
  return (0, _builder.default)("TSBooleanKeyword", ...arguments);
}

function tsBigIntKeyword() {
  return (0, _builder.default)("TSBigIntKeyword", ...arguments);
}

function tsIntrinsicKeyword() {
  return (0, _builder.default)("TSIntrinsicKeyword", ...arguments);
}

function tsNeverKeyword() {
  return (0, _builder.default)("TSNeverKeyword", ...arguments);
}

function tsNullKeyword() {
  return (0, _builder.default)("TSNullKeyword", ...arguments);
}

function tsNumberKeyword() {
  return (0, _builder.default)("TSNumberKeyword", ...arguments);
}

function tsObjectKeyword() {
  return (0, _builder.default)("TSObjectKeyword", ...arguments);
}

function tsStringKeyword() {
  return (0, _builder.default)("TSStringKeyword", ...arguments);
}

function tsSymbolKeyword() {
  return (0, _builder.default)("TSSymbolKeyword", ...arguments);
}

function tsUndefinedKeyword() {
  return (0, _builder.default)("TSUndefinedKeyword", ...arguments);
}

function tsUnknownKeyword() {
  return (0, _builder.default)("TSUnknownKeyword", ...arguments);
}

function tsVoidKeyword() {
  return (0, _builder.default)("TSVoidKeyword", ...arguments);
}

function tsThisType() {
  return (0, _builder.default)("TSThisType", ...arguments);
}

function tsFunctionType(typeParameters, parameters, typeAnnotation) {
  return (0, _builder.default)("TSFunctionType", ...arguments);
}

function tsConstructorType(typeParameters, parameters, typeAnnotation) {
  return (0, _builder.default)("TSConstructorType", ...arguments);
}

function tsTypeReference(typeName, typeParameters) {
  return (0, _builder.default)("TSTypeReference", ...arguments);
}

function tsTypePredicate(parameterName, typeAnnotation, asserts) {
  return (0, _builder.default)("TSTypePredicate", ...arguments);
}

function tsTypeQuery(exprName) {
  return (0, _builder.default)("TSTypeQuery", ...arguments);
}

function tsTypeLiteral(members) {
  return (0, _builder.default)("TSTypeLiteral", ...arguments);
}

function tsArrayType(elementType) {
  return (0, _builder.default)("TSArrayType", ...arguments);
}

function tsTupleType(elementTypes) {
  return (0, _builder.default)("TSTupleType", ...arguments);
}

function tsOptionalType(typeAnnotation) {
  return (0, _builder.default)("TSOptionalType", ...arguments);
}

function tsRestType(typeAnnotation) {
  return (0, _builder.default)("TSRestType", ...arguments);
}

function tsNamedTupleMember(label, elementType, optional) {
  return (0, _builder.default)("TSNamedTupleMember", ...arguments);
}

function tsUnionType(types) {
  return (0, _builder.default)("TSUnionType", ...arguments);
}

function tsIntersectionType(types) {
  return (0, _builder.default)("TSIntersectionType", ...arguments);
}

function tsConditionalType(checkType, extendsType, trueType, falseType) {
  return (0, _builder.default)("TSConditionalType", ...arguments);
}

function tsInferType(typeParameter) {
  return (0, _builder.default)("TSInferType", ...arguments);
}

function tsParenthesizedType(typeAnnotation) {
  return (0, _builder.default)("TSParenthesizedType", ...arguments);
}

function tsTypeOperator(typeAnnotation) {
  return (0, _builder.default)("TSTypeOperator", ...arguments);
}

function tsIndexedAccessType(objectType, indexType) {
  return (0, _builder.default)("TSIndexedAccessType", ...arguments);
}

function tsMappedType(typeParameter, typeAnnotation, nameType) {
  return (0, _builder.default)("TSMappedType", ...arguments);
}

function tsLiteralType(literal) {
  return (0, _builder.default)("TSLiteralType", ...arguments);
}

function tsExpressionWithTypeArguments(expression, typeParameters) {
  return (0, _builder.default)("TSExpressionWithTypeArguments", ...arguments);
}

function tsInterfaceDeclaration(id, typeParameters, _extends, body) {
  return (0, _builder.default)("TSInterfaceDeclaration", ...arguments);
}

function tsInterfaceBody(body) {
  return (0, _builder.default)("TSInterfaceBody", ...arguments);
}

function tsTypeAliasDeclaration(id, typeParameters, typeAnnotation) {
  return (0, _builder.default)("TSTypeAliasDeclaration", ...arguments);
}

function tsAsExpression(expression, typeAnnotation) {
  return (0, _builder.default)("TSAsExpression", ...arguments);
}

function tsTypeAssertion(typeAnnotation, expression) {
  return (0, _builder.default)("TSTypeAssertion", ...arguments);
}

function tsEnumDeclaration(id, members) {
  return (0, _builder.default)("TSEnumDeclaration", ...arguments);
}

function tsEnumMember(id, initializer) {
  return (0, _builder.default)("TSEnumMember", ...arguments);
}

function tsModuleDeclaration(id, body) {
  return (0, _builder.default)("TSModuleDeclaration", ...arguments);
}

function tsModuleBlock(body) {
  return (0, _builder.default)("TSModuleBlock", ...arguments);
}

function tsImportType(argument, qualifier, typeParameters) {
  return (0, _builder.default)("TSImportType", ...arguments);
}

function tsImportEqualsDeclaration(id, moduleReference) {
  return (0, _builder.default)("TSImportEqualsDeclaration", ...arguments);
}

function tsExternalModuleReference(expression) {
  return (0, _builder.default)("TSExternalModuleReference", ...arguments);
}

function tsNonNullExpression(expression) {
  return (0, _builder.default)("TSNonNullExpression", ...arguments);
}

function tsExportAssignment(expression) {
  return (0, _builder.default)("TSExportAssignment", ...arguments);
}

function tsNamespaceExportDeclaration(id) {
  return (0, _builder.default)("TSNamespaceExportDeclaration", ...arguments);
}

function tsTypeAnnotation(typeAnnotation) {
  return (0, _builder.default)("TSTypeAnnotation", ...arguments);
}

function tsTypeParameterInstantiation(params) {
  return (0, _builder.default)("TSTypeParameterInstantiation", ...arguments);
}

function tsTypeParameterDeclaration(params) {
  return (0, _builder.default)("TSTypeParameterDeclaration", ...arguments);
}

function tsTypeParameter(constraint, _default, name) {
  return (0, _builder.default)("TSTypeParameter", ...arguments);
}

function NumberLiteral(...args) {
  console.trace("The node type NumberLiteral has been renamed to NumericLiteral");
  return (0, _builder.default)("NumberLiteral", ...args);
}

function RegexLiteral(...args) {
  console.trace("The node type RegexLiteral has been renamed to RegExpLiteral");
  return (0, _builder.default)("RegexLiteral", ...args);
}

function RestProperty(...args) {
  console.trace("The node type RestProperty has been renamed to RestElement");
  return (0, _builder.default)("RestProperty", ...args);
}

function SpreadProperty(...args) {
  console.trace("The node type SpreadProperty has been renamed to SpreadElement");
  return (0, _builder.default)("SpreadProperty", ...args);
}
});

unwrapExports(generated$1);
var generated_1$1 = generated$1.arrayExpression;
var generated_2$1 = generated$1.assignmentExpression;
var generated_3$1 = generated$1.binaryExpression;
var generated_4$1 = generated$1.interpreterDirective;
var generated_5$1 = generated$1.directive;
var generated_6$1 = generated$1.directiveLiteral;
var generated_7$1 = generated$1.blockStatement;
var generated_8$1 = generated$1.breakStatement;
var generated_9$1 = generated$1.callExpression;
var generated_10$1 = generated$1.catchClause;
var generated_11$1 = generated$1.conditionalExpression;
var generated_12$1 = generated$1.continueStatement;
var generated_13$1 = generated$1.debuggerStatement;
var generated_14$1 = generated$1.doWhileStatement;
var generated_15$1 = generated$1.emptyStatement;
var generated_16$1 = generated$1.expressionStatement;
var generated_17$1 = generated$1.file;
var generated_18$1 = generated$1.forInStatement;
var generated_19$1 = generated$1.forStatement;
var generated_20$1 = generated$1.functionDeclaration;
var generated_21$1 = generated$1.functionExpression;
var generated_22$1 = generated$1.identifier;
var generated_23$1 = generated$1.ifStatement;
var generated_24$1 = generated$1.labeledStatement;
var generated_25$1 = generated$1.stringLiteral;
var generated_26$1 = generated$1.numericLiteral;
var generated_27$1 = generated$1.nullLiteral;
var generated_28$1 = generated$1.booleanLiteral;
var generated_29$1 = generated$1.regExpLiteral;
var generated_30$1 = generated$1.logicalExpression;
var generated_31$1 = generated$1.memberExpression;
var generated_32$1 = generated$1.newExpression;
var generated_33$1 = generated$1.program;
var generated_34$1 = generated$1.objectExpression;
var generated_35$1 = generated$1.objectMethod;
var generated_36$1 = generated$1.objectProperty;
var generated_37$1 = generated$1.restElement;
var generated_38$1 = generated$1.returnStatement;
var generated_39$1 = generated$1.sequenceExpression;
var generated_40$1 = generated$1.parenthesizedExpression;
var generated_41$1 = generated$1.switchCase;
var generated_42$1 = generated$1.switchStatement;
var generated_43$1 = generated$1.thisExpression;
var generated_44$1 = generated$1.throwStatement;
var generated_45$1 = generated$1.tryStatement;
var generated_46$1 = generated$1.unaryExpression;
var generated_47$1 = generated$1.updateExpression;
var generated_48$1 = generated$1.variableDeclaration;
var generated_49$1 = generated$1.variableDeclarator;
var generated_50$1 = generated$1.whileStatement;
var generated_51$1 = generated$1.withStatement;
var generated_52$1 = generated$1.assignmentPattern;
var generated_53$1 = generated$1.arrayPattern;
var generated_54$1 = generated$1.arrowFunctionExpression;
var generated_55$1 = generated$1.classBody;
var generated_56$1 = generated$1.classExpression;
var generated_57$1 = generated$1.classDeclaration;
var generated_58$1 = generated$1.exportAllDeclaration;
var generated_59$1 = generated$1.exportDefaultDeclaration;
var generated_60$1 = generated$1.exportNamedDeclaration;
var generated_61$1 = generated$1.exportSpecifier;
var generated_62$1 = generated$1.forOfStatement;
var generated_63$1 = generated$1.importDeclaration;
var generated_64$1 = generated$1.importDefaultSpecifier;
var generated_65$1 = generated$1.importNamespaceSpecifier;
var generated_66$1 = generated$1.importSpecifier;
var generated_67$1 = generated$1.metaProperty;
var generated_68$1 = generated$1.classMethod;
var generated_69$1 = generated$1.objectPattern;
var generated_70$1 = generated$1.spreadElement;
var generated_71$1 = generated$1.taggedTemplateExpression;
var generated_72$1 = generated$1.templateElement;
var generated_73$1 = generated$1.templateLiteral;
var generated_74$1 = generated$1.yieldExpression;
var generated_75$1 = generated$1.awaitExpression;
var generated_76$1 = generated$1.bigIntLiteral;
var generated_77$1 = generated$1.exportNamespaceSpecifier;
var generated_78$1 = generated$1.optionalMemberExpression;
var generated_79$1 = generated$1.optionalCallExpression;
var generated_80$1 = generated$1.anyTypeAnnotation;
var generated_81$1 = generated$1.arrayTypeAnnotation;
var generated_82$1 = generated$1.booleanTypeAnnotation;
var generated_83$1 = generated$1.booleanLiteralTypeAnnotation;
var generated_84$1 = generated$1.nullLiteralTypeAnnotation;
var generated_85$1 = generated$1.classImplements;
var generated_86$1 = generated$1.declareClass;
var generated_87$1 = generated$1.declareFunction;
var generated_88$1 = generated$1.declareInterface;
var generated_89$1 = generated$1.declareModule;
var generated_90$1 = generated$1.declareModuleExports;
var generated_91$1 = generated$1.declareTypeAlias;
var generated_92$1 = generated$1.declareOpaqueType;
var generated_93$1 = generated$1.declareVariable;
var generated_94$1 = generated$1.declareExportDeclaration;
var generated_95$1 = generated$1.declareExportAllDeclaration;
var generated_96$1 = generated$1.declaredPredicate;
var generated_97$1 = generated$1.existsTypeAnnotation;
var generated_98$1 = generated$1.functionTypeAnnotation;
var generated_99$1 = generated$1.functionTypeParam;
var generated_100$1 = generated$1.genericTypeAnnotation;
var generated_101$1 = generated$1.inferredPredicate;
var generated_102$1 = generated$1.interfaceExtends;
var generated_103$1 = generated$1.interfaceDeclaration;
var generated_104$1 = generated$1.interfaceTypeAnnotation;
var generated_105$1 = generated$1.intersectionTypeAnnotation;
var generated_106$1 = generated$1.mixedTypeAnnotation;
var generated_107$1 = generated$1.emptyTypeAnnotation;
var generated_108$1 = generated$1.nullableTypeAnnotation;
var generated_109$1 = generated$1.numberLiteralTypeAnnotation;
var generated_110$1 = generated$1.numberTypeAnnotation;
var generated_111$1 = generated$1.objectTypeAnnotation;
var generated_112$1 = generated$1.objectTypeInternalSlot;
var generated_113$1 = generated$1.objectTypeCallProperty;
var generated_114$1 = generated$1.objectTypeIndexer;
var generated_115$1 = generated$1.objectTypeProperty;
var generated_116$1 = generated$1.objectTypeSpreadProperty;
var generated_117$1 = generated$1.opaqueType;
var generated_118$1 = generated$1.qualifiedTypeIdentifier;
var generated_119$1 = generated$1.stringLiteralTypeAnnotation;
var generated_120$1 = generated$1.stringTypeAnnotation;
var generated_121$1 = generated$1.symbolTypeAnnotation;
var generated_122$1 = generated$1.thisTypeAnnotation;
var generated_123$1 = generated$1.tupleTypeAnnotation;
var generated_124$1 = generated$1.typeofTypeAnnotation;
var generated_125$1 = generated$1.typeAlias;
var generated_126$1 = generated$1.typeAnnotation;
var generated_127$1 = generated$1.typeCastExpression;
var generated_128$1 = generated$1.typeParameter;
var generated_129$1 = generated$1.typeParameterDeclaration;
var generated_130$1 = generated$1.typeParameterInstantiation;
var generated_131$1 = generated$1.unionTypeAnnotation;
var generated_132$1 = generated$1.variance;
var generated_133$1 = generated$1.voidTypeAnnotation;
var generated_134$1 = generated$1.enumDeclaration;
var generated_135$1 = generated$1.enumBooleanBody;
var generated_136$1 = generated$1.enumNumberBody;
var generated_137$1 = generated$1.enumStringBody;
var generated_138$1 = generated$1.enumSymbolBody;
var generated_139$1 = generated$1.enumBooleanMember;
var generated_140$1 = generated$1.enumNumberMember;
var generated_141$1 = generated$1.enumStringMember;
var generated_142$1 = generated$1.enumDefaultedMember;
var generated_143$1 = generated$1.jSXAttribute;
var generated_144$1 = generated$1.jsxAttribute;
var generated_145$1 = generated$1.jSXClosingElement;
var generated_146$1 = generated$1.jsxClosingElement;
var generated_147$1 = generated$1.jSXElement;
var generated_148$1 = generated$1.jsxElement;
var generated_149$1 = generated$1.jSXEmptyExpression;
var generated_150$1 = generated$1.jsxEmptyExpression;
var generated_151$1 = generated$1.jSXExpressionContainer;
var generated_152$1 = generated$1.jsxExpressionContainer;
var generated_153$1 = generated$1.jSXSpreadChild;
var generated_154$1 = generated$1.jsxSpreadChild;
var generated_155$1 = generated$1.jSXIdentifier;
var generated_156$1 = generated$1.jsxIdentifier;
var generated_157$1 = generated$1.jSXMemberExpression;
var generated_158$1 = generated$1.jsxMemberExpression;
var generated_159$1 = generated$1.jSXNamespacedName;
var generated_160$1 = generated$1.jsxNamespacedName;
var generated_161$1 = generated$1.jSXOpeningElement;
var generated_162$1 = generated$1.jsxOpeningElement;
var generated_163$1 = generated$1.jSXSpreadAttribute;
var generated_164$1 = generated$1.jsxSpreadAttribute;
var generated_165$1 = generated$1.jSXText;
var generated_166$1 = generated$1.jsxText;
var generated_167$1 = generated$1.jSXFragment;
var generated_168$1 = generated$1.jsxFragment;
var generated_169$1 = generated$1.jSXOpeningFragment;
var generated_170$1 = generated$1.jsxOpeningFragment;
var generated_171$1 = generated$1.jSXClosingFragment;
var generated_172$1 = generated$1.jsxClosingFragment;
var generated_173$1 = generated$1.noop;
var generated_174$1 = generated$1.placeholder;
var generated_175$1 = generated$1.v8IntrinsicIdentifier;
var generated_176$1 = generated$1.argumentPlaceholder;
var generated_177$1 = generated$1.bindExpression;
var generated_178$1 = generated$1.classProperty;
var generated_179$1 = generated$1.pipelineTopicExpression;
var generated_180$1 = generated$1.pipelineBareFunction;
var generated_181$1 = generated$1.pipelinePrimaryTopicReference;
var generated_182$1 = generated$1.classPrivateProperty;
var generated_183$1 = generated$1.classPrivateMethod;
var generated_184$1 = generated$1.importAttribute;
var generated_185$1 = generated$1.decorator;
var generated_186$1 = generated$1.doExpression;
var generated_187$1 = generated$1.exportDefaultSpecifier;
var generated_188$1 = generated$1.privateName;
var generated_189$1 = generated$1.recordExpression;
var generated_190$1 = generated$1.tupleExpression;
var generated_191$1 = generated$1.decimalLiteral;
var generated_192$1 = generated$1.staticBlock;
var generated_193$1 = generated$1.moduleExpression;
var generated_194$1 = generated$1.tSParameterProperty;
var generated_195$1 = generated$1.tsParameterProperty;
var generated_196$1 = generated$1.tSDeclareFunction;
var generated_197$1 = generated$1.tsDeclareFunction;
var generated_198$1 = generated$1.tSDeclareMethod;
var generated_199$1 = generated$1.tsDeclareMethod;
var generated_200$1 = generated$1.tSQualifiedName;
var generated_201$1 = generated$1.tsQualifiedName;
var generated_202$1 = generated$1.tSCallSignatureDeclaration;
var generated_203$1 = generated$1.tsCallSignatureDeclaration;
var generated_204$1 = generated$1.tSConstructSignatureDeclaration;
var generated_205$1 = generated$1.tsConstructSignatureDeclaration;
var generated_206$1 = generated$1.tSPropertySignature;
var generated_207$1 = generated$1.tsPropertySignature;
var generated_208$1 = generated$1.tSMethodSignature;
var generated_209$1 = generated$1.tsMethodSignature;
var generated_210$1 = generated$1.tSIndexSignature;
var generated_211$1 = generated$1.tsIndexSignature;
var generated_212$1 = generated$1.tSAnyKeyword;
var generated_213$1 = generated$1.tsAnyKeyword;
var generated_214$1 = generated$1.tSBooleanKeyword;
var generated_215$1 = generated$1.tsBooleanKeyword;
var generated_216$1 = generated$1.tSBigIntKeyword;
var generated_217$1 = generated$1.tsBigIntKeyword;
var generated_218$1 = generated$1.tSIntrinsicKeyword;
var generated_219$1 = generated$1.tsIntrinsicKeyword;
var generated_220$1 = generated$1.tSNeverKeyword;
var generated_221$1 = generated$1.tsNeverKeyword;
var generated_222$1 = generated$1.tSNullKeyword;
var generated_223$1 = generated$1.tsNullKeyword;
var generated_224$1 = generated$1.tSNumberKeyword;
var generated_225$1 = generated$1.tsNumberKeyword;
var generated_226$1 = generated$1.tSObjectKeyword;
var generated_227$1 = generated$1.tsObjectKeyword;
var generated_228$1 = generated$1.tSStringKeyword;
var generated_229$1 = generated$1.tsStringKeyword;
var generated_230$1 = generated$1.tSSymbolKeyword;
var generated_231$1 = generated$1.tsSymbolKeyword;
var generated_232$1 = generated$1.tSUndefinedKeyword;
var generated_233$1 = generated$1.tsUndefinedKeyword;
var generated_234$1 = generated$1.tSUnknownKeyword;
var generated_235$1 = generated$1.tsUnknownKeyword;
var generated_236$1 = generated$1.tSVoidKeyword;
var generated_237$1 = generated$1.tsVoidKeyword;
var generated_238$1 = generated$1.tSThisType;
var generated_239$1 = generated$1.tsThisType;
var generated_240$1 = generated$1.tSFunctionType;
var generated_241$1 = generated$1.tsFunctionType;
var generated_242$1 = generated$1.tSConstructorType;
var generated_243$1 = generated$1.tsConstructorType;
var generated_244$1 = generated$1.tSTypeReference;
var generated_245$1 = generated$1.tsTypeReference;
var generated_246$1 = generated$1.tSTypePredicate;
var generated_247$1 = generated$1.tsTypePredicate;
var generated_248$1 = generated$1.tSTypeQuery;
var generated_249$1 = generated$1.tsTypeQuery;
var generated_250$1 = generated$1.tSTypeLiteral;
var generated_251$1 = generated$1.tsTypeLiteral;
var generated_252$1 = generated$1.tSArrayType;
var generated_253$1 = generated$1.tsArrayType;
var generated_254$1 = generated$1.tSTupleType;
var generated_255$1 = generated$1.tsTupleType;
var generated_256$1 = generated$1.tSOptionalType;
var generated_257$1 = generated$1.tsOptionalType;
var generated_258$1 = generated$1.tSRestType;
var generated_259$1 = generated$1.tsRestType;
var generated_260$1 = generated$1.tSNamedTupleMember;
var generated_261$1 = generated$1.tsNamedTupleMember;
var generated_262$1 = generated$1.tSUnionType;
var generated_263$1 = generated$1.tsUnionType;
var generated_264$1 = generated$1.tSIntersectionType;
var generated_265$1 = generated$1.tsIntersectionType;
var generated_266$1 = generated$1.tSConditionalType;
var generated_267$1 = generated$1.tsConditionalType;
var generated_268$1 = generated$1.tSInferType;
var generated_269$1 = generated$1.tsInferType;
var generated_270$1 = generated$1.tSParenthesizedType;
var generated_271$1 = generated$1.tsParenthesizedType;
var generated_272$1 = generated$1.tSTypeOperator;
var generated_273$1 = generated$1.tsTypeOperator;
var generated_274$1 = generated$1.tSIndexedAccessType;
var generated_275$1 = generated$1.tsIndexedAccessType;
var generated_276$1 = generated$1.tSMappedType;
var generated_277$1 = generated$1.tsMappedType;
var generated_278$1 = generated$1.tSLiteralType;
var generated_279$1 = generated$1.tsLiteralType;
var generated_280$1 = generated$1.tSExpressionWithTypeArguments;
var generated_281$1 = generated$1.tsExpressionWithTypeArguments;
var generated_282$1 = generated$1.tSInterfaceDeclaration;
var generated_283$1 = generated$1.tsInterfaceDeclaration;
var generated_284$1 = generated$1.tSInterfaceBody;
var generated_285$1 = generated$1.tsInterfaceBody;
var generated_286$1 = generated$1.tSTypeAliasDeclaration;
var generated_287$1 = generated$1.tsTypeAliasDeclaration;
var generated_288$1 = generated$1.tSAsExpression;
var generated_289$1 = generated$1.tsAsExpression;
var generated_290$1 = generated$1.tSTypeAssertion;
var generated_291$1 = generated$1.tsTypeAssertion;
var generated_292$1 = generated$1.tSEnumDeclaration;
var generated_293 = generated$1.tsEnumDeclaration;
var generated_294 = generated$1.tSEnumMember;
var generated_295 = generated$1.tsEnumMember;
var generated_296 = generated$1.tSModuleDeclaration;
var generated_297 = generated$1.tsModuleDeclaration;
var generated_298 = generated$1.tSModuleBlock;
var generated_299 = generated$1.tsModuleBlock;
var generated_300 = generated$1.tSImportType;
var generated_301 = generated$1.tsImportType;
var generated_302 = generated$1.tSImportEqualsDeclaration;
var generated_303 = generated$1.tsImportEqualsDeclaration;
var generated_304 = generated$1.tSExternalModuleReference;
var generated_305 = generated$1.tsExternalModuleReference;
var generated_306 = generated$1.tSNonNullExpression;
var generated_307 = generated$1.tsNonNullExpression;
var generated_308 = generated$1.tSExportAssignment;
var generated_309 = generated$1.tsExportAssignment;
var generated_310 = generated$1.tSNamespaceExportDeclaration;
var generated_311 = generated$1.tsNamespaceExportDeclaration;
var generated_312 = generated$1.tSTypeAnnotation;
var generated_313 = generated$1.tsTypeAnnotation;
var generated_314 = generated$1.tSTypeParameterInstantiation;
var generated_315 = generated$1.tsTypeParameterInstantiation;
var generated_316 = generated$1.tSTypeParameterDeclaration;
var generated_317 = generated$1.tsTypeParameterDeclaration;
var generated_318 = generated$1.tSTypeParameter;
var generated_319 = generated$1.tsTypeParameter;
var generated_320 = generated$1.numberLiteral;
var generated_321 = generated$1.regexLiteral;
var generated_322 = generated$1.restProperty;
var generated_323 = generated$1.spreadProperty;

var cleanJSXElementLiteralChild_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cleanJSXElementLiteralChild;



function cleanJSXElementLiteralChild(child, args) {
  const lines = child.value.split(/\r\n|\n|\r/);
  let lastNonEmptyLine = 0;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].match(/[^ \t]/)) {
      lastNonEmptyLine = i;
    }
  }

  let str = "";

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const isFirstLine = i === 0;
    const isLastLine = i === lines.length - 1;
    const isLastNonEmptyLine = i === lastNonEmptyLine;
    let trimmedLine = line.replace(/\t/g, " ");

    if (!isFirstLine) {
      trimmedLine = trimmedLine.replace(/^[ ]+/, "");
    }

    if (!isLastLine) {
      trimmedLine = trimmedLine.replace(/[ ]+$/, "");
    }

    if (trimmedLine) {
      if (!isLastNonEmptyLine) {
        trimmedLine += " ";
      }

      str += trimmedLine;
    }
  }

  if (str) args.push((0, generated$1.stringLiteral)(str));
}
});

unwrapExports(cleanJSXElementLiteralChild_1);

var buildChildren_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildChildren;



var _cleanJSXElementLiteralChild = _interopRequireDefault(cleanJSXElementLiteralChild_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function buildChildren(node) {
  const elements = [];

  for (let i = 0; i < node.children.length; i++) {
    let child = node.children[i];

    if ((0, generated.isJSXText)(child)) {
      (0, _cleanJSXElementLiteralChild.default)(child, elements);
      continue;
    }

    if ((0, generated.isJSXExpressionContainer)(child)) child = child.expression;
    if ((0, generated.isJSXEmptyExpression)(child)) continue;
    elements.push(child);
  }

  return elements;
}
});

unwrapExports(buildChildren_1);

var isNode_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNode;



function isNode(node) {
  return !!(node && definitions.VISITOR_KEYS[node.type]);
}
});

unwrapExports(isNode_1);

var assertNode_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assertNode;

var _isNode = _interopRequireDefault(isNode_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function assertNode(node) {
  if (!(0, _isNode.default)(node)) {
    var _node$type;

    const type = (_node$type = node == null ? void 0 : node.type) != null ? _node$type : JSON.stringify(node);
    throw new TypeError(`Not a valid node of type "${type}"`);
  }
}
});

unwrapExports(assertNode_1);

var generated$2 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertArrayExpression = assertArrayExpression;
exports.assertAssignmentExpression = assertAssignmentExpression;
exports.assertBinaryExpression = assertBinaryExpression;
exports.assertInterpreterDirective = assertInterpreterDirective;
exports.assertDirective = assertDirective;
exports.assertDirectiveLiteral = assertDirectiveLiteral;
exports.assertBlockStatement = assertBlockStatement;
exports.assertBreakStatement = assertBreakStatement;
exports.assertCallExpression = assertCallExpression;
exports.assertCatchClause = assertCatchClause;
exports.assertConditionalExpression = assertConditionalExpression;
exports.assertContinueStatement = assertContinueStatement;
exports.assertDebuggerStatement = assertDebuggerStatement;
exports.assertDoWhileStatement = assertDoWhileStatement;
exports.assertEmptyStatement = assertEmptyStatement;
exports.assertExpressionStatement = assertExpressionStatement;
exports.assertFile = assertFile;
exports.assertForInStatement = assertForInStatement;
exports.assertForStatement = assertForStatement;
exports.assertFunctionDeclaration = assertFunctionDeclaration;
exports.assertFunctionExpression = assertFunctionExpression;
exports.assertIdentifier = assertIdentifier;
exports.assertIfStatement = assertIfStatement;
exports.assertLabeledStatement = assertLabeledStatement;
exports.assertStringLiteral = assertStringLiteral;
exports.assertNumericLiteral = assertNumericLiteral;
exports.assertNullLiteral = assertNullLiteral;
exports.assertBooleanLiteral = assertBooleanLiteral;
exports.assertRegExpLiteral = assertRegExpLiteral;
exports.assertLogicalExpression = assertLogicalExpression;
exports.assertMemberExpression = assertMemberExpression;
exports.assertNewExpression = assertNewExpression;
exports.assertProgram = assertProgram;
exports.assertObjectExpression = assertObjectExpression;
exports.assertObjectMethod = assertObjectMethod;
exports.assertObjectProperty = assertObjectProperty;
exports.assertRestElement = assertRestElement;
exports.assertReturnStatement = assertReturnStatement;
exports.assertSequenceExpression = assertSequenceExpression;
exports.assertParenthesizedExpression = assertParenthesizedExpression;
exports.assertSwitchCase = assertSwitchCase;
exports.assertSwitchStatement = assertSwitchStatement;
exports.assertThisExpression = assertThisExpression;
exports.assertThrowStatement = assertThrowStatement;
exports.assertTryStatement = assertTryStatement;
exports.assertUnaryExpression = assertUnaryExpression;
exports.assertUpdateExpression = assertUpdateExpression;
exports.assertVariableDeclaration = assertVariableDeclaration;
exports.assertVariableDeclarator = assertVariableDeclarator;
exports.assertWhileStatement = assertWhileStatement;
exports.assertWithStatement = assertWithStatement;
exports.assertAssignmentPattern = assertAssignmentPattern;
exports.assertArrayPattern = assertArrayPattern;
exports.assertArrowFunctionExpression = assertArrowFunctionExpression;
exports.assertClassBody = assertClassBody;
exports.assertClassExpression = assertClassExpression;
exports.assertClassDeclaration = assertClassDeclaration;
exports.assertExportAllDeclaration = assertExportAllDeclaration;
exports.assertExportDefaultDeclaration = assertExportDefaultDeclaration;
exports.assertExportNamedDeclaration = assertExportNamedDeclaration;
exports.assertExportSpecifier = assertExportSpecifier;
exports.assertForOfStatement = assertForOfStatement;
exports.assertImportDeclaration = assertImportDeclaration;
exports.assertImportDefaultSpecifier = assertImportDefaultSpecifier;
exports.assertImportNamespaceSpecifier = assertImportNamespaceSpecifier;
exports.assertImportSpecifier = assertImportSpecifier;
exports.assertMetaProperty = assertMetaProperty;
exports.assertClassMethod = assertClassMethod;
exports.assertObjectPattern = assertObjectPattern;
exports.assertSpreadElement = assertSpreadElement;
exports.assertSuper = assertSuper;
exports.assertTaggedTemplateExpression = assertTaggedTemplateExpression;
exports.assertTemplateElement = assertTemplateElement;
exports.assertTemplateLiteral = assertTemplateLiteral;
exports.assertYieldExpression = assertYieldExpression;
exports.assertAwaitExpression = assertAwaitExpression;
exports.assertImport = assertImport;
exports.assertBigIntLiteral = assertBigIntLiteral;
exports.assertExportNamespaceSpecifier = assertExportNamespaceSpecifier;
exports.assertOptionalMemberExpression = assertOptionalMemberExpression;
exports.assertOptionalCallExpression = assertOptionalCallExpression;
exports.assertAnyTypeAnnotation = assertAnyTypeAnnotation;
exports.assertArrayTypeAnnotation = assertArrayTypeAnnotation;
exports.assertBooleanTypeAnnotation = assertBooleanTypeAnnotation;
exports.assertBooleanLiteralTypeAnnotation = assertBooleanLiteralTypeAnnotation;
exports.assertNullLiteralTypeAnnotation = assertNullLiteralTypeAnnotation;
exports.assertClassImplements = assertClassImplements;
exports.assertDeclareClass = assertDeclareClass;
exports.assertDeclareFunction = assertDeclareFunction;
exports.assertDeclareInterface = assertDeclareInterface;
exports.assertDeclareModule = assertDeclareModule;
exports.assertDeclareModuleExports = assertDeclareModuleExports;
exports.assertDeclareTypeAlias = assertDeclareTypeAlias;
exports.assertDeclareOpaqueType = assertDeclareOpaqueType;
exports.assertDeclareVariable = assertDeclareVariable;
exports.assertDeclareExportDeclaration = assertDeclareExportDeclaration;
exports.assertDeclareExportAllDeclaration = assertDeclareExportAllDeclaration;
exports.assertDeclaredPredicate = assertDeclaredPredicate;
exports.assertExistsTypeAnnotation = assertExistsTypeAnnotation;
exports.assertFunctionTypeAnnotation = assertFunctionTypeAnnotation;
exports.assertFunctionTypeParam = assertFunctionTypeParam;
exports.assertGenericTypeAnnotation = assertGenericTypeAnnotation;
exports.assertInferredPredicate = assertInferredPredicate;
exports.assertInterfaceExtends = assertInterfaceExtends;
exports.assertInterfaceDeclaration = assertInterfaceDeclaration;
exports.assertInterfaceTypeAnnotation = assertInterfaceTypeAnnotation;
exports.assertIntersectionTypeAnnotation = assertIntersectionTypeAnnotation;
exports.assertMixedTypeAnnotation = assertMixedTypeAnnotation;
exports.assertEmptyTypeAnnotation = assertEmptyTypeAnnotation;
exports.assertNullableTypeAnnotation = assertNullableTypeAnnotation;
exports.assertNumberLiteralTypeAnnotation = assertNumberLiteralTypeAnnotation;
exports.assertNumberTypeAnnotation = assertNumberTypeAnnotation;
exports.assertObjectTypeAnnotation = assertObjectTypeAnnotation;
exports.assertObjectTypeInternalSlot = assertObjectTypeInternalSlot;
exports.assertObjectTypeCallProperty = assertObjectTypeCallProperty;
exports.assertObjectTypeIndexer = assertObjectTypeIndexer;
exports.assertObjectTypeProperty = assertObjectTypeProperty;
exports.assertObjectTypeSpreadProperty = assertObjectTypeSpreadProperty;
exports.assertOpaqueType = assertOpaqueType;
exports.assertQualifiedTypeIdentifier = assertQualifiedTypeIdentifier;
exports.assertStringLiteralTypeAnnotation = assertStringLiteralTypeAnnotation;
exports.assertStringTypeAnnotation = assertStringTypeAnnotation;
exports.assertSymbolTypeAnnotation = assertSymbolTypeAnnotation;
exports.assertThisTypeAnnotation = assertThisTypeAnnotation;
exports.assertTupleTypeAnnotation = assertTupleTypeAnnotation;
exports.assertTypeofTypeAnnotation = assertTypeofTypeAnnotation;
exports.assertTypeAlias = assertTypeAlias;
exports.assertTypeAnnotation = assertTypeAnnotation;
exports.assertTypeCastExpression = assertTypeCastExpression;
exports.assertTypeParameter = assertTypeParameter;
exports.assertTypeParameterDeclaration = assertTypeParameterDeclaration;
exports.assertTypeParameterInstantiation = assertTypeParameterInstantiation;
exports.assertUnionTypeAnnotation = assertUnionTypeAnnotation;
exports.assertVariance = assertVariance;
exports.assertVoidTypeAnnotation = assertVoidTypeAnnotation;
exports.assertEnumDeclaration = assertEnumDeclaration;
exports.assertEnumBooleanBody = assertEnumBooleanBody;
exports.assertEnumNumberBody = assertEnumNumberBody;
exports.assertEnumStringBody = assertEnumStringBody;
exports.assertEnumSymbolBody = assertEnumSymbolBody;
exports.assertEnumBooleanMember = assertEnumBooleanMember;
exports.assertEnumNumberMember = assertEnumNumberMember;
exports.assertEnumStringMember = assertEnumStringMember;
exports.assertEnumDefaultedMember = assertEnumDefaultedMember;
exports.assertJSXAttribute = assertJSXAttribute;
exports.assertJSXClosingElement = assertJSXClosingElement;
exports.assertJSXElement = assertJSXElement;
exports.assertJSXEmptyExpression = assertJSXEmptyExpression;
exports.assertJSXExpressionContainer = assertJSXExpressionContainer;
exports.assertJSXSpreadChild = assertJSXSpreadChild;
exports.assertJSXIdentifier = assertJSXIdentifier;
exports.assertJSXMemberExpression = assertJSXMemberExpression;
exports.assertJSXNamespacedName = assertJSXNamespacedName;
exports.assertJSXOpeningElement = assertJSXOpeningElement;
exports.assertJSXSpreadAttribute = assertJSXSpreadAttribute;
exports.assertJSXText = assertJSXText;
exports.assertJSXFragment = assertJSXFragment;
exports.assertJSXOpeningFragment = assertJSXOpeningFragment;
exports.assertJSXClosingFragment = assertJSXClosingFragment;
exports.assertNoop = assertNoop;
exports.assertPlaceholder = assertPlaceholder;
exports.assertV8IntrinsicIdentifier = assertV8IntrinsicIdentifier;
exports.assertArgumentPlaceholder = assertArgumentPlaceholder;
exports.assertBindExpression = assertBindExpression;
exports.assertClassProperty = assertClassProperty;
exports.assertPipelineTopicExpression = assertPipelineTopicExpression;
exports.assertPipelineBareFunction = assertPipelineBareFunction;
exports.assertPipelinePrimaryTopicReference = assertPipelinePrimaryTopicReference;
exports.assertClassPrivateProperty = assertClassPrivateProperty;
exports.assertClassPrivateMethod = assertClassPrivateMethod;
exports.assertImportAttribute = assertImportAttribute;
exports.assertDecorator = assertDecorator;
exports.assertDoExpression = assertDoExpression;
exports.assertExportDefaultSpecifier = assertExportDefaultSpecifier;
exports.assertPrivateName = assertPrivateName;
exports.assertRecordExpression = assertRecordExpression;
exports.assertTupleExpression = assertTupleExpression;
exports.assertDecimalLiteral = assertDecimalLiteral;
exports.assertStaticBlock = assertStaticBlock;
exports.assertModuleExpression = assertModuleExpression;
exports.assertTSParameterProperty = assertTSParameterProperty;
exports.assertTSDeclareFunction = assertTSDeclareFunction;
exports.assertTSDeclareMethod = assertTSDeclareMethod;
exports.assertTSQualifiedName = assertTSQualifiedName;
exports.assertTSCallSignatureDeclaration = assertTSCallSignatureDeclaration;
exports.assertTSConstructSignatureDeclaration = assertTSConstructSignatureDeclaration;
exports.assertTSPropertySignature = assertTSPropertySignature;
exports.assertTSMethodSignature = assertTSMethodSignature;
exports.assertTSIndexSignature = assertTSIndexSignature;
exports.assertTSAnyKeyword = assertTSAnyKeyword;
exports.assertTSBooleanKeyword = assertTSBooleanKeyword;
exports.assertTSBigIntKeyword = assertTSBigIntKeyword;
exports.assertTSIntrinsicKeyword = assertTSIntrinsicKeyword;
exports.assertTSNeverKeyword = assertTSNeverKeyword;
exports.assertTSNullKeyword = assertTSNullKeyword;
exports.assertTSNumberKeyword = assertTSNumberKeyword;
exports.assertTSObjectKeyword = assertTSObjectKeyword;
exports.assertTSStringKeyword = assertTSStringKeyword;
exports.assertTSSymbolKeyword = assertTSSymbolKeyword;
exports.assertTSUndefinedKeyword = assertTSUndefinedKeyword;
exports.assertTSUnknownKeyword = assertTSUnknownKeyword;
exports.assertTSVoidKeyword = assertTSVoidKeyword;
exports.assertTSThisType = assertTSThisType;
exports.assertTSFunctionType = assertTSFunctionType;
exports.assertTSConstructorType = assertTSConstructorType;
exports.assertTSTypeReference = assertTSTypeReference;
exports.assertTSTypePredicate = assertTSTypePredicate;
exports.assertTSTypeQuery = assertTSTypeQuery;
exports.assertTSTypeLiteral = assertTSTypeLiteral;
exports.assertTSArrayType = assertTSArrayType;
exports.assertTSTupleType = assertTSTupleType;
exports.assertTSOptionalType = assertTSOptionalType;
exports.assertTSRestType = assertTSRestType;
exports.assertTSNamedTupleMember = assertTSNamedTupleMember;
exports.assertTSUnionType = assertTSUnionType;
exports.assertTSIntersectionType = assertTSIntersectionType;
exports.assertTSConditionalType = assertTSConditionalType;
exports.assertTSInferType = assertTSInferType;
exports.assertTSParenthesizedType = assertTSParenthesizedType;
exports.assertTSTypeOperator = assertTSTypeOperator;
exports.assertTSIndexedAccessType = assertTSIndexedAccessType;
exports.assertTSMappedType = assertTSMappedType;
exports.assertTSLiteralType = assertTSLiteralType;
exports.assertTSExpressionWithTypeArguments = assertTSExpressionWithTypeArguments;
exports.assertTSInterfaceDeclaration = assertTSInterfaceDeclaration;
exports.assertTSInterfaceBody = assertTSInterfaceBody;
exports.assertTSTypeAliasDeclaration = assertTSTypeAliasDeclaration;
exports.assertTSAsExpression = assertTSAsExpression;
exports.assertTSTypeAssertion = assertTSTypeAssertion;
exports.assertTSEnumDeclaration = assertTSEnumDeclaration;
exports.assertTSEnumMember = assertTSEnumMember;
exports.assertTSModuleDeclaration = assertTSModuleDeclaration;
exports.assertTSModuleBlock = assertTSModuleBlock;
exports.assertTSImportType = assertTSImportType;
exports.assertTSImportEqualsDeclaration = assertTSImportEqualsDeclaration;
exports.assertTSExternalModuleReference = assertTSExternalModuleReference;
exports.assertTSNonNullExpression = assertTSNonNullExpression;
exports.assertTSExportAssignment = assertTSExportAssignment;
exports.assertTSNamespaceExportDeclaration = assertTSNamespaceExportDeclaration;
exports.assertTSTypeAnnotation = assertTSTypeAnnotation;
exports.assertTSTypeParameterInstantiation = assertTSTypeParameterInstantiation;
exports.assertTSTypeParameterDeclaration = assertTSTypeParameterDeclaration;
exports.assertTSTypeParameter = assertTSTypeParameter;
exports.assertExpression = assertExpression;
exports.assertBinary = assertBinary;
exports.assertScopable = assertScopable;
exports.assertBlockParent = assertBlockParent;
exports.assertBlock = assertBlock;
exports.assertStatement = assertStatement;
exports.assertTerminatorless = assertTerminatorless;
exports.assertCompletionStatement = assertCompletionStatement;
exports.assertConditional = assertConditional;
exports.assertLoop = assertLoop;
exports.assertWhile = assertWhile;
exports.assertExpressionWrapper = assertExpressionWrapper;
exports.assertFor = assertFor;
exports.assertForXStatement = assertForXStatement;
exports.assertFunction = assertFunction;
exports.assertFunctionParent = assertFunctionParent;
exports.assertPureish = assertPureish;
exports.assertDeclaration = assertDeclaration;
exports.assertPatternLike = assertPatternLike;
exports.assertLVal = assertLVal;
exports.assertTSEntityName = assertTSEntityName;
exports.assertLiteral = assertLiteral;
exports.assertImmutable = assertImmutable;
exports.assertUserWhitespacable = assertUserWhitespacable;
exports.assertMethod = assertMethod;
exports.assertObjectMember = assertObjectMember;
exports.assertProperty = assertProperty;
exports.assertUnaryLike = assertUnaryLike;
exports.assertPattern = assertPattern;
exports.assertClass = assertClass;
exports.assertModuleDeclaration = assertModuleDeclaration;
exports.assertExportDeclaration = assertExportDeclaration;
exports.assertModuleSpecifier = assertModuleSpecifier;
exports.assertFlow = assertFlow;
exports.assertFlowType = assertFlowType;
exports.assertFlowBaseAnnotation = assertFlowBaseAnnotation;
exports.assertFlowDeclaration = assertFlowDeclaration;
exports.assertFlowPredicate = assertFlowPredicate;
exports.assertEnumBody = assertEnumBody;
exports.assertEnumMember = assertEnumMember;
exports.assertJSX = assertJSX;
exports.assertPrivate = assertPrivate;
exports.assertTSTypeElement = assertTSTypeElement;
exports.assertTSType = assertTSType;
exports.assertTSBaseType = assertTSBaseType;
exports.assertNumberLiteral = assertNumberLiteral;
exports.assertRegexLiteral = assertRegexLiteral;
exports.assertRestProperty = assertRestProperty;
exports.assertSpreadProperty = assertSpreadProperty;

var _is = _interopRequireDefault(is_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function assert(type, node, opts) {
  if (!(0, _is.default)(type, node, opts)) {
    throw new Error(`Expected type "${type}" with option ${JSON.stringify(opts)}, ` + `but instead got "${node.type}".`);
  }
}

function assertArrayExpression(node, opts) {
  assert("ArrayExpression", node, opts);
}

function assertAssignmentExpression(node, opts) {
  assert("AssignmentExpression", node, opts);
}

function assertBinaryExpression(node, opts) {
  assert("BinaryExpression", node, opts);
}

function assertInterpreterDirective(node, opts) {
  assert("InterpreterDirective", node, opts);
}

function assertDirective(node, opts) {
  assert("Directive", node, opts);
}

function assertDirectiveLiteral(node, opts) {
  assert("DirectiveLiteral", node, opts);
}

function assertBlockStatement(node, opts) {
  assert("BlockStatement", node, opts);
}

function assertBreakStatement(node, opts) {
  assert("BreakStatement", node, opts);
}

function assertCallExpression(node, opts) {
  assert("CallExpression", node, opts);
}

function assertCatchClause(node, opts) {
  assert("CatchClause", node, opts);
}

function assertConditionalExpression(node, opts) {
  assert("ConditionalExpression", node, opts);
}

function assertContinueStatement(node, opts) {
  assert("ContinueStatement", node, opts);
}

function assertDebuggerStatement(node, opts) {
  assert("DebuggerStatement", node, opts);
}

function assertDoWhileStatement(node, opts) {
  assert("DoWhileStatement", node, opts);
}

function assertEmptyStatement(node, opts) {
  assert("EmptyStatement", node, opts);
}

function assertExpressionStatement(node, opts) {
  assert("ExpressionStatement", node, opts);
}

function assertFile(node, opts) {
  assert("File", node, opts);
}

function assertForInStatement(node, opts) {
  assert("ForInStatement", node, opts);
}

function assertForStatement(node, opts) {
  assert("ForStatement", node, opts);
}

function assertFunctionDeclaration(node, opts) {
  assert("FunctionDeclaration", node, opts);
}

function assertFunctionExpression(node, opts) {
  assert("FunctionExpression", node, opts);
}

function assertIdentifier(node, opts) {
  assert("Identifier", node, opts);
}

function assertIfStatement(node, opts) {
  assert("IfStatement", node, opts);
}

function assertLabeledStatement(node, opts) {
  assert("LabeledStatement", node, opts);
}

function assertStringLiteral(node, opts) {
  assert("StringLiteral", node, opts);
}

function assertNumericLiteral(node, opts) {
  assert("NumericLiteral", node, opts);
}

function assertNullLiteral(node, opts) {
  assert("NullLiteral", node, opts);
}

function assertBooleanLiteral(node, opts) {
  assert("BooleanLiteral", node, opts);
}

function assertRegExpLiteral(node, opts) {
  assert("RegExpLiteral", node, opts);
}

function assertLogicalExpression(node, opts) {
  assert("LogicalExpression", node, opts);
}

function assertMemberExpression(node, opts) {
  assert("MemberExpression", node, opts);
}

function assertNewExpression(node, opts) {
  assert("NewExpression", node, opts);
}

function assertProgram(node, opts) {
  assert("Program", node, opts);
}

function assertObjectExpression(node, opts) {
  assert("ObjectExpression", node, opts);
}

function assertObjectMethod(node, opts) {
  assert("ObjectMethod", node, opts);
}

function assertObjectProperty(node, opts) {
  assert("ObjectProperty", node, opts);
}

function assertRestElement(node, opts) {
  assert("RestElement", node, opts);
}

function assertReturnStatement(node, opts) {
  assert("ReturnStatement", node, opts);
}

function assertSequenceExpression(node, opts) {
  assert("SequenceExpression", node, opts);
}

function assertParenthesizedExpression(node, opts) {
  assert("ParenthesizedExpression", node, opts);
}

function assertSwitchCase(node, opts) {
  assert("SwitchCase", node, opts);
}

function assertSwitchStatement(node, opts) {
  assert("SwitchStatement", node, opts);
}

function assertThisExpression(node, opts) {
  assert("ThisExpression", node, opts);
}

function assertThrowStatement(node, opts) {
  assert("ThrowStatement", node, opts);
}

function assertTryStatement(node, opts) {
  assert("TryStatement", node, opts);
}

function assertUnaryExpression(node, opts) {
  assert("UnaryExpression", node, opts);
}

function assertUpdateExpression(node, opts) {
  assert("UpdateExpression", node, opts);
}

function assertVariableDeclaration(node, opts) {
  assert("VariableDeclaration", node, opts);
}

function assertVariableDeclarator(node, opts) {
  assert("VariableDeclarator", node, opts);
}

function assertWhileStatement(node, opts) {
  assert("WhileStatement", node, opts);
}

function assertWithStatement(node, opts) {
  assert("WithStatement", node, opts);
}

function assertAssignmentPattern(node, opts) {
  assert("AssignmentPattern", node, opts);
}

function assertArrayPattern(node, opts) {
  assert("ArrayPattern", node, opts);
}

function assertArrowFunctionExpression(node, opts) {
  assert("ArrowFunctionExpression", node, opts);
}

function assertClassBody(node, opts) {
  assert("ClassBody", node, opts);
}

function assertClassExpression(node, opts) {
  assert("ClassExpression", node, opts);
}

function assertClassDeclaration(node, opts) {
  assert("ClassDeclaration", node, opts);
}

function assertExportAllDeclaration(node, opts) {
  assert("ExportAllDeclaration", node, opts);
}

function assertExportDefaultDeclaration(node, opts) {
  assert("ExportDefaultDeclaration", node, opts);
}

function assertExportNamedDeclaration(node, opts) {
  assert("ExportNamedDeclaration", node, opts);
}

function assertExportSpecifier(node, opts) {
  assert("ExportSpecifier", node, opts);
}

function assertForOfStatement(node, opts) {
  assert("ForOfStatement", node, opts);
}

function assertImportDeclaration(node, opts) {
  assert("ImportDeclaration", node, opts);
}

function assertImportDefaultSpecifier(node, opts) {
  assert("ImportDefaultSpecifier", node, opts);
}

function assertImportNamespaceSpecifier(node, opts) {
  assert("ImportNamespaceSpecifier", node, opts);
}

function assertImportSpecifier(node, opts) {
  assert("ImportSpecifier", node, opts);
}

function assertMetaProperty(node, opts) {
  assert("MetaProperty", node, opts);
}

function assertClassMethod(node, opts) {
  assert("ClassMethod", node, opts);
}

function assertObjectPattern(node, opts) {
  assert("ObjectPattern", node, opts);
}

function assertSpreadElement(node, opts) {
  assert("SpreadElement", node, opts);
}

function assertSuper(node, opts) {
  assert("Super", node, opts);
}

function assertTaggedTemplateExpression(node, opts) {
  assert("TaggedTemplateExpression", node, opts);
}

function assertTemplateElement(node, opts) {
  assert("TemplateElement", node, opts);
}

function assertTemplateLiteral(node, opts) {
  assert("TemplateLiteral", node, opts);
}

function assertYieldExpression(node, opts) {
  assert("YieldExpression", node, opts);
}

function assertAwaitExpression(node, opts) {
  assert("AwaitExpression", node, opts);
}

function assertImport(node, opts) {
  assert("Import", node, opts);
}

function assertBigIntLiteral(node, opts) {
  assert("BigIntLiteral", node, opts);
}

function assertExportNamespaceSpecifier(node, opts) {
  assert("ExportNamespaceSpecifier", node, opts);
}

function assertOptionalMemberExpression(node, opts) {
  assert("OptionalMemberExpression", node, opts);
}

function assertOptionalCallExpression(node, opts) {
  assert("OptionalCallExpression", node, opts);
}

function assertAnyTypeAnnotation(node, opts) {
  assert("AnyTypeAnnotation", node, opts);
}

function assertArrayTypeAnnotation(node, opts) {
  assert("ArrayTypeAnnotation", node, opts);
}

function assertBooleanTypeAnnotation(node, opts) {
  assert("BooleanTypeAnnotation", node, opts);
}

function assertBooleanLiteralTypeAnnotation(node, opts) {
  assert("BooleanLiteralTypeAnnotation", node, opts);
}

function assertNullLiteralTypeAnnotation(node, opts) {
  assert("NullLiteralTypeAnnotation", node, opts);
}

function assertClassImplements(node, opts) {
  assert("ClassImplements", node, opts);
}

function assertDeclareClass(node, opts) {
  assert("DeclareClass", node, opts);
}

function assertDeclareFunction(node, opts) {
  assert("DeclareFunction", node, opts);
}

function assertDeclareInterface(node, opts) {
  assert("DeclareInterface", node, opts);
}

function assertDeclareModule(node, opts) {
  assert("DeclareModule", node, opts);
}

function assertDeclareModuleExports(node, opts) {
  assert("DeclareModuleExports", node, opts);
}

function assertDeclareTypeAlias(node, opts) {
  assert("DeclareTypeAlias", node, opts);
}

function assertDeclareOpaqueType(node, opts) {
  assert("DeclareOpaqueType", node, opts);
}

function assertDeclareVariable(node, opts) {
  assert("DeclareVariable", node, opts);
}

function assertDeclareExportDeclaration(node, opts) {
  assert("DeclareExportDeclaration", node, opts);
}

function assertDeclareExportAllDeclaration(node, opts) {
  assert("DeclareExportAllDeclaration", node, opts);
}

function assertDeclaredPredicate(node, opts) {
  assert("DeclaredPredicate", node, opts);
}

function assertExistsTypeAnnotation(node, opts) {
  assert("ExistsTypeAnnotation", node, opts);
}

function assertFunctionTypeAnnotation(node, opts) {
  assert("FunctionTypeAnnotation", node, opts);
}

function assertFunctionTypeParam(node, opts) {
  assert("FunctionTypeParam", node, opts);
}

function assertGenericTypeAnnotation(node, opts) {
  assert("GenericTypeAnnotation", node, opts);
}

function assertInferredPredicate(node, opts) {
  assert("InferredPredicate", node, opts);
}

function assertInterfaceExtends(node, opts) {
  assert("InterfaceExtends", node, opts);
}

function assertInterfaceDeclaration(node, opts) {
  assert("InterfaceDeclaration", node, opts);
}

function assertInterfaceTypeAnnotation(node, opts) {
  assert("InterfaceTypeAnnotation", node, opts);
}

function assertIntersectionTypeAnnotation(node, opts) {
  assert("IntersectionTypeAnnotation", node, opts);
}

function assertMixedTypeAnnotation(node, opts) {
  assert("MixedTypeAnnotation", node, opts);
}

function assertEmptyTypeAnnotation(node, opts) {
  assert("EmptyTypeAnnotation", node, opts);
}

function assertNullableTypeAnnotation(node, opts) {
  assert("NullableTypeAnnotation", node, opts);
}

function assertNumberLiteralTypeAnnotation(node, opts) {
  assert("NumberLiteralTypeAnnotation", node, opts);
}

function assertNumberTypeAnnotation(node, opts) {
  assert("NumberTypeAnnotation", node, opts);
}

function assertObjectTypeAnnotation(node, opts) {
  assert("ObjectTypeAnnotation", node, opts);
}

function assertObjectTypeInternalSlot(node, opts) {
  assert("ObjectTypeInternalSlot", node, opts);
}

function assertObjectTypeCallProperty(node, opts) {
  assert("ObjectTypeCallProperty", node, opts);
}

function assertObjectTypeIndexer(node, opts) {
  assert("ObjectTypeIndexer", node, opts);
}

function assertObjectTypeProperty(node, opts) {
  assert("ObjectTypeProperty", node, opts);
}

function assertObjectTypeSpreadProperty(node, opts) {
  assert("ObjectTypeSpreadProperty", node, opts);
}

function assertOpaqueType(node, opts) {
  assert("OpaqueType", node, opts);
}

function assertQualifiedTypeIdentifier(node, opts) {
  assert("QualifiedTypeIdentifier", node, opts);
}

function assertStringLiteralTypeAnnotation(node, opts) {
  assert("StringLiteralTypeAnnotation", node, opts);
}

function assertStringTypeAnnotation(node, opts) {
  assert("StringTypeAnnotation", node, opts);
}

function assertSymbolTypeAnnotation(node, opts) {
  assert("SymbolTypeAnnotation", node, opts);
}

function assertThisTypeAnnotation(node, opts) {
  assert("ThisTypeAnnotation", node, opts);
}

function assertTupleTypeAnnotation(node, opts) {
  assert("TupleTypeAnnotation", node, opts);
}

function assertTypeofTypeAnnotation(node, opts) {
  assert("TypeofTypeAnnotation", node, opts);
}

function assertTypeAlias(node, opts) {
  assert("TypeAlias", node, opts);
}

function assertTypeAnnotation(node, opts) {
  assert("TypeAnnotation", node, opts);
}

function assertTypeCastExpression(node, opts) {
  assert("TypeCastExpression", node, opts);
}

function assertTypeParameter(node, opts) {
  assert("TypeParameter", node, opts);
}

function assertTypeParameterDeclaration(node, opts) {
  assert("TypeParameterDeclaration", node, opts);
}

function assertTypeParameterInstantiation(node, opts) {
  assert("TypeParameterInstantiation", node, opts);
}

function assertUnionTypeAnnotation(node, opts) {
  assert("UnionTypeAnnotation", node, opts);
}

function assertVariance(node, opts) {
  assert("Variance", node, opts);
}

function assertVoidTypeAnnotation(node, opts) {
  assert("VoidTypeAnnotation", node, opts);
}

function assertEnumDeclaration(node, opts) {
  assert("EnumDeclaration", node, opts);
}

function assertEnumBooleanBody(node, opts) {
  assert("EnumBooleanBody", node, opts);
}

function assertEnumNumberBody(node, opts) {
  assert("EnumNumberBody", node, opts);
}

function assertEnumStringBody(node, opts) {
  assert("EnumStringBody", node, opts);
}

function assertEnumSymbolBody(node, opts) {
  assert("EnumSymbolBody", node, opts);
}

function assertEnumBooleanMember(node, opts) {
  assert("EnumBooleanMember", node, opts);
}

function assertEnumNumberMember(node, opts) {
  assert("EnumNumberMember", node, opts);
}

function assertEnumStringMember(node, opts) {
  assert("EnumStringMember", node, opts);
}

function assertEnumDefaultedMember(node, opts) {
  assert("EnumDefaultedMember", node, opts);
}

function assertJSXAttribute(node, opts) {
  assert("JSXAttribute", node, opts);
}

function assertJSXClosingElement(node, opts) {
  assert("JSXClosingElement", node, opts);
}

function assertJSXElement(node, opts) {
  assert("JSXElement", node, opts);
}

function assertJSXEmptyExpression(node, opts) {
  assert("JSXEmptyExpression", node, opts);
}

function assertJSXExpressionContainer(node, opts) {
  assert("JSXExpressionContainer", node, opts);
}

function assertJSXSpreadChild(node, opts) {
  assert("JSXSpreadChild", node, opts);
}

function assertJSXIdentifier(node, opts) {
  assert("JSXIdentifier", node, opts);
}

function assertJSXMemberExpression(node, opts) {
  assert("JSXMemberExpression", node, opts);
}

function assertJSXNamespacedName(node, opts) {
  assert("JSXNamespacedName", node, opts);
}

function assertJSXOpeningElement(node, opts) {
  assert("JSXOpeningElement", node, opts);
}

function assertJSXSpreadAttribute(node, opts) {
  assert("JSXSpreadAttribute", node, opts);
}

function assertJSXText(node, opts) {
  assert("JSXText", node, opts);
}

function assertJSXFragment(node, opts) {
  assert("JSXFragment", node, opts);
}

function assertJSXOpeningFragment(node, opts) {
  assert("JSXOpeningFragment", node, opts);
}

function assertJSXClosingFragment(node, opts) {
  assert("JSXClosingFragment", node, opts);
}

function assertNoop(node, opts) {
  assert("Noop", node, opts);
}

function assertPlaceholder(node, opts) {
  assert("Placeholder", node, opts);
}

function assertV8IntrinsicIdentifier(node, opts) {
  assert("V8IntrinsicIdentifier", node, opts);
}

function assertArgumentPlaceholder(node, opts) {
  assert("ArgumentPlaceholder", node, opts);
}

function assertBindExpression(node, opts) {
  assert("BindExpression", node, opts);
}

function assertClassProperty(node, opts) {
  assert("ClassProperty", node, opts);
}

function assertPipelineTopicExpression(node, opts) {
  assert("PipelineTopicExpression", node, opts);
}

function assertPipelineBareFunction(node, opts) {
  assert("PipelineBareFunction", node, opts);
}

function assertPipelinePrimaryTopicReference(node, opts) {
  assert("PipelinePrimaryTopicReference", node, opts);
}

function assertClassPrivateProperty(node, opts) {
  assert("ClassPrivateProperty", node, opts);
}

function assertClassPrivateMethod(node, opts) {
  assert("ClassPrivateMethod", node, opts);
}

function assertImportAttribute(node, opts) {
  assert("ImportAttribute", node, opts);
}

function assertDecorator(node, opts) {
  assert("Decorator", node, opts);
}

function assertDoExpression(node, opts) {
  assert("DoExpression", node, opts);
}

function assertExportDefaultSpecifier(node, opts) {
  assert("ExportDefaultSpecifier", node, opts);
}

function assertPrivateName(node, opts) {
  assert("PrivateName", node, opts);
}

function assertRecordExpression(node, opts) {
  assert("RecordExpression", node, opts);
}

function assertTupleExpression(node, opts) {
  assert("TupleExpression", node, opts);
}

function assertDecimalLiteral(node, opts) {
  assert("DecimalLiteral", node, opts);
}

function assertStaticBlock(node, opts) {
  assert("StaticBlock", node, opts);
}

function assertModuleExpression(node, opts) {
  assert("ModuleExpression", node, opts);
}

function assertTSParameterProperty(node, opts) {
  assert("TSParameterProperty", node, opts);
}

function assertTSDeclareFunction(node, opts) {
  assert("TSDeclareFunction", node, opts);
}

function assertTSDeclareMethod(node, opts) {
  assert("TSDeclareMethod", node, opts);
}

function assertTSQualifiedName(node, opts) {
  assert("TSQualifiedName", node, opts);
}

function assertTSCallSignatureDeclaration(node, opts) {
  assert("TSCallSignatureDeclaration", node, opts);
}

function assertTSConstructSignatureDeclaration(node, opts) {
  assert("TSConstructSignatureDeclaration", node, opts);
}

function assertTSPropertySignature(node, opts) {
  assert("TSPropertySignature", node, opts);
}

function assertTSMethodSignature(node, opts) {
  assert("TSMethodSignature", node, opts);
}

function assertTSIndexSignature(node, opts) {
  assert("TSIndexSignature", node, opts);
}

function assertTSAnyKeyword(node, opts) {
  assert("TSAnyKeyword", node, opts);
}

function assertTSBooleanKeyword(node, opts) {
  assert("TSBooleanKeyword", node, opts);
}

function assertTSBigIntKeyword(node, opts) {
  assert("TSBigIntKeyword", node, opts);
}

function assertTSIntrinsicKeyword(node, opts) {
  assert("TSIntrinsicKeyword", node, opts);
}

function assertTSNeverKeyword(node, opts) {
  assert("TSNeverKeyword", node, opts);
}

function assertTSNullKeyword(node, opts) {
  assert("TSNullKeyword", node, opts);
}

function assertTSNumberKeyword(node, opts) {
  assert("TSNumberKeyword", node, opts);
}

function assertTSObjectKeyword(node, opts) {
  assert("TSObjectKeyword", node, opts);
}

function assertTSStringKeyword(node, opts) {
  assert("TSStringKeyword", node, opts);
}

function assertTSSymbolKeyword(node, opts) {
  assert("TSSymbolKeyword", node, opts);
}

function assertTSUndefinedKeyword(node, opts) {
  assert("TSUndefinedKeyword", node, opts);
}

function assertTSUnknownKeyword(node, opts) {
  assert("TSUnknownKeyword", node, opts);
}

function assertTSVoidKeyword(node, opts) {
  assert("TSVoidKeyword", node, opts);
}

function assertTSThisType(node, opts) {
  assert("TSThisType", node, opts);
}

function assertTSFunctionType(node, opts) {
  assert("TSFunctionType", node, opts);
}

function assertTSConstructorType(node, opts) {
  assert("TSConstructorType", node, opts);
}

function assertTSTypeReference(node, opts) {
  assert("TSTypeReference", node, opts);
}

function assertTSTypePredicate(node, opts) {
  assert("TSTypePredicate", node, opts);
}

function assertTSTypeQuery(node, opts) {
  assert("TSTypeQuery", node, opts);
}

function assertTSTypeLiteral(node, opts) {
  assert("TSTypeLiteral", node, opts);
}

function assertTSArrayType(node, opts) {
  assert("TSArrayType", node, opts);
}

function assertTSTupleType(node, opts) {
  assert("TSTupleType", node, opts);
}

function assertTSOptionalType(node, opts) {
  assert("TSOptionalType", node, opts);
}

function assertTSRestType(node, opts) {
  assert("TSRestType", node, opts);
}

function assertTSNamedTupleMember(node, opts) {
  assert("TSNamedTupleMember", node, opts);
}

function assertTSUnionType(node, opts) {
  assert("TSUnionType", node, opts);
}

function assertTSIntersectionType(node, opts) {
  assert("TSIntersectionType", node, opts);
}

function assertTSConditionalType(node, opts) {
  assert("TSConditionalType", node, opts);
}

function assertTSInferType(node, opts) {
  assert("TSInferType", node, opts);
}

function assertTSParenthesizedType(node, opts) {
  assert("TSParenthesizedType", node, opts);
}

function assertTSTypeOperator(node, opts) {
  assert("TSTypeOperator", node, opts);
}

function assertTSIndexedAccessType(node, opts) {
  assert("TSIndexedAccessType", node, opts);
}

function assertTSMappedType(node, opts) {
  assert("TSMappedType", node, opts);
}

function assertTSLiteralType(node, opts) {
  assert("TSLiteralType", node, opts);
}

function assertTSExpressionWithTypeArguments(node, opts) {
  assert("TSExpressionWithTypeArguments", node, opts);
}

function assertTSInterfaceDeclaration(node, opts) {
  assert("TSInterfaceDeclaration", node, opts);
}

function assertTSInterfaceBody(node, opts) {
  assert("TSInterfaceBody", node, opts);
}

function assertTSTypeAliasDeclaration(node, opts) {
  assert("TSTypeAliasDeclaration", node, opts);
}

function assertTSAsExpression(node, opts) {
  assert("TSAsExpression", node, opts);
}

function assertTSTypeAssertion(node, opts) {
  assert("TSTypeAssertion", node, opts);
}

function assertTSEnumDeclaration(node, opts) {
  assert("TSEnumDeclaration", node, opts);
}

function assertTSEnumMember(node, opts) {
  assert("TSEnumMember", node, opts);
}

function assertTSModuleDeclaration(node, opts) {
  assert("TSModuleDeclaration", node, opts);
}

function assertTSModuleBlock(node, opts) {
  assert("TSModuleBlock", node, opts);
}

function assertTSImportType(node, opts) {
  assert("TSImportType", node, opts);
}

function assertTSImportEqualsDeclaration(node, opts) {
  assert("TSImportEqualsDeclaration", node, opts);
}

function assertTSExternalModuleReference(node, opts) {
  assert("TSExternalModuleReference", node, opts);
}

function assertTSNonNullExpression(node, opts) {
  assert("TSNonNullExpression", node, opts);
}

function assertTSExportAssignment(node, opts) {
  assert("TSExportAssignment", node, opts);
}

function assertTSNamespaceExportDeclaration(node, opts) {
  assert("TSNamespaceExportDeclaration", node, opts);
}

function assertTSTypeAnnotation(node, opts) {
  assert("TSTypeAnnotation", node, opts);
}

function assertTSTypeParameterInstantiation(node, opts) {
  assert("TSTypeParameterInstantiation", node, opts);
}

function assertTSTypeParameterDeclaration(node, opts) {
  assert("TSTypeParameterDeclaration", node, opts);
}

function assertTSTypeParameter(node, opts) {
  assert("TSTypeParameter", node, opts);
}

function assertExpression(node, opts) {
  assert("Expression", node, opts);
}

function assertBinary(node, opts) {
  assert("Binary", node, opts);
}

function assertScopable(node, opts) {
  assert("Scopable", node, opts);
}

function assertBlockParent(node, opts) {
  assert("BlockParent", node, opts);
}

function assertBlock(node, opts) {
  assert("Block", node, opts);
}

function assertStatement(node, opts) {
  assert("Statement", node, opts);
}

function assertTerminatorless(node, opts) {
  assert("Terminatorless", node, opts);
}

function assertCompletionStatement(node, opts) {
  assert("CompletionStatement", node, opts);
}

function assertConditional(node, opts) {
  assert("Conditional", node, opts);
}

function assertLoop(node, opts) {
  assert("Loop", node, opts);
}

function assertWhile(node, opts) {
  assert("While", node, opts);
}

function assertExpressionWrapper(node, opts) {
  assert("ExpressionWrapper", node, opts);
}

function assertFor(node, opts) {
  assert("For", node, opts);
}

function assertForXStatement(node, opts) {
  assert("ForXStatement", node, opts);
}

function assertFunction(node, opts) {
  assert("Function", node, opts);
}

function assertFunctionParent(node, opts) {
  assert("FunctionParent", node, opts);
}

function assertPureish(node, opts) {
  assert("Pureish", node, opts);
}

function assertDeclaration(node, opts) {
  assert("Declaration", node, opts);
}

function assertPatternLike(node, opts) {
  assert("PatternLike", node, opts);
}

function assertLVal(node, opts) {
  assert("LVal", node, opts);
}

function assertTSEntityName(node, opts) {
  assert("TSEntityName", node, opts);
}

function assertLiteral(node, opts) {
  assert("Literal", node, opts);
}

function assertImmutable(node, opts) {
  assert("Immutable", node, opts);
}

function assertUserWhitespacable(node, opts) {
  assert("UserWhitespacable", node, opts);
}

function assertMethod(node, opts) {
  assert("Method", node, opts);
}

function assertObjectMember(node, opts) {
  assert("ObjectMember", node, opts);
}

function assertProperty(node, opts) {
  assert("Property", node, opts);
}

function assertUnaryLike(node, opts) {
  assert("UnaryLike", node, opts);
}

function assertPattern(node, opts) {
  assert("Pattern", node, opts);
}

function assertClass(node, opts) {
  assert("Class", node, opts);
}

function assertModuleDeclaration(node, opts) {
  assert("ModuleDeclaration", node, opts);
}

function assertExportDeclaration(node, opts) {
  assert("ExportDeclaration", node, opts);
}

function assertModuleSpecifier(node, opts) {
  assert("ModuleSpecifier", node, opts);
}

function assertFlow(node, opts) {
  assert("Flow", node, opts);
}

function assertFlowType(node, opts) {
  assert("FlowType", node, opts);
}

function assertFlowBaseAnnotation(node, opts) {
  assert("FlowBaseAnnotation", node, opts);
}

function assertFlowDeclaration(node, opts) {
  assert("FlowDeclaration", node, opts);
}

function assertFlowPredicate(node, opts) {
  assert("FlowPredicate", node, opts);
}

function assertEnumBody(node, opts) {
  assert("EnumBody", node, opts);
}

function assertEnumMember(node, opts) {
  assert("EnumMember", node, opts);
}

function assertJSX(node, opts) {
  assert("JSX", node, opts);
}

function assertPrivate(node, opts) {
  assert("Private", node, opts);
}

function assertTSTypeElement(node, opts) {
  assert("TSTypeElement", node, opts);
}

function assertTSType(node, opts) {
  assert("TSType", node, opts);
}

function assertTSBaseType(node, opts) {
  assert("TSBaseType", node, opts);
}

function assertNumberLiteral(node, opts) {
  console.trace("The node type NumberLiteral has been renamed to NumericLiteral");
  assert("NumberLiteral", node, opts);
}

function assertRegexLiteral(node, opts) {
  console.trace("The node type RegexLiteral has been renamed to RegExpLiteral");
  assert("RegexLiteral", node, opts);
}

function assertRestProperty(node, opts) {
  console.trace("The node type RestProperty has been renamed to RestElement");
  assert("RestProperty", node, opts);
}

function assertSpreadProperty(node, opts) {
  console.trace("The node type SpreadProperty has been renamed to SpreadElement");
  assert("SpreadProperty", node, opts);
}
});

unwrapExports(generated$2);
var generated_1$2 = generated$2.assertArrayExpression;
var generated_2$2 = generated$2.assertAssignmentExpression;
var generated_3$2 = generated$2.assertBinaryExpression;
var generated_4$2 = generated$2.assertInterpreterDirective;
var generated_5$2 = generated$2.assertDirective;
var generated_6$2 = generated$2.assertDirectiveLiteral;
var generated_7$2 = generated$2.assertBlockStatement;
var generated_8$2 = generated$2.assertBreakStatement;
var generated_9$2 = generated$2.assertCallExpression;
var generated_10$2 = generated$2.assertCatchClause;
var generated_11$2 = generated$2.assertConditionalExpression;
var generated_12$2 = generated$2.assertContinueStatement;
var generated_13$2 = generated$2.assertDebuggerStatement;
var generated_14$2 = generated$2.assertDoWhileStatement;
var generated_15$2 = generated$2.assertEmptyStatement;
var generated_16$2 = generated$2.assertExpressionStatement;
var generated_17$2 = generated$2.assertFile;
var generated_18$2 = generated$2.assertForInStatement;
var generated_19$2 = generated$2.assertForStatement;
var generated_20$2 = generated$2.assertFunctionDeclaration;
var generated_21$2 = generated$2.assertFunctionExpression;
var generated_22$2 = generated$2.assertIdentifier;
var generated_23$2 = generated$2.assertIfStatement;
var generated_24$2 = generated$2.assertLabeledStatement;
var generated_25$2 = generated$2.assertStringLiteral;
var generated_26$2 = generated$2.assertNumericLiteral;
var generated_27$2 = generated$2.assertNullLiteral;
var generated_28$2 = generated$2.assertBooleanLiteral;
var generated_29$2 = generated$2.assertRegExpLiteral;
var generated_30$2 = generated$2.assertLogicalExpression;
var generated_31$2 = generated$2.assertMemberExpression;
var generated_32$2 = generated$2.assertNewExpression;
var generated_33$2 = generated$2.assertProgram;
var generated_34$2 = generated$2.assertObjectExpression;
var generated_35$2 = generated$2.assertObjectMethod;
var generated_36$2 = generated$2.assertObjectProperty;
var generated_37$2 = generated$2.assertRestElement;
var generated_38$2 = generated$2.assertReturnStatement;
var generated_39$2 = generated$2.assertSequenceExpression;
var generated_40$2 = generated$2.assertParenthesizedExpression;
var generated_41$2 = generated$2.assertSwitchCase;
var generated_42$2 = generated$2.assertSwitchStatement;
var generated_43$2 = generated$2.assertThisExpression;
var generated_44$2 = generated$2.assertThrowStatement;
var generated_45$2 = generated$2.assertTryStatement;
var generated_46$2 = generated$2.assertUnaryExpression;
var generated_47$2 = generated$2.assertUpdateExpression;
var generated_48$2 = generated$2.assertVariableDeclaration;
var generated_49$2 = generated$2.assertVariableDeclarator;
var generated_50$2 = generated$2.assertWhileStatement;
var generated_51$2 = generated$2.assertWithStatement;
var generated_52$2 = generated$2.assertAssignmentPattern;
var generated_53$2 = generated$2.assertArrayPattern;
var generated_54$2 = generated$2.assertArrowFunctionExpression;
var generated_55$2 = generated$2.assertClassBody;
var generated_56$2 = generated$2.assertClassExpression;
var generated_57$2 = generated$2.assertClassDeclaration;
var generated_58$2 = generated$2.assertExportAllDeclaration;
var generated_59$2 = generated$2.assertExportDefaultDeclaration;
var generated_60$2 = generated$2.assertExportNamedDeclaration;
var generated_61$2 = generated$2.assertExportSpecifier;
var generated_62$2 = generated$2.assertForOfStatement;
var generated_63$2 = generated$2.assertImportDeclaration;
var generated_64$2 = generated$2.assertImportDefaultSpecifier;
var generated_65$2 = generated$2.assertImportNamespaceSpecifier;
var generated_66$2 = generated$2.assertImportSpecifier;
var generated_67$2 = generated$2.assertMetaProperty;
var generated_68$2 = generated$2.assertClassMethod;
var generated_69$2 = generated$2.assertObjectPattern;
var generated_70$2 = generated$2.assertSpreadElement;
var generated_71$2 = generated$2.assertSuper;
var generated_72$2 = generated$2.assertTaggedTemplateExpression;
var generated_73$2 = generated$2.assertTemplateElement;
var generated_74$2 = generated$2.assertTemplateLiteral;
var generated_75$2 = generated$2.assertYieldExpression;
var generated_76$2 = generated$2.assertAwaitExpression;
var generated_77$2 = generated$2.assertImport;
var generated_78$2 = generated$2.assertBigIntLiteral;
var generated_79$2 = generated$2.assertExportNamespaceSpecifier;
var generated_80$2 = generated$2.assertOptionalMemberExpression;
var generated_81$2 = generated$2.assertOptionalCallExpression;
var generated_82$2 = generated$2.assertAnyTypeAnnotation;
var generated_83$2 = generated$2.assertArrayTypeAnnotation;
var generated_84$2 = generated$2.assertBooleanTypeAnnotation;
var generated_85$2 = generated$2.assertBooleanLiteralTypeAnnotation;
var generated_86$2 = generated$2.assertNullLiteralTypeAnnotation;
var generated_87$2 = generated$2.assertClassImplements;
var generated_88$2 = generated$2.assertDeclareClass;
var generated_89$2 = generated$2.assertDeclareFunction;
var generated_90$2 = generated$2.assertDeclareInterface;
var generated_91$2 = generated$2.assertDeclareModule;
var generated_92$2 = generated$2.assertDeclareModuleExports;
var generated_93$2 = generated$2.assertDeclareTypeAlias;
var generated_94$2 = generated$2.assertDeclareOpaqueType;
var generated_95$2 = generated$2.assertDeclareVariable;
var generated_96$2 = generated$2.assertDeclareExportDeclaration;
var generated_97$2 = generated$2.assertDeclareExportAllDeclaration;
var generated_98$2 = generated$2.assertDeclaredPredicate;
var generated_99$2 = generated$2.assertExistsTypeAnnotation;
var generated_100$2 = generated$2.assertFunctionTypeAnnotation;
var generated_101$2 = generated$2.assertFunctionTypeParam;
var generated_102$2 = generated$2.assertGenericTypeAnnotation;
var generated_103$2 = generated$2.assertInferredPredicate;
var generated_104$2 = generated$2.assertInterfaceExtends;
var generated_105$2 = generated$2.assertInterfaceDeclaration;
var generated_106$2 = generated$2.assertInterfaceTypeAnnotation;
var generated_107$2 = generated$2.assertIntersectionTypeAnnotation;
var generated_108$2 = generated$2.assertMixedTypeAnnotation;
var generated_109$2 = generated$2.assertEmptyTypeAnnotation;
var generated_110$2 = generated$2.assertNullableTypeAnnotation;
var generated_111$2 = generated$2.assertNumberLiteralTypeAnnotation;
var generated_112$2 = generated$2.assertNumberTypeAnnotation;
var generated_113$2 = generated$2.assertObjectTypeAnnotation;
var generated_114$2 = generated$2.assertObjectTypeInternalSlot;
var generated_115$2 = generated$2.assertObjectTypeCallProperty;
var generated_116$2 = generated$2.assertObjectTypeIndexer;
var generated_117$2 = generated$2.assertObjectTypeProperty;
var generated_118$2 = generated$2.assertObjectTypeSpreadProperty;
var generated_119$2 = generated$2.assertOpaqueType;
var generated_120$2 = generated$2.assertQualifiedTypeIdentifier;
var generated_121$2 = generated$2.assertStringLiteralTypeAnnotation;
var generated_122$2 = generated$2.assertStringTypeAnnotation;
var generated_123$2 = generated$2.assertSymbolTypeAnnotation;
var generated_124$2 = generated$2.assertThisTypeAnnotation;
var generated_125$2 = generated$2.assertTupleTypeAnnotation;
var generated_126$2 = generated$2.assertTypeofTypeAnnotation;
var generated_127$2 = generated$2.assertTypeAlias;
var generated_128$2 = generated$2.assertTypeAnnotation;
var generated_129$2 = generated$2.assertTypeCastExpression;
var generated_130$2 = generated$2.assertTypeParameter;
var generated_131$2 = generated$2.assertTypeParameterDeclaration;
var generated_132$2 = generated$2.assertTypeParameterInstantiation;
var generated_133$2 = generated$2.assertUnionTypeAnnotation;
var generated_134$2 = generated$2.assertVariance;
var generated_135$2 = generated$2.assertVoidTypeAnnotation;
var generated_136$2 = generated$2.assertEnumDeclaration;
var generated_137$2 = generated$2.assertEnumBooleanBody;
var generated_138$2 = generated$2.assertEnumNumberBody;
var generated_139$2 = generated$2.assertEnumStringBody;
var generated_140$2 = generated$2.assertEnumSymbolBody;
var generated_141$2 = generated$2.assertEnumBooleanMember;
var generated_142$2 = generated$2.assertEnumNumberMember;
var generated_143$2 = generated$2.assertEnumStringMember;
var generated_144$2 = generated$2.assertEnumDefaultedMember;
var generated_145$2 = generated$2.assertJSXAttribute;
var generated_146$2 = generated$2.assertJSXClosingElement;
var generated_147$2 = generated$2.assertJSXElement;
var generated_148$2 = generated$2.assertJSXEmptyExpression;
var generated_149$2 = generated$2.assertJSXExpressionContainer;
var generated_150$2 = generated$2.assertJSXSpreadChild;
var generated_151$2 = generated$2.assertJSXIdentifier;
var generated_152$2 = generated$2.assertJSXMemberExpression;
var generated_153$2 = generated$2.assertJSXNamespacedName;
var generated_154$2 = generated$2.assertJSXOpeningElement;
var generated_155$2 = generated$2.assertJSXSpreadAttribute;
var generated_156$2 = generated$2.assertJSXText;
var generated_157$2 = generated$2.assertJSXFragment;
var generated_158$2 = generated$2.assertJSXOpeningFragment;
var generated_159$2 = generated$2.assertJSXClosingFragment;
var generated_160$2 = generated$2.assertNoop;
var generated_161$2 = generated$2.assertPlaceholder;
var generated_162$2 = generated$2.assertV8IntrinsicIdentifier;
var generated_163$2 = generated$2.assertArgumentPlaceholder;
var generated_164$2 = generated$2.assertBindExpression;
var generated_165$2 = generated$2.assertClassProperty;
var generated_166$2 = generated$2.assertPipelineTopicExpression;
var generated_167$2 = generated$2.assertPipelineBareFunction;
var generated_168$2 = generated$2.assertPipelinePrimaryTopicReference;
var generated_169$2 = generated$2.assertClassPrivateProperty;
var generated_170$2 = generated$2.assertClassPrivateMethod;
var generated_171$2 = generated$2.assertImportAttribute;
var generated_172$2 = generated$2.assertDecorator;
var generated_173$2 = generated$2.assertDoExpression;
var generated_174$2 = generated$2.assertExportDefaultSpecifier;
var generated_175$2 = generated$2.assertPrivateName;
var generated_176$2 = generated$2.assertRecordExpression;
var generated_177$2 = generated$2.assertTupleExpression;
var generated_178$2 = generated$2.assertDecimalLiteral;
var generated_179$2 = generated$2.assertStaticBlock;
var generated_180$2 = generated$2.assertModuleExpression;
var generated_181$2 = generated$2.assertTSParameterProperty;
var generated_182$2 = generated$2.assertTSDeclareFunction;
var generated_183$2 = generated$2.assertTSDeclareMethod;
var generated_184$2 = generated$2.assertTSQualifiedName;
var generated_185$2 = generated$2.assertTSCallSignatureDeclaration;
var generated_186$2 = generated$2.assertTSConstructSignatureDeclaration;
var generated_187$2 = generated$2.assertTSPropertySignature;
var generated_188$2 = generated$2.assertTSMethodSignature;
var generated_189$2 = generated$2.assertTSIndexSignature;
var generated_190$2 = generated$2.assertTSAnyKeyword;
var generated_191$2 = generated$2.assertTSBooleanKeyword;
var generated_192$2 = generated$2.assertTSBigIntKeyword;
var generated_193$2 = generated$2.assertTSIntrinsicKeyword;
var generated_194$2 = generated$2.assertTSNeverKeyword;
var generated_195$2 = generated$2.assertTSNullKeyword;
var generated_196$2 = generated$2.assertTSNumberKeyword;
var generated_197$2 = generated$2.assertTSObjectKeyword;
var generated_198$2 = generated$2.assertTSStringKeyword;
var generated_199$2 = generated$2.assertTSSymbolKeyword;
var generated_200$2 = generated$2.assertTSUndefinedKeyword;
var generated_201$2 = generated$2.assertTSUnknownKeyword;
var generated_202$2 = generated$2.assertTSVoidKeyword;
var generated_203$2 = generated$2.assertTSThisType;
var generated_204$2 = generated$2.assertTSFunctionType;
var generated_205$2 = generated$2.assertTSConstructorType;
var generated_206$2 = generated$2.assertTSTypeReference;
var generated_207$2 = generated$2.assertTSTypePredicate;
var generated_208$2 = generated$2.assertTSTypeQuery;
var generated_209$2 = generated$2.assertTSTypeLiteral;
var generated_210$2 = generated$2.assertTSArrayType;
var generated_211$2 = generated$2.assertTSTupleType;
var generated_212$2 = generated$2.assertTSOptionalType;
var generated_213$2 = generated$2.assertTSRestType;
var generated_214$2 = generated$2.assertTSNamedTupleMember;
var generated_215$2 = generated$2.assertTSUnionType;
var generated_216$2 = generated$2.assertTSIntersectionType;
var generated_217$2 = generated$2.assertTSConditionalType;
var generated_218$2 = generated$2.assertTSInferType;
var generated_219$2 = generated$2.assertTSParenthesizedType;
var generated_220$2 = generated$2.assertTSTypeOperator;
var generated_221$2 = generated$2.assertTSIndexedAccessType;
var generated_222$2 = generated$2.assertTSMappedType;
var generated_223$2 = generated$2.assertTSLiteralType;
var generated_224$2 = generated$2.assertTSExpressionWithTypeArguments;
var generated_225$2 = generated$2.assertTSInterfaceDeclaration;
var generated_226$2 = generated$2.assertTSInterfaceBody;
var generated_227$2 = generated$2.assertTSTypeAliasDeclaration;
var generated_228$2 = generated$2.assertTSAsExpression;
var generated_229$2 = generated$2.assertTSTypeAssertion;
var generated_230$2 = generated$2.assertTSEnumDeclaration;
var generated_231$2 = generated$2.assertTSEnumMember;
var generated_232$2 = generated$2.assertTSModuleDeclaration;
var generated_233$2 = generated$2.assertTSModuleBlock;
var generated_234$2 = generated$2.assertTSImportType;
var generated_235$2 = generated$2.assertTSImportEqualsDeclaration;
var generated_236$2 = generated$2.assertTSExternalModuleReference;
var generated_237$2 = generated$2.assertTSNonNullExpression;
var generated_238$2 = generated$2.assertTSExportAssignment;
var generated_239$2 = generated$2.assertTSNamespaceExportDeclaration;
var generated_240$2 = generated$2.assertTSTypeAnnotation;
var generated_241$2 = generated$2.assertTSTypeParameterInstantiation;
var generated_242$2 = generated$2.assertTSTypeParameterDeclaration;
var generated_243$2 = generated$2.assertTSTypeParameter;
var generated_244$2 = generated$2.assertExpression;
var generated_245$2 = generated$2.assertBinary;
var generated_246$2 = generated$2.assertScopable;
var generated_247$2 = generated$2.assertBlockParent;
var generated_248$2 = generated$2.assertBlock;
var generated_249$2 = generated$2.assertStatement;
var generated_250$2 = generated$2.assertTerminatorless;
var generated_251$2 = generated$2.assertCompletionStatement;
var generated_252$2 = generated$2.assertConditional;
var generated_253$2 = generated$2.assertLoop;
var generated_254$2 = generated$2.assertWhile;
var generated_255$2 = generated$2.assertExpressionWrapper;
var generated_256$2 = generated$2.assertFor;
var generated_257$2 = generated$2.assertForXStatement;
var generated_258$2 = generated$2.assertFunction;
var generated_259$2 = generated$2.assertFunctionParent;
var generated_260$2 = generated$2.assertPureish;
var generated_261$2 = generated$2.assertDeclaration;
var generated_262$2 = generated$2.assertPatternLike;
var generated_263$2 = generated$2.assertLVal;
var generated_264$2 = generated$2.assertTSEntityName;
var generated_265$2 = generated$2.assertLiteral;
var generated_266$2 = generated$2.assertImmutable;
var generated_267$2 = generated$2.assertUserWhitespacable;
var generated_268$2 = generated$2.assertMethod;
var generated_269$2 = generated$2.assertObjectMember;
var generated_270$2 = generated$2.assertProperty;
var generated_271$2 = generated$2.assertUnaryLike;
var generated_272$2 = generated$2.assertPattern;
var generated_273$2 = generated$2.assertClass;
var generated_274$2 = generated$2.assertModuleDeclaration;
var generated_275$2 = generated$2.assertExportDeclaration;
var generated_276$2 = generated$2.assertModuleSpecifier;
var generated_277$2 = generated$2.assertFlow;
var generated_278$2 = generated$2.assertFlowType;
var generated_279$2 = generated$2.assertFlowBaseAnnotation;
var generated_280$2 = generated$2.assertFlowDeclaration;
var generated_281$2 = generated$2.assertFlowPredicate;
var generated_282$2 = generated$2.assertEnumBody;
var generated_283$2 = generated$2.assertEnumMember;
var generated_284$2 = generated$2.assertJSX;
var generated_285$2 = generated$2.assertPrivate;
var generated_286$2 = generated$2.assertTSTypeElement;
var generated_287$2 = generated$2.assertTSType;
var generated_288$2 = generated$2.assertTSBaseType;
var generated_289$2 = generated$2.assertNumberLiteral;
var generated_290$2 = generated$2.assertRegexLiteral;
var generated_291$2 = generated$2.assertRestProperty;
var generated_292$2 = generated$2.assertSpreadProperty;

var createTypeAnnotationBasedOnTypeof_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createTypeAnnotationBasedOnTypeof;



function createTypeAnnotationBasedOnTypeof(type) {
  if (type === "string") {
    return (0, generated$1.stringTypeAnnotation)();
  } else if (type === "number") {
    return (0, generated$1.numberTypeAnnotation)();
  } else if (type === "undefined") {
    return (0, generated$1.voidTypeAnnotation)();
  } else if (type === "boolean") {
    return (0, generated$1.booleanTypeAnnotation)();
  } else if (type === "function") {
    return (0, generated$1.genericTypeAnnotation)((0, generated$1.identifier)("Function"));
  } else if (type === "object") {
    return (0, generated$1.genericTypeAnnotation)((0, generated$1.identifier)("Object"));
  } else if (type === "symbol") {
    return (0, generated$1.genericTypeAnnotation)((0, generated$1.identifier)("Symbol"));
  } else {
    throw new Error("Invalid typeof value");
  }
}
});

unwrapExports(createTypeAnnotationBasedOnTypeof_1);

var removeTypeDuplicates_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeTypeDuplicates;



function getQualifiedName(node) {
  return (0, generated.isIdentifier)(node) ? node.name : `${node.id.name}.${getQualifiedName(node.qualification)}`;
}

function removeTypeDuplicates(nodes) {
  const generics = {};
  const bases = {};
  const typeGroups = [];
  const types = [];

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (!node) continue;

    if (types.indexOf(node) >= 0) {
      continue;
    }

    if ((0, generated.isAnyTypeAnnotation)(node)) {
      return [node];
    }

    if ((0, generated.isFlowBaseAnnotation)(node)) {
      bases[node.type] = node;
      continue;
    }

    if ((0, generated.isUnionTypeAnnotation)(node)) {
      if (typeGroups.indexOf(node.types) < 0) {
        nodes = nodes.concat(node.types);
        typeGroups.push(node.types);
      }

      continue;
    }

    if ((0, generated.isGenericTypeAnnotation)(node)) {
      const name = getQualifiedName(node.id);

      if (generics[name]) {
        let existing = generics[name];

        if (existing.typeParameters) {
          if (node.typeParameters) {
            existing.typeParameters.params = removeTypeDuplicates(existing.typeParameters.params.concat(node.typeParameters.params));
          }
        } else {
          existing = node.typeParameters;
        }
      } else {
        generics[name] = node;
      }

      continue;
    }

    types.push(node);
  }

  for (const type of Object.keys(bases)) {
    types.push(bases[type]);
  }

  for (const name of Object.keys(generics)) {
    types.push(generics[name]);
  }

  return types;
}
});

unwrapExports(removeTypeDuplicates_1);

var createFlowUnionType_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createFlowUnionType;



var _removeTypeDuplicates = _interopRequireDefault(removeTypeDuplicates_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createFlowUnionType(types) {
  const flattened = (0, _removeTypeDuplicates.default)(types);

  if (flattened.length === 1) {
    return flattened[0];
  } else {
    return (0, generated$1.unionTypeAnnotation)(flattened);
  }
}
});

unwrapExports(createFlowUnionType_1);

var removeTypeDuplicates_1$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeTypeDuplicates;



function removeTypeDuplicates(nodes) {
  const generics = {};
  const bases = {};
  const typeGroups = [];
  const types = [];

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (!node) continue;

    if (types.indexOf(node) >= 0) {
      continue;
    }

    if ((0, generated.isTSAnyKeyword)(node)) {
      return [node];
    }

    if ((0, generated.isTSBaseType)(node)) {
      bases[node.type] = node;
      continue;
    }

    if ((0, generated.isTSUnionType)(node)) {
      if (typeGroups.indexOf(node.types) < 0) {
        nodes = nodes.concat(node.types);
        typeGroups.push(node.types);
      }

      continue;
    }

    types.push(node);
  }

  for (const type of Object.keys(bases)) {
    types.push(bases[type]);
  }

  for (const name of Object.keys(generics)) {
    types.push(generics[name]);
  }

  return types;
}
});

unwrapExports(removeTypeDuplicates_1$1);

var createTSUnionType_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createTSUnionType;



var _removeTypeDuplicates = _interopRequireDefault(removeTypeDuplicates_1$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createTSUnionType(typeAnnotations) {
  const types = typeAnnotations.map(type => type.typeAnnotation);
  const flattened = (0, _removeTypeDuplicates.default)(types);

  if (flattened.length === 1) {
    return flattened[0];
  } else {
    return (0, generated$1.tsUnionType)(flattened);
  }
}
});

unwrapExports(createTSUnionType_1);

var uppercase = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ArrayExpression", {
  enumerable: true,
  get: function () {
    return generated$1.arrayExpression;
  }
});
Object.defineProperty(exports, "AssignmentExpression", {
  enumerable: true,
  get: function () {
    return generated$1.assignmentExpression;
  }
});
Object.defineProperty(exports, "BinaryExpression", {
  enumerable: true,
  get: function () {
    return generated$1.binaryExpression;
  }
});
Object.defineProperty(exports, "InterpreterDirective", {
  enumerable: true,
  get: function () {
    return generated$1.interpreterDirective;
  }
});
Object.defineProperty(exports, "Directive", {
  enumerable: true,
  get: function () {
    return generated$1.directive;
  }
});
Object.defineProperty(exports, "DirectiveLiteral", {
  enumerable: true,
  get: function () {
    return generated$1.directiveLiteral;
  }
});
Object.defineProperty(exports, "BlockStatement", {
  enumerable: true,
  get: function () {
    return generated$1.blockStatement;
  }
});
Object.defineProperty(exports, "BreakStatement", {
  enumerable: true,
  get: function () {
    return generated$1.breakStatement;
  }
});
Object.defineProperty(exports, "CallExpression", {
  enumerable: true,
  get: function () {
    return generated$1.callExpression;
  }
});
Object.defineProperty(exports, "CatchClause", {
  enumerable: true,
  get: function () {
    return generated$1.catchClause;
  }
});
Object.defineProperty(exports, "ConditionalExpression", {
  enumerable: true,
  get: function () {
    return generated$1.conditionalExpression;
  }
});
Object.defineProperty(exports, "ContinueStatement", {
  enumerable: true,
  get: function () {
    return generated$1.continueStatement;
  }
});
Object.defineProperty(exports, "DebuggerStatement", {
  enumerable: true,
  get: function () {
    return generated$1.debuggerStatement;
  }
});
Object.defineProperty(exports, "DoWhileStatement", {
  enumerable: true,
  get: function () {
    return generated$1.doWhileStatement;
  }
});
Object.defineProperty(exports, "EmptyStatement", {
  enumerable: true,
  get: function () {
    return generated$1.emptyStatement;
  }
});
Object.defineProperty(exports, "ExpressionStatement", {
  enumerable: true,
  get: function () {
    return generated$1.expressionStatement;
  }
});
Object.defineProperty(exports, "File", {
  enumerable: true,
  get: function () {
    return generated$1.file;
  }
});
Object.defineProperty(exports, "ForInStatement", {
  enumerable: true,
  get: function () {
    return generated$1.forInStatement;
  }
});
Object.defineProperty(exports, "ForStatement", {
  enumerable: true,
  get: function () {
    return generated$1.forStatement;
  }
});
Object.defineProperty(exports, "FunctionDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.functionDeclaration;
  }
});
Object.defineProperty(exports, "FunctionExpression", {
  enumerable: true,
  get: function () {
    return generated$1.functionExpression;
  }
});
Object.defineProperty(exports, "Identifier", {
  enumerable: true,
  get: function () {
    return generated$1.identifier;
  }
});
Object.defineProperty(exports, "IfStatement", {
  enumerable: true,
  get: function () {
    return generated$1.ifStatement;
  }
});
Object.defineProperty(exports, "LabeledStatement", {
  enumerable: true,
  get: function () {
    return generated$1.labeledStatement;
  }
});
Object.defineProperty(exports, "StringLiteral", {
  enumerable: true,
  get: function () {
    return generated$1.stringLiteral;
  }
});
Object.defineProperty(exports, "NumericLiteral", {
  enumerable: true,
  get: function () {
    return generated$1.numericLiteral;
  }
});
Object.defineProperty(exports, "NullLiteral", {
  enumerable: true,
  get: function () {
    return generated$1.nullLiteral;
  }
});
Object.defineProperty(exports, "BooleanLiteral", {
  enumerable: true,
  get: function () {
    return generated$1.booleanLiteral;
  }
});
Object.defineProperty(exports, "RegExpLiteral", {
  enumerable: true,
  get: function () {
    return generated$1.regExpLiteral;
  }
});
Object.defineProperty(exports, "LogicalExpression", {
  enumerable: true,
  get: function () {
    return generated$1.logicalExpression;
  }
});
Object.defineProperty(exports, "MemberExpression", {
  enumerable: true,
  get: function () {
    return generated$1.memberExpression;
  }
});
Object.defineProperty(exports, "NewExpression", {
  enumerable: true,
  get: function () {
    return generated$1.newExpression;
  }
});
Object.defineProperty(exports, "Program", {
  enumerable: true,
  get: function () {
    return generated$1.program;
  }
});
Object.defineProperty(exports, "ObjectExpression", {
  enumerable: true,
  get: function () {
    return generated$1.objectExpression;
  }
});
Object.defineProperty(exports, "ObjectMethod", {
  enumerable: true,
  get: function () {
    return generated$1.objectMethod;
  }
});
Object.defineProperty(exports, "ObjectProperty", {
  enumerable: true,
  get: function () {
    return generated$1.objectProperty;
  }
});
Object.defineProperty(exports, "RestElement", {
  enumerable: true,
  get: function () {
    return generated$1.restElement;
  }
});
Object.defineProperty(exports, "ReturnStatement", {
  enumerable: true,
  get: function () {
    return generated$1.returnStatement;
  }
});
Object.defineProperty(exports, "SequenceExpression", {
  enumerable: true,
  get: function () {
    return generated$1.sequenceExpression;
  }
});
Object.defineProperty(exports, "ParenthesizedExpression", {
  enumerable: true,
  get: function () {
    return generated$1.parenthesizedExpression;
  }
});
Object.defineProperty(exports, "SwitchCase", {
  enumerable: true,
  get: function () {
    return generated$1.switchCase;
  }
});
Object.defineProperty(exports, "SwitchStatement", {
  enumerable: true,
  get: function () {
    return generated$1.switchStatement;
  }
});
Object.defineProperty(exports, "ThisExpression", {
  enumerable: true,
  get: function () {
    return generated$1.thisExpression;
  }
});
Object.defineProperty(exports, "ThrowStatement", {
  enumerable: true,
  get: function () {
    return generated$1.throwStatement;
  }
});
Object.defineProperty(exports, "TryStatement", {
  enumerable: true,
  get: function () {
    return generated$1.tryStatement;
  }
});
Object.defineProperty(exports, "UnaryExpression", {
  enumerable: true,
  get: function () {
    return generated$1.unaryExpression;
  }
});
Object.defineProperty(exports, "UpdateExpression", {
  enumerable: true,
  get: function () {
    return generated$1.updateExpression;
  }
});
Object.defineProperty(exports, "VariableDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.variableDeclaration;
  }
});
Object.defineProperty(exports, "VariableDeclarator", {
  enumerable: true,
  get: function () {
    return generated$1.variableDeclarator;
  }
});
Object.defineProperty(exports, "WhileStatement", {
  enumerable: true,
  get: function () {
    return generated$1.whileStatement;
  }
});
Object.defineProperty(exports, "WithStatement", {
  enumerable: true,
  get: function () {
    return generated$1.withStatement;
  }
});
Object.defineProperty(exports, "AssignmentPattern", {
  enumerable: true,
  get: function () {
    return generated$1.assignmentPattern;
  }
});
Object.defineProperty(exports, "ArrayPattern", {
  enumerable: true,
  get: function () {
    return generated$1.arrayPattern;
  }
});
Object.defineProperty(exports, "ArrowFunctionExpression", {
  enumerable: true,
  get: function () {
    return generated$1.arrowFunctionExpression;
  }
});
Object.defineProperty(exports, "ClassBody", {
  enumerable: true,
  get: function () {
    return generated$1.classBody;
  }
});
Object.defineProperty(exports, "ClassExpression", {
  enumerable: true,
  get: function () {
    return generated$1.classExpression;
  }
});
Object.defineProperty(exports, "ClassDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.classDeclaration;
  }
});
Object.defineProperty(exports, "ExportAllDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.exportAllDeclaration;
  }
});
Object.defineProperty(exports, "ExportDefaultDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.exportDefaultDeclaration;
  }
});
Object.defineProperty(exports, "ExportNamedDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.exportNamedDeclaration;
  }
});
Object.defineProperty(exports, "ExportSpecifier", {
  enumerable: true,
  get: function () {
    return generated$1.exportSpecifier;
  }
});
Object.defineProperty(exports, "ForOfStatement", {
  enumerable: true,
  get: function () {
    return generated$1.forOfStatement;
  }
});
Object.defineProperty(exports, "ImportDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.importDeclaration;
  }
});
Object.defineProperty(exports, "ImportDefaultSpecifier", {
  enumerable: true,
  get: function () {
    return generated$1.importDefaultSpecifier;
  }
});
Object.defineProperty(exports, "ImportNamespaceSpecifier", {
  enumerable: true,
  get: function () {
    return generated$1.importNamespaceSpecifier;
  }
});
Object.defineProperty(exports, "ImportSpecifier", {
  enumerable: true,
  get: function () {
    return generated$1.importSpecifier;
  }
});
Object.defineProperty(exports, "MetaProperty", {
  enumerable: true,
  get: function () {
    return generated$1.metaProperty;
  }
});
Object.defineProperty(exports, "ClassMethod", {
  enumerable: true,
  get: function () {
    return generated$1.classMethod;
  }
});
Object.defineProperty(exports, "ObjectPattern", {
  enumerable: true,
  get: function () {
    return generated$1.objectPattern;
  }
});
Object.defineProperty(exports, "SpreadElement", {
  enumerable: true,
  get: function () {
    return generated$1.spreadElement;
  }
});
Object.defineProperty(exports, "Super", {
  enumerable: true,
  get: function () {
    return generated$1.super;
  }
});
Object.defineProperty(exports, "TaggedTemplateExpression", {
  enumerable: true,
  get: function () {
    return generated$1.taggedTemplateExpression;
  }
});
Object.defineProperty(exports, "TemplateElement", {
  enumerable: true,
  get: function () {
    return generated$1.templateElement;
  }
});
Object.defineProperty(exports, "TemplateLiteral", {
  enumerable: true,
  get: function () {
    return generated$1.templateLiteral;
  }
});
Object.defineProperty(exports, "YieldExpression", {
  enumerable: true,
  get: function () {
    return generated$1.yieldExpression;
  }
});
Object.defineProperty(exports, "AwaitExpression", {
  enumerable: true,
  get: function () {
    return generated$1.awaitExpression;
  }
});
Object.defineProperty(exports, "Import", {
  enumerable: true,
  get: function () {
    return generated$1.import;
  }
});
Object.defineProperty(exports, "BigIntLiteral", {
  enumerable: true,
  get: function () {
    return generated$1.bigIntLiteral;
  }
});
Object.defineProperty(exports, "ExportNamespaceSpecifier", {
  enumerable: true,
  get: function () {
    return generated$1.exportNamespaceSpecifier;
  }
});
Object.defineProperty(exports, "OptionalMemberExpression", {
  enumerable: true,
  get: function () {
    return generated$1.optionalMemberExpression;
  }
});
Object.defineProperty(exports, "OptionalCallExpression", {
  enumerable: true,
  get: function () {
    return generated$1.optionalCallExpression;
  }
});
Object.defineProperty(exports, "AnyTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.anyTypeAnnotation;
  }
});
Object.defineProperty(exports, "ArrayTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.arrayTypeAnnotation;
  }
});
Object.defineProperty(exports, "BooleanTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.booleanTypeAnnotation;
  }
});
Object.defineProperty(exports, "BooleanLiteralTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.booleanLiteralTypeAnnotation;
  }
});
Object.defineProperty(exports, "NullLiteralTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.nullLiteralTypeAnnotation;
  }
});
Object.defineProperty(exports, "ClassImplements", {
  enumerable: true,
  get: function () {
    return generated$1.classImplements;
  }
});
Object.defineProperty(exports, "DeclareClass", {
  enumerable: true,
  get: function () {
    return generated$1.declareClass;
  }
});
Object.defineProperty(exports, "DeclareFunction", {
  enumerable: true,
  get: function () {
    return generated$1.declareFunction;
  }
});
Object.defineProperty(exports, "DeclareInterface", {
  enumerable: true,
  get: function () {
    return generated$1.declareInterface;
  }
});
Object.defineProperty(exports, "DeclareModule", {
  enumerable: true,
  get: function () {
    return generated$1.declareModule;
  }
});
Object.defineProperty(exports, "DeclareModuleExports", {
  enumerable: true,
  get: function () {
    return generated$1.declareModuleExports;
  }
});
Object.defineProperty(exports, "DeclareTypeAlias", {
  enumerable: true,
  get: function () {
    return generated$1.declareTypeAlias;
  }
});
Object.defineProperty(exports, "DeclareOpaqueType", {
  enumerable: true,
  get: function () {
    return generated$1.declareOpaqueType;
  }
});
Object.defineProperty(exports, "DeclareVariable", {
  enumerable: true,
  get: function () {
    return generated$1.declareVariable;
  }
});
Object.defineProperty(exports, "DeclareExportDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.declareExportDeclaration;
  }
});
Object.defineProperty(exports, "DeclareExportAllDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.declareExportAllDeclaration;
  }
});
Object.defineProperty(exports, "DeclaredPredicate", {
  enumerable: true,
  get: function () {
    return generated$1.declaredPredicate;
  }
});
Object.defineProperty(exports, "ExistsTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.existsTypeAnnotation;
  }
});
Object.defineProperty(exports, "FunctionTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.functionTypeAnnotation;
  }
});
Object.defineProperty(exports, "FunctionTypeParam", {
  enumerable: true,
  get: function () {
    return generated$1.functionTypeParam;
  }
});
Object.defineProperty(exports, "GenericTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.genericTypeAnnotation;
  }
});
Object.defineProperty(exports, "InferredPredicate", {
  enumerable: true,
  get: function () {
    return generated$1.inferredPredicate;
  }
});
Object.defineProperty(exports, "InterfaceExtends", {
  enumerable: true,
  get: function () {
    return generated$1.interfaceExtends;
  }
});
Object.defineProperty(exports, "InterfaceDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.interfaceDeclaration;
  }
});
Object.defineProperty(exports, "InterfaceTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.interfaceTypeAnnotation;
  }
});
Object.defineProperty(exports, "IntersectionTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.intersectionTypeAnnotation;
  }
});
Object.defineProperty(exports, "MixedTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.mixedTypeAnnotation;
  }
});
Object.defineProperty(exports, "EmptyTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.emptyTypeAnnotation;
  }
});
Object.defineProperty(exports, "NullableTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.nullableTypeAnnotation;
  }
});
Object.defineProperty(exports, "NumberLiteralTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.numberLiteralTypeAnnotation;
  }
});
Object.defineProperty(exports, "NumberTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.numberTypeAnnotation;
  }
});
Object.defineProperty(exports, "ObjectTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.objectTypeAnnotation;
  }
});
Object.defineProperty(exports, "ObjectTypeInternalSlot", {
  enumerable: true,
  get: function () {
    return generated$1.objectTypeInternalSlot;
  }
});
Object.defineProperty(exports, "ObjectTypeCallProperty", {
  enumerable: true,
  get: function () {
    return generated$1.objectTypeCallProperty;
  }
});
Object.defineProperty(exports, "ObjectTypeIndexer", {
  enumerable: true,
  get: function () {
    return generated$1.objectTypeIndexer;
  }
});
Object.defineProperty(exports, "ObjectTypeProperty", {
  enumerable: true,
  get: function () {
    return generated$1.objectTypeProperty;
  }
});
Object.defineProperty(exports, "ObjectTypeSpreadProperty", {
  enumerable: true,
  get: function () {
    return generated$1.objectTypeSpreadProperty;
  }
});
Object.defineProperty(exports, "OpaqueType", {
  enumerable: true,
  get: function () {
    return generated$1.opaqueType;
  }
});
Object.defineProperty(exports, "QualifiedTypeIdentifier", {
  enumerable: true,
  get: function () {
    return generated$1.qualifiedTypeIdentifier;
  }
});
Object.defineProperty(exports, "StringLiteralTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.stringLiteralTypeAnnotation;
  }
});
Object.defineProperty(exports, "StringTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.stringTypeAnnotation;
  }
});
Object.defineProperty(exports, "SymbolTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.symbolTypeAnnotation;
  }
});
Object.defineProperty(exports, "ThisTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.thisTypeAnnotation;
  }
});
Object.defineProperty(exports, "TupleTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.tupleTypeAnnotation;
  }
});
Object.defineProperty(exports, "TypeofTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.typeofTypeAnnotation;
  }
});
Object.defineProperty(exports, "TypeAlias", {
  enumerable: true,
  get: function () {
    return generated$1.typeAlias;
  }
});
Object.defineProperty(exports, "TypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.typeAnnotation;
  }
});
Object.defineProperty(exports, "TypeCastExpression", {
  enumerable: true,
  get: function () {
    return generated$1.typeCastExpression;
  }
});
Object.defineProperty(exports, "TypeParameter", {
  enumerable: true,
  get: function () {
    return generated$1.typeParameter;
  }
});
Object.defineProperty(exports, "TypeParameterDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.typeParameterDeclaration;
  }
});
Object.defineProperty(exports, "TypeParameterInstantiation", {
  enumerable: true,
  get: function () {
    return generated$1.typeParameterInstantiation;
  }
});
Object.defineProperty(exports, "UnionTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.unionTypeAnnotation;
  }
});
Object.defineProperty(exports, "Variance", {
  enumerable: true,
  get: function () {
    return generated$1.variance;
  }
});
Object.defineProperty(exports, "VoidTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.voidTypeAnnotation;
  }
});
Object.defineProperty(exports, "EnumDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.enumDeclaration;
  }
});
Object.defineProperty(exports, "EnumBooleanBody", {
  enumerable: true,
  get: function () {
    return generated$1.enumBooleanBody;
  }
});
Object.defineProperty(exports, "EnumNumberBody", {
  enumerable: true,
  get: function () {
    return generated$1.enumNumberBody;
  }
});
Object.defineProperty(exports, "EnumStringBody", {
  enumerable: true,
  get: function () {
    return generated$1.enumStringBody;
  }
});
Object.defineProperty(exports, "EnumSymbolBody", {
  enumerable: true,
  get: function () {
    return generated$1.enumSymbolBody;
  }
});
Object.defineProperty(exports, "EnumBooleanMember", {
  enumerable: true,
  get: function () {
    return generated$1.enumBooleanMember;
  }
});
Object.defineProperty(exports, "EnumNumberMember", {
  enumerable: true,
  get: function () {
    return generated$1.enumNumberMember;
  }
});
Object.defineProperty(exports, "EnumStringMember", {
  enumerable: true,
  get: function () {
    return generated$1.enumStringMember;
  }
});
Object.defineProperty(exports, "EnumDefaultedMember", {
  enumerable: true,
  get: function () {
    return generated$1.enumDefaultedMember;
  }
});
Object.defineProperty(exports, "JSXAttribute", {
  enumerable: true,
  get: function () {
    return generated$1.jsxAttribute;
  }
});
Object.defineProperty(exports, "JSXClosingElement", {
  enumerable: true,
  get: function () {
    return generated$1.jsxClosingElement;
  }
});
Object.defineProperty(exports, "JSXElement", {
  enumerable: true,
  get: function () {
    return generated$1.jsxElement;
  }
});
Object.defineProperty(exports, "JSXEmptyExpression", {
  enumerable: true,
  get: function () {
    return generated$1.jsxEmptyExpression;
  }
});
Object.defineProperty(exports, "JSXExpressionContainer", {
  enumerable: true,
  get: function () {
    return generated$1.jsxExpressionContainer;
  }
});
Object.defineProperty(exports, "JSXSpreadChild", {
  enumerable: true,
  get: function () {
    return generated$1.jsxSpreadChild;
  }
});
Object.defineProperty(exports, "JSXIdentifier", {
  enumerable: true,
  get: function () {
    return generated$1.jsxIdentifier;
  }
});
Object.defineProperty(exports, "JSXMemberExpression", {
  enumerable: true,
  get: function () {
    return generated$1.jsxMemberExpression;
  }
});
Object.defineProperty(exports, "JSXNamespacedName", {
  enumerable: true,
  get: function () {
    return generated$1.jsxNamespacedName;
  }
});
Object.defineProperty(exports, "JSXOpeningElement", {
  enumerable: true,
  get: function () {
    return generated$1.jsxOpeningElement;
  }
});
Object.defineProperty(exports, "JSXSpreadAttribute", {
  enumerable: true,
  get: function () {
    return generated$1.jsxSpreadAttribute;
  }
});
Object.defineProperty(exports, "JSXText", {
  enumerable: true,
  get: function () {
    return generated$1.jsxText;
  }
});
Object.defineProperty(exports, "JSXFragment", {
  enumerable: true,
  get: function () {
    return generated$1.jsxFragment;
  }
});
Object.defineProperty(exports, "JSXOpeningFragment", {
  enumerable: true,
  get: function () {
    return generated$1.jsxOpeningFragment;
  }
});
Object.defineProperty(exports, "JSXClosingFragment", {
  enumerable: true,
  get: function () {
    return generated$1.jsxClosingFragment;
  }
});
Object.defineProperty(exports, "Noop", {
  enumerable: true,
  get: function () {
    return generated$1.noop;
  }
});
Object.defineProperty(exports, "Placeholder", {
  enumerable: true,
  get: function () {
    return generated$1.placeholder;
  }
});
Object.defineProperty(exports, "V8IntrinsicIdentifier", {
  enumerable: true,
  get: function () {
    return generated$1.v8IntrinsicIdentifier;
  }
});
Object.defineProperty(exports, "ArgumentPlaceholder", {
  enumerable: true,
  get: function () {
    return generated$1.argumentPlaceholder;
  }
});
Object.defineProperty(exports, "BindExpression", {
  enumerable: true,
  get: function () {
    return generated$1.bindExpression;
  }
});
Object.defineProperty(exports, "ClassProperty", {
  enumerable: true,
  get: function () {
    return generated$1.classProperty;
  }
});
Object.defineProperty(exports, "PipelineTopicExpression", {
  enumerable: true,
  get: function () {
    return generated$1.pipelineTopicExpression;
  }
});
Object.defineProperty(exports, "PipelineBareFunction", {
  enumerable: true,
  get: function () {
    return generated$1.pipelineBareFunction;
  }
});
Object.defineProperty(exports, "PipelinePrimaryTopicReference", {
  enumerable: true,
  get: function () {
    return generated$1.pipelinePrimaryTopicReference;
  }
});
Object.defineProperty(exports, "ClassPrivateProperty", {
  enumerable: true,
  get: function () {
    return generated$1.classPrivateProperty;
  }
});
Object.defineProperty(exports, "ClassPrivateMethod", {
  enumerable: true,
  get: function () {
    return generated$1.classPrivateMethod;
  }
});
Object.defineProperty(exports, "ImportAttribute", {
  enumerable: true,
  get: function () {
    return generated$1.importAttribute;
  }
});
Object.defineProperty(exports, "Decorator", {
  enumerable: true,
  get: function () {
    return generated$1.decorator;
  }
});
Object.defineProperty(exports, "DoExpression", {
  enumerable: true,
  get: function () {
    return generated$1.doExpression;
  }
});
Object.defineProperty(exports, "ExportDefaultSpecifier", {
  enumerable: true,
  get: function () {
    return generated$1.exportDefaultSpecifier;
  }
});
Object.defineProperty(exports, "PrivateName", {
  enumerable: true,
  get: function () {
    return generated$1.privateName;
  }
});
Object.defineProperty(exports, "RecordExpression", {
  enumerable: true,
  get: function () {
    return generated$1.recordExpression;
  }
});
Object.defineProperty(exports, "TupleExpression", {
  enumerable: true,
  get: function () {
    return generated$1.tupleExpression;
  }
});
Object.defineProperty(exports, "DecimalLiteral", {
  enumerable: true,
  get: function () {
    return generated$1.decimalLiteral;
  }
});
Object.defineProperty(exports, "StaticBlock", {
  enumerable: true,
  get: function () {
    return generated$1.staticBlock;
  }
});
Object.defineProperty(exports, "ModuleExpression", {
  enumerable: true,
  get: function () {
    return generated$1.moduleExpression;
  }
});
Object.defineProperty(exports, "TSParameterProperty", {
  enumerable: true,
  get: function () {
    return generated$1.tsParameterProperty;
  }
});
Object.defineProperty(exports, "TSDeclareFunction", {
  enumerable: true,
  get: function () {
    return generated$1.tsDeclareFunction;
  }
});
Object.defineProperty(exports, "TSDeclareMethod", {
  enumerable: true,
  get: function () {
    return generated$1.tsDeclareMethod;
  }
});
Object.defineProperty(exports, "TSQualifiedName", {
  enumerable: true,
  get: function () {
    return generated$1.tsQualifiedName;
  }
});
Object.defineProperty(exports, "TSCallSignatureDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.tsCallSignatureDeclaration;
  }
});
Object.defineProperty(exports, "TSConstructSignatureDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.tsConstructSignatureDeclaration;
  }
});
Object.defineProperty(exports, "TSPropertySignature", {
  enumerable: true,
  get: function () {
    return generated$1.tsPropertySignature;
  }
});
Object.defineProperty(exports, "TSMethodSignature", {
  enumerable: true,
  get: function () {
    return generated$1.tsMethodSignature;
  }
});
Object.defineProperty(exports, "TSIndexSignature", {
  enumerable: true,
  get: function () {
    return generated$1.tsIndexSignature;
  }
});
Object.defineProperty(exports, "TSAnyKeyword", {
  enumerable: true,
  get: function () {
    return generated$1.tsAnyKeyword;
  }
});
Object.defineProperty(exports, "TSBooleanKeyword", {
  enumerable: true,
  get: function () {
    return generated$1.tsBooleanKeyword;
  }
});
Object.defineProperty(exports, "TSBigIntKeyword", {
  enumerable: true,
  get: function () {
    return generated$1.tsBigIntKeyword;
  }
});
Object.defineProperty(exports, "TSIntrinsicKeyword", {
  enumerable: true,
  get: function () {
    return generated$1.tsIntrinsicKeyword;
  }
});
Object.defineProperty(exports, "TSNeverKeyword", {
  enumerable: true,
  get: function () {
    return generated$1.tsNeverKeyword;
  }
});
Object.defineProperty(exports, "TSNullKeyword", {
  enumerable: true,
  get: function () {
    return generated$1.tsNullKeyword;
  }
});
Object.defineProperty(exports, "TSNumberKeyword", {
  enumerable: true,
  get: function () {
    return generated$1.tsNumberKeyword;
  }
});
Object.defineProperty(exports, "TSObjectKeyword", {
  enumerable: true,
  get: function () {
    return generated$1.tsObjectKeyword;
  }
});
Object.defineProperty(exports, "TSStringKeyword", {
  enumerable: true,
  get: function () {
    return generated$1.tsStringKeyword;
  }
});
Object.defineProperty(exports, "TSSymbolKeyword", {
  enumerable: true,
  get: function () {
    return generated$1.tsSymbolKeyword;
  }
});
Object.defineProperty(exports, "TSUndefinedKeyword", {
  enumerable: true,
  get: function () {
    return generated$1.tsUndefinedKeyword;
  }
});
Object.defineProperty(exports, "TSUnknownKeyword", {
  enumerable: true,
  get: function () {
    return generated$1.tsUnknownKeyword;
  }
});
Object.defineProperty(exports, "TSVoidKeyword", {
  enumerable: true,
  get: function () {
    return generated$1.tsVoidKeyword;
  }
});
Object.defineProperty(exports, "TSThisType", {
  enumerable: true,
  get: function () {
    return generated$1.tsThisType;
  }
});
Object.defineProperty(exports, "TSFunctionType", {
  enumerable: true,
  get: function () {
    return generated$1.tsFunctionType;
  }
});
Object.defineProperty(exports, "TSConstructorType", {
  enumerable: true,
  get: function () {
    return generated$1.tsConstructorType;
  }
});
Object.defineProperty(exports, "TSTypeReference", {
  enumerable: true,
  get: function () {
    return generated$1.tsTypeReference;
  }
});
Object.defineProperty(exports, "TSTypePredicate", {
  enumerable: true,
  get: function () {
    return generated$1.tsTypePredicate;
  }
});
Object.defineProperty(exports, "TSTypeQuery", {
  enumerable: true,
  get: function () {
    return generated$1.tsTypeQuery;
  }
});
Object.defineProperty(exports, "TSTypeLiteral", {
  enumerable: true,
  get: function () {
    return generated$1.tsTypeLiteral;
  }
});
Object.defineProperty(exports, "TSArrayType", {
  enumerable: true,
  get: function () {
    return generated$1.tsArrayType;
  }
});
Object.defineProperty(exports, "TSTupleType", {
  enumerable: true,
  get: function () {
    return generated$1.tsTupleType;
  }
});
Object.defineProperty(exports, "TSOptionalType", {
  enumerable: true,
  get: function () {
    return generated$1.tsOptionalType;
  }
});
Object.defineProperty(exports, "TSRestType", {
  enumerable: true,
  get: function () {
    return generated$1.tsRestType;
  }
});
Object.defineProperty(exports, "TSNamedTupleMember", {
  enumerable: true,
  get: function () {
    return generated$1.tsNamedTupleMember;
  }
});
Object.defineProperty(exports, "TSUnionType", {
  enumerable: true,
  get: function () {
    return generated$1.tsUnionType;
  }
});
Object.defineProperty(exports, "TSIntersectionType", {
  enumerable: true,
  get: function () {
    return generated$1.tsIntersectionType;
  }
});
Object.defineProperty(exports, "TSConditionalType", {
  enumerable: true,
  get: function () {
    return generated$1.tsConditionalType;
  }
});
Object.defineProperty(exports, "TSInferType", {
  enumerable: true,
  get: function () {
    return generated$1.tsInferType;
  }
});
Object.defineProperty(exports, "TSParenthesizedType", {
  enumerable: true,
  get: function () {
    return generated$1.tsParenthesizedType;
  }
});
Object.defineProperty(exports, "TSTypeOperator", {
  enumerable: true,
  get: function () {
    return generated$1.tsTypeOperator;
  }
});
Object.defineProperty(exports, "TSIndexedAccessType", {
  enumerable: true,
  get: function () {
    return generated$1.tsIndexedAccessType;
  }
});
Object.defineProperty(exports, "TSMappedType", {
  enumerable: true,
  get: function () {
    return generated$1.tsMappedType;
  }
});
Object.defineProperty(exports, "TSLiteralType", {
  enumerable: true,
  get: function () {
    return generated$1.tsLiteralType;
  }
});
Object.defineProperty(exports, "TSExpressionWithTypeArguments", {
  enumerable: true,
  get: function () {
    return generated$1.tsExpressionWithTypeArguments;
  }
});
Object.defineProperty(exports, "TSInterfaceDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.tsInterfaceDeclaration;
  }
});
Object.defineProperty(exports, "TSInterfaceBody", {
  enumerable: true,
  get: function () {
    return generated$1.tsInterfaceBody;
  }
});
Object.defineProperty(exports, "TSTypeAliasDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.tsTypeAliasDeclaration;
  }
});
Object.defineProperty(exports, "TSAsExpression", {
  enumerable: true,
  get: function () {
    return generated$1.tsAsExpression;
  }
});
Object.defineProperty(exports, "TSTypeAssertion", {
  enumerable: true,
  get: function () {
    return generated$1.tsTypeAssertion;
  }
});
Object.defineProperty(exports, "TSEnumDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.tsEnumDeclaration;
  }
});
Object.defineProperty(exports, "TSEnumMember", {
  enumerable: true,
  get: function () {
    return generated$1.tsEnumMember;
  }
});
Object.defineProperty(exports, "TSModuleDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.tsModuleDeclaration;
  }
});
Object.defineProperty(exports, "TSModuleBlock", {
  enumerable: true,
  get: function () {
    return generated$1.tsModuleBlock;
  }
});
Object.defineProperty(exports, "TSImportType", {
  enumerable: true,
  get: function () {
    return generated$1.tsImportType;
  }
});
Object.defineProperty(exports, "TSImportEqualsDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.tsImportEqualsDeclaration;
  }
});
Object.defineProperty(exports, "TSExternalModuleReference", {
  enumerable: true,
  get: function () {
    return generated$1.tsExternalModuleReference;
  }
});
Object.defineProperty(exports, "TSNonNullExpression", {
  enumerable: true,
  get: function () {
    return generated$1.tsNonNullExpression;
  }
});
Object.defineProperty(exports, "TSExportAssignment", {
  enumerable: true,
  get: function () {
    return generated$1.tsExportAssignment;
  }
});
Object.defineProperty(exports, "TSNamespaceExportDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.tsNamespaceExportDeclaration;
  }
});
Object.defineProperty(exports, "TSTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.tsTypeAnnotation;
  }
});
Object.defineProperty(exports, "TSTypeParameterInstantiation", {
  enumerable: true,
  get: function () {
    return generated$1.tsTypeParameterInstantiation;
  }
});
Object.defineProperty(exports, "TSTypeParameterDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.tsTypeParameterDeclaration;
  }
});
Object.defineProperty(exports, "TSTypeParameter", {
  enumerable: true,
  get: function () {
    return generated$1.tsTypeParameter;
  }
});
Object.defineProperty(exports, "NumberLiteral", {
  enumerable: true,
  get: function () {
    return generated$1.numberLiteral;
  }
});
Object.defineProperty(exports, "RegexLiteral", {
  enumerable: true,
  get: function () {
    return generated$1.regexLiteral;
  }
});
Object.defineProperty(exports, "RestProperty", {
  enumerable: true,
  get: function () {
    return generated$1.restProperty;
  }
});
Object.defineProperty(exports, "SpreadProperty", {
  enumerable: true,
  get: function () {
    return generated$1.spreadProperty;
  }
});
});

unwrapExports(uppercase);

var cloneNode_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cloneNode;





const has = Function.call.bind(Object.prototype.hasOwnProperty);

function cloneIfNode(obj, deep, withoutLoc) {
  if (obj && typeof obj.type === "string") {
    return cloneNode(obj, deep, withoutLoc);
  }

  return obj;
}

function cloneIfNodeOrArray(obj, deep, withoutLoc) {
  if (Array.isArray(obj)) {
    return obj.map(node => cloneIfNode(node, deep, withoutLoc));
  }

  return cloneIfNode(obj, deep, withoutLoc);
}

function cloneNode(node, deep = true, withoutLoc = false) {
  if (!node) return node;
  const {
    type
  } = node;
  const newNode = {
    type: node.type
  };

  if ((0, generated.isIdentifier)(node)) {
    newNode.name = node.name;

    if (has(node, "optional") && typeof node.optional === "boolean") {
      newNode.optional = node.optional;
    }

    if (has(node, "typeAnnotation")) {
      newNode.typeAnnotation = deep ? cloneIfNodeOrArray(node.typeAnnotation, true, withoutLoc) : node.typeAnnotation;
    }
  } else if (!has(definitions.NODE_FIELDS, type)) {
    throw new Error(`Unknown node type: "${type}"`);
  } else {
    for (const field of Object.keys(definitions.NODE_FIELDS[type])) {
      if (has(node, field)) {
        if (deep) {
          newNode[field] = (0, generated.isFile)(node) && field === "comments" ? maybeCloneComments(node.comments, deep, withoutLoc) : cloneIfNodeOrArray(node[field], true, withoutLoc);
        } else {
          newNode[field] = node[field];
        }
      }
    }
  }

  if (has(node, "loc")) {
    if (withoutLoc) {
      newNode.loc = null;
    } else {
      newNode.loc = node.loc;
    }
  }

  if (has(node, "leadingComments")) {
    newNode.leadingComments = maybeCloneComments(node.leadingComments, deep, withoutLoc);
  }

  if (has(node, "innerComments")) {
    newNode.innerComments = maybeCloneComments(node.innerComments, deep, withoutLoc);
  }

  if (has(node, "trailingComments")) {
    newNode.trailingComments = maybeCloneComments(node.trailingComments, deep, withoutLoc);
  }

  if (has(node, "extra")) {
    newNode.extra = Object.assign({}, node.extra);
  }

  return newNode;
}

function cloneCommentsWithoutLoc(comments) {
  return comments.map(({
    type,
    value
  }) => ({
    type,
    value,
    loc: null
  }));
}

function maybeCloneComments(comments, deep, withoutLoc) {
  return deep && withoutLoc && comments ? cloneCommentsWithoutLoc(comments) : comments;
}
});

unwrapExports(cloneNode_1);

var clone_1$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clone;

var _cloneNode = _interopRequireDefault(cloneNode_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function clone(node) {
  return (0, _cloneNode.default)(node, false);
}
});

unwrapExports(clone_1$1);

var cloneDeep_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cloneDeep;

var _cloneNode = _interopRequireDefault(cloneNode_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cloneDeep(node) {
  return (0, _cloneNode.default)(node);
}
});

unwrapExports(cloneDeep_1);

var cloneDeepWithoutLoc_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cloneDeepWithoutLoc;

var _cloneNode = _interopRequireDefault(cloneNode_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cloneDeepWithoutLoc(node) {
  return (0, _cloneNode.default)(node, true, true);
}
});

unwrapExports(cloneDeepWithoutLoc_1);

var cloneWithoutLoc_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cloneWithoutLoc;

var _cloneNode = _interopRequireDefault(cloneNode_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cloneWithoutLoc(node) {
  return (0, _cloneNode.default)(node, false, true);
}
});

unwrapExports(cloneWithoutLoc_1);

var addComments_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addComments;

function addComments(node, type, comments) {
  if (!comments || !node) return node;
  const key = `${type}Comments`;

  if (node[key]) {
    if (type === "leading") {
      node[key] = comments.concat(node[key]);
    } else {
      node[key] = node[key].concat(comments);
    }
  } else {
    node[key] = comments;
  }

  return node;
}
});

unwrapExports(addComments_1);

var addComment_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addComment;

var _addComments = _interopRequireDefault(addComments_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addComment(node, type, content, line) {
  return (0, _addComments.default)(node, type, [{
    type: line ? "CommentLine" : "CommentBlock",
    value: content
  }]);
}
});

unwrapExports(addComment_1);

var inherit_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inherit;

function inherit(key, child, parent) {
  if (child && parent) {
    child[key] = Array.from(new Set([].concat(child[key], parent[key]).filter(Boolean)));
  }
}
});

unwrapExports(inherit_1);

var inheritInnerComments_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inheritInnerComments;

var _inherit = _interopRequireDefault(inherit_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function inheritInnerComments(child, parent) {
  (0, _inherit.default)("innerComments", child, parent);
}
});

unwrapExports(inheritInnerComments_1);

var inheritLeadingComments_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inheritLeadingComments;

var _inherit = _interopRequireDefault(inherit_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function inheritLeadingComments(child, parent) {
  (0, _inherit.default)("leadingComments", child, parent);
}
});

unwrapExports(inheritLeadingComments_1);

var inheritTrailingComments_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inheritTrailingComments;

var _inherit = _interopRequireDefault(inherit_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function inheritTrailingComments(child, parent) {
  (0, _inherit.default)("trailingComments", child, parent);
}
});

unwrapExports(inheritTrailingComments_1);

var inheritsComments_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inheritsComments;

var _inheritTrailingComments = _interopRequireDefault(inheritTrailingComments_1);

var _inheritLeadingComments = _interopRequireDefault(inheritLeadingComments_1);

var _inheritInnerComments = _interopRequireDefault(inheritInnerComments_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function inheritsComments(child, parent) {
  (0, _inheritTrailingComments.default)(child, parent);
  (0, _inheritLeadingComments.default)(child, parent);
  (0, _inheritInnerComments.default)(child, parent);
  return child;
}
});

unwrapExports(inheritsComments_1);

var removeComments_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeComments;



function removeComments(node) {
  constants.COMMENT_KEYS.forEach(key => {
    node[key] = null;
  });

  return node;
}
});

unwrapExports(removeComments_1);

var generated$3 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TSBASETYPE_TYPES = exports.TSTYPE_TYPES = exports.TSTYPEELEMENT_TYPES = exports.PRIVATE_TYPES = exports.JSX_TYPES = exports.ENUMMEMBER_TYPES = exports.ENUMBODY_TYPES = exports.FLOWPREDICATE_TYPES = exports.FLOWDECLARATION_TYPES = exports.FLOWBASEANNOTATION_TYPES = exports.FLOWTYPE_TYPES = exports.FLOW_TYPES = exports.MODULESPECIFIER_TYPES = exports.EXPORTDECLARATION_TYPES = exports.MODULEDECLARATION_TYPES = exports.CLASS_TYPES = exports.PATTERN_TYPES = exports.UNARYLIKE_TYPES = exports.PROPERTY_TYPES = exports.OBJECTMEMBER_TYPES = exports.METHOD_TYPES = exports.USERWHITESPACABLE_TYPES = exports.IMMUTABLE_TYPES = exports.LITERAL_TYPES = exports.TSENTITYNAME_TYPES = exports.LVAL_TYPES = exports.PATTERNLIKE_TYPES = exports.DECLARATION_TYPES = exports.PUREISH_TYPES = exports.FUNCTIONPARENT_TYPES = exports.FUNCTION_TYPES = exports.FORXSTATEMENT_TYPES = exports.FOR_TYPES = exports.EXPRESSIONWRAPPER_TYPES = exports.WHILE_TYPES = exports.LOOP_TYPES = exports.CONDITIONAL_TYPES = exports.COMPLETIONSTATEMENT_TYPES = exports.TERMINATORLESS_TYPES = exports.STATEMENT_TYPES = exports.BLOCK_TYPES = exports.BLOCKPARENT_TYPES = exports.SCOPABLE_TYPES = exports.BINARY_TYPES = exports.EXPRESSION_TYPES = void 0;



const EXPRESSION_TYPES = definitions.FLIPPED_ALIAS_KEYS["Expression"];
exports.EXPRESSION_TYPES = EXPRESSION_TYPES;
const BINARY_TYPES = definitions.FLIPPED_ALIAS_KEYS["Binary"];
exports.BINARY_TYPES = BINARY_TYPES;
const SCOPABLE_TYPES = definitions.FLIPPED_ALIAS_KEYS["Scopable"];
exports.SCOPABLE_TYPES = SCOPABLE_TYPES;
const BLOCKPARENT_TYPES = definitions.FLIPPED_ALIAS_KEYS["BlockParent"];
exports.BLOCKPARENT_TYPES = BLOCKPARENT_TYPES;
const BLOCK_TYPES = definitions.FLIPPED_ALIAS_KEYS["Block"];
exports.BLOCK_TYPES = BLOCK_TYPES;
const STATEMENT_TYPES = definitions.FLIPPED_ALIAS_KEYS["Statement"];
exports.STATEMENT_TYPES = STATEMENT_TYPES;
const TERMINATORLESS_TYPES = definitions.FLIPPED_ALIAS_KEYS["Terminatorless"];
exports.TERMINATORLESS_TYPES = TERMINATORLESS_TYPES;
const COMPLETIONSTATEMENT_TYPES = definitions.FLIPPED_ALIAS_KEYS["CompletionStatement"];
exports.COMPLETIONSTATEMENT_TYPES = COMPLETIONSTATEMENT_TYPES;
const CONDITIONAL_TYPES = definitions.FLIPPED_ALIAS_KEYS["Conditional"];
exports.CONDITIONAL_TYPES = CONDITIONAL_TYPES;
const LOOP_TYPES = definitions.FLIPPED_ALIAS_KEYS["Loop"];
exports.LOOP_TYPES = LOOP_TYPES;
const WHILE_TYPES = definitions.FLIPPED_ALIAS_KEYS["While"];
exports.WHILE_TYPES = WHILE_TYPES;
const EXPRESSIONWRAPPER_TYPES = definitions.FLIPPED_ALIAS_KEYS["ExpressionWrapper"];
exports.EXPRESSIONWRAPPER_TYPES = EXPRESSIONWRAPPER_TYPES;
const FOR_TYPES = definitions.FLIPPED_ALIAS_KEYS["For"];
exports.FOR_TYPES = FOR_TYPES;
const FORXSTATEMENT_TYPES = definitions.FLIPPED_ALIAS_KEYS["ForXStatement"];
exports.FORXSTATEMENT_TYPES = FORXSTATEMENT_TYPES;
const FUNCTION_TYPES = definitions.FLIPPED_ALIAS_KEYS["Function"];
exports.FUNCTION_TYPES = FUNCTION_TYPES;
const FUNCTIONPARENT_TYPES = definitions.FLIPPED_ALIAS_KEYS["FunctionParent"];
exports.FUNCTIONPARENT_TYPES = FUNCTIONPARENT_TYPES;
const PUREISH_TYPES = definitions.FLIPPED_ALIAS_KEYS["Pureish"];
exports.PUREISH_TYPES = PUREISH_TYPES;
const DECLARATION_TYPES = definitions.FLIPPED_ALIAS_KEYS["Declaration"];
exports.DECLARATION_TYPES = DECLARATION_TYPES;
const PATTERNLIKE_TYPES = definitions.FLIPPED_ALIAS_KEYS["PatternLike"];
exports.PATTERNLIKE_TYPES = PATTERNLIKE_TYPES;
const LVAL_TYPES = definitions.FLIPPED_ALIAS_KEYS["LVal"];
exports.LVAL_TYPES = LVAL_TYPES;
const TSENTITYNAME_TYPES = definitions.FLIPPED_ALIAS_KEYS["TSEntityName"];
exports.TSENTITYNAME_TYPES = TSENTITYNAME_TYPES;
const LITERAL_TYPES = definitions.FLIPPED_ALIAS_KEYS["Literal"];
exports.LITERAL_TYPES = LITERAL_TYPES;
const IMMUTABLE_TYPES = definitions.FLIPPED_ALIAS_KEYS["Immutable"];
exports.IMMUTABLE_TYPES = IMMUTABLE_TYPES;
const USERWHITESPACABLE_TYPES = definitions.FLIPPED_ALIAS_KEYS["UserWhitespacable"];
exports.USERWHITESPACABLE_TYPES = USERWHITESPACABLE_TYPES;
const METHOD_TYPES = definitions.FLIPPED_ALIAS_KEYS["Method"];
exports.METHOD_TYPES = METHOD_TYPES;
const OBJECTMEMBER_TYPES = definitions.FLIPPED_ALIAS_KEYS["ObjectMember"];
exports.OBJECTMEMBER_TYPES = OBJECTMEMBER_TYPES;
const PROPERTY_TYPES = definitions.FLIPPED_ALIAS_KEYS["Property"];
exports.PROPERTY_TYPES = PROPERTY_TYPES;
const UNARYLIKE_TYPES = definitions.FLIPPED_ALIAS_KEYS["UnaryLike"];
exports.UNARYLIKE_TYPES = UNARYLIKE_TYPES;
const PATTERN_TYPES = definitions.FLIPPED_ALIAS_KEYS["Pattern"];
exports.PATTERN_TYPES = PATTERN_TYPES;
const CLASS_TYPES = definitions.FLIPPED_ALIAS_KEYS["Class"];
exports.CLASS_TYPES = CLASS_TYPES;
const MODULEDECLARATION_TYPES = definitions.FLIPPED_ALIAS_KEYS["ModuleDeclaration"];
exports.MODULEDECLARATION_TYPES = MODULEDECLARATION_TYPES;
const EXPORTDECLARATION_TYPES = definitions.FLIPPED_ALIAS_KEYS["ExportDeclaration"];
exports.EXPORTDECLARATION_TYPES = EXPORTDECLARATION_TYPES;
const MODULESPECIFIER_TYPES = definitions.FLIPPED_ALIAS_KEYS["ModuleSpecifier"];
exports.MODULESPECIFIER_TYPES = MODULESPECIFIER_TYPES;
const FLOW_TYPES = definitions.FLIPPED_ALIAS_KEYS["Flow"];
exports.FLOW_TYPES = FLOW_TYPES;
const FLOWTYPE_TYPES = definitions.FLIPPED_ALIAS_KEYS["FlowType"];
exports.FLOWTYPE_TYPES = FLOWTYPE_TYPES;
const FLOWBASEANNOTATION_TYPES = definitions.FLIPPED_ALIAS_KEYS["FlowBaseAnnotation"];
exports.FLOWBASEANNOTATION_TYPES = FLOWBASEANNOTATION_TYPES;
const FLOWDECLARATION_TYPES = definitions.FLIPPED_ALIAS_KEYS["FlowDeclaration"];
exports.FLOWDECLARATION_TYPES = FLOWDECLARATION_TYPES;
const FLOWPREDICATE_TYPES = definitions.FLIPPED_ALIAS_KEYS["FlowPredicate"];
exports.FLOWPREDICATE_TYPES = FLOWPREDICATE_TYPES;
const ENUMBODY_TYPES = definitions.FLIPPED_ALIAS_KEYS["EnumBody"];
exports.ENUMBODY_TYPES = ENUMBODY_TYPES;
const ENUMMEMBER_TYPES = definitions.FLIPPED_ALIAS_KEYS["EnumMember"];
exports.ENUMMEMBER_TYPES = ENUMMEMBER_TYPES;
const JSX_TYPES = definitions.FLIPPED_ALIAS_KEYS["JSX"];
exports.JSX_TYPES = JSX_TYPES;
const PRIVATE_TYPES = definitions.FLIPPED_ALIAS_KEYS["Private"];
exports.PRIVATE_TYPES = PRIVATE_TYPES;
const TSTYPEELEMENT_TYPES = definitions.FLIPPED_ALIAS_KEYS["TSTypeElement"];
exports.TSTYPEELEMENT_TYPES = TSTYPEELEMENT_TYPES;
const TSTYPE_TYPES = definitions.FLIPPED_ALIAS_KEYS["TSType"];
exports.TSTYPE_TYPES = TSTYPE_TYPES;
const TSBASETYPE_TYPES = definitions.FLIPPED_ALIAS_KEYS["TSBaseType"];
exports.TSBASETYPE_TYPES = TSBASETYPE_TYPES;
});

unwrapExports(generated$3);
var generated_1$3 = generated$3.TSBASETYPE_TYPES;
var generated_2$3 = generated$3.TSTYPE_TYPES;
var generated_3$3 = generated$3.TSTYPEELEMENT_TYPES;
var generated_4$3 = generated$3.PRIVATE_TYPES;
var generated_5$3 = generated$3.JSX_TYPES;
var generated_6$3 = generated$3.ENUMMEMBER_TYPES;
var generated_7$3 = generated$3.ENUMBODY_TYPES;
var generated_8$3 = generated$3.FLOWPREDICATE_TYPES;
var generated_9$3 = generated$3.FLOWDECLARATION_TYPES;
var generated_10$3 = generated$3.FLOWBASEANNOTATION_TYPES;
var generated_11$3 = generated$3.FLOWTYPE_TYPES;
var generated_12$3 = generated$3.FLOW_TYPES;
var generated_13$3 = generated$3.MODULESPECIFIER_TYPES;
var generated_14$3 = generated$3.EXPORTDECLARATION_TYPES;
var generated_15$3 = generated$3.MODULEDECLARATION_TYPES;
var generated_16$3 = generated$3.CLASS_TYPES;
var generated_17$3 = generated$3.PATTERN_TYPES;
var generated_18$3 = generated$3.UNARYLIKE_TYPES;
var generated_19$3 = generated$3.PROPERTY_TYPES;
var generated_20$3 = generated$3.OBJECTMEMBER_TYPES;
var generated_21$3 = generated$3.METHOD_TYPES;
var generated_22$3 = generated$3.USERWHITESPACABLE_TYPES;
var generated_23$3 = generated$3.IMMUTABLE_TYPES;
var generated_24$3 = generated$3.LITERAL_TYPES;
var generated_25$3 = generated$3.TSENTITYNAME_TYPES;
var generated_26$3 = generated$3.LVAL_TYPES;
var generated_27$3 = generated$3.PATTERNLIKE_TYPES;
var generated_28$3 = generated$3.DECLARATION_TYPES;
var generated_29$3 = generated$3.PUREISH_TYPES;
var generated_30$3 = generated$3.FUNCTIONPARENT_TYPES;
var generated_31$3 = generated$3.FUNCTION_TYPES;
var generated_32$3 = generated$3.FORXSTATEMENT_TYPES;
var generated_33$3 = generated$3.FOR_TYPES;
var generated_34$3 = generated$3.EXPRESSIONWRAPPER_TYPES;
var generated_35$3 = generated$3.WHILE_TYPES;
var generated_36$3 = generated$3.LOOP_TYPES;
var generated_37$3 = generated$3.CONDITIONAL_TYPES;
var generated_38$3 = generated$3.COMPLETIONSTATEMENT_TYPES;
var generated_39$3 = generated$3.TERMINATORLESS_TYPES;
var generated_40$3 = generated$3.STATEMENT_TYPES;
var generated_41$3 = generated$3.BLOCK_TYPES;
var generated_42$3 = generated$3.BLOCKPARENT_TYPES;
var generated_43$3 = generated$3.SCOPABLE_TYPES;
var generated_44$3 = generated$3.BINARY_TYPES;
var generated_45$3 = generated$3.EXPRESSION_TYPES;

var toBlock_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toBlock;





function toBlock(node, parent) {
  if ((0, generated.isBlockStatement)(node)) {
    return node;
  }

  let blockNodes = [];

  if ((0, generated.isEmptyStatement)(node)) {
    blockNodes = [];
  } else {
    if (!(0, generated.isStatement)(node)) {
      if ((0, generated.isFunction)(parent)) {
        node = (0, generated$1.returnStatement)(node);
      } else {
        node = (0, generated$1.expressionStatement)(node);
      }
    }

    blockNodes = [node];
  }

  return (0, generated$1.blockStatement)(blockNodes);
}
});

unwrapExports(toBlock_1);

var ensureBlock_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ensureBlock;

var _toBlock = _interopRequireDefault(toBlock_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ensureBlock(node, key = "body") {
  return node[key] = (0, _toBlock.default)(node[key], node);
}
});

unwrapExports(ensureBlock_1);

var toIdentifier_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toIdentifier;

var _isValidIdentifier = _interopRequireDefault(isValidIdentifier_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toIdentifier(input) {
  input = input + "";
  let name = "";

  for (const c of input) {
    name += (0, lib.isIdentifierChar)(c.codePointAt(0)) ? c : "-";
  }

  name = name.replace(/^[-0-9]+/, "");
  name = name.replace(/[-\s]+(.)?/g, function (match, c) {
    return c ? c.toUpperCase() : "";
  });

  if (!(0, _isValidIdentifier.default)(name)) {
    name = `_${name}`;
  }

  return name || "_";
}
});

unwrapExports(toIdentifier_1);

var toBindingIdentifierName_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toBindingIdentifierName;

var _toIdentifier = _interopRequireDefault(toIdentifier_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toBindingIdentifierName(name) {
  name = (0, _toIdentifier.default)(name);
  if (name === "eval" || name === "arguments") name = "_" + name;
  return name;
}
});

unwrapExports(toBindingIdentifierName_1);

var toComputedKey_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toComputedKey;





function toComputedKey(node, key = node.key || node.property) {
  if (!node.computed && (0, generated.isIdentifier)(key)) key = (0, generated$1.stringLiteral)(key.name);
  return key;
}
});

unwrapExports(toComputedKey_1);

var toExpression_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;



var _default = toExpression;
exports.default = _default;

function toExpression(node) {
  if ((0, generated.isExpressionStatement)(node)) {
    node = node.expression;
  }

  if ((0, generated.isExpression)(node)) {
    return node;
  }

  if ((0, generated.isClass)(node)) {
    node.type = "ClassExpression";
  } else if ((0, generated.isFunction)(node)) {
    node.type = "FunctionExpression";
  }

  if (!(0, generated.isExpression)(node)) {
    throw new Error(`cannot turn ${node.type} to an expression`);
  }

  return node;
}
});

unwrapExports(toExpression_1);

var traverseFast_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = traverseFast;



function traverseFast(node, enter, opts) {
  if (!node) return;
  const keys = definitions.VISITOR_KEYS[node.type];
  if (!keys) return;
  opts = opts || {};
  enter(node, opts);

  for (const key of keys) {
    const subNode = node[key];

    if (Array.isArray(subNode)) {
      for (const node of subNode) {
        traverseFast(node, enter, opts);
      }
    } else {
      traverseFast(subNode, enter, opts);
    }
  }
}
});

unwrapExports(traverseFast_1);

var removeProperties_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeProperties;



const CLEAR_KEYS = ["tokens", "start", "end", "loc", "raw", "rawValue"];

const CLEAR_KEYS_PLUS_COMMENTS = constants.COMMENT_KEYS.concat(["comments"]).concat(CLEAR_KEYS);

function removeProperties(node, opts = {}) {
  const map = opts.preserveComments ? CLEAR_KEYS : CLEAR_KEYS_PLUS_COMMENTS;

  for (const key of map) {
    if (node[key] != null) node[key] = undefined;
  }

  for (const key of Object.keys(node)) {
    if (key[0] === "_" && node[key] != null) node[key] = undefined;
  }

  const symbols = Object.getOwnPropertySymbols(node);

  for (const sym of symbols) {
    node[sym] = null;
  }
}
});

unwrapExports(removeProperties_1);

var removePropertiesDeep_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removePropertiesDeep;

var _traverseFast = _interopRequireDefault(traverseFast_1);

var _removeProperties = _interopRequireDefault(removeProperties_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function removePropertiesDeep(tree, opts) {
  (0, _traverseFast.default)(tree, _removeProperties.default, opts);
  return tree;
}
});

unwrapExports(removePropertiesDeep_1);

var toKeyAlias_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toKeyAlias;



var _cloneNode = _interopRequireDefault(cloneNode_1);

var _removePropertiesDeep = _interopRequireDefault(removePropertiesDeep_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toKeyAlias(node, key = node.key) {
  let alias;

  if (node.kind === "method") {
    return toKeyAlias.increment() + "";
  } else if ((0, generated.isIdentifier)(key)) {
    alias = key.name;
  } else if ((0, generated.isStringLiteral)(key)) {
    alias = JSON.stringify(key.value);
  } else {
    alias = JSON.stringify((0, _removePropertiesDeep.default)((0, _cloneNode.default)(key)));
  }

  if (node.computed) {
    alias = `[${alias}]`;
  }

  if (node.static) {
    alias = `static:${alias}`;
  }

  return alias;
}

toKeyAlias.uid = 0;

toKeyAlias.increment = function () {
  if (toKeyAlias.uid >= Number.MAX_SAFE_INTEGER) {
    return toKeyAlias.uid = 0;
  } else {
    return toKeyAlias.uid++;
  }
};
});

unwrapExports(toKeyAlias_1);

var getBindingIdentifiers_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBindingIdentifiers;



function getBindingIdentifiers(node, duplicates, outerOnly) {
  let search = [].concat(node);
  const ids = Object.create(null);

  while (search.length) {
    const id = search.shift();
    if (!id) continue;
    const keys = getBindingIdentifiers.keys[id.type];

    if ((0, generated.isIdentifier)(id)) {
      if (duplicates) {
        const _ids = ids[id.name] = ids[id.name] || [];

        _ids.push(id);
      } else {
        ids[id.name] = id;
      }

      continue;
    }

    if ((0, generated.isExportDeclaration)(id) && !(0, generated.isExportAllDeclaration)(id)) {
      if ((0, generated.isDeclaration)(id.declaration)) {
        search.push(id.declaration);
      }

      continue;
    }

    if (outerOnly) {
      if ((0, generated.isFunctionDeclaration)(id)) {
        search.push(id.id);
        continue;
      }

      if ((0, generated.isFunctionExpression)(id)) {
        continue;
      }
    }

    if (keys) {
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];

        if (id[key]) {
          search = search.concat(id[key]);
        }
      }
    }
  }

  return ids;
}

getBindingIdentifiers.keys = {
  DeclareClass: ["id"],
  DeclareFunction: ["id"],
  DeclareModule: ["id"],
  DeclareVariable: ["id"],
  DeclareInterface: ["id"],
  DeclareTypeAlias: ["id"],
  DeclareOpaqueType: ["id"],
  InterfaceDeclaration: ["id"],
  TypeAlias: ["id"],
  OpaqueType: ["id"],
  CatchClause: ["param"],
  LabeledStatement: ["label"],
  UnaryExpression: ["argument"],
  AssignmentExpression: ["left"],
  ImportSpecifier: ["local"],
  ImportNamespaceSpecifier: ["local"],
  ImportDefaultSpecifier: ["local"],
  ImportDeclaration: ["specifiers"],
  ExportSpecifier: ["exported"],
  ExportNamespaceSpecifier: ["exported"],
  ExportDefaultSpecifier: ["exported"],
  FunctionDeclaration: ["id", "params"],
  FunctionExpression: ["id", "params"],
  ArrowFunctionExpression: ["params"],
  ObjectMethod: ["params"],
  ClassMethod: ["params"],
  ForInStatement: ["left"],
  ForOfStatement: ["left"],
  ClassDeclaration: ["id"],
  ClassExpression: ["id"],
  RestElement: ["argument"],
  UpdateExpression: ["argument"],
  ObjectProperty: ["value"],
  AssignmentPattern: ["left"],
  ArrayPattern: ["elements"],
  ObjectPattern: ["properties"],
  VariableDeclaration: ["declarations"],
  VariableDeclarator: ["id"]
};
});

unwrapExports(getBindingIdentifiers_1);

var gatherSequenceExpressions_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gatherSequenceExpressions;

var _getBindingIdentifiers = _interopRequireDefault(getBindingIdentifiers_1);





var _cloneNode = _interopRequireDefault(cloneNode_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function gatherSequenceExpressions(nodes, scope, declars) {
  const exprs = [];
  let ensureLastUndefined = true;

  for (const node of nodes) {
    if (!(0, generated.isEmptyStatement)(node)) {
      ensureLastUndefined = false;
    }

    if ((0, generated.isExpression)(node)) {
      exprs.push(node);
    } else if ((0, generated.isExpressionStatement)(node)) {
      exprs.push(node.expression);
    } else if ((0, generated.isVariableDeclaration)(node)) {
      if (node.kind !== "var") return;

      for (const declar of node.declarations) {
        const bindings = (0, _getBindingIdentifiers.default)(declar);

        for (const key of Object.keys(bindings)) {
          declars.push({
            kind: node.kind,
            id: (0, _cloneNode.default)(bindings[key])
          });
        }

        if (declar.init) {
          exprs.push((0, generated$1.assignmentExpression)("=", declar.id, declar.init));
        }
      }

      ensureLastUndefined = true;
    } else if ((0, generated.isIfStatement)(node)) {
      const consequent = node.consequent ? gatherSequenceExpressions([node.consequent], scope, declars) : scope.buildUndefinedNode();
      const alternate = node.alternate ? gatherSequenceExpressions([node.alternate], scope, declars) : scope.buildUndefinedNode();
      if (!consequent || !alternate) return;
      exprs.push((0, generated$1.conditionalExpression)(node.test, consequent, alternate));
    } else if ((0, generated.isBlockStatement)(node)) {
      const body = gatherSequenceExpressions(node.body, scope, declars);
      if (!body) return;
      exprs.push(body);
    } else if ((0, generated.isEmptyStatement)(node)) {
      if (nodes.indexOf(node) === 0) {
        ensureLastUndefined = true;
      }
    } else {
      return;
    }
  }

  if (ensureLastUndefined) {
    exprs.push(scope.buildUndefinedNode());
  }

  if (exprs.length === 1) {
    return exprs[0];
  } else {
    return (0, generated$1.sequenceExpression)(exprs);
  }
}
});

unwrapExports(gatherSequenceExpressions_1);

var toSequenceExpression_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toSequenceExpression;

var _gatherSequenceExpressions = _interopRequireDefault(gatherSequenceExpressions_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toSequenceExpression(nodes, scope) {
  if (!(nodes == null ? void 0 : nodes.length)) return;
  const declars = [];
  const result = (0, _gatherSequenceExpressions.default)(nodes, scope, declars);
  if (!result) return;

  for (const declar of declars) {
    scope.push(declar);
  }

  return result;
}
});

unwrapExports(toSequenceExpression_1);

var toStatement_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;





var _default = toStatement;
exports.default = _default;

function toStatement(node, ignore) {
  if ((0, generated.isStatement)(node)) {
    return node;
  }

  let mustHaveId = false;
  let newType;

  if ((0, generated.isClass)(node)) {
    mustHaveId = true;
    newType = "ClassDeclaration";
  } else if ((0, generated.isFunction)(node)) {
    mustHaveId = true;
    newType = "FunctionDeclaration";
  } else if ((0, generated.isAssignmentExpression)(node)) {
    return (0, generated$1.expressionStatement)(node);
  }

  if (mustHaveId && !node.id) {
    newType = false;
  }

  if (!newType) {
    if (ignore) {
      return false;
    } else {
      throw new Error(`cannot turn ${node.type} to a statement`);
    }
  }

  node.type = newType;
  return node;
}
});

unwrapExports(toStatement_1);

/** `Object#toString` result references. */
var objectTag$3 = '[object Object]';

/** Used for built-in method references. */
var funcProto$2 = Function.prototype,
    objectProto$d = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$2 = funcProto$2.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$a = objectProto$d.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString$2.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike_1(value) || _baseGetTag(value) != objectTag$3) {
    return false;
  }
  var proto = _getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$a.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString$2.call(Ctor) == objectCtorString;
}

var isPlainObject_1 = isPlainObject;

/** `Object#toString` result references. */
var regexpTag$3 = '[object RegExp]';

/**
 * The base implementation of `_.isRegExp` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 */
function baseIsRegExp(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == regexpTag$3;
}

var _baseIsRegExp = baseIsRegExp;

/* Node.js helper references. */
var nodeIsRegExp = _nodeUtil && _nodeUtil.isRegExp;

/**
 * Checks if `value` is classified as a `RegExp` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 * @example
 *
 * _.isRegExp(/abc/);
 * // => true
 *
 * _.isRegExp('/abc/');
 * // => false
 */
var isRegExp = nodeIsRegExp ? _baseUnary(nodeIsRegExp) : _baseIsRegExp;

var isRegExp_1 = isRegExp;

var valueToNode_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isPlainObject = _interopRequireDefault(isPlainObject_1);

var _isRegExp = _interopRequireDefault(isRegExp_1);

var _isValidIdentifier = _interopRequireDefault(isValidIdentifier_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = valueToNode;
exports.default = _default;

function valueToNode(value) {
  if (value === undefined) {
    return (0, generated$1.identifier)("undefined");
  }

  if (value === true || value === false) {
    return (0, generated$1.booleanLiteral)(value);
  }

  if (value === null) {
    return (0, generated$1.nullLiteral)();
  }

  if (typeof value === "string") {
    return (0, generated$1.stringLiteral)(value);
  }

  if (typeof value === "number") {
    let result;

    if (Number.isFinite(value)) {
      result = (0, generated$1.numericLiteral)(Math.abs(value));
    } else {
      let numerator;

      if (Number.isNaN(value)) {
        numerator = (0, generated$1.numericLiteral)(0);
      } else {
        numerator = (0, generated$1.numericLiteral)(1);
      }

      result = (0, generated$1.binaryExpression)("/", numerator, (0, generated$1.numericLiteral)(0));
    }

    if (value < 0 || Object.is(value, -0)) {
      result = (0, generated$1.unaryExpression)("-", result);
    }

    return result;
  }

  if ((0, _isRegExp.default)(value)) {
    const pattern = value.source;
    const flags = value.toString().match(/\/([a-z]+|)$/)[1];
    return (0, generated$1.regExpLiteral)(pattern, flags);
  }

  if (Array.isArray(value)) {
    return (0, generated$1.arrayExpression)(value.map(valueToNode));
  }

  if ((0, _isPlainObject.default)(value)) {
    const props = [];

    for (const key of Object.keys(value)) {
      let nodeKey;

      if ((0, _isValidIdentifier.default)(key)) {
        nodeKey = (0, generated$1.identifier)(key);
      } else {
        nodeKey = (0, generated$1.stringLiteral)(key);
      }

      props.push((0, generated$1.objectProperty)(nodeKey, valueToNode(value[key])));
    }

    return (0, generated$1.objectExpression)(props);
  }

  throw new Error("don't know how to turn this value into a node");
}
});

unwrapExports(valueToNode_1);

var appendToMemberExpression_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = appendToMemberExpression;



function appendToMemberExpression(member, append, computed = false) {
  member.object = (0, generated$1.memberExpression)(member.object, member.property, member.computed);
  member.property = append;
  member.computed = !!computed;
  return member;
}
});

unwrapExports(appendToMemberExpression_1);

var inherits_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inherits;



var _inheritsComments = _interopRequireDefault(inheritsComments_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function inherits(child, parent) {
  if (!child || !parent) return child;

  for (const key of constants.INHERIT_KEYS.optional) {
    if (child[key] == null) {
      child[key] = parent[key];
    }
  }

  for (const key of Object.keys(parent)) {
    if (key[0] === "_" && key !== "__clone") child[key] = parent[key];
  }

  for (const key of constants.INHERIT_KEYS.force) {
    child[key] = parent[key];
  }

  (0, _inheritsComments.default)(child, parent);
  return child;
}
});

unwrapExports(inherits_1);

var prependToMemberExpression_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prependToMemberExpression;



function prependToMemberExpression(member, prepend) {
  member.object = (0, generated$1.memberExpression)(prepend, member.object);
  return member;
}
});

unwrapExports(prependToMemberExpression_1);

var getOuterBindingIdentifiers_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getBindingIdentifiers = _interopRequireDefault(getBindingIdentifiers_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = getOuterBindingIdentifiers;
exports.default = _default;

function getOuterBindingIdentifiers(node, duplicates) {
  return (0, _getBindingIdentifiers.default)(node, duplicates, true);
}
});

unwrapExports(getOuterBindingIdentifiers_1);

var traverse_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = traverse;



function traverse(node, handlers, state) {
  if (typeof handlers === "function") {
    handlers = {
      enter: handlers
    };
  }

  const {
    enter,
    exit
  } = handlers;
  traverseSimpleImpl(node, enter, exit, state, []);
}

function traverseSimpleImpl(node, enter, exit, state, ancestors) {
  const keys = definitions.VISITOR_KEYS[node.type];
  if (!keys) return;
  if (enter) enter(node, ancestors, state);

  for (const key of keys) {
    const subNode = node[key];

    if (Array.isArray(subNode)) {
      for (let i = 0; i < subNode.length; i++) {
        const child = subNode[i];
        if (!child) continue;
        ancestors.push({
          node,
          key,
          index: i
        });
        traverseSimpleImpl(child, enter, exit, state, ancestors);
        ancestors.pop();
      }
    } else if (subNode) {
      ancestors.push({
        node,
        key
      });
      traverseSimpleImpl(subNode, enter, exit, state, ancestors);
      ancestors.pop();
    }
  }

  if (exit) exit(node, ancestors, state);
}
});

unwrapExports(traverse_1);

var isBinding_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBinding;

var _getBindingIdentifiers = _interopRequireDefault(getBindingIdentifiers_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBinding(node, parent, grandparent) {
  if (grandparent && node.type === "Identifier" && parent.type === "ObjectProperty" && grandparent.type === "ObjectExpression") {
    return false;
  }

  const keys = _getBindingIdentifiers.default.keys[parent.type];

  if (keys) {
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const val = parent[key];

      if (Array.isArray(val)) {
        if (val.indexOf(node) >= 0) return true;
      } else {
        if (val === node) return true;
      }
    }
  }

  return false;
}
});

unwrapExports(isBinding_1);

var isLet_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isLet;





function isLet(node) {
  return (0, generated.isVariableDeclaration)(node) && (node.kind !== "var" || node[constants.BLOCK_SCOPED_SYMBOL]);
}
});

unwrapExports(isLet_1);

var isBlockScoped_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBlockScoped;



var _isLet = _interopRequireDefault(isLet_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBlockScoped(node) {
  return (0, generated.isFunctionDeclaration)(node) || (0, generated.isClassDeclaration)(node) || (0, _isLet.default)(node);
}
});

unwrapExports(isBlockScoped_1);

var isImmutable_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isImmutable;

var _isType = _interopRequireDefault(isType_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isImmutable(node) {
  if ((0, _isType.default)(node.type, "Immutable")) return true;

  if ((0, generated.isIdentifier)(node)) {
    if (node.name === "undefined") {
      return true;
    } else {
      return false;
    }
  }

  return false;
}
});

unwrapExports(isImmutable_1);

var isNodesEquivalent_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNodesEquivalent;



function isNodesEquivalent(a, b) {
  if (typeof a !== "object" || typeof b !== "object" || a == null || b == null) {
    return a === b;
  }

  if (a.type !== b.type) {
    return false;
  }

  const fields = Object.keys(definitions.NODE_FIELDS[a.type] || a.type);
  const visitorKeys = definitions.VISITOR_KEYS[a.type];

  for (const field of fields) {
    if (typeof a[field] !== typeof b[field]) {
      return false;
    }

    if (a[field] == null && b[field] == null) {
      continue;
    } else if (a[field] == null || b[field] == null) {
      return false;
    }

    if (Array.isArray(a[field])) {
      if (!Array.isArray(b[field])) {
        return false;
      }

      if (a[field].length !== b[field].length) {
        return false;
      }

      for (let i = 0; i < a[field].length; i++) {
        if (!isNodesEquivalent(a[field][i], b[field][i])) {
          return false;
        }
      }

      continue;
    }

    if (typeof a[field] === "object" && !(visitorKeys == null ? void 0 : visitorKeys.includes(field))) {
      for (const key of Object.keys(a[field])) {
        if (a[field][key] !== b[field][key]) {
          return false;
        }
      }

      continue;
    }

    if (!isNodesEquivalent(a[field], b[field])) {
      return false;
    }
  }

  return true;
}
});

unwrapExports(isNodesEquivalent_1);

var isReferenced_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isReferenced;

function isReferenced(node, parent, grandparent) {
  switch (parent.type) {
    case "MemberExpression":
    case "JSXMemberExpression":
    case "OptionalMemberExpression":
      if (parent.property === node) {
        return !!parent.computed;
      }

      return parent.object === node;

    case "VariableDeclarator":
      return parent.init === node;

    case "ArrowFunctionExpression":
      return parent.body === node;

    case "PrivateName":
      return false;

    case "ClassMethod":
    case "ClassPrivateMethod":
    case "ObjectMethod":
      if (parent.params.includes(node)) {
        return false;
      }

    case "ObjectProperty":
    case "ClassProperty":
    case "ClassPrivateProperty":
      if (parent.key === node) {
        return !!parent.computed;
      }

      if (parent.value === node) {
        return !grandparent || grandparent.type !== "ObjectPattern";
      }

      return true;

    case "ClassDeclaration":
    case "ClassExpression":
      return parent.superClass === node;

    case "AssignmentExpression":
      return parent.right === node;

    case "AssignmentPattern":
      return parent.right === node;

    case "LabeledStatement":
      return false;

    case "CatchClause":
      return false;

    case "RestElement":
      return false;

    case "BreakStatement":
    case "ContinueStatement":
      return false;

    case "FunctionDeclaration":
    case "FunctionExpression":
      return false;

    case "ExportNamespaceSpecifier":
    case "ExportDefaultSpecifier":
      return false;

    case "ExportSpecifier":
      if (grandparent == null ? void 0 : grandparent.source) {
        return false;
      }

      return parent.local === node;

    case "ImportDefaultSpecifier":
    case "ImportNamespaceSpecifier":
    case "ImportSpecifier":
      return false;

    case "JSXAttribute":
      return false;

    case "ObjectPattern":
    case "ArrayPattern":
      return false;

    case "MetaProperty":
      return false;

    case "ObjectTypeProperty":
      return parent.key !== node;

    case "TSEnumMember":
      return parent.id !== node;

    case "TSPropertySignature":
      if (parent.key === node) {
        return !!parent.computed;
      }

      return true;
  }

  return true;
}
});

unwrapExports(isReferenced_1);

var isScope_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isScope;



function isScope(node, parent) {
  if ((0, generated.isBlockStatement)(node) && ((0, generated.isFunction)(parent) || (0, generated.isCatchClause)(parent))) {
    return false;
  }

  if ((0, generated.isPattern)(node) && ((0, generated.isFunction)(parent) || (0, generated.isCatchClause)(parent))) {
    return true;
  }

  return (0, generated.isScopable)(node);
}
});

unwrapExports(isScope_1);

var isSpecifierDefault_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSpecifierDefault;



function isSpecifierDefault(specifier) {
  return (0, generated.isImportDefaultSpecifier)(specifier) || (0, generated.isIdentifier)(specifier.imported || specifier.exported, {
    name: "default"
  });
}
});

unwrapExports(isSpecifierDefault_1);

var isValidES3Identifier_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isValidES3Identifier;

var _isValidIdentifier = _interopRequireDefault(isValidIdentifier_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RESERVED_WORDS_ES3_ONLY = new Set(["abstract", "boolean", "byte", "char", "double", "enum", "final", "float", "goto", "implements", "int", "interface", "long", "native", "package", "private", "protected", "public", "short", "static", "synchronized", "throws", "transient", "volatile"]);

function isValidES3Identifier(name) {
  return (0, _isValidIdentifier.default)(name) && !RESERVED_WORDS_ES3_ONLY.has(name);
}
});

unwrapExports(isValidES3Identifier_1);

var isVar_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isVar;





function isVar(node) {
  return (0, generated.isVariableDeclaration)(node, {
    kind: "var"
  }) && !node[constants.BLOCK_SCOPED_SYMBOL];
}
});

unwrapExports(isVar_1);



var generated$4 = /*#__PURE__*/Object.freeze({
	__proto__: null
});

var lib$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  react: true,
  assertNode: true,
  createTypeAnnotationBasedOnTypeof: true,
  createUnionTypeAnnotation: true,
  createFlowUnionType: true,
  createTSUnionType: true,
  cloneNode: true,
  clone: true,
  cloneDeep: true,
  cloneDeepWithoutLoc: true,
  cloneWithoutLoc: true,
  addComment: true,
  addComments: true,
  inheritInnerComments: true,
  inheritLeadingComments: true,
  inheritsComments: true,
  inheritTrailingComments: true,
  removeComments: true,
  ensureBlock: true,
  toBindingIdentifierName: true,
  toBlock: true,
  toComputedKey: true,
  toExpression: true,
  toIdentifier: true,
  toKeyAlias: true,
  toSequenceExpression: true,
  toStatement: true,
  valueToNode: true,
  appendToMemberExpression: true,
  inherits: true,
  prependToMemberExpression: true,
  removeProperties: true,
  removePropertiesDeep: true,
  removeTypeDuplicates: true,
  getBindingIdentifiers: true,
  getOuterBindingIdentifiers: true,
  traverse: true,
  traverseFast: true,
  shallowEqual: true,
  is: true,
  isBinding: true,
  isBlockScoped: true,
  isImmutable: true,
  isLet: true,
  isNode: true,
  isNodesEquivalent: true,
  isPlaceholderType: true,
  isReferenced: true,
  isScope: true,
  isSpecifierDefault: true,
  isType: true,
  isValidES3Identifier: true,
  isValidIdentifier: true,
  isVar: true,
  matchesPattern: true,
  validate: true,
  buildMatchMemberExpression: true
};
Object.defineProperty(exports, "assertNode", {
  enumerable: true,
  get: function () {
    return _assertNode.default;
  }
});
Object.defineProperty(exports, "createTypeAnnotationBasedOnTypeof", {
  enumerable: true,
  get: function () {
    return _createTypeAnnotationBasedOnTypeof.default;
  }
});
Object.defineProperty(exports, "createUnionTypeAnnotation", {
  enumerable: true,
  get: function () {
    return _createFlowUnionType.default;
  }
});
Object.defineProperty(exports, "createFlowUnionType", {
  enumerable: true,
  get: function () {
    return _createFlowUnionType.default;
  }
});
Object.defineProperty(exports, "createTSUnionType", {
  enumerable: true,
  get: function () {
    return _createTSUnionType.default;
  }
});
Object.defineProperty(exports, "cloneNode", {
  enumerable: true,
  get: function () {
    return _cloneNode.default;
  }
});
Object.defineProperty(exports, "clone", {
  enumerable: true,
  get: function () {
    return _clone.default;
  }
});
Object.defineProperty(exports, "cloneDeep", {
  enumerable: true,
  get: function () {
    return _cloneDeep.default;
  }
});
Object.defineProperty(exports, "cloneDeepWithoutLoc", {
  enumerable: true,
  get: function () {
    return _cloneDeepWithoutLoc.default;
  }
});
Object.defineProperty(exports, "cloneWithoutLoc", {
  enumerable: true,
  get: function () {
    return _cloneWithoutLoc.default;
  }
});
Object.defineProperty(exports, "addComment", {
  enumerable: true,
  get: function () {
    return _addComment.default;
  }
});
Object.defineProperty(exports, "addComments", {
  enumerable: true,
  get: function () {
    return _addComments.default;
  }
});
Object.defineProperty(exports, "inheritInnerComments", {
  enumerable: true,
  get: function () {
    return _inheritInnerComments.default;
  }
});
Object.defineProperty(exports, "inheritLeadingComments", {
  enumerable: true,
  get: function () {
    return _inheritLeadingComments.default;
  }
});
Object.defineProperty(exports, "inheritsComments", {
  enumerable: true,
  get: function () {
    return _inheritsComments.default;
  }
});
Object.defineProperty(exports, "inheritTrailingComments", {
  enumerable: true,
  get: function () {
    return _inheritTrailingComments.default;
  }
});
Object.defineProperty(exports, "removeComments", {
  enumerable: true,
  get: function () {
    return _removeComments.default;
  }
});
Object.defineProperty(exports, "ensureBlock", {
  enumerable: true,
  get: function () {
    return _ensureBlock.default;
  }
});
Object.defineProperty(exports, "toBindingIdentifierName", {
  enumerable: true,
  get: function () {
    return _toBindingIdentifierName.default;
  }
});
Object.defineProperty(exports, "toBlock", {
  enumerable: true,
  get: function () {
    return _toBlock.default;
  }
});
Object.defineProperty(exports, "toComputedKey", {
  enumerable: true,
  get: function () {
    return _toComputedKey.default;
  }
});
Object.defineProperty(exports, "toExpression", {
  enumerable: true,
  get: function () {
    return _toExpression.default;
  }
});
Object.defineProperty(exports, "toIdentifier", {
  enumerable: true,
  get: function () {
    return _toIdentifier.default;
  }
});
Object.defineProperty(exports, "toKeyAlias", {
  enumerable: true,
  get: function () {
    return _toKeyAlias.default;
  }
});
Object.defineProperty(exports, "toSequenceExpression", {
  enumerable: true,
  get: function () {
    return _toSequenceExpression.default;
  }
});
Object.defineProperty(exports, "toStatement", {
  enumerable: true,
  get: function () {
    return _toStatement.default;
  }
});
Object.defineProperty(exports, "valueToNode", {
  enumerable: true,
  get: function () {
    return _valueToNode.default;
  }
});
Object.defineProperty(exports, "appendToMemberExpression", {
  enumerable: true,
  get: function () {
    return _appendToMemberExpression.default;
  }
});
Object.defineProperty(exports, "inherits", {
  enumerable: true,
  get: function () {
    return _inherits.default;
  }
});
Object.defineProperty(exports, "prependToMemberExpression", {
  enumerable: true,
  get: function () {
    return _prependToMemberExpression.default;
  }
});
Object.defineProperty(exports, "removeProperties", {
  enumerable: true,
  get: function () {
    return _removeProperties.default;
  }
});
Object.defineProperty(exports, "removePropertiesDeep", {
  enumerable: true,
  get: function () {
    return _removePropertiesDeep.default;
  }
});
Object.defineProperty(exports, "removeTypeDuplicates", {
  enumerable: true,
  get: function () {
    return _removeTypeDuplicates.default;
  }
});
Object.defineProperty(exports, "getBindingIdentifiers", {
  enumerable: true,
  get: function () {
    return _getBindingIdentifiers.default;
  }
});
Object.defineProperty(exports, "getOuterBindingIdentifiers", {
  enumerable: true,
  get: function () {
    return _getOuterBindingIdentifiers.default;
  }
});
Object.defineProperty(exports, "traverse", {
  enumerable: true,
  get: function () {
    return _traverse.default;
  }
});
Object.defineProperty(exports, "traverseFast", {
  enumerable: true,
  get: function () {
    return _traverseFast.default;
  }
});
Object.defineProperty(exports, "shallowEqual", {
  enumerable: true,
  get: function () {
    return _shallowEqual.default;
  }
});
Object.defineProperty(exports, "is", {
  enumerable: true,
  get: function () {
    return _is.default;
  }
});
Object.defineProperty(exports, "isBinding", {
  enumerable: true,
  get: function () {
    return _isBinding.default;
  }
});
Object.defineProperty(exports, "isBlockScoped", {
  enumerable: true,
  get: function () {
    return _isBlockScoped.default;
  }
});
Object.defineProperty(exports, "isImmutable", {
  enumerable: true,
  get: function () {
    return _isImmutable.default;
  }
});
Object.defineProperty(exports, "isLet", {
  enumerable: true,
  get: function () {
    return _isLet.default;
  }
});
Object.defineProperty(exports, "isNode", {
  enumerable: true,
  get: function () {
    return _isNode.default;
  }
});
Object.defineProperty(exports, "isNodesEquivalent", {
  enumerable: true,
  get: function () {
    return _isNodesEquivalent.default;
  }
});
Object.defineProperty(exports, "isPlaceholderType", {
  enumerable: true,
  get: function () {
    return _isPlaceholderType.default;
  }
});
Object.defineProperty(exports, "isReferenced", {
  enumerable: true,
  get: function () {
    return _isReferenced.default;
  }
});
Object.defineProperty(exports, "isScope", {
  enumerable: true,
  get: function () {
    return _isScope.default;
  }
});
Object.defineProperty(exports, "isSpecifierDefault", {
  enumerable: true,
  get: function () {
    return _isSpecifierDefault.default;
  }
});
Object.defineProperty(exports, "isType", {
  enumerable: true,
  get: function () {
    return _isType.default;
  }
});
Object.defineProperty(exports, "isValidES3Identifier", {
  enumerable: true,
  get: function () {
    return _isValidES3Identifier.default;
  }
});
Object.defineProperty(exports, "isValidIdentifier", {
  enumerable: true,
  get: function () {
    return _isValidIdentifier.default;
  }
});
Object.defineProperty(exports, "isVar", {
  enumerable: true,
  get: function () {
    return _isVar.default;
  }
});
Object.defineProperty(exports, "matchesPattern", {
  enumerable: true,
  get: function () {
    return _matchesPattern.default;
  }
});
Object.defineProperty(exports, "validate", {
  enumerable: true,
  get: function () {
    return _validate.default;
  }
});
Object.defineProperty(exports, "buildMatchMemberExpression", {
  enumerable: true,
  get: function () {
    return _buildMatchMemberExpression.default;
  }
});
exports.react = void 0;

var _isReactComponent = _interopRequireDefault(isReactComponent_1);

var _isCompatTag = _interopRequireDefault(isCompatTag_1);

var _buildChildren = _interopRequireDefault(buildChildren_1);

var _assertNode = _interopRequireDefault(assertNode_1);



Object.keys(generated$2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === generated$2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return generated$2[key];
    }
  });
});

var _createTypeAnnotationBasedOnTypeof = _interopRequireDefault(createTypeAnnotationBasedOnTypeof_1);

var _createFlowUnionType = _interopRequireDefault(createFlowUnionType_1);

var _createTSUnionType = _interopRequireDefault(createTSUnionType_1);



Object.keys(generated$1).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === generated$1[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return generated$1[key];
    }
  });
});



Object.keys(uppercase).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === uppercase[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return uppercase[key];
    }
  });
});

var _cloneNode = _interopRequireDefault(cloneNode_1);

var _clone = _interopRequireDefault(clone_1$1);

var _cloneDeep = _interopRequireDefault(cloneDeep_1);

var _cloneDeepWithoutLoc = _interopRequireDefault(cloneDeepWithoutLoc_1);

var _cloneWithoutLoc = _interopRequireDefault(cloneWithoutLoc_1);

var _addComment = _interopRequireDefault(addComment_1);

var _addComments = _interopRequireDefault(addComments_1);

var _inheritInnerComments = _interopRequireDefault(inheritInnerComments_1);

var _inheritLeadingComments = _interopRequireDefault(inheritLeadingComments_1);

var _inheritsComments = _interopRequireDefault(inheritsComments_1);

var _inheritTrailingComments = _interopRequireDefault(inheritTrailingComments_1);

var _removeComments = _interopRequireDefault(removeComments_1);



Object.keys(generated$3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === generated$3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return generated$3[key];
    }
  });
});



Object.keys(constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === constants[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return constants[key];
    }
  });
});

var _ensureBlock = _interopRequireDefault(ensureBlock_1);

var _toBindingIdentifierName = _interopRequireDefault(toBindingIdentifierName_1);

var _toBlock = _interopRequireDefault(toBlock_1);

var _toComputedKey = _interopRequireDefault(toComputedKey_1);

var _toExpression = _interopRequireDefault(toExpression_1);

var _toIdentifier = _interopRequireDefault(toIdentifier_1);

var _toKeyAlias = _interopRequireDefault(toKeyAlias_1);

var _toSequenceExpression = _interopRequireDefault(toSequenceExpression_1);

var _toStatement = _interopRequireDefault(toStatement_1);

var _valueToNode = _interopRequireDefault(valueToNode_1);



Object.keys(definitions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === definitions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return definitions[key];
    }
  });
});

var _appendToMemberExpression = _interopRequireDefault(appendToMemberExpression_1);

var _inherits = _interopRequireDefault(inherits_1);

var _prependToMemberExpression = _interopRequireDefault(prependToMemberExpression_1);

var _removeProperties = _interopRequireDefault(removeProperties_1);

var _removePropertiesDeep = _interopRequireDefault(removePropertiesDeep_1);

var _removeTypeDuplicates = _interopRequireDefault(removeTypeDuplicates_1);

var _getBindingIdentifiers = _interopRequireDefault(getBindingIdentifiers_1);

var _getOuterBindingIdentifiers = _interopRequireDefault(getOuterBindingIdentifiers_1);

var _traverse = _interopRequireWildcard(traverse_1);

Object.keys(_traverse).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _traverse[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _traverse[key];
    }
  });
});

var _traverseFast = _interopRequireDefault(traverseFast_1);

var _shallowEqual = _interopRequireDefault(shallowEqual_1);

var _is = _interopRequireDefault(is_1);

var _isBinding = _interopRequireDefault(isBinding_1);

var _isBlockScoped = _interopRequireDefault(isBlockScoped_1);

var _isImmutable = _interopRequireDefault(isImmutable_1);

var _isLet = _interopRequireDefault(isLet_1);

var _isNode = _interopRequireDefault(isNode_1);

var _isNodesEquivalent = _interopRequireDefault(isNodesEquivalent_1);

var _isPlaceholderType = _interopRequireDefault(isPlaceholderType_1);

var _isReferenced = _interopRequireDefault(isReferenced_1);

var _isScope = _interopRequireDefault(isScope_1);

var _isSpecifierDefault = _interopRequireDefault(isSpecifierDefault_1);

var _isType = _interopRequireDefault(isType_1);

var _isValidES3Identifier = _interopRequireDefault(isValidES3Identifier_1);

var _isValidIdentifier = _interopRequireDefault(isValidIdentifier_1);

var _isVar = _interopRequireDefault(isVar_1);

var _matchesPattern = _interopRequireDefault(matchesPattern_1);

var _validate = _interopRequireDefault(validate_1);

var _buildMatchMemberExpression = _interopRequireDefault(buildMatchMemberExpression_1);



Object.keys(generated).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === generated[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return generated[key];
    }
  });
});



Object.keys(generated$4).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === generated$4[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return generated$4[key];
    }
  });
});

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const react = {
  isReactComponent: _isReactComponent.default,
  isCompatTag: _isCompatTag.default,
  buildChildren: _buildChildren.default
};
exports.react = react;
});

var Types = unwrapExports(lib$1);
var lib_1 = lib$1.react;

var lib$2 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', { value: true });

const beforeExpr = true;
const startsExpr = true;
const isLoop = true;
const isAssign = true;
const prefix = true;
const postfix = true;
class TokenType {
  constructor(label, conf = {}) {
    this.label = void 0;
    this.keyword = void 0;
    this.beforeExpr = void 0;
    this.startsExpr = void 0;
    this.rightAssociative = void 0;
    this.isLoop = void 0;
    this.isAssign = void 0;
    this.prefix = void 0;
    this.postfix = void 0;
    this.binop = void 0;
    this.updateContext = void 0;
    this.label = label;
    this.keyword = conf.keyword;
    this.beforeExpr = !!conf.beforeExpr;
    this.startsExpr = !!conf.startsExpr;
    this.rightAssociative = !!conf.rightAssociative;
    this.isLoop = !!conf.isLoop;
    this.isAssign = !!conf.isAssign;
    this.prefix = !!conf.prefix;
    this.postfix = !!conf.postfix;
    this.binop = conf.binop != null ? conf.binop : null;
    this.updateContext = null;
  }

}
const keywords = new Map();

function createKeyword(name, options = {}) {
  options.keyword = name;
  const token = new TokenType(name, options);
  keywords.set(name, token);
  return token;
}

function createBinop(name, binop) {
  return new TokenType(name, {
    beforeExpr,
    binop
  });
}

const types = {
  num: new TokenType("num", {
    startsExpr
  }),
  bigint: new TokenType("bigint", {
    startsExpr
  }),
  decimal: new TokenType("decimal", {
    startsExpr
  }),
  regexp: new TokenType("regexp", {
    startsExpr
  }),
  string: new TokenType("string", {
    startsExpr
  }),
  name: new TokenType("name", {
    startsExpr
  }),
  eof: new TokenType("eof"),
  bracketL: new TokenType("[", {
    beforeExpr,
    startsExpr
  }),
  bracketHashL: new TokenType("#[", {
    beforeExpr,
    startsExpr
  }),
  bracketBarL: new TokenType("[|", {
    beforeExpr,
    startsExpr
  }),
  bracketR: new TokenType("]"),
  bracketBarR: new TokenType("|]"),
  braceL: new TokenType("{", {
    beforeExpr,
    startsExpr
  }),
  braceBarL: new TokenType("{|", {
    beforeExpr,
    startsExpr
  }),
  braceHashL: new TokenType("#{", {
    beforeExpr,
    startsExpr
  }),
  braceR: new TokenType("}"),
  braceBarR: new TokenType("|}"),
  parenL: new TokenType("(", {
    beforeExpr,
    startsExpr
  }),
  parenR: new TokenType(")"),
  comma: new TokenType(",", {
    beforeExpr
  }),
  semi: new TokenType(";", {
    beforeExpr
  }),
  colon: new TokenType(":", {
    beforeExpr
  }),
  doubleColon: new TokenType("::", {
    beforeExpr
  }),
  dot: new TokenType("."),
  question: new TokenType("?", {
    beforeExpr
  }),
  questionDot: new TokenType("?."),
  arrow: new TokenType("=>", {
    beforeExpr
  }),
  template: new TokenType("template"),
  ellipsis: new TokenType("...", {
    beforeExpr
  }),
  backQuote: new TokenType("`", {
    startsExpr
  }),
  dollarBraceL: new TokenType("${", {
    beforeExpr,
    startsExpr
  }),
  at: new TokenType("@"),
  hash: new TokenType("#", {
    startsExpr
  }),
  interpreterDirective: new TokenType("#!..."),
  eq: new TokenType("=", {
    beforeExpr,
    isAssign
  }),
  assign: new TokenType("_=", {
    beforeExpr,
    isAssign
  }),
  incDec: new TokenType("++/--", {
    prefix,
    postfix,
    startsExpr
  }),
  bang: new TokenType("!", {
    beforeExpr,
    prefix,
    startsExpr
  }),
  tilde: new TokenType("~", {
    beforeExpr,
    prefix,
    startsExpr
  }),
  pipeline: createBinop("|>", 0),
  nullishCoalescing: createBinop("??", 1),
  logicalOR: createBinop("||", 1),
  logicalAND: createBinop("&&", 2),
  bitwiseOR: createBinop("|", 3),
  bitwiseXOR: createBinop("^", 4),
  bitwiseAND: createBinop("&", 5),
  equality: createBinop("==/!=/===/!==", 6),
  relational: createBinop("</>/<=/>=", 7),
  bitShift: createBinop("<</>>/>>>", 8),
  plusMin: new TokenType("+/-", {
    beforeExpr,
    binop: 9,
    prefix,
    startsExpr
  }),
  modulo: new TokenType("%", {
    beforeExpr,
    binop: 10,
    startsExpr
  }),
  star: new TokenType("*", {
    binop: 10
  }),
  slash: createBinop("/", 10),
  exponent: new TokenType("**", {
    beforeExpr,
    binop: 11,
    rightAssociative: true
  }),
  _break: createKeyword("break"),
  _case: createKeyword("case", {
    beforeExpr
  }),
  _catch: createKeyword("catch"),
  _continue: createKeyword("continue"),
  _debugger: createKeyword("debugger"),
  _default: createKeyword("default", {
    beforeExpr
  }),
  _do: createKeyword("do", {
    isLoop,
    beforeExpr
  }),
  _else: createKeyword("else", {
    beforeExpr
  }),
  _finally: createKeyword("finally"),
  _for: createKeyword("for", {
    isLoop
  }),
  _function: createKeyword("function", {
    startsExpr
  }),
  _if: createKeyword("if"),
  _return: createKeyword("return", {
    beforeExpr
  }),
  _switch: createKeyword("switch"),
  _throw: createKeyword("throw", {
    beforeExpr,
    prefix,
    startsExpr
  }),
  _try: createKeyword("try"),
  _var: createKeyword("var"),
  _const: createKeyword("const"),
  _while: createKeyword("while", {
    isLoop
  }),
  _with: createKeyword("with"),
  _new: createKeyword("new", {
    beforeExpr,
    startsExpr
  }),
  _this: createKeyword("this", {
    startsExpr
  }),
  _super: createKeyword("super", {
    startsExpr
  }),
  _class: createKeyword("class", {
    startsExpr
  }),
  _extends: createKeyword("extends", {
    beforeExpr
  }),
  _export: createKeyword("export"),
  _import: createKeyword("import", {
    startsExpr
  }),
  _null: createKeyword("null", {
    startsExpr
  }),
  _true: createKeyword("true", {
    startsExpr
  }),
  _false: createKeyword("false", {
    startsExpr
  }),
  _in: createKeyword("in", {
    beforeExpr,
    binop: 7
  }),
  _instanceof: createKeyword("instanceof", {
    beforeExpr,
    binop: 7
  }),
  _typeof: createKeyword("typeof", {
    beforeExpr,
    prefix,
    startsExpr
  }),
  _void: createKeyword("void", {
    beforeExpr,
    prefix,
    startsExpr
  }),
  _delete: createKeyword("delete", {
    beforeExpr,
    prefix,
    startsExpr
  })
};

const lineBreak = /\r\n?|[\n\u2028\u2029]/;
const lineBreakG = new RegExp(lineBreak.source, "g");
function isNewLine(code) {
  switch (code) {
    case 10:
    case 13:
    case 8232:
    case 8233:
      return true;

    default:
      return false;
  }
}
const skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
function isWhitespace(code) {
  switch (code) {
    case 0x0009:
    case 0x000b:
    case 0x000c:
    case 32:
    case 160:
    case 5760:
    case 0x2000:
    case 0x2001:
    case 0x2002:
    case 0x2003:
    case 0x2004:
    case 0x2005:
    case 0x2006:
    case 0x2007:
    case 0x2008:
    case 0x2009:
    case 0x200a:
    case 0x202f:
    case 0x205f:
    case 0x3000:
    case 0xfeff:
      return true;

    default:
      return false;
  }
}

class Position {
  constructor(line, col) {
    this.line = void 0;
    this.column = void 0;
    this.line = line;
    this.column = col;
  }

}
class SourceLocation {
  constructor(start, end) {
    this.start = void 0;
    this.end = void 0;
    this.filename = void 0;
    this.identifierName = void 0;
    this.start = start;
    this.end = end;
  }

}
function getLineInfo(input, offset) {
  let line = 1;
  let lineStart = 0;
  let match;
  lineBreakG.lastIndex = 0;

  while ((match = lineBreakG.exec(input)) && match.index < offset) {
    line++;
    lineStart = lineBreakG.lastIndex;
  }

  return new Position(line, offset - lineStart);
}

class BaseParser {
  constructor() {
    this.sawUnambiguousESM = false;
    this.ambiguousScriptDifferentAst = false;
  }

  hasPlugin(name) {
    return this.plugins.has(name);
  }

  getPluginOption(plugin, name) {
    if (this.hasPlugin(plugin)) return this.plugins.get(plugin)[name];
  }

}

function last(stack) {
  return stack[stack.length - 1];
}

class CommentsParser extends BaseParser {
  addComment(comment) {
    if (this.filename) comment.loc.filename = this.filename;
    this.state.trailingComments.push(comment);
    this.state.leadingComments.push(comment);
  }

  adjustCommentsAfterTrailingComma(node, elements, takeAllComments) {
    if (this.state.leadingComments.length === 0) {
      return;
    }

    let lastElement = null;
    let i = elements.length;

    while (lastElement === null && i > 0) {
      lastElement = elements[--i];
    }

    if (lastElement === null) {
      return;
    }

    for (let j = 0; j < this.state.leadingComments.length; j++) {
      if (this.state.leadingComments[j].end < this.state.commentPreviousNode.end) {
        this.state.leadingComments.splice(j, 1);
        j--;
      }
    }

    const newTrailingComments = [];

    for (let i = 0; i < this.state.leadingComments.length; i++) {
      const leadingComment = this.state.leadingComments[i];

      if (leadingComment.end < node.end) {
        newTrailingComments.push(leadingComment);

        if (!takeAllComments) {
          this.state.leadingComments.splice(i, 1);
          i--;
        }
      } else {
        if (node.trailingComments === undefined) {
          node.trailingComments = [];
        }

        node.trailingComments.push(leadingComment);
      }
    }

    if (takeAllComments) this.state.leadingComments = [];

    if (newTrailingComments.length > 0) {
      lastElement.trailingComments = newTrailingComments;
    } else if (lastElement.trailingComments !== undefined) {
      lastElement.trailingComments = [];
    }
  }

  processComment(node) {
    if (node.type === "Program" && node.body.length > 0) return;
    const stack = this.state.commentStack;
    let firstChild, lastChild, trailingComments, i, j;

    if (this.state.trailingComments.length > 0) {
      if (this.state.trailingComments[0].start >= node.end) {
        trailingComments = this.state.trailingComments;
        this.state.trailingComments = [];
      } else {
        this.state.trailingComments.length = 0;
      }
    } else if (stack.length > 0) {
      const lastInStack = last(stack);

      if (lastInStack.trailingComments && lastInStack.trailingComments[0].start >= node.end) {
        trailingComments = lastInStack.trailingComments;
        delete lastInStack.trailingComments;
      }
    }

    if (stack.length > 0 && last(stack).start >= node.start) {
      firstChild = stack.pop();
    }

    while (stack.length > 0 && last(stack).start >= node.start) {
      lastChild = stack.pop();
    }

    if (!lastChild && firstChild) lastChild = firstChild;

    if (firstChild) {
      switch (node.type) {
        case "ObjectExpression":
          this.adjustCommentsAfterTrailingComma(node, node.properties);
          break;

        case "ObjectPattern":
          this.adjustCommentsAfterTrailingComma(node, node.properties, true);
          break;

        case "CallExpression":
          this.adjustCommentsAfterTrailingComma(node, node.arguments);
          break;

        case "ArrayExpression":
          this.adjustCommentsAfterTrailingComma(node, node.elements);
          break;

        case "ArrayPattern":
          this.adjustCommentsAfterTrailingComma(node, node.elements, true);
          break;
      }
    } else if (this.state.commentPreviousNode && (this.state.commentPreviousNode.type === "ImportSpecifier" && node.type !== "ImportSpecifier" || this.state.commentPreviousNode.type === "ExportSpecifier" && node.type !== "ExportSpecifier")) {
      this.adjustCommentsAfterTrailingComma(node, [this.state.commentPreviousNode]);
    }

    if (lastChild) {
      if (lastChild.leadingComments) {
        if (lastChild !== node && lastChild.leadingComments.length > 0 && last(lastChild.leadingComments).end <= node.start) {
          node.leadingComments = lastChild.leadingComments;
          delete lastChild.leadingComments;
        } else {
          for (i = lastChild.leadingComments.length - 2; i >= 0; --i) {
            if (lastChild.leadingComments[i].end <= node.start) {
              node.leadingComments = lastChild.leadingComments.splice(0, i + 1);
              break;
            }
          }
        }
      }
    } else if (this.state.leadingComments.length > 0) {
      if (last(this.state.leadingComments).end <= node.start) {
        if (this.state.commentPreviousNode) {
          for (j = 0; j < this.state.leadingComments.length; j++) {
            if (this.state.leadingComments[j].end < this.state.commentPreviousNode.end) {
              this.state.leadingComments.splice(j, 1);
              j--;
            }
          }
        }

        if (this.state.leadingComments.length > 0) {
          node.leadingComments = this.state.leadingComments;
          this.state.leadingComments = [];
        }
      } else {
        for (i = 0; i < this.state.leadingComments.length; i++) {
          if (this.state.leadingComments[i].end > node.start) {
            break;
          }
        }

        const leadingComments = this.state.leadingComments.slice(0, i);

        if (leadingComments.length) {
          node.leadingComments = leadingComments;
        }

        trailingComments = this.state.leadingComments.slice(i);

        if (trailingComments.length === 0) {
          trailingComments = null;
        }
      }
    }

    this.state.commentPreviousNode = node;

    if (trailingComments) {
      if (trailingComments.length && trailingComments[0].start >= node.start && last(trailingComments).end <= node.end) {
        node.innerComments = trailingComments;
      } else {
        const firstTrailingCommentIndex = trailingComments.findIndex(comment => comment.end >= node.end);

        if (firstTrailingCommentIndex > 0) {
          node.innerComments = trailingComments.slice(0, firstTrailingCommentIndex);
          node.trailingComments = trailingComments.slice(firstTrailingCommentIndex);
        } else {
          node.trailingComments = trailingComments;
        }
      }
    }

    stack.push(node);
  }

}

const ErrorMessages = Object.freeze({
  AccessorIsGenerator: "A %0ter cannot be a generator",
  ArgumentsInClass: "'arguments' is only allowed in functions and class methods",
  AsyncFunctionInSingleStatementContext: "Async functions can only be declared at the top level or inside a block",
  AwaitBindingIdentifier: "Can not use 'await' as identifier inside an async function",
  AwaitBindingIdentifierInStaticBlock: "Can not use 'await' as identifier inside a static block",
  AwaitExpressionFormalParameter: "await is not allowed in async function parameters",
  AwaitNotInAsyncContext: "'await' is only allowed within async functions and at the top levels of modules",
  AwaitNotInAsyncFunction: "'await' is only allowed within async functions",
  BadGetterArity: "getter must not have any formal parameters",
  BadSetterArity: "setter must have exactly one formal parameter",
  BadSetterRestParameter: "setter function argument must not be a rest parameter",
  ConstructorClassField: "Classes may not have a field named 'constructor'",
  ConstructorClassPrivateField: "Classes may not have a private field named '#constructor'",
  ConstructorIsAccessor: "Class constructor may not be an accessor",
  ConstructorIsAsync: "Constructor can't be an async function",
  ConstructorIsGenerator: "Constructor can't be a generator",
  DeclarationMissingInitializer: "%0 require an initialization value",
  DecoratorBeforeExport: "Decorators must be placed *before* the 'export' keyword. You can set the 'decoratorsBeforeExport' option to false to use the 'export @decorator class {}' syntax",
  DecoratorConstructor: "Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?",
  DecoratorExportClass: "Using the export keyword between a decorator and a class is not allowed. Please use `export @dec class` instead.",
  DecoratorSemicolon: "Decorators must not be followed by a semicolon",
  DecoratorStaticBlock: "Decorators can't be used with a static block",
  DeletePrivateField: "Deleting a private field is not allowed",
  DestructureNamedImport: "ES2015 named imports do not destructure. Use another statement for destructuring after the import.",
  DuplicateConstructor: "Duplicate constructor in the same class",
  DuplicateDefaultExport: "Only one default export allowed per module.",
  DuplicateExport: "`%0` has already been exported. Exported identifiers must be unique.",
  DuplicateProto: "Redefinition of __proto__ property",
  DuplicateRegExpFlags: "Duplicate regular expression flag",
  DuplicateStaticBlock: "Duplicate static block in the same class",
  ElementAfterRest: "Rest element must be last element",
  EscapedCharNotAnIdentifier: "Invalid Unicode escape",
  ExportBindingIsString: "A string literal cannot be used as an exported binding without `from`.\n- Did you mean `export { '%0' as '%1' } from 'some-module'`?",
  ExportDefaultFromAsIdentifier: "'from' is not allowed as an identifier after 'export default'",
  ForInOfLoopInitializer: "%0 loop variable declaration may not have an initializer",
  GeneratorInSingleStatementContext: "Generators can only be declared at the top level or inside a block",
  IllegalBreakContinue: "Unsyntactic %0",
  IllegalLanguageModeDirective: "Illegal 'use strict' directive in function with non-simple parameter list",
  IllegalReturn: "'return' outside of function",
  ImportBindingIsString: 'A string literal cannot be used as an imported binding.\n- Did you mean `import { "%0" as foo }`?',
  ImportCallArgumentTrailingComma: "Trailing comma is disallowed inside import(...) arguments",
  ImportCallArity: "import() requires exactly %0",
  ImportCallNotNewExpression: "Cannot use new with import(...)",
  ImportCallSpreadArgument: "... is not allowed in import()",
  ImportMetaOutsideModule: `import.meta may appear only with 'sourceType: "module"'`,
  ImportOutsideModule: `'import' and 'export' may appear only with 'sourceType: "module"'`,
  InvalidBigIntLiteral: "Invalid BigIntLiteral",
  InvalidCodePoint: "Code point out of bounds",
  InvalidDecimal: "Invalid decimal",
  InvalidDigit: "Expected number in radix %0",
  InvalidEscapeSequence: "Bad character escape sequence",
  InvalidEscapeSequenceTemplate: "Invalid escape sequence in template",
  InvalidEscapedReservedWord: "Escape sequence in keyword %0",
  InvalidIdentifier: "Invalid identifier %0",
  InvalidLhs: "Invalid left-hand side in %0",
  InvalidLhsBinding: "Binding invalid left-hand side in %0",
  InvalidNumber: "Invalid number",
  InvalidOrMissingExponent: "Floating-point numbers require a valid exponent after the 'e'",
  InvalidOrUnexpectedToken: "Unexpected character '%0'",
  InvalidParenthesizedAssignment: "Invalid parenthesized assignment pattern",
  InvalidPrivateFieldResolution: "Private name #%0 is not defined",
  InvalidPropertyBindingPattern: "Binding member expression",
  InvalidRecordProperty: "Only properties and spread elements are allowed in record definitions",
  InvalidRestAssignmentPattern: "Invalid rest operator's argument",
  LabelRedeclaration: "Label '%0' is already declared",
  LetInLexicalBinding: "'let' is not allowed to be used as a name in 'let' or 'const' declarations.",
  LineTerminatorBeforeArrow: "No line break is allowed before '=>'",
  MalformedRegExpFlags: "Invalid regular expression flag",
  MissingClassName: "A class name is required",
  MissingEqInAssignment: "Only '=' operator can be used for specifying default value.",
  MissingSemicolon: "Missing semicolon",
  MissingUnicodeEscape: "Expecting Unicode escape sequence \\uXXXX",
  MixingCoalesceWithLogical: "Nullish coalescing operator(??) requires parens when mixing with logical operators",
  ModuleAttributeDifferentFromType: "The only accepted module attribute is `type`",
  ModuleAttributeInvalidValue: "Only string literals are allowed as module attribute values",
  ModuleAttributesWithDuplicateKeys: 'Duplicate key "%0" is not allowed in module attributes',
  ModuleExportNameHasLoneSurrogate: "An export name cannot include a lone surrogate, found '\\u%0'",
  ModuleExportUndefined: "Export '%0' is not defined",
  MultipleDefaultsInSwitch: "Multiple default clauses",
  NewlineAfterThrow: "Illegal newline after throw",
  NoCatchOrFinally: "Missing catch or finally clause",
  NumberIdentifier: "Identifier directly after number",
  NumericSeparatorInEscapeSequence: "Numeric separators are not allowed inside unicode escape sequences or hex escape sequences",
  ObsoleteAwaitStar: "await* has been removed from the async functions proposal. Use Promise.all() instead.",
  OptionalChainingNoNew: "constructors in/after an Optional Chain are not allowed",
  OptionalChainingNoTemplate: "Tagged Template Literals are not allowed in optionalChain",
  ParamDupe: "Argument name clash",
  PatternHasAccessor: "Object pattern can't contain getter or setter",
  PatternHasMethod: "Object pattern can't contain methods",
  PipelineBodyNoArrow: 'Unexpected arrow "=>" after pipeline body; arrow function in pipeline body must be parenthesized',
  PipelineBodySequenceExpression: "Pipeline body may not be a comma-separated sequence expression",
  PipelineHeadSequenceExpression: "Pipeline head should not be a comma-separated sequence expression",
  PipelineTopicUnused: "Pipeline is in topic style but does not use topic reference",
  PrimaryTopicNotAllowed: "Topic reference was used in a lexical context without topic binding",
  PrimaryTopicRequiresSmartPipeline: "Primary Topic Reference found but pipelineOperator not passed 'smart' for 'proposal' option.",
  PrivateInExpectedIn: "Private names are only allowed in property accesses (`obj.#%0`) or in `in` expressions (`#%0 in obj`)",
  PrivateNameRedeclaration: "Duplicate private name #%0",
  RecordExpressionBarIncorrectEndSyntaxType: "Record expressions ending with '|}' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'",
  RecordExpressionBarIncorrectStartSyntaxType: "Record expressions starting with '{|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'",
  RecordExpressionHashIncorrectStartSyntaxType: "Record expressions starting with '#{' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'",
  RecordNoProto: "'__proto__' is not allowed in Record expressions",
  RestTrailingComma: "Unexpected trailing comma after rest element",
  SloppyFunction: "In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement",
  StaticPrototype: "Classes may not have static property named prototype",
  StrictDelete: "Deleting local variable in strict mode",
  StrictEvalArguments: "Assigning to '%0' in strict mode",
  StrictEvalArgumentsBinding: "Binding '%0' in strict mode",
  StrictFunction: "In strict mode code, functions can only be declared at top level or inside a block",
  StrictNumericEscape: "The only valid numeric escape in strict mode is '\\0'",
  StrictOctalLiteral: "Legacy octal literals are not allowed in strict mode",
  StrictWith: "'with' in strict mode",
  SuperNotAllowed: "super() is only valid inside a class constructor of a subclass. Maybe a typo in the method name ('constructor') or not extending another class?",
  SuperPrivateField: "Private fields can't be accessed on super",
  TrailingDecorator: "Decorators must be attached to a class element",
  TupleExpressionBarIncorrectEndSyntaxType: "Tuple expressions ending with '|]' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'",
  TupleExpressionBarIncorrectStartSyntaxType: "Tuple expressions starting with '[|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'",
  TupleExpressionHashIncorrectStartSyntaxType: "Tuple expressions starting with '#[' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'",
  UnexpectedArgumentPlaceholder: "Unexpected argument placeholder",
  UnexpectedAwaitAfterPipelineBody: 'Unexpected "await" after pipeline body; await must have parentheses in minimal proposal',
  UnexpectedDigitAfterHash: "Unexpected digit after hash token",
  UnexpectedImportExport: "'import' and 'export' may only appear at the top level",
  UnexpectedKeyword: "Unexpected keyword '%0'",
  UnexpectedLeadingDecorator: "Leading decorators must be attached to a class declaration",
  UnexpectedLexicalDeclaration: "Lexical declaration cannot appear in a single-statement context",
  UnexpectedNewTarget: "new.target can only be used in functions",
  UnexpectedNumericSeparator: "A numeric separator is only allowed between two digits",
  UnexpectedPrivateField: "Private names can only be used as the name of a class element (i.e. class C { #p = 42; #m() {} } )\n or a property of member expression (i.e. this.#p).",
  UnexpectedReservedWord: "Unexpected reserved word '%0'",
  UnexpectedSuper: "super is only allowed in object methods and classes",
  UnexpectedToken: "Unexpected token '%0'",
  UnexpectedTokenUnaryExponentiation: "Illegal expression. Wrap left hand side or entire exponentiation in parentheses.",
  UnsupportedBind: "Binding should be performed on object property.",
  UnsupportedDecoratorExport: "A decorated export must export a class declaration",
  UnsupportedDefaultExport: "Only expressions, functions or classes are allowed as the `default` export.",
  UnsupportedImport: "import can only be used in import() or import.meta",
  UnsupportedMetaProperty: "The only valid meta property for %0 is %0.%1",
  UnsupportedParameterDecorator: "Decorators cannot be used to decorate parameters",
  UnsupportedPropertyDecorator: "Decorators cannot be used to decorate object literal properties",
  UnsupportedSuper: "super can only be used with function calls (i.e. super()) or in property accesses (i.e. super.prop or super[prop])",
  UnterminatedComment: "Unterminated comment",
  UnterminatedRegExp: "Unterminated regular expression",
  UnterminatedString: "Unterminated string constant",
  UnterminatedTemplate: "Unterminated template",
  VarRedeclaration: "Identifier '%0' has already been declared",
  YieldBindingIdentifier: "Can not use 'yield' as identifier inside a generator",
  YieldInParameter: "Yield expression is not allowed in formal parameters",
  ZeroDigitNumericSeparator: "Numeric separator can not be used after leading 0"
});

class ParserError extends CommentsParser {
  getLocationForPosition(pos) {
    let loc;
    if (pos === this.state.start) loc = this.state.startLoc;else if (pos === this.state.lastTokStart) loc = this.state.lastTokStartLoc;else if (pos === this.state.end) loc = this.state.endLoc;else if (pos === this.state.lastTokEnd) loc = this.state.lastTokEndLoc;else loc = getLineInfo(this.input, pos);
    return loc;
  }

  raise(pos, errorTemplate, ...params) {
    return this.raiseWithData(pos, undefined, errorTemplate, ...params);
  }

  raiseOverwrite(pos, errorTemplate, ...params) {
    const loc = this.getLocationForPosition(pos);
    const message = errorTemplate.replace(/%(\d+)/g, (_, i) => params[i]) + ` (${loc.line}:${loc.column})`;

    if (this.options.errorRecovery) {
      const errors = this.state.errors;

      for (let i = errors.length - 1; i >= 0; i--) {
        const error = errors[i];

        if (error.pos === pos) {
          return Object.assign(error, {
            message
          });
        } else if (error.pos < pos) {
          break;
        }
      }
    }

    return this._raise({
      loc,
      pos
    }, message);
  }

  raiseWithData(pos, data, errorTemplate, ...params) {
    const loc = this.getLocationForPosition(pos);
    const message = errorTemplate.replace(/%(\d+)/g, (_, i) => params[i]) + ` (${loc.line}:${loc.column})`;
    return this._raise(Object.assign({
      loc,
      pos
    }, data), message);
  }

  _raise(errorContext, message) {
    const err = new SyntaxError(message);
    Object.assign(err, errorContext);

    if (this.options.errorRecovery) {
      if (!this.isLookahead) this.state.errors.push(err);
      return err;
    } else {
      throw err;
    }
  }

}

var estree = (superClass => class extends superClass {
  estreeParseRegExpLiteral({
    pattern,
    flags
  }) {
    let regex = null;

    try {
      regex = new RegExp(pattern, flags);
    } catch (e) {}

    const node = this.estreeParseLiteral(regex);
    node.regex = {
      pattern,
      flags
    };
    return node;
  }

  estreeParseBigIntLiteral(value) {
    let bigInt;

    try {
      bigInt = BigInt(value);
    } catch (_unused) {
      bigInt = null;
    }

    const node = this.estreeParseLiteral(bigInt);
    node.bigint = String(node.value || value);
    return node;
  }

  estreeParseDecimalLiteral(value) {
    const decimal = null;
    const node = this.estreeParseLiteral(decimal);
    node.decimal = String(node.value || value);
    return node;
  }

  estreeParseLiteral(value) {
    return this.parseLiteral(value, "Literal");
  }

  directiveToStmt(directive) {
    const directiveLiteral = directive.value;
    const stmt = this.startNodeAt(directive.start, directive.loc.start);
    const expression = this.startNodeAt(directiveLiteral.start, directiveLiteral.loc.start);
    expression.value = directiveLiteral.extra.expressionValue;
    expression.raw = directiveLiteral.extra.raw;
    stmt.expression = this.finishNodeAt(expression, "Literal", directiveLiteral.end, directiveLiteral.loc.end);
    stmt.directive = directiveLiteral.extra.raw.slice(1, -1);
    return this.finishNodeAt(stmt, "ExpressionStatement", directive.end, directive.loc.end);
  }

  initFunction(node, isAsync) {
    super.initFunction(node, isAsync);
    node.expression = false;
  }

  checkDeclaration(node) {
    if (node != null && this.isObjectProperty(node)) {
      this.checkDeclaration(node.value);
    } else {
      super.checkDeclaration(node);
    }
  }

  getObjectOrClassMethodParams(method) {
    return method.value.params;
  }

  isValidDirective(stmt) {
    var _stmt$expression$extr;

    return stmt.type === "ExpressionStatement" && stmt.expression.type === "Literal" && typeof stmt.expression.value === "string" && !((_stmt$expression$extr = stmt.expression.extra) == null ? void 0 : _stmt$expression$extr.parenthesized);
  }

  stmtToDirective(stmt) {
    const directive = super.stmtToDirective(stmt);
    const value = stmt.expression.value;
    this.addExtra(directive.value, "expressionValue", value);
    return directive;
  }

  parseBlockBody(node, ...args) {
    super.parseBlockBody(node, ...args);
    const directiveStatements = node.directives.map(d => this.directiveToStmt(d));
    node.body = directiveStatements.concat(node.body);
    delete node.directives;
  }

  pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper) {
    this.parseMethod(method, isGenerator, isAsync, isConstructor, allowsDirectSuper, "ClassMethod", true);

    if (method.typeParameters) {
      method.value.typeParameters = method.typeParameters;
      delete method.typeParameters;
    }

    classBody.body.push(method);
  }

  parseExprAtom(refExpressionErrors) {
    switch (this.state.type) {
      case types.num:
      case types.string:
        return this.estreeParseLiteral(this.state.value);

      case types.regexp:
        return this.estreeParseRegExpLiteral(this.state.value);

      case types.bigint:
        return this.estreeParseBigIntLiteral(this.state.value);

      case types.decimal:
        return this.estreeParseDecimalLiteral(this.state.value);

      case types._null:
        return this.estreeParseLiteral(null);

      case types._true:
        return this.estreeParseLiteral(true);

      case types._false:
        return this.estreeParseLiteral(false);

      default:
        return super.parseExprAtom(refExpressionErrors);
    }
  }

  parseLiteral(value, type, startPos, startLoc) {
    const node = super.parseLiteral(value, type, startPos, startLoc);
    node.raw = node.extra.raw;
    delete node.extra;
    return node;
  }

  parseFunctionBody(node, allowExpression, isMethod = false) {
    super.parseFunctionBody(node, allowExpression, isMethod);
    node.expression = node.body.type !== "BlockStatement";
  }

  parseMethod(node, isGenerator, isAsync, isConstructor, allowDirectSuper, type, inClassScope = false) {
    let funcNode = this.startNode();
    funcNode.kind = node.kind;
    funcNode = super.parseMethod(funcNode, isGenerator, isAsync, isConstructor, allowDirectSuper, type, inClassScope);
    funcNode.type = "FunctionExpression";
    delete funcNode.kind;
    node.value = funcNode;
    type = type === "ClassMethod" ? "MethodDefinition" : type;
    return this.finishNode(node, type);
  }

  parseObjectMethod(prop, isGenerator, isAsync, isPattern, isAccessor) {
    const node = super.parseObjectMethod(prop, isGenerator, isAsync, isPattern, isAccessor);

    if (node) {
      node.type = "Property";
      if (node.kind === "method") node.kind = "init";
      node.shorthand = false;
    }

    return node;
  }

  parseObjectProperty(prop, startPos, startLoc, isPattern, refExpressionErrors) {
    const node = super.parseObjectProperty(prop, startPos, startLoc, isPattern, refExpressionErrors);

    if (node) {
      node.kind = "init";
      node.type = "Property";
    }

    return node;
  }

  toAssignable(node, isLHS = false) {
    if (node != null && this.isObjectProperty(node)) {
      this.toAssignable(node.value, isLHS);
      return node;
    }

    return super.toAssignable(node, isLHS);
  }

  toAssignableObjectExpressionProp(prop, ...args) {
    if (prop.kind === "get" || prop.kind === "set") {
      this.raise(prop.key.start, ErrorMessages.PatternHasAccessor);
    } else if (prop.method) {
      this.raise(prop.key.start, ErrorMessages.PatternHasMethod);
    } else {
      super.toAssignableObjectExpressionProp(prop, ...args);
    }
  }

  finishCallExpression(node, optional) {
    super.finishCallExpression(node, optional);

    if (node.callee.type === "Import") {
      node.type = "ImportExpression";
      node.source = node.arguments[0];
      delete node.arguments;
      delete node.callee;
    }

    return node;
  }

  toReferencedArguments(node) {
    if (node.type === "ImportExpression") {
      return;
    }

    super.toReferencedArguments(node);
  }

  parseExport(node) {
    super.parseExport(node);

    switch (node.type) {
      case "ExportAllDeclaration":
        node.exported = null;
        break;

      case "ExportNamedDeclaration":
        if (node.specifiers.length === 1 && node.specifiers[0].type === "ExportNamespaceSpecifier") {
          node.type = "ExportAllDeclaration";
          node.exported = node.specifiers[0].exported;
          delete node.specifiers;
        }

        break;
    }

    return node;
  }

  parseSubscript(base, startPos, startLoc, noCalls, state) {
    const node = super.parseSubscript(base, startPos, startLoc, noCalls, state);

    if (state.optionalChainMember) {
      if (node.type === "OptionalMemberExpression" || node.type === "OptionalCallExpression") {
        node.type = node.type.substring(8);
      }

      if (state.stop) {
        const chain = this.startNodeAtNode(node);
        chain.expression = node;
        return this.finishNode(chain, "ChainExpression");
      }
    } else if (node.type === "MemberExpression" || node.type === "CallExpression") {
      node.optional = false;
    }

    return node;
  }

  hasPropertyAsPrivateName(node) {
    if (node.type === "ChainExpression") {
      node = node.expression;
    }

    return super.hasPropertyAsPrivateName(node);
  }

  isOptionalChain(node) {
    return node.type === "ChainExpression";
  }

  isObjectProperty(node) {
    return node.type === "Property" && node.kind === "init" && !node.method;
  }

  isObjectMethod(node) {
    return node.method || node.kind === "get" || node.kind === "set";
  }

});

class TokContext {
  constructor(token, isExpr, preserveSpace, override) {
    this.token = void 0;
    this.isExpr = void 0;
    this.preserveSpace = void 0;
    this.override = void 0;
    this.token = token;
    this.isExpr = !!isExpr;
    this.preserveSpace = !!preserveSpace;
    this.override = override;
  }

}
const types$1 = {
  braceStatement: new TokContext("{", false),
  braceExpression: new TokContext("{", true),
  recordExpression: new TokContext("#{", true),
  templateQuasi: new TokContext("${", false),
  parenStatement: new TokContext("(", false),
  parenExpression: new TokContext("(", true),
  template: new TokContext("`", true, true, p => p.readTmplToken()),
  functionExpression: new TokContext("function", true),
  functionStatement: new TokContext("function", false)
};

types.parenR.updateContext = types.braceR.updateContext = function () {
  if (this.state.context.length === 1) {
    this.state.exprAllowed = true;
    return;
  }

  let out = this.state.context.pop();

  if (out === types$1.braceStatement && this.curContext().token === "function") {
    out = this.state.context.pop();
  }

  this.state.exprAllowed = !out.isExpr;
};

types.name.updateContext = function (prevType) {
  let allowed = false;

  if (prevType !== types.dot) {
    if (this.state.value === "of" && !this.state.exprAllowed && prevType !== types._function && prevType !== types._class) {
      allowed = true;
    }
  }

  this.state.exprAllowed = allowed;

  if (this.state.isIterator) {
    this.state.isIterator = false;
  }
};

types.braceL.updateContext = function (prevType) {
  this.state.context.push(this.braceIsBlock(prevType) ? types$1.braceStatement : types$1.braceExpression);
  this.state.exprAllowed = true;
};

types.dollarBraceL.updateContext = function () {
  this.state.context.push(types$1.templateQuasi);
  this.state.exprAllowed = true;
};

types.parenL.updateContext = function (prevType) {
  const statementParens = prevType === types._if || prevType === types._for || prevType === types._with || prevType === types._while;
  this.state.context.push(statementParens ? types$1.parenStatement : types$1.parenExpression);
  this.state.exprAllowed = true;
};

types.incDec.updateContext = function () {};

types._function.updateContext = types._class.updateContext = function (prevType) {
  if (prevType.beforeExpr && prevType !== types.semi && prevType !== types._else && !(prevType === types._return && this.hasPrecedingLineBreak()) && !((prevType === types.colon || prevType === types.braceL) && this.curContext() === types$1.b_stat)) {
    this.state.context.push(types$1.functionExpression);
  } else {
    this.state.context.push(types$1.functionStatement);
  }

  this.state.exprAllowed = false;
};

types.backQuote.updateContext = function () {
  if (this.curContext() === types$1.template) {
    this.state.context.pop();
  } else {
    this.state.context.push(types$1.template);
  }

  this.state.exprAllowed = false;
};

types.braceHashL.updateContext = function () {
  this.state.context.push(types$1.recordExpression);
  this.state.exprAllowed = true;
};

let nonASCIIidentifierStartChars = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u08a0-\u08b4\u08b6-\u08c7\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u09fc\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d04-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1cfa\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31bf\u31f0-\u31ff\u3400-\u4dbf\u4e00-\u9ffc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7bf\ua7c2-\ua7ca\ua7f5-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab69\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc";
let nonASCIIidentifierChars = "\u200c\u200d\xb7\u0300-\u036f\u0387\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u07fd\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08d3-\u08e1\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u09fe\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0afa-\u0aff\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b55-\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c00-\u0c04\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d00-\u0d03\u0d3b\u0d3c\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d81-\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19d0-\u19da\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1ab0-\u1abd\u1abf\u1ac0\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf4\u1cf7-\u1cf9\u1dc0-\u1df9\u1dfb-\u1dff\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua82c\ua880\ua881\ua8b4-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f1\ua8ff-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\ua9e5\ua9f0-\ua9f9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f";
const nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
const nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;
const astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 107, 20, 28, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8952, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938];
const astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];

function isInAstralSet(code, set) {
  let pos = 0x10000;

  for (let i = 0, length = set.length; i < length; i += 2) {
    pos += set[i];
    if (pos > code) return false;
    pos += set[i + 1];
    if (pos >= code) return true;
  }

  return false;
}

function isIdentifierStart(code) {
  if (code < 65) return code === 36;
  if (code <= 90) return true;
  if (code < 97) return code === 95;
  if (code <= 122) return true;

  if (code <= 0xffff) {
    return code >= 0xaa && nonASCIIidentifierStart.test(String.fromCharCode(code));
  }

  return isInAstralSet(code, astralIdentifierStartCodes);
}
function isIdentifierChar(code) {
  if (code < 48) return code === 36;
  if (code < 58) return true;
  if (code < 65) return false;
  if (code <= 90) return true;
  if (code < 97) return code === 95;
  if (code <= 122) return true;

  if (code <= 0xffff) {
    return code >= 0xaa && nonASCIIidentifier.test(String.fromCharCode(code));
  }

  return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes);
}

const reservedWords = {
  keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"],
  strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"],
  strictBind: ["eval", "arguments"]
};
const keywords$1 = new Set(reservedWords.keyword);
const reservedWordsStrictSet = new Set(reservedWords.strict);
const reservedWordsStrictBindSet = new Set(reservedWords.strictBind);
function isReservedWord(word, inModule) {
  return inModule && word === "await" || word === "enum";
}
function isStrictReservedWord(word, inModule) {
  return isReservedWord(word, inModule) || reservedWordsStrictSet.has(word);
}
function isStrictBindOnlyReservedWord(word) {
  return reservedWordsStrictBindSet.has(word);
}
function isStrictBindReservedWord(word, inModule) {
  return isStrictReservedWord(word, inModule) || isStrictBindOnlyReservedWord(word);
}
function isKeyword(word) {
  return keywords$1.has(word);
}

const keywordRelationalOperator = /^in(stanceof)?$/;
function isIteratorStart(current, next) {
  return current === 64 && next === 64;
}

const SCOPE_OTHER = 0b000000000,
      SCOPE_PROGRAM = 0b000000001,
      SCOPE_FUNCTION = 0b000000010,
      SCOPE_ARROW = 0b000000100,
      SCOPE_SIMPLE_CATCH = 0b000001000,
      SCOPE_SUPER = 0b000010000,
      SCOPE_DIRECT_SUPER = 0b000100000,
      SCOPE_CLASS = 0b001000000,
      SCOPE_STATIC_BLOCK = 0b010000000,
      SCOPE_TS_MODULE = 0b100000000,
      SCOPE_VAR = SCOPE_PROGRAM | SCOPE_FUNCTION | SCOPE_TS_MODULE;
const BIND_KIND_VALUE = 0b000000000001,
      BIND_KIND_TYPE = 0b000000000010,
      BIND_SCOPE_VAR = 0b000000000100,
      BIND_SCOPE_LEXICAL = 0b000000001000,
      BIND_SCOPE_FUNCTION = 0b000000010000,
      BIND_FLAGS_NONE = 0b000001000000,
      BIND_FLAGS_CLASS = 0b000010000000,
      BIND_FLAGS_TS_ENUM = 0b000100000000,
      BIND_FLAGS_TS_CONST_ENUM = 0b001000000000,
      BIND_FLAGS_TS_EXPORT_ONLY = 0b010000000000,
      BIND_FLAGS_FLOW_DECLARE_FN = 0b100000000000;
const BIND_CLASS = BIND_KIND_VALUE | BIND_KIND_TYPE | BIND_SCOPE_LEXICAL | BIND_FLAGS_CLASS,
      BIND_LEXICAL = BIND_KIND_VALUE | 0 | BIND_SCOPE_LEXICAL | 0,
      BIND_VAR = BIND_KIND_VALUE | 0 | BIND_SCOPE_VAR | 0,
      BIND_FUNCTION = BIND_KIND_VALUE | 0 | BIND_SCOPE_FUNCTION | 0,
      BIND_TS_INTERFACE = 0 | BIND_KIND_TYPE | 0 | BIND_FLAGS_CLASS,
      BIND_TS_TYPE = 0 | BIND_KIND_TYPE | 0 | 0,
      BIND_TS_ENUM = BIND_KIND_VALUE | BIND_KIND_TYPE | BIND_SCOPE_LEXICAL | BIND_FLAGS_TS_ENUM,
      BIND_TS_AMBIENT = 0 | 0 | 0 | BIND_FLAGS_TS_EXPORT_ONLY,
      BIND_NONE = 0 | 0 | 0 | BIND_FLAGS_NONE,
      BIND_OUTSIDE = BIND_KIND_VALUE | 0 | 0 | BIND_FLAGS_NONE,
      BIND_TS_CONST_ENUM = BIND_TS_ENUM | BIND_FLAGS_TS_CONST_ENUM,
      BIND_TS_NAMESPACE = 0 | 0 | 0 | BIND_FLAGS_TS_EXPORT_ONLY,
      BIND_FLOW_DECLARE_FN = BIND_FLAGS_FLOW_DECLARE_FN;
const CLASS_ELEMENT_FLAG_STATIC = 0b100,
      CLASS_ELEMENT_KIND_GETTER = 0b010,
      CLASS_ELEMENT_KIND_SETTER = 0b001,
      CLASS_ELEMENT_KIND_ACCESSOR = CLASS_ELEMENT_KIND_GETTER | CLASS_ELEMENT_KIND_SETTER;
const CLASS_ELEMENT_STATIC_GETTER = CLASS_ELEMENT_KIND_GETTER | CLASS_ELEMENT_FLAG_STATIC,
      CLASS_ELEMENT_STATIC_SETTER = CLASS_ELEMENT_KIND_SETTER | CLASS_ELEMENT_FLAG_STATIC,
      CLASS_ELEMENT_INSTANCE_GETTER = CLASS_ELEMENT_KIND_GETTER,
      CLASS_ELEMENT_INSTANCE_SETTER = CLASS_ELEMENT_KIND_SETTER,
      CLASS_ELEMENT_OTHER = 0;

class Scope {
  constructor(flags) {
    this.flags = void 0;
    this.var = [];
    this.lexical = [];
    this.functions = [];
    this.flags = flags;
  }

}
class ScopeHandler {
  constructor(raise, inModule) {
    this.scopeStack = [];
    this.undefinedExports = new Map();
    this.undefinedPrivateNames = new Map();
    this.raise = raise;
    this.inModule = inModule;
  }

  get inFunction() {
    return (this.currentVarScope().flags & SCOPE_FUNCTION) > 0;
  }

  get allowSuper() {
    return (this.currentThisScope().flags & SCOPE_SUPER) > 0;
  }

  get allowDirectSuper() {
    return (this.currentThisScope().flags & SCOPE_DIRECT_SUPER) > 0;
  }

  get inClass() {
    return (this.currentThisScope().flags & SCOPE_CLASS) > 0;
  }

  get inStaticBlock() {
    return (this.currentThisScope().flags & SCOPE_STATIC_BLOCK) > 0;
  }

  get inNonArrowFunction() {
    return (this.currentThisScope().flags & SCOPE_FUNCTION) > 0;
  }

  get treatFunctionsAsVar() {
    return this.treatFunctionsAsVarInScope(this.currentScope());
  }

  createScope(flags) {
    return new Scope(flags);
  }

  enter(flags) {
    this.scopeStack.push(this.createScope(flags));
  }

  exit() {
    this.scopeStack.pop();
  }

  treatFunctionsAsVarInScope(scope) {
    return !!(scope.flags & SCOPE_FUNCTION || !this.inModule && scope.flags & SCOPE_PROGRAM);
  }

  declareName(name, bindingType, pos) {
    let scope = this.currentScope();

    if (bindingType & BIND_SCOPE_LEXICAL || bindingType & BIND_SCOPE_FUNCTION) {
      this.checkRedeclarationInScope(scope, name, bindingType, pos);

      if (bindingType & BIND_SCOPE_FUNCTION) {
        scope.functions.push(name);
      } else {
        scope.lexical.push(name);
      }

      if (bindingType & BIND_SCOPE_LEXICAL) {
        this.maybeExportDefined(scope, name);
      }
    } else if (bindingType & BIND_SCOPE_VAR) {
      for (let i = this.scopeStack.length - 1; i >= 0; --i) {
        scope = this.scopeStack[i];
        this.checkRedeclarationInScope(scope, name, bindingType, pos);
        scope.var.push(name);
        this.maybeExportDefined(scope, name);
        if (scope.flags & SCOPE_VAR) break;
      }
    }

    if (this.inModule && scope.flags & SCOPE_PROGRAM) {
      this.undefinedExports.delete(name);
    }
  }

  maybeExportDefined(scope, name) {
    if (this.inModule && scope.flags & SCOPE_PROGRAM) {
      this.undefinedExports.delete(name);
    }
  }

  checkRedeclarationInScope(scope, name, bindingType, pos) {
    if (this.isRedeclaredInScope(scope, name, bindingType)) {
      this.raise(pos, ErrorMessages.VarRedeclaration, name);
    }
  }

  isRedeclaredInScope(scope, name, bindingType) {
    if (!(bindingType & BIND_KIND_VALUE)) return false;

    if (bindingType & BIND_SCOPE_LEXICAL) {
      return scope.lexical.indexOf(name) > -1 || scope.functions.indexOf(name) > -1 || scope.var.indexOf(name) > -1;
    }

    if (bindingType & BIND_SCOPE_FUNCTION) {
      return scope.lexical.indexOf(name) > -1 || !this.treatFunctionsAsVarInScope(scope) && scope.var.indexOf(name) > -1;
    }

    return scope.lexical.indexOf(name) > -1 && !(scope.flags & SCOPE_SIMPLE_CATCH && scope.lexical[0] === name) || !this.treatFunctionsAsVarInScope(scope) && scope.functions.indexOf(name) > -1;
  }

  checkLocalExport(id) {
    if (this.scopeStack[0].lexical.indexOf(id.name) === -1 && this.scopeStack[0].var.indexOf(id.name) === -1 && this.scopeStack[0].functions.indexOf(id.name) === -1) {
      this.undefinedExports.set(id.name, id.start);
    }
  }

  currentScope() {
    return this.scopeStack[this.scopeStack.length - 1];
  }

  currentVarScope() {
    for (let i = this.scopeStack.length - 1;; i--) {
      const scope = this.scopeStack[i];

      if (scope.flags & SCOPE_VAR) {
        return scope;
      }
    }
  }

  currentThisScope() {
    for (let i = this.scopeStack.length - 1;; i--) {
      const scope = this.scopeStack[i];

      if ((scope.flags & SCOPE_VAR || scope.flags & SCOPE_CLASS) && !(scope.flags & SCOPE_ARROW)) {
        return scope;
      }
    }
  }

}

class FlowScope extends Scope {
  constructor(...args) {
    super(...args);
    this.declareFunctions = [];
  }

}

class FlowScopeHandler extends ScopeHandler {
  createScope(flags) {
    return new FlowScope(flags);
  }

  declareName(name, bindingType, pos) {
    const scope = this.currentScope();

    if (bindingType & BIND_FLAGS_FLOW_DECLARE_FN) {
      this.checkRedeclarationInScope(scope, name, bindingType, pos);
      this.maybeExportDefined(scope, name);
      scope.declareFunctions.push(name);
      return;
    }

    super.declareName(...arguments);
  }

  isRedeclaredInScope(scope, name, bindingType) {
    if (super.isRedeclaredInScope(...arguments)) return true;

    if (bindingType & BIND_FLAGS_FLOW_DECLARE_FN) {
      return !scope.declareFunctions.includes(name) && (scope.lexical.includes(name) || scope.functions.includes(name));
    }

    return false;
  }

  checkLocalExport(id) {
    if (this.scopeStack[0].declareFunctions.indexOf(id.name) === -1) {
      super.checkLocalExport(id);
    }
  }

}

const reservedTypes = new Set(["_", "any", "bool", "boolean", "empty", "extends", "false", "interface", "mixed", "null", "number", "static", "string", "true", "typeof", "void"]);
const FlowErrors = Object.freeze({
  AmbiguousConditionalArrow: "Ambiguous expression: wrap the arrow functions in parentheses to disambiguate.",
  AmbiguousDeclareModuleKind: "Found both `declare module.exports` and `declare export` in the same module. Modules can only have 1 since they are either an ES module or they are a CommonJS module",
  AssignReservedType: "Cannot overwrite reserved type %0",
  DeclareClassElement: "The `declare` modifier can only appear on class fields.",
  DeclareClassFieldInitializer: "Initializers are not allowed in fields with the `declare` modifier.",
  DuplicateDeclareModuleExports: "Duplicate `declare module.exports` statement",
  EnumBooleanMemberNotInitialized: "Boolean enum members need to be initialized. Use either `%0 = true,` or `%0 = false,` in enum `%1`.",
  EnumDuplicateMemberName: "Enum member names need to be unique, but the name `%0` has already been used before in enum `%1`.",
  EnumInconsistentMemberValues: "Enum `%0` has inconsistent member initializers. Either use no initializers, or consistently use literals (either booleans, numbers, or strings) for all member initializers.",
  EnumInvalidExplicitType: "Enum type `%1` is not valid. Use one of `boolean`, `number`, `string`, or `symbol` in enum `%0`.",
  EnumInvalidExplicitTypeUnknownSupplied: "Supplied enum type is not valid. Use one of `boolean`, `number`, `string`, or `symbol` in enum `%0`.",
  EnumInvalidMemberInitializerPrimaryType: "Enum `%0` has type `%2`, so the initializer of `%1` needs to be a %2 literal.",
  EnumInvalidMemberInitializerSymbolType: "Symbol enum members cannot be initialized. Use `%1,` in enum `%0`.",
  EnumInvalidMemberInitializerUnknownType: "The enum member initializer for `%1` needs to be a literal (either a boolean, number, or string) in enum `%0`.",
  EnumInvalidMemberName: "Enum member names cannot start with lowercase 'a' through 'z'. Instead of using `%0`, consider using `%1`, in enum `%2`.",
  EnumNumberMemberNotInitialized: "Number enum members need to be initialized, e.g. `%1 = 1` in enum `%0`.",
  EnumStringMemberInconsistentlyInitailized: "String enum members need to consistently either all use initializers, or use no initializers, in enum `%0`.",
  ImportTypeShorthandOnlyInPureImport: "The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements",
  InexactInsideExact: "Explicit inexact syntax cannot appear inside an explicit exact object type",
  InexactInsideNonObject: "Explicit inexact syntax cannot appear in class or interface definitions",
  InexactVariance: "Explicit inexact syntax cannot have variance",
  InvalidNonTypeImportInDeclareModule: "Imports within a `declare module` body must always be `import type` or `import typeof`",
  MissingTypeParamDefault: "Type parameter declaration needs a default, since a preceding type parameter declaration has a default.",
  NestedDeclareModule: "`declare module` cannot be used inside another `declare module`",
  NestedFlowComment: "Cannot have a flow comment inside another flow comment",
  OptionalBindingPattern: "A binding pattern parameter cannot be optional in an implementation signature.",
  SpreadVariance: "Spread properties cannot have variance",
  TypeBeforeInitializer: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`",
  TypeCastInPattern: "The type cast expression is expected to be wrapped with parenthesis",
  UnexpectedExplicitInexactInObject: "Explicit inexact syntax must appear at the end of an inexact object",
  UnexpectedReservedType: "Unexpected reserved type %0",
  UnexpectedReservedUnderscore: "`_` is only allowed as a type argument to call or new",
  UnexpectedSpaceBetweenModuloChecks: "Spaces between `%` and `checks` are not allowed here.",
  UnexpectedSpreadType: "Spread operator cannot appear in class or interface definitions",
  UnexpectedSubtractionOperand: 'Unexpected token, expected "number" or "bigint"',
  UnexpectedTokenAfterTypeParameter: "Expected an arrow function after this type parameter declaration",
  UnexpectedTypeParameterBeforeAsyncArrowFunction: "Type parameters must come after the async keyword, e.g. instead of `<T> async () => {}`, use `async <T>() => {}`",
  UnsupportedDeclareExportKind: "`declare export %0` is not supported. Use `%1` instead",
  UnsupportedStatementInDeclareModule: "Only declares and type imports are allowed inside declare module",
  UnterminatedFlowComment: "Unterminated flow-comment"
});

function isEsModuleType(bodyElement) {
  return bodyElement.type === "DeclareExportAllDeclaration" || bodyElement.type === "DeclareExportDeclaration" && (!bodyElement.declaration || bodyElement.declaration.type !== "TypeAlias" && bodyElement.declaration.type !== "InterfaceDeclaration");
}

function hasTypeImportKind(node) {
  return node.importKind === "type" || node.importKind === "typeof";
}

function isMaybeDefaultImport(state) {
  return (state.type === types.name || !!state.type.keyword) && state.value !== "from";
}

const exportSuggestions = {
  const: "declare export var",
  let: "declare export var",
  type: "export type",
  interface: "export interface"
};

function partition(list, test) {
  const list1 = [];
  const list2 = [];

  for (let i = 0; i < list.length; i++) {
    (test(list[i], i, list) ? list1 : list2).push(list[i]);
  }

  return [list1, list2];
}

const FLOW_PRAGMA_REGEX = /\*?\s*@((?:no)?flow)\b/;
var flow = (superClass => {
  var _temp;

  return _temp = class extends superClass {
    constructor(...args) {
      super(...args);
      this.flowPragma = undefined;
    }

    getScopeHandler() {
      return FlowScopeHandler;
    }

    shouldParseTypes() {
      return this.getPluginOption("flow", "all") || this.flowPragma === "flow";
    }

    shouldParseEnums() {
      return !!this.getPluginOption("flow", "enums");
    }

    finishToken(type, val) {
      if (type !== types.string && type !== types.semi && type !== types.interpreterDirective) {
        if (this.flowPragma === undefined) {
          this.flowPragma = null;
        }
      }

      return super.finishToken(type, val);
    }

    addComment(comment) {
      if (this.flowPragma === undefined) {
        const matches = FLOW_PRAGMA_REGEX.exec(comment.value);

        if (!matches) ; else if (matches[1] === "flow") {
          this.flowPragma = "flow";
        } else if (matches[1] === "noflow") {
          this.flowPragma = "noflow";
        } else {
          throw new Error("Unexpected flow pragma");
        }
      }

      return super.addComment(comment);
    }

    flowParseTypeInitialiser(tok) {
      const oldInType = this.state.inType;
      this.state.inType = true;
      this.expect(tok || types.colon);
      const type = this.flowParseType();
      this.state.inType = oldInType;
      return type;
    }

    flowParsePredicate() {
      const node = this.startNode();
      const moduloLoc = this.state.startLoc;
      const moduloPos = this.state.start;
      this.expect(types.modulo);
      const checksLoc = this.state.startLoc;
      this.expectContextual("checks");

      if (moduloLoc.line !== checksLoc.line || moduloLoc.column !== checksLoc.column - 1) {
        this.raise(moduloPos, FlowErrors.UnexpectedSpaceBetweenModuloChecks);
      }

      if (this.eat(types.parenL)) {
        node.value = this.parseExpression();
        this.expect(types.parenR);
        return this.finishNode(node, "DeclaredPredicate");
      } else {
        return this.finishNode(node, "InferredPredicate");
      }
    }

    flowParseTypeAndPredicateInitialiser() {
      const oldInType = this.state.inType;
      this.state.inType = true;
      this.expect(types.colon);
      let type = null;
      let predicate = null;

      if (this.match(types.modulo)) {
        this.state.inType = oldInType;
        predicate = this.flowParsePredicate();
      } else {
        type = this.flowParseType();
        this.state.inType = oldInType;

        if (this.match(types.modulo)) {
          predicate = this.flowParsePredicate();
        }
      }

      return [type, predicate];
    }

    flowParseDeclareClass(node) {
      this.next();
      this.flowParseInterfaceish(node, true);
      return this.finishNode(node, "DeclareClass");
    }

    flowParseDeclareFunction(node) {
      this.next();
      const id = node.id = this.parseIdentifier();
      const typeNode = this.startNode();
      const typeContainer = this.startNode();

      if (this.isRelational("<")) {
        typeNode.typeParameters = this.flowParseTypeParameterDeclaration();
      } else {
        typeNode.typeParameters = null;
      }

      this.expect(types.parenL);
      const tmp = this.flowParseFunctionTypeParams();
      typeNode.params = tmp.params;
      typeNode.rest = tmp.rest;
      this.expect(types.parenR);
      [typeNode.returnType, node.predicate] = this.flowParseTypeAndPredicateInitialiser();
      typeContainer.typeAnnotation = this.finishNode(typeNode, "FunctionTypeAnnotation");
      id.typeAnnotation = this.finishNode(typeContainer, "TypeAnnotation");
      this.resetEndLocation(id);
      this.semicolon();
      this.scope.declareName(node.id.name, BIND_FLOW_DECLARE_FN, node.id.start);
      return this.finishNode(node, "DeclareFunction");
    }

    flowParseDeclare(node, insideModule) {
      if (this.match(types._class)) {
        return this.flowParseDeclareClass(node);
      } else if (this.match(types._function)) {
        return this.flowParseDeclareFunction(node);
      } else if (this.match(types._var)) {
        return this.flowParseDeclareVariable(node);
      } else if (this.eatContextual("module")) {
        if (this.match(types.dot)) {
          return this.flowParseDeclareModuleExports(node);
        } else {
          if (insideModule) {
            this.raise(this.state.lastTokStart, FlowErrors.NestedDeclareModule);
          }

          return this.flowParseDeclareModule(node);
        }
      } else if (this.isContextual("type")) {
        return this.flowParseDeclareTypeAlias(node);
      } else if (this.isContextual("opaque")) {
        return this.flowParseDeclareOpaqueType(node);
      } else if (this.isContextual("interface")) {
        return this.flowParseDeclareInterface(node);
      } else if (this.match(types._export)) {
        return this.flowParseDeclareExportDeclaration(node, insideModule);
      } else {
        throw this.unexpected();
      }
    }

    flowParseDeclareVariable(node) {
      this.next();
      node.id = this.flowParseTypeAnnotatableIdentifier(true);
      this.scope.declareName(node.id.name, BIND_VAR, node.id.start);
      this.semicolon();
      return this.finishNode(node, "DeclareVariable");
    }

    flowParseDeclareModule(node) {
      this.scope.enter(SCOPE_OTHER);

      if (this.match(types.string)) {
        node.id = this.parseExprAtom();
      } else {
        node.id = this.parseIdentifier();
      }

      const bodyNode = node.body = this.startNode();
      const body = bodyNode.body = [];
      this.expect(types.braceL);

      while (!this.match(types.braceR)) {
        let bodyNode = this.startNode();

        if (this.match(types._import)) {
          this.next();

          if (!this.isContextual("type") && !this.match(types._typeof)) {
            this.raise(this.state.lastTokStart, FlowErrors.InvalidNonTypeImportInDeclareModule);
          }

          this.parseImport(bodyNode);
        } else {
          this.expectContextual("declare", FlowErrors.UnsupportedStatementInDeclareModule);
          bodyNode = this.flowParseDeclare(bodyNode, true);
        }

        body.push(bodyNode);
      }

      this.scope.exit();
      this.expect(types.braceR);
      this.finishNode(bodyNode, "BlockStatement");
      let kind = null;
      let hasModuleExport = false;
      body.forEach(bodyElement => {
        if (isEsModuleType(bodyElement)) {
          if (kind === "CommonJS") {
            this.raise(bodyElement.start, FlowErrors.AmbiguousDeclareModuleKind);
          }

          kind = "ES";
        } else if (bodyElement.type === "DeclareModuleExports") {
          if (hasModuleExport) {
            this.raise(bodyElement.start, FlowErrors.DuplicateDeclareModuleExports);
          }

          if (kind === "ES") {
            this.raise(bodyElement.start, FlowErrors.AmbiguousDeclareModuleKind);
          }

          kind = "CommonJS";
          hasModuleExport = true;
        }
      });
      node.kind = kind || "CommonJS";
      return this.finishNode(node, "DeclareModule");
    }

    flowParseDeclareExportDeclaration(node, insideModule) {
      this.expect(types._export);

      if (this.eat(types._default)) {
        if (this.match(types._function) || this.match(types._class)) {
          node.declaration = this.flowParseDeclare(this.startNode());
        } else {
          node.declaration = this.flowParseType();
          this.semicolon();
        }

        node.default = true;
        return this.finishNode(node, "DeclareExportDeclaration");
      } else {
        if (this.match(types._const) || this.isLet() || (this.isContextual("type") || this.isContextual("interface")) && !insideModule) {
          const label = this.state.value;
          const suggestion = exportSuggestions[label];
          throw this.raise(this.state.start, FlowErrors.UnsupportedDeclareExportKind, label, suggestion);
        }

        if (this.match(types._var) || this.match(types._function) || this.match(types._class) || this.isContextual("opaque")) {
            node.declaration = this.flowParseDeclare(this.startNode());
            node.default = false;
            return this.finishNode(node, "DeclareExportDeclaration");
          } else if (this.match(types.star) || this.match(types.braceL) || this.isContextual("interface") || this.isContextual("type") || this.isContextual("opaque")) {
            node = this.parseExport(node);

            if (node.type === "ExportNamedDeclaration") {
              node.type = "ExportDeclaration";
              node.default = false;
              delete node.exportKind;
            }

            node.type = "Declare" + node.type;
            return node;
          }
      }

      throw this.unexpected();
    }

    flowParseDeclareModuleExports(node) {
      this.next();
      this.expectContextual("exports");
      node.typeAnnotation = this.flowParseTypeAnnotation();
      this.semicolon();
      return this.finishNode(node, "DeclareModuleExports");
    }

    flowParseDeclareTypeAlias(node) {
      this.next();
      this.flowParseTypeAlias(node);
      node.type = "DeclareTypeAlias";
      return node;
    }

    flowParseDeclareOpaqueType(node) {
      this.next();
      this.flowParseOpaqueType(node, true);
      node.type = "DeclareOpaqueType";
      return node;
    }

    flowParseDeclareInterface(node) {
      this.next();
      this.flowParseInterfaceish(node);
      return this.finishNode(node, "DeclareInterface");
    }

    flowParseInterfaceish(node, isClass = false) {
      node.id = this.flowParseRestrictedIdentifier(!isClass, true);
      this.scope.declareName(node.id.name, isClass ? BIND_FUNCTION : BIND_LEXICAL, node.id.start);

      if (this.isRelational("<")) {
        node.typeParameters = this.flowParseTypeParameterDeclaration();
      } else {
        node.typeParameters = null;
      }

      node.extends = [];
      node.implements = [];
      node.mixins = [];

      if (this.eat(types._extends)) {
        do {
          node.extends.push(this.flowParseInterfaceExtends());
        } while (!isClass && this.eat(types.comma));
      }

      if (this.isContextual("mixins")) {
        this.next();

        do {
          node.mixins.push(this.flowParseInterfaceExtends());
        } while (this.eat(types.comma));
      }

      if (this.isContextual("implements")) {
        this.next();

        do {
          node.implements.push(this.flowParseInterfaceExtends());
        } while (this.eat(types.comma));
      }

      node.body = this.flowParseObjectType({
        allowStatic: isClass,
        allowExact: false,
        allowSpread: false,
        allowProto: isClass,
        allowInexact: false
      });
    }

    flowParseInterfaceExtends() {
      const node = this.startNode();
      node.id = this.flowParseQualifiedTypeIdentifier();

      if (this.isRelational("<")) {
        node.typeParameters = this.flowParseTypeParameterInstantiation();
      } else {
        node.typeParameters = null;
      }

      return this.finishNode(node, "InterfaceExtends");
    }

    flowParseInterface(node) {
      this.flowParseInterfaceish(node);
      return this.finishNode(node, "InterfaceDeclaration");
    }

    checkNotUnderscore(word) {
      if (word === "_") {
        this.raise(this.state.start, FlowErrors.UnexpectedReservedUnderscore);
      }
    }

    checkReservedType(word, startLoc, declaration) {
      if (!reservedTypes.has(word)) return;
      this.raise(startLoc, declaration ? FlowErrors.AssignReservedType : FlowErrors.UnexpectedReservedType, word);
    }

    flowParseRestrictedIdentifier(liberal, declaration) {
      this.checkReservedType(this.state.value, this.state.start, declaration);
      return this.parseIdentifier(liberal);
    }

    flowParseTypeAlias(node) {
      node.id = this.flowParseRestrictedIdentifier(false, true);
      this.scope.declareName(node.id.name, BIND_LEXICAL, node.id.start);

      if (this.isRelational("<")) {
        node.typeParameters = this.flowParseTypeParameterDeclaration();
      } else {
        node.typeParameters = null;
      }

      node.right = this.flowParseTypeInitialiser(types.eq);
      this.semicolon();
      return this.finishNode(node, "TypeAlias");
    }

    flowParseOpaqueType(node, declare) {
      this.expectContextual("type");
      node.id = this.flowParseRestrictedIdentifier(true, true);
      this.scope.declareName(node.id.name, BIND_LEXICAL, node.id.start);

      if (this.isRelational("<")) {
        node.typeParameters = this.flowParseTypeParameterDeclaration();
      } else {
        node.typeParameters = null;
      }

      node.supertype = null;

      if (this.match(types.colon)) {
        node.supertype = this.flowParseTypeInitialiser(types.colon);
      }

      node.impltype = null;

      if (!declare) {
        node.impltype = this.flowParseTypeInitialiser(types.eq);
      }

      this.semicolon();
      return this.finishNode(node, "OpaqueType");
    }

    flowParseTypeParameter(requireDefault = false) {
      const nodeStart = this.state.start;
      const node = this.startNode();
      const variance = this.flowParseVariance();
      const ident = this.flowParseTypeAnnotatableIdentifier();
      node.name = ident.name;
      node.variance = variance;
      node.bound = ident.typeAnnotation;

      if (this.match(types.eq)) {
        this.eat(types.eq);
        node.default = this.flowParseType();
      } else {
        if (requireDefault) {
          this.raise(nodeStart, FlowErrors.MissingTypeParamDefault);
        }
      }

      return this.finishNode(node, "TypeParameter");
    }

    flowParseTypeParameterDeclaration() {
      const oldInType = this.state.inType;
      const node = this.startNode();
      node.params = [];
      this.state.inType = true;

      if (this.isRelational("<") || this.match(types.jsxTagStart)) {
        this.next();
      } else {
        this.unexpected();
      }

      let defaultRequired = false;

      do {
        const typeParameter = this.flowParseTypeParameter(defaultRequired);
        node.params.push(typeParameter);

        if (typeParameter.default) {
          defaultRequired = true;
        }

        if (!this.isRelational(">")) {
          this.expect(types.comma);
        }
      } while (!this.isRelational(">"));

      this.expectRelational(">");
      this.state.inType = oldInType;
      return this.finishNode(node, "TypeParameterDeclaration");
    }

    flowParseTypeParameterInstantiation() {
      const node = this.startNode();
      const oldInType = this.state.inType;
      node.params = [];
      this.state.inType = true;
      this.expectRelational("<");
      const oldNoAnonFunctionType = this.state.noAnonFunctionType;
      this.state.noAnonFunctionType = false;

      while (!this.isRelational(">")) {
        node.params.push(this.flowParseType());

        if (!this.isRelational(">")) {
          this.expect(types.comma);
        }
      }

      this.state.noAnonFunctionType = oldNoAnonFunctionType;
      this.expectRelational(">");
      this.state.inType = oldInType;
      return this.finishNode(node, "TypeParameterInstantiation");
    }

    flowParseTypeParameterInstantiationCallOrNew() {
      const node = this.startNode();
      const oldInType = this.state.inType;
      node.params = [];
      this.state.inType = true;
      this.expectRelational("<");

      while (!this.isRelational(">")) {
        node.params.push(this.flowParseTypeOrImplicitInstantiation());

        if (!this.isRelational(">")) {
          this.expect(types.comma);
        }
      }

      this.expectRelational(">");
      this.state.inType = oldInType;
      return this.finishNode(node, "TypeParameterInstantiation");
    }

    flowParseInterfaceType() {
      const node = this.startNode();
      this.expectContextual("interface");
      node.extends = [];

      if (this.eat(types._extends)) {
        do {
          node.extends.push(this.flowParseInterfaceExtends());
        } while (this.eat(types.comma));
      }

      node.body = this.flowParseObjectType({
        allowStatic: false,
        allowExact: false,
        allowSpread: false,
        allowProto: false,
        allowInexact: false
      });
      return this.finishNode(node, "InterfaceTypeAnnotation");
    }

    flowParseObjectPropertyKey() {
      return this.match(types.num) || this.match(types.string) ? this.parseExprAtom() : this.parseIdentifier(true);
    }

    flowParseObjectTypeIndexer(node, isStatic, variance) {
      node.static = isStatic;

      if (this.lookahead().type === types.colon) {
        node.id = this.flowParseObjectPropertyKey();
        node.key = this.flowParseTypeInitialiser();
      } else {
        node.id = null;
        node.key = this.flowParseType();
      }

      this.expect(types.bracketR);
      node.value = this.flowParseTypeInitialiser();
      node.variance = variance;
      return this.finishNode(node, "ObjectTypeIndexer");
    }

    flowParseObjectTypeInternalSlot(node, isStatic) {
      node.static = isStatic;
      node.id = this.flowParseObjectPropertyKey();
      this.expect(types.bracketR);
      this.expect(types.bracketR);

      if (this.isRelational("<") || this.match(types.parenL)) {
        node.method = true;
        node.optional = false;
        node.value = this.flowParseObjectTypeMethodish(this.startNodeAt(node.start, node.loc.start));
      } else {
        node.method = false;

        if (this.eat(types.question)) {
          node.optional = true;
        }

        node.value = this.flowParseTypeInitialiser();
      }

      return this.finishNode(node, "ObjectTypeInternalSlot");
    }

    flowParseObjectTypeMethodish(node) {
      node.params = [];
      node.rest = null;
      node.typeParameters = null;

      if (this.isRelational("<")) {
        node.typeParameters = this.flowParseTypeParameterDeclaration();
      }

      this.expect(types.parenL);

      while (!this.match(types.parenR) && !this.match(types.ellipsis)) {
        node.params.push(this.flowParseFunctionTypeParam());

        if (!this.match(types.parenR)) {
          this.expect(types.comma);
        }
      }

      if (this.eat(types.ellipsis)) {
        node.rest = this.flowParseFunctionTypeParam();
      }

      this.expect(types.parenR);
      node.returnType = this.flowParseTypeInitialiser();
      return this.finishNode(node, "FunctionTypeAnnotation");
    }

    flowParseObjectTypeCallProperty(node, isStatic) {
      const valueNode = this.startNode();
      node.static = isStatic;
      node.value = this.flowParseObjectTypeMethodish(valueNode);
      return this.finishNode(node, "ObjectTypeCallProperty");
    }

    flowParseObjectType({
      allowStatic,
      allowExact,
      allowSpread,
      allowProto,
      allowInexact
    }) {
      const oldInType = this.state.inType;
      this.state.inType = true;
      const nodeStart = this.startNode();
      nodeStart.callProperties = [];
      nodeStart.properties = [];
      nodeStart.indexers = [];
      nodeStart.internalSlots = [];
      let endDelim;
      let exact;
      let inexact = false;

      if (allowExact && this.match(types.braceBarL)) {
        this.expect(types.braceBarL);
        endDelim = types.braceBarR;
        exact = true;
      } else {
        this.expect(types.braceL);
        endDelim = types.braceR;
        exact = false;
      }

      nodeStart.exact = exact;

      while (!this.match(endDelim)) {
        let isStatic = false;
        let protoStart = null;
        let inexactStart = null;
        const node = this.startNode();

        if (allowProto && this.isContextual("proto")) {
          const lookahead = this.lookahead();

          if (lookahead.type !== types.colon && lookahead.type !== types.question) {
            this.next();
            protoStart = this.state.start;
            allowStatic = false;
          }
        }

        if (allowStatic && this.isContextual("static")) {
          const lookahead = this.lookahead();

          if (lookahead.type !== types.colon && lookahead.type !== types.question) {
            this.next();
            isStatic = true;
          }
        }

        const variance = this.flowParseVariance();

        if (this.eat(types.bracketL)) {
          if (protoStart != null) {
            this.unexpected(protoStart);
          }

          if (this.eat(types.bracketL)) {
            if (variance) {
              this.unexpected(variance.start);
            }

            nodeStart.internalSlots.push(this.flowParseObjectTypeInternalSlot(node, isStatic));
          } else {
            nodeStart.indexers.push(this.flowParseObjectTypeIndexer(node, isStatic, variance));
          }
        } else if (this.match(types.parenL) || this.isRelational("<")) {
          if (protoStart != null) {
            this.unexpected(protoStart);
          }

          if (variance) {
            this.unexpected(variance.start);
          }

          nodeStart.callProperties.push(this.flowParseObjectTypeCallProperty(node, isStatic));
        } else {
          let kind = "init";

          if (this.isContextual("get") || this.isContextual("set")) {
            const lookahead = this.lookahead();

            if (lookahead.type === types.name || lookahead.type === types.string || lookahead.type === types.num) {
              kind = this.state.value;
              this.next();
            }
          }

          const propOrInexact = this.flowParseObjectTypeProperty(node, isStatic, protoStart, variance, kind, allowSpread, allowInexact != null ? allowInexact : !exact);

          if (propOrInexact === null) {
            inexact = true;
            inexactStart = this.state.lastTokStart;
          } else {
            nodeStart.properties.push(propOrInexact);
          }
        }

        this.flowObjectTypeSemicolon();

        if (inexactStart && !this.match(types.braceR) && !this.match(types.braceBarR)) {
          this.raise(inexactStart, FlowErrors.UnexpectedExplicitInexactInObject);
        }
      }

      this.expect(endDelim);

      if (allowSpread) {
        nodeStart.inexact = inexact;
      }

      const out = this.finishNode(nodeStart, "ObjectTypeAnnotation");
      this.state.inType = oldInType;
      return out;
    }

    flowParseObjectTypeProperty(node, isStatic, protoStart, variance, kind, allowSpread, allowInexact) {
      if (this.eat(types.ellipsis)) {
        const isInexactToken = this.match(types.comma) || this.match(types.semi) || this.match(types.braceR) || this.match(types.braceBarR);

        if (isInexactToken) {
          if (!allowSpread) {
            this.raise(this.state.lastTokStart, FlowErrors.InexactInsideNonObject);
          } else if (!allowInexact) {
            this.raise(this.state.lastTokStart, FlowErrors.InexactInsideExact);
          }

          if (variance) {
            this.raise(variance.start, FlowErrors.InexactVariance);
          }

          return null;
        }

        if (!allowSpread) {
          this.raise(this.state.lastTokStart, FlowErrors.UnexpectedSpreadType);
        }

        if (protoStart != null) {
          this.unexpected(protoStart);
        }

        if (variance) {
          this.raise(variance.start, FlowErrors.SpreadVariance);
        }

        node.argument = this.flowParseType();
        return this.finishNode(node, "ObjectTypeSpreadProperty");
      } else {
        node.key = this.flowParseObjectPropertyKey();
        node.static = isStatic;
        node.proto = protoStart != null;
        node.kind = kind;
        let optional = false;

        if (this.isRelational("<") || this.match(types.parenL)) {
          node.method = true;

          if (protoStart != null) {
            this.unexpected(protoStart);
          }

          if (variance) {
            this.unexpected(variance.start);
          }

          node.value = this.flowParseObjectTypeMethodish(this.startNodeAt(node.start, node.loc.start));

          if (kind === "get" || kind === "set") {
            this.flowCheckGetterSetterParams(node);
          }
        } else {
          if (kind !== "init") this.unexpected();
          node.method = false;

          if (this.eat(types.question)) {
            optional = true;
          }

          node.value = this.flowParseTypeInitialiser();
          node.variance = variance;
        }

        node.optional = optional;
        return this.finishNode(node, "ObjectTypeProperty");
      }
    }

    flowCheckGetterSetterParams(property) {
      const paramCount = property.kind === "get" ? 0 : 1;
      const start = property.start;
      const length = property.value.params.length + (property.value.rest ? 1 : 0);

      if (length !== paramCount) {
        if (property.kind === "get") {
          this.raise(start, ErrorMessages.BadGetterArity);
        } else {
          this.raise(start, ErrorMessages.BadSetterArity);
        }
      }

      if (property.kind === "set" && property.value.rest) {
        this.raise(start, ErrorMessages.BadSetterRestParameter);
      }
    }

    flowObjectTypeSemicolon() {
      if (!this.eat(types.semi) && !this.eat(types.comma) && !this.match(types.braceR) && !this.match(types.braceBarR)) {
        this.unexpected();
      }
    }

    flowParseQualifiedTypeIdentifier(startPos, startLoc, id) {
      startPos = startPos || this.state.start;
      startLoc = startLoc || this.state.startLoc;
      let node = id || this.flowParseRestrictedIdentifier(true);

      while (this.eat(types.dot)) {
        const node2 = this.startNodeAt(startPos, startLoc);
        node2.qualification = node;
        node2.id = this.flowParseRestrictedIdentifier(true);
        node = this.finishNode(node2, "QualifiedTypeIdentifier");
      }

      return node;
    }

    flowParseGenericType(startPos, startLoc, id) {
      const node = this.startNodeAt(startPos, startLoc);
      node.typeParameters = null;
      node.id = this.flowParseQualifiedTypeIdentifier(startPos, startLoc, id);

      if (this.isRelational("<")) {
        node.typeParameters = this.flowParseTypeParameterInstantiation();
      }

      return this.finishNode(node, "GenericTypeAnnotation");
    }

    flowParseTypeofType() {
      const node = this.startNode();
      this.expect(types._typeof);
      node.argument = this.flowParsePrimaryType();
      return this.finishNode(node, "TypeofTypeAnnotation");
    }

    flowParseTupleType() {
      const node = this.startNode();
      node.types = [];
      this.expect(types.bracketL);

      while (this.state.pos < this.length && !this.match(types.bracketR)) {
        node.types.push(this.flowParseType());
        if (this.match(types.bracketR)) break;
        this.expect(types.comma);
      }

      this.expect(types.bracketR);
      return this.finishNode(node, "TupleTypeAnnotation");
    }

    flowParseFunctionTypeParam() {
      let name = null;
      let optional = false;
      let typeAnnotation = null;
      const node = this.startNode();
      const lh = this.lookahead();

      if (lh.type === types.colon || lh.type === types.question) {
        name = this.parseIdentifier();

        if (this.eat(types.question)) {
          optional = true;
        }

        typeAnnotation = this.flowParseTypeInitialiser();
      } else {
        typeAnnotation = this.flowParseType();
      }

      node.name = name;
      node.optional = optional;
      node.typeAnnotation = typeAnnotation;
      return this.finishNode(node, "FunctionTypeParam");
    }

    reinterpretTypeAsFunctionTypeParam(type) {
      const node = this.startNodeAt(type.start, type.loc.start);
      node.name = null;
      node.optional = false;
      node.typeAnnotation = type;
      return this.finishNode(node, "FunctionTypeParam");
    }

    flowParseFunctionTypeParams(params = []) {
      let rest = null;

      while (!this.match(types.parenR) && !this.match(types.ellipsis)) {
        params.push(this.flowParseFunctionTypeParam());

        if (!this.match(types.parenR)) {
          this.expect(types.comma);
        }
      }

      if (this.eat(types.ellipsis)) {
        rest = this.flowParseFunctionTypeParam();
      }

      return {
        params,
        rest
      };
    }

    flowIdentToTypeAnnotation(startPos, startLoc, node, id) {
      switch (id.name) {
        case "any":
          return this.finishNode(node, "AnyTypeAnnotation");

        case "bool":
        case "boolean":
          return this.finishNode(node, "BooleanTypeAnnotation");

        case "mixed":
          return this.finishNode(node, "MixedTypeAnnotation");

        case "empty":
          return this.finishNode(node, "EmptyTypeAnnotation");

        case "number":
          return this.finishNode(node, "NumberTypeAnnotation");

        case "string":
          return this.finishNode(node, "StringTypeAnnotation");

        case "symbol":
          return this.finishNode(node, "SymbolTypeAnnotation");

        default:
          this.checkNotUnderscore(id.name);
          return this.flowParseGenericType(startPos, startLoc, id);
      }
    }

    flowParsePrimaryType() {
      const startPos = this.state.start;
      const startLoc = this.state.startLoc;
      const node = this.startNode();
      let tmp;
      let type;
      let isGroupedType = false;
      const oldNoAnonFunctionType = this.state.noAnonFunctionType;

      switch (this.state.type) {
        case types.name:
          if (this.isContextual("interface")) {
            return this.flowParseInterfaceType();
          }

          return this.flowIdentToTypeAnnotation(startPos, startLoc, node, this.parseIdentifier());

        case types.braceL:
          return this.flowParseObjectType({
            allowStatic: false,
            allowExact: false,
            allowSpread: true,
            allowProto: false,
            allowInexact: true
          });

        case types.braceBarL:
          return this.flowParseObjectType({
            allowStatic: false,
            allowExact: true,
            allowSpread: true,
            allowProto: false,
            allowInexact: false
          });

        case types.bracketL:
          this.state.noAnonFunctionType = false;
          type = this.flowParseTupleType();
          this.state.noAnonFunctionType = oldNoAnonFunctionType;
          return type;

        case types.relational:
          if (this.state.value === "<") {
            node.typeParameters = this.flowParseTypeParameterDeclaration();
            this.expect(types.parenL);
            tmp = this.flowParseFunctionTypeParams();
            node.params = tmp.params;
            node.rest = tmp.rest;
            this.expect(types.parenR);
            this.expect(types.arrow);
            node.returnType = this.flowParseType();
            return this.finishNode(node, "FunctionTypeAnnotation");
          }

          break;

        case types.parenL:
          this.next();

          if (!this.match(types.parenR) && !this.match(types.ellipsis)) {
            if (this.match(types.name)) {
              const token = this.lookahead().type;
              isGroupedType = token !== types.question && token !== types.colon;
            } else {
              isGroupedType = true;
            }
          }

          if (isGroupedType) {
            this.state.noAnonFunctionType = false;
            type = this.flowParseType();
            this.state.noAnonFunctionType = oldNoAnonFunctionType;

            if (this.state.noAnonFunctionType || !(this.match(types.comma) || this.match(types.parenR) && this.lookahead().type === types.arrow)) {
              this.expect(types.parenR);
              return type;
            } else {
              this.eat(types.comma);
            }
          }

          if (type) {
            tmp = this.flowParseFunctionTypeParams([this.reinterpretTypeAsFunctionTypeParam(type)]);
          } else {
            tmp = this.flowParseFunctionTypeParams();
          }

          node.params = tmp.params;
          node.rest = tmp.rest;
          this.expect(types.parenR);
          this.expect(types.arrow);
          node.returnType = this.flowParseType();
          node.typeParameters = null;
          return this.finishNode(node, "FunctionTypeAnnotation");

        case types.string:
          return this.parseLiteral(this.state.value, "StringLiteralTypeAnnotation");

        case types._true:
        case types._false:
          node.value = this.match(types._true);
          this.next();
          return this.finishNode(node, "BooleanLiteralTypeAnnotation");

        case types.plusMin:
          if (this.state.value === "-") {
            this.next();

            if (this.match(types.num)) {
              return this.parseLiteral(-this.state.value, "NumberLiteralTypeAnnotation", node.start, node.loc.start);
            }

            if (this.match(types.bigint)) {
              return this.parseLiteral(-this.state.value, "BigIntLiteralTypeAnnotation", node.start, node.loc.start);
            }

            throw this.raise(this.state.start, FlowErrors.UnexpectedSubtractionOperand);
          }

          throw this.unexpected();

        case types.num:
          return this.parseLiteral(this.state.value, "NumberLiteralTypeAnnotation");

        case types.bigint:
          return this.parseLiteral(this.state.value, "BigIntLiteralTypeAnnotation");

        case types._void:
          this.next();
          return this.finishNode(node, "VoidTypeAnnotation");

        case types._null:
          this.next();
          return this.finishNode(node, "NullLiteralTypeAnnotation");

        case types._this:
          this.next();
          return this.finishNode(node, "ThisTypeAnnotation");

        case types.star:
          this.next();
          return this.finishNode(node, "ExistsTypeAnnotation");

        default:
          if (this.state.type.keyword === "typeof") {
            return this.flowParseTypeofType();
          } else if (this.state.type.keyword) {
            const label = this.state.type.label;
            this.next();
            return super.createIdentifier(node, label);
          }

      }

      throw this.unexpected();
    }

    flowParsePostfixType() {
      const startPos = this.state.start,
            startLoc = this.state.startLoc;
      let type = this.flowParsePrimaryType();

      while (this.match(types.bracketL) && !this.canInsertSemicolon()) {
        const node = this.startNodeAt(startPos, startLoc);
        node.elementType = type;
        this.expect(types.bracketL);
        this.expect(types.bracketR);
        type = this.finishNode(node, "ArrayTypeAnnotation");
      }

      return type;
    }

    flowParsePrefixType() {
      const node = this.startNode();

      if (this.eat(types.question)) {
        node.typeAnnotation = this.flowParsePrefixType();
        return this.finishNode(node, "NullableTypeAnnotation");
      } else {
        return this.flowParsePostfixType();
      }
    }

    flowParseAnonFunctionWithoutParens() {
      const param = this.flowParsePrefixType();

      if (!this.state.noAnonFunctionType && this.eat(types.arrow)) {
        const node = this.startNodeAt(param.start, param.loc.start);
        node.params = [this.reinterpretTypeAsFunctionTypeParam(param)];
        node.rest = null;
        node.returnType = this.flowParseType();
        node.typeParameters = null;
        return this.finishNode(node, "FunctionTypeAnnotation");
      }

      return param;
    }

    flowParseIntersectionType() {
      const node = this.startNode();
      this.eat(types.bitwiseAND);
      const type = this.flowParseAnonFunctionWithoutParens();
      node.types = [type];

      while (this.eat(types.bitwiseAND)) {
        node.types.push(this.flowParseAnonFunctionWithoutParens());
      }

      return node.types.length === 1 ? type : this.finishNode(node, "IntersectionTypeAnnotation");
    }

    flowParseUnionType() {
      const node = this.startNode();
      this.eat(types.bitwiseOR);
      const type = this.flowParseIntersectionType();
      node.types = [type];

      while (this.eat(types.bitwiseOR)) {
        node.types.push(this.flowParseIntersectionType());
      }

      return node.types.length === 1 ? type : this.finishNode(node, "UnionTypeAnnotation");
    }

    flowParseType() {
      const oldInType = this.state.inType;
      this.state.inType = true;
      const type = this.flowParseUnionType();
      this.state.inType = oldInType;
      this.state.exprAllowed = this.state.exprAllowed || this.state.noAnonFunctionType;
      return type;
    }

    flowParseTypeOrImplicitInstantiation() {
      if (this.state.type === types.name && this.state.value === "_") {
        const startPos = this.state.start;
        const startLoc = this.state.startLoc;
        const node = this.parseIdentifier();
        return this.flowParseGenericType(startPos, startLoc, node);
      } else {
        return this.flowParseType();
      }
    }

    flowParseTypeAnnotation() {
      const node = this.startNode();
      node.typeAnnotation = this.flowParseTypeInitialiser();
      return this.finishNode(node, "TypeAnnotation");
    }

    flowParseTypeAnnotatableIdentifier(allowPrimitiveOverride) {
      const ident = allowPrimitiveOverride ? this.parseIdentifier() : this.flowParseRestrictedIdentifier();

      if (this.match(types.colon)) {
        ident.typeAnnotation = this.flowParseTypeAnnotation();
        this.resetEndLocation(ident);
      }

      return ident;
    }

    typeCastToParameter(node) {
      node.expression.typeAnnotation = node.typeAnnotation;
      this.resetEndLocation(node.expression, node.typeAnnotation.end, node.typeAnnotation.loc.end);
      return node.expression;
    }

    flowParseVariance() {
      let variance = null;

      if (this.match(types.plusMin)) {
        variance = this.startNode();

        if (this.state.value === "+") {
          variance.kind = "plus";
        } else {
          variance.kind = "minus";
        }

        this.next();
        this.finishNode(variance, "Variance");
      }

      return variance;
    }

    parseFunctionBody(node, allowExpressionBody, isMethod = false) {
      if (allowExpressionBody) {
        return this.forwardNoArrowParamsConversionAt(node, () => super.parseFunctionBody(node, true, isMethod));
      }

      return super.parseFunctionBody(node, false, isMethod);
    }

    parseFunctionBodyAndFinish(node, type, isMethod = false) {
      if (this.match(types.colon)) {
        const typeNode = this.startNode();
        [typeNode.typeAnnotation, node.predicate] = this.flowParseTypeAndPredicateInitialiser();
        node.returnType = typeNode.typeAnnotation ? this.finishNode(typeNode, "TypeAnnotation") : null;
      }

      super.parseFunctionBodyAndFinish(node, type, isMethod);
    }

    parseStatement(context, topLevel) {
      if (this.state.strict && this.match(types.name) && this.state.value === "interface") {
        const lookahead = this.lookahead();

        if (lookahead.type === types.name || isKeyword(lookahead.value)) {
          const node = this.startNode();
          this.next();
          return this.flowParseInterface(node);
        }
      } else if (this.shouldParseEnums() && this.isContextual("enum")) {
        const node = this.startNode();
        this.next();
        return this.flowParseEnumDeclaration(node);
      }

      const stmt = super.parseStatement(context, topLevel);

      if (this.flowPragma === undefined && !this.isValidDirective(stmt)) {
        this.flowPragma = null;
      }

      return stmt;
    }

    parseExpressionStatement(node, expr) {
      if (expr.type === "Identifier") {
        if (expr.name === "declare") {
          if (this.match(types._class) || this.match(types.name) || this.match(types._function) || this.match(types._var) || this.match(types._export)) {
            return this.flowParseDeclare(node);
          }
        } else if (this.match(types.name)) {
          if (expr.name === "interface") {
            return this.flowParseInterface(node);
          } else if (expr.name === "type") {
            return this.flowParseTypeAlias(node);
          } else if (expr.name === "opaque") {
            return this.flowParseOpaqueType(node, false);
          }
        }
      }

      return super.parseExpressionStatement(node, expr);
    }

    shouldParseExportDeclaration() {
      return this.isContextual("type") || this.isContextual("interface") || this.isContextual("opaque") || this.shouldParseEnums() && this.isContextual("enum") || super.shouldParseExportDeclaration();
    }

    isExportDefaultSpecifier() {
      if (this.match(types.name) && (this.state.value === "type" || this.state.value === "interface" || this.state.value === "opaque" || this.shouldParseEnums() && this.state.value === "enum")) {
        return false;
      }

      return super.isExportDefaultSpecifier();
    }

    parseExportDefaultExpression() {
      if (this.shouldParseEnums() && this.isContextual("enum")) {
        const node = this.startNode();
        this.next();
        return this.flowParseEnumDeclaration(node);
      }

      return super.parseExportDefaultExpression();
    }

    parseConditional(expr, startPos, startLoc, refNeedsArrowPos) {
      if (!this.match(types.question)) return expr;

      if (refNeedsArrowPos) {
        const result = this.tryParse(() => super.parseConditional(expr, startPos, startLoc));

        if (!result.node) {
          refNeedsArrowPos.start = result.error.pos || this.state.start;
          return expr;
        }

        if (result.error) this.state = result.failState;
        return result.node;
      }

      this.expect(types.question);
      const state = this.state.clone();
      const originalNoArrowAt = this.state.noArrowAt;
      const node = this.startNodeAt(startPos, startLoc);
      let {
        consequent,
        failed
      } = this.tryParseConditionalConsequent();
      let [valid, invalid] = this.getArrowLikeExpressions(consequent);

      if (failed || invalid.length > 0) {
        const noArrowAt = [...originalNoArrowAt];

        if (invalid.length > 0) {
          this.state = state;
          this.state.noArrowAt = noArrowAt;

          for (let i = 0; i < invalid.length; i++) {
            noArrowAt.push(invalid[i].start);
          }

          ({
            consequent,
            failed
          } = this.tryParseConditionalConsequent());
          [valid, invalid] = this.getArrowLikeExpressions(consequent);
        }

        if (failed && valid.length > 1) {
          this.raise(state.start, FlowErrors.AmbiguousConditionalArrow);
        }

        if (failed && valid.length === 1) {
          this.state = state;
          this.state.noArrowAt = noArrowAt.concat(valid[0].start);
          ({
            consequent,
            failed
          } = this.tryParseConditionalConsequent());
        }
      }

      this.getArrowLikeExpressions(consequent, true);
      this.state.noArrowAt = originalNoArrowAt;
      this.expect(types.colon);
      node.test = expr;
      node.consequent = consequent;
      node.alternate = this.forwardNoArrowParamsConversionAt(node, () => this.parseMaybeAssign(undefined, undefined, undefined));
      return this.finishNode(node, "ConditionalExpression");
    }

    tryParseConditionalConsequent() {
      this.state.noArrowParamsConversionAt.push(this.state.start);
      const consequent = this.parseMaybeAssignAllowIn();
      const failed = !this.match(types.colon);
      this.state.noArrowParamsConversionAt.pop();
      return {
        consequent,
        failed
      };
    }

    getArrowLikeExpressions(node, disallowInvalid) {
      const stack = [node];
      const arrows = [];

      while (stack.length !== 0) {
        const node = stack.pop();

        if (node.type === "ArrowFunctionExpression") {
          if (node.typeParameters || !node.returnType) {
            this.finishArrowValidation(node);
          } else {
            arrows.push(node);
          }

          stack.push(node.body);
        } else if (node.type === "ConditionalExpression") {
          stack.push(node.consequent);
          stack.push(node.alternate);
        }
      }

      if (disallowInvalid) {
        arrows.forEach(node => this.finishArrowValidation(node));
        return [arrows, []];
      }

      return partition(arrows, node => node.params.every(param => this.isAssignable(param, true)));
    }

    finishArrowValidation(node) {
      var _node$extra;

      this.toAssignableList(node.params, (_node$extra = node.extra) == null ? void 0 : _node$extra.trailingComma, false);
      this.scope.enter(SCOPE_FUNCTION | SCOPE_ARROW);
      super.checkParams(node, false, true);
      this.scope.exit();
    }

    forwardNoArrowParamsConversionAt(node, parse) {
      let result;

      if (this.state.noArrowParamsConversionAt.indexOf(node.start) !== -1) {
        this.state.noArrowParamsConversionAt.push(this.state.start);
        result = parse();
        this.state.noArrowParamsConversionAt.pop();
      } else {
        result = parse();
      }

      return result;
    }

    parseParenItem(node, startPos, startLoc) {
      node = super.parseParenItem(node, startPos, startLoc);

      if (this.eat(types.question)) {
        node.optional = true;
        this.resetEndLocation(node);
      }

      if (this.match(types.colon)) {
        const typeCastNode = this.startNodeAt(startPos, startLoc);
        typeCastNode.expression = node;
        typeCastNode.typeAnnotation = this.flowParseTypeAnnotation();
        return this.finishNode(typeCastNode, "TypeCastExpression");
      }

      return node;
    }

    assertModuleNodeAllowed(node) {
      if (node.type === "ImportDeclaration" && (node.importKind === "type" || node.importKind === "typeof") || node.type === "ExportNamedDeclaration" && node.exportKind === "type" || node.type === "ExportAllDeclaration" && node.exportKind === "type") {
        return;
      }

      super.assertModuleNodeAllowed(node);
    }

    parseExport(node) {
      const decl = super.parseExport(node);

      if (decl.type === "ExportNamedDeclaration" || decl.type === "ExportAllDeclaration") {
        decl.exportKind = decl.exportKind || "value";
      }

      return decl;
    }

    parseExportDeclaration(node) {
      if (this.isContextual("type")) {
        node.exportKind = "type";
        const declarationNode = this.startNode();
        this.next();

        if (this.match(types.braceL)) {
          node.specifiers = this.parseExportSpecifiers();
          this.parseExportFrom(node);
          return null;
        } else {
          return this.flowParseTypeAlias(declarationNode);
        }
      } else if (this.isContextual("opaque")) {
        node.exportKind = "type";
        const declarationNode = this.startNode();
        this.next();
        return this.flowParseOpaqueType(declarationNode, false);
      } else if (this.isContextual("interface")) {
        node.exportKind = "type";
        const declarationNode = this.startNode();
        this.next();
        return this.flowParseInterface(declarationNode);
      } else if (this.shouldParseEnums() && this.isContextual("enum")) {
        node.exportKind = "value";
        const declarationNode = this.startNode();
        this.next();
        return this.flowParseEnumDeclaration(declarationNode);
      } else {
        return super.parseExportDeclaration(node);
      }
    }

    eatExportStar(node) {
      if (super.eatExportStar(...arguments)) return true;

      if (this.isContextual("type") && this.lookahead().type === types.star) {
        node.exportKind = "type";
        this.next();
        this.next();
        return true;
      }

      return false;
    }

    maybeParseExportNamespaceSpecifier(node) {
      const pos = this.state.start;
      const hasNamespace = super.maybeParseExportNamespaceSpecifier(node);

      if (hasNamespace && node.exportKind === "type") {
        this.unexpected(pos);
      }

      return hasNamespace;
    }

    parseClassId(node, isStatement, optionalId) {
      super.parseClassId(node, isStatement, optionalId);

      if (this.isRelational("<")) {
        node.typeParameters = this.flowParseTypeParameterDeclaration();
      }
    }

    parseClassMember(classBody, member, state) {
      const pos = this.state.start;

      if (this.isContextual("declare")) {
        if (this.parseClassMemberFromModifier(classBody, member)) {
          return;
        }

        member.declare = true;
      }

      super.parseClassMember(classBody, member, state);

      if (member.declare) {
        if (member.type !== "ClassProperty" && member.type !== "ClassPrivateProperty") {
          this.raise(pos, FlowErrors.DeclareClassElement);
        } else if (member.value) {
          this.raise(member.value.start, FlowErrors.DeclareClassFieldInitializer);
        }
      }
    }

    getTokenFromCode(code) {
      const next = this.input.charCodeAt(this.state.pos + 1);

      if (code === 123 && next === 124) {
        return this.finishOp(types.braceBarL, 2);
      } else if (this.state.inType && (code === 62 || code === 60)) {
        return this.finishOp(types.relational, 1);
      } else if (this.state.inType && code === 63) {
        return this.finishOp(types.question, 1);
      } else if (isIteratorStart(code, next)) {
        this.state.isIterator = true;
        return super.readWord();
      } else {
        return super.getTokenFromCode(code);
      }
    }

    isAssignable(node, isBinding) {
      switch (node.type) {
        case "Identifier":
        case "ObjectPattern":
        case "ArrayPattern":
        case "AssignmentPattern":
          return true;

        case "ObjectExpression":
          {
            const last = node.properties.length - 1;
            return node.properties.every((prop, i) => {
              return prop.type !== "ObjectMethod" && (i === last || prop.type === "SpreadElement") && this.isAssignable(prop);
            });
          }

        case "ObjectProperty":
          return this.isAssignable(node.value);

        case "SpreadElement":
          return this.isAssignable(node.argument);

        case "ArrayExpression":
          return node.elements.every(element => this.isAssignable(element));

        case "AssignmentExpression":
          return node.operator === "=";

        case "ParenthesizedExpression":
        case "TypeCastExpression":
          return this.isAssignable(node.expression);

        case "MemberExpression":
        case "OptionalMemberExpression":
          return !isBinding;

        default:
          return false;
      }
    }

    toAssignable(node, isLHS = false) {
      if (node.type === "TypeCastExpression") {
        return super.toAssignable(this.typeCastToParameter(node), isLHS);
      } else {
        return super.toAssignable(node, isLHS);
      }
    }

    toAssignableList(exprList, trailingCommaPos, isLHS) {
      for (let i = 0; i < exprList.length; i++) {
        const expr = exprList[i];

        if ((expr == null ? void 0 : expr.type) === "TypeCastExpression") {
          exprList[i] = this.typeCastToParameter(expr);
        }
      }

      return super.toAssignableList(exprList, trailingCommaPos, isLHS);
    }

    toReferencedList(exprList, isParenthesizedExpr) {
      for (let i = 0; i < exprList.length; i++) {
        var _expr$extra;

        const expr = exprList[i];

        if (expr && expr.type === "TypeCastExpression" && !((_expr$extra = expr.extra) == null ? void 0 : _expr$extra.parenthesized) && (exprList.length > 1 || !isParenthesizedExpr)) {
          this.raise(expr.typeAnnotation.start, FlowErrors.TypeCastInPattern);
        }
      }

      return exprList;
    }

    parseArrayLike(close, canBePattern, isTuple, refExpressionErrors) {
      const node = super.parseArrayLike(close, canBePattern, isTuple, refExpressionErrors);

      if (canBePattern && !this.state.maybeInArrowParameters) {
        this.toReferencedList(node.elements);
      }

      return node;
    }

    checkLVal(expr, ...args) {
      if (expr.type !== "TypeCastExpression") {
        return super.checkLVal(expr, ...args);
      }
    }

    parseClassProperty(node) {
      if (this.match(types.colon)) {
        node.typeAnnotation = this.flowParseTypeAnnotation();
      }

      return super.parseClassProperty(node);
    }

    parseClassPrivateProperty(node) {
      if (this.match(types.colon)) {
        node.typeAnnotation = this.flowParseTypeAnnotation();
      }

      return super.parseClassPrivateProperty(node);
    }

    isClassMethod() {
      return this.isRelational("<") || super.isClassMethod();
    }

    isClassProperty() {
      return this.match(types.colon) || super.isClassProperty();
    }

    isNonstaticConstructor(method) {
      return !this.match(types.colon) && super.isNonstaticConstructor(method);
    }

    pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper) {
      if (method.variance) {
        this.unexpected(method.variance.start);
      }

      delete method.variance;

      if (this.isRelational("<")) {
        method.typeParameters = this.flowParseTypeParameterDeclaration();
      }

      super.pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper);
    }

    pushClassPrivateMethod(classBody, method, isGenerator, isAsync) {
      if (method.variance) {
        this.unexpected(method.variance.start);
      }

      delete method.variance;

      if (this.isRelational("<")) {
        method.typeParameters = this.flowParseTypeParameterDeclaration();
      }

      super.pushClassPrivateMethod(classBody, method, isGenerator, isAsync);
    }

    parseClassSuper(node) {
      super.parseClassSuper(node);

      if (node.superClass && this.isRelational("<")) {
        node.superTypeParameters = this.flowParseTypeParameterInstantiation();
      }

      if (this.isContextual("implements")) {
        this.next();
        const implemented = node.implements = [];

        do {
          const node = this.startNode();
          node.id = this.flowParseRestrictedIdentifier(true);

          if (this.isRelational("<")) {
            node.typeParameters = this.flowParseTypeParameterInstantiation();
          } else {
            node.typeParameters = null;
          }

          implemented.push(this.finishNode(node, "ClassImplements"));
        } while (this.eat(types.comma));
      }
    }

    parsePropertyName(node, isPrivateNameAllowed) {
      const variance = this.flowParseVariance();
      const key = super.parsePropertyName(node, isPrivateNameAllowed);
      node.variance = variance;
      return key;
    }

    parseObjPropValue(prop, startPos, startLoc, isGenerator, isAsync, isPattern, isAccessor, refExpressionErrors) {
      if (prop.variance) {
        this.unexpected(prop.variance.start);
      }

      delete prop.variance;
      let typeParameters;

      if (this.isRelational("<") && !isAccessor) {
        typeParameters = this.flowParseTypeParameterDeclaration();
        if (!this.match(types.parenL)) this.unexpected();
      }

      super.parseObjPropValue(prop, startPos, startLoc, isGenerator, isAsync, isPattern, isAccessor, refExpressionErrors);

      if (typeParameters) {
        (prop.value || prop).typeParameters = typeParameters;
      }
    }

    parseAssignableListItemTypes(param) {
      if (this.eat(types.question)) {
        if (param.type !== "Identifier") {
          this.raise(param.start, FlowErrors.OptionalBindingPattern);
        }

        param.optional = true;
      }

      if (this.match(types.colon)) {
        param.typeAnnotation = this.flowParseTypeAnnotation();
      }

      this.resetEndLocation(param);
      return param;
    }

    parseMaybeDefault(startPos, startLoc, left) {
      const node = super.parseMaybeDefault(startPos, startLoc, left);

      if (node.type === "AssignmentPattern" && node.typeAnnotation && node.right.start < node.typeAnnotation.start) {
        this.raise(node.typeAnnotation.start, FlowErrors.TypeBeforeInitializer);
      }

      return node;
    }

    shouldParseDefaultImport(node) {
      if (!hasTypeImportKind(node)) {
        return super.shouldParseDefaultImport(node);
      }

      return isMaybeDefaultImport(this.state);
    }

    parseImportSpecifierLocal(node, specifier, type, contextDescription) {
      specifier.local = hasTypeImportKind(node) ? this.flowParseRestrictedIdentifier(true, true) : this.parseIdentifier();
      this.checkLVal(specifier.local, contextDescription, BIND_LEXICAL);
      node.specifiers.push(this.finishNode(specifier, type));
    }

    maybeParseDefaultImportSpecifier(node) {
      node.importKind = "value";
      let kind = null;

      if (this.match(types._typeof)) {
        kind = "typeof";
      } else if (this.isContextual("type")) {
        kind = "type";
      }

      if (kind) {
        const lh = this.lookahead();

        if (kind === "type" && lh.type === types.star) {
          this.unexpected(lh.start);
        }

        if (isMaybeDefaultImport(lh) || lh.type === types.braceL || lh.type === types.star) {
          this.next();
          node.importKind = kind;
        }
      }

      return super.maybeParseDefaultImportSpecifier(node);
    }

    parseImportSpecifier(node) {
      const specifier = this.startNode();
      const firstIdentLoc = this.state.start;
      const firstIdent = this.parseModuleExportName();
      let specifierTypeKind = null;

      if (firstIdent.type === "Identifier") {
        if (firstIdent.name === "type") {
          specifierTypeKind = "type";
        } else if (firstIdent.name === "typeof") {
          specifierTypeKind = "typeof";
        }
      }

      let isBinding = false;

      if (this.isContextual("as") && !this.isLookaheadContextual("as")) {
        const as_ident = this.parseIdentifier(true);

        if (specifierTypeKind !== null && !this.match(types.name) && !this.state.type.keyword) {
          specifier.imported = as_ident;
          specifier.importKind = specifierTypeKind;
          specifier.local = as_ident.__clone();
        } else {
          specifier.imported = firstIdent;
          specifier.importKind = null;
          specifier.local = this.parseIdentifier();
        }
      } else if (specifierTypeKind !== null && (this.match(types.name) || this.state.type.keyword)) {
        specifier.imported = this.parseIdentifier(true);
        specifier.importKind = specifierTypeKind;

        if (this.eatContextual("as")) {
          specifier.local = this.parseIdentifier();
        } else {
          isBinding = true;
          specifier.local = specifier.imported.__clone();
        }
      } else {
        if (firstIdent.type === "StringLiteral") {
          throw this.raise(specifier.start, ErrorMessages.ImportBindingIsString, firstIdent.value);
        }

        isBinding = true;
        specifier.imported = firstIdent;
        specifier.importKind = null;
        specifier.local = specifier.imported.__clone();
      }

      const nodeIsTypeImport = hasTypeImportKind(node);
      const specifierIsTypeImport = hasTypeImportKind(specifier);

      if (nodeIsTypeImport && specifierIsTypeImport) {
        this.raise(firstIdentLoc, FlowErrors.ImportTypeShorthandOnlyInPureImport);
      }

      if (nodeIsTypeImport || specifierIsTypeImport) {
        this.checkReservedType(specifier.local.name, specifier.local.start, true);
      }

      if (isBinding && !nodeIsTypeImport && !specifierIsTypeImport) {
        this.checkReservedWord(specifier.local.name, specifier.start, true, true);
      }

      this.checkLVal(specifier.local, "import specifier", BIND_LEXICAL);
      node.specifiers.push(this.finishNode(specifier, "ImportSpecifier"));
    }

    parseFunctionParams(node, allowModifiers) {
      const kind = node.kind;

      if (kind !== "get" && kind !== "set" && this.isRelational("<")) {
        node.typeParameters = this.flowParseTypeParameterDeclaration();
      }

      super.parseFunctionParams(node, allowModifiers);
    }

    parseVarId(decl, kind) {
      super.parseVarId(decl, kind);

      if (this.match(types.colon)) {
        decl.id.typeAnnotation = this.flowParseTypeAnnotation();
        this.resetEndLocation(decl.id);
      }
    }

    parseAsyncArrowFromCallExpression(node, call) {
      if (this.match(types.colon)) {
        const oldNoAnonFunctionType = this.state.noAnonFunctionType;
        this.state.noAnonFunctionType = true;
        node.returnType = this.flowParseTypeAnnotation();
        this.state.noAnonFunctionType = oldNoAnonFunctionType;
      }

      return super.parseAsyncArrowFromCallExpression(node, call);
    }

    shouldParseAsyncArrow() {
      return this.match(types.colon) || super.shouldParseAsyncArrow();
    }

    parseMaybeAssign(refExpressionErrors, afterLeftParse, refNeedsArrowPos) {
      var _jsx;

      let state = null;
      let jsx;

      if (this.hasPlugin("jsx") && (this.match(types.jsxTagStart) || this.isRelational("<"))) {
        state = this.state.clone();
        jsx = this.tryParse(() => super.parseMaybeAssign(refExpressionErrors, afterLeftParse, refNeedsArrowPos), state);
        if (!jsx.error) return jsx.node;
        const {
          context
        } = this.state;

        if (context[context.length - 1] === types$1.j_oTag) {
          context.length -= 2;
        } else if (context[context.length - 1] === types$1.j_expr) {
          context.length -= 1;
        }
      }

      if (((_jsx = jsx) == null ? void 0 : _jsx.error) || this.isRelational("<")) {
        var _jsx2, _jsx3;

        state = state || this.state.clone();
        let typeParameters;
        const arrow = this.tryParse(abort => {
          var _arrowExpression$extr;

          typeParameters = this.flowParseTypeParameterDeclaration();
          const arrowExpression = this.forwardNoArrowParamsConversionAt(typeParameters, () => {
            const result = super.parseMaybeAssign(refExpressionErrors, afterLeftParse, refNeedsArrowPos);
            this.resetStartLocationFromNode(result, typeParameters);
            return result;
          });

          if (arrowExpression.type !== "ArrowFunctionExpression" && ((_arrowExpression$extr = arrowExpression.extra) == null ? void 0 : _arrowExpression$extr.parenthesized)) {
            abort();
          }

          const expr = this.maybeUnwrapTypeCastExpression(arrowExpression);
          expr.typeParameters = typeParameters;
          this.resetStartLocationFromNode(expr, typeParameters);
          return arrowExpression;
        }, state);
        let arrowExpression = null;

        if (arrow.node && this.maybeUnwrapTypeCastExpression(arrow.node).type === "ArrowFunctionExpression") {
          if (!arrow.error && !arrow.aborted) {
            if (arrow.node.async) {
              this.raise(typeParameters.start, FlowErrors.UnexpectedTypeParameterBeforeAsyncArrowFunction);
            }

            return arrow.node;
          }

          arrowExpression = arrow.node;
        }

        if ((_jsx2 = jsx) == null ? void 0 : _jsx2.node) {
          this.state = jsx.failState;
          return jsx.node;
        }

        if (arrowExpression) {
          this.state = arrow.failState;
          return arrowExpression;
        }

        if ((_jsx3 = jsx) == null ? void 0 : _jsx3.thrown) throw jsx.error;
        if (arrow.thrown) throw arrow.error;
        throw this.raise(typeParameters.start, FlowErrors.UnexpectedTokenAfterTypeParameter);
      }

      return super.parseMaybeAssign(refExpressionErrors, afterLeftParse, refNeedsArrowPos);
    }

    parseArrow(node) {
      if (this.match(types.colon)) {
        const result = this.tryParse(() => {
          const oldNoAnonFunctionType = this.state.noAnonFunctionType;
          this.state.noAnonFunctionType = true;
          const typeNode = this.startNode();
          [typeNode.typeAnnotation, node.predicate] = this.flowParseTypeAndPredicateInitialiser();
          this.state.noAnonFunctionType = oldNoAnonFunctionType;
          if (this.canInsertSemicolon()) this.unexpected();
          if (!this.match(types.arrow)) this.unexpected();
          return typeNode;
        });
        if (result.thrown) return null;
        if (result.error) this.state = result.failState;
        node.returnType = result.node.typeAnnotation ? this.finishNode(result.node, "TypeAnnotation") : null;
      }

      return super.parseArrow(node);
    }

    shouldParseArrow() {
      return this.match(types.colon) || super.shouldParseArrow();
    }

    setArrowFunctionParameters(node, params) {
      if (this.state.noArrowParamsConversionAt.indexOf(node.start) !== -1) {
        node.params = params;
      } else {
        super.setArrowFunctionParameters(node, params);
      }
    }

    checkParams(node, allowDuplicates, isArrowFunction) {
      if (isArrowFunction && this.state.noArrowParamsConversionAt.indexOf(node.start) !== -1) {
        return;
      }

      return super.checkParams(...arguments);
    }

    parseParenAndDistinguishExpression(canBeArrow) {
      return super.parseParenAndDistinguishExpression(canBeArrow && this.state.noArrowAt.indexOf(this.state.start) === -1);
    }

    parseSubscripts(base, startPos, startLoc, noCalls) {
      if (base.type === "Identifier" && base.name === "async" && this.state.noArrowAt.indexOf(startPos) !== -1) {
        this.next();
        const node = this.startNodeAt(startPos, startLoc);
        node.callee = base;
        node.arguments = this.parseCallExpressionArguments(types.parenR, false);
        base = this.finishNode(node, "CallExpression");
      } else if (base.type === "Identifier" && base.name === "async" && this.isRelational("<")) {
        const state = this.state.clone();
        const arrow = this.tryParse(abort => this.parseAsyncArrowWithTypeParameters(startPos, startLoc) || abort(), state);
        if (!arrow.error && !arrow.aborted) return arrow.node;
        const result = this.tryParse(() => super.parseSubscripts(base, startPos, startLoc, noCalls), state);
        if (result.node && !result.error) return result.node;

        if (arrow.node) {
          this.state = arrow.failState;
          return arrow.node;
        }

        if (result.node) {
          this.state = result.failState;
          return result.node;
        }

        throw arrow.error || result.error;
      }

      return super.parseSubscripts(base, startPos, startLoc, noCalls);
    }

    parseSubscript(base, startPos, startLoc, noCalls, subscriptState) {
      if (this.match(types.questionDot) && this.isLookaheadToken_lt()) {
        subscriptState.optionalChainMember = true;

        if (noCalls) {
          subscriptState.stop = true;
          return base;
        }

        this.next();
        const node = this.startNodeAt(startPos, startLoc);
        node.callee = base;
        node.typeArguments = this.flowParseTypeParameterInstantiation();
        this.expect(types.parenL);
        node.arguments = this.parseCallExpressionArguments(types.parenR, false);
        node.optional = true;
        return this.finishCallExpression(node, true);
      } else if (!noCalls && this.shouldParseTypes() && this.isRelational("<")) {
        const node = this.startNodeAt(startPos, startLoc);
        node.callee = base;
        const result = this.tryParse(() => {
          node.typeArguments = this.flowParseTypeParameterInstantiationCallOrNew();
          this.expect(types.parenL);
          node.arguments = this.parseCallExpressionArguments(types.parenR, false);
          if (subscriptState.optionalChainMember) node.optional = false;
          return this.finishCallExpression(node, subscriptState.optionalChainMember);
        });

        if (result.node) {
          if (result.error) this.state = result.failState;
          return result.node;
        }
      }

      return super.parseSubscript(base, startPos, startLoc, noCalls, subscriptState);
    }

    parseNewArguments(node) {
      let targs = null;

      if (this.shouldParseTypes() && this.isRelational("<")) {
        targs = this.tryParse(() => this.flowParseTypeParameterInstantiationCallOrNew()).node;
      }

      node.typeArguments = targs;
      super.parseNewArguments(node);
    }

    parseAsyncArrowWithTypeParameters(startPos, startLoc) {
      const node = this.startNodeAt(startPos, startLoc);
      this.parseFunctionParams(node);
      if (!this.parseArrow(node)) return;
      return this.parseArrowExpression(node, undefined, true);
    }

    readToken_mult_modulo(code) {
      const next = this.input.charCodeAt(this.state.pos + 1);

      if (code === 42 && next === 47 && this.state.hasFlowComment) {
        this.state.hasFlowComment = false;
        this.state.pos += 2;
        this.nextToken();
        return;
      }

      super.readToken_mult_modulo(code);
    }

    readToken_pipe_amp(code) {
      const next = this.input.charCodeAt(this.state.pos + 1);

      if (code === 124 && next === 125) {
        this.finishOp(types.braceBarR, 2);
        return;
      }

      super.readToken_pipe_amp(code);
    }

    parseTopLevel(file, program) {
      const fileNode = super.parseTopLevel(file, program);

      if (this.state.hasFlowComment) {
        this.raise(this.state.pos, FlowErrors.UnterminatedFlowComment);
      }

      return fileNode;
    }

    skipBlockComment() {
      if (this.hasPlugin("flowComments") && this.skipFlowComment()) {
        if (this.state.hasFlowComment) {
          this.unexpected(null, FlowErrors.NestedFlowComment);
        }

        this.hasFlowCommentCompletion();
        this.state.pos += this.skipFlowComment();
        this.state.hasFlowComment = true;
        return;
      }

      if (this.state.hasFlowComment) {
        const end = this.input.indexOf("*-/", this.state.pos += 2);

        if (end === -1) {
          throw this.raise(this.state.pos - 2, ErrorMessages.UnterminatedComment);
        }

        this.state.pos = end + 3;
        return;
      }

      super.skipBlockComment();
    }

    skipFlowComment() {
      const {
        pos
      } = this.state;
      let shiftToFirstNonWhiteSpace = 2;

      while ([32, 9].includes(this.input.charCodeAt(pos + shiftToFirstNonWhiteSpace))) {
        shiftToFirstNonWhiteSpace++;
      }

      const ch2 = this.input.charCodeAt(shiftToFirstNonWhiteSpace + pos);
      const ch3 = this.input.charCodeAt(shiftToFirstNonWhiteSpace + pos + 1);

      if (ch2 === 58 && ch3 === 58) {
        return shiftToFirstNonWhiteSpace + 2;
      }

      if (this.input.slice(shiftToFirstNonWhiteSpace + pos, shiftToFirstNonWhiteSpace + pos + 12) === "flow-include") {
        return shiftToFirstNonWhiteSpace + 12;
      }

      if (ch2 === 58 && ch3 !== 58) {
        return shiftToFirstNonWhiteSpace;
      }

      return false;
    }

    hasFlowCommentCompletion() {
      const end = this.input.indexOf("*/", this.state.pos);

      if (end === -1) {
        throw this.raise(this.state.pos, ErrorMessages.UnterminatedComment);
      }
    }

    flowEnumErrorBooleanMemberNotInitialized(pos, {
      enumName,
      memberName
    }) {
      this.raise(pos, FlowErrors.EnumBooleanMemberNotInitialized, memberName, enumName);
    }

    flowEnumErrorInvalidMemberName(pos, {
      enumName,
      memberName
    }) {
      const suggestion = memberName[0].toUpperCase() + memberName.slice(1);
      this.raise(pos, FlowErrors.EnumInvalidMemberName, memberName, suggestion, enumName);
    }

    flowEnumErrorDuplicateMemberName(pos, {
      enumName,
      memberName
    }) {
      this.raise(pos, FlowErrors.EnumDuplicateMemberName, memberName, enumName);
    }

    flowEnumErrorInconsistentMemberValues(pos, {
      enumName
    }) {
      this.raise(pos, FlowErrors.EnumInconsistentMemberValues, enumName);
    }

    flowEnumErrorInvalidExplicitType(pos, {
      enumName,
      suppliedType
    }) {
      return this.raise(pos, suppliedType === null ? FlowErrors.EnumInvalidExplicitTypeUnknownSupplied : FlowErrors.EnumInvalidExplicitType, enumName, suppliedType);
    }

    flowEnumErrorInvalidMemberInitializer(pos, {
      enumName,
      explicitType,
      memberName
    }) {
      let message = null;

      switch (explicitType) {
        case "boolean":
        case "number":
        case "string":
          message = FlowErrors.EnumInvalidMemberInitializerPrimaryType;
          break;

        case "symbol":
          message = FlowErrors.EnumInvalidMemberInitializerSymbolType;
          break;

        default:
          message = FlowErrors.EnumInvalidMemberInitializerUnknownType;
      }

      return this.raise(pos, message, enumName, memberName, explicitType);
    }

    flowEnumErrorNumberMemberNotInitialized(pos, {
      enumName,
      memberName
    }) {
      this.raise(pos, FlowErrors.EnumNumberMemberNotInitialized, enumName, memberName);
    }

    flowEnumErrorStringMemberInconsistentlyInitailized(pos, {
      enumName
    }) {
      this.raise(pos, FlowErrors.EnumStringMemberInconsistentlyInitailized, enumName);
    }

    flowEnumMemberInit() {
      const startPos = this.state.start;

      const endOfInit = () => this.match(types.comma) || this.match(types.braceR);

      switch (this.state.type) {
        case types.num:
          {
            const literal = this.parseLiteral(this.state.value, "NumericLiteral");

            if (endOfInit()) {
              return {
                type: "number",
                pos: literal.start,
                value: literal
              };
            }

            return {
              type: "invalid",
              pos: startPos
            };
          }

        case types.string:
          {
            const literal = this.parseLiteral(this.state.value, "StringLiteral");

            if (endOfInit()) {
              return {
                type: "string",
                pos: literal.start,
                value: literal
              };
            }

            return {
              type: "invalid",
              pos: startPos
            };
          }

        case types._true:
        case types._false:
          {
            const literal = this.parseBooleanLiteral();

            if (endOfInit()) {
              return {
                type: "boolean",
                pos: literal.start,
                value: literal
              };
            }

            return {
              type: "invalid",
              pos: startPos
            };
          }

        default:
          return {
            type: "invalid",
            pos: startPos
          };
      }
    }

    flowEnumMemberRaw() {
      const pos = this.state.start;
      const id = this.parseIdentifier(true);
      const init = this.eat(types.eq) ? this.flowEnumMemberInit() : {
        type: "none",
        pos
      };
      return {
        id,
        init
      };
    }

    flowEnumCheckExplicitTypeMismatch(pos, context, expectedType) {
      const {
        explicitType
      } = context;

      if (explicitType === null) {
        return;
      }

      if (explicitType !== expectedType) {
        this.flowEnumErrorInvalidMemberInitializer(pos, context);
      }
    }

    flowEnumMembers({
      enumName,
      explicitType
    }) {
      const seenNames = new Set();
      const members = {
        booleanMembers: [],
        numberMembers: [],
        stringMembers: [],
        defaultedMembers: []
      };

      while (!this.match(types.braceR)) {
        const memberNode = this.startNode();
        const {
          id,
          init
        } = this.flowEnumMemberRaw();
        const memberName = id.name;

        if (memberName === "") {
          continue;
        }

        if (/^[a-z]/.test(memberName)) {
          this.flowEnumErrorInvalidMemberName(id.start, {
            enumName,
            memberName
          });
        }

        if (seenNames.has(memberName)) {
          this.flowEnumErrorDuplicateMemberName(id.start, {
            enumName,
            memberName
          });
        }

        seenNames.add(memberName);
        const context = {
          enumName,
          explicitType,
          memberName
        };
        memberNode.id = id;

        switch (init.type) {
          case "boolean":
            {
              this.flowEnumCheckExplicitTypeMismatch(init.pos, context, "boolean");
              memberNode.init = init.value;
              members.booleanMembers.push(this.finishNode(memberNode, "EnumBooleanMember"));
              break;
            }

          case "number":
            {
              this.flowEnumCheckExplicitTypeMismatch(init.pos, context, "number");
              memberNode.init = init.value;
              members.numberMembers.push(this.finishNode(memberNode, "EnumNumberMember"));
              break;
            }

          case "string":
            {
              this.flowEnumCheckExplicitTypeMismatch(init.pos, context, "string");
              memberNode.init = init.value;
              members.stringMembers.push(this.finishNode(memberNode, "EnumStringMember"));
              break;
            }

          case "invalid":
            {
              throw this.flowEnumErrorInvalidMemberInitializer(init.pos, context);
            }

          case "none":
            {
              switch (explicitType) {
                case "boolean":
                  this.flowEnumErrorBooleanMemberNotInitialized(init.pos, context);
                  break;

                case "number":
                  this.flowEnumErrorNumberMemberNotInitialized(init.pos, context);
                  break;

                default:
                  members.defaultedMembers.push(this.finishNode(memberNode, "EnumDefaultedMember"));
              }
            }
        }

        if (!this.match(types.braceR)) {
          this.expect(types.comma);
        }
      }

      return members;
    }

    flowEnumStringMembers(initializedMembers, defaultedMembers, {
      enumName
    }) {
      if (initializedMembers.length === 0) {
        return defaultedMembers;
      } else if (defaultedMembers.length === 0) {
        return initializedMembers;
      } else if (defaultedMembers.length > initializedMembers.length) {
        for (let _i = 0; _i < initializedMembers.length; _i++) {
          const member = initializedMembers[_i];
          this.flowEnumErrorStringMemberInconsistentlyInitailized(member.start, {
            enumName
          });
        }

        return defaultedMembers;
      } else {
        for (let _i2 = 0; _i2 < defaultedMembers.length; _i2++) {
          const member = defaultedMembers[_i2];
          this.flowEnumErrorStringMemberInconsistentlyInitailized(member.start, {
            enumName
          });
        }

        return initializedMembers;
      }
    }

    flowEnumParseExplicitType({
      enumName
    }) {
      if (this.eatContextual("of")) {
        if (!this.match(types.name)) {
          throw this.flowEnumErrorInvalidExplicitType(this.state.start, {
            enumName,
            suppliedType: null
          });
        }

        const {
          value
        } = this.state;
        this.next();

        if (value !== "boolean" && value !== "number" && value !== "string" && value !== "symbol") {
          this.flowEnumErrorInvalidExplicitType(this.state.start, {
            enumName,
            suppliedType: value
          });
        }

        return value;
      }

      return null;
    }

    flowEnumBody(node, {
      enumName,
      nameLoc
    }) {
      const explicitType = this.flowEnumParseExplicitType({
        enumName
      });
      this.expect(types.braceL);
      const members = this.flowEnumMembers({
        enumName,
        explicitType
      });

      switch (explicitType) {
        case "boolean":
          node.explicitType = true;
          node.members = members.booleanMembers;
          this.expect(types.braceR);
          return this.finishNode(node, "EnumBooleanBody");

        case "number":
          node.explicitType = true;
          node.members = members.numberMembers;
          this.expect(types.braceR);
          return this.finishNode(node, "EnumNumberBody");

        case "string":
          node.explicitType = true;
          node.members = this.flowEnumStringMembers(members.stringMembers, members.defaultedMembers, {
            enumName
          });
          this.expect(types.braceR);
          return this.finishNode(node, "EnumStringBody");

        case "symbol":
          node.members = members.defaultedMembers;
          this.expect(types.braceR);
          return this.finishNode(node, "EnumSymbolBody");

        default:
          {
            const empty = () => {
              node.members = [];
              this.expect(types.braceR);
              return this.finishNode(node, "EnumStringBody");
            };

            node.explicitType = false;
            const boolsLen = members.booleanMembers.length;
            const numsLen = members.numberMembers.length;
            const strsLen = members.stringMembers.length;
            const defaultedLen = members.defaultedMembers.length;

            if (!boolsLen && !numsLen && !strsLen && !defaultedLen) {
              return empty();
            } else if (!boolsLen && !numsLen) {
              node.members = this.flowEnumStringMembers(members.stringMembers, members.defaultedMembers, {
                enumName
              });
              this.expect(types.braceR);
              return this.finishNode(node, "EnumStringBody");
            } else if (!numsLen && !strsLen && boolsLen >= defaultedLen) {
              for (let _i3 = 0, _members$defaultedMem = members.defaultedMembers; _i3 < _members$defaultedMem.length; _i3++) {
                const member = _members$defaultedMem[_i3];
                this.flowEnumErrorBooleanMemberNotInitialized(member.start, {
                  enumName,
                  memberName: member.id.name
                });
              }

              node.members = members.booleanMembers;
              this.expect(types.braceR);
              return this.finishNode(node, "EnumBooleanBody");
            } else if (!boolsLen && !strsLen && numsLen >= defaultedLen) {
              for (let _i4 = 0, _members$defaultedMem2 = members.defaultedMembers; _i4 < _members$defaultedMem2.length; _i4++) {
                const member = _members$defaultedMem2[_i4];
                this.flowEnumErrorNumberMemberNotInitialized(member.start, {
                  enumName,
                  memberName: member.id.name
                });
              }

              node.members = members.numberMembers;
              this.expect(types.braceR);
              return this.finishNode(node, "EnumNumberBody");
            } else {
              this.flowEnumErrorInconsistentMemberValues(nameLoc, {
                enumName
              });
              return empty();
            }
          }
      }
    }

    flowParseEnumDeclaration(node) {
      const id = this.parseIdentifier();
      node.id = id;
      node.body = this.flowEnumBody(this.startNode(), {
        enumName: id.name,
        nameLoc: id.start
      });
      return this.finishNode(node, "EnumDeclaration");
    }

    updateContext(prevType) {
      if (this.match(types.name) && this.state.value === "of" && prevType === types.name && this.input.slice(this.state.lastTokStart, this.state.lastTokEnd) === "interface") {
        this.state.exprAllowed = false;
      } else {
        super.updateContext(prevType);
      }
    }

    isLookaheadToken_lt() {
      const next = this.nextTokenStart();

      if (this.input.charCodeAt(next) === 60) {
        const afterNext = this.input.charCodeAt(next + 1);
        return afterNext !== 60 && afterNext !== 61;
      }

      return false;
    }

    maybeUnwrapTypeCastExpression(node) {
      return node.type === "TypeCastExpression" ? node.expression : node;
    }

  }, _temp;
});

const entities = {
  quot: "\u0022",
  amp: "&",
  apos: "\u0027",
  lt: "<",
  gt: ">",
  nbsp: "\u00A0",
  iexcl: "\u00A1",
  cent: "\u00A2",
  pound: "\u00A3",
  curren: "\u00A4",
  yen: "\u00A5",
  brvbar: "\u00A6",
  sect: "\u00A7",
  uml: "\u00A8",
  copy: "\u00A9",
  ordf: "\u00AA",
  laquo: "\u00AB",
  not: "\u00AC",
  shy: "\u00AD",
  reg: "\u00AE",
  macr: "\u00AF",
  deg: "\u00B0",
  plusmn: "\u00B1",
  sup2: "\u00B2",
  sup3: "\u00B3",
  acute: "\u00B4",
  micro: "\u00B5",
  para: "\u00B6",
  middot: "\u00B7",
  cedil: "\u00B8",
  sup1: "\u00B9",
  ordm: "\u00BA",
  raquo: "\u00BB",
  frac14: "\u00BC",
  frac12: "\u00BD",
  frac34: "\u00BE",
  iquest: "\u00BF",
  Agrave: "\u00C0",
  Aacute: "\u00C1",
  Acirc: "\u00C2",
  Atilde: "\u00C3",
  Auml: "\u00C4",
  Aring: "\u00C5",
  AElig: "\u00C6",
  Ccedil: "\u00C7",
  Egrave: "\u00C8",
  Eacute: "\u00C9",
  Ecirc: "\u00CA",
  Euml: "\u00CB",
  Igrave: "\u00CC",
  Iacute: "\u00CD",
  Icirc: "\u00CE",
  Iuml: "\u00CF",
  ETH: "\u00D0",
  Ntilde: "\u00D1",
  Ograve: "\u00D2",
  Oacute: "\u00D3",
  Ocirc: "\u00D4",
  Otilde: "\u00D5",
  Ouml: "\u00D6",
  times: "\u00D7",
  Oslash: "\u00D8",
  Ugrave: "\u00D9",
  Uacute: "\u00DA",
  Ucirc: "\u00DB",
  Uuml: "\u00DC",
  Yacute: "\u00DD",
  THORN: "\u00DE",
  szlig: "\u00DF",
  agrave: "\u00E0",
  aacute: "\u00E1",
  acirc: "\u00E2",
  atilde: "\u00E3",
  auml: "\u00E4",
  aring: "\u00E5",
  aelig: "\u00E6",
  ccedil: "\u00E7",
  egrave: "\u00E8",
  eacute: "\u00E9",
  ecirc: "\u00EA",
  euml: "\u00EB",
  igrave: "\u00EC",
  iacute: "\u00ED",
  icirc: "\u00EE",
  iuml: "\u00EF",
  eth: "\u00F0",
  ntilde: "\u00F1",
  ograve: "\u00F2",
  oacute: "\u00F3",
  ocirc: "\u00F4",
  otilde: "\u00F5",
  ouml: "\u00F6",
  divide: "\u00F7",
  oslash: "\u00F8",
  ugrave: "\u00F9",
  uacute: "\u00FA",
  ucirc: "\u00FB",
  uuml: "\u00FC",
  yacute: "\u00FD",
  thorn: "\u00FE",
  yuml: "\u00FF",
  OElig: "\u0152",
  oelig: "\u0153",
  Scaron: "\u0160",
  scaron: "\u0161",
  Yuml: "\u0178",
  fnof: "\u0192",
  circ: "\u02C6",
  tilde: "\u02DC",
  Alpha: "\u0391",
  Beta: "\u0392",
  Gamma: "\u0393",
  Delta: "\u0394",
  Epsilon: "\u0395",
  Zeta: "\u0396",
  Eta: "\u0397",
  Theta: "\u0398",
  Iota: "\u0399",
  Kappa: "\u039A",
  Lambda: "\u039B",
  Mu: "\u039C",
  Nu: "\u039D",
  Xi: "\u039E",
  Omicron: "\u039F",
  Pi: "\u03A0",
  Rho: "\u03A1",
  Sigma: "\u03A3",
  Tau: "\u03A4",
  Upsilon: "\u03A5",
  Phi: "\u03A6",
  Chi: "\u03A7",
  Psi: "\u03A8",
  Omega: "\u03A9",
  alpha: "\u03B1",
  beta: "\u03B2",
  gamma: "\u03B3",
  delta: "\u03B4",
  epsilon: "\u03B5",
  zeta: "\u03B6",
  eta: "\u03B7",
  theta: "\u03B8",
  iota: "\u03B9",
  kappa: "\u03BA",
  lambda: "\u03BB",
  mu: "\u03BC",
  nu: "\u03BD",
  xi: "\u03BE",
  omicron: "\u03BF",
  pi: "\u03C0",
  rho: "\u03C1",
  sigmaf: "\u03C2",
  sigma: "\u03C3",
  tau: "\u03C4",
  upsilon: "\u03C5",
  phi: "\u03C6",
  chi: "\u03C7",
  psi: "\u03C8",
  omega: "\u03C9",
  thetasym: "\u03D1",
  upsih: "\u03D2",
  piv: "\u03D6",
  ensp: "\u2002",
  emsp: "\u2003",
  thinsp: "\u2009",
  zwnj: "\u200C",
  zwj: "\u200D",
  lrm: "\u200E",
  rlm: "\u200F",
  ndash: "\u2013",
  mdash: "\u2014",
  lsquo: "\u2018",
  rsquo: "\u2019",
  sbquo: "\u201A",
  ldquo: "\u201C",
  rdquo: "\u201D",
  bdquo: "\u201E",
  dagger: "\u2020",
  Dagger: "\u2021",
  bull: "\u2022",
  hellip: "\u2026",
  permil: "\u2030",
  prime: "\u2032",
  Prime: "\u2033",
  lsaquo: "\u2039",
  rsaquo: "\u203A",
  oline: "\u203E",
  frasl: "\u2044",
  euro: "\u20AC",
  image: "\u2111",
  weierp: "\u2118",
  real: "\u211C",
  trade: "\u2122",
  alefsym: "\u2135",
  larr: "\u2190",
  uarr: "\u2191",
  rarr: "\u2192",
  darr: "\u2193",
  harr: "\u2194",
  crarr: "\u21B5",
  lArr: "\u21D0",
  uArr: "\u21D1",
  rArr: "\u21D2",
  dArr: "\u21D3",
  hArr: "\u21D4",
  forall: "\u2200",
  part: "\u2202",
  exist: "\u2203",
  empty: "\u2205",
  nabla: "\u2207",
  isin: "\u2208",
  notin: "\u2209",
  ni: "\u220B",
  prod: "\u220F",
  sum: "\u2211",
  minus: "\u2212",
  lowast: "\u2217",
  radic: "\u221A",
  prop: "\u221D",
  infin: "\u221E",
  ang: "\u2220",
  and: "\u2227",
  or: "\u2228",
  cap: "\u2229",
  cup: "\u222A",
  int: "\u222B",
  there4: "\u2234",
  sim: "\u223C",
  cong: "\u2245",
  asymp: "\u2248",
  ne: "\u2260",
  equiv: "\u2261",
  le: "\u2264",
  ge: "\u2265",
  sub: "\u2282",
  sup: "\u2283",
  nsub: "\u2284",
  sube: "\u2286",
  supe: "\u2287",
  oplus: "\u2295",
  otimes: "\u2297",
  perp: "\u22A5",
  sdot: "\u22C5",
  lceil: "\u2308",
  rceil: "\u2309",
  lfloor: "\u230A",
  rfloor: "\u230B",
  lang: "\u2329",
  rang: "\u232A",
  loz: "\u25CA",
  spades: "\u2660",
  clubs: "\u2663",
  hearts: "\u2665",
  diams: "\u2666"
};

const HEX_NUMBER = /^[\da-fA-F]+$/;
const DECIMAL_NUMBER = /^\d+$/;
const JsxErrors = Object.freeze({
  AttributeIsEmpty: "JSX attributes must only be assigned a non-empty expression",
  MissingClosingTagFragment: "Expected corresponding JSX closing tag for <>",
  MissingClosingTagElement: "Expected corresponding JSX closing tag for <%0>",
  UnexpectedSequenceExpression: "Sequence expressions cannot be directly nested inside JSX. Did you mean to wrap it in parentheses (...)?",
  UnsupportedJsxValue: "JSX value should be either an expression or a quoted JSX text",
  UnterminatedJsxContent: "Unterminated JSX contents",
  UnwrappedAdjacentJSXElements: "Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?"
});
types$1.j_oTag = new TokContext("<tag", false);
types$1.j_cTag = new TokContext("</tag", false);
types$1.j_expr = new TokContext("<tag>...</tag>", true, true);
types.jsxName = new TokenType("jsxName");
types.jsxText = new TokenType("jsxText", {
  beforeExpr: true
});
types.jsxTagStart = new TokenType("jsxTagStart", {
  startsExpr: true
});
types.jsxTagEnd = new TokenType("jsxTagEnd");

types.jsxTagStart.updateContext = function () {
  this.state.context.push(types$1.j_expr);
  this.state.context.push(types$1.j_oTag);
  this.state.exprAllowed = false;
};

types.jsxTagEnd.updateContext = function (prevType) {
  const out = this.state.context.pop();

  if (out === types$1.j_oTag && prevType === types.slash || out === types$1.j_cTag) {
    this.state.context.pop();
    this.state.exprAllowed = this.curContext() === types$1.j_expr;
  } else {
    this.state.exprAllowed = true;
  }
};

function isFragment(object) {
  return object ? object.type === "JSXOpeningFragment" || object.type === "JSXClosingFragment" : false;
}

function getQualifiedJSXName(object) {
  if (object.type === "JSXIdentifier") {
    return object.name;
  }

  if (object.type === "JSXNamespacedName") {
    return object.namespace.name + ":" + object.name.name;
  }

  if (object.type === "JSXMemberExpression") {
    return getQualifiedJSXName(object.object) + "." + getQualifiedJSXName(object.property);
  }

  throw new Error("Node had unexpected type: " + object.type);
}

var jsx = (superClass => class extends superClass {
  jsxReadToken() {
    let out = "";
    let chunkStart = this.state.pos;

    for (;;) {
      if (this.state.pos >= this.length) {
        throw this.raise(this.state.start, JsxErrors.UnterminatedJsxContent);
      }

      const ch = this.input.charCodeAt(this.state.pos);

      switch (ch) {
        case 60:
        case 123:
          if (this.state.pos === this.state.start) {
            if (ch === 60 && this.state.exprAllowed) {
              ++this.state.pos;
              return this.finishToken(types.jsxTagStart);
            }

            return super.getTokenFromCode(ch);
          }

          out += this.input.slice(chunkStart, this.state.pos);
          return this.finishToken(types.jsxText, out);

        case 38:
          out += this.input.slice(chunkStart, this.state.pos);
          out += this.jsxReadEntity();
          chunkStart = this.state.pos;
          break;

        case 62:
        case 125:

        default:
          if (isNewLine(ch)) {
            out += this.input.slice(chunkStart, this.state.pos);
            out += this.jsxReadNewLine(true);
            chunkStart = this.state.pos;
          } else {
            ++this.state.pos;
          }

      }
    }
  }

  jsxReadNewLine(normalizeCRLF) {
    const ch = this.input.charCodeAt(this.state.pos);
    let out;
    ++this.state.pos;

    if (ch === 13 && this.input.charCodeAt(this.state.pos) === 10) {
      ++this.state.pos;
      out = normalizeCRLF ? "\n" : "\r\n";
    } else {
      out = String.fromCharCode(ch);
    }

    ++this.state.curLine;
    this.state.lineStart = this.state.pos;
    return out;
  }

  jsxReadString(quote) {
    let out = "";
    let chunkStart = ++this.state.pos;

    for (;;) {
      if (this.state.pos >= this.length) {
        throw this.raise(this.state.start, ErrorMessages.UnterminatedString);
      }

      const ch = this.input.charCodeAt(this.state.pos);
      if (ch === quote) break;

      if (ch === 38) {
        out += this.input.slice(chunkStart, this.state.pos);
        out += this.jsxReadEntity();
        chunkStart = this.state.pos;
      } else if (isNewLine(ch)) {
        out += this.input.slice(chunkStart, this.state.pos);
        out += this.jsxReadNewLine(false);
        chunkStart = this.state.pos;
      } else {
        ++this.state.pos;
      }
    }

    out += this.input.slice(chunkStart, this.state.pos++);
    return this.finishToken(types.string, out);
  }

  jsxReadEntity() {
    let str = "";
    let count = 0;
    let entity;
    let ch = this.input[this.state.pos];
    const startPos = ++this.state.pos;

    while (this.state.pos < this.length && count++ < 10) {
      ch = this.input[this.state.pos++];

      if (ch === ";") {
        if (str[0] === "#") {
          if (str[1] === "x") {
            str = str.substr(2);

            if (HEX_NUMBER.test(str)) {
              entity = String.fromCodePoint(parseInt(str, 16));
            }
          } else {
            str = str.substr(1);

            if (DECIMAL_NUMBER.test(str)) {
              entity = String.fromCodePoint(parseInt(str, 10));
            }
          }
        } else {
          entity = entities[str];
        }

        break;
      }

      str += ch;
    }

    if (!entity) {
      this.state.pos = startPos;
      return "&";
    }

    return entity;
  }

  jsxReadWord() {
    let ch;
    const start = this.state.pos;

    do {
      ch = this.input.charCodeAt(++this.state.pos);
    } while (isIdentifierChar(ch) || ch === 45);

    return this.finishToken(types.jsxName, this.input.slice(start, this.state.pos));
  }

  jsxParseIdentifier() {
    const node = this.startNode();

    if (this.match(types.jsxName)) {
      node.name = this.state.value;
    } else if (this.state.type.keyword) {
      node.name = this.state.type.keyword;
    } else {
      this.unexpected();
    }

    this.next();
    return this.finishNode(node, "JSXIdentifier");
  }

  jsxParseNamespacedName() {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    const name = this.jsxParseIdentifier();
    if (!this.eat(types.colon)) return name;
    const node = this.startNodeAt(startPos, startLoc);
    node.namespace = name;
    node.name = this.jsxParseIdentifier();
    return this.finishNode(node, "JSXNamespacedName");
  }

  jsxParseElementName() {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    let node = this.jsxParseNamespacedName();

    if (node.type === "JSXNamespacedName") {
      return node;
    }

    while (this.eat(types.dot)) {
      const newNode = this.startNodeAt(startPos, startLoc);
      newNode.object = node;
      newNode.property = this.jsxParseIdentifier();
      node = this.finishNode(newNode, "JSXMemberExpression");
    }

    return node;
  }

  jsxParseAttributeValue() {
    let node;

    switch (this.state.type) {
      case types.braceL:
        node = this.startNode();
        this.next();
        node = this.jsxParseExpressionContainer(node);

        if (node.expression.type === "JSXEmptyExpression") {
          this.raise(node.start, JsxErrors.AttributeIsEmpty);
        }

        return node;

      case types.jsxTagStart:
      case types.string:
        return this.parseExprAtom();

      default:
        throw this.raise(this.state.start, JsxErrors.UnsupportedJsxValue);
    }
  }

  jsxParseEmptyExpression() {
    const node = this.startNodeAt(this.state.lastTokEnd, this.state.lastTokEndLoc);
    return this.finishNodeAt(node, "JSXEmptyExpression", this.state.start, this.state.startLoc);
  }

  jsxParseSpreadChild(node) {
    this.next();
    node.expression = this.parseExpression();
    this.expect(types.braceR);
    return this.finishNode(node, "JSXSpreadChild");
  }

  jsxParseExpressionContainer(node) {
    if (this.match(types.braceR)) {
      node.expression = this.jsxParseEmptyExpression();
    } else {
      const expression = this.parseExpression();
      node.expression = expression;
    }

    this.expect(types.braceR);
    return this.finishNode(node, "JSXExpressionContainer");
  }

  jsxParseAttribute() {
    const node = this.startNode();

    if (this.eat(types.braceL)) {
      this.expect(types.ellipsis);
      node.argument = this.parseMaybeAssignAllowIn();
      this.expect(types.braceR);
      return this.finishNode(node, "JSXSpreadAttribute");
    }

    node.name = this.jsxParseNamespacedName();
    node.value = this.eat(types.eq) ? this.jsxParseAttributeValue() : null;
    return this.finishNode(node, "JSXAttribute");
  }

  jsxParseOpeningElementAt(startPos, startLoc) {
    const node = this.startNodeAt(startPos, startLoc);

    if (this.match(types.jsxTagEnd)) {
      this.expect(types.jsxTagEnd);
      return this.finishNode(node, "JSXOpeningFragment");
    }

    node.name = this.jsxParseElementName();
    return this.jsxParseOpeningElementAfterName(node);
  }

  jsxParseOpeningElementAfterName(node) {
    const attributes = [];

    while (!this.match(types.slash) && !this.match(types.jsxTagEnd)) {
      attributes.push(this.jsxParseAttribute());
    }

    node.attributes = attributes;
    node.selfClosing = this.eat(types.slash);
    this.expect(types.jsxTagEnd);
    return this.finishNode(node, "JSXOpeningElement");
  }

  jsxParseClosingElementAt(startPos, startLoc) {
    const node = this.startNodeAt(startPos, startLoc);

    if (this.match(types.jsxTagEnd)) {
      this.expect(types.jsxTagEnd);
      return this.finishNode(node, "JSXClosingFragment");
    }

    node.name = this.jsxParseElementName();
    this.expect(types.jsxTagEnd);
    return this.finishNode(node, "JSXClosingElement");
  }

  jsxParseElementAt(startPos, startLoc) {
    const node = this.startNodeAt(startPos, startLoc);
    const children = [];
    const openingElement = this.jsxParseOpeningElementAt(startPos, startLoc);
    let closingElement = null;

    if (!openingElement.selfClosing) {
      contents: for (;;) {
        switch (this.state.type) {
          case types.jsxTagStart:
            startPos = this.state.start;
            startLoc = this.state.startLoc;
            this.next();

            if (this.eat(types.slash)) {
              closingElement = this.jsxParseClosingElementAt(startPos, startLoc);
              break contents;
            }

            children.push(this.jsxParseElementAt(startPos, startLoc));
            break;

          case types.jsxText:
            children.push(this.parseExprAtom());
            break;

          case types.braceL:
            {
              const node = this.startNode();
              this.next();

              if (this.match(types.ellipsis)) {
                children.push(this.jsxParseSpreadChild(node));
              } else {
                children.push(this.jsxParseExpressionContainer(node));
              }

              break;
            }

          default:
            throw this.unexpected();
        }
      }

      if (isFragment(openingElement) && !isFragment(closingElement)) {
        this.raise(closingElement.start, JsxErrors.MissingClosingTagFragment);
      } else if (!isFragment(openingElement) && isFragment(closingElement)) {
        this.raise(closingElement.start, JsxErrors.MissingClosingTagElement, getQualifiedJSXName(openingElement.name));
      } else if (!isFragment(openingElement) && !isFragment(closingElement)) {
        if (getQualifiedJSXName(closingElement.name) !== getQualifiedJSXName(openingElement.name)) {
          this.raise(closingElement.start, JsxErrors.MissingClosingTagElement, getQualifiedJSXName(openingElement.name));
        }
      }
    }

    if (isFragment(openingElement)) {
      node.openingFragment = openingElement;
      node.closingFragment = closingElement;
    } else {
      node.openingElement = openingElement;
      node.closingElement = closingElement;
    }

    node.children = children;

    if (this.isRelational("<")) {
      throw this.raise(this.state.start, JsxErrors.UnwrappedAdjacentJSXElements);
    }

    return isFragment(openingElement) ? this.finishNode(node, "JSXFragment") : this.finishNode(node, "JSXElement");
  }

  jsxParseElement() {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    this.next();
    return this.jsxParseElementAt(startPos, startLoc);
  }

  parseExprAtom(refExpressionErrors) {
    if (this.match(types.jsxText)) {
      return this.parseLiteral(this.state.value, "JSXText");
    } else if (this.match(types.jsxTagStart)) {
      return this.jsxParseElement();
    } else if (this.isRelational("<") && this.input.charCodeAt(this.state.pos) !== 33) {
      this.finishToken(types.jsxTagStart);
      return this.jsxParseElement();
    } else {
      return super.parseExprAtom(refExpressionErrors);
    }
  }

  getTokenFromCode(code) {
    if (this.state.inPropertyName) return super.getTokenFromCode(code);
    const context = this.curContext();

    if (context === types$1.j_expr) {
      return this.jsxReadToken();
    }

    if (context === types$1.j_oTag || context === types$1.j_cTag) {
      if (isIdentifierStart(code)) {
        return this.jsxReadWord();
      }

      if (code === 62) {
        ++this.state.pos;
        return this.finishToken(types.jsxTagEnd);
      }

      if ((code === 34 || code === 39) && context === types$1.j_oTag) {
        return this.jsxReadString(code);
      }
    }

    if (code === 60 && this.state.exprAllowed && this.input.charCodeAt(this.state.pos + 1) !== 33) {
      ++this.state.pos;
      return this.finishToken(types.jsxTagStart);
    }

    return super.getTokenFromCode(code);
  }

  updateContext(prevType) {
    if (this.match(types.braceL)) {
      const curContext = this.curContext();

      if (curContext === types$1.j_oTag) {
        this.state.context.push(types$1.braceExpression);
      } else if (curContext === types$1.j_expr) {
        this.state.context.push(types$1.templateQuasi);
      } else {
        super.updateContext(prevType);
      }

      this.state.exprAllowed = true;
    } else if (this.match(types.slash) && prevType === types.jsxTagStart) {
      this.state.context.length -= 2;
      this.state.context.push(types$1.j_cTag);
      this.state.exprAllowed = false;
    } else {
      return super.updateContext(prevType);
    }
  }

});

class TypeScriptScope extends Scope {
  constructor(...args) {
    super(...args);
    this.types = [];
    this.enums = [];
    this.constEnums = [];
    this.classes = [];
    this.exportOnlyBindings = [];
  }

}

class TypeScriptScopeHandler extends ScopeHandler {
  createScope(flags) {
    return new TypeScriptScope(flags);
  }

  declareName(name, bindingType, pos) {
    const scope = this.currentScope();

    if (bindingType & BIND_FLAGS_TS_EXPORT_ONLY) {
      this.maybeExportDefined(scope, name);
      scope.exportOnlyBindings.push(name);
      return;
    }

    super.declareName(...arguments);

    if (bindingType & BIND_KIND_TYPE) {
      if (!(bindingType & BIND_KIND_VALUE)) {
        this.checkRedeclarationInScope(scope, name, bindingType, pos);
        this.maybeExportDefined(scope, name);
      }

      scope.types.push(name);
    }

    if (bindingType & BIND_FLAGS_TS_ENUM) scope.enums.push(name);
    if (bindingType & BIND_FLAGS_TS_CONST_ENUM) scope.constEnums.push(name);
    if (bindingType & BIND_FLAGS_CLASS) scope.classes.push(name);
  }

  isRedeclaredInScope(scope, name, bindingType) {
    if (scope.enums.indexOf(name) > -1) {
      if (bindingType & BIND_FLAGS_TS_ENUM) {
        const isConst = !!(bindingType & BIND_FLAGS_TS_CONST_ENUM);
        const wasConst = scope.constEnums.indexOf(name) > -1;
        return isConst !== wasConst;
      }

      return true;
    }

    if (bindingType & BIND_FLAGS_CLASS && scope.classes.indexOf(name) > -1) {
      if (scope.lexical.indexOf(name) > -1) {
        return !!(bindingType & BIND_KIND_VALUE);
      } else {
        return false;
      }
    }

    if (bindingType & BIND_KIND_TYPE && scope.types.indexOf(name) > -1) {
      return true;
    }

    return super.isRedeclaredInScope(...arguments);
  }

  checkLocalExport(id) {
    if (this.scopeStack[0].types.indexOf(id.name) === -1 && this.scopeStack[0].exportOnlyBindings.indexOf(id.name) === -1) {
      super.checkLocalExport(id);
    }
  }

}

const PARAM = 0b0000,
      PARAM_YIELD = 0b0001,
      PARAM_AWAIT = 0b0010,
      PARAM_RETURN = 0b0100,
      PARAM_IN = 0b1000;
class ProductionParameterHandler {
  constructor() {
    this.stacks = [];
  }

  enter(flags) {
    this.stacks.push(flags);
  }

  exit() {
    this.stacks.pop();
  }

  currentFlags() {
    return this.stacks[this.stacks.length - 1];
  }

  get hasAwait() {
    return (this.currentFlags() & PARAM_AWAIT) > 0;
  }

  get hasYield() {
    return (this.currentFlags() & PARAM_YIELD) > 0;
  }

  get hasReturn() {
    return (this.currentFlags() & PARAM_RETURN) > 0;
  }

  get hasIn() {
    return (this.currentFlags() & PARAM_IN) > 0;
  }

}
function functionFlags(isAsync, isGenerator) {
  return (isAsync ? PARAM_AWAIT : 0) | (isGenerator ? PARAM_YIELD : 0);
}

function nonNull(x) {
  if (x == null) {
    throw new Error(`Unexpected ${x} value.`);
  }

  return x;
}

function assert(x) {
  if (!x) {
    throw new Error("Assert fail");
  }
}

const TSErrors = Object.freeze({
  ClassMethodHasDeclare: "Class methods cannot have the 'declare' modifier",
  ClassMethodHasReadonly: "Class methods cannot have the 'readonly' modifier",
  ConstructorHasTypeParameters: "Type parameters cannot appear on a constructor declaration.",
  DeclareClassFieldHasInitializer: "Initializers are not allowed in ambient contexts.",
  DeclareFunctionHasImplementation: "An implementation cannot be declared in ambient contexts.",
  DuplicateModifier: "Duplicate modifier: '%0'",
  DuplicateAccessibilityModifier: "Accessibility modifier already seen.",
  EmptyHeritageClauseType: "'%0' list cannot be empty.",
  EmptyTypeArguments: "Type argument list cannot be empty.",
  EmptyTypeParameters: "Type parameter list cannot be empty.",
  ExpectedAmbientAfterExportDeclare: "'export declare' must be followed by an ambient declaration.",
  IndexSignatureHasAbstract: "Index signatures cannot have the 'abstract' modifier",
  IndexSignatureHasAccessibility: "Index signatures cannot have an accessibility modifier ('%0')",
  IndexSignatureHasStatic: "Index signatures cannot have the 'static' modifier",
  IndexSignatureHasDeclare: "Index signatures cannot have the 'declare' modifier",
  InvalidModifierOnTypeMember: "'%0' modifier cannot appear on a type member.",
  InvalidTupleMemberLabel: "Tuple members must be labeled with a simple identifier.",
  MixedLabeledAndUnlabeledElements: "Tuple members must all have names or all not have names.",
  NonAbstractClassHasAbstractMethod: "Abstract methods can only appear within an abstract class.",
  NonClassMethodPropertyHasAbstractModifer: "'abstract' modifier can only appear on a class, method, or property declaration.",
  OptionalTypeBeforeRequired: "A required element cannot follow an optional element.",
  PatternIsOptional: "A binding pattern parameter cannot be optional in an implementation signature.",
  PrivateElementHasAbstract: "Private elements cannot have the 'abstract' modifier.",
  PrivateElementHasAccessibility: "Private elements cannot have an accessibility modifier ('%0')",
  ReadonlyForMethodSignature: "'readonly' modifier can only appear on a property declaration or index signature.",
  TypeAnnotationAfterAssign: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`",
  UnexpectedParameterModifier: "A parameter property is only allowed in a constructor implementation.",
  UnexpectedReadonly: "'readonly' type modifier is only permitted on array and tuple literal types.",
  UnexpectedTypeAnnotation: "Did not expect a type annotation here.",
  UnexpectedTypeCastInParameter: "Unexpected type cast in parameter position.",
  UnsupportedImportTypeArgument: "Argument in a type import must be a string literal",
  UnsupportedParameterPropertyKind: "A parameter property may not be declared using a binding pattern.",
  UnsupportedSignatureParameterKind: "Name in a signature must be an Identifier, ObjectPattern or ArrayPattern, instead got %0"
});

function keywordTypeFromName(value) {
  switch (value) {
    case "any":
      return "TSAnyKeyword";

    case "boolean":
      return "TSBooleanKeyword";

    case "bigint":
      return "TSBigIntKeyword";

    case "never":
      return "TSNeverKeyword";

    case "number":
      return "TSNumberKeyword";

    case "object":
      return "TSObjectKeyword";

    case "string":
      return "TSStringKeyword";

    case "symbol":
      return "TSSymbolKeyword";

    case "undefined":
      return "TSUndefinedKeyword";

    case "unknown":
      return "TSUnknownKeyword";

    default:
      return undefined;
  }
}

function tsIsAccessModifier(modifier) {
  return modifier === "private" || modifier === "public" || modifier === "protected";
}

var typescript = (superClass => class extends superClass {
  getScopeHandler() {
    return TypeScriptScopeHandler;
  }

  tsIsIdentifier() {
    return this.match(types.name);
  }

  tsNextTokenCanFollowModifier() {
    this.next();
    return (this.match(types.bracketL) || this.match(types.braceL) || this.match(types.star) || this.match(types.ellipsis) || this.match(types.hash) || this.isLiteralPropertyName()) && !this.hasPrecedingLineBreak();
  }

  tsParseModifier(allowedModifiers) {
    if (!this.match(types.name)) {
      return undefined;
    }

    const modifier = this.state.value;

    if (allowedModifiers.indexOf(modifier) !== -1 && this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this))) {
      return modifier;
    }

    return undefined;
  }

  tsParseModifiers(modified, allowedModifiers, disallowedModifiers, errorTemplate) {
    for (;;) {
      const startPos = this.state.start;
      const modifier = this.tsParseModifier(allowedModifiers.concat(disallowedModifiers != null ? disallowedModifiers : []));
      if (!modifier) break;

      if (tsIsAccessModifier(modifier)) {
        if (modified.accessibility) {
          this.raise(startPos, TSErrors.DuplicateAccessibilityModifier);
        } else {
          modified.accessibility = modifier;
        }
      } else {
        if (Object.hasOwnProperty.call(modified, modifier)) {
          this.raise(startPos, TSErrors.DuplicateModifier, modifier);
        }

        modified[modifier] = true;
      }

      if (disallowedModifiers == null ? void 0 : disallowedModifiers.includes(modifier)) {
        this.raise(startPos, errorTemplate, modifier);
      }
    }
  }

  tsIsListTerminator(kind) {
    switch (kind) {
      case "EnumMembers":
      case "TypeMembers":
        return this.match(types.braceR);

      case "HeritageClauseElement":
        return this.match(types.braceL);

      case "TupleElementTypes":
        return this.match(types.bracketR);

      case "TypeParametersOrArguments":
        return this.isRelational(">");
    }

    throw new Error("Unreachable");
  }

  tsParseList(kind, parseElement) {
    const result = [];

    while (!this.tsIsListTerminator(kind)) {
      result.push(parseElement());
    }

    return result;
  }

  tsParseDelimitedList(kind, parseElement) {
    return nonNull(this.tsParseDelimitedListWorker(kind, parseElement, true));
  }

  tsParseDelimitedListWorker(kind, parseElement, expectSuccess) {
    const result = [];

    for (;;) {
      if (this.tsIsListTerminator(kind)) {
        break;
      }

      const element = parseElement();

      if (element == null) {
        return undefined;
      }

      result.push(element);

      if (this.eat(types.comma)) {
        continue;
      }

      if (this.tsIsListTerminator(kind)) {
        break;
      }

      if (expectSuccess) {
        this.expect(types.comma);
      }

      return undefined;
    }

    return result;
  }

  tsParseBracketedList(kind, parseElement, bracket, skipFirstToken) {
    if (!skipFirstToken) {
      if (bracket) {
        this.expect(types.bracketL);
      } else {
        this.expectRelational("<");
      }
    }

    const result = this.tsParseDelimitedList(kind, parseElement);

    if (bracket) {
      this.expect(types.bracketR);
    } else {
      this.expectRelational(">");
    }

    return result;
  }

  tsParseImportType() {
    const node = this.startNode();
    this.expect(types._import);
    this.expect(types.parenL);

    if (!this.match(types.string)) {
      this.raise(this.state.start, TSErrors.UnsupportedImportTypeArgument);
    }

    node.argument = this.parseExprAtom();
    this.expect(types.parenR);

    if (this.eat(types.dot)) {
      node.qualifier = this.tsParseEntityName(true);
    }

    if (this.isRelational("<")) {
      node.typeParameters = this.tsParseTypeArguments();
    }

    return this.finishNode(node, "TSImportType");
  }

  tsParseEntityName(allowReservedWords) {
    let entity = this.parseIdentifier();

    while (this.eat(types.dot)) {
      const node = this.startNodeAtNode(entity);
      node.left = entity;
      node.right = this.parseIdentifier(allowReservedWords);
      entity = this.finishNode(node, "TSQualifiedName");
    }

    return entity;
  }

  tsParseTypeReference() {
    const node = this.startNode();
    node.typeName = this.tsParseEntityName(false);

    if (!this.hasPrecedingLineBreak() && this.isRelational("<")) {
      node.typeParameters = this.tsParseTypeArguments();
    }

    return this.finishNode(node, "TSTypeReference");
  }

  tsParseThisTypePredicate(lhs) {
    this.next();
    const node = this.startNodeAtNode(lhs);
    node.parameterName = lhs;
    node.typeAnnotation = this.tsParseTypeAnnotation(false);
    node.asserts = false;
    return this.finishNode(node, "TSTypePredicate");
  }

  tsParseThisTypeNode() {
    const node = this.startNode();
    this.next();
    return this.finishNode(node, "TSThisType");
  }

  tsParseTypeQuery() {
    const node = this.startNode();
    this.expect(types._typeof);

    if (this.match(types._import)) {
      node.exprName = this.tsParseImportType();
    } else {
      node.exprName = this.tsParseEntityName(true);
    }

    return this.finishNode(node, "TSTypeQuery");
  }

  tsParseTypeParameter() {
    const node = this.startNode();
    node.name = this.parseIdentifierName(node.start);
    node.constraint = this.tsEatThenParseType(types._extends);
    node.default = this.tsEatThenParseType(types.eq);
    return this.finishNode(node, "TSTypeParameter");
  }

  tsTryParseTypeParameters() {
    if (this.isRelational("<")) {
      return this.tsParseTypeParameters();
    }
  }

  tsParseTypeParameters() {
    const node = this.startNode();

    if (this.isRelational("<") || this.match(types.jsxTagStart)) {
      this.next();
    } else {
      this.unexpected();
    }

    node.params = this.tsParseBracketedList("TypeParametersOrArguments", this.tsParseTypeParameter.bind(this), false, true);

    if (node.params.length === 0) {
      this.raise(node.start, TSErrors.EmptyTypeParameters);
    }

    return this.finishNode(node, "TSTypeParameterDeclaration");
  }

  tsTryNextParseConstantContext() {
    if (this.lookahead().type === types._const) {
      this.next();
      return this.tsParseTypeReference();
    }

    return null;
  }

  tsFillSignature(returnToken, signature) {
    const returnTokenRequired = returnToken === types.arrow;
    signature.typeParameters = this.tsTryParseTypeParameters();
    this.expect(types.parenL);
    signature.parameters = this.tsParseBindingListForSignature();

    if (returnTokenRequired) {
      signature.typeAnnotation = this.tsParseTypeOrTypePredicateAnnotation(returnToken);
    } else if (this.match(returnToken)) {
      signature.typeAnnotation = this.tsParseTypeOrTypePredicateAnnotation(returnToken);
    }
  }

  tsParseBindingListForSignature() {
    return this.parseBindingList(types.parenR, 41).map(pattern => {
      if (pattern.type !== "Identifier" && pattern.type !== "RestElement" && pattern.type !== "ObjectPattern" && pattern.type !== "ArrayPattern") {
        this.raise(pattern.start, TSErrors.UnsupportedSignatureParameterKind, pattern.type);
      }

      return pattern;
    });
  }

  tsParseTypeMemberSemicolon() {
    if (!this.eat(types.comma)) {
      this.semicolon();
    }
  }

  tsParseSignatureMember(kind, node) {
    this.tsFillSignature(types.colon, node);
    this.tsParseTypeMemberSemicolon();
    return this.finishNode(node, kind);
  }

  tsIsUnambiguouslyIndexSignature() {
    this.next();
    return this.eat(types.name) && this.match(types.colon);
  }

  tsTryParseIndexSignature(node) {
    if (!(this.match(types.bracketL) && this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this)))) {
      return undefined;
    }

    this.expect(types.bracketL);
    const id = this.parseIdentifier();
    id.typeAnnotation = this.tsParseTypeAnnotation();
    this.resetEndLocation(id);
    this.expect(types.bracketR);
    node.parameters = [id];
    const type = this.tsTryParseTypeAnnotation();
    if (type) node.typeAnnotation = type;
    this.tsParseTypeMemberSemicolon();
    return this.finishNode(node, "TSIndexSignature");
  }

  tsParsePropertyOrMethodSignature(node, readonly) {
    if (this.eat(types.question)) node.optional = true;
    const nodeAny = node;

    if (this.match(types.parenL) || this.isRelational("<")) {
      if (readonly) {
        this.raise(node.start, TSErrors.ReadonlyForMethodSignature);
      }

      const method = nodeAny;
      this.tsFillSignature(types.colon, method);
      this.tsParseTypeMemberSemicolon();
      return this.finishNode(method, "TSMethodSignature");
    } else {
      const property = nodeAny;
      if (readonly) property.readonly = true;
      const type = this.tsTryParseTypeAnnotation();
      if (type) property.typeAnnotation = type;
      this.tsParseTypeMemberSemicolon();
      return this.finishNode(property, "TSPropertySignature");
    }
  }

  tsParseTypeMember() {
    const node = this.startNode();

    if (this.match(types.parenL) || this.isRelational("<")) {
      return this.tsParseSignatureMember("TSCallSignatureDeclaration", node);
    }

    if (this.match(types._new)) {
      const id = this.startNode();
      this.next();

      if (this.match(types.parenL) || this.isRelational("<")) {
        return this.tsParseSignatureMember("TSConstructSignatureDeclaration", node);
      } else {
        node.key = this.createIdentifier(id, "new");
        return this.tsParsePropertyOrMethodSignature(node, false);
      }
    }

    this.tsParseModifiers(node, ["readonly"], ["declare", "abstract", "private", "protected", "public", "static"], TSErrors.InvalidModifierOnTypeMember);
    const idx = this.tsTryParseIndexSignature(node);

    if (idx) {
      return idx;
    }

    this.parsePropertyName(node, false);
    return this.tsParsePropertyOrMethodSignature(node, !!node.readonly);
  }

  tsParseTypeLiteral() {
    const node = this.startNode();
    node.members = this.tsParseObjectTypeMembers();
    return this.finishNode(node, "TSTypeLiteral");
  }

  tsParseObjectTypeMembers() {
    this.expect(types.braceL);
    const members = this.tsParseList("TypeMembers", this.tsParseTypeMember.bind(this));
    this.expect(types.braceR);
    return members;
  }

  tsIsStartOfMappedType() {
    this.next();

    if (this.eat(types.plusMin)) {
      return this.isContextual("readonly");
    }

    if (this.isContextual("readonly")) {
      this.next();
    }

    if (!this.match(types.bracketL)) {
      return false;
    }

    this.next();

    if (!this.tsIsIdentifier()) {
      return false;
    }

    this.next();
    return this.match(types._in);
  }

  tsParseMappedTypeParameter() {
    const node = this.startNode();
    node.name = this.parseIdentifierName(node.start);
    node.constraint = this.tsExpectThenParseType(types._in);
    return this.finishNode(node, "TSTypeParameter");
  }

  tsParseMappedType() {
    const node = this.startNode();
    this.expect(types.braceL);

    if (this.match(types.plusMin)) {
      node.readonly = this.state.value;
      this.next();
      this.expectContextual("readonly");
    } else if (this.eatContextual("readonly")) {
      node.readonly = true;
    }

    this.expect(types.bracketL);
    node.typeParameter = this.tsParseMappedTypeParameter();
    node.nameType = this.eatContextual("as") ? this.tsParseType() : null;
    this.expect(types.bracketR);

    if (this.match(types.plusMin)) {
      node.optional = this.state.value;
      this.next();
      this.expect(types.question);
    } else if (this.eat(types.question)) {
      node.optional = true;
    }

    node.typeAnnotation = this.tsTryParseType();
    this.semicolon();
    this.expect(types.braceR);
    return this.finishNode(node, "TSMappedType");
  }

  tsParseTupleType() {
    const node = this.startNode();
    node.elementTypes = this.tsParseBracketedList("TupleElementTypes", this.tsParseTupleElementType.bind(this), true, false);
    let seenOptionalElement = false;
    let labeledElements = null;
    node.elementTypes.forEach(elementNode => {
      var _labeledElements;

      let {
        type
      } = elementNode;

      if (seenOptionalElement && type !== "TSRestType" && type !== "TSOptionalType" && !(type === "TSNamedTupleMember" && elementNode.optional)) {
        this.raise(elementNode.start, TSErrors.OptionalTypeBeforeRequired);
      }

      seenOptionalElement = seenOptionalElement || type === "TSNamedTupleMember" && elementNode.optional || type === "TSOptionalType";

      if (type === "TSRestType") {
        elementNode = elementNode.typeAnnotation;
        type = elementNode.type;
      }

      const isLabeled = type === "TSNamedTupleMember";
      labeledElements = (_labeledElements = labeledElements) != null ? _labeledElements : isLabeled;

      if (labeledElements !== isLabeled) {
        this.raise(elementNode.start, TSErrors.MixedLabeledAndUnlabeledElements);
      }
    });
    return this.finishNode(node, "TSTupleType");
  }

  tsParseTupleElementType() {
    const {
      start: startPos,
      startLoc
    } = this.state;
    const rest = this.eat(types.ellipsis);
    let type = this.tsParseType();
    const optional = this.eat(types.question);
    const labeled = this.eat(types.colon);

    if (labeled) {
      const labeledNode = this.startNodeAtNode(type);
      labeledNode.optional = optional;

      if (type.type === "TSTypeReference" && !type.typeParameters && type.typeName.type === "Identifier") {
        labeledNode.label = type.typeName;
      } else {
        this.raise(type.start, TSErrors.InvalidTupleMemberLabel);
        labeledNode.label = type;
      }

      labeledNode.elementType = this.tsParseType();
      type = this.finishNode(labeledNode, "TSNamedTupleMember");
    } else if (optional) {
      const optionalTypeNode = this.startNodeAtNode(type);
      optionalTypeNode.typeAnnotation = type;
      type = this.finishNode(optionalTypeNode, "TSOptionalType");
    }

    if (rest) {
      const restNode = this.startNodeAt(startPos, startLoc);
      restNode.typeAnnotation = type;
      type = this.finishNode(restNode, "TSRestType");
    }

    return type;
  }

  tsParseParenthesizedType() {
    const node = this.startNode();
    this.expect(types.parenL);
    node.typeAnnotation = this.tsParseType();
    this.expect(types.parenR);
    return this.finishNode(node, "TSParenthesizedType");
  }

  tsParseFunctionOrConstructorType(type) {
    const node = this.startNode();

    if (type === "TSConstructorType") {
      this.expect(types._new);
    }

    this.tsFillSignature(types.arrow, node);
    return this.finishNode(node, type);
  }

  tsParseLiteralTypeNode() {
    const node = this.startNode();

    node.literal = (() => {
      switch (this.state.type) {
        case types.num:
        case types.bigint:
        case types.string:
        case types._true:
        case types._false:
          return this.parseExprAtom();

        default:
          throw this.unexpected();
      }
    })();

    return this.finishNode(node, "TSLiteralType");
  }

  tsParseTemplateLiteralType() {
    const node = this.startNode();
    node.literal = this.parseTemplate(false);
    return this.finishNode(node, "TSLiteralType");
  }

  parseTemplateSubstitution() {
    if (this.state.inType) return this.tsParseType();
    return super.parseTemplateSubstitution();
  }

  tsParseThisTypeOrThisTypePredicate() {
    const thisKeyword = this.tsParseThisTypeNode();

    if (this.isContextual("is") && !this.hasPrecedingLineBreak()) {
      return this.tsParseThisTypePredicate(thisKeyword);
    } else {
      return thisKeyword;
    }
  }

  tsParseNonArrayType() {
    switch (this.state.type) {
      case types.name:
      case types._void:
      case types._null:
        {
          const type = this.match(types._void) ? "TSVoidKeyword" : this.match(types._null) ? "TSNullKeyword" : keywordTypeFromName(this.state.value);

          if (type !== undefined && this.lookaheadCharCode() !== 46) {
            const node = this.startNode();
            this.next();
            return this.finishNode(node, type);
          }

          return this.tsParseTypeReference();
        }

      case types.string:
      case types.num:
      case types.bigint:
      case types._true:
      case types._false:
        return this.tsParseLiteralTypeNode();

      case types.plusMin:
        if (this.state.value === "-") {
          const node = this.startNode();
          const nextToken = this.lookahead();

          if (nextToken.type !== types.num && nextToken.type !== types.bigint) {
            throw this.unexpected();
          }

          node.literal = this.parseMaybeUnary();
          return this.finishNode(node, "TSLiteralType");
        }

        break;

      case types._this:
        return this.tsParseThisTypeOrThisTypePredicate();

      case types._typeof:
        return this.tsParseTypeQuery();

      case types._import:
        return this.tsParseImportType();

      case types.braceL:
        return this.tsLookAhead(this.tsIsStartOfMappedType.bind(this)) ? this.tsParseMappedType() : this.tsParseTypeLiteral();

      case types.bracketL:
        return this.tsParseTupleType();

      case types.parenL:
        return this.tsParseParenthesizedType();

      case types.backQuote:
        return this.tsParseTemplateLiteralType();
    }

    throw this.unexpected();
  }

  tsParseArrayTypeOrHigher() {
    let type = this.tsParseNonArrayType();

    while (!this.hasPrecedingLineBreak() && this.eat(types.bracketL)) {
      if (this.match(types.bracketR)) {
        const node = this.startNodeAtNode(type);
        node.elementType = type;
        this.expect(types.bracketR);
        type = this.finishNode(node, "TSArrayType");
      } else {
        const node = this.startNodeAtNode(type);
        node.objectType = type;
        node.indexType = this.tsParseType();
        this.expect(types.bracketR);
        type = this.finishNode(node, "TSIndexedAccessType");
      }
    }

    return type;
  }

  tsParseTypeOperator(operator) {
    const node = this.startNode();
    this.expectContextual(operator);
    node.operator = operator;
    node.typeAnnotation = this.tsParseTypeOperatorOrHigher();

    if (operator === "readonly") {
      this.tsCheckTypeAnnotationForReadOnly(node);
    }

    return this.finishNode(node, "TSTypeOperator");
  }

  tsCheckTypeAnnotationForReadOnly(node) {
    switch (node.typeAnnotation.type) {
      case "TSTupleType":
      case "TSArrayType":
        return;

      default:
        this.raise(node.start, TSErrors.UnexpectedReadonly);
    }
  }

  tsParseInferType() {
    const node = this.startNode();
    this.expectContextual("infer");
    const typeParameter = this.startNode();
    typeParameter.name = this.parseIdentifierName(typeParameter.start);
    node.typeParameter = this.finishNode(typeParameter, "TSTypeParameter");
    return this.finishNode(node, "TSInferType");
  }

  tsParseTypeOperatorOrHigher() {
    const operator = ["keyof", "unique", "readonly"].find(kw => this.isContextual(kw));
    return operator ? this.tsParseTypeOperator(operator) : this.isContextual("infer") ? this.tsParseInferType() : this.tsParseArrayTypeOrHigher();
  }

  tsParseUnionOrIntersectionType(kind, parseConstituentType, operator) {
    const node = this.startNode();
    const hasLeadingOperator = this.eat(operator);
    const types = [];

    do {
      types.push(parseConstituentType());
    } while (this.eat(operator));

    if (types.length === 1 && !hasLeadingOperator) {
      return types[0];
    }

    node.types = types;
    return this.finishNode(node, kind);
  }

  tsParseIntersectionTypeOrHigher() {
    return this.tsParseUnionOrIntersectionType("TSIntersectionType", this.tsParseTypeOperatorOrHigher.bind(this), types.bitwiseAND);
  }

  tsParseUnionTypeOrHigher() {
    return this.tsParseUnionOrIntersectionType("TSUnionType", this.tsParseIntersectionTypeOrHigher.bind(this), types.bitwiseOR);
  }

  tsIsStartOfFunctionType() {
    if (this.isRelational("<")) {
      return true;
    }

    return this.match(types.parenL) && this.tsLookAhead(this.tsIsUnambiguouslyStartOfFunctionType.bind(this));
  }

  tsSkipParameterStart() {
    if (this.match(types.name) || this.match(types._this)) {
      this.next();
      return true;
    }

    if (this.match(types.braceL)) {
      let braceStackCounter = 1;
      this.next();

      while (braceStackCounter > 0) {
        if (this.match(types.braceL)) {
          ++braceStackCounter;
        } else if (this.match(types.braceR)) {
          --braceStackCounter;
        }

        this.next();
      }

      return true;
    }

    if (this.match(types.bracketL)) {
      let braceStackCounter = 1;
      this.next();

      while (braceStackCounter > 0) {
        if (this.match(types.bracketL)) {
          ++braceStackCounter;
        } else if (this.match(types.bracketR)) {
          --braceStackCounter;
        }

        this.next();
      }

      return true;
    }

    return false;
  }

  tsIsUnambiguouslyStartOfFunctionType() {
    this.next();

    if (this.match(types.parenR) || this.match(types.ellipsis)) {
      return true;
    }

    if (this.tsSkipParameterStart()) {
      if (this.match(types.colon) || this.match(types.comma) || this.match(types.question) || this.match(types.eq)) {
        return true;
      }

      if (this.match(types.parenR)) {
        this.next();

        if (this.match(types.arrow)) {
          return true;
        }
      }
    }

    return false;
  }

  tsParseTypeOrTypePredicateAnnotation(returnToken) {
    return this.tsInType(() => {
      const t = this.startNode();
      this.expect(returnToken);
      const node = this.startNode();
      const asserts = !!this.tsTryParse(this.tsParseTypePredicateAsserts.bind(this));

      if (asserts && this.match(types._this)) {
        let thisTypePredicate = this.tsParseThisTypeOrThisTypePredicate();

        if (thisTypePredicate.type === "TSThisType") {
          node.parameterName = thisTypePredicate;
          node.asserts = true;
          thisTypePredicate = this.finishNode(node, "TSTypePredicate");
        } else {
          this.resetStartLocationFromNode(thisTypePredicate, node);
          thisTypePredicate.asserts = true;
        }

        t.typeAnnotation = thisTypePredicate;
        return this.finishNode(t, "TSTypeAnnotation");
      }

      const typePredicateVariable = this.tsIsIdentifier() && this.tsTryParse(this.tsParseTypePredicatePrefix.bind(this));

      if (!typePredicateVariable) {
        if (!asserts) {
          return this.tsParseTypeAnnotation(false, t);
        }

        node.parameterName = this.parseIdentifier();
        node.asserts = asserts;
        t.typeAnnotation = this.finishNode(node, "TSTypePredicate");
        return this.finishNode(t, "TSTypeAnnotation");
      }

      const type = this.tsParseTypeAnnotation(false);
      node.parameterName = typePredicateVariable;
      node.typeAnnotation = type;
      node.asserts = asserts;
      t.typeAnnotation = this.finishNode(node, "TSTypePredicate");
      return this.finishNode(t, "TSTypeAnnotation");
    });
  }

  tsTryParseTypeOrTypePredicateAnnotation() {
    return this.match(types.colon) ? this.tsParseTypeOrTypePredicateAnnotation(types.colon) : undefined;
  }

  tsTryParseTypeAnnotation() {
    return this.match(types.colon) ? this.tsParseTypeAnnotation() : undefined;
  }

  tsTryParseType() {
    return this.tsEatThenParseType(types.colon);
  }

  tsParseTypePredicatePrefix() {
    const id = this.parseIdentifier();

    if (this.isContextual("is") && !this.hasPrecedingLineBreak()) {
      this.next();
      return id;
    }
  }

  tsParseTypePredicateAsserts() {
    if (!this.match(types.name) || this.state.value !== "asserts" || this.hasPrecedingLineBreak()) {
      return false;
    }

    const containsEsc = this.state.containsEsc;
    this.next();

    if (!this.match(types.name) && !this.match(types._this)) {
      return false;
    }

    if (containsEsc) {
      this.raise(this.state.lastTokStart, ErrorMessages.InvalidEscapedReservedWord, "asserts");
    }

    return true;
  }

  tsParseTypeAnnotation(eatColon = true, t = this.startNode()) {
    this.tsInType(() => {
      if (eatColon) this.expect(types.colon);
      t.typeAnnotation = this.tsParseType();
    });
    return this.finishNode(t, "TSTypeAnnotation");
  }

  tsParseType() {
    assert(this.state.inType);
    const type = this.tsParseNonConditionalType();

    if (this.hasPrecedingLineBreak() || !this.eat(types._extends)) {
      return type;
    }

    const node = this.startNodeAtNode(type);
    node.checkType = type;
    node.extendsType = this.tsParseNonConditionalType();
    this.expect(types.question);
    node.trueType = this.tsParseType();
    this.expect(types.colon);
    node.falseType = this.tsParseType();
    return this.finishNode(node, "TSConditionalType");
  }

  tsParseNonConditionalType() {
    if (this.tsIsStartOfFunctionType()) {
      return this.tsParseFunctionOrConstructorType("TSFunctionType");
    }

    if (this.match(types._new)) {
      return this.tsParseFunctionOrConstructorType("TSConstructorType");
    }

    return this.tsParseUnionTypeOrHigher();
  }

  tsParseTypeAssertion() {
    const node = this.startNode();

    const _const = this.tsTryNextParseConstantContext();

    node.typeAnnotation = _const || this.tsNextThenParseType();
    this.expectRelational(">");
    node.expression = this.parseMaybeUnary();
    return this.finishNode(node, "TSTypeAssertion");
  }

  tsParseHeritageClause(descriptor) {
    const originalStart = this.state.start;
    const delimitedList = this.tsParseDelimitedList("HeritageClauseElement", this.tsParseExpressionWithTypeArguments.bind(this));

    if (!delimitedList.length) {
      this.raise(originalStart, TSErrors.EmptyHeritageClauseType, descriptor);
    }

    return delimitedList;
  }

  tsParseExpressionWithTypeArguments() {
    const node = this.startNode();
    node.expression = this.tsParseEntityName(false);

    if (this.isRelational("<")) {
      node.typeParameters = this.tsParseTypeArguments();
    }

    return this.finishNode(node, "TSExpressionWithTypeArguments");
  }

  tsParseInterfaceDeclaration(node) {
    node.id = this.parseIdentifier();
    this.checkLVal(node.id, "typescript interface declaration", BIND_TS_INTERFACE);
    node.typeParameters = this.tsTryParseTypeParameters();

    if (this.eat(types._extends)) {
      node.extends = this.tsParseHeritageClause("extends");
    }

    const body = this.startNode();
    body.body = this.tsInType(this.tsParseObjectTypeMembers.bind(this));
    node.body = this.finishNode(body, "TSInterfaceBody");
    return this.finishNode(node, "TSInterfaceDeclaration");
  }

  tsParseTypeAliasDeclaration(node) {
    node.id = this.parseIdentifier();
    this.checkLVal(node.id, "typescript type alias", BIND_TS_TYPE);
    node.typeParameters = this.tsTryParseTypeParameters();
    node.typeAnnotation = this.tsInType(() => {
      this.expect(types.eq);

      if (this.isContextual("intrinsic") && this.lookahead().type !== types.dot) {
        const node = this.startNode();
        this.next();
        return this.finishNode(node, "TSIntrinsicKeyword");
      }

      return this.tsParseType();
    });
    this.semicolon();
    return this.finishNode(node, "TSTypeAliasDeclaration");
  }

  tsInNoContext(cb) {
    const oldContext = this.state.context;
    this.state.context = [oldContext[0]];

    try {
      return cb();
    } finally {
      this.state.context = oldContext;
    }
  }

  tsInType(cb) {
    const oldInType = this.state.inType;
    this.state.inType = true;

    try {
      return cb();
    } finally {
      this.state.inType = oldInType;
    }
  }

  tsEatThenParseType(token) {
    return !this.match(token) ? undefined : this.tsNextThenParseType();
  }

  tsExpectThenParseType(token) {
    return this.tsDoThenParseType(() => this.expect(token));
  }

  tsNextThenParseType() {
    return this.tsDoThenParseType(() => this.next());
  }

  tsDoThenParseType(cb) {
    return this.tsInType(() => {
      cb();
      return this.tsParseType();
    });
  }

  tsParseEnumMember() {
    const node = this.startNode();
    node.id = this.match(types.string) ? this.parseExprAtom() : this.parseIdentifier(true);

    if (this.eat(types.eq)) {
      node.initializer = this.parseMaybeAssignAllowIn();
    }

    return this.finishNode(node, "TSEnumMember");
  }

  tsParseEnumDeclaration(node, isConst) {
    if (isConst) node.const = true;
    node.id = this.parseIdentifier();
    this.checkLVal(node.id, "typescript enum declaration", isConst ? BIND_TS_CONST_ENUM : BIND_TS_ENUM);
    this.expect(types.braceL);
    node.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this));
    this.expect(types.braceR);
    return this.finishNode(node, "TSEnumDeclaration");
  }

  tsParseModuleBlock() {
    const node = this.startNode();
    this.scope.enter(SCOPE_OTHER);
    this.expect(types.braceL);
    this.parseBlockOrModuleBlockBody(node.body = [], undefined, true, types.braceR);
    this.scope.exit();
    return this.finishNode(node, "TSModuleBlock");
  }

  tsParseModuleOrNamespaceDeclaration(node, nested = false) {
    node.id = this.parseIdentifier();

    if (!nested) {
      this.checkLVal(node.id, "module or namespace declaration", BIND_TS_NAMESPACE);
    }

    if (this.eat(types.dot)) {
      const inner = this.startNode();
      this.tsParseModuleOrNamespaceDeclaration(inner, true);
      node.body = inner;
    } else {
      this.scope.enter(SCOPE_TS_MODULE);
      this.prodParam.enter(PARAM);
      node.body = this.tsParseModuleBlock();
      this.prodParam.exit();
      this.scope.exit();
    }

    return this.finishNode(node, "TSModuleDeclaration");
  }

  tsParseAmbientExternalModuleDeclaration(node) {
    if (this.isContextual("global")) {
      node.global = true;
      node.id = this.parseIdentifier();
    } else if (this.match(types.string)) {
      node.id = this.parseExprAtom();
    } else {
      this.unexpected();
    }

    if (this.match(types.braceL)) {
      this.scope.enter(SCOPE_TS_MODULE);
      this.prodParam.enter(PARAM);
      node.body = this.tsParseModuleBlock();
      this.prodParam.exit();
      this.scope.exit();
    } else {
      this.semicolon();
    }

    return this.finishNode(node, "TSModuleDeclaration");
  }

  tsParseImportEqualsDeclaration(node, isExport) {
    node.isExport = isExport || false;
    node.id = this.parseIdentifier();
    this.checkLVal(node.id, "import equals declaration", BIND_LEXICAL);
    this.expect(types.eq);
    node.moduleReference = this.tsParseModuleReference();
    this.semicolon();
    return this.finishNode(node, "TSImportEqualsDeclaration");
  }

  tsIsExternalModuleReference() {
    return this.isContextual("require") && this.lookaheadCharCode() === 40;
  }

  tsParseModuleReference() {
    return this.tsIsExternalModuleReference() ? this.tsParseExternalModuleReference() : this.tsParseEntityName(false);
  }

  tsParseExternalModuleReference() {
    const node = this.startNode();
    this.expectContextual("require");
    this.expect(types.parenL);

    if (!this.match(types.string)) {
      throw this.unexpected();
    }

    node.expression = this.parseExprAtom();
    this.expect(types.parenR);
    return this.finishNode(node, "TSExternalModuleReference");
  }

  tsLookAhead(f) {
    const state = this.state.clone();
    const res = f();
    this.state = state;
    return res;
  }

  tsTryParseAndCatch(f) {
    const result = this.tryParse(abort => f() || abort());
    if (result.aborted || !result.node) return undefined;
    if (result.error) this.state = result.failState;
    return result.node;
  }

  tsTryParse(f) {
    const state = this.state.clone();
    const result = f();

    if (result !== undefined && result !== false) {
      return result;
    } else {
      this.state = state;
      return undefined;
    }
  }

  tsTryParseDeclare(nany) {
    if (this.isLineTerminator()) {
      return;
    }

    let starttype = this.state.type;
    let kind;

    if (this.isContextual("let")) {
      starttype = types._var;
      kind = "let";
    }

    return this.tsInDeclareContext(() => {
      switch (starttype) {
        case types._function:
          nany.declare = true;
          return this.parseFunctionStatement(nany, false, true);

        case types._class:
          nany.declare = true;
          return this.parseClass(nany, true, false);

        case types._const:
          if (this.match(types._const) && this.isLookaheadContextual("enum")) {
            this.expect(types._const);
            this.expectContextual("enum");
            return this.tsParseEnumDeclaration(nany, true);
          }

        case types._var:
          kind = kind || this.state.value;
          return this.parseVarStatement(nany, kind);

        case types.name:
          {
            const value = this.state.value;

            if (value === "global") {
              return this.tsParseAmbientExternalModuleDeclaration(nany);
            } else {
              return this.tsParseDeclaration(nany, value, true);
            }
          }
      }
    });
  }

  tsTryParseExportDeclaration() {
    return this.tsParseDeclaration(this.startNode(), this.state.value, true);
  }

  tsParseExpressionStatement(node, expr) {
    switch (expr.name) {
      case "declare":
        {
          const declaration = this.tsTryParseDeclare(node);

          if (declaration) {
            declaration.declare = true;
            return declaration;
          }

          break;
        }

      case "global":
        if (this.match(types.braceL)) {
          this.scope.enter(SCOPE_TS_MODULE);
          this.prodParam.enter(PARAM);
          const mod = node;
          mod.global = true;
          mod.id = expr;
          mod.body = this.tsParseModuleBlock();
          this.scope.exit();
          this.prodParam.exit();
          return this.finishNode(mod, "TSModuleDeclaration");
        }

        break;

      default:
        return this.tsParseDeclaration(node, expr.name, false);
    }
  }

  tsParseDeclaration(node, value, next) {
    switch (value) {
      case "abstract":
        if (this.tsCheckLineTerminator(next) && (this.match(types._class) || this.match(types.name))) {
          return this.tsParseAbstractDeclaration(node);
        }

        break;

      case "enum":
        if (next || this.match(types.name)) {
          if (next) this.next();
          return this.tsParseEnumDeclaration(node, false);
        }

        break;

      case "interface":
        if (this.tsCheckLineTerminator(next) && this.match(types.name)) {
          return this.tsParseInterfaceDeclaration(node);
        }

        break;

      case "module":
        if (this.tsCheckLineTerminator(next)) {
          if (this.match(types.string)) {
            return this.tsParseAmbientExternalModuleDeclaration(node);
          } else if (this.match(types.name)) {
            return this.tsParseModuleOrNamespaceDeclaration(node);
          }
        }

        break;

      case "namespace":
        if (this.tsCheckLineTerminator(next) && this.match(types.name)) {
          return this.tsParseModuleOrNamespaceDeclaration(node);
        }

        break;

      case "type":
        if (this.tsCheckLineTerminator(next) && this.match(types.name)) {
          return this.tsParseTypeAliasDeclaration(node);
        }

        break;
    }
  }

  tsCheckLineTerminator(next) {
    if (next) {
      if (this.hasFollowingLineBreak()) return false;
      this.next();
      return true;
    }

    return !this.isLineTerminator();
  }

  tsTryParseGenericAsyncArrowFunction(startPos, startLoc) {
    if (!this.isRelational("<")) {
      return undefined;
    }

    const oldMaybeInArrowParameters = this.state.maybeInArrowParameters;
    this.state.maybeInArrowParameters = true;
    const res = this.tsTryParseAndCatch(() => {
      const node = this.startNodeAt(startPos, startLoc);
      node.typeParameters = this.tsParseTypeParameters();
      super.parseFunctionParams(node);
      node.returnType = this.tsTryParseTypeOrTypePredicateAnnotation();
      this.expect(types.arrow);
      return node;
    });
    this.state.maybeInArrowParameters = oldMaybeInArrowParameters;

    if (!res) {
      return undefined;
    }

    return this.parseArrowExpression(res, null, true);
  }

  tsParseTypeArguments() {
    const node = this.startNode();
    node.params = this.tsInType(() => this.tsInNoContext(() => {
      this.expectRelational("<");
      return this.tsParseDelimitedList("TypeParametersOrArguments", this.tsParseType.bind(this));
    }));

    if (node.params.length === 0) {
      this.raise(node.start, TSErrors.EmptyTypeArguments);
    }

    this.state.exprAllowed = false;
    this.expectRelational(">");
    return this.finishNode(node, "TSTypeParameterInstantiation");
  }

  tsIsDeclarationStart() {
    if (this.match(types.name)) {
      switch (this.state.value) {
        case "abstract":
        case "declare":
        case "enum":
        case "interface":
        case "module":
        case "namespace":
        case "type":
          return true;
      }
    }

    return false;
  }

  isExportDefaultSpecifier() {
    if (this.tsIsDeclarationStart()) return false;
    return super.isExportDefaultSpecifier();
  }

  parseAssignableListItem(allowModifiers, decorators) {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    let accessibility;
    let readonly = false;

    if (allowModifiers !== undefined) {
      accessibility = this.parseAccessModifier();
      readonly = !!this.tsParseModifier(["readonly"]);

      if (allowModifiers === false && (accessibility || readonly)) {
        this.raise(startPos, TSErrors.UnexpectedParameterModifier);
      }
    }

    const left = this.parseMaybeDefault();
    this.parseAssignableListItemTypes(left);
    const elt = this.parseMaybeDefault(left.start, left.loc.start, left);

    if (accessibility || readonly) {
      const pp = this.startNodeAt(startPos, startLoc);

      if (decorators.length) {
        pp.decorators = decorators;
      }

      if (accessibility) pp.accessibility = accessibility;
      if (readonly) pp.readonly = readonly;

      if (elt.type !== "Identifier" && elt.type !== "AssignmentPattern") {
        this.raise(pp.start, TSErrors.UnsupportedParameterPropertyKind);
      }

      pp.parameter = elt;
      return this.finishNode(pp, "TSParameterProperty");
    }

    if (decorators.length) {
      left.decorators = decorators;
    }

    return elt;
  }

  parseFunctionBodyAndFinish(node, type, isMethod = false) {
    if (this.match(types.colon)) {
      node.returnType = this.tsParseTypeOrTypePredicateAnnotation(types.colon);
    }

    const bodilessType = type === "FunctionDeclaration" ? "TSDeclareFunction" : type === "ClassMethod" ? "TSDeclareMethod" : undefined;

    if (bodilessType && !this.match(types.braceL) && this.isLineTerminator()) {
      this.finishNode(node, bodilessType);
      return;
    }

    if (bodilessType === "TSDeclareFunction" && this.state.isDeclareContext) {
      this.raise(node.start, TSErrors.DeclareFunctionHasImplementation);

      if (node.declare) {
        super.parseFunctionBodyAndFinish(node, bodilessType, isMethod);
        return;
      }
    }

    super.parseFunctionBodyAndFinish(node, type, isMethod);
  }

  registerFunctionStatementId(node) {
    if (!node.body && node.id) {
      this.checkLVal(node.id, "function name", BIND_TS_AMBIENT);
    } else {
      super.registerFunctionStatementId(...arguments);
    }
  }

  tsCheckForInvalidTypeCasts(items) {
    items.forEach(node => {
      if ((node == null ? void 0 : node.type) === "TSTypeCastExpression") {
        this.raise(node.typeAnnotation.start, TSErrors.UnexpectedTypeAnnotation);
      }
    });
  }

  toReferencedList(exprList, isInParens) {
    this.tsCheckForInvalidTypeCasts(exprList);
    return exprList;
  }

  parseArrayLike(...args) {
    const node = super.parseArrayLike(...args);

    if (node.type === "ArrayExpression") {
      this.tsCheckForInvalidTypeCasts(node.elements);
    }

    return node;
  }

  parseSubscript(base, startPos, startLoc, noCalls, state) {
    if (!this.hasPrecedingLineBreak() && this.match(types.bang)) {
      this.state.exprAllowed = false;
      this.next();
      const nonNullExpression = this.startNodeAt(startPos, startLoc);
      nonNullExpression.expression = base;
      return this.finishNode(nonNullExpression, "TSNonNullExpression");
    }

    if (this.isRelational("<")) {
      const result = this.tsTryParseAndCatch(() => {
        if (!noCalls && this.atPossibleAsyncArrow(base)) {
          const asyncArrowFn = this.tsTryParseGenericAsyncArrowFunction(startPos, startLoc);

          if (asyncArrowFn) {
            return asyncArrowFn;
          }
        }

        const node = this.startNodeAt(startPos, startLoc);
        node.callee = base;
        const typeArguments = this.tsParseTypeArguments();

        if (typeArguments) {
          if (!noCalls && this.eat(types.parenL)) {
            node.arguments = this.parseCallExpressionArguments(types.parenR, false);
            this.tsCheckForInvalidTypeCasts(node.arguments);
            node.typeParameters = typeArguments;

            if (state.optionalChainMember) {
              node.optional = false;
            }

            return this.finishCallExpression(node, state.optionalChainMember);
          } else if (this.match(types.backQuote)) {
            const result = this.parseTaggedTemplateExpression(base, startPos, startLoc, state);
            result.typeParameters = typeArguments;
            return result;
          }
        }

        this.unexpected();
      });
      if (result) return result;
    }

    return super.parseSubscript(base, startPos, startLoc, noCalls, state);
  }

  parseNewArguments(node) {
    if (this.isRelational("<")) {
      const typeParameters = this.tsTryParseAndCatch(() => {
        const args = this.tsParseTypeArguments();
        if (!this.match(types.parenL)) this.unexpected();
        return args;
      });

      if (typeParameters) {
        node.typeParameters = typeParameters;
      }
    }

    super.parseNewArguments(node);
  }

  parseExprOp(left, leftStartPos, leftStartLoc, minPrec) {
    if (nonNull(types._in.binop) > minPrec && !this.hasPrecedingLineBreak() && this.isContextual("as")) {
      const node = this.startNodeAt(leftStartPos, leftStartLoc);
      node.expression = left;

      const _const = this.tsTryNextParseConstantContext();

      if (_const) {
        node.typeAnnotation = _const;
      } else {
        node.typeAnnotation = this.tsNextThenParseType();
      }

      this.finishNode(node, "TSAsExpression");
      this.reScan_lt_gt();
      return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec);
    }

    return super.parseExprOp(left, leftStartPos, leftStartLoc, minPrec);
  }

  checkReservedWord(word, startLoc, checkKeywords, isBinding) {}

  checkDuplicateExports() {}

  parseImport(node) {
    if (this.match(types.name) || this.match(types.star) || this.match(types.braceL)) {
      const ahead = this.lookahead();

      if (this.match(types.name) && ahead.type === types.eq) {
        return this.tsParseImportEqualsDeclaration(node);
      }

      if (this.isContextual("type") && ahead.type !== types.comma && !(ahead.type === types.name && ahead.value === "from")) {
        node.importKind = "type";
        this.next();
      }
    }

    if (!node.importKind) {
      node.importKind = "value";
    }

    const importNode = super.parseImport(node);

    if (importNode.importKind === "type" && importNode.specifiers.length > 1 && importNode.specifiers[0].type === "ImportDefaultSpecifier") {
      this.raise(importNode.start, "A type-only import can specify a default import or named bindings, but not both.");
    }

    return importNode;
  }

  parseExport(node) {
    if (this.match(types._import)) {
      this.expect(types._import);
      return this.tsParseImportEqualsDeclaration(node, true);
    } else if (this.eat(types.eq)) {
      const assign = node;
      assign.expression = this.parseExpression();
      this.semicolon();
      return this.finishNode(assign, "TSExportAssignment");
    } else if (this.eatContextual("as")) {
      const decl = node;
      this.expectContextual("namespace");
      decl.id = this.parseIdentifier();
      this.semicolon();
      return this.finishNode(decl, "TSNamespaceExportDeclaration");
    } else {
      if (this.isContextual("type") && this.lookahead().type === types.braceL) {
        this.next();
        node.exportKind = "type";
      } else {
        node.exportKind = "value";
      }

      return super.parseExport(node);
    }
  }

  isAbstractClass() {
    return this.isContextual("abstract") && this.lookahead().type === types._class;
  }

  parseExportDefaultExpression() {
    if (this.isAbstractClass()) {
      const cls = this.startNode();
      this.next();
      cls.abstract = true;
      this.parseClass(cls, true, true);
      return cls;
    }

    if (this.state.value === "interface") {
      const result = this.tsParseDeclaration(this.startNode(), this.state.value, true);
      if (result) return result;
    }

    return super.parseExportDefaultExpression();
  }

  parseStatementContent(context, topLevel) {
    if (this.state.type === types._const) {
      const ahead = this.lookahead();

      if (ahead.type === types.name && ahead.value === "enum") {
        const node = this.startNode();
        this.expect(types._const);
        this.expectContextual("enum");
        return this.tsParseEnumDeclaration(node, true);
      }
    }

    return super.parseStatementContent(context, topLevel);
  }

  parseAccessModifier() {
    return this.tsParseModifier(["public", "protected", "private"]);
  }

  parseClassMember(classBody, member, state) {
    this.tsParseModifiers(member, ["declare", "private", "public", "protected"]);

    const callParseClassMember = () => {
      super.parseClassMember(classBody, member, state);
    };

    if (member.declare) {
      this.tsInDeclareContext(callParseClassMember);
    } else {
      callParseClassMember();
    }
  }

  parseClassMemberWithIsStatic(classBody, member, state, isStatic) {
    this.tsParseModifiers(member, ["abstract", "readonly", "declare"]);
    const idx = this.tsTryParseIndexSignature(member);

    if (idx) {
      classBody.body.push(idx);

      if (member.abstract) {
        this.raise(member.start, TSErrors.IndexSignatureHasAbstract);
      }

      if (isStatic) {
        this.raise(member.start, TSErrors.IndexSignatureHasStatic);
      }

      if (member.accessibility) {
        this.raise(member.start, TSErrors.IndexSignatureHasAccessibility, member.accessibility);
      }

      if (member.declare) {
        this.raise(member.start, TSErrors.IndexSignatureHasDeclare);
      }

      return;
    }

    if (!this.state.inAbstractClass && member.abstract) {
      this.raise(member.start, TSErrors.NonAbstractClassHasAbstractMethod);
    }

    super.parseClassMemberWithIsStatic(classBody, member, state, isStatic);
  }

  parsePostMemberNameModifiers(methodOrProp) {
    const optional = this.eat(types.question);
    if (optional) methodOrProp.optional = true;

    if (methodOrProp.readonly && this.match(types.parenL)) {
      this.raise(methodOrProp.start, TSErrors.ClassMethodHasReadonly);
    }

    if (methodOrProp.declare && this.match(types.parenL)) {
      this.raise(methodOrProp.start, TSErrors.ClassMethodHasDeclare);
    }
  }

  parseExpressionStatement(node, expr) {
    const decl = expr.type === "Identifier" ? this.tsParseExpressionStatement(node, expr) : undefined;
    return decl || super.parseExpressionStatement(node, expr);
  }

  shouldParseExportDeclaration() {
    if (this.tsIsDeclarationStart()) return true;
    return super.shouldParseExportDeclaration();
  }

  parseConditional(expr, startPos, startLoc, refNeedsArrowPos) {
    if (!refNeedsArrowPos || !this.match(types.question)) {
      return super.parseConditional(expr, startPos, startLoc, refNeedsArrowPos);
    }

    const result = this.tryParse(() => super.parseConditional(expr, startPos, startLoc));

    if (!result.node) {
      refNeedsArrowPos.start = result.error.pos || this.state.start;
      return expr;
    }

    if (result.error) this.state = result.failState;
    return result.node;
  }

  parseParenItem(node, startPos, startLoc) {
    node = super.parseParenItem(node, startPos, startLoc);

    if (this.eat(types.question)) {
      node.optional = true;
      this.resetEndLocation(node);
    }

    if (this.match(types.colon)) {
      const typeCastNode = this.startNodeAt(startPos, startLoc);
      typeCastNode.expression = node;
      typeCastNode.typeAnnotation = this.tsParseTypeAnnotation();
      return this.finishNode(typeCastNode, "TSTypeCastExpression");
    }

    return node;
  }

  parseExportDeclaration(node) {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    const isDeclare = this.eatContextual("declare");

    if (isDeclare && (this.isContextual("declare") || !this.shouldParseExportDeclaration())) {
      throw this.raise(this.state.start, TSErrors.ExpectedAmbientAfterExportDeclare);
    }

    let declaration;

    if (this.match(types.name)) {
      declaration = this.tsTryParseExportDeclaration();
    }

    if (!declaration) {
      declaration = super.parseExportDeclaration(node);
    }

    if (declaration && (declaration.type === "TSInterfaceDeclaration" || declaration.type === "TSTypeAliasDeclaration" || isDeclare)) {
      node.exportKind = "type";
    }

    if (declaration && isDeclare) {
      this.resetStartLocation(declaration, startPos, startLoc);
      declaration.declare = true;
    }

    return declaration;
  }

  parseClassId(node, isStatement, optionalId) {
    if ((!isStatement || optionalId) && this.isContextual("implements")) {
      return;
    }

    super.parseClassId(node, isStatement, optionalId, node.declare ? BIND_TS_AMBIENT : BIND_CLASS);
    const typeParameters = this.tsTryParseTypeParameters();
    if (typeParameters) node.typeParameters = typeParameters;
  }

  parseClassPropertyAnnotation(node) {
    if (!node.optional && this.eat(types.bang)) {
      node.definite = true;
    }

    const type = this.tsTryParseTypeAnnotation();
    if (type) node.typeAnnotation = type;
  }

  parseClassProperty(node) {
    this.parseClassPropertyAnnotation(node);

    if (this.state.isDeclareContext && this.match(types.eq)) {
      this.raise(this.state.start, TSErrors.DeclareClassFieldHasInitializer);
    }

    return super.parseClassProperty(node);
  }

  parseClassPrivateProperty(node) {
    if (node.abstract) {
      this.raise(node.start, TSErrors.PrivateElementHasAbstract);
    }

    if (node.accessibility) {
      this.raise(node.start, TSErrors.PrivateElementHasAccessibility, node.accessibility);
    }

    this.parseClassPropertyAnnotation(node);
    return super.parseClassPrivateProperty(node);
  }

  pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper) {
    const typeParameters = this.tsTryParseTypeParameters();

    if (typeParameters && isConstructor) {
      this.raise(typeParameters.start, TSErrors.ConstructorHasTypeParameters);
    }

    if (typeParameters) method.typeParameters = typeParameters;
    super.pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper);
  }

  pushClassPrivateMethod(classBody, method, isGenerator, isAsync) {
    const typeParameters = this.tsTryParseTypeParameters();
    if (typeParameters) method.typeParameters = typeParameters;
    super.pushClassPrivateMethod(classBody, method, isGenerator, isAsync);
  }

  parseClassSuper(node) {
    super.parseClassSuper(node);

    if (node.superClass && this.isRelational("<")) {
      node.superTypeParameters = this.tsParseTypeArguments();
    }

    if (this.eatContextual("implements")) {
      node.implements = this.tsParseHeritageClause("implements");
    }
  }

  parseObjPropValue(prop, ...args) {
    const typeParameters = this.tsTryParseTypeParameters();
    if (typeParameters) prop.typeParameters = typeParameters;
    super.parseObjPropValue(prop, ...args);
  }

  parseFunctionParams(node, allowModifiers) {
    const typeParameters = this.tsTryParseTypeParameters();
    if (typeParameters) node.typeParameters = typeParameters;
    super.parseFunctionParams(node, allowModifiers);
  }

  parseVarId(decl, kind) {
    super.parseVarId(decl, kind);

    if (decl.id.type === "Identifier" && this.eat(types.bang)) {
      decl.definite = true;
    }

    const type = this.tsTryParseTypeAnnotation();

    if (type) {
      decl.id.typeAnnotation = type;
      this.resetEndLocation(decl.id);
    }
  }

  parseAsyncArrowFromCallExpression(node, call) {
    if (this.match(types.colon)) {
      node.returnType = this.tsParseTypeAnnotation();
    }

    return super.parseAsyncArrowFromCallExpression(node, call);
  }

  parseMaybeAssign(...args) {
    var _jsx, _jsx2, _typeCast, _jsx3, _typeCast2, _jsx4, _typeCast3;

    let state;
    let jsx;
    let typeCast;

    if (this.hasPlugin("jsx") && (this.match(types.jsxTagStart) || this.isRelational("<"))) {
      state = this.state.clone();
      jsx = this.tryParse(() => super.parseMaybeAssign(...args), state);
      if (!jsx.error) return jsx.node;
      const {
        context
      } = this.state;

      if (context[context.length - 1] === types$1.j_oTag) {
        context.length -= 2;
      } else if (context[context.length - 1] === types$1.j_expr) {
        context.length -= 1;
      }
    }

    if (!((_jsx = jsx) == null ? void 0 : _jsx.error) && !this.isRelational("<")) {
      return super.parseMaybeAssign(...args);
    }

    let typeParameters;
    state = state || this.state.clone();
    const arrow = this.tryParse(abort => {
      var _typeParameters;

      typeParameters = this.tsParseTypeParameters();
      const expr = super.parseMaybeAssign(...args);

      if (expr.type !== "ArrowFunctionExpression" || expr.extra && expr.extra.parenthesized) {
        abort();
      }

      if (((_typeParameters = typeParameters) == null ? void 0 : _typeParameters.params.length) !== 0) {
        this.resetStartLocationFromNode(expr, typeParameters);
      }

      expr.typeParameters = typeParameters;
      return expr;
    }, state);
    if (!arrow.error && !arrow.aborted) return arrow.node;

    if (!jsx) {
      assert(!this.hasPlugin("jsx"));
      typeCast = this.tryParse(() => super.parseMaybeAssign(...args), state);
      if (!typeCast.error) return typeCast.node;
    }

    if ((_jsx2 = jsx) == null ? void 0 : _jsx2.node) {
      this.state = jsx.failState;
      return jsx.node;
    }

    if (arrow.node) {
      this.state = arrow.failState;
      return arrow.node;
    }

    if ((_typeCast = typeCast) == null ? void 0 : _typeCast.node) {
      this.state = typeCast.failState;
      return typeCast.node;
    }

    if ((_jsx3 = jsx) == null ? void 0 : _jsx3.thrown) throw jsx.error;
    if (arrow.thrown) throw arrow.error;
    if ((_typeCast2 = typeCast) == null ? void 0 : _typeCast2.thrown) throw typeCast.error;
    throw ((_jsx4 = jsx) == null ? void 0 : _jsx4.error) || arrow.error || ((_typeCast3 = typeCast) == null ? void 0 : _typeCast3.error);
  }

  parseMaybeUnary(refExpressionErrors) {
    if (!this.hasPlugin("jsx") && this.isRelational("<")) {
      return this.tsParseTypeAssertion();
    } else {
      return super.parseMaybeUnary(refExpressionErrors);
    }
  }

  parseArrow(node) {
    if (this.match(types.colon)) {
      const result = this.tryParse(abort => {
        const returnType = this.tsParseTypeOrTypePredicateAnnotation(types.colon);
        if (this.canInsertSemicolon() || !this.match(types.arrow)) abort();
        return returnType;
      });
      if (result.aborted) return;

      if (!result.thrown) {
        if (result.error) this.state = result.failState;
        node.returnType = result.node;
      }
    }

    return super.parseArrow(node);
  }

  parseAssignableListItemTypes(param) {
    if (this.eat(types.question)) {
      if (param.type !== "Identifier" && !this.state.isDeclareContext && !this.state.inType) {
        this.raise(param.start, TSErrors.PatternIsOptional);
      }

      param.optional = true;
    }

    const type = this.tsTryParseTypeAnnotation();
    if (type) param.typeAnnotation = type;
    this.resetEndLocation(param);
    return param;
  }

  toAssignable(node, isLHS = false) {
    switch (node.type) {
      case "TSTypeCastExpression":
        return super.toAssignable(this.typeCastToParameter(node), isLHS);

      case "TSParameterProperty":
        return super.toAssignable(node, isLHS);

      case "TSAsExpression":
      case "TSNonNullExpression":
      case "TSTypeAssertion":
        node.expression = this.toAssignable(node.expression, isLHS);
        return node;

      default:
        return super.toAssignable(node, isLHS);
    }
  }

  checkLVal(expr, contextDescription, ...args) {
    switch (expr.type) {
      case "TSTypeCastExpression":
        return;

      case "TSParameterProperty":
        this.checkLVal(expr.parameter, "parameter property", ...args);
        return;

      case "TSAsExpression":
      case "TSNonNullExpression":
      case "TSTypeAssertion":
        this.checkLVal(expr.expression, contextDescription, ...args);
        return;

      default:
        super.checkLVal(expr, contextDescription, ...args);
        return;
    }
  }

  parseBindingAtom() {
    switch (this.state.type) {
      case types._this:
        return this.parseIdentifier(true);

      default:
        return super.parseBindingAtom();
    }
  }

  parseMaybeDecoratorArguments(expr) {
    if (this.isRelational("<")) {
      const typeArguments = this.tsParseTypeArguments();

      if (this.match(types.parenL)) {
        const call = super.parseMaybeDecoratorArguments(expr);
        call.typeParameters = typeArguments;
        return call;
      }

      this.unexpected(this.state.start, types.parenL);
    }

    return super.parseMaybeDecoratorArguments(expr);
  }

  isClassMethod() {
    return this.isRelational("<") || super.isClassMethod();
  }

  isClassProperty() {
    return this.match(types.bang) || this.match(types.colon) || super.isClassProperty();
  }

  parseMaybeDefault(...args) {
    const node = super.parseMaybeDefault(...args);

    if (node.type === "AssignmentPattern" && node.typeAnnotation && node.right.start < node.typeAnnotation.start) {
      this.raise(node.typeAnnotation.start, TSErrors.TypeAnnotationAfterAssign);
    }

    return node;
  }

  getTokenFromCode(code) {
    if (this.state.inType && (code === 62 || code === 60)) {
      return this.finishOp(types.relational, 1);
    } else {
      return super.getTokenFromCode(code);
    }
  }

  reScan_lt_gt() {
    if (this.match(types.relational)) {
      const code = this.input.charCodeAt(this.state.start);

      if (code === 60 || code === 62) {
        this.state.pos -= 1;
        this.readToken_lt_gt(code);
      }
    }
  }

  toAssignableList(exprList) {
    for (let i = 0; i < exprList.length; i++) {
      const expr = exprList[i];
      if (!expr) continue;

      switch (expr.type) {
        case "TSTypeCastExpression":
          exprList[i] = this.typeCastToParameter(expr);
          break;

        case "TSAsExpression":
        case "TSTypeAssertion":
          if (!this.state.maybeInArrowParameters) {
            exprList[i] = this.typeCastToParameter(expr);
          } else {
            this.raise(expr.start, TSErrors.UnexpectedTypeCastInParameter);
          }

          break;
      }
    }

    return super.toAssignableList(...arguments);
  }

  typeCastToParameter(node) {
    node.expression.typeAnnotation = node.typeAnnotation;
    this.resetEndLocation(node.expression, node.typeAnnotation.end, node.typeAnnotation.loc.end);
    return node.expression;
  }

  shouldParseArrow() {
    return this.match(types.colon) || super.shouldParseArrow();
  }

  shouldParseAsyncArrow() {
    return this.match(types.colon) || super.shouldParseAsyncArrow();
  }

  canHaveLeadingDecorator() {
    return super.canHaveLeadingDecorator() || this.isAbstractClass();
  }

  jsxParseOpeningElementAfterName(node) {
    if (this.isRelational("<")) {
      const typeArguments = this.tsTryParseAndCatch(() => this.tsParseTypeArguments());
      if (typeArguments) node.typeParameters = typeArguments;
    }

    return super.jsxParseOpeningElementAfterName(node);
  }

  getGetterSetterExpectedParamCount(method) {
    const baseCount = super.getGetterSetterExpectedParamCount(method);
    const params = this.getObjectOrClassMethodParams(method);
    const firstParam = params[0];
    const hasContextParam = firstParam && firstParam.type === "Identifier" && firstParam.name === "this";
    return hasContextParam ? baseCount + 1 : baseCount;
  }

  parseCatchClauseParam() {
    const param = super.parseCatchClauseParam();
    const type = this.tsTryParseTypeAnnotation();

    if (type) {
      param.typeAnnotation = type;
      this.resetEndLocation(param);
    }

    return param;
  }

  tsInDeclareContext(cb) {
    const oldIsDeclareContext = this.state.isDeclareContext;
    this.state.isDeclareContext = true;

    try {
      return cb();
    } finally {
      this.state.isDeclareContext = oldIsDeclareContext;
    }
  }

  parseClass(node, ...args) {
    const oldInAbstractClass = this.state.inAbstractClass;
    this.state.inAbstractClass = !!node.abstract;

    try {
      return super.parseClass(node, ...args);
    } finally {
      this.state.inAbstractClass = oldInAbstractClass;
    }
  }

  tsParseAbstractDeclaration(node) {
    if (this.match(types._class)) {
      node.abstract = true;
      return this.parseClass(node, true, false);
    } else if (this.isContextual("interface")) {
      if (!this.hasFollowingLineBreak()) {
        node.abstract = true;
        this.raise(node.start, TSErrors.NonClassMethodPropertyHasAbstractModifer);
        this.next();
        return this.tsParseInterfaceDeclaration(node);
      }
    } else {
      this.unexpected(null, types._class);
    }
  }

});

types.placeholder = new TokenType("%%", {
  startsExpr: true
});
var placeholders = (superClass => class extends superClass {
  parsePlaceholder(expectedNode) {
    if (this.match(types.placeholder)) {
      const node = this.startNode();
      this.next();
      this.assertNoSpace("Unexpected space in placeholder.");
      node.name = super.parseIdentifier(true);
      this.assertNoSpace("Unexpected space in placeholder.");
      this.expect(types.placeholder);
      return this.finishPlaceholder(node, expectedNode);
    }
  }

  finishPlaceholder(node, expectedNode) {
    const isFinished = !!(node.expectedNode && node.type === "Placeholder");
    node.expectedNode = expectedNode;
    return isFinished ? node : this.finishNode(node, "Placeholder");
  }

  getTokenFromCode(code) {
    if (code === 37 && this.input.charCodeAt(this.state.pos + 1) === 37) {
      return this.finishOp(types.placeholder, 2);
    }

    return super.getTokenFromCode(...arguments);
  }

  parseExprAtom() {
    return this.parsePlaceholder("Expression") || super.parseExprAtom(...arguments);
  }

  parseIdentifier() {
    return this.parsePlaceholder("Identifier") || super.parseIdentifier(...arguments);
  }

  checkReservedWord(word) {
    if (word !== undefined) super.checkReservedWord(...arguments);
  }

  parseBindingAtom() {
    return this.parsePlaceholder("Pattern") || super.parseBindingAtom(...arguments);
  }

  checkLVal(expr) {
    if (expr.type !== "Placeholder") super.checkLVal(...arguments);
  }

  toAssignable(node) {
    if (node && node.type === "Placeholder" && node.expectedNode === "Expression") {
      node.expectedNode = "Pattern";
      return node;
    }

    return super.toAssignable(...arguments);
  }

  isLet(context) {
    if (super.isLet(context)) {
      return true;
    }

    if (!this.isContextual("let")) {
      return false;
    }

    if (context) return false;
    const nextToken = this.lookahead();

    if (nextToken.type === types.placeholder) {
      return true;
    }

    return false;
  }

  verifyBreakContinue(node) {
    if (node.label && node.label.type === "Placeholder") return;
    super.verifyBreakContinue(...arguments);
  }

  parseExpressionStatement(node, expr) {
    if (expr.type !== "Placeholder" || expr.extra && expr.extra.parenthesized) {
      return super.parseExpressionStatement(...arguments);
    }

    if (this.match(types.colon)) {
      const stmt = node;
      stmt.label = this.finishPlaceholder(expr, "Identifier");
      this.next();
      stmt.body = this.parseStatement("label");
      return this.finishNode(stmt, "LabeledStatement");
    }

    this.semicolon();
    node.name = expr.name;
    return this.finishPlaceholder(node, "Statement");
  }

  parseBlock() {
    return this.parsePlaceholder("BlockStatement") || super.parseBlock(...arguments);
  }

  parseFunctionId() {
    return this.parsePlaceholder("Identifier") || super.parseFunctionId(...arguments);
  }

  parseClass(node, isStatement, optionalId) {
    const type = isStatement ? "ClassDeclaration" : "ClassExpression";
    this.next();
    this.takeDecorators(node);
    const oldStrict = this.state.strict;
    const placeholder = this.parsePlaceholder("Identifier");

    if (placeholder) {
      if (this.match(types._extends) || this.match(types.placeholder) || this.match(types.braceL)) {
        node.id = placeholder;
      } else if (optionalId || !isStatement) {
        node.id = null;
        node.body = this.finishPlaceholder(placeholder, "ClassBody");
        return this.finishNode(node, type);
      } else {
        this.unexpected(null, "A class name is required");
      }
    } else {
      this.parseClassId(node, isStatement, optionalId);
    }

    this.parseClassSuper(node);
    node.body = this.parsePlaceholder("ClassBody") || this.parseClassBody(!!node.superClass, oldStrict);
    return this.finishNode(node, type);
  }

  parseExport(node) {
    const placeholder = this.parsePlaceholder("Identifier");
    if (!placeholder) return super.parseExport(...arguments);

    if (!this.isContextual("from") && !this.match(types.comma)) {
      node.specifiers = [];
      node.source = null;
      node.declaration = this.finishPlaceholder(placeholder, "Declaration");
      return this.finishNode(node, "ExportNamedDeclaration");
    }

    this.expectPlugin("exportDefaultFrom");
    const specifier = this.startNode();
    specifier.exported = placeholder;
    node.specifiers = [this.finishNode(specifier, "ExportDefaultSpecifier")];
    return super.parseExport(node);
  }

  isExportDefaultSpecifier() {
    if (this.match(types._default)) {
      const next = this.nextTokenStart();

      if (this.isUnparsedContextual(next, "from")) {
        if (this.input.startsWith(types.placeholder.label, this.nextTokenStartSince(next + 4))) {
          return true;
        }
      }
    }

    return super.isExportDefaultSpecifier();
  }

  maybeParseExportDefaultSpecifier(node) {
    if (node.specifiers && node.specifiers.length > 0) {
      return true;
    }

    return super.maybeParseExportDefaultSpecifier(...arguments);
  }

  checkExport(node) {
    const {
      specifiers
    } = node;

    if (specifiers == null ? void 0 : specifiers.length) {
      node.specifiers = specifiers.filter(node => node.exported.type === "Placeholder");
    }

    super.checkExport(node);
    node.specifiers = specifiers;
  }

  parseImport(node) {
    const placeholder = this.parsePlaceholder("Identifier");
    if (!placeholder) return super.parseImport(...arguments);
    node.specifiers = [];

    if (!this.isContextual("from") && !this.match(types.comma)) {
      node.source = this.finishPlaceholder(placeholder, "StringLiteral");
      this.semicolon();
      return this.finishNode(node, "ImportDeclaration");
    }

    const specifier = this.startNodeAtNode(placeholder);
    specifier.local = placeholder;
    this.finishNode(specifier, "ImportDefaultSpecifier");
    node.specifiers.push(specifier);

    if (this.eat(types.comma)) {
      const hasStarImport = this.maybeParseStarImportSpecifier(node);
      if (!hasStarImport) this.parseNamedImportSpecifiers(node);
    }

    this.expectContextual("from");
    node.source = this.parseImportSource();
    this.semicolon();
    return this.finishNode(node, "ImportDeclaration");
  }

  parseImportSource() {
    return this.parsePlaceholder("StringLiteral") || super.parseImportSource(...arguments);
  }

});

var v8intrinsic = (superClass => class extends superClass {
  parseV8Intrinsic() {
    if (this.match(types.modulo)) {
      const v8IntrinsicStart = this.state.start;
      const node = this.startNode();
      this.eat(types.modulo);

      if (this.match(types.name)) {
        const name = this.parseIdentifierName(this.state.start);
        const identifier = this.createIdentifier(node, name);
        identifier.type = "V8IntrinsicIdentifier";

        if (this.match(types.parenL)) {
          return identifier;
        }
      }

      this.unexpected(v8IntrinsicStart);
    }
  }

  parseExprAtom() {
    return this.parseV8Intrinsic() || super.parseExprAtom(...arguments);
  }

});

function hasPlugin(plugins, name) {
  return plugins.some(plugin => {
    if (Array.isArray(plugin)) {
      return plugin[0] === name;
    } else {
      return plugin === name;
    }
  });
}
function getPluginOption(plugins, name, option) {
  const plugin = plugins.find(plugin => {
    if (Array.isArray(plugin)) {
      return plugin[0] === name;
    } else {
      return plugin === name;
    }
  });

  if (plugin && Array.isArray(plugin)) {
    return plugin[1][option];
  }

  return null;
}
const PIPELINE_PROPOSALS = ["minimal", "smart", "fsharp"];
const RECORD_AND_TUPLE_SYNTAX_TYPES = ["hash", "bar"];
function validatePlugins(plugins) {
  if (hasPlugin(plugins, "decorators")) {
    if (hasPlugin(plugins, "decorators-legacy")) {
      throw new Error("Cannot use the decorators and decorators-legacy plugin together");
    }

    const decoratorsBeforeExport = getPluginOption(plugins, "decorators", "decoratorsBeforeExport");

    if (decoratorsBeforeExport == null) {
      throw new Error("The 'decorators' plugin requires a 'decoratorsBeforeExport' option," + " whose value must be a boolean. If you are migrating from" + " Babylon/Babel 6 or want to use the old decorators proposal, you" + " should use the 'decorators-legacy' plugin instead of 'decorators'.");
    } else if (typeof decoratorsBeforeExport !== "boolean") {
      throw new Error("'decoratorsBeforeExport' must be a boolean.");
    }
  }

  if (hasPlugin(plugins, "flow") && hasPlugin(plugins, "typescript")) {
    throw new Error("Cannot combine flow and typescript plugins.");
  }

  if (hasPlugin(plugins, "placeholders") && hasPlugin(plugins, "v8intrinsic")) {
    throw new Error("Cannot combine placeholders and v8intrinsic plugins.");
  }

  if (hasPlugin(plugins, "pipelineOperator") && !PIPELINE_PROPOSALS.includes(getPluginOption(plugins, "pipelineOperator", "proposal"))) {
    throw new Error("'pipelineOperator' requires 'proposal' option whose value should be one of: " + PIPELINE_PROPOSALS.map(p => `'${p}'`).join(", "));
  }

  if (hasPlugin(plugins, "moduleAttributes")) {
    if (hasPlugin(plugins, "importAssertions")) {
      throw new Error("Cannot combine importAssertions and moduleAttributes plugins.");
    }

    const moduleAttributesVerionPluginOption = getPluginOption(plugins, "moduleAttributes", "version");

    if (moduleAttributesVerionPluginOption !== "may-2020") {
      throw new Error("The 'moduleAttributes' plugin requires a 'version' option," + " representing the last proposal update. Currently, the" + " only supported value is 'may-2020'.");
    }
  }

  if (hasPlugin(plugins, "recordAndTuple") && !RECORD_AND_TUPLE_SYNTAX_TYPES.includes(getPluginOption(plugins, "recordAndTuple", "syntaxType"))) {
    throw new Error("'recordAndTuple' requires 'syntaxType' option whose value should be one of: " + RECORD_AND_TUPLE_SYNTAX_TYPES.map(p => `'${p}'`).join(", "));
  }
}
const mixinPlugins = {
  estree,
  jsx,
  flow,
  typescript,
  v8intrinsic,
  placeholders
};
const mixinPluginNames = Object.keys(mixinPlugins);

const defaultOptions = {
  sourceType: "script",
  sourceFilename: undefined,
  startLine: 1,
  allowAwaitOutsideFunction: false,
  allowReturnOutsideFunction: false,
  allowImportExportEverywhere: false,
  allowSuperOutsideMethod: false,
  allowUndeclaredExports: false,
  plugins: [],
  strictMode: null,
  ranges: false,
  tokens: false,
  createParenthesizedExpressions: false,
  errorRecovery: false
};
function getOptions(opts) {
  const options = {};

  for (let _i = 0, _Object$keys = Object.keys(defaultOptions); _i < _Object$keys.length; _i++) {
    const key = _Object$keys[_i];
    options[key] = opts && opts[key] != null ? opts[key] : defaultOptions[key];
  }

  return options;
}

class State {
  constructor() {
    this.strict = void 0;
    this.curLine = void 0;
    this.startLoc = void 0;
    this.endLoc = void 0;
    this.errors = [];
    this.potentialArrowAt = -1;
    this.noArrowAt = [];
    this.noArrowParamsConversionAt = [];
    this.maybeInArrowParameters = false;
    this.inPipeline = false;
    this.inType = false;
    this.noAnonFunctionType = false;
    this.inPropertyName = false;
    this.hasFlowComment = false;
    this.isIterator = false;
    this.isDeclareContext = false;
    this.inAbstractClass = false;
    this.topicContext = {
      maxNumOfResolvableTopics: 0,
      maxTopicIndex: null
    };
    this.soloAwait = false;
    this.inFSharpPipelineDirectBody = false;
    this.labels = [];
    this.decoratorStack = [[]];
    this.comments = [];
    this.trailingComments = [];
    this.leadingComments = [];
    this.commentStack = [];
    this.commentPreviousNode = null;
    this.pos = 0;
    this.lineStart = 0;
    this.type = types.eof;
    this.value = null;
    this.start = 0;
    this.end = 0;
    this.lastTokEndLoc = null;
    this.lastTokStartLoc = null;
    this.lastTokStart = 0;
    this.lastTokEnd = 0;
    this.context = [types$1.braceStatement];
    this.exprAllowed = true;
    this.containsEsc = false;
    this.strictErrors = new Map();
    this.exportedIdentifiers = [];
    this.tokensLength = 0;
  }

  init(options) {
    this.strict = options.strictMode === false ? false : options.sourceType === "module";
    this.curLine = options.startLine;
    this.startLoc = this.endLoc = this.curPosition();
  }

  curPosition() {
    return new Position(this.curLine, this.pos - this.lineStart);
  }

  clone(skipArrays) {
    const state = new State();
    const keys = Object.keys(this);

    for (let i = 0, length = keys.length; i < length; i++) {
      const key = keys[i];
      let val = this[key];

      if (!skipArrays && Array.isArray(val)) {
        val = val.slice();
      }

      state[key] = val;
    }

    return state;
  }

}

var _isDigit = function isDigit(code) {
  return code >= 48 && code <= 57;
};
const VALID_REGEX_FLAGS = new Set(["g", "m", "s", "i", "y", "u"]);
const forbiddenNumericSeparatorSiblings = {
  decBinOct: [46, 66, 69, 79, 95, 98, 101, 111],
  hex: [46, 88, 95, 120]
};
const allowedNumericSeparatorSiblings = {};
allowedNumericSeparatorSiblings.bin = [48, 49];
allowedNumericSeparatorSiblings.oct = [...allowedNumericSeparatorSiblings.bin, 50, 51, 52, 53, 54, 55];
allowedNumericSeparatorSiblings.dec = [...allowedNumericSeparatorSiblings.oct, 56, 57];
allowedNumericSeparatorSiblings.hex = [...allowedNumericSeparatorSiblings.dec, 65, 66, 67, 68, 69, 70, 97, 98, 99, 100, 101, 102];
class Token {
  constructor(state) {
    this.type = state.type;
    this.value = state.value;
    this.start = state.start;
    this.end = state.end;
    this.loc = new SourceLocation(state.startLoc, state.endLoc);
  }

}
class Tokenizer extends ParserError {
  constructor(options, input) {
    super();
    this.isLookahead = void 0;
    this.tokens = [];
    this.state = new State();
    this.state.init(options);
    this.input = input;
    this.length = input.length;
    this.isLookahead = false;
  }

  pushToken(token) {
    this.tokens.length = this.state.tokensLength;
    this.tokens.push(token);
    ++this.state.tokensLength;
  }

  next() {
    if (!this.isLookahead) {
      this.checkKeywordEscapes();

      if (this.options.tokens) {
        this.pushToken(new Token(this.state));
      }
    }

    this.state.lastTokEnd = this.state.end;
    this.state.lastTokStart = this.state.start;
    this.state.lastTokEndLoc = this.state.endLoc;
    this.state.lastTokStartLoc = this.state.startLoc;
    this.nextToken();
  }

  eat(type) {
    if (this.match(type)) {
      this.next();
      return true;
    } else {
      return false;
    }
  }

  match(type) {
    return this.state.type === type;
  }

  lookahead() {
    const old = this.state;
    this.state = old.clone(true);
    this.isLookahead = true;
    this.next();
    this.isLookahead = false;
    const curr = this.state;
    this.state = old;
    return curr;
  }

  nextTokenStart() {
    return this.nextTokenStartSince(this.state.pos);
  }

  nextTokenStartSince(pos) {
    skipWhiteSpace.lastIndex = pos;
    const skip = skipWhiteSpace.exec(this.input);
    return pos + skip[0].length;
  }

  lookaheadCharCode() {
    return this.input.charCodeAt(this.nextTokenStart());
  }

  setStrict(strict) {
    this.state.strict = strict;

    if (strict) {
      this.state.strictErrors.forEach((message, pos) => this.raise(pos, message));
      this.state.strictErrors.clear();
    }
  }

  curContext() {
    return this.state.context[this.state.context.length - 1];
  }

  nextToken() {
    const curContext = this.curContext();
    if (!(curContext == null ? void 0 : curContext.preserveSpace)) this.skipSpace();
    this.state.start = this.state.pos;
    this.state.startLoc = this.state.curPosition();

    if (this.state.pos >= this.length) {
      this.finishToken(types.eof);
      return;
    }

    const override = curContext == null ? void 0 : curContext.override;

    if (override) {
      override(this);
    } else {
      this.getTokenFromCode(this.input.codePointAt(this.state.pos));
    }
  }

  pushComment(block, text, start, end, startLoc, endLoc) {
    const comment = {
      type: block ? "CommentBlock" : "CommentLine",
      value: text,
      start: start,
      end: end,
      loc: new SourceLocation(startLoc, endLoc)
    };
    if (this.options.tokens) this.pushToken(comment);
    this.state.comments.push(comment);
    this.addComment(comment);
  }

  skipBlockComment() {
    const startLoc = this.state.curPosition();
    const start = this.state.pos;
    const end = this.input.indexOf("*/", this.state.pos + 2);
    if (end === -1) throw this.raise(start, ErrorMessages.UnterminatedComment);
    this.state.pos = end + 2;
    lineBreakG.lastIndex = start;
    let match;

    while ((match = lineBreakG.exec(this.input)) && match.index < this.state.pos) {
      ++this.state.curLine;
      this.state.lineStart = match.index + match[0].length;
    }

    if (this.isLookahead) return;
    this.pushComment(true, this.input.slice(start + 2, end), start, this.state.pos, startLoc, this.state.curPosition());
  }

  skipLineComment(startSkip) {
    const start = this.state.pos;
    const startLoc = this.state.curPosition();
    let ch = this.input.charCodeAt(this.state.pos += startSkip);

    if (this.state.pos < this.length) {
      while (!isNewLine(ch) && ++this.state.pos < this.length) {
        ch = this.input.charCodeAt(this.state.pos);
      }
    }

    if (this.isLookahead) return;
    this.pushComment(false, this.input.slice(start + startSkip, this.state.pos), start, this.state.pos, startLoc, this.state.curPosition());
  }

  skipSpace() {
    loop: while (this.state.pos < this.length) {
      const ch = this.input.charCodeAt(this.state.pos);

      switch (ch) {
        case 32:
        case 160:
        case 9:
          ++this.state.pos;
          break;

        case 13:
          if (this.input.charCodeAt(this.state.pos + 1) === 10) {
            ++this.state.pos;
          }

        case 10:
        case 8232:
        case 8233:
          ++this.state.pos;
          ++this.state.curLine;
          this.state.lineStart = this.state.pos;
          break;

        case 47:
          switch (this.input.charCodeAt(this.state.pos + 1)) {
            case 42:
              this.skipBlockComment();
              break;

            case 47:
              this.skipLineComment(2);
              break;

            default:
              break loop;
          }

          break;

        default:
          if (isWhitespace(ch)) {
            ++this.state.pos;
          } else {
            break loop;
          }

      }
    }
  }

  finishToken(type, val) {
    this.state.end = this.state.pos;
    this.state.endLoc = this.state.curPosition();
    const prevType = this.state.type;
    this.state.type = type;
    this.state.value = val;
    if (!this.isLookahead) this.updateContext(prevType);
  }

  readToken_numberSign() {
    if (this.state.pos === 0 && this.readToken_interpreter()) {
      return;
    }

    const nextPos = this.state.pos + 1;
    const next = this.input.charCodeAt(nextPos);

    if (next >= 48 && next <= 57) {
      throw this.raise(this.state.pos, ErrorMessages.UnexpectedDigitAfterHash);
    }

    if (next === 123 || next === 91 && this.hasPlugin("recordAndTuple")) {
      this.expectPlugin("recordAndTuple");

      if (this.getPluginOption("recordAndTuple", "syntaxType") !== "hash") {
        throw this.raise(this.state.pos, next === 123 ? ErrorMessages.RecordExpressionHashIncorrectStartSyntaxType : ErrorMessages.TupleExpressionHashIncorrectStartSyntaxType);
      }

      if (next === 123) {
        this.finishToken(types.braceHashL);
      } else {
        this.finishToken(types.bracketHashL);
      }

      this.state.pos += 2;
    } else {
      this.finishOp(types.hash, 1);
    }
  }

  readToken_dot() {
    const next = this.input.charCodeAt(this.state.pos + 1);

    if (next >= 48 && next <= 57) {
      this.readNumber(true);
      return;
    }

    if (next === 46 && this.input.charCodeAt(this.state.pos + 2) === 46) {
      this.state.pos += 3;
      this.finishToken(types.ellipsis);
    } else {
      ++this.state.pos;
      this.finishToken(types.dot);
    }
  }

  readToken_slash() {
    if (this.state.exprAllowed && !this.state.inType) {
      ++this.state.pos;
      this.readRegexp();
      return;
    }

    const next = this.input.charCodeAt(this.state.pos + 1);

    if (next === 61) {
      this.finishOp(types.assign, 2);
    } else {
      this.finishOp(types.slash, 1);
    }
  }

  readToken_interpreter() {
    if (this.state.pos !== 0 || this.length < 2) return false;
    let ch = this.input.charCodeAt(this.state.pos + 1);
    if (ch !== 33) return false;
    const start = this.state.pos;
    this.state.pos += 1;

    while (!isNewLine(ch) && ++this.state.pos < this.length) {
      ch = this.input.charCodeAt(this.state.pos);
    }

    const value = this.input.slice(start + 2, this.state.pos);
    this.finishToken(types.interpreterDirective, value);
    return true;
  }

  readToken_mult_modulo(code) {
    let type = code === 42 ? types.star : types.modulo;
    let width = 1;
    let next = this.input.charCodeAt(this.state.pos + 1);
    const exprAllowed = this.state.exprAllowed;

    if (code === 42 && next === 42) {
      width++;
      next = this.input.charCodeAt(this.state.pos + 2);
      type = types.exponent;
    }

    if (next === 61 && !exprAllowed) {
      width++;
      type = types.assign;
    }

    this.finishOp(type, width);
  }

  readToken_pipe_amp(code) {
    const next = this.input.charCodeAt(this.state.pos + 1);

    if (next === code) {
      if (this.input.charCodeAt(this.state.pos + 2) === 61) {
        this.finishOp(types.assign, 3);
      } else {
        this.finishOp(code === 124 ? types.logicalOR : types.logicalAND, 2);
      }

      return;
    }

    if (code === 124) {
      if (next === 62) {
        this.finishOp(types.pipeline, 2);
        return;
      }

      if (this.hasPlugin("recordAndTuple") && next === 125) {
        if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar") {
          throw this.raise(this.state.pos, ErrorMessages.RecordExpressionBarIncorrectEndSyntaxType);
        }

        this.finishOp(types.braceBarR, 2);
        return;
      }

      if (this.hasPlugin("recordAndTuple") && next === 93) {
        if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar") {
          throw this.raise(this.state.pos, ErrorMessages.TupleExpressionBarIncorrectEndSyntaxType);
        }

        this.finishOp(types.bracketBarR, 2);
        return;
      }
    }

    if (next === 61) {
      this.finishOp(types.assign, 2);
      return;
    }

    this.finishOp(code === 124 ? types.bitwiseOR : types.bitwiseAND, 1);
  }

  readToken_caret() {
    const next = this.input.charCodeAt(this.state.pos + 1);

    if (next === 61) {
      this.finishOp(types.assign, 2);
    } else {
      this.finishOp(types.bitwiseXOR, 1);
    }
  }

  readToken_plus_min(code) {
    const next = this.input.charCodeAt(this.state.pos + 1);

    if (next === code) {
      if (next === 45 && !this.inModule && this.input.charCodeAt(this.state.pos + 2) === 62 && (this.state.lastTokEnd === 0 || this.hasPrecedingLineBreak())) {
        this.skipLineComment(3);
        this.skipSpace();
        this.nextToken();
        return;
      }

      this.finishOp(types.incDec, 2);
      return;
    }

    if (next === 61) {
      this.finishOp(types.assign, 2);
    } else {
      this.finishOp(types.plusMin, 1);
    }
  }

  readToken_lt_gt(code) {
    const next = this.input.charCodeAt(this.state.pos + 1);
    let size = 1;

    if (next === code) {
      size = code === 62 && this.input.charCodeAt(this.state.pos + 2) === 62 ? 3 : 2;

      if (this.input.charCodeAt(this.state.pos + size) === 61) {
        this.finishOp(types.assign, size + 1);
        return;
      }

      this.finishOp(types.bitShift, size);
      return;
    }

    if (next === 33 && code === 60 && !this.inModule && this.input.charCodeAt(this.state.pos + 2) === 45 && this.input.charCodeAt(this.state.pos + 3) === 45) {
      this.skipLineComment(4);
      this.skipSpace();
      this.nextToken();
      return;
    }

    if (next === 61) {
      size = 2;
    }

    this.finishOp(types.relational, size);
  }

  readToken_eq_excl(code) {
    const next = this.input.charCodeAt(this.state.pos + 1);

    if (next === 61) {
      this.finishOp(types.equality, this.input.charCodeAt(this.state.pos + 2) === 61 ? 3 : 2);
      return;
    }

    if (code === 61 && next === 62) {
      this.state.pos += 2;
      this.finishToken(types.arrow);
      return;
    }

    this.finishOp(code === 61 ? types.eq : types.bang, 1);
  }

  readToken_question() {
    const next = this.input.charCodeAt(this.state.pos + 1);
    const next2 = this.input.charCodeAt(this.state.pos + 2);

    if (next === 63) {
      if (next2 === 61) {
        this.finishOp(types.assign, 3);
      } else {
        this.finishOp(types.nullishCoalescing, 2);
      }
    } else if (next === 46 && !(next2 >= 48 && next2 <= 57)) {
      this.state.pos += 2;
      this.finishToken(types.questionDot);
    } else {
      ++this.state.pos;
      this.finishToken(types.question);
    }
  }

  getTokenFromCode(code) {
    switch (code) {
      case 46:
        this.readToken_dot();
        return;

      case 40:
        ++this.state.pos;
        this.finishToken(types.parenL);
        return;

      case 41:
        ++this.state.pos;
        this.finishToken(types.parenR);
        return;

      case 59:
        ++this.state.pos;
        this.finishToken(types.semi);
        return;

      case 44:
        ++this.state.pos;
        this.finishToken(types.comma);
        return;

      case 91:
        if (this.hasPlugin("recordAndTuple") && this.input.charCodeAt(this.state.pos + 1) === 124) {
          if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar") {
            throw this.raise(this.state.pos, ErrorMessages.TupleExpressionBarIncorrectStartSyntaxType);
          }

          this.finishToken(types.bracketBarL);
          this.state.pos += 2;
        } else {
          ++this.state.pos;
          this.finishToken(types.bracketL);
        }

        return;

      case 93:
        ++this.state.pos;
        this.finishToken(types.bracketR);
        return;

      case 123:
        if (this.hasPlugin("recordAndTuple") && this.input.charCodeAt(this.state.pos + 1) === 124) {
          if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar") {
            throw this.raise(this.state.pos, ErrorMessages.RecordExpressionBarIncorrectStartSyntaxType);
          }

          this.finishToken(types.braceBarL);
          this.state.pos += 2;
        } else {
          ++this.state.pos;
          this.finishToken(types.braceL);
        }

        return;

      case 125:
        ++this.state.pos;
        this.finishToken(types.braceR);
        return;

      case 58:
        if (this.hasPlugin("functionBind") && this.input.charCodeAt(this.state.pos + 1) === 58) {
          this.finishOp(types.doubleColon, 2);
        } else {
          ++this.state.pos;
          this.finishToken(types.colon);
        }

        return;

      case 63:
        this.readToken_question();
        return;

      case 96:
        ++this.state.pos;
        this.finishToken(types.backQuote);
        return;

      case 48:
        {
          const next = this.input.charCodeAt(this.state.pos + 1);

          if (next === 120 || next === 88) {
            this.readRadixNumber(16);
            return;
          }

          if (next === 111 || next === 79) {
            this.readRadixNumber(8);
            return;
          }

          if (next === 98 || next === 66) {
            this.readRadixNumber(2);
            return;
          }
        }

      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        this.readNumber(false);
        return;

      case 34:
      case 39:
        this.readString(code);
        return;

      case 47:
        this.readToken_slash();
        return;

      case 37:
      case 42:
        this.readToken_mult_modulo(code);
        return;

      case 124:
      case 38:
        this.readToken_pipe_amp(code);
        return;

      case 94:
        this.readToken_caret();
        return;

      case 43:
      case 45:
        this.readToken_plus_min(code);
        return;

      case 60:
      case 62:
        this.readToken_lt_gt(code);
        return;

      case 61:
      case 33:
        this.readToken_eq_excl(code);
        return;

      case 126:
        this.finishOp(types.tilde, 1);
        return;

      case 64:
        ++this.state.pos;
        this.finishToken(types.at);
        return;

      case 35:
        this.readToken_numberSign();
        return;

      case 92:
        this.readWord();
        return;

      default:
        if (isIdentifierStart(code)) {
          this.readWord();
          return;
        }

    }

    throw this.raise(this.state.pos, ErrorMessages.InvalidOrUnexpectedToken, String.fromCodePoint(code));
  }

  finishOp(type, size) {
    const str = this.input.slice(this.state.pos, this.state.pos + size);
    this.state.pos += size;
    this.finishToken(type, str);
  }

  readRegexp() {
    const start = this.state.pos;
    let escaped, inClass;

    for (;;) {
      if (this.state.pos >= this.length) {
        throw this.raise(start, ErrorMessages.UnterminatedRegExp);
      }

      const ch = this.input.charAt(this.state.pos);

      if (lineBreak.test(ch)) {
        throw this.raise(start, ErrorMessages.UnterminatedRegExp);
      }

      if (escaped) {
        escaped = false;
      } else {
        if (ch === "[") {
          inClass = true;
        } else if (ch === "]" && inClass) {
          inClass = false;
        } else if (ch === "/" && !inClass) {
          break;
        }

        escaped = ch === "\\";
      }

      ++this.state.pos;
    }

    const content = this.input.slice(start, this.state.pos);
    ++this.state.pos;
    let mods = "";

    while (this.state.pos < this.length) {
      const char = this.input[this.state.pos];
      const charCode = this.input.codePointAt(this.state.pos);

      if (VALID_REGEX_FLAGS.has(char)) {
        if (mods.indexOf(char) > -1) {
          this.raise(this.state.pos + 1, ErrorMessages.DuplicateRegExpFlags);
        }
      } else if (isIdentifierChar(charCode) || charCode === 92) {
        this.raise(this.state.pos + 1, ErrorMessages.MalformedRegExpFlags);
      } else {
        break;
      }

      ++this.state.pos;
      mods += char;
    }

    this.finishToken(types.regexp, {
      pattern: content,
      flags: mods
    });
  }

  readInt(radix, len, forceLen, allowNumSeparator = true) {
    const start = this.state.pos;
    const forbiddenSiblings = radix === 16 ? forbiddenNumericSeparatorSiblings.hex : forbiddenNumericSeparatorSiblings.decBinOct;
    const allowedSiblings = radix === 16 ? allowedNumericSeparatorSiblings.hex : radix === 10 ? allowedNumericSeparatorSiblings.dec : radix === 8 ? allowedNumericSeparatorSiblings.oct : allowedNumericSeparatorSiblings.bin;
    let invalid = false;
    let total = 0;

    for (let i = 0, e = len == null ? Infinity : len; i < e; ++i) {
      const code = this.input.charCodeAt(this.state.pos);
      let val;

      if (code === 95) {
        const prev = this.input.charCodeAt(this.state.pos - 1);
        const next = this.input.charCodeAt(this.state.pos + 1);

        if (allowedSiblings.indexOf(next) === -1) {
          this.raise(this.state.pos, ErrorMessages.UnexpectedNumericSeparator);
        } else if (forbiddenSiblings.indexOf(prev) > -1 || forbiddenSiblings.indexOf(next) > -1 || Number.isNaN(next)) {
          this.raise(this.state.pos, ErrorMessages.UnexpectedNumericSeparator);
        }

        if (!allowNumSeparator) {
          this.raise(this.state.pos, ErrorMessages.NumericSeparatorInEscapeSequence);
        }

        ++this.state.pos;
        continue;
      }

      if (code >= 97) {
        val = code - 97 + 10;
      } else if (code >= 65) {
        val = code - 65 + 10;
      } else if (_isDigit(code)) {
        val = code - 48;
      } else {
        val = Infinity;
      }

      if (val >= radix) {
        if (this.options.errorRecovery && val <= 9) {
          val = 0;
          this.raise(this.state.start + i + 2, ErrorMessages.InvalidDigit, radix);
        } else if (forceLen) {
          val = 0;
          invalid = true;
        } else {
          break;
        }
      }

      ++this.state.pos;
      total = total * radix + val;
    }

    if (this.state.pos === start || len != null && this.state.pos - start !== len || invalid) {
      return null;
    }

    return total;
  }

  readRadixNumber(radix) {
    const start = this.state.pos;
    let isBigInt = false;
    this.state.pos += 2;
    const val = this.readInt(radix);

    if (val == null) {
      this.raise(this.state.start + 2, ErrorMessages.InvalidDigit, radix);
    }

    const next = this.input.charCodeAt(this.state.pos);

    if (next === 110) {
      ++this.state.pos;
      isBigInt = true;
    } else if (next === 109) {
      throw this.raise(start, ErrorMessages.InvalidDecimal);
    }

    if (isIdentifierStart(this.input.codePointAt(this.state.pos))) {
      throw this.raise(this.state.pos, ErrorMessages.NumberIdentifier);
    }

    if (isBigInt) {
      const str = this.input.slice(start, this.state.pos).replace(/[_n]/g, "");
      this.finishToken(types.bigint, str);
      return;
    }

    this.finishToken(types.num, val);
  }

  readNumber(startsWithDot) {
    const start = this.state.pos;
    let isFloat = false;
    let isBigInt = false;
    let isDecimal = false;
    let hasExponent = false;
    let isOctal = false;

    if (!startsWithDot && this.readInt(10) === null) {
      this.raise(start, ErrorMessages.InvalidNumber);
    }

    const hasLeadingZero = this.state.pos - start >= 2 && this.input.charCodeAt(start) === 48;

    if (hasLeadingZero) {
      const integer = this.input.slice(start, this.state.pos);
      this.recordStrictModeErrors(start, ErrorMessages.StrictOctalLiteral);

      if (!this.state.strict) {
        const underscorePos = integer.indexOf("_");

        if (underscorePos > 0) {
          this.raise(underscorePos + start, ErrorMessages.ZeroDigitNumericSeparator);
        }
      }

      isOctal = hasLeadingZero && !/[89]/.test(integer);
    }

    let next = this.input.charCodeAt(this.state.pos);

    if (next === 46 && !isOctal) {
      ++this.state.pos;
      this.readInt(10);
      isFloat = true;
      next = this.input.charCodeAt(this.state.pos);
    }

    if ((next === 69 || next === 101) && !isOctal) {
      next = this.input.charCodeAt(++this.state.pos);

      if (next === 43 || next === 45) {
        ++this.state.pos;
      }

      if (this.readInt(10) === null) {
        this.raise(start, ErrorMessages.InvalidOrMissingExponent);
      }

      isFloat = true;
      hasExponent = true;
      next = this.input.charCodeAt(this.state.pos);
    }

    if (next === 110) {
      if (isFloat || hasLeadingZero) {
        this.raise(start, ErrorMessages.InvalidBigIntLiteral);
      }

      ++this.state.pos;
      isBigInt = true;
    }

    if (next === 109) {
      this.expectPlugin("decimal", this.state.pos);

      if (hasExponent || hasLeadingZero) {
        this.raise(start, ErrorMessages.InvalidDecimal);
      }

      ++this.state.pos;
      isDecimal = true;
    }

    if (isIdentifierStart(this.input.codePointAt(this.state.pos))) {
      throw this.raise(this.state.pos, ErrorMessages.NumberIdentifier);
    }

    const str = this.input.slice(start, this.state.pos).replace(/[_mn]/g, "");

    if (isBigInt) {
      this.finishToken(types.bigint, str);
      return;
    }

    if (isDecimal) {
      this.finishToken(types.decimal, str);
      return;
    }

    const val = isOctal ? parseInt(str, 8) : parseFloat(str);
    this.finishToken(types.num, val);
  }

  readCodePoint(throwOnInvalid) {
    const ch = this.input.charCodeAt(this.state.pos);
    let code;

    if (ch === 123) {
      const codePos = ++this.state.pos;
      code = this.readHexChar(this.input.indexOf("}", this.state.pos) - this.state.pos, true, throwOnInvalid);
      ++this.state.pos;

      if (code !== null && code > 0x10ffff) {
        if (throwOnInvalid) {
          this.raise(codePos, ErrorMessages.InvalidCodePoint);
        } else {
          return null;
        }
      }
    } else {
      code = this.readHexChar(4, false, throwOnInvalid);
    }

    return code;
  }

  readString(quote) {
    let out = "",
        chunkStart = ++this.state.pos;

    for (;;) {
      if (this.state.pos >= this.length) {
        throw this.raise(this.state.start, ErrorMessages.UnterminatedString);
      }

      const ch = this.input.charCodeAt(this.state.pos);
      if (ch === quote) break;

      if (ch === 92) {
        out += this.input.slice(chunkStart, this.state.pos);
        out += this.readEscapedChar(false);
        chunkStart = this.state.pos;
      } else if (ch === 8232 || ch === 8233) {
        ++this.state.pos;
        ++this.state.curLine;
        this.state.lineStart = this.state.pos;
      } else if (isNewLine(ch)) {
        throw this.raise(this.state.start, ErrorMessages.UnterminatedString);
      } else {
        ++this.state.pos;
      }
    }

    out += this.input.slice(chunkStart, this.state.pos++);
    this.finishToken(types.string, out);
  }

  readTmplToken() {
    let out = "",
        chunkStart = this.state.pos,
        containsInvalid = false;

    for (;;) {
      if (this.state.pos >= this.length) {
        throw this.raise(this.state.start, ErrorMessages.UnterminatedTemplate);
      }

      const ch = this.input.charCodeAt(this.state.pos);

      if (ch === 96 || ch === 36 && this.input.charCodeAt(this.state.pos + 1) === 123) {
        if (this.state.pos === this.state.start && this.match(types.template)) {
          if (ch === 36) {
            this.state.pos += 2;
            this.finishToken(types.dollarBraceL);
            return;
          } else {
            ++this.state.pos;
            this.finishToken(types.backQuote);
            return;
          }
        }

        out += this.input.slice(chunkStart, this.state.pos);
        this.finishToken(types.template, containsInvalid ? null : out);
        return;
      }

      if (ch === 92) {
        out += this.input.slice(chunkStart, this.state.pos);
        const escaped = this.readEscapedChar(true);

        if (escaped === null) {
          containsInvalid = true;
        } else {
          out += escaped;
        }

        chunkStart = this.state.pos;
      } else if (isNewLine(ch)) {
        out += this.input.slice(chunkStart, this.state.pos);
        ++this.state.pos;

        switch (ch) {
          case 13:
            if (this.input.charCodeAt(this.state.pos) === 10) {
              ++this.state.pos;
            }

          case 10:
            out += "\n";
            break;

          default:
            out += String.fromCharCode(ch);
            break;
        }

        ++this.state.curLine;
        this.state.lineStart = this.state.pos;
        chunkStart = this.state.pos;
      } else {
        ++this.state.pos;
      }
    }
  }

  recordStrictModeErrors(pos, message) {
    if (this.state.strict && !this.state.strictErrors.has(pos)) {
      this.raise(pos, message);
    } else {
      this.state.strictErrors.set(pos, message);
    }
  }

  readEscapedChar(inTemplate) {
    const throwOnInvalid = !inTemplate;
    const ch = this.input.charCodeAt(++this.state.pos);
    ++this.state.pos;

    switch (ch) {
      case 110:
        return "\n";

      case 114:
        return "\r";

      case 120:
        {
          const code = this.readHexChar(2, false, throwOnInvalid);
          return code === null ? null : String.fromCharCode(code);
        }

      case 117:
        {
          const code = this.readCodePoint(throwOnInvalid);
          return code === null ? null : String.fromCodePoint(code);
        }

      case 116:
        return "\t";

      case 98:
        return "\b";

      case 118:
        return "\u000b";

      case 102:
        return "\f";

      case 13:
        if (this.input.charCodeAt(this.state.pos) === 10) {
          ++this.state.pos;
        }

      case 10:
        this.state.lineStart = this.state.pos;
        ++this.state.curLine;

      case 8232:
      case 8233:
        return "";

      case 56:
      case 57:
        if (inTemplate) {
          return null;
        } else {
          this.recordStrictModeErrors(this.state.pos - 1, ErrorMessages.StrictNumericEscape);
        }

      default:
        if (ch >= 48 && ch <= 55) {
          const codePos = this.state.pos - 1;
          const match = this.input.substr(this.state.pos - 1, 3).match(/^[0-7]+/);
          let octalStr = match[0];
          let octal = parseInt(octalStr, 8);

          if (octal > 255) {
            octalStr = octalStr.slice(0, -1);
            octal = parseInt(octalStr, 8);
          }

          this.state.pos += octalStr.length - 1;
          const next = this.input.charCodeAt(this.state.pos);

          if (octalStr !== "0" || next === 56 || next === 57) {
            if (inTemplate) {
              return null;
            } else {
              this.recordStrictModeErrors(codePos, ErrorMessages.StrictNumericEscape);
            }
          }

          return String.fromCharCode(octal);
        }

        return String.fromCharCode(ch);
    }
  }

  readHexChar(len, forceLen, throwOnInvalid) {
    const codePos = this.state.pos;
    const n = this.readInt(16, len, forceLen, false);

    if (n === null) {
      if (throwOnInvalid) {
        this.raise(codePos, ErrorMessages.InvalidEscapeSequence);
      } else {
        this.state.pos = codePos - 1;
      }
    }

    return n;
  }

  readWord1() {
    let word = "";
    this.state.containsEsc = false;
    const start = this.state.pos;
    let chunkStart = this.state.pos;

    while (this.state.pos < this.length) {
      const ch = this.input.codePointAt(this.state.pos);

      if (isIdentifierChar(ch)) {
        this.state.pos += ch <= 0xffff ? 1 : 2;
      } else if (this.state.isIterator && ch === 64) {
        ++this.state.pos;
      } else if (ch === 92) {
        this.state.containsEsc = true;
        word += this.input.slice(chunkStart, this.state.pos);
        const escStart = this.state.pos;
        const identifierCheck = this.state.pos === start ? isIdentifierStart : isIdentifierChar;

        if (this.input.charCodeAt(++this.state.pos) !== 117) {
          this.raise(this.state.pos, ErrorMessages.MissingUnicodeEscape);
          continue;
        }

        ++this.state.pos;
        const esc = this.readCodePoint(true);

        if (esc !== null) {
          if (!identifierCheck(esc)) {
            this.raise(escStart, ErrorMessages.EscapedCharNotAnIdentifier);
          }

          word += String.fromCodePoint(esc);
        }

        chunkStart = this.state.pos;
      } else {
        break;
      }
    }

    return word + this.input.slice(chunkStart, this.state.pos);
  }

  isIterator(word) {
    return word === "@@iterator" || word === "@@asyncIterator";
  }

  readWord() {
    const word = this.readWord1();
    const type = keywords.get(word) || types.name;

    if (this.state.isIterator && (!this.isIterator(word) || !this.state.inType)) {
      this.raise(this.state.pos, ErrorMessages.InvalidIdentifier, word);
    }

    this.finishToken(type, word);
  }

  checkKeywordEscapes() {
    const kw = this.state.type.keyword;

    if (kw && this.state.containsEsc) {
      this.raise(this.state.start, ErrorMessages.InvalidEscapedReservedWord, kw);
    }
  }

  braceIsBlock(prevType) {
    const parent = this.curContext();

    if (parent === types$1.functionExpression || parent === types$1.functionStatement) {
      return true;
    }

    if (prevType === types.colon && (parent === types$1.braceStatement || parent === types$1.braceExpression)) {
      return !parent.isExpr;
    }

    if (prevType === types._return || prevType === types.name && this.state.exprAllowed) {
      return this.hasPrecedingLineBreak();
    }

    if (prevType === types._else || prevType === types.semi || prevType === types.eof || prevType === types.parenR || prevType === types.arrow) {
      return true;
    }

    if (prevType === types.braceL) {
      return parent === types$1.braceStatement;
    }

    if (prevType === types._var || prevType === types._const || prevType === types.name) {
      return false;
    }

    if (prevType === types.relational) {
      return true;
    }

    return !this.state.exprAllowed;
  }

  updateContext(prevType) {
    const type = this.state.type;
    let update;

    if (type.keyword && (prevType === types.dot || prevType === types.questionDot)) {
      this.state.exprAllowed = false;
    } else if (update = type.updateContext) {
      update.call(this, prevType);
    } else {
      this.state.exprAllowed = type.beforeExpr;
    }
  }

}

class UtilParser extends Tokenizer {
  addExtra(node, key, val) {
    if (!node) return;
    const extra = node.extra = node.extra || {};
    extra[key] = val;
  }

  isRelational(op) {
    return this.match(types.relational) && this.state.value === op;
  }

  expectRelational(op) {
    if (this.isRelational(op)) {
      this.next();
    } else {
      this.unexpected(null, types.relational);
    }
  }

  isContextual(name) {
    return this.match(types.name) && this.state.value === name && !this.state.containsEsc;
  }

  isUnparsedContextual(nameStart, name) {
    const nameEnd = nameStart + name.length;
    return this.input.slice(nameStart, nameEnd) === name && (nameEnd === this.input.length || !isIdentifierChar(this.input.charCodeAt(nameEnd)));
  }

  isLookaheadContextual(name) {
    const next = this.nextTokenStart();
    return this.isUnparsedContextual(next, name);
  }

  eatContextual(name) {
    return this.isContextual(name) && this.eat(types.name);
  }

  expectContextual(name, message) {
    if (!this.eatContextual(name)) this.unexpected(null, message);
  }

  canInsertSemicolon() {
    return this.match(types.eof) || this.match(types.braceR) || this.hasPrecedingLineBreak();
  }

  hasPrecedingLineBreak() {
    return lineBreak.test(this.input.slice(this.state.lastTokEnd, this.state.start));
  }

  hasFollowingLineBreak() {
    return lineBreak.test(this.input.slice(this.state.end, this.nextTokenStart()));
  }

  isLineTerminator() {
    return this.eat(types.semi) || this.canInsertSemicolon();
  }

  semicolon(allowAsi = true) {
    if (allowAsi ? this.isLineTerminator() : this.eat(types.semi)) return;
    this.raise(this.state.lastTokEnd, ErrorMessages.MissingSemicolon);
  }

  expect(type, pos) {
    this.eat(type) || this.unexpected(pos, type);
  }

  assertNoSpace(message = "Unexpected space.") {
    if (this.state.start > this.state.lastTokEnd) {
      this.raise(this.state.lastTokEnd, message);
    }
  }

  unexpected(pos, messageOrType = "Unexpected token") {
    if (typeof messageOrType !== "string") {
      messageOrType = `Unexpected token, expected "${messageOrType.label}"`;
    }

    throw this.raise(pos != null ? pos : this.state.start, messageOrType);
  }

  expectPlugin(name, pos) {
    if (!this.hasPlugin(name)) {
      throw this.raiseWithData(pos != null ? pos : this.state.start, {
        missingPlugin: [name]
      }, `This experimental syntax requires enabling the parser plugin: '${name}'`);
    }

    return true;
  }

  expectOnePlugin(names, pos) {
    if (!names.some(n => this.hasPlugin(n))) {
      throw this.raiseWithData(pos != null ? pos : this.state.start, {
        missingPlugin: names
      }, `This experimental syntax requires enabling one of the following parser plugin(s): '${names.join(", ")}'`);
    }
  }

  tryParse(fn, oldState = this.state.clone()) {
    const abortSignal = {
      node: null
    };

    try {
      const node = fn((node = null) => {
        abortSignal.node = node;
        throw abortSignal;
      });

      if (this.state.errors.length > oldState.errors.length) {
        const failState = this.state;
        this.state = oldState;
        return {
          node,
          error: failState.errors[oldState.errors.length],
          thrown: false,
          aborted: false,
          failState
        };
      }

      return {
        node,
        error: null,
        thrown: false,
        aborted: false,
        failState: null
      };
    } catch (error) {
      const failState = this.state;
      this.state = oldState;

      if (error instanceof SyntaxError) {
        return {
          node: null,
          error,
          thrown: true,
          aborted: false,
          failState
        };
      }

      if (error === abortSignal) {
        return {
          node: abortSignal.node,
          error: null,
          thrown: false,
          aborted: true,
          failState
        };
      }

      throw error;
    }
  }

  checkExpressionErrors(refExpressionErrors, andThrow) {
    if (!refExpressionErrors) return false;
    const {
      shorthandAssign,
      doubleProto
    } = refExpressionErrors;
    if (!andThrow) return shorthandAssign >= 0 || doubleProto >= 0;

    if (shorthandAssign >= 0) {
      this.unexpected(shorthandAssign);
    }

    if (doubleProto >= 0) {
      this.raise(doubleProto, ErrorMessages.DuplicateProto);
    }
  }

  isLiteralPropertyName() {
    return this.match(types.name) || !!this.state.type.keyword || this.match(types.string) || this.match(types.num) || this.match(types.bigint) || this.match(types.decimal);
  }

  isPrivateName(node) {
    return node.type === "PrivateName";
  }

  getPrivateNameSV(node) {
    return node.id.name;
  }

  hasPropertyAsPrivateName(node) {
    return (node.type === "MemberExpression" || node.type === "OptionalMemberExpression") && this.isPrivateName(node.property);
  }

  isOptionalChain(node) {
    return node.type === "OptionalMemberExpression" || node.type === "OptionalCallExpression";
  }

  isObjectProperty(node) {
    return node.type === "ObjectProperty";
  }

  isObjectMethod(node) {
    return node.type === "ObjectMethod";
  }

}
class ExpressionErrors {
  constructor() {
    this.shorthandAssign = -1;
    this.doubleProto = -1;
  }

}

class Node {
  constructor(parser, pos, loc) {
    this.type = void 0;
    this.start = void 0;
    this.end = void 0;
    this.loc = void 0;
    this.range = void 0;
    this.leadingComments = void 0;
    this.trailingComments = void 0;
    this.innerComments = void 0;
    this.extra = void 0;
    this.type = "";
    this.start = pos;
    this.end = 0;
    this.loc = new SourceLocation(loc);
    if (parser == null ? void 0 : parser.options.ranges) this.range = [pos, 0];
    if (parser == null ? void 0 : parser.filename) this.loc.filename = parser.filename;
  }

  __clone() {
    const newNode = new Node();
    const keys = Object.keys(this);

    for (let i = 0, length = keys.length; i < length; i++) {
      const key = keys[i];

      if (key !== "leadingComments" && key !== "trailingComments" && key !== "innerComments") {
        newNode[key] = this[key];
      }
    }

    return newNode;
  }

}

class NodeUtils extends UtilParser {
  startNode() {
    return new Node(this, this.state.start, this.state.startLoc);
  }

  startNodeAt(pos, loc) {
    return new Node(this, pos, loc);
  }

  startNodeAtNode(type) {
    return this.startNodeAt(type.start, type.loc.start);
  }

  finishNode(node, type) {
    return this.finishNodeAt(node, type, this.state.lastTokEnd, this.state.lastTokEndLoc);
  }

  finishNodeAt(node, type, pos, loc) {

    node.type = type;
    node.end = pos;
    node.loc.end = loc;
    if (this.options.ranges) node.range[1] = pos;
    this.processComment(node);
    return node;
  }

  resetStartLocation(node, start, startLoc) {
    node.start = start;
    node.loc.start = startLoc;
    if (this.options.ranges) node.range[0] = start;
  }

  resetEndLocation(node, end = this.state.lastTokEnd, endLoc = this.state.lastTokEndLoc) {
    node.end = end;
    node.loc.end = endLoc;
    if (this.options.ranges) node.range[1] = end;
  }

  resetStartLocationFromNode(node, locationNode) {
    this.resetStartLocation(node, locationNode.start, locationNode.loc.start);
  }

}

const unwrapParenthesizedExpression = node => {
  return node.type === "ParenthesizedExpression" ? unwrapParenthesizedExpression(node.expression) : node;
};

class LValParser extends NodeUtils {
  toAssignable(node, isLHS = false) {
    var _node$extra, _node$extra3;

    let parenthesized = undefined;

    if (node.type === "ParenthesizedExpression" || ((_node$extra = node.extra) == null ? void 0 : _node$extra.parenthesized)) {
      parenthesized = unwrapParenthesizedExpression(node);

      if (isLHS) {
        if (parenthesized.type === "Identifier") {
          this.expressionScope.recordParenthesizedIdentifierError(node.start, ErrorMessages.InvalidParenthesizedAssignment);
        } else if (parenthesized.type !== "MemberExpression") {
          this.raise(node.start, ErrorMessages.InvalidParenthesizedAssignment);
        }
      } else {
        this.raise(node.start, ErrorMessages.InvalidParenthesizedAssignment);
      }
    }

    switch (node.type) {
      case "Identifier":
      case "ObjectPattern":
      case "ArrayPattern":
      case "AssignmentPattern":
        break;

      case "ObjectExpression":
        node.type = "ObjectPattern";

        for (let i = 0, length = node.properties.length, last = length - 1; i < length; i++) {
          var _node$extra2;

          const prop = node.properties[i];
          const isLast = i === last;
          this.toAssignableObjectExpressionProp(prop, isLast, isLHS);

          if (isLast && prop.type === "RestElement" && ((_node$extra2 = node.extra) == null ? void 0 : _node$extra2.trailingComma)) {
            this.raiseRestNotLast(node.extra.trailingComma);
          }
        }

        break;

      case "ObjectProperty":
        this.toAssignable(node.value, isLHS);
        break;

      case "SpreadElement":
        {
          this.checkToRestConversion(node);
          node.type = "RestElement";
          const arg = node.argument;
          this.toAssignable(arg, isLHS);
          break;
        }

      case "ArrayExpression":
        node.type = "ArrayPattern";
        this.toAssignableList(node.elements, (_node$extra3 = node.extra) == null ? void 0 : _node$extra3.trailingComma, isLHS);
        break;

      case "AssignmentExpression":
        if (node.operator !== "=") {
          this.raise(node.left.end, ErrorMessages.MissingEqInAssignment);
        }

        node.type = "AssignmentPattern";
        delete node.operator;
        this.toAssignable(node.left, isLHS);
        break;

      case "ParenthesizedExpression":
        this.toAssignable(parenthesized, isLHS);
        break;
    }

    return node;
  }

  toAssignableObjectExpressionProp(prop, isLast, isLHS) {
    if (prop.type === "ObjectMethod") {
      const error = prop.kind === "get" || prop.kind === "set" ? ErrorMessages.PatternHasAccessor : ErrorMessages.PatternHasMethod;
      this.raise(prop.key.start, error);
    } else if (prop.type === "SpreadElement" && !isLast) {
      this.raiseRestNotLast(prop.start);
    } else {
      this.toAssignable(prop, isLHS);
    }
  }

  toAssignableList(exprList, trailingCommaPos, isLHS) {
    let end = exprList.length;

    if (end) {
      const last = exprList[end - 1];

      if ((last == null ? void 0 : last.type) === "RestElement") {
        --end;
      } else if ((last == null ? void 0 : last.type) === "SpreadElement") {
        last.type = "RestElement";
        let arg = last.argument;
        this.toAssignable(arg, isLHS);
        arg = unwrapParenthesizedExpression(arg);

        if (arg.type !== "Identifier" && arg.type !== "MemberExpression" && arg.type !== "ArrayPattern" && arg.type !== "ObjectPattern") {
          this.unexpected(arg.start);
        }

        if (trailingCommaPos) {
          this.raiseTrailingCommaAfterRest(trailingCommaPos);
        }

        --end;
      }
    }

    for (let i = 0; i < end; i++) {
      const elt = exprList[i];

      if (elt) {
        this.toAssignable(elt, isLHS);

        if (elt.type === "RestElement") {
          this.raiseRestNotLast(elt.start);
        }
      }
    }

    return exprList;
  }

  toReferencedList(exprList, isParenthesizedExpr) {
    return exprList;
  }

  toReferencedListDeep(exprList, isParenthesizedExpr) {
    this.toReferencedList(exprList, isParenthesizedExpr);

    for (let _i = 0; _i < exprList.length; _i++) {
      const expr = exprList[_i];

      if ((expr == null ? void 0 : expr.type) === "ArrayExpression") {
        this.toReferencedListDeep(expr.elements);
      }
    }
  }

  parseSpread(refExpressionErrors, refNeedsArrowPos) {
    const node = this.startNode();
    this.next();
    node.argument = this.parseMaybeAssignAllowIn(refExpressionErrors, undefined, refNeedsArrowPos);
    return this.finishNode(node, "SpreadElement");
  }

  parseRestBinding() {
    const node = this.startNode();
    this.next();
    node.argument = this.parseBindingAtom();
    return this.finishNode(node, "RestElement");
  }

  parseBindingAtom() {
    switch (this.state.type) {
      case types.bracketL:
        {
          const node = this.startNode();
          this.next();
          node.elements = this.parseBindingList(types.bracketR, 93, true);
          return this.finishNode(node, "ArrayPattern");
        }

      case types.braceL:
        return this.parseObjectLike(types.braceR, true);
    }

    return this.parseIdentifier();
  }

  parseBindingList(close, closeCharCode, allowEmpty, allowModifiers) {
    const elts = [];
    let first = true;

    while (!this.eat(close)) {
      if (first) {
        first = false;
      } else {
        this.expect(types.comma);
      }

      if (allowEmpty && this.match(types.comma)) {
        elts.push(null);
      } else if (this.eat(close)) {
        break;
      } else if (this.match(types.ellipsis)) {
        elts.push(this.parseAssignableListItemTypes(this.parseRestBinding()));
        this.checkCommaAfterRest(closeCharCode);
        this.expect(close);
        break;
      } else {
        const decorators = [];

        if (this.match(types.at) && this.hasPlugin("decorators")) {
          this.raise(this.state.start, ErrorMessages.UnsupportedParameterDecorator);
        }

        while (this.match(types.at)) {
          decorators.push(this.parseDecorator());
        }

        elts.push(this.parseAssignableListItem(allowModifiers, decorators));
      }
    }

    return elts;
  }

  parseAssignableListItem(allowModifiers, decorators) {
    const left = this.parseMaybeDefault();
    this.parseAssignableListItemTypes(left);
    const elt = this.parseMaybeDefault(left.start, left.loc.start, left);

    if (decorators.length) {
      left.decorators = decorators;
    }

    return elt;
  }

  parseAssignableListItemTypes(param) {
    return param;
  }

  parseMaybeDefault(startPos, startLoc, left) {
    var _startLoc, _startPos, _left;

    startLoc = (_startLoc = startLoc) != null ? _startLoc : this.state.startLoc;
    startPos = (_startPos = startPos) != null ? _startPos : this.state.start;
    left = (_left = left) != null ? _left : this.parseBindingAtom();
    if (!this.eat(types.eq)) return left;
    const node = this.startNodeAt(startPos, startLoc);
    node.left = left;
    node.right = this.parseMaybeAssignAllowIn();
    return this.finishNode(node, "AssignmentPattern");
  }

  checkLVal(expr, contextDescription, bindingType = BIND_NONE, checkClashes, disallowLetBinding, strictModeChanged = false) {
    switch (expr.type) {
      case "Identifier":
        {
          const {
            name
          } = expr;

          if (this.state.strict && (strictModeChanged ? isStrictBindReservedWord(name, this.inModule) : isStrictBindOnlyReservedWord(name))) {
            this.raise(expr.start, bindingType === BIND_NONE ? ErrorMessages.StrictEvalArguments : ErrorMessages.StrictEvalArgumentsBinding, name);
          }

          if (checkClashes) {
            if (checkClashes.has(name)) {
              this.raise(expr.start, ErrorMessages.ParamDupe);
            } else {
              checkClashes.add(name);
            }
          }

          if (disallowLetBinding && name === "let") {
            this.raise(expr.start, ErrorMessages.LetInLexicalBinding);
          }

          if (!(bindingType & BIND_NONE)) {
            this.scope.declareName(name, bindingType, expr.start);
          }

          break;
        }

      case "MemberExpression":
        if (bindingType !== BIND_NONE) {
          this.raise(expr.start, ErrorMessages.InvalidPropertyBindingPattern);
        }

        break;

      case "ObjectPattern":
        for (let _i2 = 0, _expr$properties = expr.properties; _i2 < _expr$properties.length; _i2++) {
          let prop = _expr$properties[_i2];
          if (this.isObjectProperty(prop)) prop = prop.value;else if (this.isObjectMethod(prop)) continue;
          this.checkLVal(prop, "object destructuring pattern", bindingType, checkClashes, disallowLetBinding);
        }

        break;

      case "ArrayPattern":
        for (let _i3 = 0, _expr$elements = expr.elements; _i3 < _expr$elements.length; _i3++) {
          const elem = _expr$elements[_i3];

          if (elem) {
            this.checkLVal(elem, "array destructuring pattern", bindingType, checkClashes, disallowLetBinding);
          }
        }

        break;

      case "AssignmentPattern":
        this.checkLVal(expr.left, "assignment pattern", bindingType, checkClashes);
        break;

      case "RestElement":
        this.checkLVal(expr.argument, "rest element", bindingType, checkClashes);
        break;

      case "ParenthesizedExpression":
        this.checkLVal(expr.expression, "parenthesized expression", bindingType, checkClashes);
        break;

      default:
        {
          this.raise(expr.start, bindingType === BIND_NONE ? ErrorMessages.InvalidLhs : ErrorMessages.InvalidLhsBinding, contextDescription);
        }
    }
  }

  checkToRestConversion(node) {
    if (node.argument.type !== "Identifier" && node.argument.type !== "MemberExpression") {
      this.raise(node.argument.start, ErrorMessages.InvalidRestAssignmentPattern);
    }
  }

  checkCommaAfterRest(close) {
    if (this.match(types.comma)) {
      if (this.lookaheadCharCode() === close) {
        this.raiseTrailingCommaAfterRest(this.state.start);
      } else {
        this.raiseRestNotLast(this.state.start);
      }
    }
  }

  raiseRestNotLast(pos) {
    throw this.raise(pos, ErrorMessages.ElementAfterRest);
  }

  raiseTrailingCommaAfterRest(pos) {
    this.raise(pos, ErrorMessages.RestTrailingComma);
  }

}

const kExpression = 0,
      kMaybeArrowParameterDeclaration = 1,
      kMaybeAsyncArrowParameterDeclaration = 2,
      kParameterDeclaration = 3;

class ExpressionScope {
  constructor(type = kExpression) {
    this.type = void 0;
    this.type = type;
  }

  canBeArrowParameterDeclaration() {
    return this.type === kMaybeAsyncArrowParameterDeclaration || this.type === kMaybeArrowParameterDeclaration;
  }

  isCertainlyParameterDeclaration() {
    return this.type === kParameterDeclaration;
  }

}

class ArrowHeadParsingScope extends ExpressionScope {
  constructor(type) {
    super(type);
    this.errors = new Map();
  }

  recordDeclarationError(pos, message) {
    this.errors.set(pos, message);
  }

  clearDeclarationError(pos) {
    this.errors.delete(pos);
  }

  iterateErrors(iterator) {
    this.errors.forEach(iterator);
  }

}

class ExpressionScopeHandler {
  constructor(raise) {
    this.stack = [new ExpressionScope()];
    this.raise = raise;
  }

  enter(scope) {
    this.stack.push(scope);
  }

  exit() {
    this.stack.pop();
  }

  recordParameterInitializerError(pos, message) {
    const {
      stack
    } = this;
    let i = stack.length - 1;
    let scope = stack[i];

    while (!scope.isCertainlyParameterDeclaration()) {
      if (scope.canBeArrowParameterDeclaration()) {
        scope.recordDeclarationError(pos, message);
      } else {
        return;
      }

      scope = stack[--i];
    }

    this.raise(pos, message);
  }

  recordParenthesizedIdentifierError(pos, message) {
    const {
      stack
    } = this;
    const scope = stack[stack.length - 1];

    if (scope.isCertainlyParameterDeclaration()) {
      this.raise(pos, message);
    } else if (scope.canBeArrowParameterDeclaration()) {
      scope.recordDeclarationError(pos, message);
    } else {
      return;
    }
  }

  recordAsyncArrowParametersError(pos, message) {
    const {
      stack
    } = this;
    let i = stack.length - 1;
    let scope = stack[i];

    while (scope.canBeArrowParameterDeclaration()) {
      if (scope.type === kMaybeAsyncArrowParameterDeclaration) {
        scope.recordDeclarationError(pos, message);
      }

      scope = stack[--i];
    }
  }

  validateAsPattern() {
    const {
      stack
    } = this;
    const currentScope = stack[stack.length - 1];
    if (!currentScope.canBeArrowParameterDeclaration()) return;
    currentScope.iterateErrors((message, pos) => {
      this.raise(pos, message);
      let i = stack.length - 2;
      let scope = stack[i];

      while (scope.canBeArrowParameterDeclaration()) {
        scope.clearDeclarationError(pos);
        scope = stack[--i];
      }
    });
  }

}
function newParameterDeclarationScope() {
  return new ExpressionScope(kParameterDeclaration);
}
function newArrowHeadScope() {
  return new ArrowHeadParsingScope(kMaybeArrowParameterDeclaration);
}
function newAsyncArrowScope() {
  return new ArrowHeadParsingScope(kMaybeAsyncArrowParameterDeclaration);
}
function newExpressionScope() {
  return new ExpressionScope();
}

class ExpressionParser extends LValParser {
  checkProto(prop, isRecord, protoRef, refExpressionErrors) {
    if (prop.type === "SpreadElement" || this.isObjectMethod(prop) || prop.computed || prop.shorthand) {
      return;
    }

    const key = prop.key;
    const name = key.type === "Identifier" ? key.name : key.value;

    if (name === "__proto__") {
      if (isRecord) {
        this.raise(key.start, ErrorMessages.RecordNoProto);
        return;
      }

      if (protoRef.used) {
        if (refExpressionErrors) {
          if (refExpressionErrors.doubleProto === -1) {
            refExpressionErrors.doubleProto = key.start;
          }
        } else {
          this.raise(key.start, ErrorMessages.DuplicateProto);
        }
      }

      protoRef.used = true;
    }
  }

  shouldExitDescending(expr, potentialArrowAt) {
    return expr.type === "ArrowFunctionExpression" && expr.start === potentialArrowAt;
  }

  getExpression() {
    let paramFlags = PARAM;

    if (this.hasPlugin("topLevelAwait") && this.inModule) {
      paramFlags |= PARAM_AWAIT;
    }

    this.scope.enter(SCOPE_PROGRAM);
    this.prodParam.enter(paramFlags);
    this.nextToken();
    const expr = this.parseExpression();

    if (!this.match(types.eof)) {
      this.unexpected();
    }

    expr.comments = this.state.comments;
    expr.errors = this.state.errors;
    return expr;
  }

  parseExpression(disallowIn, refExpressionErrors) {
    if (disallowIn) {
      return this.disallowInAnd(() => this.parseExpressionBase(refExpressionErrors));
    }

    return this.allowInAnd(() => this.parseExpressionBase(refExpressionErrors));
  }

  parseExpressionBase(refExpressionErrors) {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    const expr = this.parseMaybeAssign(refExpressionErrors);

    if (this.match(types.comma)) {
      const node = this.startNodeAt(startPos, startLoc);
      node.expressions = [expr];

      while (this.eat(types.comma)) {
        node.expressions.push(this.parseMaybeAssign(refExpressionErrors));
      }

      this.toReferencedList(node.expressions);
      return this.finishNode(node, "SequenceExpression");
    }

    return expr;
  }

  parseMaybeAssignDisallowIn(refExpressionErrors, afterLeftParse, refNeedsArrowPos) {
    return this.disallowInAnd(() => this.parseMaybeAssign(refExpressionErrors, afterLeftParse, refNeedsArrowPos));
  }

  parseMaybeAssignAllowIn(refExpressionErrors, afterLeftParse, refNeedsArrowPos) {
    return this.allowInAnd(() => this.parseMaybeAssign(refExpressionErrors, afterLeftParse, refNeedsArrowPos));
  }

  parseMaybeAssign(refExpressionErrors, afterLeftParse, refNeedsArrowPos) {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;

    if (this.isContextual("yield")) {
      if (this.prodParam.hasYield) {
        this.state.exprAllowed = true;
        let left = this.parseYield();

        if (afterLeftParse) {
          left = afterLeftParse.call(this, left, startPos, startLoc);
        }

        return left;
      }
    }

    let ownExpressionErrors;

    if (refExpressionErrors) {
      ownExpressionErrors = false;
    } else {
      refExpressionErrors = new ExpressionErrors();
      ownExpressionErrors = true;
    }

    if (this.match(types.parenL) || this.match(types.name)) {
      this.state.potentialArrowAt = this.state.start;
    }

    let left = this.parseMaybeConditional(refExpressionErrors, refNeedsArrowPos);

    if (afterLeftParse) {
      left = afterLeftParse.call(this, left, startPos, startLoc);
    }

    if (this.state.type.isAssign) {
      const node = this.startNodeAt(startPos, startLoc);
      const operator = this.state.value;
      node.operator = operator;

      if (this.match(types.eq)) {
        node.left = this.toAssignable(left, true);
        refExpressionErrors.doubleProto = -1;
      } else {
        node.left = left;
      }

      if (refExpressionErrors.shorthandAssign >= node.left.start) {
        refExpressionErrors.shorthandAssign = -1;
      }

      this.checkLVal(left, "assignment expression");
      this.next();
      node.right = this.parseMaybeAssign();
      return this.finishNode(node, "AssignmentExpression");
    } else if (ownExpressionErrors) {
      this.checkExpressionErrors(refExpressionErrors, true);
    }

    return left;
  }

  parseMaybeConditional(refExpressionErrors, refNeedsArrowPos) {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    const potentialArrowAt = this.state.potentialArrowAt;
    const expr = this.parseExprOps(refExpressionErrors);

    if (this.shouldExitDescending(expr, potentialArrowAt)) {
      return expr;
    }

    return this.parseConditional(expr, startPos, startLoc, refNeedsArrowPos);
  }

  parseConditional(expr, startPos, startLoc, refNeedsArrowPos) {
    if (this.eat(types.question)) {
      const node = this.startNodeAt(startPos, startLoc);
      node.test = expr;
      node.consequent = this.parseMaybeAssignAllowIn();
      this.expect(types.colon);
      node.alternate = this.parseMaybeAssign();
      return this.finishNode(node, "ConditionalExpression");
    }

    return expr;
  }

  parseExprOps(refExpressionErrors) {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    const potentialArrowAt = this.state.potentialArrowAt;
    const expr = this.parseMaybeUnary(refExpressionErrors);

    if (this.shouldExitDescending(expr, potentialArrowAt)) {
      return expr;
    }

    return this.parseExprOp(expr, startPos, startLoc, -1);
  }

  parseExprOp(left, leftStartPos, leftStartLoc, minPrec) {
    let prec = this.state.type.binop;

    if (prec != null && (this.prodParam.hasIn || !this.match(types._in))) {
      if (prec > minPrec) {
        const op = this.state.type;

        if (op === types.pipeline) {
          this.expectPlugin("pipelineOperator");

          if (this.state.inFSharpPipelineDirectBody) {
            return left;
          }

          this.state.inPipeline = true;
          this.checkPipelineAtInfixOperator(left, leftStartPos);
        }

        const node = this.startNodeAt(leftStartPos, leftStartLoc);
        node.left = left;
        node.operator = this.state.value;

        if (op === types.exponent && left.type === "UnaryExpression" && (this.options.createParenthesizedExpressions || !(left.extra && left.extra.parenthesized))) {
          this.raise(left.argument.start, ErrorMessages.UnexpectedTokenUnaryExponentiation);
        }

        const logical = op === types.logicalOR || op === types.logicalAND;
        const coalesce = op === types.nullishCoalescing;

        if (coalesce) {
          prec = types.logicalAND.binop;
        }

        this.next();

        if (op === types.pipeline && this.getPluginOption("pipelineOperator", "proposal") === "minimal") {
          if (this.match(types.name) && this.state.value === "await" && this.prodParam.hasAwait) {
            throw this.raise(this.state.start, ErrorMessages.UnexpectedAwaitAfterPipelineBody);
          }
        }

        node.right = this.parseExprOpRightExpr(op, prec);
        this.finishNode(node, logical || coalesce ? "LogicalExpression" : "BinaryExpression");
        const nextOp = this.state.type;

        if (coalesce && (nextOp === types.logicalOR || nextOp === types.logicalAND) || logical && nextOp === types.nullishCoalescing) {
          throw this.raise(this.state.start, ErrorMessages.MixingCoalesceWithLogical);
        }

        return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec);
      }
    }

    return left;
  }

  parseExprOpRightExpr(op, prec) {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;

    switch (op) {
      case types.pipeline:
        switch (this.getPluginOption("pipelineOperator", "proposal")) {
          case "smart":
            return this.withTopicPermittingContext(() => {
              return this.parseSmartPipelineBody(this.parseExprOpBaseRightExpr(op, prec), startPos, startLoc);
            });

          case "fsharp":
            return this.withSoloAwaitPermittingContext(() => {
              return this.parseFSharpPipelineBody(prec);
            });
        }

      default:
        return this.parseExprOpBaseRightExpr(op, prec);
    }
  }

  parseExprOpBaseRightExpr(op, prec) {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    return this.parseExprOp(this.parseMaybeUnary(), startPos, startLoc, op.rightAssociative ? prec - 1 : prec);
  }

  parseMaybeUnary(refExpressionErrors) {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    const isAwait = this.isContextual("await");

    if (isAwait && this.isAwaitAllowed()) {
      this.next();
      return this.parseAwait(startPos, startLoc);
    }

    const update = this.match(types.incDec);
    const node = this.startNode();

    if (this.state.type.prefix) {
      node.operator = this.state.value;
      node.prefix = true;

      if (this.match(types._throw)) {
        this.expectPlugin("throwExpressions");
      }

      const isDelete = this.match(types._delete);
      this.next();
      node.argument = this.parseMaybeUnary();
      this.checkExpressionErrors(refExpressionErrors, true);

      if (this.state.strict && isDelete) {
        const arg = node.argument;

        if (arg.type === "Identifier") {
          this.raise(node.start, ErrorMessages.StrictDelete);
        } else if (this.hasPropertyAsPrivateName(arg)) {
          this.raise(node.start, ErrorMessages.DeletePrivateField);
        }
      }

      if (!update) {
        return this.finishNode(node, "UnaryExpression");
      }
    }

    const expr = this.parseUpdate(node, update, refExpressionErrors);

    if (isAwait) {
      const startsExpr = this.hasPlugin("v8intrinsic") ? this.state.type.startsExpr : this.state.type.startsExpr && !this.match(types.modulo);

      if (startsExpr && !this.isAmbiguousAwait()) {
        this.raiseOverwrite(startPos, this.hasPlugin("topLevelAwait") ? ErrorMessages.AwaitNotInAsyncContext : ErrorMessages.AwaitNotInAsyncFunction);
        return this.parseAwait(startPos, startLoc);
      }
    }

    return expr;
  }

  parseUpdate(node, update, refExpressionErrors) {
    if (update) {
      this.checkLVal(node.argument, "prefix operation");
      return this.finishNode(node, "UpdateExpression");
    }

    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    let expr = this.parseExprSubscripts(refExpressionErrors);
    if (this.checkExpressionErrors(refExpressionErrors, false)) return expr;

    while (this.state.type.postfix && !this.canInsertSemicolon()) {
      const node = this.startNodeAt(startPos, startLoc);
      node.operator = this.state.value;
      node.prefix = false;
      node.argument = expr;
      this.checkLVal(expr, "postfix operation");
      this.next();
      expr = this.finishNode(node, "UpdateExpression");
    }

    return expr;
  }

  parseExprSubscripts(refExpressionErrors) {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    const potentialArrowAt = this.state.potentialArrowAt;
    const expr = this.parseExprAtom(refExpressionErrors);

    if (this.shouldExitDescending(expr, potentialArrowAt)) {
      return expr;
    }

    return this.parseSubscripts(expr, startPos, startLoc);
  }

  parseSubscripts(base, startPos, startLoc, noCalls) {
    const state = {
      optionalChainMember: false,
      maybeAsyncArrow: this.atPossibleAsyncArrow(base),
      stop: false
    };

    do {
      base = this.parseSubscript(base, startPos, startLoc, noCalls, state);
      state.maybeAsyncArrow = false;
    } while (!state.stop);

    return base;
  }

  parseSubscript(base, startPos, startLoc, noCalls, state) {
    if (!noCalls && this.eat(types.doubleColon)) {
      return this.parseBind(base, startPos, startLoc, noCalls, state);
    } else if (this.match(types.backQuote)) {
      return this.parseTaggedTemplateExpression(base, startPos, startLoc, state);
    }

    let optional = false;

    if (this.match(types.questionDot)) {
      if (noCalls && this.lookaheadCharCode() === 40) {
        state.stop = true;
        return base;
      }

      state.optionalChainMember = optional = true;
      this.next();
    }

    if (!noCalls && this.match(types.parenL)) {
      return this.parseCoverCallAndAsyncArrowHead(base, startPos, startLoc, state, optional);
    } else if (optional || this.match(types.bracketL) || this.eat(types.dot)) {
      return this.parseMember(base, startPos, startLoc, state, optional);
    } else {
      state.stop = true;
      return base;
    }
  }

  parseMember(base, startPos, startLoc, state, optional) {
    const node = this.startNodeAt(startPos, startLoc);
    const computed = this.eat(types.bracketL);
    node.object = base;
    node.computed = computed;
    const property = computed ? this.parseExpression() : this.parseMaybePrivateName(true);

    if (this.isPrivateName(property)) {
      if (node.object.type === "Super") {
        this.raise(startPos, ErrorMessages.SuperPrivateField);
      }

      this.classScope.usePrivateName(this.getPrivateNameSV(property), property.start);
    }

    node.property = property;

    if (computed) {
      this.expect(types.bracketR);
    }

    if (state.optionalChainMember) {
      node.optional = optional;
      return this.finishNode(node, "OptionalMemberExpression");
    } else {
      return this.finishNode(node, "MemberExpression");
    }
  }

  parseBind(base, startPos, startLoc, noCalls, state) {
    const node = this.startNodeAt(startPos, startLoc);
    node.object = base;
    node.callee = this.parseNoCallExpr();
    state.stop = true;
    return this.parseSubscripts(this.finishNode(node, "BindExpression"), startPos, startLoc, noCalls);
  }

  parseCoverCallAndAsyncArrowHead(base, startPos, startLoc, state, optional) {
    const oldMaybeInArrowParameters = this.state.maybeInArrowParameters;
    this.state.maybeInArrowParameters = true;
    this.next();
    let node = this.startNodeAt(startPos, startLoc);
    node.callee = base;

    if (state.maybeAsyncArrow) {
      this.expressionScope.enter(newAsyncArrowScope());
    }

    if (state.optionalChainMember) {
      node.optional = optional;
    }

    if (optional) {
      node.arguments = this.parseCallExpressionArguments(types.parenR, false);
    } else {
      node.arguments = this.parseCallExpressionArguments(types.parenR, state.maybeAsyncArrow, base.type === "Import", base.type !== "Super", node);
    }

    this.finishCallExpression(node, state.optionalChainMember);

    if (state.maybeAsyncArrow && this.shouldParseAsyncArrow() && !optional) {
      state.stop = true;
      this.expressionScope.validateAsPattern();
      this.expressionScope.exit();
      node = this.parseAsyncArrowFromCallExpression(this.startNodeAt(startPos, startLoc), node);
    } else {
      if (state.maybeAsyncArrow) {
        this.expressionScope.exit();
      }

      this.toReferencedArguments(node);
    }

    this.state.maybeInArrowParameters = oldMaybeInArrowParameters;
    return node;
  }

  toReferencedArguments(node, isParenthesizedExpr) {
    this.toReferencedListDeep(node.arguments, isParenthesizedExpr);
  }

  parseTaggedTemplateExpression(base, startPos, startLoc, state) {
    const node = this.startNodeAt(startPos, startLoc);
    node.tag = base;
    node.quasi = this.parseTemplate(true);

    if (state.optionalChainMember) {
      this.raise(startPos, ErrorMessages.OptionalChainingNoTemplate);
    }

    return this.finishNode(node, "TaggedTemplateExpression");
  }

  atPossibleAsyncArrow(base) {
    return base.type === "Identifier" && base.name === "async" && this.state.lastTokEnd === base.end && !this.canInsertSemicolon() && base.end - base.start === 5 && base.start === this.state.potentialArrowAt;
  }

  finishCallExpression(node, optional) {
    if (node.callee.type === "Import") {
      if (node.arguments.length === 2) {
        if (!this.hasPlugin("moduleAttributes")) {
          this.expectPlugin("importAssertions");
        }
      }

      if (node.arguments.length === 0 || node.arguments.length > 2) {
        this.raise(node.start, ErrorMessages.ImportCallArity, this.hasPlugin("importAssertions") || this.hasPlugin("moduleAttributes") ? "one or two arguments" : "one argument");
      } else {
        for (let _i = 0, _node$arguments = node.arguments; _i < _node$arguments.length; _i++) {
          const arg = _node$arguments[_i];

          if (arg.type === "SpreadElement") {
            this.raise(arg.start, ErrorMessages.ImportCallSpreadArgument);
          }
        }
      }
    }

    return this.finishNode(node, optional ? "OptionalCallExpression" : "CallExpression");
  }

  parseCallExpressionArguments(close, possibleAsyncArrow, dynamicImport, allowPlaceholder, nodeForExtra) {
    const elts = [];
    let first = true;
    const oldInFSharpPipelineDirectBody = this.state.inFSharpPipelineDirectBody;
    this.state.inFSharpPipelineDirectBody = false;

    while (!this.eat(close)) {
      if (first) {
        first = false;
      } else {
        this.expect(types.comma);

        if (this.match(close)) {
          if (dynamicImport && !this.hasPlugin("importAssertions") && !this.hasPlugin("moduleAttributes")) {
            this.raise(this.state.lastTokStart, ErrorMessages.ImportCallArgumentTrailingComma);
          }

          if (nodeForExtra) {
            this.addExtra(nodeForExtra, "trailingComma", this.state.lastTokStart);
          }

          this.next();
          break;
        }
      }

      elts.push(this.parseExprListItem(false, possibleAsyncArrow ? new ExpressionErrors() : undefined, possibleAsyncArrow ? {
        start: 0
      } : undefined, allowPlaceholder));
    }

    this.state.inFSharpPipelineDirectBody = oldInFSharpPipelineDirectBody;
    return elts;
  }

  shouldParseAsyncArrow() {
    return this.match(types.arrow) && !this.canInsertSemicolon();
  }

  parseAsyncArrowFromCallExpression(node, call) {
    var _call$extra;

    this.expect(types.arrow);
    this.parseArrowExpression(node, call.arguments, true, (_call$extra = call.extra) == null ? void 0 : _call$extra.trailingComma);
    return node;
  }

  parseNoCallExpr() {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    return this.parseSubscripts(this.parseExprAtom(), startPos, startLoc, true);
  }

  parseExprAtom(refExpressionErrors) {
    if (this.state.type === types.slash) this.readRegexp();
    const canBeArrow = this.state.potentialArrowAt === this.state.start;
    let node;

    switch (this.state.type) {
      case types._super:
        return this.parseSuper();

      case types._import:
        node = this.startNode();
        this.next();

        if (this.match(types.dot)) {
          return this.parseImportMetaProperty(node);
        }

        if (!this.match(types.parenL)) {
          this.raise(this.state.lastTokStart, ErrorMessages.UnsupportedImport);
        }

        return this.finishNode(node, "Import");

      case types._this:
        node = this.startNode();
        this.next();
        return this.finishNode(node, "ThisExpression");

      case types.name:
        {
          const containsEsc = this.state.containsEsc;
          const id = this.parseIdentifier();

          if (!containsEsc && id.name === "async" && !this.canInsertSemicolon()) {
            if (this.match(types._function)) {
              const last = this.state.context.length - 1;

              if (this.state.context[last] !== types$1.functionStatement) {
                throw new Error("Internal error");
              }

              this.state.context[last] = types$1.functionExpression;
              this.next();
              return this.parseFunction(this.startNodeAtNode(id), undefined, true);
            } else if (this.match(types.name)) {
              return this.parseAsyncArrowUnaryFunction(id);
            }
          }

          if (canBeArrow && this.match(types.arrow) && !this.canInsertSemicolon()) {
            this.next();
            return this.parseArrowExpression(this.startNodeAtNode(id), [id], false);
          }

          return id;
        }

      case types._do:
        {
          return this.parseDo();
        }

      case types.regexp:
        {
          const value = this.state.value;
          node = this.parseLiteral(value.value, "RegExpLiteral");
          node.pattern = value.pattern;
          node.flags = value.flags;
          return node;
        }

      case types.num:
        return this.parseLiteral(this.state.value, "NumericLiteral");

      case types.bigint:
        return this.parseLiteral(this.state.value, "BigIntLiteral");

      case types.decimal:
        return this.parseLiteral(this.state.value, "DecimalLiteral");

      case types.string:
        return this.parseLiteral(this.state.value, "StringLiteral");

      case types._null:
        node = this.startNode();
        this.next();
        return this.finishNode(node, "NullLiteral");

      case types._true:
      case types._false:
        return this.parseBooleanLiteral();

      case types.parenL:
        return this.parseParenAndDistinguishExpression(canBeArrow);

      case types.bracketBarL:
      case types.bracketHashL:
        {
          return this.parseArrayLike(this.state.type === types.bracketBarL ? types.bracketBarR : types.bracketR, false, true, refExpressionErrors);
        }

      case types.bracketL:
        {
          return this.parseArrayLike(types.bracketR, true, false, refExpressionErrors);
        }

      case types.braceBarL:
      case types.braceHashL:
        {
          return this.parseObjectLike(this.state.type === types.braceBarL ? types.braceBarR : types.braceR, false, true, refExpressionErrors);
        }

      case types.braceL:
        {
          return this.parseObjectLike(types.braceR, false, false, refExpressionErrors);
        }

      case types._function:
        return this.parseFunctionOrFunctionSent();

      case types.at:
        this.parseDecorators();

      case types._class:
        node = this.startNode();
        this.takeDecorators(node);
        return this.parseClass(node, false);

      case types._new:
        return this.parseNewOrNewTarget();

      case types.backQuote:
        return this.parseTemplate(false);

      case types.doubleColon:
        {
          node = this.startNode();
          this.next();
          node.object = null;
          const callee = node.callee = this.parseNoCallExpr();

          if (callee.type === "MemberExpression") {
            return this.finishNode(node, "BindExpression");
          } else {
            throw this.raise(callee.start, ErrorMessages.UnsupportedBind);
          }
        }

      case types.hash:
        {
          if (this.state.inPipeline) {
            node = this.startNode();

            if (this.getPluginOption("pipelineOperator", "proposal") !== "smart") {
              this.raise(node.start, ErrorMessages.PrimaryTopicRequiresSmartPipeline);
            }

            this.next();

            if (!this.primaryTopicReferenceIsAllowedInCurrentTopicContext()) {
              this.raise(node.start, ErrorMessages.PrimaryTopicNotAllowed);
            }

            this.registerTopicReference();
            return this.finishNode(node, "PipelinePrimaryTopicReference");
          }

          const nextCh = this.input.codePointAt(this.state.end);

          if (isIdentifierStart(nextCh) || nextCh === 92) {
            const start = this.state.start;
            node = this.parseMaybePrivateName(true);

            if (this.match(types._in)) {
              this.expectPlugin("privateIn");
              this.classScope.usePrivateName(node.id.name, node.start);
            } else if (this.hasPlugin("privateIn")) {
              this.raise(this.state.start, ErrorMessages.PrivateInExpectedIn, node.id.name);
            } else {
              throw this.unexpected(start);
            }

            return node;
          }
        }

      case types.relational:
        {
          if (this.state.value === "<") {
            const lookaheadCh = this.input.codePointAt(this.nextTokenStart());

            if (isIdentifierStart(lookaheadCh) || lookaheadCh === 62) {
                this.expectOnePlugin(["jsx", "flow", "typescript"]);
              }
          }
        }

      default:
        throw this.unexpected();
    }
  }

  parseAsyncArrowUnaryFunction(id) {
    const node = this.startNodeAtNode(id);
    this.prodParam.enter(functionFlags(true, this.prodParam.hasYield));
    const params = [this.parseIdentifier()];
    this.prodParam.exit();

    if (this.hasPrecedingLineBreak()) {
      this.raise(this.state.pos, ErrorMessages.LineTerminatorBeforeArrow);
    }

    this.expect(types.arrow);
    this.parseArrowExpression(node, params, true);
    return node;
  }

  parseDo() {
    this.expectPlugin("doExpressions");
    const node = this.startNode();
    this.next();
    const oldLabels = this.state.labels;
    this.state.labels = [];
    node.body = this.parseBlock();
    this.state.labels = oldLabels;
    return this.finishNode(node, "DoExpression");
  }

  parseSuper() {
    const node = this.startNode();
    this.next();

    if (this.match(types.parenL) && !this.scope.allowDirectSuper && !this.options.allowSuperOutsideMethod) {
      this.raise(node.start, ErrorMessages.SuperNotAllowed);
    } else if (!this.scope.allowSuper && !this.options.allowSuperOutsideMethod) {
      this.raise(node.start, ErrorMessages.UnexpectedSuper);
    }

    if (!this.match(types.parenL) && !this.match(types.bracketL) && !this.match(types.dot)) {
      this.raise(node.start, ErrorMessages.UnsupportedSuper);
    }

    return this.finishNode(node, "Super");
  }

  parseBooleanLiteral() {
    const node = this.startNode();
    node.value = this.match(types._true);
    this.next();
    return this.finishNode(node, "BooleanLiteral");
  }

  parseMaybePrivateName(isPrivateNameAllowed) {
    const isPrivate = this.match(types.hash);

    if (isPrivate) {
      this.expectOnePlugin(["classPrivateProperties", "classPrivateMethods"]);

      if (!isPrivateNameAllowed) {
        this.raise(this.state.pos, ErrorMessages.UnexpectedPrivateField);
      }

      const node = this.startNode();
      this.next();
      this.assertNoSpace("Unexpected space between # and identifier");
      node.id = this.parseIdentifier(true);
      return this.finishNode(node, "PrivateName");
    } else {
      return this.parseIdentifier(true);
    }
  }

  parseFunctionOrFunctionSent() {
    const node = this.startNode();
    this.next();

    if (this.prodParam.hasYield && this.match(types.dot)) {
      const meta = this.createIdentifier(this.startNodeAtNode(node), "function");
      this.next();
      return this.parseMetaProperty(node, meta, "sent");
    }

    return this.parseFunction(node);
  }

  parseMetaProperty(node, meta, propertyName) {
    node.meta = meta;

    if (meta.name === "function" && propertyName === "sent") {
      if (this.isContextual(propertyName)) {
        this.expectPlugin("functionSent");
      } else if (!this.hasPlugin("functionSent")) {
        this.unexpected();
      }
    }

    const containsEsc = this.state.containsEsc;
    node.property = this.parseIdentifier(true);

    if (node.property.name !== propertyName || containsEsc) {
      this.raise(node.property.start, ErrorMessages.UnsupportedMetaProperty, meta.name, propertyName);
    }

    return this.finishNode(node, "MetaProperty");
  }

  parseImportMetaProperty(node) {
    const id = this.createIdentifier(this.startNodeAtNode(node), "import");
    this.next();

    if (this.isContextual("meta")) {
      if (!this.inModule) {
        this.raiseWithData(id.start, {
          code: "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED"
        }, ErrorMessages.ImportMetaOutsideModule);
      }

      this.sawUnambiguousESM = true;
    }

    return this.parseMetaProperty(node, id, "meta");
  }

  parseLiteral(value, type, startPos, startLoc) {
    startPos = startPos || this.state.start;
    startLoc = startLoc || this.state.startLoc;
    const node = this.startNodeAt(startPos, startLoc);
    this.addExtra(node, "rawValue", value);
    this.addExtra(node, "raw", this.input.slice(startPos, this.state.end));
    node.value = value;
    this.next();
    return this.finishNode(node, type);
  }

  parseParenAndDistinguishExpression(canBeArrow) {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    let val;
    this.next();
    this.expressionScope.enter(newArrowHeadScope());
    const oldMaybeInArrowParameters = this.state.maybeInArrowParameters;
    const oldInFSharpPipelineDirectBody = this.state.inFSharpPipelineDirectBody;
    this.state.maybeInArrowParameters = true;
    this.state.inFSharpPipelineDirectBody = false;
    const innerStartPos = this.state.start;
    const innerStartLoc = this.state.startLoc;
    const exprList = [];
    const refExpressionErrors = new ExpressionErrors();
    const refNeedsArrowPos = {
      start: 0
    };
    let first = true;
    let spreadStart;
    let optionalCommaStart;

    while (!this.match(types.parenR)) {
      if (first) {
        first = false;
      } else {
        this.expect(types.comma, refNeedsArrowPos.start || null);

        if (this.match(types.parenR)) {
          optionalCommaStart = this.state.start;
          break;
        }
      }

      if (this.match(types.ellipsis)) {
        const spreadNodeStartPos = this.state.start;
        const spreadNodeStartLoc = this.state.startLoc;
        spreadStart = this.state.start;
        exprList.push(this.parseParenItem(this.parseRestBinding(), spreadNodeStartPos, spreadNodeStartLoc));
        this.checkCommaAfterRest(41);
        break;
      } else {
        exprList.push(this.parseMaybeAssignAllowIn(refExpressionErrors, this.parseParenItem, refNeedsArrowPos));
      }
    }

    const innerEndPos = this.state.lastTokEnd;
    const innerEndLoc = this.state.lastTokEndLoc;
    this.expect(types.parenR);
    this.state.maybeInArrowParameters = oldMaybeInArrowParameters;
    this.state.inFSharpPipelineDirectBody = oldInFSharpPipelineDirectBody;
    let arrowNode = this.startNodeAt(startPos, startLoc);

    if (canBeArrow && this.shouldParseArrow() && (arrowNode = this.parseArrow(arrowNode))) {
      this.expressionScope.validateAsPattern();
      this.expressionScope.exit();
      this.parseArrowExpression(arrowNode, exprList, false);
      return arrowNode;
    }

    this.expressionScope.exit();

    if (!exprList.length) {
      this.unexpected(this.state.lastTokStart);
    }

    if (optionalCommaStart) this.unexpected(optionalCommaStart);
    if (spreadStart) this.unexpected(spreadStart);
    this.checkExpressionErrors(refExpressionErrors, true);
    if (refNeedsArrowPos.start) this.unexpected(refNeedsArrowPos.start);
    this.toReferencedListDeep(exprList, true);

    if (exprList.length > 1) {
      val = this.startNodeAt(innerStartPos, innerStartLoc);
      val.expressions = exprList;
      this.finishNodeAt(val, "SequenceExpression", innerEndPos, innerEndLoc);
    } else {
      val = exprList[0];
    }

    if (!this.options.createParenthesizedExpressions) {
      this.addExtra(val, "parenthesized", true);
      this.addExtra(val, "parenStart", startPos);
      return val;
    }

    const parenExpression = this.startNodeAt(startPos, startLoc);
    parenExpression.expression = val;
    this.finishNode(parenExpression, "ParenthesizedExpression");
    return parenExpression;
  }

  shouldParseArrow() {
    return !this.canInsertSemicolon();
  }

  parseArrow(node) {
    if (this.eat(types.arrow)) {
      return node;
    }
  }

  parseParenItem(node, startPos, startLoc) {
    return node;
  }

  parseNewOrNewTarget() {
    const node = this.startNode();
    this.next();

    if (this.match(types.dot)) {
      const meta = this.createIdentifier(this.startNodeAtNode(node), "new");
      this.next();
      const metaProp = this.parseMetaProperty(node, meta, "target");

      if (!this.scope.inNonArrowFunction && !this.scope.inClass) {
        let error = ErrorMessages.UnexpectedNewTarget;

        if (this.hasPlugin("classProperties")) {
          error += " or class properties";
        }

        this.raise(metaProp.start, error);
      }

      return metaProp;
    }

    return this.parseNew(node);
  }

  parseNew(node) {
    node.callee = this.parseNoCallExpr();

    if (node.callee.type === "Import") {
      this.raise(node.callee.start, ErrorMessages.ImportCallNotNewExpression);
    } else if (this.isOptionalChain(node.callee)) {
      this.raise(this.state.lastTokEnd, ErrorMessages.OptionalChainingNoNew);
    } else if (this.eat(types.questionDot)) {
      this.raise(this.state.start, ErrorMessages.OptionalChainingNoNew);
    }

    this.parseNewArguments(node);
    return this.finishNode(node, "NewExpression");
  }

  parseNewArguments(node) {
    if (this.eat(types.parenL)) {
      const args = this.parseExprList(types.parenR);
      this.toReferencedList(args);
      node.arguments = args;
    } else {
      node.arguments = [];
    }
  }

  parseTemplateElement(isTagged) {
    const elem = this.startNode();

    if (this.state.value === null) {
      if (!isTagged) {
        this.raise(this.state.start + 1, ErrorMessages.InvalidEscapeSequenceTemplate);
      }
    }

    elem.value = {
      raw: this.input.slice(this.state.start, this.state.end).replace(/\r\n?/g, "\n"),
      cooked: this.state.value
    };
    this.next();
    elem.tail = this.match(types.backQuote);
    return this.finishNode(elem, "TemplateElement");
  }

  parseTemplate(isTagged) {
    const node = this.startNode();
    this.next();
    node.expressions = [];
    let curElt = this.parseTemplateElement(isTagged);
    node.quasis = [curElt];

    while (!curElt.tail) {
      this.expect(types.dollarBraceL);
      node.expressions.push(this.parseTemplateSubstitution());
      this.expect(types.braceR);
      node.quasis.push(curElt = this.parseTemplateElement(isTagged));
    }

    this.next();
    return this.finishNode(node, "TemplateLiteral");
  }

  parseTemplateSubstitution() {
    return this.parseExpression();
  }

  parseObjectLike(close, isPattern, isRecord, refExpressionErrors) {
    if (isRecord) {
      this.expectPlugin("recordAndTuple");
    }

    const oldInFSharpPipelineDirectBody = this.state.inFSharpPipelineDirectBody;
    this.state.inFSharpPipelineDirectBody = false;
    const propHash = Object.create(null);
    let first = true;
    const node = this.startNode();
    node.properties = [];
    this.next();

    while (!this.match(close)) {
      if (first) {
        first = false;
      } else {
        this.expect(types.comma);

        if (this.match(close)) {
          this.addExtra(node, "trailingComma", this.state.lastTokStart);
          break;
        }
      }

      const prop = this.parsePropertyDefinition(isPattern, refExpressionErrors);

      if (!isPattern) {
        this.checkProto(prop, isRecord, propHash, refExpressionErrors);
      }

      if (isRecord && !this.isObjectProperty(prop) && prop.type !== "SpreadElement") {
        this.raise(prop.start, ErrorMessages.InvalidRecordProperty);
      }

      if (prop.shorthand) {
        this.addExtra(prop, "shorthand", true);
      }

      node.properties.push(prop);
    }

    this.state.exprAllowed = false;
    this.next();
    this.state.inFSharpPipelineDirectBody = oldInFSharpPipelineDirectBody;
    let type = "ObjectExpression";

    if (isPattern) {
      type = "ObjectPattern";
    } else if (isRecord) {
      type = "RecordExpression";
    }

    return this.finishNode(node, type);
  }

  maybeAsyncOrAccessorProp(prop) {
    return !prop.computed && prop.key.type === "Identifier" && (this.isLiteralPropertyName() || this.match(types.bracketL) || this.match(types.star));
  }

  parsePropertyDefinition(isPattern, refExpressionErrors) {
    let decorators = [];

    if (this.match(types.at)) {
      if (this.hasPlugin("decorators")) {
        this.raise(this.state.start, ErrorMessages.UnsupportedPropertyDecorator);
      }

      while (this.match(types.at)) {
        decorators.push(this.parseDecorator());
      }
    }

    const prop = this.startNode();
    let isGenerator = false;
    let isAsync = false;
    let isAccessor = false;
    let startPos;
    let startLoc;

    if (this.match(types.ellipsis)) {
      if (decorators.length) this.unexpected();

      if (isPattern) {
        this.next();
        prop.argument = this.parseIdentifier();
        this.checkCommaAfterRest(125);
        return this.finishNode(prop, "RestElement");
      }

      return this.parseSpread();
    }

    if (decorators.length) {
      prop.decorators = decorators;
      decorators = [];
    }

    prop.method = false;

    if (isPattern || refExpressionErrors) {
      startPos = this.state.start;
      startLoc = this.state.startLoc;
    }

    if (!isPattern) {
      isGenerator = this.eat(types.star);
    }

    const containsEsc = this.state.containsEsc;
    const key = this.parsePropertyName(prop, false);

    if (!isPattern && !isGenerator && !containsEsc && this.maybeAsyncOrAccessorProp(prop)) {
      const keyName = key.name;

      if (keyName === "async" && !this.hasPrecedingLineBreak()) {
        isAsync = true;
        isGenerator = this.eat(types.star);
        this.parsePropertyName(prop, false);
      }

      if (keyName === "get" || keyName === "set") {
        isAccessor = true;
        prop.kind = keyName;

        if (this.match(types.star)) {
          isGenerator = true;
          this.raise(this.state.pos, ErrorMessages.AccessorIsGenerator, keyName);
          this.next();
        }

        this.parsePropertyName(prop, false);
      }
    }

    this.parseObjPropValue(prop, startPos, startLoc, isGenerator, isAsync, isPattern, isAccessor, refExpressionErrors);
    return prop;
  }

  getGetterSetterExpectedParamCount(method) {
    return method.kind === "get" ? 0 : 1;
  }

  getObjectOrClassMethodParams(method) {
    return method.params;
  }

  checkGetterSetterParams(method) {
    var _params;

    const paramCount = this.getGetterSetterExpectedParamCount(method);
    const params = this.getObjectOrClassMethodParams(method);
    const start = method.start;

    if (params.length !== paramCount) {
      if (method.kind === "get") {
        this.raise(start, ErrorMessages.BadGetterArity);
      } else {
        this.raise(start, ErrorMessages.BadSetterArity);
      }
    }

    if (method.kind === "set" && ((_params = params[params.length - 1]) == null ? void 0 : _params.type) === "RestElement") {
      this.raise(start, ErrorMessages.BadSetterRestParameter);
    }
  }

  parseObjectMethod(prop, isGenerator, isAsync, isPattern, isAccessor) {
    if (isAccessor) {
      this.parseMethod(prop, isGenerator, false, false, false, "ObjectMethod");
      this.checkGetterSetterParams(prop);
      return prop;
    }

    if (isAsync || isGenerator || this.match(types.parenL)) {
      if (isPattern) this.unexpected();
      prop.kind = "method";
      prop.method = true;
      return this.parseMethod(prop, isGenerator, isAsync, false, false, "ObjectMethod");
    }
  }

  parseObjectProperty(prop, startPos, startLoc, isPattern, refExpressionErrors) {
    prop.shorthand = false;

    if (this.eat(types.colon)) {
      prop.value = isPattern ? this.parseMaybeDefault(this.state.start, this.state.startLoc) : this.parseMaybeAssignAllowIn(refExpressionErrors);
      return this.finishNode(prop, "ObjectProperty");
    }

    if (!prop.computed && prop.key.type === "Identifier") {
      this.checkReservedWord(prop.key.name, prop.key.start, true, false);

      if (isPattern) {
        prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key.__clone());
      } else if (this.match(types.eq) && refExpressionErrors) {
        if (refExpressionErrors.shorthandAssign === -1) {
          refExpressionErrors.shorthandAssign = this.state.start;
        }

        prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key.__clone());
      } else {
        prop.value = prop.key.__clone();
      }

      prop.shorthand = true;
      return this.finishNode(prop, "ObjectProperty");
    }
  }

  parseObjPropValue(prop, startPos, startLoc, isGenerator, isAsync, isPattern, isAccessor, refExpressionErrors) {
    const node = this.parseObjectMethod(prop, isGenerator, isAsync, isPattern, isAccessor) || this.parseObjectProperty(prop, startPos, startLoc, isPattern, refExpressionErrors);
    if (!node) this.unexpected();
    return node;
  }

  parsePropertyName(prop, isPrivateNameAllowed) {
    if (this.eat(types.bracketL)) {
      prop.computed = true;
      prop.key = this.parseMaybeAssignAllowIn();
      this.expect(types.bracketR);
    } else {
      const oldInPropertyName = this.state.inPropertyName;
      this.state.inPropertyName = true;
      prop.key = this.match(types.num) || this.match(types.string) || this.match(types.bigint) || this.match(types.decimal) ? this.parseExprAtom() : this.parseMaybePrivateName(isPrivateNameAllowed);

      if (!this.isPrivateName(prop.key)) {
        prop.computed = false;
      }

      this.state.inPropertyName = oldInPropertyName;
    }

    return prop.key;
  }

  initFunction(node, isAsync) {
    node.id = null;
    node.generator = false;
    node.async = !!isAsync;
  }

  parseMethod(node, isGenerator, isAsync, isConstructor, allowDirectSuper, type, inClassScope = false) {
    this.initFunction(node, isAsync);
    node.generator = !!isGenerator;
    const allowModifiers = isConstructor;
    this.scope.enter(SCOPE_FUNCTION | SCOPE_SUPER | (inClassScope ? SCOPE_CLASS : 0) | (allowDirectSuper ? SCOPE_DIRECT_SUPER : 0));
    this.prodParam.enter(functionFlags(isAsync, node.generator));
    this.parseFunctionParams(node, allowModifiers);
    this.parseFunctionBodyAndFinish(node, type, true);
    this.prodParam.exit();
    this.scope.exit();
    return node;
  }

  parseArrayLike(close, canBePattern, isTuple, refExpressionErrors) {
    if (isTuple) {
      this.expectPlugin("recordAndTuple");
    }

    const oldInFSharpPipelineDirectBody = this.state.inFSharpPipelineDirectBody;
    this.state.inFSharpPipelineDirectBody = false;
    const node = this.startNode();
    this.next();
    node.elements = this.parseExprList(close, !isTuple, refExpressionErrors, node);
    this.state.inFSharpPipelineDirectBody = oldInFSharpPipelineDirectBody;
    return this.finishNode(node, isTuple ? "TupleExpression" : "ArrayExpression");
  }

  parseArrowExpression(node, params, isAsync, trailingCommaPos) {
    this.scope.enter(SCOPE_FUNCTION | SCOPE_ARROW);
    let flags = functionFlags(isAsync, false);

    if (!this.match(types.bracketL) && this.prodParam.hasIn) {
      flags |= PARAM_IN;
    }

    this.prodParam.enter(flags);
    this.initFunction(node, isAsync);
    const oldMaybeInArrowParameters = this.state.maybeInArrowParameters;

    if (params) {
      this.state.maybeInArrowParameters = true;
      this.setArrowFunctionParameters(node, params, trailingCommaPos);
    }

    this.state.maybeInArrowParameters = false;
    this.parseFunctionBody(node, true);
    this.prodParam.exit();
    this.scope.exit();
    this.state.maybeInArrowParameters = oldMaybeInArrowParameters;
    return this.finishNode(node, "ArrowFunctionExpression");
  }

  setArrowFunctionParameters(node, params, trailingCommaPos) {
    node.params = this.toAssignableList(params, trailingCommaPos, false);
  }

  parseFunctionBodyAndFinish(node, type, isMethod = false) {
    this.parseFunctionBody(node, false, isMethod);
    this.finishNode(node, type);
  }

  parseFunctionBody(node, allowExpression, isMethod = false) {
    const isExpression = allowExpression && !this.match(types.braceL);
    this.expressionScope.enter(newExpressionScope());

    if (isExpression) {
      node.body = this.parseMaybeAssign();
      this.checkParams(node, false, allowExpression, false);
    } else {
      const oldStrict = this.state.strict;
      const oldLabels = this.state.labels;
      this.state.labels = [];
      this.prodParam.enter(this.prodParam.currentFlags() | PARAM_RETURN);
      node.body = this.parseBlock(true, false, hasStrictModeDirective => {
        const nonSimple = !this.isSimpleParamList(node.params);

        if (hasStrictModeDirective && nonSimple) {
          const errorPos = (node.kind === "method" || node.kind === "constructor") && !!node.key ? node.key.end : node.start;
          this.raise(errorPos, ErrorMessages.IllegalLanguageModeDirective);
        }

        const strictModeChanged = !oldStrict && this.state.strict;
        this.checkParams(node, !this.state.strict && !allowExpression && !isMethod && !nonSimple, allowExpression, strictModeChanged);

        if (this.state.strict && node.id) {
          this.checkLVal(node.id, "function name", BIND_OUTSIDE, undefined, undefined, strictModeChanged);
        }
      });
      this.prodParam.exit();
      this.expressionScope.exit();
      this.state.labels = oldLabels;
    }
  }

  isSimpleParamList(params) {
    for (let i = 0, len = params.length; i < len; i++) {
      if (params[i].type !== "Identifier") return false;
    }

    return true;
  }

  checkParams(node, allowDuplicates, isArrowFunction, strictModeChanged = true) {
    const checkClashes = new Set();

    for (let _i2 = 0, _node$params = node.params; _i2 < _node$params.length; _i2++) {
      const param = _node$params[_i2];
      this.checkLVal(param, "function parameter list", BIND_VAR, allowDuplicates ? null : checkClashes, undefined, strictModeChanged);
    }
  }

  parseExprList(close, allowEmpty, refExpressionErrors, nodeForExtra) {
    const elts = [];
    let first = true;

    while (!this.eat(close)) {
      if (first) {
        first = false;
      } else {
        this.expect(types.comma);

        if (this.match(close)) {
          if (nodeForExtra) {
            this.addExtra(nodeForExtra, "trailingComma", this.state.lastTokStart);
          }

          this.next();
          break;
        }
      }

      elts.push(this.parseExprListItem(allowEmpty, refExpressionErrors));
    }

    return elts;
  }

  parseExprListItem(allowEmpty, refExpressionErrors, refNeedsArrowPos, allowPlaceholder) {
    let elt;

    if (this.match(types.comma)) {
      if (!allowEmpty) {
        this.raise(this.state.pos, ErrorMessages.UnexpectedToken, ",");
      }

      elt = null;
    } else if (this.match(types.ellipsis)) {
      const spreadNodeStartPos = this.state.start;
      const spreadNodeStartLoc = this.state.startLoc;
      elt = this.parseParenItem(this.parseSpread(refExpressionErrors, refNeedsArrowPos), spreadNodeStartPos, spreadNodeStartLoc);
    } else if (this.match(types.question)) {
      this.expectPlugin("partialApplication");

      if (!allowPlaceholder) {
        this.raise(this.state.start, ErrorMessages.UnexpectedArgumentPlaceholder);
      }

      const node = this.startNode();
      this.next();
      elt = this.finishNode(node, "ArgumentPlaceholder");
    } else {
      elt = this.parseMaybeAssignAllowIn(refExpressionErrors, this.parseParenItem, refNeedsArrowPos);
    }

    return elt;
  }

  parseIdentifier(liberal) {
    const node = this.startNode();
    const name = this.parseIdentifierName(node.start, liberal);
    return this.createIdentifier(node, name);
  }

  createIdentifier(node, name) {
    node.name = name;
    node.loc.identifierName = name;
    return this.finishNode(node, "Identifier");
  }

  parseIdentifierName(pos, liberal) {
    let name;
    const {
      start,
      type
    } = this.state;

    if (type === types.name) {
      name = this.state.value;
    } else if (type.keyword) {
      name = type.keyword;
      const curContext = this.curContext();

      if ((type === types._class || type === types._function) && (curContext === types$1.functionStatement || curContext === types$1.functionExpression)) {
        this.state.context.pop();
      }
    } else {
      throw this.unexpected();
    }

    if (liberal) {
      this.state.type = types.name;
    } else {
      this.checkReservedWord(name, start, !!type.keyword, false);
    }

    this.next();
    return name;
  }

  checkReservedWord(word, startLoc, checkKeywords, isBinding) {
    if (this.prodParam.hasYield && word === "yield") {
      this.raise(startLoc, ErrorMessages.YieldBindingIdentifier);
      return;
    }

    if (word === "await") {
      if (this.prodParam.hasAwait) {
        this.raise(startLoc, ErrorMessages.AwaitBindingIdentifier);
        return;
      } else if (this.scope.inStaticBlock && !this.scope.inNonArrowFunction) {
        this.raise(startLoc, ErrorMessages.AwaitBindingIdentifierInStaticBlock);
        return;
      } else {
        this.expressionScope.recordAsyncArrowParametersError(startLoc, ErrorMessages.AwaitBindingIdentifier);
      }
    }

    if (this.scope.inClass && !this.scope.inNonArrowFunction && word === "arguments") {
      this.raise(startLoc, ErrorMessages.ArgumentsInClass);
      return;
    }

    if (checkKeywords && isKeyword(word)) {
      this.raise(startLoc, ErrorMessages.UnexpectedKeyword, word);
      return;
    }

    const reservedTest = !this.state.strict ? isReservedWord : isBinding ? isStrictBindReservedWord : isStrictReservedWord;

    if (reservedTest(word, this.inModule)) {
      this.raise(startLoc, ErrorMessages.UnexpectedReservedWord, word);
    }
  }

  isAwaitAllowed() {
    if (this.prodParam.hasAwait) return true;

    if (this.options.allowAwaitOutsideFunction && !this.scope.inFunction) {
      return true;
    }

    return false;
  }

  parseAwait(startPos, startLoc) {
    const node = this.startNodeAt(startPos, startLoc);
    this.expressionScope.recordParameterInitializerError(node.start, ErrorMessages.AwaitExpressionFormalParameter);

    if (this.eat(types.star)) {
      this.raise(node.start, ErrorMessages.ObsoleteAwaitStar);
    }

    if (!this.scope.inFunction && !this.options.allowAwaitOutsideFunction) {
      if (this.isAmbiguousAwait()) {
        this.ambiguousScriptDifferentAst = true;
      } else {
        this.sawUnambiguousESM = true;
      }
    }

    if (!this.state.soloAwait) {
      node.argument = this.parseMaybeUnary();
    }

    return this.finishNode(node, "AwaitExpression");
  }

  isAmbiguousAwait() {
    return this.hasPrecedingLineBreak() || this.match(types.plusMin) || this.match(types.parenL) || this.match(types.bracketL) || this.match(types.backQuote) || this.match(types.regexp) || this.match(types.slash) || this.hasPlugin("v8intrinsic") && this.match(types.modulo);
  }

  parseYield() {
    const node = this.startNode();
    this.expressionScope.recordParameterInitializerError(node.start, ErrorMessages.YieldInParameter);
    this.next();

    if (this.match(types.semi) || !this.match(types.star) && !this.state.type.startsExpr || this.hasPrecedingLineBreak()) {
      node.delegate = false;
      node.argument = null;
    } else {
      node.delegate = this.eat(types.star);
      node.argument = this.parseMaybeAssign();
    }

    return this.finishNode(node, "YieldExpression");
  }

  checkPipelineAtInfixOperator(left, leftStartPos) {
    if (this.getPluginOption("pipelineOperator", "proposal") === "smart") {
      if (left.type === "SequenceExpression") {
        this.raise(leftStartPos, ErrorMessages.PipelineHeadSequenceExpression);
      }
    }
  }

  parseSmartPipelineBody(childExpression, startPos, startLoc) {
    this.checkSmartPipelineBodyEarlyErrors(childExpression, startPos);
    return this.parseSmartPipelineBodyInStyle(childExpression, startPos, startLoc);
  }

  checkSmartPipelineBodyEarlyErrors(childExpression, startPos) {
    if (this.match(types.arrow)) {
      throw this.raise(this.state.start, ErrorMessages.PipelineBodyNoArrow);
    } else if (childExpression.type === "SequenceExpression") {
      this.raise(startPos, ErrorMessages.PipelineBodySequenceExpression);
    }
  }

  parseSmartPipelineBodyInStyle(childExpression, startPos, startLoc) {
    const bodyNode = this.startNodeAt(startPos, startLoc);
    const isSimpleReference = this.isSimpleReference(childExpression);

    if (isSimpleReference) {
      bodyNode.callee = childExpression;
    } else {
      if (!this.topicReferenceWasUsedInCurrentTopicContext()) {
        this.raise(startPos, ErrorMessages.PipelineTopicUnused);
      }

      bodyNode.expression = childExpression;
    }

    return this.finishNode(bodyNode, isSimpleReference ? "PipelineBareFunction" : "PipelineTopicExpression");
  }

  isSimpleReference(expression) {
    switch (expression.type) {
      case "MemberExpression":
        return !expression.computed && this.isSimpleReference(expression.object);

      case "Identifier":
        return true;

      default:
        return false;
    }
  }

  withTopicPermittingContext(callback) {
    const outerContextTopicState = this.state.topicContext;
    this.state.topicContext = {
      maxNumOfResolvableTopics: 1,
      maxTopicIndex: null
    };

    try {
      return callback();
    } finally {
      this.state.topicContext = outerContextTopicState;
    }
  }

  withTopicForbiddingContext(callback) {
    const outerContextTopicState = this.state.topicContext;
    this.state.topicContext = {
      maxNumOfResolvableTopics: 0,
      maxTopicIndex: null
    };

    try {
      return callback();
    } finally {
      this.state.topicContext = outerContextTopicState;
    }
  }

  withSoloAwaitPermittingContext(callback) {
    const outerContextSoloAwaitState = this.state.soloAwait;
    this.state.soloAwait = true;

    try {
      return callback();
    } finally {
      this.state.soloAwait = outerContextSoloAwaitState;
    }
  }

  allowInAnd(callback) {
    const flags = this.prodParam.currentFlags();
    const prodParamToSet = PARAM_IN & ~flags;

    if (prodParamToSet) {
      this.prodParam.enter(flags | PARAM_IN);

      try {
        return callback();
      } finally {
        this.prodParam.exit();
      }
    }

    return callback();
  }

  disallowInAnd(callback) {
    const flags = this.prodParam.currentFlags();
    const prodParamToClear = PARAM_IN & flags;

    if (prodParamToClear) {
      this.prodParam.enter(flags & ~PARAM_IN);

      try {
        return callback();
      } finally {
        this.prodParam.exit();
      }
    }

    return callback();
  }

  registerTopicReference() {
    this.state.topicContext.maxTopicIndex = 0;
  }

  primaryTopicReferenceIsAllowedInCurrentTopicContext() {
    return this.state.topicContext.maxNumOfResolvableTopics >= 1;
  }

  topicReferenceWasUsedInCurrentTopicContext() {
    return this.state.topicContext.maxTopicIndex != null && this.state.topicContext.maxTopicIndex >= 0;
  }

  parseFSharpPipelineBody(prec) {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    this.state.potentialArrowAt = this.state.start;
    const oldInFSharpPipelineDirectBody = this.state.inFSharpPipelineDirectBody;
    this.state.inFSharpPipelineDirectBody = true;
    const ret = this.parseExprOp(this.parseMaybeUnary(), startPos, startLoc, prec);
    this.state.inFSharpPipelineDirectBody = oldInFSharpPipelineDirectBody;
    return ret;
  }

}

const loopLabel = {
  kind: "loop"
},
      switchLabel = {
  kind: "switch"
};
const FUNC_NO_FLAGS = 0b000,
      FUNC_STATEMENT = 0b001,
      FUNC_HANGING_STATEMENT = 0b010,
      FUNC_NULLABLE_ID = 0b100;
const loneSurrogate = /[\uD800-\uDFFF]/u;
class StatementParser extends ExpressionParser {
  parseTopLevel(file, program) {
    program.sourceType = this.options.sourceType;
    program.interpreter = this.parseInterpreterDirective();
    this.parseBlockBody(program, true, true, types.eof);

    if (this.inModule && !this.options.allowUndeclaredExports && this.scope.undefinedExports.size > 0) {
      for (let _i = 0, _Array$from = Array.from(this.scope.undefinedExports); _i < _Array$from.length; _i++) {
        const [name] = _Array$from[_i];
        const pos = this.scope.undefinedExports.get(name);
        this.raise(pos, ErrorMessages.ModuleExportUndefined, name);
      }
    }

    file.program = this.finishNode(program, "Program");
    file.comments = this.state.comments;
    if (this.options.tokens) file.tokens = this.tokens;
    return this.finishNode(file, "File");
  }

  stmtToDirective(stmt) {
    const expr = stmt.expression;
    const directiveLiteral = this.startNodeAt(expr.start, expr.loc.start);
    const directive = this.startNodeAt(stmt.start, stmt.loc.start);
    const raw = this.input.slice(expr.start, expr.end);
    const val = directiveLiteral.value = raw.slice(1, -1);
    this.addExtra(directiveLiteral, "raw", raw);
    this.addExtra(directiveLiteral, "rawValue", val);
    directive.value = this.finishNodeAt(directiveLiteral, "DirectiveLiteral", expr.end, expr.loc.end);
    return this.finishNodeAt(directive, "Directive", stmt.end, stmt.loc.end);
  }

  parseInterpreterDirective() {
    if (!this.match(types.interpreterDirective)) {
      return null;
    }

    const node = this.startNode();
    node.value = this.state.value;
    this.next();
    return this.finishNode(node, "InterpreterDirective");
  }

  isLet(context) {
    if (!this.isContextual("let")) {
      return false;
    }

    const next = this.nextTokenStart();
    const nextCh = this.input.charCodeAt(next);
    if (nextCh === 91) return true;
    if (context) return false;
    if (nextCh === 123) return true;

    if (isIdentifierStart(nextCh)) {
      let pos = next + 1;

      while (isIdentifierChar(this.input.charCodeAt(pos))) {
        ++pos;
      }

      const ident = this.input.slice(next, pos);
      if (!keywordRelationalOperator.test(ident)) return true;
    }

    return false;
  }

  parseStatement(context, topLevel) {
    if (this.match(types.at)) {
      this.parseDecorators(true);
    }

    return this.parseStatementContent(context, topLevel);
  }

  parseStatementContent(context, topLevel) {
    let starttype = this.state.type;
    const node = this.startNode();
    let kind;

    if (this.isLet(context)) {
      starttype = types._var;
      kind = "let";
    }

    switch (starttype) {
      case types._break:
      case types._continue:
        return this.parseBreakContinueStatement(node, starttype.keyword);

      case types._debugger:
        return this.parseDebuggerStatement(node);

      case types._do:
        return this.parseDoStatement(node);

      case types._for:
        return this.parseForStatement(node);

      case types._function:
        if (this.lookaheadCharCode() === 46) break;

        if (context) {
          if (this.state.strict) {
            this.raise(this.state.start, ErrorMessages.StrictFunction);
          } else if (context !== "if" && context !== "label") {
            this.raise(this.state.start, ErrorMessages.SloppyFunction);
          }
        }

        return this.parseFunctionStatement(node, false, !context);

      case types._class:
        if (context) this.unexpected();
        return this.parseClass(node, true);

      case types._if:
        return this.parseIfStatement(node);

      case types._return:
        return this.parseReturnStatement(node);

      case types._switch:
        return this.parseSwitchStatement(node);

      case types._throw:
        return this.parseThrowStatement(node);

      case types._try:
        return this.parseTryStatement(node);

      case types._const:
      case types._var:
        kind = kind || this.state.value;

        if (context && kind !== "var") {
          this.raise(this.state.start, ErrorMessages.UnexpectedLexicalDeclaration);
        }

        return this.parseVarStatement(node, kind);

      case types._while:
        return this.parseWhileStatement(node);

      case types._with:
        return this.parseWithStatement(node);

      case types.braceL:
        return this.parseBlock();

      case types.semi:
        return this.parseEmptyStatement(node);

      case types._import:
        {
          const nextTokenCharCode = this.lookaheadCharCode();

          if (nextTokenCharCode === 40 || nextTokenCharCode === 46) {
              break;
            }
        }

      case types._export:
        {
          if (!this.options.allowImportExportEverywhere && !topLevel) {
            this.raise(this.state.start, ErrorMessages.UnexpectedImportExport);
          }

          this.next();
          let result;

          if (starttype === types._import) {
            result = this.parseImport(node);

            if (result.type === "ImportDeclaration" && (!result.importKind || result.importKind === "value")) {
              this.sawUnambiguousESM = true;
            }
          } else {
            result = this.parseExport(node);

            if (result.type === "ExportNamedDeclaration" && (!result.exportKind || result.exportKind === "value") || result.type === "ExportAllDeclaration" && (!result.exportKind || result.exportKind === "value") || result.type === "ExportDefaultDeclaration") {
              this.sawUnambiguousESM = true;
            }
          }

          this.assertModuleNodeAllowed(node);
          return result;
        }

      default:
        {
          if (this.isAsyncFunction()) {
            if (context) {
              this.raise(this.state.start, ErrorMessages.AsyncFunctionInSingleStatementContext);
            }

            this.next();
            return this.parseFunctionStatement(node, true, !context);
          }
        }
    }

    const maybeName = this.state.value;
    const expr = this.parseExpression();

    if (starttype === types.name && expr.type === "Identifier" && this.eat(types.colon)) {
      return this.parseLabeledStatement(node, maybeName, expr, context);
    } else {
      return this.parseExpressionStatement(node, expr);
    }
  }

  assertModuleNodeAllowed(node) {
    if (!this.options.allowImportExportEverywhere && !this.inModule) {
      this.raiseWithData(node.start, {
        code: "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED"
      }, ErrorMessages.ImportOutsideModule);
    }
  }

  takeDecorators(node) {
    const decorators = this.state.decoratorStack[this.state.decoratorStack.length - 1];

    if (decorators.length) {
      node.decorators = decorators;
      this.resetStartLocationFromNode(node, decorators[0]);
      this.state.decoratorStack[this.state.decoratorStack.length - 1] = [];
    }
  }

  canHaveLeadingDecorator() {
    return this.match(types._class);
  }

  parseDecorators(allowExport) {
    const currentContextDecorators = this.state.decoratorStack[this.state.decoratorStack.length - 1];

    while (this.match(types.at)) {
      const decorator = this.parseDecorator();
      currentContextDecorators.push(decorator);
    }

    if (this.match(types._export)) {
      if (!allowExport) {
        this.unexpected();
      }

      if (this.hasPlugin("decorators") && !this.getPluginOption("decorators", "decoratorsBeforeExport")) {
        this.raise(this.state.start, ErrorMessages.DecoratorExportClass);
      }
    } else if (!this.canHaveLeadingDecorator()) {
      throw this.raise(this.state.start, ErrorMessages.UnexpectedLeadingDecorator);
    }
  }

  parseDecorator() {
    this.expectOnePlugin(["decorators-legacy", "decorators"]);
    const node = this.startNode();
    this.next();

    if (this.hasPlugin("decorators")) {
      this.state.decoratorStack.push([]);
      const startPos = this.state.start;
      const startLoc = this.state.startLoc;
      let expr;

      if (this.eat(types.parenL)) {
        expr = this.parseExpression();
        this.expect(types.parenR);
      } else {
        expr = this.parseIdentifier(false);

        while (this.eat(types.dot)) {
          const node = this.startNodeAt(startPos, startLoc);
          node.object = expr;
          node.property = this.parseIdentifier(true);
          node.computed = false;
          expr = this.finishNode(node, "MemberExpression");
        }
      }

      node.expression = this.parseMaybeDecoratorArguments(expr);
      this.state.decoratorStack.pop();
    } else {
      node.expression = this.parseExprSubscripts();
    }

    return this.finishNode(node, "Decorator");
  }

  parseMaybeDecoratorArguments(expr) {
    if (this.eat(types.parenL)) {
      const node = this.startNodeAtNode(expr);
      node.callee = expr;
      node.arguments = this.parseCallExpressionArguments(types.parenR, false);
      this.toReferencedList(node.arguments);
      return this.finishNode(node, "CallExpression");
    }

    return expr;
  }

  parseBreakContinueStatement(node, keyword) {
    const isBreak = keyword === "break";
    this.next();

    if (this.isLineTerminator()) {
      node.label = null;
    } else {
      node.label = this.parseIdentifier();
      this.semicolon();
    }

    this.verifyBreakContinue(node, keyword);
    return this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement");
  }

  verifyBreakContinue(node, keyword) {
    const isBreak = keyword === "break";
    let i;

    for (i = 0; i < this.state.labels.length; ++i) {
      const lab = this.state.labels[i];

      if (node.label == null || lab.name === node.label.name) {
        if (lab.kind != null && (isBreak || lab.kind === "loop")) break;
        if (node.label && isBreak) break;
      }
    }

    if (i === this.state.labels.length) {
      this.raise(node.start, ErrorMessages.IllegalBreakContinue, keyword);
    }
  }

  parseDebuggerStatement(node) {
    this.next();
    this.semicolon();
    return this.finishNode(node, "DebuggerStatement");
  }

  parseHeaderExpression() {
    this.expect(types.parenL);
    const val = this.parseExpression();
    this.expect(types.parenR);
    return val;
  }

  parseDoStatement(node) {
    this.next();
    this.state.labels.push(loopLabel);
    node.body = this.withTopicForbiddingContext(() => this.parseStatement("do"));
    this.state.labels.pop();
    this.expect(types._while);
    node.test = this.parseHeaderExpression();
    this.eat(types.semi);
    return this.finishNode(node, "DoWhileStatement");
  }

  parseForStatement(node) {
    this.next();
    this.state.labels.push(loopLabel);
    let awaitAt = -1;

    if (this.isAwaitAllowed() && this.eatContextual("await")) {
      awaitAt = this.state.lastTokStart;
    }

    this.scope.enter(SCOPE_OTHER);
    this.expect(types.parenL);

    if (this.match(types.semi)) {
      if (awaitAt > -1) {
        this.unexpected(awaitAt);
      }

      return this.parseFor(node, null);
    }

    const isLet = this.isLet();

    if (this.match(types._var) || this.match(types._const) || isLet) {
      const init = this.startNode();
      const kind = isLet ? "let" : this.state.value;
      this.next();
      this.parseVar(init, true, kind);
      this.finishNode(init, "VariableDeclaration");

      if ((this.match(types._in) || this.isContextual("of")) && init.declarations.length === 1) {
        return this.parseForIn(node, init, awaitAt);
      }

      if (awaitAt > -1) {
        this.unexpected(awaitAt);
      }

      return this.parseFor(node, init);
    }

    const refExpressionErrors = new ExpressionErrors();
    const init = this.parseExpression(true, refExpressionErrors);

    if (this.match(types._in) || this.isContextual("of")) {
      this.toAssignable(init, true);
      const description = this.isContextual("of") ? "for-of statement" : "for-in statement";
      this.checkLVal(init, description);
      return this.parseForIn(node, init, awaitAt);
    } else {
      this.checkExpressionErrors(refExpressionErrors, true);
    }

    if (awaitAt > -1) {
      this.unexpected(awaitAt);
    }

    return this.parseFor(node, init);
  }

  parseFunctionStatement(node, isAsync, declarationPosition) {
    this.next();
    return this.parseFunction(node, FUNC_STATEMENT | (declarationPosition ? 0 : FUNC_HANGING_STATEMENT), isAsync);
  }

  parseIfStatement(node) {
    this.next();
    node.test = this.parseHeaderExpression();
    node.consequent = this.parseStatement("if");
    node.alternate = this.eat(types._else) ? this.parseStatement("if") : null;
    return this.finishNode(node, "IfStatement");
  }

  parseReturnStatement(node) {
    if (!this.prodParam.hasReturn && !this.options.allowReturnOutsideFunction) {
      this.raise(this.state.start, ErrorMessages.IllegalReturn);
    }

    this.next();

    if (this.isLineTerminator()) {
      node.argument = null;
    } else {
      node.argument = this.parseExpression();
      this.semicolon();
    }

    return this.finishNode(node, "ReturnStatement");
  }

  parseSwitchStatement(node) {
    this.next();
    node.discriminant = this.parseHeaderExpression();
    const cases = node.cases = [];
    this.expect(types.braceL);
    this.state.labels.push(switchLabel);
    this.scope.enter(SCOPE_OTHER);
    let cur;

    for (let sawDefault; !this.match(types.braceR);) {
      if (this.match(types._case) || this.match(types._default)) {
        const isCase = this.match(types._case);
        if (cur) this.finishNode(cur, "SwitchCase");
        cases.push(cur = this.startNode());
        cur.consequent = [];
        this.next();

        if (isCase) {
          cur.test = this.parseExpression();
        } else {
          if (sawDefault) {
            this.raise(this.state.lastTokStart, ErrorMessages.MultipleDefaultsInSwitch);
          }

          sawDefault = true;
          cur.test = null;
        }

        this.expect(types.colon);
      } else {
        if (cur) {
          cur.consequent.push(this.parseStatement(null));
        } else {
          this.unexpected();
        }
      }
    }

    this.scope.exit();
    if (cur) this.finishNode(cur, "SwitchCase");
    this.next();
    this.state.labels.pop();
    return this.finishNode(node, "SwitchStatement");
  }

  parseThrowStatement(node) {
    this.next();

    if (this.hasPrecedingLineBreak()) {
      this.raise(this.state.lastTokEnd, ErrorMessages.NewlineAfterThrow);
    }

    node.argument = this.parseExpression();
    this.semicolon();
    return this.finishNode(node, "ThrowStatement");
  }

  parseCatchClauseParam() {
    const param = this.parseBindingAtom();
    const simple = param.type === "Identifier";
    this.scope.enter(simple ? SCOPE_SIMPLE_CATCH : 0);
    this.checkLVal(param, "catch clause", BIND_LEXICAL);
    return param;
  }

  parseTryStatement(node) {
    this.next();
    node.block = this.parseBlock();
    node.handler = null;

    if (this.match(types._catch)) {
      const clause = this.startNode();
      this.next();

      if (this.match(types.parenL)) {
        this.expect(types.parenL);
        clause.param = this.parseCatchClauseParam();
        this.expect(types.parenR);
      } else {
        clause.param = null;
        this.scope.enter(SCOPE_OTHER);
      }

      clause.body = this.withTopicForbiddingContext(() => this.parseBlock(false, false));
      this.scope.exit();
      node.handler = this.finishNode(clause, "CatchClause");
    }

    node.finalizer = this.eat(types._finally) ? this.parseBlock() : null;

    if (!node.handler && !node.finalizer) {
      this.raise(node.start, ErrorMessages.NoCatchOrFinally);
    }

    return this.finishNode(node, "TryStatement");
  }

  parseVarStatement(node, kind) {
    this.next();
    this.parseVar(node, false, kind);
    this.semicolon();
    return this.finishNode(node, "VariableDeclaration");
  }

  parseWhileStatement(node) {
    this.next();
    node.test = this.parseHeaderExpression();
    this.state.labels.push(loopLabel);
    node.body = this.withTopicForbiddingContext(() => this.parseStatement("while"));
    this.state.labels.pop();
    return this.finishNode(node, "WhileStatement");
  }

  parseWithStatement(node) {
    if (this.state.strict) {
      this.raise(this.state.start, ErrorMessages.StrictWith);
    }

    this.next();
    node.object = this.parseHeaderExpression();
    node.body = this.withTopicForbiddingContext(() => this.parseStatement("with"));
    return this.finishNode(node, "WithStatement");
  }

  parseEmptyStatement(node) {
    this.next();
    return this.finishNode(node, "EmptyStatement");
  }

  parseLabeledStatement(node, maybeName, expr, context) {
    for (let _i2 = 0, _this$state$labels = this.state.labels; _i2 < _this$state$labels.length; _i2++) {
      const label = _this$state$labels[_i2];

      if (label.name === maybeName) {
        this.raise(expr.start, ErrorMessages.LabelRedeclaration, maybeName);
      }
    }

    const kind = this.state.type.isLoop ? "loop" : this.match(types._switch) ? "switch" : null;

    for (let i = this.state.labels.length - 1; i >= 0; i--) {
      const label = this.state.labels[i];

      if (label.statementStart === node.start) {
        label.statementStart = this.state.start;
        label.kind = kind;
      } else {
        break;
      }
    }

    this.state.labels.push({
      name: maybeName,
      kind: kind,
      statementStart: this.state.start
    });
    node.body = this.parseStatement(context ? context.indexOf("label") === -1 ? context + "label" : context : "label");
    this.state.labels.pop();
    node.label = expr;
    return this.finishNode(node, "LabeledStatement");
  }

  parseExpressionStatement(node, expr) {
    node.expression = expr;
    this.semicolon();
    return this.finishNode(node, "ExpressionStatement");
  }

  parseBlock(allowDirectives = false, createNewLexicalScope = true, afterBlockParse) {
    const node = this.startNode();

    if (allowDirectives) {
      this.state.strictErrors.clear();
    }

    this.expect(types.braceL);

    if (createNewLexicalScope) {
      this.scope.enter(SCOPE_OTHER);
    }

    this.parseBlockBody(node, allowDirectives, false, types.braceR, afterBlockParse);

    if (createNewLexicalScope) {
      this.scope.exit();
    }

    return this.finishNode(node, "BlockStatement");
  }

  isValidDirective(stmt) {
    return stmt.type === "ExpressionStatement" && stmt.expression.type === "StringLiteral" && !stmt.expression.extra.parenthesized;
  }

  parseBlockBody(node, allowDirectives, topLevel, end, afterBlockParse) {
    const body = node.body = [];
    const directives = node.directives = [];
    this.parseBlockOrModuleBlockBody(body, allowDirectives ? directives : undefined, topLevel, end, afterBlockParse);
  }

  parseBlockOrModuleBlockBody(body, directives, topLevel, end, afterBlockParse) {
    const oldStrict = this.state.strict;
    let hasStrictModeDirective = false;
    let parsedNonDirective = false;

    while (!this.match(end)) {
      const stmt = this.parseStatement(null, topLevel);

      if (directives && !parsedNonDirective) {
        if (this.isValidDirective(stmt)) {
          const directive = this.stmtToDirective(stmt);
          directives.push(directive);

          if (!hasStrictModeDirective && directive.value.value === "use strict") {
            hasStrictModeDirective = true;
            this.setStrict(true);
          }

          continue;
        }

        parsedNonDirective = true;
        this.state.strictErrors.clear();
      }

      body.push(stmt);
    }

    if (afterBlockParse) {
      afterBlockParse.call(this, hasStrictModeDirective);
    }

    if (!oldStrict) {
      this.setStrict(false);
    }

    this.next();
  }

  parseFor(node, init) {
    node.init = init;
    this.semicolon(false);
    node.test = this.match(types.semi) ? null : this.parseExpression();
    this.semicolon(false);
    node.update = this.match(types.parenR) ? null : this.parseExpression();
    this.expect(types.parenR);
    node.body = this.withTopicForbiddingContext(() => this.parseStatement("for"));
    this.scope.exit();
    this.state.labels.pop();
    return this.finishNode(node, "ForStatement");
  }

  parseForIn(node, init, awaitAt) {
    const isForIn = this.match(types._in);
    this.next();

    if (isForIn) {
      if (awaitAt > -1) this.unexpected(awaitAt);
    } else {
      node.await = awaitAt > -1;
    }

    if (init.type === "VariableDeclaration" && init.declarations[0].init != null && (!isForIn || this.state.strict || init.kind !== "var" || init.declarations[0].id.type !== "Identifier")) {
      this.raise(init.start, ErrorMessages.ForInOfLoopInitializer, isForIn ? "for-in" : "for-of");
    } else if (init.type === "AssignmentPattern") {
      this.raise(init.start, ErrorMessages.InvalidLhs, "for-loop");
    }

    node.left = init;
    node.right = isForIn ? this.parseExpression() : this.parseMaybeAssignAllowIn();
    this.expect(types.parenR);
    node.body = this.withTopicForbiddingContext(() => this.parseStatement("for"));
    this.scope.exit();
    this.state.labels.pop();
    return this.finishNode(node, isForIn ? "ForInStatement" : "ForOfStatement");
  }

  parseVar(node, isFor, kind) {
    const declarations = node.declarations = [];
    const isTypescript = this.hasPlugin("typescript");
    node.kind = kind;

    for (;;) {
      const decl = this.startNode();
      this.parseVarId(decl, kind);

      if (this.eat(types.eq)) {
        decl.init = isFor ? this.parseMaybeAssignDisallowIn() : this.parseMaybeAssignAllowIn();
      } else {
        if (kind === "const" && !(this.match(types._in) || this.isContextual("of"))) {
          if (!isTypescript) {
            this.raise(this.state.lastTokEnd, ErrorMessages.DeclarationMissingInitializer, "Const declarations");
          }
        } else if (decl.id.type !== "Identifier" && !(isFor && (this.match(types._in) || this.isContextual("of")))) {
          this.raise(this.state.lastTokEnd, ErrorMessages.DeclarationMissingInitializer, "Complex binding patterns");
        }

        decl.init = null;
      }

      declarations.push(this.finishNode(decl, "VariableDeclarator"));
      if (!this.eat(types.comma)) break;
    }

    return node;
  }

  parseVarId(decl, kind) {
    decl.id = this.parseBindingAtom();
    this.checkLVal(decl.id, "variable declaration", kind === "var" ? BIND_VAR : BIND_LEXICAL, undefined, kind !== "var");
  }

  parseFunction(node, statement = FUNC_NO_FLAGS, isAsync = false) {
    const isStatement = statement & FUNC_STATEMENT;
    const isHangingStatement = statement & FUNC_HANGING_STATEMENT;
    const requireId = !!isStatement && !(statement & FUNC_NULLABLE_ID);
    this.initFunction(node, isAsync);

    if (this.match(types.star) && isHangingStatement) {
      this.raise(this.state.start, ErrorMessages.GeneratorInSingleStatementContext);
    }

    node.generator = this.eat(types.star);

    if (isStatement) {
      node.id = this.parseFunctionId(requireId);
    }

    const oldMaybeInArrowParameters = this.state.maybeInArrowParameters;
    this.state.maybeInArrowParameters = false;
    this.scope.enter(SCOPE_FUNCTION);
    this.prodParam.enter(functionFlags(isAsync, node.generator));

    if (!isStatement) {
      node.id = this.parseFunctionId();
    }

    this.parseFunctionParams(node, false);
    this.withTopicForbiddingContext(() => {
      this.parseFunctionBodyAndFinish(node, isStatement ? "FunctionDeclaration" : "FunctionExpression");
    });
    this.prodParam.exit();
    this.scope.exit();

    if (isStatement && !isHangingStatement) {
      this.registerFunctionStatementId(node);
    }

    this.state.maybeInArrowParameters = oldMaybeInArrowParameters;
    return node;
  }

  parseFunctionId(requireId) {
    return requireId || this.match(types.name) ? this.parseIdentifier() : null;
  }

  parseFunctionParams(node, allowModifiers) {
    this.expect(types.parenL);
    this.expressionScope.enter(newParameterDeclarationScope());
    node.params = this.parseBindingList(types.parenR, 41, false, allowModifiers);
    this.expressionScope.exit();
  }

  registerFunctionStatementId(node) {
    if (!node.id) return;
    this.scope.declareName(node.id.name, this.state.strict || node.generator || node.async ? this.scope.treatFunctionsAsVar ? BIND_VAR : BIND_LEXICAL : BIND_FUNCTION, node.id.start);
  }

  parseClass(node, isStatement, optionalId) {
    this.next();
    this.takeDecorators(node);
    const oldStrict = this.state.strict;
    this.state.strict = true;
    this.parseClassId(node, isStatement, optionalId);
    this.parseClassSuper(node);
    node.body = this.parseClassBody(!!node.superClass, oldStrict);
    return this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression");
  }

  isClassProperty() {
    return this.match(types.eq) || this.match(types.semi) || this.match(types.braceR);
  }

  isClassMethod() {
    return this.match(types.parenL);
  }

  isNonstaticConstructor(method) {
    return !method.computed && !method.static && (method.key.name === "constructor" || method.key.value === "constructor");
  }

  parseClassBody(constructorAllowsSuper, oldStrict) {
    this.classScope.enter();
    const state = {
      constructorAllowsSuper,
      hadConstructor: false,
      hadStaticBlock: false
    };
    let decorators = [];
    const classBody = this.startNode();
    classBody.body = [];
    this.expect(types.braceL);
    this.withTopicForbiddingContext(() => {
      while (!this.match(types.braceR)) {
        if (this.eat(types.semi)) {
          if (decorators.length > 0) {
            throw this.raise(this.state.lastTokEnd, ErrorMessages.DecoratorSemicolon);
          }

          continue;
        }

        if (this.match(types.at)) {
          decorators.push(this.parseDecorator());
          continue;
        }

        const member = this.startNode();

        if (decorators.length) {
          member.decorators = decorators;
          this.resetStartLocationFromNode(member, decorators[0]);
          decorators = [];
        }

        this.parseClassMember(classBody, member, state);

        if (member.kind === "constructor" && member.decorators && member.decorators.length > 0) {
          this.raise(member.start, ErrorMessages.DecoratorConstructor);
        }
      }
    });
    this.state.strict = oldStrict;
    this.next();

    if (decorators.length) {
      throw this.raise(this.state.start, ErrorMessages.TrailingDecorator);
    }

    this.classScope.exit();
    return this.finishNode(classBody, "ClassBody");
  }

  parseClassMemberFromModifier(classBody, member) {
    const key = this.parseIdentifier(true);

    if (this.isClassMethod()) {
      const method = member;
      method.kind = "method";
      method.computed = false;
      method.key = key;
      method.static = false;
      this.pushClassMethod(classBody, method, false, false, false, false);
      return true;
    } else if (this.isClassProperty()) {
      const prop = member;
      prop.computed = false;
      prop.key = key;
      prop.static = false;
      classBody.body.push(this.parseClassProperty(prop));
      return true;
    }

    return false;
  }

  parseClassMember(classBody, member, state) {
    const isStatic = this.isContextual("static");

    if (isStatic) {
      if (this.parseClassMemberFromModifier(classBody, member)) {
        return;
      }

      if (this.eat(types.braceL)) {
        this.parseClassStaticBlock(classBody, member, state);
        return;
      }
    }

    this.parseClassMemberWithIsStatic(classBody, member, state, isStatic);
  }

  parseClassMemberWithIsStatic(classBody, member, state, isStatic) {
    const publicMethod = member;
    const privateMethod = member;
    const publicProp = member;
    const privateProp = member;
    const method = publicMethod;
    const publicMember = publicMethod;
    member.static = isStatic;

    if (this.eat(types.star)) {
      method.kind = "method";
      this.parseClassElementName(method);

      if (this.isPrivateName(method.key)) {
        this.pushClassPrivateMethod(classBody, privateMethod, true, false);
        return;
      }

      if (this.isNonstaticConstructor(publicMethod)) {
        this.raise(publicMethod.key.start, ErrorMessages.ConstructorIsGenerator);
      }

      this.pushClassMethod(classBody, publicMethod, true, false, false, false);
      return;
    }

    const containsEsc = this.state.containsEsc;
    const key = this.parseClassElementName(member);
    const isPrivate = this.isPrivateName(key);
    const isSimple = key.type === "Identifier";
    const maybeQuestionTokenStart = this.state.start;
    this.parsePostMemberNameModifiers(publicMember);

    if (this.isClassMethod()) {
      method.kind = "method";

      if (isPrivate) {
        this.pushClassPrivateMethod(classBody, privateMethod, false, false);
        return;
      }

      const isConstructor = this.isNonstaticConstructor(publicMethod);
      let allowsDirectSuper = false;

      if (isConstructor) {
        publicMethod.kind = "constructor";

        if (state.hadConstructor && !this.hasPlugin("typescript")) {
          this.raise(key.start, ErrorMessages.DuplicateConstructor);
        }

        state.hadConstructor = true;
        allowsDirectSuper = state.constructorAllowsSuper;
      }

      this.pushClassMethod(classBody, publicMethod, false, false, isConstructor, allowsDirectSuper);
    } else if (this.isClassProperty()) {
      if (isPrivate) {
        this.pushClassPrivateProperty(classBody, privateProp);
      } else {
        this.pushClassProperty(classBody, publicProp);
      }
    } else if (isSimple && key.name === "async" && !containsEsc && !this.isLineTerminator()) {
      const isGenerator = this.eat(types.star);

      if (publicMember.optional) {
        this.unexpected(maybeQuestionTokenStart);
      }

      method.kind = "method";
      this.parseClassElementName(method);
      this.parsePostMemberNameModifiers(publicMember);

      if (this.isPrivateName(method.key)) {
        this.pushClassPrivateMethod(classBody, privateMethod, isGenerator, true);
      } else {
        if (this.isNonstaticConstructor(publicMethod)) {
          this.raise(publicMethod.key.start, ErrorMessages.ConstructorIsAsync);
        }

        this.pushClassMethod(classBody, publicMethod, isGenerator, true, false, false);
      }
    } else if (isSimple && (key.name === "get" || key.name === "set") && !containsEsc && !(this.match(types.star) && this.isLineTerminator())) {
      method.kind = key.name;
      this.parseClassElementName(publicMethod);

      if (this.isPrivateName(method.key)) {
        this.pushClassPrivateMethod(classBody, privateMethod, false, false);
      } else {
        if (this.isNonstaticConstructor(publicMethod)) {
          this.raise(publicMethod.key.start, ErrorMessages.ConstructorIsAccessor);
        }

        this.pushClassMethod(classBody, publicMethod, false, false, false, false);
      }

      this.checkGetterSetterParams(publicMethod);
    } else if (this.isLineTerminator()) {
      if (isPrivate) {
        this.pushClassPrivateProperty(classBody, privateProp);
      } else {
        this.pushClassProperty(classBody, publicProp);
      }
    } else {
      this.unexpected();
    }
  }

  parseClassElementName(member) {
    const key = this.parsePropertyName(member, true);

    if (!member.computed && member.static && (key.name === "prototype" || key.value === "prototype")) {
      this.raise(key.start, ErrorMessages.StaticPrototype);
    }

    if (this.isPrivateName(key) && this.getPrivateNameSV(key) === "constructor") {
      this.raise(key.start, ErrorMessages.ConstructorClassPrivateField);
    }

    return key;
  }

  parseClassStaticBlock(classBody, member, state) {
    var _member$decorators;

    this.expectPlugin("classStaticBlock", member.start);
    this.scope.enter(SCOPE_CLASS | SCOPE_STATIC_BLOCK | SCOPE_SUPER);
    const oldLabels = this.state.labels;
    this.state.labels = [];
    this.prodParam.enter(PARAM);
    const body = member.body = [];
    this.parseBlockOrModuleBlockBody(body, undefined, false, types.braceR);
    this.prodParam.exit();
    this.scope.exit();
    this.state.labels = oldLabels;
    classBody.body.push(this.finishNode(member, "StaticBlock"));

    if (state.hadStaticBlock) {
      this.raise(member.start, ErrorMessages.DuplicateStaticBlock);
    }

    if ((_member$decorators = member.decorators) == null ? void 0 : _member$decorators.length) {
      this.raise(member.start, ErrorMessages.DecoratorStaticBlock);
    }

    state.hadStaticBlock = true;
  }

  pushClassProperty(classBody, prop) {
    if (!prop.computed && (prop.key.name === "constructor" || prop.key.value === "constructor")) {
      this.raise(prop.key.start, ErrorMessages.ConstructorClassField);
    }

    classBody.body.push(this.parseClassProperty(prop));
  }

  pushClassPrivateProperty(classBody, prop) {
    this.expectPlugin("classPrivateProperties", prop.key.start);
    const node = this.parseClassPrivateProperty(prop);
    classBody.body.push(node);
    this.classScope.declarePrivateName(this.getPrivateNameSV(node.key), CLASS_ELEMENT_OTHER, node.key.start);
  }

  pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper) {
    classBody.body.push(this.parseMethod(method, isGenerator, isAsync, isConstructor, allowsDirectSuper, "ClassMethod", true));
  }

  pushClassPrivateMethod(classBody, method, isGenerator, isAsync) {
    this.expectPlugin("classPrivateMethods", method.key.start);
    const node = this.parseMethod(method, isGenerator, isAsync, false, false, "ClassPrivateMethod", true);
    classBody.body.push(node);
    const kind = node.kind === "get" ? node.static ? CLASS_ELEMENT_STATIC_GETTER : CLASS_ELEMENT_INSTANCE_GETTER : node.kind === "set" ? node.static ? CLASS_ELEMENT_STATIC_SETTER : CLASS_ELEMENT_INSTANCE_SETTER : CLASS_ELEMENT_OTHER;
    this.classScope.declarePrivateName(this.getPrivateNameSV(node.key), kind, node.key.start);
  }

  parsePostMemberNameModifiers(methodOrProp) {}

  parseClassPrivateProperty(node) {
    this.parseInitializer(node);
    this.semicolon();
    return this.finishNode(node, "ClassPrivateProperty");
  }

  parseClassProperty(node) {
    if (!node.typeAnnotation || this.match(types.eq)) {
      this.expectPlugin("classProperties");
    }

    this.parseInitializer(node);
    this.semicolon();
    return this.finishNode(node, "ClassProperty");
  }

  parseInitializer(node) {
    this.scope.enter(SCOPE_CLASS | SCOPE_SUPER);
    this.expressionScope.enter(newExpressionScope());
    this.prodParam.enter(PARAM);
    node.value = this.eat(types.eq) ? this.parseMaybeAssignAllowIn() : null;
    this.expressionScope.exit();
    this.prodParam.exit();
    this.scope.exit();
  }

  parseClassId(node, isStatement, optionalId, bindingType = BIND_CLASS) {
    if (this.match(types.name)) {
      node.id = this.parseIdentifier();

      if (isStatement) {
        this.checkLVal(node.id, "class name", bindingType);
      }
    } else {
      if (optionalId || !isStatement) {
        node.id = null;
      } else {
        this.unexpected(null, ErrorMessages.MissingClassName);
      }
    }
  }

  parseClassSuper(node) {
    node.superClass = this.eat(types._extends) ? this.parseExprSubscripts() : null;
  }

  parseExport(node) {
    const hasDefault = this.maybeParseExportDefaultSpecifier(node);
    const parseAfterDefault = !hasDefault || this.eat(types.comma);
    const hasStar = parseAfterDefault && this.eatExportStar(node);
    const hasNamespace = hasStar && this.maybeParseExportNamespaceSpecifier(node);
    const parseAfterNamespace = parseAfterDefault && (!hasNamespace || this.eat(types.comma));
    const isFromRequired = hasDefault || hasStar;

    if (hasStar && !hasNamespace) {
      if (hasDefault) this.unexpected();
      this.parseExportFrom(node, true);
      return this.finishNode(node, "ExportAllDeclaration");
    }

    const hasSpecifiers = this.maybeParseExportNamedSpecifiers(node);

    if (hasDefault && parseAfterDefault && !hasStar && !hasSpecifiers || hasNamespace && parseAfterNamespace && !hasSpecifiers) {
      throw this.unexpected(null, types.braceL);
    }

    let hasDeclaration;

    if (isFromRequired || hasSpecifiers) {
      hasDeclaration = false;
      this.parseExportFrom(node, isFromRequired);
    } else {
      hasDeclaration = this.maybeParseExportDeclaration(node);
    }

    if (isFromRequired || hasSpecifiers || hasDeclaration) {
      this.checkExport(node, true, false, !!node.source);
      return this.finishNode(node, "ExportNamedDeclaration");
    }

    if (this.eat(types._default)) {
      node.declaration = this.parseExportDefaultExpression();
      this.checkExport(node, true, true);
      return this.finishNode(node, "ExportDefaultDeclaration");
    }

    throw this.unexpected(null, types.braceL);
  }

  eatExportStar(node) {
    return this.eat(types.star);
  }

  maybeParseExportDefaultSpecifier(node) {
    if (this.isExportDefaultSpecifier()) {
      this.expectPlugin("exportDefaultFrom");
      const specifier = this.startNode();
      specifier.exported = this.parseIdentifier(true);
      node.specifiers = [this.finishNode(specifier, "ExportDefaultSpecifier")];
      return true;
    }

    return false;
  }

  maybeParseExportNamespaceSpecifier(node) {
    if (this.isContextual("as")) {
      if (!node.specifiers) node.specifiers = [];
      const specifier = this.startNodeAt(this.state.lastTokStart, this.state.lastTokStartLoc);
      this.next();
      specifier.exported = this.parseModuleExportName();
      node.specifiers.push(this.finishNode(specifier, "ExportNamespaceSpecifier"));
      return true;
    }

    return false;
  }

  maybeParseExportNamedSpecifiers(node) {
    if (this.match(types.braceL)) {
      if (!node.specifiers) node.specifiers = [];
      node.specifiers.push(...this.parseExportSpecifiers());
      node.source = null;
      node.declaration = null;
      return true;
    }

    return false;
  }

  maybeParseExportDeclaration(node) {
    if (this.shouldParseExportDeclaration()) {
      node.specifiers = [];
      node.source = null;
      node.declaration = this.parseExportDeclaration(node);
      return true;
    }

    return false;
  }

  isAsyncFunction() {
    if (!this.isContextual("async")) return false;
    const next = this.nextTokenStart();
    return !lineBreak.test(this.input.slice(this.state.pos, next)) && this.isUnparsedContextual(next, "function");
  }

  parseExportDefaultExpression() {
    const expr = this.startNode();
    const isAsync = this.isAsyncFunction();

    if (this.match(types._function) || isAsync) {
      this.next();

      if (isAsync) {
        this.next();
      }

      return this.parseFunction(expr, FUNC_STATEMENT | FUNC_NULLABLE_ID, isAsync);
    } else if (this.match(types._class)) {
      return this.parseClass(expr, true, true);
    } else if (this.match(types.at)) {
      if (this.hasPlugin("decorators") && this.getPluginOption("decorators", "decoratorsBeforeExport")) {
        this.raise(this.state.start, ErrorMessages.DecoratorBeforeExport);
      }

      this.parseDecorators(false);
      return this.parseClass(expr, true, true);
    } else if (this.match(types._const) || this.match(types._var) || this.isLet()) {
      throw this.raise(this.state.start, ErrorMessages.UnsupportedDefaultExport);
    } else {
      const res = this.parseMaybeAssignAllowIn();
      this.semicolon();
      return res;
    }
  }

  parseExportDeclaration(node) {
    return this.parseStatement(null);
  }

  isExportDefaultSpecifier() {
    if (this.match(types.name)) {
      const value = this.state.value;

      if (value === "async" && !this.state.containsEsc || value === "let") {
        return false;
      }

      if ((value === "type" || value === "interface") && !this.state.containsEsc) {
        const l = this.lookahead();

        if (l.type === types.name && l.value !== "from" || l.type === types.braceL) {
          this.expectOnePlugin(["flow", "typescript"]);
          return false;
        }
      }
    } else if (!this.match(types._default)) {
      return false;
    }

    const next = this.nextTokenStart();
    const hasFrom = this.isUnparsedContextual(next, "from");

    if (this.input.charCodeAt(next) === 44 || this.match(types.name) && hasFrom) {
      return true;
    }

    if (this.match(types._default) && hasFrom) {
      const nextAfterFrom = this.input.charCodeAt(this.nextTokenStartSince(next + 4));
      return nextAfterFrom === 34 || nextAfterFrom === 39;
    }

    return false;
  }

  parseExportFrom(node, expect) {
    if (this.eatContextual("from")) {
      node.source = this.parseImportSource();
      this.checkExport(node);
      const assertions = this.maybeParseImportAssertions();

      if (assertions) {
        node.assertions = assertions;
      }
    } else {
      if (expect) {
        this.unexpected();
      } else {
        node.source = null;
      }
    }

    this.semicolon();
  }

  shouldParseExportDeclaration() {
    if (this.match(types.at)) {
      this.expectOnePlugin(["decorators", "decorators-legacy"]);

      if (this.hasPlugin("decorators")) {
        if (this.getPluginOption("decorators", "decoratorsBeforeExport")) {
          this.unexpected(this.state.start, ErrorMessages.DecoratorBeforeExport);
        } else {
          return true;
        }
      }
    }

    return this.state.type.keyword === "var" || this.state.type.keyword === "const" || this.state.type.keyword === "function" || this.state.type.keyword === "class" || this.isLet() || this.isAsyncFunction();
  }

  checkExport(node, checkNames, isDefault, isFrom) {
    if (checkNames) {
      if (isDefault) {
        this.checkDuplicateExports(node, "default");

        if (this.hasPlugin("exportDefaultFrom")) {
          var _declaration$extra;

          const declaration = node.declaration;

          if (declaration.type === "Identifier" && declaration.name === "from" && declaration.end - declaration.start === 4 && !((_declaration$extra = declaration.extra) == null ? void 0 : _declaration$extra.parenthesized)) {
            this.raise(declaration.start, ErrorMessages.ExportDefaultFromAsIdentifier);
          }
        }
      } else if (node.specifiers && node.specifiers.length) {
        for (let _i3 = 0, _node$specifiers = node.specifiers; _i3 < _node$specifiers.length; _i3++) {
          const specifier = _node$specifiers[_i3];
          const {
            exported
          } = specifier;
          const exportedName = exported.type === "Identifier" ? exported.name : exported.value;
          this.checkDuplicateExports(specifier, exportedName);

          if (!isFrom && specifier.local) {
            const {
              local
            } = specifier;

            if (local.type === "StringLiteral") {
              this.raise(specifier.start, ErrorMessages.ExportBindingIsString, local.value, exportedName);
            } else {
              this.checkReservedWord(local.name, local.start, true, false);
              this.scope.checkLocalExport(local);
            }
          }
        }
      } else if (node.declaration) {
        if (node.declaration.type === "FunctionDeclaration" || node.declaration.type === "ClassDeclaration") {
          const id = node.declaration.id;
          if (!id) throw new Error("Assertion failure");
          this.checkDuplicateExports(node, id.name);
        } else if (node.declaration.type === "VariableDeclaration") {
          for (let _i4 = 0, _node$declaration$dec = node.declaration.declarations; _i4 < _node$declaration$dec.length; _i4++) {
            const declaration = _node$declaration$dec[_i4];
            this.checkDeclaration(declaration.id);
          }
        }
      }
    }

    const currentContextDecorators = this.state.decoratorStack[this.state.decoratorStack.length - 1];

    if (currentContextDecorators.length) {
      throw this.raise(node.start, ErrorMessages.UnsupportedDecoratorExport);
    }
  }

  checkDeclaration(node) {
    if (node.type === "Identifier") {
      this.checkDuplicateExports(node, node.name);
    } else if (node.type === "ObjectPattern") {
      for (let _i5 = 0, _node$properties = node.properties; _i5 < _node$properties.length; _i5++) {
        const prop = _node$properties[_i5];
        this.checkDeclaration(prop);
      }
    } else if (node.type === "ArrayPattern") {
      for (let _i6 = 0, _node$elements = node.elements; _i6 < _node$elements.length; _i6++) {
        const elem = _node$elements[_i6];

        if (elem) {
          this.checkDeclaration(elem);
        }
      }
    } else if (node.type === "ObjectProperty") {
      this.checkDeclaration(node.value);
    } else if (node.type === "RestElement") {
      this.checkDeclaration(node.argument);
    } else if (node.type === "AssignmentPattern") {
      this.checkDeclaration(node.left);
    }
  }

  checkDuplicateExports(node, name) {
    if (this.state.exportedIdentifiers.indexOf(name) > -1) {
      this.raise(node.start, name === "default" ? ErrorMessages.DuplicateDefaultExport : ErrorMessages.DuplicateExport, name);
    }

    this.state.exportedIdentifiers.push(name);
  }

  parseExportSpecifiers() {
    const nodes = [];
    let first = true;
    this.expect(types.braceL);

    while (!this.eat(types.braceR)) {
      if (first) {
        first = false;
      } else {
        this.expect(types.comma);
        if (this.eat(types.braceR)) break;
      }

      const node = this.startNode();
      node.local = this.parseModuleExportName();
      node.exported = this.eatContextual("as") ? this.parseModuleExportName() : node.local.__clone();
      nodes.push(this.finishNode(node, "ExportSpecifier"));
    }

    return nodes;
  }

  parseModuleExportName() {
    if (this.match(types.string)) {
      this.expectPlugin("moduleStringNames");
      const result = this.parseLiteral(this.state.value, "StringLiteral");
      const surrogate = result.value.match(loneSurrogate);

      if (surrogate) {
        this.raise(result.start, ErrorMessages.ModuleExportNameHasLoneSurrogate, surrogate[0].charCodeAt(0).toString(16));
      }

      return result;
    }

    return this.parseIdentifier(true);
  }

  parseImport(node) {
    node.specifiers = [];

    if (!this.match(types.string)) {
      const hasDefault = this.maybeParseDefaultImportSpecifier(node);
      const parseNext = !hasDefault || this.eat(types.comma);
      const hasStar = parseNext && this.maybeParseStarImportSpecifier(node);
      if (parseNext && !hasStar) this.parseNamedImportSpecifiers(node);
      this.expectContextual("from");
    }

    node.source = this.parseImportSource();
    const assertions = this.maybeParseImportAssertions();

    if (assertions) {
      node.assertions = assertions;
    } else {
        const attributes = this.maybeParseModuleAttributes();

        if (attributes) {
          node.attributes = attributes;
        }
      }

    this.semicolon();
    return this.finishNode(node, "ImportDeclaration");
  }

  parseImportSource() {
    if (!this.match(types.string)) this.unexpected();
    return this.parseExprAtom();
  }

  shouldParseDefaultImport(node) {
    return this.match(types.name);
  }

  parseImportSpecifierLocal(node, specifier, type, contextDescription) {
    specifier.local = this.parseIdentifier();
    this.checkLVal(specifier.local, contextDescription, BIND_LEXICAL);
    node.specifiers.push(this.finishNode(specifier, type));
  }

  parseAssertEntries() {
    const attrs = [];
    const attrNames = new Set();

    do {
      if (this.match(types.braceR)) {
        break;
      }

      const node = this.startNode();
      const keyName = this.state.value;

      if (this.match(types.string)) {
        node.key = this.parseLiteral(keyName, "StringLiteral");
      } else {
        node.key = this.parseIdentifier(true);
      }

      this.expect(types.colon);

      if (keyName !== "type") {
        this.raise(node.key.start, ErrorMessages.ModuleAttributeDifferentFromType, keyName);
      }

      if (attrNames.has(keyName)) {
        this.raise(node.key.start, ErrorMessages.ModuleAttributesWithDuplicateKeys, keyName);
      }

      attrNames.add(keyName);

      if (!this.match(types.string)) {
        throw this.unexpected(this.state.start, ErrorMessages.ModuleAttributeInvalidValue);
      }

      node.value = this.parseLiteral(this.state.value, "StringLiteral");
      this.finishNode(node, "ImportAttribute");
      attrs.push(node);
    } while (this.eat(types.comma));

    return attrs;
  }

  maybeParseModuleAttributes() {
    if (this.match(types._with) && !this.hasPrecedingLineBreak()) {
      this.expectPlugin("moduleAttributes");
      this.next();
    } else {
      if (this.hasPlugin("moduleAttributes")) return [];
      return null;
    }

    const attrs = [];
    const attributes = new Set();

    do {
      const node = this.startNode();
      node.key = this.parseIdentifier(true);

      if (node.key.name !== "type") {
        this.raise(node.key.start, ErrorMessages.ModuleAttributeDifferentFromType, node.key.name);
      }

      if (attributes.has(node.key.name)) {
        this.raise(node.key.start, ErrorMessages.ModuleAttributesWithDuplicateKeys, node.key.name);
      }

      attributes.add(node.key.name);
      this.expect(types.colon);

      if (!this.match(types.string)) {
        throw this.unexpected(this.state.start, ErrorMessages.ModuleAttributeInvalidValue);
      }

      node.value = this.parseLiteral(this.state.value, "StringLiteral");
      this.finishNode(node, "ImportAttribute");
      attrs.push(node);
    } while (this.eat(types.comma));

    return attrs;
  }

  maybeParseImportAssertions() {
    if (this.isContextual("assert") && !this.hasPrecedingLineBreak()) {
      this.expectPlugin("importAssertions");
      this.next();
    } else {
      if (this.hasPlugin("importAssertions")) return [];
      return null;
    }

    this.eat(types.braceL);
    const attrs = this.parseAssertEntries();
    this.eat(types.braceR);
    return attrs;
  }

  maybeParseDefaultImportSpecifier(node) {
    if (this.shouldParseDefaultImport(node)) {
      this.parseImportSpecifierLocal(node, this.startNode(), "ImportDefaultSpecifier", "default import specifier");
      return true;
    }

    return false;
  }

  maybeParseStarImportSpecifier(node) {
    if (this.match(types.star)) {
      const specifier = this.startNode();
      this.next();
      this.expectContextual("as");
      this.parseImportSpecifierLocal(node, specifier, "ImportNamespaceSpecifier", "import namespace specifier");
      return true;
    }

    return false;
  }

  parseNamedImportSpecifiers(node) {
    let first = true;
    this.expect(types.braceL);

    while (!this.eat(types.braceR)) {
      if (first) {
        first = false;
      } else {
        if (this.eat(types.colon)) {
          throw this.raise(this.state.start, ErrorMessages.DestructureNamedImport);
        }

        this.expect(types.comma);
        if (this.eat(types.braceR)) break;
      }

      this.parseImportSpecifier(node);
    }
  }

  parseImportSpecifier(node) {
    const specifier = this.startNode();
    specifier.imported = this.parseModuleExportName();

    if (this.eatContextual("as")) {
      specifier.local = this.parseIdentifier();
    } else {
      const {
        imported
      } = specifier;

      if (imported.type === "StringLiteral") {
        throw this.raise(specifier.start, ErrorMessages.ImportBindingIsString, imported.value);
      }

      this.checkReservedWord(imported.name, specifier.start, true, true);
      specifier.local = imported.__clone();
    }

    this.checkLVal(specifier.local, "import specifier", BIND_LEXICAL);
    node.specifiers.push(this.finishNode(specifier, "ImportSpecifier"));
  }

}

class ClassScope {
  constructor() {
    this.privateNames = new Set();
    this.loneAccessors = new Map();
    this.undefinedPrivateNames = new Map();
  }

}
class ClassScopeHandler {
  constructor(raise) {
    this.stack = [];
    this.undefinedPrivateNames = new Map();
    this.raise = raise;
  }

  current() {
    return this.stack[this.stack.length - 1];
  }

  enter() {
    this.stack.push(new ClassScope());
  }

  exit() {
    const oldClassScope = this.stack.pop();
    const current = this.current();

    for (let _i = 0, _Array$from = Array.from(oldClassScope.undefinedPrivateNames); _i < _Array$from.length; _i++) {
      const [name, pos] = _Array$from[_i];

      if (current) {
        if (!current.undefinedPrivateNames.has(name)) {
          current.undefinedPrivateNames.set(name, pos);
        }
      } else {
        this.raise(pos, ErrorMessages.InvalidPrivateFieldResolution, name);
      }
    }
  }

  declarePrivateName(name, elementType, pos) {
    const classScope = this.current();
    let redefined = classScope.privateNames.has(name);

    if (elementType & CLASS_ELEMENT_KIND_ACCESSOR) {
      const accessor = redefined && classScope.loneAccessors.get(name);

      if (accessor) {
        const oldStatic = accessor & CLASS_ELEMENT_FLAG_STATIC;
        const newStatic = elementType & CLASS_ELEMENT_FLAG_STATIC;
        const oldKind = accessor & CLASS_ELEMENT_KIND_ACCESSOR;
        const newKind = elementType & CLASS_ELEMENT_KIND_ACCESSOR;
        redefined = oldKind === newKind || oldStatic !== newStatic;
        if (!redefined) classScope.loneAccessors.delete(name);
      } else if (!redefined) {
        classScope.loneAccessors.set(name, elementType);
      }
    }

    if (redefined) {
      this.raise(pos, ErrorMessages.PrivateNameRedeclaration, name);
    }

    classScope.privateNames.add(name);
    classScope.undefinedPrivateNames.delete(name);
  }

  usePrivateName(name, pos) {
    let classScope;

    for (let _i2 = 0, _this$stack = this.stack; _i2 < _this$stack.length; _i2++) {
      classScope = _this$stack[_i2];
      if (classScope.privateNames.has(name)) return;
    }

    if (classScope) {
      classScope.undefinedPrivateNames.set(name, pos);
    } else {
      this.raise(pos, ErrorMessages.InvalidPrivateFieldResolution, name);
    }
  }

}

class Parser extends StatementParser {
  constructor(options, input) {
    options = getOptions(options);
    super(options, input);
    const ScopeHandler = this.getScopeHandler();
    this.options = options;
    this.inModule = this.options.sourceType === "module";
    this.scope = new ScopeHandler(this.raise.bind(this), this.inModule);
    this.prodParam = new ProductionParameterHandler();
    this.classScope = new ClassScopeHandler(this.raise.bind(this));
    this.expressionScope = new ExpressionScopeHandler(this.raise.bind(this));
    this.plugins = pluginsMap(this.options.plugins);
    this.filename = options.sourceFilename;
  }

  getScopeHandler() {
    return ScopeHandler;
  }

  parse() {
    let paramFlags = PARAM;

    if (this.hasPlugin("topLevelAwait") && this.inModule) {
      paramFlags |= PARAM_AWAIT;
    }

    this.scope.enter(SCOPE_PROGRAM);
    this.prodParam.enter(paramFlags);
    const file = this.startNode();
    const program = this.startNode();
    this.nextToken();
    file.errors = null;
    this.parseTopLevel(file, program);
    file.errors = this.state.errors;
    return file;
  }

}

function pluginsMap(plugins) {
  const pluginMap = new Map();

  for (let _i = 0; _i < plugins.length; _i++) {
    const plugin = plugins[_i];
    const [name, options] = Array.isArray(plugin) ? plugin : [plugin, {}];
    if (!pluginMap.has(name)) pluginMap.set(name, options || {});
  }

  return pluginMap;
}

function parse(input, options) {
  var _options;

  if (((_options = options) == null ? void 0 : _options.sourceType) === "unambiguous") {
    options = Object.assign({}, options);

    try {
      options.sourceType = "module";
      const parser = getParser(options, input);
      const ast = parser.parse();

      if (parser.sawUnambiguousESM) {
        return ast;
      }

      if (parser.ambiguousScriptDifferentAst) {
        try {
          options.sourceType = "script";
          return getParser(options, input).parse();
        } catch (_unused) {}
      } else {
        ast.program.sourceType = "script";
      }

      return ast;
    } catch (moduleError) {
      try {
        options.sourceType = "script";
        return getParser(options, input).parse();
      } catch (_unused2) {}

      throw moduleError;
    }
  } else {
    return getParser(options, input).parse();
  }
}
function parseExpression(input, options) {
  const parser = getParser(options, input);

  if (parser.options.strictMode) {
    parser.state.strict = true;
  }

  return parser.getExpression();
}

function getParser(options, input) {
  let cls = Parser;

  if (options == null ? void 0 : options.plugins) {
    validatePlugins(options.plugins);
    cls = getParserClass(options.plugins);
  }

  return new cls(options, input);
}

const parserClassCache = {};

function getParserClass(pluginsFromOptions) {
  const pluginList = mixinPluginNames.filter(name => hasPlugin(pluginsFromOptions, name));
  const key = pluginList.join("/");
  let cls = parserClassCache[key];

  if (!cls) {
    cls = Parser;

    for (let _i = 0; _i < pluginList.length; _i++) {
      const plugin = pluginList[_i];
      cls = mixinPlugins[plugin](cls);
    }

    parserClassCache[key] = cls;
  }

  return cls;
}

exports.parse = parse;
exports.parseExpression = parseExpression;
exports.tokTypes = types;

});

var Parser = unwrapExports(lib$2);
var lib_1$1 = lib$2.parse;
var lib_2 = lib$2.parseExpression;
var lib_3 = lib$2.tokTypes;

/* eslint-disable max-classes-per-file */
class Value {
    constructor(value, node) {
        this.value = value;
        if (node) {
            this.start = node.start;
            this.end = node.end;
        }
        else {
            this.start = null;
            this.end = null;
        }
    }
    getValue() {
        return this.value;
    }
}
class BaseParser {
    constructor(source, options = {}) {
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
    parseAst(node) {
        node.body.forEach(item => this.parseAstItem(item));
    }
    parseAstItem(node) {
        if (Types.isImportDeclaration(node)) ;
        if (Types.isVariableDeclaration(node)) {
            this.parseVariableDeclaration(node);
        }
        if (Types.isExportNamedDeclaration(node)) ;
        if (Types.isExportDefaultDeclaration(node)) {
            this.parseExportDefaultDeclaration(node.declaration);
        }
        if (Types.isExpressionStatement(node)) ;
        if (Types.isClassDeclaration(node)) ;
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
    parseObjectExpression(node) {
        const properties = node.properties;
        properties.forEach(property => {
            this.parseFeature(property, properties);
        });
    }
    parseFeature(property, properties) {
        const key = property.key.name;
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
    parseVariableDeclaration(node) {
        node.declarations
            .filter(item => Types.isVariableDeclarator(item))
            .forEach(item => {
            // item.id 变量定义，item.init 值定义
            if (Types.isArrayPattern(item.id)) {
                // item => [x, y, z] = [1, 2, 3]
                this.parseVariableDeclarationArrayPattern(item.id, item.init);
            }
            else if (Types.isObjectPattern(item.id)) {
                // item => {x, y, z} = { x: 1, y: 2, z: 3 }
                this.parseVariableDeclarationObjectPattern(item.id, item.init);
            }
            else if (Types.isIdentifier(item.id)) {
                let value = '';
                if (Types.isIdentifier(item.init)) {
                    value = this.scope[item.init.name];
                }
                else {
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
    parseVariableDeclarationArrayPattern(id, init) {
        id.elements.forEach((ele, index) => {
            if (!ele)
                return;
            let varName = '';
            let defaultValue = '';
            let nodeDefaultValue;
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
            }
            else {
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
    parseVariableDeclarationObjectPattern(id, init) {
        id.properties.forEach(property => {
            var _a;
            if (Types.isObjectProperty(property)) {
                let varName = '';
                let defaultValue;
                let nodeDefaultValue;
                // property.value: 实际的变量名
                if (Types.isIdentifier(property.value)) {
                    varName = (_a = this.getValue(property.value)) === null || _a === void 0 ? void 0 : _a.value;
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
                        const propertyNode = init.properties.find(({ key }) => {
                            var _a;
                            // 寻找varName属性
                            return ((_a = this.getValue(key)) === null || _a === void 0 ? void 0 : _a.value) === varName;
                        });
                        const propertyValue = propertyNode ? this.getValue(propertyNode.value) : undefined;
                        this.setScopeValue({
                            key: varName,
                            node: propertyNode,
                            value: propertyValue
                        });
                    }
                    // 解构的那个变量不是一个对象，const { name } = obj
                    if (Types.isIdentifier(init)) ;
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
    setScopeValue({ key, value, node }) {
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
        if (Types.isRegExpLiteral(node)) ;
        if (Types.isArrayExpression(node)) {
            const value = node.elements.map(item => this.getValue(item));
            return new Value(value, node);
        }
        if (Types.isIdentifier(node)) {
            const value = this.getIdentifierValue(node);
            return new Value(value, node);
        }
        if (Types.isTemplateLiteral(node)) ;
        if (Types.isObjectExpression(node)) {
            const value = {};
            node.properties.forEach(item => {
                if (Types.isObjectProperty(item)) {
                    // TODO 可能是动态属性名，computed=true
                    const key = item.key.name;
                    const val = this.getValue(item.value);
                    value[key] = val;
                }
            });
            return new Value(value, node);
        }
        if (Types.isObjectPattern(node)) ;
        if (Types.isObjectProperty(node)) {
            const value = this.getValue(node.value);
            return new Value(value, node);
        }
        return new Value(undefined);
    }
    getIdentifierValue(node) {
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
    getAssignmentPatternValue(node) {
        const key = node.left.name;
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

exports.BaseParser = BaseParser;
