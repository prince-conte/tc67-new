 $(document).ready(function() {
   var homesl = 0; teesersl = 0; salesl = 0; intro = 6000; click = 0;  click2 = 0; tcsl = 0; liner = 0;
        openTableCl1 = 0; openTableCl2 = 0; openTableCl3 = 0; openTableCl4 = 0; openTableCl5 = 0; openTableCl6 = 0;
        openSub_tableCl1_1 = 0; openSub_tableCl1_2 = 0; openSub_tableCl1_3 = 0;  
        openSub_tableCl2_1 = 0; openSub_tableCl2_2 = 0; openSub_tableCl2_3 = 0; 
        openSub_tableCl3_1 = 0; openSub_tableCl3_2 = 0; openSub_tableCl3_3 = 0; 
        openSub_tableCl4_1 = 0; openSub_tableCl4_2 = 0; openSub_tableCl4_3 = 0; 
        openSub_tableCl5_1 = 0; openSub_tableCl5_2 = 0; openSub_tableCl5_3 = 0; 
        openSub_tableCl6_1 = 0; openSub_tableCl6_2 = 0; openSub_tableCl6_3 = 0; 
        magClick = 0; magSale = 0; searchHeaderClick = 0; clickMap = 0;
     
     
     
// map
     
$("#map-button").click(function () {  

if (clickMap == 0) 
{    
$('#map-button').addClass('m-active');     
$('.map-block').fadeIn(0);     
$('.map-block').css('height' , '450px');     
$('.map-body').css('height' , '450px');     
$('.map-body').delay(500).fadeIn(1000); 
clickMap = 1;
     }
    
else {
$('#map-button').removeClass('m-active'); 
$('.map-body').fadeOut(1000);
$('.map-block').delay(1000).fadeOut(0);     
$('.map-block').css('height' , '0px');     
$('.map-body').css('height' , '0px');     
 
clickMap = 0;    
}  

});    
     
// search
     
     $("#search-open").click(function () {  
     
    $('.search-block').addClass('active-serch');     
     
     });
          
     $("#close-search-block").click(function () {  
     
    $('.search-block').removeClass('active-serch');     
     
     });
     
    $("#search-h").focus(function () { 
        
    $('.inp-s').addClass('active');
        
    });
     

  
     
     
     
  $("#mag-click").click(function () { 
  if (magClick == 0) {  
    $('#a-table-tx-mag').fadeIn(0);  
    magClick = 1;   
  }
   else {      
    $('#a-table-tx-mag').fadeOut(0);  
    magClick = 0;   
  }
      
  });
        
  $("#sale-click").click(function () { 
  if (magSale == 0) {  
    $('#a-table-tx-sale').fadeIn(0);  
    magSale = 1;   
  }
   else {      
    $('#a-table-tx-sale').fadeOut(0);  
    magSale = 0;   
  }
      
  });
       

// scroll to      
     
$(".sc").click(function () {
var elementClick = $(this).attr("href")
var destination = $(elementClick).offset().top;
jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 500);
return false;
});
     
  

     
     
     
     
     
     
     
     
     // message form
     
     $('#message').click(function() {
     $('#mess').fadeIn(500);      
     });
         

         
     $('.close-mess').click(function() {
     $('.popup_block').fadeOut(500);      
     }); 
     
     
     
     // open sub-table archiv__________________________________________________________________________________________//
     
     // 1
     
     $('#title-table-button1_1').click(function() {      
     if (openSub_tableCl1_1 == 0) {
     $('#table-min1_1').fadeIn(0);
      openSub_tableCl1_1 = 1;          
     } else {
      $('#table-min1_1').fadeOut(0);
      openSub_tableCl1_1 = 0;} 
     });
     
       
     $('#title-table-button1_2').click(function() {      
     if (openSub_tableCl1_2 == 0) {
     $('#table-min1_2').fadeIn(0);
      openSub_tableCl1_2 = 1;          
     } else {
      $('#table-min1_2').fadeOut(0);
      openSub_tableCl1_2 = 0;} 
     });
     
        
     $('#title-table-button1_3').click(function() {      
     if (openSub_tableCl1_3 == 0) {
     $('#table-min1_3').fadeIn(0);
      openSub_tableCl1_3 = 1;          
     } else {
      $('#table-min1_3').fadeOut(0);
      openSub_tableCl1_3 = 0;} 
     });
     
     
         
     // 2
     
     $('#title-table-button2_1').click(function() {      
     if (openSub_tableCl2_1 == 0) {
     $('#table-min2_1').fadeIn(0);
      openSub_tableCl2_1 = 1;          
     } else {
      $('#table-min2_1').fadeOut(0);
      openSub_tableCl2_1 = 0;} 
     });
     
       
     $('#title-table-button2_2').click(function() {      
     if (openSub_tableCl2_2 == 0) {
     $('#table-min2_2').fadeIn(0);
      openSub_tableCl2_2 = 1;          
     } else {
      $('#table-min2_2').fadeOut(0);
      openSub_tableCl2_2 = 0;} 
     });
     
        
     $('#title-table-button2_3').click(function() {      
     if (openSub_tableCl2_3 == 0) {
     $('#table-min2_3').fadeIn(0);
      openSub_tableCl2_3 = 1;          
     } else {
      $('#table-min2_3').fadeOut(0);
      openSub_tableCl2_3 = 0;} 
     });
     
     
          
         
     // 3
     
     $('#title-table-button3_1').click(function() {      
     if (openSub_tableCl3_1 == 0) {
     $('#table-min3_1').fadeIn(0);
      openSub_tableCl3_1 = 1;          
     } else {
      $('#table-min3_1').fadeOut(0);
      openSub_tableCl3_1 = 0;} 
     });
     
       
     $('#title-table-button3_2').click(function() {      
     if (openSub_tableCl3_2 == 0) {
     $('#table-min3_2').fadeIn(0);
      openSub_tableCl3_2 = 1;          
     } else {
      $('#table-min3_2').fadeOut(0);
      openSub_tableCl3_2 = 0;} 
     });
     
        
     $('#title-table-button3_3').click(function() {      
     if (openSub_tableCl3_3 == 0) {
     $('#table-min3_3').fadeIn(0);
      openSub_tableCl3_3 = 1;          
     } else {
      $('#table-min3_3').fadeOut(0);
      openSub_tableCl3_3 = 0;} 
     });
              
     // 4
     
     $('#title-table-button4_1').click(function() {      
     if (openSub_tableCl4_1 == 0) {
     $('#table-min4_1').fadeIn(0);
      openSub_tableCl4_1 = 1;          
     } else {
      $('#table-min4_1').fadeOut(0);
      openSub_tableCl4_1 = 0;} 
     });
     
       
     $('#title-table-button4_2').click(function() {      
     if (openSub_tableCl4_2 == 0) {
     $('#table-min4_2').fadeIn(0);
      openSub_tableCl4_2 = 1;          
     } else {
      $('#table-min4_2').fadeOut(0);
      openSub_tableCl4_2 = 0;} 
     });
     
        
     $('#title-table-button4_3').click(function() {      
     if (openSub_tableCl4_3 == 0) {
     $('#table-min4_3').fadeIn(0);
      openSub_tableCl4_3 = 1;          
     } else {
      $('#table-min4_3').fadeOut(0);
      openSub_tableCl4_3 = 0;} 
     });
     
                 
     // 5
     
     $('#title-table-button5_1').click(function() {      
     if (openSub_tableCl5_1 == 0) {
     $('#table-min5_1').fadeIn(0);
      openSub_tableCl5_1 = 1;          
     } else {
      $('#table-min5_1').fadeOut(0);
      openSub_tableCl5_1 = 0;} 
     });
     
       
     $('#title-table-button5_2').click(function() {      
     if (openSub_tableCl5_2 == 0) {
     $('#table-min5_2').fadeIn(0);
      openSub_tableCl5_2 = 1;          
     } else {
      $('#table-min5_2').fadeOut(0);
      openSub_tableCl5_2 = 0;} 
     });
     
        
     $('#title-table-button5_3').click(function() {      
     if (openSub_tableCl5_3 == 0) {
     $('#table-min5_3').fadeIn(0);
      openSub_tableCl5_3 = 1;          
     } else {
      $('#table-min5_3').fadeOut(0);
      openSub_tableCl5_3 = 0;} 
     });
     
                     
     // 6
     
     $('#title-table-button6_1').click(function() {      
     if (openSub_tableCl6_1 == 0) {
     $('#table-min6_1').fadeIn(0);
      openSub_tableCl6_1 = 1;          
     } else {
      $('#table-min6_1').fadeOut(0);
      openSub_tableCl6_1 = 0;} 
     });
     
       
     $('#title-table-button6_2').click(function() {      
     if (openSub_tableCl6_2 == 0) {
     $('#table-min6_2').fadeIn(0);
      openSub_tableCl6_2 = 1;          
     } else {
      $('#table-min6_2').fadeOut(0);
      openSub_tableCl6_2 = 0;} 
     });
     
        
     $('#title-table-button6_3').click(function() {      
     if (openSub_tableCl6_3 == 0) {
     $('#table-min6_3').fadeIn(0);
      openSub_tableCl6_3 = 1;          
     } else {
      $('#table-min6_3').fadeOut(0);
      openSub_tableCl6_3 = 0;} 
     });
     
     
     
        
     // open table archiv
     
     
   $('#open-table1').click(function() {
                
                  if (openTableCl1 == 0) {
                  $('#a-table-tx1').fadeIn(0);  
                  openTableCl1 = 1
                      
                  } else {
                  
                  $('#a-table-tx1').fadeOut(0);  
                  openTableCl1 = 0
                      
                  }
                 
             });
     
     
   $('#open-table2').click(function() {
                
                  if (openTableCl2 == 0) {
                  $('#a-table-tx2').fadeIn(0);  
                  openTableCl2 = 1
                      
                  } else {
                  
                  $('#a-table-tx2').fadeOut(0);  
                  openTableCl2 = 0
                      
                  }
                 
             });
          
   $('#open-table3').click(function() {
                
                  if (openTableCl3 == 0) {
                  $('#a-table-tx3').fadeIn(0);  
                  openTableCl3 = 1
                      
                  } else {
                  
                  $('#a-table-tx3').fadeOut(0);  
                  openTableCl3 = 0
                      
                  }
                 
             });
     
          
   $('#open-table4').click(function() {
                
                  if (openTableCl4 == 0) {
                  $('#a-table-tx4').fadeIn(0);  
                  openTableCl4 = 1
                      
                  } else {
                  
                  $('#a-table-tx4').fadeOut(0);  
                  openTableCl4 = 0
                      
                  }
                 
             });
     
          
   $('#open-table5').click(function() {
                
                  if (openTableCl5 == 0) {
                  $('#a-table-tx5').fadeIn(0);  
                  openTableCl5 = 1
                      
                  } else {
                  
                  $('#a-table-tx5').fadeOut(0);  
                  openTableCl5 = 0
                      
                  }
                 
             });
     
          
   $('#open-table6').click(function() {
                
                  if (openTableCl6 == 0) {
                  $('#a-table-tx6').fadeIn(0);  
                  openTableCl6 = 1
                      
                  } else {
                  
                  $('#a-table-tx6').fadeOut(0);  
                  openTableCl6 = 0
                      
                  }
                 
             });
     

     // open table archiv 


     

   $('#tel').click(function() {
                
                  $('#false').fadeOut(0);
                  $('#true').delay(1000).css('display' , 'block');
                 
             }); 
     
     $('.tel').click(function() {
                
                  $('.false').fadeOut(0);
                  $('.true').delay(1000).css('display' , 'block');
                 
             }); 
               
               
                    
     
     
     
     
           $('#w-liner').click(function() {
               
               if (liner == 0) {
               
               
                  $('#a-table-tx').addClass('liners');
                  $('#w-liner').removeClass('w-active');
                  liner = 1;
             
             }  else {
                 
                  $('#a-table-tx').removeClass('liners');
                  $('#w-liner').addClass('w-active');
                  liner = 0;   
                 
             }
               
               
               
               
          });     
     
     
     
 
     
  var cycleTimer;

function startCycle() {
   cycleTimer = setInterval(function () {
      if (homesl == 0) 
                  {
     
                  $('#home-info2').fadeIn(300);
                  $('#home-info1').fadeOut(300);
                  $('a.n-r').addClass('active');
                  $('a.n-l').removeClass('active');
                  homesl = 1; 
                  } else { 
                  if (homesl == 1) 
                  {   
                  $('#home-info1').fadeIn(300);
                  $('#home-info2').fadeOut(300);
                  $('a.n-l').addClass('active');
                  $('a.n-r').removeClass('active');
                  homesl = 0;  }}
    
    
    
    
           if (teesersl == 0) {
           
           $('#teeser2').fadeIn(300);
           $('#teeser1').fadeOut(300);
           teesersl = 1;
           
       } else {
       if (teesersl == 1) {   
           $('#teeser3').fadeIn(300);
           $('#teeser2').fadeOut(300);
           teesersl = 2;
           } else{ if (teesersl == 2) {
               
           $('#teeser1').fadeIn(300);
           $('#teeser3').fadeOut(300);
           teesersl = 0;
               
               
        } }}
    
    
   }, 8000);
}

// start to automatically cycle slides
startCycle();
     
   
     
function stopCycle() {
   clearInterval(cycleTimer);
   startCycle();
}


     
     
          $('a.n-l').click(function() {
                  $('#home-info1').fadeIn(300);
                  $('#home-info2').fadeOut(300);
                  $('a.n-l').addClass('active');
                  $('a.n-r').removeClass('active');
                  homesl = 0;
                  stopCycle();
                  
          });   
               $('a.n-r').click(function() {
                  $('#home-info2').fadeIn(300);
                  $('#home-info1').fadeOut(300);
                  $('a.n-r').addClass('active');
                  $('a.n-l').removeClass('active');
                  homesl = 1;
                  stopCycle()
          });  
     
     
     
     



// слайдер рекламы на первой стр


   $('a.teeser-right').click(function() {
       

   
       
       if (teesersl == 0) {
           
           $('#teeser2').fadeIn(300);
           $('#teeser1').fadeOut(300);
           teesersl = 1;
           stopCycle();

       } else {
       if (teesersl == 1) {   
           $('#teeser3').fadeIn(300);
           $('#teeser2').fadeOut(300);
           teesersl = 2;
           stopCycle();

           } else{ if (teesersl == 2) {
               
           $('#teeser1').fadeIn(300);
           $('#teeser3').fadeOut(300);
           teesersl = 0;
           stopCycle();

               
        } }}}); 


   $('a.teeser-left').click(function() {
       
    stopCycle();
       
       if (teesersl == 0) {
           
           $('#teeser3').fadeIn(300);
           $('#teeser1').fadeOut(300);
           teesersl = 2;
           stopCycle();

       } else {
       if (teesersl == 1) {   
           $('#teeser1').fadeIn(300);
           $('#teeser2').fadeOut(300);
           teesersl = 0;
           stopCycle();

           } else{ if (teesersl == 2) {
               
           $('#teeser2').fadeIn(300);
           $('#teeser3').fadeOut(300);
           teesersl = 1;
           stopCycle();
   
               
               
        } }}}); 

// слайдер рекламы на первой стр

     
$('a.s-l').click(function() {
       

       
       if (salesl == 0) {
           
           $('#sale-3').fadeIn(1500);
           $('#sale-1').fadeOut(200);
           $('#sale-p1').removeClass('active');
           $('#sale-p3').addClass('active');
           salesl = 2;
           
           
       } else {
       if (salesl == 1) {   
           $('#sale-1').fadeIn(1500);
           $('#sale-2').fadeOut(200);
           $('#sale-p2').removeClass('active');
           $('#sale-p1').addClass('active');
           salesl = 0;

           } else{ if (salesl == 2) {
               
           $('#sale-2').fadeIn(1500);
           $('#sale-3').fadeOut(200);
           $('#sale-p3').removeClass('active');
           $('#sale-p2').addClass('active');
           salesl = 1;                
        } }}});     
     
   $('a.s-r').click(function() {
       

       
       if (salesl == 0) {
           
           $('#sale-2').fadeIn(1500);
           $('#sale-1').fadeOut(300);
           $('#sale-p1').removeClass('active');
           $('#sale-p2').addClass('active');
           salesl = 1;
           
       } else {
       if (salesl == 1) {   
           $('#sale-3').fadeIn(1500);
           $('#sale-2').fadeOut(300);
           $('#sale-p2').removeClass('active');
           $('#sale-p3').addClass('active');           
           salesl = 2;
           } else{ if (salesl == 2) {
               
           $('#sale-1').fadeIn(1500);
           $('#sale-3').fadeOut(300);
           $('#sale-p3').removeClass('active');
           $('#sale-p1').addClass('active');  
           salesl = 0;
  
               
        } }}});      
     
  
   $('#sale-p1').click(function() {
               
           $('#sale-1').fadeIn(1500);
           $('#sale-2').fadeOut(300);
           $('#sale-3').fadeOut(300);
           $('#sale-p3').removeClass('active');
           $('#sale-p2').removeClass('active');
           $('#sale-p1').addClass('active');
           salesl = 0;
           
                    
        } );     
     
   $('#sale-p2').click(function() {
               
           $('#sale-2').fadeIn(1500);
           $('#sale-1').fadeOut(300);
           $('#sale-3').fadeOut(300);
           $('#sale-p1').removeClass('active');
           $('#sale-p3').removeClass('active');
           $('#sale-p2').addClass('active');
           salesl = 1;
           
                    
        }); 
     
     
        $('#sale-p3').click(function() {
               
           $('#sale-3').fadeIn(1500);
           $('#sale-2').fadeOut(300);
           $('#sale-1').fadeOut(300);
           $('#sale-p1').removeClass('active');
           $('#sale-p2').removeClass('active');
           $('#sale-p3').addClass('active');
           salesl = 2;
           
                    
        } ); 
     
 

 
     
     
     
$(function(){

$('#hamb-t').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('header').offset().top }, 1000);
  e.preventDefault();
});

});
     
     
     
     
     
  $(window).scroll(function() {
if ($(this).scrollTop() > (750)){  
    $('#hamb').fadeIn();

  }
  else{
    $('#hamb').fadeOut();

  }
      
      
if ($(this).scrollTop() > (800)){  
    $('#hamb-t').fadeIn();

  }
  else{
    $('#hamb-t').fadeOut();

  }
});   
     
     
     
           $('#hamb').click(function() {
            
              if ( click == 0 ) 
              {
             $('.hamburger--squeeze').addClass('is-active');
             $('#fade').fadeIn();
             $('#mbile-web').fadeIn();
             $('#hamb').addClass('close');
            $('body').css('overflow' , 'hidden');
            $('html').css('overflow-y' , 'hidden');
              click = 1;
                  
              }
              
              else { if ( click == 1 )  {
                  
              {
               
             $('.hamburger--squeeze').removeClass('is-active');
             $('#fade').fadeOut();
             $('#mbile-web').fadeOut();
             $('#mbile-web2').fadeOut();
             $('body').css('overflow' , 'auto');
             $('html').css('overflow-y' , 'auto');      
             $('#hamb').removeClass('close');
               click = 0;
              }    
                  
              }}


          });      
          
           $('#catalog').click(function() {
            
             $('.hamburger--squeeze').addClass('is-active');
             $('#fade').fadeIn();
             $('#mbile-web').fadeIn();
             $('#hamb').addClass('close');
             $('body').css('overflow' , 'hidden');
             $('html').css('overflow-y' , 'hidden');   
            click = 1;
          });      
     
             $('#hamb-mobile').click(function() {
            
              if ( click ==0 ) 
              {
             $('.hamburger--squeeze').addClass('is-active');
             $('#fade').fadeIn();
             $('#mbile-web').fadeIn();
             $('#hamb').addClass('close');
            $('body').css('overflow-y' , 'hidden');
            $('html').css('overflow-y' , 'hidden');
                  
              click = 1;
              }
              
              else { if ( click == 1 )  {
                  
              {
               
             $('.hamburger--squeeze').removeClass('is-active');
             $('#fade').fadeOut();
             $('#mbile-web').fadeOut();
            $('body').css('overflow-y' , 'auto');
            $('html').css('overflow-y' , 'auto');
             $('#hamb').removeClass('close');      
               click = 0;
              }    
                  
              }}

    


          });     
     
     
 
 
 
 
 });  


$(window).scroll(function scrollprogress () {
    
    
    
    
  var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
        scrollPercent = (s / (d-c)) * 100;
        var position = scrollPercent;
    
    if (click == 0) {$("#progressbar").attr('value', position);}

   

});








	$('#redactor_content').redactor();























