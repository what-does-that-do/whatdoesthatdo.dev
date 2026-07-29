---
layout: ../../layouts/articleLayout.astro

title: "Mammal ID"
desc: "Software that detects mammals present in camera trap footage with ML. (In development)."
coverImage: "/project_images/mammalid/angel.webp"
link: "https://example.com/"
languages: ["Python", "ObjectDetection", "AI", "SQL", "Electron"]
openButton: "hidden"
---
As part of a multi-year project, I have built software able to detect a selection of mammals present in camera trap footage.

This started as part of my EPQ, where I built a Pi Zero camera trap able to detect hedgehogs. However, it has since evolved into a personal project with a standalone Electron application, capable of detecting multiple different mammals.

The hedgehog in the photo is Angel, a hedgehog I looked after while volunteering at the Suffolk Hedgehog Hospital. She has been successfully identified by the model as a hedgehog!

## Tech Stack

- **Backend**: Ultralytics YOLO & Python for all object detection processing, SQL database of file detais and detection information.
- **Frontend**: Electron UI with React, ShadCN components and Tailwind CSS.

## Skills Gained

- **Machine Learning**: I now have experience building machine learning models from scratch using Ultralytics. I have learnt about how to build datasets for training, and how to implement them successfully. I am looking forward to studying this in greater depth at university.
- **Electron UI**: Building an intuitive app for users to interact with, masking the complexities of the backend from the user. Additionally, learning the complexities of passing data between backend and frontend without causing hanging or crashes.
- **Packaging for production**: Overcoming the difficulties of building software able to run on different operating systems and setups, along with the issues of packaging for all required frameworks.

## Issues faced

- **Lack of data**: It took a long time to collect the high volumes of images required for training a machine learning model. I then had to ensure all the data was unique, so I collected the data myself, and contacted local wildlife charities for their videos.
- **Image labelling was slow**: Labelling all the images by hand was a labour intensive process. I sped this up by building tools, including video frame extraction scripts, and an integration with Label Studio to the previous model version (allowing for bounding box prediction), to allow the labelling to be done as efficiently as possible!
- **Packaging**: The executables produced by Electron were huge. So, I had to re-package the Python modules into single files to be accessed by the host, and reduce the amount of Node frameworks as much as possible. I also had to ensure the software could run across different platforms and architectures.
- **Running Python via Electron**: Python is difficult to control from Electron, as it is a different language and runs on the host machine directly instead of inside NodeJS. I created backend links between Electron and Python to ensure the UI did not hang while waiting for Python, and that messages could be passed securely between the processes. I also had to generate exe files for each Python file (and equivalents for other platforms), as the user may not have Python installed.

For more details behind the project, please [get in touch](/contact)!