import React, { Component } from 'react'
import  { useContext } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";
// import a from '../../public/departments'

export class Sensors extends Component {
  render() {
    return (
      <div>
      <Hero
        title={
          "Smoke Sensor"
        }
        imageUrl={"https://fthmb.tqn.com/moMr1AH58jvnT9Ghlp0gY0rANdI=/3000x2250/filters:fill(auto,1)/GettyImages-183878104-59a8e50b685fbe0010f6f8d8.jpg"}
        desc={"Smoke sensors, or smoke detectors, come in two main types: ionization and photoelectric. Ionization detectors contain a small amount of radioactive material that ionizes air in a chamber, creating a current. Smoke entering the chamber disrupts this current, triggering the alarm. These detectors are more sensitive to fast-flaming fires. Photoelectric detectors use a light beam and a sensor within a chamber. Smoke scatters the light, causing it to hit the sensor and activate the alarm. These detectors are more effective at detecting smoldering fires. Both types are crucial for early fire detection and safety."}
      />
      <Hero
        title={
          "GPS Sensor"
        }
        imageUrl={"https://static.propertylogic.net/blog/1454924560/location_feature.jpeg"}
desc={"A GPS sensor determines location using signals from at least four satellites. Each satellite sends its position and time data. The sensor calculates the distance to each satellite based on signal travel time and uses this information to triangulate its exact position (latitude, longitude, and altitude) on Earth. This process allows for precise navigation and tracking."}
/>
<Hero
        title={
          "Temperature Sensor"
        }
        imageUrl={"http://www.bbc.co.uk/staticarchive/c734a6b463fbb6848a77201701bbf54f710ae67e.gif"}
        desc={"Temperature sensors measure temperature and are used in climate control, industrial processes, healthcare, automotive systems, consumer electronics, the food industry, and scientific research to ensure safety, efficiency, and optimal performance."}
      />
      <Hero
        title={
          "Water Sprinkler"
        }
        imageUrl={"https://tse1.mm.bing.net/th?id=OIP.aP7uHo-N6i88grqTvcDUHwHaEK&pid=Api&P=0&h=220"}
        desc={"Sprinkler sensors optimize irrigation by measuring soil moisture, monitoring weather, detecting leaks, and integrating with smart systems. They conserve water, reduce costs, and promote healthier plant growth in agriculture, gardening, and landscaping."}
      />
      <Hero
        title={
          "Heat Detector"
        }
        imageUrl={"https://baityhill.unc.edu/wp-content/uploads/2021/08/fire.jpg"}
        desc={"A heat detector senses temperature changes to detect fires. It is used in environments where smoke detectors might cause false alarms, such as kitchens or garages. When the temperature exceeds a set threshold or rises rapidly, the detector triggers an alarm, ensuring early fire detection and safety."}
      />
      <Hero
        title={
          "Fire Alaram"
        }
        imageUrl={"https://i.gifer.com/7VUL.gif"}
        desc={"In an AI fire system, a fire alarm plays a critical role in early detection and response. It integrates artificial intelligence to enhance detection accuracy and speed. When triggered by smoke, heat, or other fire indicators, the system analyzes data using AI algorithms to distinguish between real threats and false alarms. It then activates alerts, including notifications to mobile devices, alarms in buildings, and alerts to emergency services. This intelligent approach ensures swift action to minimize damage and protect lives during fire emergencies."}
      />
      <Hero
        title={
          "Mobile Notification"
        }
        imageUrl={"https://static.vecteezy.com/system/resources/previews/002/486/538/large_2x/mobile-notification-icon-vector.jpg"}
        desc={"Mobile notifications for fire systems enable real-time alerts on smartphones or other devices in case of fire emergencies. These notifications are typically triggered by smoke detectors, heat detectors, or fire alarms connected to a centralized system. They ensure that individuals and emergency responders are promptly informed, allowing for quick action to mitigate the fire risk and ensure safety."}
      />
     


     
      {/* <MessageForm /> */}
      </div>
    )
  }
}

export default Sensors
