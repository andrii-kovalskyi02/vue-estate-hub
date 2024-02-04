import { helpers, required } from '@vuelidate/validators'

export const requiredMessage = helpers.withMessage(
  'Required field missing',
  required
)
