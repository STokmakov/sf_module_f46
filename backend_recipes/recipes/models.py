from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=64, unique=True)

    class Meta:
        verbose_name_plural = 'Категории'
        verbose_name = 'Категории'
    
    def __str__(self):
        return self.name

class Recipe(models.Model):

    categoryType = models.ForeignKey(Category, verbose_name='Категория', on_delete = models.CASCADE)
    name = models.CharField(max_length=256, verbose_name='Наименование')
    recipe = models.TextField(verbose_name='Рецепт')

    class Meta:
        verbose_name_plural = 'Рецепты'
        verbose_name = 'Рецепты'

    def __str__(self):
        return f'{self.name} | {self.categoryType}'
