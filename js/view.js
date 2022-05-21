var viewController = (function (){

   var DOMstrings = {
      form: "#budget-form",
      inputType: "#input__type", 
      inputDescription: "#input__description",
      inputValue: "#input__value",
      incomeContainer: "#income__list",
      expenseContainer: "#expenses__list"
   };

   function getInput (){
      return {
         type: document.querySelector(DOMstrings.inputType).value,
         description: document.querySelector(DOMstrings.inputDescription).value,
         value: document.querySelector(DOMstrings.inputValue).value,
      };
   }

   function renderListItem(obj, type){

      var containerElement, html;

      if(type === "inc"){
         containerElement = DOMstrings.incomeContainer;
         html = `<li id="income-%id%" class="budget-list__item item item--income">
                     <div class="item__title">%description%</div>
                     <div class="item__right">
                        <div class="item__amount">%value%</div>
                        <button class="item__remove">
                           <img
                                 src="./img/circle-green.svg"
                                 alt="delete"
                           />
                        </button>
                     </div>
               </li>`
      }else{
         containerElement = DOMstrings.expenseContainer;
         html = `<li id="expense-%id%" class="budget-list__item item item--expense">
                     <div class="item__title">%description%</div>
                     <div class="item__right">
                        <div class="item__amount">
                           %value%
                           <div class="item__badge">
                                 <div class="badge badge--dark">
                                    15%
                                 </div>
                           </div>
                        </div>
                        <button class="item__remove">
                           <img src="./img/circle-red.svg" alt="delete" />
                        </button>
                     </div>
               </li>`
      };

      newHtml = html.replace("%id%", obj.id);
      newHtml = newHtml.replace("%description%", obj.description);
      newHtml = newHtml.replace("%value%", obj.value);

      document.querySelector(containerElement).insertAdjacentHTML("beforeend", newHtml);
   }

   // отчистка полей
   function clearFields(){
      var inputDesc, inputVal;

      inputDesc = document.querySelector(DOMstrings.inputDescription);
      inputVal = document.querySelector(DOMstrings.inputValue);

      inputDesc.value = "";
      inputDesc.focus();
      inputVal.value = "";
   }

   return {
      getInput: getInput,
      renderListItem: renderListItem,
      clearFields: clearFields,
      getDomStrings: function () {
         return DOMstrings;
      },
   };

})();



 