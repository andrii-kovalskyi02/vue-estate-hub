<template>
  <div class="loading">
    <span>•</span>
    <span>•</span>
    <span>•</span>
  </div>
</template>

<style lang="scss" scoped>
.loading {
  display: block;
  text-align: center;
}

.loading span {
  font-size: 24px;
  letter-spacing: 4px;
  line-height: 24px;

  animation-name: blink;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
}

.loading span:nth-child(2) {
  animation-delay: 0.2s;
}

.loading span:nth-child(3) {
  animation-delay: 0.4s;
}
</style>
