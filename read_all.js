const fs = require('fs');

function read_all(){
    const data = fs.readFileSync('todo_data.txt', 'UTF-8');
    const lines = data.split(/\r?\n/);
    return lines
}

module.exports = {
    read_all
};