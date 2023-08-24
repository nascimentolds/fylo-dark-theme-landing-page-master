function HeaderLinks({link, desc}) {
  return (
    <span>
      <a href={link} className="hover:underline hover:font-bold">{desc}</a>
    </span>
  )
}

export default HeaderLinks;