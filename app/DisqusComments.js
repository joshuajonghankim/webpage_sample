import {DiscussionEmbed} from "disqus-react"

const DisqusComments = ({ post }) => {
  const disqusShortname = "wedding-invitation-g9nran4rdt"
  const disqusConfig = {
    url: "https://lsy-khe.vercel.app/",
    identifier: post.id, // Single post id
    title: post.title // Single post title
  }
  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
export default DisqusComments;