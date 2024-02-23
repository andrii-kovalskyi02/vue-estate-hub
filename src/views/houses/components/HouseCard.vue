<template>
  <section className="card">
    <RouterLink
      :to="{
        name: housesRouteNames.house,
        params: {
          houseId: id,
          slug: addDashes(cardTitle)
        }
      }"
      className="card__link"
    >
      <img :src="image" :alt="`${cardTitle} House Image`" className="card__img" />
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
            <h4 className="card__specs-value">{{ rooms.bedrooms }}</h4>
          </div>
          <div className="card__specs">
            <div className="card__specs-icon">
              <TheIcon type="bathroom" />
            </div>
            <h4 className="card__specs-value">{{ rooms.bathrooms }}</h4>
          </div>
          <div className="card__specs">
            <div className="card__specs-icon">
              <TheIcon type="size" />
            </div>
            <h4 className="card__specs-value">{{ size }} m2</h4>
          </div>
        </div>
      </div>
    </RouterLink>

    <div v-if="madeByMe" class="card__actions-wrapper">
      <HouseActions :listingId="id" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { housesRouteNames } from '@/views/houses/houses.routes'
import type { House } from '@/views/houses/houses.types'
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter'
import { makeAddressTitle } from '@/utils/makeAddressTitle'
import { addDashes } from '@/utils/addDashes'
import { formatNumber } from '@/utils/formatNumber'
import TheIcon from '@/components/TheIcon.vue'
import HouseActions from './HouseActions.vue'

const props = defineProps<{
  house: House
}>()

const { id, image, price, rooms, size, location, madeByMe } = props.house

const cardTitle = computed(() => {
  return makeAddressTitle(
    capitalizeFirstLetter(location.street),
    location.houseNumber,
    location.houseNumberAddition
  )
})

const cardAddress = computed(() => `${location.zip} ${location.city}`)
</script>

<style scoped lang="scss">
.card {
  display: flex;
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
    flex: 1;
  }

  &__actions-wrapper {
    padding: 10px 10px 0 0;

    @include onTablet {
      padding-top: 15px 15px 0 0;
    }
  }

  &__img {
    display: block;
    margin-right: 15px;
    width: 100px;
    height: 100px;
    object-fit: cover;

    border-radius: 10px;

    @include onTablet {
      margin-right: 20px;
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
    color: $tertiary-color-2;
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
