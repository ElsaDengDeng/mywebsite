$(document).ready(function () {
    $(window).on("load", function () {
        imgLocation();
        var dataImg = { "data": [{ "src": "fluid_1.jpg" }, { "src": "fluid_2.jpg" }, { "src": "fluid_3.jpg" }, { "src": "fluid_4.jpg" }, { "src": "fluid_5.jpg" }, { "src": "fluid_6.jpg" }, { "src": "fluid_7.jpg" }, { "src": "fluid_8.jpg" }, { "src": "fluid_9.jpg" }, { "src": "fluid_10.jpg" }] };
        window.onscroll = function () {
            if (scrollside()){
                $.each(dataImg.data, function (index, value) {
                    var box = $("<div>").addClass("box").appendTo($("#container"));
                    var content = $("<div>").addClass("content").appendTo(box);
                    $("<img>").attr("src", "./images/" + $(value).attr("src")).appendTo(content);
                });
                imgLocation();
            }
        };
        window.onresize = function(){
            imgLocation();
        };
    });
 });

 function scrollside(){
     var box = $(".box");
     var lastboxHeight=box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
     var documentHeight=$(document).width();
     var srcollHeight=$(window).scrollTop();
     return(lastboxHeight<srcollHeight+documentHeight)?true:false;
 }

function imgLocation() {
    var box = $(".box");
    var boxWidth = box.eq(0).width();
    var num = Math.floor($(window).width() / boxWidth);
    var boxArr = [];
    box.each(function (index, value) {
        // console.log(index + "--" + value);
        value.style.cssText='';
        var boxHeight = box.eq(index).height();
        if (index < num) {
            boxArr[index] = boxHeight;
            // console.log(boxHeight);
        } else {
            var minboxHeight = Math.min.apply(null, boxArr);
            // console.log(minboxHeight);
            var minboxIndex = $.inArray(minboxHeight, boxArr);
            // console.log(minboxIndex);
            // console.log(value);
            $(value).css({
                "position": "absolute",
                "top": minboxHeight,
                "left": box.eq(minboxIndex).position().left
            });
            boxArr[minboxIndex] += box.eq(index).height();
        }

    });
}
