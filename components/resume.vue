<script setup>
const data = lebenslauf();
</script>

<template>
    <div class="flex flex-col items-center w-full">
        <h1 class="text-8xl">Resume</h1>
        <div data-aos="fade-right" v-for="d in data" :key="d.id" class="flex my-10 h-fit w-fit">
            <div class="flex flex-col justify-center items-start peer h-72 w-72 p-4 bg-white/50 backdrop-blur-md rounded-l-xl rounded-r-xl transition-all duration-500">
                <h3 class="text-2xl">{{ d.title }}</h3>
                <p class="text-sm font-thin my-1">{{ d.institution }}</p>
                <p class="text-md">{{ d.abschluss }}</p>
                <div class="my-4">
                    <p>{{ d.von_date }}</p>
                    <p>{{ d.bis_date }}</p>
                </div>
                <p>{{ d.beschreibung }}</p>
            </div>
            <div v-if="d.wissen.length > 0" class="opacity-0 peer-hover:translate-x-72 rounded-r-xl h-fit min-h-72 ml-5 py-5 -z-10 peer-hover:opacity-100 absolute flex-col justify-center w-56 transition-transform duration-300 bg-white/50 backdrop-blur-md">
                <div v-for="w in d.wissen" class="flex justify-between m-3">
                    <p>{{ w.name }}</p>
                    <p v-if="w.level === 3">Advanced</p>
                    <p v-else-if="w.level === 2">Intermediate</p>
                    <p v-else>Beginner</p>
                </div>
            </div>
        </div>
    </div>
</template>