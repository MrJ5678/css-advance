<template>
  <div class="c-footer">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CFooter"
}
</script>

<style lang="scss" scoped>
@include b(c-footer) {
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 10;
}
</style>