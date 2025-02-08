# NextAuth Session Issue in Next.js 15

This repository demonstrates a subtle bug related to NextAuth session handling in Next.js 15.  The issue revolves around passing the session object to a client-side route.  The problem is that if the user is not authenticated, an error may occur, not always readily apparent. This is because the client-side code depends on the session existing.

## Bug Description

The `About` page attempts to access the `session` object obtained using `unstable_getServerSession`.  If the user is not authenticated, `session` will be `null`, causing a runtime error. The error won't appear during development or server-side rendering if the authentication process is not simulated.

## How to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to `/about`. If you are not logged in, you will encounter the error (or see "Please sign in").
5. Log in through NextAuth, and the About page will display correctly. 

## Solution

The solution involves adding additional error handling and potentially a redirect to prevent the error and improve user experience.
