# Frontend Mentor - Notifications page solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Notifications page solution](#frontend-mentor---notifications-page-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![image](https://github.com/franclobo/notifications-page/assets/58642949/e06cb99d-54a8-4c0f-95e9-5127e720d7d6)


### Links

- Solution URL: [Notifications page](https://github.com/franclobo/notifications-page)
- Live Site URL: [Notifications page](https://notifications-page-pearl.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

```js
<div className="grid grid-cols-1 gap-4 mt-10 w-1/2">
        {data.map(item => (
          <div key={item.id} className={`${item.viewed === true ? "bg-white" : "bg-blue-100"} p-4 rounded-lg shadow-md cursor-pointer w-full`} onClick={() => handleMarkAsRead(item.id)}>
            <div className="flex items-start justify-center">
              <div className="flex items-center">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col items-start justify-center w-full">
                <div className="flex items-center justify-between w-full">
                  <div className=" flex flex-wrap items-center justify-start gap-1 ml-4">
                    <h2 className="text-lg font-bold">{item.name}</h2>
                    <p className="text-sm text-gray-500">{item.activity}</p>
                    <p className={`${item.message === "Chess Club" ? "font-bold text-blue-950":"text-sm"}`}>{item.message}</p>
                    {item.viewed ? null : <div className="w-4 h-4 bg-red-500 rounded-full"></div>}
                  </div>
                </div>
                <p className="text-sm text-gray-500 ml-4">{item.time}</p>
                {item.content.charAt(0) === "/" ? (
                  ""
                ) : (
                  <p className={`${item.content ? "border border-solid border-gray-300 p-5" : ""} text-sm text-gray-500 ml-4`}>{item.content}</p>
                )}
              </div>
              {item.content.charAt(0) === "/" ? (
                  <Image
                    src={item.content}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-md"
                  />
                ) : (
                  ""
                )}
            </div>
          </div>
```

### Continued development

I will continue to develop this project by adding more features and functionalities to it. I will also add more pages to the project to make it a full-fledged web application.

## Author

- Website - [WebMinds Studio](https://www.webmindsstudio.com/)
- Frontend Mentor - [@franclobo](https://www.frontendmentor.io/profile/franclobo)
- Twitter - [@Pancho2788](https://twitter.com/Pancho2788)

## Acknowledgments

I would like to thank Frontend Mentor for providing me with this challenge. It was a great learning experience for me. I would also like to thank the community for their support and guidance.

