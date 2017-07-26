import { chai } from 'meteor/practicalmeteor:chai';
import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';
import listBuilder from './listBuilder';

import { withRenderedTemplate } from './test-helpers.js';
import './menu-generator.js'

describe('Menu Generator', function () {
  beforeEach(function () {
    Template.registerHelper('_', key => key);
  });
  afterEach(function () {
    Template.deregisterHelper('_');
  });

  it('Does not renders anything when no data is present', function () {
    const data = [];
    withRenderedTemplate('generateMenu',{ data }, el => {
      chai.assert.equal($(el).find('li').length, 0);
      chai.assert.equal($(el).find('ul').length, 1);
    });
  });

  it('renders correctly with simple data', function () {
    listBuilder.ulClass = 'Global';
    listBuilder.liClass = 'Global';
    const data = [{
      icon: 'icon-class-name',
      class: 'style',
      label: 'Label of Item',
      link: '#a-link',
    }, {
      icon: 'icon-class-name',
      label: 'Second Item',
      content: [{
        parentClass: 'parent-ul',
        icon: 'icon-class-name',
        label: 'Sub Menu of Second Item',
        link: '#another-link',
      }, ],
    }, ];
    withRenderedTemplate('generateMenu',{ data }, el => {
      chai.assert.equal($(el).find('li').length, 3);
      chai.assert.equal($(el).find('ul').length, 2);
      chai.assert.equal($(el).find('.parent-ul').length, 1);
      chai.assert.equal($(el).find('.style').length, 1);
    });
  });
});
