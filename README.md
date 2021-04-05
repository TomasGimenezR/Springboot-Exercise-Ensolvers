# Springboot-Exercise-Ensolvers

This is an assessment given by Ensolvers. The exercise can be found above ("Ensolvers - Interview implementation excercise.pdf")

## Getting Started

The following are the instructions to download and install the project in your local machine

## Database

Here you can a Database Diagram that shows how the Database works.

![Database Diagram](https://github.com/TomasGimenezR/Springboot-Exercise-Ensolvers/blob/main/DB%20Diagram.png)


### Prerequisites

Firstly, you should make sure that Node.js is installed and up to date, you can verify this by running the following command:

```
npm -v
```

In order to connect to the database, you should add the specification file to the config folder, this folder is currently empty, you will have to add the file yourself.

## Built With

* [Spring Boot](https://spring.io/projects/spring-boot) - Spring Boot Framework v2.4.4
* [MySQL Workbench](https://www.mysql.com/products/workbench/) - MySQL Database motor v8.0.23
* [ReactJS](https://es.reactjs.org/) - ReactJS Framework for Frontend v17.0.2

## Versioning

[GitHub](http://github.com/) is used for version controlling.

## Author

* **Tomas Gimenez Rioja** - *Author* - [TomasGimenezR](https://github.com/TomasGimenezR)

## Endpoints documentation

You can use the following endpoints and verbs

* GET     /		                          will show you the index page 
* POST	  /task		                      will create a new task
* GET	    /task/:id	                    will get task by id
* PATCH 	/task/:id	                    will update a task description
* DELETE  /task/:id		                  will delete a task
* POST 	  /task/change-completion/:id	  will complete a task if incomplete or incomplete a task if completed
* GET     /folder                       will get all folders
* GET     /folder/:id                   will get folder by id
* POST	  /folder		                    will create a new folder
* DELETE  /folder/:id		                will delete a folder and all tasks inside it
* POST	  /task/set-folder/:id	        will move a task to a folder
* GET     /tasks-in-folder/:id          will get all tasks in folder

## Demo

Here's an example of usage

![Index](https://github.com/TomasGimenezR/Springboot-Exercise-Ensolvers/blob/main/Index.png)

In the Index page one can Create, Edit and Delete Tasks, as well as add them to Folders by using the dropdown menu, and complete them by marking the checkbox. All changes done are saved in the database.
Folders can be created  and deleted. Deleting a folder deletes all tasks inside it. Additionally, one can see all Tasks inside a folder by clicking in View Items
