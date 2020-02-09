# Writtter

> Note: you cannot run the project simutaneously on the front and the back without cloning the project in two different folder.

## Run the back

You will need to have MySQL installed on your machine and started.

Locally:

```bash
git clone git@github.com:g-ongenae/writtter.git

# Go to the back branch
git checkout master

# Install dependencies
npm install

# Launch the app
npm start

## Or to run in development mode (relauch on modification)
npm run dev
```

## Run the front

Locally:

```bash
# Go to the Front branch
git checkout front

# Install dependencies
npm install

# If you don't launch a local back-end
# you will need to comment the Config.js base url to the local back end 
# and use the remote (production one, not safe for a real case, but here it doesn't matter).

# Start the app
npm start

# Open your favorite browser
open https://localhost:8080
```

## Run Test

```bash
# Back
git checkout master
npm install
npm test

# Front
git checkout front
npm install
npm test
```

## Deploy

To deploy, we use Heroku and GitHub Pages.

Back end deployment process:

```bash
# Go the back end branch
git checkout master

# make your modification on the back and commit them
git commit -a -m "Modify this..."

# Push and deploy them to the server
git push heroku master
```

Front end deployment process:

```bash
# Go to the front end branch
git checkout front

# make your modification on the front and commit them
git commit -a -m "Modify this..."

# Push and deploy them to the server
npm run deploy
```
