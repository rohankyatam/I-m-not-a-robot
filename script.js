var container=document.getElementsByClassName("container")[0];
  recall();
function recall(){
    var array=[];
var flag;
var first;
var second;
var third;
var four;
var fifth;
var six;
for(let i=1;i<=6;i++){
    let number=Math.floor(Math.random()*6)+1;
    let num=number.toString();
    if(array.includes(num)){
        i--;
    }
    else{
        array.push(num);
        flag=true;
    }
    if(flag==true){
       if(number==1){
       first=document.createElement("img");
       first.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw5L9hTC1JOe2jow6mdbkWxM0SgoTWzmyI-2PJ5pcc1op_Jc-XRfreZLhPAdc1yfmAkx0&usqp=CAU";
       container.appendChild(first);
       first.addEventListener("click",funclick);
       first.setAttribute("data-ns-test","img1");
       first.setAttribute("class",1);
       }
       if(number==2){
       second=document.createElement("img");
       second.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxfwOCv9yLNrTi1Wp6AFS1FGDCcdNhWAIbwZ3dDc6GSv2pqiUobttZzzZwAzaoQygvwhk&usqp=CAU";
       container.appendChild(second);
        second.addEventListener("click",funclick);
        second.setAttribute("data-ns-test","img2");
        second.setAttribute("class",2);
       
       }
       if(number==3){
       third=document.createElement("img");
       third.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZGo7QJ9v8wRrZ2n8Y-kJ47n3p7E_EXQAhLy5Q6jeRJ0MsNy6mi0AMJbqw_M5D69pnQk&usqp=CAU";
       container.appendChild(third);
        third.addEventListener("click",funclick);
       third.setAttribute("data-ns-test","img3");
       third.setAttribute("class",3);
       }
       if(number==4){
       four=document.createElement("img");
       four.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO4WxN1cY4kM9cKdBqDjlUcjKuxAV8cFmlNpLV2IUNQG_hHbYNkxr_nrycqiPKKBYOGjc&usqp=CAU";
       container.appendChild(four);
        four.addEventListener("click",funclick);
       four.setAttribute("data-ns-test","img4");
       four.setAttribute("class",4);
       
       }
        if(number==5){
       fifth=document.createElement("img");
       fifth.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYsvlVhYfwH8picwgvp58ze3TMwtGeQZY6pp5JOGuuJV2-htFyftQbiW99CSobJ13byaU&usqp=CAU";
       container.appendChild(fifth); 
         fifth.addEventListener("click",funclick);
         fifth.setAttribute("data-ns-test","img5");
         fifth.setAttribute("class",5);
          }
       if(number==6){
       six=document.createElement("img");
       six.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw5L9hTC1JOe2jow6mdbkWxM0SgoTWzmyI-2PJ5pcc1op_Jc-XRfreZLhPAdc1yfmAkx0&usqp=CAU";
       container.appendChild(six);
       six.addEventListener("click",funclick);
       six.setAttribute("data-ns-test","img1");
       six.setAttribute("class",6);
       }
       flag=false;
    }
       
}
var count=0;
var carray=[];
var butflag=true;
var but;
var but1;
var conform;
var verifybtn;
function funclick(event){
    var k=event.target.className;
    carray.push(k);
    count++;
    if(butflag==true){
        if(count==1){
         but=document.getElementById("but");
         but1=document.createElement("button");
         but1.innerHTML="Reset";
          but.appendChild(but1);
          but1.setAttribute("id","reset");
         but1.addEventListener("click",resetclick);
        }
    }
    
    if(count==2){
             verifybtn=document.createElement("button");
             verifybtn.innerHTML="Verify";
             document.getElementById("veri").appendChild(verifybtn);
             verifybtn.setAttribute("id","btn");
             verifybtn.addEventListener("click",verifyclick)
         if(((carray[0]=="1") && (carray[1]=="6")) || ((carray[0]=="6") && (carray[1]=="1")) ){
             conform=true;
         }
         else{
             if(carray[0]==carray[1]){
                 verifybtn.remove();
             }
             else{
             conform=false;}
             
         }
    }
    if(count>2){
        if(carray[count-1]!=carray[count-2]){
             verifybtn.remove();
             conform=false;
         }
       
    }
          butflag=false;
         but1.addEventListener("click",resetclick);
       
       
    }
    
function verifyclick(){
   if(conform==true){
       document.getElementById("para").innerText="You are a human. Congratulations!"
       but1.remove();
       verifybtn.remove();
   }
   else{
       document.getElementById("para").innerText="We can't verify you as a human. You selected the non-identical tiles."
       verifybtn.remove();
   }
}
function resetclick(){
    while(carray.length>0){
        carray.pop();
    }
    while(array.length>0){
        array.pop();
    }
    count=0;
    but1.remove();
    verifybtn.remove();
    first.remove();
    second.remove();
    third.remove();
    four.remove();
    fifth.remove();
    six.remove();
    document.getElementById("para").innerText="";
    recall();
}
}