// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter( (d) => d.toLowerCase() === string.toLowerCase() );
}

function fuzzyMatch(drivers, string) {
  return drivers.filter( (d) => function(string){
    d.indexOf(`${string}`) === 0;
  });
}