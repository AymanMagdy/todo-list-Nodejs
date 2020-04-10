const read_all_caller = require('./read_all')

function get_unchecked_items(){
    checked_items = []
    all_todo_data = read_all_caller.read_all()
    for(i=0; i < all_todo_data.length-1; i++){
        line_json = JSON.parse(all_todo_data[i]);
        if(line_json['checked'] == false){
            checked_items.push(line_json)
        }
    }

    return checked_items;
}

module.exports = {
    get_unchecked_items
}