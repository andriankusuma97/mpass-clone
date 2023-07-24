Page({
  data: {
    url:""
  },
  onLoad(e) {
    console.log(e,"<<< ini dari news detail")
    this.setData({
      url: e.url,
    })

  },
  detail(e){
    console.log(e.target.dataset.id,"<<<< ini dari data")
    my.navigateTo({
      url:`/pages/detail/index?id=${e.target.dataset.id}`
    })
  }
});
