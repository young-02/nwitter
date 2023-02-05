import React from 'react';
import { Link } from 'react-router-dom';
import Videos from '../pages/Videos';

export default function Nav() {
  return (
    <nav>
      <Link to="/"> Home</Link>
      <Link to="/Vidoes"> Videos</Link>
    </nav>
  );
}
