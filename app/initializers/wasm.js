
export function initialize(application) {
  if (Ember.__loader.require.has('@glimmer/low-level')) {
    application.deferReadiness();

    if (Ember.__loader.require('@glimmer/low-level').booted) {
      Ember.__loader.require('@glimmer/low-level').booted.then(() => {
        application.advanceReadiness();
      });
    } else {
      application.advanceReadiness();
    }


  }
}

export default {
  name: 'wasm',
  initialize
};
