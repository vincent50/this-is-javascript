![title](images/js.png)

# This is javascript
Apuntes de javascript

### ¿Cómo nace Javascript?
Nace con la necesidad de generar dinamismo en las páginas web y que a su vez los usuarios y las empresas pudieran interactuar unos con otros.

### ¿Qué es Javascript?
Es un lenguaje interpretado, orientado a objetos, débilmente tipado y dinámico.
Débilmente tipado
Se pueden hacer operaciones entre tipos distintos de datos (enteros con strings, booleanos con enteros, etc). Ejemplo:

```js
4 + "7"; // 47
4 * "7"; // 28
2 + true; // 3
false - 3; // -3
```

### Dinámico
Corre directamente en la etapa de Runetime sin una etapa de compilación previa. Esto permite probar nuestro código inmediatamente; pero también es lo que hace que los errores se muestren hasta que se ejecuta el programa.

### ¿Realmente es Javascript un lenguaje interpretado?
Interpretado quiere decir que el leguaje va a ir leyendo el código linea por linea en el tiempo de ejecución y probando que todo funcione en el proceso con la interacción con el programa y si encuentra un error en ese momento lo marca.

Una vez que el navegador obtiene el código js el motor de js lo procesa convirtiéndolo a binario para que sea entendido por la maquina por lo que javascript es un leguaje compilado.

### Javascript es Basckwards Compatible
Todas las funciones nuevas que salen de Javascript no dañarán el trabajo ya hecho, pero no se podrá utilizar en nuestro entorno de trabajo inmediatamente. Para solucionar esto está Babel que permite utilizar las nuevas características del lenguaje pero lo transforma a una versión que el navegador pueda entender.