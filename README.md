# Pro:duck:tiv
The objective of Producktiv is to bring together people from different fields who would like to collaborate and share ideas with other people. This helps you as a tutor, to share useful resources as well as get your content out there and as a student, to learn various skills without any cost to you. [Live demo](https://producktiv.netlify.app/)
### Features:
- Display all submitted videos/courses
- Add videos/courses
- Delete submitted videos/courses
- Watch videos/courses

## Starting the project
Firstly, you will need to [clone](https://help.github.com/en/articles/cloning-a-repository) this repository to your machine.

## Backend
### Install Dependencies
1. **Installing Node and NPM**
   This project depends on Nodejs and Node Package Manager (NPM). Before continuing, you must download and install Node (the download includes NPM) from [https://nodejs.com/en/download](https://nodejs.org/en/download/).

2. **Installing project dependencies**
   This project uses NPM to manage software dependencies. NPM Relies on the package.json file located in the `backend` directory of this repository. After cloning, open your terminal and run:

```bash
npm install
```
3. **Install MongoDB**  
   [MongoDB installation guide for ubuntu](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/) (NB: Install your OS equivalent)
   After installing, open your terminal and run:
```bash
sudo systemctl start mongod
```
(NB: run your OS equivalent of this command)


4. **Start the app**
In order to run the app(backend), use `npm run start-server`. You can change the script in the `package.json` file.
   
```bash
npm run start-server
```
App will be hosted at [http://localhost:5001](http://localhost:5001). You can now test with the [API endpoints](./backend/README.md).


## Frontend
### Install Dependencies
1. **Installing Node and NPM**
   This project depends on Nodejs and Node Package Manager (NPM). Before continuing, you must download and install Node (the download includes NPM) from [https://nodejs.com/en/download](https://nodejs.org/en/download/).

2. **Installing project dependencies**
   This project uses NPM to manage software dependencies. NPM Relies on the package.json file located in the `frontend` directory of this repository. After cloning, open your terminal and run:

```bash
npm install
```
3. **Start the app**
   The frontend app was built using create-react-app. In order to run the app(frontend) in development mode use `npm start`. You can change the script in the `package.json` file.
   
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

NB: Both Backend and Frontend must be running to have a fully functional application.

## Screenshots
<img src="https://imgur.com/QxuLevX.png" alt="login">
<img src="https://imgur.com/S3nkfeP.png" alt="signup">
<img src="https://imgur.com/AUcU9Kq.png" alt="submission page">
<img src="https://imgur.com/zJAIeGH.png" alt="my-courses page">
<img src="https://imgur.com/r3h7jBf.png" alt="videoplay">

## License  
Producktiv is under the MIT license. See the [LICENSE](https://github.com/sourcerer-io/sourcerer-app/blob/develop/LICENSE.md) for more information.
