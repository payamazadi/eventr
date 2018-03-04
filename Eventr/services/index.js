export function validatePhoneService(phoneNumber) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (phoneNumber) {
        resolve("secret token");
      } else {
        reject(new Error("phone number too short"));
      }
    }, 1000);
  });
}

export function validateTokenService(token) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token && token === "11111") {
        resolve("validated");
      } else {
        reject(new Error("invalid token"));
      }
    }, 1000);
  });
}

export function getEventService(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id) {
        resolve({ name: "EVENT" });
      } else {
        reject(new Error("id invalid or not present"));
      }
    }, 1000);
  });
}
