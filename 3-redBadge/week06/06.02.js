/**********************************************
Node Challenge 2 - Unauthorized CRUD 
( Sequelize, Express, CRUD )
**********************************************/

/*
  BRONZE CHALLENGE:
  Make a new '/create' endpoint in the animal-controller file.  It should save all the data
  from the animal model to the database, including # of legs, boolean predator value, and its name.
  If the animal is correctly saved in the database, inform the user.  Otherwise, alert the user if 
  there's an error.
  Make another '/' endpoint that will return all the animals created in the database. Like the others, send appropriate statuses based on if the request succeeds or not.

  SILVER CHALLENGE:
  Complete the bronze challenge, then make a new '/delete' endpoint that will delete an animal from
  the database.  However you complete this challenge, a request must be able to specify which animal
  needs to be deleted.  If the delete was successful, inform the user, otherwise alert the user to 
  an error.

  GOLD CHALLENGE:
  Complete the silver challenge, but make a new '/update' endpoint that will let a request update
  animal data in the database.  Like with the silver challenge, the request must be able to specify
  which animal needs to be updated.  On success, inform the user, on failure, alert appropriately.
*/

/*
React WorkoutLog Client Day 2
*/

// * Blue Badge Project Planning Meeting Two

/*
  * Iron out :: 
    - CRUD tables - what data is needed, how do they related to users? Any foreseeable problems?

    - Third Party APIs - have we investigated them? To they use CORS? How do we interact with this API?

    - Key features & Functionality - Make sure we're getting full CRUD

    - Stretch Goals - Things to save until the end, or ways for students to push themselves?
    
    - Foreseeable Challenges - Anything they need to knock out right away? Do they want/have the capability to to work with images?

  ! For next Planning Meeting
    - Consider different end points needed to get core functionality
    - CRUD & User table column names & types
    - What views will the client have? 
    - How does the App flow when being used?
    - 
    
    - If they want images, how do they want to do it ( saving URLS or multer )

*/