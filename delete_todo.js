const read_all_caller = require('./read_all')
const append_to_file_caller = require('./append_to_file')

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

    // call append function and pass the new items.
    append_to_file_caller.append_new_data(new_items)
}

module.exports = {
    delete_todo
}