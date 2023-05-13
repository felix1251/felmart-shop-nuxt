<template>
    <FormKit type="form" :actions="false" :errors="['Our server is not working.', 'But we don’t like you anyway!']">
        <FormKit type="text" label="Email address" />
        <FormKit type="text" label="Password" />
    </FormKit>
</template>
