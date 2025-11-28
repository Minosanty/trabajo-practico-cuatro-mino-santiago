# Glosario simple — TP4


**`Product` (interfaz)**: Define la forma de un producto con `name` y `price`.

Ejemplo (en `src/basic_type/basic.ts`):
```ts
interface Product { name: string; price: number }
const myProduct: Product = { name: "Ferrari Roma", price: 1073245 }
```

**`productName`, `productPrice` (tipos primitivos)**: Ejemplos simples de `string` y `number`.

Ejemplo (en `src/basic_type/fundamental.ts`):
```ts
const productName: string = "Hola este es un string de TypeScript"
const productPrice: number = 1999
```

**`productId` (Union Type)**: Variable que puede ser `string` o `number`.

Ejemplo (en `src/basic_type/union.ts`):
```ts
let productId: string | number = 100
productId = "hola soy un string ahora"
```

**`OrderStatus` (Literal Type)**: Tipo literal que restringe a estados posibles: `"pending" | "shipped" | "delivered"`.

Ejemplo (en `src/literal_type_enum/literalType.ts`):
```ts
type OrderStatus = "pending" | "shipped" | "delivered"
const orderStatus: OrderStatus = "pending"
```

**`LogLevel` (enum) y `logMessage` (función)**: Enum para niveles de log y función que lo usa.

Ejemplo (en `src/literal_type_enum/enum.ts`):
```ts
enum LogLevel { Info = 1, Warning, Error }
function logMessage(level: LogLevel, message: string) { console.log(`${level} ${message}`) }
logMessage(LogLevel.Info, "<- este es el indice 1")
```

**`updateStock` (función)**: Función que recibe números y devuelve un número (ejemplo de función con tipos).

Ejemplo (en `src/function_type/function.ts`):
```ts
function updateStock(currentStock: number, quantityChange: number): number {
	return currentStock + quantityChange
}
const result = updateStock(500, 10)
console.log(result)
```

