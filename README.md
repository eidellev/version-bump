# version-bump

A simple utility to increment versions

## Usage

```typescript
import { versionBump, ReleaseLevels } from '@eidellev/version-bump';

const oldVersion = '1.0.0';
const patch = versionBump(oldVersion, ReleaseLevels.PATCH); // 1.0.1
const minor = versionBump(oldVersion, ReleaseLevels.MINOR); // 1.1.0
const major = versionBump(oldVersion, ReleaseLevels.MAJOR); // 2.0.0
```
