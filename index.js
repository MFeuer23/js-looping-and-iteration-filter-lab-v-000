// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter( (d) => d.toLowerCase() === string.toLowerCase() );
  

}