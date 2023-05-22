<template>
    <Breadcrumb path="ADMIN_DASHBOARD"/>
    <div>
        Content
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: "admin",
});
const homePageLink: string = useFindLinkPath(linksConstant.HOME)
</script>