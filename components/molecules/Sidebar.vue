<template>
    <nav class="w-80 fixed h-screen border-r px-4 py-3 shadow-md">
        <LogoText text="Felmart Admin" size="small" />
        <ul class="mt-5 space-y-1">
            <NuxtLink :to="item.link" v-for="(item, index) in data" :key="index"
                class="flex items-center gap-2.5 text-sm font-medium px-4 py-2.5 rounded-md"
                :class="[current.route === item.link ? 'bg-primary text-white ' : 'hover:bg-primary/[.1]']">
                <Icon :name="item.icon" size="1.7em" /> {{ item.name }}
            </NuxtLink>
        </ul>
    </nav>
</template>

<script lang="ts" setup>
const data = Object.values(adminSidebarLinksContant)
const route = useRoute()
const current = reactive({ route: route.fullPath })

watch(route, newRoute => {
    current.route = newRoute.fullPath
})
</script>