
// Вариант-1

// var hamburger = document.querySelector(".top-hamburger");
// hamburger.addEventListener("click", function(){
//     if(hamburger.classList.contains("top-hamburger_active")){     
//     hamburger.classList.remove("top-hamburger_active");
//     } else {  
//     hamburger.classList.add("top-hamburger_active");    
//     }
// });


// Вариант-2

// var hamburger = document.querySelector(".top-hamburger");

// hamburger.onclick = function () {
//     hamburger.classList.toggle("top-hamburger_active");

// }


// Вариант-3

var hamburger = document.querySelector(".top-hamburger");
var hamb = document.querySelector(".top-menu_hamburger");


function addActive (){
    hamburger.classList.toggle("top-hamburger_active");
    hamb.classList.toggle("top-menu_hamburger_active");
};

hamburger.addEventListener("click", addActive);


// Ingredients
$(document).ready(function() {
	$('.burgers-ingredients').on('click',function() {
		$('.burgers-dropdown').toggleClass('nonactive');
	});
});


// Ingredients
   var ingred = document.querySelector(".burgers-ingredients");
   var drop = document.querySelector(".burgers-dropdown");

   ingred.addEventListener("click", function(){
        ingred.toggleClass(nonactive);
    }); 



// Accordion

                                     
$(function(){
    //обрабатываем клик по блоку с классом trigger
    $('.menu__link').on('click', function(e){
        e.preventDefault();
    //получаем нужные нам данные
            var $this = $(this),

            sectionwidth = $this.closest('.section').width(),
             

            //получаем всё блоки menu
            container = $this.closest('.menu__list'),
            //получаем li по которому кликнули
            item = $this.closest('.menu__item'),
            //получаем все другие li

            items = container.find('.menu__item'),

            menulinkwidth = items.find('.menu__link').width(),

            //выбираем из li активный
            activeItem = items.filter('.menu__item_active'),
            //выбираем из li по которому кликнули блок контен
            content = item.find('.acc__text'),
            //выбираем у li с классом active блок контент
            activeContent = activeItem.find('.acc__text');
    

            //если нет li с классом active по которому кликнули
            if (!item.hasClass('menu__item_active')) {
                //убираем класс active
                items.removeClass('menu__item_active');
                //добавляем active кликнутому
                item.addClass('menu__item_active');
                //у того у кого был active задаём ширину 0
                activeContent.animate({
                       'width' : '0px'
                });

                if (sectionwidth > 768 ){
                    //кликнутому 530        
                    content.animate({
                        'width' : 530
                    })
                } else{
                    content.animate({
                        'width' : sectionwidth - (menulinkwidth*items.length)
                    })

                }
            //иначе
            } else {
                item.removeClass('menu__item_active');
                content.animate({
                       'width' : '0px'
                });
    
            }
    });
    
    // клик вне аккордеона
    $(document).on('click', function (e) {
       var $this = $(e.target);
       if (!$this.closest('.menu__list').length) {
             $('.acc__text').animate({
                   'width' : '0px'
             });
             $('.menu__item').removeClass('menu__item_active');
       }
    });
});
                 // Team accordion variant-1  jQuery
//-----------------------------------------------------------------
   

    // $(document).ready(() => {

       
    //     $(".team-list__item").on('click', e =>{
    //         e.preventDefault()

    //         let elem = $(e.currentTarget)

    //         elem.toggleClass('team-list__item_active').siblings().removeClass('team-list__item_active');

    // })  })


                // Team accordion variant-2    jQuery
//-----------------------------------------------------------------

    // $(function(){

    //     $('.team__link').on('click', e => {
    //         e.preventDefault();

    //         const $this = $(e.currentTarget); // a
    //         const container = $this.closest('.team-list'); // ul
    //         const item = $this.closest('.team-list__item'); // li
    //         const content = item.find('.team-item-block'); // div (img + text)

    //         const otherContent = $('.team-item-block', container); // ul div (img+text)
            
    //         item.toggleClass('team-list__item_active');
            

    //     })    
    // });

                     // Team accordion variant-3
//-----------------------------------------------------------------

$(function(){
    
    $('.team__link').on('click', e => {
        e.preventDefault();

        const $this = $(e.currentTarget); // a

        const container = $this.closest('.team-list'); // ul

        const item = $this.closest('.team-list__item'); // li
        const items = $('.team-list__item' , container);

        const content = item.find('.team-item-wrap'); // div (img + text)

        const otherContent = $('.team-item-wrap', container); // 

        const textBlock = item.find('.team-item-block'); // div text

        const regHeight = textBlock.outerHeight(); // height of div text

        if(!item.hasClass('team-list__item_active')){
            items.removeClass('team-list__item_active');
            item.toggleClass('team-list__item_active');
            
            otherContent.css({
                'height' : 0
            })
            
            content.css({
                'height' : regHeight 
                
            })

        } else {

            item.removeClass('team-list__item_active');
            content.css({
                'height' : 0
            })
        }

    })    
})

// burgers slider

$(document).ready(function(){
    $('.slider').slick({
        

        responsive: [
            {
                breakpoint: 481,
                settings: {
                    arrows: false
                }
            }
        ],
        prevArrow: '<a href="#" class="reviews__arrows reviews__arrows-prev"><svg class="arrow-icon"> <use xlink:href="../img/sprite/sprite.svg#arrow-scroll" /></svg></a>',
        nextArrow: '<a href="#" class="reviews__arrows reviews__arrows-next"><svg class="arrow-icon"> <use xlink:href="../img/sprite/sprite.svg#arrow-scroll" /></svg></a>'
    });
});


//one-page scroll

$(document).ready(function(){

    const display = $('.maincontent');
    const sections = $('.sections');

    let inScroll = false;

    const switchMenuActiveClass = sectionEq => {
        $('.circle__item').eq(sectionEq).addClass('active')
        .siblings().removeClass('active');
    }  

    const performTransition = sectionEq =>{
        

        if (inScroll) return
        inScroll = true
        
        const position = (sectionEq * -100 ) + '%';
        
        display.css({
            'transform' : 'translate(0, ${position})',
            '-webkit-transform' : 'translate(0, ${position})',
        })

        sections.eq(sectionEq).addClass('active')
            .siblings().removeClass('active');

            setTimeout(() => {
                inScroll = false;
                switchMenuActiveClass(sectionEq);
            }, 1300); 
    }    

    $('.wrapper').on('wheel', e => {
        const deltaY = e.originalEvent.deltaY;
        const activeSection = sections.filter('.active');
        const nextSection = activeSection.next();
        const prevSection = activeSection.prev();
        
        if (deltaY > 0 && nextSection.length) {// скроллим вниз
        performTransition(nextSection.index())
        }
        
        if (deltaY < 0 && prevSection.length) { //скроллим вверх
            performTransition(prevSection.index())
        }
    });
});    

$(document).on('keydown', e => {
    console.log(keyCode);
});


//  yandex map 

    $(document).ready(function(){
        ymaps.ready(init);
        var myMap,
            myPlacemark;
            
            function init(){     
                myMap = new ymaps.Map("map", {
                    center: [50.43264941, 30.51577867],
                    zoom: 15
                });

                myMap.behaviors.disable('scrollZoom'); 
                
                myPlacemark = new ymaps.Placemark([50.43264941, 30.51577867], { 
                    hintContent: 'Бургерная', 
                    balloonContent: 'The Burgers',
                    //  Свойства.
                    properties: {
                        // Контент метки.
                        iconContent: 'Бургерная',
                        hintContent: 'Wellcome to our burgers'
                    }
                    }, {
                    // Опции.
                    // Иконка метки будет растягиваться под размер ее содержимого.
                    preset: '',
                    // Метку можно перемещать.
                    draggable: true
                });
    
                myMap.geoObjects.add(myPlacemark); 

            }

    });      
     


 