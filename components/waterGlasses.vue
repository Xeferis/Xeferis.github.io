<script lang="ts">
var glass = ref()
var pglass = ref()

var game = ref()
var money = ref()
var dglass = ref()
var end = ref()

game.value = document.getElementById("game");
money.value = document.getElementById("money");
dglass.value = document.getElementById("glass");
end.value = document.getElementById("end");

function startgame(){
        glass.value = 0;
        dglass.value.innerHtml = glass.value
        end.value.addClass("hidden");
        pglass.value = Math.floor(Math.random() * 100) + 1;
    };

function drinkGlass(){
        if(pglass.value === glass.value){
            end.value.removeClass("hidden");
        };
        glass.value = glass.value + 1;
        dglass.value.innerHtml = glass.value
        money.value.innerHtml = glass.value * 1000;
        console.log(glass.value)
    };

</script>

<template>
    <div class="text-white">
        <h1>100 Waterglasses</h1>
        <p>So you have 100 waterglasses and one of it is poisoned. For every glass you drink you get 1000$. How many do you drink before you quit?</p>
        <button :click="startgame()">Start!</button>
        <div id="game">
            <div id="end" class="hidden absolute w-full h-full bg-black">
                <h1 class="text-red">Game over - you died!</h1>
            </div>
            <p id="money">0</p>
            <p id="glass">0</p>
            <button :click="drinkGlass()">Drink!</button>
        </div>
    </div>
</template>
