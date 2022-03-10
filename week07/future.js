var job =["Teacher", "Designer", "journalist", "programmer"];
var city = ["Dallas", "Houston", "Lubbock", "McAllen"];
var spouse = ["Michelle", "Valeria", "Melissa", "Lilly"];
var numkids = [0,3,5,1];

var xx = Math.floor(Math.random() * 4)

function fortune(job,city,spouse,numkids){
document.write("Yoy will be a " + job + " in " + city + ", and married to " + spouse + " with " + numkids + " kids.")
}

fortune (job[xx],city[xx],spouse[xx],numkids[xx])