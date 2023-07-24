Page({
  data: {
    isLoading: true,
    background: ['blue', 'red', 'yellow','green'],
    array: [{
      mode: 'aspectFill',
      text: 'scaleToFill：Zoom picture without maintaining aspect ratio，Fit the picture completely',
      src: 'https://lelogama.go-jek.com/post_featured_image/Consumer_Trends_Blog_Banner_1.jpg',
    }, {
      mode: 'aspectFill',
      text: 'aspectFit：Keep aspect ratio zoom picture，Make the long side of the picture fully visible',
      src: 'https://lelogama.go-jek.com/post_featured_image/supe_app_header_1.jpg',
    }, {
      mode: 'aspectFill',
      text: 'aspectFill：Keep aspect ratio zoom picture，Only the short side of the picture can be fully displayed',
      src: 'https://lelogama.go-jek.com/post_featured_image/Gojek_x_BBI_Blog_Banner_FINAL_2.jpg',
    }, {
      mode: 'aspectFill',
      text: 'widthFix：Constant width，Automatic height change，Keep the aspect ratio of the original drawing unchanged',
      src: 'https://gobiz.co.id/pusat-pengetahuan/wp-content/uploads/2022/03/Jangkau-Lebih-Banyak-Pelanggan-dengan-Buat-Iklan-GoFood-Top-Banner.jpg',
    }, {
      mode: 'aspectFill',
      text: 'top：Do not scale picture，Show only the top area of the picture',
      src: 'https://gobiz.co.id/pusat-pengetahuan/wp-content/uploads/2021/04/Mau-Tingkatkan-Penghasilan-Lewat-Aplikasi-GoBiz-3.29-Begini-Caranya-...-1.jpg',
    }, 
    ],
    indicatorDots: true,
    autoplay: true,
    vertical: false,
    interval: 5000,
    circular: false,
    fitur:[{
      id:"1",
      name:"Resume madis",
      type:"success"
    },
    {
      id:"2",
      name:"Pelayanan Obat",
      type:"info"
    },
    {
      id:"3",
      name:"Vaksin kesehatan",
      type:"warn"
    },
    {
      id:"4",
      name:"Hasil tes covid",
      type:"waiting"
    },
    {
      id:"5",
      name:"Riwayat Rawat Inap",
      type:"cancel"
    },
  ]
  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
    setTimeout(() => {
     
      this.setData({
        isLoading: false, // Mengubah status loading menjadi selesai
      });
    }, 2000); // Ganti nilai 1500 dengan durasi delay yang diinginkan dalam milidetik (misalnya 1000 = 1 detik)
   
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
  formSubmit: function(e) {
    console.log('The submit event occurs in form, and the carried data: ', e.detail.value)
  },
  formReset: function() {
    console.log('The reset event occurs in form')
  },
  
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  detail(e){
    console.log(e.target.dataset.id,"<<<< ini dari data")
    my.navigateTo({
      url:`/pages/detail/index?id=${e.target.dataset.id}`
    })
  }
});
