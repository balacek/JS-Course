var budgetController = (function () {

    class Expense {
        constructor(id, description, value) {
            this.id = id;
            this.description = description;
            this.value = value;
        }
    };

    class Income {
        constructor(id, description, value) {
            this.id = id;
            this.description = description;
            this.value = value;
        }
    };

    var data = {
        allItems: {
            exp =[],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }
})();


var UIController = (function () {
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',

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
    var setupEventListeners = function () {
        var DOM = UICtrl.getDOMstrings;

        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (e) {
            //which same as keycode but for older browsers
            if (e.keyCode === 13 || e.which === 13) {
                ctrlAddItem();
            }
        });
    }


    var ctrlAddItem = function () {
        // 1. Get field input data
        var input = UICtrl.getinput();
    }


    return {
        init: function () {
            console.log('Application has started');
            setupEventListeners();
        }
    };

})(budgetController, UIController);

controller.init();