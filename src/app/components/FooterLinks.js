function FooterLinks({link, desc}) {
  return (
    <span className="text-base mb-4">
      <a href={link}>{desc}</a>
    </span>
  )
}

export default FooterLinks;