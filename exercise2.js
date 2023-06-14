const just = {
    kay1: "text",
    kay2: 77
};

function general(property, argument){
    return (property in argument)
    }
console.log(general("kay1", just));
console.log(general("kay2", just));
console.log(general("", just));