
$('#modelTitle li').each(function (index) {
    //  $(this).props('index',index);
    console.log($(this));
    $(this).click(function () {
        console.log(index);
        $('#modelTitle li').removeClass('selected');
        $('#modelTitle li').eq(index).addClass('selected');
        $('#tab .tab-Unselected').removeClass("Hasselected");
        $('#tab .tab-Unselected').eq(index).addClass('Hasselected');
        if(index==2){
            $('#Progress-bar .Ball').eq(0).animate({'margin-left':'56%'},900,'linear');
            $('#Progress-bar .Ball').eq(1).animate({'margin-left':'55%'},900,'linear');
            $('#Progress-bar .Ball').eq(2).animate({'margin-left':'65%'},900,'linear');
        }
    })
})
var ConvasHtml = document.getElementById('html5');
var ConvasCss = document.getElementById('css');
var ConvasJS = document.getElementById('js');
var cxtHtml = ConvasHtml.getContext('2d');
var cxtCss = ConvasCss.getContext('2d');
var cxtJS = ConvasJS.getContext('2d');
cxtHtml.beginPath();
cxtHtml.arc(120,120,100,0,2*Math.PI,true);
cxtHtml.strokeStyle='#7973733b';
cxtHtml.lineWidth=4;
cxtHtml.lineCap='round';
cxtHtml.stroke();
cxtHtml.beginPath();
cxtHtml.arc(120,120,100,-Math.PI/2,-2.3*Math.PI,true);
cxtHtml.strokeStyle='#31c7ad';
cxtHtml.stroke();
cxtCss.beginPath();
cxtCss.arc(120,120,100,0,2*Math.PI,true);
cxtCss.strokeStyle='#7973733b';
cxtCss.lineWidth=4;
cxtCss.lineCap='round';
cxtCss.stroke();
cxtCss.beginPath();
cxtCss.arc(120,120,100,-Math.PI/2,-2*Math.PI,true);
cxtCss.strokeStyle='#9721c9';
cxtCss.stroke();
cxtJS.beginPath();
cxtJS.arc(120,120,100,0,2*Math.PI,true);
cxtJS.strokeStyle='#7973733b';
cxtJS.lineWidth= 4;
cxtJS.lineCap='round';
cxtJS.stroke();
cxtJS.beginPath();
cxtJS.arc(120,120,100,-Math.PI/2,-1.8*Math.PI,true);
cxtJS.strokeStyle='#e4941f';
cxtJS.stroke();
// $('#Progress-bar .Ball').eq(0).animate({'margin-left':'56%'},900,'linear');
//  $('#Progress-bar .Ball').eq(1).animate({'margin-left':'55%'},900,'linear');
//  $('#Progress-bar .Ball').eq(2).animate({'margin-left':'65%'},900,'linear');
$('#php').animate({'width':'63%'},900,'linear');
$('#react').animate({'width':'81%'},900,'linear');
$('#vue').animate({'width':'61%'},900,'linear');
$('#tab #projectText #projectText-contain a').mouseover(function (e) {
    $(this).find('.background').css('display','block').addClass('add-tranform');
    console.log($(e.target).find('.background'))
});
$('#tab #projectText #projectText-contain a').mouseleave(function (e) {
    $(this).children('.background').addClass('add-tranform').css('display','none')});
$('#turn-img img').map(function (index) {
    $(this).css('z-index',  $('#turn-img img').length-index);
    $('#turn-img #dot').css('z-index',5);
})
$('#turn-img #dot li').map(function (index) {
    let Index= index;
    Zindex=4;
    imgclick=[1,2,3,4];
    $(this).click(function fn() {
        count=0;
        count++;
        Zindex++;
        $('#turn-img img').eq(Index).css('z-index',Zindex);
        $('#turn-img #dot').css('z-index',Zindex+1);
        $('#turn-img #dot li').css('background','#63a35c');
        $(this).css('background','#92877a')
    });
    console.log($(this).click)
});
var count2=0;
function fn(){
    if (count2<3){
        $('#turn-img #dot li')[count2].click();
        count2++;
    } else {
        count2=0;
    }
    console.log(count2)
}

function play(){
    timer = setInterval(fn,1000);
}
$('#turn-img div img').mouseover(function () {
    clearInterval(timer);
});
$('#dot').mouseover(function () {
    clearInterval(timer);
});
$('#dot').mouseout(function () {
    play();
});
$('#turn-img div img').mouseout(function () {
    play();
});
play();
$('#list #list-nav li').map(function (index,e) {
    $(this).click(function () {
        $('#list #list-nav li').css('color',"#000000");
        $(this).css('color','#fff');
        console.log( document.documentElement.scrollTop);
        if(index==0){
            scrollTo(0,0);
        }if(index==1){
            scrollTo(0,$('#particles-js').height());
            $('#modelTitle li').eq(1).click();
        }
        if(index==2){
            $('#modelTitle li').eq(3).click();
            scrollTo(0,$('#particles-js').height());

        }if(index==3){
            scrollTo(0,$('#particles-js').height()+$('#IntroduceMyself').height());
        }
    })
})
$(':button').click(function () {
    $(':text').map(function () {
        if($(this).val()==""){

        }
    })
});
$('#qr-code').mouseover(function () {
    $('#qr-code-img').css('display','block')
});
$("#qr-code").click(function () {
    $('#qr-code-img').css('display','none')
})
