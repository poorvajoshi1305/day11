function add(){
    // let n1 = document.querySelector("#input1");
    // let n2 = document.querySelector("#input2");
    // let sum= n1+n2;
    // let parentDiv = document.querySelector("#parent");
    // parentDiv.innerHTML = `${sum}`;
    var n1, n2, sum;
    n1 = parseInt(document.querySelector("#first").value);
    n2 = parseInt(document.querySelector("#second").value);
    sum = n1+n2;
    document.querySelector("#answer").innerHTML = sum;
}

const sub = (n1, n2) => n1-n2; 
// function add(){
//     var a,b,c;
//     a=parseInt(document.querySelector("#first").value);
//     b=parseInt(document.querySelector("#second").value);
//     c= a + b;
//     document.querySelector("#answer").value= c;
//     }