/**************************
GIT BRANCHING WALKTHROUGH
**************************/

/*
Git Branching

Folder Structure:
  projects
    testGit
      testGit.html

To html:
<h1>Master Branch</h1>

git add/commit/push (create GitHub repo)

git checkout -b develop

To html:
<h3>Develop Branch</h3>

git add/commit/push => DONT MERGE

git checkout -b tjm

To html:
<p style="color: blue">TJM Branch</p>

Copy p tag

git add/commit/push

git checkout develop

See no p tag => paste p tag and change color to green

git add/commit/push

git merge tjm 

LOCAL MERGE CONFLICT => show on vs.code

Pull Request:
develop <= tjm

REMOTE MERGE CONFLICT

Pull Request:
master <= develop

git checkout master

git pull

git branch -d tjm


Git Commands Used:
Recap:
git status
git add .
git commit -m "<message>"
git push

New:
git branch
git checkout <branch>
git checkout -b <new branch>
git branch -d <branch>
git merge <incoming branch>
git pull

Other helpful commands:
git remote -v
git remote rm origin
git stash
git stash pop
git rebase master
*/

/**************************
TYPESCRIPT WALKTHROUGH
**************************/

/*

*/

/**************************
TOUR OF HEROES/HELPFUL TUTORIALS
**************************/

/*
https://angular.io/tutorial

https://www.youtube.com/watch?v=AaNZBrP26LQ&t=54s
https://www.youtube.com/watch?v=z4JUm0Bq9AM

Disclaimer: It is really NOT a good idea to pull random tutorial videos from YouTube.  When looking to a video source for help, it is important that you are watching quality content that helps you learn the MATERIAL, not simply how to build a PROJECT.  

In this industry, it is very important to be able to read the documentation!  ALWAYS default at reading the docs and supliment your learning with other mediums.  
*/