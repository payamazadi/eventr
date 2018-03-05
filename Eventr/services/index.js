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
        resolve({attendeeListId: 1, attendeeListData: 
          /*[{id: 5, name: "poooooo"}]*/ "kaka"
        });
      } else {
        reject(new Error("invalid event ID or error"));
      }
    }, 1000);
  });
}