---
date: 2022-06-21
title: First Dive into Hosted .Net 6 with App Services
---

## motivation

I somewhat recently started a position at a mostly Microsoft shop. During my time there, I have mostly been working with Vue frontends and very little backend coding. However, I have recently been getting a chance to get to work with ASP.net Backends albeit without directly dealing with hosting and other pipeline related tasks. 

During a recent meeting, someone mentioned that we have $150 credit to explore features available with our company Azure subscription. With my recent workload leading me into more .Net backend work, and having little experience with modern sysadmin/devops tasks, I thought that I would write a small .net app and learn how to host it. 

Having started my software development career with PHP, and most of my educational experience having been taught with Python/Java/C++, I had some preconceptions about developer ecosystems -- namely that they would be very open and flexible, but also that they would take a while to get running. The last time that I hosted a website with a backend component, I had to mess with aquiring a VPS, installing a Linux distribution, messing with Apache configuration, and a mess of other technical details along the way. 

.Net, other the other hand, seems to hold your hand along the way which, in my opinion, provides a great developer experience. 

My first step was to create a new project. Multiple templates were available for me to choose from. I picked the ASP.NET Core Web App (Model-View-Controller) option so that the frontend could be mostly JS free. 

<img src="https://i.imgur.com/mqQ2n4y.png"></img>

It created a great sample application with an organized structure including: views, controllers, config file etc. This was a vastly different experience from using something like Python or PHP where I would have to pick a framework to use and then integrate it into my IDE. With .NET, I was able to create the project, write the code, and publish to a server -- all within the IDE. 

I wrote a (very) simple app that aggregates articles from different RSS feeds and combines them into a single page. 

<img src="https://i.imgur.com/2Tc05SE.png"></img>

Writing anything in a new language and framework is always somewhat frustrating, but the excellent documentation from Microsoft and easy-to-follow guides helped to soften the blow. I particularly enjoyed reading and following this article to figure out the basic structure of a .NET MVC app. (https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-mvc-app/start-mvc?view=aspnetcore-6.0&tabs=visual-studio)[https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-mvc-app/start-mvc?view=aspnetcore-6.0&tabs=visual-studio] 

The best part of the experience was in the deployment. As I previously said, I had expected that my free credit would get me a VPS that I could pick from that would hopefully meet the needs of the app. Instead, I found this article (https://docs.microsoft.com/en-us/aspnet/core/tutorials/publish-to-azure-webapp-using-vs?view=aspnetcore-6.0)[https://docs.microsoft.com/en-us/aspnet/core/tutorials/publish-to-azure-webapp-using-vs?view=aspnetcore-6.0] that explained how to create and deploy an app from within the IDE. I will defer to that resource on how to create an app with Azure App Service as I'm sure that whatever I write here would become out of date soon, but I will note one caveat. Unlike the tutorial, I was not able to find a free tier under the Linux hosting option; I had to host with Windows to get that option. Go figure. 

Lastly, as a Linux Guy™, I have to point out that 


https://github.com/christophercalm/RSSAggro
## give my caveats here


## technical writeup

### link to code
 
### how to deploy


