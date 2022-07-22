---
date: 2022-07-22
title: First Dive into Hosted .Net 6 with Azure App Service
---

### Motivation

I recently started a position at a mostly Microsoft shop. During my time there, I have mostly been working with Vue frontends and have not had a chance to do much back-end work. However, I have recently got a chance to get to work with some older .NET 4.5 applications. While working with these applications has definitely given me a bit of a feel for working in .NET, I still haven't had the chance to work on hosting them. 

During a recent meeting, someone mentioned that we have a $150 credit to explore features available with our company's Azure subscription. With my recent workload leading me into more .NET backend work, and having little experience with modern sysadmin/devops tasks, I thought that I would write a small .NET app and learn how to host it. 

I started my software development career with PHP, and most of my educational experience was taught with Python/Java/C++. Given this, I had some preconceptions about developer ecosystems -- namely that they would be very open and flexible, but also that they would take a while to get running. The last time that I hosted a website with a backend component, I had to mess with acquiring a VPS, installing a Linux distribution, messing with Apache configuration, and a mess of other technical details along the way. 

.NET 6, on the other hand, seems to hold your hand along the way which, in my opinion, provides a great developer experience to be able to get an app up and running. 

### Process to Create and Deploy .NET 6 Application to Azure Cloud

My first step was to create a new project. Multiple templates were available for me to choose from. I picked the ASP.NET Core Web App (Model-View-Controller) option so that the frontend could be mostly JS free. 

<img src="https://i.imgur.com/mqQ2n4y.png"></img>

It created a great sample application with an organized structure including: views, controllers, config file etc. This was a vastly different experience from using something like Python or PHP where I would have to pick a framework to use and then integrate it into my IDE. With .NET, I was able to create the project, write the code, and publish to a server -- all within the IDE. 

I wrote a (very) simple app that aggregates articles from different RSS feeds and combines them into a single page. 

<img src="https://i.imgur.com/2Tc05SE.png"></img>

Writing anything in a new language and framework is always somewhat frustrating, but the excellent documentation from Microsoft and easy-to-follow guides helped to soften the blow. I particularly enjoyed reading and following this article to figure out the basic structure of a .NET MVC app. [https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-mvc-app/start-mvc?view=aspnetcore-6.0&tabs=visual-studio](https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-mvc-app/start-mvc?view=aspnetcore-6.0&tabs=visual-studio)

The best part of the experience was in the deployment. As I previously said, I had expected that my free credit would get me a VPS that I could pick from that would hopefully meet the needs of the app. Instead, I found this article [https://docs.microsoft.com/en-us/aspnet/core/tutorials/publish-to-azure-webapp-using-vs?view=aspnetcore-6.0](https://docs.microsoft.com/en-us/aspnet/core/tutorials/publish-to-azure-webapp-using-vs?view=aspnetcore-6.0) that explained how to create and deploy an app from within the IDE. I will defer to that resource on how to create an app with Azure App Service; I'm sure that whatever I write here would become out of date soon, but I will note one caveat. Unlike the tutorial, I was not able to find a free tier under the Linux hosting option; I had to host with Windows to get that option. Go figure. 

If you would like to try and host this small RSS app yourself, here is the associated git repo. I make no claim to writing clean or extensible code here, so be warned!

[https://github.com/christophercalm/RSSAggro](https://github.com/christophercalm/RSSAggro)





