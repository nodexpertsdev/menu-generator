import { Template } from 'meteor/templating';
import customisableTable from './customisableTable'

createMenu = function(element, arrData, options = customisableTable) {
  const { ulClass, liClass } = options;
  let ul = document.createElement('ul');
  ul.className = ulClass;
  arrData.map(function(obj) {
    let li = document.createElement('li');
    li.className = liClass;
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
      li.classList.add(obj.class);
    }
    if (obj.parentClass) {
      ul.classList.add(obj.parentClass);
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
  const arr = Template.instance().data && Template.instance().data['data'] ?  Template.instance().data['data'] : customisableTable.data ? customisableTable.data : [];
  createMenu(element, arr);
});
