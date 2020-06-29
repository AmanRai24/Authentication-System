# Authentication-System
A basic Authentication System which can be used as the first step in amy web application.

<h2>Welcome Page:<h2>
 
   ![Welcome Page](/Image/welcome.JPG)

<h2>Sign In Page:</h2>

   ![SignIn Page](/Image/sign-in.JPG)

<h2>Sign Up Page:</h2>

* User also can use google for sign-in.

   ![SignUp Page](/Image/sign-up.JPG)

<h2>Home Page:<h2>

* After login user redirect to his profile page.

* Simple page to welcome user

  ![HomePage](/Image/homepage.JPG)

<h2>Profile Page:<h2>

* If user want to update his/her password so he/she can update his password.

  ![Profile Page](/Image/updatepass.JPG)

## Folder Structure

 ### This code follows MVC (Model, View, Controller) Architecture.

- Assets: It contains all static file CSS.
- Config: It contains connection to Database, Authentication.
- Controller: It redirect the webpage according to user actions.
- Models: It contains Database Schema.
- Routes: It contains all routes.
- Views: It contins all file which render UI to browser.

## How To Use
1. Clone the project.
2. Go to folder.
3. Run following command.
    ``` 
    npm install bcrypt
    npm install body-parser
    npm install connect-flash 
    npm install connect-mongo
    npm install cookie-parser 
    npm install crypto 
    npm install ejs
    npm install express
    npm install express-ejs-layouts
    npm install express-session
    npm install mongoose 
    npm install passport
    npm install passport-google-oauth 
    npm install passport-local

    ``` 
4. Connect to mongodb.
5. Give user credentials in `config > passorport-google-outh2`.
6. Also change google reChapcha site key and seceret key.
7. Run command: `nodemon ./index.js`
8. Go to https://localhost/8000.
9. Happy Learning 
