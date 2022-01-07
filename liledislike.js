function like(param){
    // let prev = parseInt(document.querySelector("#likecount").value);
    // document.querySelector("#likecount").innerHTML = prev + 1;
    let h1 = param.previousElementSibling;
    let likecount = h1.innerHTML;
    let newCount = parseInt(likecount)+1;
    h1.innerHTML = newCount;
}

function dislike(param){
    // let prev = parseInt(document.querySelector("#dislikecount").value);
    // document.querySelector("#dislikecount").innerHTML = prev + 1;
    let h2 = param.previousElementSibling;
    let dislikecount = h2.innerHTML;
    let newCount = parseInt(dislikecount)+1;
    h2.innerHTML = newCount;
}

// function tweet(){
//     let tweet = document.querySelector("#tweet").value;
//     let prevtweet = document.querySelector("#output").innerHTML;
//     let newtweet = 
// }