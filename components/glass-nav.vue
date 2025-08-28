<script lang="ts">

</script>

<template>
    <div class="glass relative top-9 left-1/2 -translate-x-1/2 flex justify-center items-center w-fit h-14 gap-4 p-4 rounded-full">
        <div ref="orb" class="glass absolute w-[90px] h-10 left-[5px] transition-all duration-300"></div>
        <label class="flex justify-center items-center w-16">
            <input type="radio" name="menu" value="one" checked class="appearance-none" />
            One
        </label>
        <label class="flex justify-center items-center w-16">
            <input type="radio" name="menu" value="two" class="appearance-none" />
            Two
        </label>
        <label class="flex justify-center items-center w-16">
            <input type="radio" name="menu" value="three" class="appearance-none" />
            Three
        </label>
    </div>
</template>