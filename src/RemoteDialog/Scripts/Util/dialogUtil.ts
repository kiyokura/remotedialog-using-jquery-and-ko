namespace DialogUtil {
  "use strict";

  /**
   * iframeのID生成
   */
  var getIframeID = (dialogId: string): string=> {
    return dialogId + "-ifrm";
  };

  /**
   * ダイアログのフレームになる要素を作成する
   * @param {string} targetElementSelector - ダイアログの用を追加するエレメントのセレクタ）
   * @param {string} dialogId - ダイアログのid（HTML上のid属性）
   */
  export var createElement = (targetElementSelector: string, dialogId: string) => {
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
  export var loadContent = (dialogId: string, contentUrl: string) => {
    var iframe = getIframeID(dialogId);
    $("#" + iframe).attr({ src: contentUrl });
  };

  /**
   * ダイアログのコンテンツを破棄する
   * @param {string} dialogId - ダイアログのid（HTML上のid属性）
   */
  export var disposeContent = (dialogId: string) => {
    $("#" + getIframeID(dialogId)).attr({ src: "about:blank" });
  };

  /**
   * ダイアログに渡す引数をグローバル変数にセットする
   * @param {string} dialogId - ダイアログのid（HTML上のid属性）
   * @param {any} argument - 引数
   */
  export function setArgumentFromParent(dialogId: string, argument: any): void {
    window[dialogId + "-arg"] = argument;
  }

  /**
   * ダイアログ用の引数を取得する（コンテンツ型から利用）
   * @param {T} T - ダイアログ引数の型
   * @param {string} dialogId - ダイアログのid（HTML上のid属性）
   * @return {T} 引数
   */
  export function getArgumentFromChild<T>(dialogId: string): T {
    return <T>window.parent[dialogId + "-arg"];
  }

  /**
   * ダイアログ用の引数をグローバル変数から削除
   * @param {string} dialogId - ダイアログのid（HTML上のid属性）
   */
  export function disposeArgumen(dialogId: string) {
    window.parent[dialogId + "-arg"] = null;
  }

}