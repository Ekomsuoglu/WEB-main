
  window.onload=function(){
    const bira={
    productName:"Carlsberg 50cl Şişe",
    Price:39
  };
  const sigara={
    productName:"MarlBoro Touch",
    Price:36
  };
  const fistik={
    productName:"Tuzlu Fistik",
    Price:15
  };


 
  document.getElementById("sigarasepet").onclick = function(){
    result=sigara.Price;
    console.log(result);
 }







  const products = [];
  document.getElementById('sigarasepet').onclick = function(){
    products[sigara]
  };
  document.getElementById('birasepet').onclick = function(){
    products[bira]
  };
  document.getElementById('fistiksepet').onclick= function(){
    products[fistik]
  };
  function GetProductList() {
    for(let i =0; i<products.length; i++){
      console.log(products[i])
    }
    
  

  GetProductList();

  }
  
    
    
  
  }
  
  
  
  
  
  
  
  
  
  
