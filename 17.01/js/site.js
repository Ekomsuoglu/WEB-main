window.onload = function () {
  //Array
  var sehirler = ["istanbul", "izmir", "ankara", "antalya"];

  var cities = ["Berlin", "Paris", "Roma", "Lizbon"];

  //Console log browser'da bulunan console ekranına bir takım veirleri yazdırmak veya alınan hataları görebilmek adına kullandığımız alandır.
  document.getElementById("btnConsoleLog").onclick = function () {
    console.log("tıklandı!");
  };

  //Length
  document.getElementById("btnLength").onclick = function () {
    console.log(sehirler.length);
  };

  //Includes
  document.getElementById("btnIncludes").onclick = function () {
    //şehirler isimli array içerisinde izmir şehri bulunuyor mu?
    const result = sehirler.includes("Izmir".toLowerCase());

    if (result) {
      alert("dizi içerisinde İzmir MEVCUT!");
    } else {
      alert("dizi içerisinde İzmir MEVCUT DEĞİL!");
    }
  };

  //Concat
  document.getElementById("btnConcat").onclick = function () {
    const result = sehirler.concat(cities);
    console.log(result);
  };

  //For
  document.getElementById("btnFor").onclick = function () {
    for (let i = 0; i < sehirler.length; i++) {
      console.log(sehirler[i]);
    }
  };

  //ForEach
  document.getElementById("btnForEach").onclick = function () {
    sehirler.forEach(function (value, index) {
      console.log(value + " " + index);
    });
  };

  //Pop => diziyi son elemandan başlayarak siler.
  document.getElementById("btnPop").onclick = function () {
    if (sehirler.length > 0) {
      let items = sehirler.pop();
      console.log(items);
      console.log(sehirler);
    } else {
      alert("dizi içerisinde silinecek eleman kalmadı");
    }
  };

  //Shift=> diziyi ilk elemandan başlayarak siler.
  document.getElementById("btnShift").onclick = function () {
    if (sehirler.length > 0) {
      let items = sehirler.shift();
      console.log(items);
      console.log(sehirler);
    } else {
      alert("dizi içerisinde silinecek eleman kalmadı");
    }
  };

  //Push=> diziye sondan eleman ekler
  document.getElementById("btnPush").onclick = function () {
    sehirler.push("Yozgat");
    console.log(sehirler);
  };

  //Unshift=> diziye ilk indexten eleman ekler
  document.getElementById("btnUnshift").onclick = function () {
    sehirler.unshift("Bayburt");
    console.log(sehirler);
  };

  //Test
};
