var inputText=document.getElementById('exampleFormControlTextarea1');
var box=document.getElementById('box0');
var form=document.getElementById('form');
var back=document.getElementById('back');
var backp=document.getElementById('backp');
var add=document.getElementById('add');
var grid=document.getElementById('grid');
var contain=document.getElementById('contain');
var submit=document.getElementById('btnsubmit');
var time=document.getElementById('time');
var search=document.querySelector('.search input');
var months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

var f1=document.querySelector('.search');
var f2=document.querySelector('.icon');

if(sessionStorage.getItem('total')==null){
    var item=0;
    sessionStorage.setItem("total",item.toString());
}
console.log(sessionStorage.getItem('total'));

var pass=document.getElementById("pass");
// search.addEventListener('keyup',()=>{
//     f1.classList.remove('hide');

// const str=search.value.trim();
// filterNote(str);
// });
// const filterNote=(str)=>{
    
// Array.from(grid.children)
//     .filter((note)=>!note.textContent.includes(str))
//     .forEach((note)=>note.classList.add('filterd'));


//     Array.from(grid.children)
//        .filter((note)=>note.textContent.includes(str))
//        .forEach((note)=>note.classList.remove('filterd'));

//     Array.from(grid.children).forEach((note)=>{
//           if(!note.classList.contains('filterd') && note.id!='box0' ){
//             note.classList.add('size');
//         }
//     });
    
// };
// console.log(grid.children);
// function display(){
      
//     for(var i=1;i<=parseInt(sessionStorage.getItem('total'));i++){
//        var fek= (i+100).toString();
//     //     var stu=`'box${i}'`;
//     //     console.log(stu);
//     //    var abc= document.getElementById(stu);
//     //    console.log(abc);
//     //     abc.textContent=sessionStorage.getItem(i.toString());
//     //     grid.innerHTML+=abc;
//         console.log(sessionStorage.getItem(fek));
//         if(sessionStorage.getItem(fek)!=null)
//         {
//         var abc=new DOMParser().parseFromString(sessionStorage.getItem(fek),'text/html');
   
//       grid.prepend(abc.body);
      
     
//         }
       
        
//     }
   
    
//     console.log("succsess");
    
// }
var check;
var num;
 
// grid.addEventListener('click',e=>{
//     e.preventDefault();
//     if(e.target.classList.contains('box')||e.target.classList.contains('b')){
      
//         if(e.target.classList.contains('b'))
//         {
//             check=document.getElementById(e.target.id);
//         num=e.target.id;
            
//             console.log("one");
//         }
//     else if(e.target.classList.contains('box')){
//         console.log("two");
//         check=document.getElementById(e.target.id);
//         num=e.target.id.substring(3,e.target.id.length); 
       
//     }
     
        
//        console.log(num); 
//         contain.classList.add('hide');
//         f1.classList.add('hide');
//         f2.classList.add('hide');
// form.classList.remove('hide');
// backp.classList.remove('hide');
// c.classList.add('hide');
// if(num=="0"){
    
//     submit.style.display='none';
//     inputText.value=sessionStorage.getItem("instr");
//     inputText.style.pointerEvents='none';
   
// }else{
//     console.log(sessionStorage.getItem(num));
//     submit.style.display='block';
//     inputText.value=sessionStorage.getItem(num);
//     inputText.style.pointerEvents='auto';
    
// }


// a=1;

// } 
// else if(e.target.classList.contains('bottom')  ){
//       console.log(e.target.id);
//      var temp=e.target.id.substring(1,e.target.id.length);
    

   
//                  if (confirm("Do you want to delete?")) {
//                   sessionStorage.removeItem(temp);
//                   var str=(parseInt(temp)+100).toString();
//                   console.log(str);
//                   sessionStorage.removeItem(str);
//                     location.reload();
               
//                  } 

// }

// });

// box.addEventListener('click',e=>{
//     console.log(e.target.id);
//     var check=document.getElementById(e.target.id);
//     console.log(check);
// box.classList.add('hide');
// form.classList.remove('hide');
// backp.classList.remove('hide');
// add.classList.add('hide');
// console.log(sessionStorage['item1']);
// inputText.textContent=sessionStorage[item.toString()];
// });
// document.getElementById('btnsubmit').addEventListener('click',e=>{
//     e.preventDefault();
   
//         sessionStorage.setItem(item.toString(),inputText.value);
//     box.textContent=sessionStorage[item.toString()];
// alert("saved!");

// });
var a=parseInt(sessionStorage.getItem("click"));
console.log(sessionStorage.getItem("click"));
// back.addEventListener('click',e=>{
//     e.preventDefault();
//     form.classList.add('hide');
//     backp.classList.add('hide');
//     c.classList.remove('hide');
//     contain.classList.remove('hide');
//     inputText.innerHTML=null;
//     f1.classList.remove('hide');
//     f2.classList.remove('hide');
//     console.log(sessionStorage.getItem("total"));
//     a=0;
   

// });
if(a==0){
    inputText.value=sessionStorage.getItem("instr");
    submit.style.display='none';
   
    document.getElementById('ll').style.display='none';
}
else{
    inputText.value=sessionStorage.getItem(a.toString());
    submit.style.display='block';
    inputText.style.pointerEvents='auto';
}



Number.prototype.padLeft = function(base,chr){
    var  len = (String(base || 10).length - String(this).length)+1;
    return len > 0? new Array(len).join(chr || '0')+this : this;
}
 

    
        submit.addEventListener('click',e=>{
            var d = new Date,
            dformat = [
           d.getDate().padLeft(),(months[d.getMonth()]),
           d.getFullYear()].join(' ') +' ' +
          [d.getHours().padLeft(),
           d.getMinutes().padLeft()].join(':');
            e.preventDefault();
            
        
            
             if(a==-1){
                x=parseInt(sessionStorage.getItem("total"))+1;
            console.log(x);
           
               
                sessionStorage.setItem("total",x.toString());
               
                   
                        sessionStorage.setItem(x.toString(),inputText.value);
                        const html=`
                        <div class="box" id="box${x}">
                        <div  class="b" id="${x}">${sessionStorage.getItem(x.toString())}</div>
                        <ul>
                        <li id="t${x}">${dformat}</li> 
                      <li> <i class="fas fa-trash bottom"  id="d${x}" style="color: orange;" ></i></li> 
                        </ul>
                        <a href="edit.html" class="aa" id="${x}"></a>  
                      </div>`;
                      
                        var str=(x+100).toString();
                        console.log(str);
                      

                        
                    sessionStorage.setItem(str,html.trim());
                    var abc=new DOMParser().parseFromString(sessionStorage.getItem(str),'text/html');
   
                
                    console.log(sessionStorage.getItem(str));

                    console.log("saved");
                    M.toast({html: 'saved successfully!', classes: 'rounded  black-text #1de9b6 teal accent-3 text-darken-5'});
                return;
            }else{
                   

            sessionStorage.setItem(a.toString(),inputText.value);  
            x=a;
 
          
          
            
            var ss="t"+x.toString();
             const html=`
                         <div class="box" id="box${x}">
                         <div class="b" id="${x}">${sessionStorage.getItem(x.toString())}</div>
                         <ul>
                         <li id="t${x}">${dformat}</li> 
                       <li> <i class="fas fa-trash bottom" id="d${x}" style="color: orange;"></i></li> 
                         </ul>
                         <a href="edit.html" class="aa"  id="${x}"></a>
                         </div>`;
                         var str=(x+100).toString();
                         console.log(html);
                         sessionStorage.setItem(str,html);
                    // var tt=document.getElementById(ss);
                    // console.log(ss);
                    // tt.innerText=dformat;
                    M.toast({html: 'saved successfully!', classes: 'rounded  black-text #1de9b6 teal accent-3 text-darken-5'});      
             console.log("saved again");
             
                return;
             
            }
           
         });






       