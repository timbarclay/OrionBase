SinglePostController = BaseController.extend({
  template: 'postPage',
  data: function(){
    return Posts.findOne(this.params._id);
  }
});
