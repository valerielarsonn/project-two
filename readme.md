# Working From Anywhere

- **Author:** Valerie Larson
- **Link to Live Site:** https://work-from-anywhere.herokuapp.com/


## Project Summary
I created this CRUD app "Working From Anywhere" with the idea of building off of it in the future. With more people working remotely indefinitely, I want to add on to this website so there are short-term apartment/house leasing options and other useful information for nomads. This would be a go-to spot for those looking on moving around since they don't have to go into the office anymore. Why does working from home have to mean staying in the same city for the next 5 years? 

<img src="https://i.imgur.com/xaOCNF8.png" width="250"> 

<img src="https://i.imgur.com/92tNEoM.png" width="250"> 

<img src="https://i.imgur.com/SIUXkng.png" width="250"> 


## Technology Used
- Trello
- JustInMind
- DRAWIO
- Javascript
- HTML
- CSS
- Express


## Models

City Model:
 - Name => String
 - Address => String
 - Hours => String
 - Daily Rate => String
 - Monthly Rate => Boolean (checkbox)
 - Image => String
 - Review Schema => reviewer, rating, comments


## Route Map

| Method | Endpoint | Resource/View |
|--------|----------|---------------|
|GET| "/denver" | List all Denver locations (denver/index.ejs) |
|GET| "/denver/new | Render form for New Denver location (denver/new.ejs)|
|DELETE| "/denver/:id" | Delete a particular Denver location |
|PUT| "/denver/:id" | Uses Form Submission to edit Denver location |
|POST| "/denver" | Uses Form Submission to Create new Denver location |
|GET| "/denver/:id/edit" | Render form to edit a single location (denver/edit.ejs)|
|GET| "/denver/:id | Display single location (denver/show.ejs)|




## Challenges
- Still need work on JS and CSS.
- Not running into issues with authentication/authorization.



## Existing Bugs
- No existing bugs, just don't have all routes for 6 other cities, still working on reviews section.