/**
 * Problem: Analyze user logs to generate analytics
 * Topic: Objects
 * Difficulty: Medium
 */

// Input: getMostActiveUser(logs)
// Output: 1

const logs = [
  { userId: 1, action: "login", device: "mobile" },
  { userId: 2, action: "purchase", device: "desktop" },
  { userId: 1, action: "purchase", device: "mobile" },
  { userId: 3, action: "login", device: "desktop" },
  { userId: 2, action: "login", device: "mobile" },
  { userId: 1, action: "logout", device: "mobile" },
  { userId: 3, action: "purchase", device: "desktop" }
];

function generateUserAnalytics(users){
    let result = users.reduce((acc, user) => {
        acc[user.userId] = acc[user.userId] || {totalActions: 0, actions: {}, devices: new Set()};
        acc[user.userId].totalActions += 1;
        acc[user.userId].actions[user.action] = (acc[user.userId].actions[user.action] ?? 0) + 1;
        acc[user.userId].devices.add(user.device);
        return acc;
    }, {});

    for (const userId in result) {
        result[userId].devices = [...result[userId].devices];
    }

    return result;
}

function getMostActiveUser(users){
    return users.reduce((acc, user) => {
        acc.userCounts[user.userId] = (acc.userCounts[user.userId] ?? 0) + 1;
        if(acc.userCounts[user.userId] > acc.max){
            acc.max = acc.userCounts[user.userId];
            acc.topUser = user.userId; 
        }
        return acc;
    }, {userCounts: {}, max: 0, topUser: null}).topUser;
}

function getUserActionCountMap(users){
    return users.reduce((acc, user) => {
        acc[user.userId] = (acc[user.userId] ?? 0) + 1;
        return acc;
    }, {});
}

function getTopUserByAction(users){
    const result = users.filter(user => user.action === "purchase").reduce((acc, user) => {
        acc.userCounts[user.userId] = (acc.userCounts[user.userId] ?? 0) + 1;
        if(acc.userCounts[user.userId] > acc.max){
            acc.max = acc.userCounts[user.userId];
            acc.topUser = user.userId;
        }
        return acc;
    }, {userCounts: {}, max: 0, topUser: null});
    
    return result.topUser;
}

function getTopDevicePerUser(users){
    const result = users.reduce((acc, user) => {
        acc[user.userId] ??= {
            deviceCounts: {},
            max: 0,
            topDevice: null
        };

        const userData = acc[user.userId];

        userData.deviceCounts[user.device] =
            (userData.deviceCounts[user.device] ?? 0) + 1;

        if (userData.deviceCounts[user.device] > userData.max) {
            userData.max = userData.deviceCounts[user.device];
            userData.topDevice = user.device;
        }

        return acc;
    }, {});

    return Object.fromEntries(
        Object.entries(result).map(([userId, data]) => [
            userId,
            data.topDevice
        ])
    );
}

module.exports = {
    logs,
    generateUserAnalytics,
    getMostActiveUser,
    getUserActionCountMap,
    getTopUserByAction,
    getTopDevicePerUser
};