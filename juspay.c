#include <stdio.h>4

int main(void) {
	int n,z=1,i,p=1;
	scanf("%d",&n);
	if(n==0||n==1)
	{
	    printf("%d",p);
	}
	else
	{
	    for(i=1;i<=(n-1);i++)
	        z=z*2;
	}
	printf("%d",z);
	
	return 0;
}

