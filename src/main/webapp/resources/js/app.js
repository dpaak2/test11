var app =app ||{};
app.common=(function(){
	var init=x=>{
		app.session.init(x);
		app.main.init();
	};
	return{init:init};
})();



app.main=(()=>{
	var $navbar, $navbar2, $content, img, js,temp,footer, ctx;
	var init=()=>{
		ctx = $$('x');
		img = $$('i');
		js = $$('j');
		temp=js + '/template.js';
		bongki = js + '/bongki.js';
		onCreate();
		
	};
	
	var onCreate=()=>{
		setContentView();
	};

	var setContentView=()=>{
		$.getScript(temp,()=>{
			/*main navbar*/
			//style="min-width: 800px; mind-height:5px"
			$('body').append(compUI.div('container'));
			$('#container').append(compUI.div('navbar')).css('mim-width','800px');
			$('#navbar').append(main.navbar());
			$('#logoHome').click(e=>{
				alert('logo homeBTN');
			});
			$('#mainLogobox').after('<nav/>',{'id':'mainNabMenu'});
		    $('#mainHelp').click(e=>{
		    	alert('도움말');
		    	$('body').empty();
		    	hee.common.init(ctx);
		    });
		    $('#mainJoin').click(e=>{
		    	alert('회원가입');
		    	
		    });
		 
		    $('#mainLogin').click(e=>{
		    	alert('로그인');
		    	chobongki.common.init(ctx);
		    	chobongki.index.init();
		    });
		    /*	 compUI.btn('cho')
		         .attr({'data-toggle':'modal', 'data-target':"#myModal"})
		         
		         .appendTo('#mainLogin').click(()=>{
		            alert('dddd');
		            chobongki.common.init(ctx);
			    	chobongki.index.init();
			    	alert('로그인훙');
		         });	
		    	*/
		    	
		   
		    $('#mainAdmin').click(e=>{
		    	alert('관리자');
		    	jw.common.init(ctx);
		    });
			//mainSearch
		    $('#mainSearch').click(e=>{
		    	alert('검색');
		    
		    	
		    });
			
		    $('#navbar').after(compUI.div('content'));
		    $('#content').append(mainPG.lookup());
		    $('#content').append(mainPG.rooms());
		    $('#roomsSeeAll').append(compUI.btn('roomsSeeAllBtn','button'));
		    $('#roomsSeeAllBtn').css({'background-color':'transparent','border-color':'transparent'}).text('전체보기>').click(e=>{
		    	alert('전체보기');
		    });
		   //style="background-color: transparent;border-color: transparent;"
		    
		    
		    /*숙소*/

		   
		    
		    var roomarr=[{'a':'₩33,797',b:'Villa Amonteera, Luxury with Fa...',c:'아파트 · 침대3개',d:img+'/hostelpic1.png',e:'별점'},
		    	{a:'₩33,797',b:'Villa Amonteera, Luxury with Fa...',c:'아파트 · 침대3개',d:img+'/hostelpic1.png',e:'별점'},
		    	{a:'₩33,797',b:'Villa Amonteera, Luxury with Fa...',c:'아파트 · 침대3개',d:img+'/hostelpic1.png',e:'별점'}];
		    
		    var rommbanner='';
		    $.each(roomarr,(i,j)=>{
		    	//rooms
		    	rommbanner+='<div style="float:left;width: 300px;"><a style="text-decoration: none;cursor: pointer;">'
		    	+'  <img src="'+j.d+'" style="width: 300px;" alt="" />'
		    	+'  <div><span style="padding: 8px;font-size:13px; font-weight:600; color:#484848;">'+j.a+'</span>'
		    	+'<span style="padding: 8px;font-size:12px; font-weight:600; color:#484848;">'+j.b+'</span><br/><span style="padding: 8px;">'+j.c+'</span>'
		    	+'<br/><span style="padding: 8px;">'+j.e+'</span>'
		    	+'</div>'
		    	+'</a></div>';
		    });
		    $('#rooms').html(rommbanner);
		    
		    
		    
		    
		    
			/*인기있는 숙소 each*/
			var arr=['1','2','3',];
			var td;
			$.each(arr,(i,j)=>{
			td +='<td id="top3" style="width: 25%;"><div id="room"><img src="'+img+'/hostelpic'+j+'.png" alt="" style="width: 300px"/><span class="hy-span" style="font-size:13px">₩287,772</span><span class="hy-span" style="font-size: 12px">Penthouse, 4-5 rooms + 5 balconies</span>'
	            +'<div style="margin-left: 2.5%;">'
	               +'<span style="font-size:13px">아파트 · 침대 7개</span>'
	            +'</div>'
	            +'<div style="margin-left: 2.5%;">'
	                +'<span style="font-size:13px">후기 451개</span>'
	            +'</div>'
	            +'<div style="margin-left: 2.5%;">'
                +'<span style="font-size:13px">별점</span>'
                +'</div>';
			$('#hostelList').html(td);
			});

			/*jw-footer*/
			$('#content').after(main.footer());
	         $('<option/>',{'value':'ko'}).appendTo($('#language-selector')).text('한국어');
	         $('<option/>',{'value':'en'}).appendTo($('#language-selector')).text('English');
	         $('<option/>',{'value':'krw'}).appendTo($('#currency-selector')).text('KRW');
	         $('<option/>',{'value':'usd'}).appendTo($('#currency-selector')).text('USD');
	         
		});
			
		

		
   /*인기있는 호스텔*/
	var top3='<!-- top3 -->'
    +'<div id="top3" style="position: relative; width:90%">'
              +'<div style="margin-left: 16%;">'
                   +'<span style="width: 64%;">'
                   +'<h3 style="font-weight:bold; color=484848;">인기있는 숙소</h3>'
                   +'</span>'
                   +'<button class="hy-seeAllBtn" >전체보기<svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style="height: 10px; width: 10px; fill: currentcolor;"><path fill-rule="evenodd" d="M4.293 1.707A1 1 0 1 1 5.708.293l7.995 8a1 1 0 0 1 0 1.414l-7.995 8a1 1 0 1 1-1.415-1.414L11.583 9l-7.29-7.293z"></path></svg></button>'
             +'</div>'
              +'<table  style="width: 500px; margin: 0 16% 6% 16%">'
                   +'<tr id="hostelList">'

                   +'</tr>'
                +'</table>'
          +'</div>';
	

	};
	
	
	
		return{init:init};
	})();

var mainPG={lookup:()=>{return '<div id="lookup" style="width:100%;  height:200px; margin:0 5%">'
	 +'  <div id="around" style="width:70%; margin-left:10%;">'
	 +' <h3 style="font-weight: bold;">에어비앤비 둘러보기</h3>'
	 +'</div>'
	 +'<br/>'
	+'	 <div style="width:70%; height:150px; margin-left:10%;">'
	+'  <div id="box1" style="float:left; width:22%; height:50%; border: 1px solid #EAEAEA; box-shadow:3px 3px 8px #EAEAEA; display: inline-block;">'
	+'     <div id="Imagebox1" style="float:left; width:40%; height:100%; background-image:url(https://a0.muscache.com/ac/pictures/8b7519ec-2c82-4c09-8233-fd4d2715bbf9.jpg);'
	+'     background-size: cover;">'
	+'     </div>'
	+'     <div id="textbox1" style="float:left; width:30%; height:100%; margin-top: 10%; margin-left:5%;">'
	+'        <span style="font-size:17px;">'
	+'           숙소'
	+'        </span>'
	+'     </div>'
	+'  </div>'
	+'  <div id="box2" style="margin-left:20px; float:left; width:22%; height:50%;' 
	+'     border: 1px solid #EAEAEA; box-shadow:3px 3px 8px #EAEAEA; display: inline-block;">'
	+'     <div id="Imagebox2" style="float:left; width:40%; height:100%;'
	+'     background-image:url(https://a0.muscache.com/ac/pictures/d3811ff7-cc34-471b-8aee-b0d613db0052.jpg);'
	+'     background-size: cover;">'
	+'     </div>'
	+'     <div id="textbox2" style="float:left; width:30%; height:100%; margin-top: 10%; margin-left:5%;">'
	+'        <span style="font-size:17px; width: 100%">'
	+'        트립'
	+'        </span>'
	+'     </div>'
	+'  </div>'
	+'  <div id="box3" style="margin-left:20px; float:left; width:22%; height:50%;' 
	+'     border: 1px solid #EAEAEA; box-shadow:3px 3px 8px #EAEAEA; display: inline-block;;">'
	+'     <div id="Imagebox3" style="float:left; width:40%; height:100%;'
	+'     background-image:url(https://a0.muscache.com/ac/pictures/da2d8e97-90b7-409f-94ac-5ab0327c289b.jpg);'
	+'     background-size: cover;">'
	+'     </div>'
	+'     <div id="textbox3" style="float:left; width:30%; height:100%; margin-top: 10%; margin-left:5%;">'
	+'        <span style="font-size:17px;">'
	+'           음식'
	+'        </span>'
	+'     </div>'
	+'  </div>'
	+' </div>'
	+'</div>';},
	rooms :()=>{return '<div style="width: 90%; height:400px; margin: 1% 15%">'
	+'	<div  style="width: 90%;position: relative;">'
	+'<span><h3 style="font-weight: 700;">숙소</h3></span>'
	+'<span id="roomsSeeAll" style="position: absolute;right: 10%; top: 0;">'
	//+'<button style="background-color: transparent;border-color: transparent;">전체보기></button>'
	+'</span></div>'
	+'<div id="rooms" >'
	+'</div>'
    +'  </div>';
	}

};



app.session=
   {
      init : (x)=>{
            sessionStorage.setItem('x',x);
            sessionStorage.setItem('j',x+'/resources/js');
            sessionStorage.setItem('c',x+'/resources/css');
            sessionStorage.setItem('i',x+'/resources/img');
              },
      getPath : (x)=>{
            return sessionStorage.getItem(x);
        }
   };

var $$= function(x){return app.session.getPath(x);};


