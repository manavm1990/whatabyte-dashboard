# TLDR

Use of this starter template assumes that you have a 'complete dev environment' setup - a terminal, Node, VS Code, at least. If not, you may want to [start here.](https://www.notion.so/codefinity/Setting-up-a-Local-Dev-Environment-for-JS-02a4e9f4a30043d3a8e7d109be3448f4)

1. Click that big green button to start using it.
2. `clone` your new repo from your GitHub to your local computer
3. `cd` into the `clone`d repo and enter: `npm i`.
4. `npm run watch` to start a '`webpack` watcher' 👀
5. `npm start` from another terminal to start `nodemon`.
6. Write code 👩🏾‍💻 in 'src/index.ts', etc.

## Node Starter with TypeScript 🚀

## What's Included

- [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
- [![Code Style](https://badgen.net/badge/code%20style/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript). I have adjusted this slightly as per [this `commit`](https://github.com/manavm1990/node-starter/commit/ff1ed419d3ed411683b404b1cc6e221c859b0d33). More may be forthcoming as _feedback and [PRs](https://github.com/swic-cis-177/mt-project-studentloganbutler/pulls) trickle in._
- [`husky`](https://www.npmjs.com/package/husky) is also there to help check over code quality with the linters b4 there is a successful `commit`.
- [`webpack`](https://www.npmjs.com/package/webpack) to allow the use of modern [EcmaScript Modules](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)
- 'tsconfig.json' - has been pre-configured to be fairly 'strict.' Namely, `"noImplicitAny": true,` and `"strictNullChecks": true,`
- Various VS Code 'settings' and 'extensions.' Look in the bottom right when you open this up in VS Code to install them.
- [Kite 🪁](https://www.kite.com/javascript/) is also included. I personally recommend it, but it's certainly not compulsory to set this up.
- Directories 📂 with 'index.js' files as a suggested architecture. See comments in those files for addl. info.

## How To Use

Run `npm i` to get all the things installed.

Ideally, you'll run this from 2 different terminal instances.

In one terminal, you do: `npm run watch`. This will watch the files in [src](/src). This is where you would start your coding - 'src/index.ts'.

In the other terminal: `npm start`. This will execute the `dist/main.js` that webpack builds for you.

Essentially, you just code and if you've set all the things up correctly, you will get alerted whenever there is something 'bad' in your code based on some industry-standard best practices 🦄.

---

**Don't 4get to ~~drink your Ovaltime~~ update `"name"`, `"description"`, `"author"`, etc. in 'package.json' when using this for your stuff.**

---

'webpack.config.js' is configured to allow 'absolute imports.' This means that, for example in 'index.js,' you could do: `import api from "api";`, w/o worrying about `../` spit.

Note that you may still see warnings about 'unresolved imports' as 'ES Lint' is not able to tell that we have 'webpack' taking care of 'absolute' imports. To avoid this, see [here](https://github.com/manavm1990/node-starter/blob/e4db218aa836b68fccc0c052908b01e2d8e9c407/.eslintrc.js#L15)

## 🎶

- For fonts, I set ['Victor Mono'](https://rubjo.github.io/victor-mono/) by default. You might also install: ['Inconsolata'](https://fonts.google.com/specimen/Inconsolata) or ['Source Code Pro'](https://fonts.google.com/specimen/Source+Code+Pro) - or completely change that in [.vscode/settings.json](/.vscode/settings.json), _if you know what you are doing! ⚠️_
- As you get more comfortable, of course you can modify all the things as you C fit.
- Read more about the motivations behind this [here.](https://dev.to/codefinity/node-noob-starter-repo-g31)

### Questions/Issues

Use the 'comments' section of the [Dev post](https://dev.to/codefinity/node-noob-starter-repo-g31) for ❓s or discussion.

If it's an actual issue... [open 1.](https://github.com/manavm1990/node-starter/issues)

Contributions welcome. No specific guidelines at this point - just common sense - specific tasks, good `commit` messages, etc. Feel free to LMK of any doubts or queries.

I do prefer `commit` messages that use [gitmoji](https://gitmoji.carloscuesta.me/). Also, using those sort of helps with 'categorizing' and 'separating' `commit`s appropriately.
