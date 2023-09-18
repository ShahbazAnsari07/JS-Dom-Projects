var updates = document.querySelector("h5");

var btn = document.querySelector("#add");

var check = 0;
btn.addEventListener("click", function(){
    if(check == 0) {
        updates.innerHTML = "Friends";
        updates.style.color = "green";
        btn.innerHTML = "Remove Friend";
        check = 1;
    } else {
        updates.innerHTML = "Stranger";
        updates.style.color = "red";
        btn.innerHTML = "Add Friend";

        check = 0
    }

});

