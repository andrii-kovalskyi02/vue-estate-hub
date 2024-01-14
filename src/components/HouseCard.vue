<template>
  <div className="card">
    <RouterLink
      :to="{ name: 'house', params: { 'houseId': id }}"
      className="card__link"
    >
      <img
        :src="image"
        :alt="cardTitle"
        className="card__img"
      />
      <div class="card__info-wrapper">
        <div class="card__main-info-wrapper">
          <h2 className="card__title">{{ cardTitle }}</h2>
          <h3 className="card__price">&euro; {{ formatNumber(price) }}</h3>
          <h3 className="card__address">{{ cardAddress }}</h3>
        </div>

        <div className="card__specs-container">
          <div className="card__specs">
            <div className="card__specs-icon">
              <TheIcon type="bedroom" />
            </div>
            <p className="card__specs-value">{{ rooms.bedrooms }}</p>
          </div>
          <div className="card__specs">
            <div className="card__specs-icon">
              <TheIcon type="bathroom" />
            </div>
            <p className="card__specs-value">{{ rooms.bathrooms }}</p>
          </div>
          <div className="card__specs">
            <div className="card__specs-icon">
              <TheIcon type="size" />
            </div>
            <p className="card__specs-value">{{ size }} m2</p>
          </div>
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import type { House } from '@/types/House';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { formatNumber } from '@/utils/formatNumber';
import TheIcon from './TheIcon.vue';

const props = defineProps<{
  house: House
}>()

const { id, image, price, rooms, size, location } = props.house

const cardTitle = computed(() =>
  `${capitalizeFirstLetter(location.street)} ${location.houseNumber}`)

const cardAddress = computed(() => `${location.zip} ${location.city}`)
</script>

<style scoped lang="scss">
.card {
  padding: 15px;
  border-radius: 10px;
  background-color: $background-color-2;

  box-shadow: $primaryShadowBox;

  @include hover(box-shadow, $primaryHoverShadowBox);

  @include onTablet {
    padding: 20px;
  }

  &__link {
    display: flex;
  }

  &__img {
    display: block;
    margin-right: 20px;
    width: 100px;
    height: 100px;
    object-fit: cover;

    border-radius: 10px;

    @include onTablet {
      width: 170px;
      height: 170px;
    }
  }

  &__info-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  &__main-info-wrapper {
    display: flex;
    flex-direction: column;
    gap: 5px;

    @include onTablet {
      gap: 10px;
    }
  }

  &__title {
    @extend %text-style-header2;
  }

  &__address {
    @extend %text-style-body;
  }

  &__specs-container {
    display: flex;
    gap: 10px;

    @include onTablet {
      gap: 15px;
    }
  }

  &__specs {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__price,
  &__specs-value {
    @extend %text-style-listing-information;
  }

  &__buttons {
    display: flex;
    gap: 8px;
  }
}
</style>