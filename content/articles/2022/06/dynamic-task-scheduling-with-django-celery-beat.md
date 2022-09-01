---
title: Dynamic task scheduling with Django celery beat
description: A step by step guide on how to implement a Dynamic Task Scheduler with Django Celery Beat
date: 2022 06
author: Chavez Harris
githubProfileImage: https://avatars.githubusercontent.com/u/74829200?v=4
tags: [docker, celery, python]
---

Let's walk through the steps of building a simple dynamic task scheduler using Django Celery Beat. You’ll learn how to implement a database-backed dynamic task scheduler in a Django app. We’ll even put together a simple API for managing periodic tasks from API endpoints. Unlike many other tutorials out there, This one is understandable and easy to learn.

<!-- more -->

## Prerequisites

Even though most of the python packages you need are within a **requirements.txt** file here are the requirements you’ll need moving forward. 

- Virtualenv - A Tool for managing virtual environments in python.
- Python 3.8
- Pip
- Docker Desktop
- Basic knowledge of Docker and Python

## Overview

Let’s imagine that we have two functions that we need to execute at different intervals.

1. A **print_hello** function - This function should execute every 3 seconds 
2. A **write_to_file** function - It function should execute every 5 seconds.

Apart from these functions executing at the intervals mentioned above, we can also alter the time changing the intervals and other parts of the period job via an API endpoint that we’ll be defining.

Here are some features that we’ll work on:

- Manage periodic tasks via an API Endpoints
  - Create tasks
  - Update Tasks
  - Delete Tasks
- Manage tasks via the Django admin site

## But, how is this possible?

This is made possible by the following major components

- A RabbitMQ Server running in docker
- A Celery worker
- A Beat scheduler service

If you would like to explore how these components work in greater detail check out the links in the resources section at the end of this tutorial

## Let's build it

### Setup

Lets begin by creating a python virtual environment. when you are done install the following packages from this file https://github.com/codedbychavez/django-celery-beat-implementation/blob/main/djbeat/requirements.txt into the virtual environment. Continue…

1. Create a django project called **djbeat**
2. cd into the project you created above and create an app called **api**
3. in the api folder create a file called **urls.py**
4. open the **settings.py** file from the project folder
5. Add the following to the to **INSTALLED_APPS**

```python
# settings.py

INSTALLED_APPS = [
    ...
    'django_celery_beat',
    'rest_framework',
    'api',
]
```

6. Add the following towards the end of the **settings.py** file:

```python
# settings.py

CELERY_BROKER_URL = 'amqp://guest:guest@localhost:5672//'

CELERY_BEAT_SCHEDULER = 'django_celery_beat.schedulers:DatabaseScheduler'

```

### Development

Now that the initial setup is out of the way lets dive into the code

1. Open the urls.py file from the project folder (not the one in the api folder)
  a. Import include
  b. Add path('api/', include('api.urls')) to urlpatterns

the file should now look like this:

```python

# djbeat/djbeat/urls.py

from django.contrib import admin
from django.urls import path, include # Import include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')) # Add api urls
]

```

2. Open the **urls.py** file from the **api** folder and give it the following content (These are just URL patterns that are mapped to respective functions in **views.py** which we will set up next):

```python
# api/urls.py

from django.urls import path
from .views import *

urlpatterns = [
    # api paths
    path('create', create_interval_periodic_task.as_view()),
    path('update', update_interval_periodic_task.as_view()),
    path('delete', delete_interval_periodic_task.as_view()),
]

```

3. Next let's add the API views to the **api/views.py** file:

```python

# api/urls.py

from django.urls import path
from .views import *

urlpatterns = [
    # api paths
    path('create', create_interval_periodic_task.as_view()),
    path('update', update_interval_periodic_task.as_view()),
    path('delete', delete_interval_periodic_task.as_view()),

]

3. Next let’s add the API views to the api/views.py file:

# api/views.py

from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

from django_celery_beat.models import PeriodicTask, IntervalSchedule, PeriodicTasks

# Create your views here.


class create_interval_periodic_task(APIView):
    """
    Create an interval-based periodic task
    Expected request object looks like the below
    {
        "interval": 10,
        "period_choice": "seconds",
        "name": "create print_hello",
        "task": "djbeat.api.celery_init.print_hello"
    }
    """
    def post(self, request, *args, **kwargs):
        interval = request.data['interval']
        period_choice = get_period_choice(request.data['period_choice'])
        name = request.data['name']
        task = request.data['task']

        # Switch for period choices
        if period_choice == 'DAYS':
            schedule, created = IntervalSchedule.objects.get_or_create(every=interval, period=IntervalSchedule.DAYS)
            # CREATE PERIODIC TASK
            PeriodicTask.objects.create(name=name, task=task, interval=schedule)

        elif period_choice == 'HOURS':
            schedule, created = IntervalSchedule.objects.get_or_create(every=interval, period=IntervalSchedule.HOURS)
            # CREATE PERIODIC TASK
            PeriodicTask.objects.create(name=name, task=task, interval=schedule)

        elif period_choice == 'MINUTES':
            schedule, created = IntervalSchedule.objects.get_or_create(every=interval, period=IntervalSchedule.MINUTES)
            # CREATE PERIODIC TASK
            PeriodicTask.objects.create(name=name, task=task, interval=schedule)

        elif period_choice == 'SECONDS':
            schedule, created = IntervalSchedule.objects.get_or_create(every=interval, period=IntervalSchedule.SECONDS)
            # CREATE PERIODIC TASK
            PeriodicTask.objects.create(name=name, task=task, interval=schedule)
     
     

        elif period_choice == 'MICROSECONDS':
            schedule, created = IntervalSchedule.objects.get_or_create(every=interval, period=IntervalSchedule.MICROSECONDS)
            # CREATE PERIODIC TASK
            PeriodicTask.objects.create(interval=schedule, name=name, task=task)


        user_message = 'Created an interval-based periodic task'
        print(user_message)
        return Response(user_message, status=status.HTTP_200_OK)

class delete_interval_periodic_task(APIView):
    """
    Delete an interval-based periodic task
    Expected request object looks like the below (Id of interval period task)
    {
        "id": 10, 
    }
    """
    def post(self, request, *args, **kwargs):
        periodic_task_id = request.data['id']
        periodic_task = PeriodicTask.objects.get(id=periodic_task_id)
        periodic_task.delete()
        user_message = 'Deleted an interval-based periodic task'
        print(user_message)
        return Response(user_message, status=status.HTTP_200_OK)


class update_interval_periodic_task(APIView):
    """
    Create an interval-based periodic task
    Expected request object looks like the below
    {

        "id": 1,
        "interval": 10,
        "period_choice": "seconds",
        "name": "update print hello",
        "task": "djbeat.api.celery_init.print_hello_update"
    }
    """
    def post(self, request, *args, **kwargs):
        print(request.data)
        periodic_task_id = request.data['id']
        interval = request.data['interval']
        period_choice = get_period_choice(request.data['period_choice'])
        name = request.data['name']
        task = request.data['task']


        # SWITCH FOR PERIOD CHOICES

        if period_choice == 'DAYS':
            # Get the schedule instance
            schedule_instance = PeriodicTask.objects.get(id=periodic_task_id)
            
            schedule_instance_id = schedule_instance.interval.id

            # Update the schedule
            IntervalSchedule.objects.filter(id=schedule_instance_id).update(every=interval, period=IntervalSchedule.DAYS)

            # Update the periodic task
            PeriodicTask.objects.filter(id=periodic_task_id).update(name=name, task=task)

        elif period_choice == 'HOURS':
            # Get the schedule instance
            schedule_instance = PeriodicTask.objects.get(id=periodic_task_id)
            
            schedule_instance_id = schedule_instance.interval.id

            # Update the schedule
            IntervalSchedule.objects.filter(id=schedule_instance_id).update(every=interval, period=IntervalSchedule.HOURS)

            # Update the periodic task
            PeriodicTask.objects.filter(id=periodic_task_id).update(name=name, task=task)

        elif period_choice == 'MINUTES':
            # Get the schedule instance
            schedule_instance = PeriodicTask.objects.get(id=periodic_task_id)
            
            schedule_instance_id = schedule_instance.interval.id

            # Update the schedule
            IntervalSchedule.objects.filter(id=schedule_instance_id).update(every=interval, period=IntervalSchedule.MINUTES)

            # Update the periodic task
            PeriodicTask.objects.filter(id=periodic_task_id).update(name=name, task=task)

        elif period_choice == 'SECONDS':
            # Get the schedule instance
            schedule_instance = PeriodicTask.objects.get(id=periodic_task_id)
            
            schedule_instance_id = schedule_instance.interval.id

            # Update the schedule
            IntervalSchedule.objects.filter(id=schedule_instance_id).update(every=interval, period=IntervalSchedule.SECONDS)

            # Update the periodic task
            PeriodicTask.objects.filter(id=periodic_task_id).update(name=name, task=task)

        elif period_choice == 'MICROSECONDS':
            # Get the schedule instance
            schedule_instance = PeriodicTask.objects.get(id=periodic_task_id)
            
            schedule_instance_id = schedule_instance.interval.id

            # Update the schedule
            IntervalSchedule.objects.filter(id=schedule_instance_id).update(every=interval, period=IntervalSchedule.MICROSECONDS)

            # Update the periodic task
            PeriodicTask.objects.filter(id=periodic_task_id).update(name=name, task=task)


        user_message = 'Updated an interval-based periodic task'
        print(user_message)
        return Response(user_message, status=status.HTTP_200_OK)

# Helper functions
def get_period_choice(period_choice):
    return period_choice.upper()

```

The above views accepts an object via a POST request and either **Create**, **Update** or **Delete** a specific periodic task.

4. Create a **celery_init.py** file in the inner project folder (**djbeat/djbeat/celery_init.py**):

```python

# djbeat/djbeat/celery_init.py

from __future__ import absolute_import
import os
import sys
import requests
from datetime import datetime

from celery import Celery
import django

app = Celery('djbeat')

app.config_from_object('django.conf:settings', namespace='CELERY')

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'djbeat.settings')
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../djbeat')))
django.setup()
from django.conf import settings
app.autodiscover_tasks(lambda: settings.INSTALLED_APPS)

@app.task(bind=True)
def print_hello(self):
    print('Hello World!')


@app.task(bind=True)
def second_task(self):
    print('second task!')
```

5. Open the **__init__.py** file in the **djbeat/djbeat/** directory and add the following:

```python

# djbeat/djbeat/__init__.py

from .celery_init import app as celery_app

```

6. Let's create a **docker-compose.yml** file for rabbitMQ (This is the queue for our dynamic tasks).

In the outermost project folder (**djbeat**) create a folder called **docker**. Inside the docker folder. create a file called **docker-compose.yml**

Give the **docker-compose.yml** file the following content:

```python

version: "3"

services:
 rabbitmq:
  image: "rabbitmq:3-management"
  ports:
    - "5672:5672"
    - "15672:15672"
  volumes:
    - "rabbitmq_data:/data"
volumes:
  rabbitmq_data:

```

## Running the app

1. Run `python manage.py makemigrations` and the `python manage.py migrate` command to complete the initial Django database setup
2. Create a Django superuser: 
```bash
python manage.py createsuperuser

```
3. **Make sure docker is running on your computer**, then **cd** into the folder where the docker compose file is and run:

```bash
docker compose up --build

```
4. Once the container is running open a new terminal, **cd** into the outermost project folder where the **celery_init.py** file is and run the following command:

```bash

celery -A djbeat worker --loglevel=info
```

The above command starts the celery worker.

6. Finally open a new prompt and run the following command to start the beat service (This is what listens for changes to the tasks we make using our API or the Django Admin site.)

## Making use of the App

From this point on you can Create, Update, And Delete periodic tasks.

Keep in mind that when creating a periodic task via the API or Django Admin site you must reference a predefined function from the **celery_init.py** file.

Note, that the purpose of the Django database is just used as a place to store references to actual python functions defined in the **celery_init.py** file and manage the schedule of these tasks.

## GitHub Repository

If you encounter any trouble please raise an issue here: https://github.com/codedbychavez/django-celery-beat-implementation

## Resources/ References

- https://django-celery-beat.readthedocs.io/en/latest/
- https://docs.celeryproject.org/en/latest/userguide/workers.html
- https://docs.celeryproject.org/en/latest/userguide/periodic-tasks.html#using-custom-scheduler-classes
- https://docs.celeryproject.org/en/latest/userguide/periodic-tasks.html#starting-the-scheduler