# Cowsay Action

> The cowsay GitHub Action written in JavaScript

[![Build Status](https://github.com/gr2m/cowsay-action/workflows/Test/badge.svg)](https://github.com/gr2m/cowsay-action/actions)

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
        with:
          text: "Hello"
```

Will log

```
 _______
< Hello >
 -------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

## License

[ISC](LICENSE)
