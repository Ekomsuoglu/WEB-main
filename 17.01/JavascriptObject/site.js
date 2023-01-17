window.onload = function () {
  //   const nesne = {
  //     name: "Fatih",
  //     lastname: "Günalp",
  //     address: [
  //       {
  //         region: "Kadıköy",
  //         city: "İstanbul",
  //       },
  //       {
  //         region: "Ataşehir",
  //         city: "İstanbul",
  //       },
  //       {
  //         region: "Maltepe",
  //         city: "İstanbul",
  //       },
  //     ],
  //   };

  //   console.log(nesne);

  //json (javascript object notation)
  const ekmek = {
    name: "kepekli ekmek",
    price: 18,
  };

  const deterjan = {
    name: "kosla",
    price: 50,
  };

  const giysi = {
    name: "jean",
    price: 500,
  };

  const cay = {
    name: "çaykur",
    price: 30,
  };
  //sepet
  const sepet = [];
  //sepete ürün eklemek için bir fonksiyon tanımlandı.
  function AddToCart() {
    sepet.push(cay);
    sepet.push(giysi);
  }

  //yukarıda oluşturulan fonksiyon tetiklendi.
  AddToCart();

  //toplam fiyat için bir değişken tanımlandı.
  var totalPrice = 0;
  //toplam fiyat hesaplaması için bir fonskiyon tanımlandı.
  function getCartTotalPrice() {
    for (let i = 0; i < sepet.length; i++) {
      totalPrice += sepet[i].price;
    }
    console.log(totalPrice);
  }
  //yukarıda oluşturulan fonksiyon tetiklendi.
  getCartTotalPrice();
};
