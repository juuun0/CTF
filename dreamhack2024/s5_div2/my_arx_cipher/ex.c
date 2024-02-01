#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
  char *keyName = "./key";
  char *encName = "./flag.enc";

  short *keyBuf = (short *)calloc(0, sizeof(short) * 6);
  FILE *fp0 = fopen(keyName, "r");
  fread(keyBuf, 2, 6, fp0);
  fclose(fp0);

  short *encBuf = (short *)calloc(0, sizeof(short) * 2);
  FILE *fp1 = fopen(encName, "r");

  while (1)
  {
    memset(encBuf, 0, 4);
    int cnt = fread(encBuf, 1, 4, fp1);
    if (cnt == 0) break;

    unsigned int front = 0;
    unsigned int back = 0;
    
    for (int i = 2; i >= 0; --i)
    {

      short key_part_1 =  keyBuf[i * 2];
      short key_part_2 = keyBuf[i * 2 + 1];

      short flag_part_1 = encBuf[0];
      short flag_part_2 = encBuf[1];

      int tmp_recover = 0;
      tmp_recover = key_part_2 ^ flag_part_1;
      tmp_recover = tmp_recover << 1;
      short tmp_part_1 = 0;

      if ((tmp_recover >> 16 & 0x1) == 1)
      {
        tmp_recover &= 0xffff;
        tmp_recover += 1;
        tmp_part_1 = ((tmp_recover & 0xff) << 0x8) | (tmp_recover >> 0x8);
      }
      else
      {
        tmp_recover &= 0xffff;
        tmp_part_1 = ((tmp_recover & 0xff) << 0x8) | (tmp_recover >> 0x8);
      }

      tmp_recover = 0;
      tmp_recover = key_part_1 ^ flag_part_2;
      tmp_recover = tmp_recover - tmp_part_1;
      tmp_recover = tmp_recover << 1;
      short tmp_part_2 = 0;
      
      if ((tmp_recover >> 16 & 0x1) == 1)
      {
        tmp_recover &= 0xffff;
        tmp_recover += 1;
        tmp_part_2 = ((tmp_recover & 0xff) << 0x8) | (tmp_recover >> 0x8);
      }
      else
      {
        tmp_recover &= 0xffff;
        tmp_part_2 = ((tmp_recover & 0xff) << 0x8) | (tmp_recover >> 0x8);
      }

      encBuf[0] = tmp_part_2;
      encBuf[1] = tmp_part_1;

    }

    printf("%s%s", (char *)encBuf, (char *)encBuf+4);
    
  }
  
  fclose(fp1);
  free(keyBuf);
  free(encBuf);

  return 0;
}
