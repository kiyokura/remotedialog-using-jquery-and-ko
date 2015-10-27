var HogeDialog;
(function (HogeDialog) {
    var Content;
    (function (Content) {
        "use strict";
        var ViewModel = (function () {
            function ViewModel() {
                this.name = ko.observable("");
                this.age = ko.observable(null);
            }
            return ViewModel;
        })();
        $(function () {
            var arg = DialogUtil.getArgumentFromChild(HogeDialog.dlgId);
            var vm = new ViewModel();
            vm.name(arg.name);
            vm.onOk = function () { arg.onOk(vm.age()); };
            vm.onCancel = function () { arg.onCancel(); };
            ko.applyBindings(vm);
        });
    })(Content = HogeDialog.Content || (HogeDialog.Content = {}));
})(HogeDialog || (HogeDialog = {}));
//# sourceMappingURL=content.js.map