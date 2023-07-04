class Movie{
  constructor(title,studio,rating = "PG"){
    this.title = title;
    this.studio =studio;
    this.rating = rating;
  }
 

getPG(arrmovies){
  const Result = [];
  for(let item of arrmovies){
    if(item.rating === "PG"){
      Result.push(item);
    }
  }
    return Result;
}
}
const film = new Movie("Casino Royale","Eon Productions","PG­13")

let arrmovies= [
  new Movie("Leo","studio1","PG"),
  new Movie("Master","studio2","PG"),
  new Movie("vikram","studio3","PG13")
];

const movieinstance = new Movie();
movieinstance.arrmovies = arrmovies

const Result = movieinstance.getPG(arrmovies);
console.log(Result);
