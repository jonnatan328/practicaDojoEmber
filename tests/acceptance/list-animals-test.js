import { test } from 'qunit';
import moduleForAcceptance from 'animals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list animals');

test('should redirect to animals route', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/spies', 'should redirect automatically');
  });
});

test('should list available spies.', function (assert) {
  visit('/');
  andThen(function () {
    assert.equal(find('.listing').length, 3, 'should see 3 listings');
  });
});
