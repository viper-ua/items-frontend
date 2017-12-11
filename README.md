# Frontend for simple api-frontend project

## How to install and run
To run this app in development mode:
- clone repository to desired place
```bash
git clone https://github.com/viper-ua/items-frontend.git
```
- go inside project directory
```bash
cd items-frontend
```
- install React dev environment 
```bash
npm install --save react react-dom react-scripts
```
>App is looking for api host at http://localhost:3000. If your host is running on other adddress -  edit `./src/App.js` and change `const apiHost` at line 5 to your hostname:port

- run app
```bash
npm run
```

Open [http://localhost:3001](http://localhost:3001), if not done automatically, to view it in the browser.
 
The page will reload if you make edits.<br>
You will also see any lint errors in the console.

