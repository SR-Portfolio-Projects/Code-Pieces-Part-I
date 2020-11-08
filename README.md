# Code-Pieces-Part-I
**This app uses a Nodejs [API](https://github.com/2nd-Level/CODE-PIECES-API) with authentication built in**
**Code Pieces App: https://code-pieces.vercel.app/**
##### Login Credentials
```
username = user
password = user
```
_______

**This is a small react application that simply allows you to manage post, called code pieces, about coding. This application has the ability to preform basic CRUD oprations on the post.**
### Inside The Code
- React Router
    - `withRouter()`
    - `Route`
    - `Switch`
    - `Redirect`: to redirect users back to home page when a private route is click and there is no token
    - Private routes able to use the render and component props
- React Router DOM
     - `Link`
     - `BrowserRouter`
- Hooks / Custom Hooks
- Axios
- Node Sass
- FontAwesome

<!-- ### Files and Folders
- assests
- components
- hooks
- utils -->

#### Pages
- [x] Pieces page
     - All pieces
- [x] Pieces details page
    - Page that displays the pieces(component to be imported into the Pieces page)
- [x] Piece page
    - Page that displays when a piece is clicked, information about one piece




### Pieces Logic
- [x] View Pieces Logic
- [x] Create Piece Logic
- [x] Delete Piece Logic
- [ ] Edit Piece Logic

### Comments Logic
- [x] View Comments Logic
- [ ] Create Comments Logic
- [ ] Delete Comments Logic
- [ ] Edit Comments Logic



### Branches
- [part1](https://github.com/SR-Portfolio-Projects/Code-Pieces-Part-I/tree/part1)
    - uses classes to manage state
- [part1-refactoring](https://github.com/SR-Portfolio-Projects/Code-Pieces-Part-I/tree/part1-refactoring) 
    - refactored to use hooks to manage state
    - added ability to like pieces
- [UI]()
    - React Router

### Users Authentication Functionality
- [ ] Register
- [x] Login
    - default: username = user password = user
- [x] Logout

### The Code Pieces
- [x] User has the ability to add a code piece
- [x] User has the ability to like a code piece 
    - user is ony able to like it once
    - if the like button is clicked a second time it removes the like
    - when user has liked a piece the liked icons is a different color
- [x] User has the ability to delete a piece
- [ ] User has the ability to update a piece

### The Comments
- [ ] User has ability to add comments
- [ ] User has ability to delete comments
- [ ] User has ability to edit comments
- [x] User has ability to see comments



**Come Back Too**
- [ ] Closing the comment after they are opened [This](https://github.com/SR-Portfolio-Projects/React-Hamburger-Menu)




