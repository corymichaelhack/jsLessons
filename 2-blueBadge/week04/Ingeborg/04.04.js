// * JavaScript Challenge

/*
**************************
CODE CHALLENGE 4


Challenge: 

Given this object, 
Sort through and display the information as shown here:
{Name of Show}
  {image}
{episode number}{episode name}
  {episode synopsis}
{episode number}{episode name}
  {episode synopsis}
{episode number}{episode name}
  {episode synopsis}
{episode number}{episode name}
  {episode synopsis}

**************************/
let netflix = {
  id: 9,
  name: "Super Store",
  image:"random Image",
  season1: {
    seasonInfo: {
      episodeInfo: [
        { episodeSynopsis:"This is a show synopsis, I am too lazy to write any more", episode: 1, episodeName: "Pilot" },
        { episodeSynopsis:"This is a show synopsis, I am too lazy to write any more", episode: 2, episodeName: "Magazine Profile" },
        { episodeSynopsis:"This is a show synopsis, I am too lazy to write any more", episode: 3, episodeName: "Shots and Salsa" },
        { episodeSynopsis:"This is a show synopsis, I am too lazy to write any more", episode: 4, episodeName: "Mannequin" },
        { episodeSynopsis:"This is a show synopsis, I am too lazy to write any more", episode: 5, episodeName: "Shoplifter" },
        { episodeSynopsis:"This is a show synopsis, I am too lazy to write any more", episode: 6, episodeName: "Secret Shopper" },
        { episodeSynopsis:"This is a show synopsis, I am too lazy to write any more", episode: 7, episodeName: "Color Wars" },
        { episodeSynopsis:"This is a show synopsis, I am too lazy to write any more", episode: 8, episodeName: "Wedding Day Sale" },
        { episodeSynopsis:"This is a show synopsis, I am too lazy to write any more", episode: 9, episodeName: "All-Nighter" },
        { episodeSynopsis:"This is a show synopsis, I am too lazy to write any more", episode: 10, episodeName: "Demotion" },
        { episodeSynopsis:"This is a show synopsis, I am too lazy to write any more", episode: 11, episodeName: "Labor" }
      ]
    }
  },
  season2: {},
  season3: {}
};

function runThemAll(){

  let name = netflix.name; 
  let img = netflix.image;
  console.log(name+'\n\t'+img); 
  for(let i = 0; i<netflix.season1.seasonInfo.episodeInfo.length; i++){
    let eID = netflix.season1.seasonInfo.episodeInfo[i].episode;
    let eName = netflix.season1.seasonInfo.episodeInfo[i].episodeName;
    let eSyn = netflix.season1.seasonInfo.episodeInfo[i].episodeSynopsis; 
    console.log(eID+' '+ eName +'\n\t'+eSyn );
  }
}

runThemAll();

// ***************************************************************************


/*
Server gitbook assignment: Finish!
*/