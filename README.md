# Cowsay Action

> The cowsay GitHub Action written in JavaScript

[![Build Status](https://github.com/octokit/cowsay-action/workflows/Test/badge.svg)](https://github.com/octokit/cowsay-action/actions)

## Usage

```yml
name: Hello world!
on:
  push:
    branches:
      - master

jobs:
  sayHelloWorld:
    runs-on: ubuntu-latest
    steps:
      - uses: gr2m/cowsay-action@v1.x
```

## License

[ISC](LICENSE)
