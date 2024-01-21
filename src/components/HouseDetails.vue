<template>
  <article class="house" tabindex="0">
    <div class="house__img-container">
      <img
        :src="image"
        :alt="`${houseTitle} House Image`"
        className="house__img"
      />
    </div>
    <div class="house__info-container">
      <div class="house__base-line">
        <h1 className="house__title">{{ houseTitle }}</h1>
        <HouseActions v-if="!isMobile" />
      </div>

      <div className="house__specs-container">
        <div className="house__specs">
          <div className="house__specs-icon">
            <TheIcon type="location" />
          </div>
          <h5 className="house__specs-value">{{ houseAddress }}</h5>
        </div>
        <div class="house__specs-group">
          <div className="house__specs">
            <div className="house__specs-icon">
              <TheIcon type="price" />
            </div>
            <h5 className="house__specs-value">{{ formatNumber(price) }}</h5>
          </div>
          <div className="house__specs">
            <div className="house__specs-icon">
              <TheIcon type="size" />
            </div>
            <h5 className="house__specs-value">{{ size }} m2</h5>
          </div>
          <div className="house__specs">
            <div className="house__specs-icon">
              <TheIcon type="construction" />
            </div>
            <h5 className="house__specs-value">Build in {{ constructionYear }}</h5>
          </div>
        </div>
        <div class="house__specs-group">
          <div className="house__specs">
            <div className="house__specs-icon">
              <TheIcon type="bedroom" />
            </div>
            <h5 className="house__specs-value">{{ rooms.bedrooms }}</h5>
          </div>
          <div className="house__specs">
            <div className="house__specs-icon">
              <TheIcon type="bathroom" />
            </div>
            <h5 className="house__specs-value">{{ rooms.bathrooms }}</h5>
          </div>
          <div className="house__specs">
            <div className="house__specs-icon">
              <TheIcon type="garage" />
            </div>
            <h5 className="house__specs-value">{{ hasGarage ? 'Yes' : 'No' }}</h5>
          </div>
        </div>
      </div>

      <p class="house__description">{{ description }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { House } from '@/types/House'
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter'
import { formatNumber } from '@/utils/formatNumber'
import TheIcon from './TheIcon.vue'
import HouseActions from './HouseActions.vue'

const props = withDefaults(defineProps<{
    house: House
    isMobile?: Boolean
  }>(), {
  isMobile: () => false
})

const {
  id,
  image,
  price,
  rooms,
  size,
  description,
  location,
  constructionYear,
  hasGarage,
  madeByMe
} = props.house

const houseTitle = computed(() =>
  `${capitalizeFirstLetter(location.street)} ${location.houseNumber}`)

const houseAddress = computed(() => `${location.zip} ${location.city}`)
</script>

<style scoped lang="scss">
.house {
  box-shadow: $primaryShadowBox;

  &__img-container {
    position: absolute;
    top: 0;
    left: 0;

    @include onTablet {
      position: static;
    }
  }

  &__img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__info-container {
    position: absolute;
    top: 220px;
    left: 0;
    z-index: 1;

    padding: 25px;
    width: 100%;
    border-top-right-radius: 28px;
    border-top-left-radius: 28px;
    background-color: $background-color-2;

    @include onTablet {
      position: static;
      border-radius: unset;
    }
  }

  &__base-line {
    display: flex;
    justify-content: space-between;
    align-items: start;
  }

  &__title {
    margin-bottom: 15px;
    @extend %text-style-header1;
  }

  &__specs-container {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 15px;

    @include onTablet {
      gap: 18px;
      margin-bottom: 25px;
    }
  }

  &__specs-group {
    display: flex;
    gap: 18px;

    @include onTablet {
      gap: 28px;
    }
  }

  &__specs {
    display: flex;
    align-items: center;
    gap: 8px;

    @include onTablet {
      gap: 10px;
    }
  }

  &__specs-value {
    @extend %text-style-listing-information;
  }

  &__description {
    @extend %text-style-body;
    line-height: 20px;

    @include onTablet {
      line-height: 30px;
    }
  }
}
</style>