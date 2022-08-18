function testClosure (){
    alert("Your product has been added to the cart");
}

var arr1 =[1,2,3];
var arr2 = [...arr1,4,5];
$(document).ready(function(){
$("#b2").click(function(){
    
    document.getElementsByClassName("#d2").innerText = "arr2";
});
});

$(document).ready(function(){
    $("button").click(function(){
        
        $("#img9").attr("width", "500");
    });
    });

    $(document).ready(function(){
        $("#btn1").click(function(){
            
            $("#img9").removeAttr("width","500");
        });
        });


