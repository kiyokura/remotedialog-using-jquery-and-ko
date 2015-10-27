namespace HogeDialog {
  "use strict";

  // ダイアログのroot要素にしたいID
  // （このIDでdivが作成され、ダイアログになる）
  export var dlgId = "js-hoge-dialog";

  /**
   * ダイアログの外側からコンテンツに渡す引数
   * (メイン画面からiframe内に渡したい値)
   */
  export interface IDialogArgument {
    name: string;
    onOk: (age: number) => void;
    onCancel: () => void;
  }
}