var budgetController = (function () {
    // Some code
})();


var UIController = (function () {
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: ''
    };

    return {
        getinput: function () {
            return {
                //will be inc or exp
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        getDOMstrings: function () {
            return DOMstrings;
        }
    }
})();

var controller = (function (budgetCtrl, UICtrl) {
    var DOM = UICtrl.getDOMstrings;

    var ctrlAddItem = function () {
        var input = UICtrl.getinput();
        console.log(input);
    }


    document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (e) {
        //which same as keycode but for older browsers
        if (e.keyCode === 13 || e.which === 13) {
            ctrlAddItem();
        }
    });

})(budgetController, UIController);