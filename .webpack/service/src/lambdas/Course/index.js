/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../src/common/index.js":
/*!************************************!*\
  !*** ../../../src/common/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Methods': '*',
  'Access-Control-Allow-Origin': '*'
};
const APIResponses = {
  _200(data = {}) {
    return {
      headers,
      statusCode: 200,
      body: JSON.stringify({ ...data,
        status: 'success'
      })
    };
  },

  _400(data = {}) {
    return {
      headers,
      statusCode: 400,
      body: JSON.stringify({
        data,
        status: 'error'
      })
    };
  }

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (APIResponses);

/***/ }),

/***/ "../../../src/models/Base.js":
/*!***********************************!*\
  !*** ../../../src/models/Base.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dynamoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dynamoose */ "../../dynamoose/dist/index.js");
/* harmony import */ var dynamoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dynamoose__WEBPACK_IMPORTED_MODULE_1__);



const genSchema = schema => {
  return new dynamoose__WEBPACK_IMPORTED_MODULE_1__.Schema({
    id: {
      type: String,
      required: true,
      hashKey: true
    },
    tags: {
      type: [String],
      required: false
    },
    active: {
      type: Boolean,
      required: true,
      default: true
    },
    ...schema
  }, {
    timestamps: true
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (genSchema);

/***/ }),

/***/ "../../../src/models/Course.js":
/*!*************************************!*\
  !*** ../../../src/models/Course.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dynamoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dynamoose */ "../../dynamoose/dist/index.js");
/* harmony import */ var dynamoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dynamoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Base */ "../../../src/models/Base.js");
/* harmony import */ var _CourseCategory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CourseCategory */ "../../../src/models/CourseCategory.js");




const courseSchema = (0,_Base__WEBPACK_IMPORTED_MODULE_2__["default"])({
  name: {
    type: String,
    required: true,
    trim: true
  },
  time: {
    type: Number,
    required: true,
    default: 0
  },
  score: {
    type: Number,
    required: true,
    default: 0
  },
  categoryId: [_CourseCategory__WEBPACK_IMPORTED_MODULE_3__["default"]]
});
const Course = (0,dynamoose__WEBPACK_IMPORTED_MODULE_1__.model)('Course_rcv001', courseSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Course);

/***/ }),

/***/ "../../../src/models/CourseCategory.js":
/*!*********************************************!*\
  !*** ../../../src/models/CourseCategory.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dynamoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dynamoose */ "../../dynamoose/dist/index.js");
/* harmony import */ var dynamoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dynamoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Base */ "../../../src/models/Base.js");



const courseCategorySchema = (0,_Base__WEBPACK_IMPORTED_MODULE_2__["default"])({
  topic: {
    type: String,
    required: true
  }
});
const CourseCategory = (0,dynamoose__WEBPACK_IMPORTED_MODULE_1__.model)('CourseCategory_rcv001', courseCategorySchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseCategory);

/***/ }),

/***/ "../../../src/services/course.js":
/*!***************************************!*\
  !*** ../../../src/services/course.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_Course__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Course */ "../../../src/models/Course.js");


/**
 * Create a course
 * description: Builds a new course
 * @param {Object} userBody
 * @returns {Promise<course>}
 */

const createCourse = async event => {
  const courses = await _models_Course__WEBPACK_IMPORTED_MODULE_1__["default"].scan().where('name').eq(event.name).exec();

  if (Array.isArray(courses) && courses.length > 0) {
    throw new Error('already exists');
  }

  return _models_Course__WEBPACK_IMPORTED_MODULE_1__["default"].create({
    event
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCourse);

/***/ }),

/***/ "../../buffer-from/index.js":
/*!**********************************!*\
  !*** ../../buffer-from/index.js ***!
  \**********************************/
/***/ ((module) => {

/* eslint-disable node/no-deprecated-api */

var toString = Object.prototype.toString

var isModern = (
  typeof Buffer !== 'undefined' &&
  typeof Buffer.alloc === 'function' &&
  typeof Buffer.allocUnsafe === 'function' &&
  typeof Buffer.from === 'function'
)

function isArrayBuffer (input) {
  return toString.call(input).slice(8, -1) === 'ArrayBuffer'
}

function fromArrayBuffer (obj, byteOffset, length) {
  byteOffset >>>= 0

  var maxLength = obj.byteLength - byteOffset

  if (maxLength < 0) {
    throw new RangeError("'offset' is out of bounds")
  }

  if (length === undefined) {
    length = maxLength
  } else {
    length >>>= 0

    if (length > maxLength) {
      throw new RangeError("'length' is out of bounds")
    }
  }

  return isModern
    ? Buffer.from(obj.slice(byteOffset, byteOffset + length))
    : new Buffer(new Uint8Array(obj.slice(byteOffset, byteOffset + length)))
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  return isModern
    ? Buffer.from(string, encoding)
    : new Buffer(string, encoding)
}

function bufferFrom (value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (isArrayBuffer(value)) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  return isModern
    ? Buffer.from(value)
    : new Buffer(value)
}

module.exports = bufferFrom


/***/ }),

/***/ "../../dynamoose/dist/Condition.js":
/*!*****************************************!*\
  !*** ../../dynamoose/dist/Condition.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Condition = void 0;
const Document_1 = __webpack_require__(/*! ./Document */ "../../dynamoose/dist/Document.js");
const CustomError = __webpack_require__(/*! ./Error */ "../../dynamoose/dist/Error.js");
const utils = __webpack_require__(/*! ./utils */ "../../dynamoose/dist/utils/index.js");
const OR = Symbol("OR");
const isRawConditionObject = (object) => Object.keys(object).length === 3 && ["ExpressionAttributeValues", "ExpressionAttributeNames"].every((item) => Boolean(object[item]) && typeof object[item] === "object");
var ConditionComparisonComparatorName;
(function (ConditionComparisonComparatorName) {
    ConditionComparisonComparatorName["equals"] = "eq";
    ConditionComparisonComparatorName["lessThan"] = "lt";
    ConditionComparisonComparatorName["lessThanEquals"] = "le";
    ConditionComparisonComparatorName["greaterThan"] = "gt";
    ConditionComparisonComparatorName["greaterThanEquals"] = "ge";
    ConditionComparisonComparatorName["beginsWith"] = "beginsWith";
    ConditionComparisonComparatorName["contains"] = "contains";
    ConditionComparisonComparatorName["exists"] = "exists";
    ConditionComparisonComparatorName["in"] = "in";
    ConditionComparisonComparatorName["between"] = "between";
})(ConditionComparisonComparatorName || (ConditionComparisonComparatorName = {}));
var ConditionComparisonComparatorDynamoName;
(function (ConditionComparisonComparatorDynamoName) {
    ConditionComparisonComparatorDynamoName["equals"] = "EQ";
    ConditionComparisonComparatorDynamoName["notEquals"] = "NE";
    ConditionComparisonComparatorDynamoName["lessThan"] = "LT";
    ConditionComparisonComparatorDynamoName["lessThanEquals"] = "LE";
    ConditionComparisonComparatorDynamoName["greaterThan"] = "GT";
    ConditionComparisonComparatorDynamoName["greaterThanEquals"] = "GE";
    ConditionComparisonComparatorDynamoName["beginsWith"] = "BEGINS_WITH";
    ConditionComparisonComparatorDynamoName["contains"] = "CONTAINS";
    ConditionComparisonComparatorDynamoName["notContains"] = "NOT_CONTAINS";
    ConditionComparisonComparatorDynamoName["exists"] = "EXISTS";
    ConditionComparisonComparatorDynamoName["notExists"] = "NOT_EXISTS";
    ConditionComparisonComparatorDynamoName["in"] = "IN";
    ConditionComparisonComparatorDynamoName["between"] = "BETWEEN";
})(ConditionComparisonComparatorDynamoName || (ConditionComparisonComparatorDynamoName = {}));
const types = [
    { "name": ConditionComparisonComparatorName.equals, "typeName": ConditionComparisonComparatorDynamoName.equals, "not": ConditionComparisonComparatorDynamoName.notEquals },
    { "name": ConditionComparisonComparatorName.lessThan, "typeName": ConditionComparisonComparatorDynamoName.lessThan, "not": ConditionComparisonComparatorDynamoName.greaterThanEquals },
    { "name": ConditionComparisonComparatorName.lessThanEquals, "typeName": ConditionComparisonComparatorDynamoName.lessThanEquals, "not": ConditionComparisonComparatorDynamoName.greaterThan },
    { "name": ConditionComparisonComparatorName.greaterThan, "typeName": ConditionComparisonComparatorDynamoName.greaterThan, "not": ConditionComparisonComparatorDynamoName.lessThanEquals },
    { "name": ConditionComparisonComparatorName.greaterThanEquals, "typeName": ConditionComparisonComparatorDynamoName.greaterThanEquals, "not": ConditionComparisonComparatorDynamoName.lessThan },
    { "name": ConditionComparisonComparatorName.beginsWith, "typeName": ConditionComparisonComparatorDynamoName.beginsWith },
    { "name": ConditionComparisonComparatorName.contains, "typeName": ConditionComparisonComparatorDynamoName.contains, "not": ConditionComparisonComparatorDynamoName.notContains },
    { "name": ConditionComparisonComparatorName.exists, "typeName": ConditionComparisonComparatorDynamoName.exists, "not": ConditionComparisonComparatorDynamoName.notExists },
    { "name": ConditionComparisonComparatorName.in, "typeName": ConditionComparisonComparatorDynamoName.in },
    { "name": ConditionComparisonComparatorName.between, "typeName": ConditionComparisonComparatorDynamoName.between, "multipleArguments": true }
];
class Condition {
    constructor(object) {
        if (object instanceof Condition) {
            Object.entries(object).forEach((entry) => {
                const [key, value] = entry;
                this[key] = value;
            });
        }
        else {
            this.settings = {
                "conditions": [],
                "pending": {} // represents the pending chain of filter data waiting to be attached to the `conditions` parameter. For example, storing the key before we know what the comparison operator is.
            };
            if (typeof object === "object") {
                if (!isRawConditionObject(object)) {
                    Object.keys(object).forEach((key) => {
                        const value = object[key];
                        const valueType = typeof value === "object" && Object.keys(value).length > 0 ? Object.keys(value)[0] : "eq";
                        const comparisonType = types.find((item) => item.name === valueType);
                        if (!comparisonType) {
                            throw new CustomError.InvalidFilterComparison(`The type: ${valueType} is invalid.`);
                        }
                        this.settings.conditions.push({
                            [key]: {
                                "type": comparisonType.typeName,
                                "value": typeof value[valueType] !== "undefined" && value[valueType] !== null ? value[valueType] : value
                            }
                        });
                    });
                }
            }
            else if (object) {
                this.settings.pending.key = object;
            }
            this.settings.raw = object;
        }
        return this;
    }
}
exports.Condition = Condition;
function finalizePending(instance) {
    const pending = instance.settings.pending;
    let dynamoNameType;
    if (pending.not === true) {
        if (!pending.type.not) {
            throw new CustomError.InvalidFilterComparison(`${pending.type.typeName} can not follow not()`);
        }
        dynamoNameType = pending.type.not;
    }
    else {
        dynamoNameType = pending.type.typeName;
    }
    instance.settings.conditions.push({
        [pending.key]: {
            "type": dynamoNameType,
            "value": pending.value
        }
    });
    instance.settings.pending = {};
}
Condition.prototype.parenthesis = Condition.prototype.group = function (value) {
    value = typeof value === "function" ? value(new Condition()) : value;
    this.settings.conditions.push(value.settings.conditions);
    return this;
};
Condition.prototype.or = function () {
    this.settings.conditions.push(OR);
    return this;
};
Condition.prototype.and = function () {
    return this;
};
Condition.prototype.not = function () {
    this.settings.pending.not = !this.settings.pending.not;
    return this;
};
Condition.prototype.where = Condition.prototype.filter = Condition.prototype.attribute = function (key) {
    this.settings.pending = { key };
    return this;
};
// TODO: I don't think this prototypes are being exposed which is gonna cause a lot of problems with our type definition file. Need to figure out a better way to do this since they aren't defined and are dynamic.
types.forEach((type) => {
    Condition.prototype[type.name] = function (...args) {
        if (args.includes(undefined)) {
            console.warn(`Dynamoose Warning: Passing \`undefined\` into a condition ${type.name} is not supported and can lead to behavior where DynamoDB returns an error related to your conditional. In a future version of Dynamoose this behavior will throw an error. If you believe your conditional is valid and you received this message in error, please submit an issue at https://github.com/dynamoose/dynamoose/issues/new/choose.`);
        }
        this.settings.pending.value = type.multipleArguments ? args : args[0];
        this.settings.pending.type = type;
        finalizePending(this);
        return this;
    };
});
Condition.prototype.requestObject = function (settings = { "conditionString": "ConditionExpression", "conditionStringType": "string" }) {
    if (this.settings.raw && utils.object.equals(Object.keys(this.settings.raw).sort(), [settings.conditionString, "ExpressionAttributeValues", "ExpressionAttributeNames"].sort())) {
        return Object.entries(this.settings.raw.ExpressionAttributeValues).reduce((obj, entry) => {
            const [key, value] = entry;
            // TODO: we should fix this so that we can do `isDynamoItem(value)`
            if (!Document_1.Document.isDynamoObject({ "key": value })) {
                obj.ExpressionAttributeValues[key] = Document_1.Document.objectToDynamo(value, { "type": "value" });
            }
            return obj;
        }, this.settings.raw);
    }
    else if (this.settings.conditions.length === 0) {
        return {};
    }
    let index = (settings.index || {}).start || 0;
    const setIndex = (i) => {
        index = i;
        (settings.index || { "set": utils.empty_function }).set(i);
    };
    function main(input) {
        return input.reduce((object, entry, i, arr) => {
            let expression = "";
            if (Array.isArray(entry)) {
                const result = main(entry);
                const newData = utils.merge_objects.main({ "combineMethod": "object_combine" })(Object.assign({}, result), Object.assign({}, object));
                const returnObject = utils.object.pick(newData, ["ExpressionAttributeNames", "ExpressionAttributeValues"]);
                expression = settings.conditionStringType === "array" ? result[settings.conditionString] : `(${result[settings.conditionString]})`;
                object = Object.assign(Object.assign({}, object), returnObject);
            }
            else if (entry !== OR) {
                const [key, condition] = Object.entries(entry)[0];
                const { value } = condition;
                const keys = { "name": `#a${index}`, "value": `:v${index}` };
                setIndex(++index);
                const keyParts = key.split(".");
                if (keyParts.length === 1) {
                    object.ExpressionAttributeNames[keys.name] = key;
                }
                else {
                    keys.name = keyParts.reduce((finalName, part, index) => {
                        const name = `${keys.name}_${index}`;
                        object.ExpressionAttributeNames[name] = part;
                        finalName.push(name);
                        return finalName;
                    }, []).join(".");
                }
                const toDynamo = (value) => {
                    return Document_1.Document.objectToDynamo(value, { "type": "value" });
                };
                object.ExpressionAttributeValues[keys.value] = toDynamo(value);
                switch (condition.type) {
                    case "EQ":
                    case "NE":
                        expression = `${keys.name} ${condition.type === "EQ" ? "=" : "<>"} ${keys.value}`;
                        break;
                    case "IN":
                        delete object.ExpressionAttributeValues[keys.value];
                        expression = `${keys.name} IN (${value.map((_v, i) => `${keys.value}_${i + 1}`).join(", ")})`;
                        value.forEach((valueItem, i) => {
                            object.ExpressionAttributeValues[`${keys.value}_${i + 1}`] = toDynamo(valueItem);
                        });
                        break;
                    case "GT":
                    case "GE":
                    case "LT":
                    case "LE":
                        expression = `${keys.name} ${condition.type.startsWith("G") ? ">" : "<"}${condition.type.endsWith("E") ? "=" : ""} ${keys.value}`;
                        break;
                    case "BETWEEN":
                        expression = `${keys.name} BETWEEN ${keys.value}_1 AND ${keys.value}_2`;
                        object.ExpressionAttributeValues[`${keys.value}_1`] = toDynamo(value[0]);
                        object.ExpressionAttributeValues[`${keys.value}_2`] = toDynamo(value[1]);
                        delete object.ExpressionAttributeValues[keys.value];
                        break;
                    case "CONTAINS":
                    case "NOT_CONTAINS":
                        expression = `${condition.type === "NOT_CONTAINS" ? "NOT " : ""}contains (${keys.name}, ${keys.value})`;
                        break;
                    case "EXISTS":
                    case "NOT_EXISTS":
                        expression = `attribute_${condition.type === "NOT_EXISTS" ? "not_" : ""}exists (${keys.name})`;
                        delete object.ExpressionAttributeValues[keys.value];
                        break;
                    case "BEGINS_WITH":
                        expression = `begins_with (${keys.name}, ${keys.value})`;
                        break;
                }
            }
            else {
                return object;
            }
            const conditionStringNewItems = [expression];
            if (object[settings.conditionString].length > 0) {
                conditionStringNewItems.unshift(` ${arr[i - 1] === OR ? "OR" : "AND"} `);
            }
            conditionStringNewItems.forEach((item) => {
                if (typeof object[settings.conditionString] === "string") {
                    object[settings.conditionString] = `${object[settings.conditionString]}${item}`;
                }
                else {
                    object[settings.conditionString].push(Array.isArray(item) ? item : item.trim());
                }
            });
            return object;
        }, { [settings.conditionString]: settings.conditionStringType === "array" ? [] : "", "ExpressionAttributeNames": {}, "ExpressionAttributeValues": {} });
    }
    return utils.object.clearEmpties(main(this.settings.conditions));
};
//# sourceMappingURL=Condition.js.map

/***/ }),

/***/ "../../dynamoose/dist/Document.js":
/*!****************************************!*\
  !*** ../../dynamoose/dist/Document.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AnyDocument = exports.Document = void 0;
const aws = __webpack_require__(/*! ./aws */ "../../dynamoose/dist/aws/index.js");
const ddb = __webpack_require__(/*! ./aws/ddb/internal */ "../../dynamoose/dist/aws/ddb/internal.js");
const utils = __webpack_require__(/*! ./utils */ "../../dynamoose/dist/utils/index.js");
const Error = __webpack_require__(/*! ./Error */ "../../dynamoose/dist/Error.js");
const Internal = __webpack_require__(/*! ./Internal */ "../../dynamoose/dist/Internal.js");
const { internalProperties } = Internal.General;
const dynamooseUndefined = Internal.Public.undefined;
const Populate_1 = __webpack_require__(/*! ./Populate */ "../../dynamoose/dist/Populate.js");
// Document represents an item in a Model that is either pending (not saved) or saved
class Document {
    constructor(model, object, settings) {
        const documentObject = Document.isDynamoObject(object) ? aws.converter().unmarshall(object) : object;
        Object.keys(documentObject).forEach((key) => this[key] = documentObject[key]);
        Object.defineProperty(this, internalProperties, {
            "configurable": false,
            "value": {}
        });
        this[internalProperties].originalObject = utils.deep_copy(documentObject);
        this[internalProperties].originalSettings = Object.assign({}, settings);
        Object.defineProperty(this, "model", {
            "configurable": false,
            "value": model
        });
        if (settings.type === "fromDynamo") {
            this[internalProperties].storedInDynamo = true;
        }
    }
    static objectToDynamo(object, settings = { "type": "object" }) {
        return (settings.type === "value" ? aws.converter().input : aws.converter().marshall)(object);
    }
    static fromDynamo(object) {
        return aws.converter().unmarshall(object);
    }
    // This function will return null if it's unknown if it is a Dynamo object (ex. empty object). It will return true if it is a Dynamo object and false if it's not.
    static isDynamoObject(object, recurrsive) {
        function isValid(value) {
            if (typeof value === "undefined" || value === null) {
                return false;
            }
            const keys = Object.keys(value);
            const key = keys[0];
            const nestedResult = typeof value[key] === "object" && !(value[key] instanceof Buffer) ? Array.isArray(value[key]) ? value[key].every((value) => Document.isDynamoObject(value, true)) : Document.isDynamoObject(value[key]) : true;
            const { Schema } = __webpack_require__(/*! ./Schema */ "../../dynamoose/dist/Schema.js");
            const attributeType = Schema.attributeTypes.findDynamoDBType(key);
            return typeof value === "object" && keys.length === 1 && attributeType && (nestedResult || Object.keys(value[key]).length === 0 || attributeType.isSet);
        }
        const keys = Object.keys(object);
        const values = Object.values(object);
        if (keys.length === 0) {
            return null;
        }
        else {
            return recurrsive ? isValid(object) : values.every((value) => isValid(value));
        }
    }
    // This function handles actions that should take place before every response (get, scan, query, batchGet, etc.)
    async prepareForResponse() {
        if (this.model.options.populate) {
            return this.populate({ "properties": this.model.options.populate });
        }
        return this;
    }
    // Original
    original() {
        return this[internalProperties].originalSettings.type === "fromDynamo" ? this[internalProperties].originalObject : null;
        // toJSON
    }
    toJSON() {
        return utils.dynamoose.documentToJSON.bind(this)();
    }
    // Serializer
    serialize(nameOrOptions) {
        return this.model.serializer._serialize(this, nameOrOptions);
    }
    delete(callback) {
        const hashKey = this.model.getHashKey();
        const rangeKey = this.model.getRangeKey();
        const key = { [hashKey]: this[hashKey] };
        if (rangeKey) {
            key[rangeKey] = this[rangeKey];
        }
        return this.model.delete(key, callback);
    }
    save(settings, callback) {
        if (typeof settings !== "object" && typeof settings !== "undefined") {
            callback = settings;
            settings = {};
        }
        if (typeof settings === "undefined") {
            settings = {};
        }
        let savedItem;
        const localSettings = settings;
        const paramsPromise = this.toDynamo({ "defaults": true, "validate": true, "required": true, "enum": true, "forceDefault": true, "combine": true, "saveUnknown": true, "customTypesDynamo": true, "updateTimestamps": true, "modifiers": ["set"] }).then((item) => {
            savedItem = item;
            let putItemObj = {
                "Item": item,
                "TableName": this.model.name
            };
            if (localSettings.condition) {
                putItemObj = Object.assign(Object.assign({}, putItemObj), localSettings.condition.requestObject());
            }
            if (localSettings.overwrite === false) {
                const conditionExpression = "attribute_not_exists(#__hash_key)";
                putItemObj.ConditionExpression = putItemObj.ConditionExpression ? `(${putItemObj.ConditionExpression}) AND (${conditionExpression})` : conditionExpression;
                putItemObj.ExpressionAttributeNames = Object.assign(Object.assign({}, putItemObj.ExpressionAttributeNames || {}), { "#__hash_key": this.model.getHashKey() });
            }
            return putItemObj;
        });
        if (settings.return === "request") {
            if (callback) {
                const localCallback = callback;
                paramsPromise.then((result) => localCallback(null, result));
                return;
            }
            else {
                return paramsPromise;
            }
        }
        const promise = Promise.all([paramsPromise, this.model.pendingTaskPromise()]).then((promises) => {
            const [putItemObj] = promises;
            return ddb("putItem", putItemObj);
        });
        if (callback) {
            const localCallback = callback;
            promise.then(() => {
                this[internalProperties].storedInDynamo = true;
                const returnDocument = new this.model.Document(savedItem);
                returnDocument[internalProperties].storedInDynamo = true;
                localCallback(null, returnDocument);
            }).catch((error) => callback(error));
        }
        else {
            return (async () => {
                await promise;
                this[internalProperties].storedInDynamo = true;
                const returnDocument = new this.model.Document(savedItem);
                returnDocument[internalProperties].storedInDynamo = true;
                return returnDocument;
            })();
        }
    }
    populate(...args) {
        return Populate_1.PopulateDocument.bind(this)(...args);
    }
}
exports.Document = Document;
class AnyDocument extends Document {
}
exports.AnyDocument = AnyDocument;
// This function will mutate the object passed in to run any actions to conform to the schema that cannot be achieved through non mutating methods in Document.objectFromSchema (setting timestamps, etc.)
Document.prepareForObjectFromSchema = async function (object, model, settings) {
    if (settings.updateTimestamps) {
        const schema = await model.schemaForObject(object);
        if (schema.settings.timestamps && settings.type === "toDynamo") {
            const date = Date.now();
            const createdAtProperties = (Array.isArray(schema.settings.timestamps.createdAt) ? schema.settings.timestamps.createdAt : [schema.settings.timestamps.createdAt]).filter((a) => Boolean(a));
            const updatedAtProperties = (Array.isArray(schema.settings.timestamps.updatedAt) ? schema.settings.timestamps.updatedAt : [schema.settings.timestamps.updatedAt]).filter((a) => Boolean(a));
            if (object[internalProperties] && !object[internalProperties].storedInDynamo && (typeof settings.updateTimestamps === "boolean" || settings.updateTimestamps.createdAt)) {
                createdAtProperties.forEach((prop) => {
                    utils.object.set(object, prop, date);
                });
            }
            if (typeof settings.updateTimestamps === "boolean" || settings.updateTimestamps.updatedAt) {
                updatedAtProperties.forEach((prop) => {
                    utils.object.set(object, prop, date);
                });
            }
        }
    }
    return object;
};
// This function will return a list of attributes combining both the schema attributes with the document attributes. This also takes into account all attributes that could exist (ex. properties in sets that don't exist in document), adding the indexes for each item in the document set.
// https://stackoverflow.com/a/59928314/894067
Document.attributesWithSchema = async function (document, model) {
    const schema = await model.schemaForObject(document);
    const attributes = schema.attributes();
    // build a tree out of schema attributes
    const root = {};
    attributes.forEach((attribute) => {
        let node = root;
        attribute.split(".").forEach((part) => {
            node[part] = node[part] || {};
            node = node[part];
        });
    });
    // explore the tree
    function traverse(node, treeNode, outPath, callback) {
        callback(outPath);
        if (Object.keys(treeNode).length === 0) { // a leaf
            return;
        }
        Object.keys(treeNode).forEach((attr) => {
            if (attr === "0") {
                // We check for empty objects here (added `typeof node === "object" && Object.keys(node).length == 0`, see PR https://github.com/dynamoose/dynamoose/pull/1034) to handle the use case of 2d arrays, or arrays within arrays. `node` in that case will be an empty object.
                if (!node || node.length == 0 || typeof node === "object" && Object.keys(node).length == 0) {
                    node = [{}]; // fake the path for arrays
                }
                node.forEach((a, index) => {
                    outPath.push(index);
                    traverse(node[index], treeNode[attr], outPath, callback);
                    outPath.pop();
                });
            }
            else {
                if (!node) {
                    node = {}; // fake the path for properties
                }
                outPath.push(attr);
                traverse(node[attr], treeNode[attr], outPath, callback);
                outPath.pop();
            }
        });
    }
    const out = [];
    traverse(document, root, [], (val) => out.push(val.join(".")));
    const result = out.slice(1);
    return result;
};
// This function will return an object that conforms to the schema (removing any properties that don't exist, using default values, etc.) & throws an error if there is a typemismatch.
Document.objectFromSchema = async function (object, model, settings = { "type": "toDynamo" }) {
    if (settings.checkExpiredItem && model.options.expires && (model.options.expires.items || {}).returnExpired === false && object[model.options.expires.attribute] && object[model.options.expires.attribute] * 1000 < Date.now()) {
        return undefined;
    }
    const returnObject = Object.assign({}, object);
    const schema = settings.schema || await model.schemaForObject(returnObject);
    const schemaAttributes = schema.attributes(returnObject);
    // Type check
    const validParents = []; // This array is used to allow for set contents to not be type checked
    const keysToDelete = [];
    const typeIndexOptionMap = schema.getTypePaths(returnObject, settings);
    const checkTypeFunction = (item) => {
        const [key, value] = item;
        if (validParents.find((parent) => key.startsWith(parent.key) && (parent.infinite || key.split(".").length === parent.key.split(".").length + 1))) {
            return;
        }
        const genericKey = key.replace(/\.\d+/gu, ".0"); // This is a key replacing all list numbers with 0 to standardize things like checking if it exists in the schema
        const existsInSchema = schemaAttributes.includes(genericKey);
        if (existsInSchema) {
            const { isValidType, matchedTypeDetails, typeDetailsArray } = utils.dynamoose.getValueTypeCheckResult(schema, value, genericKey, settings, { "standardKey": true, typeIndexOptionMap });
            if (!isValidType) {
                throw new Error.TypeMismatch(`Expected ${key} to be of type ${typeDetailsArray.map((detail) => detail.dynamicName ? detail.dynamicName() : detail.name.toLowerCase()).join(", ")}, instead found type ${utils.type_name(value, typeDetailsArray)}.`);
            }
            else if (matchedTypeDetails.isSet || matchedTypeDetails.name.toLowerCase() === "model") {
                validParents.push({ key, "infinite": true });
            }
            else if ( /*typeDetails.dynamodbType === "M" || */matchedTypeDetails.dynamodbType === "L") {
                // The code below is an optimization for large array types to speed up the process of not having to check the type for every element but only the ones that are different
                value.forEach((subValue, index, array) => {
                    if (index === 0 || typeof subValue !== typeof array[0]) {
                        checkTypeFunction([`${key}.${index}`, subValue]);
                    }
                    else if (keysToDelete.includes(`${key}.0`) && typeof subValue === typeof array[0]) {
                        keysToDelete.push(`${key}.${index}`);
                    }
                });
                validParents.push({ key });
            }
        }
        else {
            // Check saveUnknown
            if (!settings.saveUnknown || !utils.dynamoose.wildcard_allowed_check(schema.getSettingValue("saveUnknown"), key)) {
                keysToDelete.push(key);
            }
        }
    };
    utils.object.entries(returnObject).filter((item) => item[1] !== undefined && item[1] !== dynamooseUndefined).map(checkTypeFunction);
    keysToDelete.reverse().forEach((key) => utils.object.delete(returnObject, key));
    if (settings.defaults || settings.forceDefault) {
        await Promise.all((await Document.attributesWithSchema(returnObject, model)).map(async (key) => {
            const value = utils.object.get(returnObject, key);
            if (value === dynamooseUndefined) {
                utils.object.set(returnObject, key, undefined);
            }
            else {
                const defaultValue = await schema.defaultCheck(key, value, settings);
                const isDefaultValueUndefined = Array.isArray(defaultValue) ? defaultValue.some((defaultValue) => typeof defaultValue === "undefined" || defaultValue === null) : typeof defaultValue === "undefined" || defaultValue === null;
                if (!isDefaultValueUndefined) {
                    const { isValidType, typeDetailsArray } = utils.dynamoose.getValueTypeCheckResult(schema, defaultValue, key, settings, { typeIndexOptionMap });
                    if (!isValidType) {
                        throw new Error.TypeMismatch(`Expected ${key} to be of type ${typeDetailsArray.map((detail) => detail.dynamicName ? detail.dynamicName() : detail.name.toLowerCase()).join(", ")}, instead found type ${typeof defaultValue}.`);
                    }
                    else {
                        utils.object.set(returnObject, key, defaultValue);
                    }
                }
            }
        }));
    }
    // Custom Types
    if (settings.customTypesDynamo) {
        (await Document.attributesWithSchema(returnObject, model)).map((key) => {
            const value = utils.object.get(returnObject, key);
            const isValueUndefined = typeof value === "undefined" || value === null;
            if (!isValueUndefined) {
                const typeDetails = utils.dynamoose.getValueTypeCheckResult(schema, value, key, settings, { typeIndexOptionMap }).matchedTypeDetails;
                const { customType } = typeDetails;
                const { "type": typeInfo } = typeDetails.isOfType(value);
                const isCorrectTypeAlready = typeInfo === (settings.type === "toDynamo" ? "underlying" : "main");
                if (customType && customType.functions[settings.type] && !isCorrectTypeAlready) {
                    const customValue = customType.functions[settings.type](value);
                    utils.object.set(returnObject, key, customValue);
                }
            }
        });
    }
    // DynamoDB Type Handler (ex. converting sets to correct value for toDynamo & fromDynamo)
    utils.object.entries(returnObject).filter((item) => typeof item[1] === "object").forEach((item) => {
        const [key, value] = item;
        let typeDetails;
        try {
            typeDetails = utils.dynamoose.getValueTypeCheckResult(schema, value, key, settings, { typeIndexOptionMap }).matchedTypeDetails;
        }
        catch (e) {
            const { Schema } = __webpack_require__(/*! ./Schema */ "../../dynamoose/dist/Schema.js");
            typeDetails = Schema.attributeTypes.findTypeForValue(value, settings.type, settings);
        }
        if (typeDetails && typeDetails[settings.type]) {
            utils.object.set(returnObject, key, typeDetails[settings.type](value));
        }
    });
    if (settings.combine) {
        schemaAttributes.map((key) => {
            try {
                const typeDetails = schema.getAttributeTypeDetails(key);
                return {
                    key,
                    "type": typeDetails
                };
            }
            catch (e) { } // eslint-disable-line no-empty
        }).filter((item) => {
            return Array.isArray(item.type) ? item.type.some((type) => type.name === "Combine") : item.type.name === "Combine";
        }).map((obj) => {
            if (obj && Array.isArray(obj.type)) {
                throw new Error.InvalidParameter("Combine type is not allowed to be used with multiple types.");
            }
            return obj;
        }).forEach((item) => {
            const { key, type } = item;
            const value = type.typeSettings.attributes.map((attribute) => utils.object.get(returnObject, attribute)).filter((value) => typeof value !== "undefined" && value !== null).join(type.typeSettings.seperator);
            utils.object.set(returnObject, key, value);
        });
    }
    if (settings.modifiers) {
        await Promise.all(settings.modifiers.map(async (modifier) => {
            return Promise.all((await Document.attributesWithSchema(returnObject, model)).map(async (key) => {
                const value = utils.object.get(returnObject, key);
                const modifierFunction = await schema.getAttributeSettingValue(modifier, key, { "returnFunction": true, typeIndexOptionMap });
                const modifierFunctionExists = Array.isArray(modifierFunction) ? modifierFunction.some((val) => Boolean(val)) : Boolean(modifierFunction);
                const isValueUndefined = typeof value === "undefined" || value === null;
                if (modifierFunctionExists && !isValueUndefined) {
                    const oldValue = object.original ? utils.object.get(object.original(), key) : undefined;
                    utils.object.set(returnObject, key, await modifierFunction(value, oldValue));
                }
            }));
        }));
    }
    if (settings.validate) {
        await Promise.all((await Document.attributesWithSchema(returnObject, model)).map(async (key) => {
            const value = utils.object.get(returnObject, key);
            const isValueUndefined = typeof value === "undefined" || value === null;
            if (!isValueUndefined) {
                const validator = await schema.getAttributeSettingValue("validate", key, { "returnFunction": true, typeIndexOptionMap });
                if (validator) {
                    let result;
                    if (validator instanceof RegExp) {
                        // TODO: fix the line below to not use `as`. This will cause a weird issue even in vanilla JS, where if your validator is a Regular Expression but the type isn't a string, it will throw a super random error.
                        result = validator.test(value);
                    }
                    else {
                        result = typeof validator === "function" ? await validator(value) : validator === value;
                    }
                    if (!result) {
                        throw new Error.ValidationError(`${key} with a value of ${value} had a validation error when trying to save the document`);
                    }
                }
            }
        }));
    }
    if (settings.required) {
        let attributesToCheck = await Document.attributesWithSchema(returnObject, model);
        if (settings.required === "nested") {
            attributesToCheck = attributesToCheck.filter((attribute) => utils.object.keys(returnObject).find((key) => attribute === key || attribute.startsWith(key + ".")));
        }
        await Promise.all(attributesToCheck.map(async (key) => {
            const check = async () => {
                const value = utils.object.get(returnObject, key);
                await schema.requiredCheck(key, value);
            };
            const keyParts = key.split(".");
            const parentKey = keyParts.slice(0, -1).join(".");
            if (parentKey) {
                const parentValue = utils.object.get(returnObject, parentKey);
                const isParentValueUndefined = typeof parentValue === "undefined" || parentValue === null;
                if (!isParentValueUndefined) {
                    await check();
                }
            }
            else {
                await check();
            }
        }));
    }
    if (settings.enum) {
        await Promise.all((await Document.attributesWithSchema(returnObject, model)).map(async (key) => {
            const value = utils.object.get(returnObject, key);
            const isValueUndefined = typeof value === "undefined" || value === null;
            if (!isValueUndefined) {
                const enumArray = await schema.getAttributeSettingValue("enum", key, { "returnFunction": false, typeIndexOptionMap });
                if (enumArray && !enumArray.includes(value)) {
                    throw new Error.ValidationError(`${key} must equal ${JSON.stringify(enumArray)}, but is set to ${value}`);
                }
            }
        }));
    }
    return returnObject;
};
Document.prototype.toDynamo = async function (settings = {}) {
    const newSettings = Object.assign(Object.assign({}, settings), { "type": "toDynamo" });
    await Document.prepareForObjectFromSchema(this, this.model, newSettings);
    const object = await Document.objectFromSchema(this, this.model, newSettings);
    return Document.objectToDynamo(object);
};
// This function will modify the document to conform to the Schema
Document.prototype.conformToSchema = async function (settings = { "type": "fromDynamo" }) {
    let document = this;
    if (settings.type === "fromDynamo") {
        document = await this.prepareForResponse();
    }
    await Document.prepareForObjectFromSchema(document, document.model, settings);
    const expectedObject = await Document.objectFromSchema(document, document.model, settings);
    if (!expectedObject) {
        return expectedObject;
    }
    const expectedKeys = Object.keys(expectedObject);
    Object.keys(document).forEach((key) => {
        if (!expectedKeys.includes(key)) {
            delete this[key];
        }
        else if (this[key] !== expectedObject[key]) {
            this[key] = expectedObject[key];
        }
    });
    return this;
};
//# sourceMappingURL=Document.js.map

/***/ }),

/***/ "../../dynamoose/dist/DocumentRetriever.js":
/*!*************************************************!*\
  !*** ../../dynamoose/dist/DocumentRetriever.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Query = exports.Scan = void 0;
const ddb = __webpack_require__(/*! ./aws/ddb/internal */ "../../dynamoose/dist/aws/ddb/internal.js");
const CustomError = __webpack_require__(/*! ./Error */ "../../dynamoose/dist/Error.js");
const utils = __webpack_require__(/*! ./utils */ "../../dynamoose/dist/utils/index.js");
const Condition_1 = __webpack_require__(/*! ./Condition */ "../../dynamoose/dist/Condition.js");
const Document_1 = __webpack_require__(/*! ./Document */ "../../dynamoose/dist/Document.js");
const General_1 = __webpack_require__(/*! ./General */ "../../dynamoose/dist/General.js");
const Populate_1 = __webpack_require__(/*! ./Populate */ "../../dynamoose/dist/Populate.js");
var DocumentRetrieverTypes;
(function (DocumentRetrieverTypes) {
    DocumentRetrieverTypes["scan"] = "scan";
    DocumentRetrieverTypes["query"] = "query";
})(DocumentRetrieverTypes || (DocumentRetrieverTypes = {}));
// DocumentRetriever is used for both Scan and Query since a lot of the code is shared between the two
// type DocumentRetriever = BasicOperators;
class DocumentRetriever {
    constructor(model, typeInformation, object) {
        this.internalSettings = { model, typeInformation };
        let condition;
        try {
            condition = new Condition_1.Condition(object);
        }
        catch (e) {
            e.message = `${e.message.replace(" is invalid.", "")} is invalid for the ${this.internalSettings.typeInformation.type} operation.`;
            throw e;
        }
        this.settings = {
            "condition": condition
        };
    }
    exec(callback) {
        let timesRequested = 0;
        const prepareForReturn = async (result) => {
            if (Array.isArray(result)) {
                result = utils.merge_objects(...result);
            }
            if (this.settings.count) {
                return {
                    "count": result.Count,
                    [`${this.internalSettings.typeInformation.pastTense}Count`]: result[`${utils.capitalize_first_letter(this.internalSettings.typeInformation.pastTense)}Count`]
                };
            }
            const array = (await Promise.all(result.Items.map(async (item) => await new this.internalSettings.model.Document(item, { "type": "fromDynamo" }).conformToSchema({ "customTypesDynamo": true, "checkExpiredItem": true, "saveUnknown": true, "modifiers": ["get"], "type": "fromDynamo" })))).filter((a) => Boolean(a));
            array.lastKey = result.LastEvaluatedKey ? Array.isArray(result.LastEvaluatedKey) ? result.LastEvaluatedKey.map((key) => this.internalSettings.model.Document.fromDynamo(key)) : this.internalSettings.model.Document.fromDynamo(result.LastEvaluatedKey) : undefined;
            array.count = result.Count;
            array[`${this.internalSettings.typeInformation.pastTense}Count`] = result[`${utils.capitalize_first_letter(this.internalSettings.typeInformation.pastTense)}Count`];
            array[`times${utils.capitalize_first_letter(this.internalSettings.typeInformation.pastTense)}`] = timesRequested;
            array["populate"] = Populate_1.PopulateDocuments;
            array["toJSON"] = utils.dynamoose.documentToJSON;
            return array;
        };
        const promise = this.internalSettings.model.pendingTaskPromise().then(() => this.getRequest()).then((request) => {
            const allRequest = (extraParameters = {}) => {
                let promise = ddb(this.internalSettings.typeInformation.type, Object.assign(Object.assign({}, request), extraParameters));
                timesRequested++;
                if (this.settings.all) {
                    promise = promise.then(async (result) => {
                        if (this.settings.all.delay && this.settings.all.delay > 0) {
                            await utils.timeout(this.settings.all.delay);
                        }
                        let lastKey = result.LastEvaluatedKey;
                        let requestedTimes = 1;
                        while (lastKey && (this.settings.all.max === 0 || requestedTimes < this.settings.all.max)) {
                            if (this.settings.all.delay && this.settings.all.delay > 0) {
                                await utils.timeout(this.settings.all.delay);
                            }
                            const nextRequest = await ddb(this.internalSettings.typeInformation.type, Object.assign(Object.assign(Object.assign({}, request), extraParameters), { "ExclusiveStartKey": lastKey }));
                            timesRequested++;
                            result = utils.merge_objects(result, nextRequest);
                            // The operation below is safe because right above we are overwriting the entire `result` variable, so there is no chance it'll be reassigned based on an outdated value since it's already been overwritten. There might be a better way to do this than ignoring the rule on the line below.
                            result.LastEvaluatedKey = nextRequest.LastEvaluatedKey; // eslint-disable-line require-atomic-updates
                            lastKey = nextRequest.LastEvaluatedKey;
                            requestedTimes++;
                        }
                        return result;
                    });
                }
                return promise;
            };
            if (this.settings.parallel) {
                return Promise.all(new Array(this.settings.parallel).fill(0).map((a, index) => allRequest({ "Segment": index })));
            }
            else {
                return allRequest();
            }
        });
        // TODO: we do something similar to do this below in other functions as well (ex. get, save), where we allow a callback or a promise, we should figure out a way to make this code more DRY and have a standard way of doing this throughout Dynamoose
        if (callback) {
            promise.then((result) => prepareForReturn(result)).then((result) => callback(null, result)).catch((error) => callback(error));
        }
        else {
            return (async () => {
                const result = await promise;
                const finalResult = await prepareForReturn(result);
                return finalResult;
            })();
        }
    }
}
Object.entries(Condition_1.Condition.prototype).forEach((prototype) => {
    const [key, func] = prototype;
    if (key !== "requestObject") {
        DocumentRetriever.prototype[key] = function (...args) {
            func.bind(this.settings.condition)(...args);
            return this;
        };
    }
});
DocumentRetriever.prototype.getRequest = async function () {
    const object = Object.assign(Object.assign({}, this.settings.condition.requestObject({ "conditionString": "FilterExpression", "conditionStringType": "array" })), { "TableName": this.internalSettings.model.name });
    if (this.settings.limit) {
        object.Limit = this.settings.limit;
    }
    if (this.settings.startAt) {
        object.ExclusiveStartKey = Document_1.Document.isDynamoObject(this.settings.startAt) ? this.settings.startAt : this.internalSettings.model.Document.objectToDynamo(this.settings.startAt);
    }
    const indexes = await this.internalSettings.model.getIndexes();
    if (this.settings.index) {
        object.IndexName = this.settings.index;
    }
    else if (this.internalSettings.typeInformation.type === "query") {
        const comparisonChart = this.settings.condition.settings.conditions.reduce((res, item) => {
            const myItem = Object.entries(item)[0];
            res[myItem[0]] = { "type": myItem[1].type };
            return res;
        }, {});
        const indexSpec = utils.find_best_index(indexes, comparisonChart);
        if (!indexSpec.tableIndex) {
            if (!indexSpec.indexName) {
                throw new CustomError.InvalidParameter("Index can't be found for query.");
            }
            object.IndexName = indexSpec.indexName;
        }
    }
    function moveParameterNames(val, prefix) {
        const entry = Object.entries(object.ExpressionAttributeNames).find((entry) => entry[1] === val);
        if (!entry) {
            return;
        }
        const [key, value] = entry;
        const filterExpressionIndex = object.FilterExpression.findIndex((item) => item.includes(key));
        const filterExpression = object.FilterExpression[filterExpressionIndex];
        if (filterExpression.includes("attribute_exists") || filterExpression.includes("contains")) {
            return;
        }
        object.ExpressionAttributeNames[`#${prefix}a`] = value;
        delete object.ExpressionAttributeNames[key];
        const valueKey = key.replace("#a", ":v");
        Object.keys(object.ExpressionAttributeValues).filter((key) => key.startsWith(valueKey)).forEach((key) => {
            object.ExpressionAttributeValues[key.replace(new RegExp(":v\\d"), `:${prefix}v`)] = object.ExpressionAttributeValues[key];
            delete object.ExpressionAttributeValues[key];
        });
        const newExpression = filterExpression.replace(key, `#${prefix}a`).replace(new RegExp(valueKey, "g"), `:${prefix}v`);
        object.KeyConditionExpression = `${object.KeyConditionExpression || ""}${object.KeyConditionExpression ? " AND " : ""}${newExpression}`;
        utils.object.delete(object.FilterExpression, filterExpressionIndex);
        const previousElementIndex = filterExpressionIndex === 0 ? 0 : filterExpressionIndex - 1;
        if (object.FilterExpression[previousElementIndex] === "AND") {
            utils.object.delete(object.FilterExpression, previousElementIndex);
        }
    }
    if (this.internalSettings.typeInformation.type === "query") {
        const index = utils.array_flatten(Object.values(indexes)).find((index) => index.IndexName === object.IndexName) || indexes.TableIndex;
        const { hash, range } = index.KeySchema.reduce((res, item) => {
            res[item.KeyType.toLowerCase()] = item.AttributeName;
            return res;
        }, {});
        moveParameterNames(hash, "qh");
        if (range) {
            moveParameterNames(range, "qr");
        }
    }
    if (this.settings.consistent) {
        object.ConsistentRead = this.settings.consistent;
    }
    if (this.settings.count) {
        object.Select = "COUNT";
    }
    if (this.settings.parallel) {
        object.TotalSegments = this.settings.parallel;
    }
    if (this.settings.sort === General_1.SortOrder.descending) {
        object.ScanIndexForward = false;
    }
    if (this.settings.attributes) {
        if (!object.ExpressionAttributeNames) {
            object.ExpressionAttributeNames = {};
        }
        object.ProjectionExpression = this.settings.attributes.map((attribute) => {
            let expressionAttributeName = "";
            expressionAttributeName = (Object.entries(object.ExpressionAttributeNames).find((entry) => entry[1] === attribute) || [])[0];
            if (!expressionAttributeName) {
                const nextIndex = (Object.keys(object.ExpressionAttributeNames).map((item) => parseInt(item.replace("#a", ""))).filter((item) => !isNaN(item)).reduce((existing, item) => Math.max(item, existing), 0) || 0) + 1;
                expressionAttributeName = `#a${nextIndex}`;
                object.ExpressionAttributeNames[expressionAttributeName] = attribute;
            }
            return expressionAttributeName;
        }).sort().join(", ");
    }
    if (object.FilterExpression && Array.isArray(object.FilterExpression)) {
        object.FilterExpression = utils.dynamoose.convertConditionArrayRequestObjectToString(object.FilterExpression);
    }
    if (object.FilterExpression === "") {
        delete object.FilterExpression;
    }
    return object;
};
const settings = [
    "limit",
    "startAt",
    "attributes",
    { "name": "count", "boolean": true },
    { "name": "consistent", "boolean": true },
    { "name": "using", "settingsName": "index" }
];
settings.forEach((item) => {
    DocumentRetriever.prototype[item.name || item] = function (value) {
        const key = item.settingsName || item.name || item;
        this.settings[key] = item.boolean ? !this.settings[key] : value;
        return this;
    };
});
DocumentRetriever.prototype.all = function (delay = 0, max = 0) {
    this.settings.all = { delay, max };
    return this;
};
class Scan extends DocumentRetriever {
    exec(callback) {
        return super.exec(callback);
    }
    parallel(value) {
        this.settings.parallel = value;
        return this;
    }
    constructor(model, object) {
        super(model, { "type": DocumentRetrieverTypes.scan, "pastTense": "scanned" }, object);
    }
}
exports.Scan = Scan;
class Query extends DocumentRetriever {
    exec(callback) {
        return super.exec(callback);
    }
    sort(order) {
        this.settings.sort = order;
        return this;
    }
    constructor(model, object) {
        super(model, { "type": DocumentRetrieverTypes.query, "pastTense": "queried" }, object);
    }
}
exports.Query = Query;
//# sourceMappingURL=DocumentRetriever.js.map

/***/ }),

/***/ "../../dynamoose/dist/Error.js":
/*!*************************************!*\
  !*** ../../dynamoose/dist/Error.js ***!
  \*************************************/
/***/ ((module) => {

"use strict";

const makeError = (defaultMessage, errorName) => class CustomError extends Error {
    constructor(message) {
        super();
        this.name = errorName;
        this.message = message || defaultMessage;
        return this;
    }
};
module.exports = {
    "MissingSchemaError": makeError("Missing Schema", "MissingSchemaError"),
    "InvalidParameter": makeError("Invalid Parameter", "InvalidParameter"),
    "InvalidParameterType": makeError("Invalid Parameter Type", "InvalidParameterType"),
    "UnknownAttribute": makeError("The attribute can not be found", "UnknownAttribute"),
    "InvalidType": makeError("Invalid Type", "InvalidType"),
    "WaitForActiveTimeout": makeError("Waiting for table to be active has timed out", "WaitForActiveTimeout"),
    "TypeMismatch": makeError("There was a type mismatch between the schema and document", "TypeMismatch"),
    "InvalidFilterComparison": makeError("That filter comparison is invalid", "InvalidFilterComparison"),
    "ValidationError": makeError("There was an validation error with the document", "ValidationError")
};
//# sourceMappingURL=Error.js.map

/***/ }),

/***/ "../../dynamoose/dist/General.js":
/*!***************************************!*\
  !*** ../../dynamoose/dist/General.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SortOrder = void 0;
var SortOrder;
(function (SortOrder) {
    SortOrder["ascending"] = "ascending";
    SortOrder["descending"] = "descending";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
//# sourceMappingURL=General.js.map

/***/ }),

/***/ "../../dynamoose/dist/Internal.js":
/*!****************************************!*\
  !*** ../../dynamoose/dist/Internal.js ***!
  \****************************************/
/***/ ((module) => {

"use strict";

module.exports = {
    "General": {
        "internalProperties": Symbol("internalProperties")
    },
    "Public": {
        "undefined": Symbol("dynamoose.undefined"),
        "this": Symbol("dynamoose.this"),
        "null": Symbol("dynamoose.null")
    }
};
//# sourceMappingURL=Internal.js.map

/***/ }),

/***/ "../../dynamoose/dist/Model/defaults.js":
/*!**********************************************!*\
  !*** ../../dynamoose/dist/Model/defaults.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.custom = exports.original = void 0;
exports.original = {
    "create": true,
    "throughput": {
        "read": 1,
        "write": 1
    },
    "prefix": "",
    "suffix": "",
    "waitForActive": {
        "enabled": true,
        "check": {
            "timeout": 180000,
            "frequency": 1000
        }
    },
    "update": false,
    "populate": false,
    "expires": undefined
    // "streamOptions": {
    // 	"enabled": false,
    // 	"type": undefined
    // },
    // "serverSideEncryption": false,
    // "defaultReturnValues": "ALL_NEW",
};
let customValue = {};
const customObject = {
    "set": (val) => {
        customValue = val;
    },
    "get": () => customValue
};
exports.custom = customObject;
//# sourceMappingURL=defaults.js.map

/***/ }),

/***/ "../../dynamoose/dist/Model/index.js":
/*!*******************************************!*\
  !*** ../../dynamoose/dist/Model/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Model = void 0;
const CustomError = __webpack_require__(/*! ../Error */ "../../dynamoose/dist/Error.js");
const Schema_1 = __webpack_require__(/*! ../Schema */ "../../dynamoose/dist/Schema.js");
const Document_1 = __webpack_require__(/*! ../Document */ "../../dynamoose/dist/Document.js");
const utils = __webpack_require__(/*! ../utils */ "../../dynamoose/dist/utils/index.js");
const ddb = __webpack_require__(/*! ../aws/ddb/internal */ "../../dynamoose/dist/aws/ddb/internal.js");
const Internal = __webpack_require__(/*! ../Internal */ "../../dynamoose/dist/Internal.js");
const Serializer_1 = __webpack_require__(/*! ../Serializer */ "../../dynamoose/dist/Serializer.js");
const DocumentRetriever_1 = __webpack_require__(/*! ../DocumentRetriever */ "../../dynamoose/dist/DocumentRetriever.js");
const defaults_1 = __webpack_require__(/*! ./defaults */ "../../dynamoose/dist/Model/defaults.js");
const index_changes_1 = __webpack_require__(/*! ../utils/dynamoose/index_changes */ "../../dynamoose/dist/utils/dynamoose/index_changes.js");
const Populate_1 = __webpack_require__(/*! ../Populate */ "../../dynamoose/dist/Populate.js");
var ModelUpdateOptions;
(function (ModelUpdateOptions) {
    ModelUpdateOptions["ttl"] = "ttl";
    ModelUpdateOptions["indexes"] = "indexes";
    ModelUpdateOptions["throughput"] = "throughput";
})(ModelUpdateOptions || (ModelUpdateOptions = {}));
// Utility functions
async function getTableDetails(model, settings = {}) {
    const func = async () => {
        const tableDetails = await ddb("describeTable", { "TableName": model.name });
        model.latestTableDetails = tableDetails; // eslint-disable-line require-atomic-updates
    };
    if (settings.forceRefresh || !model.latestTableDetails) {
        if (settings.allowError) {
            try {
                await func();
            }
            catch (e) { } // eslint-disable-line no-empty
        }
        else {
            await func();
        }
    }
    return model.latestTableDetails;
}
async function createTableRequest(model) {
    return Object.assign(Object.assign({ "TableName": model.name }, utils.dynamoose.get_provisioned_throughput(model.options)), await model.getCreateTableAttributeParams());
}
async function createTable(model) {
    if (((await getTableDetails(model, { "allowError": true }) || {}).Table || {}).TableStatus === "ACTIVE") {
        model.alreadyCreated = true;
        return () => Promise.resolve.bind(Promise)();
    }
    await ddb("createTable", await createTableRequest(model));
}
async function updateTimeToLive(model) {
    let ttlDetails;
    async function updateDetails() {
        ttlDetails = await ddb("describeTimeToLive", {
            "TableName": model.name
        });
    }
    await updateDetails();
    function updateTTL() {
        return ddb("updateTimeToLive", {
            "TableName": model.name,
            "TimeToLiveSpecification": {
                "AttributeName": model.options.expires.attribute,
                "Enabled": true
            }
        });
    }
    switch (ttlDetails.TimeToLiveDescription.TimeToLiveStatus) {
        case "DISABLING":
            while (ttlDetails.TimeToLiveDescription.TimeToLiveStatus === "DISABLING") {
                await utils.timeout(1000);
                await updateDetails();
            }
        // fallthrough
        case "DISABLED":
            await updateTTL();
            break;
        default:
            break;
    }
}
function waitForActive(model, forceRefreshOnFirstAttempt = true) {
    return () => new Promise((resolve, reject) => {
        const start = Date.now();
        async function check(count) {
            var _a;
            try {
                // Normally we'd want to do `dynamodb.waitFor` here, but since it doesn't work with tables that are being updated we can't use it in this case
                const tableDetails = (await getTableDetails(model, { "forceRefresh": forceRefreshOnFirstAttempt === true ? forceRefreshOnFirstAttempt : count > 0 })).Table;
                if (tableDetails.TableStatus === "ACTIVE" && ((_a = tableDetails.GlobalSecondaryIndexes) !== null && _a !== void 0 ? _a : []).every((val) => val.IndexStatus === "ACTIVE")) {
                    return resolve();
                }
            }
            catch (e) {
                return reject(e);
            }
            const checkSettings = typeof model.options.waitForActive === "boolean" ? defaults_1.original.waitForActive.check : model.options.waitForActive.check;
            if (count > 0) {
                checkSettings.frequency === 0 ? await utils.set_immediate_promise() : await utils.timeout(checkSettings.frequency);
            }
            if (Date.now() - start >= checkSettings.timeout) {
                return reject(new CustomError.WaitForActiveTimeout(`Wait for active timed out after ${Date.now() - start} milliseconds.`));
            }
            else {
                check(++count);
            }
        }
        check(0);
    });
}
async function updateTable(model) {
    const updateAll = typeof model.options.update === "boolean" && model.options.update;
    // Throughput
    if (updateAll || model.options.update.includes(ModelUpdateOptions.throughput)) {
        const currentThroughput = (await getTableDetails(model)).Table;
        const expectedThroughput = utils.dynamoose.get_provisioned_throughput(model.options);
        const isThroughputUpToDate = expectedThroughput.BillingMode === (currentThroughput.BillingModeSummary || {}).BillingMode && expectedThroughput.BillingMode || (currentThroughput.ProvisionedThroughput || {}).ReadCapacityUnits === (expectedThroughput.ProvisionedThroughput || {}).ReadCapacityUnits && currentThroughput.ProvisionedThroughput.WriteCapacityUnits === expectedThroughput.ProvisionedThroughput.WriteCapacityUnits;
        if (!isThroughputUpToDate) {
            const object = Object.assign({ "TableName": model.name }, expectedThroughput);
            await ddb("updateTable", object);
            await waitForActive(model)();
        }
    }
    // Indexes
    if (updateAll || model.options.update.includes(ModelUpdateOptions.indexes)) {
        const tableDetails = await getTableDetails(model);
        const existingIndexes = tableDetails.Table.GlobalSecondaryIndexes;
        const updateIndexes = await utils.dynamoose.index_changes(model, existingIndexes);
        await updateIndexes.reduce(async (existingFlow, index) => {
            await existingFlow;
            const params = {
                "TableName": model.name
            };
            if (index.type === index_changes_1.ModelIndexChangeType.add) {
                params.AttributeDefinitions = (await model.getCreateTableAttributeParams()).AttributeDefinitions;
                params.GlobalSecondaryIndexUpdates = [{ "Create": index.spec }];
            }
            else {
                params.GlobalSecondaryIndexUpdates = [{ "Delete": { "IndexName": index.name } }];
            }
            await ddb("updateTable", params);
            await waitForActive(model)();
        }, Promise.resolve());
    }
}
// Model represents one DynamoDB table
class Model {
    constructor(name, schema, options) {
        this.options = utils.combine_objects(options, defaults_1.custom.get(), defaults_1.original);
        this.name = `${this.options.prefix}${name}${this.options.suffix}`;
        this.originalName = name;
        let realSchemas;
        if (!schema || Array.isArray(schema) && schema.length === 0) {
            throw new CustomError.MissingSchemaError(`Schema hasn't been registered for model "${name}".\nUse "dynamoose.model(name, schema)"`);
        }
        else if (!(schema instanceof Schema_1.Schema)) {
            if (Array.isArray(schema)) {
                realSchemas = schema.map((schema) => schema instanceof Schema_1.Schema ? schema : new Schema_1.Schema(schema));
            }
            else {
                realSchemas = [new Schema_1.Schema(schema)];
            }
        }
        else {
            realSchemas = [schema];
        }
        if (!utils.all_elements_match(realSchemas.map((schema) => schema.getHashKey()))) {
            throw new CustomError.InvalidParameter("hashKey's for all schema's must match.");
        }
        if (!utils.all_elements_match(realSchemas.map((schema) => schema.getRangeKey()).filter((key) => Boolean(key)))) {
            throw new CustomError.InvalidParameter("rangeKey's for all schema's must match.");
        }
        if (options.expires) {
            if (typeof options.expires === "number") {
                options.expires = {
                    "attribute": "ttl",
                    "ttl": options.expires
                };
            }
            options.expires = utils.combine_objects(options.expires, { "attribute": "ttl" });
            realSchemas.forEach((schema) => {
                schema.schemaObject[options.expires.attribute] = {
                    "type": {
                        "value": Date,
                        "settings": {
                            "storage": "seconds"
                        }
                    },
                    "default": () => new Date(Date.now() + options.expires.ttl)
                };
            });
        }
        this.schemas = realSchemas;
        // Setup flow
        this.ready = false; // Represents if model is ready to be used for actions such as "get", "put", etc. This property being true does not guarantee anything on the DynamoDB server. It only guarantees that Dynamoose has finished the initalization steps required to allow the model to function as expected on the client side.
        this.alreadyCreated = false; // Represents if the table in DynamoDB was created prior to initalization. This will only be updated if `create` is true.
        this.pendingTasks = []; // Represents an array of promise resolver functions to be called when Model.ready gets set to true (at the end of the setup flow)
        this.latestTableDetails = null; // Stores the latest result from `describeTable` for the given table
        this.pendingTaskPromise = () => {
            return this.ready ? Promise.resolve() : new Promise((resolve) => {
                this.pendingTasks.push(resolve);
            });
        };
        const setupFlow = []; // An array of setup actions to be run in order
        // Create table
        if (this.options.create) {
            setupFlow.push(() => createTable(this));
        }
        // Wait for Active
        if (this.options.waitForActive === true || (this.options.waitForActive || {}).enabled) {
            setupFlow.push(() => waitForActive(this, false));
        }
        // Update Time To Live
        if ((this.options.create || (Array.isArray(this.options.update) ? this.options.update.includes(ModelUpdateOptions.ttl) : this.options.update)) && options.expires) {
            setupFlow.push(() => updateTimeToLive(this));
        }
        // Update
        if (this.options.update && !this.alreadyCreated) {
            setupFlow.push(() => updateTable(this));
        }
        // Run setup flow
        const setupFlowPromise = setupFlow.reduce((existingFlow, flow) => {
            return existingFlow.then(() => flow()).then((flow) => {
                return typeof flow === "function" ? flow() : flow;
            });
        }, Promise.resolve());
        setupFlowPromise.then(() => this.ready = true).then(() => {
            this.pendingTasks.forEach((task) => task());
            this.pendingTasks = [];
        });
        const self = this;
        class Document extends Document_1.Document {
            constructor(object = {}, settings = {}) {
                super(self, utils.deep_copy(object), settings);
            }
        }
        Document.Model = self;
        this.serializer = new Serializer_1.Serializer();
        this.Document = Document;
        this.Document.table = {
            "create": {
                "request": () => createTableRequest(this)
            }
        };
        this.Document.transaction = [
            // `function` Default: `this[key]`
            // `settingsIndex` Default: 1
            // `dynamoKey` Default: utils.capitalize_first_letter(key)
            { "key": "get" },
            { "key": "create", "dynamoKey": "Put" },
            { "key": "delete" },
            { "key": "update", "settingsIndex": 2, "modifier": (response) => {
                    delete response.ReturnValues;
                    return response;
                } },
            { "key": "condition", "settingsIndex": -1, "dynamoKey": "ConditionCheck", "function": (key, condition) => (Object.assign({ "Key": this.Document.objectToDynamo(this.convertObjectToKey(key)), "TableName": this.name }, condition ? condition.requestObject() : {})) }
        ].reduce((accumulator, currentValue) => {
            const { key, modifier } = currentValue;
            const dynamoKey = currentValue.dynamoKey || utils.capitalize_first_letter(key);
            const settingsIndex = currentValue.settingsIndex || 1;
            const func = currentValue.function || this[key].bind(this);
            accumulator[key] = async (...args) => {
                if (typeof args[args.length - 1] === "function") {
                    console.warn("Dynamoose Warning: Passing callback function into transaction method not allowed. Removing callback function from list of arguments.");
                    args.pop();
                }
                if (settingsIndex >= 0) {
                    args[settingsIndex] = utils.merge_objects({ "return": "request" }, args[settingsIndex] || {});
                }
                let result = await func(...args);
                if (modifier) {
                    result = modifier(result);
                }
                return { [dynamoKey]: result };
            };
            return accumulator;
        }, {});
        const ModelStore = __webpack_require__(/*! ../ModelStore */ "../../dynamoose/dist/ModelStore.js");
        ModelStore(this);
    }
    // This function returns the best matched schema for the given object input
    async schemaForObject(object) {
        const schemaCorrectnessScores = this.schemas.map((schema) => {
            const typePaths = schema.getTypePaths(object, { "type": "toDynamo", "includeAllProperties": true });
            const multipleTypeKeys = Object.keys(typePaths).filter((key) => typeof typePaths[key] === "number");
            multipleTypeKeys.forEach((key) => {
                // TODO: Ideally at some point we'd move this code into the `schema.getTypePaths` method, but that breaks some other things, so holding off on that for now.
                typePaths[key] = {
                    "index": typePaths[key],
                    "matchCorrectness": 1,
                    "entryCorrectness": [1]
                };
            });
            return typePaths;
        }).map((obj) => Object.values(obj).map((obj) => { var _a; return ((_a = obj) === null || _a === void 0 ? void 0 : _a.matchCorrectness) || 0; })).map((array) => Math.min(...array));
        const highestSchemaCorrectnessScoreIndex = schemaCorrectnessScores.indexOf(Math.max(...schemaCorrectnessScores));
        return this.schemas[highestSchemaCorrectnessScoreIndex];
    }
    async getIndexes() {
        return (await Promise.all(this.schemas.map((schema) => schema.getIndexes(this)))).reduce((result, indexes) => {
            Object.entries(indexes).forEach(([key, value]) => {
                if (key === "TableIndex") {
                    result[key] = value;
                }
                else {
                    result[key] = result[key] ? utils.unique_array_elements([...result[key], ...value]) : value;
                }
            });
            return result;
        }, {});
    }
    async getCreateTableAttributeParams() {
        // TODO: implement this
        return this.schemas[0].getCreateTableAttributeParams(this);
    }
    getHashKey() {
        return this.schemas[0].getHashKey();
    }
    getRangeKey() {
        return this.schemas[0].getRangeKey();
    }
    convertObjectToKey(key) {
        let keyObject;
        const hashKey = this.getHashKey();
        if (typeof key === "object") {
            const rangeKey = this.getRangeKey();
            keyObject = {
                [hashKey]: key[hashKey]
            };
            if (rangeKey && typeof key[rangeKey] !== "undefined" && key[rangeKey] !== null) {
                keyObject[rangeKey] = key[rangeKey];
            }
        }
        else {
            keyObject = {
                [hashKey]: key
            };
        }
        return keyObject;
    }
    batchGet(keys, settings, callback) {
        if (typeof settings === "function") {
            callback = settings;
            settings = { "return": "documents" };
        }
        if (typeof settings === "undefined") {
            settings = { "return": "documents" };
        }
        const keyObjects = keys.map((key) => this.convertObjectToKey(key));
        const documentify = (document) => new this.Document(document, { "type": "fromDynamo" }).conformToSchema({ "customTypesDynamo": true, "checkExpiredItem": true, "saveUnknown": true, "modifiers": ["get"], "type": "fromDynamo" });
        const prepareResponse = async (response) => {
            const tmpResult = await Promise.all(response.Responses[this.name].map((item) => documentify(item)));
            const unprocessedArray = response.UnprocessedKeys[this.name] ? response.UnprocessedKeys[this.name].Keys : [];
            const tmpResultUnprocessed = await Promise.all(unprocessedArray.map((item) => this.Document.fromDynamo(item)));
            const startArray = Object.assign([], {
                "unprocessedKeys": [],
                "populate": Populate_1.PopulateDocuments,
                "toJSON": utils.dynamoose.documentToJSON
            });
            return keyObjects.reduce((result, key) => {
                const keyProperties = Object.keys(key);
                const item = tmpResult.find((item) => keyProperties.every((keyProperty) => item[keyProperty] === key[keyProperty]));
                if (item) {
                    result.push(item);
                }
                else {
                    const item = tmpResultUnprocessed.find((item) => keyProperties.every((keyProperty) => item[keyProperty] === key[keyProperty]));
                    if (item) {
                        result.unprocessedKeys.push(item);
                    }
                }
                return result;
            }, startArray);
        };
        const params = {
            "RequestItems": {
                [this.name]: {
                    "Keys": keyObjects.map((key) => this.Document.objectToDynamo(key))
                }
            }
        };
        if (settings.attributes) {
            params.RequestItems[this.name].AttributesToGet = settings.attributes;
        }
        if (settings.return === "request") {
            if (callback) {
                const localCallback = callback;
                localCallback(null, params);
                return;
            }
            else {
                return params;
            }
        }
        const promise = this.pendingTaskPromise().then(() => ddb("batchGetItem", params));
        if (callback) {
            const localCallback = callback;
            promise.then((response) => prepareResponse(response)).then((response) => localCallback(null, response)).catch((error) => localCallback(error));
        }
        else {
            return (async () => {
                const response = await promise;
                return prepareResponse(response);
            })();
        }
    }
    batchPut(documents, settings, callback) {
        if (typeof settings === "function") {
            callback = settings;
            settings = { "return": "response" };
        }
        if (typeof settings === "undefined") {
            settings = { "return": "response" };
        }
        const prepareResponse = async (response) => {
            const unprocessedArray = response.UnprocessedItems && response.UnprocessedItems[this.name] ? response.UnprocessedItems[this.name] : [];
            const tmpResultUnprocessed = await Promise.all(unprocessedArray.map((item) => this.Document.fromDynamo(item.PutRequest.Item)));
            return documents.reduce((result, document) => {
                const item = tmpResultUnprocessed.find((item) => Object.keys(document).every((keyProperty) => item[keyProperty] === document[keyProperty]));
                if (item) {
                    result.unprocessedItems.push(item);
                }
                return result;
            }, { "unprocessedItems": [] });
        };
        const paramsPromise = (async () => ({
            "RequestItems": {
                [this.name]: await Promise.all(documents.map(async (document) => ({
                    "PutRequest": {
                        "Item": await new this.Document(document).toDynamo({ "defaults": true, "validate": true, "required": true, "enum": true, "forceDefault": true, "saveUnknown": true, "combine": true, "customTypesDynamo": true, "updateTimestamps": true, "modifiers": ["set"] })
                    }
                })))
            }
        }))();
        if (settings.return === "request") {
            if (callback) {
                const localCallback = callback;
                paramsPromise.then((result) => localCallback(null, result));
                return;
            }
            else {
                return paramsPromise;
            }
        }
        const promise = this.pendingTaskPromise().then(() => paramsPromise).then((params) => ddb("batchWriteItem", params));
        if (callback) {
            const localCallback = callback;
            promise.then((response) => prepareResponse(response)).then((response) => localCallback(null, response)).catch((error) => callback(error));
        }
        else {
            return (async () => {
                const response = await promise;
                return prepareResponse(response);
            })();
        }
    }
    batchDelete(keys, settings, callback) {
        if (typeof settings === "function") {
            callback = settings;
            settings = { "return": "response" };
        }
        if (typeof settings === "undefined") {
            settings = { "return": "response" };
        }
        const keyObjects = keys.map((key) => this.convertObjectToKey(key));
        const prepareResponse = async (response) => {
            const unprocessedArray = response.UnprocessedItems && response.UnprocessedItems[this.name] ? response.UnprocessedItems[this.name] : [];
            const tmpResultUnprocessed = await Promise.all(unprocessedArray.map((item) => this.Document.fromDynamo(item.DeleteRequest.Key)));
            return keyObjects.reduce((result, key) => {
                const item = tmpResultUnprocessed.find((item) => Object.keys(key).every((keyProperty) => item[keyProperty] === key[keyProperty]));
                if (item) {
                    result.unprocessedItems.push(item);
                }
                return result;
            }, { "unprocessedItems": [] });
        };
        const params = {
            "RequestItems": {
                [this.name]: keyObjects.map((key) => ({
                    "DeleteRequest": {
                        "Key": this.Document.objectToDynamo(key)
                    }
                }))
            }
        };
        if (settings.return === "request") {
            if (callback) {
                const localCallback = callback;
                localCallback(null, params);
                return;
            }
            else {
                return params;
            }
        }
        const promise = this.pendingTaskPromise().then(() => ddb("batchWriteItem", params));
        if (callback) {
            const localCallback = callback;
            promise.then((response) => prepareResponse(response)).then((response) => localCallback(null, response)).catch((error) => localCallback(error));
        }
        else {
            return (async () => {
                const response = await promise;
                return prepareResponse(response);
            })();
        }
    }
    update(keyObj, updateObj, settings, callback) {
        if (typeof updateObj === "function") {
            callback = updateObj; // TODO: fix this, for some reason `updateObj` has a type of Function which is forcing us to type cast it
            updateObj = null;
            settings = { "return": "document" };
        }
        if (typeof settings === "function") {
            callback = settings;
            settings = { "return": "document" };
        }
        if (!updateObj) {
            const hashKeyName = this.getHashKey();
            updateObj = utils.deep_copy(keyObj);
            keyObj = {
                [hashKeyName]: keyObj[hashKeyName]
            };
            delete updateObj[hashKeyName];
            const rangeKeyName = this.getRangeKey();
            if (rangeKeyName) {
                keyObj[rangeKeyName] = updateObj[rangeKeyName];
                delete updateObj[rangeKeyName];
            }
        }
        if (typeof settings === "undefined") {
            settings = { "return": "document" };
        }
        const schema = this.schemas[0]; // TODO: fix this to get correct schema
        let index = 0;
        const getUpdateExpressionObject = async () => {
            const updateTypes = [
                { "name": "$SET", "operator": " = ", "objectFromSchemaSettings": { "validate": true, "enum": true, "forceDefault": true, "required": "nested", "modifiers": ["set"] } },
                { "name": "$ADD", "objectFromSchemaSettings": { "forceDefault": true } },
                { "name": "$REMOVE", "attributeOnly": true, "objectFromSchemaSettings": { "required": true, "defaults": true } },
                { "name": "$DELETE", "objectFromSchemaSettings": { "defaults": true } }
            ].reverse();
            const returnObject = await Object.keys(updateObj).reduce(async (accumulatorPromise, key) => {
                const accumulator = await accumulatorPromise;
                let value = updateObj[key];
                if (!(typeof value === "object" && updateTypes.map((a) => a.name).includes(key))) {
                    value = { [key]: value };
                    key = "$SET";
                }
                const valueKeys = Object.keys(value);
                for (let i = 0; i < valueKeys.length; i++) {
                    let subKey = valueKeys[i];
                    let subValue = value[subKey];
                    let updateType = updateTypes.find((a) => a.name === key);
                    const expressionKey = `#a${index}`;
                    subKey = Array.isArray(value) ? subValue : subKey;
                    let dynamoType;
                    try {
                        dynamoType = schema.getAttributeType(subKey, subValue, { "unknownAttributeAllowed": true });
                    }
                    catch (e) { } // eslint-disable-line no-empty
                    const attributeExists = schema.attributes().includes(subKey);
                    const dynamooseUndefined = (__webpack_require__(/*! ../index */ "../../dynamoose/dist/index.js").UNDEFINED);
                    if (!updateType.attributeOnly && subValue !== dynamooseUndefined) {
                        subValue = (await this.Document.objectFromSchema({ [subKey]: dynamoType === "L" && !Array.isArray(subValue) ? [subValue] : subValue }, this, Object.assign({ "type": "toDynamo", "customTypesDynamo": true, "saveUnknown": true }, updateType.objectFromSchemaSettings)))[subKey];
                    }
                    if (subValue === dynamooseUndefined || subValue === undefined) {
                        if (attributeExists) {
                            updateType = updateTypes.find((a) => a.name === "$REMOVE");
                        }
                        else {
                            continue;
                        }
                    }
                    if (subValue !== dynamooseUndefined) {
                        const defaultValue = await schema.defaultCheck(subKey, undefined, updateType.objectFromSchemaSettings);
                        if (defaultValue) {
                            subValue = defaultValue;
                            updateType = updateTypes.find((a) => a.name === "$SET");
                        }
                    }
                    if (updateType.objectFromSchemaSettings.required === true) {
                        await schema.requiredCheck(subKey, undefined);
                    }
                    let expressionValue = updateType.attributeOnly ? "" : `:v${index}`;
                    accumulator.ExpressionAttributeNames[expressionKey] = subKey;
                    if (!updateType.attributeOnly) {
                        accumulator.ExpressionAttributeValues[expressionValue] = subValue;
                    }
                    if (dynamoType === "L" && updateType.name === "$ADD") {
                        expressionValue = `list_append(${expressionKey}, ${expressionValue})`;
                        updateType = updateTypes.find((a) => a.name === "$SET");
                    }
                    const operator = updateType.operator || (updateType.attributeOnly ? "" : " ");
                    accumulator.UpdateExpression[updateType.name.slice(1)].push(`${expressionKey}${operator}${expressionValue}`);
                    index++;
                }
                return accumulator;
            }, Promise.resolve((async () => {
                const obj = {
                    "ExpressionAttributeNames": {},
                    "ExpressionAttributeValues": {},
                    "UpdateExpression": updateTypes.map((a) => a.name).reduce((accumulator, key) => {
                        accumulator[key.slice(1)] = [];
                        return accumulator;
                    }, {})
                };
                const documentFunctionSettings = { "updateTimestamps": { "updatedAt": true }, "customTypesDynamo": true, "type": "toDynamo" };
                const defaultObjectFromSchema = await this.Document.objectFromSchema(await this.Document.prepareForObjectFromSchema({}, this, documentFunctionSettings), this, documentFunctionSettings);
                Object.keys(defaultObjectFromSchema).forEach((key) => {
                    const value = defaultObjectFromSchema[key];
                    const updateType = updateTypes.find((a) => a.name === "$SET");
                    obj.ExpressionAttributeNames[`#a${index}`] = key;
                    obj.ExpressionAttributeValues[`:v${index}`] = value;
                    obj.UpdateExpression[updateType.name.slice(1)].push(`#a${index}${updateType.operator}:v${index}`);
                    index++;
                });
                return obj;
            })()));
            schema.attributes().map((attribute) => ({ attribute, "type": schema.getAttributeTypeDetails(attribute) })).filter((item) => {
                return Array.isArray(item.type) ? item.type.some((type) => type.name === "Combine") : item.type.name === "Combine";
            }).map((details) => {
                const { type } = details;
                if (Array.isArray(type)) {
                    throw new CustomError.InvalidParameter("Combine type is not allowed to be used with multiple types.");
                }
                return details;
            }).forEach((details) => {
                const { invalidAttributes } = details.type.typeSettings.attributes.reduce((result, attribute) => {
                    const expressionAttributeNameEntry = Object.entries(returnObject.ExpressionAttributeNames).find((entry) => entry[1] === attribute);
                    const doesExist = Boolean(expressionAttributeNameEntry);
                    const isValid = doesExist && [...returnObject.UpdateExpression.SET, ...returnObject.UpdateExpression.REMOVE].join(", ").includes(expressionAttributeNameEntry[0]);
                    if (!isValid) {
                        result.invalidAttributes.push(attribute);
                    }
                    return result;
                }, { "invalidAttributes": [] });
                if (invalidAttributes.length > 0) {
                    throw new CustomError.InvalidParameter(`You must update all or none of the combine attributes when running Model.update. Missing combine attributes: ${invalidAttributes.join(", ")}.`);
                }
                else {
                    const nextIndex = Math.max(...Object.keys(returnObject.ExpressionAttributeNames).map((key) => parseInt(key.replace("#a", "")))) + 1;
                    returnObject.ExpressionAttributeNames[`#a${nextIndex}`] = details.attribute;
                    returnObject.ExpressionAttributeValues[`:v${nextIndex}`] = details.type.typeSettings.attributes.map((attribute) => {
                        const [expressionAttributeNameKey] = Object.entries(returnObject.ExpressionAttributeNames).find((entry) => entry[1] === attribute);
                        return returnObject.ExpressionAttributeValues[expressionAttributeNameKey.replace("#a", ":v")];
                    }).filter((value) => typeof value !== "undefined" && value !== null).join(details.type.typeSettings.seperator);
                    returnObject.UpdateExpression.SET.push(`#a${nextIndex} = :v${nextIndex}`);
                }
            });
            await Promise.all(schema.attributes().map(async (attribute) => {
                const defaultValue = await schema.defaultCheck(attribute, undefined, { "forceDefault": true });
                if (defaultValue && !Object.values(returnObject.ExpressionAttributeNames).includes(attribute)) {
                    const updateType = updateTypes.find((a) => a.name === "$SET");
                    returnObject.ExpressionAttributeNames[`#a${index}`] = attribute;
                    returnObject.ExpressionAttributeValues[`:v${index}`] = defaultValue;
                    returnObject.UpdateExpression[updateType.name.slice(1)].push(`#a${index}${updateType.operator}:v${index}`);
                    index++;
                }
            }));
            Object.values(returnObject.ExpressionAttributeNames).map((attribute, index) => {
                const value = Object.values(returnObject.ExpressionAttributeValues)[index];
                const valueKey = Object.keys(returnObject.ExpressionAttributeValues)[index];
                let dynamoType;
                try {
                    dynamoType = schema.getAttributeType(attribute, value, { "unknownAttributeAllowed": true });
                }
                catch (e) { } // eslint-disable-line no-empty
                const attributeType = Schema_1.Schema.attributeTypes.findDynamoDBType(dynamoType);
                if ((attributeType === null || attributeType === void 0 ? void 0 : attributeType.toDynamo) && !attributeType.isOfType(value, "fromDynamo")) {
                    returnObject.ExpressionAttributeValues[valueKey] = attributeType.toDynamo(value);
                }
            });
            returnObject.ExpressionAttributeValues = this.Document.objectToDynamo(returnObject.ExpressionAttributeValues);
            if (Object.keys(returnObject.ExpressionAttributeValues).length === 0) {
                delete returnObject.ExpressionAttributeValues;
            }
            return Object.assign(Object.assign({}, returnObject), { "UpdateExpression": Object.keys(returnObject.UpdateExpression).reduce((accumulator, key) => {
                    const value = returnObject.UpdateExpression[key];
                    if (value.length > 0) {
                        return `${accumulator}${accumulator.length > 0 ? " " : ""}${key} ${value.join(", ")}`;
                    }
                    else {
                        return accumulator;
                    }
                }, "") });
        };
        const documentify = (document) => new this.Document(document, { "type": "fromDynamo" }).conformToSchema({ "customTypesDynamo": true, "checkExpiredItem": true, "type": "fromDynamo", "saveUnknown": true });
        const localSettings = settings;
        const updateItemParamsPromise = this.pendingTaskPromise().then(async () => (Object.assign(Object.assign({ "Key": this.Document.objectToDynamo(this.convertObjectToKey(keyObj)), "ReturnValues": localSettings.returnValues || "ALL_NEW" }, utils.merge_objects.main({ "combineMethod": "object_combine" })(localSettings.condition ? localSettings.condition.requestObject({ "index": { "start": index, "set": (i) => {
                    index = i;
                } }, "conditionString": "ConditionExpression", "conditionStringType": "string" }) : {}, await getUpdateExpressionObject())), { "TableName": this.name })));
        if (settings.return === "request") {
            if (callback) {
                const localCallback = callback;
                updateItemParamsPromise.then((params) => localCallback(null, params));
                return;
            }
            else {
                return updateItemParamsPromise;
            }
        }
        const promise = updateItemParamsPromise.then((params) => ddb("updateItem", params));
        if (callback) {
            promise.then((response) => response.Attributes ? documentify(response.Attributes) : undefined).then((response) => callback(null, response)).catch((error) => callback(error));
        }
        else {
            return (async () => {
                const response = await promise;
                return response.Attributes ? await documentify(response.Attributes) : undefined;
            })();
        }
    }
    create(document, settings, callback) {
        if (typeof settings === "function" && !callback) {
            callback = settings;
            settings = {};
        }
        return new this.Document(document).save(Object.assign({ "overwrite": false }, settings), callback);
    }
    delete(key, settings, callback) {
        if (typeof settings === "function") {
            callback = settings;
            settings = { "return": null };
        }
        if (typeof settings === "undefined") {
            settings = { "return": null };
        }
        if (typeof settings === "object" && !settings.return) {
            settings = Object.assign(Object.assign({}, settings), { "return": null });
        }
        let deleteItemParams = {
            "Key": this.Document.objectToDynamo(this.convertObjectToKey(key)),
            "TableName": this.name
        };
        if (settings.condition) {
            deleteItemParams = Object.assign(Object.assign({}, deleteItemParams), settings.condition.requestObject());
        }
        if (settings.return === "request") {
            if (callback) {
                const localCallback = callback;
                localCallback(null, deleteItemParams);
                return;
            }
            else {
                return deleteItemParams;
            }
        }
        const promise = this.pendingTaskPromise().then(() => ddb("deleteItem", deleteItemParams));
        if (callback) {
            promise.then(() => callback()).catch((error) => callback(error));
        }
        else {
            return (async () => {
                await promise;
            })();
        }
    }
    get(key, settings, callback) {
        if (typeof settings === "function") {
            callback = settings;
            settings = { "return": "document" };
        }
        if (typeof settings === "undefined") {
            settings = { "return": "document" };
        }
        const conformToSchemaSettings = { "customTypesDynamo": true, "checkExpiredItem": true, "saveUnknown": true, "modifiers": ["get"], "type": "fromDynamo" };
        const documentify = (document) => new this.Document(document, { "type": "fromDynamo" }).conformToSchema(conformToSchemaSettings);
        const getItemParams = {
            "Key": this.Document.objectToDynamo(this.convertObjectToKey(key)),
            "TableName": this.name
        };
        if (settings.consistent !== undefined && settings.consistent !== null) {
            getItemParams.ConsistentRead = settings.consistent;
        }
        if (settings.attributes) {
            getItemParams.ProjectionExpression = settings.attributes.map((attribute, index) => `#a${index}`).join(", ");
            getItemParams.ExpressionAttributeNames = settings.attributes.reduce((accumulator, currentValue, index) => (accumulator[`#a${index}`] = currentValue, accumulator), {});
        }
        if (settings.return === "request") {
            if (callback) {
                const localCallback = callback;
                localCallback(null, getItemParams);
                return;
            }
            else {
                return getItemParams;
            }
        }
        const promise = this.pendingTaskPromise().then(() => ddb("getItem", getItemParams));
        if (callback) {
            const localCallback = callback;
            promise.then((response) => response.Item ? documentify(response.Item) : undefined).then((response) => localCallback(null, response)).catch((error) => callback(error));
        }
        else {
            return (async () => {
                const response = await promise;
                return response.Item ? await documentify(response.Item) : undefined;
            })();
        }
    }
    // Serialize Many
    serializeMany(documentsArray = [], nameOrOptions) {
        return this.serializer._serializeMany(documentsArray, nameOrOptions);
    }
}
exports.Model = Model;
Model.defaults = defaults_1.original;
Model.prototype.scan = function (object) {
    return new DocumentRetriever_1.Scan(this, object);
};
Model.prototype.query = function (object) {
    return new DocumentRetriever_1.Query(this, object);
};
// Methods
const customMethodFunctions = (type) => {
    const entryPoint = (self) => type === "document" ? self.Document.prototype : self.Document;
    return {
        "set": function (name, fn) {
            const self = this;
            if (!entryPoint(self)[name] || entryPoint(self)[name][Internal.General.internalProperties] && entryPoint(self)[name][Internal.General.internalProperties].type === "customMethod") {
                entryPoint(self)[name] = function (...args) {
                    const bindObject = type === "document" ? this : self.Document;
                    const cb = typeof args[args.length - 1] === "function" ? args[args.length - 1] : undefined;
                    if (cb) {
                        const result = fn.bind(bindObject)(...args);
                        if (result instanceof Promise) {
                            result.then((result) => cb(null, result)).catch((err) => cb(err));
                        }
                    }
                    else {
                        return new Promise((resolve, reject) => {
                            const result = fn.bind(bindObject)(...args, (err, result) => {
                                if (err) {
                                    reject(err);
                                }
                                else {
                                    resolve(result);
                                }
                            });
                            if (result instanceof Promise) {
                                result.then(resolve).catch(reject);
                            }
                        });
                    }
                };
                entryPoint(self)[name][Internal.General.internalProperties] = { "type": "customMethod" };
            }
        },
        "delete": function (name) {
            const self = this;
            if (entryPoint(self)[name] && entryPoint(self)[name][Internal.General.internalProperties] && entryPoint(self)[name][Internal.General.internalProperties].type === "customMethod") {
                entryPoint(self)[name] = undefined;
            }
        }
    };
};
Model.prototype.methods = Object.assign(Object.assign({}, customMethodFunctions("model")), { "document": customMethodFunctions("document") });
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../dynamoose/dist/ModelStore.js":
/*!******************************************!*\
  !*** ../../dynamoose/dist/ModelStore.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const CustomError = __webpack_require__(/*! ./Error */ "../../dynamoose/dist/Error.js");
const Model_1 = __webpack_require__(/*! ./Model */ "../../dynamoose/dist/Model/index.js");
let aliases = {};
let models = {};
const returnObject = (input) => {
    if (input instanceof Model_1.Model) {
        models[input.originalName] = input;
        aliases[input.name] = input.originalName;
        return input;
    }
    else if (typeof input === "string") {
        const alias = aliases[input];
        const result = models[input] || models[alias];
        return result;
    }
    else {
        throw new CustomError.InvalidParameter("You must pass in a Model or table name as a string.");
    }
};
returnObject.clear = () => {
    models = {};
    aliases = {};
};
module.exports = returnObject;
//# sourceMappingURL=ModelStore.js.map

/***/ }),

/***/ "../../dynamoose/dist/Populate.js":
/*!****************************************!*\
  !*** ../../dynamoose/dist/Populate.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PopulateDocuments = exports.PopulateDocument = void 0;
const utils = __webpack_require__(/*! ./utils */ "../../dynamoose/dist/utils/index.js");
function PopulateDocument(settings, callback, internalSettings) {
    if (typeof settings === "function") {
        callback = settings;
        settings = {};
    }
    if (!internalSettings) {
        internalSettings = {};
    }
    const { model } = this;
    const localSettings = settings;
    const promise = model.schemaForObject(this).then((schema) => {
        // TODO: uncomment out `/* || detail.name === "Model Set"*/` part and add relevant tests
        const modelAttributes = utils.array_flatten(schema.attributes().map((prop) => ({ prop, "details": schema.getAttributeTypeDetails(prop) }))).filter((obj) => Array.isArray(obj.details) ? obj.details.some((detail) => detail.name === "Model" /* || detail.name === "Model Set"*/) : obj.details.name === "Model" || obj.details.name === "Model Set").map((obj) => obj.prop);
        return { schema, modelAttributes };
    }).then((obj) => {
        const { schema, modelAttributes } = obj;
        return Promise.all(modelAttributes.map(async (prop) => {
            const typeDetails = schema.getAttributeTypeDetails(prop);
            const typeDetail = Array.isArray(typeDetails) ? typeDetails.find((detail) => detail.name === "Model") : typeDetails;
            const { typeSettings } = typeDetail;
            // TODO: `subModel` is currently any, we should fix that
            const subModel = typeof typeSettings.model === "object" ? model.Document : typeSettings.model;
            prop = prop.endsWith(".0") ? prop.substring(0, prop.length - 2) : prop;
            const documentPropValue = utils.object.get(this, prop);
            const doesPopulatePropertyExist = !(typeof documentPropValue === "undefined" || documentPropValue === null);
            if (!doesPopulatePropertyExist || documentPropValue instanceof subModel) {
                return;
            }
            const key = [internalSettings.parentKey, prop].filter((a) => Boolean(a)).join(".");
            const populatePropertiesExists = typeof (localSettings === null || localSettings === void 0 ? void 0 : localSettings.properties) !== "undefined" && localSettings.properties !== null;
            const populateProperties = Array.isArray(localSettings === null || localSettings === void 0 ? void 0 : localSettings.properties) || typeof (localSettings === null || localSettings === void 0 ? void 0 : localSettings.properties) === "boolean" ? localSettings.properties : [localSettings === null || localSettings === void 0 ? void 0 : localSettings.properties];
            const isPopulatePropertyInSettingProperties = populatePropertiesExists ? utils.dynamoose.wildcard_allowed_check(populateProperties, key) : true;
            if (!isPopulatePropertyInSettingProperties) {
                return;
            }
            const isArray = Array.isArray(documentPropValue);
            const isSet = documentPropValue instanceof Set;
            if (isArray || isSet) {
                const subDocuments = await Promise.all([...documentPropValue].map((val) => subModel.get(val)));
                const saveDocuments = await Promise.all(subDocuments.map((doc) => PopulateDocument.bind(doc)(localSettings, null, { "parentKey": key })));
                utils.object.set(this, prop, saveDocuments);
            }
            else {
                const subDocument = await subModel.get(documentPropValue);
                const saveDocument = await PopulateDocument.bind(subDocument)(localSettings, null, { "parentKey": key });
                utils.object.set(this, prop, saveDocument);
            }
        }));
    });
    if (callback) {
        promise.then(() => callback(null, this)).catch((err) => callback(err));
    }
    else {
        return (async () => {
            await promise;
            return this;
        })();
    }
}
exports.PopulateDocument = PopulateDocument;
function PopulateDocuments(settings, callback) {
    if (typeof settings === "function") {
        callback = settings;
        settings = {};
    }
    const promise = Promise.all(this.map(async (document, index) => {
        this[index] = await PopulateDocument.bind(document)(settings);
    }));
    if (callback) {
        promise.then(() => callback(null, this)).catch((err) => callback(err));
    }
    else {
        return (async () => {
            await promise;
            return this;
        })();
    }
}
exports.PopulateDocuments = PopulateDocuments;
//# sourceMappingURL=Populate.js.map

/***/ }),

/***/ "../../dynamoose/dist/Schema.js":
/*!**************************************!*\
  !*** ../../dynamoose/dist/Schema.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Schema = void 0;
const CustomError = __webpack_require__(/*! ./Error */ "../../dynamoose/dist/Error.js");
const utils = __webpack_require__(/*! ./utils */ "../../dynamoose/dist/utils/index.js");
const Internal = __webpack_require__(/*! ./Internal */ "../../dynamoose/dist/Internal.js");
const Document_1 = __webpack_require__(/*! ./Document */ "../../dynamoose/dist/Document.js");
const Model_1 = __webpack_require__(/*! ./Model */ "../../dynamoose/dist/Model/index.js");
class DynamoDBType {
    constructor(obj) {
        Object.keys(obj).forEach((key) => {
            this[key] = obj[key];
        });
    }
    result(typeSettings) {
        // Can't use variable below to check type, see TypeScript issue link below for more information
        // https://github.com/microsoft/TypeScript/issues/37855
        // const isSubType = this.dynamodbType instanceof DynamoDBType; // Represents underlying DynamoDB type for custom types
        const type = this.dynamodbType instanceof DynamoDBType ? this.dynamodbType : this;
        const dynamodbType = (() => {
            if (this.dynamodbType instanceof DynamoDBType) {
                return this.dynamodbType.dynamodbType;
            }
            else if (typeof this.dynamodbType === "function") {
                return this.dynamodbType(typeSettings);
            }
            else {
                return this.dynamodbType;
            }
        })();
        const result = {
            "name": this.name,
            dynamodbType,
            "nestedType": this.nestedType,
            "isOfType": this.jsType.func ? (val) => this.jsType.func(val, typeSettings) : (val) => {
                return [{ "value": this.jsType, "type": "main" }, { "value": this.dynamodbType instanceof DynamoDBType ? type.jsType : null, "type": "underlying" }].filter((a) => Boolean(a.value)).find((jsType) => typeof jsType.value === "string" ? typeof val === jsType.value : val instanceof jsType.value);
            },
            "isSet": false,
            typeSettings
        };
        if (this.dynamicName) {
            result.dynamicName = () => this.dynamicName(typeSettings);
        }
        if (this.customType) {
            const functions = this.customType.functions(typeSettings);
            result.customType = Object.assign(Object.assign({}, this.customType), { functions });
        }
        const isSetAllowed = typeof type.set === "function" ? type.set(typeSettings) : type.set;
        if (isSetAllowed) {
            let typeName;
            if (type.customDynamoName) {
                typeName = typeof type.customDynamoName === "function" ? type.customDynamoName(typeSettings) : type.customDynamoName;
            }
            else {
                typeName = type.name;
            }
            result.set = {
                "name": `${this.name} Set`,
                "isSet": true,
                "dynamodbType": `${dynamodbType}S`,
                "isOfType": (val, type, settings = {}) => {
                    if (type === "toDynamo") {
                        return !settings.saveUnknown && Array.isArray(val) && val.every((subValue) => result.isOfType(subValue)) || val instanceof Set && [...val].every((subValue) => result.isOfType(subValue));
                    }
                    else {
                        const setVal = val; // TODO: Probably bad practice here, should figure out how to do this better.
                        return setVal.wrapperName === "Set" && setVal.type === typeName && Array.isArray(setVal.values);
                    }
                },
                "toDynamo": (val) => ({ "wrapperName": "Set", "type": typeName, "values": [...val] }),
                "fromDynamo": (val) => new Set(val.values),
                typeSettings
            };
            if (this.dynamicName) {
                result.set.dynamicName = () => `${this.dynamicName(typeSettings)} Set`;
            }
            if (this.customType) {
                result.set.customType = {
                    "functions": {
                        "toDynamo": (val) => val.map(result.customType.functions.toDynamo),
                        "fromDynamo": (val) => (Object.assign(Object.assign({}, val), { "values": val.values.map(result.customType.functions.fromDynamo) })),
                        "isOfType": (val, type) => {
                            if (type === "toDynamo") {
                                return Array.isArray(val) && val.every((item) => result.customType.functions.isOfType(item, type));
                            }
                            else {
                                const setVal = val; // TODO: Probably bad practice here, should figure out how to do this better.
                                return setVal.wrapperName === "Set" && setVal.type === typeName && Array.isArray(setVal.values);
                            }
                        }
                    }
                };
            }
        }
        return result;
    }
}
const attributeTypesMain = (() => {
    const numberType = new DynamoDBType({ "name": "Number", "dynamodbType": "N", "set": true, "jsType": "number" });
    const stringType = new DynamoDBType({ "name": "String", "dynamodbType": "S", "set": true, "jsType": "string" });
    const booleanType = new DynamoDBType({ "name": "Boolean", "dynamodbType": "BOOL", "jsType": "boolean" });
    return [
        new DynamoDBType({ "name": "Null", "dynamodbType": "NULL", "set": false, "jsType": { "func": (val) => val === null } }),
        new DynamoDBType({ "name": "Buffer", "dynamodbType": "B", "set": true, "jsType": Buffer, "customDynamoName": "Binary" }),
        booleanType,
        new DynamoDBType({ "name": "Array", "dynamodbType": "L", "jsType": { "func": Array.isArray }, "nestedType": true }),
        new DynamoDBType({ "name": "Object", "dynamodbType": "M", "jsType": { "func": (val) => Boolean(val) && val.constructor === Object && (val.wrapperName !== "Set" || Object.keys(val).length !== 3 || !val.type || !val.values) }, "nestedType": true }),
        numberType,
        stringType,
        new DynamoDBType({ "name": "Date", "dynamodbType": numberType, "customType": {
                "functions": (typeSettings) => ({
                    "toDynamo": (val) => {
                        if (typeSettings.storage === "seconds") {
                            return Math.round(val.getTime() / 1000);
                        }
                        else {
                            return val.getTime();
                        }
                    },
                    "fromDynamo": (val) => {
                        if (typeSettings.storage === "seconds") {
                            return new Date(val * 1000);
                        }
                        else {
                            return new Date(val);
                        }
                    },
                    "isOfType": (val, type) => {
                        return type === "toDynamo" ? val instanceof Date : typeof val === "number";
                    }
                })
            }, "jsType": Date }),
        new DynamoDBType({ "name": "Combine", "dynamodbType": stringType, "set": false, "jsType": String }),
        new DynamoDBType({ "name": "Constant", "dynamicName": (typeSettings) => {
                return `constant ${typeof typeSettings.value} (${typeSettings.value})`;
            }, "customType": {
                "functions": (typeSettings) => ({
                    "isOfType": (val) => typeSettings.value === val
                })
            }, "jsType": { "func": (val, typeSettings) => val === typeSettings.value }, "dynamodbType": (typeSettings) => {
                switch (typeof typeSettings.value) {
                    case "string":
                        return stringType.dynamodbType;
                    case "boolean":
                        return booleanType.dynamodbType;
                    case "number":
                        return numberType.dynamodbType;
                }
            } }),
        new DynamoDBType({ "name": "Model", "customDynamoName": (typeSettings) => {
                const model = typeSettings.model.Model;
                const hashKey = model.getHashKey();
                const typeDetails = model.schemas[0].getAttributeTypeDetails(hashKey); // This has no potiental of being an array because a hashKey is not allowed to have multiple type options
                return typeDetails.name;
            }, "dynamicName": (typeSettings) => typeSettings.model.Model.name, "dynamodbType": (typeSettings) => {
                const model = typeSettings.model.Model;
                const hashKey = model.getHashKey();
                const rangeKey = model.getRangeKey();
                return rangeKey ? "M" : model.schemas[0].getAttributeType(hashKey);
            }, "set": (typeSettings) => {
                return !typeSettings.model.Model.getRangeKey();
            }, "jsType": { "func": (val) => val.prototype instanceof Document_1.Document }, "customType": {
                "functions": (typeSettings) => ({
                    "toDynamo": (val) => {
                        var _a;
                        const model = typeSettings.model.Model;
                        const hashKey = model.getHashKey();
                        const rangeKey = model.getRangeKey();
                        if (rangeKey) {
                            return {
                                [hashKey]: val[hashKey],
                                [rangeKey]: val[rangeKey]
                            };
                        }
                        else {
                            return (_a = val[hashKey]) !== null && _a !== void 0 ? _a : val;
                        }
                    },
                    "fromDynamo": (val) => val,
                    "isOfType": (val, type) => {
                        var _a;
                        const model = typeSettings.model.Model;
                        const hashKey = model.getHashKey();
                        const rangeKey = model.getRangeKey();
                        if (rangeKey) {
                            return typeof val === "object" && val[hashKey] && val[rangeKey];
                        }
                        else {
                            return utils.dynamoose.getValueTypeCheckResult(model.schemas[0], (_a = val[hashKey]) !== null && _a !== void 0 ? _a : val, hashKey, { type }, {}).isValidType;
                        }
                    }
                })
            } })
    ];
})();
const attributeTypes = utils.array_flatten(attributeTypesMain.filter((checkType) => !checkType.customType).map((checkType) => checkType.result()).map((a) => [a, a.set])).filter((a) => Boolean(a));
class Schema {
    constructor(object, settings = {}) {
        if (!object || typeof object !== "object" || Array.isArray(object)) {
            throw new CustomError.InvalidParameterType("Schema initalization parameter must be an object.");
        }
        if (Object.keys(object).length === 0) {
            throw new CustomError.InvalidParameter("Schema initalization parameter must not be an empty object.");
        }
        if (settings.timestamps === true) {
            settings.timestamps = {
                "createdAt": "createdAt",
                "updatedAt": "updatedAt"
            };
        }
        if (settings.timestamps) {
            const createdAtArray = Array.isArray(settings.timestamps.createdAt) ? settings.timestamps.createdAt : [settings.timestamps.createdAt];
            const updatedAtArray = Array.isArray(settings.timestamps.updatedAt) ? settings.timestamps.updatedAt : [settings.timestamps.updatedAt];
            [...createdAtArray, ...updatedAtArray].forEach((prop) => {
                if (object[prop]) {
                    throw new CustomError.InvalidParameter("Timestamp attributes must not be defined in schema.");
                }
                object[prop] = Date;
            });
        }
        let parsedSettings = Object.assign({}, settings);
        const parsedObject = Object.assign({}, object);
        utils.object.entries(parsedObject).filter((entry) => entry[1] instanceof Schema).forEach((entry) => {
            const [key, value] = entry;
            let newValue = {
                "type": Object,
                "schema": value.schemaObject
            };
            if (key.endsWith(".schema")) {
                newValue = value.schemaObject;
            }
            const subSettings = Object.assign({}, value.settings);
            Object.entries(subSettings).forEach((entry) => {
                const [settingsKey, settingsValue] = entry;
                switch (settingsKey) {
                    case "saveUnknown":
                        subSettings[settingsKey] = typeof subSettings[settingsKey] === "boolean" ? [`${key}.**`] : settingsValue.map((val) => `${key}.${val}`);
                        break;
                    case "timestamps":
                        subSettings[settingsKey] = Object.entries(subSettings[settingsKey]).reduce((obj, entity) => {
                            const [subKey, subValue] = entity;
                            obj[subKey] = Array.isArray(subValue) ? subValue.map((subValue) => `${key}.${subValue}`) : `${key}.${subValue}`;
                            return obj;
                        }, {});
                        break;
                }
            });
            parsedSettings = utils.merge_objects.main({ "combineMethod": "array_merge_new_arrray" })(parsedSettings, subSettings);
            utils.object.set(parsedObject, key, newValue);
        });
        utils.object.entries(parsedObject).forEach((entry) => {
            const key = entry[0];
            const value = entry[1];
            if (!key.endsWith(".type") && !key.endsWith(".0")) {
                if (value && value.Model && value.Model instanceof Model_1.Model) {
                    utils.object.set(parsedObject, key, { "type": value });
                }
                else if (value && Array.isArray(value)) {
                    value.forEach((item, index) => {
                        if (item && item.Model && item.Model instanceof Model_1.Model) {
                            utils.object.set(parsedObject, `${key}.${index}`, { "type": item });
                        }
                    });
                }
            }
        });
        // Anytime `this.schemaObject` is modified, `this[internalCache].attributes` must be set to undefined or null
        this.schemaObject = parsedObject;
        this.settings = parsedSettings;
        const checkAttributeNameDots = (object /*, existingKey = ""*/) => {
            Object.keys(object).forEach((key) => {
                if (key.includes(".")) {
                    throw new CustomError.InvalidParameter("Attributes must not contain dots.");
                }
                // TODO: lots of `as` statements in the two lines below. We should clean that up.
                if (typeof object[key] === "object" && object[key] !== null && object[key].schema) {
                    checkAttributeNameDots(object[key].schema /*, key*/);
                }
            });
        };
        checkAttributeNameDots(this.schemaObject);
        const checkMultipleArraySchemaElements = (key) => {
            let attributeType = [];
            try {
                const tmpAttributeType = this.getAttributeType(key);
                attributeType = Array.isArray(tmpAttributeType) ? tmpAttributeType : [tmpAttributeType];
            }
            catch (e) { } // eslint-disable-line no-empty
            if (attributeType.some((type) => type === "L") && (this.getAttributeValue(key).schema || []).length > 1) {
                throw new CustomError.InvalidParameter("You must only pass one element into schema array.");
            }
        };
        this.attributes().forEach((key) => checkMultipleArraySchemaElements(key));
        const hashrangeKeys = this.attributes().reduce((val, key) => {
            const hashKey = this.getAttributeSettingValue("hashKey", key);
            const rangeKey = this.getAttributeSettingValue("rangeKey", key);
            const isHashKey = Array.isArray(hashKey) ? hashKey.every((item) => Boolean(item)) : hashKey;
            const isRangeKey = Array.isArray(rangeKey) ? rangeKey.every((item) => Boolean(item)) : rangeKey;
            if (isHashKey) {
                val.hashKeys.push(key);
            }
            if (isRangeKey) {
                val.rangeKeys.push(key);
            }
            if (isHashKey && isRangeKey) {
                val.hashAndRangeKeyAttributes.push(key);
            }
            return val;
        }, { "hashKeys": [], "rangeKeys": [], "hashAndRangeKeyAttributes": [] });
        const keyTypes = ["hashKey", "rangeKey"];
        keyTypes.forEach((keyType) => {
            if (hashrangeKeys[`${keyType}s`].length > 1) {
                throw new CustomError.InvalidParameter(`Only one ${keyType} allowed per schema.`);
            }
            if (hashrangeKeys[`${keyType}s`].find((key) => key.includes("."))) {
                throw new CustomError.InvalidParameter(`${keyType} must be at root object and not nested in object or array.`);
            }
        });
        if (hashrangeKeys.hashAndRangeKeyAttributes.length > 0) {
            throw new CustomError.InvalidParameter(`Attribute ${hashrangeKeys.hashAndRangeKeyAttributes[0]} must not be both hashKey and rangeKey`);
        }
        this.attributes().forEach((key) => {
            const attributeSettingValue = this.getAttributeSettingValue("index", key);
            if (key.includes(".") && (Array.isArray(attributeSettingValue) ? attributeSettingValue.some((singleValue) => Boolean(singleValue)) : attributeSettingValue)) {
                throw new CustomError.InvalidParameter("Index must be at root object and not nested in object or array.");
            }
        });
    }
    async getCreateTableAttributeParams(model) {
        const hashKey = this.getHashKey();
        const AttributeDefinitions = [
            {
                "AttributeName": hashKey,
                "AttributeType": this.getSingleAttributeType(hashKey)
            }
        ];
        const AttributeDefinitionsNames = [hashKey];
        const KeySchema = [
            {
                "AttributeName": hashKey,
                "KeyType": "HASH"
            }
        ];
        const rangeKey = this.getRangeKey();
        if (rangeKey) {
            AttributeDefinitions.push({
                "AttributeName": rangeKey,
                "AttributeType": this.getSingleAttributeType(rangeKey)
            });
            AttributeDefinitionsNames.push(rangeKey);
            KeySchema.push({
                "AttributeName": rangeKey,
                "KeyType": "RANGE"
            });
        }
        utils.array_flatten(await Promise.all([this.getIndexAttributes(), this.getIndexRangeKeyAttributes()])).map((obj) => obj.attribute).forEach((index) => {
            if (AttributeDefinitionsNames.includes(index)) {
                return;
            }
            AttributeDefinitionsNames.push(index);
            AttributeDefinitions.push({
                "AttributeName": index,
                "AttributeType": this.getSingleAttributeType(index)
            });
        });
        const response = {
            AttributeDefinitions,
            KeySchema
        };
        const { GlobalSecondaryIndexes, LocalSecondaryIndexes } = await this.getIndexes(model);
        if (GlobalSecondaryIndexes) {
            response.GlobalSecondaryIndexes = GlobalSecondaryIndexes;
        }
        if (LocalSecondaryIndexes) {
            response.LocalSecondaryIndexes = LocalSecondaryIndexes;
        }
        return response;
    }
    // This function has the same behavior as `getAttributeType` except if the schema has multiple types, it will throw an error. This is useful for attribute definitions and keys for when you are only allowed to have one type for an attribute
    getSingleAttributeType(key, value, settings) {
        const attributeType = this.getAttributeType(key, value, settings);
        if (Array.isArray(attributeType)) {
            throw new CustomError.InvalidParameter(`You can not have multiple types for attribute definition: ${key}.`);
        }
        return attributeType;
    }
    getAttributeType(key, value, settings) {
        try {
            const typeDetails = this.getAttributeTypeDetails(key);
            return Array.isArray(typeDetails) ? typeDetails.map((detail) => detail.dynamodbType) : typeDetails.dynamodbType;
        }
        catch (e) {
            if ((settings === null || settings === void 0 ? void 0 : settings.unknownAttributeAllowed) && e.message === `Invalid Attribute: ${key}` && value) {
                return Object.keys(Document_1.Document.objectToDynamo(value, { "type": "value" }))[0];
            }
            else {
                throw e;
            }
        }
    }
    // This function will take in an attribute and value, and returns the default value if it should be applied.
    async defaultCheck(key, value, settings) {
        const isValueUndefined = typeof value === "undefined" || value === null;
        if (settings.defaults && isValueUndefined || settings.forceDefault && await this.getAttributeSettingValue("forceDefault", key)) {
            const defaultValueRaw = await this.getAttributeSettingValue("default", key);
            let hasMultipleTypes;
            try {
                hasMultipleTypes = Array.isArray(this.getAttributeType(key));
            }
            catch (e) {
                hasMultipleTypes = false;
            }
            const defaultValue = Array.isArray(defaultValueRaw) && hasMultipleTypes ? defaultValueRaw[0] : defaultValueRaw;
            const isDefaultValueUndefined = typeof defaultValue === "undefined" || defaultValue === null;
            if (!isDefaultValueUndefined) {
                return defaultValue;
            }
        }
    }
    getAttributeSettingValue(setting, key, settings = { "returnFunction": false }) {
        function func(attributeValue) {
            const defaultPropertyValue = (attributeValue || {})[setting];
            return typeof defaultPropertyValue === "function" && !settings.returnFunction ? defaultPropertyValue() : defaultPropertyValue;
        }
        const attributeValue = this.getAttributeValue(key, { "typeIndexOptionMap": settings.typeIndexOptionMap });
        if (Array.isArray(attributeValue)) {
            return attributeValue.map(func);
        }
        else {
            return func(attributeValue);
        }
    }
    getTypePaths(object, settings = { "type": "toDynamo" }) {
        return Object.entries(object).reduce((result, entry) => {
            const [key, value] = entry;
            const fullKey = [settings.previousKey, key].filter((a) => Boolean(a)).join(".");
            let typeCheckResult;
            try {
                typeCheckResult = utils.dynamoose.getValueTypeCheckResult(this, value, fullKey, settings, {});
            }
            catch (e) {
                if (result && settings.includeAllProperties) {
                    result[fullKey] = {
                        "index": 0,
                        "matchCorrectness": 0.5,
                        "entryCorrectness": [0.5]
                    };
                }
                return result;
            }
            const { typeDetails, matchedTypeDetailsIndex, matchedTypeDetailsIndexes } = typeCheckResult;
            const hasMultipleTypes = Array.isArray(typeDetails);
            const isObject = typeof value === "object" && !(value instanceof Buffer) && value !== null;
            if (hasMultipleTypes) {
                if (matchedTypeDetailsIndexes.length > 1 && isObject) {
                    result[fullKey] = matchedTypeDetailsIndexes.map((index) => {
                        const entryCorrectness = utils.object.entries(value).map((entry) => {
                            const [subKey, subValue] = entry;
                            try {
                                const { isValidType } = utils.dynamoose.getValueTypeCheckResult(this, subValue, `${fullKey}.${subKey}`, settings, { "typeIndexOptionMap": { [fullKey]: index } });
                                return isValidType ? 1 : 0;
                            }
                            catch (e) {
                                return 0.5;
                            }
                        });
                        return {
                            index,
                            // 1 = full match
                            // 0.5 = attributes don't exist
                            // 0 = types don't match
                            "matchCorrectness": Math.min(...entryCorrectness),
                            entryCorrectness
                        };
                    }).sort((a, b) => {
                        if (a.matchCorrectness === b.matchCorrectness) {
                            return b.entryCorrectness.reduce((a, b) => a + b, 0) - a.entryCorrectness.reduce((a, b) => a + b, 0);
                        }
                        else {
                            return b.matchCorrectness - a.matchCorrectness;
                        }
                    }).map((a) => a.index)[0];
                }
                if (result[fullKey] === undefined) {
                    result[fullKey] = matchedTypeDetailsIndex;
                }
            }
            else if (settings.includeAllProperties) {
                const matchCorrectness = typeCheckResult.isValidType ? 1 : 0;
                result[fullKey] = {
                    "index": 0,
                    matchCorrectness,
                    "entryCorrectness": [matchCorrectness]
                };
            }
            if (isObject) {
                result = Object.assign(Object.assign({}, result), this.getTypePaths(value, Object.assign(Object.assign({}, settings), { "previousKey": fullKey })));
            }
            return result;
        }, {});
    }
}
exports.Schema = Schema;
Schema.attributeTypes = {
    "findDynamoDBType": (type) => attributeTypes.find((checkType) => checkType.dynamodbType === type),
    "findTypeForValue": (...args) => attributeTypes.find((checkType) => checkType.isOfType(...args))
};
// TODO: in the two functions below I don't think we should be using as. We should try to clean that up.
Schema.prototype.getHashKey = function () {
    return Object.keys(this.schemaObject).find((key) => this.schemaObject[key].hashKey) || Object.keys(this.schemaObject)[0];
};
Schema.prototype.getRangeKey = function () {
    return Object.keys(this.schemaObject).find((key) => this.schemaObject[key].rangeKey);
};
// This function will take in an attribute and value, and throw an error if the property is required and the value is undefined or null.
Schema.prototype.requiredCheck = async function (key, value) {
    const isRequired = await this.getAttributeSettingValue("required", key);
    if ((typeof value === "undefined" || value === null) && (Array.isArray(isRequired) ? isRequired.some((val) => Boolean(val)) : isRequired)) {
        throw new CustomError.ValidationError(`${key} is a required property but has no value when trying to save document`);
    }
};
Schema.prototype.getIndexAttributes = async function () {
    return (await Promise.all(this.attributes()
        .map(async (attribute) => ({
        "index": await this.getAttributeSettingValue("index", attribute),
        attribute
    }))))
        .filter((obj) => Array.isArray(obj.index) ? obj.index.some((index) => Boolean(index)) : obj.index)
        .reduce((accumulator, currentValue) => {
        if (Array.isArray(currentValue.index)) {
            currentValue.index.forEach((currentIndex) => {
                accumulator.push(Object.assign(Object.assign({}, currentValue), { "index": currentIndex }));
            });
        }
        else {
            accumulator.push(currentValue);
        }
        return accumulator;
    }, []);
};
Schema.prototype.getIndexRangeKeyAttributes = async function () {
    const indexes = await this.getIndexAttributes();
    return indexes.map((index) => index.index.rangeKey).filter((a) => Boolean(a)).map((a) => ({ "attribute": a }));
};
Schema.prototype.getIndexes = async function (model) {
    const indexes = (await this.getIndexAttributes()).reduce((accumulator, currentValue) => {
        const indexValue = currentValue.index;
        const attributeValue = currentValue.attribute;
        const dynamoIndexObject = {
            "IndexName": indexValue.name || `${attributeValue}${indexValue.global ? "GlobalIndex" : "LocalIndex"}`,
            "KeySchema": [],
            "Projection": { "ProjectionType": "KEYS_ONLY" }
        };
        if (indexValue.project || typeof indexValue.project === "undefined" || indexValue.project === null) {
            dynamoIndexObject.Projection = Array.isArray(indexValue.project) ? { "ProjectionType": "INCLUDE", "NonKeyAttributes": indexValue.project } : { "ProjectionType": "ALL" };
        }
        if (indexValue.global) {
            dynamoIndexObject.KeySchema.push({ "AttributeName": attributeValue, "KeyType": "HASH" });
            if (indexValue.rangeKey) {
                dynamoIndexObject.KeySchema.push({ "AttributeName": indexValue.rangeKey, "KeyType": "RANGE" });
            }
            const throughputObject = utils.dynamoose.get_provisioned_throughput(indexValue.throughput ? indexValue : model.options.throughput === "ON_DEMAND" ? {} : model.options);
            // TODO: fix up the two lines below. Using too many `as` statements.
            if (throughputObject.ProvisionedThroughput) {
                dynamoIndexObject.ProvisionedThroughput = throughputObject.ProvisionedThroughput;
            }
        }
        else {
            dynamoIndexObject.KeySchema.push({ "AttributeName": this.getHashKey(), "KeyType": "HASH" });
            dynamoIndexObject.KeySchema.push({ "AttributeName": attributeValue, "KeyType": "RANGE" });
        }
        const accumulatorKey = indexValue.global ? "GlobalSecondaryIndexes" : "LocalSecondaryIndexes";
        if (!accumulator[accumulatorKey]) {
            accumulator[accumulatorKey] = [];
        }
        accumulator[accumulatorKey].push(dynamoIndexObject);
        return accumulator;
    }, {});
    indexes.TableIndex = { "KeySchema": [{ "AttributeName": this.getHashKey(), "KeyType": "HASH" }] };
    const rangeKey = this.getRangeKey();
    if (rangeKey) {
        indexes.TableIndex.KeySchema.push({ "AttributeName": rangeKey, "KeyType": "RANGE" });
    }
    return indexes;
};
Schema.prototype.getSettingValue = function (setting) {
    return this.settings[setting];
};
function attributesAction(object) {
    const typePaths = object && this.getTypePaths(object);
    const main = (object, existingKey = "") => {
        return Object.keys(object).reduce((accumulator, key) => {
            const keyWithExisting = `${existingKey ? `${existingKey}.` : ""}${key}`;
            accumulator.push(keyWithExisting);
            let attributeType;
            try {
                const tmpAttributeType = this.getAttributeType(keyWithExisting);
                attributeType = Array.isArray(tmpAttributeType) ? tmpAttributeType : [tmpAttributeType];
            }
            catch (e) { } // eslint-disable-line no-empty
            // TODO: using too many `as` statements in the few lines below. Clean that up.
            function recursive(type, arrayTypeIndex) {
                if ((type === "M" || type === "L") && (object[key][arrayTypeIndex] || object[key]).schema) {
                    accumulator.push(...main((object[key][arrayTypeIndex] || object[key]).schema, keyWithExisting));
                }
            }
            if (attributeType) {
                if (typePaths && typePaths[keyWithExisting] !== undefined) {
                    const index = typePaths[keyWithExisting];
                    const type = attributeType[index];
                    recursive(type, index);
                }
                else {
                    attributeType.forEach(recursive);
                }
            }
            // ------------------------------
            return accumulator;
        }, []);
    };
    return main(this.schemaObject);
}
Schema.prototype.attributes = function (object) {
    return attributesAction.call(this, object);
};
Schema.prototype.getAttributeValue = function (key, settings) {
    const previousKeyParts = [];
    let result = ((settings === null || settings === void 0 ? void 0 : settings.standardKey) ? key : key.replace(/\.\d+/gu, ".0")).split(".").reduce((result, part) => {
        if (Array.isArray(result)) {
            const predefinedIndex = settings && settings.typeIndexOptionMap && settings.typeIndexOptionMap[previousKeyParts.join(".")];
            if (predefinedIndex !== undefined) {
                result = result[predefinedIndex];
            }
            else {
                result = result.find((item) => item.schema && item.schema[part]);
            }
        }
        previousKeyParts.push(part);
        return utils.object.get(result.schema, part);
    }, { "schema": this.schemaObject });
    if (Array.isArray(result)) {
        const predefinedIndex = settings && settings.typeIndexOptionMap && settings.typeIndexOptionMap[previousKeyParts.join(".")];
        if (predefinedIndex !== undefined) {
            result = result[predefinedIndex];
        }
    }
    return result;
};
function retrieveTypeInfo(type, isSet, key, typeSettings) {
    const foundType = attributeTypesMain.find((checkType) => checkType.name.toLowerCase() === type.toLowerCase());
    if (!foundType) {
        throw new CustomError.InvalidType(`${key} contains an invalid type: ${type}`);
    }
    const parentType = foundType.result(typeSettings);
    if (!parentType.set && isSet) {
        throw new CustomError.InvalidType(`${key} with type: ${type} is not allowed to be a set`);
    }
    return isSet ? parentType.set : parentType;
}
// TODO: using too many `as` statements in the function below. We should clean this up.
Schema.prototype.getAttributeTypeDetails = function (key, settings = {}) {
    const standardKey = settings.standardKey ? key : key.replace(/\.\d+/gu, ".0");
    const val = this.getAttributeValue(standardKey, Object.assign(Object.assign({}, settings), { "standardKey": true }));
    if (typeof val === "undefined") {
        throw new CustomError.UnknownAttribute(`Invalid Attribute: ${key}`);
    }
    let typeVal = typeof val === "object" && !Array.isArray(val) && val.type ? val.type : val;
    let typeSettings = {};
    if (typeof typeVal === "object" && !Array.isArray(typeVal)) {
        typeSettings = typeVal.settings || {};
        typeVal = typeVal.value;
    }
    const getType = (typeVal) => {
        let type;
        const isThisType = typeVal === Internal.Public.this;
        const isNullType = typeVal === Internal.Public.null;
        if (typeof typeVal === "function" || isThisType) {
            if (typeVal.prototype instanceof Document_1.Document || isThisType) {
                type = "model";
                if (isThisType) {
                    typeSettings.model = {
                        "Model": {
                            "getHashKey": this.getHashKey.bind(this),
                            "getRangeKey": this.getRangeKey.bind(this),
                            "schemas": [this]
                        }
                    };
                }
                else {
                    typeSettings.model = typeVal;
                }
            }
            else {
                const regexFuncName = /^Function ([^(]+)\(/iu;
                [, type] = typeVal.toString().match(regexFuncName);
            }
        }
        else if (isNullType) {
            type = "null";
        }
        else {
            type = typeVal;
        }
        return type;
    };
    const result = (Array.isArray(typeVal) ? typeVal : [typeVal]).map((item, index) => {
        item = typeof item === "object" && !Array.isArray(item) && item.type ? item.type : item;
        if (typeof item === "object" && !Array.isArray(item)) {
            typeSettings = item.settings || {};
            item = item.value;
        }
        let type = getType(item);
        const isSet = type.toLowerCase() === "set";
        if (isSet) {
            let schemaValue = this.getAttributeSettingValue("schema", key);
            if (Array.isArray(schemaValue[index])) {
                schemaValue = schemaValue[index];
            }
            const subValue = schemaValue[0];
            type = getType(typeof subValue === "object" && subValue.type ? subValue.type : subValue);
        }
        const returnObject = retrieveTypeInfo(type, isSet, key, typeSettings);
        return returnObject;
    });
    const returnObject = result.length < 2 ? result[0] : result;
    return returnObject;
};
//# sourceMappingURL=Schema.js.map

/***/ }),

/***/ "../../dynamoose/dist/Serializer.js":
/*!******************************************!*\
  !*** ../../dynamoose/dist/Serializer.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Serializer_serializers, _Serializer_defaultSerializer;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Serializer = void 0;
const CustomError = __webpack_require__(/*! ./Error */ "../../dynamoose/dist/Error.js");
const utils = __webpack_require__(/*! ./utils */ "../../dynamoose/dist/utils/index.js");
class Serializer {
    constructor() {
        _Serializer_serializers.set(this, void 0);
        _Serializer_defaultSerializer.set(this, void 0);
        this.default = {
            "set": (name) => {
                if (typeof name === "undefined" || name === null) {
                    name = Serializer.defaultName;
                }
                if (!name || typeof name !== "string") {
                    throw new CustomError.InvalidParameter("Field name is required and should be of type string");
                }
                if (Object.keys(__classPrivateFieldGet(this, _Serializer_serializers, "f")).includes(name)) {
                    __classPrivateFieldSet(this, _Serializer_defaultSerializer, name, "f");
                }
            }
        };
        __classPrivateFieldSet(this, _Serializer_serializers, {
            [Serializer.defaultName]: {
                "modify": (serialized, original) => (Object.assign({}, original))
            }
        }, "f");
        this.default.set();
    }
    add(name, options) {
        if (!name || typeof name !== "string") {
            throw new CustomError.InvalidParameter("Field name is required and should be of type string");
        }
        if (!options || !(Array.isArray(options) || typeof options === "object")) {
            throw new CustomError.InvalidParameter("Field options is required and should be an object or array");
        }
        __classPrivateFieldGet(this, _Serializer_serializers, "f")[name] = options;
    }
    delete(name) {
        if (!name || typeof name !== "string") {
            throw new CustomError.InvalidParameter("Field name is required and should be of type string");
        }
        if (name === Serializer.defaultName) {
            throw new CustomError.InvalidParameter("Can not delete primary default serializer");
        }
        // Removing serializer
        if (Object.keys(__classPrivateFieldGet(this, _Serializer_serializers, "f")).includes(name)) {
            delete __classPrivateFieldGet(this, _Serializer_serializers, "f")[name];
        }
        // Reset defaultSerializer to default if removing default serializer
        if (__classPrivateFieldGet(this, _Serializer_defaultSerializer, "f") === name) {
            this.default.set();
        }
    }
    _serializeMany(documentsArray, nameOrOptions) {
        if (!documentsArray || !Array.isArray(documentsArray)) {
            throw new CustomError.InvalidParameter("documentsArray must be an array of document objects");
        }
        return documentsArray.map((document) => {
            try {
                return document.serialize(nameOrOptions);
            }
            catch (e) {
                return this._serialize(document, nameOrOptions);
            }
        });
    }
    _serialize(document, nameOrOptions = __classPrivateFieldGet(this, _Serializer_defaultSerializer, "f")) {
        let options;
        if (typeof nameOrOptions === "string") {
            options = __classPrivateFieldGet(this, _Serializer_serializers, "f")[nameOrOptions];
        }
        else {
            options = nameOrOptions;
        }
        if (!options || !(Array.isArray(options) || typeof options === "object")) {
            throw new CustomError.InvalidParameter("Field options is required and should be an object or array");
        }
        if (Array.isArray(options)) {
            return utils.object.pick(document, options);
        }
        return [
            {
                "if": Boolean(options.include),
                "function": () => utils.object.pick(document, options.include)
            },
            {
                "if": Boolean(options.exclude),
                "function": (serialized) => utils.object.delete(serialized, options.exclude)
            },
            {
                "if": Boolean(options.modify),
                "function": (serialized) => options.modify(serialized, document)
            }
        ].filter((item) => item.if).reduce((serialized, item) => item.function(serialized), Object.assign({}, document));
    }
}
exports.Serializer = Serializer;
_Serializer_serializers = new WeakMap(), _Serializer_defaultSerializer = new WeakMap();
Serializer.defaultName = "_default";
//# sourceMappingURL=Serializer.js.map

/***/ }),

/***/ "../../dynamoose/dist/Transaction.js":
/*!*******************************************!*\
  !*** ../../dynamoose/dist/Transaction.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransactionReturnOptions = void 0;
const ddb = __webpack_require__(/*! ./aws/ddb/internal */ "../../dynamoose/dist/aws/ddb/internal.js");
const utils = __webpack_require__(/*! ./utils */ "../../dynamoose/dist/utils/index.js");
const Error = __webpack_require__(/*! ./Error */ "../../dynamoose/dist/Error.js");
const ModelStore = __webpack_require__(/*! ./ModelStore */ "../../dynamoose/dist/ModelStore.js");
var TransactionReturnOptions;
(function (TransactionReturnOptions) {
    TransactionReturnOptions["request"] = "request";
    TransactionReturnOptions["documents"] = "documents";
})(TransactionReturnOptions = exports.TransactionReturnOptions || (exports.TransactionReturnOptions = {}));
var TransactionType;
(function (TransactionType) {
    TransactionType["get"] = "get";
    TransactionType["write"] = "write";
})(TransactionType || (TransactionType = {}));
function Transaction(transactions, settings, callback) {
    settings = settings !== null && settings !== void 0 ? settings : { "return": TransactionReturnOptions.documents };
    if (typeof settings === "function") {
        callback = settings;
        settings = { "return": TransactionReturnOptions.documents };
    }
    if (typeof transactions === "function") {
        callback = transactions;
        transactions = null;
    }
    const promise = (async () => {
        if (!Array.isArray(transactions) || transactions.length <= 0) {
            throw new Error.InvalidParameter("You must pass in an array with items for the transactions parameter.");
        }
        const transactionObjects = await Promise.all(transactions);
        const transactionParams = {
            "TransactItems": transactionObjects
        };
        if (settings.return === TransactionReturnOptions.request) {
            return transactionParams;
        }
        let transactionType;
        if (settings.type) {
            switch (settings.type) {
                case TransactionType.get:
                    transactionType = "transactGetItems";
                    break;
                case TransactionType.write:
                    transactionType = "transactWriteItems";
                    break;
                default:
                    throw new Error.InvalidParameter("Invalid type option, please pass in \"get\" or \"write\".");
            }
        }
        else {
            transactionType = transactionObjects.map((a) => Object.keys(a)[0]).every((key) => key === "Get") ? "transactGetItems" : "transactWriteItems";
        }
        const modelNames = transactionObjects.map((a) => Object.values(a)[0].TableName);
        const uniqueModelNames = utils.unique_array_elements(modelNames);
        const models = uniqueModelNames.map((name) => ModelStore(name));
        models.forEach((model, index) => {
            if (!model) {
                throw new Error.InvalidParameter(`Model "${uniqueModelNames[index]}" not found. Please register the model with dynamoose before using it in transactions.`);
            }
        });
        await Promise.all(models.map((model) => model.pendingTaskPromise()));
        // TODO: remove `as any` here (https://stackoverflow.com/q/61111476/894067)
        const result = await ddb(transactionType, transactionParams);
        return result.Responses ? await Promise.all(result.Responses.map((item, index) => {
            const modelName = modelNames[index];
            const model = models.find((model) => model.name === modelName);
            return new model.Document(item.Item, { "type": "fromDynamo" }).conformToSchema({ "customTypesDynamo": true, "checkExpiredItem": true, "saveUnknown": true, "type": "fromDynamo" });
        })) : null;
    })();
    if (callback) {
        promise.then((result) => callback(null, result)).catch((error) => callback(error));
    }
    else {
        return promise;
    }
}
exports["default"] = Transaction;
//# sourceMappingURL=Transaction.js.map

/***/ }),

/***/ "../../dynamoose/dist/aws/converter.js":
/*!*********************************************!*\
  !*** ../../dynamoose/dist/aws/converter.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const AWS = __webpack_require__(/*! ./sdk */ "../../dynamoose/dist/aws/sdk.js");
let customConverter;
function main() {
    return customConverter || AWS.DynamoDB.Converter;
}
main.set = (converter) => {
    customConverter = converter;
};
main.revert = () => {
    customConverter = undefined;
};
module.exports = main;
//# sourceMappingURL=converter.js.map

/***/ }),

/***/ "../../dynamoose/dist/aws/ddb/index.js":
/*!*********************************************!*\
  !*** ../../dynamoose/dist/aws/ddb/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const AWS = __webpack_require__(/*! ../sdk */ "../../dynamoose/dist/aws/sdk.js");
let customDDB;
function main() {
    return customDDB || new AWS.DynamoDB();
}
main.set = (ddb) => {
    customDDB = ddb;
};
main.revert = () => {
    customDDB = undefined;
};
main.local = (endpoint = "http://localhost:8000") => {
    main.set(new AWS.DynamoDB({
        endpoint
    }));
};
module.exports = main;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../dynamoose/dist/aws/ddb/internal.js":
/*!************************************************!*\
  !*** ../../dynamoose/dist/aws/ddb/internal.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const ddb = __webpack_require__(/*! ./index */ "../../dynamoose/dist/aws/ddb/index.js");
const log = __webpack_require__(/*! ../../logger/emitter */ "../../dynamoose/dist/logger/emitter.js");
async function main(method, params) {
    log({ "level": "debug", "category": `aws:dynamodb:${method}:request`, "message": JSON.stringify(params, null, 4), "payload": { "request": params } });
    const result = await ddb()[method](params).promise();
    log({ "level": "debug", "category": `aws:dynamodb:${method}:response`, "message": typeof result === "undefined" ? "undefined" : JSON.stringify(result, null, 4), "payload": { "response": result } });
    return result;
}
module.exports = main;
//# sourceMappingURL=internal.js.map

/***/ }),

/***/ "../../dynamoose/dist/aws/index.js":
/*!*****************************************!*\
  !*** ../../dynamoose/dist/aws/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const sdk = __webpack_require__(/*! ./sdk */ "../../dynamoose/dist/aws/sdk.js");
const ddb = __webpack_require__(/*! ./ddb */ "../../dynamoose/dist/aws/ddb/index.js");
const converter = __webpack_require__(/*! ./converter */ "../../dynamoose/dist/aws/converter.js");
module.exports = {
    sdk,
    ddb,
    converter
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../dynamoose/dist/aws/sdk.js":
/*!***************************************!*\
  !*** ../../dynamoose/dist/aws/sdk.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const AWS = __webpack_require__(/*! aws-sdk */ "aws-sdk");
module.exports = AWS;
//# sourceMappingURL=sdk.js.map

/***/ }),

/***/ "../../dynamoose/dist/index.js":
/*!*************************************!*\
  !*** ../../dynamoose/dist/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const sourceMapSupport = __webpack_require__(/*! source-map-support */ "../../source-map-support/source-map-support.js");
const Model_1 = __webpack_require__(/*! ./Model */ "../../dynamoose/dist/Model/index.js");
const Schema_1 = __webpack_require__(/*! ./Schema */ "../../dynamoose/dist/Schema.js");
const Condition_1 = __webpack_require__(/*! ./Condition */ "../../dynamoose/dist/Condition.js");
const Transaction_1 = __webpack_require__(/*! ./Transaction */ "../../dynamoose/dist/Transaction.js");
const aws = __webpack_require__(/*! ./aws */ "../../dynamoose/dist/aws/index.js");
const Internal = __webpack_require__(/*! ./Internal */ "../../dynamoose/dist/Internal.js");
const utils = __webpack_require__(/*! ./utils */ "../../dynamoose/dist/utils/index.js");
const logger = __webpack_require__(/*! ./logger */ "../../dynamoose/dist/logger/index.js");
const ModelStore = __webpack_require__(/*! ./ModelStore */ "../../dynamoose/dist/ModelStore.js");
/* istanbul ignore next */
if (!Error.prepareStackTrace) {
    // Register source map support only if someone else hasn't already:
    sourceMapSupport.install();
}
const model = (name, schema, options = {}) => {
    let model;
    let storedSchema;
    if (name) {
        storedSchema = ModelStore(name);
    }
    // TODO: this is something I'd like to do. But is a breaking change. Need to enable this and uncomment it in a breaking release. Also will need to fix the tests as well.
    /* if (schema && storedSchema) {
        throw new CustomError.InvalidParameter(`Model with name ${name} has already been registered.`);
    } else */
    if (!schema && storedSchema) {
        model = storedSchema;
    }
    else {
        model = new Model_1.Model(name, schema, options);
    }
    const returnObject = model.Document;
    const keys = utils.array_flatten([
        Object.keys(model),
        Object.keys(Object.getPrototypeOf(model)),
        Object.getOwnPropertyNames(Object.getPrototypeOf(model))
    ]).filter((key) => !["constructor", "name"].includes(key));
    keys.forEach((key) => {
        if (typeof model[key] === "object") {
            const main = (key) => {
                utils.object.set(returnObject, key, {});
                const value = utils.object.get(model, key);
                if (value === null || value.constructor !== Object && value.constructor !== Array) {
                    utils.object.set(returnObject, key, value);
                }
                else {
                    Object.keys(value).forEach((subKey) => {
                        const newKey = `${key}.${subKey}`;
                        const subValue = utils.object.get(model, newKey);
                        if (typeof subValue === "object") {
                            main(newKey);
                        }
                        else {
                            utils.object.set(returnObject, newKey, typeof subValue === "function" ? subValue.bind(model) : subValue);
                        }
                    });
                }
            };
            main(key);
        }
        else if (typeof model[key] === "function") {
            returnObject[key] = model[key].bind(model);
        }
        else {
            returnObject[key] = model[key];
        }
    });
    return returnObject;
};
model.defaults = Object.assign({}, (__webpack_require__(/*! ./Model/defaults */ "../../dynamoose/dist/Model/defaults.js").custom));
module.exports = {
    model,
    Schema: Schema_1.Schema,
    Condition: Condition_1.Condition,
    transaction: Transaction_1.default,
    aws,
    logger,
    "UNDEFINED": Internal.Public.undefined,
    "THIS": Internal.Public.this,
    "NULL": Internal.Public.null
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../dynamoose/dist/logger/emitter.js":
/*!**********************************************!*\
  !*** ../../dynamoose/dist/logger/emitter.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const status = __webpack_require__(/*! ./status */ "../../dynamoose/dist/logger/status.js");
const providers = __webpack_require__(/*! ./providers */ "../../dynamoose/dist/logger/providers.js");
const CustomError = __webpack_require__(/*! ../Error */ "../../dynamoose/dist/Error.js");
const utils = __webpack_require__(/*! ../utils */ "../../dynamoose/dist/utils/index.js");
const uuid_1 = __webpack_require__(/*! uuid */ "../../uuid/dist/esm-node/index.js");
const validLevels = ["fatal", "error", "warn", "info", "debug", "trace"];
module.exports = (event) => {
    if (status.status() === "active") {
        if (!event.message || !validLevels.includes(event.level)) {
            throw new CustomError.InvalidParameter("You must pass in a valid message, level, and category into your event object.");
        }
        if (typeof event.category === "undefined" || event.category === null) {
            event.category = "";
        }
        const ts = new Date();
        providers.list().forEach((provider) => {
            const emitProvider = provider.provider || provider;
            if (provider.filter) {
                if (provider.filter.level) {
                    if (Array.isArray(provider.filter.level)) {
                        if (!provider.filter.level.includes(event.level)) {
                            return;
                        }
                    }
                    else {
                        if (provider.filter.level.endsWith("+") || provider.filter.level.endsWith("-")) {
                            const baseLevel = provider.filter.level.substring(0, provider.filter.level.length - 1);
                            const index = validLevels.findIndex((level) => level === baseLevel);
                            const newArray = validLevels.filter((a, i) => provider.filter.level.endsWith("+") ? i <= index : i >= index);
                            if (!newArray.includes(event.level)) {
                                return;
                            }
                        }
                        else if (provider.filter.level !== event.level) {
                            return;
                        }
                    }
                }
                if (provider.filter.category) {
                    if (!utils.dynamoose.wildcard_allowed_check(Array.isArray(provider.filter.category) ? provider.filter.category : [provider.filter.category], event.category, { "splitString": ":", "prefixesDisallowed": false })) {
                        return;
                    }
                }
            }
            emitProvider.log(emitProvider.type === "string" ? event.message : Object.assign({ "id": uuid_1.v4(), "timestamp": ts, "metadata": {} }, event));
        });
    }
};
//# sourceMappingURL=emitter.js.map

/***/ }),

/***/ "../../dynamoose/dist/logger/index.js":
/*!********************************************!*\
  !*** ../../dynamoose/dist/logger/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const providers = __webpack_require__(/*! ./providers */ "../../dynamoose/dist/logger/providers.js");
const status = __webpack_require__(/*! ./status */ "../../dynamoose/dist/logger/status.js");
module.exports = Object.assign({ providers }, status);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../dynamoose/dist/logger/internal_providers/console.js":
/*!*****************************************************************!*\
  !*** ../../dynamoose/dist/logger/internal_providers/console.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConsoleProvider = void 0;
class ConsoleProvider {
    log(message) {
        let method;
        switch (message.level) {
            case "fatal":
            case "error":
                method = console.error;
                break;
            case "warn":
                method = console.warn;
                break;
            case "info":
                method = console.info;
                break;
            case "debug":
            case "trace":
                method = console.log;
                break;
        }
        method(message.category ? `${message.category} - ${message.message}` : message.message);
    }
}
exports.ConsoleProvider = ConsoleProvider;
//# sourceMappingURL=console.js.map

/***/ }),

/***/ "../../dynamoose/dist/logger/internal_providers/index.js":
/*!***************************************************************!*\
  !*** ../../dynamoose/dist/logger/internal_providers/index.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const console_1 = __webpack_require__(/*! ./console */ "../../dynamoose/dist/logger/internal_providers/console.js");
module.exports = {
    "console": console_1.ConsoleProvider
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../dynamoose/dist/logger/providers.js":
/*!************************************************!*\
  !*** ../../dynamoose/dist/logger/providers.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const utils = __webpack_require__(/*! ../utils */ "../../dynamoose/dist/utils/index.js");
const internalProviders = __webpack_require__(/*! ./internal_providers */ "../../dynamoose/dist/logger/internal_providers/index.js");
let providers = [];
// This method takes the provider and converts it to an internal provider if exists (ex. `console`)
const normalizeProvider = (provider) => {
    if (provider === console) {
        return new internalProviders.console();
    }
    else {
        return provider;
    }
};
module.exports = {
    "set": (provider) => {
        if (typeof provider === "undefined" || provider === null) {
            provider = [];
        }
        providers = (Array.isArray(provider) ? provider : [provider]).map(normalizeProvider);
    },
    "clear": () => {
        providers = [];
    },
    "add": (provider) => {
        const newProviders = (Array.isArray(provider) ? provider : [provider]).map(normalizeProvider);
        providers.push(...newProviders);
    },
    "delete": (id) => {
        const deleteFunction = (id) => {
            const index = providers.findIndex((provider) => provider.id === id);
            utils.object.delete(providers, index);
        };
        if (Array.isArray(id)) {
            id.forEach((id) => deleteFunction(id));
        }
        else {
            deleteFunction(id);
        }
    },
    "list": () => providers
};
//# sourceMappingURL=providers.js.map

/***/ }),

/***/ "../../dynamoose/dist/logger/status.js":
/*!*********************************************!*\
  !*** ../../dynamoose/dist/logger/status.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";

let status = true; // Indicated if log events are being emitted to log providers or not
module.exports = {
    "pause": () => {
        status = false;
    },
    "resume": () => {
        status = true;
    },
    "status": () => {
        return status ? "active" : "paused";
    }
};
//# sourceMappingURL=status.js.map

/***/ }),

/***/ "../../dynamoose/dist/utils/all_elements_match.js":
/*!********************************************************!*\
  !*** ../../dynamoose/dist/utils/all_elements_match.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = (array) => array.every((item, index, array) => index === 0 ? true : item === array[index - 1]);
//# sourceMappingURL=all_elements_match.js.map

/***/ }),

/***/ "../../dynamoose/dist/utils/array_flatten.js":
/*!***************************************************!*\
  !*** ../../dynamoose/dist/utils/array_flatten.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";

module.exports = (array) => Array.prototype.concat.apply([], array);
//# sourceMappingURL=array_flatten.js.map

/***/ }),

/***/ "../../dynamoose/dist/utils/capitalize_first_letter.js":
/*!*************************************************************!*\
  !*** ../../dynamoose/dist/utils/capitalize_first_letter.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";

module.exports = (str) => `${str[0].toUpperCase()}${str.slice(1)}`;
//# sourceMappingURL=capitalize_first_letter.js.map

/***/ }),

/***/ "../../dynamoose/dist/utils/combine_objects.js":
/*!*****************************************************!*\
  !*** ../../dynamoose/dist/utils/combine_objects.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";

// This function is meant to combine objects for providing default options. Values will be overwritten as opposed to merged.
const main = (...args) => {
    let returnObject;
    args.forEach((arg, index) => {
        if (typeof arg !== "object") {
            throw new Error("You can only pass objects into combine_objects method.");
        }
        if (index === 0) {
            returnObject = arg;
        }
        else {
            if (Array.isArray(returnObject) !== Array.isArray(arg)) {
                throw new Error("You can't mix value types for the combine_objects method.");
            }
            if (Array.isArray(arg)) {
                returnObject = [...returnObject, ...arg];
            }
            else {
                Object.keys(arg).forEach((key) => {
                    if (typeof returnObject[key] === "object" && typeof arg[key] === "object" && returnObject[key] !== null) {
                        returnObject[key] = main(returnObject[key], arg[key]);
                    }
                    else if (!Object.prototype.hasOwnProperty.call(returnObject, key)) {
                        returnObject[key] = arg[key];
                    }
                });
            }
        }
    });
    return returnObject;
};
module.exports = main;
//# sourceMappingURL=combine_objects.js.map

/***/ }),

/***/ "../../dynamoose/dist/utils/deep_copy.js":
/*!***********************************************!*\
  !*** ../../dynamoose/dist/utils/deep_copy.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function deep_copy(obj) {
    let copy;
    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }
    // Handle Array
    if (obj instanceof Array) {
        copy = obj.map((i) => deep_copy(i));
        return copy;
    }
    // Handle Set
    if (obj instanceof Set) {
        copy = new Set(obj);
        return copy;
    }
    // Handle Map
    if (obj instanceof Map) {
        copy = new Map(obj);
        return copy;
    }
    // Handle Buffer
    if (obj instanceof Buffer) {
        copy = Buffer.from(obj);
        return copy;
    }
    // Handle Object
    if (obj instanceof Object) {
        if (obj.constructor !== Object) {
            copy = Object.assign(Object.create(Object.getPrototypeOf(obj)), obj);
        }
        else {
            copy = {};
        }
        for (const attr in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, attr)) {
                copy[attr] = deep_copy(obj[attr]);
            }
        }
        return copy;
    }
    return obj;
}
exports["default"] = deep_copy;
//# sourceMappingURL=deep_copy.js.map

/***/ }),

/***/ "../../dynamoose/dist/utils/dynamoose/convertConditionArrayRequestObjectToString.js":
/*!******************************************************************************************!*\
  !*** ../../dynamoose/dist/utils/dynamoose/convertConditionArrayRequestObjectToString.js ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";

const convertConditionArrayRequestObjectToString = (expression) => {
    return expression.reduce((result, item) => {
        const returnItem = [result];
        returnItem.push(Array.isArray(item) ? `(${convertConditionArrayRequestObjectToString(item)})` : item);
        return returnItem.filter((a) => a).join(" ");
    }, "");
};
module.exports = convertConditionArrayRequestObjectToString;
//# sourceMappingURL=convertConditionArrayRequestObjectToString.js.map

/***/ }),

/***/ "../../dynamoose/dist/utils/dynamoose/documentToJSON.js":
/*!**************************************************************!*\
  !*** ../../dynamoose/dist/utils/dynamoose/documentToJSON.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.documentToJSON = void 0;
// import object from "../object";
// TODO optimize this in the future after we add performance tests. Doing `JSON.parse(JSON.stringify()) can be kinda slow.
function documentToJSON() {
    return JSON.parse(JSON.stringify(Array.isArray(this) ? [...this] : Object.assign({}, this)));
}
exports.documentToJSON = documentToJSON;
//# sourceMappingURL=documentToJSON.js.map

/***/ }),

/***/ "../../dynamoose/dist/utils/dynamoose/getValueTypeCheckResult.js":
/*!***********************************************************************!*\
  !*** ../../dynamoose/dist/utils/dynamoose/getValueTypeCheckResult.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";

module.exports = (schema, value, key, settings, options) => {
    const typeDetails = schema.getAttributeTypeDetails(key, options);
    const typeDetailsArray = Array.isArray(typeDetails) ? typeDetails : [typeDetails];
    const matchedTypeDetailsIndexes = typeDetailsArray.map((details, index) => {
        var _a, _b;
        if ([(_b = (_a = details.customType) === null || _a === void 0 ? void 0 : _a.functions) === null || _b === void 0 ? void 0 : _b.isOfType, details.isOfType].filter((a) => Boolean(a)).some((func) => func(value, settings.type))) {
            return index;
        }
    }).filter((a) => a !== undefined);
    const matchedTypeDetailsIndex = matchedTypeDetailsIndexes[0];
    const matchedTypeDetails = typeDetailsArray[matchedTypeDetailsIndex];
    const isValidType = Boolean(matchedTypeDetails);
    const returnObj = { typeDetails, matchedTypeDetails, matchedTypeDetailsIndex, matchedTypeDetailsIndexes, typeDetailsArray, isValidType };
    return returnObj;
};
//# sourceMappingURL=getValueTypeCheckResult.js.map

/***/ }),

/***/ "../../dynamoose/dist/utils/dynamoose/get_provisioned_throughput.js":
/*!**************************************************************************!*\
  !*** ../../dynamoose/dist/utils/dynamoose/get_provisioned_throughput.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = (options) => {
    if (!options.throughput) {
        return {};
    }
    if (options.throughput === "ON_DEMAND") {
        return {
            "BillingMode": "PAY_PER_REQUEST"
        };
    }
    else {
        return {
            "ProvisionedThroughput": {
                "ReadCapacityUnits": typeof options.throughput === "number" ? options.throughput : options.throughput.read,
                "WriteCapacityUnits": typeof options.throughput === "number" ? options.throughput : options.throughput.write
            }
        };
    }
};
//# sourceMappingURL=get_provisioned_throughput.js.map

/***/ }),

/***/ "../../dynamoose/dist/utils/dynamoose/index.js":
/*!*****************************************************!*\
  !*** ../../dynamoose/dist/utils/dynamoose/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const get_provisioned_throughput_1 = __webpack_require__(/*! ./get_provisioned_throughput */ "../../dynamoose/dist/utils/dynamoose/get_provisioned_throughput.js");
const wildcard_allowed_check = __webpack_require__(/*! ./wildcard_allowed_check */ "../../dynamoose/dist/utils/dynamoose/wildcard_allowed_check.js");
const index_changes_1 = __webpack_require__(/*! ./index_changes */ "../../dynamoose/dist/utils/dynamoose/index_changes.js");
const convertConditionArrayRequestObjectToString = __webpack_require__(/*! ./convertConditionArrayRequestObjectToString */ "../../dynamoose/dist/utils/dynamoose/convertConditionArrayRequestObjectToString.js");
const getValueTypeCheckResult = __webpack_require__(/*! ./getValueTypeCheckResult */ "../../dynamoose/dist/utils/dynamoose/getValueTypeCheckResult.js");
const documentToJSON_1 = __webpack_require__(/*! ./documentToJSON */ "../../dynamoose/dist/utils/dynamoose/documentToJSON.js");
module.exports = {
    get_provisioned_throughput: get_provisioned_throughput_1.default,
    wildcard_allowed_check,
    index_changes: index_changes_1.default,
    convertConditionArrayRequestObjectToString,
    getValueTypeCheckResult,
    documentToJSON: documentToJSON_1.documentToJSON
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../dynamoose/dist/utils/dynamoose/index_changes.js":
/*!*************************************************************!*\
  !*** ../../dynamoose/dist/utils/dynamoose/index_changes.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ModelIndexChangeType = void 0;
const obj = __webpack_require__(/*! js-object-utilities */ "../../js-object-utilities/dist/index.js");
var ModelIndexChangeType;
(function (ModelIndexChangeType) {
    ModelIndexChangeType["add"] = "add";
    ModelIndexChangeType["delete"] = "delete";
})(ModelIndexChangeType = exports.ModelIndexChangeType || (exports.ModelIndexChangeType = {}));
const index_changes = async (model, existingIndexes = []) => {
    const output = [];
    const expectedIndexes = await model.getIndexes();
    // Indexes to delete
    const identiticalProperties = ["IndexName", "KeySchema", "Projection", "ProvisionedThroughput"]; // This array represents the properties in the indexes that should match between existingIndexes (from DynamoDB) and expectedIndexes. This array will not include things like `IndexArn`, `ItemCount`, etc, since those properties do not exist in expectedIndexes
    const deleteIndexes = existingIndexes.filter((index) => !(expectedIndexes.GlobalSecondaryIndexes || []).find((searchIndex) => obj.equals(obj.pick(index, identiticalProperties), obj.pick(searchIndex, identiticalProperties)))).map((index) => ({ "name": index.IndexName, "type": ModelIndexChangeType.delete }));
    output.push(...deleteIndexes);
    // Indexes to create
    const createIndexes = (expectedIndexes.GlobalSecondaryIndexes || []).filter((index) => ![...output.map((i) => i.name), ...existingIndexes.map((i) => i.IndexName)].includes(index.IndexName)).map((index) => ({
        "type": ModelIndexChangeType.add,
        "spec": index
    }));
    output.push(...createIndexes);
    return output;
};
exports["default"] = index_changes;
//# sourceMappingURL=index_changes.js.map

/***/ }),

/***/ "../../dynamoose/dist/utils/dynamoose/wildcard_allowed_check.js":
/*!**********************************************************************!*\
  !*** ../../dynamoose/dist/utils/dynamoose/wildcard_allowed_check.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";

module.exports = (saveUnknown, checkKey, settings = { "splitString": ".", "prefixesDisallowed": true }) => {
    if (Array.isArray(saveUnknown)) {
        return Boolean(saveUnknown.find((key) => {
            const keyParts = key.split(settings.splitString);
            const checkKeyParts = checkKey.split(settings.splitString);
            let index = 0, keyPart = keyParts[0];
            for (let i = 0; i < checkKeyParts.length; i++) {
                if (keyPart === "**") {
                    return true;
                }
                if (keyPart !== "*" && checkKeyParts[i] !== keyPart) {
                    return false;
                }
                keyPart = keyParts[++index];
            }
            if (!settings.prefixesDisallowed && keyPart) {
                return false;
            }
            return true;
        }));
    }
    else {
        return saveUnknown;
    }
};
//# sourceMappingURL=wildcard_allowed_check.js.map

/***/ }),

/***/ "../../dynamoose/dist/utils/empty_function.js":
/*!****************************************************!*\
  !*** ../../dynamoose/dist/utils/empty_function.js ***!
  \****************************************************/
/***/ ((module) => {

"use strict";

module.exports = () => { };
//# sourceMappingURL=empty_function.js.map

/***/ }),

/***/ "../../dynamoose/dist/utils/find_best_index.js":
/*!*****************************************************!*\
  !*** ../../dynamoose/dist/utils/find_best_index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const array_flatten = __webpack_require__(/*! ./array_flatten */ "../../dynamoose/dist/utils/array_flatten.js");
function default_1(modelIndexes, comparisonChart) {
    var _a, _b;
    const validIndexes = array_flatten(Object.entries(modelIndexes)
        .map(([key, indexes]) => {
        indexes = Array.isArray(indexes) ? indexes : [indexes];
        return indexes.map((index) => {
            const { hash, range } = index.KeySchema.reduce((res, item) => {
                res[item.KeyType.toLowerCase()] = item.AttributeName;
                return res;
            }, {});
            index._hashKey = hash;
            index._rangeKey = range;
            index._tableIndex = key === "TableIndex";
            return index;
        });
    }))
        .filter((index) => { var _a; return ((_a = comparisonChart[index._hashKey]) === null || _a === void 0 ? void 0 : _a.type) === "EQ"; });
    const index = validIndexes.find((index) => comparisonChart[index._rangeKey]) || validIndexes.find((index) => index._tableIndex) || validIndexes[0];
    return { "tableIndex": (_a = index === null || index === void 0 ? void 0 : index._tableIndex) !== null && _a !== void 0 ? _a : false, "indexName": (_b = index === null || index === void 0 ? void 0 : index.IndexName) !== null && _b !== void 0 ? _b : null };
}
exports["default"] = default_1;
//# sourceMappingURL=find_best_index.js.map

/***/ }),

/***/ "../../dynamoose/dist/utils/index.js":
/*!*******************************************!*\
  !*** ../../dynamoose/dist/utils/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const combine_objects = __webpack_require__(/*! ./combine_objects */ "../../dynamoose/dist/utils/combine_objects.js");
const merge_objects = __webpack_require__(/*! ./merge_objects */ "../../dynamoose/dist/utils/merge_objects.js");
const timeout = __webpack_require__(/*! ./timeout */ "../../dynamoose/dist/utils/timeout.js");
const capitalize_first_letter = __webpack_require__(/*! ./capitalize_first_letter */ "../../dynamoose/dist/utils/capitalize_first_letter.js");
const set_immediate_promise = __webpack_require__(/*! ./set_immediate_promise */ "../../dynamoose/dist/utils/set_immediate_promise.js");
const unique_array_elements = __webpack_require__(/*! ./unique_array_elements */ "../../dynamoose/dist/utils/unique_array_elements.js");
const array_flatten = __webpack_require__(/*! ./array_flatten */ "../../dynamoose/dist/utils/array_flatten.js");
const empty_function = __webpack_require__(/*! ./empty_function */ "../../dynamoose/dist/utils/empty_function.js");
const object = __webpack_require__(/*! js-object-utilities */ "../../js-object-utilities/dist/index.js");
const dynamoose = __webpack_require__(/*! ./dynamoose */ "../../dynamoose/dist/utils/dynamoose/index.js");
const all_elements_match_1 = __webpack_require__(/*! ./all_elements_match */ "../../dynamoose/dist/utils/all_elements_match.js");
const type_name_1 = __webpack_require__(/*! ./type_name */ "../../dynamoose/dist/utils/type_name.js");
const find_best_index_1 = __webpack_require__(/*! ./find_best_index */ "../../dynamoose/dist/utils/find_best_index.js");
const deep_copy_1 = __webpack_require__(/*! ./deep_copy */ "../../dynamoose/dist/utils/deep_copy.js");
module.exports = {
    combine_objects,
    merge_objects,
    timeout,
    capitalize_first_letter,
    set_immediate_promise,
    unique_array_elements,
    all_elements_match: all_elements_match_1.default,
    array_flatten,
    empty_function,
    object,
    dynamoose,
    type_name: type_name_1.default,
    find_best_index: find_best_index_1.default,
    deep_copy: deep_copy_1.default
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../dynamoose/dist/utils/merge_objects.js":
/*!***************************************************!*\
  !*** ../../dynamoose/dist/utils/merge_objects.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";

// This function is used to merge objects for combining multiple responses.
var MergeObjectsCombineMethod;
(function (MergeObjectsCombineMethod) {
    MergeObjectsCombineMethod["ObjectCombine"] = "object_combine";
    MergeObjectsCombineMethod["ArrayMerge"] = "array_merge";
    MergeObjectsCombineMethod["ArrayMergeNewArray"] = "array_merge_new_arrray";
})(MergeObjectsCombineMethod || (MergeObjectsCombineMethod = {}));
const main = (settings = { "combineMethod": MergeObjectsCombineMethod.ArrayMerge }) => (...args) => {
    let returnObject;
    args.forEach((arg, index) => {
        if (typeof arg !== "object") {
            throw new Error("You can only pass objects into merge_objects method.");
        }
        if (index === 0) {
            returnObject = arg;
        }
        else {
            if (Array.isArray(returnObject) !== Array.isArray(arg)) {
                throw new Error("You can't mix value types for the merge_objects method.");
            }
            Object.keys(arg).forEach((key) => {
                if (typeof returnObject[key] === "object" && typeof arg[key] === "object" && !Array.isArray(returnObject[key]) && !Array.isArray(arg[key]) && returnObject[key] !== null) {
                    if (settings.combineMethod === MergeObjectsCombineMethod.ObjectCombine) {
                        returnObject[key] = Object.assign(Object.assign({}, returnObject[key]), arg[key]);
                    }
                    else if (settings.combineMethod === MergeObjectsCombineMethod.ArrayMergeNewArray) {
                        returnObject[key] = main(settings)(returnObject[key], arg[key]);
                    }
                    else {
                        returnObject[key] = [returnObject[key], arg[key]];
                    }
                }
                else if (Array.isArray(returnObject[key]) && Array.isArray(arg[key])) {
                    returnObject[key] = [...returnObject[key], ...arg[key]];
                }
                else if (Array.isArray(returnObject[key])) {
                    returnObject[key] = [...returnObject[key], arg[key]];
                }
                else if (returnObject[key]) {
                    if (settings.combineMethod === MergeObjectsCombineMethod.ArrayMergeNewArray) {
                        returnObject[key] = [returnObject[key], arg[key]];
                    }
                    else if (typeof returnObject[key] === "number") {
                        returnObject[key] += arg[key];
                    }
                    else {
                        returnObject[key] = arg[key];
                    }
                }
                else {
                    returnObject[key] = arg[key];
                }
            });
        }
    });
    return returnObject;
};
const returnObject = main();
returnObject.main = main;
module.exports = returnObject;
//# sourceMappingURL=merge_objects.js.map

/***/ }),

/***/ "../../dynamoose/dist/utils/set_immediate_promise.js":
/*!***********************************************************!*\
  !*** ../../dynamoose/dist/utils/set_immediate_promise.js ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";

module.exports = () => new Promise((resolve) => setImmediate(resolve));
//# sourceMappingURL=set_immediate_promise.js.map

/***/ }),

/***/ "../../dynamoose/dist/utils/timeout.js":
/*!*********************************************!*\
  !*** ../../dynamoose/dist/utils/timeout.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";

module.exports = (time) => {
    const ms = typeof time === "string" ? parseInt(time) : time;
    return new Promise((resolve, reject) => {
        if (isNaN(ms)) {
            reject(`Invalid miliseconds passed in: ${time}`);
        }
        setTimeout(() => resolve(), ms);
    });
};
//# sourceMappingURL=timeout.js.map

/***/ }),

/***/ "../../dynamoose/dist/utils/type_name.js":
/*!***********************************************!*\
  !*** ../../dynamoose/dist/utils/type_name.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
// This function takes in a value and returns a user string for the type of that value. This function is mostly used to display type errors to users.
exports["default"] = (value, typeDetailsArray) => {
    let str = "";
    if (value === null) {
        str += "null";
    }
    else {
        str += typeof value;
    }
    // Add constant value to type name
    str += typeDetailsArray.some((val) => val.name === "Constant") ? ` (${value})` : "";
    return str;
};
//# sourceMappingURL=type_name.js.map

/***/ }),

/***/ "../../dynamoose/dist/utils/unique_array_elements.js":
/*!***********************************************************!*\
  !*** ../../dynamoose/dist/utils/unique_array_elements.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const obj = __webpack_require__(/*! js-object-utilities */ "../../js-object-utilities/dist/index.js");
module.exports = (array) => array.filter((value, index, self) => self.findIndex((searchVal) => obj.equals(searchVal, value)) === index);
//# sourceMappingURL=unique_array_elements.js.map

/***/ }),

/***/ "../../js-object-utilities/dist/clear_empties.js":
/*!*******************************************************!*\
  !*** ../../js-object-utilities/dist/clear_empties.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.clearEmpties = void 0;
const clearEmpties = (object) => {
    Object.keys(object).forEach((key) => {
        if (typeof object[key] !== "object") {
            return;
        }
        (0, exports.clearEmpties)(object[key]);
        if (Object.keys(object[key]).length === 0) {
            delete object[key];
        }
    });
    return object;
};
exports.clearEmpties = clearEmpties;


/***/ }),

/***/ "../../js-object-utilities/dist/delete.js":
/*!************************************************!*\
  !*** ../../js-object-utilities/dist/delete.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";

module.exports = (object, keys) => {
    (Array.isArray(keys) ? keys : [keys]).forEach((key) => {
        const keyParts = (typeof key === "number" ? `${key}` : key).split(".");
        if (keyParts.length === 1) {
            if (Array.isArray(object)) {
                object.splice(parseInt(keyParts[0]), 1);
            }
            else {
                delete object[keyParts[0]];
            }
        }
        else {
            const lastKey = keyParts.pop();
            const nextLastKey = keyParts.pop();
            const nextLastObj = keyParts.reduce((a, key) => a[key], object);
            if (Array.isArray(nextLastObj[nextLastKey])) {
                nextLastObj[nextLastKey].splice(parseInt(lastKey), 1);
            }
            else if (typeof nextLastObj[nextLastKey] !== "undefined" && nextLastObj[nextLastKey] !== null) {
                delete nextLastObj[nextLastKey][lastKey];
            }
        }
    });
    return object;
};


/***/ }),

/***/ "../../js-object-utilities/dist/entries.js":
/*!*************************************************!*\
  !*** ../../js-object-utilities/dist/entries.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const _1 = __webpack_require__(/*! . */ "../../js-object-utilities/dist/index.js");
const main = (object, existingKey = "") => {
    return Object.entries(object).reduce((accumulator, entry) => {
        const [key, value] = entry;
        const keyWithExisting = `${existingKey ? `${existingKey}.` : ""}${key}`;
        accumulator.push([keyWithExisting, value]);
        if (typeof value === "object" && !(value instanceof Buffer) && value !== null && !(0, _1.isCircular)(value, keyWithExisting)) {
            accumulator.push(...main(value, keyWithExisting));
        }
        return accumulator;
    }, []);
};
module.exports = main;


/***/ }),

/***/ "../../js-object-utilities/dist/equals.js":
/*!************************************************!*\
  !*** ../../js-object-utilities/dist/equals.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const entries = __webpack_require__(/*! ./entries */ "../../js-object-utilities/dist/entries.js");
module.exports = (a, b) => {
    if (typeof a !== "object" || typeof b !== "object") {
        return a === b;
    }
    const aEntries = entries(a);
    const bEntries = entries(b);
    const bEntriesMap = bEntries.reduce((res, value) => {
        const [key, val] = value;
        res[key] = val;
        return res;
    }, {});
    return aEntries.length === bEntries.length && aEntries.every((entry) => {
        return typeof entry[1] === "object" || bEntriesMap[entry[0]] === entry[1];
    });
};


/***/ }),

/***/ "../../js-object-utilities/dist/get.js":
/*!*********************************************!*\
  !*** ../../js-object-utilities/dist/get.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";

module.exports = (object, key) => {
    const keyParts = key.split(".");
    let returnValue = object;
    for (let i = 0; i < keyParts.length; i++) {
        const part = keyParts[i];
        if (returnValue) {
            returnValue = returnValue[part];
        }
        else {
            break;
        }
    }
    return returnValue;
};


/***/ }),

/***/ "../../js-object-utilities/dist/index.js":
/*!***********************************************!*\
  !*** ../../js-object-utilities/dist/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isCircular = exports.clearEmpties = exports.equals = exports.entries = exports.keys = exports.pick = exports["delete"] = exports.set = exports.get = void 0;
const get = __webpack_require__(/*! ./get */ "../../js-object-utilities/dist/get.js");
exports.get = get;
const set = __webpack_require__(/*! ./set */ "../../js-object-utilities/dist/set.js");
exports.set = set;
const deleteFunc = __webpack_require__(/*! ./delete */ "../../js-object-utilities/dist/delete.js");
exports["delete"] = deleteFunc;
const pick = __webpack_require__(/*! ./pick */ "../../js-object-utilities/dist/pick.js");
exports.pick = pick;
const keys = __webpack_require__(/*! ./keys */ "../../js-object-utilities/dist/keys.js");
exports.keys = keys;
const entries = __webpack_require__(/*! ./entries */ "../../js-object-utilities/dist/entries.js");
exports.entries = entries;
const equals = __webpack_require__(/*! ./equals */ "../../js-object-utilities/dist/equals.js");
exports.equals = equals;
const clear_empties_1 = __webpack_require__(/*! ./clear_empties */ "../../js-object-utilities/dist/clear_empties.js");
Object.defineProperty(exports, "clearEmpties", ({ enumerable: true, get: function () { return clear_empties_1.clearEmpties; } }));
const isCircular = __webpack_require__(/*! ./isCircular */ "../../js-object-utilities/dist/isCircular.js");
exports.isCircular = isCircular;


/***/ }),

/***/ "../../js-object-utilities/dist/isCircular.js":
/*!****************************************************!*\
  !*** ../../js-object-utilities/dist/isCircular.js ***!
  \****************************************************/
/***/ ((module) => {

"use strict";

const originalKey = "object";
module.exports = (object, searchKey) => {
    const keys = [];
    const stack = [];
    const stackSet = new Set();
    let detected = false;
    function detect(object, key) {
        if (object && typeof object !== "object") {
            return;
        }
        if (stackSet.has(object)) { // it's cyclic! Print the object and its locations.
            const oldIndex = stack.indexOf(object);
            const l1 = keys.join(".") + "." + key;
            // const l2: string = keys.slice(0, oldIndex + 1).join(".");
            if (!searchKey || l1.replace(`${originalKey}.`, "") === searchKey) {
                detected = true;
                return;
            }
            else {
                return;
            }
        }
        keys.push(key);
        stack.push(object);
        stackSet.add(object);
        for (const k in object) { //dive on the object's children
            if (Object.prototype.hasOwnProperty.call(object, k)) {
                detect(object[k], k);
            }
        }
        keys.pop();
        stack.pop();
        stackSet.delete(object);
        return;
    }
    detect(object, originalKey);
    return detected;
};


/***/ }),

/***/ "../../js-object-utilities/dist/keys.js":
/*!**********************************************!*\
  !*** ../../js-object-utilities/dist/keys.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const entries = __webpack_require__(/*! ./entries */ "../../js-object-utilities/dist/entries.js");
module.exports = (object, existingKey = "") => entries(object, existingKey).map((a) => a[0]);


/***/ }),

/***/ "../../js-object-utilities/dist/pick.js":
/*!**********************************************!*\
  !*** ../../js-object-utilities/dist/pick.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const get = __webpack_require__(/*! ./get */ "../../js-object-utilities/dist/get.js");
const set = __webpack_require__(/*! ./set */ "../../js-object-utilities/dist/set.js");
module.exports = (object, keys) => {
    return keys.reduce((obj, key) => {
        const value = get(object, key);
        const isValueUndefined = typeof value === "undefined" || value === null;
        if (!isValueUndefined) {
            set(obj, key, value);
        }
        return obj;
    }, {});
};


/***/ }),

/***/ "../../js-object-utilities/dist/set.js":
/*!*********************************************!*\
  !*** ../../js-object-utilities/dist/set.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";

module.exports = (object, key, value) => {
    const keyParts = key.split(".");
    let objectRef = object;
    keyParts.forEach((part, index) => {
        if (keyParts.length - 1 === index) {
            return;
        }
        if (!objectRef[part]) {
            objectRef[part] = {};
        }
        objectRef = objectRef[part];
    });
    const finalKey = keyParts[keyParts.length - 1];
    if (finalKey !== "__proto__" && finalKey !== "constructor") {
        objectRef[finalKey] = value;
    }
    return object;
};


/***/ }),

/***/ "../../source-map-support/node_modules/source-map/lib/array-set.js":
/*!*************************************************************************!*\
  !*** ../../source-map-support/node_modules/source-map/lib/array-set.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(/*! ./util */ "../../source-map-support/node_modules/source-map/lib/util.js");
var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";

/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */
function ArraySet() {
  this._array = [];
  this._set = hasNativeMap ? new Map() : Object.create(null);
}

/**
 * Static method for creating ArraySet instances from an existing array.
 */
ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set = new ArraySet();
  for (var i = 0, len = aArray.length; i < len; i++) {
    set.add(aArray[i], aAllowDuplicates);
  }
  return set;
};

/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */
ArraySet.prototype.size = function ArraySet_size() {
  return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};

/**
 * Add the given string to this set.
 *
 * @param String aStr
 */
ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
  var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
  var idx = this._array.length;
  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }
  if (!isDuplicate) {
    if (hasNativeMap) {
      this._set.set(aStr, idx);
    } else {
      this._set[sStr] = idx;
    }
  }
};

/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */
ArraySet.prototype.has = function ArraySet_has(aStr) {
  if (hasNativeMap) {
    return this._set.has(aStr);
  } else {
    var sStr = util.toSetString(aStr);
    return has.call(this._set, sStr);
  }
};

/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */
ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
  if (hasNativeMap) {
    var idx = this._set.get(aStr);
    if (idx >= 0) {
        return idx;
    }
  } else {
    var sStr = util.toSetString(aStr);
    if (has.call(this._set, sStr)) {
      return this._set[sStr];
    }
  }

  throw new Error('"' + aStr + '" is not in the set.');
};

/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */
ArraySet.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }
  throw new Error('No element indexed by ' + aIdx);
};

/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */
ArraySet.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};

exports.ArraySet = ArraySet;


/***/ }),

/***/ "../../source-map-support/node_modules/source-map/lib/base64-vlq.js":
/*!**************************************************************************!*\
  !*** ../../source-map-support/node_modules/source-map/lib/base64-vlq.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var base64 = __webpack_require__(/*! ./base64 */ "../../source-map-support/node_modules/source-map/lib/base64.js");

// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011

var VLQ_BASE_SHIFT = 5;

// binary: 100000
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

// binary: 011111
var VLQ_BASE_MASK = VLQ_BASE - 1;

// binary: 100000
var VLQ_CONTINUATION_BIT = VLQ_BASE;

/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */
function toVLQSigned(aValue) {
  return aValue < 0
    ? ((-aValue) << 1) + 1
    : (aValue << 1) + 0;
}

/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */
function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative
    ? -shifted
    : shifted;
}

/**
 * Returns the base 64 VLQ encoded value.
 */
exports.encode = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;

  var vlq = toVLQSigned(aValue);

  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;
    if (vlq > 0) {
      // There are still more digits in this value, so we must make sure the
      // continuation bit is marked.
      digit |= VLQ_CONTINUATION_BIT;
    }
    encoded += base64.encode(digit);
  } while (vlq > 0);

  return encoded;
};

/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */
exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;

  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }

    digit = base64.decode(aStr.charCodeAt(aIndex++));
    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }

    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);

  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};


/***/ }),

/***/ "../../source-map-support/node_modules/source-map/lib/base64.js":
/*!**********************************************************************!*\
  !*** ../../source-map-support/node_modules/source-map/lib/base64.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */
exports.encode = function (number) {
  if (0 <= number && number < intToCharMap.length) {
    return intToCharMap[number];
  }
  throw new TypeError("Must be between 0 and 63: " + number);
};

/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */
exports.decode = function (charCode) {
  var bigA = 65;     // 'A'
  var bigZ = 90;     // 'Z'

  var littleA = 97;  // 'a'
  var littleZ = 122; // 'z'

  var zero = 48;     // '0'
  var nine = 57;     // '9'

  var plus = 43;     // '+'
  var slash = 47;    // '/'

  var littleOffset = 26;
  var numberOffset = 52;

  // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
  if (bigA <= charCode && charCode <= bigZ) {
    return (charCode - bigA);
  }

  // 26 - 51: abcdefghijklmnopqrstuvwxyz
  if (littleA <= charCode && charCode <= littleZ) {
    return (charCode - littleA + littleOffset);
  }

  // 52 - 61: 0123456789
  if (zero <= charCode && charCode <= nine) {
    return (charCode - zero + numberOffset);
  }

  // 62: +
  if (charCode == plus) {
    return 62;
  }

  // 63: /
  if (charCode == slash) {
    return 63;
  }

  // Invalid base64 digit.
  return -1;
};


/***/ }),

/***/ "../../source-map-support/node_modules/source-map/lib/binary-search.js":
/*!*****************************************************************************!*\
  !*** ../../source-map-support/node_modules/source-map/lib/binary-search.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;

/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */
function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
  // This function terminates when one of the following is true:
  //
  //   1. We find the exact element we are looking for.
  //
  //   2. We did not find the exact element, but we can return the index of
  //      the next-closest element.
  //
  //   3. We did not find the exact element, and there is no next-closest
  //      element than the one we are searching for, so we return -1.
  var mid = Math.floor((aHigh - aLow) / 2) + aLow;
  var cmp = aCompare(aNeedle, aHaystack[mid], true);
  if (cmp === 0) {
    // Found the element we are looking for.
    return mid;
  }
  else if (cmp > 0) {
    // Our needle is greater than aHaystack[mid].
    if (aHigh - mid > 1) {
      // The element is in the upper half.
      return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
    }

    // The exact needle element was not found in this haystack. Determine if
    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return aHigh < aHaystack.length ? aHigh : -1;
    } else {
      return mid;
    }
  }
  else {
    // Our needle is less than aHaystack[mid].
    if (mid - aLow > 1) {
      // The element is in the lower half.
      return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
    }

    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return mid;
    } else {
      return aLow < 0 ? -1 : aLow;
    }
  }
}

/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */
exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
  if (aHaystack.length === 0) {
    return -1;
  }

  var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack,
                              aCompare, aBias || exports.GREATEST_LOWER_BOUND);
  if (index < 0) {
    return -1;
  }

  // We have found either the exact element, or the next-closest element than
  // the one we are searching for. However, there may be more than one such
  // element. Make sure we always return the smallest of these.
  while (index - 1 >= 0) {
    if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
      break;
    }
    --index;
  }

  return index;
};


/***/ }),

/***/ "../../source-map-support/node_modules/source-map/lib/mapping-list.js":
/*!****************************************************************************!*\
  !*** ../../source-map-support/node_modules/source-map/lib/mapping-list.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2014 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(/*! ./util */ "../../source-map-support/node_modules/source-map/lib/util.js");

/**
 * Determine whether mappingB is after mappingA with respect to generated
 * position.
 */
function generatedPositionAfter(mappingA, mappingB) {
  // Optimized for most common case
  var lineA = mappingA.generatedLine;
  var lineB = mappingB.generatedLine;
  var columnA = mappingA.generatedColumn;
  var columnB = mappingB.generatedColumn;
  return lineB > lineA || lineB == lineA && columnB >= columnA ||
         util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
}

/**
 * A data structure to provide a sorted view of accumulated mappings in a
 * performance conscious manner. It trades a neglibable overhead in general
 * case for a large speedup in case of mappings being added in order.
 */
function MappingList() {
  this._array = [];
  this._sorted = true;
  // Serves as infimum
  this._last = {generatedLine: -1, generatedColumn: 0};
}

/**
 * Iterate through internal items. This method takes the same arguments that
 * `Array.prototype.forEach` takes.
 *
 * NOTE: The order of the mappings is NOT guaranteed.
 */
MappingList.prototype.unsortedForEach =
  function MappingList_forEach(aCallback, aThisArg) {
    this._array.forEach(aCallback, aThisArg);
  };

/**
 * Add the given source mapping.
 *
 * @param Object aMapping
 */
MappingList.prototype.add = function MappingList_add(aMapping) {
  if (generatedPositionAfter(this._last, aMapping)) {
    this._last = aMapping;
    this._array.push(aMapping);
  } else {
    this._sorted = false;
    this._array.push(aMapping);
  }
};

/**
 * Returns the flat, sorted array of mappings. The mappings are sorted by
 * generated position.
 *
 * WARNING: This method returns internal data without copying, for
 * performance. The return value must NOT be mutated, and should be treated as
 * an immutable borrow. If you want to take ownership, you must make your own
 * copy.
 */
MappingList.prototype.toArray = function MappingList_toArray() {
  if (!this._sorted) {
    this._array.sort(util.compareByGeneratedPositionsInflated);
    this._sorted = true;
  }
  return this._array;
};

exports.MappingList = MappingList;


/***/ }),

/***/ "../../source-map-support/node_modules/source-map/lib/quick-sort.js":
/*!**************************************************************************!*\
  !*** ../../source-map-support/node_modules/source-map/lib/quick-sort.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

// It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.

/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */
function swap(ary, x, y) {
  var temp = ary[x];
  ary[x] = ary[y];
  ary[y] = temp;
}

/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */
function randomIntInRange(low, high) {
  return Math.round(low + (Math.random() * (high - low)));
}

/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */
function doQuickSort(ary, comparator, p, r) {
  // If our lower bound is less than our upper bound, we (1) partition the
  // array into two pieces and (2) recurse on each half. If it is not, this is
  // the empty array and our base case.

  if (p < r) {
    // (1) Partitioning.
    //
    // The partitioning chooses a pivot between `p` and `r` and moves all
    // elements that are less than or equal to the pivot to the before it, and
    // all the elements that are greater than it after it. The effect is that
    // once partition is done, the pivot is in the exact place it will be when
    // the array is put in sorted order, and it will not need to be moved
    // again. This runs in O(n) time.

    // Always choose a random pivot so that an input array which is reverse
    // sorted does not cause O(n^2) running time.
    var pivotIndex = randomIntInRange(p, r);
    var i = p - 1;

    swap(ary, pivotIndex, r);
    var pivot = ary[r];

    // Immediately after `j` is incremented in this loop, the following hold
    // true:
    //
    //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
    //
    //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
    for (var j = p; j < r; j++) {
      if (comparator(ary[j], pivot) <= 0) {
        i += 1;
        swap(ary, i, j);
      }
    }

    swap(ary, i + 1, j);
    var q = i + 1;

    // (2) Recurse on each half.

    doQuickSort(ary, comparator, p, q - 1);
    doQuickSort(ary, comparator, q + 1, r);
  }
}

/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */
exports.quickSort = function (ary, comparator) {
  doQuickSort(ary, comparator, 0, ary.length - 1);
};


/***/ }),

/***/ "../../source-map-support/node_modules/source-map/lib/source-map-consumer.js":
/*!***********************************************************************************!*\
  !*** ../../source-map-support/node_modules/source-map/lib/source-map-consumer.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(/*! ./util */ "../../source-map-support/node_modules/source-map/lib/util.js");
var binarySearch = __webpack_require__(/*! ./binary-search */ "../../source-map-support/node_modules/source-map/lib/binary-search.js");
var ArraySet = (__webpack_require__(/*! ./array-set */ "../../source-map-support/node_modules/source-map/lib/array-set.js").ArraySet);
var base64VLQ = __webpack_require__(/*! ./base64-vlq */ "../../source-map-support/node_modules/source-map/lib/base64-vlq.js");
var quickSort = (__webpack_require__(/*! ./quick-sort */ "../../source-map-support/node_modules/source-map/lib/quick-sort.js").quickSort);

function SourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  return sourceMap.sections != null
    ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL)
    : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
}

SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
  return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
}

/**
 * The version of the source mapping spec that we are consuming.
 */
SourceMapConsumer.prototype._version = 3;

// `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.

SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__generatedMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__generatedMappings;
  }
});

SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__originalMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__originalMappings;
  }
});

SourceMapConsumer.prototype._charIsMappingSeparator =
  function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
    var c = aStr.charAt(index);
    return c === ";" || c === ",";
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
SourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
  };

SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;

SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;

/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */
SourceMapConsumer.prototype.eachMapping =
  function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;

    var mappings;
    switch (order) {
    case SourceMapConsumer.GENERATED_ORDER:
      mappings = this._generatedMappings;
      break;
    case SourceMapConsumer.ORIGINAL_ORDER:
      mappings = this._originalMappings;
      break;
    default:
      throw new Error("Unknown order of iteration.");
    }

    var sourceRoot = this.sourceRoot;
    mappings.map(function (mapping) {
      var source = mapping.source === null ? null : this._sources.at(mapping.source);
      source = util.computeSourceURL(sourceRoot, source, this._sourceMapURL);
      return {
        source: source,
        generatedLine: mapping.generatedLine,
        generatedColumn: mapping.generatedColumn,
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name: mapping.name === null ? null : this._names.at(mapping.name)
      };
    }, this).forEach(aCallback, context);
  };

/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number is 1-based.
 *   - column: Optional. the column number in the original source.
 *    The column number is 0-based.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *    line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *    The column number is 0-based.
 */
SourceMapConsumer.prototype.allGeneratedPositionsFor =
  function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = util.getArg(aArgs, 'line');

    // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
    // returns the index of the closest mapping less than the needle. By
    // setting needle.originalColumn to 0, we thus find the last mapping for
    // the given line, provided such a mapping exists.
    var needle = {
      source: util.getArg(aArgs, 'source'),
      originalLine: line,
      originalColumn: util.getArg(aArgs, 'column', 0)
    };

    needle.source = this._findSourceIndex(needle.source);
    if (needle.source < 0) {
      return [];
    }

    var mappings = [];

    var index = this._findMapping(needle,
                                  this._originalMappings,
                                  "originalLine",
                                  "originalColumn",
                                  util.compareByOriginalPositions,
                                  binarySearch.LEAST_UPPER_BOUND);
    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (aArgs.column === undefined) {
        var originalLine = mapping.originalLine;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we found. Since
        // mappings are sorted, this is guaranteed to find all mappings for
        // the line we found.
        while (mapping && mapping.originalLine === originalLine) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      } else {
        var originalColumn = mapping.originalColumn;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we were searching for.
        // Since mappings are sorted, this is guaranteed to find all mappings for
        // the line we are searching for.
        while (mapping &&
               mapping.originalLine === line &&
               mapping.originalColumn == originalColumn) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      }
    }

    return mappings;
  };

exports.SourceMapConsumer = SourceMapConsumer;

/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The first parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */
function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sources = util.getArg(sourceMap, 'sources');
  // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
  // requires the array) to play nice here.
  var names = util.getArg(sourceMap, 'names', []);
  var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
  var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
  var mappings = util.getArg(sourceMap, 'mappings');
  var file = util.getArg(sourceMap, 'file', null);

  // Once again, Sass deviates from the spec and supplies the version as a
  // string rather than a number, so we use loose equality checking here.
  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  if (sourceRoot) {
    sourceRoot = util.normalize(sourceRoot);
  }

  sources = sources
    .map(String)
    // Some source maps produce relative source paths like "./foo.js" instead of
    // "foo.js".  Normalize these first so that future comparisons will succeed.
    // See bugzil.la/1090768.
    .map(util.normalize)
    // Always ensure that absolute sources are internally stored relative to
    // the source root, if the source root is absolute. Not doing this would
    // be particularly problematic when the source root is a prefix of the
    // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
    .map(function (source) {
      return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source)
        ? util.relative(sourceRoot, source)
        : source;
    });

  // Pass `true` below to allow duplicate names and sources. While source maps
  // are intended to be compressed and deduplicated, the TypeScript compiler
  // sometimes generates source maps with duplicates in them. See Github issue
  // #72 and bugzil.la/889492.
  this._names = ArraySet.fromArray(names.map(String), true);
  this._sources = ArraySet.fromArray(sources, true);

  this._absoluteSources = this._sources.toArray().map(function (s) {
    return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
  });

  this.sourceRoot = sourceRoot;
  this.sourcesContent = sourcesContent;
  this._mappings = mappings;
  this._sourceMapURL = aSourceMapURL;
  this.file = file;
}

BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;

/**
 * Utility function to find the index of a source.  Returns -1 if not
 * found.
 */
BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
  var relativeSource = aSource;
  if (this.sourceRoot != null) {
    relativeSource = util.relative(this.sourceRoot, relativeSource);
  }

  if (this._sources.has(relativeSource)) {
    return this._sources.indexOf(relativeSource);
  }

  // Maybe aSource is an absolute URL as returned by |sources|.  In
  // this case we can't simply undo the transform.
  var i;
  for (i = 0; i < this._absoluteSources.length; ++i) {
    if (this._absoluteSources[i] == aSource) {
      return i;
    }
  }

  return -1;
};

/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @param String aSourceMapURL
 *        The URL at which the source map can be found (optional)
 * @returns BasicSourceMapConsumer
 */
BasicSourceMapConsumer.fromSourceMap =
  function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
    var smc = Object.create(BasicSourceMapConsumer.prototype);

    var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
    var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(),
                                                            smc.sourceRoot);
    smc.file = aSourceMap._file;
    smc._sourceMapURL = aSourceMapURL;
    smc._absoluteSources = smc._sources.toArray().map(function (s) {
      return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
    });

    // Because we are modifying the entries (by converting string sources and
    // names to indices into the sources and names ArraySets), we have to make
    // a copy of the entry or else bad things happen. Shared mutable state
    // strikes again! See github issue #191.

    var generatedMappings = aSourceMap._mappings.toArray().slice();
    var destGeneratedMappings = smc.__generatedMappings = [];
    var destOriginalMappings = smc.__originalMappings = [];

    for (var i = 0, length = generatedMappings.length; i < length; i++) {
      var srcMapping = generatedMappings[i];
      var destMapping = new Mapping;
      destMapping.generatedLine = srcMapping.generatedLine;
      destMapping.generatedColumn = srcMapping.generatedColumn;

      if (srcMapping.source) {
        destMapping.source = sources.indexOf(srcMapping.source);
        destMapping.originalLine = srcMapping.originalLine;
        destMapping.originalColumn = srcMapping.originalColumn;

        if (srcMapping.name) {
          destMapping.name = names.indexOf(srcMapping.name);
        }

        destOriginalMappings.push(destMapping);
      }

      destGeneratedMappings.push(destMapping);
    }

    quickSort(smc.__originalMappings, util.compareByOriginalPositions);

    return smc;
  };

/**
 * The version of the source mapping spec that we are consuming.
 */
BasicSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
  get: function () {
    return this._absoluteSources.slice();
  }
});

/**
 * Provide the JIT with a nice shape / hidden class.
 */
function Mapping() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
BasicSourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var length = aStr.length;
    var index = 0;
    var cachedSegments = {};
    var temp = {};
    var originalMappings = [];
    var generatedMappings = [];
    var mapping, str, segment, end, value;

    while (index < length) {
      if (aStr.charAt(index) === ';') {
        generatedLine++;
        index++;
        previousGeneratedColumn = 0;
      }
      else if (aStr.charAt(index) === ',') {
        index++;
      }
      else {
        mapping = new Mapping();
        mapping.generatedLine = generatedLine;

        // Because each offset is encoded relative to the previous one,
        // many segments often have the same encoding. We can exploit this
        // fact by caching the parsed variable length fields of each segment,
        // allowing us to avoid a second parse if we encounter the same
        // segment again.
        for (end = index; end < length; end++) {
          if (this._charIsMappingSeparator(aStr, end)) {
            break;
          }
        }
        str = aStr.slice(index, end);

        segment = cachedSegments[str];
        if (segment) {
          index += str.length;
        } else {
          segment = [];
          while (index < end) {
            base64VLQ.decode(aStr, index, temp);
            value = temp.value;
            index = temp.rest;
            segment.push(value);
          }

          if (segment.length === 2) {
            throw new Error('Found a source, but no line and column');
          }

          if (segment.length === 3) {
            throw new Error('Found a source and line, but no column');
          }

          cachedSegments[str] = segment;
        }

        // Generated column.
        mapping.generatedColumn = previousGeneratedColumn + segment[0];
        previousGeneratedColumn = mapping.generatedColumn;

        if (segment.length > 1) {
          // Original source.
          mapping.source = previousSource + segment[1];
          previousSource += segment[1];

          // Original line.
          mapping.originalLine = previousOriginalLine + segment[2];
          previousOriginalLine = mapping.originalLine;
          // Lines are stored 0-based
          mapping.originalLine += 1;

          // Original column.
          mapping.originalColumn = previousOriginalColumn + segment[3];
          previousOriginalColumn = mapping.originalColumn;

          if (segment.length > 4) {
            // Original name.
            mapping.name = previousName + segment[4];
            previousName += segment[4];
          }
        }

        generatedMappings.push(mapping);
        if (typeof mapping.originalLine === 'number') {
          originalMappings.push(mapping);
        }
      }
    }

    quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
    this.__generatedMappings = generatedMappings;

    quickSort(originalMappings, util.compareByOriginalPositions);
    this.__originalMappings = originalMappings;
  };

/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */
BasicSourceMapConsumer.prototype._findMapping =
  function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName,
                                         aColumnName, aComparator, aBias) {
    // To return the position we are searching for, we must first find the
    // mapping for the given position and then return the opposite position it
    // points to. Because the mappings are sorted, we can use binary search to
    // find the best mapping.

    if (aNeedle[aLineName] <= 0) {
      throw new TypeError('Line must be greater than or equal to 1, got '
                          + aNeedle[aLineName]);
    }
    if (aNeedle[aColumnName] < 0) {
      throw new TypeError('Column must be greater than or equal to 0, got '
                          + aNeedle[aColumnName]);
    }

    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
  };

/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */
BasicSourceMapConsumer.prototype.computeColumnSpans =
  function SourceMapConsumer_computeColumnSpans() {
    for (var index = 0; index < this._generatedMappings.length; ++index) {
      var mapping = this._generatedMappings[index];

      // Mappings do not contain a field for the last generated columnt. We
      // can come up with an optimistic estimate, however, by assuming that
      // mappings are contiguous (i.e. given two consecutive mappings, the
      // first mapping ends where the second one starts).
      if (index + 1 < this._generatedMappings.length) {
        var nextMapping = this._generatedMappings[index + 1];

        if (mapping.generatedLine === nextMapping.generatedLine) {
          mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
          continue;
        }
      }

      // The last mapping for each line spans the entire line.
      mapping.lastGeneratedColumn = Infinity;
    }
  };

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
BasicSourceMapConsumer.prototype.originalPositionFor =
  function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      util.compareByGeneratedPositionsDeflated,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._generatedMappings[index];

      if (mapping.generatedLine === needle.generatedLine) {
        var source = util.getArg(mapping, 'source', null);
        if (source !== null) {
          source = this._sources.at(source);
          source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
        }
        var name = util.getArg(mapping, 'name', null);
        if (name !== null) {
          name = this._names.at(name);
        }
        return {
          source: source,
          line: util.getArg(mapping, 'originalLine', null),
          column: util.getArg(mapping, 'originalColumn', null),
          name: name
        };
      }
    }

    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
BasicSourceMapConsumer.prototype.hasContentsOfAllSources =
  function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) {
      return false;
    }
    return this.sourcesContent.length >= this._sources.size() &&
      !this.sourcesContent.some(function (sc) { return sc == null; });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
BasicSourceMapConsumer.prototype.sourceContentFor =
  function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) {
      return null;
    }

    var index = this._findSourceIndex(aSource);
    if (index >= 0) {
      return this.sourcesContent[index];
    }

    var relativeSource = aSource;
    if (this.sourceRoot != null) {
      relativeSource = util.relative(this.sourceRoot, relativeSource);
    }

    var url;
    if (this.sourceRoot != null
        && (url = util.urlParse(this.sourceRoot))) {
      // XXX: file:// URIs and absolute paths lead to unexpected behavior for
      // many users. We can help them out when they expect file:// URIs to
      // behave like it would if they were running a local HTTP server. See
      // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
      var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
      if (url.scheme == "file"
          && this._sources.has(fileUriAbsPath)) {
        return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)]
      }

      if ((!url.path || url.path == "/")
          && this._sources.has("/" + relativeSource)) {
        return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
      }
    }

    // This function is used recursively from
    // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
    // don't want to throw if we can't find the source - we just want to
    // return null, so we provide a flag to exit gracefully.
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + relativeSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
BasicSourceMapConsumer.prototype.generatedPositionFor =
  function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = util.getArg(aArgs, 'source');
    source = this._findSourceIndex(source);
    if (source < 0) {
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    }

    var needle = {
      source: source,
      originalLine: util.getArg(aArgs, 'line'),
      originalColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      util.compareByOriginalPositions,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (mapping.source === needle.source) {
        return {
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        };
      }
    }

    return {
      line: null,
      column: null,
      lastColumn: null
    };
  };

exports.BasicSourceMapConsumer = BasicSourceMapConsumer;

/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The first parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */
function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sections = util.getArg(sourceMap, 'sections');

  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  this._sources = new ArraySet();
  this._names = new ArraySet();

  var lastOffset = {
    line: -1,
    column: 0
  };
  this._sections = sections.map(function (s) {
    if (s.url) {
      // The url field will require support for asynchronicity.
      // See https://github.com/mozilla/source-map/issues/16
      throw new Error('Support for url field in sections not implemented.');
    }
    var offset = util.getArg(s, 'offset');
    var offsetLine = util.getArg(offset, 'line');
    var offsetColumn = util.getArg(offset, 'column');

    if (offsetLine < lastOffset.line ||
        (offsetLine === lastOffset.line && offsetColumn < lastOffset.column)) {
      throw new Error('Section offsets must be ordered and non-overlapping.');
    }
    lastOffset = offset;

    return {
      generatedOffset: {
        // The offset fields are 0-based, but we use 1-based indices when
        // encoding/decoding from VLQ.
        generatedLine: offsetLine + 1,
        generatedColumn: offsetColumn + 1
      },
      consumer: new SourceMapConsumer(util.getArg(s, 'map'), aSourceMapURL)
    }
  });
}

IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;

/**
 * The version of the source mapping spec that we are consuming.
 */
IndexedSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
  get: function () {
    var sources = [];
    for (var i = 0; i < this._sections.length; i++) {
      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
        sources.push(this._sections[i].consumer.sources[j]);
      }
    }
    return sources;
  }
});

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
IndexedSourceMapConsumer.prototype.originalPositionFor =
  function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    // Find the section containing the generated position we're trying to map
    // to an original position.
    var sectionIndex = binarySearch.search(needle, this._sections,
      function(needle, section) {
        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
        if (cmp) {
          return cmp;
        }

        return (needle.generatedColumn -
                section.generatedOffset.generatedColumn);
      });
    var section = this._sections[sectionIndex];

    if (!section) {
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    }

    return section.consumer.originalPositionFor({
      line: needle.generatedLine -
        (section.generatedOffset.generatedLine - 1),
      column: needle.generatedColumn -
        (section.generatedOffset.generatedLine === needle.generatedLine
         ? section.generatedOffset.generatedColumn - 1
         : 0),
      bias: aArgs.bias
    });
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
IndexedSourceMapConsumer.prototype.hasContentsOfAllSources =
  function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function (s) {
      return s.consumer.hasContentsOfAllSources();
    });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
IndexedSourceMapConsumer.prototype.sourceContentFor =
  function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      var content = section.consumer.sourceContentFor(aSource, true);
      if (content) {
        return content;
      }
    }
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + aSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based. 
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
IndexedSourceMapConsumer.prototype.generatedPositionFor =
  function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      // Only consider this section if the requested source is in the list of
      // sources of the consumer.
      if (section.consumer._findSourceIndex(util.getArg(aArgs, 'source')) === -1) {
        continue;
      }
      var generatedPosition = section.consumer.generatedPositionFor(aArgs);
      if (generatedPosition) {
        var ret = {
          line: generatedPosition.line +
            (section.generatedOffset.generatedLine - 1),
          column: generatedPosition.column +
            (section.generatedOffset.generatedLine === generatedPosition.line
             ? section.generatedOffset.generatedColumn - 1
             : 0)
        };
        return ret;
      }
    }

    return {
      line: null,
      column: null
    };
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
IndexedSourceMapConsumer.prototype._parseMappings =
  function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    this.__generatedMappings = [];
    this.__originalMappings = [];
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];
      var sectionMappings = section.consumer._generatedMappings;
      for (var j = 0; j < sectionMappings.length; j++) {
        var mapping = sectionMappings[j];

        var source = section.consumer._sources.at(mapping.source);
        source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
        this._sources.add(source);
        source = this._sources.indexOf(source);

        var name = null;
        if (mapping.name) {
          name = section.consumer._names.at(mapping.name);
          this._names.add(name);
          name = this._names.indexOf(name);
        }

        // The mappings coming from the consumer for the section have
        // generated positions relative to the start of the section, so we
        // need to offset them to be relative to the start of the concatenated
        // generated file.
        var adjustedMapping = {
          source: source,
          generatedLine: mapping.generatedLine +
            (section.generatedOffset.generatedLine - 1),
          generatedColumn: mapping.generatedColumn +
            (section.generatedOffset.generatedLine === mapping.generatedLine
            ? section.generatedOffset.generatedColumn - 1
            : 0),
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: name
        };

        this.__generatedMappings.push(adjustedMapping);
        if (typeof adjustedMapping.originalLine === 'number') {
          this.__originalMappings.push(adjustedMapping);
        }
      }
    }

    quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
    quickSort(this.__originalMappings, util.compareByOriginalPositions);
  };

exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;


/***/ }),

/***/ "../../source-map-support/node_modules/source-map/lib/source-map-generator.js":
/*!************************************************************************************!*\
  !*** ../../source-map-support/node_modules/source-map/lib/source-map-generator.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var base64VLQ = __webpack_require__(/*! ./base64-vlq */ "../../source-map-support/node_modules/source-map/lib/base64-vlq.js");
var util = __webpack_require__(/*! ./util */ "../../source-map-support/node_modules/source-map/lib/util.js");
var ArraySet = (__webpack_require__(/*! ./array-set */ "../../source-map-support/node_modules/source-map/lib/array-set.js").ArraySet);
var MappingList = (__webpack_require__(/*! ./mapping-list */ "../../source-map-support/node_modules/source-map/lib/mapping-list.js").MappingList);

/**
 * An instance of the SourceMapGenerator represents a source map which is
 * being built incrementally. You may pass an object with the following
 * properties:
 *
 *   - file: The filename of the generated source.
 *   - sourceRoot: A root for all relative URLs in this source map.
 */
function SourceMapGenerator(aArgs) {
  if (!aArgs) {
    aArgs = {};
  }
  this._file = util.getArg(aArgs, 'file', null);
  this._sourceRoot = util.getArg(aArgs, 'sourceRoot', null);
  this._skipValidation = util.getArg(aArgs, 'skipValidation', false);
  this._sources = new ArraySet();
  this._names = new ArraySet();
  this._mappings = new MappingList();
  this._sourcesContents = null;
}

SourceMapGenerator.prototype._version = 3;

/**
 * Creates a new SourceMapGenerator based on a SourceMapConsumer
 *
 * @param aSourceMapConsumer The SourceMap.
 */
SourceMapGenerator.fromSourceMap =
  function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
    var sourceRoot = aSourceMapConsumer.sourceRoot;
    var generator = new SourceMapGenerator({
      file: aSourceMapConsumer.file,
      sourceRoot: sourceRoot
    });
    aSourceMapConsumer.eachMapping(function (mapping) {
      var newMapping = {
        generated: {
          line: mapping.generatedLine,
          column: mapping.generatedColumn
        }
      };

      if (mapping.source != null) {
        newMapping.source = mapping.source;
        if (sourceRoot != null) {
          newMapping.source = util.relative(sourceRoot, newMapping.source);
        }

        newMapping.original = {
          line: mapping.originalLine,
          column: mapping.originalColumn
        };

        if (mapping.name != null) {
          newMapping.name = mapping.name;
        }
      }

      generator.addMapping(newMapping);
    });
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var sourceRelative = sourceFile;
      if (sourceRoot !== null) {
        sourceRelative = util.relative(sourceRoot, sourceFile);
      }

      if (!generator._sources.has(sourceRelative)) {
        generator._sources.add(sourceRelative);
      }

      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        generator.setSourceContent(sourceFile, content);
      }
    });
    return generator;
  };

/**
 * Add a single mapping from original source line and column to the generated
 * source's line and column for this source map being created. The mapping
 * object should have the following properties:
 *
 *   - generated: An object with the generated line and column positions.
 *   - original: An object with the original line and column positions.
 *   - source: The original source file (relative to the sourceRoot).
 *   - name: An optional original token name for this mapping.
 */
SourceMapGenerator.prototype.addMapping =
  function SourceMapGenerator_addMapping(aArgs) {
    var generated = util.getArg(aArgs, 'generated');
    var original = util.getArg(aArgs, 'original', null);
    var source = util.getArg(aArgs, 'source', null);
    var name = util.getArg(aArgs, 'name', null);

    if (!this._skipValidation) {
      this._validateMapping(generated, original, source, name);
    }

    if (source != null) {
      source = String(source);
      if (!this._sources.has(source)) {
        this._sources.add(source);
      }
    }

    if (name != null) {
      name = String(name);
      if (!this._names.has(name)) {
        this._names.add(name);
      }
    }

    this._mappings.add({
      generatedLine: generated.line,
      generatedColumn: generated.column,
      originalLine: original != null && original.line,
      originalColumn: original != null && original.column,
      source: source,
      name: name
    });
  };

/**
 * Set the source content for a source file.
 */
SourceMapGenerator.prototype.setSourceContent =
  function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
    var source = aSourceFile;
    if (this._sourceRoot != null) {
      source = util.relative(this._sourceRoot, source);
    }

    if (aSourceContent != null) {
      // Add the source content to the _sourcesContents map.
      // Create a new _sourcesContents map if the property is null.
      if (!this._sourcesContents) {
        this._sourcesContents = Object.create(null);
      }
      this._sourcesContents[util.toSetString(source)] = aSourceContent;
    } else if (this._sourcesContents) {
      // Remove the source file from the _sourcesContents map.
      // If the _sourcesContents map is empty, set the property to null.
      delete this._sourcesContents[util.toSetString(source)];
      if (Object.keys(this._sourcesContents).length === 0) {
        this._sourcesContents = null;
      }
    }
  };

/**
 * Applies the mappings of a sub-source-map for a specific source file to the
 * source map being generated. Each mapping to the supplied source file is
 * rewritten using the supplied source map. Note: The resolution for the
 * resulting mappings is the minimium of this map and the supplied map.
 *
 * @param aSourceMapConsumer The source map to be applied.
 * @param aSourceFile Optional. The filename of the source file.
 *        If omitted, SourceMapConsumer's file property will be used.
 * @param aSourceMapPath Optional. The dirname of the path to the source map
 *        to be applied. If relative, it is relative to the SourceMapConsumer.
 *        This parameter is needed when the two source maps aren't in the same
 *        directory, and the source map to be applied contains relative source
 *        paths. If so, those relative source paths need to be rewritten
 *        relative to the SourceMapGenerator.
 */
SourceMapGenerator.prototype.applySourceMap =
  function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
    var sourceFile = aSourceFile;
    // If aSourceFile is omitted, we will use the file property of the SourceMap
    if (aSourceFile == null) {
      if (aSourceMapConsumer.file == null) {
        throw new Error(
          'SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, ' +
          'or the source map\'s "file" property. Both were omitted.'
        );
      }
      sourceFile = aSourceMapConsumer.file;
    }
    var sourceRoot = this._sourceRoot;
    // Make "sourceFile" relative if an absolute Url is passed.
    if (sourceRoot != null) {
      sourceFile = util.relative(sourceRoot, sourceFile);
    }
    // Applying the SourceMap can add and remove items from the sources and
    // the names array.
    var newSources = new ArraySet();
    var newNames = new ArraySet();

    // Find mappings for the "sourceFile"
    this._mappings.unsortedForEach(function (mapping) {
      if (mapping.source === sourceFile && mapping.originalLine != null) {
        // Check if it can be mapped by the source map, then update the mapping.
        var original = aSourceMapConsumer.originalPositionFor({
          line: mapping.originalLine,
          column: mapping.originalColumn
        });
        if (original.source != null) {
          // Copy mapping
          mapping.source = original.source;
          if (aSourceMapPath != null) {
            mapping.source = util.join(aSourceMapPath, mapping.source)
          }
          if (sourceRoot != null) {
            mapping.source = util.relative(sourceRoot, mapping.source);
          }
          mapping.originalLine = original.line;
          mapping.originalColumn = original.column;
          if (original.name != null) {
            mapping.name = original.name;
          }
        }
      }

      var source = mapping.source;
      if (source != null && !newSources.has(source)) {
        newSources.add(source);
      }

      var name = mapping.name;
      if (name != null && !newNames.has(name)) {
        newNames.add(name);
      }

    }, this);
    this._sources = newSources;
    this._names = newNames;

    // Copy sourcesContents of applied map.
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aSourceMapPath != null) {
          sourceFile = util.join(aSourceMapPath, sourceFile);
        }
        if (sourceRoot != null) {
          sourceFile = util.relative(sourceRoot, sourceFile);
        }
        this.setSourceContent(sourceFile, content);
      }
    }, this);
  };

/**
 * A mapping can have one of the three levels of data:
 *
 *   1. Just the generated position.
 *   2. The Generated position, original position, and original source.
 *   3. Generated and original position, original source, as well as a name
 *      token.
 *
 * To maintain consistency, we validate that any new mapping being added falls
 * in to one of these categories.
 */
SourceMapGenerator.prototype._validateMapping =
  function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource,
                                              aName) {
    // When aOriginal is truthy but has empty values for .line and .column,
    // it is most likely a programmer error. In this case we throw a very
    // specific error message to try to guide them the right way.
    // For example: https://github.com/Polymer/polymer-bundler/pull/519
    if (aOriginal && typeof aOriginal.line !== 'number' && typeof aOriginal.column !== 'number') {
        throw new Error(
            'original.line and original.column are not numbers -- you probably meant to omit ' +
            'the original mapping entirely and only map the generated position. If so, pass ' +
            'null for the original mapping instead of an object with empty or null values.'
        );
    }

    if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
        && aGenerated.line > 0 && aGenerated.column >= 0
        && !aOriginal && !aSource && !aName) {
      // Case 1.
      return;
    }
    else if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
             && aOriginal && 'line' in aOriginal && 'column' in aOriginal
             && aGenerated.line > 0 && aGenerated.column >= 0
             && aOriginal.line > 0 && aOriginal.column >= 0
             && aSource) {
      // Cases 2 and 3.
      return;
    }
    else {
      throw new Error('Invalid mapping: ' + JSON.stringify({
        generated: aGenerated,
        source: aSource,
        original: aOriginal,
        name: aName
      }));
    }
  };

/**
 * Serialize the accumulated mappings in to the stream of base 64 VLQs
 * specified by the source map format.
 */
SourceMapGenerator.prototype._serializeMappings =
  function SourceMapGenerator_serializeMappings() {
    var previousGeneratedColumn = 0;
    var previousGeneratedLine = 1;
    var previousOriginalColumn = 0;
    var previousOriginalLine = 0;
    var previousName = 0;
    var previousSource = 0;
    var result = '';
    var next;
    var mapping;
    var nameIdx;
    var sourceIdx;

    var mappings = this._mappings.toArray();
    for (var i = 0, len = mappings.length; i < len; i++) {
      mapping = mappings[i];
      next = ''

      if (mapping.generatedLine !== previousGeneratedLine) {
        previousGeneratedColumn = 0;
        while (mapping.generatedLine !== previousGeneratedLine) {
          next += ';';
          previousGeneratedLine++;
        }
      }
      else {
        if (i > 0) {
          if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
            continue;
          }
          next += ',';
        }
      }

      next += base64VLQ.encode(mapping.generatedColumn
                                 - previousGeneratedColumn);
      previousGeneratedColumn = mapping.generatedColumn;

      if (mapping.source != null) {
        sourceIdx = this._sources.indexOf(mapping.source);
        next += base64VLQ.encode(sourceIdx - previousSource);
        previousSource = sourceIdx;

        // lines are stored 0-based in SourceMap spec version 3
        next += base64VLQ.encode(mapping.originalLine - 1
                                   - previousOriginalLine);
        previousOriginalLine = mapping.originalLine - 1;

        next += base64VLQ.encode(mapping.originalColumn
                                   - previousOriginalColumn);
        previousOriginalColumn = mapping.originalColumn;

        if (mapping.name != null) {
          nameIdx = this._names.indexOf(mapping.name);
          next += base64VLQ.encode(nameIdx - previousName);
          previousName = nameIdx;
        }
      }

      result += next;
    }

    return result;
  };

SourceMapGenerator.prototype._generateSourcesContent =
  function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
    return aSources.map(function (source) {
      if (!this._sourcesContents) {
        return null;
      }
      if (aSourceRoot != null) {
        source = util.relative(aSourceRoot, source);
      }
      var key = util.toSetString(source);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, key)
        ? this._sourcesContents[key]
        : null;
    }, this);
  };

/**
 * Externalize the source map.
 */
SourceMapGenerator.prototype.toJSON =
  function SourceMapGenerator_toJSON() {
    var map = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    if (this._file != null) {
      map.file = this._file;
    }
    if (this._sourceRoot != null) {
      map.sourceRoot = this._sourceRoot;
    }
    if (this._sourcesContents) {
      map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
    }

    return map;
  };

/**
 * Render the source map being generated to a string.
 */
SourceMapGenerator.prototype.toString =
  function SourceMapGenerator_toString() {
    return JSON.stringify(this.toJSON());
  };

exports.SourceMapGenerator = SourceMapGenerator;


/***/ }),

/***/ "../../source-map-support/node_modules/source-map/lib/source-node.js":
/*!***************************************************************************!*\
  !*** ../../source-map-support/node_modules/source-map/lib/source-node.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var SourceMapGenerator = (__webpack_require__(/*! ./source-map-generator */ "../../source-map-support/node_modules/source-map/lib/source-map-generator.js").SourceMapGenerator);
var util = __webpack_require__(/*! ./util */ "../../source-map-support/node_modules/source-map/lib/util.js");

// Matches a Windows-style `\r\n` newline or a `\n` newline used by all other
// operating systems these days (capturing the result).
var REGEX_NEWLINE = /(\r?\n)/;

// Newline character code for charCodeAt() comparisons
var NEWLINE_CODE = 10;

// Private symbol for identifying `SourceNode`s when multiple versions of
// the source-map library are loaded. This MUST NOT CHANGE across
// versions!
var isSourceNode = "$$$isSourceNode$$$";

/**
 * SourceNodes provide a way to abstract over interpolating/concatenating
 * snippets of generated JavaScript source code while maintaining the line and
 * column information associated with the original source code.
 *
 * @param aLine The original line number.
 * @param aColumn The original column number.
 * @param aSource The original source's filename.
 * @param aChunks Optional. An array of strings which are snippets of
 *        generated JS, or other SourceNodes.
 * @param aName The original identifier.
 */
function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
  this.children = [];
  this.sourceContents = {};
  this.line = aLine == null ? null : aLine;
  this.column = aColumn == null ? null : aColumn;
  this.source = aSource == null ? null : aSource;
  this.name = aName == null ? null : aName;
  this[isSourceNode] = true;
  if (aChunks != null) this.add(aChunks);
}

/**
 * Creates a SourceNode from generated code and a SourceMapConsumer.
 *
 * @param aGeneratedCode The generated code
 * @param aSourceMapConsumer The SourceMap for the generated code
 * @param aRelativePath Optional. The path that relative sources in the
 *        SourceMapConsumer should be relative to.
 */
SourceNode.fromStringWithSourceMap =
  function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
    // The SourceNode we want to fill with the generated code
    // and the SourceMap
    var node = new SourceNode();

    // All even indices of this array are one line of the generated code,
    // while all odd indices are the newlines between two adjacent lines
    // (since `REGEX_NEWLINE` captures its match).
    // Processed fragments are accessed by calling `shiftNextLine`.
    var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
    var remainingLinesIndex = 0;
    var shiftNextLine = function() {
      var lineContents = getNextLine();
      // The last line of a file might not have a newline.
      var newLine = getNextLine() || "";
      return lineContents + newLine;

      function getNextLine() {
        return remainingLinesIndex < remainingLines.length ?
            remainingLines[remainingLinesIndex++] : undefined;
      }
    };

    // We need to remember the position of "remainingLines"
    var lastGeneratedLine = 1, lastGeneratedColumn = 0;

    // The generate SourceNodes we need a code range.
    // To extract it current and last mapping is used.
    // Here we store the last mapping.
    var lastMapping = null;

    aSourceMapConsumer.eachMapping(function (mapping) {
      if (lastMapping !== null) {
        // We add the code from "lastMapping" to "mapping":
        // First check if there is a new line in between.
        if (lastGeneratedLine < mapping.generatedLine) {
          // Associate first line with "lastMapping"
          addMappingWithCode(lastMapping, shiftNextLine());
          lastGeneratedLine++;
          lastGeneratedColumn = 0;
          // The remaining code is added without mapping
        } else {
          // There is no new line in between.
          // Associate the code between "lastGeneratedColumn" and
          // "mapping.generatedColumn" with "lastMapping"
          var nextLine = remainingLines[remainingLinesIndex] || '';
          var code = nextLine.substr(0, mapping.generatedColumn -
                                        lastGeneratedColumn);
          remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn -
                                              lastGeneratedColumn);
          lastGeneratedColumn = mapping.generatedColumn;
          addMappingWithCode(lastMapping, code);
          // No more remaining code, continue
          lastMapping = mapping;
          return;
        }
      }
      // We add the generated code until the first mapping
      // to the SourceNode without any mapping.
      // Each line is added as separate string.
      while (lastGeneratedLine < mapping.generatedLine) {
        node.add(shiftNextLine());
        lastGeneratedLine++;
      }
      if (lastGeneratedColumn < mapping.generatedColumn) {
        var nextLine = remainingLines[remainingLinesIndex] || '';
        node.add(nextLine.substr(0, mapping.generatedColumn));
        remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
        lastGeneratedColumn = mapping.generatedColumn;
      }
      lastMapping = mapping;
    }, this);
    // We have processed all mappings.
    if (remainingLinesIndex < remainingLines.length) {
      if (lastMapping) {
        // Associate the remaining code in the current line with "lastMapping"
        addMappingWithCode(lastMapping, shiftNextLine());
      }
      // and add the remaining lines without any mapping
      node.add(remainingLines.splice(remainingLinesIndex).join(""));
    }

    // Copy sourcesContent into SourceNode
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aRelativePath != null) {
          sourceFile = util.join(aRelativePath, sourceFile);
        }
        node.setSourceContent(sourceFile, content);
      }
    });

    return node;

    function addMappingWithCode(mapping, code) {
      if (mapping === null || mapping.source === undefined) {
        node.add(code);
      } else {
        var source = aRelativePath
          ? util.join(aRelativePath, mapping.source)
          : mapping.source;
        node.add(new SourceNode(mapping.originalLine,
                                mapping.originalColumn,
                                source,
                                code,
                                mapping.name));
      }
    }
  };

/**
 * Add a chunk of generated JS to this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */
SourceNode.prototype.add = function SourceNode_add(aChunk) {
  if (Array.isArray(aChunk)) {
    aChunk.forEach(function (chunk) {
      this.add(chunk);
    }, this);
  }
  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    if (aChunk) {
      this.children.push(aChunk);
    }
  }
  else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};

/**
 * Add a chunk of generated JS to the beginning of this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */
SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
  if (Array.isArray(aChunk)) {
    for (var i = aChunk.length-1; i >= 0; i--) {
      this.prepend(aChunk[i]);
    }
  }
  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    this.children.unshift(aChunk);
  }
  else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};

/**
 * Walk over the tree of JS snippets in this node and its children. The
 * walking function is called once for each snippet of JS and is passed that
 * snippet and the its original associated source's line/column location.
 *
 * @param aFn The traversal function.
 */
SourceNode.prototype.walk = function SourceNode_walk(aFn) {
  var chunk;
  for (var i = 0, len = this.children.length; i < len; i++) {
    chunk = this.children[i];
    if (chunk[isSourceNode]) {
      chunk.walk(aFn);
    }
    else {
      if (chunk !== '') {
        aFn(chunk, { source: this.source,
                     line: this.line,
                     column: this.column,
                     name: this.name });
      }
    }
  }
};

/**
 * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
 * each of `this.children`.
 *
 * @param aSep The separator.
 */
SourceNode.prototype.join = function SourceNode_join(aSep) {
  var newChildren;
  var i;
  var len = this.children.length;
  if (len > 0) {
    newChildren = [];
    for (i = 0; i < len-1; i++) {
      newChildren.push(this.children[i]);
      newChildren.push(aSep);
    }
    newChildren.push(this.children[i]);
    this.children = newChildren;
  }
  return this;
};

/**
 * Call String.prototype.replace on the very right-most source snippet. Useful
 * for trimming whitespace from the end of a source node, etc.
 *
 * @param aPattern The pattern to replace.
 * @param aReplacement The thing to replace the pattern with.
 */
SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
  var lastChild = this.children[this.children.length - 1];
  if (lastChild[isSourceNode]) {
    lastChild.replaceRight(aPattern, aReplacement);
  }
  else if (typeof lastChild === 'string') {
    this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
  }
  else {
    this.children.push(''.replace(aPattern, aReplacement));
  }
  return this;
};

/**
 * Set the source content for a source file. This will be added to the SourceMapGenerator
 * in the sourcesContent field.
 *
 * @param aSourceFile The filename of the source file
 * @param aSourceContent The content of the source file
 */
SourceNode.prototype.setSourceContent =
  function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
    this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
  };

/**
 * Walk over the tree of SourceNodes. The walking function is called for each
 * source file content and is passed the filename and source content.
 *
 * @param aFn The traversal function.
 */
SourceNode.prototype.walkSourceContents =
  function SourceNode_walkSourceContents(aFn) {
    for (var i = 0, len = this.children.length; i < len; i++) {
      if (this.children[i][isSourceNode]) {
        this.children[i].walkSourceContents(aFn);
      }
    }

    var sources = Object.keys(this.sourceContents);
    for (var i = 0, len = sources.length; i < len; i++) {
      aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
    }
  };

/**
 * Return the string representation of this source node. Walks over the tree
 * and concatenates all the various snippets together to one string.
 */
SourceNode.prototype.toString = function SourceNode_toString() {
  var str = "";
  this.walk(function (chunk) {
    str += chunk;
  });
  return str;
};

/**
 * Returns the string representation of this source node along with a source
 * map.
 */
SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
  var generated = {
    code: "",
    line: 1,
    column: 0
  };
  var map = new SourceMapGenerator(aArgs);
  var sourceMappingActive = false;
  var lastOriginalSource = null;
  var lastOriginalLine = null;
  var lastOriginalColumn = null;
  var lastOriginalName = null;
  this.walk(function (chunk, original) {
    generated.code += chunk;
    if (original.source !== null
        && original.line !== null
        && original.column !== null) {
      if(lastOriginalSource !== original.source
         || lastOriginalLine !== original.line
         || lastOriginalColumn !== original.column
         || lastOriginalName !== original.name) {
        map.addMapping({
          source: original.source,
          original: {
            line: original.line,
            column: original.column
          },
          generated: {
            line: generated.line,
            column: generated.column
          },
          name: original.name
        });
      }
      lastOriginalSource = original.source;
      lastOriginalLine = original.line;
      lastOriginalColumn = original.column;
      lastOriginalName = original.name;
      sourceMappingActive = true;
    } else if (sourceMappingActive) {
      map.addMapping({
        generated: {
          line: generated.line,
          column: generated.column
        }
      });
      lastOriginalSource = null;
      sourceMappingActive = false;
    }
    for (var idx = 0, length = chunk.length; idx < length; idx++) {
      if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
        generated.line++;
        generated.column = 0;
        // Mappings end at eol
        if (idx + 1 === length) {
          lastOriginalSource = null;
          sourceMappingActive = false;
        } else if (sourceMappingActive) {
          map.addMapping({
            source: original.source,
            original: {
              line: original.line,
              column: original.column
            },
            generated: {
              line: generated.line,
              column: generated.column
            },
            name: original.name
          });
        }
      } else {
        generated.column++;
      }
    }
  });
  this.walkSourceContents(function (sourceFile, sourceContent) {
    map.setSourceContent(sourceFile, sourceContent);
  });

  return { code: generated.code, map: map };
};

exports.SourceNode = SourceNode;


/***/ }),

/***/ "../../source-map-support/node_modules/source-map/lib/util.js":
/*!********************************************************************!*\
  !*** ../../source-map-support/node_modules/source-map/lib/util.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

/**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */
function getArg(aArgs, aName, aDefaultValue) {
  if (aName in aArgs) {
    return aArgs[aName];
  } else if (arguments.length === 3) {
    return aDefaultValue;
  } else {
    throw new Error('"' + aName + '" is a required argument.');
  }
}
exports.getArg = getArg;

var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;

function urlParse(aUrl) {
  var match = aUrl.match(urlRegexp);
  if (!match) {
    return null;
  }
  return {
    scheme: match[1],
    auth: match[2],
    host: match[3],
    port: match[4],
    path: match[5]
  };
}
exports.urlParse = urlParse;

function urlGenerate(aParsedUrl) {
  var url = '';
  if (aParsedUrl.scheme) {
    url += aParsedUrl.scheme + ':';
  }
  url += '//';
  if (aParsedUrl.auth) {
    url += aParsedUrl.auth + '@';
  }
  if (aParsedUrl.host) {
    url += aParsedUrl.host;
  }
  if (aParsedUrl.port) {
    url += ":" + aParsedUrl.port
  }
  if (aParsedUrl.path) {
    url += aParsedUrl.path;
  }
  return url;
}
exports.urlGenerate = urlGenerate;

/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */
function normalize(aPath) {
  var path = aPath;
  var url = urlParse(aPath);
  if (url) {
    if (!url.path) {
      return aPath;
    }
    path = url.path;
  }
  var isAbsolute = exports.isAbsolute(path);

  var parts = path.split(/\/+/);
  for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
    part = parts[i];
    if (part === '.') {
      parts.splice(i, 1);
    } else if (part === '..') {
      up++;
    } else if (up > 0) {
      if (part === '') {
        // The first part is blank if the path is absolute. Trying to go
        // above the root is a no-op. Therefore we can remove all '..' parts
        // directly after the root.
        parts.splice(i + 1, up);
        up = 0;
      } else {
        parts.splice(i, 2);
        up--;
      }
    }
  }
  path = parts.join('/');

  if (path === '') {
    path = isAbsolute ? '/' : '.';
  }

  if (url) {
    url.path = path;
    return urlGenerate(url);
  }
  return path;
}
exports.normalize = normalize;

/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */
function join(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }
  if (aPath === "") {
    aPath = ".";
  }
  var aPathUrl = urlParse(aPath);
  var aRootUrl = urlParse(aRoot);
  if (aRootUrl) {
    aRoot = aRootUrl.path || '/';
  }

  // `join(foo, '//www.example.org')`
  if (aPathUrl && !aPathUrl.scheme) {
    if (aRootUrl) {
      aPathUrl.scheme = aRootUrl.scheme;
    }
    return urlGenerate(aPathUrl);
  }

  if (aPathUrl || aPath.match(dataUrlRegexp)) {
    return aPath;
  }

  // `join('http://', 'www.example.com')`
  if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
    aRootUrl.host = aPath;
    return urlGenerate(aRootUrl);
  }

  var joined = aPath.charAt(0) === '/'
    ? aPath
    : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

  if (aRootUrl) {
    aRootUrl.path = joined;
    return urlGenerate(aRootUrl);
  }
  return joined;
}
exports.join = join;

exports.isAbsolute = function (aPath) {
  return aPath.charAt(0) === '/' || urlRegexp.test(aPath);
};

/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */
function relative(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  aRoot = aRoot.replace(/\/$/, '');

  // It is possible for the path to be above the root. In this case, simply
  // checking whether the root is a prefix of the path won't work. Instead, we
  // need to remove components from the root one by one, until either we find
  // a prefix that fits, or we run out of components to remove.
  var level = 0;
  while (aPath.indexOf(aRoot + '/') !== 0) {
    var index = aRoot.lastIndexOf("/");
    if (index < 0) {
      return aPath;
    }

    // If the only part of the root that is left is the scheme (i.e. http://,
    // file:///, etc.), one or more slashes (/), or simply nothing at all, we
    // have exhausted all components, so the path is not relative to the root.
    aRoot = aRoot.slice(0, index);
    if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
      return aPath;
    }

    ++level;
  }

  // Make sure we add a "../" for each component we removed from the root.
  return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}
exports.relative = relative;

var supportsNullProto = (function () {
  var obj = Object.create(null);
  return !('__proto__' in obj);
}());

function identity (s) {
  return s;
}

/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */
function toSetString(aStr) {
  if (isProtoString(aStr)) {
    return '$' + aStr;
  }

  return aStr;
}
exports.toSetString = supportsNullProto ? identity : toSetString;

function fromSetString(aStr) {
  if (isProtoString(aStr)) {
    return aStr.slice(1);
  }

  return aStr;
}
exports.fromSetString = supportsNullProto ? identity : fromSetString;

function isProtoString(s) {
  if (!s) {
    return false;
  }

  var length = s.length;

  if (length < 9 /* "__proto__".length */) {
    return false;
  }

  if (s.charCodeAt(length - 1) !== 95  /* '_' */ ||
      s.charCodeAt(length - 2) !== 95  /* '_' */ ||
      s.charCodeAt(length - 3) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 4) !== 116 /* 't' */ ||
      s.charCodeAt(length - 5) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 6) !== 114 /* 'r' */ ||
      s.charCodeAt(length - 7) !== 112 /* 'p' */ ||
      s.charCodeAt(length - 8) !== 95  /* '_' */ ||
      s.charCodeAt(length - 9) !== 95  /* '_' */) {
    return false;
  }

  for (var i = length - 10; i >= 0; i--) {
    if (s.charCodeAt(i) !== 36 /* '$' */) {
      return false;
    }
  }

  return true;
}

/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */
function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
  var cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0 || onlyCompareOriginal) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByOriginalPositions = compareByOriginalPositions;

/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */
function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0 || onlyCompareGenerated) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

function strcmp(aStr1, aStr2) {
  if (aStr1 === aStr2) {
    return 0;
  }

  if (aStr1 === null) {
    return 1; // aStr2 !== null
  }

  if (aStr2 === null) {
    return -1; // aStr1 !== null
  }

  if (aStr1 > aStr2) {
    return 1;
  }

  return -1;
}

/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */
function compareByGeneratedPositionsInflated(mappingA, mappingB) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;

/**
 * Strip any JSON XSSI avoidance prefix from the string (as documented
 * in the source maps specification), and then parse the string as
 * JSON.
 */
function parseSourceMapInput(str) {
  return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ''));
}
exports.parseSourceMapInput = parseSourceMapInput;

/**
 * Compute the URL of a source given the the source root, the source's
 * URL, and the source map's URL.
 */
function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
  sourceURL = sourceURL || '';

  if (sourceRoot) {
    // This follows what Chrome does.
    if (sourceRoot[sourceRoot.length - 1] !== '/' && sourceURL[0] !== '/') {
      sourceRoot += '/';
    }
    // The spec says:
    //   Line 4: An optional source root, useful for relocating source
    //   files on a server or removing repeated values in the
    //   “sources” entry.  This value is prepended to the individual
    //   entries in the “source” field.
    sourceURL = sourceRoot + sourceURL;
  }

  // Historically, SourceMapConsumer did not take the sourceMapURL as
  // a parameter.  This mode is still somewhat supported, which is why
  // this code block is conditional.  However, it's preferable to pass
  // the source map URL to SourceMapConsumer, so that this function
  // can implement the source URL resolution algorithm as outlined in
  // the spec.  This block is basically the equivalent of:
  //    new URL(sourceURL, sourceMapURL).toString()
  // ... except it avoids using URL, which wasn't available in the
  // older releases of node still supported by this library.
  //
  // The spec says:
  //   If the sources are not absolute URLs after prepending of the
  //   “sourceRoot”, the sources are resolved relative to the
  //   SourceMap (like resolving script src in a html document).
  if (sourceMapURL) {
    var parsed = urlParse(sourceMapURL);
    if (!parsed) {
      throw new Error("sourceMapURL could not be parsed");
    }
    if (parsed.path) {
      // Strip the last path component, but keep the "/".
      var index = parsed.path.lastIndexOf('/');
      if (index >= 0) {
        parsed.path = parsed.path.substring(0, index + 1);
      }
    }
    sourceURL = join(urlGenerate(parsed), sourceURL);
  }

  return normalize(sourceURL);
}
exports.computeSourceURL = computeSourceURL;


/***/ }),

/***/ "../../source-map-support/node_modules/source-map/source-map.js":
/*!**********************************************************************!*\
  !*** ../../source-map-support/node_modules/source-map/source-map.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
exports.SourceMapGenerator = __webpack_require__(/*! ./lib/source-map-generator */ "../../source-map-support/node_modules/source-map/lib/source-map-generator.js").SourceMapGenerator;
exports.SourceMapConsumer = __webpack_require__(/*! ./lib/source-map-consumer */ "../../source-map-support/node_modules/source-map/lib/source-map-consumer.js").SourceMapConsumer;
exports.SourceNode = __webpack_require__(/*! ./lib/source-node */ "../../source-map-support/node_modules/source-map/lib/source-node.js").SourceNode;


/***/ }),

/***/ "../../source-map-support/register.js":
/*!********************************************!*\
  !*** ../../source-map-support/register.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

(__webpack_require__(/*! ./ */ "../../source-map-support/source-map-support.js").install)();


/***/ }),

/***/ "../../source-map-support/source-map-support.js":
/*!******************************************************!*\
  !*** ../../source-map-support/source-map-support.js ***!
  \******************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var SourceMapConsumer = (__webpack_require__(/*! source-map */ "../../source-map-support/node_modules/source-map/source-map.js").SourceMapConsumer);
var path = __webpack_require__(/*! path */ "path");

var fs;
try {
  fs = __webpack_require__(/*! fs */ "fs");
  if (!fs.existsSync || !fs.readFileSync) {
    // fs doesn't have all methods we need
    fs = null;
  }
} catch (err) {
  /* nop */
}

var bufferFrom = __webpack_require__(/*! buffer-from */ "../../buffer-from/index.js");

/**
 * Requires a module which is protected against bundler minification.
 *
 * @param {NodeModule} mod
 * @param {string} request
 */
function dynamicRequire(mod, request) {
  return mod.require(request);
}

// Only install once if called multiple times
var errorFormatterInstalled = false;
var uncaughtShimInstalled = false;

// If true, the caches are reset before a stack trace formatting operation
var emptyCacheBetweenOperations = false;

// Supports {browser, node, auto}
var environment = "auto";

// Maps a file path to a string containing the file contents
var fileContentsCache = {};

// Maps a file path to a source map for that file
var sourceMapCache = {};

// Regex for detecting source maps
var reSourceMap = /^data:application\/json[^,]+base64,/;

// Priority list of retrieve handlers
var retrieveFileHandlers = [];
var retrieveMapHandlers = [];

function isInBrowser() {
  if (environment === "browser")
    return true;
  if (environment === "node")
    return false;
  return ((typeof window !== 'undefined') && (typeof XMLHttpRequest === 'function') && !(window.require && window.module && window.process && window.process.type === "renderer"));
}

function hasGlobalProcessEventEmitter() {
  return ((typeof process === 'object') && (process !== null) && (typeof process.on === 'function'));
}

function globalProcessVersion() {
  if ((typeof process === 'object') && (process !== null)) {
    return process.version;
  } else {
    return '';
  }
}

function globalProcessStderr() {
  if ((typeof process === 'object') && (process !== null)) {
    return process.stderr;
  }
}

function globalProcessExit(code) {
  if ((typeof process === 'object') && (process !== null) && (typeof process.exit === 'function')) {
    return process.exit(code);
  }
}

function handlerExec(list) {
  return function(arg) {
    for (var i = 0; i < list.length; i++) {
      var ret = list[i](arg);
      if (ret) {
        return ret;
      }
    }
    return null;
  };
}

var retrieveFile = handlerExec(retrieveFileHandlers);

retrieveFileHandlers.push(function(path) {
  // Trim the path to make sure there is no extra whitespace.
  path = path.trim();
  if (/^file:/.test(path)) {
    // existsSync/readFileSync can't handle file protocol, but once stripped, it works
    path = path.replace(/file:\/\/\/(\w:)?/, function(protocol, drive) {
      return drive ?
        '' : // file:///C:/dir/file -> C:/dir/file
        '/'; // file:///root-dir/file -> /root-dir/file
    });
  }
  if (path in fileContentsCache) {
    return fileContentsCache[path];
  }

  var contents = '';
  try {
    if (!fs) {
      // Use SJAX if we are in the browser
      var xhr = new XMLHttpRequest();
      xhr.open('GET', path, /** async */ false);
      xhr.send(null);
      if (xhr.readyState === 4 && xhr.status === 200) {
        contents = xhr.responseText;
      }
    } else if (fs.existsSync(path)) {
      // Otherwise, use the filesystem
      contents = fs.readFileSync(path, 'utf8');
    }
  } catch (er) {
    /* ignore any errors */
  }

  return fileContentsCache[path] = contents;
});

// Support URLs relative to a directory, but be careful about a protocol prefix
// in case we are in the browser (i.e. directories may start with "http://" or "file:///")
function supportRelativeURL(file, url) {
  if (!file) return url;
  var dir = path.dirname(file);
  var match = /^\w+:\/\/[^\/]*/.exec(dir);
  var protocol = match ? match[0] : '';
  var startPath = dir.slice(protocol.length);
  if (protocol && /^\/\w\:/.test(startPath)) {
    // handle file:///C:/ paths
    protocol += '/';
    return protocol + path.resolve(dir.slice(protocol.length), url).replace(/\\/g, '/');
  }
  return protocol + path.resolve(dir.slice(protocol.length), url);
}

function retrieveSourceMapURL(source) {
  var fileData;

  if (isInBrowser()) {
     try {
       var xhr = new XMLHttpRequest();
       xhr.open('GET', source, false);
       xhr.send(null);
       fileData = xhr.readyState === 4 ? xhr.responseText : null;

       // Support providing a sourceMappingURL via the SourceMap header
       var sourceMapHeader = xhr.getResponseHeader("SourceMap") ||
                             xhr.getResponseHeader("X-SourceMap");
       if (sourceMapHeader) {
         return sourceMapHeader;
       }
     } catch (e) {
     }
  }

  // Get the URL of the source map
  fileData = retrieveFile(source);
  var re = /(?:\/\/[@#][\s]*sourceMappingURL=([^\s'"]+)[\s]*$)|(?:\/\*[@#][\s]*sourceMappingURL=([^\s*'"]+)[\s]*(?:\*\/)[\s]*$)/mg;
  // Keep executing the search to find the *last* sourceMappingURL to avoid
  // picking up sourceMappingURLs from comments, strings, etc.
  var lastMatch, match;
  while (match = re.exec(fileData)) lastMatch = match;
  if (!lastMatch) return null;
  return lastMatch[1];
};

// Can be overridden by the retrieveSourceMap option to install. Takes a
// generated source filename; returns a {map, optional url} object, or null if
// there is no source map.  The map field may be either a string or the parsed
// JSON object (ie, it must be a valid argument to the SourceMapConsumer
// constructor).
var retrieveSourceMap = handlerExec(retrieveMapHandlers);
retrieveMapHandlers.push(function(source) {
  var sourceMappingURL = retrieveSourceMapURL(source);
  if (!sourceMappingURL) return null;

  // Read the contents of the source map
  var sourceMapData;
  if (reSourceMap.test(sourceMappingURL)) {
    // Support source map URL as a data url
    var rawData = sourceMappingURL.slice(sourceMappingURL.indexOf(',') + 1);
    sourceMapData = bufferFrom(rawData, "base64").toString();
    sourceMappingURL = source;
  } else {
    // Support source map URLs relative to the source URL
    sourceMappingURL = supportRelativeURL(source, sourceMappingURL);
    sourceMapData = retrieveFile(sourceMappingURL);
  }

  if (!sourceMapData) {
    return null;
  }

  return {
    url: sourceMappingURL,
    map: sourceMapData
  };
});

function mapSourcePosition(position) {
  var sourceMap = sourceMapCache[position.source];
  if (!sourceMap) {
    // Call the (overrideable) retrieveSourceMap function to get the source map.
    var urlAndMap = retrieveSourceMap(position.source);
    if (urlAndMap) {
      sourceMap = sourceMapCache[position.source] = {
        url: urlAndMap.url,
        map: new SourceMapConsumer(urlAndMap.map)
      };

      // Load all sources stored inline with the source map into the file cache
      // to pretend like they are already loaded. They may not exist on disk.
      if (sourceMap.map.sourcesContent) {
        sourceMap.map.sources.forEach(function(source, i) {
          var contents = sourceMap.map.sourcesContent[i];
          if (contents) {
            var url = supportRelativeURL(sourceMap.url, source);
            fileContentsCache[url] = contents;
          }
        });
      }
    } else {
      sourceMap = sourceMapCache[position.source] = {
        url: null,
        map: null
      };
    }
  }

  // Resolve the source URL relative to the URL of the source map
  if (sourceMap && sourceMap.map && typeof sourceMap.map.originalPositionFor === 'function') {
    var originalPosition = sourceMap.map.originalPositionFor(position);

    // Only return the original position if a matching line was found. If no
    // matching line is found then we return position instead, which will cause
    // the stack trace to print the path and line for the compiled file. It is
    // better to give a precise location in the compiled file than a vague
    // location in the original file.
    if (originalPosition.source !== null) {
      originalPosition.source = supportRelativeURL(
        sourceMap.url, originalPosition.source);
      return originalPosition;
    }
  }

  return position;
}

// Parses code generated by FormatEvalOrigin(), a function inside V8:
// https://code.google.com/p/v8/source/browse/trunk/src/messages.js
function mapEvalOrigin(origin) {
  // Most eval() calls are in this format
  var match = /^eval at ([^(]+) \((.+):(\d+):(\d+)\)$/.exec(origin);
  if (match) {
    var position = mapSourcePosition({
      source: match[2],
      line: +match[3],
      column: match[4] - 1
    });
    return 'eval at ' + match[1] + ' (' + position.source + ':' +
      position.line + ':' + (position.column + 1) + ')';
  }

  // Parse nested eval() calls using recursion
  match = /^eval at ([^(]+) \((.+)\)$/.exec(origin);
  if (match) {
    return 'eval at ' + match[1] + ' (' + mapEvalOrigin(match[2]) + ')';
  }

  // Make sure we still return useful information if we didn't find anything
  return origin;
}

// This is copied almost verbatim from the V8 source code at
// https://code.google.com/p/v8/source/browse/trunk/src/messages.js. The
// implementation of wrapCallSite() used to just forward to the actual source
// code of CallSite.prototype.toString but unfortunately a new release of V8
// did something to the prototype chain and broke the shim. The only fix I
// could find was copy/paste.
function CallSiteToString() {
  var fileName;
  var fileLocation = "";
  if (this.isNative()) {
    fileLocation = "native";
  } else {
    fileName = this.getScriptNameOrSourceURL();
    if (!fileName && this.isEval()) {
      fileLocation = this.getEvalOrigin();
      fileLocation += ", ";  // Expecting source position to follow.
    }

    if (fileName) {
      fileLocation += fileName;
    } else {
      // Source code does not originate from a file and is not native, but we
      // can still get the source position inside the source string, e.g. in
      // an eval string.
      fileLocation += "<anonymous>";
    }
    var lineNumber = this.getLineNumber();
    if (lineNumber != null) {
      fileLocation += ":" + lineNumber;
      var columnNumber = this.getColumnNumber();
      if (columnNumber) {
        fileLocation += ":" + columnNumber;
      }
    }
  }

  var line = "";
  var functionName = this.getFunctionName();
  var addSuffix = true;
  var isConstructor = this.isConstructor();
  var isMethodCall = !(this.isToplevel() || isConstructor);
  if (isMethodCall) {
    var typeName = this.getTypeName();
    // Fixes shim to be backward compatable with Node v0 to v4
    if (typeName === "[object Object]") {
      typeName = "null";
    }
    var methodName = this.getMethodName();
    if (functionName) {
      if (typeName && functionName.indexOf(typeName) != 0) {
        line += typeName + ".";
      }
      line += functionName;
      if (methodName && functionName.indexOf("." + methodName) != functionName.length - methodName.length - 1) {
        line += " [as " + methodName + "]";
      }
    } else {
      line += typeName + "." + (methodName || "<anonymous>");
    }
  } else if (isConstructor) {
    line += "new " + (functionName || "<anonymous>");
  } else if (functionName) {
    line += functionName;
  } else {
    line += fileLocation;
    addSuffix = false;
  }
  if (addSuffix) {
    line += " (" + fileLocation + ")";
  }
  return line;
}

function cloneCallSite(frame) {
  var object = {};
  Object.getOwnPropertyNames(Object.getPrototypeOf(frame)).forEach(function(name) {
    object[name] = /^(?:is|get)/.test(name) ? function() { return frame[name].call(frame); } : frame[name];
  });
  object.toString = CallSiteToString;
  return object;
}

function wrapCallSite(frame, state) {
  // provides interface backward compatibility
  if (state === undefined) {
    state = { nextPosition: null, curPosition: null }
  }
  if(frame.isNative()) {
    state.curPosition = null;
    return frame;
  }

  // Most call sites will return the source file from getFileName(), but code
  // passed to eval() ending in "//# sourceURL=..." will return the source file
  // from getScriptNameOrSourceURL() instead
  var source = frame.getFileName() || frame.getScriptNameOrSourceURL();
  if (source) {
    var line = frame.getLineNumber();
    var column = frame.getColumnNumber() - 1;

    // Fix position in Node where some (internal) code is prepended.
    // See https://github.com/evanw/node-source-map-support/issues/36
    // Header removed in node at ^10.16 || >=11.11.0
    // v11 is not an LTS candidate, we can just test the one version with it.
    // Test node versions for: 10.16-19, 10.20+, 12-19, 20-99, 100+, or 11.11
    var noHeader = /^v(10\.1[6-9]|10\.[2-9][0-9]|10\.[0-9]{3,}|1[2-9]\d*|[2-9]\d|\d{3,}|11\.11)/;
    var headerLength = noHeader.test(globalProcessVersion()) ? 0 : 62;
    if (line === 1 && column > headerLength && !isInBrowser() && !frame.isEval()) {
      column -= headerLength;
    }

    var position = mapSourcePosition({
      source: source,
      line: line,
      column: column
    });
    state.curPosition = position;
    frame = cloneCallSite(frame);
    var originalFunctionName = frame.getFunctionName;
    frame.getFunctionName = function() {
      if (state.nextPosition == null) {
        return originalFunctionName();
      }
      return state.nextPosition.name || originalFunctionName();
    };
    frame.getFileName = function() { return position.source; };
    frame.getLineNumber = function() { return position.line; };
    frame.getColumnNumber = function() { return position.column + 1; };
    frame.getScriptNameOrSourceURL = function() { return position.source; };
    return frame;
  }

  // Code called using eval() needs special handling
  var origin = frame.isEval() && frame.getEvalOrigin();
  if (origin) {
    origin = mapEvalOrigin(origin);
    frame = cloneCallSite(frame);
    frame.getEvalOrigin = function() { return origin; };
    return frame;
  }

  // If we get here then we were unable to change the source position
  return frame;
}

// This function is part of the V8 stack trace API, for more info see:
// https://v8.dev/docs/stack-trace-api
function prepareStackTrace(error, stack) {
  if (emptyCacheBetweenOperations) {
    fileContentsCache = {};
    sourceMapCache = {};
  }

  var name = error.name || 'Error';
  var message = error.message || '';
  var errorString = name + ": " + message;

  var state = { nextPosition: null, curPosition: null };
  var processedStack = [];
  for (var i = stack.length - 1; i >= 0; i--) {
    processedStack.push('\n    at ' + wrapCallSite(stack[i], state));
    state.nextPosition = state.curPosition;
  }
  state.curPosition = state.nextPosition = null;
  return errorString + processedStack.reverse().join('');
}

// Generate position and snippet of original source with pointer
function getErrorSource(error) {
  var match = /\n    at [^(]+ \((.*):(\d+):(\d+)\)/.exec(error.stack);
  if (match) {
    var source = match[1];
    var line = +match[2];
    var column = +match[3];

    // Support the inline sourceContents inside the source map
    var contents = fileContentsCache[source];

    // Support files on disk
    if (!contents && fs && fs.existsSync(source)) {
      try {
        contents = fs.readFileSync(source, 'utf8');
      } catch (er) {
        contents = '';
      }
    }

    // Format the line from the original source code like node does
    if (contents) {
      var code = contents.split(/(?:\r\n|\r|\n)/)[line - 1];
      if (code) {
        return source + ':' + line + '\n' + code + '\n' +
          new Array(column).join(' ') + '^';
      }
    }
  }
  return null;
}

function printErrorAndExit (error) {
  var source = getErrorSource(error);

  // Ensure error is printed synchronously and not truncated
  var stderr = globalProcessStderr();
  if (stderr && stderr._handle && stderr._handle.setBlocking) {
    stderr._handle.setBlocking(true);
  }

  if (source) {
    console.error();
    console.error(source);
  }

  console.error(error.stack);
  globalProcessExit(1);
}

function shimEmitUncaughtException () {
  var origEmit = process.emit;

  process.emit = function (type) {
    if (type === 'uncaughtException') {
      var hasStack = (arguments[1] && arguments[1].stack);
      var hasListeners = (this.listeners(type).length > 0);

      if (hasStack && !hasListeners) {
        return printErrorAndExit(arguments[1]);
      }
    }

    return origEmit.apply(this, arguments);
  };
}

var originalRetrieveFileHandlers = retrieveFileHandlers.slice(0);
var originalRetrieveMapHandlers = retrieveMapHandlers.slice(0);

exports.wrapCallSite = wrapCallSite;
exports.getErrorSource = getErrorSource;
exports.mapSourcePosition = mapSourcePosition;
exports.retrieveSourceMap = retrieveSourceMap;

exports.install = function(options) {
  options = options || {};

  if (options.environment) {
    environment = options.environment;
    if (["node", "browser", "auto"].indexOf(environment) === -1) {
      throw new Error("environment " + environment + " was unknown. Available options are {auto, browser, node}")
    }
  }

  // Allow sources to be found by methods other than reading the files
  // directly from disk.
  if (options.retrieveFile) {
    if (options.overrideRetrieveFile) {
      retrieveFileHandlers.length = 0;
    }

    retrieveFileHandlers.unshift(options.retrieveFile);
  }

  // Allow source maps to be found by methods other than reading the files
  // directly from disk.
  if (options.retrieveSourceMap) {
    if (options.overrideRetrieveSourceMap) {
      retrieveMapHandlers.length = 0;
    }

    retrieveMapHandlers.unshift(options.retrieveSourceMap);
  }

  // Support runtime transpilers that include inline source maps
  if (options.hookRequire && !isInBrowser()) {
    // Use dynamicRequire to avoid including in browser bundles
    var Module = dynamicRequire(module, 'module');
    var $compile = Module.prototype._compile;

    if (!$compile.__sourceMapSupport) {
      Module.prototype._compile = function(content, filename) {
        fileContentsCache[filename] = content;
        sourceMapCache[filename] = undefined;
        return $compile.call(this, content, filename);
      };

      Module.prototype._compile.__sourceMapSupport = true;
    }
  }

  // Configure options
  if (!emptyCacheBetweenOperations) {
    emptyCacheBetweenOperations = 'emptyCacheBetweenOperations' in options ?
      options.emptyCacheBetweenOperations : false;
  }

  // Install the error reformatter
  if (!errorFormatterInstalled) {
    errorFormatterInstalled = true;
    Error.prepareStackTrace = prepareStackTrace;
  }

  if (!uncaughtShimInstalled) {
    var installHandler = 'handleUncaughtExceptions' in options ?
      options.handleUncaughtExceptions : true;

    // Do not override 'uncaughtException' with our own handler in Node.js
    // Worker threads. Workers pass the error to the main thread as an event,
    // rather than printing something to stderr and exiting.
    try {
      // We need to use `dynamicRequire` because `require` on it's own will be optimized by WebPack/Browserify.
      var worker_threads = dynamicRequire(module, 'worker_threads');
      if (worker_threads.isMainThread === false) {
        installHandler = false;
      }
    } catch(e) {}

    // Provide the option to not install the uncaught exception handler. This is
    // to support other uncaught exception handlers (in test frameworks, for
    // example). If this handler is not installed and there are no other uncaught
    // exception handlers, uncaught exceptions will be caught by node's built-in
    // exception handler and the process will still be terminated. However, the
    // generated JavaScript code will be shown above the stack trace instead of
    // the original source code.
    if (installHandler && hasGlobalProcessEventEmitter()) {
      uncaughtShimInstalled = true;
      shimEmitUncaughtException();
    }
  }
};

exports.resetRetrieveHandlers = function() {
  retrieveFileHandlers.length = 0;
  retrieveMapHandlers.length = 0;

  retrieveFileHandlers = originalRetrieveFileHandlers.slice(0);
  retrieveMapHandlers = originalRetrieveMapHandlers.slice(0);

  retrieveSourceMap = handlerExec(retrieveMapHandlers);
  retrieveFile = handlerExec(retrieveFileHandlers);
}


/***/ }),

/***/ "../../uuid/dist/esm-node/index.js":
/*!*****************************************!*\
  !*** ../../uuid/dist/esm-node/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v1": () => (/* reexport safe */ _v1_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "v3": () => (/* reexport safe */ _v3_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "v4": () => (/* reexport safe */ _v4_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "v5": () => (/* reexport safe */ _v5_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "NIL": () => (/* reexport safe */ _nil_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "version": () => (/* reexport safe */ _version_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "validate": () => (/* reexport safe */ _validate_js__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "stringify": () => (/* reexport safe */ _stringify_js__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "parse": () => (/* reexport safe */ _parse_js__WEBPACK_IMPORTED_MODULE_8__["default"])
/* harmony export */ });
/* harmony import */ var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v1.js */ "../../uuid/dist/esm-node/v1.js");
/* harmony import */ var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v3.js */ "../../uuid/dist/esm-node/v3.js");
/* harmony import */ var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v4.js */ "../../uuid/dist/esm-node/v4.js");
/* harmony import */ var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v5.js */ "../../uuid/dist/esm-node/v5.js");
/* harmony import */ var _nil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nil.js */ "../../uuid/dist/esm-node/nil.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./version.js */ "../../uuid/dist/esm-node/version.js");
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validate.js */ "../../uuid/dist/esm-node/validate.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stringify.js */ "../../uuid/dist/esm-node/stringify.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parse.js */ "../../uuid/dist/esm-node/parse.js");










/***/ }),

/***/ "../../uuid/dist/esm-node/md5.js":
/*!***************************************!*\
  !*** ../../uuid/dist/esm-node/md5.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);


function md5(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === 'string') {
    bytes = Buffer.from(bytes, 'utf8');
  }

  return crypto__WEBPACK_IMPORTED_MODULE_0___default().createHash('md5').update(bytes).digest();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (md5);

/***/ }),

/***/ "../../uuid/dist/esm-node/nil.js":
/*!***************************************!*\
  !*** ../../uuid/dist/esm-node/nil.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('00000000-0000-0000-0000-000000000000');

/***/ }),

/***/ "../../uuid/dist/esm-node/parse.js":
/*!*****************************************!*\
  !*** ../../uuid/dist/esm-node/parse.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "../../uuid/dist/esm-node/validate.js");


function parse(uuid) {
  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  let v;
  const arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parse);

/***/ }),

/***/ "../../uuid/dist/esm-node/regex.js":
/*!*****************************************!*\
  !*** ../../uuid/dist/esm-node/regex.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "../../uuid/dist/esm-node/rng.js":
/*!***************************************!*\
  !*** ../../uuid/dist/esm-node/rng.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);

const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

let poolPtr = rnds8Pool.length;
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    crypto__WEBPACK_IMPORTED_MODULE_0___default().randomFillSync(rnds8Pool);
    poolPtr = 0;
  }

  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}

/***/ }),

/***/ "../../uuid/dist/esm-node/sha1.js":
/*!****************************************!*\
  !*** ../../uuid/dist/esm-node/sha1.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);


function sha1(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === 'string') {
    bytes = Buffer.from(bytes, 'utf8');
  }

  return crypto__WEBPACK_IMPORTED_MODULE_0___default().createHash('sha1').update(bytes).digest();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sha1);

/***/ }),

/***/ "../../uuid/dist/esm-node/stringify.js":
/*!*********************************************!*\
  !*** ../../uuid/dist/esm-node/stringify.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "../../uuid/dist/esm-node/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "../../uuid/dist/esm-node/v1.js":
/*!**************************************!*\
  !*** ../../uuid/dist/esm-node/v1.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "../../uuid/dist/esm-node/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "../../uuid/dist/esm-node/stringify.js");

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

let _nodeId;

let _clockseq; // Previous uuid creation time


let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  let i = buf && offset || 0;
  const b = buf || new Array(16);
  options = options || {};
  let node = options.node || _nodeId;
  let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (let n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(b);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v1);

/***/ }),

/***/ "../../uuid/dist/esm-node/v3.js":
/*!**************************************!*\
  !*** ../../uuid/dist/esm-node/v3.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "../../uuid/dist/esm-node/v35.js");
/* harmony import */ var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./md5.js */ "../../uuid/dist/esm-node/md5.js");


const v3 = (0,_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v3);

/***/ }),

/***/ "../../uuid/dist/esm-node/v35.js":
/*!***************************************!*\
  !*** ../../uuid/dist/esm-node/v35.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DNS": () => (/* binding */ DNS),
/* harmony export */   "URL": () => (/* binding */ URL),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "../../uuid/dist/esm-node/stringify.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse.js */ "../../uuid/dist/esm-node/parse.js");



function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  const bytes = [];

  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = (0,_parse_js__WEBPACK_IMPORTED_MODULE_0__["default"])(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}

/***/ }),

/***/ "../../uuid/dist/esm-node/v4.js":
/*!**************************************!*\
  !*** ../../uuid/dist/esm-node/v4.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "../../uuid/dist/esm-node/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "../../uuid/dist/esm-node/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "../../uuid/dist/esm-node/v5.js":
/*!**************************************!*\
  !*** ../../uuid/dist/esm-node/v5.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "../../uuid/dist/esm-node/v35.js");
/* harmony import */ var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sha1.js */ "../../uuid/dist/esm-node/sha1.js");


const v5 = (0,_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v5);

/***/ }),

/***/ "../../uuid/dist/esm-node/validate.js":
/*!********************************************!*\
  !*** ../../uuid/dist/esm-node/validate.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "../../uuid/dist/esm-node/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "../../uuid/dist/esm-node/version.js":
/*!*******************************************!*\
  !*** ../../uuid/dist/esm-node/version.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "../../uuid/dist/esm-node/validate.js");


function version(uuid) {
  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.substr(14, 1), 16);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (version);

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("aws-sdk");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************************************!*\
  !*** ../../../src/lambdas/Course/index.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCourse": () => (/* binding */ createCourse)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common */ "../../../src/common/index.js");
/* harmony import */ var _services_course__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/course */ "../../../src/services/course.js");



const createCourse = async event => {
  try {
    const request = JSON.parse(event.body);
    console.log(request);
    const newCourse = await _services_course__WEBPACK_IMPORTED_MODULE_2__["default"].createCourse(request);
    return _common__WEBPACK_IMPORTED_MODULE_1__["default"]._200({
      data: newCourse
    });
  } catch (error) {
    return _common__WEBPACK_IMPORTED_MODULE_1__["default"]._400({
      error: error.message
    });
  }
};
})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=index.js.map