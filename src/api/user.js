export default {
  register() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          firstName: "Duy",
          lastName: "Vo",
        });
      }, 2000);
    });
  },

  // login(user){
  //   if(user.userName === "admin" && user.passwd === "123123asd"){
  //     return {
  //       "status": 200,
  //       "role": "admin",
  //       "token": "ADMIN999666111"
  //     }
  //   }
  //   else if(user.userName === "user123" && user.passwd === "asdasd123"){
  //     return {
  //       "status": 200,
  //       "role": "user",
  //       "token": "USER91239912390"
  //     }
  //   }
  //   else{
  //     return {
  //       "status": 401,
  //     }
  //   }
  // }
}