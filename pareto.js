  
  //problem to be optimized 
 let matrix=[
    [5.5,4,4.5],
    [1,8,0],
    [3.5,4,5.5],
    [3,2,1],
    [5,1,4],
    [2.5,3,3],
    [4,6,2.5],
    [6,0,0.5]
];
let table=[];
for(let v=0;v<matrix.length;v++){
  for(let d=0;d<2;d++){
    table[v]=[[],[]];
  }
}
function optimize(matrix,table,stateA,stateB,stateC){

if(stateA==='min'&& stateB==='max' && stateC==='max'){

    //in the loop below , i'm ewtrating the dominant (f) and the dominant by(f)
for(let k=0;k<matrix.length;k++){
  for(let i=0;i<matrix.length;i++){
    if(i!=k){
    if(matrix[k][0]<=matrix[i][0] && 
         matrix[k][1]>=matrix[i][1] && 
         matrix[k][2]>=matrix[i][2] ){
     
           table[k][0].push(i+1);

       }else if(matrix[k][0]>=matrix[i][0] && 
                 matrix[k][1]<=matrix[i][1] && 
                 matrix[k][2]<=matrix[i][2] ){

                    table[k][1].push(i+1);
                    
                }
              }
       }
 
}
  }else if(stateA==='min'&& stateB==='min' && stateC==='min'){

    //in the loop below , i'm ewtrating the dominant (f) and the dominant by(f)
for(let k=0;k<matrix.length;k++){
  for(let i=0;i<matrix.length;i++){
    if(i!=k){
    if(matrix[k][0]<=matrix[i][0] && 
         matrix[k][1]<=matrix[i][1] && 
         matrix[k][2]<=matrix[i][2] ){
     
           table[k][0].push(i+1);

       }else if(matrix[k][0]>=matrix[i][0] && 
                 matrix[k][1]>=matrix[i][1] && 
                 matrix[k][2]>=matrix[i][2] ){

                    table[k][1].push(i+1);
                    
                }
              }
       }
 
}


  }else if(stateA==='min'&& stateB==='min' && stateC==='max'){

    //in the loop below , i'm ewtrating the dominant (f) and the dominant by(f)
for(let k=0;k<matrix.length;k++){
  for(let i=0;i<matrix.length;i++){
    if(i!=k){
    if(matrix[k][0]<=matrix[i][0] && 
         matrix[k][1]<=matrix[i][1] && 
         matrix[k][2]>=matrix[i][2] ){
     
           table[k][0].push(i+1);

       }else if(matrix[k][0]>=matrix[i][0] && 
                 matrix[k][1]>=matrix[i][1] && 
                 matrix[k][2]<=matrix[i][2] ){

                    table[k][1].push(i+1);
                    
                }
              }
       }
 
}
  }else if(stateA==='min'&& stateB==='max' && stateC==='min'){

    //in the loop below , i'm ewtrating the dominant (f) and the dominant by(f)
for(let k=0;k<matrix.length;k++){
  for(let i=0;i<matrix.length;i++){
    if(i!=k){
    if(matrix[k][0]<=matrix[i][0] && 
         matrix[k][1]>=matrix[i][1] && 
         matrix[k][2]<=matrix[i][2] ){
           table[k][0].push(i+1);

       }else if(matrix[k][0]>=matrix[i][0] && 
                 matrix[k][1]<=matrix[i][1] && 
                 matrix[k][2]>=matrix[i][2] ){

                    table[k][1].push(i+1);  
                }
              }
       }
}
  }else if(stateA==='max'&& stateB==='min' && stateC==='min'){

    //in the loop below , i'm ewtrating the dominant (f) and the dominant by(f)
for(let k=0;k<matrix.length;k++){
  for(let i=0;i<matrix.length;i++){
    if(i!=k){
    if(matrix[k][0]>=matrix[i][0] && 
         matrix[k][1]<=matrix[i][1] && 
         matrix[k][2]<=matrix[i][2] ){
     
           table[k][0].push(i+1);

       }else if(matrix[k][0]<=matrix[i][0] && 
                 matrix[k][1]>=matrix[i][1] && 
                 matrix[k][2]>=matrix[i][2] ){

                    table[k][1].push(i+1);
                    
                }
              }
       }
 
}
  }else if(stateA==='max'&& stateB==='max' && stateC==='min'){

    //in the loop below , i'm ewtrating the dominant (f) and the dominant by(f)
for(let k=0;k<matrix.length;k++){
  for(let i=0;i<matrix.length;i++){
    if(i!=k){
    if(matrix[k][0]>=matrix[i][0] && 
         matrix[k][1]>=matrix[i][1] && 
         matrix[k][2]<=matrix[i][2] ){
     
           table[k][0].push(i+1);

       }else if(matrix[k][0]<=matrix[i][0] && 
                 matrix[k][1]<=matrix[i][1] && 
                 matrix[k][2]>=matrix[i][2] ){

                    table[k][1].push(i+1);
                    
                }
              }
       }
 
}
  }else if(stateA==='max'&& stateB==='max' && stateC==='max'){

    //in the loop below , i'm ewtrating the dominant (f) and the dominant by(f)
for(let k=0;k<matrix.length;k++){
  for(let i=0;i<matrix.length;i++){
    if(i!=k){
    if(matrix[k][0]>=matrix[i][0] && 
         matrix[k][1]>=matrix[i][1] && 
         matrix[k][2]>=matrix[i][2] ){
     
           table[k][0].push(i+1);

       }else if(matrix[k][0]<=matrix[i][0] && 
                 matrix[k][1]<=matrix[i][1] && 
                 matrix[k][2]<=matrix[i][2] ){

                    table[k][1].push(i+1);
                }
              }
       }
 
}
  }else if(stateA==='max'&& stateB==='min' && stateC==='max'){

    //in the loop below , i'm ewtrating the dominant (f) and the dominant by(f)
for(let k=0;k<matrix.length;k++){
  for(let i=0;i<matrix.length;i++){
    if(i!=k){
    if(matrix[k][0]>=matrix[i][0] && 
         matrix[k][1]<=matrix[i][1] && 
         matrix[k][2]>=matrix[i][2] ){
     
           table[k][0].push(i+1);

       }else if(matrix[k][0]<=matrix[i][0] && 
                 matrix[k][1]>=matrix[i][1] && 
                 matrix[k][2]<=matrix[i][2] ){

                    table[k][1].push(i+1);
                  
                }
              }
       }
 
}

  }
    

//rang is where to put the paretos,chaoticly tho ,
let rang=[];
//p is the count of how much should i explore the ,
// dominant by (f) till all cells are empty
let p=0; 
let solutions=[];
let sum=1;
while(sum>0){
  sum=table.reduce((total,ele)=>(total+ele[1].length),0);
  solutions[p]=[];
for(let j=0;j<table.length;j++){
  let temp=[];
if(table[j][1].length==0){
  temp.push(j+1);
  rang.push(temp);
}
}
//in the next loop below , i'm clearing the dominant by (f)
//according to the last pareto
for(let i=0;i<table.length;i++){
  for(let k=0;k<table[i][1].length;k++){
    for(let m=0;m<rang.length;m++){
          if(rang[m]==table[i][1][k]){
            table[i][1].splice(k,1);   
        }
    }
  }
}

//solutions is where i put every itiration as a row,
//duplicates are included tho
solutions[p]=rang.slice();
p++;
}

//console.log(rang);
//console.log(solutions);
let unique=solutions.slice();
//in the loops below i'm deleting the redandancies ,
//so each row of the array unique will contain only
//the pure pareto
for(i=0;i<unique.length;i++){
  for(j=0;j<unique[i].length;j++){ 
      for(k=i+1;k<unique.length;k++){
        for(m=0;m<unique[k].length;m++){
          if(Number(unique[i][j])==Number(unique[k][m])){
           unique[k].splice(m,1);
           m--;
          }
        }
      }
  }
}
//console.log(unique);
unique.forEach((element ,index)=> {
  console.log('this is range '+(index+1)+' : '+element);
});
//getting the Xs
let X=[];
for(i=0;i<unique.length;i++){
  X[i]=[];
  for(j=0;j<unique[i].length;j++){
      X[i].push(matrix[Number(unique[i][j])-1][0]);
  }
}
 
//getting the Ys
let Y=[];
for(i=0;i<unique.length;i++){
  Y[i]=[];
  for(j=0;j<unique[i].length;j++){
      Y[i].push(matrix[Number(unique[i][j])-1][1]);
  }
}
 
//getting the Zs
let Z=[];
for(i=0;i<unique.length;i++){
  Z[i]=[];
  for(j=0;j<unique[i].length;j++){
      Z[i].push(matrix[Number(unique[i][j])-1][2]);
  }
}

    //best draw
  
let traces=[];
 unique.forEach((element,index) => {
   traces[index]={
     x:X[index],
     y:Y[index],
     z:Z[index],
     mode: 'markers',
     marker: {
       size: 12,
       line: {
       color: 'rgba(217, 217, 217, 1)',
       width: 0.5},
       opacity: 0.8},
     type: 'scatter3d'
   }
 });

 

  var data = traces;
  var layout = {margin: {
    l: 0,
    r: 0,
    b: 0, 
    t: 0
    }};
 Plotly.newPlot('chartContainer', data, layout);

}

optimize(matrix,table,'min','min','min'); 
