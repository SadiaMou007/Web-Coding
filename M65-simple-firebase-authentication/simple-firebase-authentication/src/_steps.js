/**
 * Steps to use FireBase:
 * 1. create a project on console.google.firebase.com
 * 2. npm install firebase
 * 3. register web app in firebase
 * 4. copy firebase init with config from firebase project setting into a file firebase.init.js
 * 5. export default app from firebase.init.js
 * 6.import getAuth from firebase/auth and create const auth=getAuth(app) in app.js
 * 7. import app firebase init.js into your app.js
 * 8. turn on google authentication(firebase-authentication-enable google sign in)
 * 9. create google provider
 * 10. use sign in with pop up and pass auth and provider
 * 11. handle then(if success) and catch (if error)
 */
