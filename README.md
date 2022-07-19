<div id="top"></div>



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
 
  <h3 align="center">Zain Ul-Abdeen's Portfolio Website</h3>
  <p align="center">
    <a href="https://github.com/Zidan2k9/ulabdeen-nextjs-portfolio"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://www.zainulabdeen.live/">View Project</a>
    ·
    <a href="https://github.com/Zidan2k9/ulabdeen-nextjs-portfolio//issues">Report Bug</a>
    ·
    <a href="https://github.com/Zidan2k9/ulabdeen-nextjs-portfolio">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#built-with">APIs</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project



This is a simple multi-page portfolio website for all my academic, work experience and side projects and includes detailed descriptions of each individual project along with GitHub repository links and demonstration videos. Additional sections are dedicated to "About Me", my skills and contact details. The homepage has links to my email address, LinkedIn and GitHub profile, in addition to a download link for my CV. It also contains sections related to information about my skills, myself and a working contact form that will forward the user's message directly to my email. This functionality was accomplished by integrating the [SendGrid API](https://docs.sendgrid.com/for-developers/sending-email/quickstart-nodejs)  The website is fully responsive for a wide range of screen sizes. [The website is deployed on a Vercel instance ](https://github.com/Zidan2k9/ulabdeen-nextjs-portfolio/deployments/activity_log?environment=Production) and connected to my custom domain [zainulabdeen.live](https://www.zainulabdeen.live).



<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [React.js](https://reactjs.org/)
* [Next.js](https://nextjs.org/)
* [Node.js](https://nodejs.org/en/)
* [Tailwind CSS](https://tailwindcss.com/)
* [JavaScript](https://www.javascript.com/)
* [NPM](https://www.npmjs.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

### APIs

* [SendGrid API](https://docs.sendgrid.com/for-developers/sending-email/quickstart-nodejs)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

Clone or download a copy of the repository to run the portfolio website locally.

### Prerequisites

* Run the following command in your terminal to clone
  ```sh
  git clone https://github.com/Zidan2k9/ulabdeen-nextjs-portfolio
  ```
First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

 Store your SendGrid API key in `.env.local` as
 ```js
 SENDGRID_API_KEY='PASTE API KEY HERE'
 ```
 and reference in  `api/sendgrid.js` as
   ```js
   sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
   ```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

<p align="right">(<a href="#top">back to top</a>)</p>







<!-- ROADMAP -->
## Roadmap
- [x] Pushed initial version of website to main branch in remote.
- [x] Changed colour theme to white, green and black.
- [x] [Integrated Light/Dark modes](https://tailwindcss.com/docs/dark-mode)
- [x] [Integrated SendGrid API to receive emails directly from the website ](https://docs.sendgrid.com/for-developers/sending-email/quickstart-nodejs) 
- [x] [Deployed repository to Vercel instance for Continuous Deployment.](https://vercel.com/guides/deploying-nextjs-with-vercel)
- [x] Connected custom domain from Name.com with Vercel instance.
- [ ]  Fix unresolved CSS formatting of some elements.
- [ ] Add toggle buttons for light and dark modes.
- [ ] Add particle effects to website background using [tsparticles](https://www.npmjs.com/package/tsparticles)
- [ ] Add more robust RegEx based user input handling for the contact form.
- [ ]  Continue to add projects and skills via Vercel CI/CD pipeline as you improve! 
<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Zain Ul-Abdeen ieulabdeen.zain@gmail.com

Project Link: [https://github.com/Zidan2k9/ulabdeen-nextjs-portfolio/](https://github.com/Zidan2k9/ulabdeen-nextjs-portfolio/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

I would like to acknowledge [Clint's YouTube channel](https://www.youtube.com/channel/UCmT9TwcIb_yAe7-Uqhn3fBA) for providing the template for my website.

I have also used the following resources: 

* [react-icons - A library of popular icons](https://react-icons.github.io/react-icons/).
* [heroicons -  Beautiful hand-crafted SVG icons,by the makers of Tailwind CSS](https://heroicons.com/).
* [next-themes - An abstraction for themes for Next.js apps, used in this project to implement a dark theme according to local system settings or manual preferences](https://www.npmjs.com/package/next-themes).
* [@sendgrid/mail - This is a dedicated service for interaction with the mail endpoint of the [SendGrid v3 API]](https://www.npmjs.com/package/@sendgrid/mail)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/zainulabdeen1
