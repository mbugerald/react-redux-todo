# React-Redux-Todo
This is an application built with ReactJS and Redux, purposefully to ADD, DELETE and UPDATE asigned set of tasks and is linked to an application programing interface: 
https://github.com/mbugerald/flask-api. 

## Getting Started
The following steps will help you setup and run the application on your local machine.

## Requirements
  The following will be required for you to run the application on your local machine.
- Installed NodeJS from https://nodejs.org/en/download/
- Once that done in the main directory, open your command prompt and run <b>command: </b><i>npm install</i>. This will install all the
  dependencies that are required as listed in the package.json file.

## Runnig the application
Once all packages have been installed in the same directory (main directory), you would see a file named webpack.config.js in your command line,
run npm start to run the application on development mode. <b>Note</b> It is important you must have worked with webpack before in order to effect changes,
that will suit your demands in the application. A path will be given to you in the command line on compile complete usually http://localhost:8082.
Enter this path in your browser and navigate to it.

### Backend intergration
This application will run but will display no results unless you implement the api it was developed with http://gitbub.com/mbugerald/flask-api. 
You would notice a folder named <b>src</b> open it and access the <b>action</b> folder. In the actions folder acces the TaskActions.jsx script.
For every action / fucntion change the url if you are not getting server response after mounting the API. This to suit that of your local machine for example,
http://127.0.0.1:5000/api/tasks could be http://192.168.1.1:5000/api/tasks on your machine.

### Using Application
That being said after intergrating the backgend correctly, you can then start using the application by adding a task.

### License
This project is licensed under the MIT License - see the package.json file for details

### Acknowledgments
 - Facebook ( For awesome React liabrary)
 - Inspiration.
 - Bucky Roberts http://thenewboston.com for past training tutorials.
 - React development team.

### Authors
 - Mbu Atang Junior Gerald: ( developed this app as GUI for https://github.com/mbugerald/flask-api )  
