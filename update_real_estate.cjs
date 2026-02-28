const fs = require('fs');
let content = fs.readFileSync('src/pages/Cases.tsx', 'utf8');

// Change category for 四川省九寨溝自然保護區充電站
content = content.replace(
  /(title:\s*"四川省九寨溝自然保護區充電站",[\s\S]*?category:\s*")公共快充站(",)/,
  '$1公共交通$2'
);

// Update domestic cases with exact numbers and better descriptions based on previous context
const updates = {
  "安徽銅陵政府光儲充檢示範站項目": {
    desc: "銅陵市首座「光儲充檢」示範站位於湖東路西側。項目佔地面積約3500㎡，配置8台直流快充、2台液冷超充及24台交流慢充，光伏裝機規模132kWp，儲能206kWh。該項目將光伏發電、儲能、充電、檢測、便民服務融為一體，實現「多站合一」。",
    chargingPiles: "8台直流快充 + 2台液冷超充 + 24台交流慢充"
  },
  "漯河市政集團特來電光儲超充站項目": {
    desc: "漯河市首個集「光伏+儲能+充電+電池檢測」一體的智慧電站正式上線運營。作為省內最大的「光儲充檢」零碳超充站，配置40個充電終端（含4個液冷超充），有利於推動區域電網削峰填谷、多能互補。",
    chargingPiles: "40個充電終端（含4個液冷超充終端）"
  },
  "萍鄉市政中心生態停車場光儲充放項目": {
    desc: "集光伏發電、儲能、充電、放電四大功能為一體的大型光儲充充電站。配置60個具備V2G功能的直流快充終端，具備能量路由、信息交互、負荷管理、電能質量調節、微電網調度等多項功能。",
    chargingPiles: "60個直流快充終端（具備V2G功能）"
  },
  "廈門翔安光儲充檢綠色能源示範站項目": {
    desc: "該場站接軌了未來城市零碳發展的必然趨勢，配置20個配備電池檢測系統的超充終端，打造出「光伏+儲能+超充+放電+電池檢測」五位一體的「零碳城市超充站」。",
    chargingPiles: "20個超充終端（配備電池檢測系統）"
  },
  "台州市民政府光儲充放項目": {
    desc: "台州市首座配置液冷超充終端的充電站，配置12個液冷超充終端及30個快充終端，也是浙江首座規模最大、功能最全、智能化程度最高的光儲充放一體站。",
    chargingPiles: "12個液冷超充終端 + 30個快充終端"
  },
  "溫州高新國控龍灣區微網示範站項目": {
    desc: "應用場景：除常規快充外，該站在特定區域採用最大功率480kW的液冷超充技術，實現了大電流快速充電，最快5分鐘就可以續航300km。場站鋪設分佈式光伏系統、儲能系統，年發電量可達12萬度。",
    chargingPiles: "最大功率480kW液冷超充終端"
  },
  "上海強生漕寶停車場生態復用站": {
    desc: "結合停車場空間進行生態復用，配置多台直流快充終端，為出租車及社會車輛提供高效的充電服務，實現土地資源的最大化利用與綠色升級。",
    chargingPiles: "多台直流快充終端"
  },
  "四川省九寨溝自然保護區充電站": {
    desc: "位於世界自然遺產九寨溝景區，配置環保型直流快充終端，為景區環保車輛及遊客新能源車提供綠色能源補給，保護脆弱的生態環境。",
    chargingPiles: "環保型直流快充終端"
  },
  "成都公交充電網": {
    desc: "構建覆蓋成都市區的公交充電網絡，配置分佈式公交專用充電網絡，實現公交車輛的智能化調度和高效充電，全面助力成都公交電動化。",
    chargingPiles: "分佈式公交專用充電網絡"
  }
};

for (const [title, data] of Object.entries(updates)) {
  const regexDesc = new RegExp(`(title:\\s*"${title}",[\\s\\S]*?desc:\\s*")[^"]*(",)`);
  content = content.replace(regexDesc, `$1${data.desc}$2`);
  
  const regexPiles = new RegExp(`(title:\\s*"${title}",[\\s\\S]*?chargingPiles:\\s*")[^"]*(",)`);
  content = content.replace(regexPiles, `$1${data.chargingPiles}$2`);
}

fs.writeFileSync('src/pages/Cases.tsx', content);
console.log('Update complete');
