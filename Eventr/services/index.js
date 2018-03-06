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

export function loadAttendeeListData(eventId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (eventId) {
        resolve({attendeeListId: eventId, attendeeListData: 
          [
            {
              name: "Brendan Cass",
              avatar: "brendan.jpg",
              attending: 1,
              icon: "md-checkmark-circle"
            },
            {
              name: "Payam Azadi",
              avatar: "payam.jpg",
              attending: 2,
              icon: "md-warning"
            },
            {
              name: "Steven Ayers",
              avatar: "ayers.jpg",
              attending: 3,
              icon: "md-close"
            }
          ]
        });
      } else {
        reject(new Error("invalid event ID or error"));
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
>>>>>>> master
