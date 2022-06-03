   const array = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03,
    49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01];

    main.apply(array);

function main(){
    count1=0;
    count2=0;
    count3=0;
    count4=0;
    count5=0;
    count6=0;
    count7=0;
    count8=0;
    count9=0;
    count10=0;
    count11=0;

    for (let i = 0; i < array.length; i ++) {
        var item1 = array[i];
        //console.log(item1);
        if(item1>=95 && item1<=100){
            count1++;
           // console.log(count1);
            document.getElementById("p1").value=count1;
        } else if(item1>=90 && item1<95){
            count2++;
            //console.log(count2);
            document.getElementById("p2").value=count2;
        }
        else if(item1>=85 && item1<90){
            count3++;
            //console.log(count3);
            document.getElementById("p3").value=count3;
        }
        else if(item1>=80 && item1<85){
            count4++;
            //console.log(count4);
            document.getElementById("p4").value=count4;
        }
        else if(item1>=75 && item1<80){
            count5++;
            //console.log(count5);
            document.getElementById("p5").value=count5;
        }
        else if(item1>=70 && item1<75){
            count6++;
            //console.log(count6);
            document.getElementById("p6").value=count6;
        }
        else if(item1>=65 && item1<70){
            count7++;
            //console.log(count7);
            document.getElementById("p7").value=count7;
        }
        else if(item1>=60 && item1<65){
            count8++;
            //console.log(count8);
            document.getElementById("p8").value=count8;
        }
        else if(item1>=55 && item1<60){
            count9++;
            //console.log(count9);
            document.getElementById("p9").value=count9;
        }
        else if(item1>=50 && item1<55){
            count10++;
            //console.log(count10);
            document.getElementById("p10").value=count10;
        }
        else if(item1>=0 && item1<50){
            count11++;
            //console.log(count11);
            document.getElementById("p11").value=count11;
        }else{
            window.alert("Please enter numbers in the range 0-100 and positive only!!")
        }
    }
}
    

document.getElementById("button").onclick = function() {myfunction()};
function myfunction() {
  var x =document.getElementById("newgrade").value;
    //console.log(x);
    Math.floor(x);
    array.push(x);
main(array);
}