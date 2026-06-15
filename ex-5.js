let crimeRecordNames = ["Theodora Milenko", "Tinashe Benigno", "Mahalia Priyanka", "Maisy Sudhir"];
// find name in crime record ? in record: message ?not in record: message
function searchCrimeRecord(name) {
  // Start coding here
  const hasCrimeRecord = crimeRecordNames.map((criminal) => criminal.includes(name));
  if (hasCrimeRecord) {
    return `${name} has crime record !!!`;
  }
  return `${name} has no crime record`;
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ไม่เคยมีประวัติเกี่ยวกับอาชญากรรม
console.log(searchCrimeRecord("Dilan Sandra")); //"Dilan Sandra has no crime record"

//ในกรณีที่เคยมีประวัติเกี่ยวกับอาชญากรรม
console.log(searchCrimeRecord("Tinashe Benigno")); //"Tinashe Benigno has crime record !!!"