let cbool=false;
let pbool=false;

let bd=document.querySelector('body');
let store=document.querySelector('.store');
let plus=document.querySelector(".plus");
let colorarr=document.querySelectorAll('.color2');
let box=document.querySelector('.top-box');
let cros=document.querySelector('.cross');
let tickets;
let colorchange=null;
let color='red';
let  priority=document.querySelectorAll('.color');
let lckbox;
let arr=["pink","red","lightgreen","skyblue"];
let no=0;

let al='a';
  //localStorage.clear();

 if(localStorage.getItem("storage")){
  let g=JSON.parse(localStorage.getItem("storage"));
  console.log(g.length);
  console.log(g);
  store.removeChild(box);
for(let i=0;i<g.length;i++){
  let ele=document.createElement('div');
  ele.className='info-box';
  ele.innerHTML=`<div class="change-color ${g[i].n}" ></div>
  <div class="lock-box grey"></div>
 <div class="content-box"><textarea readonly class="content-box-input">${g[i].l1}</textarea></div>
`;
store.appendChild(ele);

}

// g.forEach((ele)=>{
//   console.log(ele);
// store.appendChild(ele.l1);
// })
store.appendChild(box);
tickets=document.querySelectorAll(".info-box");
}



function randomid(){
if(no>1000){al=String.fromCharCode(al.charCodeAt(0) + 1);no=0;}
let v="#"+al+no.toString();no++;
console.log(v);
return v;

}
store.addEventListener('click',(e)=>{
  //console.log(e.target);
colorchange=document.querySelectorAll('.change-color');
lckbox=document.querySelectorAll('.lock-box');
let cntbox=document.querySelectorAll('.content-box-input');
if(colorchange.length>0){  let j=0;
  
colorchange.forEach((ele)=>{
  
  if(ele==e.target){
    let i=0;let clr=ele.classList.item(1);
    for(i=0;i<4;i++){
      if(arr[i]==clr){break;}
    }
    i++;i=i%4;
ele.classList.remove(clr);
ele.classList.add(arr[i]);
tickets=document.querySelectorAll(".info-box");

let f=[];
tickets.forEach((l)=>{
 g=l.querySelector('.content-box-input');
 let c=l.querySelector('.change-color');
  let n=c.classList.item(1).toString();;
  let l1=g.value.toString();
  console.log(l);
  console.log(n+"=>");console.log(l1);
  f.push({n,l1});
})
localStorage.removeItem("storage");
localStorage.setItem("storage",JSON.stringify(f));

}
else if(lckbox[j]==e.target){
let cond=lckbox[j].classList.item(1);
if(cond=='grey'){
  lckbox[j].classList.remove('grey');
  lckbox[j].classList.add('white');
  cntbox[j].readOnly=false;
}
else{
  lckbox[j].classList.remove('white');
  lckbox[j].classList.add('grey');
  cntbox[j].readOnly=true;
}
tickets=document.querySelectorAll(".info-box");
}


j++;});
}

})

plus.addEventListener("click",(e)=>{

  if(pbool==false&&cbool==false){plus.style.backgroundColor='red';
  pbool=true;
  
  box.style.display="flex";}
  

})

colorarr.forEach((colorbox)=>{
  colorbox.addEventListener('click',(e)=>{
  color=colorbox.classList.item(1);
  })
  })

box.addEventListener("keypress",(e)=>{
  if(e.key=="Enter")
  {let dat=document.querySelector(".inp");
let data=dat.value;
dat.value="";

   let ele=document.createElement('div');
   ele.className='info-box';
   ele.innerHTML=`<div class="change-color ${color}" ></div>
   <div class="lock-box grey"></div>
  <div class="content-box"><textarea readonly class="content-box-input">${data}</textarea></div>
`
store.removeChild(box);
store.appendChild(ele);
store.appendChild(box);
tickets=document.querySelectorAll(".info-box");


let f=[];
tickets.forEach((l)=>{
 g=l.querySelector('.content-box-input');
 let c=l.querySelector('.change-color');
  let n=c.classList.item(1).toString();;
  let l1=g.value.toString();
  console.log(l);
  console.log(n+"=>");console.log(l1);
  f.push({n,l1});
})
localStorage.removeItem("storage");
localStorage.setItem("storage",JSON.stringify(f));
//===

colorchange=document.querySelectorAll('.change-color');

 
//console.log("===",colorchange.length);
box.style.display='none';
color='red';
plus.style.backgroundColor='transparent';
pbool=false;
  }
})
//====
let id;
cros.addEventListener('click',(e)=>{
  let g;
    if(pbool==false&&cbool==false){cros.style.backgroundColor='red';
   cbool=true;
   let id;
    tickets=document.querySelectorAll('.info-box');
    tickets.forEach((ticket)=>{
      
        ticket.addEventListener('click',(e)=>{
          //console.log(ticket);
          if(cbool==true){ store.removeChild(ticket);}
        
        })
      
    })
    //setTimeout(()=>{},10000);
  }

//cros.addEventListener('dbclick',(e)=>{
   //   setTimeout(10000);
      else{cbool=false;
    cros.style.backgroundColor='transparent';

   
    g=document.querySelectorAll('.info-box');
    if(cbool==false&&tickets.length!=g.length){
      tickets=g;
      
      let f=[];
  tickets.forEach((l)=>{
   g=l.querySelector('.content-box-input');
   let c=l.querySelector('.change-color');
    let n=c.classList.item(1).toString();;
    let l1=g.value.toString();
    console.log(l);
    console.log(n+"=>");console.log(l1);
    f.push({n,l1});
  })
  localStorage.removeItem("storage");
  console.log('hai');
  console.log("---========---=====-==-=-=-=-=-=-=-=-=-=-=-=-");
  console.log(f);
  localStorage.setItem("storage",JSON.stringify(f));
  tickets=document.querySelectorAll('.info-box');
  }
}
//}
 // )
//}
    

  
} 
)
//=====

priority.forEach((scol)=>{
  
scol.addEventListener('click',(e)=>{
  tickets=document.querySelectorAll('.info-box');
let pcol=scol.classList.item(1);
//console.log(pcol);
if(pcol=='rainbow'){
tickets.forEach((tick)=>{
tick.style.display='block'
})
}
else{//console.log('->else');
tickets.forEach((tick)=>{
  let child=tick.firstElementChild;
 let c=child.classList.item(1);
 if(pcol==c){
    tick.style.display='block'
 }
  else{
    tick.style.display='none'
  }
    })

}

})

})

//*/














