const trailingSlashRE = /\/?$/;

function isObjectEqual(
  a: Record<string, any> = {},
  b: Record<string, any> = {}
): boolean {
  // handle null value #1566
  if (!a || !b) return a === b;
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false;
  }
  return aKeys.every(key => {
    const aVal = a[key];
    const bVal = b[key];
    // check nested equality
    if (typeof aVal === "object" && typeof bVal === "object") {
      return isObjectEqual(aVal, bVal);
    }
    return String(aVal) === String(bVal);
  });
}

function queryIncludes(
  current: Record<string, any>,
  target: Record<string, any>
) {
  for (const key in target) {
    if (!(key in current)) {
      return false;
    }
  }
  return true;
}

export function isSameRoute(a: any, b: any, checkQuery = true) {
  if (!b) {
    return false;
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, "") ===
        b.path.replace(trailingSlashRE, "") &&
      a.hash === b.hash &&
      (!checkQuery || isObjectEqual(a.query, b.query))
    );
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.params, b.params) &&
      (!checkQuery || isObjectEqual(a.query, b.query))
    );
  } else {
    return false;
  }
}

export function isIncludedRoute(
  current: Record<string, any>,
  target: Record<string, any>
) {
  return (
    current.path
      .replace(trailingSlashRE, "/")
      .indexOf(target.path.replace(trailingSlashRE, "/")) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  );
}
