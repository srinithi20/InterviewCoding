import React from 'react'

import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>Order History</h1>
        <div className="navContent">
          <div className="navLinks">
            {/* <Link to="/">Back to Order Details</Link>  */}
          </div>
        </div>
      </section>
    </nav>
  )
}
