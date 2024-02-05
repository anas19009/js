// async function fetchUserData() {
//     const apiUrl = 'https://dummyjson.com/users ';

//     try {
//         const response = await fetch(apiUrl);

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const userData = await response.json();

//         return userData;
//     } catch (error) {
//         throw new Error(`Error fetching user data: ${error.message}`);
//     }
// }

// //Example usage:
// fetchUserData()
//     .then((userData) => {
//         console.log('User Data:', userData);
//     })
//     .catch((error) => {
//         console.error(error);
//     });

async function processUserData() {
    const apiUrl = 'https://dummyjson.com/users ';

    const response = await fetch(apiUrl);
    const userData = await response.json();
    // console.log(userData.users[0])
        try {
            const maleUsers = userData.users.filter(user => user.gender === 'male');
            const activeUsers = userData.users.map(({ firstName, age, email }) => ({ firstName, age, email }));
        return activeUsers+' '+ maleUsers;
        }
      catch (error) {
        throw new Error(`Error fetching user data: ${error.message}`);
    }

}

processUserData()
    .then((activeUsers) => {
        console.log('User Data:', activeUsers);
    })
    .catch((error) => {
        console.error(error);
    });
