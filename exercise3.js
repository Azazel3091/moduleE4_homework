function object(){
    let object = Object.create(null)
    return object
}
const obj = object()
obj.name = "Not Prototype"
console.log(obj)