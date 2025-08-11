<script setup>
const data = cv();
</script>

<template>
    <div class="flex flex-col items-center h-fit mb-20 mx-56">
        <h1 class="text-8xl">Resume</h1>
        <div data-aos="fade-up" v-for="d in data" :key="d.id" class="flex my-16 w-fit relative" :class="{ 'mr-auto ml-0': d.id % 2, 'ml-auto mr-0': !(d.id % 2) }">
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
            <div v-if="d.wissen.length > 0" :class="{'peer-hover:translate-x-72 rounded-r-xl ml-5': d.id % 2, 'peer-hover:-translate-x-72 rounded-l-xl -ml-5': !(d.id % 2)}" class="absolute opacity-0 h-72 w-72 -z-10 peer-hover:opacity-100 flex flex-col flex-wrap justify-center transition-transform duration-300 bg-white/50 backdrop-blur-md">
                <div v-for="w in d.wissen" class="flex justify-between w-56 m-5">
                    <p class="font-bold">{{ w.name }}</p>
                    <p v-if="w.level === 3">Advanced</p>
                    <p v-else-if="w.level === 2">Intermediate</p>
                    <p v-else>Beginner</p>
                </div>
            </div>
        </div>
    </div>
</template>