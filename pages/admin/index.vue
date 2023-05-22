<template>
    <Breadcrumb :path="dashboardPageConstant"/>
    <div>
        Content
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: "admin",
});
const dashboardPageConstant: string = linksConstant.ADMIN_DASHBOARD
</script>