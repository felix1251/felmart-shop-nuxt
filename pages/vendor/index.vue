<template>
    <div>
        <FormKit
            @click="click"
            type="button"
            label="Button"
        />
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: "vendor",
});
const click = () => {
    $toast.show("this is a test");
};
</script>
