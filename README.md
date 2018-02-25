Ember Is Fastboot
=================

This addon provides a mixin to make it easy to know if your addon is currently in FastBoot mode. 
This approach is lovingly stolen from a great [PR](https://github.com/elwayman02/ember-user-activity/pull/67) 
made by [@tylerturdenpants](https://github.com/tylerturdenpants)!

Installation
------------------------------------------------------------------------------

```
ember install ember-is-fastboot
```


Usage
------------------------------------------------------------------------------

The `is-fastboot` mixin is the only utility you need to use! It provides an 
`_isFastBoot` computed that tells you if FastBoot mode is currently active.

For example, if you have a service that needs to short-circuit some logic in FastBoot:

```javascript
// services/foo.js
import Service from '@ember/service';
import IsFastbootMixin from 'ember-is-fastboot/mixins/is-fastboot';

export default Service.extend(IsFastbootMixin, {
  doStuff() {
    if (this.get('_isFastBoot')) {
      return; // Don't do the stuff, we're in FastBoot mode
    }
    
    // Do the stuff, we're not in FastBoot mode
  }
});
```

That's it! You can throw this mixin into any Ember object that needs to be FastBoot-aware.


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-is-fastboot`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
