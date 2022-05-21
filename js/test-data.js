var generateTestData = (function(){
   var ExampleItem = function(type, desc, sum){
      this.type = type,
      this.desc = desc,
      this.sum = sum
   };
   
   var testData = [
      new ExampleItem("inc", "Зарплата", 20000),
      new ExampleItem("inc", "Продажи", 3000),
      new ExampleItem("inc", "Криптовалюта", 5000),
      new ExampleItem("inc", "Фриланс", 10000),
      new ExampleItem("exp", "Бензин", 2000),
      new ExampleItem("exp", "Еда", 1500),
      new ExampleItem("exp", "Развлечения", 1030),
      new ExampleItem("exp", "Рента", 1500)
   ];
   
   function getRandomInt(max){
      return Math.floor(Math.random() * max);
   }
   
   function insertTnUI(){
      var random = getRandomInt(testData.length);
      var randomItem = testData[random];
   
      document.querySelector("#input__type").value = randomItem.type;
      document.querySelector("#input__description").value = randomItem.desc;
      document.querySelector("#input__value").value = randomItem.sum;
   }


   return{
      init: insertTnUI
   }

})();
generateTestData.init(); 

