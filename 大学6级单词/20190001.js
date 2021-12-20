  <!--
  //设计“word对象”的数据结构，并用对象的方法实现初步的代码组织
  //en6为全局变量，由大学英语6级词汇形成字符串，组成数组
   var myWord = {
	  id: 0 ,
	  en: "" ,
	  pn: "" ,
	  cn: "" ,
	  
   };//end of myWord Object

//建立一个模型对象，模拟和记录APP的运行状态
  var Model = {
   
  }; //End of  Model 


  
   window.onload = function(){
	var readDom = my$("span#read");
	var enDom = my$("input#en");
	var pnDom = my$("p#pn");
	var cnDom = my$("p#cn");
    var textDom = my$("p#textInfo");
	var okDom = my$("input#ok");
	var rightDom = my$("p#right");
	var a = document.querySelector("a");
	var closeDom = my$("input#close");
	popwindow.style.display = "none";
//动态控制UI，包括：针对不同屏幕的字体大小设置，主区域的高度设置
    var fontSize =  Math.floor(window.innerWidth/100) ;
	
	switch (fontSize){
     case 17 :	 case 16 :	 case 15 : 
	 case 14 :	 case 13 : 	 case 12 :
	 case 11 : fontSize =  fontSize*1.5 ; break;
     case 10 : 
     case 9 :  fontSize =  fontSize*1.8 ; break;
     case 8 :  
     case 7 :  fontSize =  fontSize*2 ; break;
     case 6 :  
     case 5 :  fontSize =  fontSize*2.5 ; break;
     case 4 : 
	 case 3 : fontSize =  fontSize*3 ; break;
	 default: fontSize =  fontSize*3; 
	}
	document.body.style.fontSize = fontSize + "px" ;
   
   var sectionHeight =  window.innerHeight - 150 - 50 - 50 ;
   document.querySelector("section").style.height = sectionHeight + "px";
 
 //为所有自定义的按钮设定特殊风格
   var Buttons = my$("nav span");
   for (var i=0; i<Buttons.length ; i++) {
	   Buttons[i].onclick = function(){
	     for (var j=0; j<Buttons.length ; j++){
			 Buttons[j].className = "" ;
	     }
		this.className = "onclickStyle" ;
	   };//end of  Buttons[i].onclick
   }


   read.onclick = function(){
	       popwindow.style.display = "none";
	       rightDom.textContent = "";
	       okDom.value = "Next";
		   var s = en6[myWord.id];
		   var word = s.split("/");
		   enDom.value = word[0];
		   pnDom.textContent = word[1];
		   cnDom.textContent = word[2];
		   myWord.id++;
		   textDom.textContent = "继续点击Next换下一个单词哦,点击别的选项也不会重头开始哦";
		   okDom.onclick = function(){
				var s = en6[myWord.id];
				var word = s.split("/");
				enDom.value = word[0];
				pnDom.textContent = word[1];
				cnDom.textContent = word[2];
				myWord.id++;
		   }
   }
  
  write.onclick = function(){
	  popwindow.style.display = "none";
	  rightDom.textContent = "";
	  enDom.value = "";
	  okDom.value = "确定";
	  textDom.textContent = "根据音标和汉译在文本框输入单词后点击确定判断正误！";
	  var s = en6[myWord.id];
	  var word = s.split("/");
	  pnDom.textContent = word[1];
	  cnDom.textContent = word[2];
	  okDom.onclick = function(){
		  var s = en6[myWord.id];
	      var word = s.split("/");
	      pnDom.textContent = word[1];
	      cnDom.textContent = word[2];
		  var input = enDom.value;
		  if(input==word[0]){
			  rightDom.textContent = "回答正确";
		  }
		  else{
			  rightDom.textContent = "回答错误!  您的答案：" + input + "   .正确答案：" + word[0];
		  }
		  myWord.id++;
		  var s = en6[myWord.id];
		  var word = s.split("/");
	      pnDom.textContent = word[1];
	      cnDom.textContent = word[2];
		  enDom.value = "";
	  }
  }

  select.onclick = function(){
	  popwindow.style.display = "none";
	  rightDom.textContent = "";
	  okDom.value = "准备好啦！";
	  textDom.textContent = "根据单词选择汉译,点击确定判断正误！";
	  var s = en6[myWord.id];
	  var word = s.split("/");
	   pnDom.textContent = "";
	   cnDom.textContent = "";
	   var ADom = document.createElement("ADom");
	   var BDom = document.createElement("BDom");
	   var CDom = document.createElement("CDom");
	   
	   ADom.className = "button";
	   BDom.className = "button";
	   CDom.className = "button";
	 
	   ADom.onmouseover = function(){
				this.className = this.className + " " + "onmouseover";	
	   };
	   ADom.onmouseout = function(){
				this.className = "button";
	   };
	   BDom.onmouseover = function(){
				this.className = this.className + " " + "onmouseover";	
	   };
	   BDom.onmouseout = function(){
				this.className = "button";
	   };
	   CDom.onmouseover = function(){
				this.className = this.className + " " + "onmouseover";	
	   };
	   CDom.onmouseout = function(){
				this.className = "button";
	   };
	   
	   okDom.onclick = function(){
		 okDom.value = "下一个";
		 popwindow.style.display = "none";
		 rightDom.textContent = "";
	     var s = en6[myWord.id];
	     var word = s.split("/");
	     enDom.value = word[0];
		 a.textContent = en6[myWord.id];;
			ADom.textContent = "A." + word[2];
			var random = Math.floor(Math.random()*5498);
			var s = en6[random];
			var word = s.split("/");
			BDom.textContent = "B." + word[2];
			random++;
			var s = en6[random];
			var word = s.split("/");
			CDom.textContent = "C." + word[2];
	
			ADom.onclick = function(){
				popwindow.style.display = "none";
				rightDom.textContent = "回答正确！";
			}
			BDom.onclick = function(){
				rightDom.textContent = "回答错误！请看左边详解！";
				popwindow.style.display = "block";
			}
			CDom.onclick = function(){
				rightDom.textContent = "回答错误！请看左边详解！";
				popwindow.style.display = "block";
			}
			
			myWord.id++;
	  }
	   closeDom.onclick = function(){
			popwindow.style.display = "none";
	   }
	   cnDom.appendChild(ADom);
	   cnDom.appendChild(BDom);
	   cnDom.appendChild(CDom);
	   cnDom.appendChild(DDom);

  }

   search.onclick = function(){
	   textDom.textContent = "在文本框中输入您要查询的单词，点击查询按钮进行查询";
	   okDom.value = "查询";
	   enDom.value = "";
	   pnDom.textContent = "";
	   cnDom.textContent = "";
	   okDom.onclick = function(){
		   var input = enDom.value;
		   var flag = 0;
		   for (myWord.id=0;myWord.id<5498;myWord.id++)
	       {
		      var s = en6[myWord.id];
	          var word = s.split("/");
		     if (input==word[0])
		     {
			     pnDom.textContent = word[1];
			     cnDom.textContent = word[2];
			     rightDom.textContent = "查询成功";
				 var flag = 1;
		     }
			}
			if(flag==0){
				pnDom.textContent = "";
			    cnDom.textContent = "";
			    rightDom.textContent = "查无此单词！";
			}
			myWord.id=0;
	     }
	   }
   //每次打开页面，则随机出现一张图片
   var myImages = [] ;//图像对象 组成的 数组
   for (var i=1; i<8; i++ ){
	   var img = new Image();
	   img.src = "大学6级单词/images/" + i + ".jpg" ;
	   //img.style.opacity = "0.5" ;
	   myImages.push(img) ;
   }
       Model.myImages = myImages ;//把图片集传给Model对象，提供使用
   var backPicDom =  my$("article#help div#backPic") ;
   var randInt =  Math.floor(Math.random()*7) ;
   backPicDom.appendChild(myImages[randInt]);



 
   //脚步信息，加上当前时间信息
   var myDate = new Date();
   my$("footer").textContent += myDate.getFullYear() +'年' + (myDate.getMonth()+1) +'月' + myDate.getDate() +'日'; 
   
   };//end of window.onload

  /***自定义的通用函数my$：引用Web页上的Dom元素API有二个，querySelectorAll和querySelector，API名称不好拼写，本函数可以合并这二个API的功能，并简化代码的编写****/
  function my$(para){
	if(!para){
	  throw para + " : wrong Selector para,you get nothing !" ;
	}
   var dom = document.querySelectorAll(para) ;
   if (dom.length > 1){
	   console.log("you get Dom Array list reference.");
	   return dom ;
   }else{
     dom = document.querySelector(para) ;
	 if (dom){
       console.log("you get a Dom reference.");
       return dom ;
	 }else{
	   throw para + " : wrong Selector para,you get nothing !" ;
	 }
   }
  }//end of my$
 
  //-->
