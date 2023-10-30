'use client'

import styles from './page.module.css'
import React, { useState } from 'react';

export default function Home() {
  const [query, setQuery] = useState('');
  const [responseText, setResponseText] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResponseText('Thinking...')

    const formData = new FormData();
    formData.append('query', query);

    const response = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/process_form', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log(responseData);
      setResponseText(responseData.response)
    } else {
      console.error('Failed to submit:', response.statusText);
    }
  };

  return (
    <main className={styles.main}>
      <div>
        <h1>Sup.</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        {responseText}
      </div>
    </main>
  )
}
