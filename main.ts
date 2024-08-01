#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk";
import { resolve } from "path";
class Player {
    name:string;
    fuel: number = 100;
    constructor(playerName: string) {
        this.name = playerName;
    }
    fuelIncrease() {
        this.fuel += 25;
    }
    fuelDecrease() {
        this.fuel -= 25;
    }
}
class Opponent {
    name: string
    fuel: number =100;
    constructor(opponentName: string){
        this.name = opponentName;
    }
    fuelDecrease(){
        this.fuel -= 25;}
    }
    async function startAgain (){
        let startAgain = await inquirer.prompt({
            type: "confirm",
            name: "continue",
            message: chalk.yellowBright("Do you want to continue?")
        });
        if (startAgain.continue) {
            await main(); 
        } else {
            process.exit();
        }
    }
    async function main() {
        console.log(chalk.magenta("\n Welcome To Adventure Game \n"));
    }
        await new Promise((resolve) => {
            setTimeout(resolve,2000)
        });
        let userInput = await inquirer.prompt([{
            name: "myPlayer",
            type:"input",
            message:chalk.yellowBright("Enter your player name")
        },
        {
            name:"opponent",
            type: "list",
            message:chalk.yellowBright("Select the opponent"),
            choices:["Zombie" ,"Fortnite","Titan"]
        }
    ]);
    let player = new Player(userInput.myPlayer);
    let opponent = new Opponent(userInput.opponent);
    
    while (true){
        let matchStart = await inquirer.prompt({
            name: "opration",
            type: "list",
            message:chalk.yellowBright("Select the option"),
            choices:["Attack","Increase your fuel","Run for life...."],
        })
        if (matchStart.opration === "Attack"){
            let randomNumber = Math.floor(Math.random()*2);
            if (randomNumber ==0){
                //decrease player's fuel
                player.fuelDecrease();
                console.log(chalk.red(`n\ ${player.name}'s fuel is ${player.fuel}`));
                console.log(
                    chalk.green(`${opponent.name}'s fuel is ${opponent.fuel}\n`)
                );
            }
            if (player.fuel <= 0 ){
                console.log(chalk.magenta("\nYOU LOST!!\n"))
                await startAgain();
            }
            if (randomNumber === 1){
                //decrease opponent's fuel
                opponent.fuelDecrease();
                console.log(chalk.green(`${player.name}'s fuel is ${player.fuel}`));
                console.log(chalk.red(`${opponent.name}'s fuel is ${opponent.fuel}\n`));
            }
            if (opponent.fuel <= 0) {
                console.log(chalk.green("\n Congratulations! YOU WIN.\n"));
                await startAgain();
            }
            }
            else if(matchStart.opration === "Increase Your Fuel"){
                if (player.fuel < 100){
                    player.fuelIncrease();
                    console.log(chalk.green(`\n Your fuel increased and became ${player.fuel}\n`)) 
                }
            else {
                console.log(chalk.magenta("YOUR FUEL IS ALREADY FILLED!"))}
                }
            else {
                console.log(chalk.red("\n SORRY YOU LOST\n"));
                await startAgain();
            }

        }
        main();