import avalon from 'avalon2';
import template from './breadcrumb.html';
import './breadcrumb.scss';

const breadcrumb = {
  name: 'xk-breadcrumb',
  component: {
    template: template,
    defaults: {
      onInit: () => {
        let vm = this;



      },
      separator: '/'
    }
  }
};

export default breadcrumb;
