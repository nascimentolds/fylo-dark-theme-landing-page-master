function FooterLinks({link, desc}) {
  return (
    <span className="text-base md:text-sm mb-4 md:m-0">
      <a href={link} className="hover:font-bold">{desc}</a>
    </span>
  )
}

export default FooterLinks;