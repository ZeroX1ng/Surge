var obj = JSON.parse($response.body);

obj["subscriber"]["entitlements"][0]["expires_date"] = "2099-06-07T19:06:55Z";
obj["subscriber"]["entitlements"][0]["purchase_date"] = "2022-05-24T19:06:55Z";


obj["subscriber"]["subscriptions"][0]["expires_date"] = "2099-06-07T19:06:55Z";
obj["subscriber"]["subscriptions"][0]["original_purchase_date"] = "2022-05-24T19:06:56Z";
obj["subscriber"]["subscriptions"][0]["ownership_type"] = "PURCHASED";
obj["subscriber"]["subscriptions"][0]["period_type"] = "trial";
obj["subscriber"]["subscriptions"][0]["store"] = "app_store";
obj["subscriber"]["subscriptions"][0]["is_sandbox"] = false;
obj["subscriber"]["subscriptions"][0]["billing_issues_detected_at"] = null;
obj["subscriber"]["subscriptions"][0]["grace_period_expires_date"] = null;
obj["subscriber"]["subscriptions"][0]["purchase_date"] = "2022-05-24T19:06:55Z";
obj["subscriber"]["subscriptions"][0]["unsubscribe_detected_at"] = null;

$done({body: JSON.stringify(obj)});