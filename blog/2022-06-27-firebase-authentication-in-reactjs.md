---
title: Firebase Authentication in ReactJS
description: A step by step guide on how to implement Firebase Authentication in React
slug: firebase-authentication-in-react
authors: [Chavez]
tags: [firebase, react, authentication, routing]
---

Learn how to implement firebase password authentication in a React application... Let's see how we can achieve this in a simple React application.

![Cover Photo](/img/posts/firebase_authentication_in_react/cover.webp)

<!-- truncate -->

## Prerequisites

- A Google account - A Google account is required to work with Firebase.
- Basic React knowledge

## Creating a Sample application

1. Create a React app using the following command:

```bash
npx create-react-app my-app

```

2. Navigate into the app folder:

```bash
cd my-app

```

3. Start the React app

```bash
npm start

```

The app should launch in your browser:

![Image of the newly created React app](/img/posts/firebase_authentication_in_react/app_snap_2.webp)

## Setting up firebase

1. Follow the instructions [here](https://firebase.google.com/docs/web/setup#create-project) to create a new firebase project.

2. On the Project overview page for the project you just create, click the web Icon:
![Image of the firebase app dashboard](/img/posts/firebase_authentication_in_react/app_snap_3.webp)

3. Complete steps 1, and 2 as shown below:
![Image of adding firebase to your web app](/img/posts/firebase_authentication_in_react/app_snap_4.webp)

![Image of adding firebase to your web app](/img/posts/firebase_authentication_in_react/app_snap_5.webp)

4. Copy the content from the second code block as shown above and paste it into the **App.js** file (**my-app/src/App.js**)

```js
import logo from './logo.svg';
import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // ...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

```

Now that the initial setup of firebase is complete, let’s go ahead and implement password authentication with Firebase.

## What are protecting with Auth?

Our App has two pages.

- **Auth Page** – This is where users will go to login by tying a username and password
- **Home Page** – After the user Logs in they will be able to access this page. Later on we will implement an way to redirect the user back to the Auth Page if they are not logged in.

## Creating the pages

1. In the **src** folder create a folder called **Pages**
2. Then in the **Pages** folder create:
    - AuthPage.js
    - HomePage.js
3. Give the **AuthPage.js** the following content:

```js
// AuthPage.js

import React from 'react';

const AuthPage = (props) => {

    return (
        <h2>Login</h2>
    )
}

export default AuthPage;

```

4. Give **HomePage.js** the following content:

```js
// HomePage.js

import React from "react";

const HomePage = () => {
    return (
        <div>
            <h2>Home Page</h2>
            <p>I have to be protected</p>
        </div>
    )
}

export default HomePage;

```

## Add routing

Before moving on, let’s set up routing in our app.

I'll add the following:

- /auth – This will take us to the AuthPage
- /home – This will take us to the HomePage

1. In the **src** folder, create a folder called **Routes**
2. Then in the Routes folder we just created, create a file called **Routes.js**

In the **Routes.js** file, we’ll import the two pages we created, the define an array of our routes:

```js
// Routes.js

import React from "react";

// Import pages
import HomePage from "../Pages/HomePage";
import AuthPage from "../Pages/AuthPage";

const Routes = () => [
    {
        path: 'home',
        element: <HomePage />
    },
    {
        path: 'auth',
        element: <AuthPage />
    }
];

export default Routes;


```

3. Head over to the **App.js** file to configure our app to work with the routes we created above:

```js

// App.js

import logo from './logo.svg';
import './App.css';

// Imports for routing and navigation
import { useRoutes, BrowserRouter as Router } from 'react-router-dom';

// Import our custom routes
import Routes from './Routes/Routes';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // ...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const App = () => {
  const routing = useRoutes(Routes);
  
  return routing;
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  )
}

export default AppWrapper;

```

Notice that we created an **AppWrapper** element? We did this to wrap our App within **Router** to use the **Routes** we imported from **Routes.js**

Since we're no longer exporting **App** by default from **App.js**, Update **index.js** to import **AppWrapper** instead:

```js
// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWrapper from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

```

Start the app again, the navigate to **/auth**, you should see the following:

![Image of localhost:3000/auth](/img/posts/firebase_authentication_in_react/app_snap_6.webp)

and, going **/home**, you'll see:

![Image of localhost:3000/home](/img/posts/firebase_authentication_in_react/app_snap_7.webp)

## Developing the Auth page

Let's turn our attention to developing the **AuthPage**

The first thing is to add a login form to accept usernames and passwords. I won't pay much attention to the way the login form looks, instead I'll focus on its functionality.

### Creating components

Create a folder called **Components** within the **src** folder:

![Image of newly created Components folder](/img/posts/firebase_authentication_in_react/app_snap_8.webp)

Inside the **Components** folder create a file: **LoginForm.js** with the following content:

```js
// LoginForm.js

import React from "react";

const LoginForm = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredEmail = event.target[0].value;
    const enteredPassword = event.target[1].value;

    // TODO: do something with the values
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" />
        </label>

        <label>
          Password:
          <input type="password" name="password" />
        </label>

        <input type="submit" value="Login" />
      </form>
    </>
  );
};

export default LoginForm;

```

Include the LoginForm component on the AuthPage. so users visiting the AuthPage will see the form.

```js
// AuthPage.js

import React from 'react';

import LoginForm from '../Components/LoginForm';

const AuthPage = () => {

    return (
        <>
            <h2>Login</h2>
            <LoginForm /> 
        </>
    )
}

export default AuthPage;

```

The **AuthPage** should now look like:

![Image of the AuthPage after LoginForm was added](/img/posts/firebase_authentication_in_react/app_snap_9.webp)

### Handling form submissions

but what happens when the user enters a username and password and clicks the submit button?

In the last code block above I've added a **handleSubmit** function.

When the form submits, the username and password would be posted to Google Firebase.

### But wait

Lets create a user. Normally, apps have a **Sign up Form** that creates user accounts… I’ll leave that up to you to implement, it’s similar to the **LoginForm**.

Head over to the firebase console and create a user account:

![Image of creating a new user in Firebase](/img/posts/firebase_authentication_in_react/app_snap_10.webp)

### Persisting state

How do we know when a user signs out/ logs out? One way is to check if the user’s access token is still valid, (If you have no idea what is meant by “**access token**” check out https://jwt.io/introduction )

Let's create a folder called **Custom** in the **src** folder then create a file called **PersistedState.js**

Give it the following content:

```js
// PersistedState.js

import React, { useEffect } from "react";
const usePersistedState = (key, defaultValue) => {
  const [state, setState] = React.useState(
    () => JSON.parse(localStorage.getItem(key)) || defaultValue
  );
  useEffect(() => {
    console.log("Setting key");
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};
export default usePersistedState;

```

The above block of code is a custom React hook that extends **useState**. Using it we can save the state to local storage so that the app is always aware of the logged-in user even if the user closes and reopens the browser.

Import this into the **LoginForm.js** file so that once we authenticate with Firebase, we’ll store the token along with other details about the user in **Local Storage** like this:

```js
// LoginForm.js

import React from "react";

// Import custom hook
import usePersistedState from '../Custom/PersistedState';

const LoginForm = (props) => {
  // Initialize custom hook
  const [userLoggedIn, setUserLoggedIn] = usePersistedState("user", {});

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredEmail = event.target[0].value;
    const enteredPassword = event.target[1].value;

    // TODO: do something with the values
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" />
        </label>

        <label>
          Password:
          <input type="password" name="password" />
        </label>

        <input type="submit" value="Login" />
      </form>
    </>
  );
};

export default LoginForm;

```

Great. Now let's actually start using Google Firebase.

## Using Google Firebase

Notice this line from **App.js**:

```js
import { initializeApp } from "firebase/app";

```

We'll use that along with **getAuth** since we're interested in using Firebase for Authentication:

```js
...

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

....

```

Then initialize Firebase using:

```js
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

```

The **App.js** file will now look like this:

```js

// App.js

import logo from './logo.svg';
import './App.css';

// Imports for routing and navigation
import { useRoutes, BrowserRouter as Router } from 'react-router-dom';

// Import our custom routes
import routes from './Routes/Routes';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // ...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const App = () => {
  const routing = useRoutes(routes);
  return routing;
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;

```

**NOTE**: We’ll talk more about the custom **PersistedState** hook with this soon.

## Passing **const auth = getAuth(app)** down

To use the Firebase function with our form, we need to let the **LoginForm** component know about the constant **auth** because this is a required parameter needed by a function called **signInWithEmailAndPassword** to sign in the user.

In order for the **LoginForm** to receive this, **auth** must be passed to the **AuthPage**, but **AuthPage** is called in the **Routes.js** file, so we have to set up a way for **AuthPage** to accept this in our **Routes.js** file.

This is known as: **Passing Props**

**Routes.js** should now look like this:

```js
// Routes.js

import React from "react";

// Import pages
import HomePage from "../Pages/HomePage";
import AuthPage from "../Pages/AuthPage";

const routes = ({props: props}) => [
    {
        path: "home",
        element: <HomePage {...props} />,
    },
    {
        path: "auth",
        element: <AuthPage {...props} />,
    }
];

export default routes;

```

Now, let’s go back to **App.js** and pass down the **auth** constant to our routes. **App.js** would look like:

```js
// App.js

import logo from './logo.svg';
import './App.css';

// Imports for routing and navigation
import { useRoutes, BrowserRouter as Router } from 'react-router-dom';

// Import our custom routes
import routes from './Routes/Routes';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // ...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const App = () => {
  const routing = useRoutes(
    routes({props: {auth: auth}})
    );
  return routing;
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;

```

Now let’s go over to **AuthPage.js** to receive the prop then pass it down to the **LoginForm**:

```js
// AuthPage.js

import React from "react";

import LoginForm from "../Components/LoginForm";

// Accept the prop
const AuthPage = (props) => {
  return (
    <>
      <h2>Login</h2>
      {/* Pass the auth from props to LoginForm */}
      <LoginForm auth={props.auth} />
    </>
  );
};

export default AuthPage;

```

So, back in **LoginForm.js** we’ll create a constant auth to hold the **auth** constant from **props**:

```js
// LoginForm.js

import React from "react";

// Import custom hook
import usePersistedState from '../Custom/PersistedState';

const LoginForm = (props) => {
  // Initialize custom hook
  const [userLoggedIn, setUserLoggedIn] = usePersistedState("user", {});
  // Constant now holds value from props.auth
  const auth = props.auth;

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredEmail = event.target[0].value;
    const enteredPassword = event.target[1].value;

    // TODO: do something with the values
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" />
        </label>

        <label>
          Password:
          <input type="password" name="password" />
        </label>

        <input type="submit" value="Login" />
      </form>
    </>
  );
};

export default LoginForm;

```

as you can see:

```js
...    
const enteredEmail = event.target[0].value;
const enteredPassword = event.target[1].value;
...

```

We have defined constants to hold the values from the form. Let's import **signInWithEmailAndPassword** from **@firebase/auth** to actually handle the signing in of the user, by sending the username and password to Google Firebase for validation:

```js
// LoginForm.js

import React from "react";

// Import custom hook
import usePersistedState from "../Custom/PersistedState";

// Import signInWithEmailAndPassword
import { signInWithEmailAndPassword } from "@firebase/auth";

const LoginForm = (props) => {
  // Initialize custom hook
  const [userLoggedIn, setUserLoggedIn] = usePersistedState("user", {});
  // Constant now holds value from props.auth
  const auth = props.auth;

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredEmail = event.target[0].value;
    const enteredPassword = event.target[1].value;

    // TODO: do something with the values

    signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        setUserLoggedIn(user);
        alert("Logged in successfully");
        // Navigate to home after login
        window.location.pathname = "/home";
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
        console.log(errorCode);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" />
        </label>

        <label>
          Password:
          <input type="password" name="password" />
        </label>

        <input type="submit" value="Login" />
      </form>
    </>
  );
};

export default LoginForm;

```

## Does it work?

Go to the Auth page **/auth** and try typing a random email and password, you should get the following alert:

![Image of trying to sign in with an unregistered email and password](/img/posts/firebase_authentication_in_react/app_snap_11.webp)

Now, go ahead and type the correct username and password for the user account you created in Firebase that we covered earlier, if all goes well you should see:

![Image of trying to sign in with an unregistered email and password](/img/posts/firebase_authentication_in_react/app_snap_12.webp)

Clicking **OK** on the alert would close the alert and you would be redirected to the Home Page.

**NOTE**: Behind the scenes, the custom hook we created (**PersistedState**) comes into play here and takes care of creating a user object in local storage to store details about the logged-in user in local storage. This happens only when valid usernames and passwords are provided.

Great!, our auth is working like magic.

## Adding a Sign out button…

At this point, users can log in, what about if they want to Sign out. Let’s add a button and some functionality for that:

```js
// HomePage.js

import React from "react";

// Import our custom hook here again
import usePersistedState from "../Custom/PersistedState";

// Import signOut from Firebase Auth
import { signOut } from "firebase/auth";


const HomePage = (props) => {
    const [userLoggedIn, setUserLoggedIn] = usePersistedState("user", {});

    // Add a const to hold value from props.auth
    const auth = props.auth;

    // A Firebase function to handle Sign out
    const handleSignOut = () => {
        signOut(auth)
          .then(() => {
            alert("You are now signed out");
            // Clearing the persisted state and local storage
            setUserLoggedIn({});
            // Redirecting the user back to Auth page
            window.location.pathname = "/auth";
          })
          .catch((error) => {
            alert("An error ocurred");
            console.log(error);
          });
      };

    return (
        <div>
            <h2>Home Page</h2>
            <button onClick={handleSignOut}>Sign out!</button>
            <p>I have to be protected</p>
        </div>
    )
}

export default HomePage;

```

The **HomePage** would now look like:

![Image of the home page after adding the Sign out button](/img/posts/firebase_authentication_in_react/app_snap_13.webp)

Clicking the **Sign out** button would show an alert as shown below. clicking ok would redirect the user back to the **AuthPage**.

![Image of clicking the Sign out button](/img/posts/firebase_authentication_in_react/app_snap_14.webp)

## Fixing a huge flaw!

Even if a user **is not** logged in, Typing **/home** in the address bar would allow the user to see the Home page which is a flaw. So let’s fix that urgently 😳

To do this we’ll create an Auth Guard that will determine if a user should be allowed to view a page based on their auth status.

## Creating an Auth Guard

Create a folder in the **src** folder called Auth then create a file in it called **AuthGuard.js** and give it the following content:

```js
// AuthGuard.js

import React from "react";

import usePersistedState from "../Custom/PersistedState";

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (error) {
    return null;
  }
};

const IsLoggedIn = () => {
  try {
    const user = usePersistedState("user");
    const userObj = user[0];

    if (userObj) {
      const decodedJWT = parseJwt(userObj.stsTokenManager.accessToken);

      if (decodedJWT.exp * 1000 < Date.now()) {
        return false;
      } else {
        return true;
      }
    }
  } catch (error) {
    //   console.log(error);
    return false;
  }
};

export default IsLoggedIn;

```

In the code block above, We imported the custom hook **PersistedState** then created a function called **IsLoggedIn** to get the user object stored in **local storage**, get the auth token from that object, and check if it is still valid and has not expired.

We can now import this function in **App.js**, assign the value it returns to a variable (It returns true or false) and finally pass the returned value to our routes:

```js
// App.js

import logo from './logo.svg';
import './App.css';

// Imports for routing and navigation
import { useRoutes, BrowserRouter as Router } from 'react-router-dom';

// Import our custom routes
import routes from './Routes/Routes';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Import the IsLoggedIn function from AuthGuard
import IsLoggedIn from "./Auth/AuthGuard";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // ...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const App = () => {
  // Calling the IsLoggedIn function
  const isAuthenticated = IsLoggedIn();

  // Passing the result to routes
  const routing = useRoutes(
    routes({ loggedIn: isAuthenticated, props: {auth: auth}})
    );
  return routing;
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;

```

Now let's go to **Routes.js** and make use of the **IsAuthenticated** prop we passed:

```js
// Routes.js

import React from "react";
import { Navigate } from "react-router-dom";

// Import pages
import HomePage from "../Pages/HomePage";
import AuthPage from "../Pages/AuthPage";

const routes = ({ loggedIn: IsLoggedIn, props: props}) => [
    {
        path: "home",
        element: IsLoggedIn ? <HomePage {...props} /> : <Navigate to="/auth" />,
    },
    {
        path: "auth",
        element: <AuthPage {...props} />,
    }
];

export default routes;

```

Notice the following line from the code block above?

```js
...
element: IsLoggedIn ? <HomePage {...props} /> : <Navigate to="/auth" />,
....

```

When a user navigates to **/home** the variable **IsLoggedIn** is checked, if its true then the user is allowed to visit the Home Page, hence our **AuthGuard** steps in.

## Final Checks

Let’s try navigating to the **Home Page**.

If we're signed out, we should be instantly redirected back to **Auth Page**.

## Get the code (Give this repo a ⭐️ ):

https://github.com/codedbychavez/React-with-Firebase-Auth

## Conclusion

In this post, we learned how to use React with Google Firebase Password Authentication.

Happy Coding!