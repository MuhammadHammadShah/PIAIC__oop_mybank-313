import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
let balance = 0;
// Function to display the menu and handle user input
async function displayMenu() {
    const choices = ["Deposit", "Withdraw", "Balance", "Exit"];
    const { option } = await inquirer.prompt({
        type: "list",
        name: "option",
        message: "Select an option:",
        choices: choices,
    });
    console.log(); // Empty line for readability
    switch (option) {
        case "Deposit":
            const { depositAmount } = await inquirer.prompt({
                type: "number",
                name: "depositAmount",
                message: "Enter the deposit amount:",
            });
            balance += depositAmount;
            console.log(chalk.green(`Successfully deposited $${depositAmount}.`));
            break;
        case "Withdraw":
            const { withdrawAmount } = await inquirer.prompt({
                type: "number",
                name: "withdrawAmount",
                message: "Enter the withdrawal amount:",
            });
            if (withdrawAmount <= balance) {
                balance -= withdrawAmount;
                console.log(chalk.yellow(`Successfully withdrew $${withdrawAmount}.`));
            }
            else {
                console.log(chalk.red("Insufficient balance for withdrawal."));
            }
            break;
        case "Balance":
            console.log(chalk.blue(`Your current balance is $${balance}.`));
            break;
        case "Exit":
            console.log(chalk.red("Exiting the application..."));
            return;
    }
    console.log(); // Empty line for readability
    // Repeat the process
    displayMenu();
}
// Start the CLI application
console.log(chalkAnimation.rainbow("Welcome to _oop_mybank!"));
// Call the function to display the menu
displayMenu();
