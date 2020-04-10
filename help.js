function help(){
    console.log("Welcome to my simple todo-list using JS from Ayman M. Soliman.");
    console.log("node todo.js --add --title (Enter your title here) --body (Write todo body here).");
    console.log("node todo.js --edit --id (Enter your new title here) --body (Enter your new body content here).");
    console.log("node todo.js --list (--all to list all the todo list) OR (--checked to list only checked items) OR (--checked to list only unchecked items)");
    console.log("node todo.js --remove --id (Enter the id to remove).");
    console.log("node todo.js --check --id (Enter the id to check a todo list).");
    console.log("node todo.js --uncheck --id (Enter the id to uncheck a post).");
}

module.exports = {
    help
}