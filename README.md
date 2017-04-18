# Six thinking hats
### Login page

This page will contain 2 options, for logging in or	signing	up. Both option should be on the same page, when access the page by default will pe shown login forms, but sign up will be hidden. For login option should be:

1.	Field for login
2.	Field for password
3.	Button for logging in

For sign up option should be:

1.	Field for login
2.	Field for firstname
3.	Field for lastname
4.	Field for password
5.	Field for conﬁrming the password
6.	Field for email
7.	Button for sign up

### Homepage

On this page will be shown public projects from other users sorted by date, likes. User also will be able to see project's details. So this page will contain:

1.	Button for creating a room
2.	Button for joining a room
3.	List of the latest projects
4.	List of most popular projects
5.	List of most active users
6.	List of most popular tags

### Short project description of public projects

This will be a pop-up windows with short details about the project. Such as:

1. Project title
2. Project description
3. Creator of the project
4. List of users
5. List of ideas from brainstorming
6. Winner idea

### Profile page

Here will pe show the proﬁle of an user. Besides viewing own profile we also will be able to edit own info.	Also this page will the show for other users, of corse the option for editing for them will be blocked and some info will be hidden (as password). So, this page will contain:

1.	User photo
2.	Firstname
3.	Lastname
4.	Login (hidden for others)
5.	Passoword (when we want to edit the password, will appear an additional field for confirmation)
    5.1. Confirm Password
6.	Birth date
7.	Quote
8.	List of project created
9.	List of participated projects
10.	User status (online, offline)

### Result of your projects

After clicking one of the projects from your profile will be show this page. It will contain the details about a project and the results after election. This will contains.

1.	Project	description
2.	List of users
3.	List of ideas
4.	Winner idea
5.	Your chosen ideas
6.	Status switcher to private or public (if you crated)

### Search page

On this page we'll be able to seach project by tag, mininum number of ideas on brainstorming. After searching we'll be able to sort by likes, number of ideas or alphabetically:

1. Tag selector
2. Field for minimum number of ideas
3. Button for sorting by likes
4. Button for sorting by number of ideas
5. Button for sorting alphabeticaly

### Contact page

On this page can contact us. So here we'll be the following field:

1. Field for topic
2. Field for message
3. Button for sending message

### About Us Page

On this page will be written page about creators and project.

### Help page

Here will be written the details about **SIX THINKING HATS**.

1.	The main idea of this project
2.	What is *Six Thinking Hats*
3.	How to use this web site

### Session creation

Here we will create the project for selection an idea and on this page we set the following parameters to the project. This	page will contain:

1.	Field for project title*
2.	Number of users
3.	Ending date
4.	Field for description*
5.	Field for password
6.	Filed for conﬁrming password
7.	Photo for project
8.	Selection for tag*
9.	Field for keyword (for inviting other users)
10.	Switcher for status (public/private)
11.	Time for brainstorming
12.	Time per hat

### Choosing the idea (Real time session) (No main navigation bar and footer)

This part will be the most diﬀicult. Everything will be in realtime: selection, user status, number of ideas, number of users, statistics etc. The session will be closed by the creator or automatically on expiration date. So this page will contain this details.

1.	Project info (will be desplayed only the title, but on click will pop an windows with the following details)
    + Title
    + Description
    + Photo
    + Ending date
    + Project status
2. List of users (will be desplayed only first name, but on click will pop an windows with the following details)
    + First name
    + Last name
    + User photo
    + Quote
    + Number of projects created + participated
    + Current hat
4. Statistics (will be desplayed only word, but on click will pop an windows with the following details)
    + Total number of ideas
    + Leadding ideas per hat
    + Current number of users
5. Help (will be desplayed only word, but on click will pop an windows with following details)
    + Short description about brainstorming
    + Short description of each hat
6. List of all ideas from brainstrom
    + All ideas from brainstorming (on click will pop an windows with the descritpion)
7. List of chosen ideas:
    + All 5 chosen ideas with hat color indicator
7. Field for adding ideas at brainstorm	part
    + Title of the idea
    + Description (if necessary)
8. Chat (may be)
9. Timer
10. Your profile
    + Name
    + Photo
    + Current hat


## Used technologies

For developing this web site, for front-end and back-en we decides to use the following technologies.

1. Aurelia UI framework
2. MySQL
3. NodeJS
4. REST API
5. PHP
6. SLIM Framework

### What is *Six Thinking Hats*

Six Thinking Hats is a flexible and easy-to-use thinking process that leads to amazing results with innovative thinking, improved communication, and reduced meeting time. In traditional thinking we constantly find ourselves in conflict. Each side seeks to criticize the other point of view. The Six Thinking Hats method, however, encourages Parallel Thinking, where everyone explores all sides of an issue at the same time.

At the brainstorm part each person would be better if will purpose at least 5 ideas. At each step/hat, each person will choose by 5 ideas according to the rules. The rules of the hats are:

Blue -- the leader of all the hats (control/admin)
Red -- what you liked idea
White -- know how to do it
Yellow -- idea which is most useful/helpfull
Green -- most original, unique and creatonal
Black -- idea which is the useless/dangerous
