import avalon from 'avalon2';
import header from './header.html';
import './header.scss';
import './header-top';

avalon.component('hth-header', {
  template: header,
  defaults: {
    name: '页面头部'
  }
});
