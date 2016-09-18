#include <stdio.h>
 
int main()
{
  int year=2017;
  scanf("%d", &year);
 for(year=2017;year<=2099;year++)
 {
  if ( year%400 == 0)
    printf("%d\n", year);
  else if ( year%4 == 0 )
    printf("%d\n", year);
 }
  return 0;
}