window.addEventListener(
    'load',
    kuk
);

function kuk(){
    ttt.addEventListener(
    'click',
    nnn
    )
}

function nnn(event){
   var p = document.forms.trigger.prpr.value
    if(p ==''){
        window.alert("Не указано Ваше Имя");
        event.preventDefault();
    }else{}
    var z =document.forms.trigger.prpr_2.value
    if(z ==''){
        window.alert("Не указано Ваша Фамилия");
        event.preventDefault();
    }else{}
    var f = document.forms.trigger.prpr_3.value
    if(f ==''){
        window.alert("Не указано Ваше Отчество");
        event.preventDefault();
    }else{}
}  


