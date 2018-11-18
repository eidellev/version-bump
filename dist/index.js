"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:radix */
const fp_1 = require("lodash/fp");
var ReleaseLevels;
(function (ReleaseLevels) {
    ReleaseLevels[ReleaseLevels["PATCH"] = 2] = "PATCH";
    ReleaseLevels[ReleaseLevels["MINOR"] = 1] = "MINOR";
    ReleaseLevels[ReleaseLevels["MAJOR"] = 0] = "MAJOR";
})(ReleaseLevels || (ReleaseLevels = {}));
exports.ReleaseLevels = ReleaseLevels;
const versionBump = (version, releaseLevel) => {
    const bumpVersionPart = fp_1.flow([fp_1.split('.'), fp_1.get(releaseLevel), fp_1.parseInt(10), fp_1.add(1)]);
    const newVersion = bumpVersionPart(version);
    const setVersionPart = fp_1.flow([fp_1.split('.'), fp_1.set(releaseLevel, newVersion), fp_1.join('.')]);
    return setVersionPart(version);
};
exports.versionBump = versionBump;
