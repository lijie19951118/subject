<script setup>
</script>

<template>
	<div class="">
		1.字符串 + 字符串(数字)	===	拼接
		2.数字 + 数字	=== 计算
		3.非原始类型 + 非原始类型 	===  先把非原始类型转成原始类型，在执行1/2
			

		题目1：
		++[[]][+[]] + [+[]]

		1.优先级最低的进行分割
		++[[]][+[]]	> ++[]    >   1
		
		[+[]]	> +[] ===  [].valueOf().toString()  >  +''  === 0  >  [0] 
		
		1+ [0] > 1 + '0' > '10'

		
	</div>
</template>

<style scoped lang="scss">

</style>