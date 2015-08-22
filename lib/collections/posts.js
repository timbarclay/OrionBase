Posts = new orion.collection('posts', {
  singularName: 'post',
  pluralName: 'posts',
  link: {title: 'Posts'},
  tabular: {
    columns: [
      {data: "title", title: "Title"},
      orion.attributeColumn('summernote', 'body', 'Content'),
      orion.attributeColumn('createdBy', 'createdBy', 'Created By'),
      orion.attributeColumn('createdAt', 'createdAt', 'Submitted')
    ]
  }
});

Posts.attachSchema(new SimpleSchema({
  title: {
    type: String
  },
  body: orion.attribute('summernote', {
    label: 'Body'
  }),
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
}));
