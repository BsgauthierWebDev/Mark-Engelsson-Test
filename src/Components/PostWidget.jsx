import React, {useState, useEffect} from 'react'
import { useQuery, gql } from '@apollo/client'
import moment from 'moment'
import {Link} from'react-router-dom'
import '../Styles/PostWidget.css'

const GET_RECENT_POSTS = gql`
  query GetPostDetails {
    posts(
      orderBy: createdAt_ASC
      last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
  }
`

const PostWidget = () => {
  const {loading, error, data} = useQuery(GET_RECENT_POSTS)
  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <div className = 'PostWidget'>
      <h3 className = 'PostWidget-header'>
        Recent Posts
      </h3>
      {data.posts.map((
        {
          title, featuredImage, createdAt, slug
        }
      ) => (
        <div key = {title} className = 'PostWidget-title'>
          <div className = 'PostWidget-image-container'>
            <img 
              alt = {title}
              height = '45px'
              width = '60px'
              className = 'PostWidget-image'
              src = {featuredImage.url}
            />
          </div>
          <div className = 'PostWidget-date'>
            <p className = 'PostWidget-date-content'>
              {moment(createdAt).format('DD MMM, YYYY')}
            </p>
            <Link to = {`/post/${slug}`} key = {title} className = 'PostWidget-link'>
              {title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget