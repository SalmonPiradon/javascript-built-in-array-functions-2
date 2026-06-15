const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  if (carCollection.includes(carBrand)) {
    let position = carCollection.indexOf(carBrand) + 1;

    return `${carBrand} already existed in the 1 position ${position} of car collection. `;
  } else carCollection.push(carBrand);
  {
    return `New car collection is: ${carCollection}.`;
  }
  //return `New car collection is: ${carCollection.join(", ")}.`;  คำตอบ ต้อง ใช้ function join ด้วย
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.
