# PWA-Challenge
## Table of Contents

- [About](#about)
- [Installation](#installation)
  * [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [How to Use](#how-to-use)
- [Technology Stack](#technology-stack)
- [Structure](#structure)
  * [Folder Structure](#folder-structure)

### About

this is a code Challenge for interview task.

### Installation

#### Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing
 purposes. See deployment for notes on how to deploy the project on a live system.

#### Prerequisites

Before you can start running this project, make sure you have the following software's installed on your machine:

- `Git`
- `Node.js` and `npm`

#### How to Use

In order to grab a copy of the project and run it, you have to clone it via `Git` and then run the following command:

```bash
# Install project dependencies
npm i
```
#### Technology Stack
  Our technology stack includes:
   * React  | [Read more](https://reactjs.org/)
   * JavaScript | [Read more](https://www.javascript.com/)
   * Babel | [Read more](https://babeljs.io/)
   * Material-UI | [Read more](https://mui.com/)
   * React-Hook-Form | [Read more](https://react-hook-form.com/)
   * Recoil | [Read more](https://recoiljs.org/)

#### RoadMap
Login and authentication operations:
After entering the mobile phone number and the national code, the user sends a request to the server and enters the authentication page by clicking on the button (get login code). On this page, after receiving the SMS, enter the corresponding numbers; With this, if the entered numbers are equal to the number on the server side, his authentication is confirmed and he enters the home page.

Due to the fact that API is not available at the moment, these cases are handled with fake values.

When the user enters his mobile phone number, after clicking on the button to receive the confirmation code, his national code and mobile number are saved in the storage and then it is used to display in the desired field on the authentication page. When the user clicks on the edit mobile number icon, he will be transferred to the login page and can change his number.

On the authentication page, there is a countdown timer, and when its value reaches zero, a button is displayed to send the confirmation code again, so that the user can register a request to send the confirmation code.

Home page:
After the user's authentication is confirmed, he is transferred to the home page and can choose various options that exist as application services. This page is designed in a way that is fully responsive on different devices.