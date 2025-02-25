import readlineSync from 'readline-sync';

const greetingMessege = () => {
    const name = readlineSync.question('May I have your name? ');

    console.log(`Hi, ${name}`)
};
export { greetingMessege }