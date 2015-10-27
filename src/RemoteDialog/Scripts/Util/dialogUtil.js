var DialogUtil;
(function (DialogUtil) {
    "use strict";
    /**
     * iframeのID生成
     */
    var getIframeID = function (dialogId) {
        return dialogId + "-ifrm";
    };
    /**
     * ダイアログのフレームになる要素を作成する
     * @param {string} targetElementSelector - ダイアログの用を追加するエレメントのセレクタ）
     * @param {string} dialogId - ダイアログのid（HTML上のid属性）
     */
    DialogUtil.createElement = function (targetElementSelector, dialogId) {
        var eml = "<div id=\"" + dialogId + "\" style=\"display:none;\">" +
            "<iframe src=\"\" id=\"" + getIframeID(dialogId) + "\" style=\"width:100%;height:100%;margin:0;padding:0;border:0;\"></iframe>" +
            "</div>";
        $(targetElementSelector).append(eml);
    };
    /**
     * ダイアログにコンテンツを読み込む
     * @param {string} dialogId - ダイアログのid（HTML上のid属性）
     * @param {string} contentUrl - ダイアログ内に表示するコンテンツのURL
     */
    DialogUtil.loadContent = function (dialogId, contentUrl) {
        var iframe = getIframeID(dialogId);
        $("#" + iframe).attr({ src: contentUrl });
    };
    /**
     * ダイアログのコンテンツを破棄する
     * @param {string} dialogId - ダイアログのid（HTML上のid属性）
     */
    DialogUtil.disposeContent = function (dialogId) {
        $("#" + getIframeID(dialogId)).attr({ src: "about:blank" });
    };
    /**
     * ダイアログに渡す引数をグローバル変数にセットする
     * @param {string} dialogId - ダイアログのid（HTML上のid属性）
     * @param {any} argument - 引数
     */
    function setArgumentFromParent(dialogId, argument) {
        window[dialogId + "-arg"] = argument;
    }
    DialogUtil.setArgumentFromParent = setArgumentFromParent;
    /**
     * ダイアログ用の引数を取得する（コンテンツ型から利用）
     * @param {T} T - ダイアログ引数の型
     * @param {string} dialogId - ダイアログのid（HTML上のid属性）
     * @return {T} 引数
     */
    function getArgumentFromChild(dialogId) {
        return window.parent[dialogId + "-arg"];
    }
    DialogUtil.getArgumentFromChild = getArgumentFromChild;
    /**
     * ダイアログ用の引数をグローバル変数から削除
     * @param {string} dialogId - ダイアログのid（HTML上のid属性）
     */
    function disposeArgumen(dialogId) {
        window.parent[dialogId + "-arg"] = null;
    }
    DialogUtil.disposeArgumen = disposeArgumen;
})(DialogUtil || (DialogUtil = {}));
//# sourceMappingURL=dialogUtil.js.map