# NLP Article Analyzer

This project is a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. Users can submit the URL of an article, and the tool provides sentiment analysis based on the contents of the article.

## Features

- Sentiment analysis of articles or blogs
- Supports multiple languages
- Provides agreement, subjectivity, confidence, irony, and score tag analysis
- Responsive web design

## Installation
Make sure Node and npm are installed from the terminal.
```
node -v
npm -v
```

1. Move to the project folder
```
cd <project directory>
```
2. Clone the repo
```
git clone <repo>
```
3. Install npm
```
npm install
```
4. Install loaders and plugins
```
# Choose the necessary installation for your development mode
npm i -D @babel/core @babel/preset-env babel-loader
npm i -D style-loader node-sass css-loader sass-loader
npm i -D clean-webpack-plugin
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin
```
5. Sign up for an API key at [meaningcloud.com](https://www.meaningcloud.com/developer/create-account)

6. Configure environment variables using dotenv package
	1. Install the dotenv package
	```
	npm install dotenv
	```
	2. Create a new `.env` file in the root of your project
	3. Fill the `.env` file with your API key like this:
	```
	API_KEY=your-api-key
	```
7. Start the project

Command | Action
:------------: | :-------------:
`npm run build-prod` | Build project
`npm start` | Run project

The production server runs at http://localhost:3000.



## Technologies Used
- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- Webpack
- MeaningCloud API
- Jest (for testing)
- Workbox (for service workers)

## Credits
This project utilizes the MeaningCloud API for sentiment analysis.

## Created by

This project was created by Rawida Alshereiqi in 2024.
