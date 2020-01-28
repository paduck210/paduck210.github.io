---
title: "React-Setup"
date: 2020-01-23
categories: React
---

#### APPLY eslint-config-airbnb

1. terminal
```js
$ npx install-peerdeps --dev eslint-config-airbnb
```
<br>

2.`package json`

```json
{
  "name": "myproject",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.4.0",
    "@testing-library/user-event": "^7.2.1",
    "eslint-config-prettier": "^6.9.0",
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "react-scripts": "3.3.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "eslint": "^6.1.0",
    "eslint-config-airbnb": "^18.0.1",
    "eslint-plugin-import": "^2.20.0",
    "eslint-plugin-jsx-a11y": "^6.2.3",
    "eslint-plugin-react": "^7.18.0",
    "eslint-plugin-react-hooks": "^1.7.0"
  },
  "eslintConfig": {
    "extends": [
      "airbnb",
      "prettier",
      "react-app"
    ],
    "rules": {
      "react/prefer-stateless-function": 0,
      "react/jsx-filename-extension": 0,
      "react/jsx-one-expression-per-line": 0
    }
  }
}


```

<br>



3. `.prettierrc`

```js
프로젝트의 루트 디렉토리에 .prettierrc 라는 파일을 다음과 같이 생성하세요:

.prettierrc
{
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80
}
```

<br>

4. `.eslintrc.json`
```json
{
  "parserOptions": {
    "ecmaVersion": 2019,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "plugins": ["import", "react"]
}
```
