---
layout: ../../layouts/articleLayout.astro

title: "CommuteClever Webapp"
desc: "A transport app with live data feeds, route planning, delay predictions and SMS notifications."
coverImage: "/project_images/commuteclever/main_screenshot.webp"
link: "https://github.com/what-does-that-do/CommuteClever"
languages: ["Python", "SQL", "Flask"]
openButton: "GitHub Repo"
---

## The Problem

UK public transport is difficult to navigate, due to having to use multiple different apps just to view schedules and plan routes.

I built this app, CommuteClever, to connect between the train and bus APIs, and provide live times and notifications.

**The live website is not available** due to the cost of maintaining the API connections, however there is a YouTube video below showing the system working instead!

### App features:
- **Live times**: Down to 30s accurate bus and train times, pulled directly from their APIs, and linked with the schedule data.
- **Schedules**: Schedules pulled directly from the transport APIs, and cached in a database locally for quick access.
- **Route Planning**: Using Djikstra's algorithm, routes can be planned easily between multiple modes of public transport.
- **Notifications**: Time to leave, delay and cancellation notifications via SMS in real-time.
- **Delay Predictions**: Filling in the gaps still left by the railway APIs, I could predict delays on the trains before they happened. For example, the arriving service is delayed 10 mins, meaning the next service will be delayed by the same amount.

## Challenges

- **Managing a large database**: The amount of schedule data was gigabytes in size. I re-formatted this using Python into an SQL databse, allowing it to be accessed much quicker than by iterating through SOAP and JSON files. However, I ran into issues with concurrency and poor read speeds with SQL - so in future I would consider a database able to handle larger files.
- **Optimised System**: Flask was resource intensive and slow while running. In future, a compiled language would be more suitable, as Python is inherently slow for web applications. I would build an app next time where the client is directly connected to the API feeds. This would also reduce the load for the backend database.