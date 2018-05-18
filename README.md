# HMPPS Digital Studio Portfolio

A nice friendly home for information about how our various services are progressing.

## Setup

Requirements:

 * Node.js 6+
 * yarn 0.22+

Install

```
yarn install
```

## Build the app

You'll need to run this command to build any changes to the codebase.

```
yarn build
```

## Running in dev mode
```
yarn start
```

You can now access http://localhost:3100 for the main app, and http://localhost:3100/display for the TV app

## Running in production mode

```
export NODE_ENV=production
yarn run build
yarn start
```

## Generate project YAML from CSV

```
yarn build:projects
```

Note that a csv file in the root `./csv` folder with the following headers is required in order to generate the project `.yml` files into `./app/data/projects/`

```
id, name, description, phase, theme, product_man, product_man_slack, service_man, service_man_slack, team_slack, location
```  
