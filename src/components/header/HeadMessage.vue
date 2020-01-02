<template>
    <div class="header">
    	<div class="header-top">
			<div class="background"></div>
			<div class="submit">
				<input type="text" placeholder="在此搜索案例、宝贝">
				<!-- <button class="btn">搜索</button> -->
                <Button class="btn" type="primary">搜索</Button>
			</div>
			<ul class="header-login">
				<li class="login-link">登录</li>
				<li class="register-link">注册</li>
				<li class="issue-link">发布</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
    name: "HeadMessage",
}
</script>

<style lang="scss">
	.header {
		height: 71px;
		width: 980px;
		margin: 0 auto;
		&-top {
			position: relative;
		}
		.submit {
			position: absolute;
			top: 15px;
			left: 300px;
			input {
				padding-left: 20px;
				width: 249px;
				height: 25px;
				border: 1px solid #dadada;
				border-right: 0;
				border-radius: 5px 0 0 5px;
				outline: none;
				font-size: 12px;
			}
			.btn {
    		    cursor: pointer;
				width: 52px;
				height: 25px;
				border: 0;
				background-color: #ff9200;
				color: #fff;
				border-radius: 0 3px 3px 0;
				line-height: 27px;
				font-size: 12px;
			}

		}
		.submit:before {
			content: '';
			position: absolute;
			background: url('../../../public/search.png') no-repeat;
			width: 15px;
			height: 15px;
			background-size: 15px;
			left: 3px;
			top: 6px;
			z-index: 1;
		}
	
		.background {
			width: 179px;
			height: 60px;
    	    cursor: pointer;
			background-color: bisque;
			background: url("../../../public/logo.png");
			background-size: 100%;
		}
		&-login {
			top: 20px;
			position: absolute;
			right: -17px;
			li {
				float: left;
				list-style: none;
				font-size: 12px;
				position: relative;
				padding: 0 20px;
			}
			.login-link {
				border-right: 1px solid #ff9200;
			}
			.register-link {
				border-left: 1px solid #ff9200;
			}
			.login-link:before {
				content: '';
				position: absolute;
				background: url('../../../public/man.png') no-repeat;
				width: 15px;
				height: 15px;
				background-size: 15px;
				left: -5px;
			}
			.issue-link {
				margin-left: 10px;
			}
			.issue-link:before {
				content: '';
				position: absolute;
				background: url('../../../public/fabu.png') no-repeat;
				width: 16px;
				height: 16px;
				background-size: 16px;
				left: -5px;
			}
			li:hover {
				color: #ff9200;
			}
		}
	}
</style>