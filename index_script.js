//var actual_JSON=[];
window.onscroll = function() {sliding()};
var slide_img_num = [4, 7, 7, 7, 2, 10];
var current_category = 0;
var current_img = 0;
var current_img_num = 0;
var img_poster = ["game_0.png", "game_1.png", "game_2.png", "game_3.jpg", "game_4.png", "game_5.png", "game_6.jpg"];
var slideShowPath = "images/slideShow/game/";
init();

/*
   function loadJSON(callback) {   

       var xobj = new XMLHttpRequest();
	           xobj.overrideMimeType("application/json");
			       xobj.open('GET', 'img_json.js', true); // Replace 'my_data' with the path to your file
				       xobj.onreadystatechange = function () {
					             if (xobj.readyState == 4 && xobj.status == "200") {
								             // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
											             callback(xobj.responseText);
														           }
																       };
																	       xobj.send(null);  
																		    }

																			function init() {
																				
																			 loadJSON(function(response) {
																			   // Parse JSON string into object
																			       actual_JSON = JSON.parse(response);
																				    });
																					}
																					*/

function init(){
	current_category = 1;
	current_img = 0;
	current_img_num = slide_img_num[current_category];
}

function sliding() {
	    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
			//document.getElementById("img_slide").src = actual_JSON[0].poster[0].image_00;
					
			document.getElementById("img_slide").style.right = "0%";
			document.getElementById("img_slide").style.opacity = 1;
	    }
}

function slideDown_show(obj_name){
	document.getElementById(obj_name).style.top = "15%";
	document.getElementById(obj_name).style.opacity = 1;
}

function slideUp_hide(obj_name){
	document.getElementById(obj_name).style.top = "8%";
	document.getElementById(obj_name).style.opacity = 0;
}

function switchImg(right){
	if(right == 1){
		++current_img;
		current_img = current_img % current_img_num;
	}else{
		--current_img;
		if(current_img < 0){
			current_img += slide_img_num[current_category];
		}
	}
	document.getElementById("img_slide").src = slideShowPath.concat(img_poster[current_img]);
}
