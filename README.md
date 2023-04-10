## Test task back-end REST API

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
### Short description
Back-end and front-end part for city list application.
The information about lists and cities stored in DB layer.
Application provides admin access to CRUD cities and users access to create and get lists.

### Languages, Technologies, Tools:
* JS
* Node.js
* Express
* Postman
* SQlite
* React

### Quick start

```
$ git clone https://github.com/klsva/test-cities.git
$ cd test-cities
```
back-end part

in /server folder create .env file
Add into .env file PORT=5000
```
$ cd server
$ npm install
$ npm run dev
```
Application will run at http://localhost:5000
```
front-end part 
$ cd client
$ npm install
$ npm start
```
Application will run at http://localhost:3000

### Scripts
npm run dev - start application in dev mode
npm start - start application 

### Deploy links
* https://test-city-backend-klsva.amvera.io - back-end part
* https://test-city-frontend-klsva.amvera.io - front-end part

### TODO:
* add validation both front- and back-end level
* add pagination frontend side
* fix css for long lists
* add terminal commands creating .env


