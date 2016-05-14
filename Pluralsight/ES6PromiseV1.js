function doAsync() {
    let p = new Promise (function(resolve, reject) {
        console.log("in promise code");
        setTimeout(function() {
            console.log("rejecting... ");
            reject("rejectedValue");
        }, 2000);
    });
    return p;
}

let promise = doAsync().then(function(val){
    console.log("Fulfilled! " + val);
    return "fulfilledReturnValue";
},
function(val){
    console.log("Rejected!" + val);
    return "rejectedReturnValue";
}).then(function(val){
    console.log("something else... " + val);
});