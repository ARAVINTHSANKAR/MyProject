#include <stdio.h>

int main(void)
{
int p,n,r;
int x,SI;
printf("enter the principle\n");
scanf("%d",&p);
printf("enter the year\n");
scanf("%d",&n);
printf("enter the rate of intrest\n");
scanf("%d",&r);
x=p*n*r;
SI=x/100;
printf("\nSimple Interest : %d",SI);
	return 0;
}

