import React from 'react'
import {navigateTo} from 'gatsby'
import HeroSectionTxtBtnRight from '../../HeroSectionTxtBtnRight'
import HeroSectionTextOnly from '../../HeroSectionTextOnly'
import SectionCTA from '../Home/sectionCTA'
import SectionText from '../../sectionText'
import Section from '../../Section'
import FaqAccordianSection from '../../FaqAccordianSection'
import CarouselSection from '../../CarouselSection'
import SectionQuarandate from './sectionQuarandate'

import FlowerBG from '../../../images/flower-bg.jpg'
import Community from '../../../images/community-pic.jpg'
import Hands from '../../../images/community-hands.jpg'

import LogoBG from '../../../images/logo-bg.jpg'


const CommunityPage = (props) => {
    return(
        <>
              <HeroSectionTxtBtnRight
        bg="white"
        textColor="dark"
        size="lg"
        bgImage={FlowerBG}
        bgImageOpacity={0.8}
        title="Queer Conscious North County"
        subtitle='"Each event has a lot of care and effort put into it. In the gentlest ways possible you ask us to make room for ourselves in our own heart and be visible and open about it with each other."'
        description1="- Jeff from Escondido, CA"
        /*buttonText="Get Started"
        buttonColor="primary"*/
        image={Community}
        /*buttonOnClick={() => {
          // Navigate to pricing page
          navigateTo("/");
        }}*/
      />
      <SectionQuarandate
            bg="lbrown"
            textColor="white"
            size="lg"
            bgImage=""
            bgImageOpacity={1}
            title=""
            subtitle="Join our GBTQ+ community in North County San Diego. Our monthly meetups are focused on health, wellness, fun, and community!"
            description=""
            description1=''
            description2=''
            description3=''
            description4=''
          />

            <CarouselSection
        items={[
          {
            image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1607388424/queer-conscious/community-slide/community-slide10_brpzyl.jpg",
            caption: "",
          },
          {
            image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1607388424/queer-conscious/community-slide/community-pic_ssag5a.jpg",
            caption: "",
          },
          {
            image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1607388424/queer-conscious/community-slide/community-slide1_ptz9ax.jpg",
            caption: "",
          },
          {
            image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1607388424/queer-conscious/community-slide/community-slide11_xoyct7.jpg",
            caption: "",
          },
          {
            image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1607388425/queer-conscious/community-slide/community-slide2_ils3y4.jpg",
            caption: "",
          },
          {
            image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1607388425/queer-conscious/community-slide/community-slide4_2_ngypiz.jpg",
            caption: "",
          },
          {
            image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1607388425/queer-conscious/community-slide/community-slide3_gdkw8r.jpg",
            caption: "",
          },
          {
            image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1607388425/queer-conscious/community-slide/community-slide6_pib0r1.jpg",
            caption: "",
          },
          {
            image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1607388426/queer-conscious/community-slide/community-slide8_froffe.jpg",
            caption: "",
          },
          {
            image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1607388426/queer-conscious/community-slide/community-slide7_i86zcs.jpg",
            caption: "",
          },
          {
            image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1607388425/queer-conscious/community-slide/community-slide5_yhl45y.jpg",
            caption: "",
          },
          {
            image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1607388426/queer-conscious/community-slide/community-slide9_jrm2dq.jpg",
            caption: "",
          },
        ]}
      />

<SectionText
      bg="pinkbg"
      textColor="white"
      size="lg"
      bgImage=""
      bgImageOpacity={1}
      title="What People Are Saying"
      subtitle=""
      description=""
      description1='“I never thought it was possible to be surrounded by this many dudes in one space; intentional, uplifting, and vulnerable. Together, we shared our experiences, made connections, and grounded ourselves in healing and self-love."'
      description2='-Juan from Valley Center, CA'
      description3='“We so often lead with our walls and show the world what we want them to see--not who we truly are. This incredible hike lead by [Nathan Serrato] broke down those masks we show the world and allowed vulnerability and connection."'
      description4='Carson from Alpine, CA'
    />
      <FaqAccordianSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage={LogoBG}
        bgImageOpacity={0.1}
        title="Crisis Hotlines"
        subtitle="Don't Be Afraid To Ask For Help."
      />

    {/*<SectionText
      bg="white"
      textColor="dark"
      size="lg"
      bgImage=""
      bgImageOpacity={1}
      title="Crisis Hotlines"
      subtitle="Don't be afraid to ask for help."
      description=""
      description1='Hotlines'
      description2=''
      description3=''
      description4=''
      listTitle1='Crisis Text Line'
      listItem1='24/7 text-based support line'
      listItem2='Text HOME to 741741'
      listTitle2='Transgender Hotline'
      listItem3=''
      listItem4=''
    />*/}

    <Section     
      bg=""
      textColor=""
      size="lg"
      bgImage={Hands}
      bgImageOpacity={1}
      style={{
        height: '40rem'
      }}
      />

<SectionCTA
      bg="dbrown"
      textColor="white"
      size="lg"
      bgImage=""
      bgImageOpacity={1}
      title="Ready For Coaching?"
      subtitle=""
      description="Coaching does not replace therapy. Therapy typically focuses on the past and healing deep emotional wounds, while coaching is focused on self-exploration, goal setting, and removing blockages preventing growth. Many move from therapy into coaching or use both together. Book a call to see if coaching is right for you."
      style={{ backgroundColor: "#ddc1ce" }}
    />

        </>
    )
}

export default CommunityPage