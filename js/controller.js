var controller = (function(budgetCtrl, uiCtrl){

   var setupEventListerners = function(){
      var DOM = uiCtrl.getDomStrings();
      document.querySelector(DOM.form).addEventListener('submit', ctrlAddItem);
   }



   // ф-я срабатывающая при отправке формы
   function ctrlAddItem(e){
      e.preventDefault();

      // получить данные из формы
      var input = uiCtrl.getInput();
      console.log(input);


      if(input.description !== "" && input.value > 0 && !isNaN(input.value)){

      // добавить полученные данные в модель
      var newItem = budgetCtrl.addItem(input.type, input.description, input.value);
      budgetCtrl.test();

      // Добавить "запись" в UI
      uiCtrl.renderListItem(newItem, input.type);
      uiCtrl.clearFields();
      generateTestData.init();
      }




   }

   return{
      init: function(){
         console.log("App started!")
         setupEventListerners();
      }
   }

   

})(modelController, viewController);

controller.init()