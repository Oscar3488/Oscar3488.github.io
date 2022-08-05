


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

function home(){
    location.href='https://oscar3488.github.io/'
}

function message(){
    let ms = document.getElementsByClassName("board")[0];
    let add = document.getElementById("text").value
    let li = document.createElement("li");
    li.innerText=add;
    ms.insertBefore(li,ms.children[0]);
    document.getElementById("text").value = " ";
    // alert(ms)
}

start();
window.addEventListener('resize', start);
// function start(){
//     console.log(document.documentElement.clientWidth);
//     let cw = document.documentElement.clientWidth
//     if (cw<1000){
//         console.log(cw)
//         document.getElementById("new_article").style.display = "none"
//     }
//     else if(cw>=1000){
//         document.getElementById("new_article").style.display = "block"
//     }
// }

// #new_article{
    
//     margin: 5px;
//     padding: 20px;
//     /* float: right; */
//     position: absolute;
//     top: 500px;
//     right: 6%;
//     border: 2px solid black;
//     background-color: rgb(167, 209, 230);
    
// }
function start(){
    console.log(document.documentElement.clientWidth);
    let cw = document.documentElement.clientWidth
    if (cw<1000){
        console.log(cw)
        
        document.getElementById("new_article").style.position = "static"
        document.getElementById("new_article").style.width = "70%"
        document.getElementsByClassName("article_div")[0].style.width = "100%"
        document.getElementById("articlediv").className = "article_div_down"
        
    }
    else if(cw>=1000){
        document.getElementById("articlediv").className = "article_div"
        document.getElementById("new_article").style.position = "absolute"
        document.getElementById("new_article").style.width = "250px"
        document.getElementsByClassName("article_div")[0].style.width = "200px"
        
    }
}

function Biger(x){
    x.style.width="28%"
    x.style.margin="-20px"
    x.style.marginTop="-50px"
    x.style.transitionDuration="0.5s"
    // x.style.boxShadow = "2px 0px 5px 5px black"
}

function Small(x){
    x.style.width="25%"
    x.style.margin="0px"
    x.style.transitionDuration="0.5s"
}


// big.addEventListener("mouseover",Biger(big)) .style.width="2000px"