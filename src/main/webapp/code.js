//Kari Korpinen web-selainohjelmointiharjoitustyö 13.1.2013
$(document).ready(function(){
   $("header nav a").each(function(index) {
      $(this).attr("id", index);
      $(this).click(function(eventInformation) {
         displayArticle(index);
         eventInformation.preventDefault();
      });
   });
   displayArticle(0);//näytetään pääsivu ekana
   }
);

function displayArticle(index) 
{
   $("section").addClass("hidden");
   if(index===0)
   { //etusivu
     //muuttuja varustettuna kirjain B:llä sisältää sivun oikeanpuoleista dataa
     //template varustettuna kirjain B:llä,on sivun oikeanpuoleinen osa  
      var html0 = Mustache.render($("#template0").html(), data0A);
      $("#view").html(html0);   
      $("section:eq(" + (index+1) + ")").removeClass("hidden");
     
      var html0B = Mustache.render($("#template0B").html(), data0B);
      $("#view2").html(html0B);   
      $("section:eq(" + (index+2) + ")").removeClass("hidden");
   }
   if(index===1)
   {  //opiskelu
      var html1 = Mustache.render($("#template1").html(), data1A);
      $("#view").html(html1);   
      $("section:eq(" + index + ")").removeClass("hidden");
     
      var html1B = Mustache.render($("#template1B").html(), data1B);
      $("#view2").html(html1B);   
      $("section:eq(" + (index+1) + ")").removeClass("hidden");
   }
   if(index===2)
   {  //tutkimus
      var html2 = Mustache.render($("#template2").html(), data2);
      $("#view").html(html2);
      $("section:eq(" + (index-1) + ")").removeClass("hidden");
   }
}
