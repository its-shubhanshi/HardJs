# 👤 GitHub User Finder Task

## 🎯 Objective
- Create a small web app that can **search GitHub users** by username using the **GitHub API**.  
- Display user profile information in a stylish **card format**.  

---

## 📋 Requirements

1. **Search Input**
   - A text input box where user can type a GitHub username.  
   - A "Search" button to trigger the request.  

2. **Fetch GitHub API**
   - API Endpoint: `https://api.github.com/users/{username}`  
   - Handle invalid or non-existing usernames with an error message.  

3. **User Profile Card**
   - Display fetched user details:
     - Profile picture (avatar)  
     - Name / Username  
     - Bio (if available)  
     - Number of Public Repositories  
     - Followers & Following count  
     - Profile link (GitHub profile URL)  

4. **UI Styling**
   - Dark mode background.  
   - Profile card with **hover effect + shadow**.  
   - Avatar image with **circular border + neon glow**.  
   - Responsive layout for mobile & desktop.  

5. **Error Handling**
   - Show a clear error message if:
     - Username not found  
     - API request fails  

---

## ✅ Expected Outcome
- A responsive app that lets users enter a GitHub username and view their profile info.  
- Beautiful dark mode card UI with neon glow.  
- Smooth error handling for wrong usernames.  
