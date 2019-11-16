<template>
    <div class="k-loading-mask" style="width:100%;height:100%"><span class="k-loading-text">Loading...</span><div class="k-loading-image"><div class="k-loading-color"></div></div></div>
</template>

<script>
export default {
  name: "loader"
}
</script>
<style lang="scss" scoped>
.k-loading-color {
    opacity: .5;
    cursor: not-allowed;
}
</style>
