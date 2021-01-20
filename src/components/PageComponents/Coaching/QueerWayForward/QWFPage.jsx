import React from "react"
import HeroSectionTxtBtnRight from '../../../HeroSectionTxtBtnRight'
import SectionCTA from '../../Home/sectionCTA'
import HeroSectionCentered from '../../../HeroSectionCentered'
import LeafBG from '../../../../images/leaf-bg.jpg'
import HeroSectionTextOnly from '../../../HeroSectionTextOnly'

import LogoImage from '../../../../images/logo-image.png'

import ClimberSection from "../Challenge/ClimberSection"
import QWF from "../../../../images/original/qwf.jpg"

import OfferSection from "../Challenge/OfferSection"

const QWFPage = (props) => {
    return(
        <>
              <HeroSectionCentered
        bg="white"
        textColor="white"
        size="lg"
        bgImage={LeafBG}
        bgImageOpacity={1}
        title="A Queer Way Forward"
        subtitle="5day Challenge"
        subtitle="8-Week Group Coaching"
        buttonText="Apply Now"
        buttonColor="brown"
        className=""
        /*buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/pricing");
        }}*/
      />
          <HeroSectionTextOnly
          className="font-weight-bold"
      bg="#ddc1ce"
      textColor="dark"
      size="md"
      bgImage=""
      bgImageOpacity={1}
      title=""
      subtitle=""
      description=""
      listTitle1=""
      listItem1=""
      listItem2=""
      listTitle2=""
      listItem3=""
      listItem4=""
      description1="Are you finding it difficult surrounding yourself with an encouraging queer community?"
      description2="Are you having trouble finding the confidence to truly be yourself and ask for what you want?      "
      description3="Are you struggling to find the confidence to say what you really feel or ask for what you want?      "
      description4="Do you often think 'I'm not good enough', 'I could never', or 'I don't trust myself'?     "
      description5="Do you feel limited by stereotypes around gender, sexuality, and body image?      "
      description6="Are you getting in the way of your own love life and career goals?      "
      description7="Or maybe you're lacking the motivation to get out of bed, let alone have goals for your life...      "
      bottomPic={LogoImage}
      bottomPicAlt="Queer Conscious"
    />
    <ClimberSection
    bg=""
    bgImage={QWF}
    bgImageOpacity={1}
    size="md"
    textColor="white"
    
    />
    <OfferSection 
    bg=""
    bgImage=""
    size="md"
    className=""
    offerTopTitle="​Get ready for the holidays with an 8-week group coaching program where you will stop the self-sabotage and find clarity in your values, purpose, and queer identity."
    offerMainTitle="A Queer Way Forward will help you:"
    list1="Stop getting in your own way and start holding yourself accountable"
    list2="Move from self-doubt and insecurity, to clarity in your purpose and courage to get what you want"
    list3="Learn effective communication skills to set healthy boundaries with those around you"
    list4="Become aligned with your vision, values, and queer identity"
    list5="Surround yourself with an encouraging queer community to keep you motivated"
    list6="Develop healthy thought patterns, emotional intelligence, and achievable goals"
    offerValued=""
    offerPrice=""
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

<SectionCTA
      bg="dbrown"
      textColor="white"
      size="lg"
      bgImage=""
      bgImageOpacity={1}
      title="Living Out Coaching"
      subtitle="Coming out happens every day."
      description="Coming out is never a one time event. It happens every time we enter a new work or social environment. Learn to recognize where shame, fear and doubt are preventing you from moving forward with your life. Six months of biweekly coaching will help keep you accountable for taking control of your life. We will work together to set realistic goals to help you live your truth. You'll be challenged to set boundaries for yourself and others, while learning self-love and compassion."
      style={{ backgroundColor: "#ddc1ce" }}
    />

        </>
    )
}

export default QWFPage
