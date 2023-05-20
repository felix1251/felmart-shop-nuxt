<template>
    <NuxtLink to="/" :class="`${sizeCss} text-black`">
       {{ text }}
    </NuxtLink>
</template>

<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: "medium"
  }
});

const { text, size } = props;

const sizeCss = computed({
  get: () => {
    switch (size) {
        case "small":
            return "text-2xl font-medium"
        case "medium":
            return "text-4xl font-bold"
        case "large":
            return "text-5xl font-bold"
        default:
            return "text-4xl font-bold"
    }
  },
  set: () => {}
})

</script>