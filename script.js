let formdata = []

function callvalue() {
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    document.writeln("Your INFO : <br>")
    document.writeln("Name : "+ name +"<br>");
    document.writeln("Username : "+ username);

    formdata.push(name,username);

}

function displaydata () {
    // document.getElementById.innerHTML = formdata.
    console.log(formdata);
}