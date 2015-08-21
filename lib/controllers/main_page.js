MainPageController = BaseController.extend({
  template: 'postsList',

  data: function(){
    return {posts: Posts.find({}, {sort: {createdAt: -1}})};
  }
});
