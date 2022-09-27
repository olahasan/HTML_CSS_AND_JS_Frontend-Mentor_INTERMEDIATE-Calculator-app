let num = document.querySelectorAll(".num");
let circle = document.getElementById("circle");
let body = document.getElementById("body");
let light = document.querySelectorAll(".light");
let l_b = document.querySelectorAll(".l_b");
let c = document.querySelectorAll(".c");
let to = document.querySelectorAll(".to");
let cal = document.getElementById("cal");
let show = document.getElementById("show");
let ee = document.getElementById("ee");
let aa = document.querySelectorAll(".aa");
let g = document.querySelectorAll(".g");
// console.log(num);
// console.log(circle);
// console.log(body);
// console.log(light);
// console.log(l_b);
// console.log(c);
// console.log(to);
// console.log(cal);
// console.log(show);
// console.log(ee);
// console.log(aa);
// console.log(g);



num.forEach(function(e, index){
    e.onclick = function(){
        if(index === 0){
            circle.style.marginLeft = "0";
            body.style.backgroundColor = "#404e72"; 
            light.forEach(function(e){
                e.style.backgroundColor = "#232c43"
             })
            cal.style.color = "#ededed"; 
            l_b.forEach(function(e){
                e.style.color = "#ededed"
             })
            show.style.backgroundColor = "#182034" 
            c.forEach(function(e){
                e.style.color = "#444b5a";
                e.style.backgroundColor = "#e6e6e6";
                e.style.boxShadow = " 0 3px 0 0 #a69d91";
             })
             to.forEach(function(e){
                e.style.backgroundColor = "#404e72";
                e.style.boxShadow = "0 3px 0 0 #404e7294"
             })
             ee.style.backgroundColor = "#d03f2f"; 
             ee.style.boxShadow = "0 3px 0 0 #93261a";
             circle.style.backgroundColor = "#d03f2f";




        }else if(index === 1){
            circle.style.marginLeft = "20px";
            body.style.backgroundColor = "#e6e6e6";
            light.forEach(function(e){
               e.style.backgroundColor = "#d1cccc"
            })
            cal.style.color = "black"; 
            l_b.forEach(function(e){
                e.style.color = "#232c43"
             })
            show.style.backgroundColor = "white" 
            c.forEach(function(e){
                e.style.color = "#232c43";
                e.style.backgroundColor = "#e6e6e6";
                e.style.boxShadow = " 0 3px 0 0 #a69d91";
             })
            to.forEach(function(e){
                e.style.backgroundColor = "#377f86";
                e.style.boxShadow = "0 3px 0 0 #1b5f65";
            })
            ee.style.backgroundColor = "#ca5502"; 
            ee.style.boxShadow = "0 3px 0 0 #93261a"; 
            circle.style.backgroundColor = "#d03f2f";


        }else{
            circle.style.marginLeft = "34px";
            body.style.backgroundColor = "#160628"; 
            aa.forEach(function(e){
                e.style.color = "#ffe53d";
             });

             g.forEach(function(e){
                e.style.backgroundColor = "#1d0934";
             });
            circle.style.backgroundColor = "#00e0d1";
            c.forEach(function(e){
                e.style.backgroundColor = "#341c4f";
                e.style.boxShadow = "0 3px 0 0 #871c9c";
             })
             to.forEach(function(e){
                e.style.backgroundColor = "#58077d";
                e.style.boxShadow = "0 3px 0 0 #bc15f4";
            });
            ee.style.backgroundColor = "#00e0d1"; 
            ee.style.boxShadow = "0 3px 0 0 #6cf9f2";  
             
        }
    }
})



let del = document.getElementById("del");
let re = document.getElementById("re");
// console.log(del);
// console.log(re);


re.onclick = function(){
    show.innerHTML = "";
}
del.onclick = function(){
    show.innerHTML = show.innerHTML.slice(0, -1);
}



let tt = document.querySelectorAll(".tt");
// console.log(tt);

tt.forEach(function(e){
  e.onclick = function(){
    // console.log(+ e.innerHTML);
    show.innerHTML = (show.innerHTML +  +e.innerHTML).replace(/(\d{3})(\d{3})(\d{3})/, '$1,$2,$3');
  }
})

let op = document.querySelectorAll(".op");
// console.log(op);

op.forEach(function(e){
  e.onclick = function(){
    if(show.innerHTML.length === 0){
        show.innerHTML = ""
    }else{
        show.innerHTML = show.innerHTML +  e.innerHTML;
    }
  }
})

let opp = document.querySelectorAll(".opp");
// console.log(opp);

opp.forEach(function(e){
    e.onclick = function(){
    //   console.log(e.innerHTML);
      show.innerHTML = show.innerHTML +  e.innerHTML;
    }
  })

ee.onclick = function(){
    show.innerHTML = +eval(show.innerHTML).toFixed(12)
    // console.log(show.innerHTML = +eval(show.innerHTML).toFixed(12))
}  







    