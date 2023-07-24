Page({
  data: {
    profile:{},
    isLoading: true,
    basicVisible: false,
    withTitleVisible: false,
    basicTwoVisible: false,
    basicThreeVisible: false,
    focusOneVisible: false,
    focusTwoVisible: false,
    focusThreeVisible: false,
    customVisible: false,
    customBodyVisible: false,
  },
  handleOpen(e) {
    const { field } = e.target.dataset;
    this.setData({ [field]: true });
  },
  handleClose() {
    this.setData({
      basicVisible: false,
      withTitleVisible: false,
      basicTwoVisible: false,
      basicThreeVisible: false,
      focusOneVisible: false,
      focusTwoVisible: false,
      focusThreeVisible: false,
      customVisible: false,
      customBodyVisible: false,
    });
  },
  handlePrimaryButtonTap() {
    this.handleClose();
    my.showToast({ content: '点击主按钮', duration: 1000 });
  },
  handleSecondaryButtonTap() {
    this.handleClose();
    my.showToast({ content: '点击辅助按钮', duration: 1000 });
  },
  handleCancelButtonTap() {
    this.handleClose();
    my.showToast({ content: '点击取消按钮', duration: 1000 });
  },
  onLoad() {
    my.request({
      url: 'http://localhost:3000/profile',
      method: 'GET',
      dataType: 'json',
      success: (res) => {
        console.log(res.data[0]),
        this.setData({
          "profile": res.data[0]
        });
      },
      fail: function(res) {
        my.alert({content: 'fail'});
      },

      
      
    });
    
    setTimeout(() => {
     
      this.setData({
        isLoading: false, // Mengubah status loading menjadi selesai
      });
    }, 2000); // Ganti nilai 1500 dengan durasi delay yang diinginkan dalam milidetik (misalnya 1000 = 1 detik)
  },
});
