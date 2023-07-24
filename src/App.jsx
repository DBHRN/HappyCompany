import { BrowserRouter, Routes, Route} from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import { AuthProvider } from "./context/AuthContext"
import TasksPage from "./pages/TasksPage"
import TaskFormPage from "./pages/TaskFormPage"
import ProfilePage from "./pages/ProfilePage"
import HomePage from "./pages/HomePage"
import ProtectedRoute from "./ProtectedRoute"
import Header from "./components/header"
import Footer from "./components/footer"
import Navbar from "./components/Navbar"
import AboutUs from "./pages/AboutUs"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import Products from "./pages/Products"
import { TaskProvider } from "./context/TasksContext"
import { UseMenu } from "./context/menuContext"
import ProductInfo from "./pages/ProductInfo"
import { ProductProvider } from "./context/ProductsContext"


function app() {
    const { menu } = UseMenu();
    
    return (
      <AuthProvider>
      <ProductProvider>
          <TaskProvider>
              <BrowserRouter>
                <Header/>
                  <Routes>
                      <Route path="/" element={<HomePage/>}/>
                      <Route path="/login" element={<LoginPage/>}/>
                      <Route path="/register" element={<RegisterPage/>}/>
                      <Route path="/about-us" element={<AboutUs/>}/>
                      <Route path="/products" element={<Products/>}/>
                      <Route path="/products/:id" element={<ProductInfo/>}/>
                      <Route path="/contact" element={<Contact/>}/>
                      <Route element={<ProtectedRoute/>} >
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="/tasks" element={<TasksPage/>}/>
                        <Route path="/add-task" element={<TaskFormPage/>}/>
                        <Route path="/tasks/:id" element={<TaskFormPage/>}/>
                        <Route path="/profile" element={<ProfilePage/>}/>
                      </Route>
                  </Routes>
                  { menu === true ? (<Navbar/>) : (<></>)}
                <Footer/>
              </BrowserRouter>
          </TaskProvider>
      </ProductProvider>
      </AuthProvider>
    )
}
export default app