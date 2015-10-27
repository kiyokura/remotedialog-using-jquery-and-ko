namespace HogeDialog.Content {
  "use strict";

  class ViewModel {
    public name = ko.observable("");
    public age = ko.observable(null);
    public onOk: () => void;
    public onCancel: () => void;
  }

  $(function () {
    var arg = DialogUtil.getArgumentFromChild<HogeDialog.IDialogArgument>(HogeDialog.dlgId);
    var vm = new ViewModel();
    vm.name(arg.name);
    vm.onOk = (): void=> {arg.onOk(vm.age());};
    vm.onCancel = (): void=> { arg.onCancel();};
    ko.applyBindings(vm);
  });
}