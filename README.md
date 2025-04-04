# WeSpeak Counter

Este proyecto es un contador interactivo desarrollado como parte del challenge técnico para WeSpeak.

## Requisitos

- Node.js 18+
- SQLite (se usa una base de datos embebida, no se requiere instalación adicional)

## Instalación

### Clonar el repositorio:

```bash
git clone https://github.com/usuario/wespeak-counter.git
cd wespeak-counter
```

### Instalar las dependencias:

```bash
npm install
```

### Configurar la base de datos:

```bash
npx prisma migrate dev --name init
```

### Iniciar la aplicación:

```bash
npm run dev
```

La aplicación estará disponible en http://localhost:3000/.

## Uso

- + Aumentar: Incrementa el contador en 1.
- - Disminuir: Decrementa el contador en 1.
- Reset: Reinicia el contador a 0.

## Tecnologías Utilizadas
- Next.js
- Prisma ORM
- SQLite
- Tailwind CSS

## Estructura del Proyecto

```bash
📂 wespeak-counter/
├── 📂 src/
│   ├── 📂 app/
│   │   ├── 📄 layout.js
│   │   ├── 📄 page.js
│   │   ├── 📂 api/
│   │   │   ├── 📄 actions.js
│   │   ├── 📂 components/
│   │   │   ├── 📄 Counter.js
├── 📂 prisma/
│   ├── 📄 schema.prisma
│   ├── 📂 migrations/
│   │   │   ├── 📄 migration.sql
├── 📄 .env
├── 📄 package.json
├── 📄 README.md
```
### ¡Gracias! 🚀
