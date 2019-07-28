import React from "react"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <p>
          Eva is a videographer, writer, and director who is currently working
          as a summer intern for the video team at the Wall Street Journal. She
          graduated in May from Northeastern University in Boston, where she
          studied journalism and media production. She previously worked as a
          videographer at The Boston Globe for a year and a half, where she
          created breaking news videos for social media, short-form
          documentaries, and everything in between. Eva is especially interested
          in documentaries and serial content, and how these mediums can amplify
          marginalized voices and instigate change. She loves a good soft focus,
          iced coffee with an everything bagel, every cat, Kevin MacLeod, female
          villains, magic realism, and magic (not realism).
        </p>
      </div>
    </Layout>
  )
}
