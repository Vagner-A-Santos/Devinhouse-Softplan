var data = new Date();
var hora = data.getHours();
var min = data.getMinutes();

if (data.getHours() < 10) {
    var hora = "0" + DataTransfer.getHours();
}

if (data.getMinutes() < 10) {
    var min = "0" + data.getMinutes();
}

alert(`${hora}:${min}`)
