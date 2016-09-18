#include<stdio.h>

int main()
{
    int num = 1;
    print(num);
  return 0;
}

int print(num)
{
    if(num<=5)
    {
         printf("%d\n",num);
         print(num+1);
    }
}