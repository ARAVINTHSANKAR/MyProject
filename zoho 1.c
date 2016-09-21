#include <stdio.h>

int main()
{
    int a[6]={7,1,5,8,2,9,3};
    int i,j;
    for(j=0;j<=10;j++)
    {
    for(i=1;i<=10;i++)
    {
   if(a[j]<a[i])
   {
       a[j]=a[i];
       printf("%d\n",a[j]);
       break;
   }
   else
   {
    i++;
   }
    }
}
	return 0;
}

