# sf_module_f46
F4.6. Итоговое практическое задание:
   
    Создайте фуллстек-приложение с рецептами блюд, которое будет использовать Django Rest Framework, автодокументацию OpenAPI+Swagger и react-router.

    Давать пользователю возможность создавать рецепты не нужно: достаточно распределить их по категориям и отображать в клиенте и в API.

    Где отображать документацию API — решать вам.
    
    У каждого блюда и каждой категории должна быть своя страница: с главной страницы можно перейти на любую из категорий, а из категории — на любой рецепт этой категории.

Установка и запуск среды разработки backend Django:

1. клонируем проект, создаем и клонируем виртуальное окружение:

    git clone https://github.com/STokmakov/sf_module_f46.git
    cd sf_module46
    python -m venv venv
    .\venv\Scripts\Activate.ps1

2. устанавливаем пакеты

    pip install -r requirements.txt


3. переходим в папку backend_recipes и запускаем сервер

   cd .\backend_recipes\
   python manage.py runserver

4. superuser: admin
   password: admin

Автодокументация:
http://127.0.0.1:8000/schema/ - openapi
http://127.0.0.1:8000/swagger/ - swagger

API: 
http://127.0.0.1:8000/api/categories/ - перечень категорий
http://127.0.0.1:8000/api/recipe - перечень всех рецептов
http://127.0.0.1:8000/api/recipes/?category=1 - перечень рецептов категории (id = 1)

Установка и запуск react

npm i @material-ui/core --legacy-peer-deps