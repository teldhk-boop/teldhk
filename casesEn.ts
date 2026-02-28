import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Zap, X, CheckCircle2, Settings } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ProductDetail {
  name: string;
  model: string;
  desc: string;
  image: string;
  imageClassName?: string;
  features: string[];
  specs: Record<string, string>;
}

export default function Products() {
  const { language, t } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(null);

  const productsZh: ProductDetail[] = [
    {
      name: "歐標 80/120/160kW 一體式直流充電機",
      model: "TEC-DC1.0/XX-CCANNXXX",
      desc: "一體式直流充電機集充電控制、通訊功能於一體，為用戶提供安全、可靠、高效的充電服務。超寬輸出電壓範圍滿足特種作業車輛以及所有通用電壓平台車輛充電需求。",
      image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfw7lCEb6dh54_Vrr09K3mw_k7EdWwxrdsiSPotOcwlJNht5qrDq896cGaNTLvQl0cPlOqNMrpJzOfyrxH-jpa8LwF4i6ePifpgi7XsqHtJRzzPUNDcbyFGF-3M0jEj7V4N5d3bJcbHU8mO02Imq4-5N1HBuQ?key=uDW8ifzWpheRosX4nA4uSg",
      features: [
        "高系統效率，高功率因數，節省運營成本",
        "高功率密度，諧波失真低，設備更穩定",
        "具備短路、過流、過壓、過充、防反接等保護功能",
        "獲得CE認證，質量安心可靠",
        "整機防塵、防水、防鹽霧，輕鬆應對嚴苛環境",
        "支持OCPP1.6，智能充電"
      ],
      specs: {
        "功率": "80kW / 120kW / 160kW",
        "電壓範圍": "50Vdc~1000Vdc",
        "最大電流": "200A / 350A",
        "防護等級": "IP54",
        "接口": "CCS2 * 2",
        "尺寸": "800*600*1800mm",
        "重量": "350kg",
        "工作溫度": "-30℃ ~ +50℃",
        "屏幕": "7英吋觸控屏",
        "通訊協議": "OCPP 1.6J",
        "效率": "≥95%",
        "噪聲": "≤65dB"
      }
    },
    {
      name: "歐標+國標 160kW 一體式直流充電機",
      model: "TEC-DC1.0/160CGANN",
      desc: "融合特來電充電管理平台亦或是OCPP充電平台，實現規模化充電運營管理。支持雙槍同時充電，滿足不同標準車輛需求。",
      image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcJZ6e6wOJnfMt2uPs6vnPR0qTceFJP_ot7-CHgxN6h-SLsdNPjoL5EyX8yCG2TUF8ZIonCNWFY3PaRG1W6_ZeRC5fGFoQWfmAl1U5S1Us2Cd-xgZBwyqbiMpsH871h6w93KnqKVf9DwCLciAazJfmunT8coG4?key=uDW8ifzWpheRosX4nA4uSg",
      features: [
        "雙槍配置：GB/T * 1 + CCS2 * 1",
        "實時監控設備狀態，支持遠程重啟，線上故障診斷",
        "刷卡、APP、掃碼、觸控等多種啟動方式",
        "峰值效率 ≥95%",
        "工作溫度 -30℃～50℃"
      ],
      specs: {
        "功率": "160kW",
        "電壓範圍": "50Vdc~1000Vdc",
        "最大電流": "350A",
        "防護等級": "IP54",
        "接口": "GB/T * 1 + CCS2 * 1",
        "尺寸": "800*600*1800mm",
        "重量": "360kg",
        "工作溫度": "-30℃ ~ +50℃",
        "屏幕": "7英吋觸控屏",
        "通訊協議": "OCPP 1.6J / TELD Protocol",
        "效率": "≥95%",
        "噪聲": "≤65dB"
      }
    },
    {
      name: "7kW 交流充電樁",
      model: "AC-7kW-Home",
      desc: "專為家庭及商業停車場設計的交流充電樁，體積小巧，安裝便捷。支持即插即充、刷卡充電、APP預約充電等多種模式。",
      image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXf_SVr-Wzdt7Vet-iimUtK0bdwsTA8Q8K7VmRx5-KN4we-e4mSPhPWU05ZvNUt343OYow-nJGzQNY_qISaMVYYGpdjX1jvBU20e6GLWwT0E6Q1VEjPUCm-xeCW5IcJoSf-qkCdDnKzuV20-RMaEphT1hFiTWXE?key=uDW8ifzWpheRosX4nA4uSg",
      imageClassName: "object-cover object-top scale-125 origin-top mix-blend-multiply",
      features: [
        "體積小巧，節省安裝空間",
        "支持壁掛式與立柱式安裝",
        "具備漏電保護、過壓保護等多重安全防護",
        "支持4G/WiFi聯網，遠程監控"
      ],
      specs: {
        "功率": "7kW",
        "電壓": "220Vac ± 20%",
        "電流": "32A",
        "防護等級": "IP55",
        "接口": "Type 2",
        "尺寸": "350*240*120mm",
        "重量": "5kg",
        "工作溫度": "-30℃ ~ +55℃",
        "通訊方式": "4G / WiFi / Bluetooth",
        "安裝方式": "壁掛式 / 立柱式"
      }
    },
    {
      name: "歐標240kW分體式直流充電機",
      model: "TZKX-DC1000/240-KEX",
      desc: "240kW分體式直流充電機作為群充系統的核心，集充電控制、通訊功能於一體，為用戶提供安全、可靠、高效的充電服務。超寬輸出電壓範圍滿足特種作業車輛以及所有通用電壓平台車輛充電需求。融合特來電充電管理平台亦或是OCPP充電平台，實現規模化充電運營管理。",
      image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXf7IdZJ1GLKRryEwTatyv35nepZK3eLAk7fvZUVbKcqa6hWNwatwIoaJFDemf7dbLJ-P25FZVKd_g3a4TN22J5woV1KRRzynHJPzRrUPA8AWkmkCTvMCMqZXtmwq82n8LAhQEFw2tHhaWyqDKqcRA8ekUZDL1Y?key=uDW8ifzWpheRosX4nA4uSg",
      imageClassName: "object-cover object-center",
      features: [
        "智能功率分配，提高功率利用率",
        "智能終端識別，兼容CCS終端和GBT終端",
        "插拔式模塊化設計，支持遠程升級",
        "快速部署，安裝高效",
        "功率分配單元可本櫃並聯、跨櫃並聯，增容方便，兼容超充終端",
        "超寬電壓輸出，覆蓋所有車型",
        "整機高效輸出，運營成本更低",
        "創新分區過濾，耐候性更強",
        "待機模塊切除，超低待機功耗",
        "智能降噪技術，超靜音更安全"
      ],
      specs: {
        "功率": "240kW",
        "電源制式": "3P+N+PE",
        "輸入電壓": "400Vac±10%",
        "輸出電壓": "50Vdc~1000Vdc",
        "輸出能力": "6路*400A",
        "峰值效率": "≥95%",
        "防護等級": "IP54",
        "尺寸": "1040*720*1835mm",
        "重量": "225kg (淨重)",
        "工作溫度": "-30℃ ~ +50℃",
        "通訊協議": "OCPP 1.6J"
      }
    },
    {
      name: "歐標480kW分體式直流充電機",
      model: "TZKX-DC1000/480-KEX",
      desc: "480kW分體式直流充電機作為群充系統的核心，集充電控制、通訊功能於一體，為用戶提供安全、可靠、高效的充電服務。超寬輸出電壓範圍滿足特種作業車輛以及所有通用電壓平台車輛充電需求。融合特來電充電管理平台亦或是OCPP充電平台，實現規模化充電運營管理。",
      image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcFL898FavsY4HXHZUWZCelS9U7kQRRVPfPYZbNLEqTABv6IILhv7zEwZBt4-NNfGi2Oqp8uuCxtICEyZW3rTdX8bEEcU0kbCumRpvnFnJnd6qgsAeBZzwKDMM97k4qFwOlAbngk-bGKtdwWv0330GLNGg24NE?key=uDW8ifzWpheRosX4nA4uSg",
      features: [
        "智能功率分配，提高功率利用率",
        "智能終端識別，兼容CCS終端和GBT終端",
        "插拔式模塊化設計，支持遠程升級",
        "快速部署，安裝高效",
        "功率分配單元可本櫃並聯、跨櫃並聯，增容方便，兼容超充終端",
        "超寬電壓輸出，覆蓋所有車型",
        "整機高效輸出，運營成本更低",
        "創新分區過濾，耐候性更強",
        "待機模塊切除，超低待機功耗",
        "智能降噪技術，超靜音更安全"
      ],
      specs: {
        "功率": "480kW",
        "電源制式": "3P+N+PE",
        "輸入電壓": "400Vac±10%",
        "輸出電壓": "50Vdc~1000Vdc",
        "輸出能力": "12路*400A",
        "峰值效率": "≥95%",
        "防護等級": "IP54",
        "尺寸": "1440*1040*1835mm",
        "重量": "450kg (淨重)",
        "工作溫度": "-30℃ ~ +50℃",
        "通訊協議": "OCPP 1.6J"
      }
    },
    {
      name: "歐標落地式直流充電終端",
      model: "TZD-1000/200CNCN4 / TZD-1000/200CCCN5",
      desc: "群充系統重要組成部分，為電動汽車提供直流充電接口。最高提供200kW充電功率。友好的人機交互設計，為用戶帶來安全、便捷的快速充電體驗。",
      image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXd1Fv4yYZbyouHom9d-nHOoL8J4JtpRkDzgBSmmaC5c_ZeXhtaRAxJccTLzE_dWn05GkE6bfgzazIa1Eh289jmxp5DP9ZyFCX3SzA5Yw5ajVXKRfWeqMNMMboiI_YwEoOXFfYWYTyyDmFNenipg1wn41FhCvGQ?key=uDW8ifzWpheRosX4nA4uSg",
      features: [
        "外觀精緻，體積小，重量輕，兼容單雙槍",
        "模塊化設計，支持快速部署，安裝更高效",
        "50V~1000V超寬輸出電壓範圍，適應車型廣",
        "複合材料外殼，耐候性強",
        "支持APP、刷卡、POS和觸屏等多種啟動方式",
        "支持OCPP1.6J"
      ],
      specs: {
        "輸出功率": "0kW~250kW / 0kW~200kW",
        "輸出電壓": "50Vdc~1000Vdc",
        "最大電流": "350A / 200A",
        "槍線接口": "CCS2*1 / CCS2*2",
        "槍線長度": "4m / 5m",
        "防護等級": "IP54",
        "顯示屏": "標配 7” LCD 顯示屏",
        "啟動方式": "APP、刷卡、觸屏、POS",
        "尺寸": "363*363*1518mm",
        "重量": "41kg / 56kg (淨重)"
      }
    },
    {
      name: "槍線管理模塊",
      model: "Cable Management Module",
      desc: "專為充電站設計的智能槍線管理系統，有效解決充電槍線拖地、纏繞等問題，提升用戶充電體驗，延長設備使用壽命。採用人體工學設計，輕鬆拉伸與自動回卷。",
      image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfGh3m1ZM5DCGpKMguLQGDKSBJ6lIb1sKEL5kRtUC6-Gab2riRvfw1O-P8CpctLiNYmA_QzGw38_j2qys7D-d1PRrp7UfjY6MpxwW9Wr86KnxUeplzsMAv9P4DlsZpWKIbDercIg4Cgv9F7hr09nHcRjcSwCls?key=uDW8ifzWpheRosX4nA4uSg",
      imageClassName: "object-cover object-center scale-[0.97] mix-blend-multiply contrast-125 brightness-110",
      features: [
        "自動回卷設計，保持場站整潔",
        "減輕用戶提槍重量，提升充電體驗",
        "防止槍線拖地磨損，延長使用壽命",
        "適配多種型號充電樁，安裝簡便",
        "高強度防腐材料，適應戶外惡劣環境"
      ],
      specs: {
        "適用場景": "戶外/室內充電站",
        "材質": "高強度防腐合金/工程塑料",
        "回卷方式": "自動彈簧回卷",
        "適配槍線": "CCS2, GB/T, CHAdeMO",
        "安裝方式": "立柱安裝/頂部安裝",
        "防護等級": "IP54"
      }
    }
  ];

  const productsEn: ProductDetail[] = [
    {
      name: "European Standard 80/120/160kW Integrated DC Charger",
      model: "TEC-DC1.0/XX-CCANNXXX",
      desc: "The integrated DC charger integrates charging control and communication functions to provide users with safe, reliable, and efficient charging services. The ultra-wide output voltage range meets the charging needs of special operation vehicles and all general voltage platform vehicles.",
      image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfw7lCEb6dh54_Vrr09K3mw_k7EdWwxrdsiSPotOcwlJNht5qrDq896cGaNTLvQl0cPlOqNMrpJzOfyrxH-jpa8LwF4i6ePifpgi7XsqHtJRzzPUNDcbyFGF-3M0jEj7V4N5d3bJcbHU8mO02Imq4-5N1HBuQ?key=uDW8ifzWpheRosX4nA4uSg",
      features: [
        "High system efficiency, high power factor, saving operating costs",
        "High power density, low harmonic distortion, more stable equipment",
        "With short circuit, overcurrent, overvoltage, overcharge, anti-reverse connection and other protection functions",
        "Obtained CE certification, reliable quality",
        "Dustproof, waterproof, salt spray proof, easily cope with harsh environments",
        "Supports OCPP1.6, smart charging"
      ],
      specs: {
        "Power": "80kW / 120kW / 160kW",
        "Voltage Range": "50Vdc~1000Vdc",
        "Max Current": "200A / 350A",
        "Protection Level": "IP54",
        "Interface": "CCS2 * 2",
        "Size": "800*600*1800mm",
        "Weight": "350kg",
        "Working Temp": "-30℃ ~ +50℃",
        "Screen": "7-inch touch screen",
        "Protocol": "OCPP 1.6J",
        "Efficiency": "≥95%",
        "Noise": "≤65dB"
      }
    },
    {
      name: "European + National Standard 160kW Integrated DC Charger",
      model: "TEC-DC1.0/160CGANN",
      desc: "Integrates with TELD charging management platform or OCPP charging platform to achieve large-scale charging operation management. Supports dual-gun simultaneous charging to meet the needs of vehicles with different standards.",
      image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcJZ6e6wOJnfMt2uPs6vnPR0qTceFJP_ot7-CHgxN6h-SLsdNPjoL5EyX8yCG2TUF8ZIonCNWFY3PaRG1W6_ZeRC5fGFoQWfmAl1U5S1Us2Cd-xgZBwyqbiMpsH871h6w93KnqKVf9DwCLciAazJfmunT8coG4?key=uDW8ifzWpheRosX4nA4uSg",
      features: [
        "Dual gun configuration: GB/T * 1 + CCS2 * 1",
        "Real-time monitoring of equipment status, supporting remote restart, online fault diagnosis",
        "Card swiping, APP, QR code scanning, touch and other startup methods",
        "Peak efficiency ≥95%",
        "Working temperature -30℃～50℃"
      ],
      specs: {
        "Power": "160kW",
        "Voltage Range": "50Vdc~1000Vdc",
        "Max Current": "350A",
        "Protection Level": "IP54",
        "Interface": "GB/T * 1 + CCS2 * 1",
        "Size": "800*600*1800mm",
        "Weight": "360kg",
        "Working Temp": "-30℃ ~ +50℃",
        "Screen": "7-inch touch screen",
        "Protocol": "OCPP 1.6J / TELD Protocol",
        "Efficiency": "≥95%",
        "Noise": "≤65dB"
      }
    },
    {
      name: "7kW AC Charging Pile",
      model: "AC-7kW-Home",
      desc: "AC charging pile specially designed for home and commercial parking lots, compact in size and easy to install. Supports plug-and-play, card swiping charging, APP appointment charging and other modes.",
      image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXf_SVr-Wzdt7Vet-iimUtK0bdwsTA8Q8K7VmRx5-KN4we-e4mSPhPWU05ZvNUt343OYow-nJGzQNY_qISaMVYYGpdjX1jvBU20e6GLWwT0E6Q1VEjPUCm-xeCW5IcJoSf-qkCdDnKzuV20-RMaEphT1hFiTWXE?key=uDW8ifzWpheRosX4nA4uSg",
      imageClassName: "object-cover object-top scale-125 origin-top mix-blend-multiply",
      features: [
        "Compact size, saves installation space",
        "Supports wall-mounted and column-mounted installation",
        "With leakage protection, overvoltage protection and other multiple safety protections",
        "Supports 4G/WiFi networking, remote monitoring"
      ],
      specs: {
        "Power": "7kW",
        "Voltage": "220Vac ± 20%",
        "Current": "32A",
        "Protection Level": "IP55",
        "Interface": "Type 2",
        "Size": "350*240*120mm",
        "Weight": "5kg",
        "Working Temp": "-30℃ ~ +55℃",
        "Communication": "4G / WiFi / Bluetooth",
        "Installation": "Wall-mounted / Column-mounted"
      }
    },
    {
      name: "European Standard 240kW Split DC Charger",
      model: "TZKX-DC1000/240-KEX",
      desc: "As the core of the group charging system, the 240kW split DC charger integrates charging control and communication functions to provide users with safe, reliable, and efficient charging services. The ultra-wide output voltage range meets the charging needs of special operation vehicles and all general voltage platform vehicles. Integrates with TELD charging management platform or OCPP charging platform to achieve large-scale charging operation management.",
      image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXf7IdZJ1GLKRryEwTatyv35nepZK3eLAk7fvZUVbKcqa6hWNwatwIoaJFDemf7dbLJ-P25FZVKd_g3a4TN22J5woV1KRRzynHJPzRrUPA8AWkmkCTvMCMqZXtmwq82n8LAhQEFw2tHhaWyqDKqcRA8ekUZDL1Y?key=uDW8ifzWpheRosX4nA4uSg",
      imageClassName: "object-cover object-center",
      features: [
        "Intelligent power allocation, improving power utilization",
        "Intelligent terminal identification, compatible with CCS and GBT terminals",
        "Pluggable modular design, supporting remote upgrade",
        "Fast deployment, efficient installation",
        "Power allocation unit can be paralleled in the same cabinet or across cabinets, easy to increase capacity, compatible with super charging terminals",
        "Ultra-wide voltage output, covering all vehicle models",
        "High efficiency output of the whole machine, lower operating costs",
        "Innovative partition filtering, stronger weather resistance",
        "Standby module cut-off, ultra-low standby power consumption",
        "Intelligent noise reduction technology, ultra-quiet and safer"
      ],
      specs: {
        "Power": "240kW",
        "Power System": "3P+N+PE",
        "Input Voltage": "400Vac±10%",
        "Output Voltage": "50Vdc~1000Vdc",
        "Output Capacity": "6 channels * 400A",
        "Peak Efficiency": "≥95%",
        "Protection Level": "IP54",
        "Size": "1040*720*1835mm",
        "Weight": "225kg (net weight)",
        "Working Temp": "-30℃ ~ +50℃",
        "Protocol": "OCPP 1.6J"
      }
    },
    {
      name: "European Standard 480kW Split DC Charger",
      model: "TZKX-DC1000/480-KEX",
      desc: "As the core of the group charging system, the 480kW split DC charger integrates charging control and communication functions to provide users with safe, reliable, and efficient charging services. The ultra-wide output voltage range meets the charging needs of special operation vehicles and all general voltage platform vehicles. Integrates with TELD charging management platform or OCPP charging platform to achieve large-scale charging operation management.",
      image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcFL898FavsY4HXHZUWZCelS9U7kQRRVPfPYZbNLEqTABv6IILhv7zEwZBt4-NNfGi2Oqp8uuCxtICEyZW3rTdX8bEEcU0kbCumRpvnFnJnd6qgsAeBZzwKDMM97k4qFwOlAbngk-bGKtdwWv0330GLNGg24NE?key=uDW8ifzWpheRosX4nA4uSg",
      features: [
        "Intelligent power allocation, improving power utilization",
        "Intelligent terminal identification, compatible with CCS and GBT terminals",
        "Pluggable modular design, supporting remote upgrade",
        "Fast deployment, efficient installation",
        "Power allocation unit can be paralleled in the same cabinet or across cabinets, easy to increase capacity, compatible with super charging terminals",
        "Ultra-wide voltage output, covering all vehicle models",
        "High efficiency output of the whole machine, lower operating costs",
        "Innovative partition filtering, stronger weather resistance",
        "Standby module cut-off, ultra-low standby power consumption",
        "Intelligent noise reduction technology, ultra-quiet and safer"
      ],
      specs: {
        "Power": "480kW",
        "Power System": "3P+N+PE",
        "Input Voltage": "400Vac±10%",
        "Output Voltage": "50Vdc~1000Vdc",
        "Output Capacity": "12 channels * 400A",
        "Peak Efficiency": "≥95%",
        "Protection Level": "IP54",
        "Size": "1440*1040*1835mm",
        "Weight": "450kg (net weight)",
        "Working Temp": "-30℃ ~ +50℃",
        "Protocol": "OCPP 1.6J"
      }
    },
    {
      name: "European Standard Floor-standing DC Charging Terminal",
      model: "TZD-1000/200CNCN4 / TZD-1000/200CCCN5",
      desc: "An important part of the group charging system, providing a DC charging interface for electric vehicles. Provides up to 200kW charging power. Friendly human-machine interaction design brings users a safe and convenient fast charging experience.",
      image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXd1Fv4yYZbyouHom9d-nHOoL8J4JtpRkDzgBSmmaC5c_ZeXhtaRAxJccTLzE_dWn05GkE6bfgzazIa1Eh289jmxp5DP9ZyFCX3SzA5Yw5ajVXKRfWeqMNMMboiI_YwEoOXFfYWYTyyDmFNenipg1wn41FhCvGQ?key=uDW8ifzWpheRosX4nA4uSg",
      features: [
        "Exquisite appearance, small size, light weight, compatible with single and double guns",
        "Modular design, supporting fast deployment, more efficient installation",
        "50V~1000V ultra-wide output voltage range, adapting to a wide range of vehicle models",
        "Composite material shell, strong weather resistance",
        "Supports APP, card swiping, POS and touch screen and other startup methods",
        "Supports OCPP1.6J"
      ],
      specs: {
        "Output Power": "0kW~250kW / 0kW~200kW",
        "Output Voltage": "50Vdc~1000Vdc",
        "Max Current": "350A / 200A",
        "Gun Interface": "CCS2*1 / CCS2*2",
        "Gun Length": "4m / 5m",
        "Protection Level": "IP54",
        "Display": "Standard 7” LCD display",
        "Startup Method": "APP, card swiping, touch screen, POS",
        "Size": "363*363*1518mm",
        "Weight": "41kg / 56kg (net weight)"
      }
    },
    {
      name: "Cable Management Module",
      model: "Cable Management Module",
      desc: "Intelligent cable management system specially designed for charging stations, effectively solving problems such as charging cable dragging and tangling, improving user charging experience and extending equipment service life. Adopts ergonomic design, easy to stretch and automatically retract.",
      image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfGh3m1ZM5DCGpKMguLQGDKSBJ6lIb1sKEL5kRtUC6-Gab2riRvfw1O-P8CpctLiNYmA_QzGw38_j2qys7D-d1PRrp7UfjY6MpxwW9Wr86KnxUeplzsMAv9P4DlsZpWKIbDercIg4Cgv9F7hr09nHcRjcSwCls?key=uDW8ifzWpheRosX4nA4uSg",
      imageClassName: "object-contain object-center scale-[0.97] mix-blend-multiply contrast-125 brightness-110",
      features: [
        "Automatic retraction design, keeping the station tidy",
        "Reduces the weight of the user lifting the gun, improving the charging experience",
        "Prevents the cable from dragging and wearing, extending the service life",
        "Adapts to various models of charging piles, easy to install",
        "High-strength anti-corrosion materials, adapting to harsh outdoor environments"
      ],
      specs: {
        "Applicable Scene": "Outdoor/indoor charging stations",
        "Material": "High-strength anti-corrosion alloy/engineering plastic",
        "Retraction Method": "Automatic spring retraction",
        "Adapted Cable": "CCS2, GB/T, CHAdeMO",
        "Installation Method": "Column installation/top installation",
        "Protection Level": "IP54"
      }
    }
  ];

  const products = language === 'zh' ? productsZh : productsEn;

  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">{t('nav.products')}</h1>
          <p className="text-xl text-slate-600">
            {language === 'zh' ? '特來電提供全系列充電產品，滿足不同場景需求' : 'TELD provides a full range of charging products to meet the needs of different scenarios'}
          </p>
        </div>

        <div className="grid gap-12">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-200"
            >
              <div className="grid md:grid-cols-3 gap-8 p-8">
                <div className="md:col-span-1 bg-white rounded-xl overflow-hidden min-h-[300px] relative group flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className={`absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105 ${product.imageClassName || 'object-cover'}`}
                    style={{ imageRendering: 'high-quality' }}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
                </div>
                
                <div className="md:col-span-2 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">{product.name}</h2>
                  <p className="text-sm text-slate-500 mb-4 font-mono">{product.model}</p>
                  <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3">
                    {product.desc}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        {language === 'zh' ? '功能特點' : 'Features'}
                      </h3>
                      <ul className="space-y-2">
                        {product.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                            <span className="text-blue-400 mt-1">•</span>
                            {feature}
                          </li>
                        ))}
                        {product.features.length > 3 && (
                          <li className="text-sm text-slate-400 pl-4">{language === 'zh' ? '...更多特點' : '...more features'}</li>
                        )}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        {language === 'zh' ? '核心參數' : 'Core Specs'}
                      </h3>
                      <div className="bg-slate-50 rounded-lg p-4 space-y-2">
                        {Object.entries(product.specs).slice(0, 3).map(([key, value]) => (
                          <div key={key} className="flex justify-between text-sm border-b border-slate-200 last:border-0 pb-2 last:pb-0 gap-4">
                            <span className="text-slate-500 capitalize shrink-0">{key}:</span>
                            <span className="font-medium text-slate-900 text-right">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto pt-6 border-t border-slate-100">
                    <button 
                      onClick={() => setSelectedProduct(product)}
                      className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-slate-50 px-6 py-2.5 font-medium text-slate-700 transition-all hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/20 w-full"
                    >
                      <span className="absolute right-0 flex h-full w-12 translate-x-full items-center justify-center bg-blue-700 transition-all duration-300 group-hover:translate-x-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                      <span className="transition-all duration-300 group-hover:-translate-x-4">{language === 'zh' ? '查看詳情' : 'View Details'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Product Detail Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProduct(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
              >
                <div className="p-8 md:p-10 bg-white relative">
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="absolute top-6 right-6 p-2 hover:bg-slate-100 text-slate-400 hover:text-slate-600 rounded-full transition-colors"
                  >
                    <X size={24} />
                  </button>

                  <div className="mb-8">
                      <h2 className="text-3xl font-bold text-slate-900 mb-2">{selectedProduct.name}</h2>
                      <p className="text-slate-600 leading-relaxed text-lg">
                        {selectedProduct.desc}
                      </p>
                    </div>

                    <div className="space-y-8">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                          <CheckCircle2 className="text-blue-600" size={20} />
                          {language === 'zh' ? '功能特點' : 'Features'}
                        </h3>
                        <ul className="grid gap-3">
                          {selectedProduct.features.map((feature, i) => (
                            <li key={i} className="text-slate-600 flex items-start gap-3 bg-slate-50 p-3 rounded-lg">
                              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                          <Settings className="text-slate-600" size={20} />
                          {language === 'zh' ? '技術參數' : 'Technical Specs'}
                        </h3>
                        <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                          <div className="grid gap-4">
                            {Object.entries(selectedProduct.specs).map(([key, value]) => (
                              <div key={key} className="flex justify-between items-center border-b border-slate-200 last:border-0 pb-3 last:pb-0 gap-4">
                                <span className="text-slate-500 font-medium shrink-0">{key}</span>
                                <span className="text-slate-900 font-semibold text-right">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
