import { ValidationErrors } from 'ngrx-forms';

/**
 * A validation function that requires the value to be `true`.
 * Considers `null` as valid. Combine this function with the `required` validation
 * function if `null` should be considered invalid.
 *
 * The validation error returned by this validation function has the following shape:
 *
 * ```typescript
 * {
 *   required: {
 *     actual: boolean;
 *   };
 * }
 * ```
 *
 * Usually you would use this validation function in conjunction with the `validate`
 * update function to perform synchronous validation in your reducer:
 *
 * ```typescript
 * updateGroup<MyFormValue>({
 *  agreeWithTermsOfService: validate(requiredTrue),
 * })
 * ```
 */
export function requiredTrue(value: boolean | null): ValidationErrors {
  if (value === null) {
    return {};
  }

  if (value === true) {
    return {};
  }

  return {
    required: {
      actual: value,
    },
  };
}
