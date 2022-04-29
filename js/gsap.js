var section1 = {
    init:function(){
        this.scroll_detector();
        this.intro_quote();
        this.intro_fadeup();
    },

    scroll_detector:function(){
        
        $("").on('mousewheel',function(e){
            var wheel = e.originalEvent.wheelDelta;
            
            //스크롤값을 가져온다.
            if(wheel>0){
                //스크롤 올릴때
            } else {
                //스크롤 내릴때
            }
        });
    },

    /* INTRO TYPING */
	intro_quote:function() {
		let el = document.getElementsByClassName('quote')[0];
		let items = el.dataset.items.split(', ');

		TweenMax.to(el.nextElementSibling, 0.6, {
			opacity: 0, 
			repeat: -1, 
			ease: Linear.easeNone
		});

		let tl = new TimelineMax({repeat: 0});	// 반복 설정
		let tmp = { x: 0 };

		items.forEach((word, idx) => {
			let chars = word.split('');

			chars.forEach(char => {    
                tl.to(tmp, 0.1, { x: '+='+1, onComplete: () => {
                        $(document).ready(function() {
                             el.textContent += char;
                        });
                    } 
                });
                
                $(".section1").on('mousewheel',function(e){
                    var scTop = $(window).scrollTop();
                    var wheel = e.originalEvent.wheelDelta;

                    if(wheel < 0){
                        el.textContent = word;
                        tl.pause();  

                    } else if (scTop == $(this).scrollTop()) {
                        el.textContent = '';
                        tl.restart();

                    }
                }); 
				
	        });

            tl.to(tmp, 1, {x: '+='+1});
                chars.forEach(char => {
                    tl.to(tmp, 0.05, {  x: '+='+1, onComplete: () => {
                        //el.textContent = el.textContent.slice(0, -1);   --> 타이핑 종료되면 전부 지우기
                    } 
                    });
                })
            });
            
	},

	/* SCROLL RESPONSIVE */
	intro_fadeup:function() {


	},


}

