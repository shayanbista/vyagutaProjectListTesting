// export const getRandomNameFromFixture = (name:string) => {
//     return cy.fixture('projectNames').then((data) => {
//         const validNames = data.validNames;
//         const randomIndex = Math.floor(Math.random() * validNames.length);
//         console.log("validName",validNames[randomIndex]);
//         return validNames[randomIndex];
//     });
// };

// utils.js

// export const getRandomNameFromFixture = async (nameType:string) => {
//         return cy.fixture('projectNames').then((data) => {
//         // Dynamically access validNames or invalidNames based on the parameter
//         const namesArray = data[nameType];

//         if (!namesArray) {
//             throw new Error(`No names found for type: ${nameType}`);
//         }

//         const randomIndex = Math.floor(Math.random() * namesArray.length);
//         const randomName=namesArray[randomIndex]
//         console.log("Random Name:", namesArray[randomIndex]);
//         return randomName;
//     });
// };

// utils.js

export const getRandomNameFromFixture = (nameType) => {
  return cy.fixture("projectNames").then((data) => {
    // Dynamically access validNames or invalidNames based on the parameter
    const namesArray = data[nameType];

    if (!namesArray) {
      throw new Error(`No names found for type: ${nameType}`);
    }

    const randomIndex = Math.floor(Math.random() * namesArray.length);
    const randomName = namesArray[randomIndex];
    console.log("Random Name:", randomName);
    return randomName;
  });
};
