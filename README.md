# [vuepress-plugin-goatcounter](https://github.com/srcrs/vuepress-plugin-goatcounter)

> goatcounter plugin for vuepress

## Install

```bash
npm install -D vuepress-plugin-goatcounter
```

## Usage

```javascript
module.exports = {
  plugins: ['vuepress-plugin-goatcounter', {
    'user': '[my-code]'
  }]
}
```

You will access your account at https://[my-code].goatcounter.com.

## Options

### user

- Type: `string`
- Default: `undefined`

Provide the goatcounter user to enable integration.
