# _repair-desing_refact_
>## Настройка проекта:
>### 1.  Открыть редактор кода от имени администратора;
>### 2.  Установить необходимые пакеты командой _npm i_;

>## Работа с проектом:
>- ### _npm run svgSprive_ - сборка спрайта из из файлов формата _svg_ в папке _svgicons_;
>- ### _npm run dev_ - режим разработчика;
>- ### _npm run build_ - режим продакшн;
>- ### _npm run deployFTP_ - выгрузка результата на сервер по FTP;
>- ### _npm run zip_ - Скомпилировать ZIP-файл с результатом продакшена;

>## Примечание
>### При добавление картинок формата _svg_ в папку _svgicons_, необходимо в названии файлов убрать любые знаки, тире и подчеркивания. Иначе может выдать ошибку при компиляции.

>### P.S. При возникновении ошибки попробовать установить пакет _fs_ командой _npm i -D fs_.
###### [ссылка на видео шаблона](https://youtu.be/jU88mLuLWlk)