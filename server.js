// console.log('server file is running');

// function add(a,b){
//     return a+b;
// }
// const result = add(2,5);
// console.log(result);
// (function(){
//     console.log('hanamant');
// }());


// function callBack(){
//     console.log('adding successfully complete')
// }

const addition = function(a,b,callBack){
    // const result = 2;
    const result = a+b;
    console.log('result:',result)
    callBack();
}

// addition(2,2,callBack);
// addition(2,2,function(){
//     console.log('adding complete');
// })

addition(2,6,()=>{
    console.log('adding complete');
})