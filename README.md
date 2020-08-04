# pkg-starter

This is a starter repository for building command line utils using NodeJS & the `pkg` package.

## Inpsiration

I started exploring `pkg` to create a small notification utility for the build server where I work. Ideally this would run without Node installed on the server. This work inspired me to create this template after building the basic logic to parse command line arguments into an easy to use format.

## How to Use

To use this, simply open `src/main.js` and start coding where the `console.log` statement is. Command line should be passed in the following format;

```
myexe.exe --my-arg=argvalue
```

The function `helpers.parseArgs()` will convert arguments into an object that can be accessed from `main.js` like so;

```js
args['my-arg'] // returns 'argvalue'
```

Argument values that include spaces should be wrapped in quotes.

## Building the Project

To get started, first install `pkg` globally;

```
npm install -g pkg
```

Then build the project by running;

```
npm run build
```

You should receive a set of binaries for Windows, Mac, and Linux in the `./dist` directory.

> ❗ I only tested this on Windows. I'd love to hear if this also works on Mac & Linux. 

## Contributing

If you are interested in contributing and adding to this project, follow the standard GitHub Contribution Guidelines;

- Fork the project
- Make your changes
- Submit a PR for review

Upon PR approval, your changes will be merged in.

## Contact Me

The easiest way to contact me is in the [fullstack.chat](https://fullstack.chat) Discord server. Otherwise reach out to me on Twitter at [@brianmmdev](https://twitter.com/brianmmdev). 

If you are interested in more content from me, visit my website at [brianmorrison.me](https://brianmorrison.me) or visit my YouTube channel at [https://www.youtube.com/c/brianmorrisonme](https://www.youtube.com/c/brianmorrisonme).
