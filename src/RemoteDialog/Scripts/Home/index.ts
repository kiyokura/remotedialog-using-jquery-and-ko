namespace Home.Index {
  "use strict";

  class ViewModel {
    public name = ko.observable("");
    public age = ko.observable();
    public onDialogOpen: () => void;
  }

  $(function () {
    var dialog = new HogeDialog.Dialog();

    var vm = new ViewModel();
    vm.onDialogOpen = (): void=> {
      dialog.openDialog(vm.name(), (age: number): void=> { vm.age(age); });
    };
    ko.applyBindings(vm);


  });
}