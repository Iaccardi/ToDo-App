import { createProject } from './createproject';
import {createTodo} from './todo';
import './styles/style.css'

//Displays the projects in sidebar//
let projectDisplay = document.getElementById('project-display');
let clickedProject;

//Adds a project//
let addProjectButton = document.getElementById('submitProject');
addProjectButton.addEventListener('click', addProjectToSidebar)
let projectNameForm = document.getElementById('addProject');

//Holds all projects//
let allProjects = [];

//DOM PROJECT ELEMENTS//
let project = document.getElementsByClassName('project');
let todoForm = document.getElementById('todo-form');
let mainContentHeading = document.getElementById('main-content-heading')
let mainContentBox = document.getElementById('main-content-box');


//DOM TASK FORM//
let addTaskButton = document.getElementById('add-task');
let taskTitle = document.getElementById('todo-title')
let taskDescription = document.getElementById('todo-description');
let priority = document.getElementById('priority');
let duedate = document.getElementById('duedate');

//ADD PROJECT TO THE DOM//
function addProjectToSidebar() {
    if(projectNameForm.value != ''){
    let projectTitle = projectNameForm.value;

    //CREATE NEW PROJECT OBJECT//
    let newProject = createProject(projectTitle);

    //PUSH OBJECT TO ALLPROJECTS ARRAY//
    allProjects.push(newProject);

    let newProjectDiv = document.createElement('div');
    projectDisplay.appendChild(newProjectDiv);
    newProjectDiv.innerText = projectTitle;
    newProjectDiv.classList.add('project');
    deleteProject(newProjectDiv)
    clearProjectForm();
    loopProjects();
    }

}

//LOOPS PROJECTS AND ADDS EVENT LISTENER//
function loopProjects() {

    for(let x = 0; x < project.length; x++) {
        project[x].addEventListener('click', function(e){
            let name = e.target.textContent;
            

            for(let i = 0; i < allProjects.length; i++) {
                if(name === allProjects[i].name)
             
                displayClickedProject(allProjects[i]);
            }
        })
    }   

}

function displayClickedProject(obj) {
    mainContentHeading.textContent = obj.name;
    todoForm.style.visibility = 'visible';
    clickedProject = obj.name;
    loadProjectModule(obj)
    checkShifted(obj);
}


addTaskButton.addEventListener('click', addTask)


function addTask() {
    
    

    for(let x = 0; x < allProjects.length; x++){
         if(allProjects[x].name == mainContentHeading.textContent){

             let newTodo = new createTodo(taskTitle.value, taskDescription.value, priority.value, duedate.value);
             allProjects[x].arr.push(newTodo);
             loopTodos(allProjects[x]);
        
             taskTitle.value = ' ';
             taskDescription.value = '';
             
         }
    }
    


    }

    function createTodoDivs(title, description, priority, duedate){
        let newbox = document.createElement('div');
        mainContentBox.appendChild(newbox);
        newbox.classList.add('todo-box');
        newbox.classList.add('slide-in-fwd-center');



        //CREATES THE TITLE ELEMENTS//
        let todoTitleh1 = document.createElement('h1');
        let descriptionh1 = document.createElement('h1');
        let priorityh1 = document.createElement('h1');
        let duedateh1 = document.createElement('h1');

        //TITLE ELEMENT TEXT//
        todoTitleh1.textContent = 'Title ';
        descriptionh1.textContent = 'Description ';
        priorityh1.textContent = 'Priority ';
        duedateh1.textContent = 'Due Date ';

        //CREATES CONTENT ELEMENTS//
        let todotitle = document.createElement('p');
        let todopriority = document.createElement('p');
        let tododescription = document.createElement('p');
        let tododuedate = document.createElement('p');

        
        //CONTENT ELEMENT TEXT
        todotitle.textContent = title;
        todopriority.textContent = priority;
        tododescription.textContent = description;
        tododuedate.textContent = duedate;

        //CREATES DIV SECTION ELEMENTS//
        let titleBox = document.createElement('div');
        titleBox.classList.add('titlebox');
        let descriptionbox = document.createElement('div')
        descriptionbox.classList.add('descriptionbox');

        //APPEND//
        newbox.appendChild(titleBox);
        titleBox.appendChild(todoTitleh1);
        todoTitleh1.appendChild(todotitle);
        titleBox.appendChild(priorityh1);
        priorityh1.appendChild(todopriority);
        titleBox.appendChild(duedateh1);
        duedateh1.appendChild(tododuedate);
        duedateh1.appendChild(tododuedate);
        newbox.appendChild(descriptionbox);
        descriptionbox.appendChild(descriptionh1);
        descriptionh1.appendChild(tododescription);
        
        completedTodo(newbox);

    }

    function removeChildElements() {
        let element = document.getElementById("main-content-box");
        while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
    }

    function loopTodos(obj) {
        if(obj.arr.length >= 0) {
        for(let x = 0; x < obj.arr.length; x++) {
            
            let todotitle = obj.arr[x].title;
            let todopriority = obj.arr[x].priority;
            let tododescription = obj.arr[x].description;
            let tododuedate = obj.arr[x].dueDate;
            createTodoDivs(todotitle, todopriority, tododescription, tododuedate)

            let shifted = obj.arr.shift();
            obj.shiftedarr.push(shifted);
            
        }
    } 
}

export function loadProjectModule(obj){
    removeChildElements();
    loopTodos(obj);
}

export function checkShifted(obj){
    if(obj.shiftedarr.length > 0) {
        for(let x = 0; x < obj.shiftedarr.length; x++) {
            
            let todotitle = obj.shiftedarr[x].title;
            let todopriority = obj.shiftedarr[x].priority;
            let tododescription = obj.shiftedarr[x].description;
            let tododuedate = obj.shiftedarr[x].duedate;

            createTodoDivs(todotitle, todopriority, tododescription, tododuedate)

        }

    }}

 

    function completedTodo(newbox) {
        let controls = document.createElement('div');
        controls.classList.add('controls')
        let completed = document.createElement('img');
        completed.src = "https://cdn-icons.flaticon.com/png/512/4436/premium/4436481.png?token=exp=1655133087~hmac=698d000a02811e51708ada3cf8c6e395";
        completed.classList.add('icon');
        controls.appendChild(completed);
        newbox.appendChild(controls)

        completed.addEventListener('click', function(){
            
            mainContentBox.removeChild(newbox);
        })
        deleteTodo(newbox, controls)
        }
    
    
    function deleteTodo(mainbox, controls) {
        let deleted = document.createElement('img');
        deleted.src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png";
        deleted.classList.add('icon');
        controls.appendChild(deleted);

        deleted.addEventListener('click', function(){
            addSwirl();
            mainContentBox.removeChild(mainbox);
            
        } )
    }


function clearProjectForm(){
    projectNameForm.value = '';
}

function deleteProject(projectdiv) {
    let deleted = document.createElement('img');
    deleted.src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png";
    deleted.classList.add('icon-small')
    projectdiv.appendChild(deleted);


    deleted.addEventListener('click', function(e){
    
        projectDisplay.removeChild(projectdiv)
        removeChildElements();

    })
}

