Page({
  data: {
    pageNumber: 1,
    news: [],
    temp:[],
    itemsPerPage: 5, // Jumlah berita yang ingin ditampilkan per halaman
    totalPages: 0, // Jumlah total halaman
    isLoading: true,
    
  },
  onLoad() {
    my.request({
      url: 'http://localhost:3000/news',
      method: 'GET',
      dataType: 'json',
      success: (res) => {
        console.log(res.data,"<<<<dari news")
        this.setData({
          totalPages: Math.ceil(res.data.length / this.data.itemsPerPage), // Menghitung total halaman
          "temp": res.data
        });
        // this.showPage(this.data.pageNumber, res.data); // Menampilkan halaman pertama saat data berhasil diambil
          // console.log(data,"<<<<dari data cobaaaa")

        const startIndex = (this.data.pageNumber - 1) * this.data.itemsPerPage;
        const endIndex = startIndex + this.data.itemsPerPage;
        const currentPageData = this.data.temp.slice(startIndex, endIndex);
        console.log(currentPageData,"<<<<data")
        this.setData({
          "news": currentPageData
        });
          // Tambahkan setTimeout untuk menampilkan halaman setelah delay
          setTimeout(() => {
            this.showPage(this.data.pageNumber); // Menampilkan halaman pertama setelah data berhasil diambil
            this.setData({
              isLoading: false, // Mengubah status loading menjadi selesai
            });
          }, 3000); // Ganti nilai 1500 dengan durasi delay yang diinginkan dalam milidetik (misalnya 1000 = 1 detik)
      },
      fail: function(res) {
        my.alert({content: 'fail'});
      }
    })
  },

  // Fungsi untuk menampilkan halaman tertentu
  showPage(e) {
    this.setData({
      pageNumber:e,
    });
    console.log("<<<< masuk show page")
    const startIndex = (this.data.pageNumber - 1) * this.data.itemsPerPage;
    const endIndex = startIndex + this.data.itemsPerPage;
    const currentPageData = this.data.temp.slice(startIndex, endIndex);
    this.setData({
      news:currentPageData,
    });
    console.log( this.data.pageNumber ,"masukk sinii data 111 <<<")
    console.log(currentPageData,"<<< data e")
    console.log(startIndex,"<<< data e")
  },

  detail(e){
    my.navigateTo({
      url:`/pages/news-detail/index?url=${e.target.dataset.url}`
    })
  }


});
