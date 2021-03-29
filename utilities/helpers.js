exports._count = (array) => {
  return new Promise((resolve, reject) => {
    try {
      array.sort();
      let current = null;
      let cnt = 0;
      let counted_array = [];

      for (let i = 0; i < array.length; i++) {
        if (array[i] != current) {
          if (cnt > 0) {
            counted_array.push({ count: cnt, value: current });
          }
          current = array[i];
          cnt = 1;
        } else {
          cnt++;
        }
      }
      if (cnt > 0) {
        counted_array.push({ count: cnt, value: current });
      }
      resolve(counted_array);
    } catch (error) {
      reject(error);
    }
  });
};

exports._calculate_date = (date) => {
  return new Promise((resolve, reject) => {
    try {
      var dob = new Date(date);
      //calculate month difference from current date in time
      var month_diff = Date.now() - dob.getTime();

      //convert the calculated difference in date format
      var age_dt = new Date(month_diff);

      //extract year from date
      var year = age_dt.getUTCFullYear();

      //now calculate the age of the user
      var age = Math.abs(year - 1970);
      resolve(age);
    } catch (error) {
      reject(error);
    }
  });
};
