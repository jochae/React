// ProtectedRoute.js
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useContext(UserContext);

  if (loading) return null; // 로딩 중엔 렌더링하지 않음

  if (!user) return <Navigate to="/" replace />;

  return children;
}
