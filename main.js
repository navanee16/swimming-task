
// var text =prompt("type");
// var x =""
// for(let i =text.length-1; i>=0; i--){
//     x=x+text[i]
// }
// if(x==text){
//     console.log("palindrome");
// }else{
//     console.log("not palindrome");
// }


var url= "https://www.youtube.com";

function splitfunction(url){
    var x ="";
   var m = url.split('://')
    // console.log(m);

    x=x+m[0];
    let y =m[1].split(".");
    // console.log(y);

    let z =y.join("")
    console.log(x+z);

    // var out =x.concat(y)
    // console.log(out);
    

}
splitfunction(url); 



var str="https://www.youtube.com";
const x =(char)=>{
   let sr ="";
    for(let i=0; i<=char.length; i++){
        let y =char.charCodeAt(i)

        if ((y>95 && x<123) || (y>65 && x<90) || (x>45 && x<56)) {
            sr=sr+char[i]
            
        }
    }
    return sr
}
var out =x(str);
console.log(out);
