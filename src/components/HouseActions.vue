<template>
  <div class="house-actions">
    <CustomButton
      custom-class="edit"
      aria-label="Edit House"
    >
      <TheIcon :type="isMobile ? 'edit-mobile' : 'edit'" />
    </CustomButton>
    <CustomButton
      custom-class="delete"
      aria-label="Delete House"
    >
      <TheIcon :type="isMobile ? 'delete-mobile' : 'delete'" />
    </CustomButton>
  </div>
</template>

<script setup lang="ts">
import CustomButton from './CustomButton.vue';
import TheIcon from './TheIcon.vue'

withDefaults(defineProps<{
    isMobile?: Boolean
  }>(), {
  isMobile: () => false
})

</script>

<style scoped lang="scss">
.house-actions {
  display: flex;
  gap: 12px;

  @include onTablet {
    gap: 15px;
  }
}
</style>