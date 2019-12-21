/*
CCCAT get cookie

Surge 4.0 : [Script]
https://cccat.io/user/index.php
http-request https:\/\/\cccat\.io\/user\/index\.php script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/52pojieDailyBonus/Get-Cookie.js

MITM = www.cccat.io
*/
  
    if ($request.headers['Cookie']) {
      var headerWA = $request.headers['Cookie'];
      $persistentStore.write(headerWA, "CookieCCCAT");
      $notification.post("Get Cookie success！🎉", "", "You can disable the HTTP request script")
    }

  $done({})
