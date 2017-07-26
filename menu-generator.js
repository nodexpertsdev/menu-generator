import { Template } from 'meteor/templating';
import listBuilder from './listBuilder';

createMenu = function(element, arrData, options = listBuilder) {
  const { ulClass, liClass } = options;
  let ul = document.createElement('ul');
  arrData.map(function(obj) {
    let li = document.createElement('li');
    let i = document.createElement('i');
    let innerContent;

    if (obj.link) {
      innerContent = document.createElement('a');
      innerContent.setAttribute('href', obj.link);
    } else {
      innerContent = document.createElement('span');
    }

    if (obj.icon) {
      i.className = obj.icon;
      innerContent.appendChild(i);
    }
    innerContent.innerHTML = obj.label;
    li.appendChild(innerContent);
    if (obj.class) {
      li.className = obj.class;
    } else {
      li.className = liClass;
    }
    if (obj.parentClass) {
      ul.classList.add(obj.parentClass);
    } else {
      ul.className = ulClass;
    }
    if (obj.content) {
      createMenu(li, obj.content);
    }
    ul.appendChild(li);
  });
  element.appendChild(ul);
}

Template.generateMenu.onRendered(function () {
  const element = document.getElementById('root');
  const arr = Template.instance().data && Template.instance().data['data'] ?  Template.instance().data['data'] : listBuilder.data ? listBuilder.data : [];
  createMenu(element, arr);
});
