<script setup lang="ts">
definePageMeta({
    layout: 'plain',
})

const modifiers = ref({
    quality: 100,
    flip: undefined,
    flop: undefined,
    sharpen: undefined,
    blur: undefined,
    negate: undefined,
    tint: undefined,
    grayscale: undefined,
})

const crop = ref({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
})

const extract = computed(() => {
    if (crop.value.width && crop.value.height) {
        return `${crop.value.left}_${crop.value.top}_${crop.value.width}_${crop.value.height}`
    }
    return;
})
</script>

<template>
    <picture>
        <source
            media="(max-width: 650px)"
            srcset="https://www.grindosaur.com/img/games/digimon-world-next-order/digimon/gallantmon-cm.jpg"
        />
        <img src="https://www.grindosaur.com/img/games/digimon-world-next-order/digimon/gallantmon-cm.jpg">
    </picture>
    <img src="https://www.grindosaur.com/img/games/digimon-world-next-order/digimon/gallantmon-cm.jpg">
</template>

<style scoped>
:deep(img) {
    display: block;
    width: 100%;
}
</style>
