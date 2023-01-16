import { Box, Flex,Heading,Text } from '@chakra-ui/react'
import React from 'react'
import Footer from './Footer'
const Qna = () => {

    let box1Qna = [
        {
          que: "What is Exercise/Workout?",
          ans: "Exercise or workout is a physical activity that contributes to building and maintaining muscle strength, joint , increasing immunity, improving bone density, and promotes physiological and psychological well-being. It is proved that physically active people who practice home fitness have a higher life span than people who do not invest their time and energy in keeping their body fit."
        },
        {
          que: "Why is Exercise Important?",
          ans: "Physical exercise burns calories and helps in maintaining weight or prevents weight gain. Home exercise is essential to everybody right from when they are small as they develop motor skills and help with their performance later in life. It allows an individual to perform well in sports later and in other activities that include physical fitness. Performing exercise regularly helps people develop good mental health to fight depression and have a positive outlook. Workout acts as a most excellent stress reliever to fight the numerous problems in our daily lives. Home exercise will help a person handle his/her daily chores with more energy as it improves both heart and lung health. Workout delivers oxygen to all the tissues and provides nutrients to all parts of the body. Home workout boosts the endurance levels in the body. Workout promotes better and in-depth sleep. Hence people who have sleep issues should start prioritizing fitness and exercises. Home workout reasonably lifts the emotions and makes us feel brisk throughout the day. This is because they stimulate brain chemicals and make the person feel happy, relaxed, and less anxious. Fitness helps boost confidence and increases a person's self-esteem as it changes the appearance of skin, mind, and body. Home exercise ignites and puts the spark back in a person's sex life as it is a key to treat erectile dysfunction in men. Pregnant women benefit a lot from the home workout as it increases body flexibility and helps them handle labour easily."
        },
        {
          que: "What are the Different Types of Exercise?",
          ans: "There are a great many exercises to adhere to in our daily routines. They have to be picked up after analyzing and determining the purpose of it. The primary reason to select the kinds of exercise is to improve the ability and reduce boredom and the risk of injury. Because when the same pattern is followed day after day, any individual will lose enthusiasm and get fed up with the monotonous workout schedules. In that manner, exercises can be considerably categorized by the following four components: Endurance: This is to sustain any exercise for an extended period. This is further classified into cardiovascular and muscular endurance. Cardiovascular endurance fuels up the body with oxygen by increasing the ability of the heart and lungs. In contrast, muscular endurance builds up the muscles' capacity and permits the system to workout continuously without fatigue. Strength: Strength in fitness is to work against resistance, and it is merely the maximum force that a muscle can exert against a load. This is efficiently brought into effect by training the body to lift weights. These exercises increase muscle mass, increase bone strength and flexibility of joints. Balance: This is to hold the body coordinated and control its movement and position. Balance is a vital point of fitness. It is achieved by having the same position for a long time by adding movement to various poses comfortably. : Flexibility defines the muscle and connective tissues' motion and to what extent or range they can stretch. Doing these exercises will help the body to prevent balance problems, injuries, and other pains linked with joints."
        },
        {
          que: "10 Exercises to be Fit in your Day to Day Life",
          ans: "The most common and widely practised 10 best exercises which help to rock the human body are: Lunges, a  This will increase the strength in the legs and glutes and promotes functional movement. It can be kickstarted by keeping the feet wide apart and arms down to the sides, moving forward and bending one knee, staying parallel to the ground, and repeating. With practice, dumbbells can be incorporated to increase the efficiency of the training program.  This is the one fantastic fitness activity to increase core strength and train shoulder, arms, and triceps muscles. It should be started with the plank position holding the core tight and pulling the shoulders down and back. Care must be taken to have the neck in a neutral place to prevent any strain on those muscles. Beginners can pull this off in the initial stages by lowering the knees and getting the floor support.  Squats concentrate on the lower body and flexibility of both the hips and back. These relatively burn higher amounts of calories, and it is done by standing straight with the feet wider than the shoulders and arms towards the sides. Pushing the hips back, keep doing as if you are sitting and getting up from a chair. Burpees This is a super-effective whole-body workout that increases muscle strength and increases cardiovascular endurance. This is done by squatting and reaching the ground, taking a pushup position, jumping to the feet by hinging the waist, and then repeating the above. Side Planks This is a complete core training exercise done by lying on the sides with one foot stacked on top of the other and the elbow under the shoulder. By contracting the core and stiffening the spine, lift the hips and knees off the ground and repeat it. Planks: This exercise targets the abdominal muscles and the whole body and increases core strength. People with spine problem should do it regularly to treat their ailing backs. It is begun by holding the pushup position with the hands and toes firmly placed on the floor. The back must be straight with the core tight, and then this position can be held for longer time intervals by starting with 30 seconds of the hold. Glute Bridge This is a , and it is done by lying on the floor with knees bent and arms straight, palms facing down with feet flat. The hips are raised off the ground level by squeezing the core, glutes, and hamstrings and then bringing back down again.  Dumbbells are used to train and develop all the muscles involved in the hands and chest. With varieties, even the back muscles can be strengthened using dumbbells. By holding dumbbells, the arms can be extended on the sides, in front, over the head, etc., to concentrate on the different types of places in the body and can be practised as a home workout. Walking Walking is always considered the best exercise of the whole lot as it can be done everywhere without allotting time for it. This is the best cardio that can improve circulation by increasing the heart rate and lowering blood pressure levels. A brisk walk for 15 minutes a day will bring about a miraculous change in the body. Jogging Jogging will increase the body's metabolism when adapted at a different pace at regular intervals depending on the body's fitness levels, and it will also burn plenty of calories, thereby helping maintain the body weight and aiding ."
        }
       ]
    let box2Qna = [
        {
            que: "What are the Benefits of Exercise?",
            ans: "The various health benefits associated with doing fitness exercise is: Prevents Cardiovascular disease: Heart diseases and Strokes are the two main problems striking the whole world frequently and causing more deaths. It is recommended that even a moderate-intensity aerobic workout can lower the risks of these diseases. A regular fitness workout with more intensity will help reduce the blood pressure levels and manage the cholesterol in the body. Treats Type 2 Diabetes: Exercising every day will help manage the insulin levels and reduce the risk of individuals developing diabetes, and in patients suffering from the problem, it will help manage the condition. Prevents Metabolic Syndrome: Metabolic Syndrome is a condition where the person suffers from high blood pressure, high cholesterol, high blood sugar, high triglycerides, and more fat around the waist. With fitness habits, these can be effectively fought and driven out from our bodies.  Reduces the Risk of Cancer: Extensive studies prove that physically active will lower the risk of developing any cancer in the body, and cancer survivors will better their quality of life by improving their physical fitness levels. Strengthens Bones and Muscles: It is imperative to protect the bones, muscles, and joints that provide significant support in life. As we age, all these organs also tend to lose their efficiency and start to grow weak. The workout will help us recover from injuries related to bones, muscles, and joints by developing core strength and repairing the places associated with the problem."
          },
          {
            que: "What are the Disadvantages of Exercise",
            ans: "The disadvantages of exercising are visible if they are done in excess. Fitness exercise can become addictive, which may lead to family issues and psychological disorders. It leads to untold injuries and damages joints in a particular crowd. In very rare cases, it causes premature ageing of the system."
          },
          {
            que: "Do's & Don'ts",
            ans: "Do regular training, make nutrition a priority, stay hydrated, include energy fluids between the training, and incorporate work into the exercise routine. Most important of all here is to remain consistent as that is the only magical key to fitness.  Don't repeat the same exercises and overdo any exercise. Don't drink water immediately after the workout, and most important of all, don't sulk immediately or lose hope if results take time to be seen. Don't enroll for online fitness classes, online exercise classes, or online workout classes without consulting advice from experts if you have any other health problems."
          },
          {
            que: "What to Eat After a Workout?",
            ans: "It is always advised to consume the right nutrients, a balanced proportion of proteins, fat, fibre, and carbohydrates, to help the body recover and build the necessary muscle. And to be adequately hydrated and maximize the results, food containing plenty of water content should be included."
          },
          {
            que: "Is it Effective to Workout at Home?",
            ans: "The answer is a big YES. Online workout classes at home is as effective as a gym without spending time travelling and cutting short the expenses of the gym training fee. Moreover, with the current scenario and the pandemic shaking the whole world, more people are starting to seek fitness workout schedules at home, seeking online fitness classes to stay fit and in shape."
          },
          {
            que: "What to do Post-Workout?",
            ans: "After a rigorous fitness exercise session, one should first cool down and stretch. Online exercise classes provide advice with stretches and cooling down importance.  is as essential as a well-planned workout as it helps in minimizing muscle strain. Then it is necessary to rest for a while for the body to recover and see the best results."
          },
          {
            que: "What is the Right Age to do Exercise?",
            ans: "Anybody between 12 to 14 years or above can start their proper . By regularizing this, any individual can keep exercising throughout their life without any barrier.      • With the exercise routine right from childhood, an individual can keep up the good practice with home workout sessions.      • And it is always never too late to start exercising. And if anybody plans to begin their journey after 50, they have to take appropriate guidance and then kick start it with online gym by Cult.fit"
          },
          {
            que: "What are the Equipment & Accessories Required for a Workout?",
            ans: "The most basic equipment and accessories required while working out are the training bench, dumbbells, treadmill, elliptical, and a stationary bicycle.      • One can also effectively tone their body with a home workout that is widely available on our media platforms without all this equipment.      • The other essential accessories for training include the activity tracker, health drink shakers, moisturizers, hand sanitizers (especially if you are working out in a public gym with the widely spreading covid-19), and weight lifting gloves."
          },{
            que: "Exercises",
            ans: "Exercise enhances or maintains the overall wellness of the body. It supports physical fitness and health. People perform home exercise to improve strength, develop muscles, lose weight, aid growth, and prevent ageing. One should always keep in mind that spending some time on daily fitness is better than not doing anything."
          },
          {
            que: "What does Fitness Mean?",
            ans: "Fitness is a form of good health of the body where an individual is physically and mentally fit. The main objective of fitness is to provide ample energy with less fatigue and the resilience to efficiently perform tasks in our regular routines."
          }
    ]
  return (
    <Flex w='80%' pt='10' m='auto'>
        <Box w='50%' px='4' color='gray.500'>
            {box1Qna.map((el,id)=><Box key={id} my='4' >
                <Heading my='2' fontSize='x-small' >{el.que}</Heading>
                <Text fontSize='x-small' >{el.ans}</Text>
            </Box>)}
        </Box>
        <Box  w='50%' px='4' color='gray.500'>
        {box2Qna.map((el,id)=><Box key={id} my='4' >
                <Heading my='2' fontSize='x-small' >{el.que}</Heading>
                <Text fontSize='x-small' >{el.ans}</Text>
            </Box>)}
        </Box>
    </Flex>
  )
}

export default Qna