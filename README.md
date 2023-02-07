[![Node](https://img.shields.io/badge/nodejs-43853D?style=flat-square&logo=nodedotjs)](https://nodejs.org/)
[![Vite](https://img.shields.io/badge/vite-FFD32B?style=flat-square&logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/react-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Recharts](https://img.shields.io/badge/recharts-22B5BF?style=flat-square)](https://recharts.org/)
[![Sass](https://img.shields.io/badge/sass-BF4080?style=flat-square&logo=sass)](https://sass-lang.com/)

# oc-p12-sportsee 👋

This project is n°12 of the [OpenClassrooms Front-End learning path](https://openclassrooms.com/fr/paths/516-developpeur-dapplication-javascript-react). The backend side is provided. It is a simple API which will serve data to the client side.

**SportSee** is a virtual sport coaching compagny. I developped the profile page of their website. It is a dashboard where user's data (calories, kilograms, etc.) are displayed by different kinds of charts : line, bars, radial and radar. The profile get these data from the API or a mocked file.

## ✨ Demo

- http://https://jeromeabel.github.io/oc-p12-sportsee/

![SportSee Profile Page](https://raw.githubusercontent.com/jeromeabel/oc-p12-sportsee/main/client/public/SportSee-ProfilePage.png)

## Prerequisites

To get and build the project you will need :

- [NodeJS (**version 18**)](https://nodejs.org/) with **npm**
- [Yarn](https://yarnpkg.com/)
- Optional : [Git](https://git-scm.com/)
- A terminal to run commands. If you don't have one, I would recommend to use [Visual Studio Code](https://code.visualstudio.com/), it provides an integrated terminal inside the code editor.

## Installation

### Backend

As I've deployed the API online, you don't have to build it. Anyway, if you would like to run the project locally, you will need to follow the "./backend/README.md" file for more details. You might follow this instructions to install the backend :

```sh
cd backend
yarn install
```

### Frontend

```sh
cd client
yarn install
```

## Usage

### API

The API provides two user data sets with IDs 12 and 18. Alle the end points are documented in the "./backend/README.md" file.

- Online example : https://sportsee.onrender.com/user/18
- Local example : http://localhost:3000/user/18

### Online usage

Launch the client with these commands :

```sh
cd client
yarn dev
```

### Local usage

If you want to use the project locally, edit the file "./client/src/services/api/useUserApi.js". Comment the line 23 and uncomment line 22 as :

```js
const userUrl = new URL(userId, 'http://localhost:3000/user/'); // local
// const userUrl = new URL(userId, 'https://sportsee.onrender.com/user/'); // online (quite slow!)
```

**Launch the server**

```sh
cd backend
npm run start
```

**Launch the client**

```sh
cd client
yarn dev
```

## 👤 Authors

- Client side : [@jeromeabel](https://github.com/jeromeabel)
- Backend site : [OpenClassrooms-Student-Center](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard)

## 📝 License

- Client side is [GNU--GPL--3](https://www.gnu.org/licenses/gpl-3.0.fr.html) licensed.
- Backend site is [MIT](https://www.mit.edu/~amini/LICENSE.md) licensed
