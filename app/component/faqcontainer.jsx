'use client'

import React, { useState } from 'react'
import Faq from './faq'

     

function FaqContainer() {

    const [open, setOpen] = useState(false)

    const toggle = (index) => {
        if(open === index) {
           return setOpen(null)
        }
        setOpen(index)
    }

    const faqData = [
        {
            title: "What is Netflix?",
            desc: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
        },
        {
            title: "How much does Netflix cost?",
            desc: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦1,200 to ₦4,400 a month. No extra costs, no contracts."
        },
        {
            title: "Wher can i watch Netflix?",
            desc: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
        },
        {
            title: "How do i cancel?",
            desc: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
        },
        {
            title: "What can i watch on Netflix?",
            desc: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
        },
        {
            title: "Is Netflix good for Kids?",
            desc: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.  Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
        }
    ]

  return (
    <section className=' bg-black grid place-content-center text-white my-2 py-20'>
        <h1 className=' text-5xl font-black text-center pb-8'>Frequently Asked Questions</h1>

                <div className=' px-[40px] max-w-6xl'>
            {faqData.map((faq, index) =>{
                return (
                    <Faq open={index === open} key={index} tittle={faq.title} desc={faq.desc} toggle={() => toggle(index)}/>                )
            } 
                

            )}
        </div>
    </section>
  )
}

export default FaqContainer


