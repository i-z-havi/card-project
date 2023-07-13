# About This Project
This application was made as part of the HackerU .NET fullstack course.
It is built to allow businesses to easily create, share, edit, and save digital business cards.
To use the application, create an account by pressing the "Sign In" button.
If you already have an account, press the "Log in" button.\
-If you want to create cards, sign up as a business.\
-If you are a client who only wishes to save various businesses, you can sign up normally.


After creating your account, you'll see that the UI has changed.
-If you signed up as a client, you will see a "favorite cards" tab. There, every card that you have favorited (by clicking the heart icon) will appear.\
-If you signed up as a business, you will also see the "my cards" tab. There, every card made under that business account will appear.\
Cards that you have created will allow you to run CRUD operations on them.

To create a card, click on the "+" button located in the bottom right of the page while signed in as a business/administrator.

## Pages

NOTE: For map functionality, insert your Google Maps API key into a .env file, and update the useMap hook located in cards->hooks->useMap(). Maps won't work without it!

### Cards

Shows all cards. Click on them to show more details, such as a map showing the location of the business, and the email and address of the business. Cards owned by the business that is logged in have an "Edit" button and a "Delete" button.

### About

Talks about the website.

### Fav Cards

Shows all cards that you have favorited. Cards that are unfavorited on this page will only disappear after a reload, so as to ensure that users won't accidentally unfavorite cards.

### My Cards

Will show all cards made by the business currently logged in, if the business is an admin then it will show all cards regardless of who created them. 

### Sandbox

Page that is only accessible to administrators. Has various components built to test and explore various concepts and ideas without tampering with the application itself. 


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
