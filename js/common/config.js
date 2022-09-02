export let myObject = {
  my_api: `https://solo.ge/api/developers/items/common/608aaad7ae3b47ff23daa433?skip=0&limit=9`,

  upperNavArr: ["ფიზიკური პირი", "ბიზნესი", "Wealth", "შეთავაზებები"],

  lowerNavArr: [
    "მთავარი",
    "ბანკინგი",
    "ელექტრონული ბანკი",
    "Lifestyle",
    "შეთავაზებები დეველოპერებისგან",
    "ჩვენ შესახებ",
    "სიახლეები",
    "ინვესტიციები",
    "ბლოგი",
  ],
  filterCityArr: [
    "თბილისი",
    "ქუთაისი",
    "ბათუმი",
    "ბაკურიანი",
    "გუდაური",
    "აბასთუმანი",
    "მანგლისი",
  ],
  filterPriceArr: [
    [1000, 1500],
    [1500, 2000],
    [2000, 2500],
    [2500, 3000],
    [3000, 3500],
    [3500, 4000],
    [4000, 4500],
    [4500, 5000],
    [5500, 10000],
  ],
  filterBuildingArr: [
    "მწვანე კარკასი",
    "თეთრი კარკასი",
    "შავი კარკასი",
    "გარემონტებული",
    "ლურჯი კარკასი",
    "ჭკვიანი კარკასი",
  ],
};

// fetch('https://solo.ge/api/developers/items/common/608aaad7ae3b47ff23daa433?fromParam=2000&toParam=2500&skip=0&limit=9').then(response => response.json())
//   .then(data => console.log(data));

// https://solo.ge/api/developers/items/common/608aaad7ae3b47ff23daa433?   {searchStr=ok} {&skip=0} {&limit=9}
// searchStr: %E1%83%97%E1%83%91%E1%83%98%E1%83%9A%E1%83%98%E1%83%A1%E1%83%98
// skip: 0
// limit: 9

//https://solo.ge/api/developers/items/common/608aaad7ae3b47ff23daa433?
//searchStr=%E1%83%97%E1%83%91%E1%83%98%E1%83%9A%E1%83%98%E1%83%A1%E1%83%98&skip=0&limit=9

// https://solo.ge/api/developers/items/common/608aaad7ae3b47ff23daa433?
//sortBy=costDesc&skip=0&limit=9

// https://solo.ge/api/developers/items/common/608aaad7ae3b47ff23daa433?
//sortBy=costAsc&skip=0&limit=9
// sortBy: costAsc
// skip: 0
// limit: 9
// sortBy: costDesc
// skip: 0
// limit: 9

//https://solo.ge/api/developers/items/common/608aaad7ae3b47ff23daa433?
//cityParam=%E1%83%97%E1%83%91%E1%83%98%E1%83%9A%E1%83%98%E1%83%A1%E1%83%98&sortBy=costDesc&skip=0&limit=9
//https://solo.ge/api/developers/items/common/608aaad7ae3b47ff23daa433?
//cityParam=%E1%83%97%E1%83%91%E1%83%98%E1%83%9A%E1%83%98%E1%83%A1%E1%83%98&sortBy=costAsc&skip=0&limit=9
//https://solo.ge/api/developers/items/common/608aaad7ae3b47ff23daa433?
//cityParam=%E1%83%97%E1%83%91%E1%83%98%E1%83%9A%E1%83%98%E1%83%A1%E1%83%98%2C%E1%83%A5%E1%83%A3%E1%83%97%E1%83%90%E1%83%98%E1%83%A1%E1%83%98&sortBy=costAsc&skip=0&limit=9

//https://solo.ge/api/developers/items/common/608aaad7ae3b47ff23daa433?
//fromParam=1500&toParam=2000&cityParam=%E1%83%97%E1%83%91%E1%83%98%E1%83%9A%E1%83%98%E1%83%A1%E1%83%98&sortBy=costAsc&skip=0&limit=9

// fromParam: 1500
// toParam: 2000
// cityParam: %E1%83%97%E1%83%91%E1%83%98%E1%83%9A%E1%83%98%E1%83%A1%E1%83%98
// sortBy: costAsc
// skip: 0
// limit: 9

// fromParam: 1500
// toParam: 2000
// cityParam: %E1%83%97%E1%83%91%E1%83%98%E1%83%9A%E1%83%98%E1%83%A1%E1%83%98
// typeParam: %E1%83%97%E1%83%94%E1%83%97%E1%83%A0%E1%83%98+%E1%83%99%E1%83%90%E1%83%A0%E1%83%99%E1%83%90%E1%83%A1%E1%83%98%09
// sortBy: costAsc
// skip: 0
// limit: 9

//https://solo.ge/api/developers/items/common/608aaad7ae3b47ff23daa433?
//fromParam=1500&toParam=2000&
//cityParam=%E1%83%97%E1%83%91%E1%83%98%E1%83%9A%E1%83%98%E1%83%A1%E1%83%98&
//typeParam=%E1%83%97%E1%83%94%E1%83%97%E1%83%A0%E1%83%98+%E1%83%99%E1%83%90%E1%83%A0%E1%83%99%E1%83%90%E1%83%A1%E1%83%98%09&
//sortBy=costAsc&skip=0&limit=9
