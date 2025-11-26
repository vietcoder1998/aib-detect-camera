AIB Landing Page - How to Open
================================

IMPORTANT: This website cannot be opened by double-clicking index.html due to browser security restrictions.

To view the website:

METHOD 1 (Easy - One Click):
1. Double-click "start-server.bat"
2. The website will open automatically in your browser at http://localhost:8080
3. Press Ctrl+C in the terminal window to stop the server when done

METHOD 2 (Manual):
1. Open PowerShell in this folder
2. Run: python -m http.server 8080
3. Open browser and go to: http://localhost:8080
4. Press Ctrl+C to stop the server

METHOD 3 (From project root):
1. Open PowerShell in the project root (abm-landing-page)
2. Run: npx vite preview
3. Follow the URL shown in the terminal

Requirements:
- Python must be installed on your system

For deployment to a web server, simply upload all files in this folder.
