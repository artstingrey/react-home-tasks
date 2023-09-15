function MaxArrayNumber() {
  const basicArray = [1, 4, 9, 6, 18, 15, 23, 2, 4, 11];
  const basicArraySum = [2, 4, 5, 2, 3, 10, 7, 1];

  const maxNumber = () => {
    let number = 0;

    basicArray.forEach((item) => {
      if (item > number) {
        number = item;
      }
    });

    return number;
  };

  const maxNumberNotSimple = () => {
    let number = 0;
    for (let i = 1; i < basicArray.length; i = i + 3) {
      if (basicArray[i] > number) {
        number = basicArray[i];
      }

      if (number < basicArray[i - 1]) {
        number = basicArray[i - 1];
      }

      if (number < basicArray[i + 1]) {
        number = basicArray[i + 1];
      }

      if (!basicArray[i + 3]) {
        if (basicArray[basicArray.length - 1] > number) {
          number = basicArray[basicArray.length - 1];
        }
      }
    }

    return number;
  };

  const arraySumm = (number) => {
    let resultArray = [];

    for (let i = 0; i < basicArraySum.length; i++) {
      if (basicArraySum[i] < number) {
        for (let j = 0; j < basicArraySum.length; j++) {
          if (
            i !== j &&
            basicArraySum[j] < number &&
            basicArraySum[i] + basicArraySum[j] === number
          ) {
            resultArray.push(i, j);
          }
        }
      }
      if (resultArray.length === 2) break;
    }
    console.log(resultArray);
    return resultArray;
    //return [...new Set(resultArray)];
  };

  return (
    <>
      <h2>Max array number</h2>
      <p>simple - {maxNumber()}</p>
      <p>not simple - {maxNumberNotSimple()}</p>
      <h2>Eleement sum</h2>
      <p>{arraySumm(12).join(",")}</p>
    </>
  );
}

export default MaxArrayNumber;
