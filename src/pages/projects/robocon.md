---
layout: ../../layouts/articleLayout.astro

title: "Leading RoboCon"
desc: "My time as leader of the Hills Road robotics society running the RoboCon competiton."
coverImage: "https://robocon.uk/images/news/Review2025/IMG_8498.JPG"
link: "https://robocon.uk/news/robocon-2025-review/"
languages: ["Python", "C", "Node", "Astro"]
---

> RoboCon is a competition, run by Hills Road students, for local secondary schools. Each school gets 6 months to build an autonomous robot using a loaned kit (developed by Hills Road students), to go head-to-head during a competitive game to score the most points. For more info, visit the [RoboCon website](https://robocon.uk/)!

I was selected as staff to become leader of the HRSFC Robotics Society in Janurary 2024, I remained as leader until I left in summer 2025.

## My responsibilities

As leader I was responsible for:

- Ensuring the competition ran smoothly, running competition and kick-off event days.
- Liaising with staff and students at secondary schools, offering support over video calls, in-person events and emails.
- Delegating tasks between my team, and planning out tasks to ensure we were prepared for the competition.
- Building and debugging the robot kit we built and lent out to schools.
- Engineering a suitable, fun challenge for the schools to compete in and built robots for.

## Skills Gained

- **Teamwork**: delegating tasks and ensuring the whole team was happy and worked together running the events.
- **Problem solving**: fixing bugs with the kit, helping students on competition days fix their robots, and solving technical faults at the competition events.
- **Public speaking**: commentating during the competition rounds, hosting events, doing prize presentations and kick-off presentations.

- **Large Codebase debugging**: Our codebase for the Raspberry Pi brains we lend out to schools is massive, I developed skills in finding bugs, fixing them, and maintaining a large codebase for future developers.
- **Writing clear docs**: Clearly documented code is important for the upcoming students, and for those competing at RoboCon, I re-documented large parts of the codebase when building the [RoboCon docs website](https://docs.robocon.uk/).
- **Networking & Websockets**: I built live sockets to feed logs and camera feeds from the arena robots, to the live screens at the competition. I also maintained a system to feed the music and commentary between two rooms at the competition.

### Favourite projects I worked on

- **Live camera & log feeds**: I rebuilt the system feeding camera and logs to the screens at the competition. It was originally a HTTP polling system, which was slow and inefficient. I built a live WebSocket to dynamically send logs and images to the screens the moment they were updated. This was more efficient and reliable during the competition.
- **New websites**: I was heavily involved with building both the [RoboCon main](https://robocon.uk/) and [RoboCon docs](https://docs.robocon.uk/) websites. I learnt how to built websites with NodeJS, and successfully built two easily maintainable websites that were clear and easy to navigate.
- **Live synced audio**: At the competition, we are split between the competition arena and the robot-building room. I setup a system to stream the audio feed from the arena into the robot-building room in as low-latency as possible. This gave me a deeper knowledge of networks and the issues faced with them!
- **Working with schools**: I thoroughly enjoyed working with schools to allow them to build robots. I taught 11-15 year olds Python, and helped them debug their code, passing on knowledge I had learnt. This was extremely rewarding throughout my two years at RoboCon.

I still volunteer at this competition every year to help the current students, and I really enjoy seeing how teams have conquered the competition differently every year!

## Public Articles

The below have been published about the competitions I was involved with running.

- **Hills Road Sixth Form Article for 2025**: "[RoboCon 2025 is a 'flaming' success](https://www.hillsroad.ac.uk/latest-news/robocon-2025)"
- **RoboCon Official Articles**: "[RoboCon 2024 in review](https://robocon.uk/news/robocon-2024-review/)" and "[RoboCon 2025 in review](https://robocon.uk/news/robocon-2025-review/)"

### About the Robotics Society

Hills Road robotics is a society, run by students at Hills Road. The society builds robots to compete at [Student Robotics](https://studentrobotics.org/) (a robot competition run by Southampton university), and runs a similar robot competition for local secondary school students "RoboCon".