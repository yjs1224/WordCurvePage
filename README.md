This repository is the frontend submodule of [wordCurve](https://github.com/wangke1996/wordCurve)

You can view the page [here](https://wangke1996.github.io/WordCurvePage)

This README file is for developers

## Set Up
* First of all, you need [nodejs](https://nodejs.org/en/) installed
- Fork this repository, git clone, cd to the working directory, then run:

        npm install
* To check if you set the environment properly, try:

        npm start
    If everything goes fine, you should see:
    
        Compiled successfully!
        You can now view frontend in the browser.
            http://localhost:3000/
    Here, localhost means your server's IP address. For example, if your IP is 101.6.70.15, then open http://101.6.70.15:3000 in browser, you should see the page, that means everything is fine.

## Backend Interaction
* Config backend server url in [src/getData.js](src/getData.js)
- Every request sent by frontend should be handled by backend. For example, in [src/getData.js](src/getData.js), we send a request with url 'getCurve', then in the [backend script](https://github.com/wangke1996/wordCurve/blob/master/backend/main/__init__.py), we handle this request and return data.

## Developing codes
* This project is based on [React](https://reactjs.org/), so if you're not familiar with React, these codes may be hard to understand for you. You should learn it first, the [tutorial](https://reactjs.org/tutorial/tutorial.html) is good.
- We also use [Ant Design](https://ant.design/docs/react/introduce-cn) as UI framework.
* The charts are plotted by [eCharts](https://www.echartsjs.com/examples/zh/index.html) as you can see in [src/wordCurve.js](src/wordCurve.js). eCharts API is [here](https://www.echartsjs.com/zh/option.html#title)
- When you are developing codes, __npm start__ is more convenient, everytime you change your code, the develop page(localhost:3000) will refresh itself.

## Publish to Github Page
1. In [package.json](package.json), change "homepage" to your own page.
2. Push your codes.
3. run 
    
    npm run deploy
4. Wait a few minutes, then visit your own page.
5. See [here](https://reactgo.com/deploy-react-app-github-pages/) for more details. 