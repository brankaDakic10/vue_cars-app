<template>
<div>
<nav class="navbar navbar-expand-lg navbar-dark  nav-style">
<router-link class="navbar-brand" to="/">CarsApp</router-link>
<div class="navbar-nav">
<router-link to="/cars" class="nav-link">Cars</router-link>
<router-link to="/add" class="nav-link">Add </router-link>

</div>
</nav>
</div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.nav-style{
    background-color: rgb(92, 179, 92);
}
</style>
