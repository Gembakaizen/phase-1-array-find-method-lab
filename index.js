// code your solution here
function superbowlWin(record) {
    const winningGame = record.find((game) => game.team === 'Denver Broncos' && game.result === 'W');

    return winningGame ? winningGame.year : undefined;
}

// Define the superbowlWin function
function superbowlWin(record) {
    // Use the find method to find a win object in the record array
    const winObject = record.find(item => item.result === "win");
  
    // If a win object is found, return the year, otherwise return undefined
    return winObject ? winObject.year : undefined;
  }
  
  
  function superbowlWin(record) {
    // Search for the object with a result of "W" (win)
    const winRecord = record.find(game => game.result === "W");
  
    return winRecord ? winRecord.year : undefined;
  }
  
  // Test data
  const record = [
    { year: "2015", result: "W" },
    { year: "2016", result: "L" },
    { year: "2017", result: "L" },
    // Add more objects as neededß
  ];

  console.log(superbowlWin(record));
   // Output: "2015"
  