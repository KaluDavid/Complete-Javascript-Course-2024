// lets see if sarah is ready to drive
const hasDriversLicense = true;
const hasGoodVision = false;

let drive;
if (hasDriversLicense && hasGoodVision) {
    drive = 'She can drive';
} else {
    drive = 'let someone else drive';
}

console.log(drive);