import React, { createRef, useEffect } from 'react'

const Comments = () => {
  const commentRef = createRef()

  useEffect(() => {
    const utterances = document.createElement('script')

    const utterancesConfig = {
      src:'https://utteranc.es/client.js'
      , repo: 'samsamhan/ssh_blog_comments'
      , theme: 'github-light'
      , 'issue-term': 'url'
      , async: true
      , crossorigin: 'anonymous'
    }

    Object.entries(utterancesConfig).forEach(([key, value]) =>{
      utterances.setAttribute(key,value)
    })

    commentRef.current.appendChild(utterances)

  }, [])

  return <div class="comments" ref={commentRef}></div>

}

export default Comments