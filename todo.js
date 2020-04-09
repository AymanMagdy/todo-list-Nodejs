const add_todo_caller = require('./add_todo')
const prompt = require('prompt-sync')();
const read_all_caller = require('./read_all')


var myArgs = process.argv.slice(2);

for(i=0; i < myArgs.length; i+=2){
    switch(myArgs[i]){
        case "--add":
            var is_title = process.argv.slice(3);
            title_body = ""
            if(is_title.includes('--title')) {
                j = 1;
                while(is_title[j] != "--body"){
                    title_body += is_title[j]
                    title_body += " "
                    j++;
                }
                // Getting the body content in the args.
            } if(is_title.includes('--body')) {
                is_body = []
                j = is_title.length-1;
                array_flag = 0
                while(is_title[j] != "--body"){
                    is_body[array_flag] = is_title[j]
                    array_flag++;
                    j--;
                }
            }  
            else {
                console.log("Not a valid request to add a new todo list");
            }
            content_body = ""
            is_body.reverse().forEach(element => {
                content_body += element;
                content_body += " "
            });
            // call the add_body here and store the data there.
            add_todo_caller.add_todo(title_body, content_body)
        break;
        case "--delete":
            console.log("Call the delete method here");
            // call the delete method here
            break;
        case "--update":
            console.log("Call the update method here");
            //call the update method here
            break;
        case "--list":
            console.log("1) Print checked todo items.");
            console.log("2) Print unchecked todo items.");
            console.log("3) Print all todos items.");

            const list_selection = prompt('Enter a number: ')
            switch(list_selection){
                case '1':
                    console.log("Print the checked items.");
                break;
                case '2':
                    console.log("Print the unchecked items.");
                break
                // Printing all the data;
                case '3':
                    all_lines = read_all_caller.read_all();
                    all_lines.forEach(line => {
                        console.log(line);
                    })
                break
                default:
                    console.log("Not a valid selection");
                break
            }
            // call the list method here
            break;
        case "--check":
            console.log("list and ask the user to enter the id of the todo hw wants to check.")
            break;
        case "--uncheck":
            console.log("list and ask the user to enter the id of the todo hw wants to uncheck.")
            break;
        default:
            // wrong message for the cx
            return 0;
    }
}