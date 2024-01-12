(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["TrezorConnect"] = factory();
	else
		root["TrezorConnect"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 2991:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*--------------------------------------------------------------------------

@sinclair/typebox/errors

The MIT License (MIT)

Copyright (c) 2017-2023 Haydn Paterson (sinclair) <haydn.developer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Errors = exports.ValueErrorIterator = exports.EscapeKey = exports.ValueErrorsUnknownTypeError = exports.ValueErrorType = void 0;
const guard_1 = __webpack_require__(9860);
const system_1 = __webpack_require__(782);
const deref_1 = __webpack_require__(6595);
const hash_1 = __webpack_require__(9122);
const Types = __webpack_require__(3017);
// --------------------------------------------------------------------------
// ValueErrorType
// --------------------------------------------------------------------------
var ValueErrorType;
(function (ValueErrorType) {
    ValueErrorType[ValueErrorType["ArrayContains"] = 0] = "ArrayContains";
    ValueErrorType[ValueErrorType["ArrayMaxContains"] = 1] = "ArrayMaxContains";
    ValueErrorType[ValueErrorType["ArrayMaxItems"] = 2] = "ArrayMaxItems";
    ValueErrorType[ValueErrorType["ArrayMinContains"] = 3] = "ArrayMinContains";
    ValueErrorType[ValueErrorType["ArrayMinItems"] = 4] = "ArrayMinItems";
    ValueErrorType[ValueErrorType["ArrayUniqueItems"] = 5] = "ArrayUniqueItems";
    ValueErrorType[ValueErrorType["Array"] = 6] = "Array";
    ValueErrorType[ValueErrorType["AsyncIterator"] = 7] = "AsyncIterator";
    ValueErrorType[ValueErrorType["BigIntExclusiveMaximum"] = 8] = "BigIntExclusiveMaximum";
    ValueErrorType[ValueErrorType["BigIntExclusiveMinimum"] = 9] = "BigIntExclusiveMinimum";
    ValueErrorType[ValueErrorType["BigIntMaximum"] = 10] = "BigIntMaximum";
    ValueErrorType[ValueErrorType["BigIntMinimum"] = 11] = "BigIntMinimum";
    ValueErrorType[ValueErrorType["BigIntMultipleOf"] = 12] = "BigIntMultipleOf";
    ValueErrorType[ValueErrorType["BigInt"] = 13] = "BigInt";
    ValueErrorType[ValueErrorType["Boolean"] = 14] = "Boolean";
    ValueErrorType[ValueErrorType["DateExclusiveMaximumTimestamp"] = 15] = "DateExclusiveMaximumTimestamp";
    ValueErrorType[ValueErrorType["DateExclusiveMinimumTimestamp"] = 16] = "DateExclusiveMinimumTimestamp";
    ValueErrorType[ValueErrorType["DateMaximumTimestamp"] = 17] = "DateMaximumTimestamp";
    ValueErrorType[ValueErrorType["DateMinimumTimestamp"] = 18] = "DateMinimumTimestamp";
    ValueErrorType[ValueErrorType["DateMultipleOfTimestamp"] = 19] = "DateMultipleOfTimestamp";
    ValueErrorType[ValueErrorType["Date"] = 20] = "Date";
    ValueErrorType[ValueErrorType["Function"] = 21] = "Function";
    ValueErrorType[ValueErrorType["IntegerExclusiveMaximum"] = 22] = "IntegerExclusiveMaximum";
    ValueErrorType[ValueErrorType["IntegerExclusiveMinimum"] = 23] = "IntegerExclusiveMinimum";
    ValueErrorType[ValueErrorType["IntegerMaximum"] = 24] = "IntegerMaximum";
    ValueErrorType[ValueErrorType["IntegerMinimum"] = 25] = "IntegerMinimum";
    ValueErrorType[ValueErrorType["IntegerMultipleOf"] = 26] = "IntegerMultipleOf";
    ValueErrorType[ValueErrorType["Integer"] = 27] = "Integer";
    ValueErrorType[ValueErrorType["IntersectUnevaluatedProperties"] = 28] = "IntersectUnevaluatedProperties";
    ValueErrorType[ValueErrorType["Intersect"] = 29] = "Intersect";
    ValueErrorType[ValueErrorType["Iterator"] = 30] = "Iterator";
    ValueErrorType[ValueErrorType["Kind"] = 31] = "Kind";
    ValueErrorType[ValueErrorType["Literal"] = 32] = "Literal";
    ValueErrorType[ValueErrorType["Never"] = 33] = "Never";
    ValueErrorType[ValueErrorType["Not"] = 34] = "Not";
    ValueErrorType[ValueErrorType["Null"] = 35] = "Null";
    ValueErrorType[ValueErrorType["NumberExclusiveMaximum"] = 36] = "NumberExclusiveMaximum";
    ValueErrorType[ValueErrorType["NumberExclusiveMinimum"] = 37] = "NumberExclusiveMinimum";
    ValueErrorType[ValueErrorType["NumberMaximum"] = 38] = "NumberMaximum";
    ValueErrorType[ValueErrorType["NumberMinimum"] = 39] = "NumberMinimum";
    ValueErrorType[ValueErrorType["NumberMultipleOf"] = 40] = "NumberMultipleOf";
    ValueErrorType[ValueErrorType["Number"] = 41] = "Number";
    ValueErrorType[ValueErrorType["ObjectAdditionalProperties"] = 42] = "ObjectAdditionalProperties";
    ValueErrorType[ValueErrorType["ObjectMaxProperties"] = 43] = "ObjectMaxProperties";
    ValueErrorType[ValueErrorType["ObjectMinProperties"] = 44] = "ObjectMinProperties";
    ValueErrorType[ValueErrorType["ObjectRequiredProperty"] = 45] = "ObjectRequiredProperty";
    ValueErrorType[ValueErrorType["Object"] = 46] = "Object";
    ValueErrorType[ValueErrorType["Promise"] = 47] = "Promise";
    ValueErrorType[ValueErrorType["StringFormatUnknown"] = 48] = "StringFormatUnknown";
    ValueErrorType[ValueErrorType["StringFormat"] = 49] = "StringFormat";
    ValueErrorType[ValueErrorType["StringMaxLength"] = 50] = "StringMaxLength";
    ValueErrorType[ValueErrorType["StringMinLength"] = 51] = "StringMinLength";
    ValueErrorType[ValueErrorType["StringPattern"] = 52] = "StringPattern";
    ValueErrorType[ValueErrorType["String"] = 53] = "String";
    ValueErrorType[ValueErrorType["Symbol"] = 54] = "Symbol";
    ValueErrorType[ValueErrorType["TupleLength"] = 55] = "TupleLength";
    ValueErrorType[ValueErrorType["Tuple"] = 56] = "Tuple";
    ValueErrorType[ValueErrorType["Uint8ArrayMaxByteLength"] = 57] = "Uint8ArrayMaxByteLength";
    ValueErrorType[ValueErrorType["Uint8ArrayMinByteLength"] = 58] = "Uint8ArrayMinByteLength";
    ValueErrorType[ValueErrorType["Uint8Array"] = 59] = "Uint8Array";
    ValueErrorType[ValueErrorType["Undefined"] = 60] = "Undefined";
    ValueErrorType[ValueErrorType["Union"] = 61] = "Union";
    ValueErrorType[ValueErrorType["Void"] = 62] = "Void";
})(ValueErrorType || (exports.ValueErrorType = ValueErrorType = {}));
// --------------------------------------------------------------------------
// ValueErrors
// --------------------------------------------------------------------------
class ValueErrorsUnknownTypeError extends Types.TypeBoxError {
    constructor(schema) {
        super('Unknown type');
        this.schema = schema;
    }
}
exports.ValueErrorsUnknownTypeError = ValueErrorsUnknownTypeError;
// --------------------------------------------------------------------------
// EscapeKey
// --------------------------------------------------------------------------
function EscapeKey(key) {
    return key.replace(/~/g, '~0').replace(/\//g, '~1'); // RFC6901 Path
}
exports.EscapeKey = EscapeKey;
// --------------------------------------------------------------------------
// Guards
// --------------------------------------------------------------------------
function IsDefined(value) {
    return value !== undefined;
}
// --------------------------------------------------------------------------
// ValueErrorIterator
// --------------------------------------------------------------------------
class ValueErrorIterator {
    constructor(iterator) {
        this.iterator = iterator;
    }
    [Symbol.iterator]() {
        return this.iterator;
    }
    /** Returns the first value error or undefined if no errors */
    First() {
        const next = this.iterator.next();
        return next.done ? undefined : next.value;
    }
}
exports.ValueErrorIterator = ValueErrorIterator;
// --------------------------------------------------------------------------
// Create
// --------------------------------------------------------------------------
function Create(type, schema, path, value) {
    return { type, schema, path, value, message: system_1.TypeSystemErrorFunction.Get()(schema, type) };
}
// --------------------------------------------------------------------------
// Types
// --------------------------------------------------------------------------
function* TAny(schema, references, path, value) { }
function* TArray(schema, references, path, value) {
    if (!(0, guard_1.IsArray)(value)) {
        return yield Create(ValueErrorType.Array, schema, path, value);
    }
    if (IsDefined(schema.minItems) && !(value.length >= schema.minItems)) {
        yield Create(ValueErrorType.ArrayMinItems, schema, path, value);
    }
    if (IsDefined(schema.maxItems) && !(value.length <= schema.maxItems)) {
        yield Create(ValueErrorType.ArrayMaxItems, schema, path, value);
    }
    for (let i = 0; i < value.length; i++) {
        yield* Visit(schema.items, references, `${path}/${i}`, value[i]);
    }
    // prettier-ignore
    if (schema.uniqueItems === true && !((function () { const set = new Set(); for (const element of value) {
        const hashed = (0, hash_1.Hash)(element);
        if (set.has(hashed)) {
            return false;
        }
        else {
            set.add(hashed);
        }
    } return true; })())) {
        yield Create(ValueErrorType.ArrayUniqueItems, schema, path, value);
    }
    // contains
    if (!(IsDefined(schema.contains) || IsDefined(schema.minContains) || IsDefined(schema.maxContains))) {
        return;
    }
    const containsSchema = IsDefined(schema.contains) ? schema.contains : Types.Type.Never();
    const containsCount = value.reduce((acc, value, index) => (Visit(containsSchema, references, `${path}${index}`, value).next().done === true ? acc + 1 : acc), 0);
    if (containsCount === 0) {
        yield Create(ValueErrorType.ArrayContains, schema, path, value);
    }
    if ((0, guard_1.IsNumber)(schema.minContains) && containsCount < schema.minContains) {
        yield Create(ValueErrorType.ArrayMinContains, schema, path, value);
    }
    if ((0, guard_1.IsNumber)(schema.maxContains) && containsCount > schema.maxContains) {
        yield Create(ValueErrorType.ArrayMaxContains, schema, path, value);
    }
}
function* TAsyncIterator(schema, references, path, value) {
    if (!(0, guard_1.IsAsyncIterator)(value))
        yield Create(ValueErrorType.AsyncIterator, schema, path, value);
}
function* TBigInt(schema, references, path, value) {
    if (!(0, guard_1.IsBigInt)(value))
        return yield Create(ValueErrorType.BigInt, schema, path, value);
    if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
        yield Create(ValueErrorType.BigIntExclusiveMaximum, schema, path, value);
    }
    if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
        yield Create(ValueErrorType.BigIntExclusiveMinimum, schema, path, value);
    }
    if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
        yield Create(ValueErrorType.BigIntMaximum, schema, path, value);
    }
    if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
        yield Create(ValueErrorType.BigIntMinimum, schema, path, value);
    }
    if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === BigInt(0))) {
        yield Create(ValueErrorType.BigIntMultipleOf, schema, path, value);
    }
}
function* TBoolean(schema, references, path, value) {
    if (!(0, guard_1.IsBoolean)(value))
        yield Create(ValueErrorType.Boolean, schema, path, value);
}
function* TConstructor(schema, references, path, value) {
    yield* Visit(schema.returns, references, path, value.prototype);
}
function* TDate(schema, references, path, value) {
    if (!(0, guard_1.IsDate)(value))
        return yield Create(ValueErrorType.Date, schema, path, value);
    if (IsDefined(schema.exclusiveMaximumTimestamp) && !(value.getTime() < schema.exclusiveMaximumTimestamp)) {
        yield Create(ValueErrorType.DateExclusiveMaximumTimestamp, schema, path, value);
    }
    if (IsDefined(schema.exclusiveMinimumTimestamp) && !(value.getTime() > schema.exclusiveMinimumTimestamp)) {
        yield Create(ValueErrorType.DateExclusiveMinimumTimestamp, schema, path, value);
    }
    if (IsDefined(schema.maximumTimestamp) && !(value.getTime() <= schema.maximumTimestamp)) {
        yield Create(ValueErrorType.DateMaximumTimestamp, schema, path, value);
    }
    if (IsDefined(schema.minimumTimestamp) && !(value.getTime() >= schema.minimumTimestamp)) {
        yield Create(ValueErrorType.DateMinimumTimestamp, schema, path, value);
    }
    if (IsDefined(schema.multipleOfTimestamp) && !(value.getTime() % schema.multipleOfTimestamp === 0)) {
        yield Create(ValueErrorType.DateMultipleOfTimestamp, schema, path, value);
    }
}
function* TFunction(schema, references, path, value) {
    if (!(0, guard_1.IsFunction)(value))
        yield Create(ValueErrorType.Function, schema, path, value);
}
function* TInteger(schema, references, path, value) {
    if (!(0, guard_1.IsInteger)(value))
        return yield Create(ValueErrorType.Integer, schema, path, value);
    if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
        yield Create(ValueErrorType.IntegerExclusiveMaximum, schema, path, value);
    }
    if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
        yield Create(ValueErrorType.IntegerExclusiveMinimum, schema, path, value);
    }
    if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
        yield Create(ValueErrorType.IntegerMaximum, schema, path, value);
    }
    if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
        yield Create(ValueErrorType.IntegerMinimum, schema, path, value);
    }
    if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
        yield Create(ValueErrorType.IntegerMultipleOf, schema, path, value);
    }
}
function* TIntersect(schema, references, path, value) {
    for (const inner of schema.allOf) {
        const next = Visit(inner, references, path, value).next();
        if (!next.done) {
            yield Create(ValueErrorType.Intersect, schema, path, value);
            yield next.value;
        }
    }
    if (schema.unevaluatedProperties === false) {
        const keyCheck = new RegExp(Types.KeyResolver.ResolvePattern(schema));
        for (const valueKey of Object.getOwnPropertyNames(value)) {
            if (!keyCheck.test(valueKey)) {
                yield Create(ValueErrorType.IntersectUnevaluatedProperties, schema, `${path}/${valueKey}`, value);
            }
        }
    }
    if (typeof schema.unevaluatedProperties === 'object') {
        const keyCheck = new RegExp(Types.KeyResolver.ResolvePattern(schema));
        for (const valueKey of Object.getOwnPropertyNames(value)) {
            if (!keyCheck.test(valueKey)) {
                const next = Visit(schema.unevaluatedProperties, references, `${path}/${valueKey}`, value[valueKey]).next();
                if (!next.done)
                    yield next.value; // yield interior
            }
        }
    }
}
function* TIterator(schema, references, path, value) {
    if (!(0, guard_1.IsIterator)(value))
        yield Create(ValueErrorType.Iterator, schema, path, value);
}
function* TLiteral(schema, references, path, value) {
    if (!(value === schema.const))
        yield Create(ValueErrorType.Literal, schema, path, value);
}
function* TNever(schema, references, path, value) {
    yield Create(ValueErrorType.Never, schema, path, value);
}
function* TNot(schema, references, path, value) {
    if (Visit(schema.not, references, path, value).next().done === true)
        yield Create(ValueErrorType.Not, schema, path, value);
}
function* TNull(schema, references, path, value) {
    if (!(0, guard_1.IsNull)(value))
        yield Create(ValueErrorType.Null, schema, path, value);
}
function* TNumber(schema, references, path, value) {
    if (!system_1.TypeSystemPolicy.IsNumberLike(value))
        return yield Create(ValueErrorType.Number, schema, path, value);
    if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
        yield Create(ValueErrorType.NumberExclusiveMaximum, schema, path, value);
    }
    if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
        yield Create(ValueErrorType.NumberExclusiveMinimum, schema, path, value);
    }
    if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
        yield Create(ValueErrorType.NumberMaximum, schema, path, value);
    }
    if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
        yield Create(ValueErrorType.NumberMinimum, schema, path, value);
    }
    if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
        yield Create(ValueErrorType.NumberMultipleOf, schema, path, value);
    }
}
function* TObject(schema, references, path, value) {
    if (!system_1.TypeSystemPolicy.IsObjectLike(value))
        return yield Create(ValueErrorType.Object, schema, path, value);
    if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
        yield Create(ValueErrorType.ObjectMinProperties, schema, path, value);
    }
    if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
        yield Create(ValueErrorType.ObjectMaxProperties, schema, path, value);
    }
    const requiredKeys = Array.isArray(schema.required) ? schema.required : [];
    const knownKeys = Object.getOwnPropertyNames(schema.properties);
    const unknownKeys = Object.getOwnPropertyNames(value);
    for (const requiredKey of requiredKeys) {
        if (unknownKeys.includes(requiredKey))
            continue;
        yield Create(ValueErrorType.ObjectRequiredProperty, schema.properties[requiredKey], `${path}/${EscapeKey(requiredKey)}`, undefined);
    }
    if (schema.additionalProperties === false) {
        for (const valueKey of unknownKeys) {
            if (!knownKeys.includes(valueKey)) {
                yield Create(ValueErrorType.ObjectAdditionalProperties, schema, `${path}/${EscapeKey(valueKey)}`, value[valueKey]);
            }
        }
    }
    if (typeof schema.additionalProperties === 'object') {
        for (const valueKey of unknownKeys) {
            if (knownKeys.includes(valueKey))
                continue;
            yield* Visit(schema.additionalProperties, references, `${path}/${EscapeKey(valueKey)}`, value[valueKey]);
        }
    }
    for (const knownKey of knownKeys) {
        const property = schema.properties[knownKey];
        if (schema.required && schema.required.includes(knownKey)) {
            yield* Visit(property, references, `${path}/${EscapeKey(knownKey)}`, value[knownKey]);
            if (Types.ExtendsUndefined.Check(schema) && !(knownKey in value)) {
                yield Create(ValueErrorType.ObjectRequiredProperty, property, `${path}/${EscapeKey(knownKey)}`, undefined);
            }
        }
        else {
            if (system_1.TypeSystemPolicy.IsExactOptionalProperty(value, knownKey)) {
                yield* Visit(property, references, `${path}/${EscapeKey(knownKey)}`, value[knownKey]);
            }
        }
    }
}
function* TPromise(schema, references, path, value) {
    if (!(0, guard_1.IsPromise)(value))
        yield Create(ValueErrorType.Promise, schema, path, value);
}
function* TRecord(schema, references, path, value) {
    if (!system_1.TypeSystemPolicy.IsRecordLike(value))
        return yield Create(ValueErrorType.Object, schema, path, value);
    if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
        yield Create(ValueErrorType.ObjectMinProperties, schema, path, value);
    }
    if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
        yield Create(ValueErrorType.ObjectMaxProperties, schema, path, value);
    }
    const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
    const regex = new RegExp(patternKey);
    for (const [propertyKey, propertyValue] of Object.entries(value)) {
        if (regex.test(propertyKey))
            yield* Visit(patternSchema, references, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
    }
    if (typeof schema.additionalProperties === 'object') {
        for (const [propertyKey, propertyValue] of Object.entries(value)) {
            if (!regex.test(propertyKey))
                yield* Visit(schema.additionalProperties, references, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
        }
    }
    if (schema.additionalProperties === false) {
        for (const [propertyKey, propertyValue] of Object.entries(value)) {
            if (regex.test(propertyKey))
                continue;
            return yield Create(ValueErrorType.ObjectAdditionalProperties, schema, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
        }
    }
}
function* TRef(schema, references, path, value) {
    yield* Visit((0, deref_1.Deref)(schema, references), references, path, value);
}
function* TString(schema, references, path, value) {
    if (!(0, guard_1.IsString)(value))
        return yield Create(ValueErrorType.String, schema, path, value);
    if (IsDefined(schema.minLength) && !(value.length >= schema.minLength)) {
        yield Create(ValueErrorType.StringMinLength, schema, path, value);
    }
    if (IsDefined(schema.maxLength) && !(value.length <= schema.maxLength)) {
        yield Create(ValueErrorType.StringMaxLength, schema, path, value);
    }
    if ((0, guard_1.IsString)(schema.pattern)) {
        const regex = new RegExp(schema.pattern);
        if (!regex.test(value)) {
            yield Create(ValueErrorType.StringPattern, schema, path, value);
        }
    }
    if ((0, guard_1.IsString)(schema.format)) {
        if (!Types.FormatRegistry.Has(schema.format)) {
            yield Create(ValueErrorType.StringFormatUnknown, schema, path, value);
        }
        else {
            const format = Types.FormatRegistry.Get(schema.format);
            if (!format(value)) {
                yield Create(ValueErrorType.StringFormat, schema, path, value);
            }
        }
    }
}
function* TSymbol(schema, references, path, value) {
    if (!(0, guard_1.IsSymbol)(value))
        yield Create(ValueErrorType.Symbol, schema, path, value);
}
function* TTemplateLiteral(schema, references, path, value) {
    if (!(0, guard_1.IsString)(value))
        return yield Create(ValueErrorType.String, schema, path, value);
    const regex = new RegExp(schema.pattern);
    if (!regex.test(value)) {
        yield Create(ValueErrorType.StringPattern, schema, path, value);
    }
}
function* TThis(schema, references, path, value) {
    yield* Visit((0, deref_1.Deref)(schema, references), references, path, value);
}
function* TTuple(schema, references, path, value) {
    if (!(0, guard_1.IsArray)(value))
        return yield Create(ValueErrorType.Tuple, schema, path, value);
    if (schema.items === undefined && !(value.length === 0)) {
        return yield Create(ValueErrorType.TupleLength, schema, path, value);
    }
    if (!(value.length === schema.maxItems)) {
        return yield Create(ValueErrorType.TupleLength, schema, path, value);
    }
    if (!schema.items) {
        return;
    }
    for (let i = 0; i < schema.items.length; i++) {
        yield* Visit(schema.items[i], references, `${path}/${i}`, value[i]);
    }
}
function* TUndefined(schema, references, path, value) {
    if (!(0, guard_1.IsUndefined)(value))
        yield Create(ValueErrorType.Undefined, schema, path, value);
}
function* TUnion(schema, references, path, value) {
    let count = 0;
    for (const subschema of schema.anyOf) {
        const errors = [...Visit(subschema, references, path, value)];
        if (errors.length === 0)
            return; // matched
        count += errors.length;
    }
    if (count > 0) {
        yield Create(ValueErrorType.Union, schema, path, value);
    }
}
function* TUint8Array(schema, references, path, value) {
    if (!(0, guard_1.IsUint8Array)(value))
        return yield Create(ValueErrorType.Uint8Array, schema, path, value);
    if (IsDefined(schema.maxByteLength) && !(value.length <= schema.maxByteLength)) {
        yield Create(ValueErrorType.Uint8ArrayMaxByteLength, schema, path, value);
    }
    if (IsDefined(schema.minByteLength) && !(value.length >= schema.minByteLength)) {
        yield Create(ValueErrorType.Uint8ArrayMinByteLength, schema, path, value);
    }
}
function* TUnknown(schema, references, path, value) { }
function* TVoid(schema, references, path, value) {
    if (!system_1.TypeSystemPolicy.IsVoidLike(value))
        yield Create(ValueErrorType.Void, schema, path, value);
}
function* TKind(schema, references, path, value) {
    const check = Types.TypeRegistry.Get(schema[Types.Kind]);
    if (!check(schema, value))
        yield Create(ValueErrorType.Kind, schema, path, value);
}
function* Visit(schema, references, path, value) {
    const references_ = IsDefined(schema.$id) ? [...references, schema] : references;
    const schema_ = schema;
    switch (schema_[Types.Kind]) {
        case 'Any':
            return yield* TAny(schema_, references_, path, value);
        case 'Array':
            return yield* TArray(schema_, references_, path, value);
        case 'AsyncIterator':
            return yield* TAsyncIterator(schema_, references_, path, value);
        case 'BigInt':
            return yield* TBigInt(schema_, references_, path, value);
        case 'Boolean':
            return yield* TBoolean(schema_, references_, path, value);
        case 'Constructor':
            return yield* TConstructor(schema_, references_, path, value);
        case 'Date':
            return yield* TDate(schema_, references_, path, value);
        case 'Function':
            return yield* TFunction(schema_, references_, path, value);
        case 'Integer':
            return yield* TInteger(schema_, references_, path, value);
        case 'Intersect':
            return yield* TIntersect(schema_, references_, path, value);
        case 'Iterator':
            return yield* TIterator(schema_, references_, path, value);
        case 'Literal':
            return yield* TLiteral(schema_, references_, path, value);
        case 'Never':
            return yield* TNever(schema_, references_, path, value);
        case 'Not':
            return yield* TNot(schema_, references_, path, value);
        case 'Null':
            return yield* TNull(schema_, references_, path, value);
        case 'Number':
            return yield* TNumber(schema_, references_, path, value);
        case 'Object':
            return yield* TObject(schema_, references_, path, value);
        case 'Promise':
            return yield* TPromise(schema_, references_, path, value);
        case 'Record':
            return yield* TRecord(schema_, references_, path, value);
        case 'Ref':
            return yield* TRef(schema_, references_, path, value);
        case 'String':
            return yield* TString(schema_, references_, path, value);
        case 'Symbol':
            return yield* TSymbol(schema_, references_, path, value);
        case 'TemplateLiteral':
            return yield* TTemplateLiteral(schema_, references_, path, value);
        case 'This':
            return yield* TThis(schema_, references_, path, value);
        case 'Tuple':
            return yield* TTuple(schema_, references_, path, value);
        case 'Undefined':
            return yield* TUndefined(schema_, references_, path, value);
        case 'Union':
            return yield* TUnion(schema_, references_, path, value);
        case 'Uint8Array':
            return yield* TUint8Array(schema_, references_, path, value);
        case 'Unknown':
            return yield* TUnknown(schema_, references_, path, value);
        case 'Void':
            return yield* TVoid(schema_, references_, path, value);
        default:
            if (!Types.TypeRegistry.Has(schema_[Types.Kind]))
                throw new ValueErrorsUnknownTypeError(schema);
            return yield* TKind(schema_, references_, path, value);
    }
}
/** Returns an iterator for each error in this value. */
function Errors(...args) {
    const iterator = args.length === 3 ? Visit(args[0], args[1], '', args[2]) : Visit(args[0], [], '', args[1]);
    return new ValueErrorIterator(iterator);
}
exports.Errors = Errors;


/***/ }),

/***/ 8056:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*--------------------------------------------------------------------------

@sinclair/typebox/errors

The MIT License (MIT)

Copyright (c) 2017-2023 Haydn Paterson (sinclair) <haydn.developer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---------------------------------------------------------------------------*/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(2991), exports);


/***/ }),

/***/ 6478:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*--------------------------------------------------------------------------

@sinclair/typebox/system

The MIT License (MIT)

Copyright (c) 2017-2023 Haydn Paterson (sinclair) <haydn.developer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---------------------------------------------------------------------------*/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValueErrorType = void 0;
var errors_1 = __webpack_require__(2991);
Object.defineProperty(exports, "ValueErrorType", ({ enumerable: true, get: function () { return errors_1.ValueErrorType; } }));
__exportStar(__webpack_require__(782), exports);


/***/ }),

/***/ 782:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*--------------------------------------------------------------------------

@sinclair/typebox/system

The MIT License (MIT)

Copyright (c) 2017-2023 Haydn Paterson (sinclair) <haydn.developer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultErrorFunction = exports.TypeSystemPolicy = exports.TypeSystemErrorFunction = exports.TypeSystem = exports.TypeSystemDuplicateFormat = exports.TypeSystemDuplicateTypeKind = void 0;
const guard_1 = __webpack_require__(9860);
const errors_1 = __webpack_require__(2991);
const Types = __webpack_require__(3017);
// --------------------------------------------------------------------------
// Errors
// --------------------------------------------------------------------------
class TypeSystemDuplicateTypeKind extends Types.TypeBoxError {
    constructor(kind) {
        super(`Duplicate type kind '${kind}' detected`);
    }
}
exports.TypeSystemDuplicateTypeKind = TypeSystemDuplicateTypeKind;
class TypeSystemDuplicateFormat extends Types.TypeBoxError {
    constructor(kind) {
        super(`Duplicate string format '${kind}' detected`);
    }
}
exports.TypeSystemDuplicateFormat = TypeSystemDuplicateFormat;
// -------------------------------------------------------------------------------------------
// TypeSystem
// -------------------------------------------------------------------------------------------
/** Creates user defined types and formats and provides overrides for value checking behaviours */
var TypeSystem;
(function (TypeSystem) {
    /** Creates a new type */
    function Type(kind, check) {
        if (Types.TypeRegistry.Has(kind))
            throw new TypeSystemDuplicateTypeKind(kind);
        Types.TypeRegistry.Set(kind, check);
        return (options = {}) => Types.Type.Unsafe({ ...options, [Types.Kind]: kind });
    }
    TypeSystem.Type = Type;
    /** Creates a new string format */
    function Format(format, check) {
        if (Types.FormatRegistry.Has(format))
            throw new TypeSystemDuplicateFormat(format);
        Types.FormatRegistry.Set(format, check);
        return format;
    }
    TypeSystem.Format = Format;
})(TypeSystem || (exports.TypeSystem = TypeSystem = {}));
// --------------------------------------------------------------------------
// TypeSystemErrorFunction
// --------------------------------------------------------------------------
/** Manages error message providers */
var TypeSystemErrorFunction;
(function (TypeSystemErrorFunction) {
    let errorMessageFunction = DefaultErrorFunction;
    /** Resets the error message function to en-us */
    function Reset() {
        errorMessageFunction = DefaultErrorFunction;
    }
    TypeSystemErrorFunction.Reset = Reset;
    /** Sets the error message function used to generate error messages */
    function Set(callback) {
        errorMessageFunction = callback;
    }
    TypeSystemErrorFunction.Set = Set;
    /** Gets the error message function */
    function Get() {
        return errorMessageFunction;
    }
    TypeSystemErrorFunction.Get = Get;
})(TypeSystemErrorFunction || (exports.TypeSystemErrorFunction = TypeSystemErrorFunction = {}));
// --------------------------------------------------------------------------
// TypeSystemPolicy
// --------------------------------------------------------------------------
/** Shared assertion routines used by the value and errors modules */
var TypeSystemPolicy;
(function (TypeSystemPolicy) {
    /** Sets whether TypeBox should assert optional properties using the TypeScript `exactOptionalPropertyTypes` assertion policy. The default is `false` */
    TypeSystemPolicy.ExactOptionalPropertyTypes = false;
    /** Sets whether arrays should be treated as a kind of objects. The default is `false` */
    TypeSystemPolicy.AllowArrayObject = false;
    /** Sets whether `NaN` or `Infinity` should be treated as valid numeric values. The default is `false` */
    TypeSystemPolicy.AllowNaN = false;
    /** Sets whether `null` should validate for void types. The default is `false` */
    TypeSystemPolicy.AllowNullVoid = false;
    /** Asserts this value using the ExactOptionalPropertyTypes policy */
    function IsExactOptionalProperty(value, key) {
        return TypeSystemPolicy.ExactOptionalPropertyTypes ? key in value : value[key] !== undefined;
    }
    TypeSystemPolicy.IsExactOptionalProperty = IsExactOptionalProperty;
    /** Asserts this value using the AllowArrayObjects policy */
    function IsObjectLike(value) {
        const isObject = (0, guard_1.IsObject)(value);
        return TypeSystemPolicy.AllowArrayObject ? isObject : isObject && !(0, guard_1.IsArray)(value);
    }
    TypeSystemPolicy.IsObjectLike = IsObjectLike;
    /** Asserts this value as a record using the AllowArrayObjects policy */
    function IsRecordLike(value) {
        return IsObjectLike(value) && !(value instanceof Date) && !(value instanceof Uint8Array);
    }
    TypeSystemPolicy.IsRecordLike = IsRecordLike;
    /** Asserts this value using the AllowNaN policy */
    function IsNumberLike(value) {
        const isNumber = (0, guard_1.IsNumber)(value);
        return TypeSystemPolicy.AllowNaN ? isNumber : isNumber && Number.isFinite(value);
    }
    TypeSystemPolicy.IsNumberLike = IsNumberLike;
    /** Asserts this value using the AllowVoidNull policy */
    function IsVoidLike(value) {
        const isUndefined = (0, guard_1.IsUndefined)(value);
        return TypeSystemPolicy.AllowNullVoid ? isUndefined || value === null : isUndefined;
    }
    TypeSystemPolicy.IsVoidLike = IsVoidLike;
})(TypeSystemPolicy || (exports.TypeSystemPolicy = TypeSystemPolicy = {}));
// --------------------------------------------------------------------------
// DefaultErrorFunction
// --------------------------------------------------------------------------
/** Creates an error message using en-US as the default locale */
function DefaultErrorFunction(schema, errorType) {
    switch (errorType) {
        case errors_1.ValueErrorType.ArrayContains:
            return 'Expected array to contain at least one matching value';
        case errors_1.ValueErrorType.ArrayMaxContains:
            return `Expected array to contain no more than ${schema.maxContains} matching values`;
        case errors_1.ValueErrorType.ArrayMinContains:
            return `Expected array to contain at least ${schema.minContains} matching values`;
        case errors_1.ValueErrorType.ArrayMaxItems:
            return `Expected array length to be less or equal to ${schema.maxItems}`;
        case errors_1.ValueErrorType.ArrayMinItems:
            return `Expected array length to be greater or equal to ${schema.minItems}`;
        case errors_1.ValueErrorType.ArrayUniqueItems:
            return 'Expected array elements to be unique';
        case errors_1.ValueErrorType.Array:
            return 'Expected array';
        case errors_1.ValueErrorType.AsyncIterator:
            return 'Expected AsyncIterator';
        case errors_1.ValueErrorType.BigIntExclusiveMaximum:
            return `Expected bigint to be less than ${schema.exclusiveMaximum}`;
        case errors_1.ValueErrorType.BigIntExclusiveMinimum:
            return `Expected bigint to be greater than ${schema.exclusiveMinimum}`;
        case errors_1.ValueErrorType.BigIntMaximum:
            return `Expected bigint to be less or equal to ${schema.maximum}`;
        case errors_1.ValueErrorType.BigIntMinimum:
            return `Expected bigint to be greater or equal to ${schema.minimum}`;
        case errors_1.ValueErrorType.BigIntMultipleOf:
            return `Expected bigint to be a multiple of ${schema.multipleOf}`;
        case errors_1.ValueErrorType.BigInt:
            return 'Expected bigint';
        case errors_1.ValueErrorType.Boolean:
            return 'Expected boolean';
        case errors_1.ValueErrorType.DateExclusiveMinimumTimestamp:
            return `Expected Date timestamp to be greater than ${schema.exclusiveMinimumTimestamp}`;
        case errors_1.ValueErrorType.DateExclusiveMaximumTimestamp:
            return `Expected Date timestamp to be less than ${schema.exclusiveMaximumTimestamp}`;
        case errors_1.ValueErrorType.DateMinimumTimestamp:
            return `Expected Date timestamp to be greater or equal to ${schema.minimumTimestamp}`;
        case errors_1.ValueErrorType.DateMaximumTimestamp:
            return `Expected Date timestamp to be less or equal to ${schema.maximumTimestamp}`;
        case errors_1.ValueErrorType.DateMultipleOfTimestamp:
            return `Expected Date timestamp to be a multiple of ${schema.multipleOfTimestamp}`;
        case errors_1.ValueErrorType.Date:
            return 'Expected Date';
        case errors_1.ValueErrorType.Function:
            return 'Expected function';
        case errors_1.ValueErrorType.IntegerExclusiveMaximum:
            return `Expected integer to be less than ${schema.exclusiveMaximum}`;
        case errors_1.ValueErrorType.IntegerExclusiveMinimum:
            return `Expected integer to be greater than ${schema.exclusiveMinimum}`;
        case errors_1.ValueErrorType.IntegerMaximum:
            return `Expected integer to be less or equal to ${schema.maximum}`;
        case errors_1.ValueErrorType.IntegerMinimum:
            return `Expected integer to be greater or equal to ${schema.minimum}`;
        case errors_1.ValueErrorType.IntegerMultipleOf:
            return `Expected integer to be a multiple of ${schema.multipleOf}`;
        case errors_1.ValueErrorType.Integer:
            return 'Expected integer';
        case errors_1.ValueErrorType.IntersectUnevaluatedProperties:
            return 'Unexpected property';
        case errors_1.ValueErrorType.Intersect:
            return 'Expected all values to match';
        case errors_1.ValueErrorType.Iterator:
            return 'Expected Iterator';
        case errors_1.ValueErrorType.Literal:
            return `Expected ${typeof schema.const === 'string' ? `'${schema.const}'` : schema.const}`;
        case errors_1.ValueErrorType.Never:
            return 'Never';
        case errors_1.ValueErrorType.Not:
            return 'Value should not match';
        case errors_1.ValueErrorType.Null:
            return 'Expected null';
        case errors_1.ValueErrorType.NumberExclusiveMaximum:
            return `Expected number to be less than ${schema.exclusiveMaximum}`;
        case errors_1.ValueErrorType.NumberExclusiveMinimum:
            return `Expected number to be greater than ${schema.exclusiveMinimum}`;
        case errors_1.ValueErrorType.NumberMaximum:
            return `Expected number to be less or equal to ${schema.maximum}`;
        case errors_1.ValueErrorType.NumberMinimum:
            return `Expected number to be greater or equal to ${schema.minimum}`;
        case errors_1.ValueErrorType.NumberMultipleOf:
            return `Expected number to be a multiple of ${schema.multipleOf}`;
        case errors_1.ValueErrorType.Number:
            return 'Expected number';
        case errors_1.ValueErrorType.Object:
            return 'Expected object';
        case errors_1.ValueErrorType.ObjectAdditionalProperties:
            return 'Unexpected property';
        case errors_1.ValueErrorType.ObjectMaxProperties:
            return `Expected object to have no more than ${schema.maxProperties} properties`;
        case errors_1.ValueErrorType.ObjectMinProperties:
            return `Expected object to have at least ${schema.minProperties} properties`;
        case errors_1.ValueErrorType.ObjectRequiredProperty:
            return 'Required property';
        case errors_1.ValueErrorType.Promise:
            return 'Expected Promise';
        case errors_1.ValueErrorType.StringFormatUnknown:
            return `Unknown format '${schema.format}'`;
        case errors_1.ValueErrorType.StringFormat:
            return `Expected string to match '${schema.format}' format`;
        case errors_1.ValueErrorType.StringMaxLength:
            return `Expected string length less or equal to ${schema.maxLength}`;
        case errors_1.ValueErrorType.StringMinLength:
            return `Expected string length greater or equal to ${schema.minLength}`;
        case errors_1.ValueErrorType.StringPattern:
            return `Expected string to match '${schema.pattern}'`;
        case errors_1.ValueErrorType.String:
            return 'Expected string';
        case errors_1.ValueErrorType.Symbol:
            return 'Expected symbol';
        case errors_1.ValueErrorType.TupleLength:
            return `Expected tuple to have ${schema.maxItems || 0} elements`;
        case errors_1.ValueErrorType.Tuple:
            return 'Expected tuple';
        case errors_1.ValueErrorType.Uint8ArrayMaxByteLength:
            return `Expected byte length less or equal to ${schema.maxByteLength}`;
        case errors_1.ValueErrorType.Uint8ArrayMinByteLength:
            return `Expected byte length greater or equal to ${schema.minByteLength}`;
        case errors_1.ValueErrorType.Uint8Array:
            return 'Expected Uint8Array';
        case errors_1.ValueErrorType.Undefined:
            return 'Expected undefined';
        case errors_1.ValueErrorType.Union:
            return 'Expected union value';
        case errors_1.ValueErrorType.Void:
            return 'Expected void';
        case errors_1.ValueErrorType.Kind:
            return `Expected kind '${schema[Types.Kind]}'`;
        default:
            return 'Unknown error type';
    }
}
exports.DefaultErrorFunction = DefaultErrorFunction;


/***/ }),

/***/ 3017:
/***/ ((__unused_webpack_module, exports) => {


/*--------------------------------------------------------------------------

@sinclair/typebox

The MIT License (MIT)

Copyright (c) 2017-2023 Haydn Paterson (sinclair) <haydn.developer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Type = exports.JsonType = exports.JavaScriptTypeBuilder = exports.JsonTypeBuilder = exports.TypeBuilder = exports.TypeBuilderError = exports.TransformEncodeBuilder = exports.TransformDecodeBuilder = exports.TemplateLiteralDslParser = exports.TemplateLiteralGenerator = exports.TemplateLiteralGeneratorError = exports.TemplateLiteralFinite = exports.TemplateLiteralFiniteError = exports.TemplateLiteralParser = exports.TemplateLiteralParserError = exports.TemplateLiteralResolver = exports.TemplateLiteralPattern = exports.TemplateLiteralPatternError = exports.UnionResolver = exports.KeyArrayResolver = exports.KeyArrayResolverError = exports.KeyResolver = exports.ObjectMap = exports.Intrinsic = exports.IndexedAccessor = exports.TypeClone = exports.TypeExtends = exports.TypeExtendsResult = exports.TypeExtendsError = exports.ExtendsUndefined = exports.TypeGuard = exports.TypeGuardUnknownTypeError = exports.ValueGuard = exports.FormatRegistry = exports.TypeBoxError = exports.TypeRegistry = exports.PatternStringExact = exports.PatternNumberExact = exports.PatternBooleanExact = exports.PatternString = exports.PatternNumber = exports.PatternBoolean = exports.Kind = exports.Hint = exports.Optional = exports.Readonly = exports.Transform = void 0;
// --------------------------------------------------------------------------
// Symbols
// --------------------------------------------------------------------------
exports.Transform = Symbol.for('TypeBox.Transform');
exports.Readonly = Symbol.for('TypeBox.Readonly');
exports.Optional = Symbol.for('TypeBox.Optional');
exports.Hint = Symbol.for('TypeBox.Hint');
exports.Kind = Symbol.for('TypeBox.Kind');
// --------------------------------------------------------------------------
// Patterns
// --------------------------------------------------------------------------
exports.PatternBoolean = '(true|false)';
exports.PatternNumber = '(0|[1-9][0-9]*)';
exports.PatternString = '(.*)';
exports.PatternBooleanExact = `^${exports.PatternBoolean}$`;
exports.PatternNumberExact = `^${exports.PatternNumber}$`;
exports.PatternStringExact = `^${exports.PatternString}$`;
/** A registry for user defined types */
var TypeRegistry;
(function (TypeRegistry) {
    const map = new Map();
    /** Returns the entries in this registry */
    function Entries() {
        return new Map(map);
    }
    TypeRegistry.Entries = Entries;
    /** Clears all user defined types */
    function Clear() {
        return map.clear();
    }
    TypeRegistry.Clear = Clear;
    /** Deletes a registered type */
    function Delete(kind) {
        return map.delete(kind);
    }
    TypeRegistry.Delete = Delete;
    /** Returns true if this registry contains this kind */
    function Has(kind) {
        return map.has(kind);
    }
    TypeRegistry.Has = Has;
    /** Sets a validation function for a user defined type */
    function Set(kind, func) {
        map.set(kind, func);
    }
    TypeRegistry.Set = Set;
    /** Gets a custom validation function for a user defined type */
    function Get(kind) {
        return map.get(kind);
    }
    TypeRegistry.Get = Get;
})(TypeRegistry || (exports.TypeRegistry = TypeRegistry = {}));
// --------------------------------------------------------------------------
// TypeBoxError
// --------------------------------------------------------------------------
class TypeBoxError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.TypeBoxError = TypeBoxError;
/** A registry for user defined string formats */
var FormatRegistry;
(function (FormatRegistry) {
    const map = new Map();
    /** Returns the entries in this registry */
    function Entries() {
        return new Map(map);
    }
    FormatRegistry.Entries = Entries;
    /** Clears all user defined string formats */
    function Clear() {
        return map.clear();
    }
    FormatRegistry.Clear = Clear;
    /** Deletes a registered format */
    function Delete(format) {
        return map.delete(format);
    }
    FormatRegistry.Delete = Delete;
    /** Returns true if the user defined string format exists */
    function Has(format) {
        return map.has(format);
    }
    FormatRegistry.Has = Has;
    /** Sets a validation function for a user defined string format */
    function Set(format, func) {
        map.set(format, func);
    }
    FormatRegistry.Set = Set;
    /** Gets a validation function for a user defined string format */
    function Get(format) {
        return map.get(format);
    }
    FormatRegistry.Get = Get;
})(FormatRegistry || (exports.FormatRegistry = FormatRegistry = {}));
// --------------------------------------------------------------------------
// ValueGuard
// --------------------------------------------------------------------------
/** Provides functions to type guard raw JavaScript values */
var ValueGuard;
(function (ValueGuard) {
    /** Returns true if this value is an array */
    function IsArray(value) {
        return Array.isArray(value);
    }
    ValueGuard.IsArray = IsArray;
    /** Returns true if this value is bigint */
    function IsBigInt(value) {
        return typeof value === 'bigint';
    }
    ValueGuard.IsBigInt = IsBigInt;
    /** Returns true if this value is a boolean */
    function IsBoolean(value) {
        return typeof value === 'boolean';
    }
    ValueGuard.IsBoolean = IsBoolean;
    /** Returns true if this value is a Date object */
    function IsDate(value) {
        return value instanceof globalThis.Date;
    }
    ValueGuard.IsDate = IsDate;
    /** Returns true if this value is null */
    function IsNull(value) {
        return value === null;
    }
    ValueGuard.IsNull = IsNull;
    /** Returns true if this value is number */
    function IsNumber(value) {
        return typeof value === 'number';
    }
    ValueGuard.IsNumber = IsNumber;
    /** Returns true if this value is an object */
    function IsObject(value) {
        return typeof value === 'object' && value !== null;
    }
    ValueGuard.IsObject = IsObject;
    /** Returns true if this value is string */
    function IsString(value) {
        return typeof value === 'string';
    }
    ValueGuard.IsString = IsString;
    /** Returns true if this value is a Uint8Array */
    function IsUint8Array(value) {
        return value instanceof globalThis.Uint8Array;
    }
    ValueGuard.IsUint8Array = IsUint8Array;
    /** Returns true if this value is undefined */
    function IsUndefined(value) {
        return value === undefined;
    }
    ValueGuard.IsUndefined = IsUndefined;
})(ValueGuard || (exports.ValueGuard = ValueGuard = {}));
// --------------------------------------------------------------------------
// TypeGuard
// --------------------------------------------------------------------------
class TypeGuardUnknownTypeError extends TypeBoxError {
}
exports.TypeGuardUnknownTypeError = TypeGuardUnknownTypeError;
/** Provides functions to test if JavaScript values are TypeBox types */
var TypeGuard;
(function (TypeGuard) {
    function IsPattern(value) {
        try {
            new RegExp(value);
            return true;
        }
        catch {
            return false;
        }
    }
    function IsControlCharacterFree(value) {
        if (!ValueGuard.IsString(value))
            return false;
        for (let i = 0; i < value.length; i++) {
            const code = value.charCodeAt(i);
            if ((code >= 7 && code <= 13) || code === 27 || code === 127) {
                return false;
            }
        }
        return true;
    }
    function IsAdditionalProperties(value) {
        return IsOptionalBoolean(value) || TSchema(value);
    }
    function IsOptionalBigInt(value) {
        return ValueGuard.IsUndefined(value) || ValueGuard.IsBigInt(value);
    }
    function IsOptionalNumber(value) {
        return ValueGuard.IsUndefined(value) || ValueGuard.IsNumber(value);
    }
    function IsOptionalBoolean(value) {
        return ValueGuard.IsUndefined(value) || ValueGuard.IsBoolean(value);
    }
    function IsOptionalString(value) {
        return ValueGuard.IsUndefined(value) || ValueGuard.IsString(value);
    }
    function IsOptionalPattern(value) {
        return ValueGuard.IsUndefined(value) || (ValueGuard.IsString(value) && IsControlCharacterFree(value) && IsPattern(value));
    }
    function IsOptionalFormat(value) {
        return ValueGuard.IsUndefined(value) || (ValueGuard.IsString(value) && IsControlCharacterFree(value));
    }
    function IsOptionalSchema(value) {
        return ValueGuard.IsUndefined(value) || TSchema(value);
    }
    // ----------------------------------------------------------------
    // Types
    // ----------------------------------------------------------------
    /** Returns true if the given value is TAny */
    function TAny(schema) {
        // prettier-ignore
        return (TKindOf(schema, 'Any') &&
            IsOptionalString(schema.$id));
    }
    TypeGuard.TAny = TAny;
    /** Returns true if the given value is TArray */
    function TArray(schema) {
        return (TKindOf(schema, 'Array') &&
            schema.type === 'array' &&
            IsOptionalString(schema.$id) &&
            TSchema(schema.items) &&
            IsOptionalNumber(schema.minItems) &&
            IsOptionalNumber(schema.maxItems) &&
            IsOptionalBoolean(schema.uniqueItems) &&
            IsOptionalSchema(schema.contains) &&
            IsOptionalNumber(schema.minContains) &&
            IsOptionalNumber(schema.maxContains));
    }
    TypeGuard.TArray = TArray;
    /** Returns true if the given value is TAsyncIterator */
    function TAsyncIterator(schema) {
        // prettier-ignore
        return (TKindOf(schema, 'AsyncIterator') &&
            schema.type === 'AsyncIterator' &&
            IsOptionalString(schema.$id) &&
            TSchema(schema.items));
    }
    TypeGuard.TAsyncIterator = TAsyncIterator;
    /** Returns true if the given value is TBigInt */
    function TBigInt(schema) {
        // prettier-ignore
        return (TKindOf(schema, 'BigInt') &&
            schema.type === 'bigint' &&
            IsOptionalString(schema.$id) &&
            IsOptionalBigInt(schema.exclusiveMaximum) &&
            IsOptionalBigInt(schema.exclusiveMinimum) &&
            IsOptionalBigInt(schema.maximum) &&
            IsOptionalBigInt(schema.minimum) &&
            IsOptionalBigInt(schema.multipleOf));
    }
    TypeGuard.TBigInt = TBigInt;
    /** Returns true if the given value is TBoolean */
    function TBoolean(schema) {
        // prettier-ignore
        return (TKindOf(schema, 'Boolean') &&
            schema.type === 'boolean' &&
            IsOptionalString(schema.$id));
    }
    TypeGuard.TBoolean = TBoolean;
    /** Returns true if the given value is TConstructor */
    function TConstructor(schema) {
        // prettier-ignore
        return (TKindOf(schema, 'Constructor') &&
            schema.type === 'Constructor' &&
            IsOptionalString(schema.$id) &&
            ValueGuard.IsArray(schema.parameters) &&
            schema.parameters.every(schema => TSchema(schema)) &&
            TSchema(schema.returns));
    }
    TypeGuard.TConstructor = TConstructor;
    /** Returns true if the given value is TDate */
    function TDate(schema) {
        return (TKindOf(schema, 'Date') &&
            schema.type === 'Date' &&
            IsOptionalString(schema.$id) &&
            IsOptionalNumber(schema.exclusiveMaximumTimestamp) &&
            IsOptionalNumber(schema.exclusiveMinimumTimestamp) &&
            IsOptionalNumber(schema.maximumTimestamp) &&
            IsOptionalNumber(schema.minimumTimestamp) &&
            IsOptionalNumber(schema.multipleOfTimestamp));
    }
    TypeGuard.TDate = TDate;
    /** Returns true if the given value is TFunction */
    function TFunction(schema) {
        // prettier-ignore
        return (TKindOf(schema, 'Function') &&
            schema.type === 'Function' &&
            IsOptionalString(schema.$id) &&
            ValueGuard.IsArray(schema.parameters) &&
            schema.parameters.every(schema => TSchema(schema)) &&
            TSchema(schema.returns));
    }
    TypeGuard.TFunction = TFunction;
    /** Returns true if the given value is TInteger */
    function TInteger(schema) {
        return (TKindOf(schema, 'Integer') &&
            schema.type === 'integer' &&
            IsOptionalString(schema.$id) &&
            IsOptionalNumber(schema.exclusiveMaximum) &&
            IsOptionalNumber(schema.exclusiveMinimum) &&
            IsOptionalNumber(schema.maximum) &&
            IsOptionalNumber(schema.minimum) &&
            IsOptionalNumber(schema.multipleOf));
    }
    TypeGuard.TInteger = TInteger;
    /** Returns true if the given value is TIntersect */
    function TIntersect(schema) {
        // prettier-ignore
        return (TKindOf(schema, 'Intersect') &&
            (ValueGuard.IsString(schema.type) && schema.type !== 'object' ? false : true) &&
            ValueGuard.IsArray(schema.allOf) &&
            schema.allOf.every(schema => TSchema(schema) && !TTransform(schema)) &&
            IsOptionalString(schema.type) &&
            (IsOptionalBoolean(schema.unevaluatedProperties) || IsOptionalSchema(schema.unevaluatedProperties)) &&
            IsOptionalString(schema.$id));
    }
    TypeGuard.TIntersect = TIntersect;
    /** Returns true if the given value is TIterator */
    function TIterator(schema) {
        // prettier-ignore
        return (TKindOf(schema, 'Iterator') &&
            schema.type === 'Iterator' &&
            IsOptionalString(schema.$id) &&
            TSchema(schema.items));
    }
    TypeGuard.TIterator = TIterator;
    /** Returns true if the given value is a TKind with the given name. */
    function TKindOf(schema, kind) {
        return TKind(schema) && schema[exports.Kind] === kind;
    }
    TypeGuard.TKindOf = TKindOf;
    /** Returns true if the given value is TKind */
    function TKind(schema) {
        return ValueGuard.IsObject(schema) && exports.Kind in schema && ValueGuard.IsString(schema[exports.Kind]);
    }
    TypeGuard.TKind = TKind;
    /** Returns true if the given value is TLiteral<string> */
    function TLiteralString(schema) {
        return TLiteral(schema) && ValueGuard.IsString(schema.const);
    }
    TypeGuard.TLiteralString = TLiteralString;
    /** Returns true if the given value is TLiteral<number> */
    function TLiteralNumber(schema) {
        return TLiteral(schema) && ValueGuard.IsNumber(schema.const);
    }
    TypeGuard.TLiteralNumber = TLiteralNumber;
    /** Returns true if the given value is TLiteral<boolean> */
    function TLiteralBoolean(schema) {
        return TLiteral(schema) && ValueGuard.IsBoolean(schema.const);
    }
    TypeGuard.TLiteralBoolean = TLiteralBoolean;
    /** Returns true if the given value is TLiteral */
    function TLiteral(schema) {
        // prettier-ignore
        return (TKindOf(schema, 'Literal') &&
            IsOptionalString(schema.$id) && (ValueGuard.IsBoolean(schema.const) ||
            ValueGuard.IsNumber(schema.const) ||
            ValueGuard.IsString(schema.const)));
    }
    TypeGuard.TLiteral = TLiteral;
    /** Returns true if the given value is TNever */
    function TNever(schema) {
        // prettier-ignore
        return (TKindOf(schema, 'Never') &&
            ValueGuard.IsObject(schema.not) &&
            Object.getOwnPropertyNames(schema.not).length === 0);
    }
    TypeGuard.TNever = TNever;
    /** Returns true if the given value is TNot */
    function TNot(schema) {
        // prettier-ignore
        return (TKindOf(schema, 'Not') &&
            TSchema(schema.not));
    }
    TypeGuard.TNot = TNot;
    /** Returns true if the given value is TNull */
    function TNull(schema) {
        // prettier-ignore
        return (TKindOf(schema, 'Null') &&
            schema.type === 'null' &&
            IsOptionalString(schema.$id));
    }
    TypeGuard.TNull = TNull;
    /** Returns true if the given value is TNumber */
    function TNumber(schema) {
        return (TKindOf(schema, 'Number') &&
            schema.type === 'number' &&
            IsOptionalString(schema.$id) &&
            IsOptionalNumber(schema.exclusiveMaximum) &&
            IsOptionalNumber(schema.exclusiveMinimum) &&
            IsOptionalNumber(schema.maximum) &&
            IsOptionalNumber(schema.minimum) &&
            IsOptionalNumber(schema.multipleOf));
    }
    TypeGuard.TNumber = TNumber;
    /** Returns true if the given value is TObject */
    function TObject(schema) {
        // prettier-ignore
        return (TKindOf(schema, 'Object') &&
            schema.type === 'object' &&
            IsOptionalString(schema.$id) &&
            ValueGuard.IsObject(schema.properties) &&
            IsAdditionalProperties(schema.additionalProperties) &&
            IsOptionalNumber(schema.minProperties) &&
            IsOptionalNumber(schema.maxProperties) &&
            Object.entries(schema.properties).every(([key, schema]) => IsControlCharacterFree(key) && TSchema(schema)));
    }
    TypeGuard.TObject = TObject;
    /** Returns true if the given value is TPromise */
    function TPromise(schema) {
        // prettier-ignore
        return (TKindOf(schema, 'Promise') &&
            schema.type === 'Promise' &&
            IsOptionalString(schema.$id) &&
            TSchema(schema.item));
    }
    TypeGuard.TPromise = TPromise;
    /** Returns true if the given value is TRecord */
    function TRecord(schema) {
        // prettier-ignore
        return (TKindOf(schema, 'Record') &&
            schema.type === 'object' &&
            IsOptionalString(schema.$id) &&
            IsAdditionalProperties(schema.additionalProperties) &&
            ValueGuard.IsObject(schema.patternProperties) &&
            ((schema) => {
                const keys = Object.getOwnPropertyNames(schema.patternProperties);
                return (keys.length === 1 &&
                    IsPattern(keys[0]) &&
                    ValueGuard.IsObject(schema.patternProperties) &&
                    TSchema(schema.patternProperties[keys[0]]));
            })(schema));
    }
    TypeGuard.TRecord = TRecord;
    /** Returns true if this value is TRecursive */
    function TRecursive(schema) {
        return ValueGuard.IsObject(schema) && exports.Hint in schema && schema[exports.Hint] === 'Recursive';
    }
    TypeGuard.TRecursive = TRecursive;
    /** Returns true if the given value is TRef */
    function TRef(schema) {
        // prettier-ignore
        return (TKindOf(schema, 'Ref') &&
            IsOptionalString(schema.$id) &&
            ValueGuard.IsString(schema.$ref));
    }
    TypeGuard.TRef = TRef;
    /** Returns true if the given value is TString */
    function TString(schema) {
        // prettier-ignore
        return (TKindOf(schema, 'String') &&
            schema.type === 'string' &&
            IsOptionalString(schema.$id) &&
            IsOptionalNumber(schema.minLength) &&
            IsOptionalNumber(schema.maxLength) &&
            IsOptionalPattern(schema.pattern) &&
            IsOptionalFormat(schema.format));
    }
    TypeGuard.TString = TString;
    /** Returns true if the given value is TSymbol */
    function TSymbol(schema) {
        // prettier-ignore
        return (TKindOf(schema, 'Symbol') &&
            schema.type === 'symbol' &&
            IsOptionalString(schema.$id));
    }
    TypeGuard.TSymbol = TSymbol;
    /** Returns true if the given value is TTemplateLiteral */
    function TTemplateLiteral(schema) {
        // prettier-ignore
        return (TKindOf(schema, 'TemplateLiteral') &&
            schema.type === 'string' &&
            ValueGuard.IsString(schema.pattern) &&
            schema.pattern[0] === '^' &&
            schema.pattern[schema.pattern.length - 1] === '$');
    }
    TypeGuard.TTemplateLiteral = TTemplateLiteral;
    /** Returns true if the given value is TThis */
    function TThis(schema) {
        // prettier-ignore
        return (TKindOf(schema, 'This') &&
            IsOptionalString(schema.$id) &&
            ValueGuard.IsString(schema.$ref));
    }
    TypeGuard.TThis = TThis;
    /** Returns true of this value is TTransform */
    function TTransform(schema) {
        return ValueGuard.IsObject(schema) && exports.Transform in schema;
    }
    TypeGuard.TTransform = TTransform;
    /** Returns true if the given value is TTuple */
    function TTuple(schema) {
        // prettier-ignore
        return (TKindOf(schema, 'Tuple') &&
            schema.type === 'array' &&
            IsOptionalString(schema.$id) &&
            ValueGuard.IsNumber(schema.minItems) &&
            ValueGuard.IsNumber(schema.maxItems) &&
            schema.minItems === schema.maxItems &&
            (( // empty
            ValueGuard.IsUndefined(schema.items) &&
                ValueGuard.IsUndefined(schema.additionalItems) &&
                schema.minItems === 0) || (ValueGuard.IsArray(schema.items) &&
                schema.items.every(schema => TSchema(schema)))));
    }
    TypeGuard.TTuple = TTuple;
    /** Returns true if the given value is TUndefined */
    function TUndefined(schema) {
        // prettier-ignore
        return (TKindOf(schema, 'Undefined') &&
            schema.type === 'undefined' &&
            IsOptionalString(schema.$id));
    }
    TypeGuard.TUndefined = TUndefined;
    /** Returns true if the given value is TUnion<Literal<string | number>[]> */
    function TUnionLiteral(schema) {
        return TUnion(schema) && schema.anyOf.every((schema) => TLiteralString(schema) || TLiteralNumber(schema));
    }
    TypeGuard.TUnionLiteral = TUnionLiteral;
    /** Returns true if the given value is TUnion */
    function TUnion(schema) {
        // prettier-ignore
        return (TKindOf(schema, 'Union') &&
            IsOptionalString(schema.$id) &&
            ValueGuard.IsObject(schema) &&
            ValueGuard.IsArray(schema.anyOf) &&
            schema.anyOf.every(schema => TSchema(schema)));
    }
    TypeGuard.TUnion = TUnion;
    /** Returns true if the given value is TUint8Array */
    function TUint8Array(schema) {
        // prettier-ignore
        return (TKindOf(schema, 'Uint8Array') &&
            schema.type === 'Uint8Array' &&
            IsOptionalString(schema.$id) &&
            IsOptionalNumber(schema.minByteLength) &&
            IsOptionalNumber(schema.maxByteLength));
    }
    TypeGuard.TUint8Array = TUint8Array;
    /** Returns true if the given value is TUnknown */
    function TUnknown(schema) {
        // prettier-ignore
        return (TKindOf(schema, 'Unknown') &&
            IsOptionalString(schema.$id));
    }
    TypeGuard.TUnknown = TUnknown;
    /** Returns true if the given value is a raw TUnsafe */
    function TUnsafe(schema) {
        return TKindOf(schema, 'Unsafe');
    }
    TypeGuard.TUnsafe = TUnsafe;
    /** Returns true if the given value is TVoid */
    function TVoid(schema) {
        // prettier-ignore
        return (TKindOf(schema, 'Void') &&
            schema.type === 'void' &&
            IsOptionalString(schema.$id));
    }
    TypeGuard.TVoid = TVoid;
    /** Returns true if this value has a Readonly symbol */
    function TReadonly(schema) {
        return ValueGuard.IsObject(schema) && schema[exports.Readonly] === 'Readonly';
    }
    TypeGuard.TReadonly = TReadonly;
    /** Returns true if this value has a Optional symbol */
    function TOptional(schema) {
        return ValueGuard.IsObject(schema) && schema[exports.Optional] === 'Optional';
    }
    TypeGuard.TOptional = TOptional;
    /** Returns true if the given value is TSchema */
    function TSchema(schema) {
        // prettier-ignore
        return (ValueGuard.IsObject(schema)) && (TAny(schema) ||
            TArray(schema) ||
            TBoolean(schema) ||
            TBigInt(schema) ||
            TAsyncIterator(schema) ||
            TConstructor(schema) ||
            TDate(schema) ||
            TFunction(schema) ||
            TInteger(schema) ||
            TIntersect(schema) ||
            TIterator(schema) ||
            TLiteral(schema) ||
            TNever(schema) ||
            TNot(schema) ||
            TNull(schema) ||
            TNumber(schema) ||
            TObject(schema) ||
            TPromise(schema) ||
            TRecord(schema) ||
            TRef(schema) ||
            TString(schema) ||
            TSymbol(schema) ||
            TTemplateLiteral(schema) ||
            TThis(schema) ||
            TTuple(schema) ||
            TUndefined(schema) ||
            TUnion(schema) ||
            TUint8Array(schema) ||
            TUnknown(schema) ||
            TUnsafe(schema) ||
            TVoid(schema) ||
            (TKind(schema) && TypeRegistry.Has(schema[exports.Kind])));
    }
    TypeGuard.TSchema = TSchema;
})(TypeGuard || (exports.TypeGuard = TypeGuard = {}));
// --------------------------------------------------------------------------
// ExtendsUndefined
// --------------------------------------------------------------------------
/** Fast undefined check used for properties of type undefined */
var ExtendsUndefined;
(function (ExtendsUndefined) {
    function Check(schema) {
        return schema[exports.Kind] === 'Intersect'
            ? schema.allOf.every((schema) => Check(schema))
            : schema[exports.Kind] === 'Union'
                ? schema.anyOf.some((schema) => Check(schema))
                : schema[exports.Kind] === 'Undefined'
                    ? true
                    : schema[exports.Kind] === 'Not'
                        ? !Check(schema.not)
                        : false;
    }
    ExtendsUndefined.Check = Check;
})(ExtendsUndefined || (exports.ExtendsUndefined = ExtendsUndefined = {}));
// --------------------------------------------------------------------------
// TypeExtends
// --------------------------------------------------------------------------
class TypeExtendsError extends TypeBoxError {
}
exports.TypeExtendsError = TypeExtendsError;
var TypeExtendsResult;
(function (TypeExtendsResult) {
    TypeExtendsResult[TypeExtendsResult["Union"] = 0] = "Union";
    TypeExtendsResult[TypeExtendsResult["True"] = 1] = "True";
    TypeExtendsResult[TypeExtendsResult["False"] = 2] = "False";
})(TypeExtendsResult || (exports.TypeExtendsResult = TypeExtendsResult = {}));
var TypeExtends;
(function (TypeExtends) {
    // --------------------------------------------------------------------------
    // IntoBooleanResult
    // --------------------------------------------------------------------------
    function IntoBooleanResult(result) {
        return result === TypeExtendsResult.False ? result : TypeExtendsResult.True;
    }
    // --------------------------------------------------------------------------
    // Throw
    // --------------------------------------------------------------------------
    function Throw(message) {
        throw new TypeExtendsError(message);
    }
    // --------------------------------------------------------------------------
    // StructuralRight
    // --------------------------------------------------------------------------
    function IsStructuralRight(right) {
        // prettier-ignore
        return (TypeGuard.TNever(right) ||
            TypeGuard.TIntersect(right) ||
            TypeGuard.TUnion(right) ||
            TypeGuard.TUnknown(right) ||
            TypeGuard.TAny(right));
    }
    function StructuralRight(left, right) {
        // prettier-ignore
        return (TypeGuard.TNever(right) ? TNeverRight(left, right) :
            TypeGuard.TIntersect(right) ? TIntersectRight(left, right) :
                TypeGuard.TUnion(right) ? TUnionRight(left, right) :
                    TypeGuard.TUnknown(right) ? TUnknownRight(left, right) :
                        TypeGuard.TAny(right) ? TAnyRight(left, right) :
                            Throw('StructuralRight'));
    }
    // --------------------------------------------------------------------------
    // Any
    // --------------------------------------------------------------------------
    function TAnyRight(left, right) {
        return TypeExtendsResult.True;
    }
    function TAny(left, right) {
        // prettier-ignore
        return (TypeGuard.TIntersect(right) ? TIntersectRight(left, right) :
            (TypeGuard.TUnion(right) && right.anyOf.some((schema) => TypeGuard.TAny(schema) || TypeGuard.TUnknown(schema))) ? TypeExtendsResult.True :
                TypeGuard.TUnion(right) ? TypeExtendsResult.Union :
                    TypeGuard.TUnknown(right) ? TypeExtendsResult.True :
                        TypeGuard.TAny(right) ? TypeExtendsResult.True :
                            TypeExtendsResult.Union);
    }
    // --------------------------------------------------------------------------
    // Array
    // --------------------------------------------------------------------------
    function TArrayRight(left, right) {
        // prettier-ignore
        return (TypeGuard.TUnknown(left) ? TypeExtendsResult.False :
            TypeGuard.TAny(left) ? TypeExtendsResult.Union :
                TypeGuard.TNever(left) ? TypeExtendsResult.True :
                    TypeExtendsResult.False);
    }
    function TArray(left, right) {
        // prettier-ignore
        return (TypeGuard.TObject(right) && IsObjectArrayLike(right) ? TypeExtendsResult.True :
            IsStructuralRight(right) ? StructuralRight(left, right) :
                !TypeGuard.TArray(right) ? TypeExtendsResult.False :
                    IntoBooleanResult(Visit(left.items, right.items)));
    }
    // --------------------------------------------------------------------------
    // AsyncIterator
    // --------------------------------------------------------------------------
    function TAsyncIterator(left, right) {
        // prettier-ignore
        return (IsStructuralRight(right) ? StructuralRight(left, right) :
            !TypeGuard.TAsyncIterator(right) ? TypeExtendsResult.False :
                IntoBooleanResult(Visit(left.items, right.items)));
    }
    // --------------------------------------------------------------------------
    // BigInt
    // --------------------------------------------------------------------------
    function TBigInt(left, right) {
        // prettier-ignore
        return (IsStructuralRight(right) ? StructuralRight(left, right) :
            TypeGuard.TObject(right) ? TObjectRight(left, right) :
                TypeGuard.TRecord(right) ? TRecordRight(left, right) :
                    TypeGuard.TBigInt(right) ? TypeExtendsResult.True :
                        TypeExtendsResult.False);
    }
    // --------------------------------------------------------------------------
    // Boolean
    // --------------------------------------------------------------------------
    function TBooleanRight(left, right) {
        return TypeGuard.TLiteral(left) && ValueGuard.IsBoolean(left.const) ? TypeExtendsResult.True : TypeGuard.TBoolean(left) ? TypeExtendsResult.True : TypeExtendsResult.False;
    }
    function TBoolean(left, right) {
        // prettier-ignore
        return (IsStructuralRight(right) ? StructuralRight(left, right) :
            TypeGuard.TObject(right) ? TObjectRight(left, right) :
                TypeGuard.TRecord(right) ? TRecordRight(left, right) :
                    TypeGuard.TBoolean(right) ? TypeExtendsResult.True :
                        TypeExtendsResult.False);
    }
    // --------------------------------------------------------------------------
    // Constructor
    // --------------------------------------------------------------------------
    function TConstructor(left, right) {
        // prettier-ignore
        return (IsStructuralRight(right) ? StructuralRight(left, right) :
            TypeGuard.TObject(right) ? TObjectRight(left, right) :
                !TypeGuard.TConstructor(right) ? TypeExtendsResult.False :
                    left.parameters.length > right.parameters.length ? TypeExtendsResult.False :
                        (!left.parameters.every((schema, index) => IntoBooleanResult(Visit(right.parameters[index], schema)) === TypeExtendsResult.True)) ? TypeExtendsResult.False :
                            IntoBooleanResult(Visit(left.returns, right.returns)));
    }
    // --------------------------------------------------------------------------
    // Date
    // --------------------------------------------------------------------------
    function TDate(left, right) {
        // prettier-ignore
        return (IsStructuralRight(right) ? StructuralRight(left, right) :
            TypeGuard.TObject(right) ? TObjectRight(left, right) :
                TypeGuard.TRecord(right) ? TRecordRight(left, right) :
                    TypeGuard.TDate(right) ? TypeExtendsResult.True :
                        TypeExtendsResult.False);
    }
    // --------------------------------------------------------------------------
    // Function
    // --------------------------------------------------------------------------
    function TFunction(left, right) {
        // prettier-ignore
        return (IsStructuralRight(right) ? StructuralRight(left, right) :
            TypeGuard.TObject(right) ? TObjectRight(left, right) :
                !TypeGuard.TFunction(right) ? TypeExtendsResult.False :
                    left.parameters.length > right.parameters.length ? TypeExtendsResult.False :
                        (!left.parameters.every((schema, index) => IntoBooleanResult(Visit(right.parameters[index], schema)) === TypeExtendsResult.True)) ? TypeExtendsResult.False :
                            IntoBooleanResult(Visit(left.returns, right.returns)));
    }
    // --------------------------------------------------------------------------
    // Integer
    // --------------------------------------------------------------------------
    function TIntegerRight(left, right) {
        // prettier-ignore
        return (TypeGuard.TLiteral(left) && ValueGuard.IsNumber(left.const) ? TypeExtendsResult.True :
            TypeGuard.TNumber(left) || TypeGuard.TInteger(left) ? TypeExtendsResult.True :
                TypeExtendsResult.False);
    }
    function TInteger(left, right) {
        // prettier-ignore
        return (TypeGuard.TInteger(right) || TypeGuard.TNumber(right) ? TypeExtendsResult.True :
            IsStructuralRight(right) ? StructuralRight(left, right) :
                TypeGuard.TObject(right) ? TObjectRight(left, right) :
                    TypeGuard.TRecord(right) ? TRecordRight(left, right) :
                        TypeExtendsResult.False);
    }
    // --------------------------------------------------------------------------
    // Intersect
    // --------------------------------------------------------------------------
    function TIntersectRight(left, right) {
        // prettier-ignore
        return right.allOf.every((schema) => Visit(left, schema) === TypeExtendsResult.True)
            ? TypeExtendsResult.True
            : TypeExtendsResult.False;
    }
    function TIntersect(left, right) {
        // prettier-ignore
        return left.allOf.some((schema) => Visit(schema, right) === TypeExtendsResult.True)
            ? TypeExtendsResult.True
            : TypeExtendsResult.False;
    }
    // --------------------------------------------------------------------------
    // Iterator
    // --------------------------------------------------------------------------
    function TIterator(left, right) {
        // prettier-ignore
        return (IsStructuralRight(right) ? StructuralRight(left, right) :
            !TypeGuard.TIterator(right) ? TypeExtendsResult.False :
                IntoBooleanResult(Visit(left.items, right.items)));
    }
    // --------------------------------------------------------------------------
    // Literal
    // --------------------------------------------------------------------------
    function TLiteral(left, right) {
        // prettier-ignore
        return (TypeGuard.TLiteral(right) && right.const === left.const ? TypeExtendsResult.True :
            IsStructuralRight(right) ? StructuralRight(left, right) :
                TypeGuard.TObject(right) ? TObjectRight(left, right) :
                    TypeGuard.TRecord(right) ? TRecordRight(left, right) :
                        TypeGuard.TString(right) ? TStringRight(left, right) :
                            TypeGuard.TNumber(right) ? TNumberRight(left, right) :
                                TypeGuard.TInteger(right) ? TIntegerRight(left, right) :
                                    TypeGuard.TBoolean(right) ? TBooleanRight(left, right) :
                                        TypeExtendsResult.False);
    }
    // --------------------------------------------------------------------------
    // Never
    // --------------------------------------------------------------------------
    function TNeverRight(left, right) {
        return TypeExtendsResult.False;
    }
    function TNever(left, right) {
        return TypeExtendsResult.True;
    }
    // --------------------------------------------------------------------------
    // Not
    // --------------------------------------------------------------------------
    function UnwrapTNot(schema) {
        let [current, depth] = [schema, 0];
        while (true) {
            if (!TypeGuard.TNot(current))
                break;
            current = current.not;
            depth += 1;
        }
        return depth % 2 === 0 ? current : exports.Type.Unknown();
    }
    function TNot(left, right) {
        // TypeScript has no concept of negated types, and attempts to correctly check the negated
        // type at runtime would put TypeBox at odds with TypeScripts ability to statically infer
        // the type. Instead we unwrap to either unknown or T and continue evaluating.
        // prettier-ignore
        return (TypeGuard.TNot(left) ? Visit(UnwrapTNot(left), right) :
            TypeGuard.TNot(right) ? Visit(left, UnwrapTNot(right)) :
                Throw('Invalid fallthrough for Not'));
    }
    // --------------------------------------------------------------------------
    // Null
    // --------------------------------------------------------------------------
    function TNull(left, right) {
        // prettier-ignore
        return (IsStructuralRight(right) ? StructuralRight(left, right) :
            TypeGuard.TObject(right) ? TObjectRight(left, right) :
                TypeGuard.TRecord(right) ? TRecordRight(left, right) :
                    TypeGuard.TNull(right) ? TypeExtendsResult.True :
                        TypeExtendsResult.False);
    }
    // --------------------------------------------------------------------------
    // Number
    // --------------------------------------------------------------------------
    function TNumberRight(left, right) {
        // prettier-ignore
        return (TypeGuard.TLiteralNumber(left) ? TypeExtendsResult.True :
            TypeGuard.TNumber(left) || TypeGuard.TInteger(left) ? TypeExtendsResult.True :
                TypeExtendsResult.False);
    }
    function TNumber(left, right) {
        // prettier-ignore
        return (IsStructuralRight(right) ? StructuralRight(left, right) :
            TypeGuard.TObject(right) ? TObjectRight(left, right) :
                TypeGuard.TRecord(right) ? TRecordRight(left, right) :
                    TypeGuard.TInteger(right) || TypeGuard.TNumber(right) ? TypeExtendsResult.True :
                        TypeExtendsResult.False);
    }
    // --------------------------------------------------------------------------
    // Object
    // --------------------------------------------------------------------------
    function IsObjectPropertyCount(schema, count) {
        return Object.getOwnPropertyNames(schema.properties).length === count;
    }
    function IsObjectStringLike(schema) {
        return IsObjectArrayLike(schema);
    }
    function IsObjectSymbolLike(schema) {
        // prettier-ignore
        return IsObjectPropertyCount(schema, 0) || (IsObjectPropertyCount(schema, 1) && 'description' in schema.properties && TypeGuard.TUnion(schema.properties.description) && schema.properties.description.anyOf.length === 2 && ((TypeGuard.TString(schema.properties.description.anyOf[0]) &&
            TypeGuard.TUndefined(schema.properties.description.anyOf[1])) || (TypeGuard.TString(schema.properties.description.anyOf[1]) &&
            TypeGuard.TUndefined(schema.properties.description.anyOf[0]))));
    }
    function IsObjectNumberLike(schema) {
        return IsObjectPropertyCount(schema, 0);
    }
    function IsObjectBooleanLike(schema) {
        return IsObjectPropertyCount(schema, 0);
    }
    function IsObjectBigIntLike(schema) {
        return IsObjectPropertyCount(schema, 0);
    }
    function IsObjectDateLike(schema) {
        return IsObjectPropertyCount(schema, 0);
    }
    function IsObjectUint8ArrayLike(schema) {
        return IsObjectArrayLike(schema);
    }
    function IsObjectFunctionLike(schema) {
        const length = exports.Type.Number();
        return IsObjectPropertyCount(schema, 0) || (IsObjectPropertyCount(schema, 1) && 'length' in schema.properties && IntoBooleanResult(Visit(schema.properties['length'], length)) === TypeExtendsResult.True);
    }
    function IsObjectConstructorLike(schema) {
        return IsObjectPropertyCount(schema, 0);
    }
    function IsObjectArrayLike(schema) {
        const length = exports.Type.Number();
        return IsObjectPropertyCount(schema, 0) || (IsObjectPropertyCount(schema, 1) && 'length' in schema.properties && IntoBooleanResult(Visit(schema.properties['length'], length)) === TypeExtendsResult.True);
    }
    function IsObjectPromiseLike(schema) {
        const then = exports.Type.Function([exports.Type.Any()], exports.Type.Any());
        return IsObjectPropertyCount(schema, 0) || (IsObjectPropertyCount(schema, 1) && 'then' in schema.properties && IntoBooleanResult(Visit(schema.properties['then'], then)) === TypeExtendsResult.True);
    }
    // --------------------------------------------------------------------------
    // Property
    // --------------------------------------------------------------------------
    function Property(left, right) {
        // prettier-ignore
        return (Visit(left, right) === TypeExtendsResult.False ? TypeExtendsResult.False :
            TypeGuard.TOptional(left) && !TypeGuard.TOptional(right) ? TypeExtendsResult.False :
                TypeExtendsResult.True);
    }
    function TObjectRight(left, right) {
        // prettier-ignore
        return (TypeGuard.TUnknown(left) ? TypeExtendsResult.False :
            TypeGuard.TAny(left) ? TypeExtendsResult.Union : (TypeGuard.TNever(left) ||
                (TypeGuard.TLiteralString(left) && IsObjectStringLike(right)) ||
                (TypeGuard.TLiteralNumber(left) && IsObjectNumberLike(right)) ||
                (TypeGuard.TLiteralBoolean(left) && IsObjectBooleanLike(right)) ||
                (TypeGuard.TSymbol(left) && IsObjectSymbolLike(right)) ||
                (TypeGuard.TBigInt(left) && IsObjectBigIntLike(right)) ||
                (TypeGuard.TString(left) && IsObjectStringLike(right)) ||
                (TypeGuard.TSymbol(left) && IsObjectSymbolLike(right)) ||
                (TypeGuard.TNumber(left) && IsObjectNumberLike(right)) ||
                (TypeGuard.TInteger(left) && IsObjectNumberLike(right)) ||
                (TypeGuard.TBoolean(left) && IsObjectBooleanLike(right)) ||
                (TypeGuard.TUint8Array(left) && IsObjectUint8ArrayLike(right)) ||
                (TypeGuard.TDate(left) && IsObjectDateLike(right)) ||
                (TypeGuard.TConstructor(left) && IsObjectConstructorLike(right)) ||
                (TypeGuard.TFunction(left) && IsObjectFunctionLike(right))) ? TypeExtendsResult.True :
                (TypeGuard.TRecord(left) && TypeGuard.TString(RecordKey(left))) ? (() => {
                    // When expressing a Record with literal key values, the Record is converted into a Object with
                    // the Hint assigned as `Record`. This is used to invert the extends logic.
                    return right[exports.Hint] === 'Record' ? TypeExtendsResult.True : TypeExtendsResult.False;
                })() :
                    (TypeGuard.TRecord(left) && TypeGuard.TNumber(RecordKey(left))) ? (() => {
                        return IsObjectPropertyCount(right, 0)
                            ? TypeExtendsResult.True
                            : TypeExtendsResult.False;
                    })() :
                        TypeExtendsResult.False);
    }
    function TObject(left, right) {
        // prettier-ignore
        return (IsStructuralRight(right) ? StructuralRight(left, right) :
            TypeGuard.TRecord(right) ? TRecordRight(left, right) :
                !TypeGuard.TObject(right) ? TypeExtendsResult.False :
                    (() => {
                        for (const key of Object.getOwnPropertyNames(right.properties)) {
                            if (!(key in left.properties) && !TypeGuard.TOptional(right.properties[key])) {
                                return TypeExtendsResult.False;
                            }
                            if (TypeGuard.TOptional(right.properties[key])) {
                                return TypeExtendsResult.True;
                            }
                            if (Property(left.properties[key], right.properties[key]) === TypeExtendsResult.False) {
                                return TypeExtendsResult.False;
                            }
                        }
                        return TypeExtendsResult.True;
                    })());
    }
    // --------------------------------------------------------------------------
    // Promise
    // --------------------------------------------------------------------------
    function TPromise(left, right) {
        // prettier-ignore
        return (IsStructuralRight(right) ? StructuralRight(left, right) :
            TypeGuard.TObject(right) && IsObjectPromiseLike(right) ? TypeExtendsResult.True :
                !TypeGuard.TPromise(right) ? TypeExtendsResult.False :
                    IntoBooleanResult(Visit(left.item, right.item)));
    }
    // --------------------------------------------------------------------------
    // Record
    // --------------------------------------------------------------------------
    function RecordKey(schema) {
        // prettier-ignore
        return (exports.PatternNumberExact in schema.patternProperties ? exports.Type.Number() :
            exports.PatternStringExact in schema.patternProperties ? exports.Type.String() :
                Throw('Unknown record key pattern'));
    }
    function RecordValue(schema) {
        // prettier-ignore
        return (exports.PatternNumberExact in schema.patternProperties ? schema.patternProperties[exports.PatternNumberExact] :
            exports.PatternStringExact in schema.patternProperties ? schema.patternProperties[exports.PatternStringExact] :
                Throw('Unable to get record value schema'));
    }
    function TRecordRight(left, right) {
        const [Key, Value] = [RecordKey(right), RecordValue(right)];
        // prettier-ignore
        return ((TypeGuard.TLiteralString(left) && TypeGuard.TNumber(Key) && IntoBooleanResult(Visit(left, Value)) === TypeExtendsResult.True) ? TypeExtendsResult.True :
            TypeGuard.TUint8Array(left) && TypeGuard.TNumber(Key) ? Visit(left, Value) :
                TypeGuard.TString(left) && TypeGuard.TNumber(Key) ? Visit(left, Value) :
                    TypeGuard.TArray(left) && TypeGuard.TNumber(Key) ? Visit(left, Value) :
                        TypeGuard.TObject(left) ? (() => {
                            for (const key of Object.getOwnPropertyNames(left.properties)) {
                                if (Property(Value, left.properties[key]) === TypeExtendsResult.False) {
                                    return TypeExtendsResult.False;
                                }
                            }
                            return TypeExtendsResult.True;
                        })() :
                            TypeExtendsResult.False);
    }
    function TRecord(left, right) {
        // prettier-ignore
        return (IsStructuralRight(right) ? StructuralRight(left, right) :
            TypeGuard.TObject(right) ? TObjectRight(left, right) :
                !TypeGuard.TRecord(right) ? TypeExtendsResult.False :
                    Visit(RecordValue(left), RecordValue(right)));
    }
    // --------------------------------------------------------------------------
    // String
    // --------------------------------------------------------------------------
    function TStringRight(left, right) {
        // prettier-ignore
        return (TypeGuard.TLiteral(left) && ValueGuard.IsString(left.const) ? TypeExtendsResult.True :
            TypeGuard.TString(left) ? TypeExtendsResult.True :
                TypeExtendsResult.False);
    }
    function TString(left, right) {
        // prettier-ignore
        return (IsStructuralRight(right) ? StructuralRight(left, right) :
            TypeGuard.TObject(right) ? TObjectRight(left, right) :
                TypeGuard.TRecord(right) ? TRecordRight(left, right) :
                    TypeGuard.TString(right) ? TypeExtendsResult.True :
                        TypeExtendsResult.False);
    }
    // --------------------------------------------------------------------------
    // Symbol
    // --------------------------------------------------------------------------
    function TSymbol(left, right) {
        // prettier-ignore
        return (IsStructuralRight(right) ? StructuralRight(left, right) :
            TypeGuard.TObject(right) ? TObjectRight(left, right) :
                TypeGuard.TRecord(right) ? TRecordRight(left, right) :
                    TypeGuard.TSymbol(right) ? TypeExtendsResult.True :
                        TypeExtendsResult.False);
    }
    // --------------------------------------------------------------------------
    // TemplateLiteral
    // --------------------------------------------------------------------------
    function TTemplateLiteral(left, right) {
        // TemplateLiteral types are resolved to either unions for finite expressions or string
        // for infinite expressions. Here we call to TemplateLiteralResolver to resolve for
        // either type and continue evaluating.
        // prettier-ignore
        return (TypeGuard.TTemplateLiteral(left) ? Visit(TemplateLiteralResolver.Resolve(left), right) :
            TypeGuard.TTemplateLiteral(right) ? Visit(left, TemplateLiteralResolver.Resolve(right)) :
                Throw('Invalid fallthrough for TemplateLiteral'));
    }
    // --------------------------------------------------------------------------
    // Tuple
    // --------------------------------------------------------------------------
    function IsArrayOfTuple(left, right) {
        // prettier-ignore
        return (TypeGuard.TArray(right) &&
            left.items !== undefined &&
            left.items.every((schema) => Visit(schema, right.items) === TypeExtendsResult.True));
    }
    function TTupleRight(left, right) {
        // prettier-ignore
        return (TypeGuard.TNever(left) ? TypeExtendsResult.True :
            TypeGuard.TUnknown(left) ? TypeExtendsResult.False :
                TypeGuard.TAny(left) ? TypeExtendsResult.Union :
                    TypeExtendsResult.False);
    }
    function TTuple(left, right) {
        // prettier-ignore
        return (IsStructuralRight(right) ? StructuralRight(left, right) :
            TypeGuard.TObject(right) && IsObjectArrayLike(right) ? TypeExtendsResult.True :
                TypeGuard.TArray(right) && IsArrayOfTuple(left, right) ? TypeExtendsResult.True :
                    !TypeGuard.TTuple(right) ? TypeExtendsResult.False :
                        (ValueGuard.IsUndefined(left.items) && !ValueGuard.IsUndefined(right.items)) || (!ValueGuard.IsUndefined(left.items) && ValueGuard.IsUndefined(right.items)) ? TypeExtendsResult.False :
                            (ValueGuard.IsUndefined(left.items) && !ValueGuard.IsUndefined(right.items)) ? TypeExtendsResult.True :
                                left.items.every((schema, index) => Visit(schema, right.items[index]) === TypeExtendsResult.True) ? TypeExtendsResult.True :
                                    TypeExtendsResult.False);
    }
    // --------------------------------------------------------------------------
    // Uint8Array
    // --------------------------------------------------------------------------
    function TUint8Array(left, right) {
        // prettier-ignore
        return (IsStructuralRight(right) ? StructuralRight(left, right) :
            TypeGuard.TObject(right) ? TObjectRight(left, right) :
                TypeGuard.TRecord(right) ? TRecordRight(left, right) :
                    TypeGuard.TUint8Array(right) ? TypeExtendsResult.True :
                        TypeExtendsResult.False);
    }
    // --------------------------------------------------------------------------
    // Undefined
    // --------------------------------------------------------------------------
    function TUndefined(left, right) {
        // prettier-ignore
        return (IsStructuralRight(right) ? StructuralRight(left, right) :
            TypeGuard.TObject(right) ? TObjectRight(left, right) :
                TypeGuard.TRecord(right) ? TRecordRight(left, right) :
                    TypeGuard.TVoid(right) ? VoidRight(left, right) :
                        TypeGuard.TUndefined(right) ? TypeExtendsResult.True :
                            TypeExtendsResult.False);
    }
    // --------------------------------------------------------------------------
    // Union
    // --------------------------------------------------------------------------
    function TUnionRight(left, right) {
        // prettier-ignore
        return right.anyOf.some((schema) => Visit(left, schema) === TypeExtendsResult.True)
            ? TypeExtendsResult.True
            : TypeExtendsResult.False;
    }
    function TUnion(left, right) {
        // prettier-ignore
        return left.anyOf.every((schema) => Visit(schema, right) === TypeExtendsResult.True)
            ? TypeExtendsResult.True
            : TypeExtendsResult.False;
    }
    // --------------------------------------------------------------------------
    // Unknown
    // --------------------------------------------------------------------------
    function TUnknownRight(left, right) {
        return TypeExtendsResult.True;
    }
    function TUnknown(left, right) {
        // prettier-ignore
        return (TypeGuard.TNever(right) ? TNeverRight(left, right) :
            TypeGuard.TIntersect(right) ? TIntersectRight(left, right) :
                TypeGuard.TUnion(right) ? TUnionRight(left, right) :
                    TypeGuard.TAny(right) ? TAnyRight(left, right) :
                        TypeGuard.TString(right) ? TStringRight(left, right) :
                            TypeGuard.TNumber(right) ? TNumberRight(left, right) :
                                TypeGuard.TInteger(right) ? TIntegerRight(left, right) :
                                    TypeGuard.TBoolean(right) ? TBooleanRight(left, right) :
                                        TypeGuard.TArray(right) ? TArrayRight(left, right) :
                                            TypeGuard.TTuple(right) ? TTupleRight(left, right) :
                                                TypeGuard.TObject(right) ? TObjectRight(left, right) :
                                                    TypeGuard.TUnknown(right) ? TypeExtendsResult.True :
                                                        TypeExtendsResult.False);
    }
    // --------------------------------------------------------------------------
    // Void
    // --------------------------------------------------------------------------
    function VoidRight(left, right) {
        // prettier-ignore
        return TypeGuard.TUndefined(left) ? TypeExtendsResult.True :
            TypeGuard.TUndefined(left) ? TypeExtendsResult.True :
                TypeExtendsResult.False;
    }
    function TVoid(left, right) {
        // prettier-ignore
        return TypeGuard.TIntersect(right) ? TIntersectRight(left, right) :
            TypeGuard.TUnion(right) ? TUnionRight(left, right) :
                TypeGuard.TUnknown(right) ? TUnknownRight(left, right) :
                    TypeGuard.TAny(right) ? TAnyRight(left, right) :
                        TypeGuard.TObject(right) ? TObjectRight(left, right) :
                            TypeGuard.TVoid(right) ? TypeExtendsResult.True :
                                TypeExtendsResult.False;
    }
    function Visit(left, right) {
        // prettier-ignore
        return (
        // resolvable
        (TypeGuard.TTemplateLiteral(left) || TypeGuard.TTemplateLiteral(right)) ? TTemplateLiteral(left, right) :
            (TypeGuard.TNot(left) || TypeGuard.TNot(right)) ? TNot(left, right) :
                // standard
                TypeGuard.TAny(left) ? TAny(left, right) :
                    TypeGuard.TArray(left) ? TArray(left, right) :
                        TypeGuard.TBigInt(left) ? TBigInt(left, right) :
                            TypeGuard.TBoolean(left) ? TBoolean(left, right) :
                                TypeGuard.TAsyncIterator(left) ? TAsyncIterator(left, right) :
                                    TypeGuard.TConstructor(left) ? TConstructor(left, right) :
                                        TypeGuard.TDate(left) ? TDate(left, right) :
                                            TypeGuard.TFunction(left) ? TFunction(left, right) :
                                                TypeGuard.TInteger(left) ? TInteger(left, right) :
                                                    TypeGuard.TIntersect(left) ? TIntersect(left, right) :
                                                        TypeGuard.TIterator(left) ? TIterator(left, right) :
                                                            TypeGuard.TLiteral(left) ? TLiteral(left, right) :
                                                                TypeGuard.TNever(left) ? TNever(left, right) :
                                                                    TypeGuard.TNull(left) ? TNull(left, right) :
                                                                        TypeGuard.TNumber(left) ? TNumber(left, right) :
                                                                            TypeGuard.TObject(left) ? TObject(left, right) :
                                                                                TypeGuard.TRecord(left) ? TRecord(left, right) :
                                                                                    TypeGuard.TString(left) ? TString(left, right) :
                                                                                        TypeGuard.TSymbol(left) ? TSymbol(left, right) :
                                                                                            TypeGuard.TTuple(left) ? TTuple(left, right) :
                                                                                                TypeGuard.TPromise(left) ? TPromise(left, right) :
                                                                                                    TypeGuard.TUint8Array(left) ? TUint8Array(left, right) :
                                                                                                        TypeGuard.TUndefined(left) ? TUndefined(left, right) :
                                                                                                            TypeGuard.TUnion(left) ? TUnion(left, right) :
                                                                                                                TypeGuard.TUnknown(left) ? TUnknown(left, right) :
                                                                                                                    TypeGuard.TVoid(left) ? TVoid(left, right) :
                                                                                                                        Throw(`Unknown left type operand '${left[exports.Kind]}'`));
    }
    function Extends(left, right) {
        return Visit(left, right);
    }
    TypeExtends.Extends = Extends;
})(TypeExtends || (exports.TypeExtends = TypeExtends = {}));
// --------------------------------------------------------------------------
// TypeClone
// --------------------------------------------------------------------------
/** Specialized Clone for Types */
var TypeClone;
(function (TypeClone) {
    function ArrayType(value) {
        return value.map((value) => Visit(value));
    }
    function DateType(value) {
        return new Date(value.getTime());
    }
    function Uint8ArrayType(value) {
        return new Uint8Array(value);
    }
    function ObjectType(value) {
        const clonedProperties = Object.getOwnPropertyNames(value).reduce((acc, key) => ({ ...acc, [key]: Visit(value[key]) }), {});
        const clonedSymbols = Object.getOwnPropertySymbols(value).reduce((acc, key) => ({ ...acc, [key]: Visit(value[key]) }), {});
        return { ...clonedProperties, ...clonedSymbols };
    }
    function Visit(value) {
        // prettier-ignore
        return (ValueGuard.IsArray(value) ? ArrayType(value) :
            ValueGuard.IsDate(value) ? DateType(value) :
                ValueGuard.IsUint8Array(value) ? Uint8ArrayType(value) :
                    ValueGuard.IsObject(value) ? ObjectType(value) :
                        value);
    }
    /** Clones a Rest */
    function Rest(schemas) {
        return schemas.map((schema) => Type(schema));
    }
    TypeClone.Rest = Rest;
    /** Clones a Type */
    function Type(schema, options = {}) {
        return { ...Visit(schema), ...options };
    }
    TypeClone.Type = Type;
})(TypeClone || (exports.TypeClone = TypeClone = {}));
// --------------------------------------------------------------------------
// IndexedAccessor
// --------------------------------------------------------------------------
var IndexedAccessor;
(function (IndexedAccessor) {
    function OptionalUnwrap(schema) {
        return schema.map((schema) => {
            const { [exports.Optional]: _, ...clone } = TypeClone.Type(schema);
            return clone;
        });
    }
    function IsIntersectOptional(schema) {
        return schema.every((schema) => TypeGuard.TOptional(schema));
    }
    function IsUnionOptional(schema) {
        return schema.some((schema) => TypeGuard.TOptional(schema));
    }
    function ResolveIntersect(schema) {
        return IsIntersectOptional(schema.allOf) ? exports.Type.Optional(exports.Type.Intersect(OptionalUnwrap(schema.allOf))) : schema;
    }
    function ResolveUnion(schema) {
        return IsUnionOptional(schema.anyOf) ? exports.Type.Optional(exports.Type.Union(OptionalUnwrap(schema.anyOf))) : schema;
    }
    function ResolveOptional(schema) {
        // prettier-ignore
        return schema[exports.Kind] === 'Intersect' ? ResolveIntersect(schema) :
            schema[exports.Kind] === 'Union' ? ResolveUnion(schema) :
                schema;
    }
    function TIntersect(schema, key) {
        const resolved = schema.allOf.reduce((acc, schema) => {
            const indexed = Visit(schema, key);
            return indexed[exports.Kind] === 'Never' ? acc : [...acc, indexed];
        }, []);
        return ResolveOptional(exports.Type.Intersect(resolved));
    }
    function TUnion(schema, key) {
        const resolved = schema.anyOf.map((schema) => Visit(schema, key));
        return ResolveOptional(exports.Type.Union(resolved));
    }
    function TObject(schema, key) {
        const property = schema.properties[key];
        return ValueGuard.IsUndefined(property) ? exports.Type.Never() : exports.Type.Union([property]);
    }
    function TTuple(schema, key) {
        const items = schema.items;
        if (ValueGuard.IsUndefined(items))
            return exports.Type.Never();
        const element = items[key]; //
        if (ValueGuard.IsUndefined(element))
            return exports.Type.Never();
        return element;
    }
    function Visit(schema, key) {
        // prettier-ignore
        return schema[exports.Kind] === 'Intersect' ? TIntersect(schema, key) :
            schema[exports.Kind] === 'Union' ? TUnion(schema, key) :
                schema[exports.Kind] === 'Object' ? TObject(schema, key) :
                    schema[exports.Kind] === 'Tuple' ? TTuple(schema, key) :
                        exports.Type.Never();
    }
    function Resolve(schema, keys, options = {}) {
        const resolved = keys.map((key) => Visit(schema, key.toString()));
        return ResolveOptional(exports.Type.Union(resolved, options));
    }
    IndexedAccessor.Resolve = Resolve;
})(IndexedAccessor || (exports.IndexedAccessor = IndexedAccessor = {}));
// --------------------------------------------------------------------------
// Intrinsic
// --------------------------------------------------------------------------
var Intrinsic;
(function (Intrinsic) {
    function Uncapitalize(value) {
        const [first, rest] = [value.slice(0, 1), value.slice(1)];
        return `${first.toLowerCase()}${rest}`;
    }
    function Capitalize(value) {
        const [first, rest] = [value.slice(0, 1), value.slice(1)];
        return `${first.toUpperCase()}${rest}`;
    }
    function Uppercase(value) {
        return value.toUpperCase();
    }
    function Lowercase(value) {
        return value.toLowerCase();
    }
    function IntrinsicTemplateLiteral(schema, mode) {
        // note: template literals require special runtime handling as they are encoded in string patterns.
        // This diverges from the mapped type which would otherwise map on the template literal kind.
        const expression = TemplateLiteralParser.ParseExact(schema.pattern);
        const finite = TemplateLiteralFinite.Check(expression);
        if (!finite)
            return { ...schema, pattern: IntrinsicLiteral(schema.pattern, mode) };
        const strings = [...TemplateLiteralGenerator.Generate(expression)];
        const literals = strings.map((value) => exports.Type.Literal(value));
        const mapped = IntrinsicRest(literals, mode);
        const union = exports.Type.Union(mapped);
        return exports.Type.TemplateLiteral([union]);
    }
    function IntrinsicLiteral(value, mode) {
        // prettier-ignore
        return typeof value === 'string' ? (mode === 'Uncapitalize' ? Uncapitalize(value) :
            mode === 'Capitalize' ? Capitalize(value) :
                mode === 'Uppercase' ? Uppercase(value) :
                    mode === 'Lowercase' ? Lowercase(value) :
                        value) : value.toString();
    }
    function IntrinsicRest(schema, mode) {
        if (schema.length === 0)
            return [];
        const [L, ...R] = schema;
        return [Map(L, mode), ...IntrinsicRest(R, mode)];
    }
    function Visit(schema, mode) {
        // prettier-ignore
        return TypeGuard.TTemplateLiteral(schema) ? IntrinsicTemplateLiteral(schema, mode) :
            TypeGuard.TUnion(schema) ? exports.Type.Union(IntrinsicRest(schema.anyOf, mode)) :
                TypeGuard.TLiteral(schema) ? exports.Type.Literal(IntrinsicLiteral(schema.const, mode)) :
                    schema;
    }
    /** Applies an intrinsic string manipulation to the given type. */
    function Map(schema, mode) {
        return Visit(schema, mode);
    }
    Intrinsic.Map = Map;
})(Intrinsic || (exports.Intrinsic = Intrinsic = {}));
// --------------------------------------------------------------------------
// ObjectMap
// --------------------------------------------------------------------------
var ObjectMap;
(function (ObjectMap) {
    function TIntersect(schema, callback) {
        // prettier-ignore
        return exports.Type.Intersect(schema.allOf.map((inner) => Visit(inner, callback)), { ...schema });
    }
    function TUnion(schema, callback) {
        // prettier-ignore
        return exports.Type.Union(schema.anyOf.map((inner) => Visit(inner, callback)), { ...schema });
    }
    function TObject(schema, callback) {
        return callback(schema);
    }
    function Visit(schema, callback) {
        // There are cases where users need to map objects with unregistered kinds. Using a TypeGuard here would
        // prevent sub schema mapping as unregistered kinds will not pass TSchema checks. This is notable in the
        // case of TObject where unregistered property kinds cause the TObject check to fail. As mapping is only
        // used for composition, we use explicit checks instead.
        // prettier-ignore
        return (schema[exports.Kind] === 'Intersect' ? TIntersect(schema, callback) :
            schema[exports.Kind] === 'Union' ? TUnion(schema, callback) :
                schema[exports.Kind] === 'Object' ? TObject(schema, callback) :
                    schema);
    }
    function Map(schema, callback, options) {
        return { ...Visit(TypeClone.Type(schema), callback), ...options };
    }
    ObjectMap.Map = Map;
})(ObjectMap || (exports.ObjectMap = ObjectMap = {}));
var KeyResolver;
(function (KeyResolver) {
    function UnwrapPattern(key) {
        return key[0] === '^' && key[key.length - 1] === '$' ? key.slice(1, key.length - 1) : key;
    }
    function TIntersect(schema, options) {
        return schema.allOf.reduce((acc, schema) => [...acc, ...Visit(schema, options)], []);
    }
    function TUnion(schema, options) {
        const sets = schema.anyOf.map((inner) => Visit(inner, options));
        return [...sets.reduce((set, outer) => outer.map((key) => (sets.every((inner) => inner.includes(key)) ? set.add(key) : set))[0], new Set())];
    }
    function TObject(schema, options) {
        return Object.getOwnPropertyNames(schema.properties);
    }
    function TRecord(schema, options) {
        return options.includePatterns ? Object.getOwnPropertyNames(schema.patternProperties) : [];
    }
    function Visit(schema, options) {
        // prettier-ignore
        return (TypeGuard.TIntersect(schema) ? TIntersect(schema, options) :
            TypeGuard.TUnion(schema) ? TUnion(schema, options) :
                TypeGuard.TObject(schema) ? TObject(schema, options) :
                    TypeGuard.TRecord(schema) ? TRecord(schema, options) :
                        []);
    }
    /** Resolves an array of keys in this schema */
    function ResolveKeys(schema, options) {
        return [...new Set(Visit(schema, options))];
    }
    KeyResolver.ResolveKeys = ResolveKeys;
    /** Resolves a regular expression pattern matching all keys in this schema */
    function ResolvePattern(schema) {
        const keys = ResolveKeys(schema, { includePatterns: true });
        const pattern = keys.map((key) => `(${UnwrapPattern(key)})`);
        return `^(${pattern.join('|')})$`;
    }
    KeyResolver.ResolvePattern = ResolvePattern;
})(KeyResolver || (exports.KeyResolver = KeyResolver = {}));
// --------------------------------------------------------------------------
// KeyArrayResolver
// --------------------------------------------------------------------------
class KeyArrayResolverError extends TypeBoxError {
}
exports.KeyArrayResolverError = KeyArrayResolverError;
var KeyArrayResolver;
(function (KeyArrayResolver) {
    /** Resolves an array of string[] keys from the given schema or array type. */
    function Resolve(schema) {
        // prettier-ignore
        return Array.isArray(schema) ? schema :
            TypeGuard.TUnionLiteral(schema) ? schema.anyOf.map((schema) => schema.const.toString()) :
                TypeGuard.TLiteral(schema) ? [schema.const] :
                    TypeGuard.TTemplateLiteral(schema) ? (() => {
                        const expression = TemplateLiteralParser.ParseExact(schema.pattern);
                        if (!TemplateLiteralFinite.Check(expression))
                            throw new KeyArrayResolverError('Cannot resolve keys from infinite template expression');
                        return [...TemplateLiteralGenerator.Generate(expression)];
                    })() : [];
    }
    KeyArrayResolver.Resolve = Resolve;
})(KeyArrayResolver || (exports.KeyArrayResolver = KeyArrayResolver = {}));
// --------------------------------------------------------------------------
// UnionResolver
// --------------------------------------------------------------------------
var UnionResolver;
(function (UnionResolver) {
    function* TUnion(union) {
        for (const schema of union.anyOf) {
            if (schema[exports.Kind] === 'Union') {
                yield* TUnion(schema);
            }
            else {
                yield schema;
            }
        }
    }
    /** Returns a resolved union with interior unions flattened */
    function Resolve(union) {
        return exports.Type.Union([...TUnion(union)], { ...union });
    }
    UnionResolver.Resolve = Resolve;
})(UnionResolver || (exports.UnionResolver = UnionResolver = {}));
// --------------------------------------------------------------------------
// TemplateLiteralPattern
// --------------------------------------------------------------------------
class TemplateLiteralPatternError extends TypeBoxError {
}
exports.TemplateLiteralPatternError = TemplateLiteralPatternError;
var TemplateLiteralPattern;
(function (TemplateLiteralPattern) {
    function Throw(message) {
        throw new TemplateLiteralPatternError(message);
    }
    function Escape(value) {
        return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    function Visit(schema, acc) {
        // prettier-ignore
        return (TypeGuard.TTemplateLiteral(schema) ? schema.pattern.slice(1, schema.pattern.length - 1) :
            TypeGuard.TUnion(schema) ? `(${schema.anyOf.map((schema) => Visit(schema, acc)).join('|')})` :
                TypeGuard.TNumber(schema) ? `${acc}${exports.PatternNumber}` :
                    TypeGuard.TInteger(schema) ? `${acc}${exports.PatternNumber}` :
                        TypeGuard.TBigInt(schema) ? `${acc}${exports.PatternNumber}` :
                            TypeGuard.TString(schema) ? `${acc}${exports.PatternString}` :
                                TypeGuard.TLiteral(schema) ? `${acc}${Escape(schema.const.toString())}` :
                                    TypeGuard.TBoolean(schema) ? `${acc}${exports.PatternBoolean}` :
                                        Throw(`Unexpected Kind '${schema[exports.Kind]}'`));
    }
    function Create(kinds) {
        return `^${kinds.map((schema) => Visit(schema, '')).join('')}\$`;
    }
    TemplateLiteralPattern.Create = Create;
})(TemplateLiteralPattern || (exports.TemplateLiteralPattern = TemplateLiteralPattern = {}));
// --------------------------------------------------------------------------------------
// TemplateLiteralResolver
// --------------------------------------------------------------------------------------
var TemplateLiteralResolver;
(function (TemplateLiteralResolver) {
    /** Resolves a template literal as a TUnion */
    function Resolve(template) {
        const expression = TemplateLiteralParser.ParseExact(template.pattern);
        if (!TemplateLiteralFinite.Check(expression))
            return exports.Type.String();
        const literals = [...TemplateLiteralGenerator.Generate(expression)].map((value) => exports.Type.Literal(value));
        return exports.Type.Union(literals);
    }
    TemplateLiteralResolver.Resolve = Resolve;
})(TemplateLiteralResolver || (exports.TemplateLiteralResolver = TemplateLiteralResolver = {}));
// --------------------------------------------------------------------------------------
// TemplateLiteralParser
// --------------------------------------------------------------------------------------
class TemplateLiteralParserError extends TypeBoxError {
}
exports.TemplateLiteralParserError = TemplateLiteralParserError;
var TemplateLiteralParser;
(function (TemplateLiteralParser) {
    function IsNonEscaped(pattern, index, char) {
        return pattern[index] === char && pattern.charCodeAt(index - 1) !== 92;
    }
    function IsOpenParen(pattern, index) {
        return IsNonEscaped(pattern, index, '(');
    }
    function IsCloseParen(pattern, index) {
        return IsNonEscaped(pattern, index, ')');
    }
    function IsSeparator(pattern, index) {
        return IsNonEscaped(pattern, index, '|');
    }
    function IsGroup(pattern) {
        if (!(IsOpenParen(pattern, 0) && IsCloseParen(pattern, pattern.length - 1)))
            return false;
        let count = 0;
        for (let index = 0; index < pattern.length; index++) {
            if (IsOpenParen(pattern, index))
                count += 1;
            if (IsCloseParen(pattern, index))
                count -= 1;
            if (count === 0 && index !== pattern.length - 1)
                return false;
        }
        return true;
    }
    function InGroup(pattern) {
        return pattern.slice(1, pattern.length - 1);
    }
    function IsPrecedenceOr(pattern) {
        let count = 0;
        for (let index = 0; index < pattern.length; index++) {
            if (IsOpenParen(pattern, index))
                count += 1;
            if (IsCloseParen(pattern, index))
                count -= 1;
            if (IsSeparator(pattern, index) && count === 0)
                return true;
        }
        return false;
    }
    function IsPrecedenceAnd(pattern) {
        for (let index = 0; index < pattern.length; index++) {
            if (IsOpenParen(pattern, index))
                return true;
        }
        return false;
    }
    function Or(pattern) {
        let [count, start] = [0, 0];
        const expressions = [];
        for (let index = 0; index < pattern.length; index++) {
            if (IsOpenParen(pattern, index))
                count += 1;
            if (IsCloseParen(pattern, index))
                count -= 1;
            if (IsSeparator(pattern, index) && count === 0) {
                const range = pattern.slice(start, index);
                if (range.length > 0)
                    expressions.push(Parse(range));
                start = index + 1;
            }
        }
        const range = pattern.slice(start);
        if (range.length > 0)
            expressions.push(Parse(range));
        if (expressions.length === 0)
            return { type: 'const', const: '' };
        if (expressions.length === 1)
            return expressions[0];
        return { type: 'or', expr: expressions };
    }
    function And(pattern) {
        function Group(value, index) {
            if (!IsOpenParen(value, index))
                throw new TemplateLiteralParserError(`TemplateLiteralParser: Index must point to open parens`);
            let count = 0;
            for (let scan = index; scan < value.length; scan++) {
                if (IsOpenParen(value, scan))
                    count += 1;
                if (IsCloseParen(value, scan))
                    count -= 1;
                if (count === 0)
                    return [index, scan];
            }
            throw new TemplateLiteralParserError(`TemplateLiteralParser: Unclosed group parens in expression`);
        }
        function Range(pattern, index) {
            for (let scan = index; scan < pattern.length; scan++) {
                if (IsOpenParen(pattern, scan))
                    return [index, scan];
            }
            return [index, pattern.length];
        }
        const expressions = [];
        for (let index = 0; index < pattern.length; index++) {
            if (IsOpenParen(pattern, index)) {
                const [start, end] = Group(pattern, index);
                const range = pattern.slice(start, end + 1);
                expressions.push(Parse(range));
                index = end;
            }
            else {
                const [start, end] = Range(pattern, index);
                const range = pattern.slice(start, end);
                if (range.length > 0)
                    expressions.push(Parse(range));
                index = end - 1;
            }
        }
        // prettier-ignore
        return (expressions.length === 0) ? { type: 'const', const: '' } :
            (expressions.length === 1) ? expressions[0] :
                { type: 'and', expr: expressions };
    }
    /** Parses a pattern and returns an expression tree */
    function Parse(pattern) {
        // prettier-ignore
        return IsGroup(pattern) ? Parse(InGroup(pattern)) :
            IsPrecedenceOr(pattern) ? Or(pattern) :
                IsPrecedenceAnd(pattern) ? And(pattern) :
                    { type: 'const', const: pattern };
    }
    TemplateLiteralParser.Parse = Parse;
    /** Parses a pattern and strips forward and trailing ^ and $ */
    function ParseExact(pattern) {
        return Parse(pattern.slice(1, pattern.length - 1));
    }
    TemplateLiteralParser.ParseExact = ParseExact;
})(TemplateLiteralParser || (exports.TemplateLiteralParser = TemplateLiteralParser = {}));
// --------------------------------------------------------------------------------------
// TemplateLiteralFinite
// --------------------------------------------------------------------------------------
class TemplateLiteralFiniteError extends TypeBoxError {
}
exports.TemplateLiteralFiniteError = TemplateLiteralFiniteError;
var TemplateLiteralFinite;
(function (TemplateLiteralFinite) {
    function Throw(message) {
        throw new TemplateLiteralFiniteError(message);
    }
    function IsNumber(expression) {
        // prettier-ignore
        return (expression.type === 'or' &&
            expression.expr.length === 2 &&
            expression.expr[0].type === 'const' &&
            expression.expr[0].const === '0' &&
            expression.expr[1].type === 'const' &&
            expression.expr[1].const === '[1-9][0-9]*');
    }
    function IsBoolean(expression) {
        // prettier-ignore
        return (expression.type === 'or' &&
            expression.expr.length === 2 &&
            expression.expr[0].type === 'const' &&
            expression.expr[0].const === 'true' &&
            expression.expr[1].type === 'const' &&
            expression.expr[1].const === 'false');
    }
    function IsString(expression) {
        return expression.type === 'const' && expression.const === '.*';
    }
    function Check(expression) {
        // prettier-ignore
        return IsBoolean(expression) ? true :
            IsNumber(expression) || IsString(expression) ? false :
                (expression.type === 'and') ? expression.expr.every((expr) => Check(expr)) :
                    (expression.type === 'or') ? expression.expr.every((expr) => Check(expr)) :
                        (expression.type === 'const') ? true :
                            Throw(`Unknown expression type`);
    }
    TemplateLiteralFinite.Check = Check;
})(TemplateLiteralFinite || (exports.TemplateLiteralFinite = TemplateLiteralFinite = {}));
// --------------------------------------------------------------------------------------
// TemplateLiteralGenerator
// --------------------------------------------------------------------------------------
class TemplateLiteralGeneratorError extends TypeBoxError {
}
exports.TemplateLiteralGeneratorError = TemplateLiteralGeneratorError;
var TemplateLiteralGenerator;
(function (TemplateLiteralGenerator) {
    function* Reduce(buffer) {
        if (buffer.length === 1)
            return yield* buffer[0];
        for (const left of buffer[0]) {
            for (const right of Reduce(buffer.slice(1))) {
                yield `${left}${right}`;
            }
        }
    }
    function* And(expression) {
        return yield* Reduce(expression.expr.map((expr) => [...Generate(expr)]));
    }
    function* Or(expression) {
        for (const expr of expression.expr)
            yield* Generate(expr);
    }
    function* Const(expression) {
        return yield expression.const;
    }
    function* Generate(expression) {
        // prettier-ignore
        return (expression.type === 'and' ? yield* And(expression) :
            expression.type === 'or' ? yield* Or(expression) :
                expression.type === 'const' ? yield* Const(expression) :
                    (() => { throw new TemplateLiteralGeneratorError('Unknown expression'); })());
    }
    TemplateLiteralGenerator.Generate = Generate;
})(TemplateLiteralGenerator || (exports.TemplateLiteralGenerator = TemplateLiteralGenerator = {}));
// ---------------------------------------------------------------------
// TemplateLiteralDslParser
// ---------------------------------------------------------------------
var TemplateLiteralDslParser;
(function (TemplateLiteralDslParser) {
    function* ParseUnion(template) {
        const trim = template.trim().replace(/"|'/g, '');
        // prettier-ignore
        return (trim === 'boolean' ? yield exports.Type.Boolean() :
            trim === 'number' ? yield exports.Type.Number() :
                trim === 'bigint' ? yield exports.Type.BigInt() :
                    trim === 'string' ? yield exports.Type.String() :
                        yield (() => {
                            const literals = trim.split('|').map((literal) => exports.Type.Literal(literal.trim()));
                            return (literals.length === 0 ? exports.Type.Never() :
                                literals.length === 1 ? literals[0] :
                                    exports.Type.Union(literals));
                        })());
    }
    function* ParseTerminal(template) {
        if (template[1] !== '{') {
            const L = exports.Type.Literal('$');
            const R = ParseLiteral(template.slice(1));
            return yield* [L, ...R];
        }
        for (let i = 2; i < template.length; i++) {
            if (template[i] === '}') {
                const L = ParseUnion(template.slice(2, i));
                const R = ParseLiteral(template.slice(i + 1));
                return yield* [...L, ...R];
            }
        }
        yield exports.Type.Literal(template);
    }
    function* ParseLiteral(template) {
        for (let i = 0; i < template.length; i++) {
            if (template[i] === '$') {
                const L = exports.Type.Literal(template.slice(0, i));
                const R = ParseTerminal(template.slice(i));
                return yield* [L, ...R];
            }
        }
        yield exports.Type.Literal(template);
    }
    function Parse(template_dsl) {
        return [...ParseLiteral(template_dsl)];
    }
    TemplateLiteralDslParser.Parse = Parse;
})(TemplateLiteralDslParser || (exports.TemplateLiteralDslParser = TemplateLiteralDslParser = {}));
// ---------------------------------------------------------------------
// TransformBuilder
// ---------------------------------------------------------------------
class TransformDecodeBuilder {
    constructor(schema) {
        this.schema = schema;
    }
    Decode(decode) {
        return new TransformEncodeBuilder(this.schema, decode);
    }
}
exports.TransformDecodeBuilder = TransformDecodeBuilder;
class TransformEncodeBuilder {
    constructor(schema, decode) {
        this.schema = schema;
        this.decode = decode;
    }
    Encode(encode) {
        const schema = TypeClone.Type(this.schema);
        // prettier-ignore
        return (TypeGuard.TTransform(schema) ? (() => {
            const Encode = (value) => schema[exports.Transform].Encode(encode(value));
            const Decode = (value) => this.decode(schema[exports.Transform].Decode(value));
            const Codec = { Encode: Encode, Decode: Decode };
            return { ...schema, [exports.Transform]: Codec };
        })() : (() => {
            const Codec = { Decode: this.decode, Encode: encode };
            return { ...schema, [exports.Transform]: Codec };
        })());
    }
}
exports.TransformEncodeBuilder = TransformEncodeBuilder;
// --------------------------------------------------------------------------
// TypeOrdinal: Used for auto $id generation
// --------------------------------------------------------------------------
let TypeOrdinal = 0;
// --------------------------------------------------------------------------
// TypeBuilder
// --------------------------------------------------------------------------
class TypeBuilderError extends TypeBoxError {
}
exports.TypeBuilderError = TypeBuilderError;
class TypeBuilder {
    /** `[Internal]` Creates a schema without `static` and `params` types */
    Create(schema) {
        return schema;
    }
    /** `[Internal]` Throws a TypeBuilder error with the given message */
    Throw(message) {
        throw new TypeBuilderError(message);
    }
    /** `[Internal]` Discards property keys from the given record type */
    Discard(record, keys) {
        return keys.reduce((acc, key) => {
            const { [key]: _, ...rest } = acc;
            return rest;
        }, record);
    }
    /** `[Json]` Omits compositing symbols from this schema */
    Strict(schema) {
        return JSON.parse(JSON.stringify(schema));
    }
}
exports.TypeBuilder = TypeBuilder;
// --------------------------------------------------------------------------
// JsonTypeBuilder
// --------------------------------------------------------------------------
class JsonTypeBuilder extends TypeBuilder {
    // ------------------------------------------------------------------------
    // Modifiers
    // ------------------------------------------------------------------------
    /** `[Json]` Creates a Readonly and Optional property */
    ReadonlyOptional(schema) {
        return this.Readonly(this.Optional(schema));
    }
    /** `[Json]` Creates a Readonly property */
    Readonly(schema) {
        return { ...TypeClone.Type(schema), [exports.Readonly]: 'Readonly' };
    }
    /** `[Json]` Creates an Optional property */
    Optional(schema) {
        return { ...TypeClone.Type(schema), [exports.Optional]: 'Optional' };
    }
    // ------------------------------------------------------------------------
    // Types
    // ------------------------------------------------------------------------
    /** `[Json]` Creates an Any type */
    Any(options = {}) {
        return this.Create({ ...options, [exports.Kind]: 'Any' });
    }
    /** `[Json]` Creates an Array type */
    Array(schema, options = {}) {
        return this.Create({ ...options, [exports.Kind]: 'Array', type: 'array', items: TypeClone.Type(schema) });
    }
    /** `[Json]` Creates a Boolean type */
    Boolean(options = {}) {
        return this.Create({ ...options, [exports.Kind]: 'Boolean', type: 'boolean' });
    }
    /** `[Json]` Intrinsic function to Capitalize LiteralString types */
    Capitalize(schema, options = {}) {
        return { ...Intrinsic.Map(TypeClone.Type(schema), 'Capitalize'), ...options };
    }
    /** `[Json]` Creates a Composite object type */
    Composite(objects, options) {
        const intersect = exports.Type.Intersect(objects, {});
        const keys = KeyResolver.ResolveKeys(intersect, { includePatterns: false });
        const properties = keys.reduce((acc, key) => ({ ...acc, [key]: exports.Type.Index(intersect, [key]) }), {});
        return exports.Type.Object(properties, options);
    }
    /** `[Json]` Creates a Enum type */
    Enum(item, options = {}) {
        if (ValueGuard.IsUndefined(item))
            return this.Throw('Enum undefined or empty');
        // prettier-ignore
        const values1 = Object.getOwnPropertyNames(item).filter((key) => isNaN(key)).map((key) => item[key]);
        const values2 = [...new Set(values1)];
        const anyOf = values2.map((value) => exports.Type.Literal(value));
        return this.Union(anyOf, { ...options, [exports.Hint]: 'Enum' });
    }
    /** `[Json]` Creates a Conditional type */
    Extends(left, right, trueType, falseType, options = {}) {
        switch (TypeExtends.Extends(left, right)) {
            case TypeExtendsResult.Union:
                return this.Union([TypeClone.Type(trueType, options), TypeClone.Type(falseType, options)]);
            case TypeExtendsResult.True:
                return TypeClone.Type(trueType, options);
            case TypeExtendsResult.False:
                return TypeClone.Type(falseType, options);
        }
    }
    /** `[Json]` Constructs a type by excluding from unionType all union members that are assignable to excludedMembers */
    Exclude(unionType, excludedMembers, options = {}) {
        // prettier-ignore
        return (TypeGuard.TTemplateLiteral(unionType) ? this.Exclude(TemplateLiteralResolver.Resolve(unionType), excludedMembers, options) :
            TypeGuard.TTemplateLiteral(excludedMembers) ? this.Exclude(unionType, TemplateLiteralResolver.Resolve(excludedMembers), options) :
                TypeGuard.TUnion(unionType) ? (() => {
                    const narrowed = unionType.anyOf.filter((inner) => TypeExtends.Extends(inner, excludedMembers) === TypeExtendsResult.False);
                    return (narrowed.length === 1 ? TypeClone.Type(narrowed[0], options) : this.Union(narrowed, options));
                })() :
                    TypeExtends.Extends(unionType, excludedMembers) !== TypeExtendsResult.False ? this.Never(options) :
                        TypeClone.Type(unionType, options));
    }
    /** `[Json]` Constructs a type by extracting from type all union members that are assignable to union */
    Extract(type, union, options = {}) {
        // prettier-ignore
        return (TypeGuard.TTemplateLiteral(type) ? this.Extract(TemplateLiteralResolver.Resolve(type), union, options) :
            TypeGuard.TTemplateLiteral(union) ? this.Extract(type, TemplateLiteralResolver.Resolve(union), options) :
                TypeGuard.TUnion(type) ? (() => {
                    const narrowed = type.anyOf.filter((inner) => TypeExtends.Extends(inner, union) !== TypeExtendsResult.False);
                    return (narrowed.length === 1 ? TypeClone.Type(narrowed[0], options) : this.Union(narrowed, options));
                })() :
                    TypeExtends.Extends(type, union) !== TypeExtendsResult.False ? TypeClone.Type(type, options) :
                        this.Never(options));
    }
    /** `[Json]` Returns an Indexed property type for the given keys */
    Index(schema, unresolved, options = {}) {
        // prettier-ignore
        return (TypeGuard.TArray(schema) && TypeGuard.TNumber(unresolved) ? (() => {
            return TypeClone.Type(schema.items, options);
        })() :
            TypeGuard.TTuple(schema) && TypeGuard.TNumber(unresolved) ? (() => {
                const items = ValueGuard.IsUndefined(schema.items) ? [] : schema.items;
                const cloned = items.map((schema) => TypeClone.Type(schema));
                return this.Union(cloned, options);
            })() : (() => {
                const keys = KeyArrayResolver.Resolve(unresolved);
                const clone = TypeClone.Type(schema);
                return IndexedAccessor.Resolve(clone, keys, options);
            })());
    }
    /** `[Json]` Creates an Integer type */
    Integer(options = {}) {
        return this.Create({ ...options, [exports.Kind]: 'Integer', type: 'integer' });
    }
    /** `[Json]` Creates an Intersect type */
    Intersect(allOf, options = {}) {
        if (allOf.length === 0)
            return exports.Type.Never();
        if (allOf.length === 1)
            return TypeClone.Type(allOf[0], options);
        if (allOf.some((schema) => TypeGuard.TTransform(schema)))
            this.Throw('Cannot intersect transform types');
        const objects = allOf.every((schema) => TypeGuard.TObject(schema));
        const cloned = TypeClone.Rest(allOf);
        // prettier-ignore
        const clonedUnevaluatedProperties = TypeGuard.TSchema(options.unevaluatedProperties)
            ? { unevaluatedProperties: TypeClone.Type(options.unevaluatedProperties) }
            : {};
        return options.unevaluatedProperties === false || TypeGuard.TSchema(options.unevaluatedProperties) || objects
            ? this.Create({ ...options, ...clonedUnevaluatedProperties, [exports.Kind]: 'Intersect', type: 'object', allOf: cloned })
            : this.Create({ ...options, ...clonedUnevaluatedProperties, [exports.Kind]: 'Intersect', allOf: cloned });
    }
    /** `[Json]` Creates a KeyOf type */
    KeyOf(schema, options = {}) {
        // prettier-ignore
        return (TypeGuard.TRecord(schema) ? (() => {
            const pattern = Object.getOwnPropertyNames(schema.patternProperties)[0];
            return (pattern === exports.PatternNumberExact ? this.Number(options) :
                pattern === exports.PatternStringExact ? this.String(options) :
                    this.Throw('Unable to resolve key type from Record key pattern'));
        })() :
            TypeGuard.TTuple(schema) ? (() => {
                const items = ValueGuard.IsUndefined(schema.items) ? [] : schema.items;
                const literals = items.map((_, index) => exports.Type.Literal(index.toString()));
                return this.Union(literals, options);
            })() :
                TypeGuard.TArray(schema) ? (() => {
                    return this.Number(options);
                })() : (() => {
                    const keys = KeyResolver.ResolveKeys(schema, { includePatterns: false });
                    if (keys.length === 0)
                        return this.Never(options);
                    const literals = keys.map((key) => this.Literal(key));
                    return this.Union(literals, options);
                })());
    }
    /** `[Json]` Creates a Literal type */
    Literal(value, options = {}) {
        return this.Create({ ...options, [exports.Kind]: 'Literal', const: value, type: typeof value });
    }
    /** `[Json]` Intrinsic function to Lowercase LiteralString types */
    Lowercase(schema, options = {}) {
        return { ...Intrinsic.Map(TypeClone.Type(schema), 'Lowercase'), ...options };
    }
    /** `[Json]` Creates a Never type */
    Never(options = {}) {
        return this.Create({ ...options, [exports.Kind]: 'Never', not: {} });
    }
    /** `[Json]` Creates a Not type */
    Not(schema, options) {
        return this.Create({ ...options, [exports.Kind]: 'Not', not: TypeClone.Type(schema) });
    }
    /** `[Json]` Creates a Null type */
    Null(options = {}) {
        return this.Create({ ...options, [exports.Kind]: 'Null', type: 'null' });
    }
    /** `[Json]` Creates a Number type */
    Number(options = {}) {
        return this.Create({ ...options, [exports.Kind]: 'Number', type: 'number' });
    }
    /** `[Json]` Creates an Object type */
    Object(properties, options = {}) {
        const propertyKeys = Object.getOwnPropertyNames(properties);
        const optionalKeys = propertyKeys.filter((key) => TypeGuard.TOptional(properties[key]));
        const requiredKeys = propertyKeys.filter((name) => !optionalKeys.includes(name));
        const clonedAdditionalProperties = TypeGuard.TSchema(options.additionalProperties) ? { additionalProperties: TypeClone.Type(options.additionalProperties) } : {};
        const clonedProperties = propertyKeys.reduce((acc, key) => ({ ...acc, [key]: TypeClone.Type(properties[key]) }), {});
        return requiredKeys.length > 0
            ? this.Create({ ...options, ...clonedAdditionalProperties, [exports.Kind]: 'Object', type: 'object', properties: clonedProperties, required: requiredKeys })
            : this.Create({ ...options, ...clonedAdditionalProperties, [exports.Kind]: 'Object', type: 'object', properties: clonedProperties });
    }
    /** `[Json]` Constructs a type whose keys are omitted from the given type */
    Omit(schema, unresolved, options = {}) {
        const keys = KeyArrayResolver.Resolve(unresolved);
        // prettier-ignore
        return ObjectMap.Map(this.Discard(TypeClone.Type(schema), ['$id', exports.Transform]), (object) => {
            if (ValueGuard.IsArray(object.required)) {
                object.required = object.required.filter((key) => !keys.includes(key));
                if (object.required.length === 0)
                    delete object.required;
            }
            for (const key of Object.getOwnPropertyNames(object.properties)) {
                if (keys.includes(key))
                    delete object.properties[key];
            }
            return this.Create(object);
        }, options);
    }
    /** `[Json]` Constructs a type where all properties are optional */
    Partial(schema, options = {}) {
        // prettier-ignore
        return ObjectMap.Map(this.Discard(TypeClone.Type(schema), ['$id', exports.Transform]), (object) => {
            const properties = Object.getOwnPropertyNames(object.properties).reduce((acc, key) => {
                return { ...acc, [key]: this.Optional(object.properties[key]) };
            }, {});
            return this.Object(properties, this.Discard(object, ['required']) /* object used as options to retain other constraints */);
        }, options);
    }
    /** `[Json]` Constructs a type whose keys are picked from the given type */
    Pick(schema, unresolved, options = {}) {
        const keys = KeyArrayResolver.Resolve(unresolved);
        // prettier-ignore
        return ObjectMap.Map(this.Discard(TypeClone.Type(schema), ['$id', exports.Transform]), (object) => {
            if (ValueGuard.IsArray(object.required)) {
                object.required = object.required.filter((key) => keys.includes(key));
                if (object.required.length === 0)
                    delete object.required;
            }
            for (const key of Object.getOwnPropertyNames(object.properties)) {
                if (!keys.includes(key))
                    delete object.properties[key];
            }
            return this.Create(object);
        }, options);
    }
    /** `[Json]` Creates a Record type */
    Record(key, schema, options = {}) {
        // prettier-ignore
        return (TypeGuard.TTemplateLiteral(key) ? (() => {
            const expression = TemplateLiteralParser.ParseExact(key.pattern);
            // prettier-ignore
            return TemplateLiteralFinite.Check(expression)
                ? (this.Object([...TemplateLiteralGenerator.Generate(expression)].reduce((acc, key) => ({ ...acc, [key]: TypeClone.Type(schema) }), {}), options))
                : this.Create({ ...options, [exports.Kind]: 'Record', type: 'object', patternProperties: { [key.pattern]: TypeClone.Type(schema) } });
        })() :
            TypeGuard.TUnion(key) ? (() => {
                const union = UnionResolver.Resolve(key);
                if (TypeGuard.TUnionLiteral(union)) {
                    const properties = union.anyOf.reduce((acc, literal) => ({ ...acc, [literal.const]: TypeClone.Type(schema) }), {});
                    return this.Object(properties, { ...options, [exports.Hint]: 'Record' });
                }
                else
                    this.Throw('Record key of type union contains non-literal types');
            })() :
                TypeGuard.TLiteral(key) ? (() => {
                    // prettier-ignore
                    return (ValueGuard.IsString(key.const) || ValueGuard.IsNumber(key.const))
                        ? this.Object({ [key.const]: TypeClone.Type(schema) }, options)
                        : this.Throw('Record key of type literal is not of type string or number');
                })() :
                    TypeGuard.TInteger(key) || TypeGuard.TNumber(key) ? (() => {
                        return this.Create({ ...options, [exports.Kind]: 'Record', type: 'object', patternProperties: { [exports.PatternNumberExact]: TypeClone.Type(schema) } });
                    })() :
                        TypeGuard.TString(key) ? (() => {
                            const pattern = ValueGuard.IsUndefined(key.pattern) ? exports.PatternStringExact : key.pattern;
                            return this.Create({ ...options, [exports.Kind]: 'Record', type: 'object', patternProperties: { [pattern]: TypeClone.Type(schema) } });
                        })() :
                            this.Never());
    }
    /** `[Json]` Creates a Recursive type */
    Recursive(callback, options = {}) {
        if (ValueGuard.IsUndefined(options.$id))
            options.$id = `T${TypeOrdinal++}`;
        const thisType = callback({ [exports.Kind]: 'This', $ref: `${options.$id}` });
        thisType.$id = options.$id;
        return this.Create({ ...options, [exports.Hint]: 'Recursive', ...thisType });
    }
    /** `[Json]` Creates a Ref type. */
    Ref(unresolved, options = {}) {
        if (ValueGuard.IsString(unresolved))
            return this.Create({ ...options, [exports.Kind]: 'Ref', $ref: unresolved });
        if (ValueGuard.IsUndefined(unresolved.$id))
            this.Throw('Reference target type must specify an $id');
        return this.Create({ ...options, [exports.Kind]: 'Ref', $ref: unresolved.$id });
    }
    /** `[Json]` Constructs a type where all properties are required */
    Required(schema, options = {}) {
        // prettier-ignore
        return ObjectMap.Map(this.Discard(TypeClone.Type(schema), ['$id', exports.Transform]), (object) => {
            const properties = Object.getOwnPropertyNames(object.properties).reduce((acc, key) => {
                return { ...acc, [key]: this.Discard(object.properties[key], [exports.Optional]) };
            }, {});
            return this.Object(properties, object /* object used as options to retain other constraints  */);
        }, options);
    }
    /** `[Json]` Extracts interior Rest elements from Tuple, Intersect and Union types */
    Rest(schema) {
        return (TypeGuard.TTuple(schema) && !ValueGuard.IsUndefined(schema.items) ? TypeClone.Rest(schema.items) : TypeGuard.TIntersect(schema) ? TypeClone.Rest(schema.allOf) : TypeGuard.TUnion(schema) ? TypeClone.Rest(schema.anyOf) : []);
    }
    /** `[Json]` Creates a String type */
    String(options = {}) {
        return this.Create({ ...options, [exports.Kind]: 'String', type: 'string' });
    }
    /** `[Json]` Creates a TemplateLiteral type */
    TemplateLiteral(unresolved, options = {}) {
        // prettier-ignore
        const pattern = ValueGuard.IsString(unresolved)
            ? TemplateLiteralPattern.Create(TemplateLiteralDslParser.Parse(unresolved))
            : TemplateLiteralPattern.Create(unresolved);
        return this.Create({ ...options, [exports.Kind]: 'TemplateLiteral', type: 'string', pattern });
    }
    /** `[Json]` Creates a Transform type */
    Transform(schema) {
        return new TransformDecodeBuilder(schema);
    }
    /** `[Json]` Creates a Tuple type */
    Tuple(items, options = {}) {
        const [additionalItems, minItems, maxItems] = [false, items.length, items.length];
        const clonedItems = TypeClone.Rest(items);
        // prettier-ignore
        const schema = (items.length > 0 ?
            { ...options, [exports.Kind]: 'Tuple', type: 'array', items: clonedItems, additionalItems, minItems, maxItems } :
            { ...options, [exports.Kind]: 'Tuple', type: 'array', minItems, maxItems });
        return this.Create(schema);
    }
    /** `[Json]` Intrinsic function to Uncapitalize LiteralString types */
    Uncapitalize(schema, options = {}) {
        return { ...Intrinsic.Map(TypeClone.Type(schema), 'Uncapitalize'), ...options };
    }
    /** `[Json]` Creates a Union type */
    Union(union, options = {}) {
        // prettier-ignore
        return TypeGuard.TTemplateLiteral(union)
            ? TemplateLiteralResolver.Resolve(union)
            : (() => {
                const anyOf = union;
                if (anyOf.length === 0)
                    return this.Never(options);
                if (anyOf.length === 1)
                    return this.Create(TypeClone.Type(anyOf[0], options));
                const clonedAnyOf = TypeClone.Rest(anyOf);
                return this.Create({ ...options, [exports.Kind]: 'Union', anyOf: clonedAnyOf });
            })();
    }
    /** `[Json]` Creates an Unknown type */
    Unknown(options = {}) {
        return this.Create({ ...options, [exports.Kind]: 'Unknown' });
    }
    /** `[Json]` Creates a Unsafe type that will infers as the generic argument T */
    Unsafe(options = {}) {
        return this.Create({ ...options, [exports.Kind]: options[exports.Kind] || 'Unsafe' });
    }
    /** `[Json]` Intrinsic function to Uppercase LiteralString types */
    Uppercase(schema, options = {}) {
        return { ...Intrinsic.Map(TypeClone.Type(schema), 'Uppercase'), ...options };
    }
}
exports.JsonTypeBuilder = JsonTypeBuilder;
// --------------------------------------------------------------------------
// JavaScriptTypeBuilder
// --------------------------------------------------------------------------
class JavaScriptTypeBuilder extends JsonTypeBuilder {
    /** `[JavaScript]` Creates a AsyncIterator type */
    AsyncIterator(items, options = {}) {
        return this.Create({ ...options, [exports.Kind]: 'AsyncIterator', type: 'AsyncIterator', items: TypeClone.Type(items) });
    }
    /** `[JavaScript]` Constructs a type by recursively unwrapping Promise types */
    Awaited(schema, options = {}) {
        // prettier-ignore
        const Unwrap = (rest) => rest.length > 0 ? (() => {
            const [L, ...R] = rest;
            return [this.Awaited(L), ...Unwrap(R)];
        })() : rest;
        // prettier-ignore
        return (TypeGuard.TIntersect(schema) ? exports.Type.Intersect(Unwrap(schema.allOf)) :
            TypeGuard.TUnion(schema) ? exports.Type.Union(Unwrap(schema.anyOf)) :
                TypeGuard.TPromise(schema) ? this.Awaited(schema.item) :
                    TypeClone.Type(schema, options));
    }
    /** `[JavaScript]` Creates a BigInt type */
    BigInt(options = {}) {
        return this.Create({ ...options, [exports.Kind]: 'BigInt', type: 'bigint' });
    }
    /** `[JavaScript]` Extracts the ConstructorParameters from the given Constructor type */
    ConstructorParameters(schema, options = {}) {
        return this.Tuple([...schema.parameters], { ...options });
    }
    /** `[JavaScript]` Creates a Constructor type */
    Constructor(parameters, returns, options) {
        const [clonedParameters, clonedReturns] = [TypeClone.Rest(parameters), TypeClone.Type(returns)];
        return this.Create({ ...options, [exports.Kind]: 'Constructor', type: 'Constructor', parameters: clonedParameters, returns: clonedReturns });
    }
    /** `[JavaScript]` Creates a Date type */
    Date(options = {}) {
        return this.Create({ ...options, [exports.Kind]: 'Date', type: 'Date' });
    }
    /** `[JavaScript]` Creates a Function type */
    Function(parameters, returns, options) {
        const [clonedParameters, clonedReturns] = [TypeClone.Rest(parameters), TypeClone.Type(returns)];
        return this.Create({ ...options, [exports.Kind]: 'Function', type: 'Function', parameters: clonedParameters, returns: clonedReturns });
    }
    /** `[JavaScript]` Extracts the InstanceType from the given Constructor type */
    InstanceType(schema, options = {}) {
        return TypeClone.Type(schema.returns, options);
    }
    /** `[JavaScript]` Creates an Iterator type */
    Iterator(items, options = {}) {
        return this.Create({ ...options, [exports.Kind]: 'Iterator', type: 'Iterator', items: TypeClone.Type(items) });
    }
    /** `[JavaScript]` Extracts the Parameters from the given Function type */
    Parameters(schema, options = {}) {
        return this.Tuple(schema.parameters, { ...options });
    }
    /** `[JavaScript]` Creates a Promise type */
    Promise(item, options = {}) {
        return this.Create({ ...options, [exports.Kind]: 'Promise', type: 'Promise', item: TypeClone.Type(item) });
    }
    /** `[Extended]` Creates a String type */
    RegExp(unresolved, options = {}) {
        const pattern = ValueGuard.IsString(unresolved) ? unresolved : unresolved.source;
        return this.Create({ ...options, [exports.Kind]: 'String', type: 'string', pattern });
    }
    /**
     * @deprecated Use `Type.RegExp`
     */
    RegEx(regex, options = {}) {
        return this.RegExp(regex, options);
    }
    /** `[JavaScript]` Extracts the ReturnType from the given Function type */
    ReturnType(schema, options = {}) {
        return TypeClone.Type(schema.returns, options);
    }
    /** `[JavaScript]` Creates a Symbol type */
    Symbol(options) {
        return this.Create({ ...options, [exports.Kind]: 'Symbol', type: 'symbol' });
    }
    /** `[JavaScript]` Creates a Undefined type */
    Undefined(options = {}) {
        return this.Create({ ...options, [exports.Kind]: 'Undefined', type: 'undefined' });
    }
    /** `[JavaScript]` Creates a Uint8Array type */
    Uint8Array(options = {}) {
        return this.Create({ ...options, [exports.Kind]: 'Uint8Array', type: 'Uint8Array' });
    }
    /** `[JavaScript]` Creates a Void type */
    Void(options = {}) {
        return this.Create({ ...options, [exports.Kind]: 'Void', type: 'void' });
    }
}
exports.JavaScriptTypeBuilder = JavaScriptTypeBuilder;
/** Json Type Builder with Static Resolution for TypeScript */
exports.JsonType = new JsonTypeBuilder();
/** JavaScript Type Builder with Static Resolution for TypeScript */
exports.Type = new JavaScriptTypeBuilder();


/***/ }),

/***/ 8747:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*--------------------------------------------------------------------------

@sinclair/typebox/value

The MIT License (MIT)

Copyright (c) 2017-2023 Haydn Paterson (sinclair) <haydn.developer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Cast = exports.Default = exports.DefaultClone = exports.ValueCastUnknownTypeError = exports.ValueCastRecursiveTypeError = exports.ValueCastNeverTypeError = exports.ValueCastArrayUniqueItemsTypeError = void 0;
const guard_1 = __webpack_require__(9860);
const create_1 = __webpack_require__(4195);
const check_1 = __webpack_require__(3255);
const clone_1 = __webpack_require__(4165);
const deref_1 = __webpack_require__(6595);
const Types = __webpack_require__(3017);
// --------------------------------------------------------------------------
// Errors
// --------------------------------------------------------------------------
class ValueCastArrayUniqueItemsTypeError extends Types.TypeBoxError {
    constructor(schema, value) {
        super('Array cast produced invalid data due to uniqueItems constraint');
        this.schema = schema;
        this.value = value;
    }
}
exports.ValueCastArrayUniqueItemsTypeError = ValueCastArrayUniqueItemsTypeError;
class ValueCastNeverTypeError extends Types.TypeBoxError {
    constructor(schema) {
        super('Never types cannot be cast');
        this.schema = schema;
    }
}
exports.ValueCastNeverTypeError = ValueCastNeverTypeError;
class ValueCastRecursiveTypeError extends Types.TypeBoxError {
    constructor(schema) {
        super('Cannot cast recursive schemas');
        this.schema = schema;
    }
}
exports.ValueCastRecursiveTypeError = ValueCastRecursiveTypeError;
class ValueCastUnknownTypeError extends Types.TypeBoxError {
    constructor(schema) {
        super('Unknown type');
        this.schema = schema;
    }
}
exports.ValueCastUnknownTypeError = ValueCastUnknownTypeError;
// --------------------------------------------------------------------------
// The following will score a schema against a value. For objects, the score
// is the tally of points awarded for each property of the value. Property
// points are (1.0 / propertyCount) to prevent large property counts biasing
// results. Properties that match literal values are maximally awarded as
// literals are typically used as union discriminator fields.
// --------------------------------------------------------------------------
var UnionCastCreate;
(function (UnionCastCreate) {
    function Score(schema, references, value) {
        if (schema[Types.Kind] === 'Object' && typeof value === 'object' && !(0, guard_1.IsNull)(value)) {
            const object = schema;
            const keys = Object.getOwnPropertyNames(value);
            const entries = Object.entries(object.properties);
            const [point, max] = [1 / entries.length, entries.length];
            return entries.reduce((acc, [key, schema]) => {
                const literal = schema[Types.Kind] === 'Literal' && schema.const === value[key] ? max : 0;
                const checks = (0, check_1.Check)(schema, references, value[key]) ? point : 0;
                const exists = keys.includes(key) ? point : 0;
                return acc + (literal + checks + exists);
            }, 0);
        }
        else {
            return (0, check_1.Check)(schema, references, value) ? 1 : 0;
        }
    }
    function Select(union, references, value) {
        let [select, best] = [union.anyOf[0], 0];
        for (const schema of union.anyOf) {
            const score = Score(schema, references, value);
            if (score > best) {
                select = schema;
                best = score;
            }
        }
        return select;
    }
    function Create(union, references, value) {
        if ('default' in union) {
            return union.default;
        }
        else {
            const schema = Select(union, references, value);
            return Cast(schema, references, value);
        }
    }
    UnionCastCreate.Create = Create;
})(UnionCastCreate || (UnionCastCreate = {}));
// --------------------------------------------------------------------------
// Default
// --------------------------------------------------------------------------
function DefaultClone(schema, references, value) {
    return (0, check_1.Check)(schema, references, value) ? (0, clone_1.Clone)(value) : (0, create_1.Create)(schema, references);
}
exports.DefaultClone = DefaultClone;
function Default(schema, references, value) {
    return (0, check_1.Check)(schema, references, value) ? value : (0, create_1.Create)(schema, references);
}
exports.Default = Default;
// --------------------------------------------------------------------------
// Cast
// --------------------------------------------------------------------------
function TArray(schema, references, value) {
    if ((0, check_1.Check)(schema, references, value))
        return (0, clone_1.Clone)(value);
    const created = (0, guard_1.IsArray)(value) ? (0, clone_1.Clone)(value) : (0, create_1.Create)(schema, references);
    const minimum = (0, guard_1.IsNumber)(schema.minItems) && created.length < schema.minItems ? [...created, ...Array.from({ length: schema.minItems - created.length }, () => null)] : created;
    const maximum = (0, guard_1.IsNumber)(schema.maxItems) && minimum.length > schema.maxItems ? minimum.slice(0, schema.maxItems) : minimum;
    const casted = maximum.map((value) => Visit(schema.items, references, value));
    if (schema.uniqueItems !== true)
        return casted;
    const unique = [...new Set(casted)];
    if (!(0, check_1.Check)(schema, references, unique))
        throw new ValueCastArrayUniqueItemsTypeError(schema, unique);
    return unique;
}
function TConstructor(schema, references, value) {
    if ((0, check_1.Check)(schema, references, value))
        return (0, create_1.Create)(schema, references);
    const required = new Set(schema.returns.required || []);
    const result = function () { };
    for (const [key, property] of Object.entries(schema.returns.properties)) {
        if (!required.has(key) && value.prototype[key] === undefined)
            continue;
        result.prototype[key] = Visit(property, references, value.prototype[key]);
    }
    return result;
}
function TIntersect(schema, references, value) {
    const created = (0, create_1.Create)(schema, references);
    const mapped = (0, guard_1.IsPlainObject)(created) && (0, guard_1.IsPlainObject)(value) ? { ...created, ...value } : value;
    return (0, check_1.Check)(schema, references, mapped) ? mapped : (0, create_1.Create)(schema, references);
}
function TNever(schema, references, value) {
    throw new ValueCastNeverTypeError(schema);
}
function TObject(schema, references, value) {
    if ((0, check_1.Check)(schema, references, value))
        return value;
    if (value === null || typeof value !== 'object')
        return (0, create_1.Create)(schema, references);
    const required = new Set(schema.required || []);
    const result = {};
    for (const [key, property] of Object.entries(schema.properties)) {
        if (!required.has(key) && value[key] === undefined)
            continue;
        result[key] = Visit(property, references, value[key]);
    }
    // additional schema properties
    if (typeof schema.additionalProperties === 'object') {
        const propertyNames = Object.getOwnPropertyNames(schema.properties);
        for (const propertyName of Object.getOwnPropertyNames(value)) {
            if (propertyNames.includes(propertyName))
                continue;
            result[propertyName] = Visit(schema.additionalProperties, references, value[propertyName]);
        }
    }
    return result;
}
function TRecord(schema, references, value) {
    if ((0, check_1.Check)(schema, references, value))
        return (0, clone_1.Clone)(value);
    if (value === null || typeof value !== 'object' || Array.isArray(value) || value instanceof Date)
        return (0, create_1.Create)(schema, references);
    const subschemaPropertyName = Object.getOwnPropertyNames(schema.patternProperties)[0];
    const subschema = schema.patternProperties[subschemaPropertyName];
    const result = {};
    for (const [propKey, propValue] of Object.entries(value)) {
        result[propKey] = Visit(subschema, references, propValue);
    }
    return result;
}
function TRef(schema, references, value) {
    return Visit((0, deref_1.Deref)(schema, references), references, value);
}
function TThis(schema, references, value) {
    return Visit((0, deref_1.Deref)(schema, references), references, value);
}
function TTuple(schema, references, value) {
    if ((0, check_1.Check)(schema, references, value))
        return (0, clone_1.Clone)(value);
    if (!(0, guard_1.IsArray)(value))
        return (0, create_1.Create)(schema, references);
    if (schema.items === undefined)
        return [];
    return schema.items.map((schema, index) => Visit(schema, references, value[index]));
}
function TUnion(schema, references, value) {
    return (0, check_1.Check)(schema, references, value) ? (0, clone_1.Clone)(value) : UnionCastCreate.Create(schema, references, value);
}
function Visit(schema, references, value) {
    const references_ = (0, guard_1.IsString)(schema.$id) ? [...references, schema] : references;
    const schema_ = schema;
    switch (schema[Types.Kind]) {
        // ------------------------------------------------------
        // Structural
        // ------------------------------------------------------
        case 'Array':
            return TArray(schema_, references_, value);
        case 'Constructor':
            return TConstructor(schema_, references_, value);
        case 'Intersect':
            return TIntersect(schema_, references_, value);
        case 'Never':
            return TNever(schema_, references_, value);
        case 'Object':
            return TObject(schema_, references_, value);
        case 'Record':
            return TRecord(schema_, references_, value);
        case 'Ref':
            return TRef(schema_, references_, value);
        case 'This':
            return TThis(schema_, references_, value);
        case 'Tuple':
            return TTuple(schema_, references_, value);
        case 'Union':
            return TUnion(schema_, references_, value);
        // ------------------------------------------------------
        // DefaultClone
        // ------------------------------------------------------
        case 'Date':
        case 'Symbol':
        case 'Uint8Array':
            return DefaultClone(schema, references, value);
        // ------------------------------------------------------
        // Default
        // ------------------------------------------------------
        case 'Any':
        case 'AsyncIterator':
        case 'BigInt':
        case 'Boolean':
        case 'Function':
        case 'Integer':
        case 'Iterator':
        case 'Literal':
        case 'Not':
        case 'Null':
        case 'Number':
        case 'Promise':
        case 'String':
        case 'TemplateLiteral':
        case 'Undefined':
        case 'Unknown':
        case 'Void':
            return Default(schema_, references_, value);
        default:
            if (!Types.TypeRegistry.Has(schema_[Types.Kind]))
                throw new ValueCastUnknownTypeError(schema_);
            return Default(schema_, references_, value);
    }
}
/** Casts a value into a given type. The return value will retain as much information of the original value as possible. */
function Cast(...args) {
    return args.length === 3 ? Visit(args[0], args[1], args[2]) : Visit(args[0], [], args[1]);
}
exports.Cast = Cast;


/***/ }),

/***/ 3255:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*--------------------------------------------------------------------------

@sinclair/typebox/value

The MIT License (MIT)

Copyright (c) 2017-2023 Haydn Paterson (sinclair) <haydn.developer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Check = exports.ValueCheckUnknownTypeError = void 0;
const guard_1 = __webpack_require__(9860);
const index_1 = __webpack_require__(6478);
const deref_1 = __webpack_require__(6595);
const hash_1 = __webpack_require__(9122);
const Types = __webpack_require__(3017);
// --------------------------------------------------------------------------
// Errors
// --------------------------------------------------------------------------
class ValueCheckUnknownTypeError extends Types.TypeBoxError {
    constructor(schema) {
        super(`Unknown type`);
        this.schema = schema;
    }
}
exports.ValueCheckUnknownTypeError = ValueCheckUnknownTypeError;
// --------------------------------------------------------------------------
// TypeGuards
// --------------------------------------------------------------------------
function IsAnyOrUnknown(schema) {
    return schema[Types.Kind] === 'Any' || schema[Types.Kind] === 'Unknown';
}
// --------------------------------------------------------------------------
// Guards
// --------------------------------------------------------------------------
function IsDefined(value) {
    return value !== undefined;
}
// --------------------------------------------------------------------------
// Types
// --------------------------------------------------------------------------
function TAny(schema, references, value) {
    return true;
}
function TArray(schema, references, value) {
    if (!(0, guard_1.IsArray)(value))
        return false;
    if (IsDefined(schema.minItems) && !(value.length >= schema.minItems)) {
        return false;
    }
    if (IsDefined(schema.maxItems) && !(value.length <= schema.maxItems)) {
        return false;
    }
    if (!value.every((value) => Visit(schema.items, references, value))) {
        return false;
    }
    // prettier-ignore
    if (schema.uniqueItems === true && !((function () { const set = new Set(); for (const element of value) {
        const hashed = (0, hash_1.Hash)(element);
        if (set.has(hashed)) {
            return false;
        }
        else {
            set.add(hashed);
        }
    } return true; })())) {
        return false;
    }
    // contains
    if (!(IsDefined(schema.contains) || (0, guard_1.IsNumber)(schema.minContains) || (0, guard_1.IsNumber)(schema.maxContains))) {
        return true; // exit
    }
    const containsSchema = IsDefined(schema.contains) ? schema.contains : Types.Type.Never();
    const containsCount = value.reduce((acc, value) => (Visit(containsSchema, references, value) ? acc + 1 : acc), 0);
    if (containsCount === 0) {
        return false;
    }
    if ((0, guard_1.IsNumber)(schema.minContains) && containsCount < schema.minContains) {
        return false;
    }
    if ((0, guard_1.IsNumber)(schema.maxContains) && containsCount > schema.maxContains) {
        return false;
    }
    return true;
}
function TAsyncIterator(schema, references, value) {
    return (0, guard_1.IsAsyncIterator)(value);
}
function TBigInt(schema, references, value) {
    if (!(0, guard_1.IsBigInt)(value))
        return false;
    if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
        return false;
    }
    if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
        return false;
    }
    if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
        return false;
    }
    if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
        return false;
    }
    if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === BigInt(0))) {
        return false;
    }
    return true;
}
function TBoolean(schema, references, value) {
    return (0, guard_1.IsBoolean)(value);
}
function TConstructor(schema, references, value) {
    return Visit(schema.returns, references, value.prototype);
}
function TDate(schema, references, value) {
    if (!(0, guard_1.IsDate)(value))
        return false;
    if (IsDefined(schema.exclusiveMaximumTimestamp) && !(value.getTime() < schema.exclusiveMaximumTimestamp)) {
        return false;
    }
    if (IsDefined(schema.exclusiveMinimumTimestamp) && !(value.getTime() > schema.exclusiveMinimumTimestamp)) {
        return false;
    }
    if (IsDefined(schema.maximumTimestamp) && !(value.getTime() <= schema.maximumTimestamp)) {
        return false;
    }
    if (IsDefined(schema.minimumTimestamp) && !(value.getTime() >= schema.minimumTimestamp)) {
        return false;
    }
    if (IsDefined(schema.multipleOfTimestamp) && !(value.getTime() % schema.multipleOfTimestamp === 0)) {
        return false;
    }
    return true;
}
function TFunction(schema, references, value) {
    return (0, guard_1.IsFunction)(value);
}
function TInteger(schema, references, value) {
    if (!(0, guard_1.IsInteger)(value)) {
        return false;
    }
    if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
        return false;
    }
    if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
        return false;
    }
    if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
        return false;
    }
    if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
        return false;
    }
    if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
        return false;
    }
    return true;
}
function TIntersect(schema, references, value) {
    const check1 = schema.allOf.every((schema) => Visit(schema, references, value));
    if (schema.unevaluatedProperties === false) {
        const keyPattern = new RegExp(Types.KeyResolver.ResolvePattern(schema));
        const check2 = Object.getOwnPropertyNames(value).every((key) => keyPattern.test(key));
        return check1 && check2;
    }
    else if (Types.TypeGuard.TSchema(schema.unevaluatedProperties)) {
        const keyCheck = new RegExp(Types.KeyResolver.ResolvePattern(schema));
        const check2 = Object.getOwnPropertyNames(value).every((key) => keyCheck.test(key) || Visit(schema.unevaluatedProperties, references, value[key]));
        return check1 && check2;
    }
    else {
        return check1;
    }
}
function TIterator(schema, references, value) {
    return (0, guard_1.IsIterator)(value);
}
function TLiteral(schema, references, value) {
    return value === schema.const;
}
function TNever(schema, references, value) {
    return false;
}
function TNot(schema, references, value) {
    return !Visit(schema.not, references, value);
}
function TNull(schema, references, value) {
    return (0, guard_1.IsNull)(value);
}
function TNumber(schema, references, value) {
    if (!index_1.TypeSystemPolicy.IsNumberLike(value))
        return false;
    if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
        return false;
    }
    if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
        return false;
    }
    if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
        return false;
    }
    if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
        return false;
    }
    if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
        return false;
    }
    return true;
}
function TObject(schema, references, value) {
    if (!index_1.TypeSystemPolicy.IsObjectLike(value))
        return false;
    if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
        return false;
    }
    if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
        return false;
    }
    const knownKeys = Object.getOwnPropertyNames(schema.properties);
    for (const knownKey of knownKeys) {
        const property = schema.properties[knownKey];
        if (schema.required && schema.required.includes(knownKey)) {
            if (!Visit(property, references, value[knownKey])) {
                return false;
            }
            if ((Types.ExtendsUndefined.Check(property) || IsAnyOrUnknown(property)) && !(knownKey in value)) {
                return false;
            }
        }
        else {
            if (index_1.TypeSystemPolicy.IsExactOptionalProperty(value, knownKey) && !Visit(property, references, value[knownKey])) {
                return false;
            }
        }
    }
    if (schema.additionalProperties === false) {
        const valueKeys = Object.getOwnPropertyNames(value);
        // optimization: value is valid if schemaKey length matches the valueKey length
        if (schema.required && schema.required.length === knownKeys.length && valueKeys.length === knownKeys.length) {
            return true;
        }
        else {
            return valueKeys.every((valueKey) => knownKeys.includes(valueKey));
        }
    }
    else if (typeof schema.additionalProperties === 'object') {
        const valueKeys = Object.getOwnPropertyNames(value);
        return valueKeys.every((key) => knownKeys.includes(key) || Visit(schema.additionalProperties, references, value[key]));
    }
    else {
        return true;
    }
}
function TPromise(schema, references, value) {
    return (0, guard_1.IsPromise)(value);
}
function TRecord(schema, references, value) {
    if (!index_1.TypeSystemPolicy.IsRecordLike(value)) {
        return false;
    }
    if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
        return false;
    }
    if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
        return false;
    }
    const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
    const regex = new RegExp(patternKey);
    // prettier-ignore
    const check1 = Object.entries(value).every(([key, value]) => {
        return (regex.test(key)) ? Visit(patternSchema, references, value) : true;
    });
    // prettier-ignore
    const check2 = typeof schema.additionalProperties === 'object' ? Object.entries(value).every(([key, value]) => {
        return (!regex.test(key)) ? Visit(schema.additionalProperties, references, value) : true;
    }) : true;
    const check3 = schema.additionalProperties === false
        ? Object.getOwnPropertyNames(value).every((key) => {
            return regex.test(key);
        })
        : true;
    return check1 && check2 && check3;
}
function TRef(schema, references, value) {
    return Visit((0, deref_1.Deref)(schema, references), references, value);
}
function TString(schema, references, value) {
    if (!(0, guard_1.IsString)(value)) {
        return false;
    }
    if (IsDefined(schema.minLength)) {
        if (!(value.length >= schema.minLength))
            return false;
    }
    if (IsDefined(schema.maxLength)) {
        if (!(value.length <= schema.maxLength))
            return false;
    }
    if (IsDefined(schema.pattern)) {
        const regex = new RegExp(schema.pattern);
        if (!regex.test(value))
            return false;
    }
    if (IsDefined(schema.format)) {
        if (!Types.FormatRegistry.Has(schema.format))
            return false;
        const func = Types.FormatRegistry.Get(schema.format);
        return func(value);
    }
    return true;
}
function TSymbol(schema, references, value) {
    return (0, guard_1.IsSymbol)(value);
}
function TTemplateLiteral(schema, references, value) {
    return (0, guard_1.IsString)(value) && new RegExp(schema.pattern).test(value);
}
function TThis(schema, references, value) {
    return Visit((0, deref_1.Deref)(schema, references), references, value);
}
function TTuple(schema, references, value) {
    if (!(0, guard_1.IsArray)(value)) {
        return false;
    }
    if (schema.items === undefined && !(value.length === 0)) {
        return false;
    }
    if (!(value.length === schema.maxItems)) {
        return false;
    }
    if (!schema.items) {
        return true;
    }
    for (let i = 0; i < schema.items.length; i++) {
        if (!Visit(schema.items[i], references, value[i]))
            return false;
    }
    return true;
}
function TUndefined(schema, references, value) {
    return (0, guard_1.IsUndefined)(value);
}
function TUnion(schema, references, value) {
    return schema.anyOf.some((inner) => Visit(inner, references, value));
}
function TUint8Array(schema, references, value) {
    if (!(0, guard_1.IsUint8Array)(value)) {
        return false;
    }
    if (IsDefined(schema.maxByteLength) && !(value.length <= schema.maxByteLength)) {
        return false;
    }
    if (IsDefined(schema.minByteLength) && !(value.length >= schema.minByteLength)) {
        return false;
    }
    return true;
}
function TUnknown(schema, references, value) {
    return true;
}
function TVoid(schema, references, value) {
    return index_1.TypeSystemPolicy.IsVoidLike(value);
}
function TKind(schema, references, value) {
    if (!Types.TypeRegistry.Has(schema[Types.Kind]))
        return false;
    const func = Types.TypeRegistry.Get(schema[Types.Kind]);
    return func(schema, value);
}
function Visit(schema, references, value) {
    const references_ = IsDefined(schema.$id) ? [...references, schema] : references;
    const schema_ = schema;
    switch (schema_[Types.Kind]) {
        case 'Any':
            return TAny(schema_, references_, value);
        case 'Array':
            return TArray(schema_, references_, value);
        case 'AsyncIterator':
            return TAsyncIterator(schema_, references_, value);
        case 'BigInt':
            return TBigInt(schema_, references_, value);
        case 'Boolean':
            return TBoolean(schema_, references_, value);
        case 'Constructor':
            return TConstructor(schema_, references_, value);
        case 'Date':
            return TDate(schema_, references_, value);
        case 'Function':
            return TFunction(schema_, references_, value);
        case 'Integer':
            return TInteger(schema_, references_, value);
        case 'Intersect':
            return TIntersect(schema_, references_, value);
        case 'Iterator':
            return TIterator(schema_, references_, value);
        case 'Literal':
            return TLiteral(schema_, references_, value);
        case 'Never':
            return TNever(schema_, references_, value);
        case 'Not':
            return TNot(schema_, references_, value);
        case 'Null':
            return TNull(schema_, references_, value);
        case 'Number':
            return TNumber(schema_, references_, value);
        case 'Object':
            return TObject(schema_, references_, value);
        case 'Promise':
            return TPromise(schema_, references_, value);
        case 'Record':
            return TRecord(schema_, references_, value);
        case 'Ref':
            return TRef(schema_, references_, value);
        case 'String':
            return TString(schema_, references_, value);
        case 'Symbol':
            return TSymbol(schema_, references_, value);
        case 'TemplateLiteral':
            return TTemplateLiteral(schema_, references_, value);
        case 'This':
            return TThis(schema_, references_, value);
        case 'Tuple':
            return TTuple(schema_, references_, value);
        case 'Undefined':
            return TUndefined(schema_, references_, value);
        case 'Union':
            return TUnion(schema_, references_, value);
        case 'Uint8Array':
            return TUint8Array(schema_, references_, value);
        case 'Unknown':
            return TUnknown(schema_, references_, value);
        case 'Void':
            return TVoid(schema_, references_, value);
        default:
            if (!Types.TypeRegistry.Has(schema_[Types.Kind]))
                throw new ValueCheckUnknownTypeError(schema_);
            return TKind(schema_, references_, value);
    }
}
/** Returns true if the value matches the given type. */
function Check(...args) {
    return args.length === 3 ? Visit(args[0], args[1], args[2]) : Visit(args[0], [], args[1]);
}
exports.Check = Check;


/***/ }),

/***/ 4165:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*--------------------------------------------------------------------------

@sinclair/typebox/value

The MIT License (MIT)

Copyright (c) 2017-2023 Haydn Paterson (sinclair) <haydn.developer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Clone = void 0;
const guard_1 = __webpack_require__(9860);
// --------------------------------------------------------------------------
// Clonable
// --------------------------------------------------------------------------
function ObjectType(value) {
    const keys = [...Object.getOwnPropertyNames(value), ...Object.getOwnPropertySymbols(value)];
    return keys.reduce((acc, key) => ({ ...acc, [key]: Clone(value[key]) }), {});
}
function ArrayType(value) {
    return value.map((element) => Clone(element));
}
function TypedArrayType(value) {
    return value.slice();
}
function DateType(value) {
    return new Date(value.toISOString());
}
function ValueType(value) {
    return value;
}
// --------------------------------------------------------------------------
// Clone
// --------------------------------------------------------------------------
/** Returns a clone of the given value */
function Clone(value) {
    if ((0, guard_1.IsArray)(value))
        return ArrayType(value);
    if ((0, guard_1.IsDate)(value))
        return DateType(value);
    if ((0, guard_1.IsPlainObject)(value))
        return ObjectType(value);
    if ((0, guard_1.IsTypedArray)(value))
        return TypedArrayType(value);
    if ((0, guard_1.IsValueType)(value))
        return ValueType(value);
    throw new Error('ValueClone: Unable to clone value');
}
exports.Clone = Clone;


/***/ }),

/***/ 9231:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*--------------------------------------------------------------------------

@sinclair/typebox/value

The MIT License (MIT)

Copyright (c) 2017-2023 Haydn Paterson (sinclair) <haydn.developer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Convert = exports.Default = exports.ValueConvertUnknownTypeError = void 0;
const guard_1 = __webpack_require__(9860);
const clone_1 = __webpack_require__(4165);
const check_1 = __webpack_require__(3255);
const deref_1 = __webpack_require__(6595);
const Types = __webpack_require__(3017);
// --------------------------------------------------------------------------
// Errors
// --------------------------------------------------------------------------
class ValueConvertUnknownTypeError extends Types.TypeBoxError {
    constructor(schema) {
        super('Unknown type');
        this.schema = schema;
    }
}
exports.ValueConvertUnknownTypeError = ValueConvertUnknownTypeError;
// --------------------------------------------------------------------------
// Conversions
// --------------------------------------------------------------------------
function IsStringNumeric(value) {
    return (0, guard_1.IsString)(value) && !isNaN(value) && !isNaN(parseFloat(value));
}
function IsValueToString(value) {
    return (0, guard_1.IsBigInt)(value) || (0, guard_1.IsBoolean)(value) || (0, guard_1.IsNumber)(value);
}
function IsValueTrue(value) {
    return value === true || ((0, guard_1.IsNumber)(value) && value === 1) || ((0, guard_1.IsBigInt)(value) && value === BigInt('1')) || ((0, guard_1.IsString)(value) && (value.toLowerCase() === 'true' || value === '1'));
}
function IsValueFalse(value) {
    return value === false || ((0, guard_1.IsNumber)(value) && (value === 0 || Object.is(value, -0))) || ((0, guard_1.IsBigInt)(value) && value === BigInt('0')) || ((0, guard_1.IsString)(value) && (value.toLowerCase() === 'false' || value === '0' || value === '-0'));
}
function IsTimeStringWithTimeZone(value) {
    return (0, guard_1.IsString)(value) && /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i.test(value);
}
function IsTimeStringWithoutTimeZone(value) {
    return (0, guard_1.IsString)(value) && /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)?$/i.test(value);
}
function IsDateTimeStringWithTimeZone(value) {
    return (0, guard_1.IsString)(value) && /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i.test(value);
}
function IsDateTimeStringWithoutTimeZone(value) {
    return (0, guard_1.IsString)(value) && /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)?$/i.test(value);
}
function IsDateString(value) {
    return (0, guard_1.IsString)(value) && /^\d\d\d\d-[0-1]\d-[0-3]\d$/i.test(value);
}
// --------------------------------------------------------------------------
// Convert
// --------------------------------------------------------------------------
function TryConvertLiteralString(value, target) {
    const conversion = TryConvertString(value);
    return conversion === target ? conversion : value;
}
function TryConvertLiteralNumber(value, target) {
    const conversion = TryConvertNumber(value);
    return conversion === target ? conversion : value;
}
function TryConvertLiteralBoolean(value, target) {
    const conversion = TryConvertBoolean(value);
    return conversion === target ? conversion : value;
}
function TryConvertLiteral(schema, value) {
    if (typeof schema.const === 'string') {
        return TryConvertLiteralString(value, schema.const);
    }
    else if (typeof schema.const === 'number') {
        return TryConvertLiteralNumber(value, schema.const);
    }
    else if (typeof schema.const === 'boolean') {
        return TryConvertLiteralBoolean(value, schema.const);
    }
    else {
        return (0, clone_1.Clone)(value);
    }
}
function TryConvertBoolean(value) {
    return IsValueTrue(value) ? true : IsValueFalse(value) ? false : value;
}
function TryConvertBigInt(value) {
    return IsStringNumeric(value) ? BigInt(parseInt(value)) : (0, guard_1.IsNumber)(value) ? BigInt(value | 0) : IsValueFalse(value) ? BigInt(0) : IsValueTrue(value) ? BigInt(1) : value;
}
function TryConvertString(value) {
    return IsValueToString(value) ? value.toString() : (0, guard_1.IsSymbol)(value) && value.description !== undefined ? value.description.toString() : value;
}
function TryConvertNumber(value) {
    return IsStringNumeric(value) ? parseFloat(value) : IsValueTrue(value) ? 1 : IsValueFalse(value) ? 0 : value;
}
function TryConvertInteger(value) {
    return IsStringNumeric(value) ? parseInt(value) : (0, guard_1.IsNumber)(value) ? value | 0 : IsValueTrue(value) ? 1 : IsValueFalse(value) ? 0 : value;
}
function TryConvertNull(value) {
    return (0, guard_1.IsString)(value) && value.toLowerCase() === 'null' ? null : value;
}
function TryConvertUndefined(value) {
    return (0, guard_1.IsString)(value) && value === 'undefined' ? undefined : value;
}
function TryConvertDate(value) {
    // --------------------------------------------------------------------------
    // note: this function may return an invalid dates for the regex tests
    // above. Invalid dates will however be checked during the casting function
    // and will return a epoch date if invalid. Consider better string parsing
    // for the iso dates in future revisions.
    // --------------------------------------------------------------------------
    return (0, guard_1.IsDate)(value)
        ? value
        : (0, guard_1.IsNumber)(value)
            ? new Date(value)
            : IsValueTrue(value)
                ? new Date(1)
                : IsValueFalse(value)
                    ? new Date(0)
                    : IsStringNumeric(value)
                        ? new Date(parseInt(value))
                        : IsTimeStringWithoutTimeZone(value)
                            ? new Date(`1970-01-01T${value}.000Z`)
                            : IsTimeStringWithTimeZone(value)
                                ? new Date(`1970-01-01T${value}`)
                                : IsDateTimeStringWithoutTimeZone(value)
                                    ? new Date(`${value}.000Z`)
                                    : IsDateTimeStringWithTimeZone(value)
                                        ? new Date(value)
                                        : IsDateString(value)
                                            ? new Date(`${value}T00:00:00.000Z`)
                                            : value;
}
// --------------------------------------------------------------------------
// Default
// --------------------------------------------------------------------------
function Default(value) {
    return value;
}
exports.Default = Default;
// --------------------------------------------------------------------------
// Convert
// --------------------------------------------------------------------------
function TArray(schema, references, value) {
    if ((0, guard_1.IsArray)(value)) {
        return value.map((value) => Visit(schema.items, references, value));
    }
    return value;
}
function TBigInt(schema, references, value) {
    return TryConvertBigInt(value);
}
function TBoolean(schema, references, value) {
    return TryConvertBoolean(value);
}
function TDate(schema, references, value) {
    return TryConvertDate(value);
}
function TInteger(schema, references, value) {
    return TryConvertInteger(value);
}
function TIntersect(schema, references, value) {
    // prettier-ignore
    return (schema.allOf.every(schema => Types.TypeGuard.TObject(schema)))
        ? Visit(Types.Type.Composite(schema.allOf), references, value)
        : Visit(schema.allOf[0], references, value);
}
function TLiteral(schema, references, value) {
    return TryConvertLiteral(schema, value);
}
function TNull(schema, references, value) {
    return TryConvertNull(value);
}
function TNumber(schema, references, value) {
    return TryConvertNumber(value);
}
function TObject(schema, references, value) {
    if ((0, guard_1.IsObject)(value))
        return Object.getOwnPropertyNames(schema.properties).reduce((acc, key) => {
            return value[key] !== undefined ? { ...acc, [key]: Visit(schema.properties[key], references, value[key]) } : { ...acc };
        }, value);
    return value;
}
function TRecord(schema, references, value) {
    const propertyKey = Object.getOwnPropertyNames(schema.patternProperties)[0];
    const property = schema.patternProperties[propertyKey];
    const result = {};
    for (const [propKey, propValue] of Object.entries(value)) {
        result[propKey] = Visit(property, references, propValue);
    }
    return result;
}
function TRef(schema, references, value) {
    return Visit((0, deref_1.Deref)(schema, references), references, value);
}
function TString(schema, references, value) {
    return TryConvertString(value);
}
function TSymbol(schema, references, value) {
    return (0, guard_1.IsString)(value) || (0, guard_1.IsNumber)(value) ? Symbol(value) : value;
}
function TThis(schema, references, value) {
    return Visit((0, deref_1.Deref)(schema, references), references, value);
}
function TTuple(schema, references, value) {
    if ((0, guard_1.IsArray)(value) && !(0, guard_1.IsUndefined)(schema.items)) {
        return value.map((value, index) => {
            return index < schema.items.length ? Visit(schema.items[index], references, value) : value;
        });
    }
    return value;
}
function TUndefined(schema, references, value) {
    return TryConvertUndefined(value);
}
function TUnion(schema, references, value) {
    for (const subschema of schema.anyOf) {
        const converted = Visit(subschema, references, value);
        if ((0, check_1.Check)(subschema, references, converted)) {
            return converted;
        }
    }
    return value;
}
function Visit(schema, references, value) {
    const references_ = (0, guard_1.IsString)(schema.$id) ? [...references, schema] : references;
    const schema_ = schema;
    switch (schema[Types.Kind]) {
        // ------------------------------------------------------
        // Structural
        // ------------------------------------------------------
        case 'Array':
            return TArray(schema_, references_, value);
        case 'BigInt':
            return TBigInt(schema_, references_, value);
        case 'Boolean':
            return TBoolean(schema_, references_, value);
        case 'Date':
            return TDate(schema_, references_, value);
        case 'Integer':
            return TInteger(schema_, references_, value);
        case 'Intersect':
            return TIntersect(schema_, references_, value);
        case 'Literal':
            return TLiteral(schema_, references_, value);
        case 'Null':
            return TNull(schema_, references_, value);
        case 'Number':
            return TNumber(schema_, references_, value);
        case 'Object':
            return TObject(schema_, references_, value);
        case 'Record':
            return TRecord(schema_, references_, value);
        case 'Ref':
            return TRef(schema_, references_, value);
        case 'String':
            return TString(schema_, references_, value);
        case 'Symbol':
            return TSymbol(schema_, references_, value);
        case 'This':
            return TThis(schema_, references_, value);
        case 'Tuple':
            return TTuple(schema_, references_, value);
        case 'Undefined':
            return TUndefined(schema_, references_, value);
        case 'Union':
            return TUnion(schema_, references_, value);
        // ------------------------------------------------------
        // Default
        // ------------------------------------------------------
        case 'Any':
        case 'AsyncIterator':
        case 'Constructor':
        case 'Function':
        case 'Iterator':
        case 'Never':
        case 'Promise':
        case 'TemplateLiteral':
        case 'Uint8Array':
        case 'Unknown':
        case 'Void':
            return Default(value);
        default:
            if (!Types.TypeRegistry.Has(schema_[Types.Kind]))
                throw new ValueConvertUnknownTypeError(schema_);
            return Default(value);
    }
}
/** Converts any type mismatched values to their target type if a reasonable conversion is possible. */
function Convert(...args) {
    return args.length === 3 ? Visit(args[0], args[1], args[2]) : Visit(args[0], [], args[1]);
}
exports.Convert = Convert;


/***/ }),

/***/ 4195:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*--------------------------------------------------------------------------

@sinclair/typebox/value

The MIT License (MIT)

Copyright (c) 2017-2023 Haydn Paterson (sinclair) <haydn.developer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Create = exports.ValueCreateRecursiveInstantiationError = exports.ValueCreateTempateLiteralTypeError = exports.ValueCreateIntersectTypeError = exports.ValueCreateNotTypeError = exports.ValueCreateNeverTypeError = exports.ValueCreateUnknownTypeError = void 0;
const guard_1 = __webpack_require__(9860);
const check_1 = __webpack_require__(3255);
const deref_1 = __webpack_require__(6595);
const Types = __webpack_require__(3017);
// --------------------------------------------------------------------------
// Errors
// --------------------------------------------------------------------------
class ValueCreateUnknownTypeError extends Types.TypeBoxError {
    constructor(schema) {
        super('Unknown type');
        this.schema = schema;
    }
}
exports.ValueCreateUnknownTypeError = ValueCreateUnknownTypeError;
class ValueCreateNeverTypeError extends Types.TypeBoxError {
    constructor(schema) {
        super('Never types cannot be created');
        this.schema = schema;
    }
}
exports.ValueCreateNeverTypeError = ValueCreateNeverTypeError;
class ValueCreateNotTypeError extends Types.TypeBoxError {
    constructor(schema) {
        super('Not types must have a default value');
        this.schema = schema;
    }
}
exports.ValueCreateNotTypeError = ValueCreateNotTypeError;
class ValueCreateIntersectTypeError extends Types.TypeBoxError {
    constructor(schema) {
        super('Intersect produced invalid value. Consider using a default value.');
        this.schema = schema;
    }
}
exports.ValueCreateIntersectTypeError = ValueCreateIntersectTypeError;
class ValueCreateTempateLiteralTypeError extends Types.TypeBoxError {
    constructor(schema) {
        super('Can only create template literal values from patterns that produce finite sequences. Consider using a default value.');
        this.schema = schema;
    }
}
exports.ValueCreateTempateLiteralTypeError = ValueCreateTempateLiteralTypeError;
class ValueCreateRecursiveInstantiationError extends Types.TypeBoxError {
    constructor(schema, recursiveMaxDepth) {
        super('Value cannot be created as recursive type may produce value of infinite size. Consider using a default.');
        this.schema = schema;
        this.recursiveMaxDepth = recursiveMaxDepth;
    }
}
exports.ValueCreateRecursiveInstantiationError = ValueCreateRecursiveInstantiationError;
// --------------------------------------------------------------------------
// Types
// --------------------------------------------------------------------------
function TAny(schema, references) {
    if ((0, guard_1.HasPropertyKey)(schema, 'default')) {
        return schema.default;
    }
    else {
        return {};
    }
}
function TArray(schema, references) {
    if (schema.uniqueItems === true && !(0, guard_1.HasPropertyKey)(schema, 'default')) {
        throw new Error('ValueCreate.Array: Array with the uniqueItems constraint requires a default value');
    }
    else if ('contains' in schema && !(0, guard_1.HasPropertyKey)(schema, 'default')) {
        throw new Error('ValueCreate.Array: Array with the contains constraint requires a default value');
    }
    else if ('default' in schema) {
        return schema.default;
    }
    else if (schema.minItems !== undefined) {
        return Array.from({ length: schema.minItems }).map((item) => {
            return Visit(schema.items, references);
        });
    }
    else {
        return [];
    }
}
function TAsyncIterator(schema, references) {
    if ((0, guard_1.HasPropertyKey)(schema, 'default')) {
        return schema.default;
    }
    else {
        return (async function* () { })();
    }
}
function TBigInt(schema, references) {
    if ((0, guard_1.HasPropertyKey)(schema, 'default')) {
        return schema.default;
    }
    else {
        return BigInt(0);
    }
}
function TBoolean(schema, references) {
    if ((0, guard_1.HasPropertyKey)(schema, 'default')) {
        return schema.default;
    }
    else {
        return false;
    }
}
function TConstructor(schema, references) {
    if ((0, guard_1.HasPropertyKey)(schema, 'default')) {
        return schema.default;
    }
    else {
        const value = Visit(schema.returns, references);
        if (typeof value === 'object' && !Array.isArray(value)) {
            return class {
                constructor() {
                    for (const [key, val] of Object.entries(value)) {
                        const self = this;
                        self[key] = val;
                    }
                }
            };
        }
        else {
            return class {
            };
        }
    }
}
function TDate(schema, references) {
    if ((0, guard_1.HasPropertyKey)(schema, 'default')) {
        return schema.default;
    }
    else if (schema.minimumTimestamp !== undefined) {
        return new Date(schema.minimumTimestamp);
    }
    else {
        return new Date();
    }
}
function TFunction(schema, references) {
    if ((0, guard_1.HasPropertyKey)(schema, 'default')) {
        return schema.default;
    }
    else {
        return () => Visit(schema.returns, references);
    }
}
function TInteger(schema, references) {
    if ((0, guard_1.HasPropertyKey)(schema, 'default')) {
        return schema.default;
    }
    else if (schema.minimum !== undefined) {
        return schema.minimum;
    }
    else {
        return 0;
    }
}
function TIntersect(schema, references) {
    if ((0, guard_1.HasPropertyKey)(schema, 'default')) {
        return schema.default;
    }
    else {
        // Note: The best we can do here is attempt to instance each sub type and apply through object assign. For non-object
        // sub types, we just escape the assignment and just return the value. In the latter case, this is typically going to
        // be a consequence of an illogical intersection.
        const value = schema.allOf.reduce((acc, schema) => {
            const next = Visit(schema, references);
            return typeof next === 'object' ? { ...acc, ...next } : next;
        }, {});
        if (!(0, check_1.Check)(schema, references, value))
            throw new ValueCreateIntersectTypeError(schema);
        return value;
    }
}
function TIterator(schema, references) {
    if ((0, guard_1.HasPropertyKey)(schema, 'default')) {
        return schema.default;
    }
    else {
        return (function* () { })();
    }
}
function TLiteral(schema, references) {
    if ((0, guard_1.HasPropertyKey)(schema, 'default')) {
        return schema.default;
    }
    else {
        return schema.const;
    }
}
function TNever(schema, references) {
    throw new ValueCreateNeverTypeError(schema);
}
function TNot(schema, references) {
    if ((0, guard_1.HasPropertyKey)(schema, 'default')) {
        return schema.default;
    }
    else {
        throw new ValueCreateNotTypeError(schema);
    }
}
function TNull(schema, references) {
    if ((0, guard_1.HasPropertyKey)(schema, 'default')) {
        return schema.default;
    }
    else {
        return null;
    }
}
function TNumber(schema, references) {
    if ((0, guard_1.HasPropertyKey)(schema, 'default')) {
        return schema.default;
    }
    else if (schema.minimum !== undefined) {
        return schema.minimum;
    }
    else {
        return 0;
    }
}
function TObject(schema, references) {
    if ((0, guard_1.HasPropertyKey)(schema, 'default')) {
        return schema.default;
    }
    else {
        const required = new Set(schema.required);
        return (schema.default ||
            Object.entries(schema.properties).reduce((acc, [key, schema]) => {
                return required.has(key) ? { ...acc, [key]: Visit(schema, references) } : { ...acc };
            }, {}));
    }
}
function TPromise(schema, references) {
    if ((0, guard_1.HasPropertyKey)(schema, 'default')) {
        return schema.default;
    }
    else {
        return Promise.resolve(Visit(schema.item, references));
    }
}
function TRecord(schema, references) {
    const [keyPattern, valueSchema] = Object.entries(schema.patternProperties)[0];
    if ((0, guard_1.HasPropertyKey)(schema, 'default')) {
        return schema.default;
    }
    else if (!(keyPattern === Types.PatternStringExact || keyPattern === Types.PatternNumberExact)) {
        const propertyKeys = keyPattern.slice(1, keyPattern.length - 1).split('|');
        return propertyKeys.reduce((acc, key) => {
            return { ...acc, [key]: Visit(valueSchema, references) };
        }, {});
    }
    else {
        return {};
    }
}
function TRef(schema, references) {
    if ((0, guard_1.HasPropertyKey)(schema, 'default')) {
        return schema.default;
    }
    else {
        return Visit((0, deref_1.Deref)(schema, references), references);
    }
}
function TString(schema, references) {
    if (schema.pattern !== undefined) {
        if (!(0, guard_1.HasPropertyKey)(schema, 'default')) {
            throw new Error('ValueCreate.String: String types with patterns must specify a default value');
        }
        else {
            return schema.default;
        }
    }
    else if (schema.format !== undefined) {
        if (!(0, guard_1.HasPropertyKey)(schema, 'default')) {
            throw new Error('ValueCreate.String: String types with formats must specify a default value');
        }
        else {
            return schema.default;
        }
    }
    else {
        if ((0, guard_1.HasPropertyKey)(schema, 'default')) {
            return schema.default;
        }
        else if (schema.minLength !== undefined) {
            return Array.from({ length: schema.minLength })
                .map(() => '.')
                .join('');
        }
        else {
            return '';
        }
    }
}
function TSymbol(schema, references) {
    if ((0, guard_1.HasPropertyKey)(schema, 'default')) {
        return schema.default;
    }
    else if ('value' in schema) {
        return Symbol.for(schema.value);
    }
    else {
        return Symbol();
    }
}
function TTemplateLiteral(schema, references) {
    if ((0, guard_1.HasPropertyKey)(schema, 'default')) {
        return schema.default;
    }
    const expression = Types.TemplateLiteralParser.ParseExact(schema.pattern);
    if (!Types.TemplateLiteralFinite.Check(expression))
        throw new ValueCreateTempateLiteralTypeError(schema);
    const sequence = Types.TemplateLiteralGenerator.Generate(expression);
    return sequence.next().value;
}
function TThis(schema, references) {
    if (recursiveDepth++ > recursiveMaxDepth)
        throw new ValueCreateRecursiveInstantiationError(schema, recursiveMaxDepth);
    if ((0, guard_1.HasPropertyKey)(schema, 'default')) {
        return schema.default;
    }
    else {
        return Visit((0, deref_1.Deref)(schema, references), references);
    }
}
function TTuple(schema, references) {
    if ((0, guard_1.HasPropertyKey)(schema, 'default')) {
        return schema.default;
    }
    if (schema.items === undefined) {
        return [];
    }
    else {
        return Array.from({ length: schema.minItems }).map((_, index) => Visit(schema.items[index], references));
    }
}
function TUndefined(schema, references) {
    if ((0, guard_1.HasPropertyKey)(schema, 'default')) {
        return schema.default;
    }
    else {
        return undefined;
    }
}
function TUnion(schema, references) {
    if ((0, guard_1.HasPropertyKey)(schema, 'default')) {
        return schema.default;
    }
    else if (schema.anyOf.length === 0) {
        throw new Error('ValueCreate.Union: Cannot create Union with zero variants');
    }
    else {
        return Visit(schema.anyOf[0], references);
    }
}
function TUint8Array(schema, references) {
    if ((0, guard_1.HasPropertyKey)(schema, 'default')) {
        return schema.default;
    }
    else if (schema.minByteLength !== undefined) {
        return new Uint8Array(schema.minByteLength);
    }
    else {
        return new Uint8Array(0);
    }
}
function TUnknown(schema, references) {
    if ((0, guard_1.HasPropertyKey)(schema, 'default')) {
        return schema.default;
    }
    else {
        return {};
    }
}
function TVoid(schema, references) {
    if ((0, guard_1.HasPropertyKey)(schema, 'default')) {
        return schema.default;
    }
    else {
        return void 0;
    }
}
function TKind(schema, references) {
    if ((0, guard_1.HasPropertyKey)(schema, 'default')) {
        return schema.default;
    }
    else {
        throw new Error('User defined types must specify a default value');
    }
}
function Visit(schema, references) {
    const references_ = (0, guard_1.IsString)(schema.$id) ? [...references, schema] : references;
    const schema_ = schema;
    switch (schema_[Types.Kind]) {
        case 'Any':
            return TAny(schema_, references_);
        case 'Array':
            return TArray(schema_, references_);
        case 'AsyncIterator':
            return TAsyncIterator(schema_, references_);
        case 'BigInt':
            return TBigInt(schema_, references_);
        case 'Boolean':
            return TBoolean(schema_, references_);
        case 'Constructor':
            return TConstructor(schema_, references_);
        case 'Date':
            return TDate(schema_, references_);
        case 'Function':
            return TFunction(schema_, references_);
        case 'Integer':
            return TInteger(schema_, references_);
        case 'Intersect':
            return TIntersect(schema_, references_);
        case 'Iterator':
            return TIterator(schema_, references_);
        case 'Literal':
            return TLiteral(schema_, references_);
        case 'Never':
            return TNever(schema_, references_);
        case 'Not':
            return TNot(schema_, references_);
        case 'Null':
            return TNull(schema_, references_);
        case 'Number':
            return TNumber(schema_, references_);
        case 'Object':
            return TObject(schema_, references_);
        case 'Promise':
            return TPromise(schema_, references_);
        case 'Record':
            return TRecord(schema_, references_);
        case 'Ref':
            return TRef(schema_, references_);
        case 'String':
            return TString(schema_, references_);
        case 'Symbol':
            return TSymbol(schema_, references_);
        case 'TemplateLiteral':
            return TTemplateLiteral(schema_, references_);
        case 'This':
            return TThis(schema_, references_);
        case 'Tuple':
            return TTuple(schema_, references_);
        case 'Undefined':
            return TUndefined(schema_, references_);
        case 'Union':
            return TUnion(schema_, references_);
        case 'Uint8Array':
            return TUint8Array(schema_, references_);
        case 'Unknown':
            return TUnknown(schema_, references_);
        case 'Void':
            return TVoid(schema_, references_);
        default:
            if (!Types.TypeRegistry.Has(schema_[Types.Kind]))
                throw new ValueCreateUnknownTypeError(schema_);
            return TKind(schema_, references_);
    }
}
// --------------------------------------------------------------------------
// State
// --------------------------------------------------------------------------
const recursiveMaxDepth = 512;
let recursiveDepth = 0;
/** Creates a value from the given schema */
function Create(...args) {
    recursiveDepth = 0;
    return args.length === 2 ? Visit(args[0], args[1]) : Visit(args[0], []);
}
exports.Create = Create;


/***/ }),

/***/ 9518:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*--------------------------------------------------------------------------

@sinclair/typebox/value

The MIT License (MIT)

Copyright (c) 2017-2023 Haydn Paterson (sinclair) <haydn.developer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Patch = exports.Diff = exports.ValueDeltaUnableToDiffUnknownValue = exports.ValueDeltaObjectWithSymbolKeyError = exports.Edit = exports.Delete = exports.Update = exports.Insert = void 0;
const guard_1 = __webpack_require__(9860);
const typebox_1 = __webpack_require__(3017);
const pointer_1 = __webpack_require__(6166);
const clone_1 = __webpack_require__(4165);
exports.Insert = typebox_1.Type.Object({
    type: typebox_1.Type.Literal('insert'),
    path: typebox_1.Type.String(),
    value: typebox_1.Type.Unknown(),
});
exports.Update = typebox_1.Type.Object({
    type: typebox_1.Type.Literal('update'),
    path: typebox_1.Type.String(),
    value: typebox_1.Type.Unknown(),
});
exports.Delete = typebox_1.Type.Object({
    type: typebox_1.Type.Literal('delete'),
    path: typebox_1.Type.String(),
});
exports.Edit = typebox_1.Type.Union([exports.Insert, exports.Update, exports.Delete]);
// --------------------------------------------------------------------------
// Errors
// --------------------------------------------------------------------------
class ValueDeltaObjectWithSymbolKeyError extends Error {
    constructor(key) {
        super('Cannot diff objects with symbol keys');
        this.key = key;
    }
}
exports.ValueDeltaObjectWithSymbolKeyError = ValueDeltaObjectWithSymbolKeyError;
class ValueDeltaUnableToDiffUnknownValue extends Error {
    constructor(value) {
        super('Unable to create diff edits for unknown value');
        this.value = value;
    }
}
exports.ValueDeltaUnableToDiffUnknownValue = ValueDeltaUnableToDiffUnknownValue;
// --------------------------------------------------------------------------
// Command Factory
// --------------------------------------------------------------------------
function CreateUpdate(path, value) {
    return { type: 'update', path, value };
}
function CreateInsert(path, value) {
    return { type: 'insert', path, value };
}
function CreateDelete(path) {
    return { type: 'delete', path };
}
// --------------------------------------------------------------------------
// Diffing Generators
// --------------------------------------------------------------------------
function* ObjectType(path, current, next) {
    if (!(0, guard_1.IsPlainObject)(next))
        return yield CreateUpdate(path, next);
    const currentKeys = [...Object.keys(current), ...Object.getOwnPropertySymbols(current)];
    const nextKeys = [...Object.keys(next), ...Object.getOwnPropertySymbols(next)];
    for (const key of currentKeys) {
        if ((0, guard_1.IsSymbol)(key))
            throw new ValueDeltaObjectWithSymbolKeyError(key);
        if ((0, guard_1.IsUndefined)(next[key]) && nextKeys.includes(key))
            yield CreateUpdate(`${path}/${String(key)}`, undefined);
    }
    for (const key of nextKeys) {
        if ((0, guard_1.IsUndefined)(current[key]) || (0, guard_1.IsUndefined)(next[key]))
            continue;
        if ((0, guard_1.IsSymbol)(key))
            throw new ValueDeltaObjectWithSymbolKeyError(key);
        yield* Visit(`${path}/${String(key)}`, current[key], next[key]);
    }
    for (const key of nextKeys) {
        if ((0, guard_1.IsSymbol)(key))
            throw new ValueDeltaObjectWithSymbolKeyError(key);
        if ((0, guard_1.IsUndefined)(current[key]))
            yield CreateInsert(`${path}/${String(key)}`, next[key]);
    }
    for (const key of currentKeys.reverse()) {
        if ((0, guard_1.IsSymbol)(key))
            throw new ValueDeltaObjectWithSymbolKeyError(key);
        if ((0, guard_1.IsUndefined)(next[key]) && !nextKeys.includes(key))
            yield CreateDelete(`${path}/${String(key)}`);
    }
}
function* ArrayType(path, current, next) {
    if (!(0, guard_1.IsArray)(next))
        return yield CreateUpdate(path, next);
    for (let i = 0; i < Math.min(current.length, next.length); i++) {
        yield* Visit(`${path}/${i}`, current[i], next[i]);
    }
    for (let i = 0; i < next.length; i++) {
        if (i < current.length)
            continue;
        yield CreateInsert(`${path}/${i}`, next[i]);
    }
    for (let i = current.length - 1; i >= 0; i--) {
        if (i < next.length)
            continue;
        yield CreateDelete(`${path}/${i}`);
    }
}
function* TypedArrayType(path, current, next) {
    if (!(0, guard_1.IsTypedArray)(next) || current.length !== next.length || Object.getPrototypeOf(current).constructor.name !== Object.getPrototypeOf(next).constructor.name)
        return yield CreateUpdate(path, next);
    for (let i = 0; i < Math.min(current.length, next.length); i++) {
        yield* Visit(`${path}/${i}`, current[i], next[i]);
    }
}
function* ValueType(path, current, next) {
    if (current === next)
        return;
    yield CreateUpdate(path, next);
}
function* Visit(path, current, next) {
    if ((0, guard_1.IsPlainObject)(current))
        return yield* ObjectType(path, current, next);
    if ((0, guard_1.IsArray)(current))
        return yield* ArrayType(path, current, next);
    if ((0, guard_1.IsTypedArray)(current))
        return yield* TypedArrayType(path, current, next);
    if ((0, guard_1.IsValueType)(current))
        return yield* ValueType(path, current, next);
    throw new ValueDeltaUnableToDiffUnknownValue(current);
}
// ---------------------------------------------------------------------
// Diff
// ---------------------------------------------------------------------
function Diff(current, next) {
    return [...Visit('', current, next)];
}
exports.Diff = Diff;
// ---------------------------------------------------------------------
// Patch
// ---------------------------------------------------------------------
function IsRootUpdate(edits) {
    return edits.length > 0 && edits[0].path === '' && edits[0].type === 'update';
}
function IsIdentity(edits) {
    return edits.length === 0;
}
function Patch(current, edits) {
    if (IsRootUpdate(edits)) {
        return (0, clone_1.Clone)(edits[0].value);
    }
    if (IsIdentity(edits)) {
        return (0, clone_1.Clone)(current);
    }
    const clone = (0, clone_1.Clone)(current);
    for (const edit of edits) {
        switch (edit.type) {
            case 'insert': {
                pointer_1.ValuePointer.Set(clone, edit.path, edit.value);
                break;
            }
            case 'update': {
                pointer_1.ValuePointer.Set(clone, edit.path, edit.value);
                break;
            }
            case 'delete': {
                pointer_1.ValuePointer.Delete(clone, edit.path);
                break;
            }
        }
    }
    return clone;
}
exports.Patch = Patch;


/***/ }),

/***/ 6595:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*--------------------------------------------------------------------------

@sinclair/typebox/value

The MIT License (MIT)

Copyright (c) 2017-2023 Haydn Paterson (sinclair) <haydn.developer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Deref = exports.TypeDereferenceError = void 0;
const typebox_1 = __webpack_require__(3017);
class TypeDereferenceError extends typebox_1.TypeBoxError {
    constructor(schema) {
        super(`Unable to dereference schema with $id '${schema.$id}'`);
        this.schema = schema;
    }
}
exports.TypeDereferenceError = TypeDereferenceError;
/** Dereferences a schema from the references array or throws if not found */
function Deref(schema, references) {
    const index = references.findIndex((target) => target.$id === schema.$ref);
    if (index === -1)
        throw new TypeDereferenceError(schema);
    return references[index];
}
exports.Deref = Deref;


/***/ }),

/***/ 3629:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*--------------------------------------------------------------------------

@sinclair/typebox/value

The MIT License (MIT)

Copyright (c) 2017-2023 Haydn Paterson (sinclair) <haydn.developer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Equal = void 0;
const guard_1 = __webpack_require__(9860);
// --------------------------------------------------------------------------
// Equality Checks
// --------------------------------------------------------------------------
function ObjectType(left, right) {
    if (!(0, guard_1.IsPlainObject)(right))
        return false;
    const leftKeys = [...Object.keys(left), ...Object.getOwnPropertySymbols(left)];
    const rightKeys = [...Object.keys(right), ...Object.getOwnPropertySymbols(right)];
    if (leftKeys.length !== rightKeys.length)
        return false;
    return leftKeys.every((key) => Equal(left[key], right[key]));
}
function DateType(left, right) {
    return (0, guard_1.IsDate)(right) && left.getTime() === right.getTime();
}
function ArrayType(left, right) {
    if (!(0, guard_1.IsArray)(right) || left.length !== right.length)
        return false;
    return left.every((value, index) => Equal(value, right[index]));
}
function TypedArrayType(left, right) {
    if (!(0, guard_1.IsTypedArray)(right) || left.length !== right.length || Object.getPrototypeOf(left).constructor.name !== Object.getPrototypeOf(right).constructor.name)
        return false;
    return left.every((value, index) => Equal(value, right[index]));
}
function ValueType(left, right) {
    return left === right;
}
// --------------------------------------------------------------------------
// Equal
// --------------------------------------------------------------------------
/** Returns true if the left value deep-equals the right */
function Equal(left, right) {
    if ((0, guard_1.IsPlainObject)(left))
        return ObjectType(left, right);
    if ((0, guard_1.IsDate)(left))
        return DateType(left, right);
    if ((0, guard_1.IsTypedArray)(left))
        return TypedArrayType(left, right);
    if ((0, guard_1.IsArray)(left))
        return ArrayType(left, right);
    if ((0, guard_1.IsValueType)(left))
        return ValueType(left, right);
    throw new Error('ValueEquals: Unable to compare value');
}
exports.Equal = Equal;


/***/ }),

/***/ 9860:
/***/ ((__unused_webpack_module, exports) => {


/*--------------------------------------------------------------------------

@sinclair/typebox/value

The MIT License (MIT)

Copyright (c) 2017-2023 Haydn Paterson (sinclair) <haydn.developer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IsValueType = exports.IsSymbol = exports.IsFunction = exports.IsString = exports.IsBigInt = exports.IsInteger = exports.IsNumber = exports.IsBoolean = exports.IsNull = exports.IsUndefined = exports.IsArray = exports.IsObject = exports.IsPlainObject = exports.HasPropertyKey = exports.IsDate = exports.IsUint8Array = exports.IsPromise = exports.IsTypedArray = exports.IsIterator = exports.IsAsyncIterator = void 0;
// --------------------------------------------------------------------------
// Iterators
// --------------------------------------------------------------------------
/** Returns true if this value is an async iterator */
function IsAsyncIterator(value) {
    return IsObject(value) && Symbol.asyncIterator in value;
}
exports.IsAsyncIterator = IsAsyncIterator;
/** Returns true if this value is an iterator */
function IsIterator(value) {
    return IsObject(value) && Symbol.iterator in value;
}
exports.IsIterator = IsIterator;
// --------------------------------------------------------------------------
// Nominal
// --------------------------------------------------------------------------
/** Returns true if this value is a typed array */
function IsTypedArray(value) {
    return ArrayBuffer.isView(value);
}
exports.IsTypedArray = IsTypedArray;
/** Returns true if this value is a Promise */
function IsPromise(value) {
    return value instanceof Promise;
}
exports.IsPromise = IsPromise;
/** Returns true if the value is a Uint8Array */
function IsUint8Array(value) {
    return value instanceof Uint8Array;
}
exports.IsUint8Array = IsUint8Array;
/** Returns true if this value is a Date */
function IsDate(value) {
    return value instanceof Date && Number.isFinite(value.getTime());
}
exports.IsDate = IsDate;
// --------------------------------------------------------------------------
// Standard
// --------------------------------------------------------------------------
/** Returns true if this value has this property key */
function HasPropertyKey(value, key) {
    return key in value;
}
exports.HasPropertyKey = HasPropertyKey;
/** Returns true if this object is not an instance of any other type */
function IsPlainObject(value) {
    return IsObject(value) && IsFunction(value.constructor) && value.constructor.name === 'Object';
}
exports.IsPlainObject = IsPlainObject;
/** Returns true of this value is an object type */
function IsObject(value) {
    return value !== null && typeof value === 'object';
}
exports.IsObject = IsObject;
/** Returns true if this value is an array, but not a typed array */
function IsArray(value) {
    return Array.isArray(value) && !ArrayBuffer.isView(value);
}
exports.IsArray = IsArray;
/** Returns true if this value is an undefined */
function IsUndefined(value) {
    return value === undefined;
}
exports.IsUndefined = IsUndefined;
/** Returns true if this value is an null */
function IsNull(value) {
    return value === null;
}
exports.IsNull = IsNull;
/** Returns true if this value is an boolean */
function IsBoolean(value) {
    return typeof value === 'boolean';
}
exports.IsBoolean = IsBoolean;
/** Returns true if this value is an number */
function IsNumber(value) {
    return typeof value === 'number';
}
exports.IsNumber = IsNumber;
/** Returns true if this value is an integer */
function IsInteger(value) {
    return IsNumber(value) && Number.isInteger(value);
}
exports.IsInteger = IsInteger;
/** Returns true if this value is bigint */
function IsBigInt(value) {
    return typeof value === 'bigint';
}
exports.IsBigInt = IsBigInt;
/** Returns true if this value is string */
function IsString(value) {
    return typeof value === 'string';
}
exports.IsString = IsString;
/** Returns true if this value is a function */
function IsFunction(value) {
    return typeof value === 'function';
}
exports.IsFunction = IsFunction;
/** Returns true if this value is a symbol */
function IsSymbol(value) {
    return typeof value === 'symbol';
}
exports.IsSymbol = IsSymbol;
/** Returns true if this value is a value type such as number, string, boolean */
function IsValueType(value) {
    // prettier-ignore
    return (IsBigInt(value) ||
        IsBoolean(value) ||
        IsNull(value) ||
        IsNumber(value) ||
        IsString(value) ||
        IsSymbol(value) ||
        IsUndefined(value));
}
exports.IsValueType = IsValueType;


/***/ }),

/***/ 9122:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*--------------------------------------------------------------------------

@sinclair/typebox/value

The MIT License (MIT)

Copyright (c) 2017-2023 Haydn Paterson (sinclair) <haydn.developer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Hash = exports.ByteMarker = exports.ValueHashError = void 0;
const guard_1 = __webpack_require__(9860);
// --------------------------------------------------------------------------
// Errors
// --------------------------------------------------------------------------
class ValueHashError extends Error {
    constructor(value) {
        super(`Unable to hash value`);
        this.value = value;
    }
}
exports.ValueHashError = ValueHashError;
// --------------------------------------------------------------------------
// ByteMarker
// --------------------------------------------------------------------------
var ByteMarker;
(function (ByteMarker) {
    ByteMarker[ByteMarker["Undefined"] = 0] = "Undefined";
    ByteMarker[ByteMarker["Null"] = 1] = "Null";
    ByteMarker[ByteMarker["Boolean"] = 2] = "Boolean";
    ByteMarker[ByteMarker["Number"] = 3] = "Number";
    ByteMarker[ByteMarker["String"] = 4] = "String";
    ByteMarker[ByteMarker["Object"] = 5] = "Object";
    ByteMarker[ByteMarker["Array"] = 6] = "Array";
    ByteMarker[ByteMarker["Date"] = 7] = "Date";
    ByteMarker[ByteMarker["Uint8Array"] = 8] = "Uint8Array";
    ByteMarker[ByteMarker["Symbol"] = 9] = "Symbol";
    ByteMarker[ByteMarker["BigInt"] = 10] = "BigInt";
})(ByteMarker || (exports.ByteMarker = ByteMarker = {}));
// --------------------------------------------------------------------------
// State
// --------------------------------------------------------------------------
let Accumulator = BigInt('14695981039346656037');
const [Prime, Size] = [BigInt('1099511628211'), BigInt('2') ** BigInt('64')];
const Bytes = Array.from({ length: 256 }).map((_, i) => BigInt(i));
const F64 = new Float64Array(1);
const F64In = new DataView(F64.buffer);
const F64Out = new Uint8Array(F64.buffer);
// --------------------------------------------------------------------------
// NumberToBytes
// --------------------------------------------------------------------------
function* NumberToBytes(value) {
    const byteCount = value === 0 ? 1 : Math.ceil(Math.floor(Math.log2(value) + 1) / 8);
    for (let i = 0; i < byteCount; i++) {
        yield (value >> (8 * (byteCount - 1 - i))) & 0xff;
    }
}
// --------------------------------------------------------------------------
// Hashing Functions
// --------------------------------------------------------------------------
function ArrayType(value) {
    FNV1A64(ByteMarker.Array);
    for (const item of value) {
        Visit(item);
    }
}
function BooleanType(value) {
    FNV1A64(ByteMarker.Boolean);
    FNV1A64(value ? 1 : 0);
}
function BigIntType(value) {
    FNV1A64(ByteMarker.BigInt);
    F64In.setBigInt64(0, value);
    for (const byte of F64Out) {
        FNV1A64(byte);
    }
}
function DateType(value) {
    FNV1A64(ByteMarker.Date);
    Visit(value.getTime());
}
function NullType(value) {
    FNV1A64(ByteMarker.Null);
}
function NumberType(value) {
    FNV1A64(ByteMarker.Number);
    F64In.setFloat64(0, value);
    for (const byte of F64Out) {
        FNV1A64(byte);
    }
}
function ObjectType(value) {
    FNV1A64(ByteMarker.Object);
    for (const key of globalThis.Object.keys(value).sort()) {
        Visit(key);
        Visit(value[key]);
    }
}
function StringType(value) {
    FNV1A64(ByteMarker.String);
    for (let i = 0; i < value.length; i++) {
        for (const byte of NumberToBytes(value.charCodeAt(i))) {
            FNV1A64(byte);
        }
    }
}
function SymbolType(value) {
    FNV1A64(ByteMarker.Symbol);
    Visit(value.description);
}
function Uint8ArrayType(value) {
    FNV1A64(ByteMarker.Uint8Array);
    for (let i = 0; i < value.length; i++) {
        FNV1A64(value[i]);
    }
}
function UndefinedType(value) {
    return FNV1A64(ByteMarker.Undefined);
}
function Visit(value) {
    if ((0, guard_1.IsArray)(value))
        return ArrayType(value);
    if ((0, guard_1.IsBoolean)(value))
        return BooleanType(value);
    if ((0, guard_1.IsBigInt)(value))
        return BigIntType(value);
    if ((0, guard_1.IsDate)(value))
        return DateType(value);
    if ((0, guard_1.IsNull)(value))
        return NullType(value);
    if ((0, guard_1.IsNumber)(value))
        return NumberType(value);
    if ((0, guard_1.IsPlainObject)(value))
        return ObjectType(value);
    if ((0, guard_1.IsString)(value))
        return StringType(value);
    if ((0, guard_1.IsSymbol)(value))
        return SymbolType(value);
    if ((0, guard_1.IsUint8Array)(value))
        return Uint8ArrayType(value);
    if ((0, guard_1.IsUndefined)(value))
        return UndefinedType(value);
    throw new ValueHashError(value);
}
function FNV1A64(byte) {
    Accumulator = Accumulator ^ Bytes[byte];
    Accumulator = (Accumulator * Prime) % Size;
}
// --------------------------------------------------------------------------
// Hash
// --------------------------------------------------------------------------
/** Creates a FNV1A-64 non cryptographic hash of the given value */
function Hash(value) {
    Accumulator = BigInt('14695981039346656037');
    Visit(value);
    return Accumulator;
}
exports.Hash = Hash;


/***/ }),

/***/ 7536:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*--------------------------------------------------------------------------

@sinclair/typebox/value

The MIT License (MIT)

Copyright (c) 2017-2023 Haydn Paterson (sinclair) <haydn.developer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Value = exports.ValuePointer = exports.Delete = exports.Update = exports.Insert = exports.Edit = exports.ValueErrorIterator = exports.ValueErrorType = void 0;
var index_1 = __webpack_require__(8056);
Object.defineProperty(exports, "ValueErrorType", ({ enumerable: true, get: function () { return index_1.ValueErrorType; } }));
Object.defineProperty(exports, "ValueErrorIterator", ({ enumerable: true, get: function () { return index_1.ValueErrorIterator; } }));
var delta_1 = __webpack_require__(9518);
Object.defineProperty(exports, "Edit", ({ enumerable: true, get: function () { return delta_1.Edit; } }));
Object.defineProperty(exports, "Insert", ({ enumerable: true, get: function () { return delta_1.Insert; } }));
Object.defineProperty(exports, "Update", ({ enumerable: true, get: function () { return delta_1.Update; } }));
Object.defineProperty(exports, "Delete", ({ enumerable: true, get: function () { return delta_1.Delete; } }));
var pointer_1 = __webpack_require__(6166);
Object.defineProperty(exports, "ValuePointer", ({ enumerable: true, get: function () { return pointer_1.ValuePointer; } }));
var value_1 = __webpack_require__(1401);
Object.defineProperty(exports, "Value", ({ enumerable: true, get: function () { return value_1.Value; } }));


/***/ }),

/***/ 8205:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*--------------------------------------------------------------------------

@sinclair/typebox/value

The MIT License (MIT)

Copyright (c) 2017-2023 Haydn Paterson (sinclair) <haydn.developer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Mutate = exports.ValueMutateInvalidRootMutationError = exports.ValueMutateTypeMismatchError = void 0;
const guard_1 = __webpack_require__(9860);
const pointer_1 = __webpack_require__(6166);
const clone_1 = __webpack_require__(4165);
// --------------------------------------------------------------------------
// Errors
// --------------------------------------------------------------------------
class ValueMutateTypeMismatchError extends Error {
    constructor() {
        super('Cannot assign due type mismatch of assignable values');
    }
}
exports.ValueMutateTypeMismatchError = ValueMutateTypeMismatchError;
class ValueMutateInvalidRootMutationError extends Error {
    constructor() {
        super('Only object and array types can be mutated at the root level');
    }
}
exports.ValueMutateInvalidRootMutationError = ValueMutateInvalidRootMutationError;
function ObjectType(root, path, current, next) {
    if (!(0, guard_1.IsPlainObject)(current)) {
        pointer_1.ValuePointer.Set(root, path, (0, clone_1.Clone)(next));
    }
    else {
        const currentKeys = Object.keys(current);
        const nextKeys = Object.keys(next);
        for (const currentKey of currentKeys) {
            if (!nextKeys.includes(currentKey)) {
                delete current[currentKey];
            }
        }
        for (const nextKey of nextKeys) {
            if (!currentKeys.includes(nextKey)) {
                current[nextKey] = null;
            }
        }
        for (const nextKey of nextKeys) {
            Visit(root, `${path}/${nextKey}`, current[nextKey], next[nextKey]);
        }
    }
}
function ArrayType(root, path, current, next) {
    if (!(0, guard_1.IsArray)(current)) {
        pointer_1.ValuePointer.Set(root, path, (0, clone_1.Clone)(next));
    }
    else {
        for (let index = 0; index < next.length; index++) {
            Visit(root, `${path}/${index}`, current[index], next[index]);
        }
        current.splice(next.length);
    }
}
function TypedArrayType(root, path, current, next) {
    if ((0, guard_1.IsTypedArray)(current) && current.length === next.length) {
        for (let i = 0; i < current.length; i++) {
            current[i] = next[i];
        }
    }
    else {
        pointer_1.ValuePointer.Set(root, path, (0, clone_1.Clone)(next));
    }
}
function ValueType(root, path, current, next) {
    if (current === next)
        return;
    pointer_1.ValuePointer.Set(root, path, next);
}
function Visit(root, path, current, next) {
    if ((0, guard_1.IsArray)(next))
        return ArrayType(root, path, current, next);
    if ((0, guard_1.IsTypedArray)(next))
        return TypedArrayType(root, path, current, next);
    if ((0, guard_1.IsPlainObject)(next))
        return ObjectType(root, path, current, next);
    if ((0, guard_1.IsValueType)(next))
        return ValueType(root, path, current, next);
}
// --------------------------------------------------------------------------
// Mutate
// --------------------------------------------------------------------------
function IsNonMutableValue(value) {
    return (0, guard_1.IsTypedArray)(value) || (0, guard_1.IsValueType)(value);
}
function IsMismatchedValue(current, next) {
    // prettier-ignore
    return (((0, guard_1.IsPlainObject)(current) && (0, guard_1.IsArray)(next)) ||
        ((0, guard_1.IsArray)(current) && (0, guard_1.IsPlainObject)(next)));
}
// --------------------------------------------------------------------------
// Mutate
// --------------------------------------------------------------------------
/** Performs a deep mutable value assignment while retaining internal references */
function Mutate(current, next) {
    if (IsNonMutableValue(current) || IsNonMutableValue(next))
        throw new ValueMutateInvalidRootMutationError();
    if (IsMismatchedValue(current, next))
        throw new ValueMutateTypeMismatchError();
    Visit(current, '', current, next);
}
exports.Mutate = Mutate;


/***/ }),

/***/ 6166:
/***/ ((__unused_webpack_module, exports) => {


/*--------------------------------------------------------------------------

@sinclair/typebox/value

The MIT License (MIT)

Copyright (c) 2017-2023 Haydn Paterson (sinclair) <haydn.developer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValuePointer = exports.ValuePointerRootDeleteError = exports.ValuePointerRootSetError = void 0;
// --------------------------------------------------------------------------
// Errors
// --------------------------------------------------------------------------
class ValuePointerRootSetError extends Error {
    constructor(value, path, update) {
        super('Cannot set root value');
        this.value = value;
        this.path = path;
        this.update = update;
    }
}
exports.ValuePointerRootSetError = ValuePointerRootSetError;
class ValuePointerRootDeleteError extends Error {
    constructor(value, path) {
        super('Cannot delete root value');
        this.value = value;
        this.path = path;
    }
}
exports.ValuePointerRootDeleteError = ValuePointerRootDeleteError;
// --------------------------------------------------------------------------
// ValuePointer
// --------------------------------------------------------------------------
/** Provides functionality to update values through RFC6901 string pointers */
var ValuePointer;
(function (ValuePointer) {
    function Escape(component) {
        return component.indexOf('~') === -1 ? component : component.replace(/~1/g, '/').replace(/~0/g, '~');
    }
    /** Formats the given pointer into navigable key components */
    function* Format(pointer) {
        if (pointer === '')
            return;
        let [start, end] = [0, 0];
        for (let i = 0; i < pointer.length; i++) {
            const char = pointer.charAt(i);
            if (char === '/') {
                if (i === 0) {
                    start = i + 1;
                }
                else {
                    end = i;
                    yield Escape(pointer.slice(start, end));
                    start = i + 1;
                }
            }
            else {
                end = i;
            }
        }
        yield Escape(pointer.slice(start));
    }
    ValuePointer.Format = Format;
    /** Sets the value at the given pointer. If the value at the pointer does not exist it is created */
    function Set(value, pointer, update) {
        if (pointer === '')
            throw new ValuePointerRootSetError(value, pointer, update);
        let [owner, next, key] = [null, value, ''];
        for (const component of Format(pointer)) {
            if (next[component] === undefined)
                next[component] = {};
            owner = next;
            next = next[component];
            key = component;
        }
        owner[key] = update;
    }
    ValuePointer.Set = Set;
    /** Deletes a value at the given pointer */
    function Delete(value, pointer) {
        if (pointer === '')
            throw new ValuePointerRootDeleteError(value, pointer);
        let [owner, next, key] = [null, value, ''];
        for (const component of Format(pointer)) {
            if (next[component] === undefined || next[component] === null)
                return;
            owner = next;
            next = next[component];
            key = component;
        }
        if (Array.isArray(owner)) {
            const index = parseInt(key);
            owner.splice(index, 1);
        }
        else {
            delete owner[key];
        }
    }
    ValuePointer.Delete = Delete;
    /** Returns true if a value exists at the given pointer */
    function Has(value, pointer) {
        if (pointer === '')
            return true;
        let [owner, next, key] = [null, value, ''];
        for (const component of Format(pointer)) {
            if (next[component] === undefined)
                return false;
            owner = next;
            next = next[component];
            key = component;
        }
        return Object.getOwnPropertyNames(owner).includes(key);
    }
    ValuePointer.Has = Has;
    /** Gets the value at the given pointer */
    function Get(value, pointer) {
        if (pointer === '')
            return value;
        let current = value;
        for (const component of Format(pointer)) {
            if (current[component] === undefined)
                return undefined;
            current = current[component];
        }
        return current;
    }
    ValuePointer.Get = Get;
})(ValuePointer || (exports.ValuePointer = ValuePointer = {}));


/***/ }),

/***/ 8248:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*--------------------------------------------------------------------------

@sinclair/typebox/value

The MIT License (MIT)

Copyright (c) 2017-2023 Haydn Paterson (sinclair) <haydn.developer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EncodeTransform = exports.DecodeTransform = exports.HasTransform = exports.TransformEncodeError = exports.TransformDecodeError = exports.TransformEncodeCheckError = exports.TransformDecodeCheckError = void 0;
const guard_1 = __webpack_require__(9860);
const deref_1 = __webpack_require__(6595);
const check_1 = __webpack_require__(3255);
const Types = __webpack_require__(3017);
// -------------------------------------------------------------------------
// Errors
// -------------------------------------------------------------------------
class TransformDecodeCheckError extends Types.TypeBoxError {
    constructor(schema, value, error) {
        super(`Unable to decode due to invalid value`);
        this.schema = schema;
        this.value = value;
        this.error = error;
    }
}
exports.TransformDecodeCheckError = TransformDecodeCheckError;
class TransformEncodeCheckError extends Types.TypeBoxError {
    constructor(schema, value, error) {
        super(`Unable to encode due to invalid value`);
        this.schema = schema;
        this.value = value;
        this.error = error;
    }
}
exports.TransformEncodeCheckError = TransformEncodeCheckError;
class TransformDecodeError extends Types.TypeBoxError {
    constructor(schema, value, error) {
        super(`${error instanceof Error ? error.message : 'Unknown error'}`);
        this.schema = schema;
        this.value = value;
    }
}
exports.TransformDecodeError = TransformDecodeError;
class TransformEncodeError extends Types.TypeBoxError {
    constructor(schema, value, error) {
        super(`${error instanceof Error ? error.message : 'Unknown error'}`);
        this.schema = schema;
        this.value = value;
    }
}
exports.TransformEncodeError = TransformEncodeError;
// ------------------------------------------------------------------
// HasTransform
// ------------------------------------------------------------------
/** Recursively checks a schema for transform codecs */
var HasTransform;
(function (HasTransform) {
    function TArray(schema, references) {
        return Types.TypeGuard.TTransform(schema) || Visit(schema.items, references);
    }
    function TAsyncIterator(schema, references) {
        return Types.TypeGuard.TTransform(schema) || Visit(schema.items, references);
    }
    function TConstructor(schema, references) {
        return Types.TypeGuard.TTransform(schema) || Visit(schema.returns, references) || schema.parameters.some((schema) => Visit(schema, references));
    }
    function TFunction(schema, references) {
        return Types.TypeGuard.TTransform(schema) || Visit(schema.returns, references) || schema.parameters.some((schema) => Visit(schema, references));
    }
    function TIntersect(schema, references) {
        return Types.TypeGuard.TTransform(schema) || Types.TypeGuard.TTransform(schema.unevaluatedProperties) || schema.allOf.some((schema) => Visit(schema, references));
    }
    function TIterator(schema, references) {
        return Types.TypeGuard.TTransform(schema) || Visit(schema.items, references);
    }
    function TNot(schema, references) {
        return Types.TypeGuard.TTransform(schema) || Visit(schema.not, references);
    }
    function TObject(schema, references) {
        // prettier-ignore
        return (Types.TypeGuard.TTransform(schema) || Object.values(schema.properties).some((schema) => Visit(schema, references)) || Types.TypeGuard.TSchema(schema.additionalProperties) && Visit(schema.additionalProperties, references));
    }
    function TPromise(schema, references) {
        return Types.TypeGuard.TTransform(schema) || Visit(schema.item, references);
    }
    function TRecord(schema, references) {
        const pattern = Object.getOwnPropertyNames(schema.patternProperties)[0];
        const property = schema.patternProperties[pattern];
        return Types.TypeGuard.TTransform(schema) || Visit(property, references) || (Types.TypeGuard.TSchema(schema.additionalProperties) && Types.TypeGuard.TTransform(schema.additionalProperties));
    }
    function TRef(schema, references) {
        if (Types.TypeGuard.TTransform(schema))
            return true;
        return Visit((0, deref_1.Deref)(schema, references), references);
    }
    function TThis(schema, references) {
        if (Types.TypeGuard.TTransform(schema))
            return true;
        return Visit((0, deref_1.Deref)(schema, references), references);
    }
    function TTuple(schema, references) {
        return Types.TypeGuard.TTransform(schema) || (!(0, guard_1.IsUndefined)(schema.items) && schema.items.some((schema) => Visit(schema, references)));
    }
    function TUnion(schema, references) {
        return Types.TypeGuard.TTransform(schema) || schema.anyOf.some((schema) => Visit(schema, references));
    }
    function Visit(schema, references) {
        const references_ = (0, guard_1.IsString)(schema.$id) ? [...references, schema] : references;
        const schema_ = schema;
        if (schema.$id && visited.has(schema.$id))
            return false;
        if (schema.$id)
            visited.add(schema.$id);
        switch (schema[Types.Kind]) {
            case 'Array':
                return TArray(schema_, references_);
            case 'AsyncIterator':
                return TAsyncIterator(schema_, references_);
            case 'Constructor':
                return TConstructor(schema_, references_);
            case 'Function':
                return TFunction(schema_, references_);
            case 'Intersect':
                return TIntersect(schema_, references_);
            case 'Iterator':
                return TIterator(schema_, references_);
            case 'Not':
                return TNot(schema_, references_);
            case 'Object':
                return TObject(schema_, references_);
            case 'Promise':
                return TPromise(schema_, references_);
            case 'Record':
                return TRecord(schema_, references_);
            case 'Ref':
                return TRef(schema_, references_);
            case 'This':
                return TThis(schema_, references_);
            case 'Tuple':
                return TTuple(schema_, references_);
            case 'Union':
                return TUnion(schema_, references_);
            default:
                return Types.TypeGuard.TTransform(schema);
        }
    }
    const visited = new Set();
    /** Returns true if this schema contains a transform codec */
    function Has(schema, references) {
        visited.clear();
        return Visit(schema, references);
    }
    HasTransform.Has = Has;
})(HasTransform || (exports.HasTransform = HasTransform = {}));
// ------------------------------------------------------------------
// DecodeTransform
// ------------------------------------------------------------------
/** Decodes a value using transform decoders if available. Does not ensure correct results. */
var DecodeTransform;
(function (DecodeTransform) {
    function Default(schema, value) {
        try {
            return Types.TypeGuard.TTransform(schema) ? schema[Types.Transform].Decode(value) : value;
        }
        catch (error) {
            throw new TransformDecodeError(schema, value, error);
        }
    }
    // prettier-ignore
    function TArray(schema, references, value) {
        return ((0, guard_1.IsArray)(value))
            ? Default(schema, value.map((value) => Visit(schema.items, references, value)))
            : Default(schema, value);
    }
    // prettier-ignore
    function TIntersect(schema, references, value) {
        if (!(0, guard_1.IsPlainObject)(value) || (0, guard_1.IsValueType)(value))
            return Default(schema, value);
        const knownKeys = Types.KeyResolver.ResolveKeys(schema, { includePatterns: false });
        const knownProperties = knownKeys.reduce((value, key) => {
            return (key in value)
                ? { ...value, [key]: Visit(Types.IndexedAccessor.Resolve(schema, [key]), references, value[key]) }
                : value;
        }, value);
        if (!Types.TypeGuard.TTransform(schema.unevaluatedProperties)) {
            return Default(schema, knownProperties);
        }
        const unknownKeys = Object.getOwnPropertyNames(knownProperties);
        const unevaluatedProperties = schema.unevaluatedProperties;
        const unknownProperties = unknownKeys.reduce((value, key) => {
            return !knownKeys.includes(key)
                ? { ...value, [key]: Default(unevaluatedProperties, value[key]) }
                : value;
        }, knownProperties);
        return Default(schema, unknownProperties);
    }
    function TNot(schema, references, value) {
        return Default(schema, Visit(schema.not, references, value));
    }
    // prettier-ignore
    function TObject(schema, references, value) {
        if (!(0, guard_1.IsPlainObject)(value))
            return Default(schema, value);
        const knownKeys = Types.KeyResolver.ResolveKeys(schema, { includePatterns: false });
        const knownProperties = knownKeys.reduce((value, key) => {
            return (key in value)
                ? { ...value, [key]: Visit(schema.properties[key], references, value[key]) }
                : value;
        }, value);
        if (!Types.TypeGuard.TSchema(schema.additionalProperties)) {
            return Default(schema, knownProperties);
        }
        const unknownKeys = Object.getOwnPropertyNames(knownProperties);
        const additionalProperties = schema.additionalProperties;
        const unknownProperties = unknownKeys.reduce((value, key) => {
            return !knownKeys.includes(key)
                ? { ...value, [key]: Default(additionalProperties, value[key]) }
                : value;
        }, knownProperties);
        return Default(schema, unknownProperties);
    }
    // prettier-ignore
    function TRecord(schema, references, value) {
        if (!(0, guard_1.IsPlainObject)(value))
            return Default(schema, value);
        const pattern = Object.getOwnPropertyNames(schema.patternProperties)[0];
        const knownKeys = new RegExp(pattern);
        const knownProperties = Object.getOwnPropertyNames(value).reduce((value, key) => {
            return knownKeys.test(key)
                ? { ...value, [key]: Visit(schema.patternProperties[pattern], references, value[key]) }
                : value;
        }, value);
        if (!Types.TypeGuard.TSchema(schema.additionalProperties)) {
            return Default(schema, knownProperties);
        }
        const unknownKeys = Object.getOwnPropertyNames(knownProperties);
        const additionalProperties = schema.additionalProperties;
        const unknownProperties = unknownKeys.reduce((value, key) => {
            return !knownKeys.test(key)
                ? { ...value, [key]: Default(additionalProperties, value[key]) }
                : value;
        }, knownProperties);
        return Default(schema, unknownProperties);
    }
    function TRef(schema, references, value) {
        const target = (0, deref_1.Deref)(schema, references);
        return Default(schema, Visit(target, references, value));
    }
    function TThis(schema, references, value) {
        const target = (0, deref_1.Deref)(schema, references);
        return Default(schema, Visit(target, references, value));
    }
    // prettier-ignore
    function TTuple(schema, references, value) {
        return ((0, guard_1.IsArray)(value) && (0, guard_1.IsArray)(schema.items))
            ? Default(schema, schema.items.map((schema, index) => Visit(schema, references, value[index])))
            : Default(schema, value);
    }
    function TUnion(schema, references, value) {
        const defaulted = Default(schema, value);
        for (const subschema of schema.anyOf) {
            if (!(0, check_1.Check)(subschema, references, defaulted))
                continue;
            return Visit(subschema, references, defaulted);
        }
        return defaulted;
    }
    function Visit(schema, references, value) {
        const references_ = typeof schema.$id === 'string' ? [...references, schema] : references;
        const schema_ = schema;
        switch (schema[Types.Kind]) {
            case 'Array':
                return TArray(schema_, references_, value);
            case 'Intersect':
                return TIntersect(schema_, references_, value);
            case 'Not':
                return TNot(schema_, references_, value);
            case 'Object':
                return TObject(schema_, references_, value);
            case 'Record':
                return TRecord(schema_, references_, value);
            case 'Ref':
                return TRef(schema_, references_, value);
            case 'Symbol':
                return Default(schema_, value);
            case 'This':
                return TThis(schema_, references_, value);
            case 'Tuple':
                return TTuple(schema_, references_, value);
            case 'Union':
                return TUnion(schema_, references_, value);
            default:
                return Default(schema_, value);
        }
    }
    function Decode(schema, references, value) {
        return Visit(schema, references, value);
    }
    DecodeTransform.Decode = Decode;
})(DecodeTransform || (exports.DecodeTransform = DecodeTransform = {}));
// ------------------------------------------------------------------
// DecodeTransform
// ------------------------------------------------------------------
/** Encodes a value using transform encoders if available. Does not ensure correct results. */
var EncodeTransform;
(function (EncodeTransform) {
    function Default(schema, value) {
        try {
            return Types.TypeGuard.TTransform(schema) ? schema[Types.Transform].Encode(value) : value;
        }
        catch (error) {
            throw new TransformEncodeError(schema, value, error);
        }
    }
    // prettier-ignore
    function TArray(schema, references, value) {
        const defaulted = Default(schema, value);
        return (0, guard_1.IsArray)(defaulted)
            ? defaulted.map((value) => Visit(schema.items, references, value))
            : defaulted;
    }
    // prettier-ignore
    function TIntersect(schema, references, value) {
        const defaulted = Default(schema, value);
        if (!(0, guard_1.IsPlainObject)(value) || (0, guard_1.IsValueType)(value))
            return defaulted;
        const knownKeys = Types.KeyResolver.ResolveKeys(schema, { includePatterns: false });
        const knownProperties = knownKeys.reduce((value, key) => {
            return key in defaulted
                ? { ...value, [key]: Visit(Types.IndexedAccessor.Resolve(schema, [key]), references, value[key]) }
                : value;
        }, defaulted);
        if (!Types.TypeGuard.TTransform(schema.unevaluatedProperties)) {
            return Default(schema, knownProperties);
        }
        const unknownKeys = Object.getOwnPropertyNames(knownProperties);
        const unevaluatedProperties = schema.unevaluatedProperties;
        return unknownKeys.reduce((value, key) => {
            return !knownKeys.includes(key)
                ? { ...value, [key]: Default(unevaluatedProperties, value[key]) }
                : value;
        }, knownProperties);
    }
    function TNot(schema, references, value) {
        return Default(schema.not, Default(schema, value));
    }
    // prettier-ignore
    function TObject(schema, references, value) {
        const defaulted = Default(schema, value);
        if (!(0, guard_1.IsPlainObject)(value))
            return defaulted;
        const knownKeys = Types.KeyResolver.ResolveKeys(schema, { includePatterns: false });
        const knownProperties = knownKeys.reduce((value, key) => {
            return key in value
                ? { ...value, [key]: Visit(schema.properties[key], references, value[key]) }
                : value;
        }, defaulted);
        if (!Types.TypeGuard.TSchema(schema.additionalProperties)) {
            return knownProperties;
        }
        const unknownKeys = Object.getOwnPropertyNames(knownProperties);
        const additionalProperties = schema.additionalProperties;
        return unknownKeys.reduce((value, key) => {
            return !knownKeys.includes(key)
                ? { ...value, [key]: Default(additionalProperties, value[key]) }
                : value;
        }, knownProperties);
    }
    // prettier-ignore
    function TRecord(schema, references, value) {
        const defaulted = Default(schema, value);
        if (!(0, guard_1.IsPlainObject)(value))
            return defaulted;
        const pattern = Object.getOwnPropertyNames(schema.patternProperties)[0];
        const knownKeys = new RegExp(pattern);
        const knownProperties = Object.getOwnPropertyNames(value).reduce((value, key) => {
            return knownKeys.test(key)
                ? { ...value, [key]: Visit(schema.patternProperties[pattern], references, value[key]) }
                : value;
        }, defaulted);
        if (!Types.TypeGuard.TSchema(schema.additionalProperties)) {
            return Default(schema, knownProperties);
        }
        const unknownKeys = Object.getOwnPropertyNames(knownProperties);
        const additionalProperties = schema.additionalProperties;
        return unknownKeys.reduce((value, key) => {
            return !knownKeys.test(key)
                ? { ...value, [key]: Default(additionalProperties, value[key]) }
                : value;
        }, knownProperties);
    }
    function TRef(schema, references, value) {
        const target = (0, deref_1.Deref)(schema, references);
        const resolved = Visit(target, references, value);
        return Default(schema, resolved);
    }
    function TThis(schema, references, value) {
        const target = (0, deref_1.Deref)(schema, references);
        const resolved = Visit(target, references, value);
        return Default(schema, resolved);
    }
    function TTuple(schema, references, value) {
        const value1 = Default(schema, value);
        return (0, guard_1.IsArray)(schema.items) ? schema.items.map((schema, index) => Visit(schema, references, value1[index])) : [];
    }
    function TUnion(schema, references, value) {
        // test value against union variants
        for (const subschema of schema.anyOf) {
            if (!(0, check_1.Check)(subschema, references, value))
                continue;
            const value1 = Visit(subschema, references, value);
            return Default(schema, value1);
        }
        // test transformed value against union variants
        for (const subschema of schema.anyOf) {
            const value1 = Visit(subschema, references, value);
            if (!(0, check_1.Check)(schema, references, value1))
                continue;
            return Default(schema, value1);
        }
        return Default(schema, value);
    }
    function Visit(schema, references, value) {
        const references_ = typeof schema.$id === 'string' ? [...references, schema] : references;
        const schema_ = schema;
        switch (schema[Types.Kind]) {
            case 'Array':
                return TArray(schema_, references_, value);
            case 'Intersect':
                return TIntersect(schema_, references_, value);
            case 'Not':
                return TNot(schema_, references_, value);
            case 'Object':
                return TObject(schema_, references_, value);
            case 'Record':
                return TRecord(schema_, references_, value);
            case 'Ref':
                return TRef(schema_, references_, value);
            case 'This':
                return TThis(schema_, references_, value);
            case 'Tuple':
                return TTuple(schema_, references_, value);
            case 'Union':
                return TUnion(schema_, references_, value);
            default:
                return Default(schema_, value);
        }
    }
    function Encode(schema, references, value) {
        return Visit(schema, references, value);
    }
    EncodeTransform.Encode = Encode;
})(EncodeTransform || (exports.EncodeTransform = EncodeTransform = {}));


/***/ }),

/***/ 1401:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*--------------------------------------------------------------------------

@sinclair/typebox/value

The MIT License (MIT)

Copyright (c) 2017-2023 Haydn Paterson (sinclair) <haydn.developer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Value = void 0;
const ValueErrors = __webpack_require__(8056);
const ValueMutate = __webpack_require__(8205);
const ValueHash = __webpack_require__(9122);
const ValueEqual = __webpack_require__(3629);
const ValueCast = __webpack_require__(8747);
const ValueClone = __webpack_require__(4165);
const ValueConvert = __webpack_require__(9231);
const ValueCreate = __webpack_require__(4195);
const ValueCheck = __webpack_require__(3255);
const ValueDelta = __webpack_require__(9518);
const ValueTransform = __webpack_require__(8248);
/** Functions to perform structural operations on JavaScript values */
var Value;
(function (Value) {
    /** Casts a value into a given type. The return value will retain as much information of the original value as possible. */
    function Cast(...args) {
        return ValueCast.Cast.apply(ValueCast, args);
    }
    Value.Cast = Cast;
    /** Creates a value from the given type */
    function Create(...args) {
        return ValueCreate.Create.apply(ValueCreate, args);
    }
    Value.Create = Create;
    /** Returns true if the value matches the given type */
    function Check(...args) {
        return ValueCheck.Check.apply(ValueCheck, args);
    }
    Value.Check = Check;
    /** Converts any type mismatched values to their target type if a reasonable conversion is possible */
    function Convert(...args) {
        return ValueConvert.Convert.apply(ValueConvert, args);
    }
    Value.Convert = Convert;
    /** Returns a structural clone of the given value */
    function Clone(value) {
        return ValueClone.Clone(value);
    }
    Value.Clone = Clone;
    /** Decodes a value or throws if error */
    function Decode(...args) {
        const [schema, references, value] = args.length === 3 ? [args[0], args[1], args[2]] : [args[0], [], args[1]];
        if (!Check(schema, references, value))
            throw new ValueTransform.TransformDecodeCheckError(schema, value, Errors(schema, references, value).First());
        return ValueTransform.DecodeTransform.Decode(schema, references, value);
    }
    Value.Decode = Decode;
    /** Encodes a value or throws if error */
    function Encode(...args) {
        const [schema, references, value] = args.length === 3 ? [args[0], args[1], args[2]] : [args[0], [], args[1]];
        const encoded = ValueTransform.EncodeTransform.Encode(schema, references, value);
        if (!Check(schema, references, encoded))
            throw new ValueTransform.TransformEncodeCheckError(schema, value, Errors(schema, references, value).First());
        return encoded;
    }
    Value.Encode = Encode;
    /** Returns an iterator for each error in this value. */
    function Errors(...args) {
        return ValueErrors.Errors.apply(ValueErrors, args);
    }
    Value.Errors = Errors;
    /** Returns true if left and right values are structurally equal */
    function Equal(left, right) {
        return ValueEqual.Equal(left, right);
    }
    Value.Equal = Equal;
    /** Returns edits to transform the current value into the next value */
    function Diff(current, next) {
        return ValueDelta.Diff(current, next);
    }
    Value.Diff = Diff;
    /** Returns a FNV1A-64 non cryptographic hash of the given value */
    function Hash(value) {
        return ValueHash.Hash(value);
    }
    Value.Hash = Hash;
    /** Returns a new value with edits applied to the given value */
    function Patch(current, edits) {
        return ValueDelta.Patch(current, edits);
    }
    Value.Patch = Patch;
    /** Performs a deep mutable value assignment while retaining internal references. */
    function Mutate(current, next) {
        ValueMutate.Mutate(current, next);
    }
    Value.Mutate = Mutate;
})(Value || (exports.Value = Value = {}));


/***/ }),

/***/ 1514:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.NETWORK_IDS = exports.PROTOCOL_MAGICS = void 0;
var PROTOCOL_MAGICS;
(function (PROTOCOL_MAGICS) {
  PROTOCOL_MAGICS[PROTOCOL_MAGICS["mainnet"] = 764824073] = "mainnet";
  PROTOCOL_MAGICS[PROTOCOL_MAGICS["testnet_preprod"] = 1] = "testnet_preprod";
  PROTOCOL_MAGICS[PROTOCOL_MAGICS["testnet_preview"] = 2] = "testnet_preview";
  PROTOCOL_MAGICS[PROTOCOL_MAGICS["testnet_legacy"] = 1097911063] = "testnet_legacy";
})(PROTOCOL_MAGICS || (exports.PROTOCOL_MAGICS = PROTOCOL_MAGICS = {}));
var NETWORK_IDS;
(function (NETWORK_IDS) {
  NETWORK_IDS[NETWORK_IDS["mainnet"] = 1] = "mainnet";
  NETWORK_IDS[NETWORK_IDS["testnet"] = 0] = "testnet";
})(NETWORK_IDS || (exports.NETWORK_IDS = NETWORK_IDS = {}));

/***/ }),

/***/ 9856:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.LIBUSB_ERROR_MESSAGE = exports.serializeError = exports.TypedError = exports.TrezorError = exports.ERROR_CODES = void 0;
exports.ERROR_CODES = {
  Init_NotInitialized: 'TrezorConnect not initialized',
  Init_AlreadyInitialized: 'TrezorConnect has been already initialized',
  Init_IframeBlocked: 'Iframe blocked',
  Init_IframeTimeout: 'Iframe timeout',
  Init_ManifestMissing: 'Manifest not set. Read more at https://github.com/trezor/trezor-suite/blob/develop/docs/packages/connect/index.md',
  Popup_ConnectionMissing: 'Unable to establish connection with iframe',
  Transport_Missing: 'Transport is missing',
  Transport_InvalidProtobuf: '',
  Method_InvalidPackage: 'This package is not suitable to work with browser. Use @trezor/connect-web package instead',
  Method_InvalidParameter: '',
  Method_NotAllowed: 'Method not allowed for this configuration',
  Method_PermissionsNotGranted: 'Permissions not granted',
  Method_Cancel: 'Cancelled',
  Method_Interrupted: 'Popup closed',
  Method_UnknownCoin: 'Coin not found',
  Method_AddressNotMatch: 'Addresses do not match',
  Method_FirmwareUpdate_DownloadFailed: 'Failed to download firmware binary',
  Method_Discovery_BundleException: '',
  Method_Override: 'override',
  Method_NoResponse: 'Call resolved without response',
  Backend_NotSupported: 'BlockchainLink settings not found in coins.json',
  Backend_WorkerMissing: '',
  Backend_Disconnected: 'Backend disconnected',
  Backend_Invalid: 'Invalid backend',
  Backend_Error: '',
  Runtime: '',
  Device_NotFound: 'Device not found',
  Device_InitializeFailed: '',
  Device_FwException: '',
  Device_ModeException: '',
  Device_Disconnected: 'Device disconnected',
  Device_UsedElsewhere: 'Device is used in another window',
  Device_InvalidState: 'Passphrase is incorrect',
  Device_CallInProgress: 'Device call in progress'
};
class TrezorError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
    this.message = message;
  }
}
exports.TrezorError = TrezorError;
const TypedError = (id, message) => new TrezorError(id, message || exports.ERROR_CODES[id]);
exports.TypedError = TypedError;
const serializeError = payload => {
  if (payload && payload.error instanceof Error) {
    return {
      error: payload.error.message,
      code: payload.error.code
    };
  }
  return payload;
};
exports.serializeError = serializeError;
exports.LIBUSB_ERROR_MESSAGE = 'LIBUSB_ERROR';

/***/ }),

/***/ 9955:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PROTO = exports.NEM = exports.CARDANO = exports.NETWORK = exports.ERRORS = void 0;
const tslib_1 = __webpack_require__(2970);
exports.ERRORS = tslib_1.__importStar(__webpack_require__(9856));
exports.NETWORK = tslib_1.__importStar(__webpack_require__(3659));
exports.CARDANO = tslib_1.__importStar(__webpack_require__(1514));
exports.NEM = tslib_1.__importStar(__webpack_require__(5891));
exports.PROTO = tslib_1.__importStar(__webpack_require__(7942));

/***/ }),

/***/ 5891:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.EnumTxVersion = exports.TxVersion = exports.EnumTxType = exports.TxType = exports.EnumNetworks = exports.Networks = void 0;
const schema_utils_1 = __webpack_require__(9406);
var Networks;
(function (Networks) {
  Networks[Networks["mainnet"] = 104] = "mainnet";
  Networks[Networks["testnet"] = 152] = "testnet";
  Networks[Networks["mijin"] = 96] = "mijin";
})(Networks || (exports.Networks = Networks = {}));
exports.EnumNetworks = schema_utils_1.Type.Enum(Networks);
var TxType;
(function (TxType) {
  TxType[TxType["TRANSFER"] = 257] = "TRANSFER";
  TxType[TxType["COSIGNING"] = 258] = "COSIGNING";
  TxType[TxType["IMPORTANCE_TRANSFER"] = 2049] = "IMPORTANCE_TRANSFER";
  TxType[TxType["AGGREGATE_MODIFICATION"] = 4097] = "AGGREGATE_MODIFICATION";
  TxType[TxType["MULTISIG_SIGNATURE"] = 4098] = "MULTISIG_SIGNATURE";
  TxType[TxType["MULTISIG"] = 4100] = "MULTISIG";
  TxType[TxType["PROVISION_NAMESPACE"] = 8193] = "PROVISION_NAMESPACE";
  TxType[TxType["MOSAIC_CREATION"] = 16385] = "MOSAIC_CREATION";
  TxType[TxType["SUPPLY_CHANGE"] = 16386] = "SUPPLY_CHANGE";
})(TxType || (exports.TxType = TxType = {}));
exports.EnumTxType = schema_utils_1.Type.Enum(TxType);
var TxVersion;
(function (TxVersion) {
  TxVersion[TxVersion["mainnet"] = 1744830464] = "mainnet";
  TxVersion[TxVersion["testnet"] = -1744830464] = "testnet";
  TxVersion[TxVersion["mijin"] = 1610612736] = "mijin";
})(TxVersion || (exports.TxVersion = TxVersion = {}));
exports.EnumTxVersion = schema_utils_1.Type.Enum(TxVersion);

/***/ }),

/***/ 3659:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MODULES = exports.TYPES = void 0;
exports.TYPES = {
  bitcoin: 'Bitcoin',
  ethereum: 'Ethereum',
  eos: 'Eos',
  nem: 'NEM',
  stellar: 'Stellar',
  cardano: 'Cardano',
  ripple: 'Ripple',
  tezos: 'Tezos',
  binance: 'Binance',
  solana: 'Solana'
};
exports.MODULES = ['binance', 'cardano', 'eos', 'ethereum', 'nem', 'ripple', 'solana', 'stellar', 'tezos'];

/***/ }),

/***/ 6696:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.parseConnectSettings = exports.corsValidator = exports.DEFAULT_PRIORITY = void 0;
const version_1 = __webpack_require__(9695);
exports.DEFAULT_PRIORITY = 2;
const initialSettings = {
  configSrc: './data/config.json',
  version: version_1.VERSION,
  debug: false,
  priority: exports.DEFAULT_PRIORITY,
  trustedHost: true,
  connectSrc: version_1.DEFAULT_DOMAIN,
  iframeSrc: `${version_1.DEFAULT_DOMAIN}iframe.html`,
  popup: false,
  popupSrc: `${version_1.DEFAULT_DOMAIN}popup.html`,
  webusbSrc: `${version_1.DEFAULT_DOMAIN}webusb.html`,
  transports: undefined,
  pendingTransportEvent: true,
  env: 'node',
  lazyLoad: false,
  timestamp: new Date().getTime(),
  interactionTimeout: 600,
  sharedLogger: true
};
const parseManifest = manifest => {
  if (!manifest) return;
  if (typeof manifest.email !== 'string') return;
  if (typeof manifest.appUrl !== 'string') return;
  return {
    email: manifest.email,
    appUrl: manifest.appUrl
  };
};
const corsValidator = url => {
  if (typeof url !== 'string') return;
  if (url.match(/^https:\/\/([A-Za-z0-9\-_]+\.)*trezor\.io\//)) return url;
  if (url.match(/^https?:\/\/localhost:[58][0-9]{3}\//)) return url;
  if (url.match(/^https:\/\/([A-Za-z0-9\-_]+\.)*sldev\.cz\//)) return url;
  if (url.match(/^https?:\/\/([A-Za-z0-9\-_]+\.)*trezoriovpjcahpzkrewelclulmszwbqpzmzgub37gbcjlvluxtruqad\.onion\//)) return url;
};
exports.corsValidator = corsValidator;
const parseConnectSettings = (input = {}) => {
  var _a;
  const settings = {
    ...initialSettings
  };
  if ('debug' in input) {
    if (typeof input.debug === 'boolean') {
      settings.debug = input.debug;
    } else if (typeof input.debug === 'string') {
      settings.debug = input.debug === 'true';
    }
  }
  if (input.trustedHost === false) {
    settings.trustedHost = input.trustedHost;
  }
  if (typeof input.connectSrc === 'string' && ((_a = input.connectSrc) === null || _a === void 0 ? void 0 : _a.startsWith('http'))) {
    settings.connectSrc = (0, exports.corsValidator)(input.connectSrc);
  } else if (settings.trustedHost) {
    settings.connectSrc = input.connectSrc;
  }
  const src = settings.connectSrc || version_1.DEFAULT_DOMAIN;
  settings.iframeSrc = `${src}iframe.html`;
  settings.popupSrc = `${src}popup.html`;
  settings.webusbSrc = `${src}webusb.html`;
  if (typeof input.transportReconnect === 'boolean') {
    settings.transportReconnect = input.transportReconnect;
  }
  if (typeof input.webusb === 'boolean') {
    settings.webusb = input.webusb;
  }
  if (Array.isArray(input.transports)) {
    settings.transports = input.transports;
  }
  if (typeof input.popup === 'boolean') {
    settings.popup = input.popup;
  }
  if (typeof input.lazyLoad === 'boolean') {
    settings.lazyLoad = input.lazyLoad;
  }
  if (typeof input.pendingTransportEvent === 'boolean') {
    settings.pendingTransportEvent = input.pendingTransportEvent;
  }
  if (typeof input.extension === 'string') {
    settings.extension = input.extension;
  }
  if (typeof input.env === 'string') {
    settings.env = input.env;
  }
  if (typeof input.timestamp === 'number') {
    settings.timestamp = input.timestamp;
  }
  if (typeof input.interactionTimeout === 'number') {
    settings.interactionTimeout = input.interactionTimeout;
  }
  if (typeof input.manifest === 'object') {
    settings.manifest = parseManifest(input.manifest);
  }
  if (typeof input.sharedLogger === 'boolean') {
    settings.sharedLogger = input.sharedLogger;
  }
  return settings;
};
exports.parseConnectSettings = parseConnectSettings;

/***/ }),

/***/ 9695:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DEFAULT_DOMAIN = exports.VERSION = void 0;
exports.VERSION = '9.1.8';
const versionN = exports.VERSION.split('.').map(s => parseInt(s, 10));
exports.DEFAULT_DOMAIN = `https://connect.trezor.io/${versionN[0]}/`;

/***/ }),

/***/ 9718:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createBlockchainMessage = exports.BLOCKCHAIN = exports.BLOCKCHAIN_EVENT = void 0;
exports.BLOCKCHAIN_EVENT = 'BLOCKCHAIN_EVENT';
exports.BLOCKCHAIN = {
  CONNECT: 'blockchain-connect',
  ERROR: 'blockchain-error',
  BLOCK: 'blockchain-block',
  NOTIFICATION: 'blockchain-notification',
  FIAT_RATES_UPDATE: 'fiat-rates-update'
};
const createBlockchainMessage = (type, payload) => ({
  event: exports.BLOCKCHAIN_EVENT,
  type,
  payload
});
exports.createBlockchainMessage = createBlockchainMessage;

/***/ }),

/***/ 2531:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createResponseMessage = exports.RESPONSE_EVENT = void 0;
const errors_1 = __webpack_require__(9856);
exports.RESPONSE_EVENT = 'RESPONSE_EVENT';
const createResponseMessage = (id, success, payload) => ({
  event: exports.RESPONSE_EVENT,
  type: exports.RESPONSE_EVENT,
  id,
  success,
  payload: success ? payload : (0, errors_1.serializeError)(payload)
});
exports.createResponseMessage = createResponseMessage;

/***/ }),

/***/ 7798:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createErrorMessage = exports.parseMessage = exports.CORE_EVENT = void 0;
exports.CORE_EVENT = 'CORE_EVENT';
const parseMessage = messageData => {
  const message = {
    event: messageData.event,
    type: messageData.type,
    payload: messageData.payload
  };
  if (typeof messageData.id === 'number') {
    message.id = messageData.id;
  }
  if (typeof messageData.success === 'boolean') {
    message.success = messageData.success;
  }
  return message;
};
exports.parseMessage = parseMessage;
const createErrorMessage = error => ({
  success: false,
  payload: {
    error: error.message,
    code: error.code
  }
});
exports.createErrorMessage = createErrorMessage;

/***/ }),

/***/ 2472:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createDeviceMessage = exports.DEVICE = exports.DEVICE_EVENT = void 0;
exports.DEVICE_EVENT = 'DEVICE_EVENT';
exports.DEVICE = {
  CONNECT: 'device-connect',
  CONNECT_UNACQUIRED: 'device-connect_unacquired',
  DISCONNECT: 'device-disconnect',
  CHANGED: 'device-changed',
  ACQUIRE: 'device-acquire',
  RELEASE: 'device-release',
  ACQUIRED: 'device-acquired',
  RELEASED: 'device-released',
  USED_ELSEWHERE: 'device-used_elsewhere',
  LOADING: 'device-loading',
  BUTTON: 'button',
  PIN: 'pin',
  PASSPHRASE: 'passphrase',
  PASSPHRASE_ON_DEVICE: 'passphrase_on_device',
  WORD: 'word'
};
const createDeviceMessage = (type, payload) => ({
  event: exports.DEVICE_EVENT,
  type,
  payload
});
exports.createDeviceMessage = createDeviceMessage;

/***/ }),

/***/ 2380:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createIFrameMessage = exports.IFRAME = void 0;
const ui_request_1 = __webpack_require__(8851);
exports.IFRAME = {
  BOOTSTRAP: 'iframe-bootstrap',
  LOADED: 'iframe-loaded',
  INIT: 'iframe-init',
  ERROR: 'iframe-error',
  CALL: 'iframe-call',
  LOG: 'iframe-log'
};
const createIFrameMessage = (type, payload) => ({
  event: ui_request_1.UI_EVENT,
  type,
  payload
});
exports.createIFrameMessage = createIFrameMessage;

/***/ }),

/***/ 1808:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.UI = void 0;
const tslib_1 = __webpack_require__(2970);
const ui_request_1 = __webpack_require__(8851);
const ui_response_1 = __webpack_require__(4018);
tslib_1.__exportStar(__webpack_require__(9718), exports);
tslib_1.__exportStar(__webpack_require__(2531), exports);
tslib_1.__exportStar(__webpack_require__(7798), exports);
tslib_1.__exportStar(__webpack_require__(2472), exports);
tslib_1.__exportStar(__webpack_require__(2380), exports);
tslib_1.__exportStar(__webpack_require__(9076), exports);
tslib_1.__exportStar(__webpack_require__(274), exports);
tslib_1.__exportStar(__webpack_require__(7252), exports);
tslib_1.__exportStar(__webpack_require__(8851), exports);
tslib_1.__exportStar(__webpack_require__(4018), exports);
exports.UI = {
  ...ui_request_1.UI_REQUEST,
  ...ui_response_1.UI_RESPONSE
};

/***/ }),

/***/ 9076:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createPopupMessage = exports.POPUP = void 0;
const ui_request_1 = __webpack_require__(8851);
exports.POPUP = {
  BOOTSTRAP: 'popup-bootstrap',
  LOADED: 'popup-loaded',
  CORE_LOADED: 'popup-core-loaded',
  INIT: 'popup-init',
  ERROR: 'popup-error',
  EXTENSION_USB_PERMISSIONS: 'open-usb-permissions',
  HANDSHAKE: 'popup-handshake',
  CLOSED: 'popup-closed',
  CANCEL_POPUP_REQUEST: 'ui-cancel-popup-request',
  CLOSE_WINDOW: 'window.close',
  ANALYTICS_RESPONSE: 'popup-analytics-response',
  CONTENT_SCRIPT_LOADED: 'popup-content-script-loaded',
  METHOD_INFO: 'popup-method-info'
};
const createPopupMessage = (type, payload) => ({
  event: ui_request_1.UI_EVENT,
  type,
  payload
});
exports.createPopupMessage = createPopupMessage;

/***/ }),

/***/ 274:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createTransportMessage = exports.TRANSPORT_EVENT = exports.TRANSPORT = void 0;
const errors_1 = __webpack_require__(9856);
var constants_1 = __webpack_require__(4109);
Object.defineProperty(exports, "TRANSPORT", ({
  enumerable: true,
  get: function () {
    return constants_1.TRANSPORT;
  }
}));
exports.TRANSPORT_EVENT = 'TRANSPORT_EVENT';
const createTransportMessage = (type, payload) => ({
  event: exports.TRANSPORT_EVENT,
  type,
  payload: 'error' in payload ? (0, errors_1.serializeError)(payload) : payload
});
exports.createTransportMessage = createTransportMessage;

/***/ }),

/***/ 7252:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 8851:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createUiMessage = exports.UI_REQUEST = exports.UI_EVENT = void 0;
exports.UI_EVENT = 'UI_EVENT';
exports.UI_REQUEST = {
  TRANSPORT: 'ui-no_transport',
  BOOTLOADER: 'ui-device_bootloader_mode',
  NOT_IN_BOOTLOADER: 'ui-device_not_in_bootloader_mode',
  REQUIRE_MODE: 'ui-device_require_mode',
  INITIALIZE: 'ui-device_not_initialized',
  SEEDLESS: 'ui-device_seedless',
  FIRMWARE_OLD: 'ui-device_firmware_old',
  FIRMWARE_OUTDATED: 'ui-device_firmware_outdated',
  FIRMWARE_NOT_SUPPORTED: 'ui-device_firmware_unsupported',
  FIRMWARE_NOT_COMPATIBLE: 'ui-device_firmware_not_compatible',
  FIRMWARE_NOT_INSTALLED: 'ui-device_firmware_not_installed',
  FIRMWARE_PROGRESS: 'ui-firmware-progress',
  DEVICE_NEEDS_BACKUP: 'ui-device_needs_backup',
  REQUEST_UI_WINDOW: 'ui-request_window',
  CLOSE_UI_WINDOW: 'ui-close_window',
  REQUEST_PERMISSION: 'ui-request_permission',
  REQUEST_CONFIRMATION: 'ui-request_confirmation',
  REQUEST_PIN: 'ui-request_pin',
  INVALID_PIN: 'ui-invalid_pin',
  REQUEST_PASSPHRASE: 'ui-request_passphrase',
  REQUEST_PASSPHRASE_ON_DEVICE: 'ui-request_passphrase_on_device',
  INVALID_PASSPHRASE: 'ui-invalid_passphrase',
  CONNECT: 'ui-connect',
  LOADING: 'ui-loading',
  SET_OPERATION: 'ui-set_operation',
  SELECT_DEVICE: 'ui-select_device',
  SELECT_ACCOUNT: 'ui-select_account',
  SELECT_FEE: 'ui-select_fee',
  UPDATE_CUSTOM_FEE: 'ui-update_custom_fee',
  INSUFFICIENT_FUNDS: 'ui-insufficient_funds',
  REQUEST_BUTTON: 'ui-button',
  REQUEST_WORD: 'ui-request_word',
  LOGIN_CHALLENGE_REQUEST: 'ui-login_challenge_request',
  BUNDLE_PROGRESS: 'ui-bundle_progress',
  ADDRESS_VALIDATION: 'ui-address_validation',
  IFRAME_FAILURE: 'ui-iframe_failure'
};
const createUiMessage = (type, payload) => ({
  event: exports.UI_EVENT,
  type,
  payload
});
exports.createUiMessage = createUiMessage;

/***/ }),

/***/ 4018:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createUiResponse = exports.UI_RESPONSE = void 0;
const ui_request_1 = __webpack_require__(8851);
exports.UI_RESPONSE = {
  RECEIVE_PERMISSION: 'ui-receive_permission',
  RECEIVE_CONFIRMATION: 'ui-receive_confirmation',
  RECEIVE_PIN: 'ui-receive_pin',
  RECEIVE_PASSPHRASE: 'ui-receive_passphrase',
  RECEIVE_DEVICE: 'ui-receive_device',
  RECEIVE_ACCOUNT: 'ui-receive_account',
  RECEIVE_FEE: 'ui-receive_fee',
  RECEIVE_WORD: 'ui-receive_word',
  INVALID_PASSPHRASE_ACTION: 'ui-invalid_passphrase_action',
  CHANGE_SETTINGS: 'ui-change_settings',
  LOGIN_CHALLENGE_RESPONSE: 'ui-login_challenge_response'
};
const createUiResponse = (type, payload) => ({
  event: ui_request_1.UI_EVENT,
  type,
  payload
});
exports.createUiResponse = createUiResponse;

/***/ }),

/***/ 654:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.parseConnectSettings = void 0;
const tslib_1 = __webpack_require__(2970);
tslib_1.__exportStar(__webpack_require__(9955), exports);
tslib_1.__exportStar(__webpack_require__(1808), exports);
tslib_1.__exportStar(__webpack_require__(1627), exports);
var connectSettings_1 = __webpack_require__(6696);
Object.defineProperty(exports, "parseConnectSettings", ({
  enumerable: true,
  get: function () {
    return connectSettings_1.parseConnectSettings;
  }
}));

/***/ }),

/***/ 3329:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.d = void 0;
const events_1 = __webpack_require__(1808);
const factory = ({
  eventEmitter,
  manifest,
  init,
  call,
  requestLogin,
  uiResponse,
  renderWebUSBButton,
  disableWebUSB,
  requestWebUSBDevice,
  cancel,
  dispose
}) => {
  const api = {
    manifest,
    init,
    getSettings: () => call({
      method: 'getSettings'
    }),
    on: (type, fn) => {
      eventEmitter.on(type, fn);
    },
    off: (type, fn) => {
      eventEmitter.removeListener(type, fn);
    },
    removeAllListeners: type => {
      if (typeof type === 'string') {
        eventEmitter.removeAllListeners(type);
      } else {
        eventEmitter.removeAllListeners();
      }
    },
    uiResponse,
    blockchainGetAccountBalanceHistory: params => call({
      ...params,
      method: 'blockchainGetAccountBalanceHistory'
    }),
    blockchainGetCurrentFiatRates: params => call({
      ...params,
      method: 'blockchainGetCurrentFiatRates'
    }),
    blockchainGetFiatRatesForTimestamps: params => call({
      ...params,
      method: 'blockchainGetFiatRatesForTimestamps'
    }),
    blockchainDisconnect: params => call({
      ...params,
      method: 'blockchainDisconnect'
    }),
    blockchainEstimateFee: params => call({
      ...params,
      method: 'blockchainEstimateFee'
    }),
    blockchainGetTransactions: params => call({
      ...params,
      method: 'blockchainGetTransactions'
    }),
    blockchainSetCustomBackend: params => call({
      ...params,
      method: 'blockchainSetCustomBackend'
    }),
    blockchainSubscribe: params => call({
      ...params,
      method: 'blockchainSubscribe'
    }),
    blockchainSubscribeFiatRates: params => call({
      ...params,
      method: 'blockchainSubscribeFiatRates'
    }),
    blockchainUnsubscribe: params => call({
      ...params,
      method: 'blockchainUnsubscribe'
    }),
    blockchainUnsubscribeFiatRates: params => call({
      ...params,
      method: 'blockchainUnsubscribeFiatRates'
    }),
    requestLogin: params => requestLogin(params),
    cardanoGetAddress: params => call({
      ...params,
      method: 'cardanoGetAddress',
      useEventListener: eventEmitter.listenerCount(events_1.UI.ADDRESS_VALIDATION) > 0
    }),
    cardanoGetNativeScriptHash: params => call({
      ...params,
      method: 'cardanoGetNativeScriptHash'
    }),
    cardanoGetPublicKey: params => call({
      ...params,
      method: 'cardanoGetPublicKey'
    }),
    cardanoSignTransaction: params => call({
      ...params,
      method: 'cardanoSignTransaction'
    }),
    cardanoComposeTransaction: params => call({
      ...params,
      method: 'cardanoComposeTransaction'
    }),
    cipherKeyValue: params => call({
      ...params,
      method: 'cipherKeyValue'
    }),
    composeTransaction: params => call({
      ...params,
      method: 'composeTransaction'
    }),
    ethereumGetAddress: params => call({
      ...params,
      method: 'ethereumGetAddress',
      useEventListener: eventEmitter.listenerCount(events_1.UI.ADDRESS_VALIDATION) > 0
    }),
    ethereumGetPublicKey: params => call({
      ...params,
      method: 'ethereumGetPublicKey'
    }),
    ethereumSignMessage: params => call({
      ...params,
      method: 'ethereumSignMessage'
    }),
    ethereumSignTransaction: params => call({
      ...params,
      method: 'ethereumSignTransaction'
    }),
    ethereumSignTypedData: params => call({
      ...params,
      method: 'ethereumSignTypedData'
    }),
    ethereumVerifyMessage: params => call({
      ...params,
      method: 'ethereumVerifyMessage'
    }),
    getAccountDescriptor: params => call({
      ...params,
      method: 'getAccountDescriptor'
    }),
    getAccountInfo: params => call({
      ...params,
      method: 'getAccountInfo'
    }),
    getAddress: params => call({
      ...params,
      method: 'getAddress',
      useEventListener: eventEmitter.listenerCount(events_1.UI.ADDRESS_VALIDATION) > 0
    }),
    getDeviceState: params => call({
      ...params,
      method: 'getDeviceState'
    }),
    getFeatures: params => call({
      ...params,
      method: 'getFeatures'
    }),
    getFirmwareHash: params => call({
      ...params,
      method: 'getFirmwareHash'
    }),
    getOwnershipId: params => call({
      ...params,
      method: 'getOwnershipId'
    }),
    getOwnershipProof: params => call({
      ...params,
      method: 'getOwnershipProof'
    }),
    getPublicKey: params => call({
      ...params,
      method: 'getPublicKey'
    }),
    nemGetAddress: params => call({
      ...params,
      method: 'nemGetAddress',
      useEventListener: eventEmitter.listenerCount(events_1.UI.ADDRESS_VALIDATION) > 0
    }),
    nemSignTransaction: params => call({
      ...params,
      method: 'nemSignTransaction'
    }),
    pushTransaction: params => call({
      ...params,
      method: 'pushTransaction'
    }),
    rippleGetAddress: params => call({
      ...params,
      method: 'rippleGetAddress',
      useEventListener: eventEmitter.listenerCount(events_1.UI.ADDRESS_VALIDATION) > 0
    }),
    rippleSignTransaction: params => call({
      ...params,
      method: 'rippleSignTransaction'
    }),
    signMessage: params => call({
      ...params,
      method: 'signMessage'
    }),
    signTransaction: params => call({
      ...params,
      method: 'signTransaction'
    }),
    solanaGetPublicKey: params => call({
      ...params,
      method: 'solanaGetPublicKey'
    }),
    solanaGetAddress: params => call({
      ...params,
      method: 'solanaGetAddress'
    }),
    solanaSignTransaction: params => call({
      ...params,
      method: 'solanaSignTransaction'
    }),
    stellarGetAddress: params => call({
      ...params,
      method: 'stellarGetAddress',
      useEventListener: eventEmitter.listenerCount(events_1.UI.ADDRESS_VALIDATION) > 0
    }),
    stellarSignTransaction: params => call({
      ...params,
      method: 'stellarSignTransaction'
    }),
    tezosGetAddress: params => call({
      ...params,
      method: 'tezosGetAddress',
      useEventListener: eventEmitter.listenerCount(events_1.UI.ADDRESS_VALIDATION) > 0
    }),
    tezosGetPublicKey: params => call({
      ...params,
      method: 'tezosGetPublicKey'
    }),
    tezosSignTransaction: params => call({
      ...params,
      method: 'tezosSignTransaction'
    }),
    unlockPath: params => call({
      ...params,
      method: 'unlockPath'
    }),
    eosGetPublicKey: params => call({
      ...params,
      method: 'eosGetPublicKey'
    }),
    eosSignTransaction: params => call({
      ...params,
      method: 'eosSignTransaction'
    }),
    binanceGetAddress: params => call({
      ...params,
      method: 'binanceGetAddress',
      useEventListener: eventEmitter.listenerCount(events_1.UI.ADDRESS_VALIDATION) > 0
    }),
    binanceGetPublicKey: params => call({
      ...params,
      method: 'binanceGetPublicKey'
    }),
    binanceSignTransaction: params => call({
      ...params,
      method: 'binanceSignTransaction'
    }),
    verifyMessage: params => call({
      ...params,
      method: 'verifyMessage'
    }),
    resetDevice: params => call({
      ...params,
      method: 'resetDevice'
    }),
    wipeDevice: params => call({
      ...params,
      method: 'wipeDevice'
    }),
    checkFirmwareAuthenticity: params => call({
      ...params,
      method: 'checkFirmwareAuthenticity'
    }),
    applyFlags: params => call({
      ...params,
      method: 'applyFlags'
    }),
    applySettings: params => call({
      ...params,
      method: 'applySettings'
    }),
    authenticateDevice: params => call({
      ...params,
      method: 'authenticateDevice'
    }),
    authorizeCoinjoin: params => call({
      ...params,
      method: 'authorizeCoinjoin'
    }),
    cancelCoinjoinAuthorization: params => call({
      ...params,
      method: 'cancelCoinjoinAuthorization'
    }),
    showDeviceTutorial: params => call({
      ...params,
      method: 'showDeviceTutorial'
    }),
    backupDevice: params => call({
      ...params,
      method: 'backupDevice'
    }),
    changePin: params => call({
      ...params,
      method: 'changePin'
    }),
    changeWipeCode: params => call({
      ...params,
      method: 'changeWipeCode'
    }),
    firmwareUpdate: params => call({
      ...params,
      method: 'firmwareUpdate'
    }),
    recoveryDevice: params => call({
      ...params,
      method: 'recoveryDevice'
    }),
    getCoinInfo: params => call({
      ...params,
      method: 'getCoinInfo'
    }),
    rebootToBootloader: params => call({
      ...params,
      method: 'rebootToBootloader'
    }),
    setBusy: params => call({
      ...params,
      method: 'setBusy'
    }),
    setProxy: params => call({
      ...params,
      method: 'setProxy'
    }),
    dispose,
    cancel,
    renderWebUSBButton,
    disableWebUSB,
    requestWebUSBDevice
  };
  return api;
};
exports.d = factory;

/***/ }),

/***/ 9245:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 1276:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.BinanceSignTransaction = exports.BinancePreparedTransaction = exports.BinancePreparedMessage = exports.BinanceSDKTransaction = void 0;
const constants_1 = __webpack_require__(9955);
const params_1 = __webpack_require__(4281);
const schema_utils_1 = __webpack_require__(9406);
exports.BinanceSDKTransaction = schema_utils_1.Type.Object({
  chain_id: schema_utils_1.Type.String(),
  account_number: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  memo: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  sequence: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  source: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  transfer: schema_utils_1.Type.Optional(constants_1.PROTO.BinanceTransferMsg),
  placeOrder: schema_utils_1.Type.Optional(constants_1.PROTO.BinanceOrderMsg),
  cancelOrder: schema_utils_1.Type.Optional(constants_1.PROTO.BinanceCancelMsg)
});
exports.BinancePreparedMessage = schema_utils_1.Type.Union([schema_utils_1.Type.Intersect([constants_1.PROTO.BinanceTransferMsg, schema_utils_1.Type.Object({
  type: schema_utils_1.Type.Literal('BinanceTransferMsg')
})]), schema_utils_1.Type.Intersect([constants_1.PROTO.BinanceOrderMsg, schema_utils_1.Type.Object({
  type: schema_utils_1.Type.Literal('BinanceOrderMsg')
})]), schema_utils_1.Type.Intersect([constants_1.PROTO.BinanceCancelMsg, schema_utils_1.Type.Object({
  type: schema_utils_1.Type.Literal('BinanceCancelMsg')
})])]);
exports.BinancePreparedTransaction = schema_utils_1.Type.Intersect([exports.BinanceSDKTransaction, schema_utils_1.Type.Object({
  messages: schema_utils_1.Type.Array(exports.BinancePreparedMessage),
  account_number: schema_utils_1.Type.Number(),
  sequence: schema_utils_1.Type.Number(),
  source: schema_utils_1.Type.Number()
})]);
exports.BinanceSignTransaction = schema_utils_1.Type.Object({
  path: params_1.DerivationPath,
  transaction: exports.BinanceSDKTransaction,
  chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});

/***/ }),

/***/ 3794:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.VerifyMessage = exports.SignMessage = void 0;
const params_1 = __webpack_require__(4281);
const schema_utils_1 = __webpack_require__(9406);
exports.SignMessage = schema_utils_1.Type.Object({
  path: params_1.DerivationPath,
  coin: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  message: schema_utils_1.Type.String(),
  hex: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  no_script_type: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.VerifyMessage = schema_utils_1.Type.Object({
  address: schema_utils_1.Type.String(),
  signature: schema_utils_1.Type.String(),
  message: schema_utils_1.Type.String(),
  coin: schema_utils_1.Type.String(),
  hex: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});

/***/ }),

/***/ 6365:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CardanoSignedTxData = exports.CardanoAuxiliaryDataSupplement = exports.CardanoSignedTxWitness = exports.CardanoSignTransactionExtended = exports.CardanoSignTransaction = exports.CardanoAuxiliaryData = exports.CardanoCVoteRegistrationParameters = exports.CardanoCVoteRegistrationDelegation = exports.CardanoReferenceInput = exports.CardanoRequiredSigner = exports.CardanoCollateralInput = exports.CardanoMint = exports.CardanoWithdrawal = exports.CardanoCertificate = exports.CardanoPoolParameters = exports.CardanoPoolMargin = exports.CardanoPoolMetadata = exports.CardanoPoolRelay = exports.CardanoPoolOwner = exports.CardanoOutput = exports.CardanoAssetGroup = exports.CardanoToken = exports.CardanoInput = exports.CardanoGetPublicKey = exports.CardanoNativeScriptHash = exports.CardanoGetNativeScriptHash = exports.CardanoNativeScript = exports.CardanoGetAddress = exports.CardanoAddressParameters = exports.CardanoCertificatePointer = void 0;
const schema_utils_1 = __webpack_require__(9406);
const constants_1 = __webpack_require__(9955);
const params_1 = __webpack_require__(4281);
exports.CardanoCertificatePointer = schema_utils_1.Type.Object({
  blockIndex: schema_utils_1.Type.Number(),
  txIndex: schema_utils_1.Type.Number(),
  certificateIndex: schema_utils_1.Type.Number()
});
exports.CardanoAddressParameters = schema_utils_1.Type.Object({
  addressType: constants_1.PROTO.EnumCardanoAddressType,
  path: schema_utils_1.Type.Optional(params_1.DerivationPath),
  stakingPath: schema_utils_1.Type.Optional(params_1.DerivationPath),
  stakingKeyHash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  certificatePointer: schema_utils_1.Type.Optional(exports.CardanoCertificatePointer),
  paymentScriptHash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  stakingScriptHash: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.CardanoGetAddress = schema_utils_1.Type.Object({
  addressParameters: exports.CardanoAddressParameters,
  protocolMagic: schema_utils_1.Type.Number(),
  networkId: schema_utils_1.Type.Number(),
  address: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  showOnTrezor: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  derivationType: schema_utils_1.Type.Optional(constants_1.PROTO.EnumCardanoDerivationType),
  chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.CardanoNativeScript = schema_utils_1.Type.Recursive(This => schema_utils_1.Type.Object({
  type: constants_1.PROTO.EnumCardanoNativeScriptType,
  scripts: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(This)),
  keyHash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  keyPath: schema_utils_1.Type.Optional(params_1.DerivationPath),
  requiredSignaturesCount: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  invalidBefore: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  invalidHereafter: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
}));
exports.CardanoGetNativeScriptHash = schema_utils_1.Type.Object({
  script: exports.CardanoNativeScript,
  displayFormat: constants_1.PROTO.EnumCardanoNativeScriptHashDisplayFormat,
  derivationType: schema_utils_1.Type.Optional(constants_1.PROTO.EnumCardanoDerivationType)
});
exports.CardanoNativeScriptHash = schema_utils_1.Type.Object({
  scriptHash: schema_utils_1.Type.String()
});
exports.CardanoGetPublicKey = schema_utils_1.Type.Intersect([params_1.GetPublicKey, schema_utils_1.Type.Object({
  derivationType: schema_utils_1.Type.Optional(constants_1.PROTO.EnumCardanoDerivationType)
})]);
exports.CardanoInput = schema_utils_1.Type.Object({
  path: schema_utils_1.Type.Optional(params_1.DerivationPath),
  prev_hash: schema_utils_1.Type.String(),
  prev_index: schema_utils_1.Type.Number()
});
exports.CardanoToken = schema_utils_1.Type.Object({
  assetNameBytes: schema_utils_1.Type.String(),
  amount: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  mintAmount: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.CardanoAssetGroup = schema_utils_1.Type.Object({
  policyId: schema_utils_1.Type.String(),
  tokenAmounts: schema_utils_1.Type.Array(exports.CardanoToken)
});
exports.CardanoOutput = schema_utils_1.Type.Intersect([schema_utils_1.Type.Union([schema_utils_1.Type.Object({
  addressParameters: exports.CardanoAddressParameters
}), schema_utils_1.Type.Object({
  address: schema_utils_1.Type.String()
})]), schema_utils_1.Type.Object({
  amount: schema_utils_1.Type.String(),
  tokenBundle: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports.CardanoAssetGroup)),
  datumHash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  format: schema_utils_1.Type.Optional(constants_1.PROTO.EnumCardanoTxOutputSerializationFormat),
  inlineDatum: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  referenceScript: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
})]);
exports.CardanoPoolOwner = schema_utils_1.Type.Object({
  stakingKeyPath: schema_utils_1.Type.Optional(params_1.DerivationPath),
  stakingKeyHash: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.CardanoPoolRelay = schema_utils_1.Type.Object({
  type: constants_1.PROTO.EnumCardanoPoolRelayType,
  ipv4Address: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  ipv6Address: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  port: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  hostName: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.CardanoPoolMetadata = schema_utils_1.Type.Object({
  url: schema_utils_1.Type.String(),
  hash: schema_utils_1.Type.String()
});
exports.CardanoPoolMargin = schema_utils_1.Type.Object({
  numerator: schema_utils_1.Type.String(),
  denominator: schema_utils_1.Type.String()
});
exports.CardanoPoolParameters = schema_utils_1.Type.Object({
  poolId: schema_utils_1.Type.String(),
  vrfKeyHash: schema_utils_1.Type.String(),
  pledge: schema_utils_1.Type.String(),
  cost: schema_utils_1.Type.String(),
  margin: exports.CardanoPoolMargin,
  rewardAccount: schema_utils_1.Type.String(),
  owners: schema_utils_1.Type.Array(exports.CardanoPoolOwner, {
    minItems: 1
  }),
  relays: schema_utils_1.Type.Array(exports.CardanoPoolRelay),
  metadata: schema_utils_1.Type.Optional(exports.CardanoPoolMetadata)
});
exports.CardanoCertificate = schema_utils_1.Type.Object({
  type: constants_1.PROTO.EnumCardanoCertificateType,
  path: schema_utils_1.Type.Optional(params_1.DerivationPath),
  pool: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  poolParameters: schema_utils_1.Type.Optional(exports.CardanoPoolParameters),
  scriptHash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  keyHash: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.CardanoWithdrawal = schema_utils_1.Type.Object({
  path: schema_utils_1.Type.Optional(params_1.DerivationPath),
  amount: schema_utils_1.Type.String(),
  scriptHash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  keyHash: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.CardanoMint = schema_utils_1.Type.Array(exports.CardanoAssetGroup);
exports.CardanoCollateralInput = schema_utils_1.Type.Object({
  path: schema_utils_1.Type.Optional(params_1.DerivationPath),
  prev_hash: schema_utils_1.Type.String(),
  prev_index: schema_utils_1.Type.Number()
});
exports.CardanoRequiredSigner = schema_utils_1.Type.Object({
  keyPath: schema_utils_1.Type.Optional(params_1.DerivationPath),
  keyHash: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.CardanoReferenceInput = schema_utils_1.Type.Object({
  prev_hash: schema_utils_1.Type.String(),
  prev_index: schema_utils_1.Type.Number()
});
exports.CardanoCVoteRegistrationDelegation = schema_utils_1.Type.Object({
  votePublicKey: schema_utils_1.Type.String(),
  weight: schema_utils_1.Type.Number()
});
exports.CardanoCVoteRegistrationParameters = schema_utils_1.Type.Object({
  votePublicKey: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  stakingPath: params_1.DerivationPath,
  paymentAddressParameters: schema_utils_1.Type.Optional(exports.CardanoAddressParameters),
  nonce: schema_utils_1.Type.String(),
  format: schema_utils_1.Type.Optional(constants_1.PROTO.EnumCardanoCVoteRegistrationFormat),
  delegations: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports.CardanoCVoteRegistrationDelegation)),
  votingPurpose: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  paymentAddress: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.CardanoAuxiliaryData = schema_utils_1.Type.Object({
  hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  cVoteRegistrationParameters: schema_utils_1.Type.Optional(exports.CardanoCVoteRegistrationParameters)
});
exports.CardanoSignTransaction = schema_utils_1.Type.Object({
  inputs: schema_utils_1.Type.Array(exports.CardanoInput),
  outputs: schema_utils_1.Type.Array(exports.CardanoOutput),
  fee: schema_utils_1.Type.Uint(),
  ttl: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
  certificates: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports.CardanoCertificate)),
  withdrawals: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports.CardanoWithdrawal)),
  validityIntervalStart: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  auxiliaryData: schema_utils_1.Type.Optional(exports.CardanoAuxiliaryData),
  mint: schema_utils_1.Type.Optional(exports.CardanoMint),
  scriptDataHash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  collateralInputs: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports.CardanoCollateralInput)),
  requiredSigners: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports.CardanoRequiredSigner)),
  collateralReturn: schema_utils_1.Type.Optional(exports.CardanoOutput),
  totalCollateral: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  referenceInputs: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports.CardanoReferenceInput)),
  additionalWitnessRequests: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(params_1.DerivationPath)),
  protocolMagic: schema_utils_1.Type.Number(),
  networkId: schema_utils_1.Type.Number(),
  signingMode: constants_1.PROTO.EnumCardanoTxSigningMode,
  derivationType: schema_utils_1.Type.Optional(constants_1.PROTO.EnumCardanoDerivationType),
  includeNetworkId: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.CardanoSignTransactionExtended = schema_utils_1.Type.Intersect([exports.CardanoSignTransaction, schema_utils_1.Type.Object({
  unsignedTx: schema_utils_1.Type.Object({
    body: schema_utils_1.Type.String(),
    hash: schema_utils_1.Type.String()
  }),
  testnet: schema_utils_1.Type.Boolean()
})]);
exports.CardanoSignedTxWitness = schema_utils_1.Type.Object({
  type: constants_1.PROTO.EnumCardanoTxWitnessType,
  pubKey: schema_utils_1.Type.String(),
  signature: schema_utils_1.Type.String(),
  chainCode: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.CardanoAuxiliaryDataSupplement = schema_utils_1.Type.Object({
  type: constants_1.PROTO.EnumCardanoTxAuxiliaryDataSupplementType,
  auxiliaryDataHash: schema_utils_1.Type.String(),
  cVoteRegistrationSignature: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.CardanoSignedTxData = schema_utils_1.Type.Object({
  hash: schema_utils_1.Type.String(),
  witnesses: schema_utils_1.Type.Array(exports.CardanoSignedTxWitness),
  auxiliaryDataSupplement: schema_utils_1.Type.Optional(exports.CardanoAuxiliaryDataSupplement)
});

/***/ }),

/***/ 2258:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.EosSignTransaction = exports.EosSDKTransaction = exports.EosTxAction = exports.EosTxActionCommon = exports.EosAuthorization = exports.EosTxHeader = exports.EosPublicKey = void 0;
const constants_1 = __webpack_require__(9955);
const params_1 = __webpack_require__(4281);
const schema_utils_1 = __webpack_require__(9406);
exports.EosPublicKey = schema_utils_1.Type.Object({
  wifPublicKey: schema_utils_1.Type.String(),
  rawPublicKey: schema_utils_1.Type.String(),
  path: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
  serializedPath: schema_utils_1.Type.String()
});
exports.EosTxHeader = schema_utils_1.Type.Object({
  expiration: schema_utils_1.Type.Union([schema_utils_1.Type.Uint(), schema_utils_1.Type.String()]),
  refBlockNum: schema_utils_1.Type.Number(),
  refBlockPrefix: schema_utils_1.Type.Number(),
  maxNetUsageWords: schema_utils_1.Type.Number(),
  maxCpuUsageMs: schema_utils_1.Type.Number(),
  delaySec: schema_utils_1.Type.Number()
});
exports.EosAuthorization = schema_utils_1.Type.Object({
  threshold: schema_utils_1.Type.Number(),
  keys: schema_utils_1.Type.Array(constants_1.PROTO.EosAuthorizationKey),
  accounts: schema_utils_1.Type.Array(schema_utils_1.Type.Object({
    permission: constants_1.PROTO.EosPermissionLevel,
    weight: schema_utils_1.Type.Number()
  })),
  waits: schema_utils_1.Type.Array(constants_1.PROTO.EosAuthorizationWait)
});
exports.EosTxActionCommon = schema_utils_1.Type.Object({
  account: schema_utils_1.Type.String(),
  authorization: schema_utils_1.Type.Array(constants_1.PROTO.EosPermissionLevel)
});
exports.EosTxAction = schema_utils_1.Type.Union([schema_utils_1.Type.Intersect([exports.EosTxActionCommon, schema_utils_1.Type.Object({
  name: schema_utils_1.Type.Literal('transfer'),
  data: schema_utils_1.Type.Object({
    from: schema_utils_1.Type.String(),
    to: schema_utils_1.Type.String(),
    quantity: schema_utils_1.Type.String(),
    memo: schema_utils_1.Type.String()
  })
})]), schema_utils_1.Type.Intersect([exports.EosTxActionCommon, schema_utils_1.Type.Object({
  name: schema_utils_1.Type.Literal('delegatebw'),
  data: schema_utils_1.Type.Object({
    from: schema_utils_1.Type.String(),
    receiver: schema_utils_1.Type.String(),
    stake_net_quantity: schema_utils_1.Type.String(),
    stake_cpu_quantity: schema_utils_1.Type.String(),
    transfer: schema_utils_1.Type.Boolean()
  })
})]), schema_utils_1.Type.Intersect([exports.EosTxActionCommon, schema_utils_1.Type.Object({
  name: schema_utils_1.Type.Literal('undelegatebw'),
  data: schema_utils_1.Type.Object({
    from: schema_utils_1.Type.String(),
    receiver: schema_utils_1.Type.String(),
    unstake_net_quantity: schema_utils_1.Type.String(),
    unstake_cpu_quantity: schema_utils_1.Type.String()
  })
})]), schema_utils_1.Type.Intersect([exports.EosTxActionCommon, schema_utils_1.Type.Object({
  name: schema_utils_1.Type.Literal('buyram'),
  data: schema_utils_1.Type.Object({
    payer: schema_utils_1.Type.String(),
    receiver: schema_utils_1.Type.String(),
    quant: schema_utils_1.Type.String()
  })
})]), schema_utils_1.Type.Intersect([exports.EosTxActionCommon, schema_utils_1.Type.Object({
  name: schema_utils_1.Type.Literal('buyrambytes'),
  data: constants_1.PROTO.EosActionBuyRamBytes
})]), schema_utils_1.Type.Intersect([exports.EosTxActionCommon, schema_utils_1.Type.Object({
  name: schema_utils_1.Type.Literal('sellram'),
  data: constants_1.PROTO.EosActionSellRam
})]), schema_utils_1.Type.Intersect([exports.EosTxActionCommon, schema_utils_1.Type.Object({
  name: schema_utils_1.Type.Literal('voteproducer'),
  data: schema_utils_1.Type.Object({
    voter: schema_utils_1.Type.String(),
    proxy: schema_utils_1.Type.String(),
    producers: schema_utils_1.Type.Array(schema_utils_1.Type.String())
  })
})]), schema_utils_1.Type.Intersect([exports.EosTxActionCommon, schema_utils_1.Type.Object({
  name: schema_utils_1.Type.Literal('refund'),
  data: constants_1.PROTO.EosActionRefund
})]), schema_utils_1.Type.Intersect([exports.EosTxActionCommon, schema_utils_1.Type.Object({
  name: schema_utils_1.Type.Literal('updateauth'),
  data: schema_utils_1.Type.Object({
    account: schema_utils_1.Type.String(),
    permission: schema_utils_1.Type.String(),
    parent: schema_utils_1.Type.String(),
    auth: exports.EosAuthorization
  })
})]), schema_utils_1.Type.Intersect([exports.EosTxActionCommon, schema_utils_1.Type.Object({
  name: schema_utils_1.Type.Literal('deleteauth'),
  data: constants_1.PROTO.EosActionDeleteAuth
})]), schema_utils_1.Type.Intersect([exports.EosTxActionCommon, schema_utils_1.Type.Object({
  name: schema_utils_1.Type.Literal('linkauth'),
  data: constants_1.PROTO.EosActionLinkAuth
})]), schema_utils_1.Type.Intersect([exports.EosTxActionCommon, schema_utils_1.Type.Object({
  name: schema_utils_1.Type.Literal('unlinkauth'),
  data: constants_1.PROTO.EosActionUnlinkAuth
})]), schema_utils_1.Type.Intersect([exports.EosTxActionCommon, schema_utils_1.Type.Object({
  name: schema_utils_1.Type.Literal('newaccount'),
  data: schema_utils_1.Type.Object({
    creator: schema_utils_1.Type.String(),
    name: schema_utils_1.Type.String(),
    owner: exports.EosAuthorization,
    active: exports.EosAuthorization
  })
})])]);
exports.EosSDKTransaction = schema_utils_1.Type.Object({
  chainId: schema_utils_1.Type.String(),
  header: exports.EosTxHeader,
  actions: schema_utils_1.Type.Array(schema_utils_1.Type.Union([exports.EosTxAction, schema_utils_1.Type.Intersect([exports.EosTxActionCommon, schema_utils_1.Type.Object({
    name: schema_utils_1.Type.String(),
    data: schema_utils_1.Type.String()
  })])]))
});
exports.EosSignTransaction = schema_utils_1.Type.Object({
  path: params_1.DerivationPath,
  transaction: exports.EosSDKTransaction,
  chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});

/***/ }),

/***/ 2264:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.EthereumVerifyMessage = exports.EthereumSignTypedHash = exports.EthereumSignTypedData = exports.EthereumSignTypedDataMessage = exports.EthereumSignTypedDataTypes = exports.EthereumSignedTx = exports.EthereumSignTransaction = exports.EthereumTransactionEIP1559 = exports.EthereumAccessList = exports.EthereumTransaction = exports.EthereumSignMessage = void 0;
const schema_utils_1 = __webpack_require__(9406);
const params_1 = __webpack_require__(4281);
exports.EthereumSignMessage = schema_utils_1.Type.Object({
  path: params_1.DerivationPath,
  message: schema_utils_1.Type.String(),
  hex: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.EthereumTransaction = schema_utils_1.Type.Object({
  to: schema_utils_1.Type.String(),
  value: schema_utils_1.Type.String(),
  gasPrice: schema_utils_1.Type.String(),
  gasLimit: schema_utils_1.Type.String(),
  maxFeePerGas: schema_utils_1.Type.Optional(schema_utils_1.Type.Undefined()),
  maxPriorityFeePerGas: schema_utils_1.Type.Optional(schema_utils_1.Type.Undefined()),
  nonce: schema_utils_1.Type.String(),
  data: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  chainId: schema_utils_1.Type.Number(),
  txType: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
});
exports.EthereumAccessList = schema_utils_1.Type.Object({
  address: schema_utils_1.Type.String(),
  storageKeys: schema_utils_1.Type.Array(schema_utils_1.Type.String())
});
exports.EthereumTransactionEIP1559 = schema_utils_1.Type.Object({
  to: schema_utils_1.Type.String(),
  value: schema_utils_1.Type.String(),
  gasLimit: schema_utils_1.Type.String(),
  gasPrice: schema_utils_1.Type.Optional(schema_utils_1.Type.Undefined()),
  nonce: schema_utils_1.Type.String(),
  data: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  chainId: schema_utils_1.Type.Number(),
  maxFeePerGas: schema_utils_1.Type.String(),
  maxPriorityFeePerGas: schema_utils_1.Type.String(),
  accessList: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports.EthereumAccessList))
});
exports.EthereumSignTransaction = schema_utils_1.Type.Object({
  path: params_1.DerivationPath,
  transaction: schema_utils_1.Type.Union([exports.EthereumTransaction, exports.EthereumTransactionEIP1559]),
  chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.EthereumSignedTx = schema_utils_1.Type.Object({
  v: schema_utils_1.Type.String(),
  r: schema_utils_1.Type.String(),
  s: schema_utils_1.Type.String(),
  serializedTx: schema_utils_1.Type.String()
});
const EthereumSignTypedDataTypeProperty = schema_utils_1.Type.Object({
  name: schema_utils_1.Type.String(),
  type: schema_utils_1.Type.String()
});
exports.EthereumSignTypedDataTypes = schema_utils_1.Type.Object({
  EIP712Domain: schema_utils_1.Type.Array(EthereumSignTypedDataTypeProperty)
}, {
  additionalProperties: schema_utils_1.Type.Array(EthereumSignTypedDataTypeProperty)
});
exports.EthereumSignTypedDataMessage = schema_utils_1.Type.Object({
  types: exports.EthereumSignTypedDataTypes,
  primaryType: schema_utils_1.Type.String(),
  domain: schema_utils_1.Type.Object({
    name: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    version: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    chainId: schema_utils_1.Type.Optional(schema_utils_1.Type.Union([schema_utils_1.Type.Number(), schema_utils_1.Type.BigInt()])),
    verifyingContract: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    salt: schema_utils_1.Type.Optional(schema_utils_1.Type.Union([schema_utils_1.Type.ArrayBuffer(), schema_utils_1.Type.String()]))
  }),
  message: schema_utils_1.Type.Object({}, {
    additionalProperties: schema_utils_1.Type.Any()
  })
});
exports.EthereumSignTypedData = schema_utils_1.Type.Object({
  path: params_1.DerivationPath,
  data: exports.EthereumSignTypedDataMessage,
  metamask_v4_compat: schema_utils_1.Type.Boolean(),
  domain_separator_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.Undefined()),
  message_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.Undefined())
});
exports.EthereumSignTypedHash = schema_utils_1.Type.Object({
  path: params_1.DerivationPath,
  data: exports.EthereumSignTypedDataMessage,
  metamask_v4_compat: schema_utils_1.Type.Boolean(),
  domain_separator_hash: schema_utils_1.Type.String(),
  message_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.EthereumVerifyMessage = schema_utils_1.Type.Object({
  address: schema_utils_1.Type.String(),
  message: schema_utils_1.Type.String(),
  hex: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  signature: schema_utils_1.Type.String()
});

/***/ }),

/***/ 6113:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 7489:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RippleSignedTx = exports.RippleSignTransaction = exports.RippleTransaction = exports.RipplePayment = void 0;
const params_1 = __webpack_require__(4281);
const schema_utils_1 = __webpack_require__(9406);
exports.RipplePayment = schema_utils_1.Type.Object({
  amount: schema_utils_1.Type.String(),
  destination: schema_utils_1.Type.String(),
  destinationTag: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
});
exports.RippleTransaction = schema_utils_1.Type.Object({
  fee: schema_utils_1.Type.String(),
  flags: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  sequence: schema_utils_1.Type.Number(),
  maxLedgerVersion: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  payment: exports.RipplePayment
});
exports.RippleSignTransaction = schema_utils_1.Type.Object({
  path: params_1.DerivationPath,
  transaction: exports.RippleTransaction,
  chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.RippleSignedTx = schema_utils_1.Type.Object({
  serializedTx: schema_utils_1.Type.String(),
  signature: schema_utils_1.Type.String()
});

/***/ }),

/***/ 2281:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SolanaSignedTransaction = exports.SolanaSignTransaction = exports.SolanaTxAdditionalInfo = exports.SolanaTxTokenAccountInfo = exports.SolanaPublicKey = void 0;
const params_1 = __webpack_require__(4281);
const schema_utils_1 = __webpack_require__(9406);
exports.SolanaPublicKey = schema_utils_1.Type.Intersect([params_1.PublicKey, schema_utils_1.Type.Object({
  publicKey: schema_utils_1.Type.String()
})]);
exports.SolanaTxTokenAccountInfo = schema_utils_1.Type.Object({
  baseAddress: schema_utils_1.Type.String(),
  tokenProgram: schema_utils_1.Type.String(),
  tokenMint: schema_utils_1.Type.String(),
  tokenAccount: schema_utils_1.Type.String()
});
exports.SolanaTxAdditionalInfo = schema_utils_1.Type.Object({
  tokenAccountsInfos: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports.SolanaTxTokenAccountInfo, {
    minItems: 1
  }))
});
exports.SolanaSignTransaction = schema_utils_1.Type.Object({
  path: schema_utils_1.Type.Union([schema_utils_1.Type.String(), schema_utils_1.Type.Array(schema_utils_1.Type.Number())]),
  serializedTx: schema_utils_1.Type.String(),
  additionalInfo: schema_utils_1.Type.Optional(exports.SolanaTxAdditionalInfo)
});
exports.SolanaSignedTransaction = schema_utils_1.Type.Object({
  signature: schema_utils_1.Type.String()
});

/***/ }),

/***/ 3593:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.StellarOperationMessage = exports.StellarSignedTx = exports.StellarSignTransaction = exports.StellarTransaction = exports.StellarOperation = exports.StellarInflationOperation = exports.StellarBumpSequenceOperation = exports.StellarManageDataOperation = exports.StellarAccountMergeOperation = exports.StellarAllowTrustOperation = exports.StellarChangeTrustOperation = exports.StellarSetOptionsOperation = exports.StellarManageBuyOfferOperation = exports.StellarManageSellOfferOperation = exports.StellarPassiveSellOfferOperation = exports.StellarPathPaymentStrictSendOperation = exports.StellarPathPaymentStrictReceiveOperation = exports.StellarPaymentOperation = exports.StellarCreateAccountOperation = exports.StellarAsset = void 0;
const constants_1 = __webpack_require__(9955);
const params_1 = __webpack_require__(4281);
const schema_utils_1 = __webpack_require__(9406);
exports.StellarAsset = schema_utils_1.Type.Object({
  type: schema_utils_1.Type.Union([constants_1.PROTO.EnumStellarAssetType, schema_utils_1.Type.KeyOfEnum(constants_1.PROTO.StellarAssetType)]),
  code: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  issuer: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.StellarCreateAccountOperation = schema_utils_1.Type.Object({
  type: schema_utils_1.Type.Literal('createAccount'),
  source: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  destination: schema_utils_1.Type.String(),
  startingBalance: schema_utils_1.Type.String()
});
exports.StellarPaymentOperation = schema_utils_1.Type.Object({
  type: schema_utils_1.Type.Literal('payment'),
  source: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  destination: schema_utils_1.Type.String(),
  asset: exports.StellarAsset,
  amount: schema_utils_1.Type.String()
});
exports.StellarPathPaymentStrictReceiveOperation = schema_utils_1.Type.Object({
  type: schema_utils_1.Type.Literal('pathPaymentStrictReceive'),
  source: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  sendAsset: exports.StellarAsset,
  sendMax: schema_utils_1.Type.Uint(),
  destination: schema_utils_1.Type.String(),
  destAsset: exports.StellarAsset,
  destAmount: schema_utils_1.Type.Uint(),
  path: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports.StellarAsset))
});
exports.StellarPathPaymentStrictSendOperation = schema_utils_1.Type.Object({
  type: schema_utils_1.Type.Literal('pathPaymentStrictSend'),
  source: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  sendAsset: exports.StellarAsset,
  sendAmount: schema_utils_1.Type.Uint(),
  destination: schema_utils_1.Type.String(),
  destAsset: exports.StellarAsset,
  destMin: schema_utils_1.Type.Uint(),
  path: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports.StellarAsset))
});
exports.StellarPassiveSellOfferOperation = schema_utils_1.Type.Object({
  type: schema_utils_1.Type.Literal('createPassiveSellOffer'),
  source: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  buying: exports.StellarAsset,
  selling: exports.StellarAsset,
  amount: schema_utils_1.Type.Uint(),
  price: schema_utils_1.Type.Object({
    n: schema_utils_1.Type.Number(),
    d: schema_utils_1.Type.Number()
  })
});
exports.StellarManageSellOfferOperation = schema_utils_1.Type.Object({
  type: schema_utils_1.Type.Literal('manageSellOffer'),
  source: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  buying: exports.StellarAsset,
  selling: exports.StellarAsset,
  amount: schema_utils_1.Type.Uint(),
  offerId: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
  price: schema_utils_1.Type.Object({
    n: schema_utils_1.Type.Number(),
    d: schema_utils_1.Type.Number()
  })
});
exports.StellarManageBuyOfferOperation = schema_utils_1.Type.Object({
  type: schema_utils_1.Type.Literal('manageBuyOffer'),
  source: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  buying: exports.StellarAsset,
  selling: exports.StellarAsset,
  amount: schema_utils_1.Type.Uint(),
  offerId: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
  price: schema_utils_1.Type.Object({
    n: schema_utils_1.Type.Number(),
    d: schema_utils_1.Type.Number()
  })
});
exports.StellarSetOptionsOperation = schema_utils_1.Type.Object({
  type: schema_utils_1.Type.Literal('setOptions'),
  source: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  signer: schema_utils_1.Type.Optional(schema_utils_1.Type.Object({
    type: constants_1.PROTO.EnumStellarSignerType,
    key: schema_utils_1.Type.Union([schema_utils_1.Type.String(), schema_utils_1.Type.Buffer()]),
    weight: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
  })),
  inflationDest: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  clearFlags: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  setFlags: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  masterWeight: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
  lowThreshold: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
  medThreshold: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
  highThreshold: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
  homeDomain: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.StellarChangeTrustOperation = schema_utils_1.Type.Object({
  type: schema_utils_1.Type.Literal('changeTrust'),
  source: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  line: exports.StellarAsset,
  limit: schema_utils_1.Type.String()
});
exports.StellarAllowTrustOperation = schema_utils_1.Type.Object({
  type: schema_utils_1.Type.Literal('allowTrust'),
  source: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  trustor: schema_utils_1.Type.String(),
  assetCode: schema_utils_1.Type.String(),
  assetType: constants_1.PROTO.EnumStellarAssetType,
  authorize: schema_utils_1.Type.Optional(schema_utils_1.Type.Union([schema_utils_1.Type.Boolean(), schema_utils_1.Type.Undefined()]))
});
exports.StellarAccountMergeOperation = schema_utils_1.Type.Object({
  type: schema_utils_1.Type.Literal('accountMerge'),
  source: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  destination: schema_utils_1.Type.String()
});
exports.StellarManageDataOperation = schema_utils_1.Type.Object({
  type: schema_utils_1.Type.Literal('manageData'),
  source: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  name: schema_utils_1.Type.String(),
  value: schema_utils_1.Type.Optional(schema_utils_1.Type.Union([schema_utils_1.Type.String(), schema_utils_1.Type.Buffer()]))
});
exports.StellarBumpSequenceOperation = schema_utils_1.Type.Object({
  type: schema_utils_1.Type.Literal('bumpSequence'),
  source: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  bumpTo: schema_utils_1.Type.Uint()
});
exports.StellarInflationOperation = schema_utils_1.Type.Object({
  type: schema_utils_1.Type.Literal('inflation'),
  source: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.StellarOperation = schema_utils_1.Type.Union([exports.StellarCreateAccountOperation, exports.StellarPaymentOperation, exports.StellarPathPaymentStrictReceiveOperation, exports.StellarPathPaymentStrictSendOperation, exports.StellarPassiveSellOfferOperation, exports.StellarManageSellOfferOperation, exports.StellarManageBuyOfferOperation, exports.StellarSetOptionsOperation, exports.StellarChangeTrustOperation, exports.StellarAllowTrustOperation, exports.StellarAccountMergeOperation, exports.StellarInflationOperation, exports.StellarManageDataOperation, exports.StellarBumpSequenceOperation]);
exports.StellarTransaction = schema_utils_1.Type.Object({
  source: schema_utils_1.Type.String(),
  fee: schema_utils_1.Type.Number(),
  sequence: schema_utils_1.Type.Uint(),
  timebounds: schema_utils_1.Type.Optional(schema_utils_1.Type.Object({
    minTime: schema_utils_1.Type.Number(),
    maxTime: schema_utils_1.Type.Number()
  })),
  memo: schema_utils_1.Type.Optional(schema_utils_1.Type.Object({
    type: constants_1.PROTO.EnumStellarMemoType,
    id: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
    text: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
    hash: schema_utils_1.Type.Optional(schema_utils_1.Type.Union([schema_utils_1.Type.String(), schema_utils_1.Type.Buffer()]))
  })),
  operations: schema_utils_1.Type.Array(exports.StellarOperation)
});
exports.StellarSignTransaction = schema_utils_1.Type.Object({
  path: params_1.DerivationPath,
  networkPassphrase: schema_utils_1.Type.String(),
  transaction: exports.StellarTransaction
});
exports.StellarSignedTx = schema_utils_1.Type.Object({
  publicKey: schema_utils_1.Type.String(),
  signature: schema_utils_1.Type.String()
});
exports.StellarOperationMessage = schema_utils_1.Type.Union([schema_utils_1.Type.Intersect([schema_utils_1.Type.Object({
  type: schema_utils_1.Type.Literal('StellarCreateAccountOp')
}), constants_1.PROTO.StellarCreateAccountOp]), schema_utils_1.Type.Intersect([schema_utils_1.Type.Object({
  type: schema_utils_1.Type.Literal('StellarPaymentOp')
}), constants_1.PROTO.StellarPaymentOp]), schema_utils_1.Type.Intersect([schema_utils_1.Type.Object({
  type: schema_utils_1.Type.Literal('StellarPathPaymentStrictReceiveOp')
}), constants_1.PROTO.StellarPathPaymentStrictReceiveOp]), schema_utils_1.Type.Intersect([schema_utils_1.Type.Object({
  type: schema_utils_1.Type.Literal('StellarPathPaymentStrictSendOp')
}), constants_1.PROTO.StellarPathPaymentStrictSendOp]), schema_utils_1.Type.Intersect([schema_utils_1.Type.Object({
  type: schema_utils_1.Type.Literal('StellarManageSellOfferOp')
}), constants_1.PROTO.StellarManageSellOfferOp]), schema_utils_1.Type.Intersect([schema_utils_1.Type.Object({
  type: schema_utils_1.Type.Literal('StellarManageBuyOfferOp')
}), constants_1.PROTO.StellarManageBuyOfferOp]), schema_utils_1.Type.Intersect([schema_utils_1.Type.Object({
  type: schema_utils_1.Type.Literal('StellarCreatePassiveSellOfferOp')
}), constants_1.PROTO.StellarCreatePassiveSellOfferOp]), schema_utils_1.Type.Intersect([schema_utils_1.Type.Object({
  type: schema_utils_1.Type.Literal('StellarSetOptionsOp')
}), constants_1.PROTO.StellarSetOptionsOp]), schema_utils_1.Type.Intersect([schema_utils_1.Type.Object({
  type: schema_utils_1.Type.Literal('StellarChangeTrustOp')
}), constants_1.PROTO.StellarChangeTrustOp]), schema_utils_1.Type.Intersect([schema_utils_1.Type.Object({
  type: schema_utils_1.Type.Literal('StellarAllowTrustOp')
}), constants_1.PROTO.StellarAllowTrustOp]), schema_utils_1.Type.Intersect([schema_utils_1.Type.Object({
  type: schema_utils_1.Type.Literal('StellarAccountMergeOp')
}), constants_1.PROTO.StellarAccountMergeOp]), schema_utils_1.Type.Intersect([schema_utils_1.Type.Object({
  type: schema_utils_1.Type.Literal('StellarManageDataOp')
}), constants_1.PROTO.StellarManageDataOp]), schema_utils_1.Type.Intersect([schema_utils_1.Type.Object({
  type: schema_utils_1.Type.Literal('StellarBumpSequenceOp')
}), constants_1.PROTO.StellarBumpSequenceOp])]);

/***/ }),

/***/ 7493:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TezosSignTransaction = exports.TezosOperation = exports.TezosDelegationOperation = exports.TezosOriginationOperation = exports.TezosTransactionOperation = exports.TezosParametersManager = exports.TezosManagerTransfer = exports.TezosRevealOperation = void 0;
const params_1 = __webpack_require__(4281);
const schema_utils_1 = __webpack_require__(9406);
exports.TezosRevealOperation = schema_utils_1.Type.Object({
  source: schema_utils_1.Type.String(),
  fee: schema_utils_1.Type.Number(),
  counter: schema_utils_1.Type.Number(),
  gas_limit: schema_utils_1.Type.Number(),
  storage_limit: schema_utils_1.Type.Number(),
  public_key: schema_utils_1.Type.String()
});
exports.TezosManagerTransfer = schema_utils_1.Type.Object({
  destination: schema_utils_1.Type.String(),
  amount: schema_utils_1.Type.Number()
});
exports.TezosParametersManager = schema_utils_1.Type.Object({
  set_delegate: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  cancel_delegate: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  transfer: schema_utils_1.Type.Optional(exports.TezosManagerTransfer)
});
exports.TezosTransactionOperation = schema_utils_1.Type.Object({
  source: schema_utils_1.Type.String(),
  destination: schema_utils_1.Type.String(),
  amount: schema_utils_1.Type.Number(),
  counter: schema_utils_1.Type.Number(),
  fee: schema_utils_1.Type.Number(),
  gas_limit: schema_utils_1.Type.Number(),
  storage_limit: schema_utils_1.Type.Number(),
  parameters: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(schema_utils_1.Type.Number())),
  parameters_manager: schema_utils_1.Type.Optional(exports.TezosParametersManager)
});
exports.TezosOriginationOperation = schema_utils_1.Type.Object({
  source: schema_utils_1.Type.String(),
  balance: schema_utils_1.Type.Number(),
  delegate: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  script: params_1.DerivationPath,
  fee: schema_utils_1.Type.Number(),
  counter: schema_utils_1.Type.Number(),
  gas_limit: schema_utils_1.Type.Number(),
  storage_limit: schema_utils_1.Type.Number()
});
exports.TezosDelegationOperation = schema_utils_1.Type.Object({
  source: schema_utils_1.Type.String(),
  delegate: schema_utils_1.Type.String(),
  fee: schema_utils_1.Type.Number(),
  counter: schema_utils_1.Type.Number(),
  gas_limit: schema_utils_1.Type.Number(),
  storage_limit: schema_utils_1.Type.Number()
});
exports.TezosOperation = schema_utils_1.Type.Object({
  reveal: schema_utils_1.Type.Optional(exports.TezosRevealOperation),
  transaction: schema_utils_1.Type.Optional(exports.TezosTransactionOperation),
  origination: schema_utils_1.Type.Optional(exports.TezosOriginationOperation),
  delegation: schema_utils_1.Type.Optional(exports.TezosDelegationOperation)
});
exports.TezosSignTransaction = schema_utils_1.Type.Object({
  path: params_1.DerivationPath,
  branch: schema_utils_1.Type.String(),
  operation: exports.TezosOperation,
  chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});

/***/ }),

/***/ 8037:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CoinInfo = exports.MiscNetworkInfo = exports.EthereumNetworkInfo = exports.BitcoinNetworkInfo = exports.BlockchainLink = exports.CoinSupport = exports.CoinObj = exports.Network = exports.Bip32 = void 0;
const schema_utils_1 = __webpack_require__(9406);
const fees_1 = __webpack_require__(1598);
exports.Bip32 = schema_utils_1.Type.Object({
  public: schema_utils_1.Type.Number(),
  private: schema_utils_1.Type.Number()
});
exports.Network = schema_utils_1.Type.Object({
  messagePrefix: schema_utils_1.Type.String(),
  bech32: schema_utils_1.Type.String(),
  bip32: exports.Bip32,
  pubKeyHash: schema_utils_1.Type.Number(),
  scriptHash: schema_utils_1.Type.Number(),
  wif: schema_utils_1.Type.Number(),
  forkId: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
});
exports.CoinObj = schema_utils_1.Type.Object({
  coin: schema_utils_1.Type.String()
});
exports.CoinSupport = schema_utils_1.Type.Object({
  connect: schema_utils_1.Type.Boolean(),
  T1B1: schema_utils_1.Type.Union([schema_utils_1.Type.String(), schema_utils_1.Type.Literal(false)]),
  T2T1: schema_utils_1.Type.Union([schema_utils_1.Type.String(), schema_utils_1.Type.Literal(false)]),
  T2B1: schema_utils_1.Type.Union([schema_utils_1.Type.String(), schema_utils_1.Type.Literal(false)])
});
exports.BlockchainLink = schema_utils_1.Type.Object({
  type: schema_utils_1.Type.String(),
  url: schema_utils_1.Type.Array(schema_utils_1.Type.String())
});
const Common = schema_utils_1.Type.Object({
  label: schema_utils_1.Type.String(),
  name: schema_utils_1.Type.String(),
  shortcut: schema_utils_1.Type.String(),
  slip44: schema_utils_1.Type.Number(),
  support: exports.CoinSupport,
  decimals: schema_utils_1.Type.Number(),
  blockchainLink: schema_utils_1.Type.Optional(exports.BlockchainLink),
  blockTime: schema_utils_1.Type.Number(),
  minFee: schema_utils_1.Type.Number(),
  maxFee: schema_utils_1.Type.Number(),
  defaultFees: schema_utils_1.Type.Array(fees_1.FeeLevel)
});
exports.BitcoinNetworkInfo = schema_utils_1.Type.Intersect([Common, schema_utils_1.Type.Object({
  type: schema_utils_1.Type.Literal('bitcoin'),
  cashAddrPrefix: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  curveName: schema_utils_1.Type.String(),
  dustLimit: schema_utils_1.Type.Number(),
  forceBip143: schema_utils_1.Type.Boolean(),
  hashGenesisBlock: schema_utils_1.Type.String(),
  maxAddressLength: schema_utils_1.Type.Number(),
  maxFeeSatoshiKb: schema_utils_1.Type.Number(),
  minAddressLength: schema_utils_1.Type.Number(),
  minFeeSatoshiKb: schema_utils_1.Type.Number(),
  segwit: schema_utils_1.Type.Boolean(),
  xPubMagic: schema_utils_1.Type.Number(),
  xPubMagicSegwitNative: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  xPubMagicSegwit: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  taproot: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  network: exports.Network,
  isBitcoin: schema_utils_1.Type.Boolean()
})]);
exports.EthereumNetworkInfo = schema_utils_1.Type.Intersect([Common, schema_utils_1.Type.Object({
  type: schema_utils_1.Type.Literal('ethereum'),
  chainId: schema_utils_1.Type.Number(),
  network: schema_utils_1.Type.Optional(schema_utils_1.Type.Undefined())
})]);
exports.MiscNetworkInfo = schema_utils_1.Type.Intersect([Common, schema_utils_1.Type.Object({
  type: schema_utils_1.Type.Union([schema_utils_1.Type.Literal('misc'), schema_utils_1.Type.Literal('nem')]),
  curve: schema_utils_1.Type.String(),
  network: schema_utils_1.Type.Optional(schema_utils_1.Type.Undefined())
})]);
exports.CoinInfo = schema_utils_1.Type.Union([exports.BitcoinNetworkInfo, exports.EthereumNetworkInfo, exports.MiscNetworkInfo]);

/***/ }),

/***/ 790:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DeviceModelInternal = exports.FirmwareType = void 0;
var FirmwareType;
(function (FirmwareType) {
  FirmwareType["BitcoinOnly"] = "bitcoin-only";
  FirmwareType["Regular"] = "regular";
})(FirmwareType || (exports.FirmwareType = FirmwareType = {}));
var messages_schema_1 = __webpack_require__(7942);
Object.defineProperty(exports, "DeviceModelInternal", ({
  enumerable: true,
  get: function () {
    return messages_schema_1.DeviceModelInternal;
  }
}));

/***/ }),

/***/ 1598:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SelectFeeLevel = exports.FeeLevel = exports.FeeInfo = void 0;
const schema_utils_1 = __webpack_require__(9406);
exports.FeeInfo = schema_utils_1.Type.Object({
  blockTime: schema_utils_1.Type.Number(),
  minFee: schema_utils_1.Type.Number(),
  maxFee: schema_utils_1.Type.Number(),
  dustLimit: schema_utils_1.Type.Number()
});
exports.FeeLevel = schema_utils_1.Type.Object({
  label: schema_utils_1.Type.Union([schema_utils_1.Type.Literal('high'), schema_utils_1.Type.Literal('normal'), schema_utils_1.Type.Literal('economy'), schema_utils_1.Type.Literal('low'), schema_utils_1.Type.Literal('custom')]),
  feePerUnit: schema_utils_1.Type.String(),
  blocks: schema_utils_1.Type.Number(),
  feeLimit: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  feePerTx: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.SelectFeeLevel = schema_utils_1.Type.Union([schema_utils_1.Type.Object({
  name: schema_utils_1.Type.String(),
  fee: schema_utils_1.Type.Literal('0'),
  feePerByte: schema_utils_1.Type.Optional(schema_utils_1.Type.Undefined()),
  disabled: schema_utils_1.Type.Literal(true)
}), schema_utils_1.Type.Object({
  name: schema_utils_1.Type.String(),
  fee: schema_utils_1.Type.String(),
  feePerByte: schema_utils_1.Type.String(),
  minutes: schema_utils_1.Type.Number(),
  total: schema_utils_1.Type.String()
})]);

/***/ }),

/***/ 6474:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.IntermediaryVersion = void 0;
const schema_utils_1 = __webpack_require__(9406);
exports.IntermediaryVersion = schema_utils_1.Type.Union([schema_utils_1.Type.Literal(1), schema_utils_1.Type.Literal(2), schema_utils_1.Type.Literal(3)]);

/***/ }),

/***/ 1627:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(2970);
tslib_1.__exportStar(__webpack_require__(6113), exports);
tslib_1.__exportStar(__webpack_require__(9245), exports);
tslib_1.__exportStar(__webpack_require__(8037), exports);
tslib_1.__exportStar(__webpack_require__(790), exports);
tslib_1.__exportStar(__webpack_require__(1598), exports);
tslib_1.__exportStar(__webpack_require__(6474), exports);
tslib_1.__exportStar(__webpack_require__(4281), exports);
tslib_1.__exportStar(__webpack_require__(9342), exports);
tslib_1.__exportStar(__webpack_require__(6365), exports);
tslib_1.__exportStar(__webpack_require__(1276), exports);
tslib_1.__exportStar(__webpack_require__(3794), exports);
tslib_1.__exportStar(__webpack_require__(2258), exports);
tslib_1.__exportStar(__webpack_require__(7489), exports);
tslib_1.__exportStar(__webpack_require__(2264), exports);
tslib_1.__exportStar(__webpack_require__(2281), exports);
tslib_1.__exportStar(__webpack_require__(3593), exports);
tslib_1.__exportStar(__webpack_require__(7493), exports);

/***/ }),

/***/ 4281:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PublicKey = exports.GetPublicKey = exports.GetAddress = exports.DerivationPath = exports.Bundle = void 0;
const schema_utils_1 = __webpack_require__(9406);
const Bundle = type => schema_utils_1.Type.Object({
  bundle: schema_utils_1.Type.Array(type, {
    minItems: 1
  })
});
exports.Bundle = Bundle;
exports.DerivationPath = schema_utils_1.Type.Union([schema_utils_1.Type.String(), schema_utils_1.Type.Array(schema_utils_1.Type.Number())]);
exports.GetAddress = schema_utils_1.Type.Object({
  path: exports.DerivationPath,
  address: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  showOnTrezor: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  useEventListener: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.GetPublicKey = schema_utils_1.Type.Object({
  path: exports.DerivationPath,
  showOnTrezor: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  suppressBackupWarning: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.PublicKey = schema_utils_1.Type.Object({
  publicKey: schema_utils_1.Type.String(),
  path: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
  serializedPath: schema_utils_1.Type.String()
});

/***/ }),

/***/ 9342:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 6521:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
__webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = exports.Yn = exports.KR = __webpack_unused_export__ = void 0;
const green = '#bada55';
const blue = '#20abd8';
const orange = '#f4a744';
const yellow = '#fbd948';
const colors = {
  '@trezor/connect': `color: ${blue}; background: #000;`,
  '@trezor/connect-web': `color: ${blue}; background: #000;`,
  '@trezor/connect-webextension': `color: ${blue}; background: #000;`,
  IFrame: `color: ${orange}; background: #000;`,
  Core: `color: ${orange}; background: #000;`,
  DeviceList: `color: ${green}; background: #000;`,
  Device: `color: ${green}; background: #000;`,
  DeviceCommands: `color: ${green}; background: #000;`,
  '@trezor/transport': `color: ${green}; background: #000;`,
  InteractionTimeout: `color: ${green}; background: #000;`,
  '@trezor/connect-popup': `color: ${yellow}; background: #000;`
};
const MAX_ENTRIES = 100;
class Log {
  constructor(prefix, enabled, logWriter) {
    this.prefix = prefix;
    this.enabled = enabled;
    this.messages = [];
    this.css = typeof window !== 'undefined' && colors[prefix] ? colors[prefix] : '';
    if (logWriter) {
      this.logWriter = logWriter;
    }
  }
  addMessage({
    level,
    prefix,
    timestamp
  }, ...args) {
    const message = {
      level,
      prefix,
      css: this.css,
      message: args,
      timestamp: timestamp || Date.now()
    };
    this.messages.push(message);
    if (this.logWriter) {
      try {
        this.logWriter.add(message);
      } catch (err) {
        console.error('There was an error adding log message', err, message);
      }
    }
    if (this.messages.length > MAX_ENTRIES) {
      this.messages.shift();
    }
  }
  setWriter(logWriter) {
    this.logWriter = logWriter;
  }
  log(...args) {
    this.addMessage({
      level: 'log',
      prefix: this.prefix
    }, ...args);
    if (this.enabled) {
      console.log(`%c${this.prefix}`, this.css, ...args);
    }
  }
  error(...args) {
    this.addMessage({
      level: 'error',
      prefix: this.prefix
    }, ...args);
    if (this.enabled) {
      console.error(`%c${this.prefix}`, this.css, ...args);
    }
  }
  warn(...args) {
    this.addMessage({
      level: 'warn',
      prefix: this.prefix
    }, ...args);
    if (this.enabled) {
      console.warn(`%c${this.prefix}`, this.css, ...args);
    }
  }
  debug(...args) {
    this.addMessage({
      level: 'debug',
      prefix: this.prefix
    }, ...args);
    if (this.enabled) {
      if (this.css) {
        console.log(`%c${this.prefix}`, this.css, ...args);
      } else {
        console.log(this.prefix, ...args);
      }
    }
  }
}
__webpack_unused_export__ = Log;
const _logs = {};
let writer;
const initLog = (prefix, enabled, logWriter) => {
  const instanceWriter = logWriter || writer;
  const instance = new Log(prefix, !!enabled, instanceWriter);
  _logs[prefix] = instance;
  return instance;
};
exports.KR = initLog;
const setLogWriter = logWriterFactory => {
  Object.keys(_logs).forEach(key => {
    writer = logWriterFactory();
    if (writer) {
      _logs[key].setWriter(writer);
      const {
        messages
      } = _logs[key];
      messages.forEach(message => {
        writer === null || writer === void 0 ? void 0 : writer.add(message);
      });
    }
  });
};
exports.Yn = setLogWriter;
const enableLog = enabled => {
  Object.keys(_logs).forEach(key => {
    _logs[key].enabled = !!enabled;
  });
};
__webpack_unused_export__ = enableLog;
const enableLogByPrefix = (prefix, enabled) => {
  if (_logs[prefix]) {
    _logs[prefix].enabled = enabled;
  }
};
__webpack_unused_export__ = enableLogByPrefix;
const getLog = () => {
  let logs = [];
  Object.keys(_logs).forEach(key => {
    logs = logs.concat(_logs[key].messages);
  });
  logs.sort((a, b) => a.timestamp - b.timestamp);
  return logs;
};
__webpack_unused_export__ = getLog;

/***/ }),

/***/ 3163:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
__webpack_unused_export__ = __webpack_unused_export__ = exports.P$ = void 0;
const urlToOnion_1 = __webpack_require__(5200);
const getOrigin = url => {
  var _a;
  if (typeof url !== 'string') return 'unknown';
  if (url.indexOf('file://') === 0) return 'file://';
  const [origin] = (_a = url.match(/^https?:\/\/[^/]+/)) !== null && _a !== void 0 ? _a : [];
  return origin !== null && origin !== void 0 ? origin : 'unknown';
};
exports.P$ = getOrigin;
const getHost = url => {
  var _a;
  if (typeof url !== 'string') return;
  const [,, uri] = (_a = url.match(/^(https?):\/\/([^:/]+)?/i)) !== null && _a !== void 0 ? _a : [];
  if (uri) {
    const parts = uri.split('.');
    return parts.length > 2 ? parts.slice(parts.length - 2, parts.length).join('.') : uri;
  }
};
__webpack_unused_export__ = getHost;
const getOnionDomain = (url, dict) => {
  var _a;
  if (Array.isArray(url)) return url.map(u => {
    var _a;
    return (_a = (0, urlToOnion_1.urlToOnion)(u, dict)) !== null && _a !== void 0 ? _a : u;
  });
  if (typeof url === 'string') return (_a = (0, urlToOnion_1.urlToOnion)(url, dict)) !== null && _a !== void 0 ? _a : url;
  return url;
};
__webpack_unused_export__ = getOnionDomain;

/***/ }),

/***/ 7942:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TxRequest = exports.TxRequestSerializedType = exports.TxRequestDetailsType = exports.RequestType = exports.EnumEnum_RequestType = exports.Enum_RequestType = exports.SignTx = exports.CoinJoinRequest = exports.VerifyMessage = exports.MessageSignature = exports.SignMessage = exports.OwnershipId = exports.GetOwnershipId = exports.Address = exports.GetAddress = exports.PublicKey = exports.GetPublicKey = exports.MultisigRedeemScriptType = exports.HDNodePathType = exports.HDNodeType = exports.EnumAmountUnit = exports.AmountUnit = exports.EnumDecredStakingSpendType = exports.DecredStakingSpendType = exports.OutputScriptType = exports.EnumEnum_OutputScriptType = exports.Enum_OutputScriptType = exports.InputScriptType = exports.EnumEnum_InputScriptType = exports.Enum_InputScriptType = exports.BinanceSignedTx = exports.BinanceCancelMsg = exports.BinanceOrderMsg = exports.EnumBinanceTimeInForce = exports.BinanceTimeInForce = exports.EnumBinanceOrderSide = exports.BinanceOrderSide = exports.EnumBinanceOrderType = exports.BinanceOrderType = exports.BinanceTransferMsg = exports.BinanceInputOutput = exports.BinanceCoin = exports.BinanceTxRequest = exports.BinanceSignTx = exports.BinancePublicKey = exports.BinanceGetPublicKey = exports.BinanceAddress = exports.BinanceGetAddress = exports.EnumDeviceModelInternal = exports.DeviceModelInternal = void 0;
exports.CardanoTxAuxiliaryDataSupplementType = exports.EnumCardanoPoolRelayType = exports.CardanoPoolRelayType = exports.EnumCardanoCertificateType = exports.CardanoCertificateType = exports.EnumCardanoTxOutputSerializationFormat = exports.CardanoTxOutputSerializationFormat = exports.EnumCardanoNativeScriptHashDisplayFormat = exports.CardanoNativeScriptHashDisplayFormat = exports.EnumCardanoNativeScriptType = exports.CardanoNativeScriptType = exports.EnumCardanoAddressType = exports.CardanoAddressType = exports.EnumCardanoDerivationType = exports.CardanoDerivationType = exports.SelfTest = exports.FirmwareUpload = exports.FirmwareRequest = exports.FirmwareErase = exports.AuthorizeCoinJoin = exports.OwnershipProof = exports.GetOwnershipProof = exports.TxAckPrevExtraData = exports.TxAckPrevExtraDataWrapper = exports.TxAckPrevOutput = exports.TxAckPrevOutputWrapper = exports.TxAckPrevInput = exports.TxAckPrevInputWrapper = exports.TxAckPrevMeta = exports.TxAckOutput = exports.TxAckOutputWrapper = exports.TxAckInput = exports.TxAckInputWrapper = exports.TxAck = exports.TxAckResponse = exports.TxAckPaymentRequest = exports.PaymentRequestMemo = exports.CoinPurchaseMemo = exports.RefundMemo = exports.TextMemo = exports.PrevOutput = exports.PrevInput = exports.PrevTx = exports.TxOutput = exports.TxOutputType = exports.ChangeOutputScriptType = exports.TxOutputBinType = exports.TxInput = exports.TxInputType = exports.InternalInputScriptType = void 0;
exports.ButtonRequestType = exports.EnumEnum_ButtonRequestType = exports.Enum_ButtonRequestType = exports.Failure = exports.EnumFailureType = exports.FailureType = exports.Success = exports.CardanoSignTxFinished = exports.CardanoTxBodyHash = exports.CardanoTxHostAck = exports.CardanoTxWitnessResponse = exports.CardanoTxWitnessRequest = exports.CardanoTxAuxiliaryDataSupplement = exports.CardanoTxItemAck = exports.CardanoTxReferenceInput = exports.CardanoTxRequiredSigner = exports.CardanoTxCollateralInput = exports.CardanoTxMint = exports.CardanoTxAuxiliaryData = exports.CardanoCVoteRegistrationParametersType = exports.CardanoCVoteRegistrationDelegation = exports.CardanoTxWithdrawal = exports.CardanoTxCertificate = exports.CardanoPoolParametersType = exports.CardanoPoolMetadataType = exports.CardanoPoolRelayParameters = exports.CardanoPoolOwner = exports.CardanoTxReferenceScriptChunk = exports.CardanoTxInlineDatumChunk = exports.CardanoToken = exports.CardanoAssetGroup = exports.CardanoTxOutput = exports.CardanoTxInput = exports.CardanoSignTxInit = exports.CardanoPublicKey = exports.CardanoGetPublicKey = exports.CardanoAddress = exports.CardanoGetAddress = exports.CardanoAddressParametersType = exports.CardanoNativeScriptHash = exports.CardanoGetNativeScriptHash = exports.CardanoNativeScript = exports.CardanoBlockchainPointerType = exports.EnumCardanoTxWitnessType = exports.CardanoTxWitnessType = exports.EnumCardanoTxSigningMode = exports.CardanoTxSigningMode = exports.EnumCardanoCVoteRegistrationFormat = exports.CardanoCVoteRegistrationFormat = exports.EnumCardanoTxAuxiliaryDataSupplementType = void 0;
exports.EosTxActionAck = exports.EosActionUnknown = exports.EosActionNewAccount = exports.EosActionUnlinkAuth = exports.EosActionLinkAuth = exports.EosActionDeleteAuth = exports.EosActionUpdateAuth = exports.EosActionVoteProducer = exports.EosActionSellRam = exports.EosActionBuyRamBytes = exports.EosActionBuyRam = exports.EosActionRefund = exports.EosActionUndelegate = exports.EosActionDelegate = exports.EosActionTransfer = exports.EosActionCommon = exports.EosAuthorization = exports.EosAuthorizationWait = exports.EosAuthorizationAccount = exports.EosAuthorizationKey = exports.EosPermissionLevel = exports.EosAsset = exports.EosTxActionRequest = exports.EosSignTx = exports.EosTxHeader = exports.EosPublicKey = exports.EosGetPublicKey = exports.DebugLinkResetDebugEvents = exports.EnumDebugPhysicalButton = exports.DebugPhysicalButton = exports.EnumDebugButton = exports.DebugButton = exports.ECDHSessionKey = exports.GetECDHSessionKey = exports.SignedIdentity = exports.SignIdentity = exports.IdentityType = exports.CipheredKeyValue = exports.CipherKeyValue = exports.Deprecated_PassphraseStateAck = exports.Deprecated_PassphraseStateRequest = exports.PassphraseAck = exports.PassphraseRequest = exports.PinMatrixAck = exports.PinMatrixRequest = exports.PinMatrixRequestType = exports.EnumEnum_PinMatrixRequestType = exports.Enum_PinMatrixRequestType = exports.ButtonAck = exports.ButtonRequest = void 0;
exports.ChangePin = exports.ApplyFlags = exports.ApplySettings = exports.EndSession = exports.SetBusy = exports.LockDevice = exports.Features = exports.Capability = exports.EnumEnum_Capability = exports.Enum_Capability = exports.GetFeatures = exports.Initialize = exports.HomescreenFormat = exports.EnumEnum_HomescreenFormat = exports.Enum_HomescreenFormat = exports.SafetyCheckLevel = exports.EnumEnum_SafetyCheckLevel = exports.Enum_SafetyCheckLevel = exports.BackupType = exports.EnumEnum_BackupType = exports.Enum_BackupType = exports.EthereumTypedDataSignature = exports.EthereumSignTypedHash = exports.EthereumVerifyMessage = exports.EthereumMessageSignature = exports.EthereumSignMessage = exports.EthereumTxAck = exports.EthereumTxRequest = exports.EthereumSignTxEIP1559 = exports.EthereumAccessList = exports.EthereumSignTx = exports.EthereumAddress = exports.EthereumGetAddress = exports.EthereumPublicKey = exports.EthereumGetPublicKey = exports.EthereumTypedDataValueAck = exports.EthereumTypedDataValueRequest = exports.EthereumTypedDataStructAck = exports.EthereumStructMember = exports.EthereumFieldType = exports.EnumEthereumDataType = exports.EthereumDataType = exports.EthereumTypedDataStructRequest = exports.EthereumSignTypedData = exports.EthereumDefinitions = exports.EthereumTokenInfo = exports.EthereumNetworkInfo = exports.EnumEthereumDefinitionType = exports.EthereumDefinitionType = exports.EosSignedTx = void 0;
exports.EnumNEMMosaicLevy = exports.NEMMosaicLevy = exports.NEMProvisionNamespace = exports.NEMTransfer = exports.NEMMosaic = exports.NEMTransactionCommon = exports.NEMAddress = exports.NEMGetAddress = exports.EnumMoneroNetworkType = exports.MoneroNetworkType = exports.UnlockBootloader = exports.ShowDeviceTutorial = exports.UnlockedPathRequest = exports.UnlockPath = exports.Nonce = exports.GetNonce = exports.RebootToBootloader = exports.EnumBootCommand = exports.BootCommand = exports.CancelAuthorization = exports.PreauthorizedRequest = exports.DoPreauthorized = exports.NextU2FCounter = exports.GetNextU2FCounter = exports.SetU2FCounter = exports.WordAck = exports.WordRequest = exports.WordRequestType = exports.EnumEnum_WordRequestType = exports.Enum_WordRequestType = exports.RecoveryDevice = exports.EnumRecoveryDeviceType = exports.RecoveryDeviceType = exports.EntropyAck = exports.EntropyRequest = exports.BackupDevice = exports.ResetDevice = exports.WipeDevice = exports.AuthenticityProof = exports.AuthenticateDevice = exports.FirmwareHash = exports.GetFirmwareHash = exports.Entropy = exports.GetEntropy = exports.Cancel = exports.Ping = exports.SdProtect = exports.EnumSdProtectOperationType = exports.SdProtectOperationType = exports.ChangeWipeCode = void 0;
exports.StellarAllowTrustOp = exports.StellarChangeTrustOp = exports.StellarSetOptionsOp = exports.EnumStellarSignerType = exports.StellarSignerType = exports.StellarCreatePassiveSellOfferOp = exports.StellarManageBuyOfferOp = exports.StellarManageSellOfferOp = exports.StellarPathPaymentStrictSendOp = exports.StellarPathPaymentStrictReceiveOp = exports.StellarCreateAccountOp = exports.StellarPaymentOp = exports.StellarTxOpRequest = exports.StellarSignTx = exports.EnumStellarMemoType = exports.StellarMemoType = exports.StellarAddress = exports.StellarGetAddress = exports.StellarAsset = exports.EnumStellarAssetType = exports.StellarAssetType = exports.SolanaTxSignature = exports.SolanaSignTx = exports.SolanaTxAdditionalInfo = exports.SolanaTxTokenAccountInfo = exports.SolanaAddress = exports.SolanaGetAddress = exports.SolanaPublicKey = exports.SolanaGetPublicKey = exports.RippleSignedTx = exports.RippleSignTx = exports.RipplePayment = exports.RippleAddress = exports.RippleGetAddress = exports.NEMDecryptedMessage = exports.NEMDecryptMessage = exports.NEMSignedTx = exports.NEMSignTx = exports.NEMImportanceTransfer = exports.EnumNEMImportanceTransferMode = exports.NEMImportanceTransferMode = exports.NEMAggregateModification = exports.NEMCosignatoryModification = exports.EnumNEMModificationType = exports.NEMModificationType = exports.NEMMosaicSupplyChange = exports.EnumNEMSupplyChangeType = exports.NEMSupplyChangeType = exports.NEMMosaicCreation = exports.NEMMosaicDefinition = void 0;
exports.MessageType = exports.experimental_field = exports.experimental_message = exports.TezosSignedTx = exports.TezosSignTx = exports.TezosBallotOp = exports.EnumTezosBallotType = exports.TezosBallotType = exports.TezosProposalOp = exports.TezosDelegationOp = exports.TezosOriginationOp = exports.TezosTransactionOp = exports.TezosParametersManager = exports.TezosManagerTransfer = exports.TezosRevealOp = exports.TezosContractID = exports.EnumTezosContractType = exports.TezosContractType = exports.TezosPublicKey = exports.TezosGetPublicKey = exports.TezosAddress = exports.TezosGetAddress = exports.StellarSignedTx = exports.StellarBumpSequenceOp = exports.StellarManageDataOp = exports.StellarAccountMergeOp = void 0;
const schema_utils_1 = __webpack_require__(9406);
var DeviceModelInternal;
(function (DeviceModelInternal) {
  DeviceModelInternal["T1B1"] = "T1B1";
  DeviceModelInternal["T2T1"] = "T2T1";
  DeviceModelInternal["T2B1"] = "T2B1";
})(DeviceModelInternal || (exports.DeviceModelInternal = DeviceModelInternal = {}));
exports.EnumDeviceModelInternal = schema_utils_1.Type.Enum(DeviceModelInternal);
exports.BinanceGetAddress = schema_utils_1.Type.Object({
  address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
  show_display: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.BinanceAddress = schema_utils_1.Type.Object({
  address: schema_utils_1.Type.String()
});
exports.BinanceGetPublicKey = schema_utils_1.Type.Object({
  address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
  show_display: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.BinancePublicKey = schema_utils_1.Type.Object({
  public_key: schema_utils_1.Type.String()
});
exports.BinanceSignTx = schema_utils_1.Type.Object({
  address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
  msg_count: schema_utils_1.Type.Number(),
  account_number: schema_utils_1.Type.Number(),
  chain_id: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  memo: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  sequence: schema_utils_1.Type.Number(),
  source: schema_utils_1.Type.Number(),
  chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.BinanceTxRequest = schema_utils_1.Type.Object({});
exports.BinanceCoin = schema_utils_1.Type.Object({
  amount: schema_utils_1.Type.Uint(),
  denom: schema_utils_1.Type.String()
});
exports.BinanceInputOutput = schema_utils_1.Type.Object({
  address: schema_utils_1.Type.String(),
  coins: schema_utils_1.Type.Array(exports.BinanceCoin)
});
exports.BinanceTransferMsg = schema_utils_1.Type.Object({
  inputs: schema_utils_1.Type.Array(exports.BinanceInputOutput),
  outputs: schema_utils_1.Type.Array(exports.BinanceInputOutput),
  chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
var BinanceOrderType;
(function (BinanceOrderType) {
  BinanceOrderType[BinanceOrderType["OT_UNKNOWN"] = 0] = "OT_UNKNOWN";
  BinanceOrderType[BinanceOrderType["MARKET"] = 1] = "MARKET";
  BinanceOrderType[BinanceOrderType["LIMIT"] = 2] = "LIMIT";
  BinanceOrderType[BinanceOrderType["OT_RESERVED"] = 3] = "OT_RESERVED";
})(BinanceOrderType || (exports.BinanceOrderType = BinanceOrderType = {}));
exports.EnumBinanceOrderType = schema_utils_1.Type.Enum(BinanceOrderType);
var BinanceOrderSide;
(function (BinanceOrderSide) {
  BinanceOrderSide[BinanceOrderSide["SIDE_UNKNOWN"] = 0] = "SIDE_UNKNOWN";
  BinanceOrderSide[BinanceOrderSide["BUY"] = 1] = "BUY";
  BinanceOrderSide[BinanceOrderSide["SELL"] = 2] = "SELL";
})(BinanceOrderSide || (exports.BinanceOrderSide = BinanceOrderSide = {}));
exports.EnumBinanceOrderSide = schema_utils_1.Type.Enum(BinanceOrderSide);
var BinanceTimeInForce;
(function (BinanceTimeInForce) {
  BinanceTimeInForce[BinanceTimeInForce["TIF_UNKNOWN"] = 0] = "TIF_UNKNOWN";
  BinanceTimeInForce[BinanceTimeInForce["GTE"] = 1] = "GTE";
  BinanceTimeInForce[BinanceTimeInForce["TIF_RESERVED"] = 2] = "TIF_RESERVED";
  BinanceTimeInForce[BinanceTimeInForce["IOC"] = 3] = "IOC";
})(BinanceTimeInForce || (exports.BinanceTimeInForce = BinanceTimeInForce = {}));
exports.EnumBinanceTimeInForce = schema_utils_1.Type.Enum(BinanceTimeInForce);
exports.BinanceOrderMsg = schema_utils_1.Type.Object({
  id: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  ordertype: exports.EnumBinanceOrderType,
  price: schema_utils_1.Type.Number(),
  quantity: schema_utils_1.Type.Number(),
  sender: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  side: exports.EnumBinanceOrderSide,
  symbol: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  timeinforce: exports.EnumBinanceTimeInForce
});
exports.BinanceCancelMsg = schema_utils_1.Type.Object({
  refid: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  sender: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  symbol: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.BinanceSignedTx = schema_utils_1.Type.Object({
  signature: schema_utils_1.Type.String(),
  public_key: schema_utils_1.Type.String()
});
var Enum_InputScriptType;
(function (Enum_InputScriptType) {
  Enum_InputScriptType[Enum_InputScriptType["SPENDADDRESS"] = 0] = "SPENDADDRESS";
  Enum_InputScriptType[Enum_InputScriptType["SPENDMULTISIG"] = 1] = "SPENDMULTISIG";
  Enum_InputScriptType[Enum_InputScriptType["EXTERNAL"] = 2] = "EXTERNAL";
  Enum_InputScriptType[Enum_InputScriptType["SPENDWITNESS"] = 3] = "SPENDWITNESS";
  Enum_InputScriptType[Enum_InputScriptType["SPENDP2SHWITNESS"] = 4] = "SPENDP2SHWITNESS";
  Enum_InputScriptType[Enum_InputScriptType["SPENDTAPROOT"] = 5] = "SPENDTAPROOT";
})(Enum_InputScriptType || (exports.Enum_InputScriptType = Enum_InputScriptType = {}));
exports.EnumEnum_InputScriptType = schema_utils_1.Type.Enum(Enum_InputScriptType);
exports.InputScriptType = schema_utils_1.Type.KeyOfEnum(Enum_InputScriptType);
var Enum_OutputScriptType;
(function (Enum_OutputScriptType) {
  Enum_OutputScriptType[Enum_OutputScriptType["PAYTOADDRESS"] = 0] = "PAYTOADDRESS";
  Enum_OutputScriptType[Enum_OutputScriptType["PAYTOSCRIPTHASH"] = 1] = "PAYTOSCRIPTHASH";
  Enum_OutputScriptType[Enum_OutputScriptType["PAYTOMULTISIG"] = 2] = "PAYTOMULTISIG";
  Enum_OutputScriptType[Enum_OutputScriptType["PAYTOOPRETURN"] = 3] = "PAYTOOPRETURN";
  Enum_OutputScriptType[Enum_OutputScriptType["PAYTOWITNESS"] = 4] = "PAYTOWITNESS";
  Enum_OutputScriptType[Enum_OutputScriptType["PAYTOP2SHWITNESS"] = 5] = "PAYTOP2SHWITNESS";
  Enum_OutputScriptType[Enum_OutputScriptType["PAYTOTAPROOT"] = 6] = "PAYTOTAPROOT";
})(Enum_OutputScriptType || (exports.Enum_OutputScriptType = Enum_OutputScriptType = {}));
exports.EnumEnum_OutputScriptType = schema_utils_1.Type.Enum(Enum_OutputScriptType);
exports.OutputScriptType = schema_utils_1.Type.KeyOfEnum(Enum_OutputScriptType);
var DecredStakingSpendType;
(function (DecredStakingSpendType) {
  DecredStakingSpendType[DecredStakingSpendType["SSGen"] = 0] = "SSGen";
  DecredStakingSpendType[DecredStakingSpendType["SSRTX"] = 1] = "SSRTX";
})(DecredStakingSpendType || (exports.DecredStakingSpendType = DecredStakingSpendType = {}));
exports.EnumDecredStakingSpendType = schema_utils_1.Type.Enum(DecredStakingSpendType);
var AmountUnit;
(function (AmountUnit) {
  AmountUnit[AmountUnit["BITCOIN"] = 0] = "BITCOIN";
  AmountUnit[AmountUnit["MILLIBITCOIN"] = 1] = "MILLIBITCOIN";
  AmountUnit[AmountUnit["MICROBITCOIN"] = 2] = "MICROBITCOIN";
  AmountUnit[AmountUnit["SATOSHI"] = 3] = "SATOSHI";
})(AmountUnit || (exports.AmountUnit = AmountUnit = {}));
exports.EnumAmountUnit = schema_utils_1.Type.Enum(AmountUnit);
exports.HDNodeType = schema_utils_1.Type.Object({
  depth: schema_utils_1.Type.Number(),
  fingerprint: schema_utils_1.Type.Number(),
  child_num: schema_utils_1.Type.Number(),
  chain_code: schema_utils_1.Type.String(),
  private_key: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  public_key: schema_utils_1.Type.String()
});
exports.HDNodePathType = schema_utils_1.Type.Object({
  node: schema_utils_1.Type.Union([exports.HDNodeType, schema_utils_1.Type.String()]),
  address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number())
});
exports.MultisigRedeemScriptType = schema_utils_1.Type.Object({
  pubkeys: schema_utils_1.Type.Array(exports.HDNodePathType),
  signatures: schema_utils_1.Type.Array(schema_utils_1.Type.String()),
  m: schema_utils_1.Type.Number(),
  nodes: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports.HDNodeType)),
  address_n: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(schema_utils_1.Type.Number()))
});
exports.GetPublicKey = schema_utils_1.Type.Object({
  address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
  ecdsa_curve_name: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  show_display: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  coin_name: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  script_type: schema_utils_1.Type.Optional(exports.InputScriptType),
  ignore_xpub_magic: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.PublicKey = schema_utils_1.Type.Object({
  node: exports.HDNodeType,
  xpub: schema_utils_1.Type.String(),
  root_fingerprint: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
});
exports.GetAddress = schema_utils_1.Type.Object({
  address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
  coin_name: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  show_display: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  multisig: schema_utils_1.Type.Optional(exports.MultisigRedeemScriptType),
  script_type: schema_utils_1.Type.Optional(exports.InputScriptType),
  ignore_xpub_magic: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.Address = schema_utils_1.Type.Object({
  address: schema_utils_1.Type.String(),
  mac: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.GetOwnershipId = schema_utils_1.Type.Object({
  address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
  coin_name: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  multisig: schema_utils_1.Type.Optional(exports.MultisigRedeemScriptType),
  script_type: schema_utils_1.Type.Optional(exports.InputScriptType)
});
exports.OwnershipId = schema_utils_1.Type.Object({
  ownership_id: schema_utils_1.Type.String()
});
exports.SignMessage = schema_utils_1.Type.Object({
  address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
  message: schema_utils_1.Type.String(),
  coin_name: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  script_type: schema_utils_1.Type.Optional(exports.InputScriptType),
  no_script_type: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.MessageSignature = schema_utils_1.Type.Object({
  address: schema_utils_1.Type.String(),
  signature: schema_utils_1.Type.String()
});
exports.VerifyMessage = schema_utils_1.Type.Object({
  address: schema_utils_1.Type.String(),
  signature: schema_utils_1.Type.String(),
  message: schema_utils_1.Type.String(),
  coin_name: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.CoinJoinRequest = schema_utils_1.Type.Object({
  fee_rate: schema_utils_1.Type.Number(),
  no_fee_threshold: schema_utils_1.Type.Number(),
  min_registrable_amount: schema_utils_1.Type.Number(),
  mask_public_key: schema_utils_1.Type.String(),
  signature: schema_utils_1.Type.String()
});
exports.SignTx = schema_utils_1.Type.Object({
  outputs_count: schema_utils_1.Type.Number(),
  inputs_count: schema_utils_1.Type.Number(),
  coin_name: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  version: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  lock_time: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  expiry: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  overwintered: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  version_group_id: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  timestamp: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  branch_id: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  amount_unit: schema_utils_1.Type.Optional(exports.EnumAmountUnit),
  decred_staking_ticket: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  serialize: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  coinjoin_request: schema_utils_1.Type.Optional(exports.CoinJoinRequest),
  chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
var Enum_RequestType;
(function (Enum_RequestType) {
  Enum_RequestType[Enum_RequestType["TXINPUT"] = 0] = "TXINPUT";
  Enum_RequestType[Enum_RequestType["TXOUTPUT"] = 1] = "TXOUTPUT";
  Enum_RequestType[Enum_RequestType["TXMETA"] = 2] = "TXMETA";
  Enum_RequestType[Enum_RequestType["TXFINISHED"] = 3] = "TXFINISHED";
  Enum_RequestType[Enum_RequestType["TXEXTRADATA"] = 4] = "TXEXTRADATA";
  Enum_RequestType[Enum_RequestType["TXORIGINPUT"] = 5] = "TXORIGINPUT";
  Enum_RequestType[Enum_RequestType["TXORIGOUTPUT"] = 6] = "TXORIGOUTPUT";
  Enum_RequestType[Enum_RequestType["TXPAYMENTREQ"] = 7] = "TXPAYMENTREQ";
})(Enum_RequestType || (exports.Enum_RequestType = Enum_RequestType = {}));
exports.EnumEnum_RequestType = schema_utils_1.Type.Enum(Enum_RequestType);
exports.RequestType = schema_utils_1.Type.KeyOfEnum(Enum_RequestType);
exports.TxRequestDetailsType = schema_utils_1.Type.Object({
  request_index: schema_utils_1.Type.Number(),
  tx_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  extra_data_len: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  extra_data_offset: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
});
exports.TxRequestSerializedType = schema_utils_1.Type.Object({
  signature_index: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  signature: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  serialized_tx: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.TxRequest = schema_utils_1.Type.Object({
  request_type: exports.RequestType,
  details: exports.TxRequestDetailsType,
  serialized: schema_utils_1.Type.Optional(exports.TxRequestSerializedType)
});
exports.InternalInputScriptType = schema_utils_1.Type.Exclude(exports.InputScriptType, schema_utils_1.Type.Literal('EXTERNAL'));
const CommonTxInputType = schema_utils_1.Type.Object({
  prev_hash: schema_utils_1.Type.String(),
  prev_index: schema_utils_1.Type.Number(),
  amount: schema_utils_1.Type.Uint(),
  sequence: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  multisig: schema_utils_1.Type.Optional(exports.MultisigRedeemScriptType),
  decred_tree: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  orig_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  orig_index: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  decred_staking_spend: schema_utils_1.Type.Optional(exports.EnumDecredStakingSpendType),
  script_pubkey: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  coinjoin_flags: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  script_sig: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  witness: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  ownership_proof: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  commitment_data: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.TxInputType = schema_utils_1.Type.Union([schema_utils_1.Type.Intersect([CommonTxInputType, schema_utils_1.Type.Object({
  address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
  script_type: schema_utils_1.Type.Optional(exports.InternalInputScriptType)
})]), schema_utils_1.Type.Intersect([CommonTxInputType, schema_utils_1.Type.Object({
  address_n: schema_utils_1.Type.Optional(schema_utils_1.Type.Undefined()),
  script_type: schema_utils_1.Type.Literal('EXTERNAL'),
  script_pubkey: schema_utils_1.Type.String()
})])]);
exports.TxInput = exports.TxInputType;
exports.TxOutputBinType = schema_utils_1.Type.Object({
  amount: schema_utils_1.Type.Uint(),
  script_pubkey: schema_utils_1.Type.String(),
  decred_script_version: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
});
exports.ChangeOutputScriptType = schema_utils_1.Type.Exclude(exports.OutputScriptType, schema_utils_1.Type.Literal('PAYTOOPRETURN'));
exports.TxOutputType = schema_utils_1.Type.Union([schema_utils_1.Type.Object({
  address: schema_utils_1.Type.String(),
  address_n: schema_utils_1.Type.Optional(schema_utils_1.Type.Undefined()),
  script_type: schema_utils_1.Type.Literal('PAYTOADDRESS'),
  amount: schema_utils_1.Type.Uint(),
  multisig: schema_utils_1.Type.Optional(exports.MultisigRedeemScriptType),
  orig_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  orig_index: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  payment_req_index: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
}), schema_utils_1.Type.Object({
  address: schema_utils_1.Type.Optional(schema_utils_1.Type.Undefined()),
  address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
  script_type: schema_utils_1.Type.Optional(exports.ChangeOutputScriptType),
  amount: schema_utils_1.Type.Uint(),
  multisig: schema_utils_1.Type.Optional(exports.MultisigRedeemScriptType),
  orig_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  orig_index: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  payment_req_index: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
}), schema_utils_1.Type.Object({
  address: schema_utils_1.Type.String(),
  address_n: schema_utils_1.Type.Optional(schema_utils_1.Type.Undefined()),
  script_type: schema_utils_1.Type.Optional(exports.ChangeOutputScriptType),
  amount: schema_utils_1.Type.Uint(),
  multisig: schema_utils_1.Type.Optional(exports.MultisigRedeemScriptType),
  orig_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  orig_index: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  payment_req_index: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
}), schema_utils_1.Type.Object({
  address: schema_utils_1.Type.Optional(schema_utils_1.Type.Undefined()),
  address_n: schema_utils_1.Type.Optional(schema_utils_1.Type.Undefined()),
  amount: schema_utils_1.Type.Union([schema_utils_1.Type.Literal('0'), schema_utils_1.Type.Literal(0)]),
  op_return_data: schema_utils_1.Type.String(),
  script_type: schema_utils_1.Type.Literal('PAYTOOPRETURN'),
  orig_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  orig_index: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  payment_req_index: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
})]);
exports.TxOutput = exports.TxOutputType;
exports.PrevTx = schema_utils_1.Type.Object({
  version: schema_utils_1.Type.Number(),
  lock_time: schema_utils_1.Type.Number(),
  inputs_count: schema_utils_1.Type.Number(),
  outputs_count: schema_utils_1.Type.Number(),
  extra_data_len: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  expiry: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  version_group_id: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  timestamp: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  branch_id: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
});
exports.PrevInput = schema_utils_1.Type.Object({
  prev_hash: schema_utils_1.Type.String(),
  prev_index: schema_utils_1.Type.Number(),
  script_sig: schema_utils_1.Type.String(),
  sequence: schema_utils_1.Type.Number(),
  decred_tree: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
});
exports.PrevOutput = schema_utils_1.Type.Object({
  amount: schema_utils_1.Type.Uint(),
  script_pubkey: schema_utils_1.Type.String(),
  decred_script_version: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
});
exports.TextMemo = schema_utils_1.Type.Object({
  text: schema_utils_1.Type.String()
});
exports.RefundMemo = schema_utils_1.Type.Object({
  address: schema_utils_1.Type.String(),
  mac: schema_utils_1.Type.String()
});
exports.CoinPurchaseMemo = schema_utils_1.Type.Object({
  coin_type: schema_utils_1.Type.Number(),
  amount: schema_utils_1.Type.Uint(),
  address: schema_utils_1.Type.String(),
  mac: schema_utils_1.Type.String()
});
exports.PaymentRequestMemo = schema_utils_1.Type.Object({
  text_memo: schema_utils_1.Type.Optional(exports.TextMemo),
  refund_memo: schema_utils_1.Type.Optional(exports.RefundMemo),
  coin_purchase_memo: schema_utils_1.Type.Optional(exports.CoinPurchaseMemo)
});
exports.TxAckPaymentRequest = schema_utils_1.Type.Object({
  nonce: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  recipient_name: schema_utils_1.Type.String(),
  memos: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports.PaymentRequestMemo)),
  amount: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
  signature: schema_utils_1.Type.String()
});
exports.TxAckResponse = schema_utils_1.Type.Union([schema_utils_1.Type.Object({
  inputs: schema_utils_1.Type.Array(schema_utils_1.Type.Union([exports.TxInputType, exports.PrevInput]))
}), schema_utils_1.Type.Object({
  bin_outputs: schema_utils_1.Type.Array(exports.TxOutputBinType)
}), schema_utils_1.Type.Object({
  outputs: schema_utils_1.Type.Array(exports.TxOutputType)
}), schema_utils_1.Type.Object({
  extra_data: schema_utils_1.Type.String()
}), schema_utils_1.Type.Object({
  version: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  lock_time: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  inputs_cnt: schema_utils_1.Type.Number(),
  outputs_cnt: schema_utils_1.Type.Number(),
  extra_data: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  extra_data_len: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  timestamp: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  version_group_id: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  expiry: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  branch_id: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
})]);
exports.TxAck = schema_utils_1.Type.Object({
  tx: exports.TxAckResponse
});
exports.TxAckInputWrapper = schema_utils_1.Type.Object({
  input: exports.TxInput
});
exports.TxAckInput = schema_utils_1.Type.Object({
  tx: exports.TxAckInputWrapper
});
exports.TxAckOutputWrapper = schema_utils_1.Type.Object({
  output: exports.TxOutput
});
exports.TxAckOutput = schema_utils_1.Type.Object({
  tx: exports.TxAckOutputWrapper
});
exports.TxAckPrevMeta = schema_utils_1.Type.Object({
  tx: exports.PrevTx
});
exports.TxAckPrevInputWrapper = schema_utils_1.Type.Object({
  input: exports.PrevInput
});
exports.TxAckPrevInput = schema_utils_1.Type.Object({
  tx: exports.TxAckPrevInputWrapper
});
exports.TxAckPrevOutputWrapper = schema_utils_1.Type.Object({
  output: exports.PrevOutput
});
exports.TxAckPrevOutput = schema_utils_1.Type.Object({
  tx: exports.TxAckPrevOutputWrapper
});
exports.TxAckPrevExtraDataWrapper = schema_utils_1.Type.Object({
  extra_data_chunk: schema_utils_1.Type.String()
});
exports.TxAckPrevExtraData = schema_utils_1.Type.Object({
  tx: exports.TxAckPrevExtraDataWrapper
});
exports.GetOwnershipProof = schema_utils_1.Type.Object({
  address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
  coin_name: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  script_type: schema_utils_1.Type.Optional(exports.InputScriptType),
  multisig: schema_utils_1.Type.Optional(exports.MultisigRedeemScriptType),
  user_confirmation: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  ownership_ids: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(schema_utils_1.Type.String())),
  commitment_data: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.OwnershipProof = schema_utils_1.Type.Object({
  ownership_proof: schema_utils_1.Type.String(),
  signature: schema_utils_1.Type.String()
});
exports.AuthorizeCoinJoin = schema_utils_1.Type.Object({
  coordinator: schema_utils_1.Type.String(),
  max_rounds: schema_utils_1.Type.Number(),
  max_coordinator_fee_rate: schema_utils_1.Type.Number(),
  max_fee_per_kvbyte: schema_utils_1.Type.Number(),
  address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
  coin_name: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  script_type: schema_utils_1.Type.Optional(exports.InputScriptType),
  amount_unit: schema_utils_1.Type.Optional(exports.EnumAmountUnit)
});
exports.FirmwareErase = schema_utils_1.Type.Object({
  length: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
});
exports.FirmwareRequest = schema_utils_1.Type.Object({
  offset: schema_utils_1.Type.Number(),
  length: schema_utils_1.Type.Number()
});
exports.FirmwareUpload = schema_utils_1.Type.Object({
  payload: schema_utils_1.Type.Union([schema_utils_1.Type.Buffer(), schema_utils_1.Type.ArrayBuffer()]),
  hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.SelfTest = schema_utils_1.Type.Object({
  payload: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
var CardanoDerivationType;
(function (CardanoDerivationType) {
  CardanoDerivationType[CardanoDerivationType["LEDGER"] = 0] = "LEDGER";
  CardanoDerivationType[CardanoDerivationType["ICARUS"] = 1] = "ICARUS";
  CardanoDerivationType[CardanoDerivationType["ICARUS_TREZOR"] = 2] = "ICARUS_TREZOR";
})(CardanoDerivationType || (exports.CardanoDerivationType = CardanoDerivationType = {}));
exports.EnumCardanoDerivationType = schema_utils_1.Type.Enum(CardanoDerivationType);
var CardanoAddressType;
(function (CardanoAddressType) {
  CardanoAddressType[CardanoAddressType["BASE"] = 0] = "BASE";
  CardanoAddressType[CardanoAddressType["BASE_SCRIPT_KEY"] = 1] = "BASE_SCRIPT_KEY";
  CardanoAddressType[CardanoAddressType["BASE_KEY_SCRIPT"] = 2] = "BASE_KEY_SCRIPT";
  CardanoAddressType[CardanoAddressType["BASE_SCRIPT_SCRIPT"] = 3] = "BASE_SCRIPT_SCRIPT";
  CardanoAddressType[CardanoAddressType["POINTER"] = 4] = "POINTER";
  CardanoAddressType[CardanoAddressType["POINTER_SCRIPT"] = 5] = "POINTER_SCRIPT";
  CardanoAddressType[CardanoAddressType["ENTERPRISE"] = 6] = "ENTERPRISE";
  CardanoAddressType[CardanoAddressType["ENTERPRISE_SCRIPT"] = 7] = "ENTERPRISE_SCRIPT";
  CardanoAddressType[CardanoAddressType["BYRON"] = 8] = "BYRON";
  CardanoAddressType[CardanoAddressType["REWARD"] = 14] = "REWARD";
  CardanoAddressType[CardanoAddressType["REWARD_SCRIPT"] = 15] = "REWARD_SCRIPT";
})(CardanoAddressType || (exports.CardanoAddressType = CardanoAddressType = {}));
exports.EnumCardanoAddressType = schema_utils_1.Type.Enum(CardanoAddressType);
var CardanoNativeScriptType;
(function (CardanoNativeScriptType) {
  CardanoNativeScriptType[CardanoNativeScriptType["PUB_KEY"] = 0] = "PUB_KEY";
  CardanoNativeScriptType[CardanoNativeScriptType["ALL"] = 1] = "ALL";
  CardanoNativeScriptType[CardanoNativeScriptType["ANY"] = 2] = "ANY";
  CardanoNativeScriptType[CardanoNativeScriptType["N_OF_K"] = 3] = "N_OF_K";
  CardanoNativeScriptType[CardanoNativeScriptType["INVALID_BEFORE"] = 4] = "INVALID_BEFORE";
  CardanoNativeScriptType[CardanoNativeScriptType["INVALID_HEREAFTER"] = 5] = "INVALID_HEREAFTER";
})(CardanoNativeScriptType || (exports.CardanoNativeScriptType = CardanoNativeScriptType = {}));
exports.EnumCardanoNativeScriptType = schema_utils_1.Type.Enum(CardanoNativeScriptType);
var CardanoNativeScriptHashDisplayFormat;
(function (CardanoNativeScriptHashDisplayFormat) {
  CardanoNativeScriptHashDisplayFormat[CardanoNativeScriptHashDisplayFormat["HIDE"] = 0] = "HIDE";
  CardanoNativeScriptHashDisplayFormat[CardanoNativeScriptHashDisplayFormat["BECH32"] = 1] = "BECH32";
  CardanoNativeScriptHashDisplayFormat[CardanoNativeScriptHashDisplayFormat["POLICY_ID"] = 2] = "POLICY_ID";
})(CardanoNativeScriptHashDisplayFormat || (exports.CardanoNativeScriptHashDisplayFormat = CardanoNativeScriptHashDisplayFormat = {}));
exports.EnumCardanoNativeScriptHashDisplayFormat = schema_utils_1.Type.Enum(CardanoNativeScriptHashDisplayFormat);
var CardanoTxOutputSerializationFormat;
(function (CardanoTxOutputSerializationFormat) {
  CardanoTxOutputSerializationFormat[CardanoTxOutputSerializationFormat["ARRAY_LEGACY"] = 0] = "ARRAY_LEGACY";
  CardanoTxOutputSerializationFormat[CardanoTxOutputSerializationFormat["MAP_BABBAGE"] = 1] = "MAP_BABBAGE";
})(CardanoTxOutputSerializationFormat || (exports.CardanoTxOutputSerializationFormat = CardanoTxOutputSerializationFormat = {}));
exports.EnumCardanoTxOutputSerializationFormat = schema_utils_1.Type.Enum(CardanoTxOutputSerializationFormat);
var CardanoCertificateType;
(function (CardanoCertificateType) {
  CardanoCertificateType[CardanoCertificateType["STAKE_REGISTRATION"] = 0] = "STAKE_REGISTRATION";
  CardanoCertificateType[CardanoCertificateType["STAKE_DEREGISTRATION"] = 1] = "STAKE_DEREGISTRATION";
  CardanoCertificateType[CardanoCertificateType["STAKE_DELEGATION"] = 2] = "STAKE_DELEGATION";
  CardanoCertificateType[CardanoCertificateType["STAKE_POOL_REGISTRATION"] = 3] = "STAKE_POOL_REGISTRATION";
})(CardanoCertificateType || (exports.CardanoCertificateType = CardanoCertificateType = {}));
exports.EnumCardanoCertificateType = schema_utils_1.Type.Enum(CardanoCertificateType);
var CardanoPoolRelayType;
(function (CardanoPoolRelayType) {
  CardanoPoolRelayType[CardanoPoolRelayType["SINGLE_HOST_IP"] = 0] = "SINGLE_HOST_IP";
  CardanoPoolRelayType[CardanoPoolRelayType["SINGLE_HOST_NAME"] = 1] = "SINGLE_HOST_NAME";
  CardanoPoolRelayType[CardanoPoolRelayType["MULTIPLE_HOST_NAME"] = 2] = "MULTIPLE_HOST_NAME";
})(CardanoPoolRelayType || (exports.CardanoPoolRelayType = CardanoPoolRelayType = {}));
exports.EnumCardanoPoolRelayType = schema_utils_1.Type.Enum(CardanoPoolRelayType);
var CardanoTxAuxiliaryDataSupplementType;
(function (CardanoTxAuxiliaryDataSupplementType) {
  CardanoTxAuxiliaryDataSupplementType[CardanoTxAuxiliaryDataSupplementType["NONE"] = 0] = "NONE";
  CardanoTxAuxiliaryDataSupplementType[CardanoTxAuxiliaryDataSupplementType["CVOTE_REGISTRATION_SIGNATURE"] = 1] = "CVOTE_REGISTRATION_SIGNATURE";
})(CardanoTxAuxiliaryDataSupplementType || (exports.CardanoTxAuxiliaryDataSupplementType = CardanoTxAuxiliaryDataSupplementType = {}));
exports.EnumCardanoTxAuxiliaryDataSupplementType = schema_utils_1.Type.Enum(CardanoTxAuxiliaryDataSupplementType);
var CardanoCVoteRegistrationFormat;
(function (CardanoCVoteRegistrationFormat) {
  CardanoCVoteRegistrationFormat[CardanoCVoteRegistrationFormat["CIP15"] = 0] = "CIP15";
  CardanoCVoteRegistrationFormat[CardanoCVoteRegistrationFormat["CIP36"] = 1] = "CIP36";
})(CardanoCVoteRegistrationFormat || (exports.CardanoCVoteRegistrationFormat = CardanoCVoteRegistrationFormat = {}));
exports.EnumCardanoCVoteRegistrationFormat = schema_utils_1.Type.Enum(CardanoCVoteRegistrationFormat);
var CardanoTxSigningMode;
(function (CardanoTxSigningMode) {
  CardanoTxSigningMode[CardanoTxSigningMode["ORDINARY_TRANSACTION"] = 0] = "ORDINARY_TRANSACTION";
  CardanoTxSigningMode[CardanoTxSigningMode["POOL_REGISTRATION_AS_OWNER"] = 1] = "POOL_REGISTRATION_AS_OWNER";
  CardanoTxSigningMode[CardanoTxSigningMode["MULTISIG_TRANSACTION"] = 2] = "MULTISIG_TRANSACTION";
  CardanoTxSigningMode[CardanoTxSigningMode["PLUTUS_TRANSACTION"] = 3] = "PLUTUS_TRANSACTION";
})(CardanoTxSigningMode || (exports.CardanoTxSigningMode = CardanoTxSigningMode = {}));
exports.EnumCardanoTxSigningMode = schema_utils_1.Type.Enum(CardanoTxSigningMode);
var CardanoTxWitnessType;
(function (CardanoTxWitnessType) {
  CardanoTxWitnessType[CardanoTxWitnessType["BYRON_WITNESS"] = 0] = "BYRON_WITNESS";
  CardanoTxWitnessType[CardanoTxWitnessType["SHELLEY_WITNESS"] = 1] = "SHELLEY_WITNESS";
})(CardanoTxWitnessType || (exports.CardanoTxWitnessType = CardanoTxWitnessType = {}));
exports.EnumCardanoTxWitnessType = schema_utils_1.Type.Enum(CardanoTxWitnessType);
exports.CardanoBlockchainPointerType = schema_utils_1.Type.Object({
  block_index: schema_utils_1.Type.Number(),
  tx_index: schema_utils_1.Type.Number(),
  certificate_index: schema_utils_1.Type.Number()
});
exports.CardanoNativeScript = schema_utils_1.Type.Recursive(This => schema_utils_1.Type.Object({
  type: exports.EnumCardanoNativeScriptType,
  scripts: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(This)),
  key_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  key_path: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(schema_utils_1.Type.Number())),
  required_signatures_count: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  invalid_before: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
  invalid_hereafter: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint())
}));
exports.CardanoGetNativeScriptHash = schema_utils_1.Type.Object({
  script: exports.CardanoNativeScript,
  display_format: exports.EnumCardanoNativeScriptHashDisplayFormat,
  derivation_type: exports.EnumCardanoDerivationType
});
exports.CardanoNativeScriptHash = schema_utils_1.Type.Object({
  script_hash: schema_utils_1.Type.String()
});
exports.CardanoAddressParametersType = schema_utils_1.Type.Object({
  address_type: exports.EnumCardanoAddressType,
  address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
  address_n_staking: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
  staking_key_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  certificate_pointer: schema_utils_1.Type.Optional(exports.CardanoBlockchainPointerType),
  script_payment_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  script_staking_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.CardanoGetAddress = schema_utils_1.Type.Object({
  show_display: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  protocol_magic: schema_utils_1.Type.Number(),
  network_id: schema_utils_1.Type.Number(),
  address_parameters: exports.CardanoAddressParametersType,
  derivation_type: exports.EnumCardanoDerivationType,
  chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.CardanoAddress = schema_utils_1.Type.Object({
  address: schema_utils_1.Type.String()
});
exports.CardanoGetPublicKey = schema_utils_1.Type.Object({
  address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
  show_display: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  derivation_type: exports.EnumCardanoDerivationType
});
exports.CardanoPublicKey = schema_utils_1.Type.Object({
  xpub: schema_utils_1.Type.String(),
  node: exports.HDNodeType
});
exports.CardanoSignTxInit = schema_utils_1.Type.Object({
  signing_mode: exports.EnumCardanoTxSigningMode,
  protocol_magic: schema_utils_1.Type.Number(),
  network_id: schema_utils_1.Type.Number(),
  inputs_count: schema_utils_1.Type.Number(),
  outputs_count: schema_utils_1.Type.Number(),
  fee: schema_utils_1.Type.Uint(),
  ttl: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
  certificates_count: schema_utils_1.Type.Number(),
  withdrawals_count: schema_utils_1.Type.Number(),
  has_auxiliary_data: schema_utils_1.Type.Boolean(),
  validity_interval_start: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
  witness_requests_count: schema_utils_1.Type.Number(),
  minting_asset_groups_count: schema_utils_1.Type.Number(),
  derivation_type: exports.EnumCardanoDerivationType,
  include_network_id: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  script_data_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  collateral_inputs_count: schema_utils_1.Type.Number(),
  required_signers_count: schema_utils_1.Type.Number(),
  has_collateral_return: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  total_collateral: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
  reference_inputs_count: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.CardanoTxInput = schema_utils_1.Type.Object({
  prev_hash: schema_utils_1.Type.String(),
  prev_index: schema_utils_1.Type.Number()
});
exports.CardanoTxOutput = schema_utils_1.Type.Object({
  address: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  address_parameters: schema_utils_1.Type.Optional(exports.CardanoAddressParametersType),
  amount: schema_utils_1.Type.Uint(),
  asset_groups_count: schema_utils_1.Type.Number(),
  datum_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  format: schema_utils_1.Type.Optional(exports.EnumCardanoTxOutputSerializationFormat),
  inline_datum_size: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  reference_script_size: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
});
exports.CardanoAssetGroup = schema_utils_1.Type.Object({
  policy_id: schema_utils_1.Type.String(),
  tokens_count: schema_utils_1.Type.Number()
});
exports.CardanoToken = schema_utils_1.Type.Object({
  asset_name_bytes: schema_utils_1.Type.String(),
  amount: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
  mint_amount: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint({
    allowNegative: true
  }))
});
exports.CardanoTxInlineDatumChunk = schema_utils_1.Type.Object({
  data: schema_utils_1.Type.String()
});
exports.CardanoTxReferenceScriptChunk = schema_utils_1.Type.Object({
  data: schema_utils_1.Type.String()
});
exports.CardanoPoolOwner = schema_utils_1.Type.Object({
  staking_key_path: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(schema_utils_1.Type.Number())),
  staking_key_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.CardanoPoolRelayParameters = schema_utils_1.Type.Object({
  type: exports.EnumCardanoPoolRelayType,
  ipv4_address: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  ipv6_address: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  host_name: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  port: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
});
exports.CardanoPoolMetadataType = schema_utils_1.Type.Object({
  url: schema_utils_1.Type.String(),
  hash: schema_utils_1.Type.String()
});
exports.CardanoPoolParametersType = schema_utils_1.Type.Object({
  pool_id: schema_utils_1.Type.String(),
  vrf_key_hash: schema_utils_1.Type.String(),
  pledge: schema_utils_1.Type.Uint(),
  cost: schema_utils_1.Type.Uint(),
  margin_numerator: schema_utils_1.Type.Uint(),
  margin_denominator: schema_utils_1.Type.Uint(),
  reward_account: schema_utils_1.Type.String(),
  metadata: schema_utils_1.Type.Optional(exports.CardanoPoolMetadataType),
  owners_count: schema_utils_1.Type.Number(),
  relays_count: schema_utils_1.Type.Number()
});
exports.CardanoTxCertificate = schema_utils_1.Type.Object({
  type: exports.EnumCardanoCertificateType,
  path: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(schema_utils_1.Type.Number())),
  pool: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  pool_parameters: schema_utils_1.Type.Optional(exports.CardanoPoolParametersType),
  script_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  key_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.CardanoTxWithdrawal = schema_utils_1.Type.Object({
  path: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(schema_utils_1.Type.Number())),
  amount: schema_utils_1.Type.Uint(),
  script_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  key_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.CardanoCVoteRegistrationDelegation = schema_utils_1.Type.Object({
  vote_public_key: schema_utils_1.Type.String(),
  weight: schema_utils_1.Type.Uint()
});
exports.CardanoCVoteRegistrationParametersType = schema_utils_1.Type.Object({
  vote_public_key: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  staking_path: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
  payment_address_parameters: schema_utils_1.Type.Optional(exports.CardanoAddressParametersType),
  nonce: schema_utils_1.Type.Uint(),
  format: schema_utils_1.Type.Optional(exports.EnumCardanoCVoteRegistrationFormat),
  delegations: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports.CardanoCVoteRegistrationDelegation)),
  voting_purpose: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
  payment_address: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.CardanoTxAuxiliaryData = schema_utils_1.Type.Object({
  cvote_registration_parameters: schema_utils_1.Type.Optional(exports.CardanoCVoteRegistrationParametersType),
  hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.CardanoTxMint = schema_utils_1.Type.Object({
  asset_groups_count: schema_utils_1.Type.Number()
});
exports.CardanoTxCollateralInput = schema_utils_1.Type.Object({
  prev_hash: schema_utils_1.Type.String(),
  prev_index: schema_utils_1.Type.Number()
});
exports.CardanoTxRequiredSigner = schema_utils_1.Type.Object({
  key_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  key_path: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(schema_utils_1.Type.Number()))
});
exports.CardanoTxReferenceInput = schema_utils_1.Type.Object({
  prev_hash: schema_utils_1.Type.String(),
  prev_index: schema_utils_1.Type.Number()
});
exports.CardanoTxItemAck = schema_utils_1.Type.Object({});
exports.CardanoTxAuxiliaryDataSupplement = schema_utils_1.Type.Object({
  type: exports.EnumCardanoTxAuxiliaryDataSupplementType,
  auxiliary_data_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  cvote_registration_signature: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.CardanoTxWitnessRequest = schema_utils_1.Type.Object({
  path: schema_utils_1.Type.Array(schema_utils_1.Type.Number())
});
exports.CardanoTxWitnessResponse = schema_utils_1.Type.Object({
  type: exports.EnumCardanoTxWitnessType,
  pub_key: schema_utils_1.Type.String(),
  signature: schema_utils_1.Type.String(),
  chain_code: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.CardanoTxHostAck = schema_utils_1.Type.Object({});
exports.CardanoTxBodyHash = schema_utils_1.Type.Object({
  tx_hash: schema_utils_1.Type.String()
});
exports.CardanoSignTxFinished = schema_utils_1.Type.Object({});
exports.Success = schema_utils_1.Type.Object({
  message: schema_utils_1.Type.String()
});
var FailureType;
(function (FailureType) {
  FailureType[FailureType["Failure_UnexpectedMessage"] = 1] = "Failure_UnexpectedMessage";
  FailureType[FailureType["Failure_ButtonExpected"] = 2] = "Failure_ButtonExpected";
  FailureType[FailureType["Failure_DataError"] = 3] = "Failure_DataError";
  FailureType[FailureType["Failure_ActionCancelled"] = 4] = "Failure_ActionCancelled";
  FailureType[FailureType["Failure_PinExpected"] = 5] = "Failure_PinExpected";
  FailureType[FailureType["Failure_PinCancelled"] = 6] = "Failure_PinCancelled";
  FailureType[FailureType["Failure_PinInvalid"] = 7] = "Failure_PinInvalid";
  FailureType[FailureType["Failure_InvalidSignature"] = 8] = "Failure_InvalidSignature";
  FailureType[FailureType["Failure_ProcessError"] = 9] = "Failure_ProcessError";
  FailureType[FailureType["Failure_NotEnoughFunds"] = 10] = "Failure_NotEnoughFunds";
  FailureType[FailureType["Failure_NotInitialized"] = 11] = "Failure_NotInitialized";
  FailureType[FailureType["Failure_PinMismatch"] = 12] = "Failure_PinMismatch";
  FailureType[FailureType["Failure_WipeCodeMismatch"] = 13] = "Failure_WipeCodeMismatch";
  FailureType[FailureType["Failure_InvalidSession"] = 14] = "Failure_InvalidSession";
  FailureType[FailureType["Failure_FirmwareError"] = 99] = "Failure_FirmwareError";
})(FailureType || (exports.FailureType = FailureType = {}));
exports.EnumFailureType = schema_utils_1.Type.Enum(FailureType);
exports.Failure = schema_utils_1.Type.Object({
  code: schema_utils_1.Type.Optional(exports.EnumFailureType),
  message: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
var Enum_ButtonRequestType;
(function (Enum_ButtonRequestType) {
  Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_Other"] = 1] = "ButtonRequest_Other";
  Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_FeeOverThreshold"] = 2] = "ButtonRequest_FeeOverThreshold";
  Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_ConfirmOutput"] = 3] = "ButtonRequest_ConfirmOutput";
  Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_ResetDevice"] = 4] = "ButtonRequest_ResetDevice";
  Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_ConfirmWord"] = 5] = "ButtonRequest_ConfirmWord";
  Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_WipeDevice"] = 6] = "ButtonRequest_WipeDevice";
  Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_ProtectCall"] = 7] = "ButtonRequest_ProtectCall";
  Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_SignTx"] = 8] = "ButtonRequest_SignTx";
  Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_FirmwareCheck"] = 9] = "ButtonRequest_FirmwareCheck";
  Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_Address"] = 10] = "ButtonRequest_Address";
  Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_PublicKey"] = 11] = "ButtonRequest_PublicKey";
  Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_MnemonicWordCount"] = 12] = "ButtonRequest_MnemonicWordCount";
  Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_MnemonicInput"] = 13] = "ButtonRequest_MnemonicInput";
  Enum_ButtonRequestType[Enum_ButtonRequestType["_Deprecated_ButtonRequest_PassphraseType"] = 14] = "_Deprecated_ButtonRequest_PassphraseType";
  Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_UnknownDerivationPath"] = 15] = "ButtonRequest_UnknownDerivationPath";
  Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_RecoveryHomepage"] = 16] = "ButtonRequest_RecoveryHomepage";
  Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_Success"] = 17] = "ButtonRequest_Success";
  Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_Warning"] = 18] = "ButtonRequest_Warning";
  Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_PassphraseEntry"] = 19] = "ButtonRequest_PassphraseEntry";
  Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_PinEntry"] = 20] = "ButtonRequest_PinEntry";
})(Enum_ButtonRequestType || (exports.Enum_ButtonRequestType = Enum_ButtonRequestType = {}));
exports.EnumEnum_ButtonRequestType = schema_utils_1.Type.Enum(Enum_ButtonRequestType);
exports.ButtonRequestType = schema_utils_1.Type.KeyOfEnum(Enum_ButtonRequestType);
exports.ButtonRequest = schema_utils_1.Type.Object({
  code: schema_utils_1.Type.Optional(exports.ButtonRequestType),
  pages: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
});
exports.ButtonAck = schema_utils_1.Type.Object({});
var Enum_PinMatrixRequestType;
(function (Enum_PinMatrixRequestType) {
  Enum_PinMatrixRequestType[Enum_PinMatrixRequestType["PinMatrixRequestType_Current"] = 1] = "PinMatrixRequestType_Current";
  Enum_PinMatrixRequestType[Enum_PinMatrixRequestType["PinMatrixRequestType_NewFirst"] = 2] = "PinMatrixRequestType_NewFirst";
  Enum_PinMatrixRequestType[Enum_PinMatrixRequestType["PinMatrixRequestType_NewSecond"] = 3] = "PinMatrixRequestType_NewSecond";
  Enum_PinMatrixRequestType[Enum_PinMatrixRequestType["PinMatrixRequestType_WipeCodeFirst"] = 4] = "PinMatrixRequestType_WipeCodeFirst";
  Enum_PinMatrixRequestType[Enum_PinMatrixRequestType["PinMatrixRequestType_WipeCodeSecond"] = 5] = "PinMatrixRequestType_WipeCodeSecond";
})(Enum_PinMatrixRequestType || (exports.Enum_PinMatrixRequestType = Enum_PinMatrixRequestType = {}));
exports.EnumEnum_PinMatrixRequestType = schema_utils_1.Type.Enum(Enum_PinMatrixRequestType);
exports.PinMatrixRequestType = schema_utils_1.Type.KeyOfEnum(Enum_PinMatrixRequestType);
exports.PinMatrixRequest = schema_utils_1.Type.Object({
  type: schema_utils_1.Type.Optional(exports.PinMatrixRequestType)
});
exports.PinMatrixAck = schema_utils_1.Type.Object({
  pin: schema_utils_1.Type.String()
});
exports.PassphraseRequest = schema_utils_1.Type.Object({
  _on_device: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.PassphraseAck = schema_utils_1.Type.Object({
  passphrase: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  _state: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  on_device: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.Deprecated_PassphraseStateRequest = schema_utils_1.Type.Object({
  state: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.Deprecated_PassphraseStateAck = schema_utils_1.Type.Object({});
exports.CipherKeyValue = schema_utils_1.Type.Object({
  address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
  key: schema_utils_1.Type.String(),
  value: schema_utils_1.Type.String(),
  encrypt: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  ask_on_encrypt: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  ask_on_decrypt: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  iv: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.CipheredKeyValue = schema_utils_1.Type.Object({
  value: schema_utils_1.Type.String()
});
exports.IdentityType = schema_utils_1.Type.Object({
  proto: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  user: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  host: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  port: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  path: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  index: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
});
exports.SignIdentity = schema_utils_1.Type.Object({
  identity: exports.IdentityType,
  challenge_hidden: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  challenge_visual: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  ecdsa_curve_name: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.SignedIdentity = schema_utils_1.Type.Object({
  address: schema_utils_1.Type.String(),
  public_key: schema_utils_1.Type.String(),
  signature: schema_utils_1.Type.String()
});
exports.GetECDHSessionKey = schema_utils_1.Type.Object({
  identity: exports.IdentityType,
  peer_public_key: schema_utils_1.Type.String(),
  ecdsa_curve_name: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.ECDHSessionKey = schema_utils_1.Type.Object({
  session_key: schema_utils_1.Type.String(),
  public_key: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
var DebugButton;
(function (DebugButton) {
  DebugButton[DebugButton["NO"] = 0] = "NO";
  DebugButton[DebugButton["YES"] = 1] = "YES";
  DebugButton[DebugButton["INFO"] = 2] = "INFO";
})(DebugButton || (exports.DebugButton = DebugButton = {}));
exports.EnumDebugButton = schema_utils_1.Type.Enum(DebugButton);
var DebugPhysicalButton;
(function (DebugPhysicalButton) {
  DebugPhysicalButton[DebugPhysicalButton["LEFT_BTN"] = 0] = "LEFT_BTN";
  DebugPhysicalButton[DebugPhysicalButton["MIDDLE_BTN"] = 1] = "MIDDLE_BTN";
  DebugPhysicalButton[DebugPhysicalButton["RIGHT_BTN"] = 2] = "RIGHT_BTN";
})(DebugPhysicalButton || (exports.DebugPhysicalButton = DebugPhysicalButton = {}));
exports.EnumDebugPhysicalButton = schema_utils_1.Type.Enum(DebugPhysicalButton);
exports.DebugLinkResetDebugEvents = schema_utils_1.Type.Object({});
exports.EosGetPublicKey = schema_utils_1.Type.Object({
  address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
  show_display: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.EosPublicKey = schema_utils_1.Type.Object({
  wif_public_key: schema_utils_1.Type.String(),
  raw_public_key: schema_utils_1.Type.String()
});
exports.EosTxHeader = schema_utils_1.Type.Object({
  expiration: schema_utils_1.Type.Number(),
  ref_block_num: schema_utils_1.Type.Number(),
  ref_block_prefix: schema_utils_1.Type.Number(),
  max_net_usage_words: schema_utils_1.Type.Number(),
  max_cpu_usage_ms: schema_utils_1.Type.Number(),
  delay_sec: schema_utils_1.Type.Number()
});
exports.EosSignTx = schema_utils_1.Type.Object({
  address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
  chain_id: schema_utils_1.Type.String(),
  header: exports.EosTxHeader,
  num_actions: schema_utils_1.Type.Number(),
  chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.EosTxActionRequest = schema_utils_1.Type.Object({
  data_size: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
});
exports.EosAsset = schema_utils_1.Type.Object({
  amount: schema_utils_1.Type.Uint(),
  symbol: schema_utils_1.Type.String()
});
exports.EosPermissionLevel = schema_utils_1.Type.Object({
  actor: schema_utils_1.Type.String(),
  permission: schema_utils_1.Type.String()
});
exports.EosAuthorizationKey = schema_utils_1.Type.Object({
  type: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  key: schema_utils_1.Type.String(),
  address_n: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(schema_utils_1.Type.Number())),
  weight: schema_utils_1.Type.Number()
});
exports.EosAuthorizationAccount = schema_utils_1.Type.Object({
  account: exports.EosPermissionLevel,
  weight: schema_utils_1.Type.Number()
});
exports.EosAuthorizationWait = schema_utils_1.Type.Object({
  wait_sec: schema_utils_1.Type.Number(),
  weight: schema_utils_1.Type.Number()
});
exports.EosAuthorization = schema_utils_1.Type.Object({
  threshold: schema_utils_1.Type.Number(),
  keys: schema_utils_1.Type.Array(exports.EosAuthorizationKey),
  accounts: schema_utils_1.Type.Array(exports.EosAuthorizationAccount),
  waits: schema_utils_1.Type.Array(exports.EosAuthorizationWait)
});
exports.EosActionCommon = schema_utils_1.Type.Object({
  account: schema_utils_1.Type.String(),
  name: schema_utils_1.Type.String(),
  authorization: schema_utils_1.Type.Array(exports.EosPermissionLevel)
});
exports.EosActionTransfer = schema_utils_1.Type.Object({
  sender: schema_utils_1.Type.String(),
  receiver: schema_utils_1.Type.String(),
  quantity: exports.EosAsset,
  memo: schema_utils_1.Type.String()
});
exports.EosActionDelegate = schema_utils_1.Type.Object({
  sender: schema_utils_1.Type.String(),
  receiver: schema_utils_1.Type.String(),
  net_quantity: exports.EosAsset,
  cpu_quantity: exports.EosAsset,
  transfer: schema_utils_1.Type.Boolean()
});
exports.EosActionUndelegate = schema_utils_1.Type.Object({
  sender: schema_utils_1.Type.String(),
  receiver: schema_utils_1.Type.String(),
  net_quantity: exports.EosAsset,
  cpu_quantity: exports.EosAsset
});
exports.EosActionRefund = schema_utils_1.Type.Object({
  owner: schema_utils_1.Type.String()
});
exports.EosActionBuyRam = schema_utils_1.Type.Object({
  payer: schema_utils_1.Type.String(),
  receiver: schema_utils_1.Type.String(),
  quantity: exports.EosAsset
});
exports.EosActionBuyRamBytes = schema_utils_1.Type.Object({
  payer: schema_utils_1.Type.String(),
  receiver: schema_utils_1.Type.String(),
  bytes: schema_utils_1.Type.Number()
});
exports.EosActionSellRam = schema_utils_1.Type.Object({
  account: schema_utils_1.Type.String(),
  bytes: schema_utils_1.Type.Number()
});
exports.EosActionVoteProducer = schema_utils_1.Type.Object({
  voter: schema_utils_1.Type.String(),
  proxy: schema_utils_1.Type.String(),
  producers: schema_utils_1.Type.Array(schema_utils_1.Type.String())
});
exports.EosActionUpdateAuth = schema_utils_1.Type.Object({
  account: schema_utils_1.Type.String(),
  permission: schema_utils_1.Type.String(),
  parent: schema_utils_1.Type.String(),
  auth: exports.EosAuthorization
});
exports.EosActionDeleteAuth = schema_utils_1.Type.Object({
  account: schema_utils_1.Type.String(),
  permission: schema_utils_1.Type.String()
});
exports.EosActionLinkAuth = schema_utils_1.Type.Object({
  account: schema_utils_1.Type.String(),
  code: schema_utils_1.Type.String(),
  type: schema_utils_1.Type.String(),
  requirement: schema_utils_1.Type.String()
});
exports.EosActionUnlinkAuth = schema_utils_1.Type.Object({
  account: schema_utils_1.Type.String(),
  code: schema_utils_1.Type.String(),
  type: schema_utils_1.Type.String()
});
exports.EosActionNewAccount = schema_utils_1.Type.Object({
  creator: schema_utils_1.Type.String(),
  name: schema_utils_1.Type.String(),
  owner: exports.EosAuthorization,
  active: exports.EosAuthorization
});
exports.EosActionUnknown = schema_utils_1.Type.Object({
  data_size: schema_utils_1.Type.Number(),
  data_chunk: schema_utils_1.Type.String()
});
exports.EosTxActionAck = schema_utils_1.Type.Object({
  common: exports.EosActionCommon,
  transfer: schema_utils_1.Type.Optional(exports.EosActionTransfer),
  delegate: schema_utils_1.Type.Optional(exports.EosActionDelegate),
  undelegate: schema_utils_1.Type.Optional(exports.EosActionUndelegate),
  refund: schema_utils_1.Type.Optional(exports.EosActionRefund),
  buy_ram: schema_utils_1.Type.Optional(exports.EosActionBuyRam),
  buy_ram_bytes: schema_utils_1.Type.Optional(exports.EosActionBuyRamBytes),
  sell_ram: schema_utils_1.Type.Optional(exports.EosActionSellRam),
  vote_producer: schema_utils_1.Type.Optional(exports.EosActionVoteProducer),
  update_auth: schema_utils_1.Type.Optional(exports.EosActionUpdateAuth),
  delete_auth: schema_utils_1.Type.Optional(exports.EosActionDeleteAuth),
  link_auth: schema_utils_1.Type.Optional(exports.EosActionLinkAuth),
  unlink_auth: schema_utils_1.Type.Optional(exports.EosActionUnlinkAuth),
  new_account: schema_utils_1.Type.Optional(exports.EosActionNewAccount),
  unknown: schema_utils_1.Type.Optional(exports.EosActionUnknown)
});
exports.EosSignedTx = schema_utils_1.Type.Object({
  signature: schema_utils_1.Type.String()
});
var EthereumDefinitionType;
(function (EthereumDefinitionType) {
  EthereumDefinitionType[EthereumDefinitionType["NETWORK"] = 0] = "NETWORK";
  EthereumDefinitionType[EthereumDefinitionType["TOKEN"] = 1] = "TOKEN";
})(EthereumDefinitionType || (exports.EthereumDefinitionType = EthereumDefinitionType = {}));
exports.EnumEthereumDefinitionType = schema_utils_1.Type.Enum(EthereumDefinitionType);
exports.EthereumNetworkInfo = schema_utils_1.Type.Object({
  chain_id: schema_utils_1.Type.Number(),
  symbol: schema_utils_1.Type.String(),
  slip44: schema_utils_1.Type.Number(),
  name: schema_utils_1.Type.String()
});
exports.EthereumTokenInfo = schema_utils_1.Type.Object({
  address: schema_utils_1.Type.String(),
  chain_id: schema_utils_1.Type.Number(),
  symbol: schema_utils_1.Type.String(),
  decimals: schema_utils_1.Type.Number(),
  name: schema_utils_1.Type.String()
});
exports.EthereumDefinitions = schema_utils_1.Type.Object({
  encoded_network: schema_utils_1.Type.Optional(schema_utils_1.Type.ArrayBuffer()),
  encoded_token: schema_utils_1.Type.Optional(schema_utils_1.Type.ArrayBuffer())
});
exports.EthereumSignTypedData = schema_utils_1.Type.Object({
  address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
  primary_type: schema_utils_1.Type.String(),
  metamask_v4_compat: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  definitions: schema_utils_1.Type.Optional(exports.EthereumDefinitions)
});
exports.EthereumTypedDataStructRequest = schema_utils_1.Type.Object({
  name: schema_utils_1.Type.String()
});
var EthereumDataType;
(function (EthereumDataType) {
  EthereumDataType[EthereumDataType["UINT"] = 1] = "UINT";
  EthereumDataType[EthereumDataType["INT"] = 2] = "INT";
  EthereumDataType[EthereumDataType["BYTES"] = 3] = "BYTES";
  EthereumDataType[EthereumDataType["STRING"] = 4] = "STRING";
  EthereumDataType[EthereumDataType["BOOL"] = 5] = "BOOL";
  EthereumDataType[EthereumDataType["ADDRESS"] = 6] = "ADDRESS";
  EthereumDataType[EthereumDataType["ARRAY"] = 7] = "ARRAY";
  EthereumDataType[EthereumDataType["STRUCT"] = 8] = "STRUCT";
})(EthereumDataType || (exports.EthereumDataType = EthereumDataType = {}));
exports.EnumEthereumDataType = schema_utils_1.Type.Enum(EthereumDataType);
exports.EthereumFieldType = schema_utils_1.Type.Recursive(This => schema_utils_1.Type.Object({
  data_type: exports.EnumEthereumDataType,
  size: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  entry_type: schema_utils_1.Type.Optional(This),
  struct_name: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
}));
exports.EthereumStructMember = schema_utils_1.Type.Object({
  type: exports.EthereumFieldType,
  name: schema_utils_1.Type.String()
});
exports.EthereumTypedDataStructAck = schema_utils_1.Type.Object({
  members: schema_utils_1.Type.Array(exports.EthereumStructMember)
});
exports.EthereumTypedDataValueRequest = schema_utils_1.Type.Object({
  member_path: schema_utils_1.Type.Array(schema_utils_1.Type.Number())
});
exports.EthereumTypedDataValueAck = schema_utils_1.Type.Object({
  value: schema_utils_1.Type.String()
});
exports.EthereumGetPublicKey = schema_utils_1.Type.Object({
  address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
  show_display: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.EthereumPublicKey = schema_utils_1.Type.Object({
  node: exports.HDNodeType,
  xpub: schema_utils_1.Type.String()
});
exports.EthereumGetAddress = schema_utils_1.Type.Object({
  address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
  show_display: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  encoded_network: schema_utils_1.Type.Optional(schema_utils_1.Type.ArrayBuffer()),
  chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.EthereumAddress = schema_utils_1.Type.Object({
  _old_address: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  address: schema_utils_1.Type.String()
});
exports.EthereumSignTx = schema_utils_1.Type.Object({
  address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
  nonce: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  gas_price: schema_utils_1.Type.String(),
  gas_limit: schema_utils_1.Type.String(),
  to: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  value: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  data_initial_chunk: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  data_length: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  chain_id: schema_utils_1.Type.Number(),
  tx_type: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  definitions: schema_utils_1.Type.Optional(exports.EthereumDefinitions),
  chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.EthereumAccessList = schema_utils_1.Type.Object({
  address: schema_utils_1.Type.String(),
  storage_keys: schema_utils_1.Type.Array(schema_utils_1.Type.String())
});
exports.EthereumSignTxEIP1559 = schema_utils_1.Type.Object({
  address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
  nonce: schema_utils_1.Type.String(),
  max_gas_fee: schema_utils_1.Type.String(),
  max_priority_fee: schema_utils_1.Type.String(),
  gas_limit: schema_utils_1.Type.String(),
  to: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  value: schema_utils_1.Type.String(),
  data_initial_chunk: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  data_length: schema_utils_1.Type.Number(),
  chain_id: schema_utils_1.Type.Number(),
  access_list: schema_utils_1.Type.Array(exports.EthereumAccessList),
  definitions: schema_utils_1.Type.Optional(exports.EthereumDefinitions),
  chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.EthereumTxRequest = schema_utils_1.Type.Object({
  data_length: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  signature_v: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  signature_r: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  signature_s: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.EthereumTxAck = schema_utils_1.Type.Object({
  data_chunk: schema_utils_1.Type.String()
});
exports.EthereumSignMessage = schema_utils_1.Type.Object({
  address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
  message: schema_utils_1.Type.String(),
  encoded_network: schema_utils_1.Type.Optional(schema_utils_1.Type.ArrayBuffer()),
  chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.EthereumMessageSignature = schema_utils_1.Type.Object({
  signature: schema_utils_1.Type.String(),
  address: schema_utils_1.Type.String()
});
exports.EthereumVerifyMessage = schema_utils_1.Type.Object({
  signature: schema_utils_1.Type.String(),
  message: schema_utils_1.Type.String(),
  address: schema_utils_1.Type.String(),
  chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.EthereumSignTypedHash = schema_utils_1.Type.Object({
  address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
  domain_separator_hash: schema_utils_1.Type.String(),
  message_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  encoded_network: schema_utils_1.Type.Optional(schema_utils_1.Type.ArrayBuffer())
});
exports.EthereumTypedDataSignature = schema_utils_1.Type.Object({
  signature: schema_utils_1.Type.String(),
  address: schema_utils_1.Type.String()
});
var Enum_BackupType;
(function (Enum_BackupType) {
  Enum_BackupType[Enum_BackupType["Bip39"] = 0] = "Bip39";
  Enum_BackupType[Enum_BackupType["Slip39_Basic"] = 1] = "Slip39_Basic";
  Enum_BackupType[Enum_BackupType["Slip39_Advanced"] = 2] = "Slip39_Advanced";
})(Enum_BackupType || (exports.Enum_BackupType = Enum_BackupType = {}));
exports.EnumEnum_BackupType = schema_utils_1.Type.Enum(Enum_BackupType);
exports.BackupType = schema_utils_1.Type.KeyOfEnum(Enum_BackupType);
var Enum_SafetyCheckLevel;
(function (Enum_SafetyCheckLevel) {
  Enum_SafetyCheckLevel[Enum_SafetyCheckLevel["Strict"] = 0] = "Strict";
  Enum_SafetyCheckLevel[Enum_SafetyCheckLevel["PromptAlways"] = 1] = "PromptAlways";
  Enum_SafetyCheckLevel[Enum_SafetyCheckLevel["PromptTemporarily"] = 2] = "PromptTemporarily";
})(Enum_SafetyCheckLevel || (exports.Enum_SafetyCheckLevel = Enum_SafetyCheckLevel = {}));
exports.EnumEnum_SafetyCheckLevel = schema_utils_1.Type.Enum(Enum_SafetyCheckLevel);
exports.SafetyCheckLevel = schema_utils_1.Type.KeyOfEnum(Enum_SafetyCheckLevel);
var Enum_HomescreenFormat;
(function (Enum_HomescreenFormat) {
  Enum_HomescreenFormat[Enum_HomescreenFormat["Toif"] = 1] = "Toif";
  Enum_HomescreenFormat[Enum_HomescreenFormat["Jpeg"] = 2] = "Jpeg";
  Enum_HomescreenFormat[Enum_HomescreenFormat["ToiG"] = 3] = "ToiG";
})(Enum_HomescreenFormat || (exports.Enum_HomescreenFormat = Enum_HomescreenFormat = {}));
exports.EnumEnum_HomescreenFormat = schema_utils_1.Type.Enum(Enum_HomescreenFormat);
exports.HomescreenFormat = schema_utils_1.Type.KeyOfEnum(Enum_HomescreenFormat);
exports.Initialize = schema_utils_1.Type.Object({
  session_id: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  _skip_passphrase: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  derive_cardano: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.GetFeatures = schema_utils_1.Type.Object({});
var Enum_Capability;
(function (Enum_Capability) {
  Enum_Capability[Enum_Capability["Capability_Bitcoin"] = 1] = "Capability_Bitcoin";
  Enum_Capability[Enum_Capability["Capability_Bitcoin_like"] = 2] = "Capability_Bitcoin_like";
  Enum_Capability[Enum_Capability["Capability_Binance"] = 3] = "Capability_Binance";
  Enum_Capability[Enum_Capability["Capability_Cardano"] = 4] = "Capability_Cardano";
  Enum_Capability[Enum_Capability["Capability_Crypto"] = 5] = "Capability_Crypto";
  Enum_Capability[Enum_Capability["Capability_EOS"] = 6] = "Capability_EOS";
  Enum_Capability[Enum_Capability["Capability_Ethereum"] = 7] = "Capability_Ethereum";
  Enum_Capability[Enum_Capability["Capability_Lisk"] = 8] = "Capability_Lisk";
  Enum_Capability[Enum_Capability["Capability_Monero"] = 9] = "Capability_Monero";
  Enum_Capability[Enum_Capability["Capability_NEM"] = 10] = "Capability_NEM";
  Enum_Capability[Enum_Capability["Capability_Ripple"] = 11] = "Capability_Ripple";
  Enum_Capability[Enum_Capability["Capability_Stellar"] = 12] = "Capability_Stellar";
  Enum_Capability[Enum_Capability["Capability_Tezos"] = 13] = "Capability_Tezos";
  Enum_Capability[Enum_Capability["Capability_U2F"] = 14] = "Capability_U2F";
  Enum_Capability[Enum_Capability["Capability_Shamir"] = 15] = "Capability_Shamir";
  Enum_Capability[Enum_Capability["Capability_ShamirGroups"] = 16] = "Capability_ShamirGroups";
  Enum_Capability[Enum_Capability["Capability_PassphraseEntry"] = 17] = "Capability_PassphraseEntry";
  Enum_Capability[Enum_Capability["Capability_Solana"] = 18] = "Capability_Solana";
})(Enum_Capability || (exports.Enum_Capability = Enum_Capability = {}));
exports.EnumEnum_Capability = schema_utils_1.Type.Enum(Enum_Capability);
exports.Capability = schema_utils_1.Type.KeyOfEnum(Enum_Capability);
exports.Features = schema_utils_1.Type.Object({
  vendor: schema_utils_1.Type.String(),
  major_version: schema_utils_1.Type.Number(),
  minor_version: schema_utils_1.Type.Number(),
  patch_version: schema_utils_1.Type.Number(),
  bootloader_mode: schema_utils_1.Type.Union([schema_utils_1.Type.Boolean(), schema_utils_1.Type.Null()]),
  device_id: schema_utils_1.Type.Union([schema_utils_1.Type.String(), schema_utils_1.Type.Null()]),
  pin_protection: schema_utils_1.Type.Union([schema_utils_1.Type.Boolean(), schema_utils_1.Type.Null()]),
  passphrase_protection: schema_utils_1.Type.Union([schema_utils_1.Type.Boolean(), schema_utils_1.Type.Null()]),
  language: schema_utils_1.Type.Union([schema_utils_1.Type.String(), schema_utils_1.Type.Null()]),
  label: schema_utils_1.Type.Union([schema_utils_1.Type.String(), schema_utils_1.Type.Null()]),
  initialized: schema_utils_1.Type.Union([schema_utils_1.Type.Boolean(), schema_utils_1.Type.Null()]),
  revision: schema_utils_1.Type.Union([schema_utils_1.Type.String(), schema_utils_1.Type.Null()]),
  bootloader_hash: schema_utils_1.Type.Union([schema_utils_1.Type.String(), schema_utils_1.Type.Null()]),
  imported: schema_utils_1.Type.Union([schema_utils_1.Type.Boolean(), schema_utils_1.Type.Null()]),
  unlocked: schema_utils_1.Type.Union([schema_utils_1.Type.Boolean(), schema_utils_1.Type.Null()]),
  _passphrase_cached: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  firmware_present: schema_utils_1.Type.Union([schema_utils_1.Type.Boolean(), schema_utils_1.Type.Null()]),
  needs_backup: schema_utils_1.Type.Union([schema_utils_1.Type.Boolean(), schema_utils_1.Type.Null()]),
  flags: schema_utils_1.Type.Union([schema_utils_1.Type.Number(), schema_utils_1.Type.Null()]),
  model: schema_utils_1.Type.String(),
  fw_major: schema_utils_1.Type.Union([schema_utils_1.Type.Number(), schema_utils_1.Type.Null()]),
  fw_minor: schema_utils_1.Type.Union([schema_utils_1.Type.Number(), schema_utils_1.Type.Null()]),
  fw_patch: schema_utils_1.Type.Union([schema_utils_1.Type.Number(), schema_utils_1.Type.Null()]),
  fw_vendor: schema_utils_1.Type.Union([schema_utils_1.Type.String(), schema_utils_1.Type.Null()]),
  unfinished_backup: schema_utils_1.Type.Union([schema_utils_1.Type.Boolean(), schema_utils_1.Type.Null()]),
  no_backup: schema_utils_1.Type.Union([schema_utils_1.Type.Boolean(), schema_utils_1.Type.Null()]),
  recovery_mode: schema_utils_1.Type.Union([schema_utils_1.Type.Boolean(), schema_utils_1.Type.Null()]),
  capabilities: schema_utils_1.Type.Array(exports.Capability),
  backup_type: schema_utils_1.Type.Union([exports.BackupType, schema_utils_1.Type.Null()]),
  sd_card_present: schema_utils_1.Type.Union([schema_utils_1.Type.Boolean(), schema_utils_1.Type.Null()]),
  sd_protection: schema_utils_1.Type.Union([schema_utils_1.Type.Boolean(), schema_utils_1.Type.Null()]),
  wipe_code_protection: schema_utils_1.Type.Union([schema_utils_1.Type.Boolean(), schema_utils_1.Type.Null()]),
  session_id: schema_utils_1.Type.Union([schema_utils_1.Type.String(), schema_utils_1.Type.Null()]),
  passphrase_always_on_device: schema_utils_1.Type.Union([schema_utils_1.Type.Boolean(), schema_utils_1.Type.Null()]),
  safety_checks: schema_utils_1.Type.Union([exports.SafetyCheckLevel, schema_utils_1.Type.Null()]),
  auto_lock_delay_ms: schema_utils_1.Type.Union([schema_utils_1.Type.Number(), schema_utils_1.Type.Null()]),
  display_rotation: schema_utils_1.Type.Union([schema_utils_1.Type.Number(), schema_utils_1.Type.Null()]),
  experimental_features: schema_utils_1.Type.Union([schema_utils_1.Type.Boolean(), schema_utils_1.Type.Null()]),
  busy: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  homescreen_format: schema_utils_1.Type.Optional(exports.HomescreenFormat),
  hide_passphrase_from_host: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  internal_model: exports.EnumDeviceModelInternal,
  unit_color: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  unit_btconly: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  homescreen_width: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  homescreen_height: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  bootloader_locked: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.LockDevice = schema_utils_1.Type.Object({});
exports.SetBusy = schema_utils_1.Type.Object({
  expiry_ms: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
});
exports.EndSession = schema_utils_1.Type.Object({});
exports.ApplySettings = schema_utils_1.Type.Object({
  language: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  label: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  use_passphrase: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  homescreen: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  _passphrase_source: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  auto_lock_delay_ms: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  display_rotation: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  passphrase_always_on_device: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  safety_checks: schema_utils_1.Type.Optional(exports.SafetyCheckLevel),
  experimental_features: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  hide_passphrase_from_host: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.ApplyFlags = schema_utils_1.Type.Object({
  flags: schema_utils_1.Type.Number()
});
exports.ChangePin = schema_utils_1.Type.Object({
  remove: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.ChangeWipeCode = schema_utils_1.Type.Object({
  remove: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
var SdProtectOperationType;
(function (SdProtectOperationType) {
  SdProtectOperationType[SdProtectOperationType["DISABLE"] = 0] = "DISABLE";
  SdProtectOperationType[SdProtectOperationType["ENABLE"] = 1] = "ENABLE";
  SdProtectOperationType[SdProtectOperationType["REFRESH"] = 2] = "REFRESH";
})(SdProtectOperationType || (exports.SdProtectOperationType = SdProtectOperationType = {}));
exports.EnumSdProtectOperationType = schema_utils_1.Type.Enum(SdProtectOperationType);
exports.SdProtect = schema_utils_1.Type.Object({
  operation: exports.EnumSdProtectOperationType
});
exports.Ping = schema_utils_1.Type.Object({
  message: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  button_protection: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.Cancel = schema_utils_1.Type.Object({});
exports.GetEntropy = schema_utils_1.Type.Object({
  size: schema_utils_1.Type.Number()
});
exports.Entropy = schema_utils_1.Type.Object({
  entropy: schema_utils_1.Type.String()
});
exports.GetFirmwareHash = schema_utils_1.Type.Object({
  challenge: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.FirmwareHash = schema_utils_1.Type.Object({
  hash: schema_utils_1.Type.String()
});
exports.AuthenticateDevice = schema_utils_1.Type.Object({
  challenge: schema_utils_1.Type.String()
});
exports.AuthenticityProof = schema_utils_1.Type.Object({
  certificates: schema_utils_1.Type.Array(schema_utils_1.Type.String()),
  signature: schema_utils_1.Type.String()
});
exports.WipeDevice = schema_utils_1.Type.Object({});
exports.ResetDevice = schema_utils_1.Type.Object({
  display_random: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  strength: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  passphrase_protection: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  pin_protection: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  language: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  label: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  u2f_counter: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  skip_backup: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  no_backup: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  backup_type: schema_utils_1.Type.Optional(schema_utils_1.Type.Union([schema_utils_1.Type.String(), schema_utils_1.Type.Number()]))
});
exports.BackupDevice = schema_utils_1.Type.Object({});
exports.EntropyRequest = schema_utils_1.Type.Object({});
exports.EntropyAck = schema_utils_1.Type.Object({
  entropy: schema_utils_1.Type.String()
});
var RecoveryDeviceType;
(function (RecoveryDeviceType) {
  RecoveryDeviceType[RecoveryDeviceType["RecoveryDeviceType_ScrambledWords"] = 0] = "RecoveryDeviceType_ScrambledWords";
  RecoveryDeviceType[RecoveryDeviceType["RecoveryDeviceType_Matrix"] = 1] = "RecoveryDeviceType_Matrix";
})(RecoveryDeviceType || (exports.RecoveryDeviceType = RecoveryDeviceType = {}));
exports.EnumRecoveryDeviceType = schema_utils_1.Type.Enum(RecoveryDeviceType);
exports.RecoveryDevice = schema_utils_1.Type.Object({
  word_count: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  passphrase_protection: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  pin_protection: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  language: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  label: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  enforce_wordlist: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  type: schema_utils_1.Type.Optional(exports.EnumRecoveryDeviceType),
  u2f_counter: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  dry_run: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
var Enum_WordRequestType;
(function (Enum_WordRequestType) {
  Enum_WordRequestType[Enum_WordRequestType["WordRequestType_Plain"] = 0] = "WordRequestType_Plain";
  Enum_WordRequestType[Enum_WordRequestType["WordRequestType_Matrix9"] = 1] = "WordRequestType_Matrix9";
  Enum_WordRequestType[Enum_WordRequestType["WordRequestType_Matrix6"] = 2] = "WordRequestType_Matrix6";
})(Enum_WordRequestType || (exports.Enum_WordRequestType = Enum_WordRequestType = {}));
exports.EnumEnum_WordRequestType = schema_utils_1.Type.Enum(Enum_WordRequestType);
exports.WordRequestType = schema_utils_1.Type.KeyOfEnum(Enum_WordRequestType);
exports.WordRequest = schema_utils_1.Type.Object({
  type: exports.WordRequestType
});
exports.WordAck = schema_utils_1.Type.Object({
  word: schema_utils_1.Type.String()
});
exports.SetU2FCounter = schema_utils_1.Type.Object({
  u2f_counter: schema_utils_1.Type.Number()
});
exports.GetNextU2FCounter = schema_utils_1.Type.Object({});
exports.NextU2FCounter = schema_utils_1.Type.Object({
  u2f_counter: schema_utils_1.Type.Number()
});
exports.DoPreauthorized = schema_utils_1.Type.Object({});
exports.PreauthorizedRequest = schema_utils_1.Type.Object({});
exports.CancelAuthorization = schema_utils_1.Type.Object({});
var BootCommand;
(function (BootCommand) {
  BootCommand[BootCommand["STOP_AND_WAIT"] = 0] = "STOP_AND_WAIT";
  BootCommand[BootCommand["INSTALL_UPGRADE"] = 1] = "INSTALL_UPGRADE";
})(BootCommand || (exports.BootCommand = BootCommand = {}));
exports.EnumBootCommand = schema_utils_1.Type.Enum(BootCommand);
exports.RebootToBootloader = schema_utils_1.Type.Object({
  boot_command: schema_utils_1.Type.Optional(exports.EnumBootCommand),
  firmware_header: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.GetNonce = schema_utils_1.Type.Object({});
exports.Nonce = schema_utils_1.Type.Object({
  nonce: schema_utils_1.Type.String()
});
exports.UnlockPath = schema_utils_1.Type.Object({
  address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
  mac: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.UnlockedPathRequest = schema_utils_1.Type.Object({
  mac: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.ShowDeviceTutorial = schema_utils_1.Type.Object({});
exports.UnlockBootloader = schema_utils_1.Type.Object({});
var MoneroNetworkType;
(function (MoneroNetworkType) {
  MoneroNetworkType[MoneroNetworkType["MAINNET"] = 0] = "MAINNET";
  MoneroNetworkType[MoneroNetworkType["TESTNET"] = 1] = "TESTNET";
  MoneroNetworkType[MoneroNetworkType["STAGENET"] = 2] = "STAGENET";
  MoneroNetworkType[MoneroNetworkType["FAKECHAIN"] = 3] = "FAKECHAIN";
})(MoneroNetworkType || (exports.MoneroNetworkType = MoneroNetworkType = {}));
exports.EnumMoneroNetworkType = schema_utils_1.Type.Enum(MoneroNetworkType);
exports.NEMGetAddress = schema_utils_1.Type.Object({
  address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
  network: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  show_display: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.NEMAddress = schema_utils_1.Type.Object({
  address: schema_utils_1.Type.String()
});
exports.NEMTransactionCommon = schema_utils_1.Type.Object({
  address_n: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(schema_utils_1.Type.Number())),
  network: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  timestamp: schema_utils_1.Type.Number(),
  fee: schema_utils_1.Type.Uint(),
  deadline: schema_utils_1.Type.Number(),
  signer: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.NEMMosaic = schema_utils_1.Type.Object({
  namespace: schema_utils_1.Type.String(),
  mosaic: schema_utils_1.Type.String(),
  quantity: schema_utils_1.Type.Number()
});
exports.NEMTransfer = schema_utils_1.Type.Object({
  recipient: schema_utils_1.Type.String(),
  amount: schema_utils_1.Type.Uint(),
  payload: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  public_key: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  mosaics: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports.NEMMosaic))
});
exports.NEMProvisionNamespace = schema_utils_1.Type.Object({
  namespace: schema_utils_1.Type.String(),
  parent: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  sink: schema_utils_1.Type.String(),
  fee: schema_utils_1.Type.Uint()
});
var NEMMosaicLevy;
(function (NEMMosaicLevy) {
  NEMMosaicLevy[NEMMosaicLevy["MosaicLevy_Absolute"] = 1] = "MosaicLevy_Absolute";
  NEMMosaicLevy[NEMMosaicLevy["MosaicLevy_Percentile"] = 2] = "MosaicLevy_Percentile";
})(NEMMosaicLevy || (exports.NEMMosaicLevy = NEMMosaicLevy = {}));
exports.EnumNEMMosaicLevy = schema_utils_1.Type.Enum(NEMMosaicLevy);
exports.NEMMosaicDefinition = schema_utils_1.Type.Object({
  name: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  ticker: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  namespace: schema_utils_1.Type.String(),
  mosaic: schema_utils_1.Type.String(),
  divisibility: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  levy: schema_utils_1.Type.Optional(exports.EnumNEMMosaicLevy),
  fee: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
  levy_address: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  levy_namespace: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  levy_mosaic: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  supply: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  mutable_supply: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  transferable: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  description: schema_utils_1.Type.String(),
  networks: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(schema_utils_1.Type.Number()))
});
exports.NEMMosaicCreation = schema_utils_1.Type.Object({
  definition: exports.NEMMosaicDefinition,
  sink: schema_utils_1.Type.String(),
  fee: schema_utils_1.Type.Uint()
});
var NEMSupplyChangeType;
(function (NEMSupplyChangeType) {
  NEMSupplyChangeType[NEMSupplyChangeType["SupplyChange_Increase"] = 1] = "SupplyChange_Increase";
  NEMSupplyChangeType[NEMSupplyChangeType["SupplyChange_Decrease"] = 2] = "SupplyChange_Decrease";
})(NEMSupplyChangeType || (exports.NEMSupplyChangeType = NEMSupplyChangeType = {}));
exports.EnumNEMSupplyChangeType = schema_utils_1.Type.Enum(NEMSupplyChangeType);
exports.NEMMosaicSupplyChange = schema_utils_1.Type.Object({
  namespace: schema_utils_1.Type.String(),
  mosaic: schema_utils_1.Type.String(),
  type: exports.EnumNEMSupplyChangeType,
  delta: schema_utils_1.Type.Number()
});
var NEMModificationType;
(function (NEMModificationType) {
  NEMModificationType[NEMModificationType["CosignatoryModification_Add"] = 1] = "CosignatoryModification_Add";
  NEMModificationType[NEMModificationType["CosignatoryModification_Delete"] = 2] = "CosignatoryModification_Delete";
})(NEMModificationType || (exports.NEMModificationType = NEMModificationType = {}));
exports.EnumNEMModificationType = schema_utils_1.Type.Enum(NEMModificationType);
exports.NEMCosignatoryModification = schema_utils_1.Type.Object({
  type: exports.EnumNEMModificationType,
  public_key: schema_utils_1.Type.String()
});
exports.NEMAggregateModification = schema_utils_1.Type.Object({
  modifications: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports.NEMCosignatoryModification)),
  relative_change: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
});
var NEMImportanceTransferMode;
(function (NEMImportanceTransferMode) {
  NEMImportanceTransferMode[NEMImportanceTransferMode["ImportanceTransfer_Activate"] = 1] = "ImportanceTransfer_Activate";
  NEMImportanceTransferMode[NEMImportanceTransferMode["ImportanceTransfer_Deactivate"] = 2] = "ImportanceTransfer_Deactivate";
})(NEMImportanceTransferMode || (exports.NEMImportanceTransferMode = NEMImportanceTransferMode = {}));
exports.EnumNEMImportanceTransferMode = schema_utils_1.Type.Enum(NEMImportanceTransferMode);
exports.NEMImportanceTransfer = schema_utils_1.Type.Object({
  mode: exports.EnumNEMImportanceTransferMode,
  public_key: schema_utils_1.Type.String()
});
exports.NEMSignTx = schema_utils_1.Type.Object({
  transaction: exports.NEMTransactionCommon,
  multisig: schema_utils_1.Type.Optional(exports.NEMTransactionCommon),
  transfer: schema_utils_1.Type.Optional(exports.NEMTransfer),
  cosigning: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  provision_namespace: schema_utils_1.Type.Optional(exports.NEMProvisionNamespace),
  mosaic_creation: schema_utils_1.Type.Optional(exports.NEMMosaicCreation),
  supply_change: schema_utils_1.Type.Optional(exports.NEMMosaicSupplyChange),
  aggregate_modification: schema_utils_1.Type.Optional(exports.NEMAggregateModification),
  importance_transfer: schema_utils_1.Type.Optional(exports.NEMImportanceTransfer),
  chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.NEMSignedTx = schema_utils_1.Type.Object({
  data: schema_utils_1.Type.String(),
  signature: schema_utils_1.Type.String()
});
exports.NEMDecryptMessage = schema_utils_1.Type.Object({
  address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
  network: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  public_key: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  payload: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.NEMDecryptedMessage = schema_utils_1.Type.Object({
  payload: schema_utils_1.Type.String()
});
exports.RippleGetAddress = schema_utils_1.Type.Object({
  address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
  show_display: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.RippleAddress = schema_utils_1.Type.Object({
  address: schema_utils_1.Type.String()
});
exports.RipplePayment = schema_utils_1.Type.Object({
  amount: schema_utils_1.Type.Uint(),
  destination: schema_utils_1.Type.String(),
  destination_tag: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
});
exports.RippleSignTx = schema_utils_1.Type.Object({
  address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
  fee: schema_utils_1.Type.Uint(),
  flags: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  sequence: schema_utils_1.Type.Number(),
  last_ledger_sequence: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  payment: exports.RipplePayment,
  chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.RippleSignedTx = schema_utils_1.Type.Object({
  signature: schema_utils_1.Type.String(),
  serialized_tx: schema_utils_1.Type.String()
});
exports.SolanaGetPublicKey = schema_utils_1.Type.Object({
  address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
  show_display: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.SolanaPublicKey = schema_utils_1.Type.Object({
  public_key: schema_utils_1.Type.String()
});
exports.SolanaGetAddress = schema_utils_1.Type.Object({
  address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
  show_display: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.SolanaAddress = schema_utils_1.Type.Object({
  address: schema_utils_1.Type.String()
});
exports.SolanaTxTokenAccountInfo = schema_utils_1.Type.Object({
  base_address: schema_utils_1.Type.String(),
  token_program: schema_utils_1.Type.String(),
  token_mint: schema_utils_1.Type.String(),
  token_account: schema_utils_1.Type.String()
});
exports.SolanaTxAdditionalInfo = schema_utils_1.Type.Object({
  token_accounts_infos: schema_utils_1.Type.Array(exports.SolanaTxTokenAccountInfo)
});
exports.SolanaSignTx = schema_utils_1.Type.Object({
  address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
  serialized_tx: schema_utils_1.Type.String(),
  additional_info: schema_utils_1.Type.Optional(exports.SolanaTxAdditionalInfo)
});
exports.SolanaTxSignature = schema_utils_1.Type.Object({
  signature: schema_utils_1.Type.String()
});
var StellarAssetType;
(function (StellarAssetType) {
  StellarAssetType[StellarAssetType["NATIVE"] = 0] = "NATIVE";
  StellarAssetType[StellarAssetType["ALPHANUM4"] = 1] = "ALPHANUM4";
  StellarAssetType[StellarAssetType["ALPHANUM12"] = 2] = "ALPHANUM12";
})(StellarAssetType || (exports.StellarAssetType = StellarAssetType = {}));
exports.EnumStellarAssetType = schema_utils_1.Type.Enum(StellarAssetType);
exports.StellarAsset = schema_utils_1.Type.Object({
  type: schema_utils_1.Type.Union([schema_utils_1.Type.Literal(0), schema_utils_1.Type.Literal(1), schema_utils_1.Type.Literal(2), schema_utils_1.Type.Literal('NATIVE'), schema_utils_1.Type.Literal('ALPHANUM4'), schema_utils_1.Type.Literal('ALPHANUM12')]),
  code: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  issuer: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
});
exports.StellarGetAddress = schema_utils_1.Type.Object({
  address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
  show_display: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.StellarAddress = schema_utils_1.Type.Object({
  address: schema_utils_1.Type.String()
});
var StellarMemoType;
(function (StellarMemoType) {
  StellarMemoType[StellarMemoType["NONE"] = 0] = "NONE";
  StellarMemoType[StellarMemoType["TEXT"] = 1] = "TEXT";
  StellarMemoType[StellarMemoType["ID"] = 2] = "ID";
  StellarMemoType[StellarMemoType["HASH"] = 3] = "HASH";
  StellarMemoType[StellarMemoType["RETURN"] = 4] = "RETURN";
})(StellarMemoType || (exports.StellarMemoType = StellarMemoType = {}));
exports.EnumStellarMemoType = schema_utils_1.Type.Enum(StellarMemoType);
exports.StellarSignTx = schema_utils_1.Type.Object({
  address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
  network_passphrase: schema_utils_1.Type.String(),
  source_account: schema_utils_1.Type.String(),
  fee: schema_utils_1.Type.Uint(),
  sequence_number: schema_utils_1.Type.Uint(),
  timebounds_start: schema_utils_1.Type.Number(),
  timebounds_end: schema_utils_1.Type.Number(),
  memo_type: exports.EnumStellarMemoType,
  memo_text: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  memo_id: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
  memo_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.Union([schema_utils_1.Type.Buffer(), schema_utils_1.Type.String()])),
  num_operations: schema_utils_1.Type.Number()
});
exports.StellarTxOpRequest = schema_utils_1.Type.Object({});
exports.StellarPaymentOp = schema_utils_1.Type.Object({
  source_account: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  destination_account: schema_utils_1.Type.String(),
  asset: exports.StellarAsset,
  amount: schema_utils_1.Type.Uint()
});
exports.StellarCreateAccountOp = schema_utils_1.Type.Object({
  source_account: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  new_account: schema_utils_1.Type.String(),
  starting_balance: schema_utils_1.Type.Uint()
});
exports.StellarPathPaymentStrictReceiveOp = schema_utils_1.Type.Object({
  source_account: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  send_asset: exports.StellarAsset,
  send_max: schema_utils_1.Type.Uint(),
  destination_account: schema_utils_1.Type.String(),
  destination_asset: exports.StellarAsset,
  destination_amount: schema_utils_1.Type.Uint(),
  paths: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports.StellarAsset))
});
exports.StellarPathPaymentStrictSendOp = schema_utils_1.Type.Object({
  source_account: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  send_asset: exports.StellarAsset,
  send_amount: schema_utils_1.Type.Uint(),
  destination_account: schema_utils_1.Type.String(),
  destination_asset: exports.StellarAsset,
  destination_min: schema_utils_1.Type.Uint(),
  paths: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports.StellarAsset))
});
exports.StellarManageSellOfferOp = schema_utils_1.Type.Object({
  source_account: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  selling_asset: exports.StellarAsset,
  buying_asset: exports.StellarAsset,
  amount: schema_utils_1.Type.Uint(),
  price_n: schema_utils_1.Type.Number(),
  price_d: schema_utils_1.Type.Number(),
  offer_id: schema_utils_1.Type.Uint()
});
exports.StellarManageBuyOfferOp = schema_utils_1.Type.Object({
  source_account: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  selling_asset: exports.StellarAsset,
  buying_asset: exports.StellarAsset,
  amount: schema_utils_1.Type.Uint(),
  price_n: schema_utils_1.Type.Number(),
  price_d: schema_utils_1.Type.Number(),
  offer_id: schema_utils_1.Type.Uint()
});
exports.StellarCreatePassiveSellOfferOp = schema_utils_1.Type.Object({
  source_account: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  selling_asset: exports.StellarAsset,
  buying_asset: exports.StellarAsset,
  amount: schema_utils_1.Type.Uint(),
  price_n: schema_utils_1.Type.Number(),
  price_d: schema_utils_1.Type.Number()
});
var StellarSignerType;
(function (StellarSignerType) {
  StellarSignerType[StellarSignerType["ACCOUNT"] = 0] = "ACCOUNT";
  StellarSignerType[StellarSignerType["PRE_AUTH"] = 1] = "PRE_AUTH";
  StellarSignerType[StellarSignerType["HASH"] = 2] = "HASH";
})(StellarSignerType || (exports.StellarSignerType = StellarSignerType = {}));
exports.EnumStellarSignerType = schema_utils_1.Type.Enum(StellarSignerType);
exports.StellarSetOptionsOp = schema_utils_1.Type.Object({
  source_account: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  inflation_destination_account: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  clear_flags: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  set_flags: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
  master_weight: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
  low_threshold: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
  medium_threshold: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
  high_threshold: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
  home_domain: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  signer_type: schema_utils_1.Type.Optional(exports.EnumStellarSignerType),
  signer_key: schema_utils_1.Type.Optional(schema_utils_1.Type.Union([schema_utils_1.Type.Buffer(), schema_utils_1.Type.String()])),
  signer_weight: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
});
exports.StellarChangeTrustOp = schema_utils_1.Type.Object({
  source_account: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  asset: exports.StellarAsset,
  limit: schema_utils_1.Type.Uint()
});
exports.StellarAllowTrustOp = schema_utils_1.Type.Object({
  source_account: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  trusted_account: schema_utils_1.Type.String(),
  asset_type: exports.EnumStellarAssetType,
  asset_code: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  is_authorized: schema_utils_1.Type.Boolean()
});
exports.StellarAccountMergeOp = schema_utils_1.Type.Object({
  source_account: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  destination_account: schema_utils_1.Type.String()
});
exports.StellarManageDataOp = schema_utils_1.Type.Object({
  source_account: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  key: schema_utils_1.Type.String(),
  value: schema_utils_1.Type.Optional(schema_utils_1.Type.Union([schema_utils_1.Type.Buffer(), schema_utils_1.Type.String()]))
});
exports.StellarBumpSequenceOp = schema_utils_1.Type.Object({
  source_account: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  bump_to: schema_utils_1.Type.Uint()
});
exports.StellarSignedTx = schema_utils_1.Type.Object({
  public_key: schema_utils_1.Type.String(),
  signature: schema_utils_1.Type.String()
});
exports.TezosGetAddress = schema_utils_1.Type.Object({
  address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
  show_display: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.TezosAddress = schema_utils_1.Type.Object({
  address: schema_utils_1.Type.String()
});
exports.TezosGetPublicKey = schema_utils_1.Type.Object({
  address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
  show_display: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.TezosPublicKey = schema_utils_1.Type.Object({
  public_key: schema_utils_1.Type.String()
});
var TezosContractType;
(function (TezosContractType) {
  TezosContractType[TezosContractType["Implicit"] = 0] = "Implicit";
  TezosContractType[TezosContractType["Originated"] = 1] = "Originated";
})(TezosContractType || (exports.TezosContractType = TezosContractType = {}));
exports.EnumTezosContractType = schema_utils_1.Type.Enum(TezosContractType);
exports.TezosContractID = schema_utils_1.Type.Object({
  tag: schema_utils_1.Type.Number(),
  hash: schema_utils_1.Type.Uint8Array()
});
exports.TezosRevealOp = schema_utils_1.Type.Object({
  source: schema_utils_1.Type.Uint8Array(),
  fee: schema_utils_1.Type.Uint(),
  counter: schema_utils_1.Type.Number(),
  gas_limit: schema_utils_1.Type.Number(),
  storage_limit: schema_utils_1.Type.Number(),
  public_key: schema_utils_1.Type.Uint8Array()
});
exports.TezosManagerTransfer = schema_utils_1.Type.Object({
  destination: exports.TezosContractID,
  amount: schema_utils_1.Type.Uint()
});
exports.TezosParametersManager = schema_utils_1.Type.Object({
  set_delegate: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint8Array()),
  cancel_delegate: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  transfer: schema_utils_1.Type.Optional(exports.TezosManagerTransfer)
});
exports.TezosTransactionOp = schema_utils_1.Type.Object({
  source: schema_utils_1.Type.Uint8Array(),
  fee: schema_utils_1.Type.Uint(),
  counter: schema_utils_1.Type.Number(),
  gas_limit: schema_utils_1.Type.Number(),
  storage_limit: schema_utils_1.Type.Number(),
  amount: schema_utils_1.Type.Uint(),
  destination: exports.TezosContractID,
  parameters: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(schema_utils_1.Type.Number())),
  parameters_manager: schema_utils_1.Type.Optional(exports.TezosParametersManager)
});
exports.TezosOriginationOp = schema_utils_1.Type.Object({
  source: schema_utils_1.Type.Uint8Array(),
  fee: schema_utils_1.Type.Uint(),
  counter: schema_utils_1.Type.Number(),
  gas_limit: schema_utils_1.Type.Number(),
  storage_limit: schema_utils_1.Type.Number(),
  manager_pubkey: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
  balance: schema_utils_1.Type.Number(),
  spendable: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  delegatable: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
  delegate: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint8Array()),
  script: schema_utils_1.Type.Union([schema_utils_1.Type.String(), schema_utils_1.Type.Array(schema_utils_1.Type.Number())])
});
exports.TezosDelegationOp = schema_utils_1.Type.Object({
  source: schema_utils_1.Type.Uint8Array(),
  fee: schema_utils_1.Type.Uint(),
  counter: schema_utils_1.Type.Number(),
  gas_limit: schema_utils_1.Type.Number(),
  storage_limit: schema_utils_1.Type.Number(),
  delegate: schema_utils_1.Type.Uint8Array()
});
exports.TezosProposalOp = schema_utils_1.Type.Object({
  source: schema_utils_1.Type.String(),
  period: schema_utils_1.Type.Number(),
  proposals: schema_utils_1.Type.Array(schema_utils_1.Type.String())
});
var TezosBallotType;
(function (TezosBallotType) {
  TezosBallotType[TezosBallotType["Yay"] = 0] = "Yay";
  TezosBallotType[TezosBallotType["Nay"] = 1] = "Nay";
  TezosBallotType[TezosBallotType["Pass"] = 2] = "Pass";
})(TezosBallotType || (exports.TezosBallotType = TezosBallotType = {}));
exports.EnumTezosBallotType = schema_utils_1.Type.Enum(TezosBallotType);
exports.TezosBallotOp = schema_utils_1.Type.Object({
  source: schema_utils_1.Type.String(),
  period: schema_utils_1.Type.Number(),
  proposal: schema_utils_1.Type.String(),
  ballot: exports.EnumTezosBallotType
});
exports.TezosSignTx = schema_utils_1.Type.Object({
  address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
  branch: schema_utils_1.Type.Uint8Array(),
  reveal: schema_utils_1.Type.Optional(exports.TezosRevealOp),
  transaction: schema_utils_1.Type.Optional(exports.TezosTransactionOp),
  origination: schema_utils_1.Type.Optional(exports.TezosOriginationOp),
  delegation: schema_utils_1.Type.Optional(exports.TezosDelegationOp),
  proposal: schema_utils_1.Type.Optional(exports.TezosProposalOp),
  ballot: schema_utils_1.Type.Optional(exports.TezosBallotOp),
  chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
});
exports.TezosSignedTx = schema_utils_1.Type.Object({
  signature: schema_utils_1.Type.String(),
  sig_op_contents: schema_utils_1.Type.String(),
  operation_hash: schema_utils_1.Type.String()
});
exports.experimental_message = schema_utils_1.Type.Object({});
exports.experimental_field = schema_utils_1.Type.Object({});
exports.MessageType = schema_utils_1.Type.Object({
  BinanceGetAddress: exports.BinanceGetAddress,
  BinanceAddress: exports.BinanceAddress,
  BinanceGetPublicKey: exports.BinanceGetPublicKey,
  BinancePublicKey: exports.BinancePublicKey,
  BinanceSignTx: exports.BinanceSignTx,
  BinanceTxRequest: exports.BinanceTxRequest,
  BinanceCoin: exports.BinanceCoin,
  BinanceInputOutput: exports.BinanceInputOutput,
  BinanceTransferMsg: exports.BinanceTransferMsg,
  BinanceOrderMsg: exports.BinanceOrderMsg,
  BinanceCancelMsg: exports.BinanceCancelMsg,
  BinanceSignedTx: exports.BinanceSignedTx,
  HDNodeType: exports.HDNodeType,
  HDNodePathType: exports.HDNodePathType,
  MultisigRedeemScriptType: exports.MultisigRedeemScriptType,
  GetPublicKey: exports.GetPublicKey,
  PublicKey: exports.PublicKey,
  GetAddress: exports.GetAddress,
  Address: exports.Address,
  GetOwnershipId: exports.GetOwnershipId,
  OwnershipId: exports.OwnershipId,
  SignMessage: exports.SignMessage,
  MessageSignature: exports.MessageSignature,
  VerifyMessage: exports.VerifyMessage,
  CoinJoinRequest: exports.CoinJoinRequest,
  SignTx: exports.SignTx,
  TxRequestDetailsType: exports.TxRequestDetailsType,
  TxRequestSerializedType: exports.TxRequestSerializedType,
  TxRequest: exports.TxRequest,
  TxInputType: exports.TxInputType,
  TxOutputBinType: exports.TxOutputBinType,
  TxOutputType: exports.TxOutputType,
  PrevTx: exports.PrevTx,
  PrevInput: exports.PrevInput,
  PrevOutput: exports.PrevOutput,
  TextMemo: exports.TextMemo,
  RefundMemo: exports.RefundMemo,
  CoinPurchaseMemo: exports.CoinPurchaseMemo,
  PaymentRequestMemo: exports.PaymentRequestMemo,
  TxAckPaymentRequest: exports.TxAckPaymentRequest,
  TxAck: exports.TxAck,
  TxAckInputWrapper: exports.TxAckInputWrapper,
  TxAckInput: exports.TxAckInput,
  TxAckOutputWrapper: exports.TxAckOutputWrapper,
  TxAckOutput: exports.TxAckOutput,
  TxAckPrevMeta: exports.TxAckPrevMeta,
  TxAckPrevInputWrapper: exports.TxAckPrevInputWrapper,
  TxAckPrevInput: exports.TxAckPrevInput,
  TxAckPrevOutputWrapper: exports.TxAckPrevOutputWrapper,
  TxAckPrevOutput: exports.TxAckPrevOutput,
  TxAckPrevExtraDataWrapper: exports.TxAckPrevExtraDataWrapper,
  TxAckPrevExtraData: exports.TxAckPrevExtraData,
  GetOwnershipProof: exports.GetOwnershipProof,
  OwnershipProof: exports.OwnershipProof,
  AuthorizeCoinJoin: exports.AuthorizeCoinJoin,
  FirmwareErase: exports.FirmwareErase,
  FirmwareRequest: exports.FirmwareRequest,
  FirmwareUpload: exports.FirmwareUpload,
  SelfTest: exports.SelfTest,
  CardanoBlockchainPointerType: exports.CardanoBlockchainPointerType,
  CardanoNativeScript: exports.CardanoNativeScript,
  CardanoGetNativeScriptHash: exports.CardanoGetNativeScriptHash,
  CardanoNativeScriptHash: exports.CardanoNativeScriptHash,
  CardanoAddressParametersType: exports.CardanoAddressParametersType,
  CardanoGetAddress: exports.CardanoGetAddress,
  CardanoAddress: exports.CardanoAddress,
  CardanoGetPublicKey: exports.CardanoGetPublicKey,
  CardanoPublicKey: exports.CardanoPublicKey,
  CardanoSignTxInit: exports.CardanoSignTxInit,
  CardanoTxInput: exports.CardanoTxInput,
  CardanoTxOutput: exports.CardanoTxOutput,
  CardanoAssetGroup: exports.CardanoAssetGroup,
  CardanoToken: exports.CardanoToken,
  CardanoTxInlineDatumChunk: exports.CardanoTxInlineDatumChunk,
  CardanoTxReferenceScriptChunk: exports.CardanoTxReferenceScriptChunk,
  CardanoPoolOwner: exports.CardanoPoolOwner,
  CardanoPoolRelayParameters: exports.CardanoPoolRelayParameters,
  CardanoPoolMetadataType: exports.CardanoPoolMetadataType,
  CardanoPoolParametersType: exports.CardanoPoolParametersType,
  CardanoTxCertificate: exports.CardanoTxCertificate,
  CardanoTxWithdrawal: exports.CardanoTxWithdrawal,
  CardanoCVoteRegistrationDelegation: exports.CardanoCVoteRegistrationDelegation,
  CardanoCVoteRegistrationParametersType: exports.CardanoCVoteRegistrationParametersType,
  CardanoTxAuxiliaryData: exports.CardanoTxAuxiliaryData,
  CardanoTxMint: exports.CardanoTxMint,
  CardanoTxCollateralInput: exports.CardanoTxCollateralInput,
  CardanoTxRequiredSigner: exports.CardanoTxRequiredSigner,
  CardanoTxReferenceInput: exports.CardanoTxReferenceInput,
  CardanoTxItemAck: exports.CardanoTxItemAck,
  CardanoTxAuxiliaryDataSupplement: exports.CardanoTxAuxiliaryDataSupplement,
  CardanoTxWitnessRequest: exports.CardanoTxWitnessRequest,
  CardanoTxWitnessResponse: exports.CardanoTxWitnessResponse,
  CardanoTxHostAck: exports.CardanoTxHostAck,
  CardanoTxBodyHash: exports.CardanoTxBodyHash,
  CardanoSignTxFinished: exports.CardanoSignTxFinished,
  Success: exports.Success,
  Failure: exports.Failure,
  ButtonRequest: exports.ButtonRequest,
  ButtonAck: exports.ButtonAck,
  PinMatrixRequest: exports.PinMatrixRequest,
  PinMatrixAck: exports.PinMatrixAck,
  PassphraseRequest: exports.PassphraseRequest,
  PassphraseAck: exports.PassphraseAck,
  Deprecated_PassphraseStateRequest: exports.Deprecated_PassphraseStateRequest,
  Deprecated_PassphraseStateAck: exports.Deprecated_PassphraseStateAck,
  CipherKeyValue: exports.CipherKeyValue,
  CipheredKeyValue: exports.CipheredKeyValue,
  IdentityType: exports.IdentityType,
  SignIdentity: exports.SignIdentity,
  SignedIdentity: exports.SignedIdentity,
  GetECDHSessionKey: exports.GetECDHSessionKey,
  ECDHSessionKey: exports.ECDHSessionKey,
  DebugLinkResetDebugEvents: exports.DebugLinkResetDebugEvents,
  EosGetPublicKey: exports.EosGetPublicKey,
  EosPublicKey: exports.EosPublicKey,
  EosTxHeader: exports.EosTxHeader,
  EosSignTx: exports.EosSignTx,
  EosTxActionRequest: exports.EosTxActionRequest,
  EosAsset: exports.EosAsset,
  EosPermissionLevel: exports.EosPermissionLevel,
  EosAuthorizationKey: exports.EosAuthorizationKey,
  EosAuthorizationAccount: exports.EosAuthorizationAccount,
  EosAuthorizationWait: exports.EosAuthorizationWait,
  EosAuthorization: exports.EosAuthorization,
  EosActionCommon: exports.EosActionCommon,
  EosActionTransfer: exports.EosActionTransfer,
  EosActionDelegate: exports.EosActionDelegate,
  EosActionUndelegate: exports.EosActionUndelegate,
  EosActionRefund: exports.EosActionRefund,
  EosActionBuyRam: exports.EosActionBuyRam,
  EosActionBuyRamBytes: exports.EosActionBuyRamBytes,
  EosActionSellRam: exports.EosActionSellRam,
  EosActionVoteProducer: exports.EosActionVoteProducer,
  EosActionUpdateAuth: exports.EosActionUpdateAuth,
  EosActionDeleteAuth: exports.EosActionDeleteAuth,
  EosActionLinkAuth: exports.EosActionLinkAuth,
  EosActionUnlinkAuth: exports.EosActionUnlinkAuth,
  EosActionNewAccount: exports.EosActionNewAccount,
  EosActionUnknown: exports.EosActionUnknown,
  EosTxActionAck: exports.EosTxActionAck,
  EosSignedTx: exports.EosSignedTx,
  EthereumNetworkInfo: exports.EthereumNetworkInfo,
  EthereumTokenInfo: exports.EthereumTokenInfo,
  EthereumDefinitions: exports.EthereumDefinitions,
  EthereumSignTypedData: exports.EthereumSignTypedData,
  EthereumTypedDataStructRequest: exports.EthereumTypedDataStructRequest,
  EthereumFieldType: exports.EthereumFieldType,
  EthereumStructMember: exports.EthereumStructMember,
  EthereumTypedDataStructAck: exports.EthereumTypedDataStructAck,
  EthereumTypedDataValueRequest: exports.EthereumTypedDataValueRequest,
  EthereumTypedDataValueAck: exports.EthereumTypedDataValueAck,
  EthereumGetPublicKey: exports.EthereumGetPublicKey,
  EthereumPublicKey: exports.EthereumPublicKey,
  EthereumGetAddress: exports.EthereumGetAddress,
  EthereumAddress: exports.EthereumAddress,
  EthereumSignTx: exports.EthereumSignTx,
  EthereumAccessList: exports.EthereumAccessList,
  EthereumSignTxEIP1559: exports.EthereumSignTxEIP1559,
  EthereumTxRequest: exports.EthereumTxRequest,
  EthereumTxAck: exports.EthereumTxAck,
  EthereumSignMessage: exports.EthereumSignMessage,
  EthereumMessageSignature: exports.EthereumMessageSignature,
  EthereumVerifyMessage: exports.EthereumVerifyMessage,
  EthereumSignTypedHash: exports.EthereumSignTypedHash,
  EthereumTypedDataSignature: exports.EthereumTypedDataSignature,
  Initialize: exports.Initialize,
  GetFeatures: exports.GetFeatures,
  Features: exports.Features,
  LockDevice: exports.LockDevice,
  SetBusy: exports.SetBusy,
  EndSession: exports.EndSession,
  ApplySettings: exports.ApplySettings,
  ApplyFlags: exports.ApplyFlags,
  ChangePin: exports.ChangePin,
  ChangeWipeCode: exports.ChangeWipeCode,
  SdProtect: exports.SdProtect,
  Ping: exports.Ping,
  Cancel: exports.Cancel,
  GetEntropy: exports.GetEntropy,
  Entropy: exports.Entropy,
  GetFirmwareHash: exports.GetFirmwareHash,
  FirmwareHash: exports.FirmwareHash,
  AuthenticateDevice: exports.AuthenticateDevice,
  AuthenticityProof: exports.AuthenticityProof,
  WipeDevice: exports.WipeDevice,
  ResetDevice: exports.ResetDevice,
  BackupDevice: exports.BackupDevice,
  EntropyRequest: exports.EntropyRequest,
  EntropyAck: exports.EntropyAck,
  RecoveryDevice: exports.RecoveryDevice,
  WordRequest: exports.WordRequest,
  WordAck: exports.WordAck,
  SetU2FCounter: exports.SetU2FCounter,
  GetNextU2FCounter: exports.GetNextU2FCounter,
  NextU2FCounter: exports.NextU2FCounter,
  DoPreauthorized: exports.DoPreauthorized,
  PreauthorizedRequest: exports.PreauthorizedRequest,
  CancelAuthorization: exports.CancelAuthorization,
  RebootToBootloader: exports.RebootToBootloader,
  GetNonce: exports.GetNonce,
  Nonce: exports.Nonce,
  UnlockPath: exports.UnlockPath,
  UnlockedPathRequest: exports.UnlockedPathRequest,
  ShowDeviceTutorial: exports.ShowDeviceTutorial,
  UnlockBootloader: exports.UnlockBootloader,
  NEMGetAddress: exports.NEMGetAddress,
  NEMAddress: exports.NEMAddress,
  NEMTransactionCommon: exports.NEMTransactionCommon,
  NEMMosaic: exports.NEMMosaic,
  NEMTransfer: exports.NEMTransfer,
  NEMProvisionNamespace: exports.NEMProvisionNamespace,
  NEMMosaicDefinition: exports.NEMMosaicDefinition,
  NEMMosaicCreation: exports.NEMMosaicCreation,
  NEMMosaicSupplyChange: exports.NEMMosaicSupplyChange,
  NEMCosignatoryModification: exports.NEMCosignatoryModification,
  NEMAggregateModification: exports.NEMAggregateModification,
  NEMImportanceTransfer: exports.NEMImportanceTransfer,
  NEMSignTx: exports.NEMSignTx,
  NEMSignedTx: exports.NEMSignedTx,
  NEMDecryptMessage: exports.NEMDecryptMessage,
  NEMDecryptedMessage: exports.NEMDecryptedMessage,
  RippleGetAddress: exports.RippleGetAddress,
  RippleAddress: exports.RippleAddress,
  RipplePayment: exports.RipplePayment,
  RippleSignTx: exports.RippleSignTx,
  RippleSignedTx: exports.RippleSignedTx,
  SolanaGetPublicKey: exports.SolanaGetPublicKey,
  SolanaPublicKey: exports.SolanaPublicKey,
  SolanaGetAddress: exports.SolanaGetAddress,
  SolanaAddress: exports.SolanaAddress,
  SolanaTxTokenAccountInfo: exports.SolanaTxTokenAccountInfo,
  SolanaTxAdditionalInfo: exports.SolanaTxAdditionalInfo,
  SolanaSignTx: exports.SolanaSignTx,
  SolanaTxSignature: exports.SolanaTxSignature,
  StellarAsset: exports.StellarAsset,
  StellarGetAddress: exports.StellarGetAddress,
  StellarAddress: exports.StellarAddress,
  StellarSignTx: exports.StellarSignTx,
  StellarTxOpRequest: exports.StellarTxOpRequest,
  StellarPaymentOp: exports.StellarPaymentOp,
  StellarCreateAccountOp: exports.StellarCreateAccountOp,
  StellarPathPaymentStrictReceiveOp: exports.StellarPathPaymentStrictReceiveOp,
  StellarPathPaymentStrictSendOp: exports.StellarPathPaymentStrictSendOp,
  StellarManageSellOfferOp: exports.StellarManageSellOfferOp,
  StellarManageBuyOfferOp: exports.StellarManageBuyOfferOp,
  StellarCreatePassiveSellOfferOp: exports.StellarCreatePassiveSellOfferOp,
  StellarSetOptionsOp: exports.StellarSetOptionsOp,
  StellarChangeTrustOp: exports.StellarChangeTrustOp,
  StellarAllowTrustOp: exports.StellarAllowTrustOp,
  StellarAccountMergeOp: exports.StellarAccountMergeOp,
  StellarManageDataOp: exports.StellarManageDataOp,
  StellarBumpSequenceOp: exports.StellarBumpSequenceOp,
  StellarSignedTx: exports.StellarSignedTx,
  TezosGetAddress: exports.TezosGetAddress,
  TezosAddress: exports.TezosAddress,
  TezosGetPublicKey: exports.TezosGetPublicKey,
  TezosPublicKey: exports.TezosPublicKey,
  TezosContractID: exports.TezosContractID,
  TezosRevealOp: exports.TezosRevealOp,
  TezosManagerTransfer: exports.TezosManagerTransfer,
  TezosParametersManager: exports.TezosParametersManager,
  TezosTransactionOp: exports.TezosTransactionOp,
  TezosOriginationOp: exports.TezosOriginationOp,
  TezosDelegationOp: exports.TezosDelegationOp,
  TezosProposalOp: exports.TezosProposalOp,
  TezosBallotOp: exports.TezosBallotOp,
  TezosSignTx: exports.TezosSignTx,
  TezosSignedTx: exports.TezosSignedTx,
  experimental_message: exports.experimental_message,
  experimental_field: exports.experimental_field
});

/***/ }),

/***/ 9095:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ArrayBufferBuilder = void 0;
const typebox_1 = __webpack_require__(3017);
typebox_1.TypeRegistry.Set('ArrayBuffer', (_, value) => value instanceof ArrayBuffer);
class ArrayBufferBuilder extends typebox_1.JavaScriptTypeBuilder {
  ArrayBuffer(options) {
    return this.Create(Object.assign(Object.assign({}, options), {
      [typebox_1.Kind]: 'ArrayBuffer',
      type: 'ArrayBuffer'
    }));
  }
}
exports.ArrayBufferBuilder = ArrayBufferBuilder;

/***/ }),

/***/ 5185:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.BufferBuilder = void 0;
const typebox_1 = __webpack_require__(3017);
typebox_1.TypeRegistry.Set('Buffer', (_, value) => value instanceof Buffer);
class BufferBuilder extends typebox_1.JavaScriptTypeBuilder {
  Buffer(options) {
    return this.Create(Object.assign(Object.assign({}, options), {
      [typebox_1.Kind]: 'Buffer',
      type: 'Buffer'
    }));
  }
}
exports.BufferBuilder = BufferBuilder;

/***/ }),

/***/ 4708:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.UintBuilder = exports.KeyofEnumBuilder = exports.BufferBuilder = exports.ArrayBufferBuilder = void 0;
var array_buffer_1 = __webpack_require__(9095);
Object.defineProperty(exports, "ArrayBufferBuilder", ({
  enumerable: true,
  get: function () {
    return array_buffer_1.ArrayBufferBuilder;
  }
}));
var buffer_1 = __webpack_require__(5185);
Object.defineProperty(exports, "BufferBuilder", ({
  enumerable: true,
  get: function () {
    return buffer_1.BufferBuilder;
  }
}));
var keyof_enum_1 = __webpack_require__(2210);
Object.defineProperty(exports, "KeyofEnumBuilder", ({
  enumerable: true,
  get: function () {
    return keyof_enum_1.KeyofEnumBuilder;
  }
}));
var uint_1 = __webpack_require__(4589);
Object.defineProperty(exports, "UintBuilder", ({
  enumerable: true,
  get: function () {
    return uint_1.UintBuilder;
  }
}));

/***/ }),

/***/ 2210:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.KeyofEnumBuilder = void 0;
const typebox_1 = __webpack_require__(3017);
class KeyofEnumBuilder extends typebox_1.JavaScriptTypeBuilder {
  KeyOfEnum(schema, options) {
    const keys = Object.keys(schema).map(key => this.Literal(key));
    return this.Union(keys, Object.assign(Object.assign({}, options), {
      [typebox_1.Hint]: 'KeyOfEnum'
    }));
  }
}
exports.KeyofEnumBuilder = KeyofEnumBuilder;

/***/ }),

/***/ 4589:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.UintBuilder = void 0;
const typebox_1 = __webpack_require__(3017);
typebox_1.TypeRegistry.Set('Uint', (schema, value) => {
  if (typeof value !== 'string' && typeof value !== 'number') {
    return false;
  }
  if (typeof value === 'number' && !Number.isSafeInteger(value) || !/^(?:[1-9]\d*|\d)$/.test(value.toString().replace(/^-/, schema.allowNegative ? '' : '-'))) {
    return false;
  }
  return true;
});
class UintBuilder extends typebox_1.JavaScriptTypeBuilder {
  Uint(options) {
    return this.Create(Object.assign(Object.assign({}, options), {
      [typebox_1.Kind]: 'Uint',
      type: 'Uint'
    }));
  }
}
exports.UintBuilder = UintBuilder;

/***/ }),

/***/ 8444:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.InvalidParameter = void 0;
class InvalidParameter extends Error {
  constructor(reason, field, value) {
    let message = `Invalid parameter`;
    message += ` "${field.substring(1)}"`;
    message += ` (= ${JSON.stringify(value)})`;
    message += `: ${reason.replace(/'/g, '"')}`;
    super(message);
    this.name = 'InvalidParameter';
    this.field = field;
  }
}
exports.InvalidParameter = InvalidParameter;

/***/ }),

/***/ 9406:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Optional = exports.Type = exports.Assert = exports.Validate = void 0;
const typebox_1 = __webpack_require__(3017);
Object.defineProperty(exports, "Optional", ({
  enumerable: true,
  get: function () {
    return typebox_1.Optional;
  }
}));
const value_1 = __webpack_require__(7536);
const ts_mixer_1 = __webpack_require__(6252);
const custom_types_1 = __webpack_require__(4708);
const errors_1 = __webpack_require__(8444);
class CustomTypeBuilder extends (0, ts_mixer_1.Mixin)(typebox_1.JavaScriptTypeBuilder, custom_types_1.ArrayBufferBuilder, custom_types_1.BufferBuilder, custom_types_1.KeyofEnumBuilder, custom_types_1.UintBuilder) {}
function Validate(schema, value) {
  try {
    Assert(schema, value);
    return true;
  } catch (e) {
    return false;
  }
}
exports.Validate = Validate;
function Assert(schema, value) {
  const errors = [...value_1.Value.Errors(schema, value)];
  let [error] = errors;
  while (error) {
    if (error.path === '/' && errors.length > 1) {} else if (error.value == null && error.schema[typebox_1.Optional] === 'Optional') {} else if (error.type === value_1.ValueErrorType.Union) {
      const currentValue = error.value;
      const hasValidMember = error.schema.anyOf.find(unionSchema => Validate(unionSchema, currentValue));
      if (!hasValidMember) throw new errors_1.InvalidParameter(error.message, error.path, error.value);
    } else {
      throw new errors_1.InvalidParameter(error.message, error.path, error.value);
    }
    errors.shift();
    [error] = errors;
  }
}
exports.Assert = Assert;
exports.Type = new CustomTypeBuilder();

/***/ }),

/***/ 4109:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TRANSPORT = exports.ACTION_TIMEOUT = exports.TREZOR_USB_DESCRIPTORS = exports.T1_HID_VENDOR = exports.ENDPOINT_ID = exports.INTERFACE_ID = exports.CONFIGURATION_ID = void 0;
exports.CONFIGURATION_ID = 1;
exports.INTERFACE_ID = 0;
exports.ENDPOINT_ID = 1;
exports.T1_HID_VENDOR = 0x534c;
exports.TREZOR_USB_DESCRIPTORS = [{
  vendorId: 0x534c,
  productId: 0x0001
}, {
  vendorId: 0x1209,
  productId: 0x53c0
}, {
  vendorId: 0x1209,
  productId: 0x53c1
}];
exports.ACTION_TIMEOUT = 10000;
exports.TRANSPORT = {
  START: 'transport-start',
  ERROR: 'transport-error',
  UPDATE: 'transport-update',
  DISABLE_WEBUSB: 'transport-disable_webusb',
  REQUEST_DEVICE: 'transport-request_device'
};

/***/ }),

/***/ 1574:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.addDashesToSpaces = void 0;
const addDashesToSpaces = inputString => inputString.replace(/\s+/g, '-');
exports.addDashesToSpaces = addDashesToSpaces;

/***/ }),

/***/ 3746:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.arrayDistinct = void 0;
const arrayDistinct = (item, index, self) => self.indexOf(item) === index;
exports.arrayDistinct = arrayDistinct;

/***/ }),

/***/ 3451:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.arrayPartition = void 0;
const arrayPartition = (array, condition) => array.reduce(([pass, fail], elem) => condition(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]], [[], []]);
exports.arrayPartition = arrayPartition;

/***/ }),

/***/ 9102:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.arrayShuffle = void 0;
const arrayShuffle = array => {
  const shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
exports.arrayShuffle = arrayShuffle;

/***/ }),

/***/ 7060:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.arrayToDictionary = void 0;
const validateKey = key => {
  if (['string', 'number'].includes(typeof key)) {
    return true;
  }
  return false;
};
const arrayToDictionary = (array, getKey, multiple) => multiple ? array.reduce((prev, cur) => {
  var _a;
  const key = getKey(cur);
  if (validateKey(key)) {
    return Object.assign(Object.assign({}, prev), {
      [key]: [...((_a = prev[key]) !== null && _a !== void 0 ? _a : []), cur]
    });
  }
  return prev;
}, {}) : array.reduce((prev, cur) => {
  const key = getKey(cur);
  if (validateKey(key)) {
    return Object.assign(Object.assign({}, prev), {
      [key]: cur
    });
  }
  return prev;
}, {});
exports.arrayToDictionary = arrayToDictionary;

/***/ }),

/***/ 5949:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getChunkSize = exports.reverseBuffer = void 0;
const reverseBuffer = src => {
  if (src.length < 1) return src;
  const buffer = Buffer.alloc(src.length);
  let j = buffer.length - 1;
  for (let i = 0; i < buffer.length / 2; i++) {
    buffer[i] = src[j];
    buffer[j] = src[i];
    j--;
  }
  return buffer;
};
exports.reverseBuffer = reverseBuffer;
const getChunkSize = n => {
  const buf = Buffer.allocUnsafe(1);
  buf.writeUInt8(n);
  return buf;
};
exports.getChunkSize = getChunkSize;

/***/ }),

/***/ 7534:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.bytesToHumanReadable = void 0;
const units = ['B', 'KB', 'MB', 'GB', 'TB'];
const bytesToHumanReadable = bytes => {
  let size = Math.abs(bytes);
  let i = 0;
  while (size >= 1024 || i >= units.length) {
    size /= 1024;
    i++;
  }
  return `${size.toFixed(1)} ${units[i]}`;
};
exports.bytesToHumanReadable = bytesToHumanReadable;

/***/ }),

/***/ 5970:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.capitalizeFirstLetter = void 0;
const capitalizeFirstLetter = s => s.charAt(0).toUpperCase() + s.slice(1);
exports.capitalizeFirstLetter = capitalizeFirstLetter;

/***/ }),

/***/ 8441:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.cloneObject = void 0;
const cloneObject = obj => {
  const jsonString = JSON.stringify(obj);
  if (jsonString === undefined) {
    return obj;
  }
  return JSON.parse(jsonString);
};
exports.cloneObject = cloneObject;

/***/ }),

/***/ 3940:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.countBytesInString = void 0;
const countBytesInString = input => encodeURI(input).split(/%..|./).length - 1;
exports.countBytesInString = countBytesInString;

/***/ }),

/***/ 9899:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createCooldown = void 0;
const createCooldown = cooldownMs => {
  let last = 0;
  return () => {
    const now = Date.now();
    if (now - last >= cooldownMs) {
      last = now;
      return true;
    }
    return false;
  };
};
exports.createCooldown = createCooldown;

/***/ }),

/***/ 7686:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createDeferred = void 0;
const createDeferred = id => {
  let localResolve = () => {};
  let localReject = () => {};
  const promise = new Promise((resolve, reject) => {
    localResolve = resolve;
    localReject = reject;
  });
  return {
    id,
    resolve: localResolve,
    reject: localReject,
    promise
  };
};
exports.createDeferred = createDeferred;

/***/ }),

/***/ 1975:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createTimeoutPromise = void 0;
const createTimeoutPromise = timeout => new Promise(resolve => setTimeout(resolve, timeout));
exports.createTimeoutPromise = createTimeoutPromise;

/***/ }),

/***/ 7546:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getValueByKey = exports.getKeyByValue = void 0;
function getKeyByValue(obj, value) {
  return obj && Object.keys(obj).find(x => obj[x] === value);
}
exports.getKeyByValue = getKeyByValue;
function getValueByKey(obj, enumKey) {
  const key = obj && Object.keys(obj).find(x => x === enumKey);
  return key && obj[key];
}
exports.getValueByKey = getValueByKey;

/***/ }),

/***/ 6725:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getLocaleSeparators = void 0;
const getLocaleSeparators = locale => {
  var _a, _b;
  const numberFormat = new Intl.NumberFormat(locale);
  const parts = numberFormat.formatToParts(10000.1);
  const decimalSeparator = (_a = parts.find(({
    type
  }) => type === 'decimal')) === null || _a === void 0 ? void 0 : _a.value;
  const thousandsSeparator = (_b = parts.find(({
    type
  }) => type === 'group')) === null || _b === void 0 ? void 0 : _b.value;
  return {
    decimalSeparator,
    thousandsSeparator
  };
};
exports.getLocaleSeparators = getLocaleSeparators;

/***/ }),

/***/ 2442:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getNumberFromPixelString = void 0;
const getNumberFromPixelString = size => parseInt(size.replace('px', ''), 10);
exports.getNumberFromPixelString = getNumberFromPixelString;

/***/ }),

/***/ 6855:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getRandomNumberInRange = void 0;
const getRandomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
exports.getRandomNumberInRange = getRandomNumberInRange;

/***/ }),

/***/ 704:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getSynchronize = void 0;
const getSynchronize = () => {
  let lock;
  return action => {
    const newLock = (lock !== null && lock !== void 0 ? lock : Promise.resolve()).catch(() => {}).then(action).finally(() => {
      if (lock === newLock) {
        lock = undefined;
      }
    });
    lock = newLock;
    return lock;
  };
};
exports.getSynchronize = getSynchronize;

/***/ }),

/***/ 7237:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getWeakRandomId = void 0;
const getWeakRandomId = length => {
  let id = '';
  const list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    id += list.charAt(Math.floor(Math.random() * list.length));
  }
  return id;
};
exports.getWeakRandomId = getWeakRandomId;

/***/ }),

/***/ 7292:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.hasUppercaseLetter = void 0;
const HAS_UPPERCASE_LATER_REGEXP = new RegExp('^(.*[A-Z].*)$');
const hasUppercaseLetter = value => HAS_UPPERCASE_LATER_REGEXP.test(value);
exports.hasUppercaseLetter = hasUppercaseLetter;

/***/ }),

/***/ 4542:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.xssFilters = exports.versionUtils = exports.enumUtils = exports.bufferUtils = void 0;
const tslib_1 = __webpack_require__(2970);
tslib_1.__exportStar(__webpack_require__(3746), exports);
tslib_1.__exportStar(__webpack_require__(3451), exports);
tslib_1.__exportStar(__webpack_require__(9102), exports);
tslib_1.__exportStar(__webpack_require__(7060), exports);
exports.bufferUtils = tslib_1.__importStar(__webpack_require__(5949));
tslib_1.__exportStar(__webpack_require__(7534), exports);
tslib_1.__exportStar(__webpack_require__(5970), exports);
tslib_1.__exportStar(__webpack_require__(8441), exports);
tslib_1.__exportStar(__webpack_require__(3940), exports);
tslib_1.__exportStar(__webpack_require__(9899), exports);
tslib_1.__exportStar(__webpack_require__(7686), exports);
tslib_1.__exportStar(__webpack_require__(1975), exports);
exports.enumUtils = tslib_1.__importStar(__webpack_require__(7546));
tslib_1.__exportStar(__webpack_require__(2442), exports);
tslib_1.__exportStar(__webpack_require__(6855), exports);
tslib_1.__exportStar(__webpack_require__(704), exports);
tslib_1.__exportStar(__webpack_require__(7237), exports);
tslib_1.__exportStar(__webpack_require__(7292), exports);
tslib_1.__exportStar(__webpack_require__(8003), exports);
tslib_1.__exportStar(__webpack_require__(1646), exports);
tslib_1.__exportStar(__webpack_require__(144), exports);
tslib_1.__exportStar(__webpack_require__(6503), exports);
tslib_1.__exportStar(__webpack_require__(2985), exports);
tslib_1.__exportStar(__webpack_require__(6526), exports);
tslib_1.__exportStar(__webpack_require__(8389), exports);
tslib_1.__exportStar(__webpack_require__(8416), exports);
tslib_1.__exportStar(__webpack_require__(9625), exports);
tslib_1.__exportStar(__webpack_require__(4722), exports);
tslib_1.__exportStar(__webpack_require__(1847), exports);
tslib_1.__exportStar(__webpack_require__(1566), exports);
tslib_1.__exportStar(__webpack_require__(8061), exports);
tslib_1.__exportStar(__webpack_require__(6140), exports);
tslib_1.__exportStar(__webpack_require__(5200), exports);
exports.versionUtils = tslib_1.__importStar(__webpack_require__(8628));
exports.xssFilters = tslib_1.__importStar(__webpack_require__(9672));
tslib_1.__exportStar(__webpack_require__(6725), exports);
tslib_1.__exportStar(__webpack_require__(1574), exports);

/***/ }),

/***/ 8003:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isAscii = void 0;
function isAscii(value) {
  if (!value) return true;
  return /^[\x00-\x7F]*$/.test(value);
}
exports.isAscii = isAscii;

/***/ }),

/***/ 1646:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isHex = void 0;
const isHex = str => {
  const regExp = /^(0x|0X)?[0-9A-Fa-f]+$/g;
  return regExp.test(str);
};
exports.isHex = isHex;

/***/ }),

/***/ 144:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isNotUndefined = void 0;
const isNotUndefined = item => typeof item !== 'undefined';
exports.isNotUndefined = isNotUndefined;

/***/ }),

/***/ 6503:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isUrl = void 0;
const URL_REGEXP = /^(http|ws)s?:\/\/[a-z0-9]([a-z0-9.-]+)?(:[0-9]{1,5})?((\/)?(([a-z0-9-_])+(\/)?)+)$/i;
const isUrl = value => URL_REGEXP.test(value);
exports.isUrl = isUrl;

/***/ }),

/***/ 2985:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.mergeDeepObject = void 0;
const isObject = obj => {
  if (typeof obj === 'object' && obj !== null) {
    if (typeof Object.getPrototypeOf === 'function') {
      const prototype = Object.getPrototypeOf(obj);
      return prototype === Object.prototype || prototype === null;
    }
    return Object.prototype.toString.call(obj) === '[object Object]';
  }
  return false;
};
const mergeDeepObject = (...objects) => objects.reduce((result, current) => {
  if (Array.isArray(current)) {
    throw new TypeError('Arguments provided to ts-deepmerge must be objects, not arrays.');
  }
  Object.keys(current).forEach(key => {
    if (['__proto__', 'constructor', 'prototype'].includes(key)) {
      return;
    }
    if (Array.isArray(result[key]) && Array.isArray(current[key])) {
      result[key] = exports.mergeDeepObject.options.mergeArrays ? Array.from(new Set(result[key].concat(current[key]))) : current[key];
    } else if (isObject(result[key]) && isObject(current[key])) {
      result[key] = (0, exports.mergeDeepObject)(result[key], current[key]);
    } else {
      result[key] = current[key];
    }
  });
  return result;
}, {});
exports.mergeDeepObject = mergeDeepObject;
const defaultOptions = {
  mergeArrays: true
};
exports.mergeDeepObject.options = defaultOptions;
exports.mergeDeepObject.withOptions = (options, ...objects) => {
  exports.mergeDeepObject.options = Object.assign({
    mergeArrays: true
  }, options);
  const result = (0, exports.mergeDeepObject)(...objects);
  exports.mergeDeepObject.options = defaultOptions;
  return result;
};

/***/ }),

/***/ 6526:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.objectPartition = void 0;
const tslib_1 = __webpack_require__(2970);
const objectPartition = (obj, keys) => keys.reduce(([included, excluded], key) => {
  const _a = excluded,
    _b = key,
    value = _a[_b],
    rest = tslib_1.__rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
  return typeof value !== 'undefined' ? [Object.assign(Object.assign({}, included), {
    [key]: value
  }), rest] : [included, excluded];
}, [{}, obj]);
exports.objectPartition = objectPartition;

/***/ }),

/***/ 8389:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.parseElectrumUrl = void 0;
const ELECTRUM_URL_REGEX = /^(?:([a-zA-Z0-9.-]+)|\[([a-f0-9:]+)\]):([0-9]{1,5}):([ts])$/;
const parseElectrumUrl = url => {
  var _a;
  const match = url.match(ELECTRUM_URL_REGEX);
  if (!match) return undefined;
  return {
    host: (_a = match[1]) !== null && _a !== void 0 ? _a : match[2],
    port: Number.parseInt(match[3], 10),
    protocol: match[4]
  };
};
exports.parseElectrumUrl = parseElectrumUrl;

/***/ }),

/***/ 8416:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.parseHostname = void 0;
const HOSTNAME_REGEX = /^([a-z0-9.+-]+:\/\/)?([a-z0-9.-]+)([:/][^:/]+)*\/?$/i;
const parseHostname = url => {
  var _a, _b;
  return (_b = (_a = url.match(HOSTNAME_REGEX)) === null || _a === void 0 ? void 0 : _a[2]) === null || _b === void 0 ? void 0 : _b.toLowerCase();
};
exports.parseHostname = parseHostname;

/***/ }),

/***/ 9625:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.promiseAllSequence = void 0;
const tslib_1 = __webpack_require__(2970);
const promiseAllSequence = actions => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
  const results = [];
  for (let i = 0; i < actions.length; ++i) {
    const result = yield actions[i]();
    results.push(result);
  }
  return results;
});
exports.promiseAllSequence = promiseAllSequence;

/***/ }),

/***/ 4722:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.redactUserPathFromString = exports.startOfUserPathRegex = void 0;
exports.startOfUserPathRegex = /([/\\][Uu]sers[/\\]{1,4})([^"^'^[^\]^/^\\]*)/g;
const redactUserPathFromString = text => text.replace(exports.startOfUserPathRegex, '$1[*]');
exports.redactUserPathFromString = redactUserPathFromString;

/***/ }),

/***/ 1847:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.scheduleAction = void 0;
const tslib_1 = __webpack_require__(2970);
const isArray = attempts => Array.isArray(attempts);
const abortedBySignal = () => new Error('Aborted by signal');
const abortedByDeadline = () => new Error('Aborted by deadline');
const abortedByTimeout = () => new Error('Aborted by timeout');
const resolveAfterMs = (ms, clear) => new Promise((resolve, reject) => {
  if (clear.aborted) return reject();
  if (ms === undefined) return resolve();
  const timeout = setTimeout(resolve, ms);
  const onClear = () => {
    clearTimeout(timeout);
    clear.removeEventListener('abort', onClear);
    reject();
  };
  clear.addEventListener('abort', onClear);
});
const rejectAfterMs = (ms, reason, clear) => new Promise((_, reject) => {
  if (clear.aborted) return reject();
  const timeout = ms !== undefined ? setTimeout(() => reject(reason()), ms) : undefined;
  const onClear = () => {
    clearTimeout(timeout);
    clear.removeEventListener('abort', onClear);
    reject();
  };
  clear.addEventListener('abort', onClear);
});
const rejectWhenAborted = (signal, clear) => new Promise((_, reject) => {
  if (clear.aborted) return reject();
  if (signal === null || signal === void 0 ? void 0 : signal.aborted) return reject(abortedBySignal());
  const onAbort = () => reject(abortedBySignal());
  signal === null || signal === void 0 ? void 0 : signal.addEventListener('abort', onAbort);
  const onClear = () => {
    signal === null || signal === void 0 ? void 0 : signal.removeEventListener('abort', onAbort);
    clear.removeEventListener('abort', onClear);
    reject();
  };
  clear.addEventListener('abort', onClear);
});
const resolveAction = (action, clear) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
  const aborter = new AbortController();
  const onClear = () => aborter.abort();
  if (clear.aborted) onClear();
  clear.addEventListener('abort', onClear);
  try {
    return yield new Promise(resolve => resolve(action(aborter.signal)));
  } finally {
    clear.removeEventListener('abort', onClear);
  }
});
const attemptLoop = (attempts, attempt, failure, clear) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
  for (let a = 0; a < attempts - 1; a++) {
    if (clear.aborted) break;
    const aborter = new AbortController();
    const onClear = () => aborter.abort();
    clear.addEventListener('abort', onClear);
    try {
      return yield attempt(a, aborter.signal);
    } catch (_a) {
      onClear();
      yield failure(a);
    } finally {
      clear.removeEventListener('abort', onClear);
    }
  }
  return clear.aborted ? Promise.reject() : attempt(attempts - 1, clear);
});
const scheduleAction = (action, params) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
  const {
    signal,
    delay,
    attempts,
    timeout,
    deadline,
    gap
  } = params;
  const deadlineMs = deadline && deadline - Date.now();
  const attemptCount = isArray(attempts) ? attempts.length : attempts !== null && attempts !== void 0 ? attempts : deadline ? Infinity : 1;
  const clearAborter = new AbortController();
  const clear = clearAborter.signal;
  const getParams = isArray(attempts) ? attempt => attempts[attempt] : () => ({
    timeout,
    gap
  });
  try {
    return yield Promise.race([rejectWhenAborted(signal, clear), rejectAfterMs(deadlineMs, abortedByDeadline, clear), resolveAfterMs(delay, clear).then(() => attemptLoop(attemptCount, (attempt, abort) => Promise.race([rejectAfterMs(getParams(attempt).timeout, abortedByTimeout, clear), resolveAction(action, abort)]), attempt => {
      var _a;
      return resolveAfterMs((_a = getParams(attempt).gap) !== null && _a !== void 0 ? _a : 0, clear);
    }, clear))]);
  } finally {
    clearAborter.abort();
  }
});
exports.scheduleAction = scheduleAction;

/***/ }),

/***/ 1566:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.throwError = void 0;
const throwError = reason => {
  throw new Error(reason);
};
exports.throwError = throwError;

/***/ }),

/***/ 6140:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.topologicalSort = void 0;
const arrayPartition_1 = __webpack_require__(3451);
const topologicalSort = (elements, precedes, tie) => {
  const result = [];
  const filterRoots = verts => (0, arrayPartition_1.arrayPartition)(verts, succ => !verts.some(pred => precedes(pred, succ)));
  let elem = elements;
  while (elem.length) {
    const [roots, rest] = filterRoots(elem);
    if (!roots.length) throw new Error('Cycle detected');
    result.push(...(tie ? roots.sort(tie) : roots));
    elem = rest;
  }
  return result;
};
exports.topologicalSort = topologicalSort;

/***/ }),

/***/ 8061:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.truncateMiddle = void 0;
const truncateMiddle = (text, startChars, endChars) => {
  if (text.length <= startChars + endChars) return text;
  const start = text.substring(0, startChars);
  const end = text.substring(text.length - endChars, text.length);
  return `${start}…${end}`;
};
exports.truncateMiddle = truncateMiddle;

/***/ }),

/***/ 8750:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.s = void 0;
const events_1 = __webpack_require__(2699);
class TypedEmitter extends events_1.EventEmitter {
  listenerCount(eventName) {
    return super.listenerCount(eventName);
  }
}
exports.s = TypedEmitter;

/***/ }),

/***/ 5200:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.urlToOnion = void 0;
const urlToOnion = (url, onionDomains) => {
  var _a;
  const [, protocol, subdomain, domain, rest] = (_a = url.match(/^(http|ws)s?:\/\/([^:/]+\.)?([^/.]+\.[^/.]+)(\/.*)?$/i)) !== null && _a !== void 0 ? _a : [];
  if (!domain || !onionDomains[domain]) return;
  return `${protocol}://${subdomain !== null && subdomain !== void 0 ? subdomain : ''}${onionDomains[domain]}${rest !== null && rest !== void 0 ? rest : ''}`;
};
exports.urlToOnion = urlToOnion;

/***/ }),

/***/ 8628:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.normalizeVersion = exports.isNewerOrEqual = exports.isEqual = exports.isNewer = exports.isVersionArray = void 0;
const isVersionArray = arr => {
  if (!Array.isArray(arr)) {
    return false;
  }
  if (arr.length !== 3) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    const versionNumber = arr[i];
    if (typeof versionNumber !== 'number' || versionNumber < 0) {
      return false;
    }
  }
  return true;
};
exports.isVersionArray = isVersionArray;
const parse = versionArr => ({
  major: versionArr[0],
  minor: versionArr[1],
  patch: versionArr[2]
});
const split = version => {
  const arr = version.split('.').map(v => Number(v));
  if (!(0, exports.isVersionArray)(arr)) {
    throw new Error(`version string is in wrong format: ${version}`);
  }
  return arr;
};
const versionToString = arr => `${arr[0]}.${arr[1]}.${arr[2]}`;
const isNewer = (versionX, versionY) => {
  const parsedX = parse(typeof versionX === 'string' ? split(versionX) : versionX);
  const parsedY = parse(typeof versionY === 'string' ? split(versionY) : versionY);
  if (parsedX.major - parsedY.major !== 0) {
    return parsedX.major > parsedY.major;
  }
  if (parsedX.minor - parsedY.minor !== 0) {
    return parsedX.minor > parsedY.minor;
  }
  if (parsedX.patch - parsedY.patch !== 0) {
    return parsedX.patch > parsedY.patch;
  }
  return false;
};
exports.isNewer = isNewer;
const isEqual = (versionX, versionY) => {
  const strX = typeof versionX === 'string' ? versionX : versionToString(versionX);
  const strY = typeof versionY === 'string' ? versionY : versionToString(versionY);
  return strX === strY;
};
exports.isEqual = isEqual;
const isNewerOrEqual = (versionX, versionY) => (0, exports.isNewer)(versionX, versionY) || (0, exports.isEqual)(versionX, versionY);
exports.isNewerOrEqual = isNewerOrEqual;
const normalizeVersion = version => version.replace(/\b0+(\d)/g, '$1');
exports.normalizeVersion = normalizeVersion;

/***/ }),

/***/ 9672:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.inDoubleQuotes = exports.inSingleQuotes = exports.inHTML = void 0;
const LT = /</g;
const SQUOT = /'/g;
const QUOT = /"/g;
const inHTML = value => value.replace(LT, '&lt;');
exports.inHTML = inHTML;
const inSingleQuotes = value => value.replace(SQUOT, '&#39;');
exports.inSingleQuotes = inSingleQuotes;
const inDoubleQuotes = value => value.replace(QUOT, '&quot;');
exports.inDoubleQuotes = inDoubleQuotes;

/***/ }),

/***/ 2699:
/***/ ((module) => {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),

/***/ 6252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mixin: () => (/* binding */ Mixin),
/* harmony export */   decorate: () => (/* binding */ decorate),
/* harmony export */   hasMixin: () => (/* binding */ hasMixin),
/* harmony export */   mix: () => (/* binding */ mix),
/* harmony export */   settings: () => (/* binding */ settings)
/* harmony export */ });
/**
 * Utility function that works like `Object.apply`, but copies getters and setters properly as well.  Additionally gives
 * the option to exclude properties by name.
 */
const copyProps = (dest, src, exclude = []) => {
    const props = Object.getOwnPropertyDescriptors(src);
    for (let prop of exclude)
        delete props[prop];
    Object.defineProperties(dest, props);
};
/**
 * Returns the full chain of prototypes up until Object.prototype given a starting object.  The order of prototypes will
 * be closest to farthest in the chain.
 */
const protoChain = (obj, currentChain = [obj]) => {
    const proto = Object.getPrototypeOf(obj);
    if (proto === null)
        return currentChain;
    return protoChain(proto, [...currentChain, proto]);
};
/**
 * Identifies the nearest ancestor common to all the given objects in their prototype chains.  For most unrelated
 * objects, this function should return Object.prototype.
 */
const nearestCommonProto = (...objs) => {
    if (objs.length === 0)
        return undefined;
    let commonProto = undefined;
    const protoChains = objs.map(obj => protoChain(obj));
    while (protoChains.every(protoChain => protoChain.length > 0)) {
        const protos = protoChains.map(protoChain => protoChain.pop());
        const potentialCommonProto = protos[0];
        if (protos.every(proto => proto === potentialCommonProto))
            commonProto = potentialCommonProto;
        else
            break;
    }
    return commonProto;
};
/**
 * Creates a new prototype object that is a mixture of the given prototypes.  The mixing is achieved by first
 * identifying the nearest common ancestor and using it as the prototype for a new object.  Then all properties/methods
 * downstream of this prototype (ONLY downstream) are copied into the new object.
 *
 * The resulting prototype is more performant than softMixProtos(...), as well as ES5 compatible.  However, it's not as
 * flexible as updates to the source prototypes aren't captured by the mixed result.  See softMixProtos for why you may
 * want to use that instead.
 */
const hardMixProtos = (ingredients, constructor, exclude = []) => {
    var _a;
    const base = (_a = nearestCommonProto(...ingredients)) !== null && _a !== void 0 ? _a : Object.prototype;
    const mixedProto = Object.create(base);
    // Keeps track of prototypes we've already visited to avoid copying the same properties multiple times.  We init the
    // list with the proto chain below the nearest common ancestor because we don't want any of those methods mixed in
    // when they will already be accessible via prototype access.
    const visitedProtos = protoChain(base);
    for (let prototype of ingredients) {
        let protos = protoChain(prototype);
        // Apply the prototype chain in reverse order so that old methods don't override newer ones.
        for (let i = protos.length - 1; i >= 0; i--) {
            let newProto = protos[i];
            if (visitedProtos.indexOf(newProto) === -1) {
                copyProps(mixedProto, newProto, ['constructor', ...exclude]);
                visitedProtos.push(newProto);
            }
        }
    }
    mixedProto.constructor = constructor;
    return mixedProto;
};
const unique = (arr) => arr.filter((e, i) => arr.indexOf(e) == i);

/**
 * Finds the ingredient with the given prop, searching in reverse order and breadth-first if searching ingredient
 * prototypes is required.
 */
const getIngredientWithProp = (prop, ingredients) => {
    const protoChains = ingredients.map(ingredient => protoChain(ingredient));
    // since we search breadth-first, we need to keep track of our depth in the prototype chains
    let protoDepth = 0;
    // not all prototype chains are the same depth, so this remains true as long as at least one of the ingredients'
    // prototype chains has an object at this depth
    let protosAreLeftToSearch = true;
    while (protosAreLeftToSearch) {
        // with the start of each horizontal slice, we assume this is the one that's deeper than any of the proto chains
        protosAreLeftToSearch = false;
        // scan through the ingredients right to left
        for (let i = ingredients.length - 1; i >= 0; i--) {
            const searchTarget = protoChains[i][protoDepth];
            if (searchTarget !== undefined && searchTarget !== null) {
                // if we find something, this is proof that this horizontal slice potentially more objects to search
                protosAreLeftToSearch = true;
                // eureka, we found it
                if (Object.getOwnPropertyDescriptor(searchTarget, prop) != undefined) {
                    return protoChains[i][0];
                }
            }
        }
        protoDepth++;
    }
    return undefined;
};
/**
 * "Mixes" ingredients by wrapping them in a Proxy.  The optional prototype argument allows the mixed object to sit
 * downstream of an existing prototype chain.  Note that "properties" cannot be added, deleted, or modified.
 */
const proxyMix = (ingredients, prototype = Object.prototype) => new Proxy({}, {
    getPrototypeOf() {
        return prototype;
    },
    setPrototypeOf() {
        throw Error('Cannot set prototype of Proxies created by ts-mixer');
    },
    getOwnPropertyDescriptor(_, prop) {
        return Object.getOwnPropertyDescriptor(getIngredientWithProp(prop, ingredients) || {}, prop);
    },
    defineProperty() {
        throw new Error('Cannot define new properties on Proxies created by ts-mixer');
    },
    has(_, prop) {
        return getIngredientWithProp(prop, ingredients) !== undefined || prototype[prop] !== undefined;
    },
    get(_, prop) {
        return (getIngredientWithProp(prop, ingredients) || prototype)[prop];
    },
    set(_, prop, val) {
        const ingredientWithProp = getIngredientWithProp(prop, ingredients);
        if (ingredientWithProp === undefined)
            throw new Error('Cannot set new properties on Proxies created by ts-mixer');
        ingredientWithProp[prop] = val;
        return true;
    },
    deleteProperty() {
        throw new Error('Cannot delete properties on Proxies created by ts-mixer');
    },
    ownKeys() {
        return ingredients
            .map(Object.getOwnPropertyNames)
            .reduce((prev, curr) => curr.concat(prev.filter(key => curr.indexOf(key) < 0)));
    },
});
/**
 * Creates a new proxy-prototype object that is a "soft" mixture of the given prototypes.  The mixing is achieved by
 * proxying all property access to the ingredients.  This is not ES5 compatible and less performant.  However, any
 * changes made to the source prototypes will be reflected in the proxy-prototype, which may be desirable.
 */
const softMixProtos = (ingredients, constructor) => proxyMix([...ingredients, { constructor }]);

const settings = {
    initFunction: null,
    staticsStrategy: 'copy',
    prototypeStrategy: 'copy',
    decoratorInheritance: 'deep',
};

// Keeps track of constituent classes for every mixin class created by ts-mixer.
const mixins = new Map();
const getMixinsForClass = (clazz) => mixins.get(clazz);
const registerMixins = (mixedClass, constituents) => mixins.set(mixedClass, constituents);
const hasMixin = (instance, mixin) => {
    if (instance instanceof mixin)
        return true;
    const constructor = instance.constructor;
    const visited = new Set();
    let frontier = new Set();
    frontier.add(constructor);
    while (frontier.size > 0) {
        // check if the frontier has the mixin we're looking for.  if not, we can say we visited every item in the frontier
        if (frontier.has(mixin))
            return true;
        frontier.forEach(item => visited.add(item));
        // build a new frontier based on the associated mixin classes and prototype chains of each frontier item
        const newFrontier = new Set();
        frontier.forEach(item => {
            var _a;
            const itemConstituents = (_a = mixins.get(item)) !== null && _a !== void 0 ? _a : protoChain(item.prototype).map(proto => proto.constructor).filter(item => item !== null);
            if (itemConstituents)
                itemConstituents.forEach(constituent => {
                    if (!visited.has(constituent) && !frontier.has(constituent))
                        newFrontier.add(constituent);
                });
        });
        // we have a new frontier, now search again
        frontier = newFrontier;
    }
    // if we get here, we couldn't find the mixin anywhere in the prototype chain or associated mixin classes
    return false;
};

const mergeObjectsOfDecorators = (o1, o2) => {
    var _a, _b;
    const allKeys = unique([...Object.getOwnPropertyNames(o1), ...Object.getOwnPropertyNames(o2)]);
    const mergedObject = {};
    for (let key of allKeys)
        mergedObject[key] = unique([...((_a = o1 === null || o1 === void 0 ? void 0 : o1[key]) !== null && _a !== void 0 ? _a : []), ...((_b = o2 === null || o2 === void 0 ? void 0 : o2[key]) !== null && _b !== void 0 ? _b : [])]);
    return mergedObject;
};
const mergePropertyAndMethodDecorators = (d1, d2) => {
    var _a, _b, _c, _d;
    return ({
        property: mergeObjectsOfDecorators((_a = d1 === null || d1 === void 0 ? void 0 : d1.property) !== null && _a !== void 0 ? _a : {}, (_b = d2 === null || d2 === void 0 ? void 0 : d2.property) !== null && _b !== void 0 ? _b : {}),
        method: mergeObjectsOfDecorators((_c = d1 === null || d1 === void 0 ? void 0 : d1.method) !== null && _c !== void 0 ? _c : {}, (_d = d2 === null || d2 === void 0 ? void 0 : d2.method) !== null && _d !== void 0 ? _d : {}),
    });
};
const mergeDecorators = (d1, d2) => {
    var _a, _b, _c, _d, _e, _f;
    return ({
        class: unique([...(_a = d1 === null || d1 === void 0 ? void 0 : d1.class) !== null && _a !== void 0 ? _a : [], ...(_b = d2 === null || d2 === void 0 ? void 0 : d2.class) !== null && _b !== void 0 ? _b : []]),
        static: mergePropertyAndMethodDecorators((_c = d1 === null || d1 === void 0 ? void 0 : d1.static) !== null && _c !== void 0 ? _c : {}, (_d = d2 === null || d2 === void 0 ? void 0 : d2.static) !== null && _d !== void 0 ? _d : {}),
        instance: mergePropertyAndMethodDecorators((_e = d1 === null || d1 === void 0 ? void 0 : d1.instance) !== null && _e !== void 0 ? _e : {}, (_f = d2 === null || d2 === void 0 ? void 0 : d2.instance) !== null && _f !== void 0 ? _f : {}),
    });
};
const decorators = new Map();
const findAllConstituentClasses = (...classes) => {
    var _a;
    const allClasses = new Set();
    const frontier = new Set([...classes]);
    while (frontier.size > 0) {
        for (let clazz of frontier) {
            const protoChainClasses = protoChain(clazz.prototype).map(proto => proto.constructor);
            const mixinClasses = (_a = getMixinsForClass(clazz)) !== null && _a !== void 0 ? _a : [];
            const potentiallyNewClasses = [...protoChainClasses, ...mixinClasses];
            const newClasses = potentiallyNewClasses.filter(c => !allClasses.has(c));
            for (let newClass of newClasses)
                frontier.add(newClass);
            allClasses.add(clazz);
            frontier.delete(clazz);
        }
    }
    return [...allClasses];
};
const deepDecoratorSearch = (...classes) => {
    const decoratorsForClassChain = findAllConstituentClasses(...classes)
        .map(clazz => decorators.get(clazz))
        .filter(decorators => !!decorators);
    if (decoratorsForClassChain.length == 0)
        return {};
    if (decoratorsForClassChain.length == 1)
        return decoratorsForClassChain[0];
    return decoratorsForClassChain.reduce((d1, d2) => mergeDecorators(d1, d2));
};
const directDecoratorSearch = (...classes) => {
    const classDecorators = classes.map(clazz => getDecoratorsForClass(clazz));
    if (classDecorators.length === 0)
        return {};
    if (classDecorators.length === 1)
        return classDecorators[0];
    return classDecorators.reduce((d1, d2) => mergeDecorators(d1, d2));
};
const getDecoratorsForClass = (clazz) => {
    let decoratorsForClass = decorators.get(clazz);
    if (!decoratorsForClass) {
        decoratorsForClass = {};
        decorators.set(clazz, decoratorsForClass);
    }
    return decoratorsForClass;
};
const decorateClass = (decorator) => ((clazz) => {
    const decoratorsForClass = getDecoratorsForClass(clazz);
    let classDecorators = decoratorsForClass.class;
    if (!classDecorators) {
        classDecorators = [];
        decoratorsForClass.class = classDecorators;
    }
    classDecorators.push(decorator);
    return decorator(clazz);
});
const decorateMember = (decorator) => ((object, key, ...otherArgs) => {
    var _a, _b, _c;
    const decoratorTargetType = typeof object === 'function' ? 'static' : 'instance';
    const decoratorType = typeof object[key] === 'function' ? 'method' : 'property';
    const clazz = decoratorTargetType === 'static' ? object : object.constructor;
    const decoratorsForClass = getDecoratorsForClass(clazz);
    const decoratorsForTargetType = (_a = decoratorsForClass === null || decoratorsForClass === void 0 ? void 0 : decoratorsForClass[decoratorTargetType]) !== null && _a !== void 0 ? _a : {};
    decoratorsForClass[decoratorTargetType] = decoratorsForTargetType;
    let decoratorsForType = (_b = decoratorsForTargetType === null || decoratorsForTargetType === void 0 ? void 0 : decoratorsForTargetType[decoratorType]) !== null && _b !== void 0 ? _b : {};
    decoratorsForTargetType[decoratorType] = decoratorsForType;
    let decoratorsForKey = (_c = decoratorsForType === null || decoratorsForType === void 0 ? void 0 : decoratorsForType[key]) !== null && _c !== void 0 ? _c : [];
    decoratorsForType[key] = decoratorsForKey;
    // @ts-ignore: array is type `A[] | B[]` and item is type `A | B`, so technically a type error, but it's fine
    decoratorsForKey.push(decorator);
    // @ts-ignore
    return decorator(object, key, ...otherArgs);
});
const decorate = (decorator) => ((...args) => {
    if (args.length === 1)
        return decorateClass(decorator)(args[0]);
    return decorateMember(decorator)(...args);
});

function Mixin(...constructors) {
    var _a, _b, _c;
    const prototypes = constructors.map(constructor => constructor.prototype);
    // Here we gather up the init functions of the ingredient prototypes, combine them into one init function, and
    // attach it to the mixed class prototype.  The reason we do this is because we want the init functions to mix
    // similarly to constructors -- not methods, which simply override each other.
    const initFunctionName = settings.initFunction;
    if (initFunctionName !== null) {
        const initFunctions = prototypes
            .map(proto => proto[initFunctionName])
            .filter(func => typeof func === 'function');
        const combinedInitFunction = function (...args) {
            for (let initFunction of initFunctions)
                initFunction.apply(this, args);
        };
        const extraProto = { [initFunctionName]: combinedInitFunction };
        prototypes.push(extraProto);
    }
    function MixedClass(...args) {
        for (const constructor of constructors)
            // @ts-ignore: potentially abstract class
            copyProps(this, new constructor(...args));
        if (initFunctionName !== null && typeof this[initFunctionName] === 'function')
            this[initFunctionName].apply(this, args);
    }
    MixedClass.prototype = settings.prototypeStrategy === 'copy'
        ? hardMixProtos(prototypes, MixedClass)
        : softMixProtos(prototypes, MixedClass);
    Object.setPrototypeOf(MixedClass, settings.staticsStrategy === 'copy'
        ? hardMixProtos(constructors, null, ['prototype'])
        : proxyMix(constructors, Function.prototype));
    let DecoratedMixedClass = MixedClass;
    if (settings.decoratorInheritance !== 'none') {
        const classDecorators = settings.decoratorInheritance === 'deep'
            ? deepDecoratorSearch(...constructors)
            : directDecoratorSearch(...constructors);
        for (let decorator of (_a = classDecorators === null || classDecorators === void 0 ? void 0 : classDecorators.class) !== null && _a !== void 0 ? _a : []) {
            const result = decorator(DecoratedMixedClass);
            if (result) {
                DecoratedMixedClass = result;
            }
        }
        applyPropAndMethodDecorators((_b = classDecorators === null || classDecorators === void 0 ? void 0 : classDecorators.static) !== null && _b !== void 0 ? _b : {}, DecoratedMixedClass);
        applyPropAndMethodDecorators((_c = classDecorators === null || classDecorators === void 0 ? void 0 : classDecorators.instance) !== null && _c !== void 0 ? _c : {}, DecoratedMixedClass.prototype);
    }
    registerMixins(DecoratedMixedClass, constructors);
    return DecoratedMixedClass;
}
const applyPropAndMethodDecorators = (propAndMethodDecorators, target) => {
    const propDecorators = propAndMethodDecorators.property;
    const methodDecorators = propAndMethodDecorators.method;
    if (propDecorators)
        for (let key in propDecorators)
            for (let decorator of propDecorators[key])
                decorator(target, key);
    if (methodDecorators)
        for (let key in methodDecorators)
            for (let decorator of methodDecorators[key])
                decorator(target, key, Object.getOwnPropertyDescriptor(target, key));
};
/**
 * A decorator version of the `Mixin` function.  You'll want to use this instead of `Mixin` for mixing generic classes.
 */
const mix = (...ingredients) => decoratedClass => {
    // @ts-ignore
    const mixedClass = Mixin(...ingredients.concat([decoratedClass]));
    Object.defineProperty(mixedClass, 'name', {
        value: decoratedClass.name,
        writable: false,
    });
    return mixedClass;
};




/***/ }),

/***/ 2970:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
  function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
      }
      catch (e) {
          fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});


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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src)
});

// EXTERNAL MODULE: ../../node_modules/events/events.js
var events = __webpack_require__(2699);
var events_default = /*#__PURE__*/__webpack_require__.n(events);
// EXTERNAL MODULE: ../connect/lib/exports.js
var lib_exports = __webpack_require__(654);
// EXTERNAL MODULE: ../connect/lib/factory.js
var factory = __webpack_require__(3329);
// EXTERNAL MODULE: ../connect/lib/utils/debug.js
var debug = __webpack_require__(6521);
// EXTERNAL MODULE: ../utils/lib/index.js
var lib = __webpack_require__(4542);
// EXTERNAL MODULE: ../connect/lib/utils/urlUtils.js
var urlUtils = __webpack_require__(3163);
// EXTERNAL MODULE: ../utils/lib/createDeferred.js
var createDeferred = __webpack_require__(7686);
// EXTERNAL MODULE: ../utils/lib/typedEventEmitter.js
var typedEventEmitter = __webpack_require__(8750);
// EXTERNAL MODULE: ../utils/lib/scheduleAction.js
var scheduleAction = __webpack_require__(1847);
;// CONCATENATED MODULE: ../connect-common/src/messageChannel/abstract.ts
/**
 * IMPORTS WARNING
 * this file is bundled into content script so be careful what you are importing not to bloat the bundle
 */





// todo: I can't import Log from connect to connect-common (connect imports from connect-common).
// so logger should be probably moved to connect common, or this file should be moved to connect
// import type { Log } from '@trezor/connect/lib/utils/debug';

/**
 * concepts:
 * - it handshakes automatically with the other side of the channel
 * - it queues messages fired before handshake and sends them after handshake is done
 */
class AbstractMessageChannel extends typedEventEmitter/* TypedEmitter */.s {
  messagePromises = {};
  /** queue of messages that were scheduled before handshake */
  messagesQueue = [];
  messageID = 0;
  handshakeMaxRetries = 5;
  handshakeRetryInterval = 2000;

  /**
   * function that passes data to the other side of the channel
   */

  /**
   * channel identifiers that pairs AbstractMessageChannel instances on sending and receiving end together
   */

  constructor({
    sendFn,
    channel,
    logger
  }) {
    super();
    this.channel = channel;
    this.sendFn = sendFn;
    this.logger = logger;
  }

  /**
   * initiates handshake sequence with peer. resolves after communication with peer is established
   */
  init() {
    if (!this.handshakeFinished) {
      this.handshakeFinished = (0,createDeferred.createDeferred)();
      this.handshakeWithPeer();
    }
    return this.handshakeFinished.promise;
  }

  /**
   * handshake between both parties of the channel.
   * both parties initiate handshake procedure and keep asking over time in a loop until they time out or receive confirmation from peer
   */
  handshakeWithPeer() {
    this.logger?.log(this.channel.here, 'handshake');
    return (0,scheduleAction.scheduleAction)(async () => {
      this.postMessage({
        type: 'channel-handshake-request',
        data: {
          success: true,
          payload: undefined
        }
      }, {
        usePromise: false,
        useQueue: false
      });
      await this.handshakeFinished?.promise;
    }, {
      attempts: this.handshakeMaxRetries,
      timeout: this.handshakeRetryInterval
    }).then(() => {
      this.logger?.log(this.channel.here, 'handshake confirmed');
      this.messagesQueue.forEach(message => {
        message.channel = this.channel;
        this.sendFn(message);
      });
      this.messagesQueue = [];
    }).catch(() => {
      this.handshakeFinished?.reject(new Error('handshake failed'));
      this.handshakeFinished = undefined;
    });
  }

  /**
   * message received from communication channel in descendants of this class
   * should be handled by this common onMessage method
   */
  onMessage(message) {
    const {
      channel,
      id,
      type,
      payload,
      success
    } = message;
    if (!channel?.peer || channel.peer !== this.channel.here) {
      return;
    }
    if (!channel?.here || this.channel.peer !== channel.here) {
      return;
    }
    if (type === 'channel-handshake-request') {
      this.postMessage({
        type: 'channel-handshake-confirm',
        data: {
          success: true,
          payload: undefined
        }
      }, {
        usePromise: false,
        useQueue: false
      });
      return;
    }
    if (type === 'channel-handshake-confirm') {
      this.handshakeFinished?.resolve(undefined);
      return;
    }
    if (this.messagePromises[id]) {
      this.messagePromises[id].resolve({
        id,
        payload,
        success
      });
      delete this.messagePromises[id];
    }
    const messagePromisesLength = Object.keys(this.messagePromises).length;
    if (messagePromisesLength > 5) {
      this.logger.warn(`too many message promises (${messagePromisesLength}). this feels unexpected!`);
    }
    this.emit('message', message);
  }

  // todo: outgoing messages should be typed
  postMessage(message, {
    usePromise = true,
    useQueue = true
  } = {}) {
    message.channel = this.channel;
    if (!usePromise) {
      try {
        this.sendFn(message);
      } catch (err) {
        if (useQueue) {
          this.messagesQueue.push(message);
        }
      }
      return;
    }
    this.messageID++;
    message.id = this.messageID;
    this.messagePromises[message.id] = (0,createDeferred.createDeferred)();
    try {
      this.sendFn(message);
    } catch (err) {
      if (useQueue) {
        this.messagesQueue.push(message);
      }
    }
    return this.messagePromises[message.id].promise;
  }
}
;// CONCATENATED MODULE: ./src/channels/serviceworker-window.ts


/**
 * Communication channel between:
 * - here: chrome message port (in service worker)
 * - peer: window.onMessage in trezor-content-script
 */
class ServiceWorkerWindowChannel extends AbstractMessageChannel {
  constructor({
    name,
    channel,
    logger
  }) {
    super({
      channel,
      sendFn: message => {
        if (!this.port) throw new Error('port not assigned');
        this.port.postMessage(message);
      },
      logger
    });
    chrome.runtime.onConnect.addListener(port => {
      if (port.name !== name) return;
      this.port = port;
      this.port.onMessage.addListener((message, {
        sender
      }) => {
        if (!sender) {
          this.logger?.error('service-worker-window', 'no sender');
          return;
        }
        const {
          origin
        } = sender;
        const whitelist = ['https://connect.trezor.io', 'https://staging-connect.trezor.io', 'https://suite.corp.sldev.cz', 'http://localhost:8088'];
        if (!origin) {
          this.logger?.error('connect-webextension/messageChannel/extensionPort/onMessage', 'no origin');
          return;
        }
        if (!whitelist.includes(origin)) {
          this.logger?.error('connect-webextension/messageChannel/extensionPort/onMessage', 'origin not whitelisted', origin);
          return;
        }

        // eslint-disable-next-line no-restricted-globals
        if (origin === self.origin) {
          return;
        }
        this.onMessage(message);
      });
    });
  }
  disconnect() {
    this.port?.disconnect();
  }
}
;// CONCATENATED MODULE: ./src/popup.ts
// origin: https://github.com/trezor/connect/blob/develop/src/js/popup/PopupManager.js



class PopupManager extends (events_default()) {
  locked = false;
  extensionTabId = 0;
  constructor(settings, {
    logger
  }) {
    super();
    this.settings = settings;
    this.origin = (0,urlUtils/* getOrigin */.P$)(settings.popupSrc);
    this.logger = logger;
    this.channel = new ServiceWorkerWindowChannel({
      name: 'trezor-connect',
      channel: {
        here: '@trezor/connect-webextension',
        peer: '@trezor/connect-content-script'
      },
      logger
    });
    this.channel.init();
  }
  request() {
    // popup request
    // bring popup window to front
    if (this.locked) {
      if (this.popupWindow?.id) {
        chrome.tabs.update(this.popupWindow.id, {
          active: true
        });
      }
      return;
    }

    // When requesting a popup window and there is a reference to popup window and it is not locked
    // we close it so we can open a new one.
    // This is necessary when popup window is in error state and we want to open a new one.
    if (this.popupWindow && !this.locked) {
      this.close();
    }
    const openFn = this.open.bind(this);
    this.locked = true;
    openFn();
  }
  unlock() {
    this.locked = false;
  }

  // create a special content script to be injected into log.html and stop sending logs over popup
  open() {
    const url = `${this.settings.popupSrc}`;
    chrome.windows.getCurrent(currentWindow => {
      this.logger.debug('opening popup. currentWindow: ', currentWindow);

      // Request coming from extension popup,
      // create new window above instead of opening new tab
      if (currentWindow.type !== 'normal') {
        // todo: when is this actually used?
        chrome.windows.create({
          url
        }, newWindow => {
          chrome.tabs.query({
            windowId: newWindow?.id,
            active: true
          }, tabs => {
            // eslint-disable-next-line prefer-destructuring
            this.popupWindow = tabs[0];
            this.injectContentScript(this.popupWindow.id);
          });
        });
      } else {
        chrome.tabs.query({
          currentWindow: true,
          active: true
        }, tabs => {
          this.extensionTabId = tabs[0].id;
          chrome.tabs.create({
            url,
            index: tabs[0].index + 1
          }, tab => {
            this.popupWindow = tab;
            this.injectContentScript(tab.id);
          });
        });
      }
    });
  }
  injectContentScript = tabId => {
    chrome.scripting.executeScript({
      target: {
        tabId
      },
      // content script is injected into body of func in build time.
      func: () => {
        /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 686:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.d = void 0;
const createDeferred = id => {
  let localResolve = () => {};
  let localReject = () => {};
  const promise = new Promise((resolve, reject) => {
    localResolve = resolve;
    localReject = reject;
  });
  return {
    id,
    resolve: localResolve,
    reject: localReject,
    promise
  };
};
exports.d = createDeferred;

/***/ }),

/***/ 847:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.W = void 0;
const tslib_1 = __webpack_require__(970);
const isArray = attempts => Array.isArray(attempts);
const abortedBySignal = () => new Error('Aborted by signal');
const abortedByDeadline = () => new Error('Aborted by deadline');
const abortedByTimeout = () => new Error('Aborted by timeout');
const resolveAfterMs = (ms, clear) => new Promise((resolve, reject) => {
  if (clear.aborted) return reject();
  if (ms === undefined) return resolve();
  const timeout = setTimeout(resolve, ms);
  const onClear = () => {
    clearTimeout(timeout);
    clear.removeEventListener('abort', onClear);
    reject();
  };
  clear.addEventListener('abort', onClear);
});
const rejectAfterMs = (ms, reason, clear) => new Promise((_, reject) => {
  if (clear.aborted) return reject();
  const timeout = ms !== undefined ? setTimeout(() => reject(reason()), ms) : undefined;
  const onClear = () => {
    clearTimeout(timeout);
    clear.removeEventListener('abort', onClear);
    reject();
  };
  clear.addEventListener('abort', onClear);
});
const rejectWhenAborted = (signal, clear) => new Promise((_, reject) => {
  if (clear.aborted) return reject();
  if (signal === null || signal === void 0 ? void 0 : signal.aborted) return reject(abortedBySignal());
  const onAbort = () => reject(abortedBySignal());
  signal === null || signal === void 0 ? void 0 : signal.addEventListener('abort', onAbort);
  const onClear = () => {
    signal === null || signal === void 0 ? void 0 : signal.removeEventListener('abort', onAbort);
    clear.removeEventListener('abort', onClear);
    reject();
  };
  clear.addEventListener('abort', onClear);
});
const resolveAction = (action, clear) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
  const aborter = new AbortController();
  const onClear = () => aborter.abort();
  if (clear.aborted) onClear();
  clear.addEventListener('abort', onClear);
  try {
    return yield new Promise(resolve => resolve(action(aborter.signal)));
  } finally {
    clear.removeEventListener('abort', onClear);
  }
});
const attemptLoop = (attempts, attempt, failure, clear) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
  for (let a = 0; a < attempts - 1; a++) {
    if (clear.aborted) break;
    const aborter = new AbortController();
    const onClear = () => aborter.abort();
    clear.addEventListener('abort', onClear);
    try {
      return yield attempt(a, aborter.signal);
    } catch (_a) {
      onClear();
      yield failure(a);
    } finally {
      clear.removeEventListener('abort', onClear);
    }
  }
  return clear.aborted ? Promise.reject() : attempt(attempts - 1, clear);
});
const scheduleAction = (action, params) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
  const {
    signal,
    delay,
    attempts,
    timeout,
    deadline,
    gap
  } = params;
  const deadlineMs = deadline && deadline - Date.now();
  const attemptCount = isArray(attempts) ? attempts.length : attempts !== null && attempts !== void 0 ? attempts : deadline ? Infinity : 1;
  const clearAborter = new AbortController();
  const clear = clearAborter.signal;
  const getParams = isArray(attempts) ? attempt => attempts[attempt] : () => ({
    timeout,
    gap
  });
  try {
    return yield Promise.race([rejectWhenAborted(signal, clear), rejectAfterMs(deadlineMs, abortedByDeadline, clear), resolveAfterMs(delay, clear).then(() => attemptLoop(attemptCount, (attempt, abort) => Promise.race([rejectAfterMs(getParams(attempt).timeout, abortedByTimeout, clear), resolveAction(action, abort)]), attempt => {
      var _a;
      return resolveAfterMs((_a = getParams(attempt).gap) !== null && _a !== void 0 ? _a : 0, clear);
    }, clear))]);
  } finally {
    clearAborter.abort();
  }
});
exports.W = scheduleAction;

/***/ }),

/***/ 750:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.s = void 0;
const events_1 = __webpack_require__(699);
class TypedEmitter extends events_1.EventEmitter {
  listenerCount(eventName) {
    return super.listenerCount(eventName);
  }
}
exports.s = TypedEmitter;

/***/ }),

/***/ 699:
/***/ ((module) => {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),

/***/ 970:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
  function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
      }
      catch (e) {
          fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});


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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ../utils/lib/createDeferred.js
var createDeferred = __webpack_require__(686);
// EXTERNAL MODULE: ../utils/lib/typedEventEmitter.js
var typedEventEmitter = __webpack_require__(750);
// EXTERNAL MODULE: ../utils/lib/scheduleAction.js
var scheduleAction = __webpack_require__(847);
;// CONCATENATED MODULE: ../connect-common/src/messageChannel/abstract.ts
/**
 * IMPORTS WARNING
 * this file is bundled into content script so be careful what you are importing not to bloat the bundle
 */





// todo: I can't import Log from connect to connect-common (connect imports from connect-common).
// so logger should be probably moved to connect common, or this file should be moved to connect
// import type { Log } from '@trezor/connect/lib/utils/debug';

/**
 * concepts:
 * - it handshakes automatically with the other side of the channel
 * - it queues messages fired before handshake and sends them after handshake is done
 */
class AbstractMessageChannel extends typedEventEmitter/* TypedEmitter */.s {
  messagePromises = {};
  /** queue of messages that were scheduled before handshake */
  messagesQueue = [];
  messageID = 0;
  handshakeMaxRetries = 5;
  handshakeRetryInterval = 2000;

  /**
   * function that passes data to the other side of the channel
   */

  /**
   * channel identifiers that pairs AbstractMessageChannel instances on sending and receiving end together
   */

  constructor({
    sendFn,
    channel,
    logger
  }) {
    super();
    this.channel = channel;
    this.sendFn = sendFn;
    this.logger = logger;
  }

  /**
   * initiates handshake sequence with peer. resolves after communication with peer is established
   */
  init() {
    if (!this.handshakeFinished) {
      this.handshakeFinished = (0,createDeferred/* createDeferred */.d)();
      this.handshakeWithPeer();
    }
    return this.handshakeFinished.promise;
  }

  /**
   * handshake between both parties of the channel.
   * both parties initiate handshake procedure and keep asking over time in a loop until they time out or receive confirmation from peer
   */
  handshakeWithPeer() {
    this.logger?.log(this.channel.here, 'handshake');
    return (0,scheduleAction/* scheduleAction */.W)(async () => {
      this.postMessage({
        type: 'channel-handshake-request',
        data: {
          success: true,
          payload: undefined
        }
      }, {
        usePromise: false,
        useQueue: false
      });
      await this.handshakeFinished?.promise;
    }, {
      attempts: this.handshakeMaxRetries,
      timeout: this.handshakeRetryInterval
    }).then(() => {
      this.logger?.log(this.channel.here, 'handshake confirmed');
      this.messagesQueue.forEach(message => {
        message.channel = this.channel;
        this.sendFn(message);
      });
      this.messagesQueue = [];
    }).catch(() => {
      this.handshakeFinished?.reject(new Error('handshake failed'));
      this.handshakeFinished = undefined;
    });
  }

  /**
   * message received from communication channel in descendants of this class
   * should be handled by this common onMessage method
   */
  onMessage(message) {
    const {
      channel,
      id,
      type,
      payload,
      success
    } = message;
    if (!channel?.peer || channel.peer !== this.channel.here) {
      return;
    }
    if (!channel?.here || this.channel.peer !== channel.here) {
      return;
    }
    if (type === 'channel-handshake-request') {
      this.postMessage({
        type: 'channel-handshake-confirm',
        data: {
          success: true,
          payload: undefined
        }
      }, {
        usePromise: false,
        useQueue: false
      });
      return;
    }
    if (type === 'channel-handshake-confirm') {
      this.handshakeFinished?.resolve(undefined);
      return;
    }
    if (this.messagePromises[id]) {
      this.messagePromises[id].resolve({
        id,
        payload,
        success
      });
      delete this.messagePromises[id];
    }
    const messagePromisesLength = Object.keys(this.messagePromises).length;
    if (messagePromisesLength > 5) {
      this.logger.warn(`too many message promises (${messagePromisesLength}). this feels unexpected!`);
    }
    this.emit('message', message);
  }

  // todo: outgoing messages should be typed
  postMessage(message, {
    usePromise = true,
    useQueue = true
  } = {}) {
    message.channel = this.channel;
    if (!usePromise) {
      try {
        this.sendFn(message);
      } catch (err) {
        if (useQueue) {
          this.messagesQueue.push(message);
        }
      }
      return;
    }
    this.messageID++;
    message.id = this.messageID;
    this.messagePromises[message.id] = (0,createDeferred/* createDeferred */.d)();
    try {
      this.sendFn(message);
    } catch (err) {
      if (useQueue) {
        this.messagesQueue.push(message);
      }
    }
    return this.messagePromises[message.id].promise;
  }
}
;// CONCATENATED MODULE: ./src/channels/window-serviceworker.ts


/**
 * Communication channel between:
 * - here: chrome message port (in service worker)
 * - peer: window.onMessage in trezor-content-script
 */

class WindowServiceWorkerChannel extends AbstractMessageChannel {
  constructor({
    name,
    channel
  }) {
    super({
      channel,
      sendFn: message => {
        if (!this.port) throw new Error('port not assigned');
        this.port.postMessage(message);
      }
    });
    const port = chrome.runtime.connect({
      name
    });
    this.port = port;
    this.port.onMessage.addListener(message => {
      if (message.channel.here === this.channel.here) return;
      this.onMessage(message);
    });
  }
  disconnect() {
    this.port?.disconnect();
  }
}
;// CONCATENATED MODULE: ./src/contentScript.ts


/**
 * communication between service worker and both webextension and popup manager
 */
const channel = new WindowServiceWorkerChannel({
  name: 'trezor-connect',
  channel: {
    here: '@trezor/connect-content-script',
    peer: '@trezor/connect-webextension'
  }
});
channel.init().then(() => {
  // once script is loaded. send information about the webextension that injected it into the popup
  window.postMessage({
    type: 'popup-content-script-loaded',
    payload: {
      ...chrome.runtime.getManifest(),
      id: chrome.runtime.id
    }
  }, window.location.origin);

  /**
   * Passing messages from service worker to popup
   */
  channel.on('message', message => {
    window.postMessage(message, window.location.origin);
  });

  /*
   * Passing messages from popup to service worker
   */
  window.addEventListener('message', event => {
    if (event.data?.channel?.here === '@trezor/connect-webextension' || event.data?.type === 'popup-content-script-loaded') {
      return;
    }
    if (event.source === window && event.data) {
      channel.postMessage(event.data, {
        usePromise: false
      });
    }
  });
});
})();

/******/ })()
;
      }
    }).then(() => this.logger.debug('content script injected')).catch(error => this.logger.error('content script injection error', error));
  };
  clear(focus = true) {
    this.locked = false;
    if (this.channel) {
      this.channel.disconnect();
    }

    // switch to previously focused tab

    if (focus && this.extensionTabId) {
      chrome.tabs.update(this.extensionTabId, {
        active: true
      });
      this.extensionTabId = 0;
    }
  }
  close() {
    if (!this.popupWindow?.id) return;
    this.logger.debug('closing popup', this.popupWindow.id);
    let e = chrome.runtime.lastError;
    chrome.tabs.remove(this.popupWindow.id, () => {
      e = chrome.runtime.lastError;
      if (e) {
        this.logger.error('closed with error', e);
      }
    });
  }
}
;// CONCATENATED MODULE: ./src/connectSettings.ts

const getEnv = () => 'webextension';

/**
 * Settings from host
 * @param input Partial<ConnectSettings>
 */
const parseConnectSettings = (input = {}) => {
  const settings = {
    popup: true,
    ...input
  };
  if (typeof input.env !== 'string') {
    settings.env = getEnv();
  }
  return (0,lib_exports.parseConnectSettings)(settings);
};
;// CONCATENATED MODULE: ./src/index.ts


// NOTE: @trezor/connect part is intentionally not imported from the index due to NormalReplacementPlugin
// in packages/suite-build/configs/web.webpack.config.ts






const eventEmitter = new (events_default())();
let _settings = parseConnectSettings();

/**
 * setup logger.
 * service worker cant communicate directly with sharedworker logger so the communication is as follows:
 * - service worker -> content script -> popup -> sharedworker
 * todo: this could be simplified by injecting additional content script into log.html
 */
const logger = (0,debug/* initLog */.KR)('@trezor/connect-webextension');
const popupManagerLogger = (0,debug/* initLog */.KR)('@trezor/connect-webextension/popupManager');
let _popupManager;
const logWriterFactory = popupManager => ({
  add: message => {
    popupManager.channel.postMessage({
      event: lib_exports.UI_EVENT,
      type: lib_exports.IFRAME.LOG,
      payload: message
    }, {
      usePromise: false,
      useQueue: true
    });
  }
});
const manifest = data => {
  _settings = parseConnectSettings({
    ..._settings,
    manifest: data
  });
};
const dispose = () => {
  eventEmitter.removeAllListeners();
  _settings = parseConnectSettings();
  if (_popupManager) {
    _popupManager.close();
  }
  return Promise.resolve(undefined);
};
const cancel = error => {
  if (_popupManager) {
    _popupManager.emit(lib_exports.POPUP.CLOSED, error);
  }
};
const handshakePromise = (0,lib.createDeferred)();
const init = (settings = {}) => {
  logger.debug('initiating');
  _settings = parseConnectSettings({
    ..._settings,
    ...settings
  });
  if (!_popupManager) {
    _popupManager = new PopupManager(_settings, {
      logger: popupManagerLogger
    });
    (0,debug/* setLogWriter */.Yn)(() => logWriterFactory(_popupManager));
  }
  logger.enabled = !!settings.debug;
  if (!_settings.manifest) {
    throw lib_exports.ERRORS.TypedError('Init_ManifestMissing');
  }

  // defaults for connect-webextension
  if (!_settings.transports?.length) {
    _settings.transports = ['BridgeTransport', 'WebUsbTransport'];
  }
  _popupManager.channel.on('message', message => {
    if (message.type === lib_exports.POPUP.CORE_LOADED) {
      _popupManager.channel.postMessage({
        type: lib_exports.POPUP.HANDSHAKE,
        // in this case, settings will be validated in popup
        payload: {
          settings: _settings
        }
      });
      handshakePromise.resolve();
    }
  });
  logger.debug('initiated');
  return Promise.resolve();
};

/**
 * 1. opens popup
 * 2. sends request to popup where the request is handled by core
 * 3. returns response
 */
const call = async params => {
  logger.debug('call', params);

  // request popup window it might be used in the future
  if (_settings.popup) {
    _popupManager.request();
  }
  await _popupManager.channel.init();
  _popupManager.channel.postMessage({
    type: lib_exports.POPUP.INIT,
    payload: {
      settings: _settings,
      useCore: true
    }
  });
  await handshakePromise.promise;

  // post message to core in popup
  try {
    const response = await _popupManager.channel.postMessage({
      type: lib_exports.IFRAME.CALL,
      payload: params
    });
    logger.debug('call: response: ', response);
    if (response) {
      return response;
    }
    return (0,lib_exports.createErrorMessage)(lib_exports.ERRORS.TypedError('Method_NoResponse'));
  } catch (error) {
    logger.error('call: error', error);
    _popupManager.clear();
    return (0,lib_exports.createErrorMessage)(error);
  }
};
const uiResponse = response => {
  const {
    type,
    payload
  } = response;
  _popupManager.channel.postMessage({
    event: lib_exports.UI_EVENT,
    type,
    payload
  });
};
const renderWebUSBButton = () => {};
const requestLogin = () => {
  // todo: not supported yet
  throw lib_exports.ERRORS.TypedError('Method_InvalidPackage');
};
const disableWebUSB = () => {
  // todo: not supported yet, probably not needed
  throw lib_exports.ERRORS.TypedError('Method_InvalidPackage');
};
const requestWebUSBDevice = () => {
  // not needed - webusb pairing happens in popup
  throw lib_exports.ERRORS.TypedError('Method_InvalidPackage');
};
const TrezorConnect = (0,factory/* factory */.d)({
  eventEmitter,
  manifest,
  init,
  call,
  requestLogin,
  uiResponse,
  renderWebUSBButton,
  disableWebUSB,
  requestWebUSBDevice,
  cancel,
  dispose
});

// eslint-disable-next-line import/no-default-export
/* harmony default export */ const src = (TrezorConnect);

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});