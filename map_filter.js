const nums=[3,7,9,4,6,1,2];
const nums2=[];
for(let i of nums){
    nums2.push(i**2)
};
console.log(nums2);

const result=nums.map((n)=>{return n**2});
console.log(result);

const prices =['$567.23','$21874.989','$888.90','$7257.2482'];

const results= prices.map((p)=> {return parseInt(p.slice(1))});
console.log(results);

const numPrices=results.map((x)=>{return parseInt(x*0.9)})
console.log(numPrices);