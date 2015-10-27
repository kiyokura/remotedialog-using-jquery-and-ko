var Home;
(function (Home) {
    var Index;
    (function (Index) {
        "use strict";
        var ViewModel = (function () {
            function ViewModel() {
                this.name = ko.observable("");
                this.age = ko.observable();
            }
            return ViewModel;
        })();
        $(function () {
            var dialog = new HogeDialog.Dialog();
            var vm = new ViewModel();
            vm.onDialogOpen = function () {
                dialog.openDialog(vm.name(), function (age) { vm.age(age); });
            };
            ko.applyBindings(vm);
        });
    })(Index = Home.Index || (Home.Index = {}));
})(Home || (Home = {}));
//# sourceMappingURL=index.js.map