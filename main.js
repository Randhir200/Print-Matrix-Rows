function runProgram(input) {
    input=input.trim().split("\n");
    var [n,m]=input[0].trim().split(" ");
    var line=1;
    var arr=[];
    for(var i=0;i<n;i++){
        arr.push(input[line].trim().split(" ").map(Number));
        line++
    }
    for(var i=0;i<n;i++){
      if(i%2==0){
    var bag="";
        for(j=0;j<m;j++){
                bag+=arr[i][j]+" ";
        }
    console.log(bag);
      }
    }
    
  }
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  
  