#include <stdio.h>

int main(void)
{
int a,b,i;
scanf("%d %d",&a,&b);
for(i=a;i<=b;i++)
{
if(i%3==0&&i%5==0)
{
    printf("FizzBuzz");
}
   else if(i%3==0)
    {
printf("Fizz\n");
}
else if(i%5==0)
{
    printf("Buzz\n");
}
else
{
    printf("%d\n",i);
}
}
}

