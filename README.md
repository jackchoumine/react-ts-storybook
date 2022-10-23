# storybook 学习笔记

storybook 学习笔记

## 测试

### 自动化测试

#### 快照测试

```sh
yarn add -D @storybook/addon-storyshots react-test-renderer
```

`src/storybook.test.js`

```js
import initStoryshots from '@storybook/addon-storyshots'
initStoryshots()
```

> 使用 vitest 报错：jest is not defined.

## 部署
