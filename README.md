# WUZZUF Front-End Task

### App Intro
In this project you will find Book List application, that include 3 parts (Books (Add, Edit, View), Authors(Add, Edit, View), Categories(Add, Edit, View)).

### View
In `pages/` folder you will find application view include component inherit from `components/` folder, We use it for repeat view parts

### Style
We have `style/` folder that contain `index.scss` file with `@import` another files that's include the styling of application.

### Data
We inherit our data from 2 ways (`/books.json` file and Redux store), We using ES6 `...spreadOperators` to concat 2 Arrays with each other.

Actually we don't have a good state management yet, so if you need to make live editing from `editMode` you can call the store in some of file to can use `myStore` as a props to make live editing on project, I know this not the right way but we will update it improved.

### Builder
We Using `webpack` as a building tool include our loaders and Hot Module Reload(HMR) and to transform our ES6 to ES5 to can communicate with different browsers,

If you need to try another one you can do it, I recommended `percel` that's great build tool just throw your file and `percel` will config from it self

### Test
In test we using `jest`, you can follow tests file in `src/components/__tests__` and see snapshots of jest tests in `src/components/__tests__/__snapshots__`.

### Build Setup

``` bash
# install dependencies
yarn #or npm i

# serve with hot reload at localhost:8080/
yarn start #or npm run dev

# build for production with minification
yarn build #or npm run build

# for test
yarn test #or npm run test

# for test coverage
yarn test:coverage #or npm run test:coverage

# for test update
yarn test:update #or npm run test:update
```