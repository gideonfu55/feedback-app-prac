import { FaQuestion } from "react-icons/fa"

const AboutIconLink = () => {
  return (
    <div className="about-link">
      <a href='/about'>
        <FaQuestion size={30} />
      </a>
    </div>
  )
}

export default AboutIconLink