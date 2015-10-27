var HogeDialog;
(function (HogeDialog) {
    "use strict";
    var Dialog = (function () {
        /**
         * constructor
         */
        function Dialog() {
            var _this = this;
            this.contentUrl = "/HogeDialog/Content"; // ダイアログのコンテンツ本体のURL
            this.dlgSlctr = "#" + HogeDialog.dlgId;
            /**
             * jQuery Dialogのオプション
             */
            this.dialgOption = {
                autoOpen: false,
                modal: true,
                title: "ほげダイアログ",
                width: 400,
                height: 500,
                draggable: true,
                closeOnEscape: false,
                resizable: false,
                close: function () {
                    _this.disposeDialog();
                }
            };
            /**
             * OK時のコールバック処理
             * （iframe内から呼ばれる）
             */
            this.onOk = function (age) {
                _this.okCallback(age);
                _this.closeDialog();
            };
            /**
             * キャンセル時のコールバック処理
             * （iframe内から呼ばれる）
             */
            this.onCancel = function () {
                _this.closeDialog();
            };
            /**
             * iframe内に渡す引数を設定
             */
            this.setDialogArgument = function (name) {
                var arg = {
                    name: name,
                    onOk: _this.onOk,
                    onCancel: _this.onCancel
                };
                DialogUtil.setArgumentFromParent(HogeDialog.dlgId, arg);
            };
            /**
             * ダイアログオープン
             * @param {string} name 引数
             * @param {age: number=> void} okCallback OK時のコールバック関数
             */
            this.openDialog = function (name, okCallback) {
                _this.okCallback = okCallback;
                _this.setDialogArgument(name);
                $(_this.dlgSlctr).dialog("open");
                DialogUtil.loadContent(HogeDialog.dlgId, _this.contentUrl);
            };
            this.closeDialog = function () {
                $(_this.dlgSlctr).dialog("close");
            };
            this.disposeDialog = function () {
                DialogUtil.disposeContent(HogeDialog.dlgId);
                DialogUtil.disposeArgumen(HogeDialog.dlgId);
            };
            DialogUtil.createElement("body", HogeDialog.dlgId);
            $(this.dlgSlctr).dialog(this.dialgOption);
        }
        return Dialog;
    })();
    HogeDialog.Dialog = Dialog;
})(HogeDialog || (HogeDialog = {}));
//# sourceMappingURL=hogeDialog.js.map