const fs = require('fs');
const read_all_caller = require('./read_all')

function delete_todo(todo_id){
    all_todo_data = read_all_caller.read_all()
    new_items = []
    // Get the needed value.
    for(i=0; i < all_todo_data.length-1; i++){
        line_json = JSON.parse(all_todo_data[i]);
        if(line_json['id'] != todo_id){
            new_items[i] = all_todo_data[i]
        }
    }

    // delete the file
    fs.unlink('todo_data.txt', function (err) {
        if (err) throw err;
    }); 

    // Creat a new file with the same name
    fs.open('todo_data.txt','a',function (err) {
        if (err) throw err;
    })

    // Add the correct data to the file.
    for (i=0; i < new_items.length; i++){
        if(new_items[i] != null){
            fs.appendFile('todo_data.txt', new_items[i] + "\n", function (err) {
                if (err) throw err;
            });
        }
    }
}

module.exports = {
    delete_todo
}