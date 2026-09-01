# Imágenes de sectores

Fotografías de fondo para las tarjetas de la sección "Verticales Principales".

Colocar aquí tres archivos (JPG o WebP, orientación horizontal, ~1800x1100 o más):

| Archivo               | Sector        | Contenido sugerido                          |
| --------------------- | ------------- | ------------------------------------------- |
| `inmobiliarias.jpg`   | Inmobiliarias | Propiedad de alta gama, arquitectura        |
| `car-dealers.jpg`     | Car Dealers   | Showroom o vehículo exclusivo               |
| `gastronomia.jpg`     | Gastronomía   | Parador / beach club / mesa servida         |

Luego actualizar el campo `image` de cada entrada en `lib/sectors.ts`, por ejemplo:

```ts
image: "/sectores/inmobiliarias.jpg",
```

Mientras tanto se usan placeholders de `picsum.photos` en escala de grises.
