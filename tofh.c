#include<stdio.h>
void toh(int disc, char source, char t, char dest);
int main()
{
char source='a',t='b',dest='c';
int disc=3;
printf("sequence\n");
toh(disc,source,t,dest);
return 0;
}
void toh(int disc, char source, char t, char dest)
{
if(disc==1)
{
printf("move disc %d from %c to %c\n",disc,source,dest);
return;
}
toh(disc-1,source,dest,t);
printf("move disc %d from %c to %c\n",disc,source,dest);
toh(disc-1,t,source,dest);
}
