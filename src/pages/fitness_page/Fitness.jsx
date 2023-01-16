import React from 'react'
import Navbar from '../../components/Navbar'
import FitnessHero from './fitness_components/FitnessHero'
import {Box ,Flex } from '@chakra-ui/react'
import SliderComponent from './fitness_components/SliderComponent' 
import Features from './fitness_components/Features'
import FitStartSale from '../../dynamicComp/FitStartSale'
import FitnessPricing from './fitness_components/FitnessPricing'
import Faqs  from '../../components/Faqs'
import Qna from '../../components/Qna'
import Footer from '../../components/Footer'
import ScrollBtn from '../../components/ScrollBtn'
const Fitness = () => {
  const faqs= [
    {q:'What are At-home workouts?',a:'At-home workouts let you experience the energy of a group fitness class, led by star trainers from the comfort of your home. We currently offer At-home classes across fitness formats like strength, cardio, HRX, S&C and yoga across all 7 days of the week. Most of the classes feature bodyweight workouts which means you won’t need equipment and free weights.  Classes are safe for all types of users - beginner, intermediate and advanced. In case you are suffering through an injury, chronic pain or medical condition, we recommend checking with a medical expert before attending classes.  To make the most of these classes, we recommend using the Energy Meter feature that will give real-time feedback on your workout and help you compete with others working out with you. You will get a detailed report of your energy score and class rank at the end of a session. To get started, all you need is good internet connection (a minimum 2 MBps connection), an adequately charged device and a pair of comfortable shoes (needed for a few workouts).'},
    {q:"What is a cultpass Home?",a:"cultpass Home gives you unlimited access to all at Home sessions and DIY (on demand) sessions. This includes unlimited access to fitness, dance, meditation, health video content and podcasts. A cultpass Home member has an all access pass to celebrity masterclasses, ability to workout with friends and track their energy scores, and  monitor their progress in the form of reports. You can purchase the membership through the official cult.fit website or on the android app."},
    {q:"Are there any trial sessions for cultpass Home? Where can I check my eligibility?",a:"Every user can initiate a 7-day free trial by starting any At home, or on-demand video in Fitness or Mindfulness tabs under the 'At home' section. Any user who hasn’t explicitly started their free trial is free to do so. Once you start your trial, the remaining days of the free trial will be indicated on your schedule page as well as your At home page."},
    {q:"If I buy the cultpass Home on one device, can I use it on another device?",a:"Yes, if you login with your same credentials, you can use cultpass Home on other devices. However, you can not stream a class at the same time on more than one device."},
    {q:"What are the different options available with cultpass Home?",a:"cultpass Home gives you full access to at home and on-demand content on the app/website. We have options of different durations available, you can check the latest offers and prices on the app/website by clicking on the 'At home' tab, and then clicking on the 'Become a member' option.  "},
    {q:"What are the services accessible to a cultpass Home member?",a:"cultpass Home gives you unlimited access to all Digital At home classes and DIY (on demand) sessions across. This includes unlimited access to fitness, dance, meditation, cooking and health video content and podcasts. A member has an all access pass to celebrity masterclasses, ability to workout with friends and track their energy scores, and monitor their progress in the form of reports.  cultpass Home does not include online therapy consultations as well as non digital offerings of cult.fit."},
    {q:"Can I cancel cultpass Home subscription after purchase?",a:"An already purchased subscription can not be canceled. However, if you’re facing issues with your subscription, you can reach out to customer support to try and fix the same. If your subscription is an auto-renewing subscription, you can always cancel future renewals from the App Store and the amount will not be deducted in the upcoming billing cycle. "},
    {q:"Can I transfer or pause cultpass Home?",a:"You cannot pause or transfer your cultpass Home subscription."},
    {q:"What services does the cultpass Home not include?",a:"cultpass Home does not include therapy consultations as well as non digital offerings of cult.fit."},
    {q:"What are At-Home Classes?",a:"At-home classes let you experience the energy of a group fitness class, led by star trainers from the comfort of your home. We currently offer At- classes across fitness formats like Cardio, HRX, Strength & Conditioning, and Yoga across all 7 days of the week. To make the most of these classes, we recommend using the Energy Meter feature that will give real-time feedback on your workout and help you compete with others working out with you."},
    {q:"I’m new to working out, are At-home classes safe for beginners like me?",a:"At-home classes are tagged basis levels - beginner, intermediate and advanced. In case you are suffering through an injury, chronic pain or medical condition, we recommend checking with a medical expert before attending At-home classes. "},
    {q:"Do I need equipment to attend At-home Classes?",a:"Most of the classes feature bodyweight workouts which means you won’t need equipment or free weights."},
    {q:"What are the types of workouts featured in At-home classes?",a:"Most of our workouts are no-equipment routines across fitness formats like strength, cardio, yoga, HRX and more. We recommend you wear comfortable shoes and keep a napkin and water bottle handy."},
    {q:"Can I download a At-home class that I’ve subscribed to in advance?",a:"All our classes are streamed LIVE - which means you can only access them at a scheduled time over good network connectivity."},
]
  return (
    <>
    <Navbar theme={'gray.800'} />
    <Box mt='12' >
    </Box>
    <Flex direction='column' bg={'#0f1b2b'} pt='10' color='gray.300' >
    <Box>
      <FitnessHero />
      <FitStartSale/>
      <Features/>
      <SliderComponent />
      <Box mt='20'>
      <FitnessPricing/>
      </Box>
      <Box mt='20' w='100%' bg='gray.900' >
      <Faqs faqs={faqs} />
      <Qna/>
      </Box>
      <Footer/>
    </Box>
    </Flex>
    <ScrollBtn/>
    </>
  )
}

export default Fitness