# nodexpert:menu-generator

It allows you generate menu dynamically and rapidly.

## To install package

`meteor add nodexpert:menu-generator`

---

## How to use?
`import MenuGenerator from 'meteor/nodexpert:menu-generator';`

## Sample Array

```
[{
  icon: 'fa fa-cloud',
  class: 'style',
  label: 'Label of Item',
  link: '#link',
},
{
  icon: 'icon-class-name',
  label: 'Second Item',
  content: [{
    icon: 'icon-class-name',
    label: 'Sub Menu of Second Item',
    link: '#another-link',
    content: [{
      icon: 'icon-class-name',
      label: 'Sub Menu of Second Item',
      link: '#another-link',
      content: [{
        icon: 'icon-class-name',
        label: 'Sub Menu of Second Item',
        link: '#another-link',
      }, ]
    }, ]
  }, ],
}, ];
```
