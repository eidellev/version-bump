/* tslint:disable:radix */
import { add, flow, get, join, parseInt, set, split } from 'lodash/fp';

enum ReleaseLevels {
  PATCH = 2,
  MINOR = 1,
  MAJOR = 0,
}

const versionBump = (version: string, releaseLevel: ReleaseLevels) => {
  const bumpVersionPart = flow([split('.'), get(releaseLevel), parseInt(10), add(1)]);
  const newVersion = bumpVersionPart(version);
  const setVersionPart = flow([split('.'), set(releaseLevel, newVersion), join('.')]);

  return setVersionPart(version);
};

export { versionBump, ReleaseLevels };
