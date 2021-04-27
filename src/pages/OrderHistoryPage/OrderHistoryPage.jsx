import '../OrderHistoryPage/OrderHistoryPage.css';

import React from 'react';
import * as usersService from '../../utilities/users-service';

export default function OrderHistoryPage() {
	async function handleCheckToken() {
		usersService.checkToken();
	}

    return (
      <main className="OrderHistoryPage">
               <h1>Order History Page</h1>
               <button onClick={handleCheckToken}>
				            Check When My Login Expires
		  	       </button>
      </main>
    );
  }


