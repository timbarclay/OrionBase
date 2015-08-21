Router.configure({
  loadingTemplate: 'spinner',
  notFoundTemplate: 'notFound'
});

Router.route('/', {
  name: 'root',
  controller: 'MainPageController'
});

Router.route('/posts/:_id', {
  name: 'singlePost',
  controller: 'SinglePostController'
});
