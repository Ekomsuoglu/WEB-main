window.onload = function () {
  let sehirler = ["İstanbul", "Ankara", "İzmir"];
  let cities = ["New york", "Tokyo", "Londra", "Cern"];

  //Length
  document.getElementById("btnLength").onclick = function () {
    document.getElementById("length-title").innerText = sehirler.length;
  };

  //Includes
  document.getElementById("btnIncludeInline").onclick = function () {
    const value = document.getElementById("include-text").value;

    const result = sehirler.includes(value);

    if (result) {
      document.getElementById("include-result").innerText =
        "değer dizide mevcut!";
    } else {
      document.getElementById("include-result").innerText =
        "değer dizide mevcut değil!";
    }
  };

  //Concat
  document.getElementById("btnConcat").onclick = function () {
    const result = sehirler.concat(cities);

    for (let i = 0; i < result.length; i++) {
      const li = document.createElement("li");
      //   const button = document.createElement("button");
      //   button.append(result[i]);
      //   button.className = "btn btn-primary";
      li.append(result[i]);

      document.getElementById("concat-list").append(li);
      //   document.getElementById("concat-list").append(button);
    }
  };
};
