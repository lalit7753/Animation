// triangle animate
  $(document).ready(function(){
    $(".animate").click(function(){
      $(this)
       .animate({left: '300px', top: '0px'}, 1000)
       .animate({left: '150px', top: '200px'}, 1000)
       .animate({left: '0px', top: '0px'}, 1000);
  })
    })

  //  square animate
  $(document).ready(function(){
    $(".animate1").click(function(){
      $(this)
       .animate({left: '300px', top: '0px'}, 600)
       .animate({left: '300px', top: '150px'}, 600)
       .animate({left: '0px',   top: '150px'}, 600)
       .animate({left: '0px',   top: '0px'},   600);
    })
  })
//  rectangle animate
$(document).ready(function(){
  $(".animate2").click(function(){
    $(this)
     .animate({left: '500px', top: '0px'}, 600)
     .animate({left: '500px', top: '150px'}, 600)
     .animate({left: '0px',   top: '150px'}, 600)
     .animate({left: '0px',   top: '0px'},   600);

  })
})

$(document).ready(function(){
  $(".animate3").click(function(){
    $(this)
     .animate({left: '135px', top: '20px'},600)
     .animate({left: '240px', top: '90px'},600)
     .animate({left: '200px',top: '210px'},600)
     .animate({left: '70px',top: '210px'},600)
     .animate({left: '30px',top: '90px'},600)

  })
})