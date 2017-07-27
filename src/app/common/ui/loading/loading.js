import * as avalon from 'avalon2';

avalon.directive('loading', {
  init(cur, pre, binding) {
    console.log(binding);
  }
});
