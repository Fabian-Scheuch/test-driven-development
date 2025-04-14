import { play } from "./rock-paper-scissors";

describe("play", () => {
  test.each([
    ["rock", "scissors", 1],
    ["scissors", "rock", 2],
    ["rock", "rock", 0],   
    ["paper", "paper", 0],  
    ["scissors", "paper", 1],
    ["paper", "scissors", 2], 
    ["rock", "paper", 2],     
  ])(
    "should return %i when player 1 chooses '%s' and player 2 chooses '%s'",
    (player1, player2, expected) => {
      expect(play(player1, player2)).toBe(expected);
    }
  );
});