cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-google-analytics/www/analytics.js",
        "id": "cordova-plugin-google-analytics.UniversalAnalytics",
        "pluginId": "cordova-plugin-google-analytics",
        "clobbers": [
            "analytics",
            "ga"
        ]
    },
    {
        "file": "plugins/cordova-plugin-google-analytics/browser/UniversalAnalyticsProxy.js",
        "id": "cordova-plugin-google-analytics.UniversalAnalyticsProxy",
        "pluginId": "cordova-plugin-google-analytics",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-google-analytics": "1.8.3"
}
// BOTTOM OF METADATA
});