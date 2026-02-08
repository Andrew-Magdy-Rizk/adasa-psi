import { RouterProvider } from "react-router-dom";

import "./App.css";
import { browserRouter } from "./components/layout/Router";

export default function App() {
  return (
    <div dir="rtl" className="bg-black">
      <RouterProvider router={browserRouter} />
    </div>
  )
}
