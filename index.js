function greet() {
    let name = prompt("What is your name?");
    alert("Hello " + name);
    let age = prompt("How old are you?");
    let year = new Date().getFullYear();
    if(confirm("Have you had a birthday this year?")){
        alert(year - age);
    }else{
        alert(parseInt(year - age - 1));
    }
}