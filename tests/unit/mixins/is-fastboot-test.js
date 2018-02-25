import Service from '@ember/service';
import IsFastbootMixin from 'ember-is-fastboot/mixins/is-fastboot';
import { module, test } from 'qunit';

module('Unit | Mixin | is-fastboot', function () {

  test('mixin fastboot service available - mocked', function (assert) {
    let FastbootableObject = Service.extend(IsFastbootMixin, {
      _fastboot: { isFastBoot: true } // eslint-disable-line ember/avoid-leaking-state-in-ember-objects
    });
    let subject = FastbootableObject.create();
    assert.ok(subject.get('_isFastBoot'), 'it should be true');
  });


  test('mixin fastboot service not available - mocked', function (assert) {
    let FastbootableObject = Service.extend(IsFastbootMixin, {
      _fastboot: null
    });
    let subject = FastbootableObject.create();
    assert.notOk(subject.get('_isFastBoot'), 'it should be false');
  });
});
