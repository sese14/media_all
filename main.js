 window.addEventListener('load', function () {
    let y, x, sy, sx, w, h;
    if (localStorage.getItem("po_y") != null) {
        y = localStorage.getItem("po_y");
        x = localStorage.getItem("po_x");
    }

        if (localStorage.getItem('spo_y') != null) {
        sy = localStorage.getItem("spo_y");
        sx = localStorage.getItem("spo_x");
          
    }
    if (localStorage.getItem('h') != null) {

        h = localStorage.getItem('h')
        w = localStorage.getItem('w')
    }
   
    if (localStorage.getItem('sheight') != null) {

        sheight = localStorage.getItem('sheight')
        swidth = localStorage.getItem('swidth');
    }

   place(y,x);
   places(sy,sx);
    remembersize(h,w)
    remembersticksize(swidth,sheight);

    let text = localStorage.getItem('saved');
    document.getElementById('text').innerHTML = text
    
    

 });

 function places(sy,sx){
   // console.log("Places was called with:" +sy +":" +sx );
 document.getElementById("sticky").style.top = sy+"px"; 
 document.getElementById("sticky").style.left = sx+"px"; 
 }

function place(y, x){   
   // console.log("Place was called with:" +y +":" +x );

    document.getElementById("st").style.top = y+"px"; 
    document.getElementById("st").style.left = x+"px"; 
       } 
       function remembersize(h,w){
         //console.log("note"+h,w)
           document.getElementById('st').style.width = w+"px";
           document.getElementById('st').style.height = h+"px";
          }
          function remembersticksize(swidth, sheight){
          //  console.log("not note"+sheight)
           // console.log(swidth)
          document.getElementById('sticky').style.width = swidth+"px"
          document.getElementById('sticky').style.height = sheight+"px"
          }

function dragevent(){
    let y = document.getElementById('st').offsetTop;
    let x = document.getElementById('st').offsetLeft;

    localStorage.setItem("po_y", y);
    localStorage.setItem("po_x", x);
 
}

function stickdrag(){
    let y = document.getElementById('sticky').offsetTop;
    let x = document.getElementById('sticky').offsetLeft;
    localStorage.setItem("spo_y", y);
    localStorage.setItem("spo_x", x);

}



function savetext(){
let tex = document.getElementById('text').innerHTML
localStorage.setItem('saved', tex)
}

 
let sticksize = document.getElementById('sticky');
let reObserver = new ResizeObserver(() => {

  let swidth = sticksize.offsetWidth;
//console.log("stick:"+swidth);

let sheight = sticksize.offsetHeight;
//console.log(sheight);

if (swidth != 400){
  localStorage.setItem('swidth', swidth);
  localStorage.setItem('sheight', sheight);
  stickdrag();
}});
reObserver.observe(sticksize); 





let size = document.getElementById('st');
let resizeObserver = new ResizeObserver(() => { 
  
  let width = size.offsetWidth;
 // console.log("st"+width);

  let height = size.offsetHeight;
  //console.log(height);


  if (width != 350){
    localStorage.setItem('w', width);
    localStorage.setItem('h', height);
    dragevent();
  }
}); 
resizeObserver.observe(size);









function openTab(evt, Tab) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(Tab).style.display = "grid";
    evt.currentTarget.className += " active";}



