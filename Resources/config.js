exports.config = {
    teamId: 'marinos'
    ,hashtag: 'fmarinos'
    ,teamName: '横浜FM'
    ,appName: 'スマートJ for 横浜F・マリノス'
    ,iPhoneAppUrl: 'https://itunes.apple.com/jp/app/id916090897?l=ja&ls=1&mt=8'
    ,androidAppUrl: 'https://play.google.com/store/apps/details?id=smartj.marinos'
    ,color: '#00f'
    ,tintColor: 'white'
    ,dbName: 'smartj.marinos'
    //ニュースのソースURL
    ,feedUrlBase: 'http://sub0000499082.hmk-temp.com/redsmylife/news.json'
    //日程・結果のソースURL
    ,resultsUrl: "http://sub0000499082.hmk-temp.com/redsmylife/results.json?teamId=marinos&season="
    //,resultsUrl: "http://localhost:8080/redsmylife/results.json?teamId=marinos&season="
    //設定、メッセージのソースURL
    ,messageUrl: "http://sub0000499082.hmk-temp.com/redsmylife/config.json?teamId=marinos"
    ,newsEntriesPerPage: 50
    ,googleAnalyticsTrackingId: 'UA-30928840-1'
    //nend(iPhone)
    ,nendSpotIdIPhoneIcon: 1
    ,nendApiKeyIPhoneIcon: '1'
    ,nendSpotIdIPhoneBanner: 231592
    ,nendApiKeyIPhoneBanner: 'ba61bcdfd18cdcc747449020f9942bb8251a2654'
    //nend(Android)
    ,nendSpotIdAndroid: 230792
    ,nendApiKeyAndroid: '97e7a6b519afb811d05e6750d8b134e74ba8b9ea'
};
