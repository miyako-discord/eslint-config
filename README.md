# ESLint Config Miyako

This is my personal ESLint configuration for developing Miyako and its related projects.

## Usage

* Requires ESLint v9+
* Built for ESM and Node.js with TypeScript

```sh
$ npm install eslint @miyako-discord/eslint-config
```

In your `eslint.config.js`:

```js
import miyakoConfig from '@miyako-discord/eslint-config';

export default [
    ...miyakoConfig
];
```

This config is opinionated to my preferences and may change anytime without warning.
