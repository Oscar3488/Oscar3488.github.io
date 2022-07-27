


function Serch(){
    let search_content = document.getElementById("n. vmp6").value;
    window.open(`https://www.google.com.tw/search?q=${search_content}` );
    // alert(search_content)
    // console.log(search_content)
}

function back(){
    location.href='#'
    // alert(location.href)
}

function message(){
    let ms = document.getElementsByClassName("board")[0];
    let add = document.getElementById("text").value
    let li = document.createElement("li");
    li.innerText=add;
    ms.insertBefore(li,ms.children[0]);
    add.value="";
    // alert(ms)
}