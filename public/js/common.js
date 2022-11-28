// header mobile responsive start 
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
// header mobile responsive end 


$(document).ready(function(){

  // header select script start 

  function custom_template(obj){
    var data = $(obj.element).data();
    var text = $(obj.element).text();
    if(data && data['img_src']){
        img_src = data['img_src'];
        template = $("<div><img src=\"" + img_src + "\" style=\"width: 30px;height: 30px;\"/><p style=\"margin-bottom: 0px;\">" + text + "</p></div>");
        return template;
    }
  }
  var options = {
  'templateSelection': custom_template,
  'templateResult': custom_template,
  }
  $('#id_select2_example').select2(options);
  $('.select2-container--default .select2-selection--single').css({'height': 'auto'});


  function custom_template(obj){
    var data = $(obj.element).data();
    var text = $(obj.element).text();
    if(data && data['img_src']){
        img_src = data['img_src'];
        template = $("<div><img src=\"" + img_src + "\" style=\"width: 30px;height: 30px;\"/><p style=\"margin-bottom: 0px;\">" + text + "</p></div>");
        return template;
    }
  }
  var options = {
  'templateSelection': custom_template,
  'templateResult': custom_template,
  }
  $('#id_select2_examples').select2(options);
  $('.select2-container--default .select2-selection--single').css({'height': 'auto'});

  // header select script start 


  $('#sec2-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        280:{
            items:1
        },
        500:{
            items:2
        },
        768:{
          items:2
        },
        992:{
          items:3
        },
        1200:{
            items:4
        },
        1900:{
          items:5
        }
    }
})


$('#sec5-carousel').owlCarousel({     
  nav: false,
  loop:false,
  dots: true,
  pagination: false,
  margin: 15,
  autoHeight: false,
  stagePadding: 50,
  responsive:{
    0:{
      items: 1,
      stagePadding: 0,
      margin: 30,
    },
    500:{
      items: 2,
      stagePadding: 30,
    },
    768:{
      items: 3,
      stagePadding: 25,
    },
    1000:{
      items: 3,
    }
  }
})
// pagination scritp start 

var items = $(".list-wrapper .list-item");
    var numItems = items.length;
    var perPage = 5;

    items.slice(perPage).hide();

    $('#pagination-container').pagination({
        items: numItems,
        itemsOnPage: perPage,
        prevText: "Pre",
        nextText: "Next",
        onPageClick: function (pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide().slice(showFrom, showTo).show();
        }
    });

// pagination scritp end 

});




//body hide and show
$(document).on("click",function(e){

varsenderElement=e.target;
  
if(!$(e.target).is("#loginbutton")) {
  $(".login-section").css('display','none');
  }
  if(!$(e.target).is(".guest-input")) {
    $(".members").css('display','none');
    }
});

//login page hide and show
$("#loginbutton").click(function() {  
  $(".login-section").toggle(); 
});
//Guestroomstoggle
$(".guestrooms").click(function() {
  $(".members").toggle();
  $(".guestrooms").addClass('arrowcheck'); 
});

$('.counter-minus').click(function(){
  quantityField = $(this).next();
  if (quantityField.val() != 0) {
     quantityField.val(parseInt(quantityField.val(), 10) - 1);
  }
});

$('.counter-plus').click(function(){
  quantityField = $(this).prev();
  quantityField.val(parseInt(quantityField.val(), 10) + 1);
});

$('#reset').click(function(){
  $('#guestrooms').val("1 Adult, 1 Room ")
  $('.adults').val(1)
  $('.Children').val(1)
  $('.Rooms').val(0)

  adults[0].dataset.value = $('.adults').val();
  Children[0].dataset.value = $('.Children').val();
  Rooms[0].dataset.value = $('.Rooms').val();
})
//end guestroom





$(function(){

    async function getLocation(){
    let response = await fetch('http://www.geoplugin.net/json.gp');
    let data = await response.json()
    return data;
  }

    console.log('get Location =======> ',getLocation().then(data => {
    console.log('country code =======> ',data.geoplugin_countryCode)
  }))
    
   async function getUsers(locale,language){
    let response = await fetch(`https://www.skyscanner.net/g/autosuggest-search/api/v1/search-hotel/${locale}/${language}/?rf=map&vrows=10`);
    let data = await response.json()
    return data;
  }

   getUsers('IN','en-GB').then(data => showList(data))

   let element = '';

   let svg_image = 'M19 6h-4a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v15a1 1 0 0 0 2 0V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2 2.15 2.15 0 0 0-2 2v13a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V21a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V8a2.15 2.15 0 0 0-2-2zm-5 11a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm0-3a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm0-3a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4 6a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm0-3a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm0-3a1 1 0 1 1 1-1 1 1 0 0 1-1 1zM9 7a1 1 0 1 1-1-1 1 1 0 0 1 1 1zm0 3a1 1 0 1 1-1-1 1 1 0 0 1 1 1zm0 6a1 1 0 1 1-1-1 1 1 0 0 1 1 1zm0-3a1 1 0 1 1-1-1 1 1 0 0 1 1 1zm0 6a1 1 0 1 1-1-1 1 1 0 0 1 1 1z'
   
   const showList = (response) => {
    response.map(function(item){
    element = element + '<li><p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="PopularDestination_PopularDestination__icon__Y2IyM BpkIcon_bpk-icon--rtl-support__NjAzZ" style="width: 1.5rem; height: 1.5rem;"><path d="'+svg_image+'"></path></svg>'+item.entity_name+'</p>'+item.hierarchy.replaceAll('|',',')+'</li>';
    })
      console.log('element : ',element)
      $('#list_show').append(element);
   }


  $('#search_field').click(function(){
    $('.auto_suggest').show();
    $('.auto_suggest').addClass('open')
  })

  $('body').click(function(e){
    console.log('event :',e.target.id)
    if(e.target.id != 'search_field')
  {
    $('.auto_suggest').hasClass('open') ? $('.auto_suggest').hide():'';
  }
  else if(e.target.id == 'search_field')
  {
    $('#guest').hide();
    console.log('guest hide!!!');
  }
  else{
    console.log('else')
  }
  });

 })

