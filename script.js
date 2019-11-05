function transpose(array) {
  return Object.keys(array[0]).map(c => array.map(r=>r[c]))
}

let store={
  solutionID:[],
  cDistance:[],
  frontID:[]
};
let fID=0;
let sID=0;
let p=12

const firstFront=[
  [0.66,0.21,0.58],
  [3.65,5.90,4.52]
]

const front=[
  [0.31,0.22,0.79,0.27],
  [6.10,7.09,3.97,6.93]
  ]
function crowding(front){
  let solutions = JSON.parse(JSON.stringify(front))

  let sorting=[];
  console.log('solutions after sorting:')
  solutions.forEach((element,i) => {
    sorting.push(element.sort((a,b)=>a>b));
    console.log(`f(${i+1}) : ${sorting[i]}`)
  })

/*crowding dostance*/
let l1=1-0.1;
let l2=60-0;
let distance=[]
front[0].forEach(element => {
 distance.push(0);
});
front.forEach((f) => {
f.forEach((e,i) => {
 sorting.forEach((s) => {
   s.forEach((el,j) => {
     if(e==el){
         distance[i]=(distance[i]+((Math.abs(s[j-1]-s[j+1]))/l1));
         
     }
   })
 })
})
l1=l2;
});
console.log('Crowding distance:')
distance.forEach((d ,i)=> {
console.log(`${i+1} : ${d.toFixed(2)}`)
         store.frontID.push(fID+1);
         store.solutionID.push(sID+1);
         store.cDistance.push(d.toFixed(2));
         sID++;
})
fID++;
}
console.log('first pareto front:')
crowding(firstFront);  
console.log('second pareto front:')
crowding(front);
/* choose a new population */
 
let nextPop=transpose(firstFront).concat(transpose(front));
nextPop.splice((p/2));
console.log('next population :');
console.log(nextPop)
//generate random couples
let couples=[]

nextPop.forEach((element,i) => {
  let k=0;
  couples[i]=[];
  couples[i][k]=[];
  couples[i][k+1]=[];

     let r1=Math.random()*i;
     let r2=Math.random()*i;
     couples[i][k]=(Math.round(r1)+1);
     couples[i][k+1]=(Math.round(r2)+1);

    console.log(`(${Math.round(r1)+1}, ${Math.round(r2)+1})`);
});
/****test */
/*console.log('test')
couples.forEach((element,i) => {
     console.log(couples[Math.floor(Math.random()*couples.length)])
});
console.log('end test')
/***end test */
store.frontID.splice((p/2));
store.cDistance.splice((p/2));
store.solutionID.splice((p/2));
//console.log(store)
//console.log(couples);
//*****Crowding tournament***/
console.log('the crowding tournament')
couples.forEach(element => {
  let i=element[0];
  let j=element[1];
  if(store.frontID[i-1]!=store.frontID[j-1]){
    if(store.frontID[i-1]<store.frontID[j-1]){
      console.log(element[0])
    }else{
      console.log(element[1])
    }
  }else{
    if(store.cDistance[i-1]>store.cDistance[j-1] || store.cDistance[i-1]==NaN){
      console.log(element[0])
    }else{
      console.log(element[1])
    }
  }
});
