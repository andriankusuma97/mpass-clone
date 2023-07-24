Page({
  data: {
    background: ['blue', 'red', 'yellow','green'],
    array: [{
      mode: 'aspectFill',
      text: 'scaleToFill：Zoom picture without maintaining aspect ratio，Fit the picture completely',
      src: '/images/fitur4.jpeg',
    }, {
      mode: 'aspectFill',
      text: 'aspectFit：Keep aspect ratio zoom picture，Make the long side of the picture fully visible',
      src: '/images/fitur5.jpeg',
    }, {
      mode: 'aspectFill',
      text: 'aspectFill：Keep aspect ratio zoom picture，Only the short side of the picture can be fully displayed',
      src: '/images/fitur2.jpeg',
    }, {
      mode: 'aspectFill',
      text: 'widthFix：Constant width，Automatic height change，Keep the aspect ratio of the original drawing unchanged',
      src: '/images/fitur6.jpeg',
    }, {
      mode: 'aspectFill',
      text: 'top：Do not scale picture，Show only the top area of the picture',
      src: '/images/fitur3.jpeg',
    }, {
      mode: 'aspectFill',
      text: 'top：Do not scale picture，Show only the top area of the picture',
      src: '/images/fitur1.jpeg',
    }, 
    ],
    indicatorDots: true,
    autoplay: true,
    vertical: false,
    interval: 5000,
    circular: false,
  },
  onLoad() {},
});
