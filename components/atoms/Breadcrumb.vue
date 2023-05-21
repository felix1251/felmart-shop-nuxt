<template>
    <NuxtLink>
        
    </NuxtLink>
</template>

<script lang="ts" setup>
const props = defineProps({
    path: {
        type: String,
        required: true
    },
});

const links = useFindLinkDetails(props.path)

</script>