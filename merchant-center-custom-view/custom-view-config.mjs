/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptionsForCustomView}
 */
const config = {
  name: 'My New Custom View Project',
  cloudIdentifier: 'gcp-au',
  env: {
    development: {
      initialProjectKey: 'energy-commerce-dev-playground',
    },
    production: {
      customViewId: 'cmcem3xro000vwe01v39zpl7u',
      url: 'https://mc-view-o2a3cyssf4ouc37qe8hww1q5.australia-southeast1.gcp.4.sandbox.commercetools.app',
    },
  },
  oAuthScopes: {
    view: ['view_products'],
    manage: ['manage_products'],
  },
  type: 'CustomPanel',
  typeSettings: {
    size: 'LARGE',
  },
  locators: ['products.product_details.general'],
};

export default config;
