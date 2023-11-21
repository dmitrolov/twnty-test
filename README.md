# twnty-test

How to run:
1. Download NodeJS version 20.9.0 or above
2. Download the project and unpack or clone into the development environment
3. Open the terminal (e.g. `win + r` then type `cmd` for windows)
4. Open the `twnty-test` folder (you can use this command `cd %download_folder%\twnty-test`)
5. Type 'npm i' to install node_modules
6. Type `npm run dev`, it should automatically open the browser with application
7. If not - open it by yourself in browser. The link should be http://localhost:3000/
8. If you have any problems, you can contact me here `dmitrolov@gmail.com`

Feedback:
1. Created Git repo, as the results should be there, and to show development sequence.
2. Started project implementation. Added all libs.
3. Forgot to add .idea to .gitignore. Removed that folder.
4. Implemented "home page". No issues.
5. Decided to choose first "public API" from google search (DummyJSON). 
6. Added "Weather page" and API for it. No issues.
7. I found that there are not enough functionality in chosen API for "real-time" data, so I started to look for another one. I decided to take weather API as it was first mentioned in technical task.
8. Wasted a bit of time to found appropriate weather API, as all free APIs are very limited. Rewrote to new API
9. Added Sort and Filtration. Waste a bit of time to debug re-rendering styled components problem.
10. Added errors handling. No issues.
11. Added more styles and responsiveness. No issues.
12. Wrote the instructions on how to run the app locally.
13. Sent task on review, got feedback
14. Added linter
15. Divided the project into more files
16. Added SSR
17. Added weather item detailed info 