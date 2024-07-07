function interpret(command: string): string {
    let result = ''

    for(let i = 0; i < command.length; i++){
        if(command[i] === "(" && command?.at(i+1) === ")"){
            result += 'o'
        } else if(command[i] === "("  || command[i] === ")"){
            continue;
        } else {
            result += command[i]
        }
    }

    return result;
};