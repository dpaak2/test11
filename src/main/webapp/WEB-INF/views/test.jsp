<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Document</title>
	<link rel="stylesheet" href="${path.css}/main.css" />
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
   <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<style type="text/css">
	.hy-nav-menuBtn{
	background-color: transparent; border-color: transparent; color:#484848; font-size: 11px;padding:5px;
	}
	.hy-nav-menuBtn:hover { 
        line-height: 1.43;
        color: #484848;
     }

     .navbar{
	  height:41px;
	  position:absolute;
	  top:20px;         
	  left: 80%;
	}
	.navbar-ul {
	  background: white;
	  margin: 0; padding: 0;
	  list-style: none;
	  position: fixed;
	  width: 50%;
	}
	.navbar-ul>li {
	  display: inline-block;
	}
	.navbar-ul>li>a {
	  display: block;
	  text-decoration: none;
	  font-size:12px;
	  padding: 0 10px;
	  color: #484848 ;
	}
	.navbar-ul>li>a:hover {
	  border-bottom:1.5px solid #484848;
	}
	 
	 
	 
	  
	.inner-addon { 
    position: relative; 
  	margin-top:40px;
    width: 80%;
    height: 20px;
}

	/* style icon */
	.inner-addon .glyphicon {
	  position: absolute;
	  padding: 10px;
	 pointer-events: none;
	}
	
	/* align icon */
	.left-addon .glyphicon  { left:  0px;}
	.right-addon .glyphicon { right: 0px;}
	
	/* add padding  */
	.left-addon input  { padding-left:  30px; }
	.right-addon input { padding-right: 30px; }
	
	
    .hy-air-mainTxt{
    font-size: 40px;font-weight: bold;color:#FF5A5F;
    }	
    .hy-air-mainSubTxt{font-size: 40px;color:#484848;}
    .hy-air-mainSubTxta {text-decoration: none;font-size: 40px;color:#484848; }
    
</style>
</head>
<body>


<div id="mainwrapper" style="min-width: 800px;">
	<div id="container"  style="min-width: 800px;">
		<div id="mainNavbar">
				<div style="position: relative;">
				  <div style="float:left" class="main-nav-logobox">
                     <div class="main-nav-logobox2">
                      <div  class="main-nav-logobox3" >
                      <a id="goHome" href=""  style="z-index: 900; text-decoration: none">
                        <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style="display: block;fill: #FF5A5F;height: 1em;width: 1em;">
                <path d="M499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"></path>
                </svg>
                      </a>
              
                 </div>
              </div>
            </div>
					<nav class="hy-navbar">
						<ul class="hy-navbar-ul">
							<li><a href="">도움말</a></li>
							<li><a href="">회원가입</a></li>
							<li><a href="">로그인</a></li>
							<li><a href="">관리자</a></li>
						</ul>
					</nav>
	           </div>
				<!-- airbnb text -->
				<div style="padding: 15%;">
					<div><span class="hy-air-mainTxt">에어비앤비</span>
					<div> <span class="hy-air-mainSubTxt">독특한
						<a href="" class="hy-air-mainSubTxta">숙소</a>를 예약하고,
						현지인처럼  <br /> 살아보세요.</span>
				</div>
				<!--search box  -->
				<div class="inner-addon left-addon" style="position: relative;">
				    <i class="glyphicon glyphicon-search"></i>
				    <input type="text" class="form-control" aria-describedby="sizing-addon1" />
				   <button type="submit" class="hy-air-mainSearchBtn" style="position: absolute;right:0; top: 0px; background-color:#FF5A5F;text-align: center; text-decoration: none;cursor: pointer; border: none; color: white; padding:7px;  border-radius: 3px;">검색</button>
				</div>
					</div>
				</div>
		</div>
		
		
		
		<div id="content">
		<!-- rooms div -->
		<div style="width: 75%;margin: 0 15%;position: relative;"><span><h3 style="font-weight: 700;">숙소</h3></span><span style="position: absolute;right: 3%;top: 0;"><button style="background-color: transparent;border-color: transparent;">전체보기></button></span></div>
			<div id="" style="width: 90%; margin: 0 15%">
				<div style="float: left;width: 300px; ">
				<img src="${path.img}/hostelpic1.png" style="width: 300px;" alt="" />
				<div><span style="padding: 8px;">room1price</span><br /><span style="padding: 8px;">room1 name</span><br /><span style="padding: 8px;">starts</span></div>
				</div>
				<div style="float: left;width: 300px;"><img src="${path.img}/hostelpic1.png" style="width: 300px;" alt="" /></div>
				<div style="float: left;width: 300px;"><img src="${path.img}/hostelpic1.png" style="width: 300px;" alt="" /></div>
			</div>
		</div>
		<div id="footer"></div>
	</div>
</div>
	<a href=""style="text-decoration: none;cursor: pointer;"></a>
	</div>
</body>
<script>


</script>
</html>