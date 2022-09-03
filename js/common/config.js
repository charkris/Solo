export const config = {
  baseUrl: `https://solo.ge/api/developers/items/common/608aaad7ae3b47ff23daa433?`,
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
    "ფასები",
    "1000 - 1500",
    "1500 - 2000",
    "2000 - 2500",
    "2500 - 3000",
    "3000 - 3500",
    "3500 - 4000",
    "4000 - 4500",
    "4500 - 5000",
    "5000 - 10000",
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

export function generateApi(from, to, city, type, search, sort, skip, limit) {
  return `${config.baseUrl}fromParam=${from}&toParam=${to}&cityParam=${city}&typeParam=${type}&searchStr=${search}&sortBy=${sort}&skip=${skip}&limit=${limit}`;
}
