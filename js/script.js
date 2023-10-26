function doInsert() {
    var name = document.getElementById("name").value;
    var city = document.getElementById("city").value;
    var address = document.getElementById("address").value;
    var message = document.getElementById("message").value;

    if (name === "" && city === "" && address === "" && message === "") {
        alert('Please fill out all fields:\nName\nCity\nAddress\nMessage');
    } else if (name === "") {
        alert('Name field is required');
    } else if (city === "") {
        alert('City field is required');
    } else if (address === "") {
        alert('Address field is required');
    } else if (message === "") {
        alert('Message field is required');
    } else {
        alert('Success!\nName: ' + name + '\nCity: ' + city + '\nAddress: ' + address + '\nMessage: ' + message);
    }
}
