This is the backend repository of the hereiam prototype.

It is built with [NodeJS]() and based on the [express-js]() framework.

Production Packages used:

-   [express](https://www.npmjs.com/package/express) (minimalistic NodeJS web framework)
-   [body-parser](https://www.npmjs.com/package/body-parser) (http request body parsing middleware)
-   [cookie-parser](https://www.npmjs.com/package/cookie-parser) (http request cookie parsing and handling middleware)
-   [cors](https://www.npmjs.com/package/cors) (for configuring cross-origin ressource sharing)
-   [dotenv](https://www.npmjs.com/package/dotenv) (for accessing environment variables)
-   [morgan](https://www.npmjs.com/package/morgan) (for logging incoming http requests)

Development Packages used:

-   [eslint](https://www.npmjs.com/package/eslint) (for code linting)
-   [babeljs](https://babeljs.io/) (for transpiling code to ensure compatibility)
-   [nodemon](https://www.npmjs.com/package/nodemon) (for automatic restarts of the server after changes have been made)
-   [prettier](https://www.npmjs.com/package/prettier) (for code formatting)
-   [rimraf](npmjs.com/package/rimraf) (for deleting the build directory on every restart)


# How to setup the project locally? 

1. Clone the repository.
2. Open the cloned project in VS Code.
3. Open the Terminal 
4. type `npm i` 
5. (maybe) type `npm i -g nodemon`
6. have a look at the `package.json` file to see all configured scripts, eg. `npm run dev` (to start the app in development mode)

Please reach out to Robin Wettstaedt in case the setup is not working as expected.
