<template>
    <div>
        {{ name }}
    </div>
</template>

<script setup lang="ts">
    definePageMeta({ layout: "auth" });
    const name = ref<string>('felix');
</script>