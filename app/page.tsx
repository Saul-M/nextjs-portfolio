import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Saul Martinez    |    Portfolio
      </h1>
      <p className="mb-4">
        {`I'm a first-generation college student graduating this December
        with a Bachelor's in Computer Science and a degree in Cybersecurity. 
        My technical skills come from school projects where I've developed 
        software and solved complex problems. Through my role as a Peer Mentor 
        at the Dream Success Center, which supports undocumented students, 
        I’ve sharpened my communication and teamwork abilities, working closely 
        with others in a collaborative setting.

        This blog showcases my projects, skills, and passion for technology 
        as I seek opportunities to connect with companies that value innovation 
        and diversity. I'm eager to contribute my expertise while growing as a 
        developer and cybersecurity specialist.
`       }  
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
