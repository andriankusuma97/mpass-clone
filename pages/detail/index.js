Page({
  data: {
    fitur:{}
  },
  onLoad(e) {
   console.log(e,"<<<< dari detail")
   my.request({
    url: 'http://localhost:3000/fitur',
    method: 'GET',
    dataType: 'json',
    success: (res) => {
      console.log(res.data)
      const data = res.data.find(el => el.id === e.id)
      console.log(data,"<<< dari data detail")
      this.setData({
        "fitur": data
      });
    },
    fail: function(res) {
      my.alert({content: 'fail'});
    },
    
  });
  
  },
});
