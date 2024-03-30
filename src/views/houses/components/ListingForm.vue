<template>
  <form name="listing-form" class="listing" @submit.prevent="handleSubmit" novalidate>
    <div class="listing__form-group">
      <BaseInput
        v-model="formData.streetName"
        placeholder="Enter the street name"
        class="listing__form-input"
        :class="{ 'listing__form-input--error': v$.formData.streetName.$error }"
        label="Street name*"
        label-for="street-name"
        label-class="listing__form-label"
        aria-describedby="street-name-error"
        :aria-invalid="v$.formData.streetName.$error"
      />
      <FormValidationError
        id="street-name-error"
        :is-error-visible="v$.formData.streetName.$error"
        :message="v$.formData.streetName.$errors[0]?.$message"
      />
    </div>
    <div class="listing__form-group listing__form-group--two-columns">
      <div class="listing__form-group">
        <BaseInput
          type="number"
          v-model="formData.houseNumber"
          placeholder="Enter house number"
          min="1"
          class="listing__form-input"
          :class="{ 'listing__form-input--error': v$.formData.houseNumber.$error }"
          label="House number*"
          label-for="house-number"
          label-class="listing__form-label"
          aria-describedby="house-number-error"
          :aria-invalid="v$.formData.houseNumber.$error"
        />
        <FormValidationError
          id="house-number-error"
          :is-error-visible="v$.formData.houseNumber.$error"
          :message="v$.formData.houseNumber.$errors[0]?.$message"
        />
      </div>
      <div class="listing__form-group">
        <BaseInput
          v-model.trim="formData.houseNumberAddition"
          placeholder="e.g. A"
          class="listing__form-input"
          :class="{ 'listing__form-input--error': v$.formData.numberAddition.$error }"
          label="Addition (optional)"
          label-for="addition"
          label-class="listing__form-label"
          aria-describedby="addition-error"
          :aria-invalid="v$.formData.numberAddition.$error"
        />
        <FormValidationError
          id="addition-error"
          :is-error-visible="v$.formData.numberAddition.$error"
          :message="v$.formData.numberAddition.$errors[0]?.$message"
        />
      </div>
    </div>
    <div class="listing__form-group">
      <BaseInput
        v-model.trim="formData.zip"
        placeholder="e.g. 1000 AA"
        autocomplete="postal-code"
        class="listing__form-input"
        :class="{ 'listing__form-input--error': v$.formData.zip.$error }"
        label="Postal code*"
        label-for="postal-code"
        label-class="listing__form-label"
        aria-describedby="postal-code-error"
        :aria-invalid="v$.formData.zip.$error"
      />
      <FormValidationError
        id="postal-code-error"
        :is-error-visible="v$.formData.zip.$error"
        :message="v$.formData.zip.$errors[0]?.$message"
      />
    </div>
    <div class="listing__form-group">
      <BaseInput
        v-model.trim="formData.city"
        placeholder="e.g. Utrecht"
        class="listing__form-input"
        :class="{ 'listing__form-input--error': v$.formData.city.$error }"
        label="City*"
        label-for="city"
        label-class="listing__form-label"
        aria-describedby="city-error"
        :aria-invalid="v$.formData.city.$error"
      />
      <FormValidationError
        id="city-error"
        :is-error-visible="v$.formData.city.$error"
        :message="v$.formData.city.$errors[0]?.$message"
      />
    </div>
    <div class="listing__form-group">
      <label
        for="picture"
        class="listing__form-label listing__form-label--upload-img"
        @drop.prevent="handleImageDragAndDrop"
        @dragover.prevent
      >
        Upload picture (PNG or JPG)*
        <input
          type="file"
          ref="fileInput"
          id="picture"
          accept="image/png, image/jpeg"
          @change="handleFileChange"
          hidden
        />
        <div
          ref="imgView"
          class="listing__img-view"
          :class="{
            'listing__img-view--with-img': imgFile,
            'listing__img-view--error': v$.imgFile.$error
          }"
          @keyup.enter="triggerFileInputClick"
          :aria-invalid="v$.imgFile.$error"
          :aria-label="imageDescription"
          :aria-labelledby="imgFile ? undefined : 'picture'"
          aria-describedby="picture-error"
          tabindex="0"
        >
          <CustomButton
            v-if="imgFile"
            custom-class="clear-img"
            @click.prevent="removeImage"
            aria-label="Clear Image"
          >
            <TheIcon type="clear-white" />
          </CustomButton>
          <TheIcon v-else type="upload" />
        </div>
      </label>
      <FormValidationError
        id="picture-error"
        :is-error-visible="v$.imgFile.$error"
        :message="v$.imgFile.$errors[0]?.$message"
      />
    </div>
    <div class="listing__form-group">
      <BaseInput
        type="number"
        v-model="formData.price"
        placeholder="e.g. €150.000"
        min="1"
        class="listing__form-input"
        :class="{ 'listing__form-input--error': v$.formData.price.$error }"
        label="Price*"
        label-for="price"
        label-class="listing__form-label"
        aria-describedby="price-error"
        :aria-invalid="v$.formData.price.$error"
      />
      <FormValidationError
        id="price-error"
        :is-error-visible="v$.formData.price.$error"
        :message="v$.formData.price.$errors[0]?.$message"
      />
    </div>
    <div class="listing__form-group listing__form-group--two-columns">
      <div class="listing__form-group">
        <BaseInput
          type="number"
          v-model="formData.size"
          placeholder="e.g. 60m2"
          min="1"
          class="listing__form-input"
          :class="{ 'listing__form-input--error': v$.formData.size.$error }"
          label="Size*"
          label-for="size"
          label-class="listing__form-label"
          aria-describedby="size-error"
          :aria-invalid="v$.formData.size.$error"
        />
        <FormValidationError
          id="size-error"
          :is-error-visible="v$.formData.size.$error"
          :message="v$.formData.size.$errors[0]?.$message"
        />
      </div>
      <div class="listing__form-group">
        <TheSelect
          :options="garageSelectOptions"
          :option="optionLabel"
          @option-change="(option) => (formData.hasGarage = option)"
          label="Garage*"
          label-for="garage"
          label-class="listing__form-label"
          :has-validation-error="v$.formData.hasGarage.$error"
        />
        <FormValidationError
          id="garage-error"
          :is-error-visible="v$.formData.hasGarage.$error"
          :message="v$.formData.hasGarage.$errors[0]?.$message"
        />
      </div>
    </div>
    <div class="listing__form-group listing__form-group--two-columns">
      <div class="listing__form-group">
        <BaseInput
          type="number"
          v-model="formData.bedrooms"
          placeholder="Enter amount"
          min="0"
          class="listing__form-input"
          :class="{ 'listing__form-input--error': v$.formData.bedrooms.$error }"
          label="Bedrooms*"
          label-for="bedrooms"
          label-class="listing__form-label"
          aria-describedby="bedrooms-error"
          :aria-invalid="v$.formData.bedrooms.$error"
        />
        <FormValidationError
          id="bedrooms-error"
          :is-error-visible="v$.formData.bedrooms.$error"
          :message="v$.formData.bedrooms.$errors[0]?.$message"
        />
      </div>
      <div class="listing__form-group">
        <BaseInput
          type="number"
          v-model="formData.bathrooms"
          placeholder="Enter amount"
          min="0"
          class="listing__form-input"
          :class="{ 'listing__form-input--error': v$.formData.bathrooms.$error }"
          label="Bathrooms*"
          label-for="bathrooms"
          label-class="listing__form-label"
          aria-describedby="bathrooms-error"
          :aria-invalid="v$.formData.bathrooms.$error"
        />
        <FormValidationError
          id="bathrooms-error"
          :is-error-visible="v$.formData.bathrooms.$error"
          :message="v$.formData.bathrooms.$errors[0]?.$message"
        />
      </div>
    </div>
    <div class="listing__form-group">
      <BaseInput
        type="number"
        v-model="formData.constructionYear"
        placeholder="e.g. 1990"
        min="1901"
        :max="currentYear"
        class="listing__form-input"
        :class="{ 'listing__form-input--error': v$.formData.constructionYear.$error }"
        label="Construction date*"
        label-for="construction-year"
        label-class="listing__form-label"
        aria-describedby="construction-year-error"
        :aria-invalid="v$.formData.constructionYear.$error"
      />
      <FormValidationError
        id="construction-year-error"
        :is-error-visible="v$.formData.constructionYear.$error"
        :message="v$.formData.constructionYear.$errors[0]?.$message"
      />
    </div>
    <div class="listing__form-group">
      <BaseTextarea
        v-model.trim="formData.description"
        placeholder="Enter description"
        class="listing__form-input listing__form-input--textarea"
        :class="{ 'listing__form-input--error': v$.formData.description.$error }"
        label="Description*"
        label-for="description"
        label-class="listing__form-label"
        aria-describedby="description-error"
        :aria-invalid="v$.formData.description.$error"
      />
      <FormValidationError
        id="description-error"
        :is-error-visible="v$.formData.description.$error"
        :message="v$.formData.description.$errors[0]?.$message"
      />
    </div>
    <div class="listing__form-submit-btn-wrapper">
      <CustomButton type="submit" custom-class="submit">
        <LoadingIndicator v-if="loading" />
        <template v-else>{{ submitButtonText }}</template>
      </CustomButton>
    </div>
    <SubmissionErrorModal
      :is-modal-open="isModalOpen"
      :submit-again="handleSubmit"
      @close="closeModal"
    />
  </form>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watchEffect } from 'vue'
import useVuelidate from '@vuelidate/core'
import { minLength, maxLength, helpers, numeric, minValue, maxValue } from '@vuelidate/validators'
import CustomButton from '@/components/CustomButton.vue'
import TheIcon from '@/components/TheIcon.vue'
import BaseInput from '@/components/BaseInput.vue'
import { requiredMessage } from '@/validators/validators'
import BaseTextarea from '@/components/BaseTextarea.vue'
import LoadingIndicator from '@/components/LoadingIndicator.vue'
import { useRouter } from 'vue-router'
import TheSelect from '@/components/TheSelect.vue'
import { garageSelectOptions } from '../houses.constants'
import FormValidationError from '@/components/FormValidationError.vue'
import { housesRouteNames } from '@/views/houses/houses.routes'
import type { ListingFormData } from '../houses.types'
import SubmissionErrorModal from './SubmissionErrorModal.vue'

const props = defineProps<{
  listingData?: ListingFormData
  listingImage?: string
  listingId: number | undefined
  loading: boolean
  error: any
  submitButtonText: string
}>()

const emit = defineEmits<{
  submit: [formData: ListingFormData, imgFile: FormData | null, redirect: () => void]
}>()

const router = useRouter()

const initialFormData = {
  streetName: '',
  houseNumber: '',
  houseNumberAddition: undefined,
  zip: '',
  city: '',
  price: '',
  size: '',
  hasGarage: undefined,
  bedrooms: '',
  bathrooms: '',
  constructionYear: '',
  description: ''
}

const formData = ref<ListingFormData>(
  props.listingData ? { ...props.listingData } : initialFormData
)

const fileInput = ref<HTMLInputElement | null>(null)
const imgView = ref<HTMLDivElement | null>(null)
const imgFile = ref<FormData | null>(null)
const imgFileName = ref('')
const isSubmitClicked = ref(false)
const isModalOpen = ref(false)

const isValidStreetName = (value: string) => /^[A-Za-z0-9\s\-']+$/.test(value)
const isValidAddition = (value: string) => /^[A-Za-z0-9\s\-']*$/.test(value)
const isValidZip = (value: string) => /^[1-9][0-9]{3}\s(?!SA|SD|SS)[A-Z]{2}$/.test(value)
const isValidCity = (value: string) => /^[A-Za-z\s-]+$/.test(value)
const isValidImgType = () => {
  if (isImagePresent.value) {
    return true
  }

  const files = fileInput.value?.files

  if (files?.length) {
    const fileType = files[0].type
    return /^image\/(png|jpeg|jpg)$/.test(fileType)
  }

  return false
}

watchEffect(() => {
  if (props.error && isSubmitClicked.value) {
    isModalOpen.value = true
  }
})

const isImagePresent = computed(() => {
  return !imgFile.value?.has('image')
})

const optionLabel = computed(() =>
  props.listingData ? (props.listingData?.hasGarage ? 'Yes' : 'No') : undefined
)

const currentYear = computed(() => new Date().getFullYear())

const imageDescription = computed(() => {
  if (!imgFile.value) {
    return undefined
  }

  return imgFileName.value
    ? `Image uploaded with the name: ${imgFileName.value}`
    : 'Image is uploaded'
})

const rules = computed(() => {
  return {
    formData: {
      streetName: {
        required: requiredMessage,
        minLength: minLength(4),
        maxLength: maxLength(45),
        validStreetName: helpers.withMessage('Please enter a valid street name', isValidStreetName)
      },
      houseNumber: {
        required: requiredMessage,
        numeric,
        minValue: minValue(1),
        maxLength: maxLength(10)
      },
      numberAddition: {
        maxLength: maxLength(6),
        validAddition: helpers.withMessage('Please enter a valid addition', isValidAddition)
      },
      zip: {
        required: requiredMessage,
        validZip: helpers.withMessage(
          'Netherland ZIPs must have exactly 4 digits, followed by space and 2 uppercase letters except SA, SD and SS, for instance "0000 AA"',
          isValidZip
        )
      },
      city: {
        required: requiredMessage,
        validCity: helpers.withMessage('Please enter a valid city name', isValidCity)
      },
      price: {
        required: requiredMessage,
        numeric,
        minValue: minValue(1)
      },
      size: {
        required: requiredMessage,
        numeric,
        minValue: minValue(1)
      },
      hasGarage: {
        required: requiredMessage
      },
      bedrooms: {
        required: requiredMessage,
        numeric,
        minValue: minValue(0)
      },
      bathrooms: {
        required: requiredMessage,
        numeric,
        minValue: minValue(0)
      },
      constructionYear: {
        required: requiredMessage,
        numeric,
        minValue: minValue(1901),
        maxValue: maxValue(currentYear)
      },
      description: {
        required: requiredMessage,
        minLength: minLength(10),
        maxLength: maxLength(500)
      }
    },
    imgFile: {
      required: requiredMessage,
      isImgValid: helpers.withMessage(
        'Invalid image format. Please select a PNG, JPEG, or JPG file',
        isValidImgType
      )
    }
  }
})

const v$ = useVuelidate(rules, { formData, imgFile })

const handleFileChange = () => {
  const files = fileInput.value?.files

  if (files?.length && imgView.value) {
    const firstFile = files[0]
    const imgData = new FormData()
    const imgLink = URL.createObjectURL(firstFile)

    imgData.append('image', firstFile)
    imgFile.value = imgData
    imgFileName.value = firstFile.name

    imgView.value.style.backgroundImage = `url(${imgLink})`
  }
}

const removeImage = () => {
  if (fileInput.value && imgView.value) {
    fileInput.value.value = ''
    imgFile.value = null
    imgView.value.style.backgroundImage = 'none'
  }
}

const triggerFileInputClick = () => {
  fileInput.value?.click()
}

const handleImageDragAndDrop = (event: DragEvent) => {
  const droppedFiles = event.dataTransfer?.files

  if (droppedFiles && fileInput.value) {
    fileInput.value.files = droppedFiles

    handleFileChange()
  }
}

const navigateToHouseRoute = () => {
  if (props.listingId && !props.error) {
    router.push({
      name: housesRouteNames.house,
      params: {
        houseId: props.listingId
      }
    })
  }
}

const handleSubmit = async () => {
  isSubmitClicked.value = true
  const isFormDataCorrect = await v$.value.$validate()

  if (isFormDataCorrect) {
    let imgData = imgFile.value

    if (isImagePresent.value) {
      imgData = null
    }

    emit('submit', formData.value, imgData, navigateToHouseRoute)
  } else {
    const firstInvalidInputEl = document
      .querySelector('.listing')
      ?.querySelector('[aria-invalid="true"]')

    if (firstInvalidInputEl) {
      firstInvalidInputEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }
}

const closeModal = () => (isModalOpen.value = false)

onMounted(() => {
  if (props.listingImage && imgView.value) {
    imgFile.value = new FormData()
    imgView.value.style.backgroundImage = `url(${props.listingImage})`
  }
})
</script>

<style lang="scss">
.listing {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  animation: $initialAnimation;

  @include onTablet {
    width: 400px;
  }

  &__form-group {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 10px;

    &--two-columns {
      flex-direction: row;
      gap: 20px;
    }
  }

  &__img-view {
    position: relative;
    @include flexCenter;
    width: 120px;
    height: 120px;
    margin-top: 20px;
    border: 2px dashed transparent;
    border-image: repeating-linear-gradient(
      to left top,
      $tertiary-color-2,
      $tertiary-color-2 10px,
      transparent 10px,
      transparent 20px
    );
    border-image-slice: 1;
    cursor: pointer;

    &--with-img {
      border: none;
      border-radius: 8px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }

    &--error {
      border-image: repeating-linear-gradient(
        to left top,
        $primary-color,
        $primary-color 10px,
        transparent 10px,
        transparent 20px
      );
      border-image-slice: 1;
    }
  }

  &__form-label {
    @extend %text-style-input-field-title;

    &--upload-img {
      width: 220px;
    }
  }

  &__form-input {
    width: 100%;
    height: 55px;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid transparent;
    outline: none;

    @extend %text-style-input-field;

    &--textarea {
      height: 150px;
    }

    &::placeholder {
      color: $tertiary-color-2;
    }

    &--error {
      border-color: $primary-color;
      color: $primary-color;

      &::placeholder {
        color: inherit;
      }
    }

    @include transition;
  }

  &__form-submit-btn-wrapper {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
