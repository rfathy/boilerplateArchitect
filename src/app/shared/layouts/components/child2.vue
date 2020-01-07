<template>
    <div>
        <h4>Child component</h4>
        <p>data from parent: {{ name }}</p>
    </div>
</template>


<script>
    export default {
        name: "child-two",
        props: ['name']

    }
</script>