# Next Boierplate

Actually this project does nothing itself. As follows from title,
it's a boilerplate which is to be used for various purposes. This is
a basic Next JS app with Redux i18n and custom URL routes.

## How to install and start this app (locally):

You will need [Node.js](https://nodejs.org/) in order to run this app.

Just clone this repo, install packages and you are ready to go:
```shell script
git clone https://github.com/uraniummore/next-boilerplate.git
cd next-boilerplate
```

Packages installation for Yarn users:
```shell script
yarn
```
OR if you prefer NPM:
```shell script
npm install
```

### Available scirpts:
You can run scripts by running `yarn {SCRIPT NAME}` or
`npm run {SCRIPT NAME}`
* `dev` - Launch the development server.
* `build` - Create an optimized production build.
* `start` - Launch the previously built app (i.e. the production React app).
* `lint`/`lint:fix` - Run the ESLint's check/fix problems.

## How to run this app in Docker:

If you don't have Node or for some other reasons you can't run this
app on your computer, you can use Docker to launch a dev
server of this app. Just run:

```shell script
./scripts/build_docker.sh
```

It'll build you a fresh Docker image of this app with
all the dependencies required for it's work. And then
to launch Docker:

```shell script
./scripts/run_docker.sh
```

Docker has volume connected to container so when you'll make changes
to the code, the app will still hot-reload. Profit!

**Note**: Please run these scripts from project's root (i.e.
if you `cd` into the scripts folder and run these commands,
they probably are not going to work).

## What's used here:

You can read the docs of those libraries that are used here to get
to know the project:

* [Next JS](https://nextjs.org/)
* [Redux](https://redux.js.org/)
* [next-i18next library](https://github.com/isaachinman/next-i18next)
* [ESLint](https://eslint.org/)
* [Jest](https://jestjs.io/)
* [Enzyme](https://github.com/enzymejs/enzyme)
* [Sonar JS](https://github.com/SonarSource/eslint-plugin-sonarjs)
