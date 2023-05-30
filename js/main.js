var a=[];
var b=[];
var result=[];
var size=parseInt(prompt("Enter the size of arrays"));
for(let k=0;k<size;k++)
{
	a[k]=parseInt(prompt("Enter value "+(k+1)+" for array 1" ));
}
for(let l=0;l<size;l++)
{
	b[l]=parseInt(prompt("Enter value "+(l+1)+" for array 2" ));
}
document.write("Input array 1 is " +a);
document.write("<br>");
document.write("Input array 2 is " +b);
document.write("<br>");
for(i=0;i<a.length;i++)
{
	result.push(a[i]);
}
for(j=0;j<b.length;j++)
{
	result.push(b[j]);
}
document.write("Combined array is "+result);