declare enum ReleaseLevels {
  PATCH = 2,
  MINOR = 1,
  MAJOR = 0,
}
declare const versionBump: (version: string, releaseLevel: ReleaseLevels) => any;
export { versionBump, ReleaseLevels };
