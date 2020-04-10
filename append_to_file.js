const fs = require('fs');

function append_new_data(new_items){
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
    append_new_data
}