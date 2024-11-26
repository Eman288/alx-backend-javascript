const readText = require('readline');

const r = readText.createInterface({
    input: process.stdin,
    output: process.stdout
});

r.question('Welcome to Holberton School, what is your name?\n', (input) => {
    console.log(`Your name is: ${input}`);
    r.close();
});

r.on('close', () => {
    console.log('This important software is now closing');
});
