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
  createdAt: {
    type: Date,
    autoValue: function(){return new Date();},
    autoform: {
      type: "hidden",
      label: false
    }
  }
}));
