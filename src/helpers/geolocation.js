export function getLocation() {
  return new Promise((res, rej) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          res(pos);
        },
        () => {
          rej({});
        },
      );
    }
  });
}
