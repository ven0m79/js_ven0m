function sum(a, b = 10, c = 20, d = 30) {
    let result = a + b + c + d;
    return result;
}

let res = sum (1, 20, 30, 50);
console.log(res);

sum(1); //11
sum(10,20) //30

function checkSpace(spaceVol, ...rest) {
    let objectVol = 0;
    console.log(rest, spaceVol)

    if (spaceVol < objectVol) {
        return "too much";
    }
    return "ok";
}


let reso = checkSpace(1, 90, 20, 40);
console.log(reso);