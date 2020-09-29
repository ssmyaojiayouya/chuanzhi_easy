# chuanzhi_easy
这是跟着黑马程序员做的一个简单版本的传智书城的网页。  
技术包含：简单的控件布局：css+div，以及简单的JavaScript验证表单提交的数据是否符合规范。  
正则表达式，获取表单的value，验证表单数据规范性。  
布局主要是：分为5个部分，导航菜单栏，商品分类，商品详细信息，版权信息。  


知识要点提炼：  
一、简单的页面布局步骤：   
	1.先画出一个页面大致有几个部分，以确定需要几个div  
	2.再根据每个div的位置不同进行相应的css代码调整，比如设置宽高，字体颜色，边框距离，是否浮动等  

	
二、注册页面的设计  
	表单校验：1.用户数据的数据符合咱们定义的规范，允许用户提交表单，如果用户数据的数据不符合规范，不允许提交  
	表单校验的知识点：1）<span>错误信息</span> ：在同一行显示，用它的innerHTML属性回显错误信息。  
			  2）事件：onkeyup 键盘松开触发事件，调用对应的函数  
			                onsubmit 提交事件（<input type="submit"> 提交按钮）调用对应的函数  
			  3）正则表达式和正则校验。  
			                操作步骤：1.创建正则表达式对象  2.调用test方法，来判断用户输入的数据是否符合规范  
			                <script type="text/javascript">  
						//1.创建正则表达式对象  
						var regx=/^1[3|5|7|8]{1}[0-9]{9}$/;  
						//2.调用test方法，判断手机号是否符合规范  
						var value="135";  
						var flag = regx.text(value);  
						alert(flag)	  		
					</script>                  			                			

