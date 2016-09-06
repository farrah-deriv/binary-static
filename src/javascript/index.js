// TODO: to be remove after webpack finalized
var exportAllFunctions = function exportAllFunctions(obj) {
    for ( var key in obj ) {
        if ( obj.hasOwnProperty(key) ) {
            window[key] = obj[key];
        }
    }
};

window.$ = window.jQuery = require('jquery');
window.EnjoyHint = require('./lib/guide.enjoyhint.js');
require('./lib/highstock/highstock.js');
require('./lib/highstock/highstock-exporting.js');
require('./lib/highstock/export-csv.js');
window.moment = require('./lib/moment/moment');
require('./lib/mmenu/jquery.mmenu.min.all.js');
require('./lib/jquery-ui-timepicker/jquery.ui.timepicker.js');
exportAllFunctions(require('./lib/done-typing'));
exportAllFunctions(require('./lib/form-to-obj'));
require('event-source-polyfill');
require('./lib/jQuery.XDomainRequest.js');
require('./lib/jquery-scrollto-1.4.3.1-min.js');
require('./lib/jquery-ui.js');
require('./lib/jquery.sparkline.js');
window.Cookies = require('./lib/js-cookie.js');
exportAllFunctions(require('./lib/loadCSS'));
exportAllFunctions(require('./lib/loadJS'));
window.pjax = require('./lib/pjax-lib.js');
window.ResizeSensor = require('./lib/resize-sensor.js');
window.dv = require('./lib/validation.js');

require('./binary/components/trackjs_onerror');
exportAllFunctions(require('./autogenerated/texts'));

exportAllFunctions(require('./binary/components/time_picker'));
exportAllFunctions(require('./binary/components/date_picker'));
exportAllFunctions(require('./binary/components/date_picker/selected_dates'));

exportAllFunctions(require('./binary/base/logged_in'));
exportAllFunctions(require('./binary/base/login'));
exportAllFunctions(require('./binary/base/menu_content'));
exportAllFunctions(require('./binary/base/onerror'));

exportAllFunctions(require('./binary/base/utility'));
exportAllFunctions(require('./binary/base/storage'));
exportAllFunctions(require('./binary/base/page'));
exportAllFunctions(require('./binary/base/pjax'));
exportAllFunctions(require('./binary/static_pages/endpoint'));
exportAllFunctions(require('./binary/common_functions/traffic_source'));

exportAllFunctions(require('./binary_japan/knowledge_test/knowledge_test.data.js'));
exportAllFunctions(require('./binary_japan/knowledge_test/knowledge_test.init.js'));
exportAllFunctions(require('./binary_japan/knowledge_test/knowledge_test.ui.js'));
exportAllFunctions(require('./binary_japan/trade_japan/JPTradePage.js'));
exportAllFunctions(require('./binary_japan/trade_japan/portfolio.js'));
exportAllFunctions(require('./binary_japan/trade_japan/pricing_details.js'));
exportAllFunctions(require('./binary/common_functions/active_symbols'));
exportAllFunctions(require('./binary/common_functions/attach_dom/button'));
exportAllFunctions(require('./binary/common_functions/attach_dom/flextable'));
exportAllFunctions(require('./binary/common_functions/attach_dom/password_strength_meter'));
exportAllFunctions(require('./binary/common_functions/attach_dom/table'));
exportAllFunctions(require('./binary/common_functions/common_data'));
exportAllFunctions(require('./binary/common_functions/currency_to_symbol'));
exportAllFunctions(require('./binary/common_functions/event_handler'));
exportAllFunctions(require('./binary/common_functions/frontend'));
exportAllFunctions(require('./binary/common_functions/get_app_details'));
exportAllFunctions(require('./binary/common_functions/guide'));
exportAllFunctions(require('./binary/common_functions/passwordmeter'));
exportAllFunctions(require('./binary/common_functions/risk_classification'));
exportAllFunctions(require('./binary/common_functions/session_duration_limit'));
exportAllFunctions(require('./binary/common_functions/valid_account_opening'));
exportAllFunctions(require('./binary/common_functions/validation'));
exportAllFunctions(require('./binary/common_functions/validation_v2'));
exportAllFunctions(require('./binary/static_pages/get_started_jp'));
exportAllFunctions(require('./binary/static_pages/job_details'));
exportAllFunctions(require('./binary/static_pages/platforms'));

exportAllFunctions(require('./binary/websocket_pages/trade/content'));
exportAllFunctions(require('./binary/websocket_pages/user/verify_email'));
exportAllFunctions(require('./binary/static_pages/static_pjax'));

exportAllFunctions(require('./binary/validator'));
exportAllFunctions(require('./binary/websocket_pages/cashier/account_transferws'));
exportAllFunctions(require('./binary/websocket_pages/cashier/cashier'));
exportAllFunctions(require('./binary/websocket_pages/cashier/deposit_withdraw_ws'));
exportAllFunctions(require('./binary/websocket_pages/cashier/payment_agent_listws'));
exportAllFunctions(require('./binary/websocket_pages/cashier/payment_agent_withdrawws'));
exportAllFunctions(require('./binary/websocket_pages/resources/asset_index/asset_indexws.data'));
exportAllFunctions(require('./binary/websocket_pages/resources/asset_index/asset_indexws.ui'));
exportAllFunctions(require('./binary/websocket_pages/resources/asset_indexws'));
exportAllFunctions(require('./binary/websocket_pages/resources/market_times/market_timesws.data'));
exportAllFunctions(require('./binary/websocket_pages/resources/market_times/market_timesws.ui'));
exportAllFunctions(require('./binary/websocket_pages/resources/market_timesws'));
exportAllFunctions(require('./binary/websocket_pages/socket'));
exportAllFunctions(require('./binary/websocket_pages/trade/analysis'));
exportAllFunctions(require('./binary/websocket_pages/trade/barriers'));
exportAllFunctions(require('./binary/websocket_pages/trade/charts/digit_infows'));
exportAllFunctions(require('./binary/websocket_pages/trade/charts/highchartws'));
exportAllFunctions(require('./binary/websocket_pages/trade/common'));
exportAllFunctions(require('./binary/websocket_pages/trade/contract'));
exportAllFunctions(require('./binary/websocket_pages/trade/currency'));
exportAllFunctions(require('./binary/websocket_pages/trade/defaults'));
exportAllFunctions(require('./binary/websocket_pages/trade/duration'));
exportAllFunctions(require('./binary/websocket_pages/trade/event'));
exportAllFunctions(require('./binary/websocket_pages/trade/message'));
exportAllFunctions(require('./binary/websocket_pages/trade/price'));
exportAllFunctions(require('./binary/websocket_pages/trade/process'));
exportAllFunctions(require('./binary/websocket_pages/trade/purchase'));
exportAllFunctions(require('./binary/websocket_pages/trade/starttime'));
exportAllFunctions(require('./binary/websocket_pages/trade/symbols'));
exportAllFunctions(require('./binary/websocket_pages/trade/tick'));
exportAllFunctions(require('./binary/websocket_pages/trade/tick_trade'));
exportAllFunctions(require('./binary/websocket_pages/trade/tradepage'));
exportAllFunctions(require('./binary/websocket_pages/trade/beta/analysis'));
exportAllFunctions(require('./binary/websocket_pages/trade/beta/barriers'));
exportAllFunctions(require('./binary/websocket_pages/trade/beta/charts/digit_infows'));
exportAllFunctions(require('./binary/websocket_pages/trade/beta/contract'));
exportAllFunctions(require('./binary/websocket_pages/trade/beta/duration'));
exportAllFunctions(require('./binary/websocket_pages/trade/beta/event'));
exportAllFunctions(require('./binary/websocket_pages/trade/beta/message'));
exportAllFunctions(require('./binary/websocket_pages/trade/beta/price'));
exportAllFunctions(require('./binary/websocket_pages/trade/beta/process'));
exportAllFunctions(require('./binary/websocket_pages/trade/beta/purchase'));
exportAllFunctions(require('./binary/websocket_pages/trade/beta/starttime'));
exportAllFunctions(require('./binary/websocket_pages/trade/beta/tick_trade'));
exportAllFunctions(require('./binary/websocket_pages/trade/beta/tradepage'));
exportAllFunctions(require('./binary/websocket_pages/user/account/authenticate'));
exportAllFunctions(require('./binary/websocket_pages/user/account/change_password'));
exportAllFunctions(require('./binary/websocket_pages/user/account/payment_agent_transfer/payment_agent_transfer.data'));
exportAllFunctions(require('./binary/websocket_pages/user/account/payment_agent_transfer/payment_agent_transfer.init'));
exportAllFunctions(require('./binary/websocket_pages/user/account/payment_agent_transfer/payment_agent_transfer.ui'));
exportAllFunctions(require('./binary/websocket_pages/user/account/payment_agent_transfer'));
exportAllFunctions(require('./binary/websocket_pages/user/account/portfolio/portfolio.init'));
exportAllFunctions(require('./binary/websocket_pages/user/account/portfolio'));
exportAllFunctions(require('./binary/websocket_pages/user/account/profit_table/profit_table.data'));
exportAllFunctions(require('./binary/websocket_pages/user/account/profit_table/profit_table.init'));
exportAllFunctions(require('./binary/websocket_pages/user/account/profit_table/profit_table.ui'));
exportAllFunctions(require('./binary/websocket_pages/user/account/profit_table'));
exportAllFunctions(require('./binary/websocket_pages/user/account/settings/api_token'));
exportAllFunctions(require('./binary/websocket_pages/user/account/settings/authorised_apps/authorised_apps.data'));
exportAllFunctions(require('./binary/websocket_pages/user/account/settings/authorised_apps/authorised_apps.init'));
exportAllFunctions(require('./binary/websocket_pages/user/account/settings/authorised_apps/authorised_apps.ui'));
exportAllFunctions(require('./binary/websocket_pages/user/account/settings/authorised_apps'));
exportAllFunctions(require('./binary/websocket_pages/user/account/settings/financial_assessment'));
exportAllFunctions(require('./binary/websocket_pages/user/account/settings/iphistory/iphistory.data'));
exportAllFunctions(require('./binary/websocket_pages/user/account/settings/iphistory/iphistory.init'));
exportAllFunctions(require('./binary/websocket_pages/user/account/settings/iphistory/iphistory.ui'));
exportAllFunctions(require('./binary/websocket_pages/user/account/settings/iphistory'));
exportAllFunctions(require('./binary/websocket_pages/user/account/settings/limits/limits.init'));
exportAllFunctions(require('./binary/websocket_pages/user/account/settings/limits/limits.ui'));
exportAllFunctions(require('./binary/websocket_pages/user/account/settings/limits'));
exportAllFunctions(require('./binary/websocket_pages/user/account/settings/self_exclusion'));
exportAllFunctions(require('./binary/websocket_pages/user/account/settings/settings_detailsws'));
exportAllFunctions(require('./binary/websocket_pages/user/account/settings/settings_securityws'));
exportAllFunctions(require('./binary/websocket_pages/user/account/settings'));
exportAllFunctions(require('./binary/websocket_pages/user/account/statement/statement.data'));
exportAllFunctions(require('./binary/websocket_pages/user/account/statement/statement.init'));
exportAllFunctions(require('./binary/websocket_pages/user/account/statement/statement.ui'));

exportAllFunctions(require('./binary/common_functions/string_util'));
exportAllFunctions(require('./binary/websocket_pages/user/account/statement'));

exportAllFunctions(require('./binary/websocket_pages/user/account/top_up_virtualws'));
exportAllFunctions(require('./binary/websocket_pages/user/lost_password/lost_password.init'));
exportAllFunctions(require('./binary/websocket_pages/user/lost_password'));
exportAllFunctions(require('./binary/websocket_pages/user/new_account/financial_acc_opening/financial_acc_opening.data'));
exportAllFunctions(require('./binary/websocket_pages/user/new_account/financial_acc_opening/financial_acc_opening.ui'));
exportAllFunctions(require('./binary/websocket_pages/user/new_account/financial_acc_opening'));
exportAllFunctions(require('./binary/websocket_pages/user/new_account/japan_acc_opening/japan_acc_opening.data'));
exportAllFunctions(require('./binary/websocket_pages/user/new_account/japan_acc_opening/japan_acc_opening.ui'));
exportAllFunctions(require('./binary/websocket_pages/user/new_account/japan_acc_opening'));
exportAllFunctions(require('./binary/websocket_pages/user/new_account/real_acc_opening/real_acc_opening.data'));
exportAllFunctions(require('./binary/websocket_pages/user/new_account/real_acc_opening/real_acc_opening.ui'));
exportAllFunctions(require('./binary/websocket_pages/user/new_account/real_acc_opening'));
exportAllFunctions(require('./binary/websocket_pages/user/new_account/virtual_acc_opening/virtual_acc_opening.data'));
exportAllFunctions(require('./binary/websocket_pages/user/new_account/virtual_acc_opening'));
exportAllFunctions(require('./binary/websocket_pages/user/reality_check/reality_check.data'));
exportAllFunctions(require('./binary/websocket_pages/user/reality_check/reality_check.init'));
exportAllFunctions(require('./binary/websocket_pages/user/reality_check/reality_check.ui'));
exportAllFunctions(require('./binary/websocket_pages/user/reset_password/reset_password.init'));
exportAllFunctions(require('./binary/websocket_pages/user/reset_password'));
exportAllFunctions(require('./binary/websocket_pages/user/tnc_approval'));
exportAllFunctions(require('./binary/websocket_pages/user/view_popup/view_popup_ui'));
exportAllFunctions(require('./binary/websocket_pages/user/view_popup/view_popupws'));
exportAllFunctions(require('./binary/websocket_pages/user/viewbalance/viewbalance.init'));
exportAllFunctions(require('./binary/websocket_pages/user/viewbalance/viewbalance.ui'));
exportAllFunctions(require('./binary/websocket_pages/websocket_pjax'));
exportAllFunctions(require('./binary_japan/knowledge_test/knowledge_test.data'));
exportAllFunctions(require('./binary_japan/knowledge_test/knowledge_test.init'));
exportAllFunctions(require('./binary_japan/knowledge_test/knowledge_test.ui'));
exportAllFunctions(require('./binary_japan/knowledge_test'));
exportAllFunctions(require('./binary_japan/trade_japan/JPTradePage'));
exportAllFunctions(require('./binary_japan/trade_japan/portfolio'));
exportAllFunctions(require('./binary_japan/trade_japan/pricing_details'));
exportAllFunctions(require('./config'));
