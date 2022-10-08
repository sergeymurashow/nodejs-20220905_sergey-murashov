const intervalId = setInterval(() => {
  console.log('James'); // 2, 5
}, 10);

setTimeout(() => {
  const promise = new Promise((resolve) => { 
    console.log('Richard'); // 1
    resolve('Robert'); // 3
  });

  promise
      .then((value) => {
        console.log(value); // 4

        setTimeout(() => {
          console.log('Michael'); // 6

          clearInterval(intervalId);
        }, 10);
      });

  console.log('John');// 2
}, 10);
