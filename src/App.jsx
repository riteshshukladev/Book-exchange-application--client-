import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // or 'react-query' if using v3
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../src/pages/Login";
import Signup from "../src/pages/Signup";
import ProtectedRoute from "./components/protected-route/protectedRoute";
import Home from "./pages/Home";
// import BookLis from "./components/user-pages/MatchMaking";
// import FilterBooks from "./components/user-pages/FilterBooks";
import MatchMaking from './components/user-pages/MatchMaking'
import BookListing from "./components/user-pages/BookListing";
import FilterBooks from "./components/user-pages/FilterBooks";
import Profile from "./components/user-pages/Profile";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          >
            <Route path ="add-book" element = {<BookListing/>}/>
            <Route path="book-filter" element={<FilterBooks />} />
            <Route path="book-matchmaking" element={<MatchMaking />} />
            <Route path="user-profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
