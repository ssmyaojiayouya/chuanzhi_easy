		/*表单校验*/
		//1.定义全局变量，用来接收标记对象
		var usernameObj;
		var passwordObj;
		var phoneObj;
		var usernameMsg;
		var passwordMsg;
		var phoneMsg;
		
		//2.获取标记对象
		window.onload=function(){
			//2.1获取输入控件的标记对象
			usernameObj = document.getElementById("usernameId");
			passwordObj = document.getElementById("passwordId");
			phoneObj = document.getElementById("phoneId");
			//2.2获取错误信息的标记对象
			usernameMsg = document.getElementById("usernameMsg");
			passwordMsg = document.getElementById("passwordMsg");
			phoneMsg = document.getElementById("phoneMsg");			
		}
		
		//表单校验,通过返回true或者false来控制表单是否提交
		function checkForm(){
			var usernameFlag = checkName();
			var passwordFlag = checkPassword();
			var phoneFlag = checkPhone();
			return usernameFlag && passwordFlag && phoneFlag;
		}
		
		//3.校验用户名
		function checkName(){
			//3.1获取用户名
			var value = usernameObj.value;
			//3.2创建正则表达式来校验用户名是否符合规范
			var regex = /^[a-zA-Z]\w{3,6}$/; //用户名以不分大小写的字母开头，包含字母数字下划线，长度是4-7位
			//3.3校验
			if(value == "") { //!value 等同于 value=""
				usernameMsg.innerHTML = "用户名必须填写";
				return false;
			}
			else if(! regex.test(value)) {
				usernameMsg.innerHTML = "用户名必须以字母开始，不区分大小写，包含数字，字母，下划线，长度是4-7个字符";
				return false;
			}
			else{
				usernameMsg.innerHTML = "";
				return true;
			}
		}
		
		//4.校验密码
		function checkPassword(){
			//4.1获取密码
			var value = passwordObj.value;
			//4.2创建正则表达式
			/*错误点：{3,6}一不小心写成了{3-6}*/
			var regex = /^[a-zA-Z0-9]{3,6}$/;//密码是字母和数字组成，长度是3-6位
			//4.3校验
			if(!value){
				passwordMsg.innerHTML = "密码必须填写";
				return false;
			}
			else if(!regex.test(value)){
				passwordMsg.innerHTML = "密码是字母和数字组成，长度是3-6位";
				return false;
			}
			else{
				passwordMsg.innerHTML = "";
				return true;
			}
		}
		
		//5.校验手机号
		function checkPhone(){
			//5.1获取手机号
			var value = phoneObj.value;
			//5.2创建正则表达式			
			var regex = /^1[3|5|7|8][0-9]{9}$/;//电话号码开始为1，第二位为3,5,7,8,后面9位任意写
			//5.3校验
			if(!value){
				phoneMsg.innerHTML = "手机号必须填写";
				return false;
			}
			else if(!regex.test(value)){
				phoneMsg.innerHTML = "电话号码开始为1，第二位为3,5,7,8,后面9位任意写";
				return false;
			}
			else{
				phoneMsg.innerHTML = "";
				return true;
			}
		}
		
