
var bonus = {
  url: 'https://cccat.io/user/_checkin.php',
  headers: {
    Cookie: $persistentStore.read("CookieCCCAT"),
  }
};





    $httpClient.post(bonus, async function (error, response, data) {
        if (error) {
            console.log(error);
            $notification.post(title + '签到失败', error, "");
        } else {
            await dataResults('https://cccat.io/user/index.php', JSON.parse(data).msg, title)
        }
    });


function dataResults(url, checkinMsg, title) {
    $httpClient.get(url, function (error, response, data) {
        console.log(data)
        var usedData = data.match(/(>*\s*已用(里程|流量|\s\d.+?%|：))[^B]+/)
        var restData = data.match(/(>*\s*(可用)(里程|流量|\s\d.+?%|：))[^B]+/)
        var deadline = data.match(/(700;">)[^</p>]+/)

        console.log(usedData)
        if (usedData) {
            usedData = usedData[0].match(/\d\S*(K|G|M|T)/)
            restData = restData[0].match(/\d\S*(K|G|M|T)/)
            deadline = deadline[0].replace("700;\">"," ")
            $notification.post(title, checkinMsg, "已用流量：" + usedData[0] + "B" + "\n剩余流量：" + restData[0] + "B" + "\n到期时间: " + deadline);
        } else {
            $notification.post(title + '获取流量信息失败', "", "");
        }
    });
}
