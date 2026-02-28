const fs = require('fs');
let content = fs.readFileSync('src/pages/Cases.tsx', 'utf8');

// 1. Add hongKongCases array
const hongKongCasesStr = `
  const hongKongCases: CaseDetail[] = [
    {
      title: "大嶼山竹篙灣粵車南下1充電站",
      location: "香港大嶼山竹篙灣",
      desc: "為配合「粵車南下」政策，於大嶼山竹篙灣設立的充電站，提供便捷的充電服務，滿足跨境及本地電動車的充電需求。",
      tags: ["粵車南下", "公共充電", "跨境服務"],
      image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXc_O2qD5m2Kf5t8Z-4FWGmhyOCEkINV4UvK9GT_VTWEg_rzQzvV5xvrcaK43aK_i_IRtKeu4hu9dKDOrvCyWk3kSpXSVB5fjXKBn22PYA8IjuhZxbLnfbynhrg6RmyWYsNpSgIZjI-_w8CsqvglIuAFiA_-Tvc?key=7ewXKUOIU8nU-qIj2J_ImQ",
      category: "公共快充站",
      details: {
        chargingPiles: "9個充電樁",
        energySaving: "支持粵港澳大灣區綠色交通互聯互通",
        feedback: "相關資料: https://news.rthk.hk/rthk/ch/component/k2/1837212-20251223.htm"
      }
    }
  ];
`;

content = content.replace('const internationalCases: CaseDetail[] = [', hongKongCasesStr + '\n  const internationalCases: CaseDetail[] = [');

// 2. Update activeTab type and default value
content = content.replace(
  "const [activeTab, setActiveTab] = useState<'domestic' | 'international'>('domestic');",
  "const [activeTab, setActiveTab] = useState<'domestic' | 'international' | 'hongkong'>('domestic');"
);

// 3. Update displayCases logic
content = content.replace(
  "const displayCases = activeTab === 'domestic' ? domesticCases : internationalCases;",
  "const displayCases = activeTab === 'domestic' ? domesticCases : activeTab === 'international' ? internationalCases : hongKongCases;"
);

// 4. Update Tab Navigation buttons
const oldTabs = `<button
              onClick={() => setActiveTab('domestic')}
              className={\`px-8 py-3 rounded-lg font-medium transition-all \${
                activeTab === 'domestic'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
              }\`}
            >
              國內案例
            </button>
            <button
              onClick={() => setActiveTab('international')}
              className={\`px-8 py-3 rounded-lg font-medium transition-all \${
                activeTab === 'international'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
              }\`}
            >
              國外案例
            </button>`;

const newTabs = `<button
              onClick={() => setActiveTab('domestic')}
              className={\`px-8 py-3 rounded-lg font-medium transition-all \${
                activeTab === 'domestic'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
              }\`}
            >
              國內案例
            </button>
            <button
              onClick={() => setActiveTab('international')}
              className={\`px-8 py-3 rounded-lg font-medium transition-all \${
                activeTab === 'international'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
              }\`}
            >
              國外案例
            </button>
            <button
              onClick={() => setActiveTab('hongkong')}
              className={\`px-8 py-3 rounded-lg font-medium transition-all \${
                activeTab === 'hongkong'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
              }\`}
            >
              香港案例
            </button>`;

content = content.replace(oldTabs, newTabs);

// 5. Update category filter logic
const oldCategoryFilter = `{activeTab === 'domestic' && (
          <div className="flex flex-wrap justify-center gap-4 mb-12">`;
const newCategoryFilter = `{(activeTab === 'domestic' || activeTab === 'hongkong') && (
          <div className="flex flex-wrap justify-center gap-4 mb-12">`;
content = content.replace(oldCategoryFilter, newCategoryFilter);

// 6. Update mapping logic
const oldMapping = `{(activeTab === 'domestic' 
            ? domesticCases.filter(c => activeCategory === '全部' || c.category === activeCategory)
            : internationalCases
          ).map((item, idx) => (`;
const newMapping = `{(activeTab === 'domestic' 
            ? domesticCases.filter(c => activeCategory === '全部' || c.category === activeCategory)
            : activeTab === 'international'
            ? internationalCases
            : hongKongCases.filter(c => activeCategory === '全部' || c.category === activeCategory)
          ).map((item, idx) => (`;
content = content.replace(oldMapping, newMapping);

fs.writeFileSync('src/pages/Cases.tsx', content);
console.log('Update Cases.tsx complete');
