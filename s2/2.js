const basePriceSizeS = 35000;
const extraPriceSizeM = 6000;
const extraPriceSizeL = 10000;
const toppingPrice = 8000;

const orderSizes = "MLXSM";
const toppingCount = 2;
const isGoldMember = true;

let totalDrinkAmount = 0;

for (let orderIndex = 0; orderIndex < orderSizes.length; orderIndex++) {
  const currentDrinkSize = orderSizes[orderIndex];

  if (currentDrinkSize === "X") {
    continue;
  }

  if (currentDrinkSize === "S") {
    totalDrinkAmount += basePriceSizeS;
  } else if (currentDrinkSize === "M") {
    totalDrinkAmount += (basePriceSizeS + extraPriceSizeM);
  } else if (currentDrinkSize === "L") {
    totalDrinkAmount += (basePriceSizeS + extraPriceSizeL);
  }
}

let finalBillAmount = (totalDrinkAmount + toppingCount * toppingPrice) * (isGoldMember ? 0.9 : 1.0);
console.log("Tổng tiền hóa đơn:", finalBillAmount, "VNĐ");

/**
 * BANG DOI SOAT KET QUA
 * -----------------------------------------------------------------------------------------
 * | Truong hop kiem thu                | Ket qua sai thuc te (Truoc khi sua)              | Ket qua dung mong doi (Sau khi sua)              |
 * -----------------------------------------------------------------------------------------
 * | TC01: Xu ly ky tu huy 'X'          | Dung dot ngot khi gap 'X', bo sot ly 'S', 'M' sau | Bo qua 'X' dung cach va tiep tuc xu ly du cac ly |
 * | TC02: Tinh toan tong tien hoa don  | Thieu doanh thu do bi ngat quang som             | Tinh dung toan bo don hang hop le kem chiet khau |
 * -----------------------------------------------------------------------------------------
 */