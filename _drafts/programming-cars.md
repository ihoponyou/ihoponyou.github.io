---
layout: post
title: programming cars
---

# Ryan Juckett's ["Damped Springs"](https://www.ryanjuckett.com/damped-springs/)

- use separate springs for camera distance vs rotation
- also euler integration is bad for spring stuff (velocity += accel, pos += velocity, etc.)

*should have taken diff. eq smh*

# AESTROM's ["TORSION Vehicle Physics Series"](https://www.youtube.com/playlist?list=PL2uvZKBCoAYnfkfYm47nP5S6UeBPJPbEF)

## steering

- use ackermann steering geometry to ensure vehicle drives in a circle
- use pacejka for slip ratio & angle

# Matthew Harris's ["Vehicle Feel Masterclass"](https://www.youtube.com/watch?v=n_A0RqeGado)

## power train feedback loop

### engine
- feed rpm into torque curve
- support feedback from tires

### clutch
- variable efficiency dependent on rpm

### transmission
- variable output rpm based on gear ratio
- simulate switching gears

### differential & wheel
- apply and receive friction

## tire (steering/acceleration) forces

- use pacejka for lateral/longitudinal forces; input the slip ratio/angle, get a normalized lateral/longitudinal force back

## driver assists

- brake tap + turning alot = enter drift
- recalibrate "no input" for continuing drift instead of straightening wheels
- cancel out drag/friction while drifting

## camera

- camera position should follow a target placed behind the vehicle
- camera should look at where the vehicle is moving
- shake around the camera on high impact

# Marco Monster's ["Car Physics for Games"](https://www.asawicki.info/Mirror/Car%20Physics%20for%20Games/Car%20Physics%20for%20Games.html)

## driving in a straight line

- traction = car's forward direction * engine scalar
- drag = car's lin. velocity * -(drag scalar) * car's speed
- rolling resistance = car's lin. velocity * -(rolling resistance scalar)
- longitudinal force = traction + drag + rolling resistance
- acceleration = longitudinal force / car's mass
- => car lin. velocity += acceleration * physics dt

note: rolling resistance scalar is ~30x the drag scalar

## braking

if the car is moving:
- traction = -(car's forward direction) * braking scalar

## wheel load/weight transfer

- weight = car's mass * gravity
- max traction = tire friction coefficient * weight
- rear weight = weight * (distance to rear axle from geometric center / wheelbase)
- front weight = similar to ^

if accelerating/decelerating at rate "a":

- rear weight -= (distance to geometric center from ground / wheelbase) *
car's mass * a
- front weight += same value as ^

## engine force

horsepower = torque * rpm / 5252

- drive force = car's forward direction * gear ratio * differential ratio *
transmission efficiency / wheel radius

{% highlight python %}
import os

def main:
    return 67
{% endhighlight %}

# Prototype Everything's ["Slip, Grip & Friction Circle Explained"](https://youtu.be/kmL7DnxeUTE?si=-kMG1M9f1Vso6siX)

## suspension

- track the length of the spring to calculate its speed; do not use point
velocity!

## slip ratio

- use pacejka-based curve
- input slip ratio, get "slip value" which informs grip

## other

- apply forces at the contact point

# Wassimulator's ["Programming Vehicles in Games"](https://wassimulator.com/blog/programming/programming_vehicles_in_games.html#sr)

## slip ratio

- asdads
