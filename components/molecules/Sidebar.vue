<template>
    <nav class="w-80 fixed h-screen border-r px-4 py-3 shadow-md">
        <LogoText text="Felmart Admin" size="small"/>
        <ul class="mt-5 space-y-1">
            <li class="flex items-center gap-2.5 bg-primary text-white text-sm font-medium px-4 py-2.5 rounded-md">
                <Icon name="material-symbols:home-outline" size="1.7em"/> Dashboard
            </li>
            <li class="flex items-center gap-2.5 text-sm font-medium px-4 py-2.5 rounded-md hover:bg-primary/[.1]">
                <Icon name="ph:bag-bold" size="1.7em"/> Products
            </li>
            <li class="flex items-center gap-2.5 text-sm font-medium px-4 py-2.5 rounded-md hover:bg-primary/[.1]">
                <Icon name="ic:baseline-list" size="1.7em"/> Categories
            </li>
            <li class="flex items-center gap-2.5 text-sm font-medium px-4 py-2.5 rounded-md hover:bg-primary/[.1]">
                <Icon name="ph:money-fill" size="1.7em"/> Sales
            </li>
        </ul>
    </nav>
</template>

<script lang="ts" setup>
</script>