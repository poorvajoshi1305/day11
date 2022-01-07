function tweet(){
    let divparent = document.querySelector("#parent");
    let oldtweet = divparent.innerHTML;
    let newtweet = document.querySelector("#tweet").value;
    divparent.innerHTML = newtweet + oldtweet;
}