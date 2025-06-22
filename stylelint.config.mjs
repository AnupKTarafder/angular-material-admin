const fixItLater = [
  true,
  {
    severity: 'warning',
  },
];
/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-prettier/recommended'],
  rules: {
    'selector-class-pattern': [
      false,
      // TODO: Fix regex
      // '^[a-z]([-]?[a-z0-9]+)*(__[a-z0-9]([-]?[a-z0-9]+)*)?(--[a-z0-9]([-]?[a-z0-9]+)*)?$',
      {
        resolveNestedSelectors: true,
        message:
          'Expected class selector "%s" to match BEM CSS pattern https://en.bem.info/methodology/css. Selector validation tool: https://regexr.com/3apms',
      },
    ],
    'number-max-precision': [
      4,
      {
        severity: 'warning',
      },
    ],
    'selector-pseudo-element-no-unknown': [true, { severity: 'error', ignorePseudoElements: ['ng-deep'] }],
    'keyframes-name-pattern': null,
    'scss/at-mixin-pattern': null,
    'scss/at-function-pattern': null,
    'scss/at-extend-no-missing-placeholder': fixItLater,
    'no-descending-specificity': null,
    'no-empty-source': fixItLater,
  },
};
