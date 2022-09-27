# Movie App - Consuming an API with React.js
This is an App built with React.js. It consumes the The Movie DB API and allows the user to search for his/her favorite movies, see the trending movies and save favorites movies in the explorer of the local computer.

## How to install the app
* First fo all it is necessary to create an account on https://www.themoviedb.org/signup and then an API Key.
* Clone the repository to your local machine
* Execute "npm install"
* Change the name of the file ".env.example" to ".env" and put the API Key crated according to the instructions above ☝️.
* Finally enter to the project's folder and execute npm start

## Technology used
React.js, JavaScript, Sass.

## Implemented features

### Intersection observer
It was used to download the data only when it is required. Since there are thounsands of records, it would not be efficient to download all the information when we only need to show twenty records.  

### localStorage and Context API
As the user sees the movies, he/she can save them by clicking on them. localStorage has been used for this purpose. Since all of the other components need to have access to the favorites, I included Context API to manage it.

### React router DOM
In order to navigate through the different parts of the app, React Router Dom has been implemented.

### Flexbox and Grid
Grid and Flexbox have been used to display movies on a grid.

### Axios
We have used axios to fetch the data from the API.

## Live version
https://sandrosimon-movies-app.netlify.app/