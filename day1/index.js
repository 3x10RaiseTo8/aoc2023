const { readFile } = require('node:fs/promises');
const { resolve } = require('node:path');

async function calibration() {
  let sum = 0;
  try {
    const filePath = resolve('./input1.txt');
    const calibrationDocument = await readFile(filePath, 'utf-8');
    let lines = calibrationDocument.split(/\r?\n/);

    for (let line of lines) {
      let nums = '';
      for (let char of line) {
        if (Number.isNaN(parseInt(char))) {
          continue;
        }
        nums = nums.concat(char);
      }
      let value = nums[0].concat(nums[nums.length - 1]);
      sum += Number(value);
      console.log(value, sum);
    }
    console.log(sum);
  } catch (err) {
    console.error(err.message);
  }
}
calibration();
