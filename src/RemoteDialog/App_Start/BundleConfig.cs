using System.Web;
using System.Web.Optimization;

namespace RemoteDialog
{
  public class BundleConfig
  {
    // バンドルの詳細については、http://go.microsoft.com/fwlink/?LinkId=301862  を参照してください
    public static void RegisterBundles(BundleCollection bundles)
    {
      bundles.Add(new ScriptBundle("~/bundles/baselib").Include(
                  "~/Scripts/jquery-{version}.js",
                  "~/Scripts/jquery-ui-{version}.js",
                  "~/Scripts/knockout-{version}.js"));

      bundles.Add(new ScriptBundle("~/bundles/dialogcommon").Include(
                  "~/Scripts/Util/dialogUtil.js"));
    }
  }
}
