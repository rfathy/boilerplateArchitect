<template>
    <div>
        <h4>Child component</h4>
        <input class="form-control" type="text" v-model="inputData" @keyup="$emit('update:inputData', inputData);"/>
        
        <p>data from parent: {{ name }}</p>
    </div>
</template>


<script>
    export default {
        name: "child",
        data: () => ({
            inputData: ''
        }),
        props: ['name']

    }
</script>
