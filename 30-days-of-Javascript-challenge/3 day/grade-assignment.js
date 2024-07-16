let input = 95;

switch (input) {
  case 90 || 100:
    console.log("A");
    break;
  case 80 < 90:
    console.log("B");
    break;
  case 60 <= 80:
    console.log("C");
    break;
  case 50 <= 60:
    console.log("D");
    break;
  case 40 <= 50:
    console.log("E");
    break;
  case input < 40:
    console.log("FAIL");
    break;
  default:
    console.log("input is not valide");
    break;
}
