const fs = require('fs');
const read_all = require('./read_all')

// Function to add a new todo item to the list.
function add_todo(title, content){
    all_todo_data = read_all.read_all()
    last_line = all_todo_data[all_todo_data.length-2]
    last_line_json = JSON.parse(last_line)
    last_id = last_line_json['id']
    
    // Make it to a json object.
    let todo_raw = {
        'id' : last_id++,
        'title' : title,
        'content' : content,
        'checked' : false
    }

    // Store the json object into the file.
    let new_todo = JSON.stringify(todo_raw);
    fs.appendFile('todo_data.txt', new_todo + "\n", function (err) {
        if (err) throw err;
    });
}

// Returning the function to add a new todo item 
module.exports = {
    add_todo
}