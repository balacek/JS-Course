var budgetController = (function () {
    // Some code
})();


var UIController = (function () {

    return {
        getinput: function () {
            return {
                //will be inc or exp
                type: document.querySelector('.add__type').value,
                description: document.querySelector('.add__description').value,
                value: document.querySelector('.add__value').value
            };
        }
    }
})();

var controller = (function (budgetCtrl, UICtrl) {
    var ctrlAddItem = function () {
        var input = UIController.getinput();
        console.log(input);
    }


    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (e) {
        //which same as keycode but for older browsers
        if (e.keyCode === 13 || e.which === 13) {
            ctrlAddItem();
        }
    });

})(budgetController, UIController);