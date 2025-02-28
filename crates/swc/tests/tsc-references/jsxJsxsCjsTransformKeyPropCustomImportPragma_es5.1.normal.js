// @jsx: react-jsx,react-jsxdev
// @strict: true
// @module: commonjs
// @filename: preact.tsx
/// <reference path="/.lib/react16.d.ts" />
/* @jsxImportSource preact */ import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _object_spread_props from "@swc/helpers/src/_object_spread_props.mjs";
import { jsx as _jsx } from "preact/jsx-runtime";
import { createElement as _createElement } from "react";
var props = {
    answer: 42
};
var a = /*#__PURE__*/ _jsx("div", _object_spread_props(_object_spread({}, props), {
    children: "text"
}), "foo");
var b = /*#__PURE__*/ _createElement("div", _object_spread_props(_object_spread({}, props), {
    key: "bar"
}), "text");
export { };
// @filename: react.tsx
/// <reference path="/.lib/react16.d.ts" />
/* @jsxImportSource react */ import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _object_spread_props from "@swc/helpers/src/_object_spread_props.mjs";
import { jsx as _jsx } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
import "./preact";
var props2 = {
    answer: 42
};
var a2 = /*#__PURE__*/ _jsx("div", _object_spread_props(_object_spread({}, props2), {
    children: "text"
}), "foo");
var b2 = /*#__PURE__*/ _createElement("div", _object_spread_props(_object_spread({}, props2), {
    key: "bar"
}), "text");
