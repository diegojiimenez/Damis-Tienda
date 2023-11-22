/*For search bar*/
$(document).on('click','.search',function(){
    $('.search-bar').addClass('search-bar-active')
});

$(document).on('click','.search-cancel',function(){
    $('.search-bar').removeClass('search-bar-active')
});

/*Log-in-sign-up-form-------------------------------*/
$(document).on('click','.user, .already-account',function(){
    $('.form').addClass('login-active').removeClass('sign-up-active')
});
$(document).on('click','.sign-up-btn',function(){
    $('.form').addClass('sign-up-active').removeClass('login-active')
});


$(document).on('click','.form-cancel',function(){
    $('.form').removeClass('login-active').removeClass('sign-up-active')
});

/*Full-slider-script*/
$(document).ready(function() {
    $('#adaptive').lightSlider({
        adaptiveHeight:true,
        auto:true,
        item:1,
        slideMargin:0,
        loop:true
    });
});
/*Feature-slider-----------*/
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });
  /*For-Fix-menu-when-scroll*/
  $(window).scroll(function(){
    if($(document).scrollTop()> 50){
        $('.navigation').addClass('fix-nav');
    }
    else{
        $('.navigation').removeClass('fix-nav');
    }
  });
  
  /*Carrito*/
  var contadorCarrito = 0;

function agregarAlCarrito() {
    // Incrementa el contador del carrito
    contadorCarrito++;

    // Muestra el contador actualizado en el elemento del carrito
    document.getElementById("carrito").innerText = contadorCarrito;

    // Puedes agregar lógica adicional aquí, como almacenar los productos en una lista, etc.
    event.preventDefault();
    

// Almacena el contador en localStorage
localStorage.setItem('contadorCarrito', contadorCarrito);
}