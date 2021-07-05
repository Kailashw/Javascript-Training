var initialName = "Kailash";

function changeName() {
    console.log(initialName);
    intialName = initialName == "Kailash" ?  "Sravanthi" : "Kailash";
    console.log(initialName);
    document.getElementById("demo").innerHTML = intialName;
}

// var let const
// scope - global, locally, locally
// mutability - mutable, mutable, immutable (properties inside the constant can be accessed and mutated.)

{
    var a = "sumit"
    // const b = "kailash"
    let c = "codeMultiverse"
    const b = {
        name : 'sumit'
    }
    // b.name = 'CodeMultiverse';
    b = {
        name : 'CodeMultiverse'
    }
    console.log(b);
}

console.log(a);