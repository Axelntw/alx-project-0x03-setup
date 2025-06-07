# alx-project-0x03

This project is a Next.js application that demonstrates the use of reusable components to maintain a consistent layout across multiple pages. The application includes a Header and Footer component, which are used in conjunction with a Layout component to adhere to the DRY (Don't Repeat Yourself) principle.

## Project Structure

```
alx-project-0x03
├── components
│   ├── common
│   │   └── Button.tsx
│   └── layouts
│       ├── Footer.tsx
│       ├── Header.tsx
│       └── Layout.tsx
├── pages
│   ├── _app.tsx
│   └── index.tsx
├── public
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

To get started with this project, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/alx-project-0x03-setup.git
   ```

2. Navigate into the project directory:
   ```
   cd alx-project-0x03
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To run the application in development mode, use the following command:

```
npm run dev
```

This will start the Next.js development server, and you can view the application in your browser at `http://localhost:3000`.

## Components

- **Button**: A customizable button component located in `components/common/Button.tsx`.
- **Header**: Contains navigation links or branding elements, located in `components/layouts/Header.tsx`.
- **Footer**: Displays footer content such as copyright information, located in `components/layouts/Footer.tsx`.
- **Layout**: A wrapper component that includes the Header and Footer, located in `components/layouts/Layout.tsx`.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.