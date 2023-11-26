/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom"

export default function ProtectedRoute({ user, children }) {
  const navigate = useNavigate();
  if (!user) {
    navigate('/');
    return null;
  }
  return children;
}