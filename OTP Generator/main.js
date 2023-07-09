const trigger = document.querySelector('.trigger');
const otpNumber = document.querySelector('#otp');
const otpLength = document.getElementById('otpLength');

//logic for otp generation

function getOtpNumber(){
    let lengthValue = otpLength.value;
    console.log(length)
    let number = '0123456789';
    let otp = '';
    for(i=0;i<lengthValue;i++)
    {
        otp += number[Math.floor(Math.random()*10)];
    }
    otpLength.value='';
    return otp;
}

trigger.addEventListener('click',function(e){
    e.preventDefault();
    const otp =getOtpNumber();
    otpNumber.innerHTML = `${otp}`;
})