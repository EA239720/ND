# ND
#### 📖 Description
Test project. Little sell point with landing page.
## 🤖 Technologies
#### Package Manager - [*PNPM*](https://pnpm.io)
### FrontEnd
- #### Language - [*Typescript*](https://www.typescriptlang.org)
- #### Framework - [*ReactJS*](https://nodejs.org/en)
- #### Style Library - [*TailwindCSS*](https://tailwindcss.com)
- #### Build Tool - [*Vite*](https://vitejs.dev)
### BackEnd
- #### Language - [*Javascript*](https://developer.mozilla.org/en-US/docs/Web/javascript)
- #### Framework - [*NodeJS with Express*](https://nodejs.org/en)
## 🌳 Project Structure
```bash
├───public
├───server
│   └───json
└───src
    ├───assets
    │   ├───fonts
    │   └───images
    ├───components
    │   ├───Lists
    │   ├───Menus
    │   └───modals
    ├───functions
    ├───interfaces
    ├───pages
    │   ├───App
    │   └───LandingPage
    └───styles
```
- **public**: Folder generated by the vite template. It oonly contains the vite's icon file, which is used as tab icon for this test app.
- **server**: Contains a little server app, which purpose is to test the app. It also contains all the "database" of the app stored in json files. Those json files are in the JSON folder. 
- **src/assets**: All the non code resources of the app and landing page.
- **src/components**: Contains simple components used in the app. It subdivides into subfolders where the components are classified depends on it behavior and/or it utility.
- **src/functions**: Contains some typescript's files with reusable functions each one.
- **src/interfaces**: Contains typescript's interfaces logic to reuse them as import into the components.
- **src/pages/app**: Contains all the main components of the app, that are render as pages. Also in contains the components of the router logic for the app. 
- **src/app/landingPage**: contains the components of the landing page that works as entry point to the app.
- **src/styles**: this folder contains an unique file where dependencies of tailwind are load into the project.
## 🧪 Test Project
To be able to test the project you need some dependencies before hand. Follow these steps:
- #### Install nodejs, if you not already have it.
- #### Install pnpm (you can follow this tutorial with npm as well):
  ```bash
  npm install -g pnpm
  ```
Note🗒️: if you prefer you can refer to the pnpm official webpage to use another [**installation method**](https://pnpm.io/installation)
- #### Clone this repository:
  ```bash
  git clone https://github.com/EA239720/ND.git
  ```
- Dive into the folder and install the app dependencies:
  ```bash
  pnpm install
  ```
- Dive into the server folder and install the server dependiencies as well.
- After this steps return to the project main folder and execute the command:
  ```bash
  pnpm start
  ```
- The app will be ready at [``` http://localhost:5173/ ```](http://localhost:5173/)

Note🗒️: To login into the main app with the test info: user:admin, password:admin
##
The app already has some data to test it. If you prefer test it with your own data you can dive into ``` /server/json ``` to edit any of the json files in it.
This are the interfaces of each file, assure to respect it to avoid any error.

### branchOffice.json
```typescript
interface Branch {
    id: string,
    country: string,
    currency: string,
    change: string
}
```
### client.json
```typescript
interface Client {
    RUT: string,
    name: string,
    last: string,
    dir: string,
    tel: string
}
```
### products.json
```typescript
interface Product {
    id: number,
    name: string,
    price: string,
    stock: number,
    branchOffice: number
}
```
### users.json
```typescript
interface User {
    login: string,
    pass: string
}
```
