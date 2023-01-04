# Baking-recipe-converter

Baking recipe converter made with Vanilla JS
만들고 싶은 레시피의 틀이 내가 가진 틀과 다를 때 간단하게 계산하기

부피를 구해서
사각형의 부피 : 가로 X 세로 X 높이
원형의 부피 : r² X 3.14 x 높이

만들고 싶은 레시피의 틀 (원래틀)
내가 바꾸고 싶은 틀 (내틀)
내틀 / 원래틀 = 비율
원래 틀의 중량에 이 숫자를 모두 곱하면 내 틀에 맞는 중량을 구할 수 있음

낮은 높이를 그대로 활용하려면, 원하는 높이 크기로 똑같이 곱해주면 됨
**_내가 만들 틀의 높이가 더 중요_**

// 사각형 / 원형 따로 선택

롤케잌팬, 높이는 신경 안쓰고 구함
같은 높이로 구워낼 것이기 때문에 높이는 생략하고 곱해준다.

온도와 시간은 커졌을때는 5분씩 늘려서
작게 만들때는 5분씩 줄여서 테스트 하기
반죽이 2배가 늘어나도 시간이 2배는 아님
대체적으로 양이 많아지면 온도를 낮추고 오래 굽습니다.

위아래가 다른 경우

1. 쉬폰틀
   바깥틀의 부피
   평균지름 : (윗면의 지름 + 아랫면의 지름) / 2
   반지름 : 평균지름 / 2
   원형의 부피 계산식(r² X 3.14 x 높이)으로 계산

작은 기둥의 부피
평균지름 : (윗면의 지름 + 아랫면의 지름) / 2
반지름 : 평균지름 / 2
r² X 3.14 x 높이(바깥틀의 높이로 계산)

쉬폰틀의 부피 = 바깥틀의 부피 - 작은 기둥의 부피

2. 구겔호프
   물로 중량을 재본다
