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

  async login(userName, userPasswd) {
    if (userName === "user123" && userPasswd === "asdasd123") {
      return new Promise((rs) => {
        setTimeout(() => {
          rs({
            "status": 200,
            "role": "user",
            "token": "USER91239912390"
          })
        }, 2000)
      })
    }
    else if (userName === "admin" && userPasswd === "123123asd") {
      return new Promise((rs) => {
        setTimeout(() => {
          rs({
            "status": 200,
            "role": "admin",
            "token": "ADMIN9123970928"
          })
        }, 2000)
      })
    }
    else {
      return new Promise((rs) => {
        setTimeout(() => {
          rs({
            "status": 401,
          })
        }, 2000)
      })
    }
  }
}