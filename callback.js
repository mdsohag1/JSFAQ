
function callback(name, age, task) {
    console.log("your name", name)
    console.log("your age", age)
    task()
}

function gusol() {
    console.log("tumi gusol koro")
}

callback("sohag",20, gusol)
