namespace HogeDialog {
  "use strict";

  export class Dialog {
    private contentUrl = "/HogeDialog/Content"; // ダイアログのコンテンツ本体のURL
    private dlgSlctr = "#" + HogeDialog.dlgId;
    private okCallback: (age: number) => void;

    /**
     * jQuery Dialogのオプション
     */
    private dialgOption: JQueryUI.DialogOptions = {
      autoOpen: false,
      modal: true,
      title: "ほげダイアログ",
      width: 400,
      height: 500,
      draggable: true,
      closeOnEscape: false,
      resizable: false,
      close: (): void=> {
        this.disposeDialog();
      }
    };

    /**
     * constructor
     */
    constructor() {
      DialogUtil.createElement("body", HogeDialog.dlgId);
      $(this.dlgSlctr).dialog(this.dialgOption);
    }

    /**
     * OK時のコールバック処理
     * （iframe内から呼ばれる）
     */
    private onOk = (age: number): void=> {
      this.okCallback(age);
      this.closeDialog();
    };

    /**
     * キャンセル時のコールバック処理
     * （iframe内から呼ばれる）
     */
    private onCancel = (): void=> {
      this.closeDialog();
    };

    /**
     * iframe内に渡す引数を設定
     */
    private setDialogArgument = (name: string): void=> {
      var arg: IDialogArgument = {
        name: name,
        onOk: this.onOk,
        onCancel: this.onCancel
      };
      DialogUtil.setArgumentFromParent(HogeDialog.dlgId, arg);
    };

    /**
     * ダイアログオープン
     * @param {string} name 引数
     * @param {age: number=> void} okCallback OK時のコールバック関数
     */
    public openDialog = (name: string, okCallback: (age: number) => void) => {
      this.okCallback = okCallback;
      this.setDialogArgument(name);
      $(this.dlgSlctr).dialog("open");
      DialogUtil.loadContent(HogeDialog.dlgId, this.contentUrl);
    };

    public closeDialog = (): void=> {
      $(this.dlgSlctr).dialog("close");
    };

    private disposeDialog = (): void=> {
      DialogUtil.disposeContent(HogeDialog.dlgId);
      DialogUtil.disposeArgumen(HogeDialog.dlgId);
    };
  }
}