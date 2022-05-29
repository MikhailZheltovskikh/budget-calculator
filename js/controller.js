var controller = (function (budgetCtrl, uiCtrl) {
  var setupEventListerners = function () {
    var DOM = uiCtrl.getDomStrings();
    document.querySelector(DOM.form).addEventListener("submit", ctrlAddItem);

    document.querySelector(DOM.budgetTabel).addEventListener("click", ctrlDeleteItem);
  };

  function updatePercentages(){
   // посчитать % для каждой записи типа expense  
   budgetCtrl.calculatePercentage();
   budgetCtrl.test();
   // получим данные по % с модели
   var idsAndPercents = budgetCtrl.getAllIdsAndPercentages();
   // обновить ui с новыми %
   uiCtrl.updateItemsPercentages(idsAndPercents);
  }

  // ф-я срабатывающая при отправке формы
  function ctrlAddItem(e) {
    e.preventDefault();

    // получить данные из формы
    var input = uiCtrl.getInput();

    if (input.description !== "" && input.value > 0 && !isNaN(input.value)) {
      // добавить полученные данные в модель
      var newItem = budgetCtrl.addItem(input.type, input.description, input.value);
      budgetCtrl.test();

      // Добавить "запись" в UI
      uiCtrl.renderListItem(newItem, input.type);
      uiCtrl.clearFields();
      generateTestData.init();

      // посчитать бюджет
      updateBudget();

      // обновить %
      updatePercentages()
    }
  }

  // удаление item
  function ctrlDeleteItem(e) {
    var itemId, splitId, type, ID;
    if (e.target.closest(".item__remove")) {
      itemId = e.target.closest("li.budget-list__item").id;
      splitId = itemId.split("-");
      type = splitId[0];
      ID = parseInt(splitId[1]);
      //удаляем из модели
      budgetCtrl.deleteItem(type, ID);
      // удаляем из view
      uiCtrl.deleteListItem(itemId);

      // посчитать бюджет
      updateBudget();   

      // обновить %
      updatePercentages()
    }
  }

  function updateBudget() {
    // расчет бюджета в модели
    budgetCtrl.calculateBudget();
    //  получить расчитанный бюджет из модели
    budgetObj = budgetCtrl.getBudget();
    // отобразить бюджет в шаблоне;
    uiCtrl.updateBudget(budgetObj);
  }

  return {
    init: function () {
      console.log("App started!");
      setupEventListerners();
      uiCtrl.displayMonth(),
      uiCtrl.updateBudget({
        budget: 0,
        totalInc: 0,
        totalExp: 0,
        percentage: 0,
      });
    },
  };
})(modelController, viewController);

controller.init();
