# Documentación de modelos

En esta documentación estableceremos algunos modelos que iremos usando.

## Modelo de película (Movie)

Este es un ejemplo para la creación del modelo de una película.

Los ID son provistos por mongo. El enfoque de esta base de datos es no relacional por lo tanto debemos evitar hacer multiples consultas a la base de datos, para eso no vamos a usar links sub request, sino que haremos una desnormalización de algunos datos como en el caso de los caracteres (averiguar sobre desnormalización de datos).

```json
{
    "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    "title": {
        "es": "Mi Vecino Totoro",
        "jp": "となりのトトロ",
        "en": "My Neighbor Totoro"
    },
    "original_title": "となりのトトロ",
    "original_title_romanised": "Tonari no Totoro",
    "image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg",
    "movie_banner": "https://image.tmdb.org/t/p/original/etqr6fOOCXQOgwrQXaKwenTSuzx.jpg",
    "description": {
        "es": "Dos hermanas se mudan al campo con su padre para estar más cerca de su madre hospitalizada y descubren que los árboles cercanos están habitados por Totoros, espíritus mágicos del bosque. Cuando la hermana menor se escapa de casa, la hermana mayor busca ayuda de los espíritus para encontrarla.",
        "jp": "父とともに病院に入院中の母に近づくため、2人の姉妹は田舎に引っ越し、周囲の木々にはトトロと呼ばれる魔法の森の精霊が住んでいることを発見します。最年少の妹が家出したとき、姉は精霊の助けを求めて彼女を探し始めます。",
        "en": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover that the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest sister runs away from home, the older sister seeks help from the spirits to find her."
    },
    "director": "Hayao Miyazaki",
    "producer": "Hayao Miyazaki",
    "release_date": "1988",
    "running_time": "86",
    "rt_score": "93",
    "characters": [
        {
            "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
            "url": "https:localhost:3000/characters/2baf70d1-42bb-4437-b551-e5fed5a87abe",
            "name": {
                "es": "Totoro",
                "jp": "トトロ",
                "en": "Totoro"
            },
            "image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg"
        }
    ],
    "species": [
        {
            "id": "af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
            "name": {
                "es": "Espíritu del bosque",
                "jp": "森の精霊",
                "en": "Forest spirit"
            }
        }
    ],
    "locations": [
        {
            "id": "11014596-71b0-4b3e-b8c0-1c4b15f28b9a",
            "name": {
                "es": "Casa de Kusakabe",
                "jp": "草壁の家",
                "en": "Kusakabe's house"
            },
            "image": "N/a"
        }
    ],
    "vehicles": [
        {
            "id": "4e09b023-f650-4747-9ab9-eacf14540cfb",
            "name": {
                "es": "Catbus",
                "jp": "猫バス",
                "en": "Catbus"
            },
            "description": {
                "en": "A large creature, resembling a mix between a cat and an owl, capable of flight.",
                "jp": "猫とフクロウのミックスのような大きな生き物で、飛行が可能です。",
                "es": "Una gran criatura, que se asemeja a una mezcla entre un gato y un búho, capaz de volar."
            },
            "image":"N/a"
        }
    ],
    "url": "https://ghibliapi.vercel.app/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    "movie_images": [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
        "https://example.com/image3.jpg"
    ]
}
```

### ¿Por qué desnomarlizar?

En el contexto de bases de datos, la normalización es un proceso de diseño que busca reducir la redundancia y mejorar la eficiencia de almacenamiento y manipulación de datos al dividirlos en diferentes tablas relacionadas. Sin embargo, en ciertos casos, desnormalizar los datos puede ser beneficioso, especialmente cuando se trata de consultas y rendimiento.

En el ejemplo del esquema de la película "Mi Vecino Totoro", podemos observar que hay relaciones entre diferentes entidades, como personajes, especies, ubicaciones y vehículos. En una estructura normalizada, cada entidad tendría su propia tabla y se establecerían relaciones utilizando identificadores únicos (claves externas). Sin embargo, esto puede llevar a múltiples consultas y unir tablas para recuperar información completa sobre la película y sus entidades relacionadas.

Al desnormalizar los datos, se combinan los datos relacionados en un solo documento, como en el caso del esquema de la película. Esto tiene varias ventajas en este contexto:

1. Mejora el rendimiento de las consultas: Al tener todos los datos necesarios en un solo documento, se reduce la necesidad de unir tablas y realizar consultas complejas. Esto puede mejorar significativamente el rendimiento y la velocidad de recuperación de datos.
2. Facilita la lectura y comprensión de los datos: Al tener una estructura de datos más plana y coherente, es más fácil leer y comprender la información en un solo vistazo. No es necesario seguir múltiples relaciones para obtener una visión completa de los datos.
3. Simplifica la manipulación de datos: Al trabajar con un solo documento en lugar de múltiples tablas, las operaciones de creación, actualización y eliminación de datos se vuelven más simples y directas. No es necesario realizar cambios en varias tablas para mantener la integridad de los datos.
4. Reducción de consultas adicionales: Al desnormalizar los datos, se evita la necesidad de realizar consultas adicionales para recuperar información relacionada. Esto puede reducir la carga en el servidor de la base de datos y mejorar el tiempo de respuesta.

Sin embargo, es importante tener en cuenta que la desnormalización también tiene algunas consideraciones. Puede resultar en redundancia de datos y un mayor consumo de espacio de almacenamiento. Además, si los datos desnormalizados se actualizan con frecuencia, puede haber un mayor riesgo de inconsistencias. Por lo tanto, es fundamental evaluar cuidadosamente el equilibrio entre la desnormalización y la normalización según los requisitos y características específicas de la aplicación.

## Métodos CRUD

### Creación de una película:

#### Endpoint:

```shell
http://localhost:8080/api/v1/movies
```

#### Método:  `Post`

###### Body

```json
{
    "title": {
        "es": "Mi Vecino Totoro",
        "jp": "となりのトトロ",
        "en": "My Neighbor Totoro"
    },
    "original_title": "となりのトトロ",
    "original_title_romanised": "Tonari no Totoro",
    "image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg",
    "movie_banner": "https://image.tmdb.org/t/p/original/etqr6fOOCXQOgwrQXaKwenTSuzx.jpg",
    "description": {
        "es": "Dos hermanas se mudan al campo con su padre para estar más cerca de su madre hospitalizada y descubren que los árboles cercanos están habitados por Totoros, espíritus mágicos del bosque. Cuando la hermana menor se escapa de casa, la hermana mayor busca ayuda de los espíritus para encontrarla.",
        "jp": "父とともに病院に入院中の母に近づくため、2人の姉妹は田舎に引っ越し、周囲の木々にはトトロと呼ばれる魔法の森の精霊が住んでいることを発見します。最年少の妹が家出したとき、姉は精霊の助けを求めて彼女を探し始めます。",
        "en": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover that the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest sister runs away from home, the older sister seeks help from the spirits to find her."
    },
    "director": "Hayao Miyazaki",
    "producer": "Hayao Miyazaki",
    "release_date": "1988",
    "running_time": "86",
    "rt_score": "93",
    "characters": [],
    "species": [],
    "locations": [],
    "vehicles": [],
    "movie_images": []
}
```
