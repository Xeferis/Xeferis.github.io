<script setup>
const data = lebenslauf();
</script>

<template>
    <div>
        <h1>Resume</h1>
        <div id="data" v-for="d in data">
            <h3>{{ d.title }}</h3>
            <p>{{ d.absclhuss }}</p>
        </div>
    </div>
</template>