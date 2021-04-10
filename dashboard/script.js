function display(ele){
    var span = ele.children[1];
    span.classList.add("activeTitle");
}

function hide(ele){
    var span = ele.children[1];
    span.classList.remove("activeTitle");
}