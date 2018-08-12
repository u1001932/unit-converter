/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var numReg = (/^[0-9.\//]+/)
      if (!input.match(numReg)){
        return 1;
      }
    return (input.match(numReg)[0].toString());
  };
  
  this.getUnit = function(input) {
    var unitReg = /[a-zA-Z]+/ ;
    
    return input.match(unitReg)[0];
  };
  
  this.getReturnUnit = function(unit) {
    switch(unit.toUpperCase()){
          case("L"):
            return "gal";
          case("GAL"):
            return "L";
          case("LBS"):
            return "kg";
          case("KG"):
            return "lbs";
          case("MI"):
            return "km";
          case("KM"):
            return "mi";
        default:
            return "invalid unit"
        }
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    var init = eval(initNum)
    if (!init) {
      return "invlaid number"
    }
    switch(initUnit.toUpperCase()){
        case("L"):
          result = init / galToL;
          break;
        case("GAL"):
          result = init * galToL;
          break;
        case("LBS"):
          result = init * lbsToKg;
          break;
        case("KG"):
          result = init / lbsToKg;
          break;
        case("MI"):
          result = init * miToKm;
          break;
        case("KM"):
          result = init / miToKm;
          break;
                  }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    if (returnNum == "invalid numer" || returnUnit == "invalid unit"){
      if(returnUnit != "invalid unit") {
        return "invalid number"
      }
      else if(returnNum != "invalid number"){
        return "invalid unit"
      }
      else {
        return "invalid number and unit"
      }
    }
    
    return `${initNum}${initUnit} converts to ${returnNum}${returnUnit}`;
  };
  
}

module.exports = ConvertHandler;
