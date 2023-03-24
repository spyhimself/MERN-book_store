import { Route, Routes } from "react-router-dom";
import "./App.css";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import BookList from "./components/content/book/BookList";
import Books from "./components/content/book/Books";
import Home from "./components/content/Home";
import BookContextProvider from "./context/BookContext";
import CategoryContextProvider from "./context/CategoryContext";
import Form from "./components/content/book/Form";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Container>
        <Routes>
          <Route path="/">
            <Route path="/" element={<Home />} />
            <Route
              path="books"
              element={
                <BookContextProvider>
                  <Books />
                </BookContextProvider>
              }
            />
          </Route>
          <Route path="/auth">
            <Route path="books">
              <Route
                path=""
                element={
                  <BookContextProvider>
                    <BookList />
                  </BookContextProvider>
                }
              />
              <Route
                path="add"
                element={
                  <CategoryContextProvider>
                    <BookContextProvider>
                      <Form />
                    </BookContextProvider>
                  </CategoryContextProvider>
                }
              />
              <Route
                path="edit/:id"
                element={
                  <CategoryContextProvider>
                    <BookContextProvider>
                      <Form />
                    </BookContextProvider>
                  </CategoryContextProvider>
                }
              />
            </Route>
          </Route>
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
