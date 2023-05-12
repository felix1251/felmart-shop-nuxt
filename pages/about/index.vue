<template>
    <div>
        {{ name }}
    </div>
</template>

<script setup>
    definePageMeta({
        layout: "auth",
    });
    const name = ref('felix');
</script>