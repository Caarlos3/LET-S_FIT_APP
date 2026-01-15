var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// packages/ag-charts-core/src/globals/logger.ts
var logger_exports = {};
__export(logger_exports, {
  error: () => error,
  errorOnce: () => errorOnce,
  log: () => log,
  logGroup: () => logGroup,
  reset: () => reset,
  table: () => table,
  warn: () => warn,
  warnOnce: () => warnOnce
});
var doOnceCache = /* @__PURE__ */ new Set();
function log(...logContent) {
  console.log(...logContent);
}
function warn(message, ...logContent) {
  console.warn(`AG Charts - ${message}`, ...logContent);
}
function error(message, ...logContent) {
  if (typeof message === "object") {
    console.error(`AG Charts error`, message, ...logContent);
  } else {
    console.error(`AG Charts - ${message}`, ...logContent);
  }
}
function table(...logContent) {
  console.table(...logContent);
}
function guardOnce(messageOrError, prefix, cb) {
  let message;
  if (messageOrError instanceof Error) {
    message = messageOrError.message;
  } else if (typeof messageOrError === "string") {
    message = messageOrError;
  } else if (typeof messageOrError === "object") {
    message = JSON.stringify(messageOrError);
  } else {
    message = String(messageOrError);
  }
  const cacheKey = `${prefix}: ${message}`;
  if (doOnceCache.has(cacheKey))
    return;
  cb(messageOrError);
  doOnceCache.add(cacheKey);
}
function warnOnce(messageOrError, ...logContent) {
  guardOnce(messageOrError, "Logger.warn", (message) => warn(message, ...logContent));
}
function errorOnce(messageOrError, ...logContent) {
  guardOnce(messageOrError, "Logger.error", (message) => error(message, ...logContent));
}
function reset() {
  doOnceCache.clear();
}
function logGroup(name, cb) {
  console.groupCollapsed(name);
  try {
    return cb();
  } finally {
    console.groupEnd();
  }
}

// packages/ag-charts-core/src/globals/moduleRegistry.ts
var moduleRegistry_exports = {};
__export(moduleRegistry_exports, {
  detectChartDefinition: () => detectChartDefinition,
  getAxisModule: () => getAxisModule,
  getPresetModule: () => getPresetModule,
  getSeriesModule: () => getSeriesModule,
  hasModule: () => hasModule,
  listModulesByType: () => listModulesByType,
  register: () => register,
  registerMany: () => registerMany,
  reset: () => reset2
});

// packages/ag-charts-core/src/interfaces/moduleDefinition.ts
var ModuleType = /* @__PURE__ */ ((ModuleType2) => {
  ModuleType2["Axis"] = "axis";
  ModuleType2["Chart"] = "chart";
  ModuleType2["Preset"] = "preset";
  ModuleType2["Plugin"] = "plugin";
  ModuleType2["Series"] = "series";
  return ModuleType2;
})(ModuleType || {});

// packages/ag-charts-core/src/globals/moduleRegistry.ts
var registeredModules = /* @__PURE__ */ new Map();
function register(definition, version) {
  const { def: existingDefinition, version: existingVersion } = registeredModules.get(definition.name) ?? {};
  if (!existingDefinition) {
    registeredModules.set(definition.name, { def: definition, version });
    return;
  }
  if (!existingDefinition.enterprise && definition.enterprise && version === existingVersion) {
    registeredModules.set(definition.name, { def: definition, version });
    return;
  }
  if (existingVersion === version) {
    warn(
      [
        `AG Charts - Module '${definition.name}' already registered,',
                'ignoring (version: ${existingVersion}).`,
        `Check your code for duplicate loading of charts NPM modules.`
      ].join(" ")
    );
    return;
  }
  throw new Error(
    [
      `AG Charts - Module '${definition.name}' already registered with different version:`,
      `${existingVersion} vs ${version}`,
      ``,
      `Check your package.json for conflicting dependencies - depending on your package manager`,
      `one of these commands may help:`,
      `- npm ls ag-charts-community`,
      `- yarn why ag-charts-community`
    ].join("\n")
  );
}
function registerMany(definitions, version) {
  for (const definition of definitions) {
    register(definition, version);
  }
}
function reset2() {
  registeredModules.clear();
}
function hasModule(moduleName) {
  return registeredModules.has(moduleName);
}
function* listModulesByType(moduleType) {
  for (const definition of registeredModules.values()) {
    if (isModuleType(moduleType, definition.def)) {
      yield definition.def;
    }
  }
}
function detectChartDefinition(options) {
  for (const definition of registeredModules.values()) {
    if (isModuleType("chart" /* Chart */, definition.def) && definition.def.detect(options)) {
      return definition.def;
    }
  }
  throw new Error(
    `AG Charts - Unknown chart type; Check options are correctly structured and series types are specified`
  );
}
function getAxisModule(moduleName) {
  const definition = registeredModules.get(moduleName);
  if (isModuleType("axis" /* Axis */, definition?.def)) {
    return definition?.def;
  }
}
function getPresetModule(moduleName) {
  const definition = registeredModules.get(moduleName);
  if (isModuleType("preset" /* Preset */, definition?.def)) {
    return definition?.def;
  }
}
function getSeriesModule(moduleName) {
  const definition = registeredModules.get(moduleName);
  if (isModuleType("series" /* Series */, definition?.def)) {
    return definition?.def;
  }
}
function isModuleType(moduleType, definition) {
  return definition?.type === moduleType;
}

// packages/ag-charts-core/src/classes/eventEmitter.ts
var EventEmitter = class {
  constructor() {
    this.events = /* @__PURE__ */ new Map();
  }
  /**
   * Registers an event listener.
   * @param eventName The event name to listen for.
   * @param listener The callback to be invoked on the event.
   * @returns A function to unregister the listener.
   */
  on(eventName, listener) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, /* @__PURE__ */ new Set());
    }
    this.events.get(eventName)?.add(listener);
    return () => this.off(eventName, listener);
  }
  /**
   * Unregisters an event listener.
   * @param eventName The event name to stop listening for.
   * @param listener The callback to be removed.
   */
  off(eventName, listener) {
    const eventListeners = this.events.get(eventName);
    if (eventListeners) {
      eventListeners.delete(listener);
      if (eventListeners.size === 0) {
        this.events.delete(eventName);
      }
    }
  }
  /**
   * Emits an event to all registered listeners.
   * @param eventName The name of the event to emit.
   * @param event The event payload.
   */
  emit(eventName, event) {
    this.events.get(eventName)?.forEach((callback2) => callback2(event));
  }
  /**
   * Clears all listeners for a specific event or all events if no event name is provided.
   * @param eventName (Optional) The name of the event to clear listeners for. If not provided, all listeners for all events are cleared.
   */
  clear(eventName) {
    if (eventName) {
      this.events.delete(eventName);
    } else {
      this.events.clear();
    }
  }
};

// packages/ag-charts-core/src/utils/dom/globalsProxy.ts
var verifiedGlobals = {};
if (typeof window !== "undefined") {
  verifiedGlobals.window = window;
} else if (typeof global !== "undefined") {
  verifiedGlobals.window = global.window;
}
if (typeof document !== "undefined") {
  verifiedGlobals.document = document;
} else if (typeof global !== "undefined") {
  verifiedGlobals.document = global.document;
}
function getDocument(propertyName) {
  return propertyName ? verifiedGlobals.document?.[propertyName] : verifiedGlobals.document;
}
function getWindow(propertyName) {
  return propertyName ? verifiedGlobals.window?.[propertyName] : verifiedGlobals.window;
}
function setDocument(document2) {
  verifiedGlobals.document = document2;
}
function setWindow(window2) {
  verifiedGlobals.window = window2;
}

// packages/ag-charts-core/src/utils/dom/domElements.ts
function createElement(tagName, className, style2) {
  const element = getDocument().createElement(tagName);
  if (typeof className === "object") {
    style2 = className;
    className = void 0;
  }
  if (className) {
    for (const name of className.split(" ")) {
      element.classList.add(name);
    }
  }
  if (style2) {
    Object.assign(element.style, style2);
  }
  return element;
}
function createSvgElement(elementName) {
  return getDocument().createElementNS("http://www.w3.org/2000/svg", elementName);
}

// packages/ag-charts-core/src/utils/dom/domDownload.ts
function downloadUrl(dataUrl, fileName) {
  const body = getDocument("body");
  const element = createElement("a", { display: "none" });
  element.href = dataUrl;
  element.download = fileName;
  body.appendChild(element);
  element.click();
  setTimeout(() => body.removeChild(element));
}

// packages/ag-charts-core/src/utils/dom/domEvents.ts
function attachListener(element, eventName, handler, options) {
  element.addEventListener(eventName, handler, options);
  return () => element.removeEventListener(eventName, handler, options);
}

// packages/ag-charts-core/src/utils/dom/domUtils.ts
var style;
function parseColor(color2) {
  if (style == null) {
    const OptionConstructor = getWindow("Option");
    style = new OptionConstructor().style;
  }
  style.color = color2;
  return style.color || null;
}

// packages/ag-charts-core/src/utils/typeGuards.ts
function isDefined(val) {
  return val != null;
}
function isArray(value) {
  return Array.isArray(value);
}
function isBoolean(value) {
  return typeof value === "boolean";
}
function isDate(value) {
  return value instanceof Date;
}
function isValidDate(value) {
  return isDate(value) && !isNaN(Number(value));
}
function isRegExp(value) {
  return value instanceof RegExp;
}
function isFunction(value) {
  return typeof value === "function";
}
function isObject(value) {
  return typeof value === "object" && value !== null && !isArray(value);
}
function isObjectLike(value) {
  return isArray(value) || isPlainObject(value);
}
function isPlainObject(value) {
  return typeof value === "object" && value !== null && value.constructor?.name === "Object";
}
function isEmptyObject(value) {
  if (typeof value !== "object" || value === null)
    return false;
  for (const _ in value) {
    return false;
  }
  return true;
}
function isString(value) {
  return typeof value === "string";
}
function isNumber(value) {
  return typeof value === "number";
}
function isFiniteNumber(value) {
  return Number.isFinite(value);
}
function isHtmlElement(value) {
  return typeof window !== "undefined" && value instanceof HTMLElement;
}
function isEnumKey(enumObject, enumKey) {
  return isString(enumKey) && Object.keys(enumObject).includes(enumKey);
}
function isEnumValue(enumObject, enumValue) {
  return Object.values(enumObject).includes(enumValue);
}
function isSymbol(value) {
  return typeof value === "symbol";
}
function isColor(value) {
  return isString(value) && (value === "none" || parseColor(value) != null);
}
function isKeyOf(value, container) {
  return value in container;
}

// packages/ag-charts-core/src/utils/functions.ts
function debounce(callback2, waitMs = 0, options) {
  const { leading = false, trailing = true, maxWait = Infinity } = options ?? {};
  let timerId;
  let startTime;
  if (maxWait < waitMs) {
    throw new Error("Value of maxWait cannot be lower than waitMs.");
  }
  function debounceCallback(...args) {
    if (leading && !startTime) {
      startTime = Date.now();
      timerId = setTimeout(() => startTime = null, waitMs);
      callback2(...args);
      return;
    }
    let adjustedWaitMs = waitMs;
    if (maxWait !== Infinity && startTime) {
      const elapsedTime = Date.now() - startTime;
      if (waitMs > maxWait - elapsedTime) {
        adjustedWaitMs = maxWait - elapsedTime;
      }
    }
    clearTimeout(timerId);
    startTime ?? (startTime = Date.now());
    timerId = setTimeout(() => {
      startTime = null;
      if (trailing) {
        callback2(...args);
      }
    }, adjustedWaitMs);
  }
  return Object.assign(debounceCallback, {
    cancel() {
      clearTimeout(timerId);
      startTime = null;
    }
  });
}
function throttle(callback2, waitMs, options) {
  const { leading = true, trailing = true } = options ?? {};
  let timerId;
  let lastArgs;
  let shouldWait = false;
  function timeoutHandler() {
    if (trailing && lastArgs) {
      timerId = setTimeout(timeoutHandler, waitMs);
      callback2(...lastArgs);
    } else {
      shouldWait = false;
    }
    lastArgs = null;
  }
  function throttleCallback(...args) {
    if (shouldWait) {
      lastArgs = args;
    } else {
      shouldWait = true;
      timerId = setTimeout(timeoutHandler, waitMs);
      if (leading) {
        callback2(...args);
      } else {
        lastArgs = args;
      }
    }
  }
  return Object.assign(throttleCallback, {
    cancel() {
      clearTimeout(timerId);
      shouldWait = false;
      lastArgs = null;
    }
  });
}
function safeCall(callback2, args, errorPath = "") {
  try {
    return callback2(...args);
  } catch (error2) {
    const postfix = errorPath ? ` \`${errorPath}\`` : "";
    warnOnce(`Uncaught exception in user callback${postfix}`, error2);
  }
}

// packages/ag-charts-core/src/utils/strings.ts
function joinFormatted(values, conjunction = "and", format = String, maxItems = Infinity) {
  if (values.length === 0) {
    return "";
  } else if (values.length === 1) {
    return format(values[0]);
  }
  values = values.map(format);
  const lastValue = values.pop();
  if (values.length >= maxItems) {
    const remainingCount = values.length - (maxItems - 1);
    return `${values.slice(0, maxItems - 1).join(", ")}, and ${remainingCount} more ${conjunction} ${lastValue}`;
  }
  return `${values.join(", ")} ${conjunction} ${lastValue}`;
}
function stringifyValue(value, maxLength = Infinity) {
  if (typeof value === "number") {
    if (isNaN(value)) {
      return "NaN";
    } else if (value === Infinity) {
      return "Infinity";
    } else if (value === -Infinity) {
      return "-Infinity";
    }
  }
  const strValue = JSON.stringify(value) ?? typeof value;
  if (strValue.length > maxLength) {
    return `${strValue.slice(0, maxLength)}... (+${strValue.length - maxLength} characters)`;
  }
  return strValue;
}
function countLines(text) {
  let count = 1;
  for (let i = 0; i < text.length; i++) {
    if (text.charCodeAt(i) === 10) {
      count++;
    }
  }
  return count;
}
function levenshteinDistance(a, b) {
  if (a === b)
    return 0;
  const [shorter, longer] = a.length < b.length ? [a, b] : [b, a];
  const m = shorter.length;
  const n = longer.length;
  let prevRow = new Array(m + 1).fill(0).map((_, i) => i);
  let currRow = new Array(m + 1);
  for (let i = 1; i <= n; i++) {
    currRow[0] = i;
    for (let j = 1; j <= m; j++) {
      const cost = longer[i - 1] === shorter[j - 1] ? 0 : 1;
      currRow[j] = Math.min(
        prevRow[j] + 1,
        // Deletion
        currRow[j - 1] + 1,
        // Insertion
        prevRow[j - 1] + cost
        // Substitution
      );
    }
    [prevRow, currRow] = [currRow, prevRow];
  }
  return prevRow[m];
}
function kebabCase(a) {
  return a.replace(KEBAB_CASE_REGEX, (match, offset) => (offset > 0 ? "-" : "") + match.toLowerCase());
}
var KEBAB_CASE_REGEX = /[A-Z]+(?![a-z])|[A-Z]/g;
function toPlainText(text) {
  if (isArray(text)) {
    return text.map((segment) => segment.text).join("");
  }
  return text ?? "";
}

// packages/ag-charts-core/src/utils/validation.ts
var descriptionSymbol = Symbol("description");
var requiredSymbol = Symbol("required");
var markedSymbol = Symbol("marked");
var undocumentedSymbol = Symbol("undocumented");
var unionSymbol = Symbol("union");
var similarOptionsMap = [
  ["placement", "position"],
  ["padding", "spacing", "gap"],
  ["color", "fill", "stroke"],
  ["whisker", "wick"],
  ["nodeClick", "seriesNodeClick"],
  ["nodeDoubleClick", "seriesNodeDoubleClick"],
  ["src", "url"]
].reduce((map, words) => {
  for (const word of words) {
    map.set(word.toLowerCase(), new Set(words.filter((w) => w !== word)));
  }
  return map;
}, /* @__PURE__ */ new Map());
var ErrorType = /* @__PURE__ */ ((ErrorType2) => {
  ErrorType2["Invalid"] = "invalid";
  ErrorType2["Required"] = "required";
  ErrorType2["Unknown"] = "unknown";
  return ErrorType2;
})(ErrorType || {});
function extendPath(path, key) {
  if (isFiniteNumber(key)) {
    return `${path}[${key}]`;
  }
  return path ? `${path}.${key}` : key;
}
var ValidationError = class {
  constructor(type, description, value, path, key) {
    this.type = type;
    this.description = description;
    this.value = value;
    this.path = path;
    this.key = key;
  }
  setUnionType(unionType, path) {
    if (this.path.startsWith(path)) {
      const suffix = this.path.slice(path.length);
      this.altPath = `${path}[type=${unionType}]${suffix}`;
    }
  }
  getPrefix() {
    const { altPath: path = this.path, key } = this;
    if (!path && !key)
      return "Value";
    return `Option \`${key ? extendPath(path, key) : path}\``;
  }
  toString() {
    const { description = "unknown", type, value } = this;
    if (type === "required" /* Required */ && value == null) {
      return `${this.getPrefix()} is required and has not been provided; expecting ${description}, ignoring.`;
    }
    return `${this.getPrefix()} cannot be set to \`${stringifyValue(value, 50)}\`; expecting ${description}, ignoring.`;
  }
};
var UnknownError = class extends ValidationError {
  constructor(suggestions, value, path, key) {
    super("unknown" /* Unknown */, void 0, value, path, key);
    this.suggestions = suggestions;
    this.key = key;
  }
  getPrefix() {
    return `Unknown option \`${extendPath(this.altPath ?? this.path, this.key)}\``;
  }
  getPostfix() {
    const suggestions = joinFormatted(findSuggestions(this.key, this.suggestions), "or", (val) => `\`${val}\``);
    return suggestions ? `; Did you mean ${suggestions}? Ignoring.` : ", ignoring.";
  }
  toString() {
    return `${this.getPrefix()}${this.getPostfix()}`;
  }
};
function validate(options, optionsDefs2, path = "") {
  if (!isObject(options)) {
    return { cleared: null, invalid: [new ValidationError("required" /* Required */, "an object", options, path)] };
  }
  const cleared = {};
  const invalid = [];
  const optionsKeys = new Set(Object.keys(options));
  const unusedKeys = [];
  if (unionSymbol in optionsDefs2) {
    const validTypes = Object.keys(optionsDefs2);
    const defaultType = optionsDefs2[unionSymbol];
    if (options.type != null && validTypes.includes(options.type) || options.type == null && defaultType != null) {
      const { type = defaultType, ...rest } = options;
      const nestedResult = validate(rest, optionsDefs2[type], path);
      Object.assign(cleared, { type }, nestedResult.cleared);
      for (const error2 of nestedResult.invalid) {
        error2.setUnionType(type, path);
      }
      invalid.push(...nestedResult.invalid);
    } else {
      const keywords = joinFormatted(validTypes, "or", (val) => `'${val}'`);
      invalid.push(
        new ValidationError("required" /* Required */, `a keyword such as ${keywords}`, options.type, path, "type")
      );
    }
    return { cleared, invalid };
  }
  for (const key of Object.keys(optionsDefs2)) {
    const validatorOrDefs = optionsDefs2[key];
    const required2 = validatorOrDefs[requiredSymbol];
    const value = options[key];
    optionsKeys.delete(key);
    if (typeof value === "undefined") {
      if (!validatorOrDefs[undocumentedSymbol]) {
        unusedKeys.push(key);
      }
      if (!required2)
        continue;
    }
    const keyPath = extendPath(path, key);
    if (isFunction(validatorOrDefs)) {
      const context = { options, path: keyPath };
      const validatorResult = validatorOrDefs(value, context);
      const objectResult = typeof validatorResult === "object";
      if (objectResult) {
        invalid.push(...validatorResult.invalid);
        if (validatorResult.valid) {
          cleared[key] = validatorResult.cleared;
          continue;
        } else if (hasRequiredInPath(validatorResult.invalid, keyPath)) {
          continue;
        }
      } else if (validatorResult) {
        cleared[key] = value;
        continue;
      }
      invalid.push(
        new ValidationError(
          required2 ? "required" /* Required */ : "invalid" /* Invalid */,
          validatorOrDefs[descriptionSymbol],
          value,
          path,
          key
        )
      );
    } else {
      const nestedResult = validate(value, validatorOrDefs, keyPath);
      if (nestedResult.cleared != null) {
        cleared[key] = nestedResult.cleared;
      }
      invalid.push(...nestedResult.invalid);
    }
  }
  for (const key of optionsKeys) {
    const value = options[key];
    if (typeof value === "undefined")
      continue;
    invalid.push(new UnknownError(unusedKeys, value, path, key));
  }
  return { cleared, invalid };
}
function findSuggestions(value, suggestions, maxDistance = 2) {
  const result = [];
  const lowerCaseValue = value.toLowerCase();
  const similarValues = similarOptionsMap.get(lowerCaseValue);
  for (const key of suggestions) {
    const lowerCaseKey = key.toLowerCase();
    if (similarValues?.has(key) || lowerCaseKey.includes(lowerCaseValue) || levenshteinDistance(lowerCaseValue, lowerCaseKey) <= maxDistance) {
      result.push(key);
    }
  }
  return result;
}
function attachDescription(validatorOrDefs, description) {
  if (isFunction(validatorOrDefs)) {
    let clonedValidator2 = function(value, context) {
      return validatorOrDefs(value, context);
    };
    var clonedValidator = clonedValidator2;
    clonedValidator2[descriptionSymbol] = description;
    return clonedValidator2;
  } else {
    return { ...validatorOrDefs, [descriptionSymbol]: description };
  }
}
function required(validatorOrDefs) {
  return Object.assign(
    isFunction(validatorOrDefs) ? (value, context) => validatorOrDefs(value, context) : optionsDefs(validatorOrDefs),
    { [requiredSymbol]: true, [descriptionSymbol]: validatorOrDefs[descriptionSymbol] }
  );
}
function undocumented(validatorOrDefs) {
  return Object.assign(
    isFunction(validatorOrDefs) ? (value, context) => validatorOrDefs(value, context) : optionsDefs(validatorOrDefs),
    { [undocumentedSymbol]: true, [descriptionSymbol]: validatorOrDefs[descriptionSymbol] }
  );
}
var optionsDefs = (defs, description = "an object") => attachDescription((value, context) => {
  const result = validate(value, defs, context.path);
  const valid = !hasRequiredInPath(result.invalid, context.path);
  return { valid, cleared: result.cleared, invalid: result.invalid };
}, description);
var typeUnion = (defs, description, defaultType) => ({
  ...defs,
  [descriptionSymbol]: description,
  [unionSymbol]: defaultType
});
var and = (...validators) => attachDescription(
  (value, context) => {
    const invalid = [];
    for (const validator of validators) {
      const result = validator(value, context);
      if (typeof result === "object") {
        invalid.push(...result.invalid);
        if (!result.valid) {
          return { valid: false, cleared: value, invalid };
        }
        value = result.cleared;
      } else if (!result) {
        return false;
      }
    }
    return { valid: true, cleared: value, invalid };
  },
  validators.map((v) => v[descriptionSymbol]).filter(Boolean).join(" and ")
);
var or = (...validators) => attachDescription(
  (value, context) => {
    for (const validator of validators) {
      const result = validator(value, context);
      if (typeof result === "object" ? result.valid : result) {
        return result;
      }
    }
    return false;
  },
  validators.map((v) => v[descriptionSymbol]).filter(Boolean).join(" or ")
);
var isComparable = (value) => isFiniteNumber(value) || isValidDate(value);
var isValidDateValue = (value) => isDate(value) || (isFiniteNumber(value) || isString(value)) && isValidDate(new Date(value));
var array = attachDescription(isArray, "an array");
var boolean = attachDescription(isBoolean, "a boolean");
var callback = attachDescription(isFunction, "a function");
var color = attachDescription(isColor, "a color string");
var date = attachDescription(isValidDateValue, "a date");
var defined = attachDescription(isDefined, "a defined value");
var number = attachDescription(isFiniteNumber, "a number");
var object = attachDescription(isObject, "an object");
var string = attachDescription(isString, "a string");
var htmlElement = attachDescription(
  (value) => typeof HTMLElement === "undefined" || value instanceof HTMLElement,
  "an html element"
);
var arrayLength = (minLength, maxLength = Infinity) => {
  let message;
  if (maxLength === Infinity) {
    message = `an array of at least ${minLength} items`;
  } else if (minLength === maxLength) {
    message = `an array of exactly ${minLength} items`;
  } else if (minLength === 0) {
    message = `an array of no more than ${maxLength} items`;
  } else {
    message = `an array of at least ${minLength} and no more than ${maxLength} items`;
  }
  return attachDescription(
    (value) => isArray(value) && value.length >= minLength && value.length <= maxLength,
    message
  );
};
var stringLength = (minLength, maxLength = Infinity) => {
  let message;
  if (maxLength === Infinity) {
    message = `a string of at least ${minLength} characters`;
  } else if (minLength === maxLength) {
    message = `an string of exactly ${minLength} characters`;
  } else if (minLength === 0) {
    message = `an string of no more than ${maxLength} characters`;
  } else {
    message = `an string of at least ${minLength} and no more than ${maxLength} characters`;
  }
  return attachDescription(
    (value) => isString(value) && value.length >= minLength && value.length <= maxLength,
    message
  );
};
var numberMin = (min, inclusive = true) => attachDescription(
  (value) => isFiniteNumber(value) && (value > min || inclusive && value === min),
  `a number greater than ${inclusive ? "or equal to " : ""}${min}`
);
var numberRange = (min, max) => attachDescription(
  (value) => isFiniteNumber(value) && value >= min && value <= max,
  `a number between ${min} and ${max} inclusive`
);
var positiveNumber = numberMin(0);
var positiveNumberNonZero = numberMin(0, false);
var ratio = numberRange(0, 1);
var lessThan = (otherField) => attachDescription(
  (value, { options }) => !isComparable(value) || !isComparable(options[otherField]) || value < options[otherField],
  `the value to be less than \`${otherField}\``
);
var greaterThan = (otherField) => attachDescription(
  (value, { options }) => !isComparable(value) || !isComparable(options[otherField]) || value > options[otherField],
  `the value to be greater than \`${otherField}\``
);
function union(...allowed) {
  if (isObject(allowed[0])) {
    allowed = Object.values(allowed[0]);
  }
  const keywords = joinFormatted(allowed, "or", (value) => `'${value}'`);
  return attachDescription((value) => allowed.includes(value), `a keyword such as ${keywords}`);
}
var constant = (allowed) => attachDescription((value) => allowed === value, `the value ${JSON.stringify(allowed)}`);
var instanceOf = (instanceType, description) => attachDescription((value) => value instanceof instanceType, description ?? `an instance of ${instanceType.name}`);
var arrayOf = (validator, description, strict = true) => attachDescription(
  (value, context) => {
    if (!isArray(value))
      return false;
    let valid = strict;
    const cleared = [];
    const invalid = [];
    const setValid = (result) => valid = strict ? valid && result : valid || result;
    if (value.length === 0) {
      return { valid: true, cleared, invalid };
    }
    for (let i = 0; i < value.length; i++) {
      const options = value[i];
      const result = validator(options, { options, path: `${context.path}[${i}]` });
      if (typeof result === "object") {
        valid = setValid(result.valid);
        invalid.push(...result.invalid);
        if (result.cleared != null) {
          cleared.push(result.cleared);
        }
      } else {
        valid = setValid(result);
        if (result) {
          cleared.push(options);
        }
      }
    }
    return { valid, cleared: valid || !strict ? cleared : null, invalid };
  },
  description ?? `${validator[descriptionSymbol]} array`
);
var arrayOfDefs = (defs, description = "an object array") => attachDescription((value, context) => {
  if (!isArray(value))
    return false;
  const cleared = [];
  const invalid = [];
  for (let i = 0; i < value.length; i++) {
    const indexPath = `${context.path}[${i}]`;
    const result = validate(value[i], defs, indexPath);
    if (!hasRequiredInPath(result.invalid, indexPath)) {
      cleared.push(result.cleared);
    }
    invalid.push(...result.invalid);
  }
  return { valid: true, cleared, invalid };
}, description);
var callbackOf = (validator, description) => attachDescription((value, context) => {
  if (!isFunction(value))
    return false;
  if (markedSymbol in value)
    return true;
  const cbWithValidation = Object.assign(
    (...args) => {
      const result = safeCall(value, args);
      if (result == null)
        return;
      const validatorResult = validator(result, { options: result, path: "" });
      if (typeof validatorResult === "object") {
        validatorResult.invalid.forEach(
          callbackWarnInvalid(context, description ?? validator[descriptionSymbol])
        );
        if (validatorResult.valid) {
          return validatorResult.cleared;
        }
      } else if (validatorResult) {
        return result;
      } else {
        warnOnce(
          `Callback \`${context.path}\` returned an invalid value \`${stringifyValue(result, 50)}\`; expecting ${description ?? validator[descriptionSymbol]}, ignoring.`
        );
      }
    },
    { [markedSymbol]: true }
  );
  return { valid: true, cleared: cbWithValidation, invalid: [] };
}, "a function");
var callbackDefs = (defs, description = "an object") => attachDescription((value, context) => {
  if (!isFunction(value))
    return false;
  if (markedSymbol in value)
    return true;
  const cbWithValidation = Object.assign(
    (...args) => {
      const result = safeCall(value, args, context.path);
      if (result == null)
        return;
      const validatorResult = validate(result, defs);
      validatorResult.invalid.forEach(callbackWarnInvalid(context, description));
      return validatorResult.cleared;
    },
    { [markedSymbol]: true }
  );
  return { valid: true, cleared: cbWithValidation, invalid: [] };
}, "a function");
function hasRequiredInPath(errors, rootPath) {
  return errors.some((error2) => error2.type === "required" /* Required */ && error2.path === rootPath);
}
function callbackWarnInvalid(context, description) {
  return (error2) => {
    if (error2 instanceof UnknownError) {
      return warnOnce(
        `Callback \`${context.path}\` returned an unknown property \`${extendPath(error2.path, error2.key)}\`${error2.getPostfix()}`
      );
    }
    const errorValue = stringifyValue(error2.value, 50);
    warnOnce(
      error2.key ? `Callback \`${context.path}\` returned an invalid property \`${extendPath(error2.path, error2.key)}\`: \`${errorValue}\`; expecting ${error2.description}, ignoring.` : `Callback \`${context.path}\` returned an invalid value \`${errorValue}\`; expecting ${description ?? error2.description}, ignoring.`
    );
  };
}

// packages/ag-charts-core/src/options/commonOptionsDefs.ts
var themeOperator = (value) => {
  if (!isObject(value))
    return false;
  const keys = Object.keys(value);
  return keys.length === 1 && keys[0].startsWith("$");
};
var colorStop = optionsDefs({ color, stop: ratio }, "");
var colorStopsOrderValidator = attachDescription((value) => {
  let lastStop = -Infinity;
  for (const item of value) {
    if (item?.stop != null) {
      if (item.stop < lastStop) {
        return false;
      }
      lastStop = item.stop;
    }
  }
  return true;
}, "color stops to be defined in ascending order");
var gradientColorStops = and(arrayLength(2), arrayOf(colorStop), colorStopsOrderValidator);
var gradientBounds = union("axis", "item", "series");
var gradientStrict = optionsDefs(
  {
    type: required(constant("gradient")),
    colorStops: required(gradientColorStops),
    rotation: number,
    // @ts-expect-error undocumented options
    gradient: undocumented(union("linear", "radial", "conic")),
    bounds: undocumented(gradientBounds),
    reverse: undocumented(boolean)
  },
  "a gradient object with color stops"
);
var strokeOptionsDef = {
  stroke: color,
  strokeWidth: positiveNumber,
  strokeOpacity: ratio
};
var fillGradientDefaults = optionsDefs({
  type: required(constant("gradient")),
  gradient: required(union("linear", "radial", "conic")),
  bounds: required(gradientBounds),
  colorStops: required(or(gradientColorStops, and(arrayLength(2), arrayOf(color)))),
  rotation: required(number),
  reverse: required(boolean)
});
var fillPatternDefaults = optionsDefs({
  type: required(constant("pattern")),
  pattern: required(
    union(
      "vertical-lines",
      "horizontal-lines",
      "forward-slanted-lines",
      "backward-slanted-lines",
      "circles",
      "squares",
      "triangles",
      "diamonds",
      "stars",
      "hearts",
      "crosses"
    )
  ),
  path: stringLength(2),
  width: required(positiveNumber),
  height: required(positiveNumber),
  fill: required(color),
  fillOpacity: required(ratio),
  backgroundFill: required(color),
  backgroundFillOpacity: required(ratio),
  padding: required(positiveNumber),
  rotation: required(number),
  scale: required(positiveNumber),
  stroke: required(color),
  strokeWidth: required(positiveNumber),
  strokeOpacity: required(ratio)
});
var fillImageDefaults = optionsDefs({
  type: required(constant("image")),
  url: string,
  width: positiveNumber,
  height: positiveNumber,
  rotation: required(number),
  backgroundFill: required(color),
  backgroundFillOpacity: ratio,
  fit: required(union("stretch", "contain", "cover")),
  repeat: required(union("repeat", "repeat-x", "repeat-y", "no-repeat"))
});
var colorObject = typeUnion(
  {
    gradient: {
      colorStops: gradientColorStops,
      rotation: number,
      // @ts-expect-error undocumented option
      gradient: undocumented(union("linear", "radial", "conic")),
      bounds: undocumented(gradientBounds),
      reverse: undocumented(boolean)
    },
    pattern: {
      pattern: union(
        "vertical-lines",
        "horizontal-lines",
        "forward-slanted-lines",
        "backward-slanted-lines",
        "circles",
        "squares",
        "triangles",
        "diamonds",
        "stars",
        "hearts",
        "crosses"
      ),
      path: stringLength(2),
      width: positiveNumber,
      height: positiveNumber,
      rotation: number,
      scale: positiveNumber,
      fill: color,
      fillOpacity: ratio,
      backgroundFill: color,
      backgroundFillOpacity: ratio,
      ...strokeOptionsDef,
      // @ts-expect-error undocumented option
      padding: undocumented(positiveNumber)
    },
    image: {
      url: required(string),
      backgroundFill: color,
      backgroundFillOpacity: ratio,
      width: positiveNumber,
      height: positiveNumber,
      fit: union("stretch", "contain", "cover", "none"),
      repeat: union("repeat", "repeat-x", "repeat-y", "no-repeat"),
      rotation: number
    }
  },
  "a color object"
);
var colorUnion = or(color, optionsDefs(colorObject, "a color object"));
var fillOptionsDef = {
  fill: colorUnion,
  fillOpacity: ratio
};
fillOptionsDef.fillGradientDefaults = undocumented(fillGradientDefaults);
fillOptionsDef.fillPatternDefaults = undocumented(fillPatternDefaults);
fillOptionsDef.fillImageDefaults = undocumented(fillImageDefaults);
var lineDashOptionsDef = {
  lineDash: arrayOf(positiveNumber),
  lineDashOffset: number
};
var barHighlightOptionsDef = {
  ...fillOptionsDef,
  ...strokeOptionsDef,
  ...lineDashOptionsDef,
  opacity: ratio,
  cornerRadius: positiveNumber
};
var lineHighlightOptionsDef = {
  ...strokeOptionsDef,
  ...lineDashOptionsDef,
  opacity: ratio
};
var shapeHighlightOptionsDef = {
  ...fillOptionsDef,
  ...strokeOptionsDef,
  ...lineDashOptionsDef,
  opacity: ratio
};
function highlightOptionsDef(itemHighlightOptionsDef) {
  return {
    enabled: boolean,
    range: union("tooltip", "node"),
    highlightedItem: itemHighlightOptionsDef,
    unhighlightedItem: itemHighlightOptionsDef
  };
}
function multiSeriesHighlightOptionsDef(itemHighlightOptionsDef, seriesHighlightOptionsDef) {
  return {
    enabled: boolean,
    range: union("tooltip", "node"),
    highlightedItem: itemHighlightOptionsDef,
    unhighlightedItem: itemHighlightOptionsDef,
    highlightedSeries: seriesHighlightOptionsDef,
    unhighlightedSeries: seriesHighlightOptionsDef,
    bringToFront: boolean
  };
}
var googleFont = optionsDefs({ googleFont: string }, "google font");
var fontFamilyFull = or(string, themeOperator, googleFont, arrayOf(or(string, googleFont)));
var fontOptionsDef = {
  color,
  fontFamily: fontFamilyFull,
  fontSize: positiveNumber,
  fontStyle: union("normal", "italic", "oblique"),
  fontWeight: or(positiveNumber, union("normal", "bold", "bolder", "lighter"))
};
var paddingOptions = optionsDefs(
  { top: number, right: number, bottom: number, left: number },
  "padding object"
);
var padding = or(number, paddingOptions);
var borderOptionsDef = {
  enabled: boolean,
  stroke: color,
  strokeWidth: positiveNumber,
  strokeOpacity: ratio
};
var labelBoxOptionsDef = {
  border: { ...borderOptionsDef },
  cornerRadius: number,
  padding,
  ...fillOptionsDef
};

// packages/ag-charts-core/src/utils/math/shapeUtils.ts
function getMaxInnerRectSize(rotationDeg, containerWidth, containerHeight = Infinity) {
  const W = containerWidth;
  const H = containerHeight;
  const angle = rotationDeg % 180 * (Math.PI / 180);
  const sin = Math.abs(Math.sin(angle));
  const cos = Math.abs(Math.cos(angle));
  if (sin === 0)
    return { width: W, height: H };
  if (cos === 0)
    return { width: H, height: W };
  if (!isFinite(H)) {
    const r = cos / sin;
    const width = W / (cos + r * sin);
    return { width, height: r * width };
  }
  const denominator = cos * cos - sin * sin;
  if (denominator === 0) {
    const side = Math.min(W, H) / Math.SQRT2;
    return { width: side, height: side };
  }
  return {
    width: Math.abs((W * cos - H * sin) / denominator),
    height: Math.abs((H * cos - W * sin) / denominator)
  };
}

// packages/ag-charts-core/src/utils/arrays.ts
function toArray(value) {
  if (typeof value === "undefined") {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}
function unique(array2) {
  return Array.from(new Set(array2));
}
function groupBy(array2, iteratee) {
  return array2.reduce((result, item) => {
    const groupKey = iteratee(item);
    result[groupKey] ?? (result[groupKey] = []);
    result[groupKey].push(item);
    return result;
  }, {});
}
function arraysEqual(a, b) {
  if (a == null || b == null || a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i]) && Array.isArray(b[i])) {
      if (!arraysEqual(a[i], b[i])) {
        return false;
      }
    } else if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}
function circularSliceArray(data, size, offset = 0) {
  if (data.length === 0) {
    return [];
  }
  const result = [];
  for (let i = 0; i < size; i++) {
    result.push(data.at((i + offset) % data.length));
  }
  return result;
}
function sortBasedOnArray(baseArray, orderArray) {
  const orderMap = /* @__PURE__ */ new Map();
  orderArray.forEach((item, index) => {
    orderMap.set(item, index);
  });
  return baseArray.sort((a, b) => {
    const indexA = orderMap.get(a) ?? Infinity;
    const indexB = orderMap.get(b) ?? Infinity;
    return indexA - indexB;
  });
}
function dropFirstWhile(array2, cond) {
  let i = 0;
  while (i < array2.length && cond(array2[i])) {
    i += 1;
  }
  const deleteCount = i;
  if (deleteCount !== 0)
    array2.splice(0, deleteCount);
}
function dropLastWhile(array2, cond) {
  let i = array2.length - 1;
  while (i >= 0 && cond(array2[i])) {
    i -= 1;
  }
  const deleteCount = array2.length - 1 - i;
  if (deleteCount !== 0)
    array2.splice(array2.length - deleteCount, deleteCount);
}

// packages/ag-charts-core/src/utils/async.ts
var AsyncAwaitQueue = class {
  constructor() {
    this.queue = [];
  }
  /** Await another async process to call notify(). */
  await(timeout = 50) {
    return new Promise((resolve) => {
      const successFn = () => {
        clearTimeout(timeoutHandle);
        resolve(true);
      };
      const timeoutFn = () => {
        const queueIndex = this.queue.indexOf(successFn);
        if (queueIndex < 0)
          return;
        this.queue.splice(queueIndex, 1);
        resolve(false);
      };
      const timeoutHandle = setTimeout(timeoutFn, timeout);
      this.queue.push(successFn);
    });
  }
  /** Trigger any await()ing async processes to continue. */
  notify() {
    this.queue.splice(0).forEach((cb) => cb());
  }
};
function pause(delayMilliseconds = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delayMilliseconds);
  });
}

// packages/ag-charts-core/src/utils/iterators.ts
function* iterate(...iterators) {
  for (const iterator of iterators) {
    yield* iterator;
  }
}
function toIterable(value) {
  return value != null && typeof value === "object" && Symbol.iterator in value ? value : [value];
}
function first(iterable) {
  for (const value of iterable) {
    return value;
  }
  throw new Error("AG Charts - no first() value found");
}
function* entries(obj) {
  const resultTuple = [void 0, void 0];
  for (const key of Object.keys(obj)) {
    resultTuple[0] = key;
    resultTuple[1] = obj[key];
    yield resultTuple;
  }
}

// packages/ag-charts-core/src/utils/attributeUtil.ts
function booleanParser(value) {
  return value === "true";
}
function numberParser(value) {
  return Number(value);
}
function stringParser(value) {
  return value;
}
var AttributeTypeParsers = {
  role: stringParser,
  "aria-checked": booleanParser,
  "aria-controls": stringParser,
  "aria-describedby": stringParser,
  "aria-disabled": booleanParser,
  "aria-expanded": booleanParser,
  "aria-haspopup": stringParser,
  "aria-hidden": booleanParser,
  "aria-label": stringParser,
  "aria-labelledby": stringParser,
  "aria-live": stringParser,
  "aria-orientation": stringParser,
  "aria-selected": booleanParser,
  "data-focus-override": booleanParser,
  "data-focus-visible-override": booleanParser,
  "data-preventdefault": booleanParser,
  class: stringParser,
  for: stringParser,
  id: stringParser,
  tabindex: numberParser,
  title: stringParser,
  placeholder: stringParser
};
function setAttribute(e, qualifiedName, value) {
  if (value == null || value === "" || value === "") {
    e?.removeAttribute(qualifiedName);
  } else {
    e?.setAttribute(qualifiedName, value.toString());
  }
}
function setAttributes(e, attrs) {
  if (attrs == null)
    return;
  for (const [key, value] of entries(attrs)) {
    if (key === "class")
      continue;
    setAttribute(e, key, value);
  }
}
function getAttribute(e, qualifiedName, defaultValue) {
  if (!(e instanceof HTMLElement))
    return void 0;
  const value = e.getAttribute(qualifiedName);
  if (value === null)
    return defaultValue;
  return AttributeTypeParsers[qualifiedName]?.(value) ?? void 0;
}
function setElementStyle(e, property, value) {
  if (e == null)
    return;
  if (value == null) {
    e.style.removeProperty(property);
  } else {
    e.style.setProperty(property, value.toString());
  }
}
function setElementStyles(e, styles) {
  for (const [key, value] of entries(styles)) {
    setElementStyle(e, key, value);
  }
}

// packages/ag-charts-core/src/utils/boxBounds.ts
function boxCollides(b, x, y, w, h) {
  return x < b.x + b.width && x + w > b.x && y < b.y + b.height && y + h > b.y;
}
function boxContains(b, x, y, w = 0, h = 0) {
  return x >= b.x && x + w <= b.x + b.width && y >= b.y && y + h <= b.y + b.height;
}
function boxEmpty(b) {
  return b == null || b.height === 0 || b.width === 0 || isNaN(b.height) || isNaN(b.width);
}
function boxesEqual(a, b) {
  return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}

// packages/ag-charts-core/src/utils/binarySearch.ts
function findMaxIndex(min, max, iteratee) {
  if (min > max)
    return;
  let found;
  while (max >= min) {
    const index = Math.floor((max + min) / 2);
    const value = iteratee(index);
    if (value) {
      found = index;
      min = index + 1;
    } else {
      max = index - 1;
    }
  }
  return found;
}
function findMinIndex(min, max, iteratee) {
  if (min > max)
    return;
  let found;
  while (max >= min) {
    const index = Math.floor((max + min) / 2);
    const value = iteratee(index);
    if (value) {
      found = index;
      max = index - 1;
    } else {
      min = index + 1;
    }
  }
  return found;
}
function findMaxValue(min, max, iteratee) {
  if (min > max)
    return;
  let found;
  while (max >= min) {
    const index = Math.floor((max + min) / 2);
    const value = iteratee(index);
    if (value == null) {
      max = index - 1;
    } else {
      found = value;
      min = index + 1;
    }
  }
  return found;
}
function findMinValue(min, max, iteratee) {
  if (min > max)
    return;
  let found;
  while (max >= min) {
    const index = Math.floor((max + min) / 2);
    const value = iteratee(index);
    if (value == null) {
      min = index + 1;
    } else {
      found = value;
      max = index - 1;
    }
  }
  return found;
}

// packages/ag-charts-core/src/utils/caching.ts
var SimpleCache = class {
  constructor(getter) {
    this.getter = getter;
  }
  get() {
    this.result ?? (this.result = this.getter());
    return this.result;
  }
  clear() {
    this.result = void 0;
  }
};
var WeakCache = class {
  constructor(getter) {
    this.getter = getter;
  }
  get() {
    let result = this.result?.deref();
    if (result)
      return result;
    result = this.getter();
    this.result = new WeakRef(result);
    return result;
  }
  clear() {
    this.result = void 0;
  }
};

// packages/ag-charts-core/src/utils/cleanupRegistry.ts
var CleanupRegistry = class {
  constructor() {
    this.callbacks = /* @__PURE__ */ new Set();
  }
  flush() {
    for (const cb of this.callbacks) {
      cb();
    }
    this.callbacks.clear();
  }
  merge(registry) {
    for (const cb of registry.callbacks) {
      this.callbacks.add(cb);
    }
  }
  register(...callbacks) {
    for (const cb of callbacks) {
      if (!cb)
        continue;
      this.callbacks.add(cb);
    }
  }
};

// packages/ag-charts-core/src/utils/diff.ts
function diffArrays(previous, current) {
  const size = Math.max(previous.length, current.length);
  const added = /* @__PURE__ */ new Set();
  const removed = /* @__PURE__ */ new Set();
  for (let i = 0; i < size; i++) {
    const prev = previous[i];
    const curr = current[i];
    if (prev === curr)
      continue;
    if (removed.has(curr)) {
      removed.delete(curr);
    } else if (curr) {
      added.add(curr);
    }
    if (added.has(prev)) {
      added.delete(prev);
    } else if (prev) {
      removed.add(prev);
    }
  }
  return { changed: added.size > 0 || removed.size > 0, added, removed };
}

// packages/ag-charts-core/src/utils/numbers.ts
function clamp(min, value, max) {
  return Math.min(max, Math.max(min, value));
}
function inRange(value, range, epsilon = 1e-10) {
  return value >= range[0] - epsilon && value <= range[1] + epsilon;
}
function isNumberEqual(a, b, epsilon = 1e-10) {
  return a === b || Math.abs(a - b) < epsilon;
}
function isNegative(value) {
  return Math.sign(value) === -1 || Object.is(value, -0);
}
function isInteger(value) {
  return value % 1 === 0;
}
function roundTo(value, decimals = 2) {
  const base = 10 ** decimals;
  return Math.round(value * base) / base;
}
function modulus(n, m) {
  return Math.floor(n % m + (n < 0 ? Math.abs(m) : 0));
}
function countFractionDigits(value) {
  if (Math.floor(value) === value) {
    return 0;
  }
  let valueString = String(value);
  let exponent = 0;
  if (value < 1e-6 || value >= 1e21) {
    let exponentString;
    [valueString, exponentString] = valueString.split("e");
    if (exponentString != null) {
      exponent = Number(exponentString);
    }
  }
  const decimalPlaces = valueString.split(".")[1]?.length ?? 0;
  return Math.max(decimalPlaces - exponent, 0);
}

// packages/ag-charts-core/src/utils/geoJson.ts
function isValidCoordinate(value) {
  return Array.isArray(value) && value.length >= 2 && value.every(isFiniteNumber);
}
function isValidCoordinates(value) {
  return Array.isArray(value) && value.length >= 2 && value.every(isValidCoordinate);
}
function hasSameStartEndPoint(c) {
  const start = c[0];
  const end = c[c.length - 1];
  return isNumberEqual(start[0], end[0], 1e-3) && isNumberEqual(start[1], end[1], 1e-3);
}
function isValidPolygon(value) {
  return Array.isArray(value) && value.every(isValidCoordinates) && value.every(hasSameStartEndPoint);
}
function isValidGeometry(value) {
  if (value === null)
    return true;
  if (!isObject(value) || value.type == null)
    return false;
  const { type, coordinates } = value;
  switch (type) {
    case "GeometryCollection":
      return Array.isArray(value.geometries) && value.geometries.every(isValidGeometry);
    case "MultiPolygon":
      return Array.isArray(coordinates) && coordinates.every(isValidPolygon);
    case "Polygon":
      return isValidPolygon(coordinates);
    case "MultiLineString":
      return Array.isArray(coordinates) && coordinates.every(isValidCoordinates);
    case "LineString":
      return isValidCoordinates(coordinates);
    case "MultiPoint":
      return isValidCoordinates(coordinates);
    case "Point":
      return isValidCoordinate(coordinates);
    default:
      return false;
  }
}
function isValidFeature(value) {
  return isObject(value) && value.type === "Feature" && isValidGeometry(value.geometry);
}
function isValidFeatureCollection(value) {
  return isObject(value) && value.type === "FeatureCollection" && Array.isArray(value.features) && value.features.every(isValidFeature);
}
var geoJson = attachDescription(isValidFeatureCollection, "a GeoJSON object");

// packages/ag-charts-core/src/utils/graph.ts
var AdjacencyListGraph = class {
  constructor(cachedNeighboursEdge, processedEdge) {
    this._vertexCount = 0;
    this.pendingProcessingEdgesFrom = [];
    this.pendingProcessingEdgesTo = [];
    this.cachedNeighboursEdge = cachedNeighboursEdge;
    this.processedEdge = processedEdge;
  }
  clear() {
    this._vertexCount = 0;
    this.pendingProcessingEdgesFrom = [];
    this.pendingProcessingEdgesTo = [];
  }
  addVertex(value) {
    const vertex = new Vertex(value);
    this._vertexCount++;
    return vertex;
  }
  addEdge(from, to, edge) {
    if (edge === this.cachedNeighboursEdge) {
      from.updateCachedNeighbours().set(to.value, to);
    } else if (edge === this.processedEdge) {
      this.pendingProcessingEdgesFrom.push(from);
      this.pendingProcessingEdgesTo.push(to);
    }
    const { edges } = from;
    const vertices = edges.get(edge);
    if (!vertices) {
      edges.set(edge, [to]);
    } else if (vertices.indexOf(to) === -1) {
      vertices.push(to);
    }
  }
  removeVertex(vertex) {
    this._vertexCount--;
    const edges = vertex.edges;
    if (!edges)
      return;
    for (const [_edge, adjacentVertices] of edges) {
      this._vertexCount -= adjacentVertices.length;
    }
    vertex.clear();
  }
  removeEdge(from, to) {
    for (const [edge, adjacentVertices] of from.edges) {
      const index = adjacentVertices.indexOf(to);
      adjacentVertices.splice(index, 1);
      if (adjacentVertices.length === 0) {
        from.edges.delete(edge);
      }
    }
  }
  removeEdges(from, edgeValue) {
    from.edges.delete(edgeValue);
  }
  getVertexValue(vertex) {
    return vertex.value;
  }
  // Iterate all the neighbours of a given vertex.
  *neighbours(from) {
    for (const [_edge, adjacentVertices] of from.edges) {
      for (const adjacentVertex of adjacentVertices) {
        yield adjacentVertex;
      }
    }
  }
  // Iterate all the neighbours and their edges of a given vertex
  *neighboursAndEdges(from) {
    for (const [edge, adjacentVertices] of from.edges) {
      for (const adjacentVertex of adjacentVertices) {
        yield [adjacentVertex, edge];
      }
    }
  }
  // Get the set of neighbours along a given edge.
  neighboursWithEdgeValue(from, edgeValue) {
    return from.edges.get(edgeValue);
  }
  // Find the first neighbour along the given edge.
  findNeighbour(from, edgeValue) {
    return from.edges.get(edgeValue)?.[0];
  }
  // Find the value of the first neighbour along the given edge.
  findNeighbourValue(from, edgeValue) {
    const neighbour = this.findNeighbour(from, edgeValue);
    if (!neighbour)
      return;
    return this.getVertexValue(neighbour);
  }
  // Find the first neighbour with a given value, optionally along a given edge.
  findNeighbourWithValue(from, value, edgeValue) {
    const neighbours = edgeValue == null ? this.neighbours(from) : this.neighboursWithEdgeValue(from, edgeValue);
    if (!neighbours)
      return;
    for (const neighbour of neighbours) {
      if (this.getVertexValue(neighbour) === value) {
        return neighbour;
      }
    }
  }
  // Find a vertex by iterating an array of vertex values along a given edge.
  findVertexAlongEdge(from, findValues, edgeValue) {
    if (edgeValue === this.cachedNeighboursEdge) {
      let found2;
      for (const value of findValues) {
        found2 = (found2 ?? from).readCachedNeighbours()?.get(value);
        if (!found2)
          return;
      }
      return found2;
    }
    if (findValues.length === 0)
      return;
    let found = from;
    for (const value of findValues) {
      const neighbours = found ? this.neighboursWithEdgeValue(found, edgeValue) : void 0;
      if (!neighbours)
        return;
      found = neighbours.find((n) => n.value === value);
    }
    return found;
  }
  adjacent(from, to) {
    for (const [_edge, adjacentVertices] of from.edges) {
      if (adjacentVertices.includes(to))
        return true;
    }
    return false;
  }
};
var Vertex = class {
  constructor(value) {
    this.value = value;
    this.edges = /* @__PURE__ */ new Map();
  }
  readCachedNeighbours() {
    return this._cachedNeighbours;
  }
  updateCachedNeighbours() {
    this._cachedNeighbours ?? (this._cachedNeighbours = /* @__PURE__ */ new Map());
    return this._cachedNeighbours;
  }
  clear() {
    this.edges.clear();
    this._cachedNeighbours?.clear();
  }
};

// packages/ag-charts-core/src/utils/id.ts
var ID_MAP = /* @__PURE__ */ new Map();
var elementIDBrand = Symbol("ElementID");
var nextElementID = 1;
function resetIds() {
  ID_MAP.clear();
  nextElementID = 1;
}
function createId(instance) {
  const constructor = instance.constructor;
  const className = Object.hasOwn(constructor, "className") ? constructor.className : constructor.name;
  if (!className) {
    throw new Error(`The ${constructor} is missing the 'className' property.`);
  }
  const nextId = (ID_MAP.get(className) ?? 0) + 1;
  ID_MAP.set(className, nextId);
  return `${className}-${nextId}`;
}
function createElementId() {
  return `ag-charts-${nextElementID++}`;
}
function generateUUID() {
  return crypto.randomUUID?.() ?? generateUUIDv4();
}
function generateUUIDv4() {
  const uuidArray = new Uint8Array(16);
  crypto.getRandomValues(uuidArray);
  uuidArray[6] = uuidArray[6] & 15 | 64;
  uuidArray[8] = uuidArray[8] & 63 | 128;
  let uuid = "";
  for (let i = 0; i < uuidArray.length; i++) {
    if (i === 4 || i === 6 || i === 8 || i === 10) {
      uuid += "-";
    }
    uuid += uuidArray[i].toString(16).padStart(2, "0");
  }
  return uuid;
}

// packages/ag-charts-core/src/utils/linkedList.ts
var insertListItemsSorted = (list, items, cmp) => {
  let head = list;
  let current = head;
  for (const value of items) {
    if (head == null || cmp(head.value, value) > 0) {
      head = { value, next: head };
      current = head;
    } else {
      current = current;
      while (current.next != null && cmp(current.next.value, value) <= 0) {
        current = current.next;
      }
      current.next = { value, next: current.next };
    }
  }
  return head;
};

// packages/ag-charts-core/src/utils/numberFormat.ts
var formatRegEx = /^(?:(.)?([<>=^]))?([+\-( ])?([$€£¥₣₹#])?(0)?(\d+)?(,)?(?:\.(\d+))?(~)?([%a-z])?$/i;
var surroundedRegEx = /^((?:[^#]|#[^{])*)#{([^}]+)}(.*)$/;
function isValidNumberFormat(value) {
  if (!isString(value))
    return false;
  const match = surroundedRegEx.exec(value);
  return formatRegEx.test(match ? match[2] : value);
}
function parseNumberFormat(format) {
  let prefix;
  let suffix;
  const surrounded = surroundedRegEx.exec(format);
  if (surrounded) {
    [, prefix, format, suffix] = surrounded;
  }
  const match = formatRegEx.exec(format);
  if (!match) {
    logger_exports.warnOnce(`The number formatter is invalid: ${format}`);
    return;
  }
  const [, fill, align, sign, symbol, zero, width, comma, precision, trim, type] = match;
  return {
    fill,
    align,
    sign,
    symbol,
    zero,
    width: parseInt(width),
    comma,
    precision: parseInt(precision),
    trim: Boolean(trim),
    type,
    prefix,
    suffix
  };
}
function createNumberFormatter(format) {
  const options = typeof format === "string" ? parseNumberFormat(format) : format;
  if (options == null)
    return;
  const { fill, align, sign = "-", symbol, zero, width, comma, type, prefix = "", suffix = "", precision } = options;
  let { trim } = options;
  const precisionIsNaN = precision == null || isNaN(precision);
  let formatBody;
  if (!type) {
    formatBody = decimalTypes["g"];
    trim = true;
  } else if (type in decimalTypes && type in integerTypes) {
    formatBody = precisionIsNaN ? integerTypes[type] : decimalTypes[type];
  } else if (type in decimalTypes) {
    formatBody = decimalTypes[type];
  } else if (type in integerTypes) {
    formatBody = integerTypes[type];
  } else {
    throw new Error(`The number formatter type is invalid: ${type}`);
  }
  const defaultFormatterPrecision = type ? 6 : 12;
  let formatterPrecision;
  if (!precisionIsNaN) {
    formatterPrecision = precision;
  }
  return (n, fractionDigits) => {
    let result = formatBody(n, formatterPrecision ?? fractionDigits ?? defaultFormatterPrecision);
    if (trim) {
      result = removeTrailingZeros(result);
    }
    if (comma) {
      result = insertSeparator(result, comma);
    }
    result = addSign(n, result, sign);
    if (symbol && symbol !== "#") {
      result = `${symbol}${result}`;
    }
    if (symbol === "#" && type === "x") {
      result = `0x${result}`;
    }
    if (type === "s") {
      result = `${result}${getSIPrefix(n)}`;
    }
    if (type === "%" || type === "p") {
      result = `${result}%`;
    }
    if (width != null && !isNaN(width)) {
      result = addPadding(result, width, fill ?? zero, align);
    }
    result = `${prefix}${result}${suffix}`;
    return result;
  };
}
var integerTypes = {
  b: (n) => absFloor(n).toString(2),
  c: (n) => String.fromCharCode(n),
  d: (n) => Math.round(Math.abs(n)).toFixed(0),
  o: (n) => absFloor(n).toString(8),
  x: (n) => absFloor(n).toString(16),
  X: (n) => integerTypes.x(n).toUpperCase(),
  n: (n) => integerTypes.d(n),
  "%": (n) => `${absFloor(n * 100).toFixed(0)}`
};
var decimalTypes = {
  e: (n, f) => Math.abs(n).toExponential(f),
  E: (n, f) => decimalTypes.e(n, f).toUpperCase(),
  f: (n, f) => Math.abs(n).toFixed(f),
  F: (n, f) => decimalTypes.f(n, f).toUpperCase(),
  g: (n, f) => {
    if (n === 0) {
      return "0";
    }
    const a = Math.abs(n);
    const p = Math.floor(Math.log10(a));
    if (p >= -4 && p < f) {
      return a.toFixed(f - 1 - p);
    }
    return a.toExponential(f - 1);
  },
  G: (n, f) => decimalTypes.g(n, f).toUpperCase(),
  n: (n, f) => decimalTypes.g(n, f),
  p: (n, f) => decimalTypes.r(n * 100, f),
  r: (n, f) => {
    if (n === 0) {
      return "0";
    }
    const a = Math.abs(n);
    const p = Math.floor(Math.log10(a));
    const q = p - (f - 1);
    if (q <= 0) {
      return a.toFixed(-q);
    }
    const x = 10 ** q;
    return (Math.round(a / x) * x).toFixed();
  },
  s: (n, f) => {
    const p = getSIPrefixPower(n);
    return decimalTypes.r(n / 10 ** p, f);
  },
  "%": (n, f) => decimalTypes.f(n * 100, f)
};
var minSIPrefix = -24;
var maxSIPrefix = 24;
var siPrefixes = {
  [minSIPrefix]: "y",
  [-21]: "z",
  [-18]: "a",
  [-15]: "f",
  [-12]: "p",
  [-9]: "n",
  [-6]: "\xB5",
  [-3]: "m",
  [0]: "",
  [3]: "k",
  [6]: "M",
  [9]: "G",
  [12]: "T",
  [15]: "P",
  [18]: "E",
  [21]: "Z",
  [maxSIPrefix]: "Y"
};
var minusSign = "\u2212";
function absFloor(n) {
  return Math.floor(Math.abs(n));
}
function removeTrailingZeros(numString) {
  if (!numString.endsWith("0") || numString.indexOf(".") === -1)
    return numString;
  let endIndex = numString.length - 1;
  while (endIndex > 0) {
    if (numString[endIndex] == "0") {
      endIndex -= 1;
    } else if (numString[endIndex] == ".") {
      endIndex -= 1;
      break;
    } else {
      break;
    }
  }
  return numString.substring(0, endIndex + 1);
}
function insertSeparator(numString, separator) {
  let dotIndex = numString.indexOf(".");
  if (dotIndex < 0) {
    dotIndex = numString.length;
  }
  const integerChars = numString.substring(0, dotIndex).split("");
  const fractionalPart = numString.substring(dotIndex);
  for (let i = integerChars.length - 3; i > 0; i -= 3) {
    integerChars.splice(i, 0, separator);
  }
  return `${integerChars.join("")}${fractionalPart}`;
}
function getSIPrefix(n) {
  return siPrefixes[getSIPrefixPower(n)];
}
function getSIPrefixPower(n) {
  return clamp(minSIPrefix, n ? Math.floor(Math.log10(Math.abs(n)) / 3) * 3 : 0, maxSIPrefix);
}
function addSign(num, numString, signType = "") {
  if (signType === "(") {
    return num >= 0 ? numString : `(${numString})`;
  }
  const plusSign = signType === "+" ? "+" : "";
  return `${num >= 0 ? plusSign : minusSign}${numString}`;
}
function addPadding(numString, width, fill = " ", align = ">") {
  let result = numString;
  if (align === ">" || !align) {
    result = result.padStart(width, fill);
  } else if (align === "<") {
    result = result.padEnd(width, fill);
  } else if (align === "^") {
    const padWidth = Math.max(0, width - result.length);
    const padLeft = Math.ceil(padWidth / 2);
    const padRight = Math.floor(padWidth / 2);
    result = result.padStart(padLeft + result.length, fill);
    result = result.padEnd(padRight + result.length, fill);
  }
  return result;
}
export {
  AdjacencyListGraph,
  AsyncAwaitQueue,
  CleanupRegistry,
  ErrorType,
  EventEmitter,
  logger_exports as Logger,
  moduleRegistry_exports as ModuleRegistry,
  ModuleType,
  SimpleCache,
  UnknownError,
  ValidationError,
  Vertex,
  WeakCache,
  and,
  array,
  arrayLength,
  arrayOf,
  arrayOfDefs,
  arraysEqual,
  attachDescription,
  attachListener,
  barHighlightOptionsDef,
  boolean,
  borderOptionsDef,
  boxCollides,
  boxContains,
  boxEmpty,
  boxesEqual,
  callback,
  callbackDefs,
  callbackOf,
  circularSliceArray,
  clamp,
  color,
  colorStopsOrderValidator,
  colorUnion,
  constant,
  countFractionDigits,
  countLines,
  createElement,
  createElementId,
  createId,
  createNumberFormatter,
  createSvgElement,
  date,
  debounce,
  defined,
  diffArrays,
  downloadUrl,
  dropFirstWhile,
  dropLastWhile,
  entries,
  fillGradientDefaults,
  fillImageDefaults,
  fillOptionsDef,
  fillPatternDefaults,
  findMaxIndex,
  findMaxValue,
  findMinIndex,
  findMinValue,
  first,
  fontFamilyFull,
  fontOptionsDef,
  generateUUID,
  geoJson,
  getAttribute,
  getDocument,
  getMaxInnerRectSize,
  getWindow,
  googleFont,
  gradientColorStops,
  gradientStrict,
  greaterThan,
  groupBy,
  hasRequiredInPath,
  highlightOptionsDef,
  htmlElement,
  inRange,
  insertListItemsSorted,
  instanceOf,
  isArray,
  isBoolean,
  isColor,
  isDate,
  isDefined,
  isEmptyObject,
  isEnumKey,
  isEnumValue,
  isFiniteNumber,
  isFunction,
  isHtmlElement,
  isInteger,
  isKeyOf,
  isNegative,
  isNumber,
  isNumberEqual,
  isObject,
  isObjectLike,
  isPlainObject,
  isRegExp,
  isString,
  isSymbol,
  isValidDate,
  isValidNumberFormat,
  iterate,
  joinFormatted,
  kebabCase,
  labelBoxOptionsDef,
  lessThan,
  levenshteinDistance,
  lineDashOptionsDef,
  lineHighlightOptionsDef,
  modulus,
  multiSeriesHighlightOptionsDef,
  number,
  numberMin,
  numberRange,
  object,
  optionsDefs,
  or,
  padding,
  paddingOptions,
  parseColor,
  parseNumberFormat,
  pause,
  positiveNumber,
  positiveNumberNonZero,
  ratio,
  required,
  resetIds,
  roundTo,
  safeCall,
  setAttribute,
  setAttributes,
  setDocument,
  setElementStyle,
  setElementStyles,
  setWindow,
  shapeHighlightOptionsDef,
  sortBasedOnArray,
  string,
  stringLength,
  stringifyValue,
  strokeOptionsDef,
  themeOperator,
  throttle,
  toArray,
  toIterable,
  toPlainText,
  typeUnion,
  undocumented,
  union,
  unionSymbol,
  unique,
  validate
};
