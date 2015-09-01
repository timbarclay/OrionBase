Router.configure({
  loadingTemplate: 'spinner',
  notFoundTemplate: 'notFound',
  onAfterAction: function(){
    document.title = orion.dictionary.get('site.title', 'Blog');
  }
});

Router.route('/', {
  name: 'root',
  controller: 'MainPageController'
});

Router.route('/posts/:_id', {
  name: 'singlePost',
  controller: 'SinglePostController',
  onAfterAction: function(){
    var article = Posts.findOne(this.params._id);
    var siteTitle = orion.dictionary.get('site.title', 'Blog');
    document.title = article ? article.title + " | " + siteTitle : siteTitle;
  }
});
