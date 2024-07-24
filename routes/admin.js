var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  let products = [
    {
      name: "IPhone 15 pro max",
      category: "Mobile",
      description: "This is a good Phone",
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80Y0hGc1VYcU5MZG1Wc3p5djdGRkpkOXB3azBNWWRMTTJUR1Y1SkFQMTJmY3dDb1F2RTNvUEVHRkpGaGtOSVFHak1BVzRkYUlmdElTYk5KZFpJVWpSSnc2aGt6UEZqaHowVCs2N3RYMnYySnhRPT0=&traceId=1"
    },
    {
      name: "Redmi Note 12 Pro",
      category: "Mobile",
      description: "This is a good Phone",
      image: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1704270659/Croma%20Assets/Communication/Mobiles/Images/303557_zbutwd.png"
    },
    {
      name: "SAMSUNG S24 Ultra",
      category: "Mobile",
      description: "This is a good Phone",
      image: "https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-s928-sm-s928bzkqins-539573273?$650_519_PNG$"
    },
    {
      name: "Huawai P60",
      category: "Mobile",
      description: "This is a good Phone",
      image: "https://cdn.dxomark.com/wp-content/uploads/medias/post-147160/Huawei-P60-Pro_featured-image-packshot-review-Recovered.jpg"
    }
  ]
  res.render('admin/view-products', { admin: true, products });
});
router.get('/add-product', function (req, res) {
  res.render('admin/add-product')
})
router.post('/add-product', (req, res) => {
  console.log(req.body);
  console.log(req.files.image);
})

module.exports = router;
