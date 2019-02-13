var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import Authorized from '../components/Authorized';
import { secured } from './index';
export function renderAuthorized(options) {
    return {
        Authorized: function (props) { return (React.createElement(Authorized, __assign({}, options, props))); },
        secured: function (otherOptions) { return secured(__assign({}, options, otherOptions)); },
    };
}