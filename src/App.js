import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home";
import Header from "./components/Header";
// import ReviewList from "./components/ReviewsList";
import UserList from "./components/UsersList";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import CategoriesPage from "./components/CategoriesPage";
import ReviewsPage from "./components/ReviewsPage";
import SingleReview from "./components/SingleReview";
import SingleCategory from "./components/SingleCategory";
import CommentsList from "./components/CommentsList";
import SingleUser from "./components/SingleUser";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" elememt={<UserList />} />
        <Route path="/users/:username" element={<SingleUser />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/reviews/:review_id" element={<SingleReview />} />
        <Route path="/reviews/:topic" element={<SingleCategory />} />
        <Route path="/reviews/:review_id/comments" element={<CommentsList />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
