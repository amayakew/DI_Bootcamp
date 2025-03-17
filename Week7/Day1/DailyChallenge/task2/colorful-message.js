// In colorful-message.js, require the chalk package and use it to create and display a colorful message in the terminal.

import chalk from 'chalk';

export function colorText(){
    const coloredText = chalk.blueBright('This is a blue text');
    console.log(coloredText);
};