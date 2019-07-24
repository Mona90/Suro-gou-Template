	$(document).ready(function(){
		//the first code
	$(window).scroll(function() {
         var height = $(window).scrollTop();
         if (height > 100) {
         $('.scroll').fadeIn();
         } else {
             $('.scroll').fadeOut();
         }
    });


//the second code
	$(".icon i").hover(function()
	{
		$(this).css("backgroundColor","#F7A804");
		$(this).css("color","white");
	},

function()
	{
		$(this).css("backgroundColor","white");
		$(this).css("color","#F7A804");

	});

//the third code
$(".social a").hover(function(){

	$(".1").css("backgroundColor","#EA4C89");
	$(".2").css("backgroundColor","#3B5998");
	$(".3").css("backgroundColor","#DB4A39");
	$(".4").css("backgroundColor","#0E76A8");
	$(".5").css("backgroundColor","#00ACEE");
	$(".6").css("backgroundColor","#4E658E");
    
},
function(){
   $(".social a").css("backgroundColor","#0E74A5");
});
//the forth code
$(".dropdown").hover(function()
	{
		$(".down").slideDown();
	},

function()
	{
		$(".down").slideUp();

	});

// show and hide placeholder
var placeholder = '';
$('[placeholder]').focus(function(){
	palceAttr = $(this).attr('placeholder');
	$(this).attr('placeholder', '');
}).blur(function(){
	$(this).attr('placeholder', palceAttr);
});

//show message when the field is empty
$('[required]').blur(function(){
	if($(this).val() == ''){
		$(this).next('span').fadeIn().delay(3000).fadeOut();
	}
});
 //change the write direction depend on the language
 $('.auto-direction').on('keyup', function(){
     if ($(this).val().charCodeAt(0) < 200){
     	$(this).css('direction', 'ltr');
     }else{
     	$(this).css('direction', 'rtl');
     }
 });

});
