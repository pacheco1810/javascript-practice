/**
 * Problem: Analyze user purchases to find top products and user preferences
 * Topic: Objects
 * Difficulty: Medium
 */

const purchases = [
  { userId: 1, product: "laptop" },
  { userId: 2, product: "phone" },
  { userId: 1, product: "laptop" },
  { userId: 3, product: "tablet" },
  { userId: 2, product: "phone" },
  { userId: 1, product: "mouse" },
  { userId: 2, product: "laptop" },
  { userId: 3, product: "tablet" },
  { userId: 3, product: "laptop" },
  { userId: 1, product: "phone" },
];

// Input: getTopProducts(purchases)
// Output: ["laptop", "phone"]

function getTopProducts(purchases){
    const response = purchases.reduce((acc, purchase) => {
        acc[purchase.product] = (acc[purchase.product] ?? 0) + 1; 
        return acc;
    }, {})

    return Object.entries(response)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map(([product]) => product);
}

// Input: getTopProductPerUser(purchases)
// Output: { 1: "laptop", 2: "phone", 3: "tablet" }

function getTopProductPerUser(purchases){
    const response = purchases.reduce((acc, {userId, product}) => {
        acc[userId] = acc[userId] || {products: {}, max: 0, topProduct: null};
        const userData = acc[userId];
        userData.products[product] = (userData.products[product] ?? 0) + 1;

        if(userData.products[product] > userData.max){
            userData.max = userData.products[product];
            userData.topProduct = product;
        }
        return acc;
    }, {});
    
    return Object.fromEntries(
        Object.entries(response)
        .map(([userId, data]) => [
            userId,
            data.topProduct 
        ])
    );
}

// Input: getUserProductCounts(purchases)
// Output: { 1: { laptop: 2, mouse: 1, phone: 1 }, 2: { phone: 2, laptop: 1 }, 3: { tablet: 2, laptop: 1 } }

function getUserProductCounts(purchases){
    return purchases.reduce((acc, {userId, product}) => {
        acc[userId] ??= {};
        const userData = acc[userId];
        userData[product] = (userData[product] ?? 0) + 1;
        return acc; 
    }, {});
}

// Input: getUsersTopProductWithCount(purchases)
// Output: { 1: { product: "laptop", count: 2 }, 2: { product: "phone", count: 2 }, 3: { product: "tablet", count: 2 } }

function getUsersTopProductWithCount(purchases){
    const result = purchases.reduce((acc, {userId, product}) => {
        acc[userId] ??= {productCounts: {}, count: 0, topProduct: null};
        const userData = acc[userId];
        userData.productCounts[product] = (userData.productCounts[product] ?? 0) + 1;

        if(userData.productCounts[product] > userData.count){
            userData.count = userData.productCounts[product]; 
            userData.topProduct = product;
        }

        return acc;
    }, {});   

    return Object.fromEntries(
        Object.entries(result)
        .map(([userId, data]) => [
            userId,
            {
                product: data.topProduct,
                count: data.count
            }
        ])
    );
}

// Input: getGlobalTopProductFromTopUsers(purchases)
// Output: { topProduct: ["laptop", "phone", "tablet"], max: 2 }

function getGlobalTopProductFromTopUsers(purchases){
    const usersTopProduct = getUsersTopProductWithCount(purchases);

    return Object.values(usersTopProduct).reduce((acc, { product, count }) => {
        if (count > acc.max) {
            acc.max = count;
            acc.topProduct = [product]; 
        } 
        else if (count === acc.max) {
            acc.topProduct.push(product);
        }

        return acc;
    }, { topProduct: [], max: 0 });
}

module.exports = {
    purchases,
    getTopProducts,
    getTopProductPerUser,
    getUserProductCounts,
    getUsersTopProductWithCount,
    getGlobalTopProductFromTopUsers
};