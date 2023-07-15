function cookie(x){
  //setup and else if statement to determine what is being entered and define the response based on type of data
  //use the typeof method to return a string holding the data type "string" "number" ect
  if (typeof x === "string") {
    return "Who ate the last cookie? It was Zach!"
  } else if (typeof x === "number") {
    return "Who ate the last cookie? It was Monica!"
  } else {
    return "Who ate the last cookie? It was the dog!"
  }
}