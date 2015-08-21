orion.pages.addTemplate({
  layout: 'mainLayout',
  template: 'defaultPage',
  name: 'Default',
  description: 'Default Page Template'
},
{
  content: orion.attribute('summernote', {
    label: 'Content'
  })
});
