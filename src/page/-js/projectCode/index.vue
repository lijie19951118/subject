<script setup>
function fn(arr) {
    if (typeof arr === 'string') {
        arr = arr.split(',');
    };
    if (typeof arr === 'number') {
        arr = [arr];
    };
    arr = arr.map(item => String(item));
    const list = ['3300', '3100', '5100']; // 000000111
    let str = '';
    list.forEach((item, i) => {
        if (arr.includes(item)){
            str = '1' + str
        } else {
            str = '0' + str
        }
    })
    return parseInt(str, 2);
}
</script>

<template>
	<div class=""></div>
</template>

<style scoped lang="scss">

</style>