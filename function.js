
function friends(num) {
    for (let i = 0; i < num.length; i++) {
        const element = num[i];
        if (element % 2 == 0) {
            console.log(element, "the number is jor")
        }else{
            console.log(element, "the number is bijore")
        }
    }
}

var friendName = [12,45,12,15,7,9,45,10]
var result = friends(friendName)
console.log(result)

