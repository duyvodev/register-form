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
};
