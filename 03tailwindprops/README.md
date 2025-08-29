# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---------------------------------------------------------------------------------------------------------------------------------------------------
# React + Tailwind + Props (Revision)

This project demonstrates how to configure **Tailwind CSS** in a React + Vite project, pass props between components, and extract/use those values.

---

## 🛠 Concepts Covered
1. **Tailwind CSS Setup**
   - Tailwind utility classes applied directly in JSX.
   - Example:  
     ```jsx
     <h1 className="bg-green-400 p-4 rounded-xl mb-4">Tailwind Test</h1>
     ```

2. **Props in React**
   - Props allow passing values from a **parent component** to a **child component**.
   - Example:  
     ```jsx
     <Card username="SUNIL" someObj={myObj} />
     ```

3. **Destructuring Props**
   - Instead of `props.username`, we can directly destructure inside the function parameters:
     ```jsx
     function Card({ username }) {
       return <h1>{username}</h1>;
     }
     ```

4. **Default Values**
   - Use `||` to provide a fallback when no prop is passed:
     ```jsx
     <h1>{username || "MICHEAL"}</h1>
     ```

---

## 📂 File Structure
