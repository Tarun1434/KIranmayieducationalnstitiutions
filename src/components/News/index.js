import React from 'react'
import './index.css'
import Header from '../Header'
function News() {
  const newsList = [
    {
      id: 1,
      title: 'Annual Fest 2025',
      date: 'January 15, 2025',
      content:
        'Join us for the Annual Fest with exciting events and competitions!',
    },
    {
      id: 2,
      title: 'Workshop on AI',
      date: 'February 10, 2025',
      content:
        'A hands-on workshop on Artificial Intelligence and Machine Learning.',
    },
    {
      id: 3,
      title: 'Placement Drive',
      date: 'March 5, 2025',
      content: 'Top companies visiting campus for recruitment.',
    },
  ]

  return (
    <>
      <Header />
      <div className='news'>
        <h2>News and Events</h2>
        <div className='news-list'>
          {newsList.map(news => (
            <div key={news.id} className='news-item'>
              <h3>{news.title}</h3>
              <p className='date'>{news.date}</p>
              <p>{news.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default News
