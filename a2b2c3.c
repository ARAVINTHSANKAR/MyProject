#include <stdio.h>
#include<strings.h>
int main()
{
    char str[100],value[10];
    scanf("%s",str);
    int i;
    for(i=1;str[i];i++){
        int ch=str[i-1];
        int j=0;
        char value[10]="\0";
        while(str[i]-48>=0&&str[i]-48<=9){
            value[j++]=str[i];
            i++;
        }
        int a=atoi(value);
        for(j=0;j<a;j++){
                printf("%c",ch);
            }
        
    }
    return 0;
}