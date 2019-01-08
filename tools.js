
function showMeasurementConverters()
{
    // hide the "addEntry" form and show the address book
    document.getElementById( "measurementConverters" ).style.display = "block";
    document.getElementById( "mortgageCalculator" ).style.display = "none";

    //callWebService( "/getAllNames", parseData );
} // end function showAddressBook

function showMortgageCalculator()
{
    // hide the "addEntry" form and show the address book
    document.getElementById( "measurementConverters" ).style.display = "none";
    document.getElementById( "mortgageCalculator" ).style.display = "block";

    callWebService( "/getAllNames", parseData );
} // end function showAddressBook

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

    var startUnit = document.getElementById( "startLengthUnit" ).value;
    var endUnit = document.getElementById( "endLengthUnit" ).value;
    var startValue = document.getElementById( "startLength" ).value;
    //console.log(startUnit);
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