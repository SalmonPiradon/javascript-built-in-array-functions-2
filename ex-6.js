const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  // Start coding here
  // add new car to collection/ if-else: if .includes(car-brand) => message <already exist>, <new car>
  const existedCar = carCollection.includes(carBrand);
  const carIndex = carCollection.indexOf(carBrand)
  carCollection.push(carBrand)
  if (existedCar) {
    return `${carBrand} has already existed in the ${carIndex+1} position of car collection.`
  }
  return `new car collection is : ${carCollection}.`
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection

console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.