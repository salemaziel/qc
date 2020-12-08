import React from 'react'
import HeroSectionTxtBtnRight from '../../HeroSectionTxtBtnRight'
import SectionCTA from '../Home/sectionCTA'
import TestimonialsAvTopSection from '../../TestimonialsAvTopSection'

import AboutPic from '../../../images/about-pic.jpg'
import FlowerBG from '../../../images/flower-bg.jpg'




const AboutPage = (props) => {
    return(
        <>
              <HeroSectionTxtBtnRight
        bg="white"
        textColor="dark"
        size="md"
        bgImage={FlowerBG}
        bgImageOpacity={0.8}
        title="Nathan Serrato"
        subtitle="We can’t control what happens to us…"
        description1="The world is full of hateful religion, hateful politics, and hateful cultures. The noise can get so loud that it’s so easy for us to make ourselves smaller so we don’t take up spaces—so we aren’t an inconvenience to others."
        description2="Being raised in Catholic and Lutheran churches I was taught to feel guilt around many parts of my identity."
        description3="“Why are you acting like girl?.”
        “Don’t be gay.”
        “Boys don’t do that.”"
        description4="As I grew older, I became angry and resentful towards religion, my family, and even my closest friends. I became lost and alone. I would often wake up in the middle of the night in terror… feeling ashamed of who I was and wanting to do whatever I could to change. I turned to alcohol and unhealthy relationships to cope with the pain. And even as I started seeking out others like me, I would often find myself in “accepting communities” that only encouraged my unhealthy coping mechanisms. More drinking, unstable relationships, and zero ambition..."
        description5="One day I had finally had enough… I was done toning myself down… and I was done trying to fit into what I thought it meant to be gay. I decided only I can define what that means for me. I didn’t have to go clubbing every night, live at the gym, or stay up with the latest fashion trends (although I still enjoy those in moderation). What changed is that I finally gave myself permission to have ambitious career goals, a healthy lifestyle, stable relationships while being the huge dork that I am."
        description6="But it didn’t happen overnight. There were battles I had to fight over and over again..."
        description7="Today, I am happier in my skin than I’ve ever been. As a a Certified Life Coach through the Life Coach Institute of Orange County and Life Purpose Institute, I now help free queer people from the shame prisons that are holding them back from claiming the fulfilling careers and relationships they are worthy of. For me it means working with local conservation groups, launching my own coaching business, and spending time with my family and two beautiful nieces. It means enjoying board game nights with friends, learning the names of native plant species, and expressing myself through movement at my local dance studio. For me it means no longer toning myself down but instead radiating my truth and inspiring others to do the same."

        
    
        /*buttonText="Get Started"
        buttonColor="primary"*/
        image={AboutPic}
        /*buttonOnClick={() => {
          // Navigate to pricing page
          navigateTo("/");
        }}*/
      />
            <TestimonialsAvTopSection
        bg="gray"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Here's what people are saying"
        subtitle=""
      />
      


<SectionCTA
      bg="lbrown"
      textColor="white"
      size="lg"
      bgImage=""
      bgImageOpacity={1}
      title="Coming Out Coaching"
      subtitle="Coming out isn't just about sexual orientation."
      description="Three months of biweekly coaching sessions helps you find your true purpose and own your story. Only you get to decide what and how that is. I'll be there to give you support as you learn patience, self-acceptance, and start working your way out of the shadows. You won't just be challenged to own up to your life goals and dreams—you'll be challenged to find a way to achieve them!"
      style={{ backgroundColor: "#ddc1ce" }}
    />


        </>
    )
}

export default AboutPage
