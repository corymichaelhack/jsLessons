/*
Welcome
    - Personal/teacher introductions
    - Student introductions
        - name, why you're attending 1150, prior coding experience (if any), favorite movie

Check installs
    - Gmail
    - Chrome
    - Node.JS
    - Git
    - GitHub
    - VS Code
        - Node Exec
        - Code Runner
    - Canvas


Grading and professionalism:

1. Professionalism
    - This is a job training program, which means you're developing skills to enter into a professional field at the end of the course.
    - There is no dress code, but we do ask that you dress business/business casual on presentation days.
    - Lateness: we understand that traffic can be bad and that you may not always be on time, but please be sure to let us know if you're going to be late. Obviously, if you're late every day, we'll need to have a conversation with you. This course moves at a very fast pace, so if you start missing lectures/part of lectures it's very easy to get behind.
    - If you're sick, we ask that you stay home to reduce the spreading of germs to your peers. Again, be sure to let your instructors know if you're going to miss so we can send you the notes for the day. If you don't reach out to us, we won't send the notes. Be responsible and let your instructors know if you're going to miss.

2. Grading
    - There are a couple of things we will be using to track your progress:
        01. Canvas quizzes, repl challenges, whiteboard assessments:
            - we will use these tools to track your understanding of the topics we cover in class. This also helps us and you as a student to identify your strengths and weaknesses, and ask for any additional clarification if needed.
        02. Projects:
            - we will be grading a total of 4 projects during the duration of gold badge. Those projects are a CSS creature, static webpage, portfolio, and API project.
            - we will be grading you on professionalism, presentation ability/flow, ability to speak about your code, lab time effort, and meeting the project requirements.

3. Notes & studying
    - Be sure to make notes on your machine during lecture. Instructors will give you time to type out notes, but since we have a lot of material to cover you will need to be fairly quick.
        - Instructors will aslo Slack out all of our notes and code after lectures

    - At home, be sure to rewrite notes/code if you need some extra practice or some more time with a concept. Break down the code line by line if you need to and make comments to help better understand what the code is doing.
        - writing comment/notes can help solidify content

    - Try to figure out how you learn best
        - videos (visual), listening (auditory), or kenesthetically (doing)

    - CANVAS MODULES
        - Canvas modules will be the main source of information outside of in class lecture. We will be covering most of this stuff together in class during lecture, but if you want to review a subject again, the Canvas modules will be the place to do that.

    - Folder structure:
        - How to view folders in command prompt (dir/ls)
        - How to make a new folder (mkdir)

        javascriptSeptember2019
          javascriptLibrary
            0-prework
                1-htmlBasics
                2-cssBasics
                3-jsBasics
            1-jsFundamentals <-------- WE START HERE. In CMD: mkdir 1-jsFundamentals
              00-dayOne <-------- cd into jsFundamentals: mkdir 00-dayOne
              01-grammar&Types
                01-comments.js
                02-declarations.js
                03-scope.js
                04-hoisting.js
                05-types.js
                06-literals
              02-controlFlow&Error
                01-if.js
                02-ifElse.js
                03-switch.js
              03-loops
                01-forLoops.js
                02-forInLoops.js
                03-forOfLoops.js
              04-functions
                01-declarations.js
                02-expressions.js
                03-callingFunctions.js
                05-parameters.js
                09-arrowFunctions.js
              05-expressionsAndOperators
                01-assignmentOperators.js
                02-comparisonOperators.js
                03-ternaries.js
              09-arrays
                02-populating&Referring.js
                03-length.js, 04-iterating.js
                05-methods.js
              11-objects
            2-Projects
              WebPageTutorial(Folder)
              Portfolio(Folder)
              API(Folder)
            4-DOM Manipulation
              index.html
              index.js
            5-API
              1-Intro to API
                api.js
                index.html
              2-ASYNC programming & REST
                index.js
              3-API Apps
                01 Star-Wars
                  index.html
                  star-wars-script.js
                02-Unsplash
                  index.html
                  random-photo-fetch.js
                03-NYT
                  nyt.html
                  nyt.js
                  nyt.css
                04-GitHub     *https://api.github.com/users/henAutumn*
                  github.html
                  github.js
                05-YouTube
                  youtube.html
                  youtube.js
              4-API Team Walkthrough
              5-API Challenge
*/

/*
************
OVERVIEW FOR DAY
************

    - HTML
    - CSS
    - CSS Walthrough
    - Intro to CodePen
    - Smiley Face Modules (Canvas)
    - Give out CSS Creature Assignment

    - Comments
    - Variables
    - Declarations
    - Initialization
    - Datatypes

    9-9:30: introductions > announcements // 9:30-11: announcements > check installs > HTML Intro // 11-Lunch: Smiley Face Modules > CSS Creature (codepen.io)
    // LUNCH //
    1-3: CSS Mini Lesson // 3-5: JS - comments > variables > declarations > initialization > datatypes
*/

/*
************
 HTML Intro
************

    - open javascriptSeptember2019 in VSCode
        - navigate to:
            1-jsFundamentals
                00-dayOne
                    00.01.html  <-------- CREATE file in VSCode: 00.01.html

    - ! + tab or enter to generate boilerplate HTML code
        - if options do not show up, Emmet Abbreviations need to be turned on
            - to turn emmet abbreviations on:

                File > Preferences > Settings >
                    search Settings for 'emmet'
                        - make sure 'Show Abbreviation Suggestions' is checked
                        - make sure 'Show Expanded Abbreviation' is set to 'awlays'


    - VSCode is super helpful and allows us to utilize something called Emmet Abbreviations.
        - Emmet Abbreviations are a toolkit built into VSCode that allow you to run special expressions that are transformed into structured code block like HTML.
*/

/*
    - Explain meta data of HTML // what does HTML stand for? (Hypertext Markup Language):
        - DOCTYPE html simply states what type of document it is
        - The head is the metadata, which is just more detailed data about the document (or data) as a whole
        - charset="UTF-8" specifies the character encoding for the document
            - each character you're reading on the screen actually has a numeric value, and UTF-8 is just one of the encoding methods that were invented that let you write and read text in many languages
        - name and content is setting the size and the view
        - X-UA-Compatible tells it what version of intenet explorer to use
        - title is the document type that appears in our browser
        - link lets us to connect to other files like a stylesheet that allow us to style our webpage

    - show h1 - h6

    - commment out or remove h1 -h6 and complete the following challenge:
*/

/*
    CHALLENGE 1: TWO TRUTHS & A LIE

    Bronze:
      Make an h1 tag saying 'Two Truths and a Lie'
      Make 3 h3 tags, each saying a short blurb about that option (example: 'Been to Russia')
      Make 3 p tags (one for each h3 tag), giving a short sentence elaborating that truth/lie
      Wrap it all in a div tag

    Silver:
      Using CSS:
      Make the h1 tag LIGHT GREEN and CENTERED
      Make each h3 tag BLUE
      Make each p tag RED
      Wrap it all in a BORDER that is THICK and BLACK

    Gold:
      Curve the corners of that BORDER
      Give it a BACKGROUND COLOR of GREY
      Wrap each Truth/Lie in separate divs, give them each a BORDER, curve the BORDER, and make each BACKGROUND COLOR LIGHT GREY
      CENTER everyting in each div
      Line each Truth/Lie side-by-side
*/

// GO TO 01.01.html