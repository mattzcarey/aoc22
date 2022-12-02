const input = ``;

const partA = (input) => {
  const inputArray = input.split("\n");
  const totalScore = inputArray
    .map((round) => {
      const [them, me] = round.split(" ");
      const themScore = them === "A" ? 1 : them === "B" ? 2 : 3;
      const meScore = me === "X" ? 1 : me === "Y" ? 2 : 3;
      let score = 0;
      //calculate for win
      if (themScore == meScore - 1 || (themScore == 3 && meScore == 1)) {
        score += outcomeScore;
        score += meScore;
      }
      //calculate for draw
      if (themScore === meScore) {
        score += outcomeScore;
        score += meScore;
      }
      //calculate for lose
      if (themScore == meScore + 1 || (themScore == 1 && meScore == 3)) {
        score += meScore;
      }
      return score;
    })
    .reduce((a, b) => a + b, 0);
  return totalScore;
};

console.log(partA(input));

const partB = (input) => {
  const inputArray = input.split("\n");
  const totalScore = inputArray
    .map((round) => {
      const [them, outcome] = round.split(" ");
      const themScore = them === "A" ? 1 : them === "B" ? 2 : 3;
      const outcomeScore = outcome === "X" ? 0 : outcome === "Y" ? 3 : 6;
      let score = 0;
      let meScore = 0;
      switch (outcomeScore) {
        case 6:
          meScore = themScore + 1;
          if (meScore === 4) meScore = 1;
          score += outcomeScore;
          score += meScore;
          console.log("win", score);
          break;
        case 3:
          score += outcomeScore;
          score += themScore;
          console.log("draw", score);
          break;
        case 0:
          meScore = themScore - 1;
          if (meScore === 0) meScore = 3;
          score += meScore;
          console.log("lose", score);
      }
      return score;
    })
    .reduce((a, b) => a + b, 0);
  return totalScore;
};

console.log(partB(input));
