const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']



// Use forEach to console log each name to the console.

names.forEach(name => {
  console.log(name);
});

// Use forEach to console log each name with a matching province

console.log(
  names[0],provinces[0],) 
 console.log(
  names[1],provinces[1],)
  console.log(
    names[2],provinces[2],)
    console.log(
      names[3],provinces[3],)
      console.log(
        names[4],provinces[4],)
        console.log(
          names[5],provinces[5],)

          // Using map loop over all province names and turn the string to all uppercase. 

          const provincesUpperCase = provinces.map(province => province.toUpperCase());
          console.log(provincesUpperCase); 
          
          // Create a new array with map that has the amount of characters in each name.

          const characterCountArray = names.map(name => name.length);
          console.log(characterCountArray);
          
          // Using toSorted to sort all provinces alphabetically.

          provinces.sort();
console.log(provinces);

// Use filter to remove all provinces that have the word Cape in them

CapelessProvince = provinces.filter(province => !province.toLowerCase().includes("cape")) ;
console.log(CapelessProvince)

// Create a boolean array by using map and some to determine whether a name contains an S character

const containsS = provinces.map(provinces => provinces.includes('S'));
console.log(containsS);


//  Using only reduce, turn the above into an object that 
// indicates the province of an individual
const nameProvinceObject = names.reduce((acc, name, index) => {
  acc[name] = provinces[index] || "Unknown";
  return acc;
}, {});

console.log(nameProvinceObject);
          
            
          