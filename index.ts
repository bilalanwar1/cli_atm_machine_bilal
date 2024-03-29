import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 1122;

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number"
    }
]);

if (pinAnswer.pin === myPin) {
    console.log("Pin is correct!!!");

    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);

    console.log(operationAns.operation);

    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            }
        ]);

        if (amountAns.amount > myBalance) {
            console.log("Insufficient balance. Your current balance is: " + myBalance);
        } else {
            myBalance -= amountAns.amount;
            console.log("Withdrawal successful. Your remaining balance is: " + myBalance);
        }
    } else if (operationAns.operation === "check balance") {
        console.log("Your balance is: " + myBalance);
    }
} else {
    console.log("Please enter correct pin");
}