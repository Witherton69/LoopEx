// LOOPS EXERCISE
// 1
for (i = 1; i <= 7; i++){
    console.log(i);
  }
 
  
  console.log('====================================');
  
  // 2
  for (i = 5; i <= 25; i += 4){
    console.log(i);
  }
  
  console.log('====================================');
  
  // 3a
  const wizards = [
    "Harry Potter",
    "Hermione Granger",
    "Ron Weasley"
  ];
  
  // 3b
  for (person of wizards){
    console.log(person);
  }
  
  console.log('====================================');
  
  // 4a
  let harryPotterMovies = 0;
  
  // 4b
  while (harryPotterMovies < 8){
    harryPotterMovies++;
  }
  
  // 4c
  console.log(harryPotterMovies);