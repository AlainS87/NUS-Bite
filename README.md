README
Project name: NUS-Bites
Proposed Level of Achievement: Project Gemini 

Motivation: 
To give students and staff a direction on where to dine is one of the main reasons for compiling a restaurant ranking list. It might be challenging for students and staff to select a restaurant that will live up to their expectations, given the variety of dining options offered. Students and faculty can narrow down their options and select a restaurant that has a strong reputation for environment, service, and value with the aid of a restaurant ranking list.

Aim: 
We want to design a website that allows users to leave comments and rate restaurants based on different factors, such as tastes and prices.

User Stories: 
1. As a first-year student, I want to be able to figure out which campus canteen has the most highly recommended meals so that I am clear about where to grab a bite after lectures or tutorials.
2. As a student, I want to be able to vote for my favorite campus vendor and leave a comment on the website so that others can enjoy the food that I recommend.
3. As a student, I would like to be able to use website filters to search for specific cuisine on campus so that I do not have to waste time looking for the food I enjoy.
4. As a student, I would like to be able to use the website to locate the nearest stall so that I can save time during break.
Scope of Project: 
The NUS Bites website provides an interface for users to add stalls, review their rating with filters applied, and post comments about the food offerings on campus.

Features completed so far: 
User login and sign out components: 
Users have the option of creating an account via their Gmail on the website as a taster or hawker, or they can simply read the content as a visitor.
Add stall component:
Hawkers can view, upload, update, and delete certain information (e.g., location, name, comments) of stalls on the website. Hawkers cannot view or change the ratings of their stalls.
Rating component:
Tasters can give stalls a rating between 0 and 5, with 0 representing the lowest score and 5 the highest, depending on a variety of factors (such as tastes and prices). After rating and refreshing the page, the new calculated results will be displayed on the screen.
Ranking:
Tasters and visitors can see the ranking of added stalls based on their ratings in different dimensions, such as price and taste, in descending order.
Searching component:
Tasters can search for stalls by keying in their names and rating them.
Filter component:
Tasters and Visitors can see the stalls' rankings with the relevant filters (based on the overall rating), not simply their prices.
User account setting:
Users are able to change the settings of their account, such as their username and profile image, after logging in.
Users are able to save their favorite stalls by clicking the “like” button under the stall info. These stalls’ information will be displayed on the users’ profiles when they open them.
Users can leave comments on stalls in ranking pages and delete them.

Development Plan 
3rd week of May: Finalized pitch for Orbital Lift-off 
4th week of May: Created Mockup 
5th week of May: Pick up necessary technologies - React, Supabase
1st week of June: Finalized minimum data sets and do diagrams 
2nd week of June: Start building User login and sign out segments 
3rd week of June: Start building Add stalls segment, Search component and database
4th week of June: Implementation of Rating and Ranking components
1st week of July: Implementation of Filter component
2nd week of July: Improve UI and implement user account setting component
3rd week of July: Testing and debugging

Tech Stack 
React (Frontend) 
Supabase (User authentication and database)
Netlify (Web app deployment)

How are we different from similar platforms? 
NUSmart Dining: The application does not allow users to leave comments, employ filters to check stall rankings, or see stall locations, while NUS Bites offers all of these features to make it easier for users to search for food.

Implementation Philosophy
We give customers the option of signing in with their Gmail account. If they do not want to sign in, they can still get some information on the stalls by going to the Visitor Main Page. Visitors cannot search or rate stalls without signing in, as we want to make sure that our data is not altered by unknown people in order to protect data security. 

Users have the option of signing up as a hawker or a taster. Hawkers can add their stalls to our database by completing the form and pressing the "submit" button. We simply need them to provide the names and locations of the stalls. They are free to offer comments on their stalls, but it is not mandatory. Additionally, since we only want tasters to have the right to review stalls, hawkers are unable to view or modify the rating of their own business.

For tasters, they can rate stalls or view stall rankings on their Main Page. They will be taken to a screen where they may search for and rate stalls by name if they click on the Rater button. We give tasters the option of rating stalls based on three criteria: price, taste, and environment. When a new review of a stall is submitted, its ratings are added to the database, and after refreshing, new results are calculated using the formula (total scores / total reviews). Moreover, they are able to view the ranking of the stalls based on the pricing reviews made so far by clicking the Ranking icon.

Implementation Challenge
When we attempt to deploy our application to Github Page, we encounter a blank page and are unable to determine what went wrong. So, we attempted to deploy on other possible hosts, but the majority of them failed. In the end, we were able to manually deploy our web app to Netlify. After deploying, we discovered, however, that our user authentication is failing because it constantly points to localhost. We eventually found a solution by modifying the supabase router option in our code after consulting our TA, Wen Jie.

Technical proof
https://nus-bite-2023.netlify.com   

Posters Link
https://drive.google.com/file/d/1suPV_fVw_oWHk5yFWV0MbRHtUECY3ELr/view?usp=sharing 

Video Link
https://drive.google.com/file/d/1dK2SCL1F_qS8cu4Y5YVsuKqKOqcDKB1F/view?usp=sharing

