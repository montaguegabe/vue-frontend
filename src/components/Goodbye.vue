<template>
<div class="hello">
    <h1>See ya later {{ animal }}!</h1>
</div>
</template>

<script>
export default {
    name: 'goodbye',
    data: function () {
        return {
            animal: 'alligator'
        };
    }
};
</script>

<style scoped lang="scss">
h1, h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
