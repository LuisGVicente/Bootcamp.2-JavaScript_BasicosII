/*
        name: 'Modern Love Season 1',
        link: 'https://www.amazon.es/gp/video/ssoredirect/?ru=https%3A%2F%2Fapp.primevideo.com%2Fdetail%3Fgti%3Damzn1.dv.gti.60b639e1-e479-1dbb-fba0-6e5c390c0764%26ref_%3Ddvm_src_ret_es_xx_s&page-type-id=B07WN2CGCF&ref=sr_1_1&keywords=series&__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&qid=1603465007&sr=8-1',
        image: 'https://m.media-amazon.com/images/I/91PbN-Ed2EL._AC_UL320_.jpg',
        year: '2019',
        price: '23',
*/
for (var product of products) {
  //mostrar producto
  var productElement = showProduct(
    product.image,
    product.name,
    product.link,
    product.year,
    product.price
  );
  document.getElementById("app").appendChild(productElement);
}
