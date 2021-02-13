SIGNUP=false
total=0
function changingcolor(){
    document.getElementsByClassName('colored')[0].style.opacity='1'
    document.getElementsByClassName('colored')[0].style.backgroundColor=`hsl(${360+window.scrollY/6}, 60%, 50%)`;
}
function appearingonscroll(){
    document.getElementsByClassName('colored')[0].style.backgroundColor='gray'
    document.getElementsByClassName('colored')[0].style.opacity=`${window.scrollY/1000}`;
    }
function containnums(e){
    for (i=0;i<e.length;i++){
        if (!((e[i].toLowerCase().charCodeAt()>=97) && (e[i].toLowerCase().charCodeAt()<=123))){
            return true;
        }
    }
    return false
}
function countletter(e,l){
    s=0
    for (i=0;i<e.length;i++){
        if (e[i].toLowerCase()===l.toLowerCase()){
            s++
        }
    } return s}
function emailcheck(e){
    if ((e.toLowerCase().indexOf('@')<e.toLowerCase().indexOf('.')) && (countletter(e,'.')==1)){
        return true;
    }
    else {return false;}
}
function r(e){
    document.getElementById(e).style.display='none'
}
function totalcount(){
    total=0
    var E=document.getElementsByClassName('money')[0].getElementsByClassName('country');
    for (i of E){
        total+=parseFloat(i.getElementsByTagName('input')[0].value);
    }
    document.getElementById('num').innerText=total.toFixed(2)
    if (total){
        document.getElementsByClassName('donate-btn')[0].style.background=' #45af4bba';
        document.getElementsByClassName('donate-btn')[0].disabled = false;

    }else{document.getElementsByClassName('donate-btn')[0].style.background='gray';document.getElementsByClassName('donate-btn')[0].disabled = true}
}

function sub(){
    // CONST vars
    var FIRSTNAME=document.getElementById('Firstn').value;
    var LASTNAME=document.getElementById('Lastn').value;
    var EMAIL=document.getElementById('Email').value;
    var PASSWORD=document.getElementById('pass').value;
    var CONPASSWORD=document.getElementById('conpass').value;
    

    // Entry control
    if(containnums(FIRSTNAME)){
        document.getElementById('d1').style.display='block';
        document.getElementById('d1').classList.add('shake-horizontal');
        setTimeout(function(){document.getElementById('d1').style.display='none';},3500);
        return false;
    }
    if(FIRSTNAME.length<3){
        document.getElementById('d2').style.display='block';
        document.getElementById('d2').classList.add('shake-horizontal');
        setTimeout(function(){document.getElementById('d2').style.display='none';},3500);
        return false;
    }
    if(containnums(LASTNAME)){
        document.getElementById('d3').style.display='block';
        document.getElementById('d3').classList.add('shake-horizontal');
        setTimeout(function(){document.getElementById('d3').style.display='none';},3500);
        return false;
    }
    if(LASTNAME.length<3){
        document.getElementById('d4').style.display='block';
        document.getElementById('d4').classList.add('shake-horizontal');
        setTimeout(function(){document.getElementById('d4').style.display='none';},3500);
        return false;}
    if (!(emailcheck(EMAIL))){
        document.getElementById('d5').style.display='block';
        document.getElementById('d5').classList.add('shake-horizontal');
        setTimeout(function(){document.getElementById('d5').style.display='none';},3500);
        return false;
    }
    if (!(containnums(PASSWORD))){
        document.getElementById('d6').style.display='block';
        document.getElementById('d6').classList.add('shake-horizontal');
        setTimeout(function(){document.getElementById('d6').style.display='none';},3500);
        return false;
    }
    if (PASSWORD.length<8){
        document.getElementById('d7').style.display='block';
        document.getElementById('d7').classList.add('shake-horizontal');
        setTimeout(function(){document.getElementById('d7').style.display='none';},3500);
        return false;

    }
    if (PASSWORD!=CONPASSWORD){
        document.getElementById('d8').style.display='block';
        document.getElementById('d8').classList.add('shake-horizontal');
        setTimeout(function(){document.getElementById('d8').style.display='none';},3500);
        return false;
    }
    if (!(SIGNUP)){
        document.getElementById('d9').style.display='block';
        document.getElementById('d9').classList.add('bounce-top');
        setTimeout(function(){document.getElementById('d9').style.display='none';},3500);
        document.getElementsByClassName('donation')[0].style.display='flex';
        document.getElementsByClassName('contain')[0].classList.add('slide-in-top');
        document.getElementsByClassName('money')[0].classList.add('slide-in-top');
        SIGNUP=true
        return false;}else{return false}

    }
function cds(e){
    var E=e.value;
    if ((E=='') || parseFloat(E)<1.3){e.value=0;}
    e.value=parseFloat(E).toFixed(2)
    totalcount()
}
function adds(e){
    var E=document.getElementById(e);
    if (E.value=='0'){
        E.value= 1.3
    }else{E.value=(parseFloat(E.value)+0.1).toFixed(1)}
    totalcount()
}
function substr(e){
    var E=document.getElementById(e);
    if (E.value!='0'){
    if (E.value=='1.3'){
        E.value= 0
    }else{E.value=(parseFloat(E.value)-0.1).toFixed(1)}}
    totalcount()
}
function send(){
    if (!((total==0)||(total<1.3))){
        heartanimation()
        setTimeout(function(){window.open('https://www.paypal.com/tn/home');},3500);
    }
}
function heartanimation(){
    var hearts=document.getElementsByClassName('heart')

    for (i of hearts){ 
        i.style.transition=`${Math.random() * 10+2}s`
        i.style.left=`${Math.floor(Math.random() * 101)}vw`
        i.style.bottom='100vh';
    }
}
