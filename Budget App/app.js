var budgetController = (function () {
    // Some code
})();


var UICOntroller = (function () {

    // Some code
})();

var controller = (function (budgetCtrl, UICtrl) {
    var ctrlAddItem = function () {

    }


    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (e) {
        //which same as keycode but for older browsers
        if (e.keyCode === 13 || e.which === 13) {
            ctrlAddItem();
        }
    });

})(budgetController, UICOntroller);