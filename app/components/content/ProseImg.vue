<template>
    <figure class="my-5">
        <v-img :src="refinedSrc" :alt="alt" class="w-100" max-height="600"/>
        <figcaption class="text-center text-grey-lighten-3">{{ alt }}</figcaption>
    </figure>
</template>

<script setup lang="ts">
import { withBase } from 'ufo';
import { useRuntimeConfig, computed } from '#imports';

const props = defineProps({
    src: {
        type: String,
        default: ''
    },
    alt: {
        type: String,
        default: ''
    },
    width: {
        type: [String, Number],
        default: undefined
    },
    height: {
        type: [String, Number],
        default: undefined
    }
});

const refinedSrc = computed(() => {
    if (props.src?.startsWith('/') && !props.src.startsWith('//')) {
        return withBase(props.src, useRuntimeConfig().app.baseURL);
    }
    return props.src;
});
</script>
