
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

function convertWeight(){

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