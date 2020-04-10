const prompt = require('prompt-sync')();
const read_all_caller = require('./read_all')
const add_todo_caller = require('./add_todo')
const checked_items_caller = require('./checked_items')
const unchecked_items_caller = require('./unchecked_items')
const delete_todo_caller = require('./delete_todo')
const update_todo_caller = require('./update_todo')
const check_todo_caller = require('./check_todo')
const uncheck_todo_caller = require('./uncheck_todo')

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
            var delete_id = process.argv.slice(4);
            delete_todo_caller.delete_todo(delete_id)
            break;
        case "--update":
            var update_id  = process.argv.slice(4, 5)
            var arguments = process.argv.slice(5)
            new_title_content = ""
            if(arguments.includes('--title')) {
                j = 1;
                while(arguments[j] != "--body"){
                    new_title_content += arguments[j]
                    new_title_content += " "
                    j++;
                }
                // Getting the body content in the args.
            } if(arguments.includes('--body')) {
                body_content_array = []
                j = arguments.length-1;
                array_flag = 0
                while(arguments[j] != "--body"){
                    body_content_array[array_flag] = arguments[j]
                    array_flag++;
                    j--;
                }
            } 
            new_body_content = ""
            body_content_array.reverse().forEach(element => {
                new_body_content += element
                new_body_content += " "
            })
            // call the update method and send the id, new_content and the new body content.
            update_todo_caller.update_todo(update_id, new_title_content, new_body_content)
        break;
        case "--list":
            var list_action  = process.argv.slice(3)
            switch(list_action[0]){
                case '--checked':
                    checed_items = checked_items_caller.get_checked_items()
                    checed_items.forEach(element => {
                        console.log(element);
                    })
                break;
                case '--unchecked':
                    checed_items = unchecked_items_caller.get_unchecked_items()
                    checed_items.forEach(element => {
                        console.log(element);
                    })
                break
                // Printing all the data;
                case '--all':
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
            var check_id  = process.argv.slice(3)
            check_todo_caller.check_todo(check_id)
        break;
        case "--uncheck":
            var uncheck_id  = process.argv.slice(3)
            uncheck_todo_caller.uncheck_todo(uncheck_id)
        break;
        default:
            // wrong message for the cx
            return 0;
    }
}