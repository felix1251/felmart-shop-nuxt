<template>
    <FormKit
        type="form"
        :actions="false"
    >
        <div class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
                <FormKit
                    type="text"
                    label="Email Address"
                    placeholder="Email"
                />
                <FormKit
                    type="text"
                    label="Password"
                    placeholder="Password"
                />
            </div>
            <FormKit
                type="button"
                label="Button"
            />
        </div>
    </FormKit>
</template>

<script lang="ts" setup></script>
