<template>
    <ul class="flex gap-2">
        <li
            class="flex space-x-2"
            v-for="(item, index) in source"
            :key="index"
        >
            <NuxtLink
                class="text-primary/[.8] hover:text-primary flex items-center gap-1"
                :to="findLink(item)"
            >
                <Icon
                    :name="findIcon(item)"
                    size="1.2em"
                />
                {{ findLinkName(item) }}
            </NuxtLink>
            <div>/</div>
        </li>
        <li class="font-medium">
            {{ name }}
        </li>
    </ul>
</template>

<script lang="ts" setup>
const props = defineProps({
    path: {
        type: String,
        requred: true,
        default: "HOME",
    },
});

const { source, name } = useFindLinkDetails(props.path);
const findLink = useFindLinkPath;
const findLinkName = useFindLinkName;
const findIcon = useFindLinkIcon;
</script>
