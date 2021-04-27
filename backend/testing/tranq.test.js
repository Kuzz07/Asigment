// use the path of your model
const registration = require('../models/user');
const Packages = require('../models/packagesModel')
const Product = require('../models/productModel')
const mongoose = require('mongoose');
// use the new name of the database
const url = 'mongodb://localhost:27017/Tranqulity_testing';
beforeAll(async () => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true
    });
});
afterAll(async () => {
    await mongoose.connection.close();
});
// describe ('SAMPLE TESTING', () => {
//     it('should be true ===true',()=>{
//         expect(true).toBe(true)
//     })

// })







// // PACAGE ADDING TESTING

// describe('Package Schema Testing', () => {
//     //the code for insert testing
//     it("Add package testting anything", () => {
//         const packages = {
//             userId: "6062e7eb36664c303cf76086",
//             packageId: "607c3f41a605f21f30a5e7de606be910883ccd2880c95ce1",
//             packagesname: "Trekkers treatment"

//         };
//         return Packages.create(packages).then((pro_ret) => {
//             expect(pro_ret.packagesname).toEqual('Trekkers treatment');
//         });
//     });

// });






// //USER REGISTRATION TESTING

// describe('User Schema test anything', () => { // the code below is for insert testing
//     it('Add User testing anything', () => {
//         const register = {

            
//             'firstname': 'sashank',
//             'lastname':'shrestha',
//             'email': 'sashank@gmail.com',
//             "password": "password1",
//             "phoneno": "986347889123",
//             "address": "hatigauda"
//         };
//         return registration.create(register).then((pro_ret) => {
//             expect(pro_ret.firstname).toEqual('sashank');
//         });
//     });
  
// });













// /Update Packages//

// it("testing Packages Update",async()=>
// {
//     return Packages.findOneAndUpdate(
//         { _id: Object("607db25e0d1eb50098fd5c03") },
//             {$set: {packagesname:"Trekkers treatmen"}}// UPDATING THE PACKAGE NAME
//     ).then((pp)=>{
//         expect(pp.packagesname).toEqual("Trekkers treatment");
//     });
// });








// PACKAGE DELETE







// it('to test the delete package is working or not', async() =>
// {
//     return Packages.deleteMany();
//     { _id: Object("607d85f2e362a90a181add7d") }
//     conststatus= await packages.deleteMany();
//     expect(status.ok).toBe(1);});










// PRODUCT ADDED//

// describe('Products Schema Testing', () => {
    
//     it("Add Products testting anything", () => {
//         const product = {
//             userId: "6062e7eb36664c303cf76086",
//             productId: "606d3a819bc43d3ec8c6c31e",
//             product: "Aroma Locution"

//         };
//         return Product.create(product).then((pro_ret) => {
//             expect(pro_ret.product).toEqual('Aroma Locution');
//         });
//     });

// });














// /Update Products//
it("testing Products Update",async()=>
{
    return Product.findOneAndUpdate(
        { _id: Object("607db53b7f5c3a2b607f1f36") },
            {$set: {product:"Aroma Locution"}}////updating product name
    ).then((pp)=>{
        expect(pp.product).toEqual("Aroma Locution");
    });
});











//PRODUCT DELETE



it('to test the delete product is working or not', async() =>
{
    return Product.deleteMany();
    { _id: Object("607d85f2e362a90a181add7d") }
    conststatus= await product.deleteMany();
    expect(status.ok).toBe(1);});


