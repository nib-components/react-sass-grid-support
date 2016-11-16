var DOMProperty = require('react-dom/lib/DOMProperty.js');

DOMProperty.injection.injectDOMPropertyConfig({
  Properties: {
    'g-xs': DOMProperty.injection.MUST_USE_ATTRIBUTE,
    'g-sm': DOMProperty.injection.MUST_USE_ATTRIBUTE,
    'g-md': DOMProperty.injection.MUST_USE_ATTRIBUTE,
    'g-lg': DOMProperty.injection.MUST_USE_ATTRIBUTE,
    'g-xl': DOMProperty.injection.MUST_USE_ATTRIBUTE
  }
});
