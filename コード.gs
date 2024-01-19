function main() {
  // calculateCommunicationCost(100);
  // calculateInsuranceFee(100);
  // calculateHousingCost(100);
  // calculateUtilityCost(100);
  // calculateAnnualFee(100);
  // calculateVehicleInspectionCost(2000);
  // calculateTuitionFee(290);
  // calculateMedicalBills(100);
}

function getConfig(){
  return {
    spreadSheetId: '1_BNflt5xkyWYbR63GJItqg_2arbuirl9NO0mKbwbE-U',// スプレッドシートの ID
    spreadSheetTabName: 'シート1',// スプレッドシートのタブ名
  };
}

function openSheet() {
  const ss = SpreadsheetApp.openById(config.spreadSheetId); 
  const sheet = ss.getSheetByName(config.spreadSheetTabName); //　シートを指定できる
  return sheet;
}

const config = getConfig();
const sheet = openSheet();

// 品目ごとの合計値
function calcItemTotal(currentValue, inputedValue){
  let itemTotal = parseInt(currentValue,10) + parseInt(inputedValue,10);
  return itemTotal;
}

// 通信費
function calculateCommunicationCost(communicationCost) {

  const communicationExpensesRange = sheet.getRange("C6");
  let inputedCommunicationExpensesValue = communicationExpensesRange.getValue();

  if(inputedCommunicationExpensesValue){
    let communicationCostTotal = calcItemTotal(inputedCommunicationExpensesValue, communicationCost);
    communicationExpensesRange.setValue(communicationCostTotal);
  } else {
    inputedCommunicationExpensesValue = 0;
    let communicationCostTotal = calcItemTotal(inputedCommunicationExpensesValue, communicationCost);
    communicationExpensesRange.setValue(communicationCostTotal);
  }
}

// 保険料
function calculateInsuranceFee(insuranceFee) {

  const insuranceFeeRange = sheet.getRange("C7");
  let insuranceFeeValue = insuranceFeeRange.getValue();

  if (insuranceFeeValue){
    let insuranceFeeTotal = calcItemTotal(insuranceFeeValue, insuranceFee);
    insuranceFeeRange.setValue(insuranceFeeTotal);
  } else {
    insuranceFeeValue = 0;
    let insuranceFeeTotal = calcItemTotal(insuranceFeeValue, insuranceFee);
    insuranceFeeRange.setValue(insuranceFeeTotal);
  }
}

// 住居費
function calculateHousingCost(housingCost){

  const housingCostRange = sheet.getRange("C8");
  let housingCostValue = housingCostRange.getValue();

  if (housingCostValue){
    let housingCostTotal = calcItemTotal(housingCostValue, housingCost);
    housingCostRange.setValue(housingCostTotal);
  } else {
    housingCostValue = 0;
    let housingCostTotal = calcItemTotal(housingCostValue, housingCost);
    housingCostRange.setValue(housingCostTotal);
  }
}

// 水道光熱費
function calculateUtilityCost(utilityCost){

  const utilityCostRange = sheet.getRange("C9");
  let utilityCostValue = utilityCostRange.getValue();

  if (utilityCostValue){
    let housingCostTotal = calcItemTotal(utilityCostValue, utilityCost);
    utilityCostRange.setValue(housingCostTotal);
  } else {
    utilityCostValue = 0;
    let housingCostTotal = calcItemTotal(utilityCostValue, utilityCost);
    utilityCostRange.setValue(housingCostTotal);
  }
}

// 教育費
function calculateEducationCost(educationCost){

  const educationCostRange = sheet.getRange("C10");
  let educationCostValue = educationCostRange.getValue();

  if (educationCostValue){
    let educationCostTotal = calcItemTotal(educationCostValue, educationCost);
    educationCostRange.setValue(educationCostTotal);
  } else {
    educationCostValue = 0;
    let educationCostTotal = calcItemTotal(educationCostValue, educationCost);
    educationCostRange.setValue(educationCostTotal);
  }
}

// サブスク
function calculateSubscriptionCost(subscriptionCost){

  const subscriptionCostRange = sheet.getRange("C11");
  let subscriptionCostValue = subscriptionCostRange.getValue();

  if (subscriptionCostValue){
    let subscriptionCostTotal = calcItemTotal(subscriptionCostValue, subscriptionCost);
    subscriptionCostRange.setValue(subscriptionCostTotal);
  } else {
    subscriptionCostValue = 0;
    let subscriptionCostTotal = calcItemTotal(subscriptionCostValue, subscriptionCost);
    subscriptionCostRange.setValue(subscriptionCostTotal);
  }
}

// 税金
function calculateTaxCost(taxCost) {
  const taxCostRange = sheet.getRange("C15");
  let taxCostValue = taxCostRange.getValue();

  if (taxCostValue){
    let taxCostValueTotal = calcItemTotal(taxCostValue, taxCost);
    taxCostRange.setValue(taxCostValueTotal);
  } else {
    taxCostValue = 0;
    let taxCostValueTotal = calcItemTotal(taxCostValue, taxCost);
    taxCostRange.setValue(taxCostValueTotal);
  }
}

// 社会保険料
function calculateSocialInsurancePremiums(socialInsurancePremiums) {
  const socialInsuranceRange = sheet.getRange("C16");
  let socialInsuranceValue = socialInsuranceRange.getValue();

  if (socialInsuranceValue){
    let socialInsuranceTotal = calcItemTotal(socialInsuranceValue, socialInsurancePremiums);
    socialInsuranceRange.setValue(socialInsuranceTotal);
  } else {
    socialInsuranceValue = 0;
    let socialInsuranceTotal = calcItemTotal(socialInsuranceValue, socialInsurancePremiums);
    socialInsuranceRange.setValue(socialInsuranceTotal);
  }
}

// 火災保険料
function calculateFireInsurancePremium(fireInsurancePremium) {
  const fireInsurancePremiumRange = sheet.getRange("C17");
  let fireInsurancePremiumValue = fireInsurancePremiumRange.getValue();

  if (fireInsurancePremiumValue){
    let fireInsurancePremiumTotal = calcItemTotal(fireInsurancePremiumValue, fireInsurancePremium);
    fireInsurancePremiumRange.setValue(fireInsurancePremiumTotal);
  } else {
    fireInsurancePremiumValue = 0;
    let fireInsurancePremiumTotal = calcItemTotal(fireInsurancePremiumValue, fireInsurancePremium);
    fireInsurancePremiumRange.setValue(fireInsurancePremiumTotal);
  }
}

// 年会費（クレカ）
function calculateAnnualFee(annualFee) {
  const annualFeeRange = sheet.getRange("C18");
  let annualFeeValue = annualFeeRange.getValue();

  if (annualFeeValue){
    let annualFeeValueTotal = calcItemTotal(annualFeeValue, annualFee);
    annualFeeRange.setValue(annualFeeValueTotal);
  } else {
    annualFeeValue = 0;
    let annualFeeValueTotal = calcItemTotal(annualFeeValue, annualFee);
    annualFeeRange.setValue(annualFeeValueTotal);
  }
}

// 車検費用
function calculateVehicleInspectionCost(vehicleInspectionCost) {
  const vehicleInspectionCostRange = sheet.getRange("C19");
  let vehicleInspectionCostValue = vehicleInspectionCostRange.getValue();

  if (vehicleInspectionCostValue){
    let vehicleInspectionCostTotal = calcItemTotal(vehicleInspectionCostValue, vehicleInspectionCost);
    vehicleInspectionCostRange.setValue(vehicleInspectionCostTotal);
  } else {
    vehicleInspectionCostValue = 0;
    let vehicleInspectionCostTotal = calcItemTotal(vehicleInspectionCostValue, vehicleInspectionCost);
    vehicleInspectionCostRange.setValue(vehicleInspectionCostTotal);
  }
}

// 教育費（授業料）
function calculateTuitionFee(tuitionFee) {
  const tuitionFeeRange = sheet.getRange("C20");
  let tuitionFeeValue = tuitionFeeRange.getValue();

  if (tuitionFeeValue){
    let tuitionFeeValueTotal = calcItemTotal(tuitionFeeValue, tuitionFee);
    tuitionFeeRange.setValue(tuitionFeeValueTotal);
  } else {
    tuitionFeeValue = 0;
    let tuitionFeeValueTotal = calcItemTotal(tuitionFeeValue, tuitionFee);
    tuitionFeeRange.setValue(tuitionFeeValueTotal);
  }
}

// 食費
function calculateFoodExpenses(foodExpenses){
  const foodExpensesRange = sheet.getRange("E6");
  let foodExpensesValue = foodExpensesRange.getValue();

  if (foodExpensesValue){
    let foodExpensesValueTotal = calcItemTotal(foodExpensesValue, foodExpenses);
    foodExpensesRange.setValue(foodExpensesValueTotal);
  } else {
    foodExpensesValue = 0;
    let foodExpensesValueTotal = calcItemTotal(foodExpensesValue, foodExpenses);
    foodExpensesRange.setValue(foodExpensesValueTotal);
  }
}

// 日用品費
function calculateDailyNecessitiesCost(dailyNecessitiesCost){
  const dailyNecessitiesCostRange = sheet.getRange("E7");
  let dailyNecessitiesValue = dailyNecessitiesCostRange.getValue();

  if (dailyNecessitiesValue){
    let dailyNecessitiesValueTotal = calcItemTotal(dailyNecessitiesValue, dailyNecessitiesCost);
    dailyNecessitiesCostRange.setValue(dailyNecessitiesValueTotal);
  } else {
    dailyNecessitiesValue = 0;
    let dailyNecessitiesValueTotal = calcItemTotal(dailyNecessitiesValue, dailyNecessitiesCost);
    dailyNecessitiesCostRange.setValue(dailyNecessitiesValueTotal);
  }
}
// 被服費
function calculateClothingExpenses(clothingExpenses){
  const clothingExpensesRange = sheet.getRange("E8");
  let clothingExpensesValue = clothingExpensesRange.getValue();

  if(clothingExpensesValue){
    let clothingExpensesValueTotal = calcItemTotal(clothingExpensesValue, clothingExpenses);
    clothingExpensesRange.setValue(clothingExpensesValueTotal);
  } else {
    clothingExpensesValue = 0;
    let clothingExpensesValueTotal = calcItemTotal(clothingExpensesValue, clothingExpenses);
    clothingExpensesRange.setValue(clothingExpensesValueTotal);
  }
}

// 医療費
function calculateMedicalBills(medicalBills){
  const medicalBillsRange = sheet.getRange("E9");
  let medicalBillsValue = medicalBillsRange.getValue();

  if(medicalBillsValue){
    let medicalBillsValueTotal = calcItemTotal(medicalBillsValue, medicalBills);
    medicalBillsRange.setValue(medicalBillsValueTotal);
  } else {
    medicalBillsValue = 0;
    let medicalBillsValueTotal = calcItemTotal(medicalBillsValue, medicalBills);
    medicalBillsRange.setValue(medicalBillsValueTotal);
  }
}

// 美容費
function calculateBeautyExpenses(beautyExpenses){
  const beautyExpensesRange = sheet.getRange("E10");
  let beautyExpensesValue = beautyExpensesRange.getValue();

  if(beautyExpensesValue){
    let beautyExpensesValueTotal = calcItemTotal(beautyExpensesValue, beautyExpenses);
    beautyExpensesRange.setValue(beautyExpensesValueTotal);
  } else {
    beautyExpensesValue = 0;
    let beautyExpensesValueTotal = calcItemTotal(beautyExpensesValue, beautyExpenses);
    beautyExpensesRange.setValue(beautyExpensesValueTotal);
  }
}

// ガソリン・交通費
function calculatetransportationExpenses(transportationExpenses){
  const transportationExpensesRange = sheet.getRange("E11");
  let transportationExpensesValue = transportationExpensesRange.getValue();

  if(transportationExpensesValue){
    let transportationExpensesValueTotal = calcItemTotal(transportationExpensesValue, transportationExpenses);
    transportationExpensesRange.setValue(transportationExpensesValueTotal);
  } else {
    transportationExpensesValue = 0;
    let transportationExpensesValueTotal = calcItemTotal(transportationExpensesValue, transportationExpenses);
    transportationExpensesRange.setValue(transportationExpensesValueTotal);
  }
}

//　家具家電費
function calculateFurnitureHomeAppliances(furnitureHomeAppliances){
  const furnitureHomeAppliancesRange = sheet.getRange("E15");
  let furnitureHomeAppliancesValue = furnitureHomeAppliancesRange.getValue();

  if(furnitureHomeAppliancesValue){
    let furnitureHomeAppliancesValueTotal = calcItemTotal(furnitureHomeAppliancesValue, furnitureHomeAppliances);
    furnitureHomeAppliancesRange.setValue(furnitureHomeAppliancesValueTotal);

  } else {
    furnitureHomeAppliancesValue = 0;
    let furnitureHomeAppliancesValueTotal = calcItemTotal(furnitureHomeAppliancesValue, furnitureHomeAppliances);
    furnitureHomeAppliancesRange.setValue(furnitureHomeAppliancesValueTotal);
  }

}

// 旅費
function calculateTravelExpenses(travelExpenses){
  const travelExpensesRange = sheet.getRange("E16");
  let travelExpensesValue = travelExpensesRange.getValue();

  if(travelExpensesValue){
    let travelExpensesValueTotal = calcItemTotal(travelExpensesValue, travelExpenses);
    travelExpensesRange.setValue(travelExpensesValueTotal);

  } else {
    travelExpensesValue = 0;
    let travelExpensesValueTotal = calcItemTotal(travelExpensesValue, travelExpenses);
    travelExpensesRange.setValue(travelExpensesValueTotal);
  }
}

// 車購入
function calculateBuyCarCost(boughtCarCost){
  const buyCarCostRange = sheet.getRange("E17");
  let buyCarCostValue = buyCarCostRange.getValue();

  if(buyCarCostValue){
    let buyCarCostValueTotal = calcItemTotal(buyCarCostValue, boughtCarCost);
    buyCarCostRange.setValue(buyCarCostValueTotal);

  } else {
    buyCarCostValue = 0;
    let buyCarCostValueTotal = calcItemTotal(buyCarCostValue, boughtCarCost);
    buyCarCostRange.setValue(buyCarCostValueTotal);
  }
}

// 車諸経費
function calculateCarExtraCost(carExtraCost){
  const carExtraCostRange = sheet.getRange("E18");
  let carExtraCostValue = carExtraCostRange.getValue();

  if(carExtraCostValue){
    let carExtraCostValueTotal = calcItemTotal(carExtraCostValue, carExtraCost);
    carExtraCostRange.setValue(carExtraCostValueTotal);
  } else {
    carExtraCostValue = 0;
    let carExtraCostValueTotal = calcItemTotal(carExtraCostValue, carExtraCost);
    carExtraCostRange.setValue(carExtraCostValueTotal);
  }
}

// 冠婚葬祭
function calculateCeremonialOccasionsCost(ceremonialOccasionsCost){
  const ceremonialOccasionsCostRange = sheet.getRange("E19");
  let ceremonialOccasionsCostValue = ceremonialOccasionsCostRange.getValue();

  if(ceremonialOccasionsCostValue){
    let ceremonialOccasionsCostValueTotal = calcItemTotal(ceremonialOccasionsCostValue, ceremonialOccasionsCost);
    ceremonialOccasionsCostRange.setValue(ceremonialOccasionsCostValueTotal);
  } else {
    ceremonialOccasionsCostValue = 0;
    let ceremonialOccasionsCostValueTotal = calcItemTotal(ceremonialOccasionsCostValue, ceremonialOccasionsCost);
    ceremonialOccasionsCostRange.setValue(ceremonialOccasionsCostValueTotal);
  }
}

// 病気治癒費
function calculateDiseaseHealingFee(diseaseHealingFee){
  const diseaseHealingFeeRange = sheet.getRange("E20");
  let diseaseHealingFeeValue = diseaseHealingFeeRange.getValue();

  if(diseaseHealingFeeValue){
    let calculateDiseaseHealingFeeValueTotal = calcItemTotal(diseaseHealingFeeValue, diseaseHealingFee);
    diseaseHealingFeeRange.setValue(calculateDiseaseHealingFeeValueTotal);
  } else {
    diseaseHealingFeeValue = 0;
    let calculateDiseaseHealingFeeValueTotal = calcItemTotal(diseaseHealingFeeValue, diseaseHealingFee);
    diseaseHealingFeeRange.setValue(calculateDiseaseHealingFeeValueTotal);
  }
}

// 卒業・入学費
function calculateGraduationAdmissionFee(graduationAdmissionFee){
  const graduationAdmissionFeeRange = sheet.getRange("E21");
  let graduationAdmissionFeeValue = graduationAdmissionFeeRange.getValue();

  if(graduationAdmissionFeeValue){
    let graduationAdmissionFeeValueTotal = calcItemTotal(graduationAdmissionFeeValue, graduationAdmissionFee);
    graduationAdmissionFeeRange.setValue(graduationAdmissionFeeValueTotal);
  } else {
    graduationAdmissionFeeValue = 0;
    let graduationAdmissionFeeValueTotal = calcItemTotal(graduationAdmissionFeeValue, graduationAdmissionFee);
    graduationAdmissionFeeRange.setValue(graduationAdmissionFeeValueTotal);
  }
}

// 引越し
function calculateMovingExpenses(movingExpenses){
  const movingExpensesRange = sheet.getRange("E22");
  let movingExpensesValue = movingExpensesRange.getValue();

  if(movingExpensesValue){
    let movingExpensesValueTotal = calcItemTotal(movingExpensesValue, movingExpenses);
    movingExpensesRange.setValue(movingExpensesValueTotal);
  } else {
    movingExpensesValue = 0;
    let movingExpensesValueTotal = calcItemTotal(movingExpensesValue, movingExpenses);
    movingExpensesRange.setValue(movingExpensesValueTotal);
  }
}

//　予備費
function calculateReserveFund(reserveFund){
  const reserveFundRange = sheet.getRange("E23");
  let reserveFundValue = reserveFundRange.getValue();

  if(reserveFundValue){
    let reserveFundValueTotal = calcItemTotal(reserveFundValue, reserveFund);
    reserveFundRange.setValue(reserveFundValueTotal);
  } else {
  reserveFundValue = 0;
  let reserveFundValueTotal = calcItemTotal(reserveFundValue, reserveFund);
    reserveFundRange.setValue(reserveFundValueTotal);
  }
}

//  htmlを表示させる
function doGet() {
  const htmlOutPut = HtmlService.createTemplateFromFile('index').evaluate();
  htmlOutPut.setTitle('リベの家計簿を自動化する').addMetaTag('viewport', 'width=device-width, initial-scale=1'); // スマホ対応
  return htmlOutPut;
}








// 年を取得
function getFullYear(){
  const today = new Date();
  let thisYear = today.getFullYear();
  return thisYear;

}

// 月を取得する
function getMonth(){
  const today = new Date();
  let thisMonth = today.getMonth()+1;
  return thisMonth;
}

// 同一スプレッドシート内でシートをコピーして名前を変更する関数
function sheetCopy() {
  
  // スクリプトに紐付いたスプレッドシートを読み込む　「元」
  let mySpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  
  // アクティブなシートをコピー対象のシートとして読み込む「新しい」
  let copySheet = mySpreadsheet.getActiveSheet();
  
  //コピー対象シートを同一のスプレッドシートにコピー
  let copyedSheet = copySheet.copyTo(mySpreadsheet);

  // そのシート名をリネームする
  copyedSheet.setName(getFullYear() + '年'+ getMonth() +'月〜');

}