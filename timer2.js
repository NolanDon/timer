const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout

stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log('Thanks for using me, ciao!');
    process.exit();
  }
    else if (key === 'b') {
      process.stdout.write('\x07');
  } else if (key >= 1 && key <= 9) {
      setTimeout(() => {
      console.log(`setting timer for ${key} seconds...`)
        process.stdout.write('\x07');
  },key * 1000)
}}
)

// The user can press b and it should beep right away => 
// The user can input any number from 1 to 9 and it should => 
// immediately output "setting timer for x seconds...", and => logging this line
// beep after that number of seconds has passed => at length play sound 
// The user can use ctrl + c to exit the program, at which point the program should say "Thanks for using me, ciao!" before terminating => if press cntl c, exit and log that 