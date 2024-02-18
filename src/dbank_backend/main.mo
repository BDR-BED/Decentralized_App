import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor DBank {
  stable var currentValue: Float = 300;
  currentValue := 300;

  let id = 45625468767545;
// Debug.print(debug_show(id));


  stable var startTime = Time.now();
  //Debug.print(debug_show(startTime));
  //startTime := Time.now();
  public func topUp(amount: Float){
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };


  public func withDraw(amount: Float){
    let tempValue: Float = currentValue - amount;
    if(tempValue >=0){
    currentValue -= amount;
    Debug.print(debug_show(currentValue));
    }else{
      Debug.print("Here's the problem with Nat");
    }
  };

  public query func checkBalance(): async Float{
    return currentValue;
  };

  public func compaund(){
    let currentTime = Time.now();
    let timeElapsedNS = currentTime - startTime;
    let timeElapsedS = timeElapsedNS / 1000000000;
    currentValue := currentValue * (1.01 ** Float.fromInt(timeElapsedS)) ;
    startTime := currentTime;
  }
  //topUp();
}
