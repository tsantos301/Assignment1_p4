
function showMeasurementConverters()
{
    // hide the "addEntry" form and show the address book
    document.getElementById( "measurementConverters" ).style.display = "block";
    document.getElementById( "mortgageCalculator" ).style.display = "none";
    document.getElementById( "ASCIIConverter" ).style.display = "none";
}

function showMortgageCalculator()
{
    // hide the "addEntry" form and show the address book
    document.getElementById( "measurementConverters" ).style.display = "none";
    document.getElementById( "mortgageCalculator" ).style.display = "block";
    document.getElementById( "ASCIIConverter" ).style.display = "none";
}
function showASCIIConverter(){
    document.getElementById( "measurementConverters" ).style.display = "none";
    document.getElementById( "mortgageCalculator" ).style.display = "none";
    document.getElementById( "ASCIIConverter" ).style.display = "block";
}

function convertLength(){

    var startUnit = document.getElementById( "startLengthUnit" ).value;
    var endUnit = document.getElementById( "endLengthUnit" ).value;
    var startValue = document.getElementById( "startLength" ).value;
    console.log(startUnit);
    if(startUnit == "meter" && endUnit == "meter") document.getElementById( "endLength" ).value = startValue;
    if(startUnit=="meter" && endUnit=="centimeter") document.getElementById( "endLength" ).value = startValue*100;
    if(startUnit=="meter" && endUnit=="kilometer") document.getElementById( "endLength" ).value = startValue/1000;
    if(startUnit == "kilometer" && endUnit == "kilometer") document.getElementById( "endLength" ).value = startValue;
    if(startUnit=="kilometer" && endUnit=="meter") document.getElementById( "endLength" ).value = startValue*1000;
    if(startUnit == "kilometer" && endUnit == "centimeter") document.getElementById( "endLength" ).value = startValue*100000;
    if(startUnit == "centimeter" && endUnit == "centimeter") document.getElementById( "endLength" ).value = startValue;
    if(startUnit=="centimeter" && endUnit=="meter") document.getElementById( "endLength" ).value = startValue/100;
    if(startUnit == "centimeter" && endUnit == "kilometer") document.getElementById( "endLength" ).value = startValue/100000;
}

function convertWeight(){

    var startUnit = document.getElementById( "startWeightUnit" ).value;
    var endUnit = document.getElementById( "endWeightUnit" ).value;
    var startValue = document.getElementById( "startWeight" ).value;
    //console.log(startUnit);
    if(startUnit == "gram" && endUnit == "gram") document.getElementById( "endWeight" ).value = startValue;
    if(startUnit=="gram" && endUnit=="tonne") document.getElementById( "endWeight" ).value = startValue/1000000;
    if(startUnit=="gram" && endUnit=="kilogram") document.getElementById( "endWeight" ).value = startValue/1000;
    if(startUnit == "kilogram" && endUnit == "kilogram") document.getElementById( "endWeight" ).value = startValue;
    if(startUnit=="kilogram" && endUnit=="gram") document.getElementById( "endWeight" ).value = startValue*1000;
    if(startUnit == "kilogram" && endUnit == "tonne") document.getElementById( "endWeight" ).value = startValue/1000;
    if(startUnit == "tonne" && endUnit == "tonne") document.getElementById( "endWeight" ).value = startValue;
    if(startUnit=="tonne" && endUnit=="gram") document.getElementById( "endWeight" ).value = startValue*1000000;
    if(startUnit == "tonne" && endUnit == "kilogram") document.getElementById( "endWeight" ).value = startValue*1000;
}


function convertArea(){

    var startUnit = document.getElementById( "startAreaUnit" ).value;
    var endUnit = document.getElementById( "endAreaUnit" ).value;
    var startValue = document.getElementById( "startArea" ).value;
    //console.log(startUnit);
    if(startUnit == "squareMeter" && endUnit == "squareMeter") document.getElementById( "endArea" ).value = startValue;
    if(startUnit=="squareMeter" && endUnit=="squareMile") document.getElementById( "endArea" ).value = startValue/2.59e+6;
    if(startUnit=="squareMeter" && endUnit=="squareKilometer") document.getElementById( "endArea" ).value = startValue/1e+6;
    if(startUnit == "squareKilometer" && endUnit == "squareKilometer") document.getElementById( "endArea" ).value = startValue;
    if(startUnit=="squareKilometer" && endUnit=="squareMeter") document.getElementById( "endArea" ).value = startValue*1e+6;
    if(startUnit == "squareKilometer" && endUnit == "squareMile") document.getElementById( "endArea" ).value = startValue/ 2.59;
    if(startUnit == "squareMile" && endUnit == "squareMile") document.getElementById( "endArea" ).value = startValue;
    if(startUnit=="squareMile" && endUnit=="squareMeter") document.getElementById( "endArea" ).value = startValue* 2.59e+6;
    if(startUnit == "squareMile" && endUnit == "squareKilometer") document.getElementById( "endArea" ).value = startValue*2.59;
}


function convertVolume(){

    var startUnit = document.getElementById( "startVolumeUnit" ).value;
    var endUnit = document.getElementById( "endVolumeUnit" ).value;
    var startValue = document.getElementById( "startVolume" ).value;
    //console.log(startUnit);
    if(startUnit == "litre" && endUnit == "litre") document.getElementById( "endVolume" ).value = startValue;
    if(startUnit=="litre" && endUnit=="cubicMeter") document.getElementById( "endVolume" ).value = startValue/1000;
    if(startUnit=="litre" && endUnit=="millilitre") document.getElementById( "endVolume" ).value = startValue*1000;
    if(startUnit == "millilitre" && endUnit == "millilitre") document.getElementById( "endVolume" ).value = startValue;
    if(startUnit=="millilitre" && endUnit=="litre") document.getElementById( "endVolume" ).value = startValue/1000;
    if(startUnit == "millilitre" && endUnit == "cubicMeter") document.getElementById( "endVolume" ).value = startValue/1e+6;
    if(startUnit == "cubicMeter" && endUnit == "cubicMeter") document.getElementById( "endVolume" ).value = startValue;
    if(startUnit=="cubicMeter" && endUnit=="litre") document.getElementById( "endVolume" ).value = startValue*1000;
    if(startUnit == "cubicMeter" && endUnit == "millilitre") document.getElementById( "endVolume" ).value = startValue*1e+6;
}

function calculateMortgagePayments(){
    var principal = parseFloat(document.getElementById( "loanAmount" ).value);
    var monthlyInterestRate = parseFloat(document.getElementById( "interestRate" ).value);
    monthlyInterestRate /= 100;
    var numPayments = parseFloat(document.getElementById( "payments" ).value);
    console.log("This is principal" + principal);
    console.log("This is monthlyInterestRate" + monthlyInterestRate);
    console.log("This is numPayments" + numPayments);
    console.log(1+monthlyInterestRate);
    console.log((Math.pow((1+monthlyInterestRate),numPayments))-1);
    var monthlyPayment = principal * ( monthlyInterestRate * (Math.pow((1+monthlyInterestRate),numPayments) ) /
                                                            ( (Math.pow((1+monthlyInterestRate),numPayments))-1) );
    document.getElementById( "monthlyPayment" ).innerHTML= Math.round(monthlyPayment * 100) / 100;
}

function encrypt(){
    var result = '';
    var binaryResult ='';
    var plainText = document.getElementById("plainText").value;
    var index = parseInt(document.getElementById("index").value);
    console.log(index);
    console.log("Text: " + plainText);
    for(let i =0;i<plainText.length;i++){
        var character = plainText[i];
        console.log("Character:"+ character);
        //if the character is a letter of the alphabet then shift it, if not leave it as it is.
        if (character.match(/[a-z]/i)) {
            var asciiValue = parseInt(plainText.charCodeAt(i)); //get the ascii value for the character
            console.log("ASCII VALUE: " + asciiValue);

            if(asciiValue >= 97 && asciiValue <= 122){ //lowercase letters only in this range
                if(asciiValue+index >122){
                    var wrap = (asciiValue+index)-123;
                    asciiValue = 97 + wrap;
                }
                else{ asciiValue = asciiValue + index;}
                console.log("ascii value after shift: "+ asciiValue);
                character = String.fromCharCode(asciiValue);
                console.log(character);
                result += character;
            }

        }
    }

    for(let i =0;i<result.length;i++){
        binaryResult += result[i].charCodeAt(0).toString(2)+" ";
        console.log("this is ascii value of encrypted char:"+binaryResult);

        //binaryResult=binaryResult.value;
        console.log("This is binary"+binaryResult);
    }
    document.getElementById("output").value = binaryResult;

    }