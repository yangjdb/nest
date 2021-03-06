"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route_paramtypes_enum_1 = require("@nestjs/common/enums/route-paramtypes.enum");
class RouteParamsFactory {
    exchangeKeyForValue(key, data, { req, res, next }) {
        switch (key) {
            case route_paramtypes_enum_1.RouteParamtypes.NEXT: return next;
            case route_paramtypes_enum_1.RouteParamtypes.REQUEST: return req;
            case route_paramtypes_enum_1.RouteParamtypes.RESPONSE: return res;
            case route_paramtypes_enum_1.RouteParamtypes.BODY: return data && req.body ? req.body[data] : req.body;
            case route_paramtypes_enum_1.RouteParamtypes.PARAM: return data ? req.params[data] : req.params;
            case route_paramtypes_enum_1.RouteParamtypes.QUERY: return data ? req.query[data] : req.query;
            case route_paramtypes_enum_1.RouteParamtypes.HEADERS: return data ? req.headers[data] : req.headers;
            case route_paramtypes_enum_1.RouteParamtypes.SESSION: return req.session;
            default: return null;
        }
    }
}
exports.RouteParamsFactory = RouteParamsFactory;
