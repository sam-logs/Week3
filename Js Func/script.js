//copy within function
function general() {
    var arr = [1, 3, 4, 2, 5, 6, 8, 9]
    arr.copyWithin(3)
    alert(arr)
}

//entries()
function entries() {
    var a = ['Sam', 'Java', 'Javascript']
    var iterator = a.entries()
    for (let e of iterator)
        alert(e)
}

//every()
function JS() {
    var arr1 = [100, 200, 300, 400]
    function Java(n) {
        return n > 100
    }
    alert(arr1.every(Java));
}

//fill
function fills() {
    var arr = [1, 2, 34, 5]
    arr.fill(10)
    alert(arr)
}

//filter()
function filter() {
    function filt(value) {
        return value >= 5;
    }

    var arr = [1, 2, 4, 6, 3, 7, 9, 10, 23]
    var result = arr.filter(filt)
    alert(result)
}

//find()
function find() {
    function JavaTpoint(value) {
        return value > 12;
    }

    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 11, 14];
    var result = arr.find(JavaTpoint);
    alert(result)
}

//forEach()
function forEach() {


    var items = [1, 29, 47];
    var javaTpoint = [];

    items.forEach(function (item) {
        javaTpoint.push(item * 2);
    });

    alert(javaTpoint);

}
forEach();

//includes()
function includes() {
    var arr = [12, 24, 56, 78, 2];
    a = arr.includes(2)
    alert(a);
}

function join(){
    var arr = ['java','angular','spring tool']
    alert(arr.join())
}

//map
function map(){
    var input = [1,2,3]
    var output= input.map(function(input)
    {
        return input*5
    })
alert(output)
}

//reverse
function reverse(){
    var arr = [4,9,3,2]
    var arr1 = arr.reverse()
    alert(arr1)

}

//set 
function set(){
    var buffer1 = new ArrayBuffer(8);
    var A = new Uint8Array(buffer1); 
    A.set([ 1, 2, 3, 4],2); 
    alert(A)
}

//callback
function callback(){
    function showData(name, amt) {
        alert(' Hello ' + name + '\n Your entered amount is ' + amt);
        }
        
        function getData(callback) {
        var name = prompt(" Welcome\n What is your name?");
        var amt = prompt(" Enter some amount...");
        callback(name, amt);
        }
        
        getData(showData);
}

//Date
function date(){
    let val = new Date("2022-08-16");
    alert(val)
}

