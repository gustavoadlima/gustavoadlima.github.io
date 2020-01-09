function main(){
    selector();
    menuMob();
    watchMenu();
}

function selector(){
    var elementos = document.getElementsByClassName("item-selector");
    for (var i = 0; i< elementos.length; i++){
        elementos[i].addEventListener("click",function(){
            var elementosDeletar = document.getElementsByClassName("item-selector");
            for (var i = 0; i< elementosDeletar.length; i++){
                elementosDeletar[i].classList.remove("active");
            }
            this.classList.add('active');
            var val = this.value;
            switchAbout(val);
        });
    }
}

function switchAbout(val){
    var infos = document.querySelectorAll(".block-03 .info");
    for (var i = 0; i< infos.length; i++){
        infos[i].classList.remove("show");
    }
    var info = document.querySelectorAll(".info-"+val);
    console.log(info);
    info[0].classList.add("show");
}

function menuMob(){
    var btn = document.getElementById("menubtn").parentElement;
    btn.addEventListener("click", function(){
        console.log("foi")
        this.classList.toggle("open");
        var menu = document.getElementById("menu");
        menu.classList.toggle("open");
    });
}

function watchMenu(){
    var elementos = document.getElementsByClassName("menu-item");
    for (var i = 0; i< elementos.length; i++){
        elementos[i].addEventListener("click",function(){
            var menu = document.getElementById("menu");
            menu.classList.remove("open");
            var btn = document.getElementById("menubtn").parentElement;
            btn.classList.remove("open");
        });
    }
}


window.onload = main;
