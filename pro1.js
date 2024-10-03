let len=prompt("ENTER THE LENGTH:");
let arr=new Array(len+1)
for(let i=0;i<len;i++){
    arr[i]=(parseInt)(prompt(i+1));
}
console.log("INPUT:"+arr);
let i=0;
for(let j=0;j<len;j++){
    if(arr[j]!=0){
        arr[i]=arr[j];
        i++;
    }

}
for(let j=i;j<len;j++)
arr[j]=0;
console.log("OUTPUT:"+arr)